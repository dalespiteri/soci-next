import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

export default function ({ children }) {
    return (
        <>
            <Head></Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}