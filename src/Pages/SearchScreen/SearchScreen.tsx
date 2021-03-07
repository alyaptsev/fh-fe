import React from 'react';
import {
  StyledSeacrhScreen,
  Background,
  ContentWrapper,
  LogoLink,
  Tagline,
  Partners,
  PartnerLogo,
  StyledSearchPanel,
} from './SearchScreen.styled';
import backgroundImg from './assets/background.svg';
import logoImg from './assets/logo.svg';
import expediaImg from './assets/logo-expedia.svg';
import bookingImg from './assets/logo-booking.svg';
import hotelsImg from './assets/logo-hotels.svg';
import agodaImg from './assets/logo-agoda.svg';

const SearchScreen: React.FC = () => (
  <StyledSeacrhScreen>
    <Background src={backgroundImg} />

    <ContentWrapper>
      <LogoLink href="/">
        <img alt="logo" src={logoImg} />
      </LogoLink>

      <Tagline>Find the perfect deal, always.</Tagline>

      <StyledSearchPanel />

      <Partners>
        <PartnerLogo alt="partner logo: expedia" src={expediaImg} />
        <PartnerLogo alt="partner logo: booking.com" src={bookingImg} />
        <PartnerLogo alt="partner logo: hotels.com" src={hotelsImg} />
        <PartnerLogo alt="partner logo: agoda" src={agodaImg} />
      </Partners>
    </ContentWrapper>
  </StyledSeacrhScreen>
);

export default SearchScreen;
