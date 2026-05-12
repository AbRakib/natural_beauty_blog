tailwind.config = {
    theme: {
    extend: {
        fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        },
        colors: {
        bark: {
            50:  '#f9f6f2',
            100: '#f0ebe2',
            200: '#dfd4c3',
            300: '#cab89e',
            400: '#b49577',
            500: '#9e7b5e',
            600: '#876553',
            700: '#6e5145',
            800: '#5b433c',
            900: '#4c3935',
        },
        moss: {
            50:  '#f3f7f0',
            100: '#e2ecdb',
            200: '#c5d9b8',
            300: '#9dbf89',
            400: '#74a15d',
            500: '#55863d',
            600: '#41692d',
            700: '#345327',
            800: '#2c4322',
            900: '#25381e',
        },
        clay: {
            50:  '#fdf6f0',
            100: '#fce8d8',
            200: '#f8cead',
            300: '#f2ab79',
            400: '#ea8244',
            500: '#e36520',
            600: '#d44d15',
            700: '#b03a15',
            800: '#8c3019',
            900: '#712a18',
        },
        stone: {
            50:  '#f8f8f6',
            100: '#efefeb',
            200: '#ddddd6',
            300: '#c5c5bb',
            400: '#a8a89a',
            500: '#8f8f80',
            600: '#747468',
            700: '#5e5e54',
            800: '#4e4e46',
            900: '#42423c',
        },
        },
        animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
        },
        keyframes: {
        fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(24px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        },
        },
    },
    },
}