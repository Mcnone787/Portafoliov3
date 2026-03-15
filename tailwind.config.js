import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1577px',
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': 'rgb(14 136 168)',
                'gray-950': '#0a0a0a',
                'gray-900': '#121212',
                'gray-850': '#1a1a1a',
                'gray-800': '#222222',
                'gray-750': '#2a2a2a',
            },
            animation: {
                'spin-slow': 'spin 15s linear infinite',
                'border-wave': 'border-wave 3s linear infinite',
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
            },
            keyframes: {
                'border-wave': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '15%': { transform: 'scale(1)', opacity: '0.3' },
                    '30%': { transform: 'scale(1.05)', opacity: '0.2' },
                    '50%': { transform: 'scale(1.1)', opacity: '0.1' },
                    '70%': { transform: 'scale(1.15)', opacity: '0.05' },
                    '100%': { transform: 'scale(1.2)', opacity: '0' }
                },
                'fade-in-up': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(20px) scale(0.95)'
                    },
                    '50%': {
                        opacity: '0.5',
                        transform: 'translateY(10px) scale(0.97)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    }
                }
            }
        },
    },

    plugins: [forms],
};
