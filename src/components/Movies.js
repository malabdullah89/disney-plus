import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectMovies } from '../features/movie/movieSlice'
import {  useSelector } from 'react-redux'

function Movies() {
    const movies = useSelector(selectMovies);



    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                { movies && 
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`detail/${movie.id}`}>
                                <img src={movie.cardImg} />
                            </Link>
                            
                       </Wrap>
                    ))
                    
                }
               
            </Content>

            <h4>New to Disney+</h4>
            <Content>
                <Wrap>
                    <img src="https://www.awesomepostersonline.com/uploads/2018-03-02/2e68cb45/be48282d96c.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://noma.org/wp-content/uploads/2016/08/WALLE.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://i.pinimg.com/originals/00/70/25/0070250aa91eaf693deb1e5c5f4d358b.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81dYVmjI3YL._RI_.jpg" />
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

    @media only screen and (min-width: 480px) and (max-width: 768px) {
       
        grid-template-columns: repeat(2, minmax(0, 1fr));
        
     
      }

    @media only screen and (max-width: 479px) {

        grid-template-columns: repeat(2, minmax(0, 1fr));
        
      }
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