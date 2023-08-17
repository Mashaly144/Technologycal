import React from 'react';
import Banners from '../../components/Home/Banners';
import ClientLogo from '../../components/Home/ClientLogo';
import About from '../../components/Home/About';
import Features from '../../components/Home/Features';
import Video from '../../components/Home/Video';
import SocialMedia from '../../components/Home/SocialMedia';
import WorkProcces from '../../components/Home/WorkProcces';
import Testimonial from '../../components/Home/Testimonial';
import Counter from '../../components/Home/Counter';
import Blog from '../../components/Home/Blog';
import Swiper from '../../ui/Swiper';

const HomePage = () => {
  return (
    <div>
      <Banners />
      <ClientLogo />
      <About />
      <Features />
      <Video />
      <SocialMedia />
      <WorkProcces />
      <Swiper />
      {/* <Testimonial /> */}
      <Counter />
      <Blog />
    </div>
  );
};

export default HomePage;
