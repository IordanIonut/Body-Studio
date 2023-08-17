import { faDrumstickBite, faCarrot } from '@fortawesome/free-solid-svg-icons';

const foodType = [
    {
        "type": "Vegetarian",
        "related_food_length": 266,
        "website": "fortawesome",
        "svg": faCarrot
    },
    {
        "type":"Non Vegetarian",
        "related_food_length": 231,
        "website": "fortawesome",
        "svg": faDrumstickBite
    }
];

const foodCategory = [
    {
        "core_type": "Aloo",
        "related_food_length": 11,
    },
    {
        "core_type": "Chicken",
        "related_food_length": 53,
    },
    {
        "core_type": "Coffee",
        "related_food_length": 65,
    },
    {
        "core_type": "Dal",
        "related_food_length": 17,
    },
    {
        "core_type": "Dosa",
        "related_food_length": 8,
    },
    {
        "core_type": "Egg",
        "related_food_length": 70,
    },
    {
        "core_type": "Fish",
        "related_food_length": 70,
    },
    {
        "core_type": "Ice Cream",
        "related_food_length": 31,
    },
    {
        "core_type": "Khichdi",
        "related_food_length": 2,
    },
    {
        "core_type": "Mutton",
        "related_food_length": 38,
    },
    {
        "core_type": "Naan",
        "related_food_length": 7,
    },
    {
        "core_type": "Paneer",
        "related_food_length": 13,
    },
    {
        "core_type": "Paratha",
        "related_food_length": 16,
    },
    {
        "core_type": "Roti",
        "related_food_length": 14,
    },
    {
        "core_type": "Sabzi",
        "related_food_length": 17,
    },
    {
        "core_type": "Tea",
        "related_food_length": 65,
    }
]

export default {foodType, foodCategory};