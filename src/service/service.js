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
        name: "Grapes",
        category: "fruits",
        emoji: "🍇"
    },
    {
        name: "Melon",
        category: "fruits",
        emoji: "🍈"
    },
    {
        name: "Water melon",
        category: "fruits",
        emoji: "🍉"
    },
    {
        name: "Tangerine",
        category: "fruits",
        emoji: "🍊"
    },
    {
        name: "Lemon",
        category: "fruits",
        emoji: "🍋"
    },
    {
        name: "Banana",
        category: "fruits",
        emoji: "🍌"
    },
    {
        name: "Pineapple",
        category: "fruits",
        emoji: "🍍"
    },
    {
        name: "Red apple",
        category: "fruits",
        emoji: "🍎"
    },
    {
        name: "Green apple",
        category: "fruits",
        emoji: "🍏"
    },
    {
        name: "Pear",
        category: "fruits",
        emoji: "🍐"
    },
    {
        name: "Peach",
        category: "fruits",
        emoji: "🍑"
    },
    {
        name: "Cherries",
        category: "fruits",
        emoji: "🍒"
    },
    {
        name: "Strawberry",
        category: "fruits",
        emoji: "🍓"
    },
    {
        name: "Kiwi",
        category: "fruits",
        emoji: "🥝"
    },
    {
        name: "Tomato",
        category: "veggie",
        emoji: "🍅"
    },
    {
        name: "Avacado",
        category: "veggie",
        emoji: "🥑"
    },
    {
        name: "Eggplant",
        category: "veggie",
        emoji: "🍆"
    },
    {
        name: "Potato",
        category: "veggie",
        emoji: "🥔"
    },
    {
        name: "Carrot",
        category: "veggie",
        emoji: "🥕"
    },
    {
        name: "Corn",
        category: "veggie",
        emoji: "🌽"
    },
    {
        name: "Pepper",
        category: "veggie",
        emoji: "🌶"
    },
    {
        name: "Cucumber",
        category: "veggie",
        emoji: "🥒"
    },
    {
        name: "Mushroom",
        category: "veggie",
        emoji: "🍄"
    },
    {
        name: "Peanuts",
        category: "veggie",
        emoji: "🥜"
    },
    {
        name: "Chestnut",
        category: "veggie",
        emoji: "🌰"
    },
    {
        name: "Chestnut",
        category: "sweets",
        emoji: "🥞"
    },
    {
        name: "Ice cream cone",
        category: "sweets",
        emoji: "🍦"
    },
    {
        name: "Shaved ice",
        category: "sweets",
        emoji: "🍧"
    },
    {
        name: "Ice cream",
        category: "sweets",
        emoji: "🍨"
    },
    {
        name: "Doughnut",
        category: "sweets",
        emoji: "🍩"
    },
    {
        name: "Cookie",
        category: "sweets",
        emoji: "🍪"
    },
    {
        name: "Bday cake",
        category: "sweets",
        emoji: "🎂"
    },
    {
        name: "Short cake",
        category: "sweets",
        emoji: "🍰"
    },
    {
        name: "Chocolate bar",
        category: "sweets",
        emoji: "🍫"
    },
    {
        name: "Candy",
        category: "sweets",
        emoji: "🍬"
    },
    {
        name: "Lollipop",
        category: "sweets",
        emoji: "🍭"
    },
    {
        name: "Custard",
        category: "sweets",
        emoji: "🍮"
    },
    {
        name: "Honey",
        category: "sweets",
        emoji: "🍯"
    },
]

const getService = () => {
    return [...products];
}

module.exports = {getService}