export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'sky',
      neutral: 'zinc',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
  },
})
