import { category } from "../pages/Diet/Diet";

export const DietTableColumns = [
  {
    id: "title",
    label: "Title",
    minWidth: 70,
    align: "left",
  },
  // {
  //   id: "image",
  //   label: "Image",
  //   minWidth: 70,
  //   align: "center",
  //   type: "IMAGE",
  // },

  // {
  //   id: "subCategory?.title",
  //   label: "Sub Category",
  //   minWidth: 70,
  //   align: "center",
  //   type: "left",
  // },
  {
    id: "assets",
    label: "Video",
    minWidth: 70,
    align: "center",
    type: "IMAGE",
  },
  {
    id: "active",
    label: "Active",
    minWidth: 70,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

export const DietformFields = [
  { name: "title", label: "Category Name", type: "text", required: false },
  // {
  //   name: "image",
  //   label: "Category Image (.jpeg .jpg .png)",
  //   type: "file",
  //   required: true,
  // },
  {
    name: "subCategory",
    label: "Category",
    type: "text",
    isMultiSelect: false,
    options: [
      // { label: category.title, value: 1z },
      // { label: "gut", value: 2 },
    ],
    required: false,
  },
  {
    name: "assets",
    label: "video",
    type: "text",
    required: false,
  },
];
