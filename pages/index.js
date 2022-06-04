import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

function HomeCard({ title, icon }) {
  return (
    <div>
      <Image src={icon} alt='service_benefits' width="100" height="100"/>
      <h2>{title}</h2>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ESG Metrics</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <main className='container mx-auto flex justify-around'>
        <HomeCard title='Environmental Score' icon='/vercel.svg' />
        <HomeCard title='Social Score' icon='/vercel.svg' />
        <HomeCard title='Governance Score' icon='/vercel.svg' />
      </main>
    </Layout>
  )
}
