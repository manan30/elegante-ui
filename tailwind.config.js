module.exports = {
  content: ['./packages/**/*.tsx'],
  theme: {
    extend: {
      maxHeight: {
        'modal-description': 'calc(100vh - 24rem)'
      },
      colors: {
        primary: {
          DEFAULT: '#3f6298',
          light: '#d0d5e5',
          dark: '#25324a'
        },
        info: { DEFAULT: '#3cc3ea', light: '#d8f0fa', dark: '#295d6e' },
        warning: { DEFAULT: '#e0c245', light: '#fbefd1', dark: '#6a5c27' },
        success: { DEFAULT: '#4bd15e', light: '#d8f5d6', dark: '#2d6331' },
        danger: { DEFAULT: '#e14755', light: '#ffd3d2', dark: '#782a2b' }
      }
    }
  },
  plugins: []
};
