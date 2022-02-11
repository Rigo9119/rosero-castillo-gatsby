import React from 'react';
import PropTypes from 'prop-types';
import Membercard from '../memberCard/memberCard';
import { StyledSection, Cards } from './team.styled';


const Team = ({ team }) => {
    
    return (
        <StyledSection>
            <h2>Este es nuestro equipo</h2>
            <Cards>
                {team.map((member, index) => {
                    const {nombre, especialidad, descripcion, universidad} = member.node;

                    return (
                        <Membercard 
                            key={index}
                            nombre={nombre}
                            universidad={universidad}
                            especialidad={especialidad}
                            descripcion={descripcion}
                        />
                    )
                })}
            </Cards>
        </StyledSection>
    );
};


Team.propTypes = {
    team: PropTypes.array
};


export default Team;
