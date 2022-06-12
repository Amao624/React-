import React from 'react';
// 引入遮罩层
import Backdrop from "../Backdrop";
// 引入样式
import classes from './index.module.css';

export default function Confirm(props) {
    return (
        <Backdrop>
            <div className={classes.Confirm}>
                {/* 提示文字 */}
                <p className={classes.ConfirmText}>{props.confirmText}</p>
                <div>
                    {/* 取消按钮 */}
                    <button
                        onClick={(e) => { props.onCancel(e) }}
                        className={classes.Cancel}>取消</button>
                        {/* 确认按钮 */}
                    <button
                        onClick={() => props.onOk() }
                        className={classes.Ok}>确认</button>
                </div>
            </div>
        </Backdrop>
    );
};
