export const gutCategoryTableColumns = [
  {
    id: "title",
    label: "Category Name",
    minWidth: 70,
    align: "left",
  },
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

export const gutCategoryFormFields = [
  { name: "title", label: "Category Name", type: "text", required: true },
  {
    name: "asset",
    label: "Category Icon (.svg, png, jpg)",
    type: "file",
    required: true,
  },
];
