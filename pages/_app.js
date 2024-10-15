// pages/_app.js

import { AuthUserProvider } from '../context/AuthUserContext';

function App({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default App