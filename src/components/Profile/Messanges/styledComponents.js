import {Box, Container, styled, TextField, Typography} from "@mui/material"

export const ViewBoxLarge = styled(Box)(({theme})=>({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block'
    }
}))

export const ViewBoxSmall = styled(Box)(({theme})=>({
    display: 'none',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))

export const Messanger = styled(Container)(({theme})=>({
    minHeight: '500px',
    display: 'flex',
    width: '99%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        gap: theme.spacing(2),
        background: 'white',
        width: '94%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]:{
        width: '100%',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5)
    }
}))

export const ChatMenu = styled(Box)(({theme})=>({
    flex: 4
}))

export const ChatBox = styled(Box)(({theme})=>({
    flex: 8,
}))

export const ChatBoxBadge = styled(Box)(({theme})=>({
    display: 'flex',
    width: '100%',
    background: '#dce0e6',
    paddingBottom: theme.spacing(2),
    border: '1px solid grey',
    borderTopRightRadius: '3px',
    borderTopLeftRadius: '3px',
    marginBottom: '-1px'
}))

export const ChatBoxTop = styled(Box)(({theme})=>({
    height: '400px',
    marginRight: '-2px',
    overflowY: 'scroll',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    border: '1px solid grey',
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
}))

export const ChatBoxBottom = styled(Box)(({theme})=>({
    display: 'flex',
    gap: theme.spacing(1),
    flexDirection: 'column',
    paddingRight: theme.spacing(2),
    marginLeft: theme.spacing(-1),
    marginTop: theme.spacing(1),
    alignItems: 'end',
}))

export const DeletedMessage = styled(Box)(({theme})=>({
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
}))

export const DeletedTypography = styled(Typography)(({theme})=>({
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(4),
    background: '#dce0e6'
}))

export const ChatTextArea = styled(TextField)(({theme})=>({
    width: '98.8%',
    paddingTop: theme.spacing(1)
}))

export const ChatWrapperBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    paddingRight: theme.spacing(3),
    background: 'white',
    height: '100%'
}))

export const NoChatTypography = styled(Typography)(({theme})=>({
    margin: 'auto',
    marginTop: '150px',
    textAlign: 'center',
    opacity: '0.7',
    color: 'darkgrey',
    [theme.breakpoints.down('sm')]:{
        marginTop: '50px'
    }
}))