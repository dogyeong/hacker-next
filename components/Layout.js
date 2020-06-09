import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children, title, description, backButton }) => (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="robots" content="noindex, nofollow"/>
            <meta name="viewport" content="width=device-width"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
        <div className="container">
            <nav>
                {backButton && 
                    <span className="back-button" onClick={() => Router.back()}>
                        &#x2b05;
                    </span>}
                <Link href="/">
                    <a>
                        <span className="main-title">Hacker Next</span>
                    </a>
                </Link>
            </nav>

            {children}
        </div>

        <style jsx>{`
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: #f6f6ef;
            }
            nav {
                background: #f60;
                padding: 1em;
            }
            nav > * {
                display: inline-block;
                color: black;
            }
            nav a {
                text-decoration: none;
            }
            nav .main-title {
                font-weight: bold;
            }
            nav .back-button {
                font-size: 0.9rem;
                padding-right: 1em;
                cursor: pointer;
            }
        `}</style>
        <style jsx global>{`
            body {
                background: white;
                font-size: 17px;
            }
            /* spinner 가 디폴트로 오른쪽 상단에 위치하기 때문에 중앙으로 정렬해 준다 */
            #nprogress .spinner {
                top: 50%;
                right: 50%;
            }
        `}</style>
    </div>
)

export default Layout