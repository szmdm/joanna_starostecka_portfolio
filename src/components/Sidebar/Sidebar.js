import React, { forwardRef, } from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SimpleLink,
  SidebarWrapper,
} from './sidebarStyle';

const Sidebar = forwardRef((props, ref) => {

  return (

    <SidebarContainer isOpen={props.isOpen} ref={ref} >
      <SidebarWrapper>
        <Icon>
          <CloseIcon size={80} onClick={props.toggle} />
        </Icon>
        <SidebarMenu>
          <SimpleLink to="/#" style={{marginBottom: "40px"}}>HOME</SimpleLink>
          <SimpleLink to="/#gillette">Gillette</SimpleLink>
          <SimpleLink to="/#cocacola">Coca Cola</SimpleLink>
          <SimpleLink to="/#schwartz">Ceramic Studio</SimpleLink>
          <SimpleLink to="/#soft">Soft</SimpleLink>
          <SimpleLink to="/#nike">Nike</SimpleLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
})

export default Sidebar