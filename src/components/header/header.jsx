import React from 'react';
import { StyledHeader } from './header.styled';
import NavBar from '../navBar/navBar.jsx'


const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src="" alt="Rosero Castillo Abogados"/>
            </div>
            <NavBar />
        </StyledHeader>
    );
};


Header.propTypes = {

};

export default Header

