import Error from 'next/error'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Index ({ data, page }) {

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(registration => {
                    console.log('registration is successful', registration)
                })
                .catch(err => console.log(err))
        }
    }, [])

    if (data.length === 0) {
        return (
            <Error statusCode={503} />
        )
    }

    return (
        <Layout title="Hacker Next" description="A Hacker News Clone made with Next.js">
            <StoryList data={data} />
            <footer>
                <Link href={`/?page=${page+1}`}>
                    <a>Next page ({page+1})</a>
                </Link>
            </footer>

            <style jsx>{`
                footer {
                    padding: 1em;
                }
                footer a {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #333;
                    text-decoration: none;
                }
            `}</style>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    let { query } = context
    let data, page
    
    try {
        page = Number(query.page) || 1
        const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
        data = await response.json()    
    }
    catch (error) {
        console.log(error)
        data = []
    }
    
    return { props: { data, page } }
}