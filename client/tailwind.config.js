export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-light':  '#00C3FF',
        'blue-mid':    '#0077FF',
        'blue-dark':   '#0033CC',
        'fire-orange': '#FF8C00',
        'fire-yellow': '#FFD000',
        'fire-red':    '#FF2200',
        'bg-dark':     '#060C1A',
        'bg-section':  '#091020',
        'bg-card':     '#0D1628',
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body:    ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'fire-grad': 'linear-gradient(135deg, #FFD000, #FF8C00, #FF2200)',
        'sky-grad':  'linear-gradient(135deg, #00C3FF, #0077FF, #0033CC)',
        'logo-grad': 'linear-gradient(135deg, #00C3FF 0%, #0077FF 35%, #FF8C00 70%, #FFD000 100%)',
      },
      animation: {
        'float':     'float 9s ease-in-out infinite',
        'pulse-dot': 'pulseDot 1.5s ease infinite',
      },
      keyframes: {
        float:    { '0%,100%':{ transform:'translateY(0) scale(1)' }, '50%':{ transform:'translateY(-22px) scale(1.06)' } },
        pulseDot: { '0%,100%':{ opacity:'1', transform:'scale(1)' }, '50%':{ opacity:'0.35', transform:'scale(0.65)' } },
      },
      boxShadow: {
        'fire': '0 10px 28px rgba(255,140,0,0.55)',
        'sky':  '0 8px 22px rgba(0,195,255,0.25)',
        'card': '0 16px 40px rgba(0,100,255,0.15)',
      },
    },
  },
  plugins: [],
}
