import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);
  useEffect(()=>{
    //กรอกข้อมูลชื่อบทความ
    const result = blogs.filter((item)=>item.title.includes(search))
    setFilterBlog(result)
  },[search])
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        
      </div>
      <article>
        {filterBlog.map((item) => (
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
