import {Box, styled, TextField, Typography} from "@mui/material"

export const LocationBox = styled(Box)(()=>({
    maxWidth: '300px',
    width: '100%',
}))

export const LocationInput = styled(TextField)(({theme})=>({
    width: 'calc(100% + 2px)',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
}))

export const CityBox = styled(Box)(({theme})=>({
    width: '100%',
    maxHeight: '180px',
    overflow: 'scroll',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    border: '1px solid gray',
    borderTopColor: 'white',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    mt: '-18px'
}))

export const LocationItem = styled(Typography)(({theme})=>({
    padding: theme.spacing(1),
    width: '100%',
    '&:hover':{
        background: '#daecf2',
        cursor: 'pointer'
    }
}))