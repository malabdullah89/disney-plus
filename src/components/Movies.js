import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="https://weareentertainmentnews.com/wp-content/uploads/2020/12/scale.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://www.inkedmag.com/.image/t_share/MTY4ODM2MTkwOTAyOTUzMzk1/mulan-cover.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://creativecloud.adobe.com/content/dam/2020/12/dsc20201210_pixarsoul_ca/Pixar_Soul_Card-900x500.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/36632_lucacomingsoon_tb?$tb$" />
                </Wrap>

                <Wrap>
                    <img src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2018/05/IMG_3185.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2018/12/IMG_3266.jpeg" />
                </Wrap>

                <Wrap>
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2020/09/animal-kingdom-logo-1-scaled.jpeg" />
                </Wrap>

                <Wrap>
                    <img src="https://wildhunt.org/wp-content/uploads/2019/03/qoe-social-1080x1080-830373.jpg" />
                </Wrap>


            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
margin-bottom: 25px;

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`