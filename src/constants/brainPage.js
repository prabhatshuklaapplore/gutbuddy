export const brainTableColumns = [
  {
    id: "title",
    label: "Title",
    minWidth: 70,
    align: "center",
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

export const brainformFields = [
  { name: "title", label: "Title", type: "text", required: true },
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
    category: "subCategory",
    options: [
      // { label: category.title, value: 1z },
      // { label: "gut", value: 2 },
    ],
    required: true,
  },
  {
    name: "assets",
    label: "Video",
    type: "file",
    required: true,
  },
];
