import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.nav`
    width: 30%;
`;

export const Ul = styled.ul`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    list-style: none;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;
