import classes from "./Layout.module.css";
import MainNav from "./MainNav";

function Layout(props) {
    return (
        <div className={classes.main}>
            <MainNav />
            <main>{props.children}</main>
        </div>
    );
}
export default Layout;
