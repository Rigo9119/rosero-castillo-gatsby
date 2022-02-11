import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FooterNav from '../navBar/footerNav';
import { StyledFooter, FooterLeft, MediaList, MediaItem, MediaItemAnchor, FooterRight, CopyRight } from './footer.styled';


const date = new Date();
const year = date.getFullYear();

const media =['linkedin', 'facebook', 'youtube'];

const Footer = () => {
    return (
        <StyledFooter>
            <FooterLeft>
                <MediaList>
                    {media.map((item, index) => (
                        <MediaItem key={index}>
                            <MediaItemAnchor>
                                {item}
                            </MediaItemAnchor>
                        </MediaItem>))}
                </MediaList>
            </FooterLeft>
            <FooterRight>
                <StaticQuery
                    query={query}
                    render={data => <FooterNav links={data.links.edges} />}
                />
                <CopyRight>
                    @ {year} Rosero Castillo 
                </CopyRight>
            </FooterRight>
        </StyledFooter>
    );
};

export default Footer

export const query = graphql`
    query FooterQuery {
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
