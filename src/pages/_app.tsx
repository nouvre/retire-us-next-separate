import '../../styles/app.scss'

import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { persistStore } from "redux-persist";
import StripeElements from "@/containers/StripeElements";
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  });

  return (
    <SessionProvider session={session}>
      <StripeElements>
        <Provider store={store}>
          {/* <PersistGate loading={<div>loading...</div>} persistor={persistor}> */}
          <Component {...pageProps} />
          {/* </PersistGate> */}
        </Provider>
      </StripeElements>
    </SessionProvider>
  )
}

