import React, { forwardRef } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, } from './sidebarStyle'

const Sidebar = forwardRef(( props, ref ) => {
  
 

  return (
    
    <SidebarContainer isOpen={props.isOpen} ref={ref} >
      <Icon onClick={props.toggle} >
        <CloseIcon size={80} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/project/CocaCola' >Coca Cola</SidebarLink>
        <SidebarLink to='/' >Some Project Name 2</SidebarLink>
        <SidebarLink to='/' >Some Project Name 3</SidebarLink>
        <SidebarLink to='/' >Some Project Name 4</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>

  )
})

export default Sidebar