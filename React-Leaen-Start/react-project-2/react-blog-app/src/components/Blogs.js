import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <div className="blogs-container">
      <article>
        {blogs.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr></hr>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
