export const dishes = [
    {
        id: "1",
        name: "Aloo Tiki",
        apiName: "potato cake",
        description: "Enjoy these Indian potato patties, filled with peas spiced with fruity mango powder, with tamarind sauce and fresh coriander relish",
        category: "Starter",
        rating: ["4", "2", "3", "5"],
        available: "yes",
        img: "../images/aloo-tiki.png",
        ingredient: [
            { name: "Potatoes", amount: "500g" },
            { name: "Breadcrumbs", amount: "3 tbsp" },
            { name: "Plain flour", amount: "1 tbsp" },
            { name: "Sunflower oil", amount: "3 tbsp" },
            { name: "Ginger", amount: "20g" },
            { name: "Red onion", amount: "1 small" },
            { name: "Green chilli", amount: "1" },
            { name: "Kashmiri chilli powder", amount: "½ tsp" },
            { name: "Garam masala", amount: "½ tsp" },
            { name: "Ground cumin", amount: "1 tsp" },
            { name: "Frozen peas", amount: "75g" },
            { name: "Coriander", amount: "2 tbsp" },
        ],
        ingredientList: "potatoes breadcrumbs plain flour sunflower oil red onion fresh ginger green chilli kashmiri chilli powder garam masala ground cumin frozen peas chopped coriander",
        method: [
            { step: "1", instruction: "Bring a large pan of salted water to the boil and cook the potatoes until tender when pierced with a knife. Drain the potatoes, then mash and leave to cool before stirring in the breadcrumbs and flour." },
            { step: "2", instruction: "Now, make the filling. Heat the oil in a frying pan and cook the onion until softened. Stir in the ginger, green chilli, spices and mango powder, then add the frozen peas." },
            { step: "3", instruction: "Cook over a medium heat, stirring all the time, until the peas have defrosted and are tender. Remove from the heat, then roughly crush the peas with a fork and stir in the chopped coriander. Leave to cool." },
            { step: "4", instruction: "Divide the potato mixture into nine portions with wet hands. Flatten a portion into a 5cm diameter disc with a thickness of 1cm in your palm. Put a teaspoon of the spiced pea filling in the centre of the disc, then gently bring the mashed potato around the filling so it's completely encased. Flatten the ‘tikki’ so that it resembles a patty. Repeat with the remaining potato and filling, then arrange on a baking tray and chill for 20-30 mins to firm up." },
        ],
        allergy: [
            { name: "Vegan" },
            { name: "Vegetarian" },
            { name: "Nut Free" },
            { name: "Dairy Free" },
        ],

    },
    {
        id: "2",
        name: "Pakora",
        apiName: "pakora",
        description: "This pakora recipe from Jaswinder Gill produces perfectly spiced and crispy Indian snacks. Ideal for a family feast, serve with your favourite chutney",
        category: "Starter",
        rating: ["4", "2", "1", "5"],
        available: "yes",
        img: "../images/pakora.png",
        ingredient: [
            { name: "Green chilli", amount: "1" },
            { name: "Ginger", amount: "thumb-sized piece" },
            { name: "tomato", amount: "1" },
            { name: "Gram flour", amount: "200g" },
            { name: "Chilli powder", amount: "1 ½ tsp" },
            { name: "Garam masala", amount: "1 ½ tsp" },
            { name: "Ground coriander", amount: "1 ½ tsp" },
            { name: "Potatoes", amount: "2 medium" },
            { name: "Aubergine", amount: "½" },
            { name: "Cauliflower", amount: "½" },
            { name: "Lemon", amount: "1" },
        ],
        ingredientList: " green chilli ginger tomato gram flour chilli powder garam masala ground coriander potatoes aubergine cauliflower onion lemon",
        method: [
            { step: "1", instruction: "Heat oven to 120C/100C fan/ gas 1/2. Make a paste by blitzing the chilli, ginger and tomato together, then set aside." },
            { step: "2", instruction: "Mix the gram flour with the spices. Add all the prepared vegetables and toss in the mix. Slowly add 150ml water until the batter coats the vegetables – they should be well coated, but not swimming in it." },
            { step: "3", instruction: "Add the tomato mixture and get your hands in there, mixing well until everything is incorporated. Add a little lemon juice and seasoning." },
            { step: "4", instruction: "Heat the oil to 180C. Take a handful of the mix and squeeze it into a loose little ball, to ensure the vegetables stick to each other when lowered in the oil. Use a spoon to carefully drop the ball into the oil." },
            { step: "5", instruction: "Fry for about 4 mins until golden and crispy, then taste to test for seasoning and consistency. You may also need to add a little water or gram our to the mixture at this point if your tester ball didn’t hold together. Repeat, frying the remaining mixture in batches." },
            { step: "6", instruction: "Drain on kitchen paper and keep warm in the oven as you go. Serve immediately with chutney." },
        ],
        allergy: [
            { name: "Vegan" },
            { name: "Vegetarian" },
            { name: "Nut Free" },
            { name: "Dairy Free" },
        ],
    },
    {
        id: "3",
        name: "Chicken Biryani Pilau",
        apiName: "Chicken Biryani",
        description: "Easy and cheap to recreate at home, students won't need to order takeaways ever again!",
        category: "Main",
        rating: ["4", "2", "4", "5"],
        available: "yes",
        img: "../images/Chicken-biryani-pilau.png",
        ingredient: [
            { name: "Vegetable oil", amount: "2 tbsp" },
            { name: "Chicken thighs", amount: "6 large" },
            { name: "Onion", amount: "1 large" },
            { name: "Curry powder", amount: "2 tbsp" },
            { name: "Long grain rice", amount: "350g" },
            { name: "Vegetable stock", amount: "700ml " },
            { name: "Frozen peas", amount: "250g" },

        ],
        ingredientList: "vegetable oil chicken thighs onion curry powder long grain rice vegetable stock frozen peas",

        method: [
            { step: "1", instruction: "Heat oven to 200C/fan 180C/gas 6. Heat the oil in a large sauté pan and fry the chicken thighs, skin side down, for 8-10 mins until the skin is golden and crispy. Tip in the onion and continue to cook for 5 mins until the onion softens. Sprinkle in the curry powder and cook for a minute more, then stir in the rice and pour over the stock. Bring the stock to the boil." },
            { step: "2", instruction: "Cover the pan and bake for 30 mins until all the liquid has been absorbed and the rice is cooked. Stir in the peas and leave the rice to stand for a few moments before serving." },
        ],
        allergy: [
            { name: "Gluten Free" }, { name: "Nut Free" },
            { name: "Dairy Free" },
        ],
    },
    {
        "id": "4",
        name: "Chicken Shish Kebabs",
        apiName: "kebab",
        description: "These barbecued kebabs are big on flavour, but the spice is toned down, so they're great for kids. Offer some chilli sauce on the side for those who like heat, and serve with flatbread",
        category: "Main",
        rating: ["1", "5", "3", "5"],
        available: "yes",
        img: "../images/kebab.png",
        ingredient: [
            { name: "Chicken breasts", amount: "6" },
            { name: "Red, orange and green peppers", amount: "2" },
            { name: "Flatbreads", amount: "1" },
            { name: "Garlic cloves", amount: "2" },
            { name: "Greek yogurt", amount: "300g" },
            { name: "Paprika", amount: "1 tbsp " },
        ],

        ingredientList: "chicken breasts red orange and green peppers flatbreads tomato and lemon wedges garlic cloves greek yogurt paprika",

        method: [
            { step: "1", instruction: "Make the marinade by mixing all of the ingredients together in a large bowl. Spoon a third of the mixture into a smaller bowl, then cover and chill until needed. Stir the chicken into the marinade and set aside for 20 mins. Can be chilled for up to two days, covered." },
            { step: "2", instruction: "If using wooden skewers, soak them in water for 1 hr before using. Alternately thread the peppers and chicken onto the skewers until you have 6-8 kebabs. You can do this in advance if you like, and chill the kebabs until needed." },
            { step: "3", instruction: "Heat a barbecue to medium, or until a thin layer of coals has turned grey. Cook the kebabs for 10 mins, turning occasionally, until the chicken is charred and cooked through. Serve the kebabs with the reserved yogurt sauce, warmed flatbreads, chopped tomatoes and lemon wedges on the side." },
        ],
        allergy: [
            { name: "Gluten Free" }, { name: "Nut Free" },
            { name: "Dairy Free" },
        ],

    },
    {
        id: "5",
        name: "Kheer",
        apiName: "rice pudding",
        description: "Make this indulgent slow-cooked Pakistani rice pudding with our easy kheer recipe. Studded with dried fruit, it has a sweetly spiced floral flavour and a lovely creaminess",
        category: "Desert",
        rating: ["3", "2", "5", "2"],
        available: "yes",
        img: "../images/kheer.png",
        ingredient: [
            { name: "Saffron strands", amount: "½ tsp " },
            { name: "Whole milk", amount: "2 litres" },
            { name: "Green cardamom pods", amount: "20" },
            { name: "Basmati rice", amount: "100g" },
            { name: "Caster sugar", amount: "100g" },
            { name: "Double cream", amount: " 100ml" },
            { name: "Pure rosewater", amount: "2 tsp" },
            { name: "Flaked almonds", amount: "2 tbsp" },
            { name: "Raisins", amount: "50g" },
        ],
        ingredientList: "saffron strands whole milk green cardamom pods basmati rice caster sugar double cream pure rosewater raisins",

        method: [
            { step: "1", instruction: "Put the saffron strands in a small bowl and cover with 2-3 tbsp warm water. Gently push the strands against the side of the bowl with the back of a teaspoon – this will help release the flavour and colour. Set aside to soak until needed." },
            { step: "2", instruction: "Pour the milk into a large, heavy-based pan set over a medium heat and tip in the cardamom pods. Bring to the boil, then scatter in the rice and reduce the heat to low. Simmer for 40 mins, stirring often to prevent the rice scorching on the base of the pan, until the rice has broken down and is very soft." },
            { step: "3", instruction: "Stir in the sugar and continue to cook until it has dissolved. Scoop out the cardamom pods using a slotted spoon and discard these." },
            { step: "4", instruction: "Stir in the cream, then slowly add the rosewater and enough of the saffron and its soaking liquid to just lightly flavour the kheer. Stir in the almonds. Drain the raisins and stir these in, then serve hot or leave to cool completely and chill first." },
        ],
        allergy: [
            { name: "Gluten Free" }, { name: "Vegetarian" },
        ]

    },
    {
        id: "6",
        name: "Sweet Rice",
        apiName: "yellow rice",
        description: "This is delicious – vibrant with spices, with a sweet note from the sugar and raisins.",
        category: "Desert",
        rating: ["2", "2", "2", "4"],
        available: "yes",
        img: "../images/sweet-rice.png",
        ingredient: [
            { name: "basmati rice", amount: "350g " },
            { name: "butter", amount: " 50g " },
            { name: "caster sugar", amount: "1 heaped tbsp " },
            { name: "cinnamon stick", amount: "1⁄2 " },
            { name: "cardamom pods", amount: "6" },
            { name: "ground turmeric", amount: "1 tsp " },
            { name: "raisin", amount: "5 tbsp " },
        ],
        ingredientList: "basmati rice butter caster sugar ground cinnamon cardamom pods ground turmeric raisin",

        method: [
            { step: "1", instruction: "Put all the ingredients in a large pan with 1 tsp salt and 500ml water, then heat until boiling and the butter has melted." },
            { step: "2", instruction: "Stir, cover and leave to simmer for 6 mins. Take off the heat and leave, still covered, for 5 mins. Fluff up and tip into a warm bowl to serve." },
        ],
        allergy: [
            { name: "Vegetarian" },
            { name: "Gluten Free" }
        ],
    }
];

export const createArray = length => [...Array(length)];