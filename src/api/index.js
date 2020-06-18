import ajax from './ajax'


// http://m.you.163.com/topic/v1/find/recAuto.json
const BASE = '/api'
export const reqHomeData = () => ajax('/home')

export const reqClassify = () => ajax('/classify')

export const reqTabNav = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)

export const reqManual = () => ajax(`${BASE}/topic/v1/find/recManual.json`)

export const reqAuto = () => ajax(`${BASE}/topic/v1/find/recAuto.json?page=1`)

