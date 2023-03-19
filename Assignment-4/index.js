function avg(data)
{  
    
    const sum = Object.values(data.products).map(item => item.price).reduce((acc, cur)=>{return acc+cur})
    return sum/data.size
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            }
        ],
    })
);