export const navOptions = [
  {
    id: "home",
    label: "หน้าหลัก",
    path: "/",
  },
  {
    id: "listing",
    label: "สินค้าทั้งหมด",
    path: "/products/listing/all-products",
  },

  {
    id: "listingSwitch-powerplug",
    label: "สวิทซ์และปลั๊กไฟ",
    path: "/products/listing/switch-powerplug ",
  },
  {
    id: "listingPipe-equipment",
    label: "ท่อและอุปกรณ์ท่อ",
    path: "/products/listing/pipe-equipment",
  },

  {
    id: "listingPower-cable",
    label: "สายไฟ",
    path: "/products/listing/power-cable ",
  },
  {
    id: "listingLight-cabinet ",
    label: "ตู้ไฟ",
    path: "/products/listing/light-cabinet ",
  },
  {
    id: "listingLight-bulb ",
    label: "หลอดไฟ",
    path: "/products/listing/Light-bulb  ",
  },
];
export const adminNavOption = [
  {
    id: "adminListing",
    label: "จัดการผลิตภัณฑ์",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "เพิ่มสินค้า",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },

  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "sizes",
    type: "number",
    placeholder: "Enter Lable Sizes",
    label: "Availablesizes",
    componentType: "input",
  },
  {
    id: "unIt",
    type: "",
    placeholder: "",
    label: "Unit",
    componentType: "select",
    options: [
      {
        id: "M",
        label: "เมตร",
      },
      {
        id: "Cm",
        label: "เซนติเมตร",
      },
      {
        id: "mm",
        label: "มิลลิเมตร",
      },
      {
        id: "Box",
        label: "ช่อง",
      },
      {
        id: "N",
        label: "นิ้ว",
      },
      {
        id: "W",
        label: "วัตต์",
      },
    ],
  },
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "Switch-powerplugen",
        label: "สวิทซ์และปลั๊กไฟ",
      },
      {
        id: "Pipe-equipment",
        label: "ท่อและอุปกรณ์ท่อ",
      },
      {
        id: "Power-cable",
        label: "สายไฟ",
      },
      {
        id: "Light-cabinet",
        label: "ตู้ไฟ",
      },
      {
        id: "Light-bulb",
        label: "หลอดไฟ",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyBVamPOYNuDKFXHm37jqp_wXYnL2EBDjbY",
  authDomain: "next-js-ecommerce-2023-58702.firebaseapp.com",
  projectId: "next-js-ecommerce-2023-58702",
  storageBucket: "next-js-ecommerce-2023-58702.appspot.com",
  messagingSenderId: "48031076810",
  appId: "1:48031076810:web:c0bda390e68c99b4f7ff33",
  measurementId: "G-D6HR1TWR55",
};
export const firebaseStroageURL =
  "gs://next-js-ecommerce-2023-58702.appspot.com/";
