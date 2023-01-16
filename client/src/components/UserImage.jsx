import { Box } from "@mui/material";


const UserImage = ({image, size="60px"})=>{
    return (
        <Box height={size} width={size} >
            <img height={size} width={size} style={{borderRadius: "50%", objectFit:"cover"}} src={`http://localhost:3001/assets/${image}`} alt="user"/>
        </Box>
    )
}

export default UserImage