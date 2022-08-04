import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
// import WorkFlow from '../sections/workflow';
 import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/package';
import Subscribe from '../sections/subscribe';
import {Form} from '../sections/testimonial' 


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="TechProLanugages" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          {/*<CoreFeature />*/}
          
       
          <Package />
          <br/>
          <br/>
          <br/>
          <br/>
          <TeamSection />
          <br/>
          <br/>
          <br/>
          <br/>
          {/* <BlogSection />
          {/*<Subscribe />*/}
          <TestimonialCard />
          <form/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
