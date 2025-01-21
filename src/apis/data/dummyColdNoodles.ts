import img from "@/assets/image/menu1.png";
import imgMain from "@/assets/image/cold_noodles.png";
export const categories = [
  {
    id: "1",
    name: "냉면",
    description: "온도 약 1~7도",
    mainCategoryId: "1",
    menus: [101, 102],
    img: img,
    imgMain: imgMain,
  },
  {
    id: "2",
    name: "미온면",
    description: "온도 약 5~15도",
    mainCategoryId: "1",
    menus: [201, 202],
    img: img,
    imgMain: imgMain,
  },
  {
    id: "3",
    name: "온면",
    description: "온도 약 15~20도",
    mainCategoryId: "1",
    menus: [301, 302],
    img: img,
    imgMain: imgMain,
  },
];

export const cold_noodles = [
  {
    menuId: "101",
    name: "물냉면",
    categoryId: "1",
    recommendation: "0",
    options: [
      { optionId: "1011", name: "보통", price: 8000 },
      { optionId: "1012", name: "곱빼기", price: 10000 },
    ],
  },
  {
    menuId: "102",
    name: "비빔냉면",
    categoryId: "1",
    recommendation: "1",
    options: [
      { optionId: "1021", name: "보통", price: 8000 },
      { optionId: "1022", name: "곱빼기", price: 10000 },
    ],
  },
  {
    menuId: "201",
    name: "물미온면",
    categoryId: "2",
    recommendation: "0",
    options: [
      { optionId: "2011", name: "보통", price: 8000 },
      { optionId: "2012", name: "곱빼기", price: 10000 },
    ],
  },
  {
    menuId: "202",
    name: "비빔미온면",
    categoryId: "2",
    recommendation: "1",
    options: [
      { optionId: "2021", name: "보통", price: 8000 },
      { optionId: "2022", name: "곱빼기", price: 10000 },
    ],
  },
  {
    menuId: "301",
    name: "물온면",
    categoryId: "3",
    recommendation: "0",
    options: [
      { optionId: "3011", name: "보통", price: 8000 },
      { optionId: "3012", name: "곱빼기", price: 10000 },
    ],
  },
  {
    menuId: "302",
    name: "비빔온면",
    categoryId: "3",
    recommendation: "1",
    options: [
      { optionId: "3021", name: "보통", price: 8000 },
      { optionId: "3022", name: "곱빼기", price: 10000 },
    ],
  },
];
