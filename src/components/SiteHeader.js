import Link from 'next/link'
import site from '../data/site'

const SiteHeader = () => {
  return (
    <div className="container">
      <header className="site-header single-column">
        <Link href="/"><a className="blog-title">{site.title}</a></Link>

        <nav className="blog-menu" >
          <Link href={`${site.baseurl}/authors/`}><a>Authors</a></Link>
          <a href="https://github.com/codeheaven-io/codeheaven.io" target="_blank">Github</a>
        </nav>
      </header>
    </div>
  )
}

export default SiteHeader
