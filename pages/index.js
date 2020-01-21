import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Navigation from '../components/Navigation'
import Cart from '../components/shopify/Cart'
import Client from '../connect-shopify'
import Products from '../components/Products';
import Hero from '../components/Hero';
import theme from "../theme";
import { ThemeProvider } from 'styled-components';

const Home = () => {

	const [productsList, setProducts] = useState([])

	useEffect(() => {
		Client.product.fetchAll()
		.then((product) => {setProducts(product) })
	}, [])

	const hancleClick = () => {
		console.log("Product added to cart")
	}
	
	
		
	return(
		<ThemeProvider theme={theme}>
			<Head title="Home" />
			<Hero />
			<Navigation />
			{Products(productsList)}
		</ThemeProvider>
	)
}

export default Home
