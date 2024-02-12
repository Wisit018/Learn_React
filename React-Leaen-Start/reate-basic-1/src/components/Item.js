import "./Item.css"
export default function Item(props) {
  const { data, deleteStudent } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <h1>
          {data.id} - {data.name}
        </h1>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  );
}
