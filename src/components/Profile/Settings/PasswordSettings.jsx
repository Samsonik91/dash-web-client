import React, {useState} from 'react'
import {SettingItem, SettingItemBottom, SettingItemTop, SettingTextField} from "./styledComponents"
import {Button, Divider, Typography} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

const PasswordSettings = () => {

    const [showSetting, setShowSetting] = useState(false)

    return (
        <SettingItem
            sx={{pb: showSetting ? 1 : 2}}
        >
            <SettingItemTop
                onClick={()=> setShowSetting(!showSetting)}
            >
                <Typography variant='h6'>
                    Изменить пароль
                </Typography>
                {showSetting ? <ExpandLessIcon fontSize='large'/> : <ExpandMoreIcon fontSize='large'/>}
            </SettingItemTop>
            <div style={{display: showSetting ? 'block' : 'none'}}>
                <Divider sx={{mt: 2}}/>
                <SettingItemBottom>
                    <SettingTextField
                        placeholder = 'Введите старый пароль'
                        label='Старый пароль'
                    />
                    <SettingTextField
                        placeholder = 'Введите новый пароль'
                    />
                    <Button
                        variant='contained'
                        type='submit'
                    >
                        Подтвердить
                    </Button>
                </SettingItemBottom>
            </div>
        </SettingItem>
    )
}

export default PasswordSettings