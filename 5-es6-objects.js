const name = 'supriya'
const userAge = 23

const user = {
    name: name,
    age: userAge,
    location: 'Newyork'
}

console.log(user)

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    saleprice: undefined,
    rating: 4
}

//const{label,stock,saleprice,rating}= product
//console.log(label)
//console.log(stock)
//console.log(saleprice)
//console.log(rating)

const transaction = (type,{label,stock}) =>{
    console.log(type,label,stock)
}

transaction('order',product)