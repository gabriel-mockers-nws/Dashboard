import { Link } from "react-router";
import Search from "./Search";

export const Header = () => {
    return (
        <nav className="flex gap-5 justify-end text-white bg-neutral-800 shadow-lg px-10 py-4 rounded-b-lg">
            <Link to="/">Vue d&apos;ensemble</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/account">Mon compte</Link>
            <Search />
        </nav>
    )
}

    export default Header