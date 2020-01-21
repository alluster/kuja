import LineUpCard from '../LineUpCard';
import Gx from '@tgrx/gx';
import React from 'react';


const Products = (productsList) => {
    return(
        productsList.map((item, i) => {
            return (
                <Gx key={i} col={4} breakpoint={550}>
                    <LineUpCard productInfo={item} />
                </Gx>
            );
        })        
    )
};

export default Products;