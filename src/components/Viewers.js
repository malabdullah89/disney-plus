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
`

const Wrap1 = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


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
        background-image: url("https://i.gifer.com/Jdb.gif");
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
        background-image: url("https://media3.giphy.com/media/10ADhj1QPawFna/200.gif");
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
        background-image: url("https://thumbs.gfycat.com/FeminineFlawedAlbertosaurus-size_restricted.gif");
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
        background-image: url("https://thumbs.gfycat.com/ConfusedCommonHeron-size_restricted.gif");
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
        background-image: url("https://data.whicdn.com/images/312930184/original.gif");
        background-size: 100%;

    }


`