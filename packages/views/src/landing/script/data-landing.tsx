import React from 'react';
export const NavDataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper nav-wrapper' },
  page: { className: 'home-page nav-page' },
  logo: {
    className: 'header2-logo',
    children: 'https://i.ibb.co/0QF0bwB/LOGO-WEBSITE-4.png',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: 'https://vue.fernandopadang.tech',
        children: 'Vue App',
        className: 'menu-item nav-linkmenu-dashboard',
      },
      {
        name: 'linkNav~khf9fyewgzb',
        to: '/login',
        children: 'Sign In',
        className: 'menu-item nav-linkmenu-signin',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
};
export const BannerDataSource = {
  wrapper: { className: 'banner3 banner-wrapper' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'Michael Fernando Padang',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <span>
              <p>Learn tommorow's skills, today.</p>
            </span>
          </span>
        ),
      },
    ],
  },
};
export const FeatureDataSourceTop = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: { children: 'https://i.ibb.co/vZF4pxH/circle-cropped.png' },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>Software Engineer</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <span>
            <p>
              Hello! My name is Michael Fernando Padang. A career in Information
              Technology, specifically in the areas of application development
              and IT consulting that will optimally utilize strong planning
              skills, analytical skills as well as JavaScript, Typescript, PHP
              programming skills, SQL database skill, and Business Process
              Analysis in order to work individually or teamwork, leadership
              skills, time-management and communications skills.<br />
            </p>
          </span>
        </span>
      </span>
    ),
  },
};
export const ContentDataSource = {
  wrapper: {
    className: 'home-page-wrapper content5-wrapper content-wrapper',
  },
  page: { className: 'home-page content5 content-data-section-page' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>MOST USED FRONTEND FRAMEWORK</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1 content-title-h1',
      },
      {
        name: 'content',
        className: 'title-content content-title-content',
        children: '-------',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content content-data-block-children-1',
          },
          img: {
            children:
              'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
            className: 'content-data-block-classname-1',
          },
          content: {
            children: (
              <span>
                <span>
                  <span>
                    <p>Next</p>
                  </span>
                </span>
              </span>
            ),
            className: 'content-data-content-children-classname-1',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content content5-block-content-children',
          },
          img: {
            children: 'https://i.ibb.co/WnjRYsf/UIHere.png',
            className: 'content5-block-content-children-image',
          },
          content: {
            children: (
              <span>
                <p>React</p>
              </span>
            ),
            className: 'content5-block-content-children-image-classname',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content content5-block-content-children-image-classname-5',
          },
          img: {
            children: 'https://i.ibb.co/0nK0J14/UIHere-1.png',
            className: 'content5-block-content-children-image-classname-2',
          },
          content: {
            children: (
              <span>
                <p>Vue</p>
              </span>
            ),
            className: 'content5-block-content-children-image-classname-vue',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content content5-block-content-children-image-classname-angular',
          },
          img: {
            children: 'https://i.ibb.co/fr7rhcQ/UIHere-2.png',
            className: 'content5-block-content-children-image-classname-3',
          },
          content: {
            children: (
              <span>
                <p>Angular</p>
              </span>
            ),
            className: 'content5-block-content-children-image-classname-4',
          },
        },
      },
    ],
  },
};
export const FeatureDataSourceBottom = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: { children: 'https://i.ibb.co/Pz4VjNx/circle-cropped-1.png' },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <p>A Day in the Life of a Software Engineer - FE</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <span>
            <span>
              <p>
                Build user interfaces and prototypes from wireframe and designs,
                code and deploy applications in a cross-platform, cross-browser
                environtment, integration with API for binding data, and update
                current websites to meet modern web standards
              </p>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
export const FooterDataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper footer-wrapper',
  },
  OverPack: {
    className: 'home-page footer0 footer-over-pack',
    playScale: 0.05,
  },
  copyright: {
    className: 'copyright footer-copyright',
    children: (
      <span>
        <span>
          <span>©2019 All Rights Reserved</span>
        </span>
      </span>
    ),
  },
};
