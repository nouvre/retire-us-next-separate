import '../../styles/app.scss'
import "react-notifications-component/dist/theme.css";

import { useState } from 'react'
import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { persistStore, REHYDRATE } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import NextRoute from "@/containers/NextRoute";
import StripeElements from "@/containers/StripeElements";
// import { SessionProvider } from "next-auth/react"
import { ReactNotifications } from "react-notifications-component";

// const PersistGateServer = (props) => props.children


export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  });
  // return (<div></div>)

  return (
    <StripeElements>
      <Provider store={store}>
        {/* <SessionProvider session={session}> */}
        {/* <ReactNotifications /> */}
        {/* <PersistGate loading={"loading"} persistor={persistor}> */}
        <NextRoute router={router} persistor={persistor}>
          <Component {...pageProps} />
        </NextRoute>
        {/* </PersistGate> */}
        {/* </SessionProvider> */}
      </Provider>
    </StripeElements>
  )
}

