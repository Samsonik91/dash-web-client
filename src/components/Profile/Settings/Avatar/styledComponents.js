import {Avatar, Box, Button, styled} from "@mui/material"

export const PhotoBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1)
}))

export const PhotoButtons = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: theme.spacing(1)
}))

export const ProfileAvatar = styled(Avatar)(()=>({
    width: '112px',
    height: '112px'
}))

export const ButtonBox = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
}))

export const AvatarButton = styled(Button)(({theme})=>({
    marginRight: theme.spacing(3),
    paddingTop: 0,
    paddingBottom: 0
}))