import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// styles
import { GlobalStyles } from '../styles/globalStyles'
import { Container } from './main/index.styled';


const MainLayout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
                <Container>
                    { children }
                </Container>
            <Footer />
        </>
    );
};


MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
