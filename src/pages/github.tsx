import { GetStaticProps } from 'next'

const Github = () => {
  return <h1>Github</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'Github' }
  }
}

export default Github
