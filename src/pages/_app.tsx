import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import CustomHead from 'src/components/CustomHead'
import Layout from 'src/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CustomHead title={`Thiago Gomes | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
