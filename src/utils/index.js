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

export const styles = {
  button:
    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tractking-wide text-white",
};
