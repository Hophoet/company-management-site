import React from 'react'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const TheHeader = () => {


  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={() => {}}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={() => {}}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Admin name</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
          </div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
