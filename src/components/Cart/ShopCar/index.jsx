import React, { useState, useContext } from 'react'
import Backdrop from '../../UI/Backdrop'
import classes from './index.module.css'

// 引入context
import TextStore from '../../../React-context'
// 引入食物组件
import Meal from '../../Meals/Meal'
// 删除购物车的模态框
import Confirm from '../../UI/Confirm'

export default function ShopCar(props) {
    const ctx = useContext(TextStore)

    // 设置state控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false);

    // 模态框点击取消显示购物车
    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    };

    // 购物车数据遍历数组
    const list = ctx.cartData.items.map(item =>
        <Meal
            key={item.id}
            meal={item}
            nodesc
        />
    )

    return (
        <Backdrop onClick={cancelHandler}>
            {
                showConfirm && <Confirm
                    onCancel={(e) => {
                        e.stopPropagation();
                        setShowConfirm(false)
                    }}
                    onOk={() => {
                        props.setIsShopCar(false)
                        ctx.clearCartData()
                    }}
                    confirmText={"你确定要清空购物车吗!"}
                />
            }
            <div className={classes.main}
                onClick={(e) => e.stopPropagation()}
            >
                <header className={classes.header}>
                    <h2 className={classes.title}
                        onClick={() => {
                            props.setIsShopCar(false)
                        }}
                    >
                        <i className="fa fa-angle-left" style={{
                            marginRight: "20rem",
                        }}></i>
                        返回
                    </h2>
                    {
                        ctx.cartData.totalAmount === 0 ? null :
                            <p className={classes.cars}
                                onClick={() => {
                                    // ctx.clearCartData
                                    setShowConfirm(true)
                                }}
                            >
                                <i className="fa fa-trash" style={{ marginRight: "15rem" }}></i>
                                清空购物车
                            </p>
                    }
                </header>
                {/* 购物车商品列表 */}
                <div className={classes.list}>
                    {
                        list.length === 0 ?
                            <div className={classes.shoppingCart}>
                                <i className="fa fa-shopping-cart"></i>
                                <span>购物车空空如也,快去选购吧！</span>
                            </div> : list
                    }
                </div>
            </div>
        </Backdrop >
    )
}
