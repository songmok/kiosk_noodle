export interface optionsType {
  optionId: string;
  name: string;
  price: number;
}

export interface menuType {
  categoryId: string;
  menuId: string;
  name: string;
  options: optionsType[];
  recommendation: string;
}

export interface MenuItemType {
  description: string;
  id: string;
  img: string;
  imgMain: string;
  mainCategoryId: string;
  menus: number[];
  name: string;
}
