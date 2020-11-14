import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

function jsonLdWebsite (){
  const website = `
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "Fernando Padang",
    "url": "https://fernandopadang.tech",
    "sameAs": [
      "https://id-id.facebook.com/Michzit",
      "https://www.instagram.com/fernandopadang",
      "https://www.linkedin.com/in/fernandopadang"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fernandopadang.tech/search/?keyword={search_term_string}&utm_medium=organic&utm_source=google&utm_campaign=sitelink_searchbox",
      "query-input": "required name=search_term_string"
    }
  }
`;
  return (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: website }} />
  );
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, styles: (<>{jsonLdWebsite()}</>)};
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;