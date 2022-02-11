import React from 'react';
import PropTypes from 'prop-types';
import { StyledHero, StyledHeadingOne, StyledDescription } from './hero.styled';

const Hero = ({title, desc}) => {
    return (
        <StyledHero>
            <StyledHeadingOne>
                {title}
            </StyledHeadingOne>
    
            <StyledDescription>
                {desc}
            </StyledDescription>
        </StyledHero>
    );
};


Hero.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
};


export default Hero;
