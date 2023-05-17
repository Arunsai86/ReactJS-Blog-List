import './index.css'
import BlogItem from '../BlogItem'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <ul className="blogsList-container">
      {blogsList.map(eachBlogItem => (
        <BlogItem eachBlogItem={eachBlogItem} key={eachBlogItem.id} />
      ))}
    </ul>
  )
}
export default BlogsList
