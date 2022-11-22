import '../../styles/app.scss'
import "react-notifications-component/dist/theme.css";

import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { persistStore } from "redux-persist";
// import { PersistGate } from 'redux-persist/integration/react';
import StripeElements from "@/containers/StripeElements";
// import { SessionProvider } from "next-auth/react"
import { ReactNotifications } from "react-notifications-component";

// const PersistGateServer = (props) => props.children


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  });

  return (
    <StripeElements>
      <Provider store={store}>
        {/* <SessionProvider session={session}> */}
        <ReactNotifications />
        <Component {...pageProps} />
        {/* </SessionProvider> */}
      </Provider>
    </StripeElements>
  )
}

