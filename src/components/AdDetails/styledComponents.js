import {Box, Grid, styled} from "@mui/material"

export const MainGrid = styled(Grid)(({theme})=>({
    margin: 'auto',
    [theme.breakpoints.up('sm')]:{
        marginTop: theme.spacing(2)
    }
}))

export const AdGrid = styled(Grid)(({theme})=>({
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2)
    }
}))

export const AdBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
}))

export const ProfileGrid = styled(Grid)(({theme})=>({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        padding: theme.spacing(2),
        marginTop: theme.spacing(-2),
    }
}))