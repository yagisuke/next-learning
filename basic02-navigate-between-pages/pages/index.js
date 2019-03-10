import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
    <Link href="/about">
      <div>About Page</div>
    </Link>
    <p>Hello Next.js</p>
    <Link href="/about">
      <button>About Page</button>
    </Link>
  </div>
)

export default Index
