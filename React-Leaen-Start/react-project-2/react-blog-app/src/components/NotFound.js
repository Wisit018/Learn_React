import notfound from "../images/notfound.svg";
export default function NotFound() {
    return (
        <div className="container">
            <h3 className="title">ไม่พบหน้าที่ค้นหา | (404 Page Not Found)</h3>
            <img src={notfound} alt="Not Found Page" />
        </div>
    );
}