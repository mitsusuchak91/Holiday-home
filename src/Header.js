import React, {useState} from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button, ButtonBase } from "@material-ui/core";
import Search from "./Search";
import { CalendarToday, CalendarViewDayRounded } from '@material-ui/icons';
import { Link } from "react-router-dom";
import Host from "./Host";




function Header() {
    const history = useHistory();
    {/*const [showsignUp, setShowsignUp] = useState (false);*/}
    const [showSearch, setShowSearch] = useState (false);
    return (
        <div className='header'>
            <Link to='/'>
            
                <img
                    className="header__icon"
                    src="https://cdn-icons-png.flaticon.com/128/6688/6688137.png"
                    alt=""
                />
            </Link>
                <h1>Holiday Home</h1>
            
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div> 

            <div className='header__search'>
                {showSearch && <Search />}
                <CalendarToday />
                <Button onClick={() => setShowSearch(!showSearch)}
                className='header__searchButton'
            varient='outlined'>Search Dates</Button>
                
            </div>
            
            <div className='header__right'>
            
                <Button variant="btn btn-success" onClick={() => history.push('/Host')}>Become a Host</Button>
                <LanguageIcon />
               {/* <ExpandMoreIcon />
                <Link to="/Login" className="btn btn-primary">Login</Link>
                <Button onClick={() => history.push('/signup')} variant='outlined'>Login</Button>*/}
                <Button variant="btn btn-success" onClick={() => history.push('/login')}>Login</Button>
                <Button variant="btn btn-success" onClick={() => history.push('/signUp')}>Signup</Button>
            </div>
        </div>
    
    )
};

export default Header;

{/* AIR BNB LOGO
https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png*/}