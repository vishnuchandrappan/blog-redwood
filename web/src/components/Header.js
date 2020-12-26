import { Link, routes } from '@redwoodjs/router'

export const Header = () => {
  return (
    <header>
      <nav className="nav container">
        <Link to={routes.home()} className="nav__logo">
          RedWood Blog
        </Link>
        <div className="nav__links">
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.posts()}>Posts</Link>
        </div>
      </nav>
    </header>
  )
}
