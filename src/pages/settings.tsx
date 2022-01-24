import { GetStaticProps } from 'next'

const Settings = () => {
  return <h1>Settings</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'Settings' }
  }
}

export default Settings
