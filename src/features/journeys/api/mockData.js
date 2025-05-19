import spiceImage from "../../../assets/images/spice.jpg";
import meditationImage from "../../../assets/images/meditation.png";

export const journeys = [
  {
    id: 1,
    title: "Spice Market & Cooking with Locals",
    subtitle: "Learn authentic recipes with a local family in Galle",
    summary:
      "Explore a village spice market, learn to cook a traditional meal, and dine with a local family in Galle.",
    description: `Immerse yourself in the vibrant culinary traditions of Sri Lanka with this authentic cooking experience in the historic city of Galle. Your journey begins at a local village spice market, where you'll learn about the exotic spices that form the foundation of Sri Lankan cuisine.\n\n    Guided by your local host, you'll select fresh ingredients and spices for your cooking session. Then, you'll visit a traditional family home where you'll be welcomed warmly and introduced to time-honored cooking techniques. Learn to prepare classic dishes such as fragrant rice and curry, coconut sambol, and crispy hoppers.\n\n    As you cook, your host family will share stories about Sri Lankan food culture and the significance of various spices in local remedies and traditions. Once the meal is prepared, you'll sit down to enjoy the fruits of your labor with your host family, experiencing genuine Sri Lankan hospitality.`,
    location: "Galle",
    duration: "Half-day",
    priceLKR: 7500,
    priceUSD: 22,
    rating: 4.8,
    reviews: 35,
    tags: ["Cultural", "Culinary", "Family-friendly"],
    imageUrl: spiceImage,
    images: [
      spiceImage,
      "https://images.unsplash.com/photo-1596797038530-2c107aa5e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1596806032217-36f2a3eee6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    ],
    host: {
      id: "h123",
      name: "Kumari Silva",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Culinary expert with 15 years of experience sharing Sri Lankan cuisine with travelers",
      languages: ["English", "Sinhala"],
    },
    packages: [
      {
        id: "p1",
        name: "Standard Group Experience",
        priceLKR: 7500,
        priceUSD: 22,
        description: "Join a small group of up to 6 guests for our signature cooking experience. Includes market visit, cooking class, and full meal.",
        duration: "Half-day",
        inclusions: ["Market tour", "Cooking class", "Full meal", "Recipe booklet"],
        maxGuests: 6
      },
      {
        id: "p2",
        name: "Premium Experience",
        priceLKR: 12000,
        priceUSD: 35,
        description: "Enhanced experience with premium ingredients, additional dishes, and complimentary local beverages.",
        duration: "Full-day",
        inclusions: ["Market tour", "Premium ingredients", "Extended menu", "Drinks included", "Recipe booklet", "Spice gift pack"],
        maxGuests: 6
      },
      {
        id: "p3",
        name: "Private Family Experience",
        priceLKR: 22000,
        priceUSD: 65,
        description: "Exclusive experience for your family or group. Personalized menu options and flexible timing.",
        duration: "Full-day",
        inclusions: ["Private session", "Customized menu", "Extended cooking time", "Take-home spice box", "Digital photos"],
        maxGuests: 8
      }
    ]
  },
  {
    id: 2,
    title: "Meditation in Ancient Monasteries",
    subtitle: "Find inner peace with guidance from local monks",
    summary:
      "Discover inner peace in the serene ruins of Ritigala with local monks guiding you through mindfulness.",
    description: `Experience the profound tranquility of Sri Lanka's ancient monastic traditions in the mystical forest monastery of Ritigala. This mindfulness journey takes you deep into the heart of Buddhist spiritual practice in a setting of remarkable natural beauty and historical significance.\n\n    Your experience begins with a gentle walk through the forest paths of Ritigala, where your guide will share the fascinating history of these 2000-year-old monastery ruins. As you ascend stone staircases and pass ancient meditation platforms, you'll feel a growing sense of peace and connection to the generations of monks who sought enlightenment here.\n\n    At a secluded meditation space, you'll be introduced to traditional mindfulness practices by monks who maintain these ancient traditions. Learn the fundamentals of Anapanasati (mindfulness of breathing) and loving-kindness meditation in this powerful setting.\n\n    The session concludes with a serene tea ceremony and the opportunity to discuss Buddhist philosophy and mindfulness applications in daily life with your monastic guides.`,
    location: "Ritigala",
    duration: "3 hours",
    priceLKR: 5800,
    priceUSD: 17,
    rating: 4.9,
    reviews: 42,
    tags: ["Wellness", "Spiritual", "Educational"],
    imageUrl: meditationImage,
    images: [
      meditationImage,
      "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    ],
    host: {
      id: "h456",
      name: "Venerable Nanda",
      imageUrl: "https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Buddhist monk with 20 years of meditation practice and teaching experience",
      languages: ["English", "Sinhala", "Pali"],
    },
    packages: [
      {
        id: "p1",
        name: "Group Meditation Session",
        priceLKR: 5800,
        priceUSD: 17,
        description: "Join a small group for a guided meditation experience in the ancient monastery ruins.",
        duration: "3 hours",
        inclusions: ["Guided tour", "Meditation session", "Tea ceremony", "Discussion with monks"],
        maxGuests: 8
      },
      {
        id: "p2",
        name: "Extended Mindfulness Retreat",
        priceLKR: 9500,
        priceUSD: 28,
        description: "A deeper immersion into meditation practices with additional techniques and personal guidance.",
        duration: "5 hours",
        inclusions: ["Extended meditation", "Mindfulness walk", "Vegetarian lunch", "Meditation guidebook", "Personal guidance"],
        maxGuests: 6
      },
      {
        id: "p3",
        name: "Private Spiritual Experience",
        priceLKR: 15000,
        priceUSD: 44,
        description: "One-on-one guidance with a senior monk for a personalized spiritual experience.",
        duration: "4 hours",
        inclusions: ["Private session", "Personalized guidance", "Extended discussion", "Take-home meditation tools"],
        maxGuests: 2
      }
    ]
  },
  {
    id: 3,
    title: "Fisherman's Morning on the Southern Coast",
    subtitle: "Experience traditional fishing methods at dawn",
    summary:
      "Wake up with the waves and help bring in the catch of the day alongside stilt fishermen in Matara.",
    description: `Experience the time-honored tradition of stilt fishing on Sri Lanka's picturesque southern coast with this immersive dawn adventure. Rising before the sun, you'll join local fishermen as they prepare for their morning catch using techniques passed down through generations.\n\n    Your experience begins in the pre-dawn quiet as you meet your host family of fishermen who will share the history and cultural significance of this unique fishing method. Watch as they demonstrate how to balance on the narrow stilts planted in the coral reef, then try your hand at this challenging technique under their expert guidance.\n\n    As the sun rises over the Indian Ocean, casting golden light across the water, you'll work alongside the fishermen to bring in the morning's catch. Learn about sustainable fishing practices and how these communities have adapted their traditional methods over time.\n\n    After the fishing session, you'll help sort the catch and join the fishermen's family for a simple but delicious breakfast of hoppers and fresh fish curry, prepared with the morning's harvest.`,
    location: "Matara",
    duration: "2.5 hours",
    priceLKR: 6200,
    priceUSD: 18,
    rating: 4.7,
    reviews: 28,
    tags: ["Adventure", "Nature", "Cultural"],
    imageUrl: spiceImage,
    images: [
      spiceImage,
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80",
      "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    host: {
      id: "h789",
      name: "Sunil Fernando",
      imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      bio: "Third-generation stilt fisherman sharing traditional fishing methods with visitors",
      languages: ["English", "Sinhala"],
    },
    packages: [
      {
        id: "p1",
        name: "Dawn Fishing Experience",
        priceLKR: 6200,
        priceUSD: 18,
        description: "Join local fishermen at dawn to learn and practice traditional stilt fishing methods.",
        duration: "2.5 hours",
        inclusions: ["Fishing demonstration", "Hands-on experience", "Breakfast with fishermen", "Photo opportunities"],
        maxGuests: 4
      },
      {
        id: "p2",
        name: "Extended Fishing & Cooking",
        priceLKR: 8500,
        priceUSD: 25,
        description: "Combine the fishing experience with a cooking class to prepare your catch.",
        duration: "4 hours",
        inclusions: ["Fishing experience", "Cooking class", "Full breakfast", "Recipe guide"],
        maxGuests: 4
      },
      {
        id: "p3",
        name: "Private Coastal Experience",
        priceLKR: 14000,
        priceUSD: 41,
        description: "Private experience for your group with extended time on the water and exclusive interaction with fishermen.",
        duration: "3 hours",
        inclusions: ["Private session", "Extended fishing time", "Premium breakfast", "Souvenir fishing miniature"],
        maxGuests: 6
      }
    ]
  },
];

export const reviews = [
  {
    id: "r1",
    journeyId: 1,
    userId: "u101",
    userName: "Sarah L.",
    userImage: null,
    rating: 5,
    comment: "Absolutely fantastic experience! Kumari was a wonderful host and the food was delicious. Highly recommend!",
    reply: "Thank you, Sarah! ",
    date: "2024-07-15",
  },
  {
    id: "r2",
    journeyId: 1,
    userId: "u102",
    userName: "John B.",
    userImage: null,
    rating: 4,
    comment: "Great cooking class, learned a lot. The market tour was very insightful.",
    reply: "Thanks for your feedback, John! We're glad you found the market tour insightful. We hope to see you again soon!",

    date: "2024-07-10",
  },
  {
    id: "r3",
    journeyId: 2,
    userId: "u103",
    userName: "Aisha K.",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 5,
    comment: "The meditation session at Ritigala was truly transformative. Venerable Nanda was an excellent guide.",
    reply: "Thank you, Aisha! We're so glad to hear that the session was transformative for you. Venerable Nanda is indeed a wonderful guide.",
    date: "2024-06-20",
  },
  {
    id: "r4",
    journeyId: 3,
    userId: "u104",
    userName: "Mike P.",
    userImage: null,
    rating: 4,
    comment: "Waking up early was worth it for the stilt fishing. A unique cultural experience.",
    date: "2024-07-01",
    reply: "Thanks for your review, Mike! We're glad you found the stilt fishing experience unique. It truly is a special part of our culture.",
  },
  {
    id: "r5",
    journeyId: 1,
    userId: "u105",
    userName: "Chloe G.",
    reply: "Thank you for your kind words, Chloe! We're delighted to hear that you loved the experience. Your feedback inspires us to keep creating memorable journeys.",
    userImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 5,
    comment: "Loved every minute of it! The host family was so welcoming and the food was the best I had in Sri Lanka.",
    date: "2024-05-28",
  }
];

// Dedicated mock data for categories - simulating a separate backend API endpoint
export const mockCategories = [
  { id: "cultural", name: "Cultural" },
  { id: "culinary", name: "Culinary" },
  { id: "family-friendly", name: "Family-friendly" },
  { id: "wellness", name: "Wellness" },
  { id: "spiritual", name: "Spiritual" },
  { id: "educational", name: "Educational" },
  { id: "adventure", name: "Adventure" },
  { id: "nature", name: "Nature" },
  { id: "historical", name: "Historical Tours" },
  { id: "wildlife", name: "Wildlife Safari" }
];

// Dedicated mock data for locations - simulating a separate backend API endpoint
export const mockLocations = [
  { id: "colombo", name: "Colombo" },
  { id: "kandy", name: "Kandy" },
  { id: "galle", name: "Galle" },
  { id: "ella", name: "Ella" },
  { id: "sigiriya", name: "Sigiriya" },
  { id: "nuwara-eliya", name: "Nuwara Eliya" },
  { id: "trincomalee", name: "Trincomalee" },
  { id: "jaffna", name: "Jaffna" },
  { id: "matara", name: "Matara" },
  { id: "ritigala", name: "Ritigala" },
  { id: "anuradhapura", name: "Anuradhapura" }
];

// Dedicated mock data for durations - simulating a separate backend API endpoint
export const mockDurations = [
  { id: "half-day", name: "Half day" },
  { id: "full-day", name: "Full day" },
  { id: "2-3-days", name: "2-3 days" },
  { id: "4-7-days", name: "4-7 days" },
  { id: "week-plus", name: "Week+" }
];

// Dedicated mock data for ratings - simulating a separate backend API endpoint
export const mockRatings = [
  { id: "any", name: "Any rating", value: 0 },
  { id: "3plus", name: "3+ stars", value: 3 },
  { id: "4plus", name: "4+ stars", value: 4 },
  { id: "4.5plus", name: "4.5+ stars", value: 4.5 }
];

// Dedicated mock data for price ranges - simulating a separate backend API endpoint
export const mockPriceRanges = [
  { id: "budget", name: "Budget", min: 0, max: 20000 },
  { id: "mid-range", name: "Mid-range", min: 20000, max: 35000 },
  { id: "premium", name: "Premium", min: 35000, max: 50000 }
];