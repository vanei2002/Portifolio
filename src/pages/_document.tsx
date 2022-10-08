/* eslint-disable @next/next/no-title-in-document-head */

import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    render() {
        return ( 
            
        <>
            <Head>
                <title> Portifolio </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="icons/body.jpg" />
            </Head>

            <body>
                <Main/>
                <NextScript/>
            </body>
        </>

        )
    }
}