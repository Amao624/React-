import React from 'react'
// 引入样式
import classes from './index.module.css'

// 防抖函数
const fangdou = (callback, time) => {
    let timer = null;
    return (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(this, args)
        }, time)
    }
}

export default function Search(props) {

    const { filterHandler } = props

    // 输入框onChange事件函数
    const onchangeSearch = (e) => {
        const keyWord = e.target.value.trim("");
        filterHandler(keyWord);
    }

    return (
        <div className={classes.Search}>
            <div className={classes.main}>
                <span className={classes.icon}>
                    <i className="fa fa-search"></i>
                </span>
                <input type="text"
                    placeholder='请输入关键字'
                    className={classes.input}
                    onChange={fangdou(onchangeSearch, 500)}
                />
            </div>
        </div>
    )
}
