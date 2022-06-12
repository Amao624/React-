import React, { useContext } from 'react'
// 引入context
import TextStore from "../../../../React-context"
// 引入样式
import classes from './index.module.css'

export default function Checkpay() {

    const ctx = useContext(TextStore)

    return (
        <div className={classes.pay}>
            {/* 购物车总价格 */}
            <span className={classes.price}>
                {ctx.cartData.totalPrice}
            </span>
            {/* 去结算功能 */}
            <span className={classes.desc}>去支付</span>
        </div>
    )
}
