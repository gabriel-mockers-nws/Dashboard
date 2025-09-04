import { Link } from "react-router";

export const Header = () => {
    return (
        <nav className="flex gap-5 justify-end text-white bg-neutral-800 shadow-lg px-10 py-4 rounded-b-lg">
            <Link to="/">Vue d&apos;ensemble</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/clients">clients</Link>
        </nav>
    )
}

    export default Header