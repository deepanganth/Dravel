import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
    {
        title:'Dashboard',
        path:'/dashboard',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Guest list',
        path:'/guestList',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Room list',
        path:'/roomList',
        icon:<MdIcons.MdMeetingRoom/>,
        cName:'nav-text'
    },
    {
        title:'Settings',
        path:'/settings',
        icon:<RiIcons.RiSettingsLine/>,
        cName:'nav-text'
    },
]