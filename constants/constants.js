const screen = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favourite: "Favourite",
  notification: "Notification",
  wallet: "My Wallet",
};
const bottom_tabs = [
  { id: 0, label: screen.home },
  { id: 1, label: screen.search },
  { id: 2, label: screen.cart },
  { id: 3, label: screen.favourite },
  { id: 4, label: screen.notification },
  { id: 5, label: screen.main_layout },
];
const delivery_time = [
  { id: 0, label: "10 Mins" },
  { id: 1, label: "20 Mins" },
  { id: 2, label: "30 Mins" },
];
const ratings = [
  { id: 0, label: "1" },
  { id: 1, label: "2" },
  { id: 2, label: "3" },
  { id: 3, label: "4" },
  { id: 4, label: "5" },
];
const tags = [
  { id: 0, label: "Burger" },
  { id: 1, label: "Fast Food" },
  { id: 2, label: "Pizza" },
  { id: 3, label: "Asian" },
  { id: 4, label: "Dessert" },
  { id: 5, label: "Breakfast" },
  { id: 6, label: "Vegetable" },
  { id: 7, label: "Taccos" },
];
export default { screen, bottom_tabs, delivery_time, ratings, tags };
