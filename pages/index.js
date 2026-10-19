import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllBooks } from '../lib/books'
import BookCard from '../components/BookCard'
import Search from '../components/Search'
import { useState } from 'react'

export default function Home({ books }){
  const [results, setResults] = useState(books)

  const uniqueTags = Array.from(new Set(books.flatMap(b=> b.tags || [])))

  function filterByTag(tag){
    if(!tag) return setResults(books)
    setResults(books.filter(b => (b.tags || []).includes(tag)))
  }

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-4xl font-bold">The Open Door</h1>
        <p className="text-gray-600 mt-2">Summaries of business books and links to buy them.</p>
      </div>

      <Search items={books} onResults={setResults} />

      <div className="mb-4 flex gap-2 items-center">
        <button onClick={()=>filterByTag('')} className="text-sm px-2 py-1 border rounded">All</button>
        {uniqueTags.map(t=> (
          <button key={t} onClick={()=>filterByTag(t)} className="text-sm px-2 py-1 border rounded">{t}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map(book => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>

    </Layout>
  )
}

export async function getStaticProps(){
  const books = getAllBooks()
  return { props: { books } }
}
