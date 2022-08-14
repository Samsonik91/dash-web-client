import {Box, Grid, styled} from "@mui/material"

export const MainBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2)
}))

export const AdsGrid = styled(Grid)(({theme})=>({
    margin: 'auto',
    marginTop: theme.spacing(2),
    rowGap: theme.spacing(1),
    width: '101%'
}))

export const StyledGrid = styled(Grid)(({theme})=>({
    paddingRight: theme.spacing(1)
}))