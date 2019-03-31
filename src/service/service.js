const products = [
    {
        name: "Cheese",
        category: "food",
        emoji: "🧀"
    },
    {
        name: "Eggs",
        category: "food",
        emoji: "🥚"
    },
    {
        name: "Pancakes",
        category: "food",
        emoji: "🥞"
    },
    {
        name: "Sweet potatos",
        category: "food",
        emoji: "🍠"
    },
    {
        name: "Chicken baguette",
        category: "food",
        emoji: "🥖"
    },
    {
        name: "Butter croissant",
        category: "food",
        emoji: "🥐"
    },
    {
        name: "Chicken burger",
        category: "food",
        emoji: "🍔"
    },
    {
        name: "Pizza",
        category: "food",
        emoji: "🍕"
    },
    {
        name: "Spaghetti",
        category: "food",
        emoji: "🍝"
    },
    {
        name: "French fries",
        category: "food",
        emoji: "🍟"
    },
    {
        name: "Fried shrimps",
        category: "food",
        emoji: "🍤"
    },
    {
        name: "Hot dog",
        category: "food",
        emoji: "🌭"
    },
    {
        name: "Chicken taco",
        category: "food",
        emoji: "🌮"
    },
    {
        name: "Chicken burrito",
        category: "food",
        emoji: "🌯"
    },
    {
        name: "Rice & curry",
        category: "food",
        emoji: "🍛"
    },
    {
        name: "Stuffed flatbread",
        category: "food",
        emoji: "🥙"
    },
    {
        name: "Chicken hotpot",
        category: "food",
        emoji: "🥘"
    },
    {
        name: "Tuna salad",
        category: "food",
        emoji: "🥗"
    },
]

const getService = () => {
    return [...products];
}

module.exports = {getService}