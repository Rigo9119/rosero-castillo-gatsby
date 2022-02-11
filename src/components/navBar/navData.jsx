import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavList, ListItem, StyledLink, Hamburguer, BurguerLine} from '../navBar/navBar.styled';


const NavData = ({ links }) => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu)
    return (
        <>
            <Nav openMenu={openMenu}>
                <NavList>
                    {links.map((link, index) => {
                        const { to, text } = link.node;

                        return (
                            <ListItem key={index}>
                                <StyledLink to={to}>
                                    {text}
                                </StyledLink>
                            </ListItem>
                        )
                    })}
                </NavList>
            </Nav>
            <Hamburguer 
                openMenu={openMenu} 
                onClick={() => setOpenMenu(!openMenu)}>
                <BurguerLine></BurguerLine>
                <BurguerLine></BurguerLine>
                <BurguerLine></BurguerLine>
            </Hamburguer>
        </>
    );
};


NavData.propTypes = {
    links: PropTypes.array
};


export default NavData;
