import {Box, styled} from "@mui/material"

export const DescriptionBox = styled(Box)(({theme})=>({
    background: 'white',
    width: '100%',
    borderRadius: '4px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
}))

export const DateBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4)
    }
}))

export const BottomBox = styled(Box)(({theme})=>({
    [theme.breakpoints.up('sm')]:{
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
    }
}))

export const PriceBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end'
}))

export const CharacterBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
}))

export const CharacterMiniBox = styled(Box)(({theme})=>({
    border: '1px solid black',
    borderRadius: '3px',
    padding: theme.spacing(1)
}))