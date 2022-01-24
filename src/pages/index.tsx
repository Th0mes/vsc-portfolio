import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'Home' }
  }
}

export default Home
