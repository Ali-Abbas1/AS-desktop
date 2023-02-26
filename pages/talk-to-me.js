import LetsTalk from "../components/LetsTalk"
import Head from "next/head"
export default function Home() {
    return (
        <>
            <Head>
                <title>Talk to me | Alpha Squad</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <LetsTalk />
        </>
    )
}
