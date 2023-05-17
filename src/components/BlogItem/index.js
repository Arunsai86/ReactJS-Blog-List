import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  return (
    <li className="blog-item">
      <div className="each-blog-title">
        <h1 className="name">{eachBlogItem.title}</h1>
        <p>{eachBlogItem.publishedDate}</p>
      </div>
      <p>{eachBlogItem.description}</p>
    </li>
  )
}
export default BlogItem
