import Quantum_Logo from "../assets/visual-content-development-topleft.png";
import '../Styles/Home.css';
import Typical from "react-typical";

const HomePage = ({ theme }) => {
    return (
        <div>
            <div className="container">
                <div>
                    <div className="description">
                        <div className="profile-details">
                            <div className="profile-details-role">
                                <h6 style={theme ? {
                                    color: "black"
                                } : {
                                    color: "white"
                                }}>
                                    Well-Come to
                                    <span className="highlighted-text" style={theme ? {
                                        color: "#52022e"
                                    } : {
                                        color: "#c2046c"
                                    }}>
                                        &nbsp;{" Quantum World "}
                                    </span>
                                </h6>
                                <span className="primary-text" style={theme ? {
                                    color: "rgb(19, 5, 70)"
                                } : {
                                    color: "white"
                                }}>
                                    <>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Web Designing",
                                                2000,
                                                "App Development",
                                                2000,
                                                "Moders Tech-Stacks",
                                                2000,
                                                "Website Development",
                                                2000,
                                                "Mobile Applications",
                                                2000,
                                            ]}
                                        />
                                    </>
                                </span>
                                <span className="profile-tag-line" style={theme ? {
                                    color: "black"
                                } : {
                                    color: "#f5f7ba"
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries.
                                </span>
                            </div>

                            <div>
                                <a href='#'><button className="btn primary-btn"> Know About Us </button></a>
                                <a href="#">
                                    <button className="btn highlighted-btn">
                                        Get In Touch
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="imagebox">
                        <div className="profile-picture">
                            <div className="profile-picture-background">
                                <img
                                    src={Quantum_Logo}
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;