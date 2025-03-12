import prod1 from "../assets/images/prod1.png";
import prod2 from "../assets/images/prod2.png";
import prod3 from "../assets/images/prod3.png";
import prod4 from "../assets/images/prod4.png";
import prod5 from "../assets/images/prod5.png";
import prod6 from "../assets/images/prod6.png";
import prod7 from "../assets/images/prod7.png";
import prod8 from "../assets/images/prod8.png";
import room1 from "../assets/images/room1.png";
import living_room1 from "../assets/images/living_room_1.png";
import living_room2 from "../assets/images/living_room_2.png";
import living_room3 from "../assets/images/living_room_3.png";
import living_room4 from "../assets/images/living_room_4.png";
import kitchen1 from "../assets/images/kitchen_1.png";
import kitchen2 from "../assets/images/kitchen_2.png";
import kitchen3 from "../assets/images/kitchen_3.png";
import kitchen4 from "../assets/images/kitchen_4.png";
import dining_room1 from "../assets/images/dining_room_1.png";
import dining_room2 from "../assets/images/dining_room_2.png";
import dining_room3 from "../assets/images/dining_room_3.png";
import dining_room4 from "../assets/images/dining_room_4.png";
import home_office1 from "../assets/images/home_office_1.png";
import home_office2 from "../assets/images/home_office_2.png";
import home_office3 from "../assets/images/home_office_3.png";
import home_office4 from "../assets/images/home_office_4.png";
import room1_1 from "../assets/images/room1_1.png";
import room1_2 from "../assets/images/room1_2.png";
import room1_3 from "../assets/images/room1_3.png";
import about_us_carousal_1 from "../assets/images/prod1.png";
import about_us_carousal_2 from "../assets/images/room5.png";
import about_us_carousal_3 from "../assets/images/room2.png";
import about_us_carousal_4 from "../assets/images/grid_7.png";
import about_us_carousal_5 from "../assets/images/prod3.png";
import PlaceIcon from "@mui/icons-material/Place";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import dining from "../assets/images/dining.jpg";
import living from "../assets/images/living.jpg";
import bedroom from "../assets/images/bedroom.jpg";

import member1 from "../assets/images/businessMan1.png";
import member2 from "../assets/images/aaa.png";
import {
  Dimensions,
  General,
  ProductDetails,
  Warranty,
} from "../types/globalTypes";

const products: Product[] = [
  {
    _id: "Aadasjdljdsadklsjkdsaklks",
    productName: "L-Shaped Sectional Sofa",
    shortName: "LuxSofa",
    mainImage: prod1,
    productImages: { "#225478": [] },
    price: 22000,
    rating: 4.5,
    discount: 20,
    createdAt: "2024-07-01T00:00:00.000Z",
    general: {
      salesPackage: "1 sectional sofa",
      modelNumber: "TFCBUGRBL6SRHS",
      secondaryMaterial: "Solid Wood",
      configuration: "L-shaped",
      upholsteryMaterial: "Fabric Cotton",
      upholsteryColor: "Bright Grey & Lion",
    },
    productDetails: {
      fillingMaterial: "Fcxtm",
      finishType: "Bright Grey & Lion",
      adjustableHeadrest: false, // "YES" | "NO"
      maximumLoadCapacity: 280, // in KG
      originOfManufacture: "India",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 265.32, //cm
      height: 76, // cm
      depth: 167.76, // cm
      weight: 45, //kg
      seatHeight: 41.52, // cm
      legHeight: 5.46, //cm
    },
    warranty: {
      warrantySummary: "1 Year Manufacturing Warranty",
      warrantyServiceType:
        "For Warranty Claims or Any Related Issues, Please Email at operations@trevifurniture.com",
      coveredInWarranty: "Warranty Against Manufacturing Defect",
      notCoveredInWarranty:
        "The Warranty Does Not Cover Usage Beyond Its Intended Use or Wear & Tear Due to Natural Product Usage",
      domesticWarranty: "1 year",
    },
  },
  {
    _id: "Bxy123fghjkl78vbnml",
    productName: "Modern Wooden Coffee Table",
    shortName: "WoodCoffee",
    mainImage: prod2,
    productImages: {},
    price: 12000,
    rating: 4.7,
    discount: 0,
    createdAt: "2024-02-01T00:00:00.000Z",
    general: {
      salesPackage: "1 Coffee Table",
      modelNumber: "MODWCFTBL123",
      secondaryMaterial: "Tempered Glass",
      configuration: "Rectangular",
      upholsteryMaterial: "None",
      upholsteryColor: "N/A",
    },
    productDetails: {
      fillingMaterial: "N/A",
      finishType: "Natural Oak",
      adjustableHeadrest: false,
      maximumLoadCapacity: 150,
      originOfManufacture: "India",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 120,
      height: 45,
      depth: 60,
      weight: 30,
      seatHeight: 0,
      legHeight: 10,
    },
    warranty: {
      warrantySummary: "6 Months Warranty",
      warrantyServiceType:
        "For any warranty claims, contact support@woodworks.com",
      coveredInWarranty: "Warranty Against Manufacturing Defect",
      notCoveredInWarranty: "Wear & Tear Due to Natural Usage",
      domesticWarranty: "6 months",
    },
  },
  {
    _id: "Ccd234rtyui89asdfgh",
    productName: "Ergonomic Office Chair",
    shortName: "ErgoChair",
    mainImage: prod3,
    productImages: {},
    price: 8500,
    rating: 4.2,
    discount: 0,
    createdAt: "2024-09-20T00:00:00.000Z",
    general: {
      salesPackage: "1 Office Chair",
      modelNumber: "ERGOCH1234",
      secondaryMaterial: "Plastic",
      configuration: "Swivel",
      upholsteryMaterial: "Mesh",
      upholsteryColor: "Black",
    },
    productDetails: {
      fillingMaterial: "Foam",
      finishType: "Matte Black",
      adjustableHeadrest: true,
      maximumLoadCapacity: 120,
      originOfManufacture: "China",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 65,
      height: 120,
      depth: 70,
      weight: 12,
      seatHeight: 45,
      legHeight: 0,
    },
    warranty: {
      warrantySummary: "2 Year Warranty",
      warrantyServiceType: "For warranty claims, email service@ergochairs.com",
      coveredInWarranty: "Manufacturing Defects",
      notCoveredInWarranty: "Wear and tear, improper use",
      domesticWarranty: "2 years",
    },
  },
  {
    _id: "Def345hjkl09qwertz",
    productName: "Queen Size Bed with Storage",
    shortName: "StorageBed",
    mainImage: prod4,
    productImages: {},
    price: 32000,
    rating: 4.8,
    discount: 25,
    createdAt: "2024-08-15T00:00:00.000Z",
    general: {
      salesPackage: "1 Queen Size Bed",
      modelNumber: "QSBDSTRG123",
      secondaryMaterial: "Engineered Wood",
      configuration: "Bed with Storage",
      upholsteryMaterial: "Leatherette",
      upholsteryColor: "Dark Brown",
    },
    productDetails: {
      fillingMaterial: "N/A",
      finishType: "Walnut",
      adjustableHeadrest: false,
      maximumLoadCapacity: 400,
      originOfManufacture: "Malaysia",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 180,
      height: 90,
      depth: 200,
      weight: 75,
      seatHeight: 50,
      legHeight: 5,
    },
    warranty: {
      warrantySummary: "3 Year Warranty",
      warrantyServiceType: "For warranty claims, email support@bedstore.com",
      coveredInWarranty: "Manufacturing Defects",
      notCoveredInWarranty: "Physical damages due to misuse",
      domesticWarranty: "3 years",
    },
  },
  {
    _id: "Fgh456yuiop12sdfgty",
    productName: "Glass Dining Table Set",
    shortName: "GlassDine",
    mainImage: prod5,
    productImages: {},
    price: 18000,
    rating: 4.6,
    discount: 12,
    createdAt: "2024-09-05T00:00:00.000Z",
    general: {
      salesPackage: "1 Dining Table with 4 Chairs",
      modelNumber: "GLSDINE123",
      secondaryMaterial: "Metal",
      configuration: "Rectangular",
      upholsteryMaterial: "Leatherette",
      upholsteryColor: "Beige",
    },
    productDetails: {
      fillingMaterial: "Foam",
      finishType: "Glossy",
      adjustableHeadrest: false,
      maximumLoadCapacity: 200,
      originOfManufacture: "Vietnam",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 150,
      height: 75,
      depth: 90,
      weight: 50,
      seatHeight: 45,
      legHeight: 15,
    },
    warranty: {
      warrantySummary: "1 Year Warranty",
      warrantyServiceType: "Contact dining@tableshop.com for warranty claims",
      coveredInWarranty: "Defects in Material",
      notCoveredInWarranty: "Glass breakage or scratches",
      domesticWarranty: "1 year",
    },
  },
  {
    _id: "Ijk567fghjkl23vbnmqa",
    productName: "Leather Recliner Sofa",
    shortName: "ReclineSofa",
    mainImage: prod6,
    productImages: {},
    price: 45000,
    rating: 4.9,
    discount: 0,
    createdAt: "2024-01-03T00:00:00.000Z",
    general: {
      salesPackage: "1 Recliner Sofa",
      modelNumber: "RCLNSF12345",
      secondaryMaterial: "Metal Frame",
      configuration: "Recliner",
      upholsteryMaterial: "Genuine Leather",
      upholsteryColor: "Dark Brown",
    },
    productDetails: {
      fillingMaterial: "Foam",
      finishType: "Matte",
      adjustableHeadrest: true,
      maximumLoadCapacity: 350,
      originOfManufacture: "Italy",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 220,
      height: 95,
      depth: 100,
      weight: 80,
      seatHeight: 45,
      legHeight: 10,
    },
    warranty: {
      warrantySummary: "5 Year Warranty",
      warrantyServiceType: "For claims, email recliners@sofastore.com",
      coveredInWarranty: "Manufacturing Defects",
      notCoveredInWarranty: "Leather fading or peeling",
      domesticWarranty: "5 years",
    },
  },
  {
    _id: "Jkl678qwerty45asdfgh",
    productName: "Corner TV Unit",
    shortName: "CornerTV",
    mainImage: prod7,
    productImages: {},
    price: 9000,
    rating: 4.3,
    discount: 0,
    createdAt: "2024-04-25T00:00:00.000Z",
    general: {
      salesPackage: "1 TV Unit",
      modelNumber: "CRNTV12345",
      secondaryMaterial: "Engineered Wood",
      configuration: "Corner Unit",
      upholsteryMaterial: "None",
      upholsteryColor: "N/A",
    },
    productDetails: {
      fillingMaterial: "N/A",
      finishType: "Walnut Finish",
      adjustableHeadrest: false,
      maximumLoadCapacity: 100,
      originOfManufacture: "India",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 100,
      height: 60,
      depth: 40,
      weight: 20,
      seatHeight: 0,
      legHeight: 10,
    },
    warranty: {
      warrantySummary: "1 Year Warranty",
      warrantyServiceType: "Contact support@tvunits.com for warranty issues",
      coveredInWarranty: "Manufacturing Defects",
      notCoveredInWarranty: "Damage due to improper usage",
      domesticWarranty: "1 year",
    },
  },
  {
    _id: "Lmn789asdfgh67qwerty",
    productName: "Wooden Bookshelf",
    shortName: "BookShelfWood",
    mainImage: prod8,
    productImages: {},
    price: 15000,
    rating: 4.4,
    discount: 0,
    createdAt: "2024-09-10T00:00:00.000Z",
    general: {
      salesPackage: "1 Bookshelf",
      modelNumber: "BSHFLWD4567",
      secondaryMaterial: "Metal",
      configuration: "Vertical",
      upholsteryMaterial: "None",
      upholsteryColor: "N/A",
    },
    productDetails: {
      fillingMaterial: "N/A",
      finishType: "Teak Finish",
      adjustableHeadrest: false,
      maximumLoadCapacity: 200,
      originOfManufacture: "India",
      productDescription: "",
      colors: [],
      productFullDescription: "",
    },
    dimensions: {
      width: 80,
      height: 180,
      depth: 30,
      weight: 35,
      seatHeight: 0,
      legHeight: 10,
    },
    warranty: {
      warrantySummary: "2 Year Warranty",
      warrantyServiceType: "For warranty issues, contact service@bookstore.com",
      coveredInWarranty: "Manufacturing Defects",
      notCoveredInWarranty: "Scratches or accidental damage",
      domesticWarranty: "2 years",
    },
  },
];

const rooms: Room[] = [
  {
    roomName: "Bed Room",
    title: "Inner Peace",
    roomImage: room1,
    images: [room1, room1_1, room1_2, room1_3],
  },
  {
    roomName: "Living Room",
    title: "Modern Comfort",
    roomImage: living_room1,
    images: [living_room1, living_room2, living_room3, living_room4],
  },
  {
    roomName: "Kitchen",
    title: "Sleek & Stylish",
    roomImage: kitchen1,
    images: [kitchen1, kitchen2, kitchen3, kitchen4],
  },
  {
    roomName: "Dining Room",
    title: "Elegance in Simplicity",
    roomImage: dining_room1,
    images: [dining_room1, dining_room2, dining_room3, dining_room4],
  },
  {
    roomName: "Home Office",
    title: "Productive Spaces",
    roomImage: home_office1,
    images: [home_office1, home_office2, home_office3, home_office4],
  },
];

const about_us_carousal = [
  about_us_carousal_1,
  about_us_carousal_2,
  about_us_carousal_3,
  about_us_carousal_4,
  about_us_carousal_5,
];

const about_us_hero_markers = [
  "flexible time",
  "Quality Craftsmanship",
  "client priority",
  "Innovative Designs",
  "perfect work",
  "Seamless Experience",
];

const about_us_hero_numbers = [
  {
    title: "Experience",
    number: 15,
    symbol: "Y",
  },
  {
    title: "Best Team",
    number: 25,
    symbol: "+",
  },
  {
    title: "Total Client",
    number: 500,
    symbol: "+",
  },
];

const team_members = [
  {
    jobTitle: "Founder",
    name: "John Leno",
    image: member1,
  },
  {
    jobTitle: "E-Commerce Manager",
    name: "Saar Kaya",
    image: member2,
  },
  {
    jobTitle: "Product Curator",
    name: "Lionello Buccho",
    image: undefined,
  },
];

const contact_us_details = [
  {
    icon: PlaceIcon,
    title: "Address",
    text: "236 5th SE Avenue, New York NY10000, United States",
  },
  {
    icon: LocalPhoneIcon,
    title: "Phone",
    text: "Mobile: +(84) 546-6789 Hotline: +(84) 456-6789",
  },
  {
    icon: WatchLaterIcon,
    title: "Working Time",
    text: "Sunday-Thursday: 9:00 - 22:00",
  },
];

const items_categories = [
  "Sofa",
  "Table",
  "Chair",
  "Bed",
  "Storage",
  "Recliner",
  "Dining Table",
  "Bookshelf",
  "TV Unit",
  "Office Chair",
  "Coffee Table",
  "Recliner Sofa",
  "Sectional Sofa",
  "Lamp",
];

const items_origin_of_manufacture = [
  "India",
  "Italy",
  "Vietnam",
  "Malaysia",
  "China",
  "Germany",
  "USA",
  "Japan",
  "South Korea",
  "Brazil",
  "Turkey",
  "Mexico",
  "Indonesia",
  "Thailand",
];

const items_show_options = [16, 32, 100];

const sort_options = [
  {
    value: "def",
    title: "Default",
    isLabel: false,
  },
  {
    value: "rating",
    title: "popularity",
    isLabel: false,
  },
  {
    value: "",
    title: "Price",
    isLabel: true,
  },
  {
    value: "PLTH",
    title: "Low ⇾ High",
    isLabel: false,
  },
  {
    value: "PHTL",
    title: "High ⇾ Low",
    isLabel: false,
  },
];

const minDistance = 5000;
const maxPrice = 40000;
const minPrice = 1000;

const Rating_fill_color = "#FFC700";

const product_page_tabs = ["description", "additional Information", "reviews"];

const maxCartItemCount = 99;

const general: (keyof General)[] = [
  "configuration",
  "modelNumber",
  "salesPackage",
  "secondaryMaterial",
  "upholsteryMaterial",
];

const productDetails: (keyof ProductDetails)[] = [
  "fillingMaterial",
  "adjustableHeadrest",
  "maximumLoadCapacity",
  "originOfManufacture",
  "colors",
];

const dimensions: (keyof Dimensions)[] = [
  "width",
  "height",
  "depth",
  "weight",
  "seatHeight",
  "legHeight",
];

const warranty: (keyof Warranty)[] = [
  "warrantySummary",
  "warrantyServiceType",
  "coveredInWarranty",
  "notCoveredInWarranty",
  "domesticWarranty",
];

const cards = [
  {
    image: dining,
    label: "dining",
  },
  {
    image: living,
    label: "living",
  },
  {
    image: bedroom,
    label: "bedroom",
  },
];

const messages = {
  error_not_get_products: "Unable to fetch the products",
  error_not_get_product: "Unable to fetch the product",
  error_not_get_reviews: "Unable to fetch the reviews",
};

export {
  products,
  rooms,
  about_us_carousal,
  about_us_hero_markers,
  about_us_hero_numbers,
  team_members,
  contact_us_details,
  items_categories,
  items_origin_of_manufacture,
  minDistance,
  maxPrice,
  minPrice,
  items_show_options,
  sort_options,
  Rating_fill_color,
  product_page_tabs,
  maxCartItemCount,
  general,
  productDetails,
  dimensions,
  warranty,
  cards,
  messages,
};
