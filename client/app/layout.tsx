
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

              <title>Scrap Bazaar</title>
              <meta name="title" content="Scrap Bazaar" />
              <meta name="description" content="Scrap Bazar local scrap buyer in Ahmedabad. We collect all kind of Pasti & metals scrap (Bhangar) like Old News paper, magazine, schoolbooks, waste Iron scrap, aluminum and etc. from both commercial and residential public with market price.
" />


              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://metatags.io" />
              <meta property="og:title" content="Scrap Bazaar" />
              <meta property="og:description" content="Scrap Bazar local scrap buyer in Ahmedabad. We collect all kind of Pasti & metals scrap (Bhangar) like Old News paper, magazine, schoolbooks, waste Iron scrap, aluminum and etc. from both commercial and residential public with market price.
" />
              <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://metatags.io" />
              <meta property="twitter:title" content="Scrap Bazaar" />
              <meta property="twitter:description" content="Scrap Bazar local scrap buyer in Ahmedabad. We collect all kind of Pasti & metals scrap (Bhangar) like Old News paper, magazine, schoolbooks, waste Iron scrap, aluminum and etc. from both commercial and residential public with market price.
" />
              <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

            </head>
            <body style={{ margin : 0 , padding : 0 , width : "100%" , overflowX : 'hidden' }} >
              <Providers>
                {children}
              </Providers>
            </body>
          </html>
          )
}
