import styled from 'styled-components'

export const AppContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: gray;
    width: 100vw;
    height: 100vh;
    max-width: 1088px;
    color: ${(props) => props.color || 'rgb(39, 94, 97)'};
`;

export const ContentContainer = styled.section`
    display: flex;
    background-image: url('/images/wallpaper.png');
    background-color: white;
    background-size: cover;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: 500px){
    background-image: url('/images/wallpapermobile.png');
    background-position: bottom;
  }
`;

