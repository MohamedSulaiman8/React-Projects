import logo from '../assets/dog.png'
function Header(){
    return (
        <header>
            <nav>
                <div className='logo'>
                    <img id="logo" src={logo} />
                    <h2>Meme Generator</h2>
                </div>
                <div className='project'>
                    <h2 id='right'>React Course -Project 3</h2>
                </div>
            </nav>
        </header>
    )
}
export default Header;