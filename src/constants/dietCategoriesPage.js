export const dietCategoryTableColumns = [
  {
    id: "title",
    label: "Category Name",
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
  {
    id: "asset",
    label: "Icon",
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

export const dietCategoryFormFields = [
  { name: "title", label: "Category Name", type: "text", required: true },
  // {
  //   name: "image",
  //   label: "Category Image (.jpeg .jpg .png)",
  //   type: "file",
  //   required: true,
  // },
  {
    name: "asset",
    label: "Category Icon (.svg, png, jpeg)",
    type: "file",
    required: true,
  },
];
