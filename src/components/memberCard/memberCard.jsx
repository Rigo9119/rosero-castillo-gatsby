import React from 'react';
import PropTypes from 'prop-types';


const Membercard = ({ nombre, especialidad, descripcion, universidad }) => {

    return (
        <div>
            <p>{nombre}</p>
            <p>{universidad}</p>
            <p>{especialidad}</p>
            <p>{descripcion}</p>
        </div>
    );
};


Membercard.propTypes = {
    nombre: PropTypes.string, 
    especialidad: PropTypes.string, 
    descripcion: PropTypes.string, 
    universidad: PropTypes.string
};


export default Membercard;
