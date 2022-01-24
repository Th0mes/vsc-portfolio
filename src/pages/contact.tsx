import { GetStaticProps } from 'next'

const Contact = () => {
  return <h1>Contact</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'Contact' }
  }
}

export default Contact
