import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';


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
                </body>
            </html>
        );
    }
}


export default MyDocument;