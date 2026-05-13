function Header (props) {
    return (
        <header>
            <img src="./lephinton-logo.png" alt="Lephinton Crochet Logo" className="logo"/>
            <nav>
                <ul>
                   {props.navLinks.map((link, index) => (
                    <li key={index}>{link}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

