import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <script
          src="https://js.openpay.mx/openpay.v1.min.js"
          type="text/javascript"
        />
        <script
          src="https://js.openpay.mx/openpay-data.v1.min.js"
          type="text/javascript"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
