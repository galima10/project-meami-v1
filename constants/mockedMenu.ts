export const mockedMenu: Record<
  string,
  { matin: string[]; midi: string[]; soir: string[] }
> = {
  lundi: {
    matin: ["Pancakes", "Coffee", "Croissant", "Fruit Salad"],
    midi: ["Sandwich", "Juice", "Salad"],
    soir: ["Steak", "Red Wine", "Cheese"],
  },
  mardi: {
    matin: ["Omelette", "Tea", "Toast"],
    midi: ["Salad", "Water", "Fruit"],
    soir: ["Fish", "White Wine", "Rice"],
  },
  mercredi: {
    matin: ["Cereal", "Milk", "Banana"],
    midi: ["Burger", "Soda", "Fries"],
    soir: ["Pizza", "Beer", "Salad"],
  },
  jeudi: {
    matin: ["Yogurt", "Fruit", "Granola"],
    midi: ["Pasta", "Lemonade", "Salad"],
    soir: ["Chicken", "Rose Wine", "Vegetables"],
  },
  vendredi: {
    matin: ["Bagel", "Smoothie", "Granola"],
    midi: ["Quiche", "Iced Tea", "Salad"],
    soir: ["Pasta", "Red Wine", "Vegetables"],
  },
  samedi: {
    matin: ["Croissant", "Coffee", "Jam"],
    midi: ["Quiche", "Iced Tea", "Salad"],
    soir: ["Tacos", "Margarita", "Guacamole"],
  },
  dimanche: {
    matin: ["Fruit Salad", "Juice", "Muffin"],
    midi: ["Roast Beef", "Beer", "Vegetables"],
    soir: ["Soup", "Herbal Tea", "Bread"],
  },
};
