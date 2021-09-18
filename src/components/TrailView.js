import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import ReactPlayer from 'react-player'
import './TrialVideo.css'

function TrailView() {
    return (
    
        <iframe width="1350" height="488" src="https://www.youtube.com/embed/i5qOzqD9Rms"  frameborder="0" allowfullscreen></iframe>
     
    )
}

export default TrailView
