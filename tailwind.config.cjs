/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '490px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        modal: 'rgb(var(--modal) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        icon:'rgb(var(--icon) / <alpha-value>)',
      },

      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        modal: 'rgb(var(--modal) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        icon: 'rgb(var(--icon) / <alpha-value>)',
      },

      fill: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        content: 'var(--content)',
        icon: 'var(--icon)',
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      fontFamily: {
        regular: "Roboto-regular",
        thick: "Roboto-medium",
        thicker: "Roboto-bold",
      },
    },
  },
  plugins: [],
}

