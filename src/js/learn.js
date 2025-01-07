const users = [
  { userId: 1, name: 'Alice' },
  { userId: 2, name: 'Bob' },
  { userId: 3, name: 'Charlie' },
];

const orders = [
  { orderId: 101, userId: 1, product: 'Laptop' },
  { orderId: 102, userId: 2, product: 'Smartphone' },
  { orderId: 103, userId: 1, product: 'Tablet' },
];

const mergedArray = users.map(user => {
    const userOrders = orders.filter(order => order.userId === user.userId)
    return {
        ...user,
        orders: userOrders
    }
})

console.log(mergedArray)