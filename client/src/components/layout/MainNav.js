import {Link, NavLink} from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}></div>
            <nav>
                <ul>
                    <li>
                        <NavLink   to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users"   >Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addUsers" >Add users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news"  >News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addNews"  >Add News</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav