import {Box, Button, Grid, styled, Typography} from "@mui/material"

export const MainCardBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    background: 'white',
    borderRadius: '5px',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    border: '1px solid black'
}))

export const ImageBox = styled(Box)(({theme})=>({
    overflow: 'hidden',
    border: '1px solid lightgrey',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover':{
        border: '2px solid #5b74d9'
    },
    [theme.breakpoints.up('sm')]:{
        height: '200px',
        width: '200px'
    }
}))

export const LocationBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    marginTop: 0,
    [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
        alignItems: 'start'
    },
    [theme.breakpoints.down('sm')]:{
        marginTop: theme.spacing(2)
    }
}))

export const LocationTypography = styled(Typography)(({theme})=>({
    marginBottom: '5px',
    [theme.breakpoints.up('md')]:{
        marginLeft: theme.spacing(1)
    }
}))

export const CardDescription = styled(Box)(({theme})=>({
    height: '99%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginLeft: theme.spacing(2),
    borderBottom: '1px solid #9b9ea3',
    [theme.breakpoints.down('sm')]:{
        borderBottom: 'none',
        marginTop: theme.spacing(2)
    }
}))

export const NameTypography = styled(Typography)(({theme})=>({
    cursor: 'pointer',
    '&:hover':{
        color: '#5b74d9'
    },
    [theme.breakpoints.down('sm')]:{
        marginTop: theme.spacing(2)
    }
}))

export const PriceGrid = styled(Grid)(({theme})=>({
    borderBottom: '1px solid #9b9ea3',
    marginBottom: '1px',
    [theme.breakpoints.down('sm')]:{
        paddingLeft: theme.spacing(2)
    }
}))

export const PriceBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'row',
        alignItems: 'end',
        marginTop: theme.spacing(4),
    }
}))

export const HaggleTypography = styled(Typography)(({theme})=>({
    textAlign: 'center',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        marginBottom: '5px'
    }
}))

export const UpdatingBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: theme.spacing(2)
    }
}))

export const ButtonBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        marginLeft: '50%',
        transform: 'translateX(-53%)',
        marginTop: theme.spacing(2)
    }
}))

export const UpdateButton = styled(Button)(()=>({
    color: 'black',
    borderColor: 'black',
    '&:hover':{
        color: '#0d2482',
        borderColor: '#0d2482'
    }
}))

export const IdTypography = styled(Typography)(({theme})=>({
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]:{
        marginBottom: theme.spacing(0)
    }
}))