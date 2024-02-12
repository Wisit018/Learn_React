import logo from "../image/logo.png";
import "./Header.css";
export default function Header(props) {
    return (
        <nav>
            <img src={logo} alt="logo" className="logo" />
            <a href="/">{props.title}</a>
            
        </nav>
    );
}
