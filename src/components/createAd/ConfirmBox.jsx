import React from 'react'
import {Box, Button, styled} from "@mui/material"

const MainBox = styled(Box)(({theme})=>({
    background: 'white',
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1)
}))

const InnerBox = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const PreviewButton = styled(Button)(()=>({
    color: 'black',
    border: '1px solid black'
}))

const ConfirmBox = ({handleSubmit}) => {
    return (
        <MainBox>
            <InnerBox>
                <Box>
                    <PreviewButton
                        variant='outlined'
                        type='submit'
                        onClick={(e)=> handleSubmit(e, 'preview')}
                    >Предпросмотр</PreviewButton>
                </Box>
                <Box>
                    <Button
                        variant='contained'
                        type='submit'
                        onClick={(e)=> handleSubmit(e, 'createAd')}
                    >Опубликовать</Button>
                </Box>
            </InnerBox>
        </MainBox>
    )
}

export default ConfirmBox