import Header from './Header'
import Footer from './Footer'
import Head from 'next/dist/shared/lib/head'
export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, user-scalable=no'
                />
                <meta name='description' content='Anh khoa noi that' />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
