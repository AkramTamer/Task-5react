import { Link } from "react-router";
const Navbar =()=>{
    return(
        <nav className="py-10 px-5 shadow-2xl">
        <div className="container flex justify-between items-center">
            <Link className="text-3xl font-bold" to={"/"}>EraaSoft</Link>
            <ul className="flex gap-5">
                <li>
                <Link className="text-lg font-bold hover:text-sky-500 duration-300" to="/">Home</Link>
                </li>  
                <li>  
                <Link className="text-lg font-bold hover:text-sky-500 duration-300" to="/about">About</Link>
                </li> 
                <li>  
                <Link className="text-lg font-bold hover:text-sky-500 duration-300" to="/contact">Contact</Link>
                </li>
                <li>  
                <Link className="text-lg font-bold hover:text-sky-500 duration-300" to="/products">Products</Link>
                </li>
            </ul>
            </div>

        </nav>
    )

}
export default Navbar