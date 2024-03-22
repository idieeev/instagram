import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import pages
import editProfile from '../../pages/editProfile/editProfile'
import Explore from '../../pages/Explore/Explore'
import Home from '../../pages/Home/Home'
import Message from '../../pages/Message/Message'
import Natification from '../../pages/natification/Natification'
import Profile from '../../pages/Profile/Profile'
import Reels from '../../pages/Reels/Reels'
import Security from '../../pages/Security/Security'
import Settings from '../../pages/Settings/Settings'
import { Layout } from '../../Layout/Layout'

const Auth = ({page , ...props}) => {
    const navigate = useNavigate()
    if(!localStorage.getItem("access_token"))
    {
        useEffect(() =>
        {
            navigate("/")
        } , [])
    }
    else if(page == "editProfile" && localStorage.getItem("access_token"))
    {
        return(
            <editProfile/>
        )
    }
    else if(page == "Explore" && localStorage.getItem("access_token"))
    {
        return(
            <Explore/>
        )
    }
    else if(page == "Home" && localStorage.getItem("access_token"))
    {
        return(
            <Home/>
        )
    }
    else if(page == "Message" && localStorage.getItem("access_token"))
    {
        return(
            <Message/>
        )
    }
    else if(page == "Natification" && localStorage.getItem("access_token"))
    {
        return(
            <Natification/>
        )
    }
    else if(page == "Profile" && localStorage.getItem("access_token"))
    {
        return(
            <Profile/>
        )
    }
    else if(page == "Reels" && localStorage.getItem("access_token"))
    {
        return(
            <Reels/>
        )
    }
    else if(page == "Security" && localStorage.getItem("access_token"))
    {
        return(
            <Security/>
        )
    }
    else if(page == "Settings" && localStorage.getItem("access_token"))
    {
        return(
            <Settings/>
        )
    }
    else if(page == "Basic" && localStorage.getItem("access_token"))
    {
        return(
            <Layout/>
        )
    }
}

export default Auth