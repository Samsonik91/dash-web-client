import {Avatar, Container, styled} from "@mui/material"

export const AuthContainer = styled(Container)(({theme})=>({
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    border: '1px solid gray',
    borderRadius: 4,
    background: 'white',
    [theme.breakpoints.down('sm')]:{
        width: '92%'
    }
}))

export const AuthAvatar = styled(Avatar)(({theme})=>({
    marginLeft: '50%',
    marginBottom: theme.spacing(1),
    transform: 'translateX(-50%)',
    background: '#9b14e3'
}))