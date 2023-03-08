import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-slate-900'>
        <Main />
        <NextScript />
      <script src="silder.js"></script>
      </body>
    </Html>
  )
}
