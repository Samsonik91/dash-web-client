import {Box, Grid, styled} from "@mui/material"

export const MainBox = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '16px'
}))

export const AdsGrid = styled(Grid)(()=>({
    margin: 'auto',
    marginTop: '16px',
    columnGap: '16px',
    rowGap: '16px',
    width: '101%'
}))

export const StyledGrid = styled(Grid)(({theme})=>({
    //paddingRight: '16px',
    [theme.breakpoints.down('sm')]:{
        marginBottom: '8px'
    }
}))
