import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "CCC" },
  ]);
  //พื้นที่แสดงผล
  return (
    <>
      <h1>จำนวนนักเรียน : {students.length}</h1>
      <ul>
        {students.map((item) => (
          <li key={item.id}>{item.id} - {item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
