import Mock from 'mockjs'
import homeData from './shouye_data'
import classify from './cateList'

Mock.mock('/home', {code: 0, data: homeData})
Mock.mock('/classify', {code: 0, data: classify})
