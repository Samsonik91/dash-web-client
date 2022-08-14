import {Box, styled} from "@mui/material"

export const ProfileBox = styled(Box)(({theme})=>({
    background: 'white',
    width: 'calc(100%-16px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '4px',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1)
    }
}))

export const RowToAds = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    marginTop: 4,
    cursor: 'pointer',
    '&:hover': {
        color: '#1a54b0'
    }
}))

export const DeliveryBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: '4px'
}))

export const ItemDelivery = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: theme.spacing(2)
}))

export const LocationBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    width: '100%'
}))

export const LocationTypographies = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
}))