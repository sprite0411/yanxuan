export default {
  rcqtopics (state) {
    //console.log(state)
    let arr = []
    if (state.tabContent.length > 1) {
      const tabContent = state.tabContent
      const topi = tabContent.map(item => item.topics)
      topi.forEach(item => arr.push(...item))
    }

    if (state.autoData.result || state.autoData.result === 10) {
      console.log(state.autoData)
      let data = state.autoData.result
      const top = data.map(item => item.topics)
      top.forEach(item => arr.push(...item))
    }

    return arr
  }
}
