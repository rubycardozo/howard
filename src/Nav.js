

import logo from './logo.jpg';

function Nav() {
    return (
        <nav className="nav">
            <div className='logocont'>
                <img src={logo} className='logo' ></img>
                <h1>HAMLIN</h1>
            </div>

            <div className='navcontainer'>

                <ul>
                    <li>ABOUT</li>
                    <li>OUR TEAM</li>
                    <li>CHICANERY</li>
                </ul>
            </div>



        </nav>
    );
}

export default Nav;