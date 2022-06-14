import React from 'react';
import ReactDOM from 'react-dom/client';
// 入口文件
import App from './App';
// 基本样式
import "./index.css"

// 设置移动端的适配
// 除以多少，视口的总宽度就是多少rem，现在我们设置的总宽度是750rem
document.documentElement.style.fontSize = 100 / 750 + "vw";

// 渲染虚拟DOM到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);