import React, {userState, useState} from 'react';


const ProductList = () => {
    
    const [products, setProducts] = useState([
        {id:1, name: 'Product 1', price: 100},
        {id:2, name: 'Product 2', price: 200},
        {id:3, name: 'Product 3', price: 300},
        {id:4, name: 'Product 4', price: 400},

    ]);
    const [searchValue, setSearchValue] = useState('');

    const searchProduct = () =>{
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchValue)
        );
        setProducts(filteredProducts);
        setSearchValue(''); // Clear the search input after searching
    }

    const filterProducts = () =>{
        const filterProducts  = products.filter(product => product.price > 100)
        setProducts(filterProducts);
    }

    return (
        <div className="product-list">
        <h2>Product List</h2>
        <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder="Search products..." className='search-bar' />
         <button className='btn btn-secondary' onClick={searchProduct}>Search</button>
         <button onClick={filterProducts}>Filter Data above 100 Rs</button>
            <div className='products'>
                {
                    products.map((product)=>{
                        return (
                            <div key={product.id} className='product'>
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <button className='btn btn-primary'>Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}

export default ProductList;