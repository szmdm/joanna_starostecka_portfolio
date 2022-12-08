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
          <SimpleLink to="/project/Gillette">Gillette</SimpleLink>
          <SimpleLink to="/project/CocaCola">Coca Cola</SimpleLink>
          <SimpleLink to="/project/CeramicStudio">Ceramic Studio</SimpleLink>
          <SimpleLink to="/project/Soft">Soft</SimpleLink>
          <SimpleLink to="/project/Nike">Nike</SimpleLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
})

export default Sidebar