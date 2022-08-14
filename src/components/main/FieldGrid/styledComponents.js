import {Grid, IconButton, styled} from "@mui/material"

export const MainGrid = styled(Grid)(({theme})=>({
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
}))

export const ButtonField = styled(IconButton)(()=>({
    border: '1px solid #788281',
    color: '#788281',
    cursor: 'pointer'
}))