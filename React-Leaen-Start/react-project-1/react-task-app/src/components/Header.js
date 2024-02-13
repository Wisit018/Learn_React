export default function Header(){
    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
        <div className="theme-container">
            <span>Mode : Light</span>
            <span className="icon">Mode : Dark</span>
        </div>
        </header>
    )
}