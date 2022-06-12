import React from 'react'
// 商品计算数量组件
import Num from '../../../Meals/Num'
// 引入样式
import classes from './index.module.css'

export default function Checkmeal(props) {
  
  const { src, title, price } = props.meal

  return (
    <div className={classes.checkmeal}>
      {/* 汉堡图片 */}
      <div className={classes.imgbox}>
        <img src={src} alt="" />
      </div>
      <div className={classes.pricebox}>
        {/* 汉堡标题 */}
        <p className={classes.title}>
          {title}
        </p>
        {/* 汉堡价格 */}
        <div className={classes.price}>
          <Num
            meal={props.meal}
          />
          <span className={classes.pricenum}>￥{price}</span>
        </div>
      </div>
    </div>
  )
}
