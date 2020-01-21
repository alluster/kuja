import { useEffect, useState } from 'react'
import React from 'react'
import Head from '../components/head'
import Navigation from '../components/Navigation'
import Client from '../connect-shopify'
import Products from '../components/Products';
import Hero from '../components/Hero';
import theme from "../theme";
import { ThemeProvider } from 'styled-components';
import Container from '../components/Container';

const Home = () => {

	const [productsList, setProducts] = useState([])

	useEffect(() => {
		Client.product.fetchAll()
		.then((product) => {setProducts(product) })
	}, [])
	
		
	return(
		<ThemeProvider theme={theme}>
			<Head title="Home" />
			<Hero />
			<Container>
				<Navigation />
				{Products(productsList)}
			</Container>
		</ThemeProvider>
	)
}

export default Home
