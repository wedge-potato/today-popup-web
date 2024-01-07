/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    colors: {
      'primary': '#1E1E1E',
      'secondary': '#555555',
      'tertiary': '#7C7C7C',
      'disable-placeholder': '#A5A5A5',
      'link': '#489CFF',
      'coral': {
        10: '#FFEBED',
        20: '#FFCCCF',
        30: '#F89894',
        40: '#F06F6A',
        50: '#FA4D42',
        60: '#FF3C21',
        70: '#F02E22',
        80: '#DE211D',
        90: '#D21715',
      },
      'blue': {
        50: '#0073F9',
      },
      'red': {
        50: '#FF201E',
      },
      'yellow': {
        50: '#FFE500',
      },
      'grey': {
        5: '#FBFBFB',
        10: '#F6F6F6',
        20: '#F1F1F1',
        30: '#E6E6E6',
        40: '#C3C3C3',
        50: '#A5A5A5',
        60: '#7C7C7C',
        70: '#555555',
        80: '#1E1E1E',
      },
    },
    extend: {},
  },
  plugins: [],
}

