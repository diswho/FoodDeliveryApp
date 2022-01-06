import images from "./images";
import icons from "./icons";
const profile_image = require("../assets/dummyData/user.png");

const myProfile = { address: "No.88, Jin Podungan, Kuching" };

const menu = [
  {
    id: 1,
    name: "Featureed",
    list: [
      {
        id: 1,
        categories: [1],
        name: "Hot tacos",
        price: 50,
        description: "Maxican tortilla tocos",
        calories: 78,
        image: images.tacos,
      },
      {
        id: 2,
        categories: [1, 2],
        name: "Veg Biryani",
        price: 60,
        description: "India Vegetable biryani",
        calories: 78,
        image: images.vegBiryani,
      },
      {
        id: 3,
        categories: [1, 2],
        name: "Hamburger",
        price: 30,
        description: "dddkjljjll",
        calories: 78,
        image: images.hamburger,
      },
    ],
  },
  {
    id: 2,
    name: "Near By Your",
    list: [
      {
        id: 1,
        categories: [1],
        name: "Near Hot tacos",
        price: 50,
        description: "Maxican tortilla tocos",
        calories: 78,
        image: images.tacos,
      },
      {
        id: 2,
        categories: [1, 2],
        name: "Near Veg Biryani",
        price: 60,
        description: "India Vegetable biryani",
        calories: 78,
        image: images.vegBiryani,
      },
      {
        id: 3,
        categories: [1, 2],
        name: "Near Hamburger",
        price: 30,
        description: "dddkjljjll",
        calories: 78,
        image: images.hamburger,
      },
    ],
  },
  {
    id: 3,
    name: "Popular",
    list: [
      {
        id: 1,
        categories: [1],
        name: "P Hot tacos",
        price: 50,
        description: "Maxican tortilla tocos",
        calories: 78,
        image: images.tacos,
      },
      {
        id: 2,
        categories: [1, 2],
        name: "P Veg Biryani",
        price: 60,
        description: "India Vegetable biryani",
        calories: 78,
        image: images.vegBiryani,
      },
      {
        id: 3,
        categories: [1, 2],
        name: "P Hamburger",
        price: 30,
        description: "dddkjljjll",
        calories: 78,
        image: images.hamburger,
      },
    ],
  },
  {
    id: 4,
    name: "Newest",
    list: [
      {
        id: 1,
        categories: [1],
        name: "Newest Hot tacos",
        price: 50,
        description: "Maxican tortilla tocos",
        calories: 78,
        image: images.tacos,
      },
      {
        id: 2,
        categories: [1, 2],
        name: "Newest Veg Biryani",
        price: 60,
        description: "India Vegetable biryani",
        calories: 78,
        image: images.vegBiryani,
      },
      {
        id: 3,
        categories: [1, 2],
        name: "Newest Hamburger",
        price: 30,
        description: "dddkjljjll",
        calories: 78,
        image: images.hamburger,
      },
    ],
  },
  {
    id: 5,
    name: "Trending",
    list: [
      {
        id: 1,
        categories: [1],
        name: "Trending Hot tacos",
        price: 50,
        description: "Maxican tortilla tocos",
        calories: 78,
        image: images.tacos,
      },
      {
        id: 2,
        categories: [1, 2],
        name: "Trending Veg Biryani",
        price: 60,
        description: "India Vegetable biryani",
        calories: 78,
        image: images.vegBiryani,
      },
      {
        id: 3,
        categories: [1, 2],
        name: "Trending Hamburger",
        price: 30,
        description: "dddkjljjll",
        calories: 78,
        image: images.hamburger,
      },
    ],
  },
  {
    id: 6,
    name: "Recommended",
    list: [
      {
        id: 1,
        categories: [1],
        name: "R Hot tacos",
        price: 50,
        description: "Maxican tortilla tocos",
        calories: 78,
        image: images.tacos,
      },
      {
        id: 2,
        categories: [1, 2],
        name: "R Veg Biryani",
        price: 60,
        description: "India Vegetable biryani",
        calories: 78,
        image: images.vegBiryani,
      },
      {
        id: 3,
        categories: [1, 2],
        name: "R Hamburger",
        price: 30,
        description: "dddkjljjll",
        calories: 78,
        image: images.hamburger,
      },
    ],
  },
];
export const categories = [
  {
    id: 1,
    name: "Rice",
    icon: icons.rice_bowl,
  },
  {
    id: 2,
    name: "Noodles",
    icon: icons.noodle,
  },
  {
    id: 3,
    name: "Hot Dogs",
    icon: icons.hotdog,
  },
  {
    id: 4,
    name: "Salads",
    icon: icons.salad,
  },
  {
    id: 5,
    name: "Burgers",
    icon: icons.hamburger,
  },
  {
    id: 6,
    name: "Pizza",
    icon: icons.pizza,
  },
  {
    id: 7,
    name: "Snacks",
    icon: icons.fries,
  },
  {
    id: 8,
    name: "Sushi",
    icon: icons.sushi,
  },
  {
    id: 9,
    name: "Desserts",
    icon: icons.donut,
  },
  {
    id: 10,
    name: "Drinks",
    icon: icons.drink,
  },
];
const trendingRecipes = [
  {
    id: 1,
    name: "Spaghetti With Shrimp Sauce",
    image: images.spagetti,
    duration: "30 mins",
    serving: 1,
    isBookmark: false,
    category: "Pasta",
    author: {
      profilePic: images.UserProfile5,
      name: "Maria",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.pasta,
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: 2,
        icon: icons.oil,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        icon: icons.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 4,
        icon: icons.tomato,
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        icon: icons.salt,
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        icon: icons.pepper,
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: images.UserProfile1,
      },
      {
        id: 2,
        profilePic: images.UserProfile2,
      },
      {
        id: 3,
        profilePic: images.UserProfile3,
      },
      {
        id: 4,
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 2,
    name: "Malaysian Chicken Satay",
    image: images.satay,
    duration: "50 mins",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile8,
      name: "Mandy",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.chicken,
        description: "Boneless Chicken Thighs",
        quantity: "1kg",
      },
      {
        id: 2,
        icon: icons.lemongrass,
        description: "Lemongrass stalk",
        quantity: "1 stalk",
      },
      {
        id: 3,
        icon: icons.onion,
        description: "Large Onion",
        quantity: "1",
      },
      {
        id: 4,
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "5",
      },
      {
        id: 5,
        icon: icons.coriander,
        description: "Coriander",
        quantity: "1 tsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: images.UserProfile5,
      },
      {
        id: 2,
        profilePic: images.UserProfile4,
      },
      {
        id: 3,
        profilePic: images.UserProfile1,
      },
      {
        id: 4,
        profilePic: images.UserProfile2,
      },
      {
        id: 5,
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 3,
    name: "Sarawak Laksa",
    image: images.laksa,
    duration: "30 mins",
    serving: 1,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile9,
      name: "Jessie",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 2,
        icon: icons.lemongrass,
        description: "Lemongrass",
        quantity: "2 stalks",
      },
      {
        id: 3,
        icon: icons.egg,
        description: "Egg",
        quantity: "2",
      },
      {
        id: 4,
        icon: icons.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 5,
        icon: icons.shallot,
        description: "Shallot",
        quantity: "4",
      },
      {
        id: 6,
        icon: icons.pasta,
        description: "vermicelli",
        quantity: "100g",
      },
    ],
    viewers: [
      {
        id: 1,
        name: "User 1",
        profilePic: images.UserProfile1,
      },
      {
        id: 2,
        name: "User 2",
        profilePic: images.UserProfile2,
      },
      {
        id: 3,
        name: "User 3",
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 4,
    name: "Nasi Lemak",
    image: images.nasiLemak,
    duration: "1 hour",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile7,
      name: "Ali Baba",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.chilli,
        description: "Dried Chilli",
        quantity: "30g",
      },
      {
        id: 2,
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 3,
        icon: icons.egg,
        description: "Egg",
        quantity: "10",
      },
      {
        id: 4,
        icon: icons.rice,
        description: "rice",
        quantity: "1kg",
      },
      {
        id: 5,
        icon: icons.anchovy,
        description: "Dried anchovies",
        quantity: "3 cups",
      },
    ],
    viewers: [],
  },
];

export default {
  trendingRecipes,
  categories,
  profile_image,
  menu,
  myProfile,
};
