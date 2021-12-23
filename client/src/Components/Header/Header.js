

const Header = () => {


    return (
        <nav className="navbar">
            <h1>eCommerce</h1>
            <ul>
                <li>
                    Home
                </li>
                <li className="dropdown">
                    <a>Category</a>
                    <div className="dropdown_content">
                        Clothes
                        Shoes
                        Hats
                        Watches
                    </div>
                </li>
                <li>
                   Contacts
                </li>
               
            </ul>
        </nav>
    );
}




export default Header;