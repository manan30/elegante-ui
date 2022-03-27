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
          dark: '#2b4e84'
        },
        secondary: {
          DEFAULT: '#475569',
          light: '#e2e8f0',
          dark: '#1e293b'
        },
        info: { DEFAULT: '#3cc3ea', light: '#d8f0fa', dark: '#149bc2' },
        warning: { DEFAULT: '#e0c245', light: '#fbefd1', dark: '#c2a427' },
        success: { DEFAULT: '#4bd15e', light: '#d8f5d6', dark: '#2db340' },
        danger: { DEFAULT: '#e14755', light: '#ffd3d2', dark: '#c32937' }
      }
    }
  },
  plugins: []
};
