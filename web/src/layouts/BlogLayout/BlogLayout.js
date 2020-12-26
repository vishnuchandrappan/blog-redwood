import { Fragment } from 'react'
import { Header } from 'src/components/Header'

const BlogLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
    </Fragment>
  )
}

export default BlogLayout
