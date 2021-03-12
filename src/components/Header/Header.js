import { Link } from "react-router-dom"
import sun from '../../assets/cloudy.svg'
import 'antd/dist/antd.css';

import { Input } from 'antd';

const Header = ({
        setLocation
    }) => {

    const { Search } = Input;

    return (
        <header className="header">
            <div className="container">
                <Link className="logo" to="/">
                <img src={sun} alt=""/>
                <span>Weather</span>
                </Link>
                 <Search className="input" placeholder="Search Placeste" required onSearch={(e) => setLocation(e)} enterButton />
            </div>            
        </header>
    )
}

export default Header
