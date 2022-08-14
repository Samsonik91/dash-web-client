import {Box, Button, IconButton, Input, MenuItem, styled} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

export const AddButton = styled(Button)(({theme})=>({
    background: 'yellow',
    height: '80%',
    color: 'black',
    marginLeft: 15,
    borderRadius: 5,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
    '&:hover': {
        background: 'yellow'
    }
}))

export const Search = styled('div')(({theme})=>({
    background: 'white',
    borderRadius: '5px',
    padding: '0 0 0 10px',
    [theme.breakpoints.down("lg")]: {
        display: "none",
    }
}))

export const SearchButton = styled(Button)(()=>({
    background: 'yellow',
    m: 0, color: 'black',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    fontWeight: 600,
    '&:hover':{
        background: 'orange'
    }
}))

export const StyledSearchIcon = styled(SearchIcon)(()=>({
    position: 'absolute',
    color: 'gray',
    opacity: 0.7,
    top: 24
}))

export const SearchIconButton = styled(IconButton)(({theme})=>({
    display: 'none',
    color: 'white',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
        display: 'block',
    }
}))

export const StyledMenuItem = styled(MenuItem)(()=>({
    background: '#ced5db',
    '&:hover': {
        background: '#a7afb5'
    }
}))

export const MenuInnerBox = styled(Box)(()=>({
    background: 'white',
    borderRadius: '5px',
    padding: '0 0 0 10px'
}))

export const MenuItemSearchIcon = styled(SearchIcon)(()=>({
    position: 'absolute',
    color: 'gray',
    opacity: 0.7,
    top: 12
}))