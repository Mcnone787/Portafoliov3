#!/usr/bin/env node
/**
 * Convierte JPG/JPEG/PNG en public/images a WebP.
 * Uso: node scripts/convert-images-to-webp.mjs
 */
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');
const exts = new Set(['.jpg', '.jpeg', '.png']);

async function findImages(dir, list = []) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
        const full = join(dir, e.name);
        if (e.isDirectory()) {
            await findImages(full, list);
        } else if (exts.has(extname(e.name).toLowerCase())) {
            list.push(full);
        }
    }
    return list;
}

async function convert(path) {
    const out = path.replace(/\.(jpe?g|png)$/i, '.webp');
    const info = await sharp(path)
        .webp({ quality: 82, effort: 4 })
        .toFile(out);
    return { in: path, out, size: info.size };
}

async function convertProfileSizes() {
    const profilePath = join(publicDir, 'profile.jpg');
    const profileWebp = join(publicDir, 'profile.webp');
    const src = await import('fs').then(fs => fs.promises.access(profileWebp).then(() => profileWebp).catch(() => profilePath));
    try {
        await sharp(src)
            .resize(512, 512)
            .webp({ quality: 82, effort: 4 })
            .toFile(join(publicDir, 'profile-512.webp'));
        console.log('  OK /profile-512.webp (para vistas pequeñas)');
    } catch (err) {
        console.log('  (Omitido profile-512.webp:', err.message, ')');
    }
}

async function main() {
    const files = await findImages(publicDir);
    if (files.length) {
        console.log('Convirtiendo', files.length, 'imágenes a WebP...');
    for (const f of files) {
        try {
            const { out, size } = await convert(f);
            console.log('  OK', out.replace(publicDir, ''), size, 'bytes');
        } catch (err) {
            console.error('  ERROR', f, err.message);
        }
    }
    } else {
        console.log('No hay JPG/PNG nuevos en public/images.');
    }
    console.log('Generando variante pequeña de perfil (512px)...');
    await convertProfileSizes();
    console.log('Hecho.');
}

main().catch(console.error);
