import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { IPContainer, UserIP, CustomTitle, Advise, GitHubLink, WebLoaderGif } from "./Components/Styles/StyledComponents";
import { WebColors } from "./Components/Styles/Colors";
import GIF from '../src/Assets/loader.gif';

const WebLoader = () => {
    return(
        <>
        <WebLoaderGif src={GIF} height={300}/>
        </>
    )
}

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [USER_IP, SET_USER_IP] = useState([]);

    useEffect(() => {
        const fetchUserIP = async () => {
            try {
                const response = await fetch("https://api.ipify.org?format=json");
                const DATA = await response.json();
                SET_USER_IP(DATA.ip);
            } 
            catch (error) {
                console.log("Error fetching IP data:", error);
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Error fetching IP data!',
                    showConfirmButton: true,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    allowOutsideClick: false,
                    heightAuto: true,
                    width: 425,
                    background: "#232924",
                    color: "#8B97A2"
                })
            }
        };
    
        fetchUserIP();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3500);
    
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <>
        <style>
        {`
            body{background-color: ${WebColors.WebBackgroundColor}};
        `}
        </style>

        {isLoading ? (
            <WebLoader />
        ) : (
            <>
            <IPContainer>
                <CustomTitle><FontAwesomeIcon icon={faLocationDot} /> Public IP <FontAwesomeIcon icon={faLocationDot} /></CustomTitle>
                <UserIP>{USER_IP}</UserIP>
            </IPContainer>

            <Advise>
                This website does not collect any kind of data and it was created for educational purposes only.
                <br /><br />
                Made by <GitHubLink href='https://github.com/fedetomassini'>@fedetomassini</GitHubLink>
            </Advise>
            </>
        )}
        </>
    )
}

export default App;