import { GetStaticProps } from 'next'

const Projects = () => {
  return <h1>Projects</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'Projects' }
  }
}

export default Projects
