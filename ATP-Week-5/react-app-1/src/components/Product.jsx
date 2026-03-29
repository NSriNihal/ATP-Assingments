function Product(props){ //{props:{productObj:{}}}
    // console.log(props)
    const { productObj } = props;
    return(
        <div className="border-2 shadow-lg p-4 rounded-lg">
        <h1 className="font-bold text-2xl text-blue-900">{productObj.title}</h1>
        
        <h1 className="font-bold text-xl">${productObj.price.toFixed(2)}</h1>
        <h1 className="text-2xl text-blue-500">{productObj.description}</h1>
        </div>
    )
}

export default Product