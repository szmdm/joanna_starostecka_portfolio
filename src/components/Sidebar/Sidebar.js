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
         activeClass="active"
         to="Gillette" 
         spy={true} 
         smooth={true} 
         duration={500} 
         >
          Gillette
        </SidebarLink>
        <SidebarLink
         activeClass="active" 
         to="Coca Cola" 
         spy={true} 
         smooth={true} 
         duration={500}
         >
          Coca Cola
        </SidebarLink>
        <SidebarLink
         activeClass="active" 
         to="Schwartz" 
         spy={true} 
         smooth={true} 
         duration={500}  
         >
         Shwartz
        </SidebarLink>
        <SidebarLink
         activeClass="active" 
         to="Sprite" 
         spy={true} 
         smooth={true} 
         duration={500}
         >
         Sprite
        </SidebarLink>
        <SidebarLink 
         activeClass="active" 
         to="Soft" 
         spy={true} 
         smooth={true} 
         duration={500}
        >
         Soft
        </SidebarLink>
        <SidebarLink
         activeClass="active" 
         to="Coca Cola stand" 
         spy={true} 
         smooth={true} 
         duration={500} 
        >
         Coca Cola stand
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>

  )
})

export default Sidebar