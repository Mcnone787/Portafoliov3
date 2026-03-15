# Imágenes de Proyectos

Esta carpeta contiene las imágenes de los proyectos del portfolio.

## Estructura de archivos

```
public/images/projects/
├── ecommerce-1.jpg
├── ecommerce-2.jpg
├── ecommerce-3.jpg
├── taskapp-1.jpg
├── taskapp-2.jpg
├── blog-1.jpg
├── blog-2.jpg
├── blog-3.jpg
├── blog-4.jpg
├── dashboard-1.jpg
├── dashboard-2.jpg
├── realestate-1.jpg
├── realestate-2.jpg
├── realestate-3.jpg
├── lms-1.jpg
├── lms-2.jpg
├── lms-3.jpg
└── placeholder.jpg
```

## Cómo agregar imágenes

1. **Formato recomendado**: JPG o PNG
2. **Tamaño recomendado**: 800x600px o similar (16:9 ratio)
3. **Peso máximo**: 500KB por imagen
4. **Nomenclatura**: `nombre-proyecto-numero.extension`

## Ejemplos de nombres de archivo

- `ecommerce-1.jpg` - Primera imagen del proyecto E-commerce
- `ecommerce-2.jpg` - Segunda imagen del proyecto E-commerce
- `taskapp-1.jpg` - Primera imagen del proyecto Task Management
- `blog-1.jpg` - Primera imagen del proyecto Blog Platform

## Configuración en el código

Las imágenes se configuran en el archivo `resources/js/Pages/Home.vue` en el array `projects`:

```javascript
{
    title: 'E-commerce Platform',
    description: '...',
    technologies: ['...'],
    images: [
        '/images/projects/ecommerce-1.jpg',
        '/images/projects/ecommerce-2.jpg',
        '/images/projects/ecommerce-3.jpg'
    ],
    demoUrl: 'https://demo-ecommerce.com',
    codeUrl: 'https://github.com/tu-usuario/ecommerce-project'
}
```

## Imagen placeholder

Si una imagen no se encuentra, se mostrará automáticamente `placeholder.jpg` como fallback.

## Optimización

Para mejor rendimiento:
- Comprime las imágenes antes de subirlas
- Usa formatos modernos como WebP cuando sea posible
- Mantén un tamaño consistente entre todas las imágenes
