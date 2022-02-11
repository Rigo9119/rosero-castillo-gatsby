import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
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

const NavBar = () => {
    return (
        <StaticQuery 
            query={query}
            render={data => <NavData links={data.links.edges}/>}
        />
    )
}

NavBar.propTypes = {
    links: PropTypes.array
};

export default NavBar;

export const query = graphql`
    query NavBarQuery {
        links: allDatoCmsNavbar {
            edges {
                node {
                    to
                    text
                }
            }
        }
    }
`;
