import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">The Open Door</a>
        </Link>
        <nav>
          <Link href="/">
            <a className="mr-4">Home</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
