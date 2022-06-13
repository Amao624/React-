import React from 'react'
// 计算商品数量组件
import Num from '../Num'
// 引入样式
import classes from './index.module.css'

export default function Meal(props) {
    const { src, title, desc, price } = props.meal

    return (
        <>
            <div className={classes.meal}>
                {/* 汉堡图片 */}
                <div className={classes.imgbox}>
                    <img src={src} alt="" />
                </div>
                <div className={classes.descbox}>
                    {/* 汉堡标题 */}
                    <p className={classes.title}>
                        {title}
                    </p>
                    {/* 汉堡描述 */}
                    {
                        props.nodesc ? null :
                            <p className={classes.desc}>
                                {desc}
                            </p>
                    }
                    <div className={classes.price}>
                        {/* 汉堡价格 */}
                        <span className={classes.pricenum}>{price}</span>
                        <Num meal={props.meal} />
                    </div>
                </div>
            </div>
        </>
    )
}
