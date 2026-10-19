import Fuse from 'fuse.js'
import { useMemo, useState } from 'react'

export default function Search({ items, onResults }) {
  const [q, setQ] = useState('')
  const fuse = useMemo(() => new Fuse(items, { keys: ['title','author','excerpt','tags'] }), [items])

  function handleChange(e){
    const v = e.target.value
    setQ(v)
    if(!v) return onResults(items)
    const res = fuse.search(v).map(r => r.item)
    onResults(res)
  }

  return (
    <div className="mb-6">
      <input value={q} onChange={handleChange} placeholder="Search books, authors, tags..." className="w-full border rounded px-3 py-2" />
    </div>
  )
}
