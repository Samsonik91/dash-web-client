import {Box, Button, Container, styled} from "@mui/material"

export const MainBox = styled(Container)(({theme})=>({
    width: '96%',
    background: 'white',
    borderRadius: '4px',
    display: 'flex',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        width: '94%'
    }
}))

export const ChatMenu = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    height: '250px',
    overflow: 'scroll',
    border: '1px solid gray',
    borderRadius: '4px'
}))

export const ChatBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column'
}))

export const ChatMessagesBox = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '350px',
    overflow: 'scroll',
    border: '1px solid gray',
}))

export const CreateBox = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1)
}))

export const MessageButton = styled(Button)(({theme})=>({
    marginTop: theme.spacing(2),
    width: '150px'
}))

