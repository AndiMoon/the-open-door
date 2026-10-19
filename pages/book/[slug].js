import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '../../components/Layout'
import { getAllBooks, getBookBySlug } from '../../lib/books'

export default function BookPage({ meta, mdxSource }){
  return (
    <Layout meta={{ title: meta.title, description: meta.excerpt }}>
      <div className="max-w-3xl mx-auto">
        <img src={meta.cover} alt={meta.title} className="w-full h-96 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{meta.title}</h1>
        <p className="text-gray-600">{meta.author}</p>
        <div className="mt-4">
          <MDXRemote {...mdxSource} />
        </div>
        <div className="mt-6">
          <a href={meta.buy_link} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded">Buy on retailer</a>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
  const books = getAllBooks()
  return {
    paths: books.map(b => ({ params: { slug: b.slug }})),
    fallback: false
  }
}

export async function getStaticProps({ params }){
  const { meta, content } = getBookBySlug(params.slug)
  const mdxSource = await serialize(content)
  return { props: { meta, mdxSource } }
}
