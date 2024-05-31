import Link from 'next/link'
import Head from 'next/head'

const ogImageUrl = 'https://github.com/juniohorniche.png'

const Header = ({ titlePre = '' }) => {
  return (
    <header className="sticky top-0 z-50">
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Junio Horniche</title>
        <meta name="description" content="A personal blog" />
        <meta name="og:title" content="Junio Horniche Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@juniohorniche" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
        <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
          <Link href="/">
            <a
              className={
                'font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'
              }
            >
              .Blog
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                'font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'
              }
            >
              Contact
            </a>
          </Link>
          <Link href="https://juniohorniche.com.br/">
            <a
              className={
                'font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'
              }
            >
              site
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
