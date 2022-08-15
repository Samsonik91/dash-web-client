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
    rowGap: '8px',
    width: '101%'
}))

export const StyledGrid = styled(Grid)(()=>({
    paddingRight: '16px'
}))