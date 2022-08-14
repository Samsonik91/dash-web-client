import {Container, Box, styled, Avatar, Typography} from "@mui/material"

export const MainContainer = styled(Box)(({theme})=>({
    maxWidth: '992px',
    width: '96%',
    margin: 'auto',
    background: 'white',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        width: '92%'
    },
    [theme.breakpoints.up('md')]:{
        width: '100%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
    //gap: theme.spacing(2)
}))

export const TopAuthorBox = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        //paddingLeft: theme.spacing(4),
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(4)
    }
}))

export const AuthorAvatar = styled(Avatar)(()=>({
    width: '116px',
    height: '116px'
}))

export const NameBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    [theme.breakpoints.down('sm')]:{
        alignItems: 'center'
    },
    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(3),
    }
}))

export const LocationTypography = styled(Typography)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
        marginTop: theme.spacing(2)
    }
}))