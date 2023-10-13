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
    path: "/admin-view/all-product",
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
