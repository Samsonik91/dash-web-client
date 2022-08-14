import {Avatar, Box, Grid, styled} from "@mui/material"

export const MainGrid = styled(Grid)(({theme})=>({
    margin: 'auto',
    marginTop: theme.spacing(2),
    opacity: 0.7,
    [theme.breakpoints.up('md')]:{
        marginLeft: '50%',
        transform: 'translateX(-49.3%)',
    }
}))

export const InnerGrid = styled(Grid)(({theme})=>({
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
}))

export const SliderSkeleton = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: 'white',
    padding: theme.spacing(2),
    borderRadius: '5px',
    [theme.breakpoints.down('md')]:{
        width: '88%'
    }
}))

export const InnerSliderBox = styled(Box)(({theme})=>({
    width: '100%',
    borderRadius: '5px',
    height: '400px'
}))

export const DescriptionSkeleton = styled(Box)(({theme})=>({
    width: '100%',
    background: 'white',
    padding: theme.spacing(2),
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]:{
        width: '88%'
    }
}))

export const TopBox = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export const DateBox = styled(Box)(({theme})=>({
    width: '40%',
    height: theme.spacing(2),
    background: 'lightgray',
    borderRadius: '3px'
}))

export const NameBox= styled(Box)(({theme})=>({
    width: '100%',
    background: 'lightgray',
    borderRadius: '3px',
    height: theme.spacing(5)
}))

export const PriceBox = styled(Box)(({theme})=>({
    width: '15%',
    height: theme.spacing(5),
    background: 'lightgray',
    borderRadius: '3px',
}))

export const Characteristics = styled(Box)(({theme})=>({
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between'
}))

export const DescriptionBox = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1)
}))

export const DescriptionLinear = styled(Box)(({theme})=>({
    background: 'lightgray',
    borderRadius: '3px',
    height: theme.spacing(3)
}))

export const MessageSkeleton = styled(Box)(({theme})=>({
    width: '100%',
    background: 'white',
    padding: theme.spacing(2),
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'end',
    [theme.breakpoints.down('md')]:{
        width: '88%'
    }
}))

export const TextFieldSkeleton = styled(Box)(({theme})=>({
    width: '100%',
    background: 'lightgray',
    borderRadius: '4px',
    height: theme.spacing(14)
}))

export const ProfileGrid = styled(Grid)(({theme})=>({
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
}))

export const ProfileBox = styled(Box)(({theme})=>({
    width: 'calc(100%-16px)',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    background: 'white',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]:{
        margin: 'auto',
        width: '88%'
    }
}))

export const SkeletonAvatar = styled(Avatar)(()=>({
    width: '86px',
    height: '86px'
}))

export const DeliverySkeleton = styled(Box)(({theme})=>({
    width: 'calc(100%-16px)',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: theme.spacing(2),
    borderRadius: '5px',
    [theme.breakpoints.down('md')]:{
        margin: 'auto',
        marginTop: theme.spacing(2),
        width: '88%'
    }
}))

export const MapBox = styled(Box)(({theme})=>({
    width: '35%',
    height: theme.spacing(10),
    background: 'lightgray',
    borderRadius: '4px'
}))




