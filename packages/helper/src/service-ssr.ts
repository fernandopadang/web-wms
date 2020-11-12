const userAgentToSSR: string[] = ["WhatsApp", "facebookexternalhit", "Google-Structured-Data-Testing-Tool", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "ia_archiver"];
export default {
  checkUserAgent(userAgent: string){
    let has = false;
    userAgentToSSR.filter((agent) => {
      if (userAgent.includes(agent)){
        has = true;
      }
    });
    return has;
  }
};