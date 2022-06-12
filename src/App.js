import React, { useState } from "react";
// 所有食物组件
import Meals from "./components/Meals";
// 搜索框组件
import Search from "./components/Search";
// 页面下方支付组件
import Pay from "./components/Cart/Pay";
// useContext钩子函数
import TextStore from "./React-context"

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

function App() {
  // 首页(index)食物状态
  const [mealArray, setMealArray] = useState(mealDate)
  // 购物车的数据
  const [cartData, setCartData] = useState({
    items: [],
    totalPrice: 0,
    totalAmount: 0,
  })

  // 搜索过滤数组的函数
  const filterHandler = (data) => {
    const newIndexData = mealDate.filter(
      item => item.title.indexOf(data) !== -1
    )
    setMealArray(newIndexData)
  }

  // 商品按钮增加数量函数(购物车添加商品)
  const addMeals = (data) => {
    // 先来对我们购物车进行浅拷贝
    const newCartData = { ...cartData }

    // 判断购物车里是否存已经存在该商品
    if (newCartData.items.indexOf(data) === -1) {
      // 将我们的data添加到数组中
      newCartData.items.push(data)
      // 初始化商品数量为1
      data.amount = 1
    } else {
      // 增加商品的数量
      data.amount += 1
    }

    // 增加商品总数
    newCartData.totalAmount += 1;
    // 增加总金额
    newCartData.totalPrice += data.price;

    // 更新数据
    setCartData(newCartData)
  }

  // 商品按钮减少数量函数(购物车减少商品)
  const delMeals = (data) => {
    // 先来对我们购物车进行浅拷贝
    const newCartData = { ...cartData }

    // 减少商品总数
    data.amount -= 1;

    // 检查商品数量是否归0
    if (data.amount === 0) {
      // 移除商品
      newCartData.items.splice(newCartData.items.indexOf(data), 1);
    }

    // 减少商品总数
    newCartData.totalAmount -= 1;
    // 减少总金额
    newCartData.totalPrice -= data.price;

    // 更新数据
    setCartData(newCartData);
  }

  // 清空购物车
  const clearCartData = () => {
    // 浅拷贝购物车数据
    const newCartData = { ...cartData }
    // 将购物车中商品的数量清0
    newCartData.items = []
    // newCartData.items.forEach(item => delete item.amount);
    // 初始化总价格和商品总数
    newCartData.totalPrice = newCartData.totalAmount = 0;
    // 更新状态，重新渲染页面
    setCartData(newCartData);
  }

  // 传递的方法与数据
  const Function = {
    cartData,
    addMeals,
    delMeals,
    clearCartData
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
