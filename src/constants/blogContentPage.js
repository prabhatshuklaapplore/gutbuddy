export const blogContentTableColumns = [
  {
    id: "S.No",
    label: "id",
    minWidth: 70,
    align: "left",
  },
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

  // {
  //   id: "category.title",
  //   label: "Catgory",
  //   minWidth: 70,
  //   align: "center",
  //   type: "text",
  // },
  {
    id: "assets",
    label: "Image",
    minWidth: 70,
    align: "center",
    type: "IMAGE",
  },
  {
    id: "authorName",
    label: "Author Name",
    minWidth: 70,
    align: "center",
    type: "text",
  },
  {
    id: "readTime",
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
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    required: true,
  },
  // {
  //   name: "image",
  //   label: "Category Image (.jpeg .jpg .png)",
  //   type: "file",
  //   required: true,
  // },
  // {
  //   id: "image",
  //   label: "Image",
  //   minWidth: 70,
  //   align: "center",
  //   type: "IMAGE",
  // },

  // {
  //   name: "category",
  //   label: "Category",
  //   type: "text",
  //   isMultiSelect: false,
  //   options: ["Diet", "Brain"],
  //   required: false,
  // },
  {
    name: "category",
    label: "Category",
    type: "text",
    isMultiSelect: false,
    category: "category",
    options: [],
    required: true,
  },
  {
    name: "assets",
    label: "Image",
    type: "text",
    required: true,
  },
  {
    name: "authorName",
    label: "Author Name",
    type: "text",
    requied: true,
  },
  {
    name: "readTime",
    label: "Read Time",
    type: "text",
    required: true,
  },
  // {
  //   name: "createdAt",
  //   label: "Publishing Date",
  //   type: "date",
  //   required: false,
  // },
];
