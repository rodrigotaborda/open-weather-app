import styled from 'styled-components';
import Background from '../../assets/images/back2.jpeg'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    display: grid;
    place-items: center;
    font-family: Work Sans;
    
`;
//Para centrar cuando un padre tiene muchos hijos
//display: flex;
//justify-content: center;
//align-items: center;

export const WeatherCondition = styled.div`
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 600px;
    background: white;
    border: 1px solid black;
    
`;

export const TodaysWeather = styled.div`
    height: 50%;
    width: 100%;
    background: #cdc2ed;
    display: flex;
    flex-direction: column;
`;

export const ExtraData = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50%;
    background: #beb1e2;
`;
export const City = styled.div`
    width: 100%;
    height: 20%;
    background-color: rgba(0,0,0,0.55);
    font-size: 2rem;
    color: white;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    
`;
export const Temperature = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;
export const Description = styled.div`
 
`;
export const Icon = styled.div`
 
`;
export const Degrees = styled.div`
    font-size: 80px;
    font-weight: 600;
    color: white;
`;

export const WeatherDescription = styled.div`
    font-weight: 600;
    color: white;
    font-size: 30px;
`;
export const ExtraItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: white;
`;
export const Number = styled.div`
    font-size: 40px;
    color: white;
`;