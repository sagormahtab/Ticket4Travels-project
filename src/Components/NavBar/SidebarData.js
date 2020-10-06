import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VscIcon from 'react-icons/vsc';
import * as FiIcon from 'react-icons/fi'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Booking',
    path: '/my_booking',
    // icon: <IoIcons.IoIosPaper />,
    icon:<AiIcons.AiOutlineBook/>,
    cName: 'nav-text'
  },
  {
    title: 'My Inbox',
    path: '/my_inbox',
    // icon: <FaIcons.FaCartPlus />,
    icon:<AiIcons.AiOutlineInbox/>,
    cName: 'nav-text'
  },
  {
    title: 'Saved',
    path: '/saved',
    // icon: <IoIcons.IoMdPeople />,
    icon:<VscIcon.VscSaveAll/>,
    cName: 'nav-text'
  },
  {
    title: 'Help Center',
    path: '/help_center',
    icon: <FiIcon.FiHelpCircle/>,
    cName: 'nav-text'
  },
  {
    title: 'Partner with us',
    path: '/partner_us',
    icon: <FaIcons.FaHandsHelping/>,
    cName: 'nav-text'
  },
  {
    title: 'Contact us',
    path: '/contact_us',
    icon: <FiIcon.FiPhoneCall/>,
    cName: 'nav-text'
  }
  
];
