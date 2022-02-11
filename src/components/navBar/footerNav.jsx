import React from 'react';
import PropTypes from 'prop-types';
import { NavList, NavItem, StyledLink } from './footerNav.styled';

const FooterNav = ({ links }) => {

    return (
        <NavList>
            {links.map((link, index) => {
                const { to, text } = link.node;

                return (
                    <NavItem key={index}>
                        <StyledLink to={to}>
                            {text}
                        </StyledLink>
                    </NavItem>
                )
            })}
        </NavList>
    )
}


FooterNav.propTypes = {
    links: PropTypes.array
};


export default FooterNav;
