import { Link } from 'react-router-dom'
const BlogList = ({ blogs }) =>
{
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <Link to={"./blog/" + blog.id} className="blog-preview" key={blog.id} >
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;