import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  // สร้าง State tasks
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  // สร้าง state title
  const [title, setTitle] = useState("");
  // สร้าง state แก้ไข
  const [editId, setEditId] = useState(null);
  // สร้าง state Theam
  const [theme, setTheme] = useState("light");

  // รูปแบบ 1 เรียกใช้งาน useEffect
  // useEffect(()=>{
  //   console.log("เรียกใช้งาน use Effect");
  // })

  // รูปแบบ 2 เรียกใช้งาน useEffect ครั้งเดียว
  // useEffect(()=>{
  //   console.log("เรียกใช้งาน use Effect");
  // },[])

  // รูปแบบ 3 เรียกใช้งาน useEffect ดักจับ effect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // สร้าง Function ลบ Task
  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณากรอกข้อมูล");
    } else if (editId) {
      // อัพเดทข้อมูล
      const updateTask = tasks.map((item) => {
        // เอาข้อมูลที่เลือกมาแก้ไข
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
