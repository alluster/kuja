import React, { Component } from 'react';
import Product from './Product';

    let productsList = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });
const Products = () => {
    return (
        <div className="Product-wrapper">
          {productsList}
        </div>
      );
    }

export default Products;