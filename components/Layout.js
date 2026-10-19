import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, meta = {} }) {
  return (
    <div>
      <Head>
        <title>{meta.title ? `${meta.title} · The Open Door` : 'The Open Door'}</title>
        <meta name="description" content={meta.description || 'Book summaries and links'} />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <p>Affiliate disclosure: Some links may be affiliate links (Amazon / Google Books). We may earn a small commission at no extra cost to you.</p>
          <p className="mt-2">© {new Date().getFullYear()} The Open Door</p>
        </div>
      </footer>
    </div>
  )
}
