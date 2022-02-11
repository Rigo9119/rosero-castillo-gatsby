import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Ul, StyledLink } from '../navBar/navBar.styled';


const NavData = ({ links }) => {
    return (
        <Nav>
            <Ul>
                {links.map((link, index) => {
                    const { to, text } = link.node;

                    return (
                        <li key={index}>
                            <StyledLink to={to}>
                                {text}
                            </StyledLink>
                        </li>
                    )
                })}
            </Ul>
        </Nav>
    );
};


NavData.propTypes = {
    links: PropTypes.array
};


export default NavData;
