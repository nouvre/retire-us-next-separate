import '../../styles/app.scss'
import "react-notifications-component/dist/theme.css";

import Head from 'next/head';
import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { persistStore } from "redux-persist";
import NextRoute from "@/containers/NextRoute";
import { ReactNotifications } from "react-notifications-component";
import { HEAD_DATA } from "@/constants/variables";



export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  });

  const data = (HEAD_DATA.find((item) => item.name === Component.displayName))?.data;

  return (
    <>
      <Head>
        {data?.title &&
          <title>{data?.title}</title>
        }
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"></meta>
        {data?.meta.map((item, _index) => <meta key={_index} name={item.name} content={item.content}></meta>)}
        {data?.link &&
          <link rel="canonical" href={`${data.link}`} ></link>
        }
      </Head>
      <Provider store={store}>
        <ReactNotifications />
        <NextRoute router={router}>
          <Component {...pageProps} />
        </NextRoute>
      </Provider>
    </>
  )
}

