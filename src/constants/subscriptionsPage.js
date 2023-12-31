export const subscriptiontableColumns = [
  {
    id: "name",
    label: "Subscription Name",
    minWidth: 170,
    align: "left",
  },
  {
    id: "color",
    label: "Color",
    minWidth: 70,
    align: "left",
  },
  {
    id: "eventsLimit",
    label: "Event (per month)",
    minWidth: 200,
    align: "center",
  },
  {
    id: "venuesLimit",
    label: "Event (per month)",
    minWidth: 200,
    align: "center",
  },
  {
    id: "offersLimit",
    label: "Offers",
    minWidth: 70,
    align: "center",
  },
  {
    id: "instaStoryLimit",
    label: "Insta Story (per month)",
    minWidth: 200,
    align: "center",
  },
  {
    id: "pushNotificationLimit",
    label: "Push Notification (per month)",
    minWidth: 250,
    align: "center",
  },
  {
    id: "photosLimit",
    label: "Photo Limit (per event)",
    minWidth: 200,
    align: "center",
  },
  {
    id: "videoLimit",
    label: "Video Limit (per event)",
    minWidth: 200,
    align: "center",
  },
  {
    id: "socialMediaLink",
    label: "Social Media Links",
    minWidth: 170,
    align: "center",
  },
  {
    id: "ticketSystem",
    label: "Ticket System",
    minWidth: 150,
    align: "center",
  },
  // {
  //   id: "validity",
  //   label: "Validity",
  //   minWidth: 70,
  //   align: "center",
  // },
  {
    id: "amount",
    label: "Amount(per month)",
    minWidth: 170,
    align: "center",
  },
  {
    id: "annualDiscount",
    label: "Discount (annual) %",
    minWidth: 170,
    align: "center",
  },
  {
    id: "freeMonthOnPurchase",
    label: "Free Month",
    minWidth: 120,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

export const subscriptionformFields = [
  { name: "name", label: "Subscription Name", type: "text", required: true },
  {
    name: "description",
    label: "Subscription Description",
    type: "text",
    required: true,
  },
  {
    name: "color",
    label: "Subscription Color",
    type: "color",
    required: true,
  },
  {
    name: "eventsLimit",
    label: "Subscription Event Limit (per month)",
    type: "text",
    required: true,
  },
  {
    name: "venuesLimit",
    label: "Subscription Venue Limit (per month)",
    type: "text",
    required: true,
  },
  {
    name: "offersLimit",
    label: "Subscription Offer Limit",
    type: "text",
    required: true,
  },
  {
    name: "instaStoryLimit",
    label: "Insta Story (per month)",
    type: "text",
    required: true,
  },
  {
    name: "pushNotificationLimit",
    label: "Push Notification (per month)",
    type: "text",
    required: true,
  },
  {
    name: "photosLimit",
    label: "Subscription Photos Limit (per event)",
    type: "text",
    required: true,
  },
  {
    name: "videoLimit",
    label: "Subscription Videos Limit (per event)",
    type: "text",
    required: true,
  },
  {
    name: "socialMediaLink",
    label: "Social Media Links (per event)",
    type: "text",
    required: true,
    isMultiSelect: false,
    options: ["true", "false"],
  },
  {
    name: "ticketSystem",
    label: "Ticket System",
    type: "text",
    required: true,
    isMultiSelect: false,
    options: ["true", "false"],
  },
  {
    name: "amount",
    label: "Subscription Price (monthly)",
    type: "text",
    required: true,
  },
  {
    name: "annualDiscount",
    label: "Discount Percentage (annual)",
    type: "text",
    required: true,
  },
  {
    name: "freeMonthOnPurchase",
    label: "Free Month",
    type: "text",
    required: true,
  },
  // {
  //   name: "validity",
  //   label: "Subscription Validity",
  //   type: "text",
  //   required: true,
  // },
];
