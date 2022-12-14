import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Script id="googletagmanager" strategy="afterInteractive" dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MJZ52X8');`}}></Script>
				<Script id="hs-script-loader" async defer src="//js.hs-scripts.com/7437511.js"></Script>
			</Head>
			<body>
				<noscript dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJZ52X8"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
				<Main />
			</body>
			<NextScript />
		</Html>
	);
}
