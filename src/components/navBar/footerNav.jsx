import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { NavList, NavItem } from './footerNav.styled';

const FooterNav = ({ links }) => {

    return (
        <NavList>
            {links.map((link, index) => {
                const { to, text } = link.node;

                return (
                    <NavItem key={index}>
                        <Link to={to}>{text}</Link>
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
