import Vue from 'vue'

export default () => {
  Vue.filter('currency', function (value = 0) {
    if (typeof +value !== 'number') return 0
    const absVal = Math.abs(value).toFixed(2)
    const valInArr = absVal.toString().split('').reverse()
    const newValInArr = valInArr.slice()
    let spaceCounter = 0
    for (let i = 6; i < valInArr.length; i += 3) {
      newValInArr.splice(i + spaceCounter, 0, ' ')
      spaceCounter = spaceCounter + 1
    }
    // }
    const newVal = newValInArr.reverse().join('')

    if (value < 0) {
      return `-$${newVal}`
    } else {
      return `$${newVal}`
    }
  })
}
