import rawMenu from "../../resources/menu.json?raw";

export type MenuEntryType = "section" | "item";

export interface RawMenuEntry {
  id: number;
  parent_item_id: number;
  takeaway_id: number;
  type: MenuEntryType;
  name: string;
  description: string | null;
  option_json: unknown;
  price: string | null;
  weight: number;
  image: string | null;
  is_available?: number;
  comes_with?: string | null;
}

export interface MenuItem {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  image?: string | null;
  comesWith?: string | null;
}

export interface MenuSection {
  id: number;
  name: string;
  description?: string | null;
  items: MenuItem[];
}

function parseRawMenu(): RawMenuEntry[] {
  const trimmed = rawMenu.trim();
  if (!trimmed.startsWith("{")) {
    return JSON.parse(trimmed) as RawMenuEntry[];
  }
  const inner = trimmed.slice(1, -1).trim();
  const wrapped = `[${inner}]`.replace(/\n/g, "");
  const data = JSON.parse(wrapped) as RawMenuEntry[][];
  return data.flat();
}

const rawEntries = parseRawMenu();

const sectionMap = new Map<number, MenuSection>();

for (const entry of rawEntries) {
  if (entry.type === "section") {
    sectionMap.set(entry.id, {
      id: entry.id,
      name: entry.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: entry.description,
      items: [],
    });
  }
}

for (const entry of rawEntries) {
  if (entry.type === "item") {
    const section = sectionMap.get(entry.parent_item_id);
    if (!section) continue;
    const price = entry.price ? Number.parseFloat(entry.price) : 0;
    section.items.push({
      id: entry.id,
      name: entry.name,
      description: entry.description,
      price,
      image: entry.image ?? undefined,
      comesWith: entry.comes_with ?? undefined,
    });
  }
}

export const menuSections: MenuSection[] = Array.from(sectionMap.values()).map(
  (section) => ({
    ...section,
    items: section.items.sort((a, b) => a.name.localeCompare(b.name)),
  })
);

export const featuredSections = menuSections
  .filter((section) => section.items.length > 0)
  .slice(0, 4);
