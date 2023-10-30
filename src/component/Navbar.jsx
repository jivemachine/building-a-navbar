import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <Link path="/">Home</Link>
            <Link path="/about">About</Link>
        </div>
    );
}

export default Navbar;