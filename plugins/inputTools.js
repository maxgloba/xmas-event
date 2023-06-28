export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('inputTools', {
    removeSpaces: (value) => {
      return value.replace(/\s/g, '').replace(/\D+/g, '')
    },
    filterNums: (value) => {
      return value.replace(/\D+/g, '')
    },
  })
}
