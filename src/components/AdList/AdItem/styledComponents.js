import {Box, Grid, IconButton, styled, Typography} from "@mui/material"

export const MainGrid = styled(Grid)(({theme})=>({
    padding: theme.spacing(2),
    background: 'white',
    borderRadius: '4px',
    border: '1px solid #4e5052'
}))

export const PhotoGrid = styled(Grid)(()=>({
    border: '1px solid #ebeded',
    cursor: 'pointer',
    borderRadius: '4px',
    overflow: 'hidden',
    maxHeight: '250px',
    '&:hover':{
        borderColor: '#455bed'
    }
}))

export const DescriptionGrid = styled(Grid)(({theme})=>({
    position: 'relative',
    height: 'auto',
    [theme.breakpoints.down('sm')]:{
        height: '170px'
    }
}))

export const TextName = styled(Typography)(({theme})=>({
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(0),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]:{
        marginTop: theme.spacing(2)
    },
    '&:hover': {
        color: '#455bed'
    }
}))

export const LocationBox = styled(Box)(({theme})=>({
    position: 'absolute',
    bottom: '-4px',
    left: theme.spacing(2),
    display: 'flex',
    alignItems: 'end',
    flexWrap: 'wrap'
}))

export const TextDate = styled(Typography)(({theme})=>({
    marginBottom: '4px',
    marginLeft: theme.spacing(1)
}))

export const PriceBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('md')]:{
        paddingLeft: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]:{
        paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
    }
}))

export const InnerPriceBox = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end'
}))

export const PriceText = styled(Typography)(()=>({
    fontWeight: 'bold',
    marginRight: '5px'
}))

export const TypeDeal = styled(Typography)(({theme})=>({
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2)
    }
}))

export const FavoriteButton = styled(IconButton)(()=>({
    position: 'absolute',
    bottom: '-10px',
    right: '10px'
}))