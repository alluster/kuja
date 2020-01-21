import React from 'react';
import Head from '../components//head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import { createGlobalStyle } from "styled-components";
import TopNavigation from '../components/TopNavigation';
import PropTypes from 'prop-types';



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
const Layout = ({title, children}) => {
    return(
		<div>
			<Head>
				<title>{ title }</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<header>
				<TopNavigation />
				<Hero />
				<Navigation />
			</header>
			<GlobalStyle />
			{ children }
		</div>
        );
}
    

  Layout.propTypes = {
		children: PropTypes.object,
	  	title: PropTypes.string
  }
    

export default Layout;