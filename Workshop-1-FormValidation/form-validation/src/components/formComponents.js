import './formComponents.css'

const FormComponents = () => {
    return (
        <div className="container">
            <form className="form">
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>อีเมล์</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default FormComponents
    
