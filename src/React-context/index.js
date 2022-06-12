/* 
    context相当于一个公共的存储空间
*/

import React from 'react';

export default React.createContext({
    shop: [],
    shopNumber: 0,
    shopPrice: 0,
    delMealsNumber: () => { },
    addMealsNumber: () => { },
})