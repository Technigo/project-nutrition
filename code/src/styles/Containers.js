import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    color: ${(props) => props.color || 'rgb(39, 94, 97)'};
    @media (max-width: 500px){
    width: 95vw;
  }
`;

