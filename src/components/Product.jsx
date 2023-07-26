import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'


const Icon = styled.div`
opacity:0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease-out;

    /* pseudo classes */
&:hover{
    background-color: #848d8d;
    transform:scale(1.5);
    
}

`
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    position:relative;
    &:hover ${Icon}
    {
        opacity: 1;

    }

`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`
const Image = styled.img`
height:75%;
z-index: 2;

`
const Info = styled.div`
width: 100%;
height:100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
background-color: (0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease-out;
cursor: pointer;


`


function Product({item}) {
  return (
    <Container>
      <Circle/>
      <Image src= {item.img}/>
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
