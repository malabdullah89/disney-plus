import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import ReactPlayer from 'react-player'
import './TrialVideo.css'

function TrailView() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState()

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists) {
                setMovie(doc.data());

            } else {

            }
            
           
        })
    }, [])

    return (
    
        <iframe width="1350" height="488" src="https://www.youtube.com/embed/i5qOzqD9Rms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
       
        
    )
}

export default TrailView
