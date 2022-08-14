import React, {useState} from 'react'
import {
    MenuInnerBox,
    MenuItemSearchIcon,
    SearchButton,
    SearchIconButton,
    StyledMenuItem
} from "./styledComponent"
import {Box, InputBase, Menu} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchMenu = ({handleSearchValue, searchByTags, search}) => {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpenMenu = e => setAnchorEl(e.currentTarget)
    const handleCloseMenu = () => setAnchorEl(null)

    window.addEventListener('resize', handleCloseMenu)

    const handleSearch = () => {
        handleCloseMenu()
        searchByTags()
    }

    return (
        <Box aria-controls='search-menu'>
            <SearchIconButton
                title='Поиск на сайте'
                onClick={handleOpenMenu}
            >
                <SearchIcon fontSize='large'/>
            </SearchIconButton>
            <Menu
                id='search-menu'
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
            >
                <StyledMenuItem>
                    <MenuInnerBox>
                        <MenuItemSearchIcon/>
                        <InputBase
                            placeholder='Поиск на сайте'
                            sx={{pl: 4}}
                            onChange={handleSearchValue}
                            value={search}
                        />
                        <SearchButton onClick={handleSearch}>Найти</SearchButton>
                    </MenuInnerBox>
                </StyledMenuItem>
            </Menu>
        </Box>
    )
}

export default SearchMenu