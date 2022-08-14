import {Box, Container, styled} from "@mui/material"

export const MainBox = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}))

export const MainContainer = styled(Container)(({theme})=>({
    margin: theme.spacing(2),
    mt: theme.spacing(4)
}))

export const InnerBox = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around'
}))