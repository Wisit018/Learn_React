import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState } from "react";
import AddForm from "./components/AddForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([  ]);

  function deleteStudent(id) {
    setStudents(students.filter((item) => item.id !== id));
  }

  //พื้นที่แสดงผล
  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudents={setStudents} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
