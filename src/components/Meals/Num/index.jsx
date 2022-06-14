import React, { useContext } from 'react'
// 引入样式
import classes from './index.module.css'

// useContext钩子函数
import TextStore from '../../../React-context'

export default function Num(props) {
    const { amount } = props.meal

    // useContext钩子函数方法
    const ctx = useContext(TextStore)

    // 计数按钮增加方法
    const addNum = () => {
        // console.log(props)
        // ctx.addMeals(props.meal)
        ctx.cartDataDispatch({type:"ADDCARTDATA",meal:props.meal})
    }

    // 计数按钮减少方法
    const delNum = () => {
        // ctx.delMeals(props.meal)
        ctx.cartDataDispatch({type:"DELCARTDATA",meal:props.meal})
    }

    return (
        <div className={classes.counter}>
            {/* 减少按钮 */}
            {
                amount > 0 ?
                    <button className={classes.delbtn} onClick={delNum}>
                        <i className="fa fa-minus"></i>
                    </button> : null
            }
            {/* 计数数据 */}
            <span className={classes.sum}>{amount <= 0 ? null : amount}</span>
            {/* 增加按钮 */}
            <button className={classes.addbtn} onClick={addNum}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    )
}
