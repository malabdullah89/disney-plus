import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
           <Background>
               <img src="/images/lion-king.jpg" />
           </Background>
           <ImgTitle>
                <img src="https://i.dlpng.com/static/png/7107787_preview.png" />
           </ImgTitle>

           <Controls>
               <PlayButton>
                   <img src="/images/play-icon-black.png" />
                   <span>PLAY</span>

               </PlayButton>

               <TrailerButton>
               <img src="/images/play-icon-white.png" />
               <span>TRAILER</span>

               </TrailerButton>

               <AddButton>
                    <span>+</span>
               </AddButton>

               <GroupButton>
                   <img src="/images/group-icon.png" />

               </GroupButton>

           </Controls>
           <SupTitle>
               1994 • 88m • Family, Kids • Animation
           </SupTitle>
           <Discription>
           In the Pride Lands of Africa, a pride of lions rules over the animal kingdom from Pride Rock. King Mufasa and Queen Sarabi present their newborn son, Simba, to the gathering animals by Rafiki the mandrill, the kingdom's shaman and advisor.
           </Discription>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`

const ImgTitle = styled.div`
    
    min-height: 170px;
    height: 50vh;
    width: 25vw;
    min-width: 200px;
   

    img {
        
        width: 100%;
        height: 100%;
        object-fit: contain;

    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;
    

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 50px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }


`

const TrailerButton = styled(PlayButton)`
    background: rgba(0 , 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

`

const AddButton = styled.button`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        
        font-size: 30px;
        color: white;
    }
`

const GroupButton = styled(AddButton)`


`

const SupTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Discription = styled.div`
    color: rgb(249, 249, 249);
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;

`