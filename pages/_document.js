import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en-US">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>

                    <link rel="manifest" href="/manifest.json"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="application-name" content="hacker-next"/>
                    <meta name="apple-mobile-web-app-title" content="hacker-next"/>
                    <meta name="theme-color" content="#f60"/>
                    <meta name="msapplication-navbutton-color" content="#f60"/>
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                    <meta name="msapplication-starturl" content="/"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png"/>
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
} 