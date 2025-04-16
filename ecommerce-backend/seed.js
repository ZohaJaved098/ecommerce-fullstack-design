const mongoose = require("mongoose");
const Product = require("./models/Products");
const Flag = require("./models/Flag");
const Category = require("./models/Category");

require("dotenv").config();

const products = [
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 4,
    category: "home",
    isFreeShipping: true,
    isRecommended: false,
    isDeal: false,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 4,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: false,
    isDeal: false,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 4,
    category: "home",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: false,
    isSuggested: false,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 4,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: false,
    isDeal: false,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 4,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: false,
    isDeal: false,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 2,
    category: "home",
    isFreeShipping: true,
    isRecommended: false,
    isDeal: false,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 3,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: true,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 3,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: true,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 3,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: true,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 3,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: true,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 3,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: true,
    isSuggested: true,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
  {
    productName: "A product name",
    discountedPrice: 2000,
    price: 3000,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed beatae harum cumque mollitia perferendis veniam atque quasi dolorem, magnam corporis amet quisquam nobis quam minus deserunt quidem ut laudantium.",

    images: ["/cloth/1.jpg", "/cloth/2.jpg", "/cloth/3.jpg"],
    productPic: "/cloth/1.jpg",
    reviews: 32,
    orders: 154,
    rate: 3,
    category: "electronic",
    isFreeShipping: true,
    isRecommended: true,
    isDeal: true,
    isSuggested: false,
    features: {
      color: "black",
      size: "large",
      warranty: "2 years",
    },
    inStock: true,
  },
];
const flags = [
  {
    code: "australia",
    name: "Australia",
    flag: "/flags/australia.png",
    weblink: "australia.co.ae",
  },
  {
    code: "china",
    name: "china",
    flag: "/flags/china.png",
    weblink: "china.co.ae",
  },
  {
    code: "dubai",
    name: "dubai",
    flag: "/flags/dubai.png",
    weblink: "dubai.co.ae",
  },
  {
    code: "england",
    name: "england",
    flag: "/flags/england.png",
    weblink: "england.co.ae",
  },
  {
    code: "france",
    name: "france",
    flag: "/flags/france.png",
    weblink: "france.co.ae",
  },
  {
    code: "germany",
    name: "germany",
    flag: "/flags/germany.png",
    weblink: "germany.co.ae",
  },
  {
    code: "italy",
    name: "italy",
    flag: "/flags/italy.png",
    weblink: "italy.co.ae",
  },
  {
    code: "russia",
    name: "russia",
    flag: "/flags/russia.png",
    weblink: "russia.co.ae",
  },
  {
    code: "scotland",
    name: "scotland",
    flag: "/flags/scotland.png",
    weblink: "scotland.co.ae",
  },
  {
    code: "usa",
    name: "usa",
    flag: "/flags/usa.png",
    weblink: "usa.co.ae",
  },
];
const categories = [
  {
    categoryType: "Automobiles",
  },
  {
    categoryType: "Clothes and wear",
  },
  {
    categoryType: "Home Interior",
  },
  {
    categoryType: "computer and tech",
  },
  {
    categoryType: "tools, equipment",
  },
  {
    categoryType: "sports and equipment",
  },
  {
    categoryType: "Animal and pets",
  },
  {
    categoryType: "machinery and tools",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Optional: Clear existing data
    await Product.deleteMany();
    await Flag.deleteMany();
    await Category.deleteMany();

    // Insert new data
    await Product.insertMany(products);
    await Flag.insertMany(flags);
    await Category.insertMany(categories);

    console.log("✅ Data seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    mongoose.disconnect();
  }
};

seedDatabase();
