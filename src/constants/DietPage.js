export const DietTableColumns = [
  {
    id: "title",
    label: "title",
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

export const DietformFields = [
  { name: "title", label: "Category Name", type: "text", required: false },
  // {
  //   name: "image",
  //   label: "Category Image (.jpeg .jpg .png)",
  //   type: "file",
  //   required: true,
  // },
  {
    name: "asset",
    label: "video",
    type: "file",
    required: false,
  },
];
