import React, { useState, useReducer } from "react";
// 所有食物组件
import Meals from "./components/Meals";
// 搜索框组件
import Search from "./components/Search";
// 页面下方支付组件
import Pay from "./components/Cart/Pay";
// useContext钩子函数
import TextStore from "./React-context"
// 购物车商品的控制函数
import cartDataReducer from "./reducer/cartData"


// 初始数据（模仿调用接口获取的数据）
const mealDate = [
  { id: '001', title: '汉堡包', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 12, src: '/img/meals/1.png' },
  { id: '002', title: '双层芝士汉堡', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 20, src: '/img/meals/2.png' },
  { id: '003', title: '巨无霸', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 24, src: '/img/meals/3.png' },
  { id: '004', title: '麦辣鸡腿汉堡', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 21, src: '/img/meals/4.png' },
  { id: '005', title: '铁板烧鸡腿汉堡', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 22, src: '/img/meals/5.png' },
  { id: '006', title: '不知道什么汉堡', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 26, src: '/img/meals/6.png' },
  { id: '007', title: '牛肉包', desc: '百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡', price: 28, src: '/img/meals/7.png' },
]

const App = () => {

  const [cartData, cartDataDispatch] = useReducer(cartDataReducer, {
    items: [],
    totalPrice: 0,
    totalAmount: 0,
  })

  // 首页(index)食物状态
  const [mealArray, setMealArray] = useState(mealDate)

  // 搜索过滤数组的函数
  const filterHandler = (data) => {
    const newIndexData = mealDate.filter(
      item => item.title.indexOf(data) !== -1
    )
    setMealArray(newIndexData)
  }

  // 传递的方法与数据
  const Function = {
    cartData,
    cartDataDispatch
  }

  return (
    <TextStore.Provider value={{ ...Function }}>
      {/* 搜索框组件 */}
      <Search filterHandler={filterHandler} />
      {/* 食物总列表组件 */}
      <Meals mealArray={mealArray} />
      {/* 支付功能组件 */}
      <Pay />
    </TextStore.Provider>
  )
}

export default App;
