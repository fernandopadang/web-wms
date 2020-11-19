import React from 'react';
import SectionNav from './components/navbar';
import SectionBanner from './components/banner';
import SectionFeatureTop from './components/feature-top';
import SectionContent from './components/content';
import SectionFeatureBottom from './components/feature-bottom';
import SectionFooter from './components/footer';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import {
  NavDataSource,
  BannerDataSource,
  FeatureDataSourceTop,
  ContentDataSource,
  FeatureDataSourceBottom,
  FooterDataSource,
} from './script/data-landing';
import './less/antMotionStyle.less';

interface DefaultProps {
  isMobile: boolean;
}

const landingDescription = "Hello! My name is Michael Fernando Padang. A career in Information Technology, specifically in the areas of application development and IT consulting that will optimally utilize strong planning skills, analytical skills as well as JavaScript, Typescript, PHP programming skills, SQL database skill, and Business Process Analysis in order to work individually or teamwork, leadership skills, time-management and communications skills.";

const LandingPage = (props: DefaultProps) => {
  const children = [
    <SectionNav
      id="section-navbar-key"
      key="section-navbar-key"
      dataSource={NavDataSource}
      isMobile={props.isMobile}
    />,
    <SectionBanner
      id="section-banner-key"
      key="section-banner-key"
      dataSource={BannerDataSource}
      isMobile={props.isMobile}
    />,
    <SectionFeatureTop
      id="feature-tops"
      key="feature-tops"
      dataSource={FeatureDataSourceTop}
      isMobile={props.isMobile}
    />,
    <SectionContent
      id="Content5_0"
      key="Content5_0"
      dataSource={ContentDataSource}
      isMobile={props.isMobile}
    />,
    <SectionFeatureBottom
      id="feature-downs"
      key="feature-downs"
      dataSource={FeatureDataSourceBottom}
      isMobile={props.isMobile}
    />,
    <SectionFooter
      id="section-footer-key"
      key="section-footer-key"
      dataSource={FooterDataSource}
      isMobile={props.isMobile}
    />,
  ];
  return (
    <div>
      <NextSeo title="Michael Fernando Padang" description={`${landingDescription.substring(0, 250)}...`} />
      <h1 style={{display: "none"}}>Michael Fernando Padang</h1>
      {children}
    </div>
  );
};

export default LandingPage;
