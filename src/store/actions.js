import {reqTabNav,reqManual,reqAuto} from '../api'

export default {
  async acqTabNav ({commit}) {
    const result = await reqTabNav()
    if (result.code === '200') {
      commit('receive_tabNav', result.data)
    }
  },
  async acqTabContent({commit}){
    const result=await reqManual()
    if (result.code==='200'){
      commit('receive_tabContent',result.data)
    }else {
      console.log('error')
    }
  },
  async acqAuto({commit}){
    const result=await reqAuto()
    if (result.code==='200'){
      commit('receive_auto',result.data)
    }else {
      console.log('error')
    }
  }
}
