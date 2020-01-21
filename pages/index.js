import { useEffect, useState } from 'react'
import React from 'react';
import Layout from '../layouts/layout';
import Client from '../connect-shopify';
import Products from '../components/Products';
import theme from "../theme";
import { ThemeProvider } from 'styled-components';
import Container from '../components/Container';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100%;
        height: 100%;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    h1 {
        margin: 0
    }
    img {
        max-width: 100%;
    }
    a {
        all: unset;
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        all: unset;
    }
    button {
        all: unset;
    }
`;
const Home = () => {

	const [productsList, setProducts] = useState([])

	useEffect(() => {
		Client.product.fetchAll()
		.then((product) => {setProducts(product) })
	}, [])
	
		
	return(
		<ThemeProvider theme={theme}>
			<Layout title="Home" />
			<Container>
				{Products(productsList)}
			</Container>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Home
