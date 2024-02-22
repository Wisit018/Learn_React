import { useState } from "react";
import "./App.css";
import Picture from "./components/picture";


function App() {
  const [word, setWord] = useState("");
  const [photos, setPhotos] = useState([]);
  
  function searchImage(e) {
    e.preventDefault();
    if(!word){
      alert("Please enter text to search.")
    }
    else{
      // เรียกใช้งาน API 
      fetchImageFromAPI()
    }
  }
  async function fetchImageFromAPI(){
    const url = `${import.meta.env.VITE_API_URL}?page=1&query=${word}&client_id=${import.meta.env.VITE_API_KEY}&per_page=15`
    const res = await fetch(url)
    const data = await res.json()
    const result = data.results
    if(result.length==0){
      alert("No image found.")
      setWord("")
    }else{
      // แสดงรูปภาพ
      setPhotos(result)
           
    }
  }
  
  return (
    <>
      <h1> Search Image With API</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="Search Image"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {/* แสดงข้อมูล API รูปภาพ */}
      <div className="search-result">
        {photos.map((data,index)=>{
          return <Picture {...data} key={index} />
        })}
      </div>
    </>
  );
}

export default App;
