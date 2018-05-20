import React from 'react';
import Send from '../Components/svg/send'
import Hamburger from '../Components/svg/hamburger'


const {REACT_APP_PATH_DEV_URL, REACT_APP_PATH_URL, NODE_ENV} = process.env

export const pathUrl = (NODE_ENV === "production")
  ? REACT_APP_PATH_URL
  : REACT_APP_PATH_DEV_URL



export const Paths = {
  home: '/',
  dashboard: 'dashboard',
  website: 'website',
  WebContent: 'website/content',
  websiteContent: (base) => `${base}/content`,
  createPath: (base, path) => {
    return `${base}/${path}`
  }
}

export const Nav = [
  {
    name: "Home",
    url: Paths.home,
    icon: <Send color="rgb(52,52,52)" size="2rem"/>,
    key:0
  },
   {
    name: "Dashboard",
    url: Paths.dashboard,
    icon: <Send color="rgb(52,52,52)" size="2rem"/>,
    key:1

  },
  {
    key:2,
    name: "Website",
    icon: <Send color="rgb(52,52,52)" size="2rem"/>,
    sub: [
      {
        name: "General",
        url: Paths.website,
        icon: <Hamburger color="rgb(52,52,52)" size="2rem"/>,
        key:0

      }, {
        name: "Content",
        url: Paths.WebContent,
        icon: <Hamburger color="rgb(52,52,52)" size="2rem"/>,
        key:1
      }
    ]
  },
  {
   name: "Something",
   url: Paths.dashboard,
   icon: <Send color="rgb(52,52,52)" size="2rem"/>,
   key:3
 },
]
