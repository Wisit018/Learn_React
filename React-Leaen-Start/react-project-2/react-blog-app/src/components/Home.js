import home from "../images/home.svg";
export default function Home() {
    return (
        <div className="container">
            <h2 className="title">Home Page | Website</h2>
            {/* <img src="{home}" alt="Home Page" /> */}
            <img src={home} alt="Home Page" />
        </div>
    );
}