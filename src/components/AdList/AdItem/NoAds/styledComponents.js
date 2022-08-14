import {Box, styled} from "@mui/material"

export const MainBox = styled(Box)(({theme})=>({
    maxWidth: '500px',
    height: '300px',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(5),
    background: 'white',
    borderRadius: '5px'
}))