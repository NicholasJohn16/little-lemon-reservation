import logo from '../assets/logo.svg';

function Header() {
    return ( 
        <header>
            <a href="/">
                <img src={logo} alt="Little Lemon Logo" />
            </a>
        </header>
    )
}

export default Header;