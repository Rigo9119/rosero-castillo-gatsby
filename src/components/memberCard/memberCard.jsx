import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImage, Image, CardContent, CardTitle, CardSubtitle, CardDesc } from './member.styled';


const Membercard = ({ nombre, especialidad, descripcion, universidad, src }) => {

    return (
        <Card>
            <CardImage>
                <Image src={src} alt='Imagen'/>
            </CardImage>
            <CardContent>
                <CardTitle>{nombre}</CardTitle>
                <CardSubtitle>{universidad}</CardSubtitle>
                <CardSubtitle>{especialidad}</CardSubtitle>
                <CardDesc>{descripcion}</CardDesc>
            </CardContent>
        </Card>
    );
};


Membercard.propTypes = {
    nombre: PropTypes.string, 
    especialidad: PropTypes.string, 
    descripcion: PropTypes.string, 
    universidad: PropTypes.string
};


export default Membercard;
