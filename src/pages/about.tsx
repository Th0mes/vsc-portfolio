import type { GetStaticProps, NextPage } from 'next'

const About: NextPage = () => {
  return <h1>About</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'About' }
  }
}

export default About
