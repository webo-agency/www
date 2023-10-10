interface navItem {
  name: string;
  link?: string;
  description?: string;
  button?: boolean;
  menu?: {
    title?: string;
    links: navItem[];
  };
}

export default function formatNavItems(items: any[], depth: number) {
  let navMenu: any[] = [];
  items.forEach((item) => {
    let isChild =
      items.filter((p) => item._path.startsWith(p._path)).length == 2;
    if (depth == 0 && isChild) {
      return;
    }

    let itemFormatted: navItem = {
      name: item.name,
      link: item.link ? item.link : ((item.public === false || item.draft === true ) ? "" : `https://www.webo.agency${item._path}`),
      description: item.description,
      button: item.navButton ?? false,
    };

    let nestedItems = items.filter(
      (p) => p._path.startsWith(item._path) && p._path !== item._path
    );
    if (nestedItems.length > 0) {
      itemFormatted.menu = {
        title: itemFormatted.description,
        links: formatNavItems(nestedItems, depth + 1),
      };
    }

    navMenu.push(itemFormatted);
  });

  return navMenu;
}
