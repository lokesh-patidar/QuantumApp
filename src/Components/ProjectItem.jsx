import { FaGithub, FaLink } from "react-icons/fa";
import "../Styles/Project.css";
import projectimg from "../assets/projectimg.webp";

const ProjectItem = () => {
    return (
            <div className="projectItem">
                <div className="projectImage">
                    <img src={projectimg} alt="projectimg" /> 
                </div>
                <div className="projectDetails">
                    <h2>Quantum Team Project</h2>
                    <div className="desc">
                        <span>Description</span>
                        <br />
                        GroceryMarket is an online food and grocery store. You will
                        find everything you are looking for with products and brands
                        in our catalogue. Right from fresh Fruits and Vegetables, Rice
                        and Dals, Spices and Seasonings to Packaged products,
                        Beverages, Personal care products, and Meat – we have it all.
                        It is an Individual project built by me.
                    </div>
                </div>
            </div>
    );
};

export { ProjectItem };