export default function BookCard({ book }) {
  return (
    <article className="border rounded-md overflow-hidden shadow-sm bg-white">
      <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-2 text-sm text-gray-700">{book.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <a href={`/book/${book.slug}`} className="text-indigo-600">Read summary</a>
          <a href={book.buy_link} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-3 py-1 rounded">Buy</a>
        </div>
      </div>
    </article>
  )
}
