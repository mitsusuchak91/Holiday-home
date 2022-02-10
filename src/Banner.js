import React, {useState} from 'react';
import './Banner.css';
import { Button, ButtonBase } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner () {
    const history = useHistory();
    {/*const [showSearch, setShowSearch] = useState (false);*/}
    return (
        <div className='banner'>
            {/*<div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)}
                className='banner__searchButton'
    varient='outlined'>Search Dates</Button>

            </div>*/}
            
            <div className='banner__info'>
            <h1>Get out and stretch your imagenation!</h1>
            <h4>Plan a different kind of getaway to uncover the hidden gems near you.</h4>
            <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            

            </div>
        </div>
    )
}

export default Banner;
