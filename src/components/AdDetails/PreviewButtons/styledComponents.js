import {Box, Button, styled} from "@mui/material"

export const PreviewButtonsBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(2),
    background: 'white',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        gap: theme.spacing(2),
        alignItems: 'center'
    }
}))

export const ButtonToBackForm = styled(Button)(({theme})=>({
    color: 'black',
    border: '1px solid black',
    width: 'auto',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        marginLeft: 0
    }
}))

export const ButtonToConfirm = styled(Button)(({theme})=>({
    marginRight: theme.spacing(2),
    width: 'auto',
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        marginRight: 0
    }
}))