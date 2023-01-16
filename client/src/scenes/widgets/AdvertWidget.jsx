import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = ()=>{
    const {palette} = useTheme()
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500" >
                    Sponsored
                </Typography>
                <Typography color={medium}> Create Ad </Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="https://images.unsplash.com/photo-1504509546545-e000b4a62425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                style={{ borderRadius: "0.75rem", margin:"0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main} >Spotify</Typography>
                <Typography color={medium} >open.spotify.com</Typography>
            </FlexBetween>
            <Typography m="0.5rem 0" color={medium}>1 Million Songs with Add free stream and only ₹299 </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget