import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap1>
                <img src="/images/viewers-disney.png" />
            </Wrap1>

            <Wrap2>
                <img src="/images/viewers-marvel.png" />
            </Wrap2>

            <Wrap3>
                <img src="/images/viewers-starwars.png" />
            </Wrap3>

            <Wrap4>
                <img src="/images/viewers-national.png" />
            </Wrap4>

            <Wrap5>
                <img src="/images/viewers-pixar.png" />
            </Wrap5>
        </Container>
    )
}

export default Viewers


const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        display: inline-block;
        
     
      }

      @media only screen and (max-width: 479px) {
        display: inline-block;
      }
`

const Wrap1 = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        margin-top: 25px;
         
      
       }

       @media only screen and (max-width: 479px) {

        margin-top: 25px;
        
      }

   


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        background-image: url("/images/disney-hover.gif");
        background-size: 100%;

    }


`
const Wrap2 = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        margin-top: 25px;
         
      
       }

       @media only screen and (max-width: 479px) {

        margin-top: 25px;
        
      }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        background-image: url("/images/marvel-hover.gif");
        background-size: 100%;

    }


`

const Wrap3 = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        margin-top: 25px;
         
      
       }

       @media only screen and (max-width: 479px) {

        margin-top: 25px;
        
      }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        background-image: url("/images/star-hover.gif");
        background-size: 100%;

    }


`

const Wrap4 = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        margin-top: 25px;
         
      
       }

       @media only screen and (max-width: 479px) {

        margin-top: 25px;
        
      }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        background-image: url("/images/national-hover.gif");
        background-size: 100%;

    }


`

const Wrap5 = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        margin-top: 25px;
         
      
       }

       @media only screen and (max-width: 479px) {

        margin-top: 25px;
        
      }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        background-image: url("/images/pixar-hover.gif");
        background-size: 100%;

    }


`