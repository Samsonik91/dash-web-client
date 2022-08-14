import {Avatar, Box, styled, Typography} from "@mui/material"

export const MessageBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
}))

export const MessageTop = styled(Box)(()=>({
    display: 'flex'
}))

export const MessageAvatar = styled(Avatar)(({theme})=>({
    width: 36,
    height: 36,
    marginRight: theme.spacing(1)
}))

export const MessageTypography = styled(Typography)(({theme})=>({
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    color: 'white',
    maxWidth: '300px',
}))

export const DeleteIcon = styled(Box)(({theme})=>({
    width: '36px',
    height: '36px',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(-2),
    overflow: 'hidden',
    background: 'white',
    borderRadius: '50%',
    color: '#393b3d'
}))

export const MessageBottom = styled(Typography)(({theme})=>({
    marginTop: theme.spacing(1),
    maxWidth: '360px',
    textAlign: 'end'
}))