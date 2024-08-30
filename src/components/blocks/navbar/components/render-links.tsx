import LinkType from "types/link";
import ListItemLink from "components/reuseable/links/ListItemLink";

export default function renderLinks(links: LinkType[]) {
  return links.map((item) => (
    <ListItemLink key={item.id} href={item.url} title={item.title} linkClassName="dropdown-item" />
  ));
}
