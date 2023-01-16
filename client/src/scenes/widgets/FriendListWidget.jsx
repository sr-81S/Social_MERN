import { Box,Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";


const FriendListWidget = ({userId})=>{
    const dispatch = useDispatch();
    // const navigate = useNavigate();
   // const {_id} = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token);
    const friends = useSelector((state)=> state.user.friends);

    const {palette} = useTheme()

    //get list of user friends
    const getFriends = async ()=>{
        const responce = await fetch(`http://localhost:3001/users/${userId}/friends`,{
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const data = await responce.json();
        dispatch(setFriends({friends: data}))
    };

    useEffect(()=>{
        getFriends();
    },[]);

    return (
        <WidgetWrapper>
            <Typography
                color={palette.neutral.dark}
                variant="h5"
                fontWeight="500"
                sx={{
                    mb: "1.5rem"
                }}
            >Followers
            </Typography>
            <Box display="flex" flexDirection="column" gap="1.5rem">
                {friends.map((friend)=>(
                    <Friend
                        key={friend._id}
                        friendId={friend._id}
                        name={`${friend.firstName} ${friend.lastName}`}
                        subtitle={friend.occupation}
                        userPicturePath={friend.picturePath}
                    />
                ))}
            </Box>
        </WidgetWrapper>
    )

}

export default FriendListWidget;

