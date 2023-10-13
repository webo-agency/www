const locales = {
  "PL":'pl-PL',
  "EN":'en-US'
}

const domains = {
  PL: "https://webo.pl",
  EN: "https://webo.agency",
};

export default function getPageLangs(pageData:any){
  
  const hreflangs = pageData.hreflangs
  if (!hreflangs) {    
      return []
    }
    let links = []
      for (const [lang,link] of Object.entries(hreflangs)) {
        links.push({
          rel: "alternate",
          lang: lang,
          hreflang: locales[lang as 'PL'|'EN'],
          href: domains[lang as 'PL'|'EN'] + link,
        })
      }
      return links
  };