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
          <SimpleLink to="/#">HOME</SimpleLink>
          <SimpleLink to="/#gillette">Gillette</SimpleLink>
          <SimpleLink to="/#cocacola">Coca Cola</SimpleLink>
          <SimpleLink to="/#schwartz">Schwartz</SimpleLink>
          <SimpleLink to="/#sprite">Sprite</SimpleLink>
          <SimpleLink to="/#soft">Soft</SimpleLink>
          <SimpleLink to="/#cocacolastand">Coca Cola stand</SimpleLink>


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
        <SidebarLink
         className='cocacola'
         activeClass="active" 
         to="CocaCola" 
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
        </SidebarLink> */}

        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>

  )
})

export default Sidebar