import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
// useContext钩子函数
import TextStore from '../../../React-context'
// 引入去支付页面的食物组件
import Checkmeal from './Checkmeal'
// 引入去支付页面的支付组件
import Checkpay from './Checkpay'
// 引入样式
import classes from './index.module.css'

// 获取index.html文件的dom元素
const checkoutRoot = document.getElementById('checkout-root')

export default function Checkout(props) {

    const ctx = useContext(TextStore)

    // 购物车数据遍历数组
    const list = ctx.cartData.items.map(item =>
        <Checkmeal
            key={item.id}
            meal={item}
        />
    )

    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            {/* 退出按钮 */}
            <i className="fa fa-times"
                style={{ fontSize: '50rem' }}
                onClick={() => props.setIsCheckOut(false)}
            ></i>
            <div className={classes.background}>
                <span className={classes.title}>餐品详情</span>
                {/* 需要支付的商品列表 */}
                <div className={classes.list}>
                    {
                        list.length === 0 ?
                            <div className={classes.shoppingCart}>
                                <i className="fa fa-shopping-cart"></i>
                                <span>购物车空空如也,快去选购吧！</span>
                            </div> : list
                    }
                </div>
                {/* 商品总价 */}
                <footer className={classes.footer}>
                    <span className={classes.total}>
                        {ctx.cartData.totalPrice}
                    </span>
                </footer>
            </div>
            {/* 用户即将支付组件 */}
            <Checkpay />
        </div>
        , checkoutRoot)
}
