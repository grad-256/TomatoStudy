module.exports = {
  target: [
    'ie11',
    {
      objectFit: 'default',
      objectPosition: 'default',
      position: 'default',
    },
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./www/html/**/*.php'],
  },
}
