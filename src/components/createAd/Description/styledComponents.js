import {Box, styled, TextField} from "@mui/material"

export const MainBox = styled(Box)(({theme})=>({
    background: 'white',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1)
}))

export const DescriptionField = styled(TextField)(({theme})=>({
    maxWidth: '100%',
    fontSize: '1.1em',
    padding: theme.spacing(2),
    marginLeft: theme.spacing(-2)
}))