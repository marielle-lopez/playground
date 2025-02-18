import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/createPost">Create Post</NavLink>
    </nav>
};

export default NavigationBar;