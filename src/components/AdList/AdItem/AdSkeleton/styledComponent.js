import {Box, Container, styled} from "@mui/material"

export const MainContainer = styled(Container)(({theme})=>({
    width: '100%',
    border: '1px solid #b0b7c2',
    opacity: 0.7,
    background: 'white',
    borderRadius: '5px',
    display: 'flex',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        gap: theme.spacing(3)
    }
}))

export const PhotoContainer = styled(Box)(({theme})=>({
    flex: 3,
    [theme.breakpoints.down('md')]:{
        flex: 4
    }
}))

export const PhotoBox = styled(Box)(({theme})=>({
    background: '#d3dbdb',
    height: '250px',
    width: 'calc(100% + 8px)',
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(-1),
    },
    [theme.breakpoints.down('sm')]:{
        width: '100%'
    }
}))

export const NameContainer = styled(Box)(({theme})=>({
    flex: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    [theme.breakpoints.down('md')]:{
        flex: 6
    },
    [theme.breakpoints.down('sm')]:{
        gap: theme.spacing(1)
    }
}))

export const NameBox = styled(Box)(({theme})=>({
    width: '95%',
    background: '#d3dbdb',
    height: theme.spacing(4),
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(2)
    }
}))

export const LocationBox = styled(Box)(({theme})=>({
    width: '60%',
    background: '#d3dbdb',
    borderRadius: '4px',
    height: theme.spacing(4),
    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(2)
    }
}))

export const PriceContainer = styled(Box)(({theme})=>({
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        flex: 2
    },
    [theme.breakpoints.up('sm')]:{
        paddingLeft: theme.spacing(4)
    }
}))

export const PriceBox = styled(Box)(({theme})=>({
    marginRight: theme.spacing(-1),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
        alignItems: 'start'
    }
}))

export const NumberPrice = styled(Box)(({theme})=>({
    width: '100%',
    height: theme.spacing(5),
    background: '#d3dbdb',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]:{
        width: '25%',
    },
    [theme.breakpoints.up('sm')]:{
        marginRight: theme.spacing(-1)
    }
}))

export const DealBox = styled(Box)(({theme})=>({
    marginRight: theme.spacing(-1),
    width: '100%',
    height: theme.spacing(2),
    background: '#d3dbdb',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]:{
        width: '30%',
    }
}))

export const IconBox = styled(Box)(({theme})=>({
    textAlign: 'end',
    position: 'absolute',
    right: theme.spacing(1),
    bottom: 0,
    [theme.breakpoints.up('sm')]:{
        position: 'block'
    }
}))