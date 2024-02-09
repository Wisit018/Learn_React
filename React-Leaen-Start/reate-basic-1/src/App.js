import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "CCC" },
  ]);

  function deleteStudent(id) {
    console.log(id);
  }

  //พื้นที่แสดงผล
  return (
    <>
      <h1>จำนวนนักเรียน : {students.length}</h1>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            <p>{item.id} - {item.name}</p>
            <button onClick={()=>deleteStudent(item.id)}>ลบ</button>

          </li>
          
        ))}
      </ul>
    </>
  );
}

export default App;
