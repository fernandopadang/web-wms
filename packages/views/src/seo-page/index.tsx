import { useRouter } from 'next/router';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { Sanitize } from '@web-wms/helper';

const SeoPage = (props: {type?: string}) => {
  const router = useRouter();
  const domain = "https://dev-web-wms.vercel.app/";
  const pageTitle = router.asPath !== "/" ? "Web WMS - " + Sanitize(String(router.asPath)) : "Web WMS - Application that helps you control and manage operations in a warehouse";
  const description = pageTitle;

  const title =  pageTitle;
  let breadcrumbs;
  let mainImage;
  mainImage = "https://i.ibb.co/5rdvW9F/iconfinder-technologymachineelectronicdevice24-4026436-113326.png";
  breadcrumbs =  [
    {
      position: 1,
      name: "Home",
      item: domain,
    },
    {
      position: 2,
      name: title,
      item: domain + router.asPath,
    }
  ];
  return(
    <div>
      Web WMS
      <NextSeo
        openGraph={{
          type: 'website',
          title,
          description,
          images: [{ url: mainImage, alt: `Logo ${title}`}
          ],
        }}
      />
      <BreadcrumbJsonLd itemListElements={breadcrumbs}/>
      <h1>{title}</h1>
      <div>
        {description}
      </div>
    </div>
  );
};

export default SeoPage;