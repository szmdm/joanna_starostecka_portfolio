import React, { forwardRef } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, } from './sidebarStyle'

const Sidebar = forwardRef(( props, ref ) => {
  
 

  return (
    
    <SidebarContainer isOpen={props.isOpen} ref={ref} >
      <Icon onClick={props.toggle} >
        <CloseIcon size={80} />
      </Icon>
      <SidebarMenu>
        <SidebarLink
         activeClass="active" to="gilette" spy={true} smooth={true} duration={500} 
         >
          Gilette
        </SidebarLink>
        <SidebarLink to="cocacola" >Coca Cola</SidebarLink>
        <SidebarLink
         activeClass="active" to="Schwartz" spy={true} smooth={true} duration={500}  
         >
         Shwartz
        </SidebarLink>
        <SidebarLink to="sprite" >Sprite</SidebarLink>
        <SidebarLink to="soft" >Soft</SidebarLink>
        <SidebarLink to="cocacolastand" >Coca Cola stand</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>

  )
})

export default Sidebar