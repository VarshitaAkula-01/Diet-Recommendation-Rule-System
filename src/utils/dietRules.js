
const mealPlans = {
  Vegetarian: {
    "Balanced Eating": {
      breakfast: [
        "Idli with sambar",
        "Vegetable upma with curd",
        "Oats with milk and banana",
        "Pesarattu with ginger chutney",
        "Poha with peanuts",
        "Ragi dosa with chutney",
        "Vegetable sandwich with milk",
      ],
      lunch: [
        "Rice, dal and beans poriyal",
        "Chapati with chana masala",
        "Vegetable pulao with raita",
        "Rice with spinach dal",
        "Chapati with paneer curry",
        "Lemon rice with vegetable curry",
        "Brown rice with rajma and salad",
      ],
      dinner: [
        "Chapati with dal and vegetables",
        "Vegetable khichdi with curd",
        "Paneer curry with chapati",
        "Vegetable soup with whole-grain toast",
        "Millet dosa with sambar",
        "Chapati with mushroom curry",
        "Vegetable rice with cucumber raita",
      ],
    },
    "More Protein": {
      breakfast: [
        "Paneer sandwich with milk",
        "Moong dal chilla with curd",
        "Greek yogurt with nuts and oats",
        "Besan chilla with paneer",
        "Sprouted moong salad with toast",
        "Paneer paratha with curd",
        "Protein-rich oats with milk and nuts",
      ],
      lunch: [
        "Paneer curry with chapati",
        "Rajma rice with curd",
        "Chickpea salad with paneer",
        "Dal with brown rice and curd",
        "Soya chunks curry with chapati",
        "Tofu curry with rice",
        "Mixed dal with chapati and curd",
      ],
      dinner: [
        "Paneer bhurji with chapati",
        "Soya chunks pulao with vegetables",
        "Tofu stir-fry with brown rice",
        "Dal and paneer with chapati",
        "Chickpea curry with millet roti",
        "Paneer tikka with vegetable salad",
        "Mixed bean curry with chapati",
      ],
    },
    "More Fibre": {
      breakfast: [
        "Oats with apple and chia seeds",
        "Vegetable poha with peanuts",
        "Whole-wheat vegetable sandwich",
        "Ragi dosa with tomato chutney",
        "Sprouted moong salad",
        "Vegetable dalia with peas",
        "Fruit bowl with oats and nuts",
      ],
      lunch: [
        "Brown rice with beans and vegetables",
        "Whole-wheat chapati with chickpea curry",
        "Millet with sambar and vegetable poriyal",
        "Rajma with brown rice and salad",
        "Vegetable dalia with curd",
        "Whole-wheat roti with mixed bean curry",
        "Vegetable khichdi with salad",
      ],
      dinner: [
        "Whole-wheat chapati with lentils",
        "Vegetable and bean khichdi",
        "Millet roti with vegetable curry",
        "Mixed bean salad with whole-grain toast",
        "Chapati with mushroom and peas curry",
        "Brown rice with spinach dal",
        "Chickpea and vegetable bowl",
      ],
    },
  },

  "Non-vegetarian": {
    "Balanced Eating": {
      breakfast: [
        "Egg dosa with sambar",
        "Boiled eggs with whole-grain toast",
        "Vegetable omelette with chapati",
        "Egg sandwich with tomato",
        "Chicken sandwich with whole-grain bread",
        "Scrambled eggs with toast",
        "Egg bhurji with chapati",
      ],
      lunch: [
        "Rice, dal, vegetables and chicken",
        "Chapati with chicken curry",
        "Rice with egg curry",
        "Grilled fish with rice and vegetables",
        "Chicken pulao with cucumber salad",
        "Chapati with egg bhurji and vegetables",
        "Rice with fish curry and vegetables",
      ],
      dinner: [
        "Chapati with egg curry",
        "Fish with rice and vegetables",
        "Chicken and vegetable soup with bread",
        "Grilled chicken with roasted vegetables",
        "Egg dosa with sambar",
        "Chapati with chicken curry",
        "Fish with chapati and vegetable salad",
      ],
    },
    "More Protein": {
      breakfast: [
        "Three-egg vegetable omelette",
        "Boiled eggs with whole-grain toast",
        "Chicken sandwich with whole-wheat bread",
        "Egg bhurji with chapati",
        "Scrambled eggs with paneer",
        "Egg and vegetable wrap",
        "Chicken and egg breakfast bowl",
      ],
      lunch: [
        "Grilled chicken with brown rice",
        "Fish curry with rice and dal",
        "Chicken breast with chapati and vegetables",
        "Egg curry with brown rice",
        "Grilled fish with quinoa and vegetables",
        "Chicken and chickpea salad bowl",
        "Chicken curry with whole-wheat chapati",
      ],
      dinner: [
        "Grilled chicken with vegetables",
        "Fish with chapati and salad",
        "Egg curry with whole-wheat roti",
        "Chicken soup with whole-grain toast",
        "Grilled fish with steamed vegetables",
        "Chicken and vegetable stir-fry with rice",
        "Egg bhurji with chapati and curd",
      ],
    },
    "More Fibre": {
      breakfast: [
        "Vegetable omelette with whole-wheat toast",
        "Oats with apple and boiled eggs",
        "Egg bhurji with whole-wheat chapati",
        "Vegetable poha with boiled eggs",
        "Whole-grain egg sandwich",
        "Vegetable dalia with eggs",
        "Oats with fruit and boiled eggs",
      ],
      lunch: [
        "Chicken with brown rice and vegetables",
        "Fish with whole-wheat chapati and salad",
        "Egg curry with brown rice and beans",
        "Chicken and chickpea salad",
        "Fish with millet and vegetable poriyal",
        "Chicken with lentils and whole-wheat roti",
        "Brown rice with egg curry and vegetables",
      ],
      dinner: [
        "Chicken with roasted vegetables",
        "Fish with brown rice and spinach",
        "Egg curry with whole-wheat chapati",
        "Chicken and vegetable soup",
        "Grilled fish with bean salad",
        "Chicken with lentil soup",
        "Egg bhurji with vegetables and chapati",
      ],
    },
  },

  Vegan: {
    "Balanced Eating": {
      breakfast: [
        "Idli with sambar",
        "Vegetable poha with peanuts",
        "Oats with fortified soy milk and fruit",
        "Pesarattu with ginger chutney",
        "Tofu scramble with whole-grain toast",
        "Ragi dosa with tomato chutney",
        "Peanut butter toast with banana",
      ],
      lunch: [
        "Rice, dal and vegetables",
        "Chapati with chickpea curry",
        "Tofu and vegetable rice bowl",
        "Brown rice with rajma and salad",
        "Millet with sambar and vegetable poriyal",
        "Vegetable pulao with chickpea salad",
        "Chapati with mixed bean curry",
      ],
      dinner: [
        "Chapati with lentil curry",
        "Vegetable and bean khichdi",
        "Tofu and vegetable stir-fry with rice",
        "Vegetable soup with whole-grain toast",
        "Chapati with mushroom curry",
        "Rice with spinach dal",
        "Quinoa with roasted vegetables and chickpeas",
      ],
    },
    "More Protein": {
      breakfast: [
        "Tofu scramble with whole-grain toast",
        "Besan chilla with tofu",
        "Soy milk oats with peanut butter",
        "Sprouted moong salad with peanuts",
        "Chickpea flour pancakes",
        "Tofu sandwich with whole-grain bread",
        "Peanut butter oats with fortified soy milk",
      ],
      lunch: [
        "Tofu curry with brown rice",
        "Soya chunks curry with chapati",
        "Chickpea and quinoa bowl",
        "Rajma with brown rice",
        "Tofu stir-fry with millet",
        "Mixed bean curry with whole-wheat roti",
        "Lentil bowl with tofu and vegetables",
      ],
      dinner: [
        "Tofu and vegetable stir-fry",
        "Soya chunks pulao with vegetables",
        "Lentil curry with chapati",
        "Chickpea curry with millet roti",
        "Tofu tikka with salad",
        "Mixed bean soup with whole-grain toast",
        "Quinoa with edamame and vegetables",
      ],
    },
    "More Fibre": {
      breakfast: [
        "Oats with apple and chia seeds",
        "Vegetable poha with peanuts",
        "Fruit bowl with plant-based yogurt and oats",
        "Sprouted moong salad",
        "Whole-grain toast with peanut butter",
        "Vegetable dalia with peas",
        "Ragi dosa with tomato chutney",
      ],
      lunch: [
        "Brown rice with beans and vegetables",
        "Whole-wheat chapati with chickpea curry",
        "Millet with sambar and vegetable poriyal",
        "Rajma with brown rice and salad",
        "Vegetable dalia with lentils",
        "Whole-wheat roti with mixed bean curry",
        "Quinoa with chickpeas and vegetables",
      ],
      dinner: [
        "Whole-wheat chapati with lentil curry",
        "Vegetable and bean khichdi",
        "Millet roti with vegetable curry",
        "Chickpea salad with whole-grain toast",
        "Chapati with mushroom and peas curry",
        "Brown rice with spinach dal",
        "Roasted vegetables with chickpeas",
      ],
    },
  },
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const activityAdvice = {
  Low: "Choose balanced meals, adjust portions to your needs, and include movement suitable for your abilities.",
  Moderate: "Aim for balanced meals, include varied food groups, and drink fluids regularly.",
  High: "Include adequate meals, protein-rich food sources, carbohydrates, and fluids to support your activity.",
}

export function recommendDiet(food, activity, goal) {
  const selectedFood = mealPlans[food]
  const selectedGoal = selectedFood?.[goal]

  if (!selectedGoal) {
    throw new Error("Please select valid food and dietary goal options.")
  }

  if (!activityAdvice[activity]) {
    throw new Error("Please select a valid activity level.")
  }

  // Activity level changes the starting day of the weekly rotation.
  // Food preference and dietary goal select different meal collections.
  const activityOffset = {
    Low: 0,
    Moderate: 2,
    High: 4,
  }[activity]

  const weeklyPlan = days.map((day, index) => {
    const mealIndex = (index + activityOffset) % 7

    return {
      day,
      breakfast: selectedGoal.breakfast[mealIndex],
      lunch: selectedGoal.lunch[mealIndex],
      dinner: selectedGoal.dinner[mealIndex],
    }
  })

  return {
    breakfast: weeklyPlan[0].breakfast,
    lunch: weeklyPlan[0].lunch,
    dinner: weeklyPlan[0].dinner,
    weeklyPlan,
    activityAdvice: activityAdvice[activity],
    explanations: [
      `Food preference selected: ${food}.`,
      `Dietary goal selected: ${goal}.`,
      `Activity level selected: ${activity}.`,
      "The meal collection changes according to food preference and dietary goal.",
      "Activity level changes the weekly meal rotation and activity guidance.",
    ],
  }
}
