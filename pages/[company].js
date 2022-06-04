import Card from "../components/Card";
import Layout from "../components/Layout";
import Data from '../public/data'

export default function Home({ companies }) {
  return (
    <Layout>
      <main className='container mx-auto flex justify-around'>
        {companies.map((company) => (
          <Card key={company.esg_id} company={company}/>
        ))}
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const company = context.params.company;
  console.log(company)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'esg-environmental-social-governance-data.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.API_KEY
    }
  };
  
  const res = await fetch('https://esg-environmental-social-governance-data.p.rapidapi.com/search?q='+company, options)
  const companies = await res.json()

  // const companies = Data //For testing

  return {
    props: { companies }, // will be passed to the page component as props
  }
}
