import { SitemapStream, streamToPromise } from 'sitemap';
export default async (req: any, res: any) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // List of sitemap
    const pages: any[] = [
      {
        slug: '/'
      }
    ];

    // Create each URL row
    pages.forEach(page => {
      smStream.write({
        url: page.slug,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e: any) {
    res.send(JSON.stringify(e));
  }
};