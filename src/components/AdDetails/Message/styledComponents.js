import {Box, Button, styled, TextField} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

export const MessageBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(7),
    background: 'white',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]:{
        paddingBottom: theme.spacing(8)
    }
}))

export const ContactBox = styled(Box)(({theme})=>({
    width: '95%',
    marginBottom: theme.spacing(2),
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        width: '90%'
    }
}))

export const AvatarBox = styled(Box)(()=>({
    display: 'flex',
    alignItems: 'center'
}))

export const StyledAccount = styled(AccountCircleIcon)(({theme})=>({
    color: '#54595c',
    fontSize: 48,
    marginRight: theme.spacing(1)
}))

export const PhoneBox = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        marginBottom: theme.spacing(2)
    }
}))

export const StyledPhoneIcon = styled(LocalPhoneRoundedIcon)(({theme})=>({
    color: '#54595c',
    p: theme.spacing(1),
    mr: theme.spacing(1),
    fontSize: '28px',
    border: '1px solid #54595c',
    borderRadius: '50%'
}))

export const MessageField = styled(TextField)(({theme})=>({
    background: '#edf2f2',
    width: '94%',
    [theme.breakpoints.up('sm')]:{
        marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.down('md')]:{
        width: '90%'
    }
}))

export const MessageButton = styled(Button)(({theme})=>({
    position: 'absolute',
    right: '24px',
    bottom: '16px',
    [theme.breakpoints.down('sm')]:{
        right: '16px'
    }
}))