# Portafolio personal – Adrià M.D.

Portafolio web con proyectos, sobre mí y contacto. Desplegado en **[www.adriamd.com](https://www.adriamd.com)**.

## Stack

- **Backend:** [Laravel](https://laravel.com) 12  
- **Frontend:** [Vue 3](https://vuejs.org) + [Inertia.js](https://inertiajs.com)  
- **Estilos:** [Tailwind CSS](https://tailwindcss.com)  
- **Build:** [Vite](https://vitejs.dev)

## Requisitos

- PHP 8.2+
- Composer  
- Node.js 20+ (recomendado; también funciona con 18 usando `--legacy-peer-deps`)  
- npm o pnpm  

## Instalación local

```bash
# Clonar
git clone https://github.com/Mcnone787/Portafoliov3.git
cd Portafoliov3

# Dependencias PHP
composer install

# Dependencias JS (Node 18: usar --legacy-peer-deps)
npm ci
npm run build

# Configuración
cp .env.example .env
php artisan key:generate

# Opcional: enlace para storage público (si usas subidas)
php artisan storage:link
```

Las **imágenes** del portafolio (`public/images/`) no están en el repositorio. Para ver proyectos con imágenes en local, añade las carpetas/archivos necesarios en `public/images/` (por ejemplo copiándolas del servidor o de un backup).

## Desarrollo

```bash
# Servidor Laravel
php artisan serve

# En otra terminal: build de assets en modo watch
npm run dev
```

Abre `http://localhost:8000`.

## Despliegue

En producción, el documento raíz del servidor web debe apuntar a la carpeta **`public`**. Ejemplo Apache:

```apache
DocumentRoot /ruta/al/proyecto/public
```

Después de desplegar: `php artisan config:cache`, `php artisan view:cache` y permisos de escritura en `storage/` y `bootstrap/cache/` para el usuario del servidor web.

## Licencia

Proyecto personal. Código bajo [MIT](https://opensource.org/licenses/MIT). Las imágenes y contenidos del portafolio son de uso personal.
