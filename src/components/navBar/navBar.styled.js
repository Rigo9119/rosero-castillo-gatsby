import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const Nav = styled.nav`
    background-color: black;
    align-items: center;
    display: ${props => props.openMenu === true ? 'flex' : 'none'};
    flex-flow: column nowrap;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 76px;
    width: 100%;

    @media ${device.tablet} {
        display: flex;
        flex-flow: row nowrap;
        height: initial;
        position: initial;
        width: 50%;
    }

    @media ${device.laptop} {
        width: 40%;
    }
`;

export const NavList = styled.ul`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    min-height: 90vh;
    justify-content: space-around;
    list-style: none;
    padding: 90px 30px;
    width: 100%;

    @media ${device.tablet} {
        flex-flow: row nowrap;
        min-height: initial;
        padding: 0 0;
    }

    @media ${device.laptop} {
        padding: 0 0;
    }
`;

export const ListItem = styled.li`
    padding: 10px 12px;
    text-align: center;
    width: 100%;
    transition-property: background;
    transition-duration: .2s;
    transition-timing-function: ease-in;

    :hover {
        background-color: white;

        > a {
            color: black;
        }  
    }
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;


export const Hamburguer = styled.button`
    align-items: center;
    border: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 40px;
    
    &:focus {
        outline: none;
    }
    
    span {
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${props => props.openMenu === true ? 'rotate(50deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${props => props.openMenu === true ? '0' : '1'};
            transform: ${props => props.openMenu === true ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${props => props.openMenu === true ? 'rotate(-50deg)' : 'rotate(0)'};
        }
    }

    @media ${device.tablet} {
        display: none;
    } 
`;

export const BurguerLine = styled.span`
    border: .15rem solid white;
    margin-bottom: 5px;
    width: 100%;
`;
