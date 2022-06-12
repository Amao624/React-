import React from 'react'
// 引入食物组件
import Meal from "./Meal"
// 引入样式
import classes from "./index.module.css"

export default function Meals(props) {
    return (
        <div className={classes.meals}>
            {/* 遍历index食物数据 */}
            {
                props.mealArray.map(item =>
                    <Meal
                        key={item.id}
                        meal={item}
                    />
                )
            }
        </div>
    )
}
