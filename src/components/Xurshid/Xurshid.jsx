import React from 'react'
import FooterXurshid from './FooterXurshid/FooterXurshid'
import HeaderXurshid from './HeaderXurshid/HeaderXurshid'
import NavbarRouter from './NavbarXurshid/NavbarRouterXurshid'
import Section1Xurshid from './Section1Xurshid/Section1Xurshid'
import Section2Xurshid from './Section2Xurshid/Section2Xurshid'

export default function Xurshid() {
  return (
    <>
      <NavbarRouter />
      <HeaderXurshid/>
      <Section1Xurshid/>
      <Section2Xurshid/>
      <FooterXurshid/>
    </>
  )
}
