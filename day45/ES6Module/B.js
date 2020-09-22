import {plus,m} from './A';// 导入
import *as A from './A';// 这时的A变量是一个对象，存储的是导入的东西

import ss from './C';// 和导出的export default连用
console.log(plus,m);