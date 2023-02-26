import AlphaWayHeader from "../components/AlphaWayHeader"
import PartnersNotClients from "../components/PartnersNotClients"
import Head from "next/head"
export default function Home() {
    return (
        <>
            <Head>
                <title>The Alpha Way | Alpha Squad</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <AlphaWayHeader />
            <PartnersNotClients />
        </>
    )
}
