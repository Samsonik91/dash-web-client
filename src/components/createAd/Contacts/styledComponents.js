import {Box, styled, TextField, Typography} from "@mui/material"

export const MainBox = styled(Box)(({theme})=>({
    background: 'white',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: theme.spacing(1)
}))

export const ContactField = styled(TextField)(({theme})=>({
    maxWidth: '300px',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        width: '100%'
    }
}))