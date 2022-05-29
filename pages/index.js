import Head from 'next/head';
import Homepage from '../Components/Homepage/index';
import Footer from '../Components/Footer/index'
export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Princelab</title>
      </Head>
      <Homepage />
      <Footer />
    </div>
  )
}
