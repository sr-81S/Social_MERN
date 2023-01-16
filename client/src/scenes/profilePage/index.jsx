import { Box,useMediaQuery, } from "@mui/material"
import { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Navbar from "scenes/navbar"
import FriendListWidget from "scenes/widgets/FriendListWidget"
import MyPostWidget from "scenes/widgets/MyPostWidget"
import PostsWidget from "scenes/widgets/PostsWidget"
import UserWidget from "scenes/widgets/UserWidget"



const ProfilePage = ()=>{

    const [user, setUser] = useState(null);
    const {userId} = useParams();
    const token = useSelector((state)=>state.token);
    const isMobileScreens = useMediaQuery("(min-width:1000px)");


    //get user information
    const getUser = async ()=>{
        const responce = await fetch(`http://localhost:3001/users/${userId}`,{
            method: "GET",
            headers:{Authorization: `Bearer ${token}`}
        })

        const data = await responce.json();
        setUser(data)
    }

    useEffect(()=>{
        getUser();
    },[])

    if(!user) return null

    return (
    <Box> 
        <Navbar/>
        <Box
            width="100%"
            padding="2rem 6%"
            display={isMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="center"
        >
            <Box flexBasis={isMobileScreens? "26%" :  undefined} >
                <UserWidget userId={userId} picturePath= {user.picturePath}/>
                <Box m="2rem 0"/>
                    <FriendListWidget userId={userId}/>
            </Box>
            <Box 
                flexBasis={isMobileScreens ? "42%" : undefined}
                mt={isMobileScreens ? undefined : "2rem"}
            >
                <MyPostWidget picturePath={user.picturePath} />
                <Box m="2rem 0"/>
                <PostsWidget userId={userId} isProfile/>
            </Box>
            {/* {isMobileScreens && (
                <Box flexBasis="26%">
                    <AdvertWidget/>
                    <Box m="2rem 0">
                        <FriendListWidget userId={_id} />
                    </Box>
                </Box>
            )} */}
        </Box>
    </Box>)
}

export default ProfilePage