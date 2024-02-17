import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog Collection</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" //style={{color:"white",backgroundColor: "aqua",borderRadius:"8px"}}
                >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;