import Head from 'next/head'
import Layout from '../Components/layout'
export default function Home() {
  return(
    <Head>
      <Layout>
        <ul>
        <li><a href="/movies">20 meilleurs films</a></li>
        <li><a href="/top">100 meilleurs films</a></li>
        </ul>  
      </Layout>
    </Head>
  )
}


