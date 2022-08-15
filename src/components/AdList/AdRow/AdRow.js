import React from 'react'
import AdItem from "../AdItem/AdItem"
import {Box, Pagination, Stack, styled} from "@mui/material"
import {useSelector} from "react-redux"
import AdSkeleton from "../AdItem/AdSkeleton/AdSkeleton"
import Spinner from "../../../utils/Spinner/Spinner"
import NoAds from "../AdItem/NoAds/NoAds"

const AdBox = styled(Box)(({theme})=>({
    maxWidth: '980px',
    width: '96%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: 'auto',
    marginTop: '16px',
    marginBottom: '16px',
    paddingRight: '16px',
    paddingLeft: '16px',
    [theme.breakpoints.down('sm')]:{
        width: '92%'
    }
}))

const AdRow = React.memo(({page, disable, handlePage, numberOfPages, handleFavorite}) => {

    const isFetching = useSelector(({post})=> post.isFetching)
    const skeletons = Array(8).fill(1)
    const ads = useSelector(({post})=> post?.ads?.ads)

    return (
        <AdBox>
            {ads?.length<1 && !isFetching && <NoAds/>}
            {!ads && isFetching && <Spinner/>}
            {ads && !isFetching ? ads.map((a,i)=>(
                <AdItem
                    key={Math.random()+i}
                    ad={a}
                    disable={disable}
                    handleFavorite={handleFavorite}
                />
            ))
                :
                skeletons.map((s)=>(
                    <AdSkeleton key={Math.random()+Math.random()}/>
                ))
            }
            <Stack spacing={2} sx={{margin: 'auto', marginTop: '16px'}}>
                <Pagination
                    disabled={isFetching || !ads || ads?.length<1 ? true : false}
                    count={numberOfPages || 10}
                    siblingCount={0}
                    boundaryCount={1}
                    page={Number(page)}
                    onChange={handlePage}
                    size='large'
                    color='secondary'
                />
            </Stack>
        </AdBox>
    )
})

export default AdRow