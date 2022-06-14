export default function cartDataReducer(state, action) {
    const newCartData = { ...state };

    const { type, meal } = action

    switch (type) {
        case "ADDCARTDATA":
            // 判断购物车里是否存已经存在该商品
            if (newCartData.items.indexOf(meal) === -1) {
                // 将我们的data添加到数组中
                newCartData.items.push(meal)
                // 初始化商品数量为1
                meal.amount = 1
            } else {
                // 增加商品的数量
                meal.amount += 1
            }
            // 增加商品总数
            newCartData.totalAmount += 1;
            // 增加总金额
            newCartData.totalPrice += meal.price;
            return newCartData

        case "DELCARTDATA":
            // 减少商品总数
            meal.amount -= 1;
            // 检查商品数量是否归0
            if (meal.amount === 0) {
                // 移除商品
                newCartData.items.splice(newCartData.items.indexOf(meal), 1);
            }
            // 减少商品总数
            newCartData.totalAmount -= 1;
            // 减少总金额
            newCartData.totalPrice -= meal.price;
            return newCartData

        case "CLEARCARTDATA":
            // 归零商品的数量
            newCartData.items.forEach(item => delete item.amount)
            //   // 将购物车中商品的数量清0
            newCartData.items = []
            //   // 初始化总价格和商品总数
            newCartData.totalPrice = newCartData.totalAmount = 0;
            return newCartData

        default:
            return state
    }
}