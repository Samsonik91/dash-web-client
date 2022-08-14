import {Box, CircularProgress, styled} from "@mui/material"

export const MainBox = styled(Box)(()=>({
    width: '100%',
    opacity: '0.7'
}))

export const WrapperBox = styled(Box)(({theme})=>({
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: '4px'
}))

export const StyledCardMedia = styled(Box)(()=>({
    background: '#d3dbdb',
    height: '200px',
    width: '100%',
    margin: 'auto',
    cursor: 'pointer',
    borderRadius: '3px',
    position: 'relative'
}))

export const StyledCircular = styled(CircularProgress)(()=>({
    position: 'absolute',
    top: '37%',
    left: '37%'
}))

export const NameSkeleton = styled(Box)(()=>({
    height: '32px',
    background: '#d3dbdb',
    borderRadius: '4px'
}))

export const InnerBox1 = styled(Box)(()=>({
    width: '33%',
    height: '24px',
    background: '#d3dbdb',
    borderRadius: '4px'
}))

export const InnerBox2 = styled(Box)(({theme})=>({
    width: '50%',
    height: '24px',
    background: '#d3dbdb',
    borderRadius: '4px',
    marginTop: theme.spacing(1)
}))

export const InnerBox3 = styled(Box)(({theme})=>({
    width: '66%',
    height: '16px',
    background: '#d3dbdb',
    borderRadius: '4px',
    marginTop: theme.spacing(1)
}))