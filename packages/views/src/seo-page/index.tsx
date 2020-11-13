import { useRouter } from 'next/router';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { Sanitize } from '@web-wms/helper';

const SeoPage = (props: {type?: string}) => {
  const router = useRouter();
  const domain = "https://dev-web-wms.vercel.app/";
  const pageTitle = router.asPath !== "/" ? "Web WMS - " + Sanitize(String(router.asPath)) : "Web WMS - Application that helps you control and manage operations in a warehouse";
  let description = pageTitle + " : Application that helps you control and manage operations in a warehouse";

  const title =  props.type === "LANDING" ? "Michael Fernando Padang - Landing Page" : pageTitle ;
  const landingDescription = "Hello! My name is Michael Fernando Padang. A career in Information Technology, specifically in the areas of application development and IT consulting that will optimally utilize strong planning skills, analytical skills as well as JavaScript, Typescript, PHP programming skills, SQL database skill, and Business Process Analysis in order to work individually or teamwork, leadership skills, time-management and communications skills.";
  let breadcrumbs;
  let mainImage;
  mainImage = props.type === "LANDING" ? "https://i.ibb.co/vZF4pxH/circle-cropped.png" : "https://i.ibb.co/5rdvW9F/iconfinder-technologymachineelectronicdevice24-4026436-113326.png";
  description = props.type === "LANDING" ? landingDescription : description;
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
      <NextSeo
        description={description}
        title={title}
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
      <span>{description}</span>
      {props.type === "LANDING" && <img src="https://i.ibb.co/vZF4pxH/circle-cropped.png" alt="Michael Fernando Padang" width="20%" />}
    </div>
  );
};

export default SeoPage;