import React, { useContext } from 'react'
// 引入context
import TextStore from "../../../../React-context"
// 引入样式
import classes from './index.module.css'

export default function Checkpay(props) {

    const ctx = useContext(TextStore)

    // 模拟支付完成
    const submitHandler = () => {
        ctx.clearCartData()
        props.setIsCheckOut(false)
        console.log(ctx.cartData)
    }

    return (
        <div className={classes.pay}>
            {/* 购物车总价格 */}
            <span className={classes.price}>
                {ctx.cartData.totalPrice}
            </span>
            {/* 去支付功能 */}
            <span
                className={classes.desc}
                onClick={submitHandler}
            >去支付</span>
        </div >
    )
}
