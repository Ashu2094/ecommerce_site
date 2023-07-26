import { Facebook, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"

import { mobile } from "../responsive";
const Container = styled.div`
display:flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
display: flex;
flex: 1;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
    
`

const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:#${props=>props.color};
  display: flex;
  justify-content: center;
  align-items: center;
 margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
background-color: #c39696;
${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;

`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap:wrap ;

`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
background-color: #bb1313;
${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;
`
function Footer() {
  return (
    <div>
      <Container>
        <Left>
            <Logo>Ashu</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est eveniet sequi, laborum deleniti quasi expedita culpa soluta accusantium debitis.
            </Desc>
            <SocialContainer>
                <SocialIcon color='385999'>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color='E4405F'>
                    <LinkedIn/>
                </SocialIcon>

                <SocialIcon color='55ACEE'>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color='E60023'>
                    <Twitter/>
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/> Dehradun, Uttarakhand INdia</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/> +91 1234 567 789</ContactItem>
          <ContactItem><Mail style={{marginRight:"10px"}}/> ashu@gmail.com</ContactItem>
          <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
      </Container>
    </div>
  )
}

export default Footer
