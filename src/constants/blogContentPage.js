export const blogContentTableColumns = [
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
    id: "category",
    label: "Caegory",
    minWidth: 70,
    align: "center",
    type: "text",
  },
  {
    id: "asset",
    label: "Image",
    minWidth: 70,
    align: "center",
    type: "IMAGE",
  },
  {
    id: "name",
    label: "Author name",
    minWidth: 70,
    align: "center",
    type: "text",
  },
  {
    id: "readtime",
    label: "Read Time",
    minWidth: 70,
    align: "center",
    type: "text",
  },
  {
    id: "createdAt",
    label: "Publishing Date",
    minWidth: 70,
    align: "center",
    type: "date",
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
export const blogContentFormFields = [
  { name: "title", label: "Category Name", type: "text", required: false },
  // {
  //   name: "image",
  //   label: "Category Image (.jpeg .jpg .png)",
  //   type: "file",
  //   required: true,
  // },
  {
    name: "title",
    label: "title",
    type: "text",
    required: false,
  },
  // {
  //   id: "image",
  //   label: "Image",
  //   minWidth: 70,
  //   align: "center",
  //   type: "IMAGE",
  // },

  {
    name: "category",
    label: "Caegory",
    type: "text",
    required: false,
  },
  {
    name: "asset",
    label: "Image",
    type: "file",
    required: false,
  },
  {
    name: "name",
    label: "Author name",
    type: "text",
    requied: false,
  },
  {
    name: "readtime",
    label: "Read Time",
    type: "text",
    required: false,
  },
  {
    name: "createdAt",
    label: "Publishing Date",
    type: "date",
    required: false,
  },
];
