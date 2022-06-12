import React from 'react'
import ReactDOM from 'react-dom'
// 引入样式
import classes from './index.module.css'

// 获取页面的dom元素
const backBropRoot = document.getElementById('backdrop-root')

export default function Backdrop(props) {

    return ReactDOM.createPortal(
        <div className={`${classes.BackBrop} ${props.className}`}
            {...props}
        >
            {props.children}
        </div>
        , backBropRoot)
}
