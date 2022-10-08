import { ContextPagsProvider } from '../contexts/ContextsPags'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    
    <ContextPagsProvider>
        <Component {...pageProps} />
    </ContextPagsProvider>

  )
}

export default MyApp
