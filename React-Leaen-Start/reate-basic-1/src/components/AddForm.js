import { useState } from "react";
import "./AddForm.css";

export default function AddForm(props) {
  const { students, setStudents } = props;
  const [name, setName] = useState("");
  const [gender,setGender]=useState("male")
  function saveStudent(e) {
    e.preventDefault();
    if (!name) {
      alert("กรุณากรอกชื่อนักเรียน");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender:gender
      };
      setStudents([...students,newStudent])
      setName("");
      setGender("")
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>ชื่อนักเรียน</label>
        {/* <input type="text" name="name" value={name} onChange={(e)=>setName} /> */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
        </select>
        <button type="submit" className="btn-add">
          บันทึก
        </button>
      </form>
    </section>
  );
}
