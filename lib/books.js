import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const booksDir = path.join(process.cwd(), 'content', 'books')

export function getAllBooks(){
  const files = fs.readdirSync(booksDir).filter(f => f.endsWith('.mdx'))
  const books = files.map(filename => {
    const raw = fs.readFileSync(path.join(booksDir, filename),'utf8')
    const { data } = matter(raw)
    return {
      ...data,
      slug: filename.replace(/\.mdx$/, '')
    }
  })
  // sort by title
  books.sort((a,b)=> a.title.localeCompare(b.title))
  return books
}

export function getBookBySlug(slug){
  const full = path.join(booksDir, `${slug}.mdx`)
  const raw = fs.readFileSync(full,'utf8')
  const { data, content } = matter(raw)
  return { meta: data, content }
}
