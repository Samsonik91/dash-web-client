import {Avatar, Box, Grid, styled} from "@mui/material"

export const MainGrid = styled(Grid)(({theme})=>({
    margin: 'auto',
    marginTop: '16px',
    opacity: 0.7,
    [theme.breakpoints.up('md')]:{
        marginLeft: '50%',
        transform: 'translateX(-49.3%)',
    }
}))

export const InnerGrid = styled(Grid)(()=>({
    padding: '8px',
    marginBottom: '16px'
}))

export const SliderSkeleton = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: 'white',
    padding: '16px',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]:{
        width: '88%'
    }
}))

export const InnerSliderBox = styled(Box)(()=>({
    width: '100%',
    borderRadius: '5px',
    height: '400px'
}))

export const DescriptionSkeleton = styled(Box)(({theme})=>({
    width: '100%',
    background: 'white',
    padding: '16px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '16px',
    marginBottom: '16px',
    [theme.breakpoints.down('md')]:{
        width: '88%'
    }
}))

export const TopBox = styled(Box)(()=>({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export const DateBox = styled(Box)(()=>({
    width: '40%',
    height: '16px',
    background: 'lightgray',
    borderRadius: '3px'
}))

export const NameBox= styled(Box)(()=>({
    width: '100%',
    background: 'lightgray',
    borderRadius: '3px',
    height: '40px'
}))

export const PriceBox = styled(Box)(()=>({
    width: '15%',
    height: '40px',
    background: 'lightgray',
    borderRadius: '3px',
}))

export const Characteristics = styled(Box)(()=>({
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between'
}))

export const DescriptionBox = styled(Box)(()=>({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
}))

export const DescriptionLinear = styled(Box)(()=>({
    background: 'lightgray',
    borderRadius: '3px',
    height: '24px'
}))

export const MessageSkeleton = styled(Box)(({theme})=>({
    width: '100%',
    background: 'white',
    padding: '16px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'end',
    [theme.breakpoints.down('md')]:{
        width: '88%'
    }
}))

export const TextFieldSkeleton = styled(Box)(()=>({
    width: '100%',
    background: 'lightgray',
    borderRadius: '4px',
    height: '112px'
}))

export const ProfileGrid = styled(Grid)(()=>({
    padding: '8px',
    marginBottom: '16px'
}))

export const ProfileBox = styled(Box)(({theme})=>({
    width: 'calc(100%-16px)',
    marginLeft: '16px',
    marginBottom: '16px',
    background: 'white',
    gap: '16px',
    padding: '16px',
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
    marginLeft: '16px',
    marginTop: '16px',
    padding: '16px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '16px',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]:{
        margin: 'auto',
        marginTop: '16px',
        width: '88%'
    }
}))

export const MapBox = styled(Box)(()=>({
    width: '35%',
    height: '80px',
    background: 'lightgray',
    borderRadius: '4px'
}))




