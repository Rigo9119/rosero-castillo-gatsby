import * as React from "react"
import { graphql } from "gatsby";
import Hero from '../components/hero/hero';
import Team from "../components/team/team";


export default function IndexPage({ data }) {
  const { titulo, descripcion } = data.hero;
  const { edges } = data.team 
  return (
    <>
      <Hero title={titulo} desc={descripcion} />
      <Team team={edges} />
    </>
  )
}

export const query = graphql`
  query HeroQueryAndTeamQuery {
    hero: datoCmsHero {
      titulo
      descripcion
    }

    team: allDatoCmsTeam {
      edges {
        node {
          nombre
          especialidad
          descripcion
          universidad
        }
      }
    }
  }
`;

