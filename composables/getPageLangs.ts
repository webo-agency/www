interface langData {
  lang: string;
  hreflang: string;
  href: string;
}

const locales = {
  PL: "pl-PL",
  EN: "en-US",
};

const domains = {
  PL: "https://webo.pl",
  EN: "https://webo.agency",
};

export default function getPageLangs(pageData: any) {
  const hreflangs = pageData.hreflangs;
  if (!hreflangs) {
    return [];
  }
  let links: langData[] = [];
  for (const [lang, link] of Object.entries(hreflangs)) {
    let item: langData = {
      lang: lang,
      hreflang: locales[lang as "PL" | "EN"],
      href: domains[lang as "PL" | "EN"] + link,
    };
    links.push(item);
  }
  return links;
}
