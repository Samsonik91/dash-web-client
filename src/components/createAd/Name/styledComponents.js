import {Box, styled, TextField} from "@mui/material"

export const MainBox = styled(Box)(({theme})=>({
    background: 'white',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2)
}))

export const NameField = styled(TextField)(({theme})=>({
    width: '75%',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        width: '100%'
    },
    [theme.breakpoints.up('lg')]:{
        width: '50%'
    }
}))