import Error from 'next/error'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'

export default function Index ({ data }) {
    if (data.length === 0) {
        return (
            <Error statusCode={503} />
        )
    }

    return (
        <Layout title="Hacker Next" description="A Hacker News Clone made with Next.js">
            <StoryList data={data} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    let data
    
    try {
        const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1')
        data = await response.json()    
    }
    catch (error) {
        console.log(error)
        data = []
    }
    
    return { props: { data } }
}