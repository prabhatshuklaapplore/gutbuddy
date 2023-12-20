export const categoriestableColumns = [
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
    id: "type",
    label: "Type",
    minWidth: 70,
    align: "center",
    type: "text",
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

export const categoriesformFields = [
  { name: "title", label: "Category Name", type: "text", required: true },
  // {
  //   name: "image",
  //   label: "Category Image (.jpeg .jpg .png)",
  //   type: "file",
  //   required: true,
  // },
  {
    name: "asset",
    label: "Category Icon (.svg)",
    type: "text",
    required: true,
  },
  {
    name: "type",
    label: "Type",
    type: "text",
    required: true,
  },
];
