import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="w-full flex justify-between px-8 py-6 border-b border-stone-200">
            {/* left side */}
            <Link to="/" className="font-heading text-xl text-ink hover:text-gold transition-colors duration-300 ">Khayalon Ka Archive</Link>

            {/* Right side */}

            <div className="flex items-center gap-8 font-ui text-sm text-inklight">
                <Link to="/" className="hover:text-ink transition-colors duration-300">Writings</Link>
                <Link to="/" className="hover:text-ink transition-colors duration-300">About Me</Link>
            </div>
        </nav>
    )
};

export default Navbar;