import {Avatar, Box, styled} from "@mui/material"

export const ConversationBox = styled(Box)(({theme})=>({
    position: 'relative',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    cursor: 'pointer',
    borderRadius: '3px',
    '&:hover':{
        background: '#dce0e6'
    },
    [theme.breakpoints.down('sm')]:{
        width: '90%'
    },
    [theme.breakpoints.up('md')]:{
        width: '100%'
    }
}))

export const ConversationAvatar = styled(Avatar)(({theme})=>({
    width: 60,
    height: 60,
    marginRight: theme.spacing(1)
}))

export const NameBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        justifyContent: 'start'
    }
}))