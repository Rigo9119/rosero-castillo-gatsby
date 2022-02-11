import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import NavData from './navData';


const NavBar = () => {
    return (
        <StaticQuery 
            query={query}
            render={data => <NavData links={data.links.edges}/>}
        />
    )
}


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
