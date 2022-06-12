import React, { useState, useContext } from 'react'
// 购物车详情页-去结算
import ShopCar from '../ShopCar'
// 购物车详情页-去支付
import Checkout from "../Checkout"
// 引入context
import TextStore from "../../../React-context"
// 引入样式
import classes from './index.module.css'
// 引入购物车图片
const bag = "/img/bag.png"

export default function Pay() {

    // 购物车显示状态
    const [isShopCar, setIsShopCar] = useState(false)
    // 结算页面显示状态
    const [isCheckOut, setIsCheckOut] = useState(false)

    const ctx = useContext(TextStore)

    return (
        <div className={classes.pay}>
            <div onClick={() => { setIsShopCar(prevState => !prevState) }} className={classes.box}>
                {/* 购物车图片logo */}
                <img src={bag} alt="购物袋" className={classes.bag} />
                {/* 购物车商品总数 */}
                {
                    ctx.cartData.totalAmount === 0 ? null :
                        <span className={classes.shopNumber}>{ctx.cartData.totalAmount}</span>
                }
                {/* 购物车总价格 */}
                {
                    ctx.cartData.totalPrice === 0 ?
                        <span className={classes.thing}>未选购商品</span> :
                        <span className={classes.price}>
                            {
                                isCheckOut ? "合计￥" + ctx.cartData.totalPrice : "￥" + ctx.cartData.totalPrice
                            }
                        </span>
                }
            </div>
            {/* 去结算功能 */}
            <div className={classes.gotopay}>
                {
                    ctx.cartData.totalAmount === 0 ?
                        <span className={classes.nodesc} >去结算</span> :
                        <span className={classes.desc} onClick={() => setIsCheckOut(true)}>去结算</span>
                }
            </div>
            {/* 查看购物车详情 */}
            {isShopCar && <ShopCar setIsShopCar={setIsShopCar} />}
            {/* 购物车去支付组件 */}
            {isCheckOut && <Checkout setIsCheckOut={setIsCheckOut}/>}
        </div >
    )
}
