# Caché y rendimiento (PageSpeed ~90)

Para que PageSpeed deje de marcar **"Usar tiempos de vida de caché eficientes"** y suba la puntuación, configura la caché según tu entorno.

**Comprobación:** Si trabajas por SSH en el servidor, puedes verificar las cabeceras con:
`curl -sI "https://tudominio.com/build/assets/alguno.js" | grep -i cache`
Deberías ver `cache-control: public, max-age=31536000, immutable` en JS/CSS/webp.

---

## 1. Cloudflare (recomendado si usas Cloudflare)

1. **Dashboard** → **Caching** → **Configuration**.
2. **Caching Level**: `Standard` (o `Cache Everything` si quieres cachear también HTML; para solo estáticos, `Standard` está bien).
3. **Browser Cache TTL**: `Respect Existing Headers` (así se respetan las cabeceras que envía tu servidor) o, si prefieres forzar, `1 month` para estáticos.
4. **Page Rules** (opcional, para cachear más tiempo solo los estáticos):
   - URL: `*adriamd.com/build/*` o `*adriamd.com/images/*`
   - Setting: **Cache Level** = Cache Everything, **Edge Cache TTL** = 1 month.

Con **Respect Existing Headers**, el servidor debe enviar `Cache-Control` (ver Apache/Nginx abajo).

---

## 2. Apache (`.htaccess` ya está en `public/.htaccess`)

El proyecto ya incluye cabeceras en `public/.htaccess`:

- JS, CSS, fuentes, webp: `max-age=31536000, immutable`
- jpg, png, etc.: `max-age=604800` (1 semana)

Comprueba que:

- El **document root** del dominio apunte a la carpeta `public/` (no a la raíz del proyecto).
- **mod_headers** esté activo:  
  `sudo a2enmod headers` y reiniciar Apache.

---

## 3. Nginx (si no usas Apache)

Si el servidor es Nginx, `.htaccess` no se usa. Añade algo así dentro del `server` que sirve `adriamd.com`:

```nginx
location ~* \.(js|css|woff2?|ttf|eot|ico|svg|webp)(\?.*)?$ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}

location ~* \.(jpg|jpeg|png|gif|avif)(\?.*)?$ {
    add_header Cache-Control "public, max-age=604800, stale-while-revalidate=86400";
}

location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

Ajusta `root` y `try_files` si tu config actual es distinta.

---

## 4. Comprobar que la caché funciona

1. Abre **DevTools** → pestaña **Network**.
2. Recarga la página.
3. Pulsa sobre un recurso de `build/` o `images/` (por ejemplo un `.js` o `.webp`).
4. En **Response Headers** debe aparecer algo como:  
   `Cache-Control: public, max-age=31536000, immutable` (o el valor que hayas configurado).

Si no ves `Cache-Control`, la petición no está pasando por la regla de caché (revisa document root, Cloudflare y que mod_headers/nginx estén bien configurados).
