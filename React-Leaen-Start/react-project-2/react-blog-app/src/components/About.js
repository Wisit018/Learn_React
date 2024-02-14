import about from "../images/about.svg";
export default function About() {
    return (
        <div className="container">
            <h1 className="title">About Page | Website</h1>
            <img src={about} alt="About Page" />
        </div>
    );
}