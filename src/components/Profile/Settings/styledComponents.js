import {Box, Container, Divider, styled, TextField} from "@mui/material"

export const MainContainer = styled(Container)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]:{
        width: '96%'
    },
    [theme.breakpoints.down('sm')]:{
        width: '92%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))

export const ProfileTop = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '4px',
    background: 'white',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column'
    }
}))

export const ProfilePart1 = styled(Box)(({theme})=>({
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(2)
}))

export const ProfileDivider = styled(Divider)(({theme})=>({
    display: 'none',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        display: 'block'
    }
}))

export const ProfilePart2 = styled(Box)(({theme})=>({
    flex: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]:{
        alignItems: 'center',
        gap: theme.spacing(2)
    }
}))

export const TypographyBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: theme.spacing(1)
}))

export const SettingItem = styled(Box)(({theme})=>({
    width: '100%',
    background: 'white',
    borderRadius: '4px',
    padding: theme.spacing(2),
}))

export const SettingItemTop = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
}))

export const SettingItemBottom = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1)
}))

export const InnerFieldBox = styled(Box)(({theme})=>({
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: theme.spacing(2)
}))

export const InnerFieldBoxItem = styled(Box)(({theme})=>({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
}))

export const SettingTextField = styled(TextField)(()=>({
    width: '100%'
}))