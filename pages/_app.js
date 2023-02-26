import Layout from "../components/Layout"
import "../styles/globals.css"
import Head from "next/head"


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Alpha Squad</title>
            </Head>
            <div className="scroll bg-black scroll-smooth">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </>
    )
}

export default MyApp
