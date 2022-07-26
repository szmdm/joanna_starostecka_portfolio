import React, { forwardRef, } from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  // SidebarLink,
  SimpleLink,
  SidebarWrapper,
} from './sidebarStyle';



const Sidebar = forwardRef((props, ref) => {

  return (

    <SidebarContainer isOpen={props.isOpen} ref={ref} >
      <SidebarWrapper>
        <Icon onClick={props.toggle} >
          <CloseIcon size={80} />
        </Icon>
        <SidebarMenu>
          <SimpleLink to="/#" style={{marginBottom: "40px"}}>HOME</SimpleLink>
          <SimpleLink to="/#gillette">Gillette</SimpleLink>
          <SimpleLink to="/#cocacola">Coca Cola</SimpleLink>
          <SimpleLink to="/#schwartz">Ceramic Studio</SimpleLink>
          {/* <SimpleLink to="/#sprite">Sprite</SimpleLink> */}
          <SimpleLink to="/#soft">Soft</SimpleLink>
          {/* <SimpleLink to="/#cocacolastand">Coca Cola stand</SimpleLink> */}


   {/* react scroll version  */}

          {/* <SidebarLink
         activeClass="active"
         to="Gillette" 
         spy={true} 
         smooth={true} 
         duration={500} 
         >
          Gillette
        </SidebarLink>

        ...  */}

        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>

  )
})

export default Sidebar