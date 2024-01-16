import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

import { PiAppWindowFill } from 'react-icons/pi';

import { UserDataContainer, UserData, Title, Advise, GitHubLink, WebLoaderGif } from "./Components/Styles/StyledComponents";
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
    const [userIP, setUserIP] = useState('');
    const [userCountryImage, setUserCountryImage] = useState('');
    const [userCountryName, setUserCountryName] = useState('');
    const [userOrg, setUserOrg] = useState('');
    const [userLat, setUserLat] = useState(0);
    const [userLong, setUserLong] = useState(0);

    const fetchUserIP = async () => {
        try {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();
            
            setUserIP(data.ip);
            setUserCountryImage(data.country);
            setUserCountryName(data.country_name);
            setUserOrg(data.org);
            setUserLat(data.latitude);
            setUserLong(data.longitude);
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

    useEffect(() => {
        const timer = setTimeout(() => {
        fetchUserIP();
        setIsLoading(false);
    }, 3500); // Default 3500
    
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
            <UserDataContainer>
                <Title><PiAppWindowFill/> User Info <PiAppWindowFill/></Title>
                <UserData>IP: {userIP || '-'}</UserData>
                <UserData>Country: {userCountryName} {<img src={`https://flagcdn.com/20x15/${userCountryImage.toLocaleLowerCase()}.png`}/>}</UserData>
                <UserData>Org: {userOrg || '-'} </UserData>
                <UserData>Lat: {userLat || '-'}</UserData>
                <UserData>Long: {userLong || '-'}</UserData>
            </UserDataContainer>

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