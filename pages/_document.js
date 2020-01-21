import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createGlobalStyle } from "styled-components";
import React from 'react';

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

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta property="og:site_name" content="Kuja" />
                    <link rel="icon" type="image/png" href="/favicon.ico" sizes="48x48" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <GlobalStyle />
                </body>
            </html>
        );
    }
}


export default MyDocument;