import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Wrapper, Container, Carousel, Search, Logo, Map, CarouselTitle } from './styles'

export default () => {
  const [ inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
 
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Restaurant Logo" />
          <TextField
              label='Search restaurants'
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search"/>}
              >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            <CarouselTitle>Local Restaurants</CarouselTitle>
            <Carousel {...settings}>
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
              <Card photo={restaurant} title="Restaurant name" />
            </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
 )
};
