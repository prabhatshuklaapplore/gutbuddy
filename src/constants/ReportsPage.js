export const reportTableColumns = [
  {
    id: "S.No",
    label: "S.No",
    minWidth: 70,
    align: "left",
  },
  {
    id: "docId",
    label: "Document ID",
    minWidth: 70,
    align: "center",
  },
  {
    id: "title",
    label: "Test Name",
    minWidth: 70,
    align: "center",
  },
  {
    id: "createdAt",
    label: "Date",
    minWidth: 70,
    align: "center",
    type: "date",
  },
];
export const reportFormFields = [
  {
    name: "title",
    label: "Test Name",
    type: "text",
    required: true,
  },
  {
    name: "docId",
    label: "Document Id",
    type: "text",
    required: true,
  },
  {
    name: "CreatedAt",
    label: "Date",
    type: "date",
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
  // {
  //   name: "category",
  //   label: "Category",
  //   type: "text",
  //   isMultiSelect: false,
  //   category: "category",
  //   options: [],
  //   required: true,
  // },
  // {
  //   name: "assets",
  //   label: "Image",
  //   type: "text",
  //   required: true,
  // },
  // {
  //   name: "authorName",
  //   label: "Author Name",
  //   type: "text",
  //   requied: true,
  // },
  // {
  //   name: "readTime",
  //   label: "Read Time",
  //   type: "text",
  //   required: true,
  // },
  // {
  //   name: "createdAt",
  //   label: "Publishing Date",
  //   type: "date",
  //   required: false,
  // },
];
