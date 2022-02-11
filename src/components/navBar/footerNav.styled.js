import { Link } from 'gatsby';
import styled from "styled-components";
import { device } from '../../styles/mediaQueries';

export const NavList = styled.ul`
    align-items: center;
    background-color: black ;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    
    @media ${device.laptop} {
        width: 60%;
    }
`;

export const NavItem = styled.li`
    list-style: none;
`;

export const StyledLink = styled(Link)`
    color: gray;
`;
