import styled from 'styled-components'

export const AppContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100vw;
    height: 100vh;
    max-width: 1088px;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    color: ${(props) => props.color || 'rgb(39, 94, 97)'};
    @media (max-width: 500px){
    width: 95vw;
  }
`;

