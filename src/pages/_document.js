import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import Script from 'next/script'


export default function Document () {

  return (
    <Html lang='en'>
      <Head>
        <Script src='assets/plugins/fontawesome/js/all.min.js' />

        <Link rel='stylesheet' href='assets/css/portal.css' />
      </Head>
      <body className='app'>
       
        <Main />
        <NextScript />
      </body>

      <Script src='assets/plugins/popper.min.js'></Script>
      <Script src='assets/plugins/bootstrap/js/bootstrap.min.js'></Script>

      <Script src='assets/plugins/chart.js/chart.min.js'></Script>
      <Script src='assets/js/index-charts.js'></Script>

      <Script src='assets/js/app.js'></Script>
    </Html>
  )
}
