import {Box, Button, FormControlLabel, styled, Typography} from "@mui/material"

export const MainBox = styled(Box)(({theme})=>({
    background: 'white',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(2)
}))

export const InnerBox =styled(Box)(({theme})=>({
    width: '285px',
    display: 'flex',
    flexDirection: 'column'
}))

export const PriceFieldBox = styled(Box)(({theme})=>({
    marginTop: theme.spacing(4),
    justifyContent: 'space-between'
}))

export const HaggleBox = styled(Box)(()=>({
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '104%'
}))

export const TypeBox = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-between'
}))

export const TypeButton = styled(Button)(()=>({
    width: '135px',
    fontSize: '12px'
}))

export const DeliverySwitch = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '104%'
}))

export const DeliveryBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3)
}))

export const DeliveryFormControl = styled(FormControlLabel)(({theme})=>({
    marginLeft: theme.spacing(10),
    display: 'flex',
    justifyContent: 'space-between'
}))

export const DeliveryTypography = styled(Typography)(({theme})=>({
    width: '100%',
    color: '#49524b'
}))