
import boy_dress_1 from "./boy_dress_1.webp";
import boy_dress_2 from "./boy_dress_2.webp";
import boy_dress_3 from "./boy_dress_3.webp";
import child_cap_1 from "./child_cap_1.jpeg";
import child_cap_2 from "./child_cap_2.jpeg";
import child_cap_3 from "./child_cap_3.jpeg";
import child_cap_4 from "./child_cap_4.jpeg";
import child_cap_5 from "./child_cap_5.jpeg";
import child_cap_6 from "./child_cap_6.jpeg";
import child_watch_1 from "./child_watch_1.webp";
import child_watch_2 from "./child_watch_2.webp";
import child_watch_3 from "./child_watch_3.webp";
import child_watch_4 from "./child_watch_4.webp";
import child_watch_5 from "./child_watch_5.webp";
import female_child_shoe_1 from "./female_child_shoe_1.webp";
import female_dress1 from "./female_dress1.png";
import female_dress2 from "./female_dress2.png";
import female_watch2 from "./female_watch2.png";
import femaleShoe3 from "./femaleShoe3.jpg";
import femaleShoe4 from "./femaleShoe4.jpg";
import femaleShoe5 from "./femaleShoe5.jpg";
import femaleShoe6 from "./femaleShoe6.jpg";
import fine_black_shoe_original from "./fine_black_shoe_original.jpg";
import fine_men_canvas from "./fine_men_canvas.jpg";
import freestyle_suit_original from "./freestyle_suit_original.jpeg";
import fine_young_boy_church_wear from "./fine_young_boy_church_wear.jpg";
import girl_dress_1 from "./girl_dress_1.webp";
import girl_dress_2 from "./girl_dress_2.webp";
import girl_dress_3 from "./girl_dress_3.webp";
import girl_dress_4 from "./girl_dress_4.webp";
import Goldwatch from "./Goldwatch.png";
import male_child_shoe_1 from "./male_child_shoe_1.webp";
import male_child_shoe_2 from "./male_child_shoe_2.webp";
import male_child_shoe_3 from "./male_child_shoe_3.webp";
import female_pink_face_cap from "./female_pink_face_cap.png";
import female_silver_wristwatch from "./female_silver_wristwatch.jpg";
import men_facecap_number1 from "./men_facecap_number1.jpg";
import men_facecap_number2 from "./men_facecap_number2.jpg";



let all_products = [
  {
    id: 1,
    name: "Young male Outfit",
    category: "Men",
    image: boy_dress_1,
    old_price: 39.99,
    new_price: 29.99,
    description: "Stylish dress for boys, perfect for outings."
  },
  {
    id: 2,
    name: "Cool Outfit",
    category: "Men",
    image: boy_dress_2,
    old_price: 44.99,
    new_price: 34.99,
    description: "Comfortable and trendy dress for boys."
  },
  {
    id: 3,
    name: "Male Outfit",
    category: "Men",
    image: boy_dress_3,
    old_price: 49.99,
    new_price: 39.99,
    description: "Elegant dress for boys, made with premium fabric."
  },
  {
    id: 4,
    name: "Just for Kids",
    category: "Kids",
    image: child_cap_1,
    old_price: 19.99,
    new_price: 14.99,
    description: "Colorful cap for kids, adjustable fit."
  },
  {
    id: 5,
    name: "Just for kids",
    category: "Kids",
    image: child_cap_2,
    old_price: 22.99,
    new_price: 17.99,
    description: "Stylish cap for kids, available in different colors."
  },
  {
    id: 6,
    name: "Just for kids",
    category: "Kids",
    image: child_cap_3,
    old_price: 25.99,
    new_price: 19.99,
    description: "Trendy cap for kids, perfect for outdoor activities."
  },
  {
    id: 7,
    name: "just for kids",
    category: "Kids",
    image: child_cap_4,
    old_price: 27.99,
    new_price: 21.99,
    description: "Durable and comfortable cap for children."
  },
  {
    id: 8,
    name: "Just for kids",
    category: "Kids",
    image: child_cap_5,
    old_price: 29.99,
    new_price: 24.99,
    description: "Fashionable cap for kids, lightweight and breathable."
  },
  {
    id: 9,
    name: "Just for kids",
    category: "Kids",
    image: child_cap_6,
    old_price: 31.99,
    new_price: 26.99,
    description: "Premium-quality cap for young ones."
  },
  {
    id: 10,
    name: "Just for kids",
    category: "Kids",
    image: child_watch_1,
    old_price: 49.99,
    new_price: 39.99,
    description: "Elegant and classic child’s watch, stylish and functional."
  },
  {
    id: 11,
    name: "Child Watch ",
    category: "Kids",
    image: child_watch_2,
    old_price: 54.99,
    new_price: 44.99,
    description: "Durable and stylish watch for kids, water-resistant."
  },
  {
    id: 12,
    name: "Child Watch ",
    category: "Kids",
    image: child_watch_3,
    old_price: 59.99,
    new_price: 49.99,
    description: "Elegant wristwatch for kids, lightweight design."
  },
  {
    id: 13,
    name: "Child Watch 4",
    category: "Accessories",
    image: child_watch_4,
    old_price: 62.99,
    new_price: 52.99,
    description: "Trendy digital watch for kids with LED display."
  },
  {
    id: 14,
    name: "Child Watch 5",
    category: "Kids",
    image: child_watch_5,
    old_price: 65.99,
    new_price: 55.99,
    description: "Sporty watch for kids, shock-resistant and stylish."
  },
  {
    id: 15,
    name: "Female Child Shoe",
    category: "Kids",
    image: female_child_shoe_1,
    old_price: 39.99,
    new_price: 29.99,
    description: "Comfortable and stylish shoes for young girls."
  },
  {
    id: 16,
    name: "Elegant Women's Dress",
    category: "Women",
    image: female_dress1,
    old_price: 69.99,
    new_price: 54.99,
    description: "Sophisticated dress for formal occasions."
  },
  {
    id: 17,
    name: "Elegant Women's Dress",
    category: "Women",
    image: female_dress2,
    old_price: 74.99,
    new_price: 59.99,
    description: "Premium-quality dress for special events."
  },
  {
    id: 18,
    name: "Pink Face Cap",
    category: "Accessories",
    image: female_pink_face_cap,
    old_price: 19.99,
    new_price: 14.99,
    description: "Stylish pink cap for women, breathable and fashionable."
  },
  {
    id: 19,
    name: "Women's Silver Watch",
    category: "Women",
    image: female_watch2,
    old_price: 79.99,
    new_price: 64.99,
    description: "Elegant silver wristwatch for ladies."
  },
  {
    id: 20,
    name: "Women's Shoes",
    category: "Women",
    image: femaleShoe3,
    old_price: 59.99,
    new_price: 49.99,
    description: "Trendy footwear for women, comfortable and durable."
  },
  {
    id: 21,
    name: "Women's Shoes ",
    category: "Women",
    image: femaleShoe4,
    old_price: 64.99,
    new_price: 54.99,
    description: "Elegant and stylish women's footwear for all occasions."
  },
  {
    id: 22,
    name: "Women's Shoes",
    category: "Women",
    image: femaleShoe5,
    old_price: 69.99,
    new_price: 59.99,
    description: "Comfortable yet trendy women's shoes with premium fabric."
  },
  {
    id: 23,
    name: "Women's Shoes",
    category: "Women",
    image: femaleShoe6,
    old_price: 74.99,
    new_price: 64.99,
    description: "Fashionable high-quality shoes for women, ideal for casual wear."
  },
  {
    id: 24,
    name: "Fine Black Shoe",
    category: "Men",
    image: fine_black_shoe_original,
    old_price: 79.99,
    new_price: 69.99,
    description: "Premium-quality black shoes for men, stylish and durable."
  },
  {
    id: 25,
    name: "Men's Canvas Shoes",
    category: "Men",
    image: fine_men_canvas,
    old_price: 59.99,
    new_price: 49.99,
    description: "Trendy canvas shoes for men, perfect for casual wear."
  },
  {
    id: 26,
    name: "Freestyle Suit",
    category: "Men",
    image: freestyle_suit_original,
    old_price: 99.99,
    new_price: 89.99,
    description: "Classic freestyle suit, perfect for formal events and special occasions."
  },
  {
    id: 27,
    name: "Young Boy Church Wear",
    category: "Kids",
    image: fine_young_boy_church_wear,
    old_price: 49.99,
    new_price: 39.99,
    description: "Stylish church outfit for young boys, comfortable and elegant."
  },
  {
    id: 28,
    name: "Girl Dress",
    category: "Kids",
    image: girl_dress_1,
    old_price: 44.99,
    new_price: 34.99,
    description: "Cute and stylish dress for young girls, perfect for special occasions."
  },
  {
    id: 29,
    name: "Girl Dress",
    category: "Kids",
    image: girl_dress_2,
    old_price: 49.99,
    new_price: 39.99,
    description: "Beautiful princess-style dress for girls."
  },
  {
    id: 30,
    name: "Girl Dress",
    category: "Kids",
    image: girl_dress_3,
    old_price: 54.99,
    new_price: 44.99,
    description: "Elegant dress for young girls, stylish and classy."
  },
  {
    id: 31,
    name: "Girl Dress 4",
    category: "Kids",
    image: girl_dress_4,
    old_price: 59.99,
    new_price: 49.99,
    description: "Beautiful long dress for girls, comfortable fabric."
  },
  {
    id: 32,
    name: "Gold Watch",
    category: "Men",
    image: Goldwatch,
    old_price: 99.99,
    new_price: 79.99,
    description: "Luxurious gold wristwatch, stylish and premium quality."
  },
  {
    id: 33,
    name: "Male Child Shoe 1",
    category: "Kids",
    image: male_child_shoe_1,
    old_price: 49.99,
    new_price: 39.99,
    description: "Durable and fashionable shoes for young boys."
  },
  
  {
    id: 34,
    name: "Male Child Shoe",
    category: "Kids",
    image: male_child_shoe_2,
    old_price: 54.99,
    new_price: 44.99,
    description: "Comfortable sneakers for boys, perfect for daily wear."
  },
  {
    id: 35,
    name: "Male Child Shoe",
    category: "Kids",
    image: male_child_shoe_3,
    old_price: 59.99,
    new_price: 49.99,
    description: "Trendy and strong shoes for boys, suitable for all occasions."
  },
  {
    id: 36,
    name: "Pink Face Cap",
    category: "Women",
    image: female_pink_face_cap,
    old_price: 19.99,
    new_price: 14.99,
    description: "Stylish pink face cap for women, breathable design."
  },
  {
    id: 37,
    name: "Silver Wristwatch",
    category: "Men",
    image: female_silver_wristwatch,
    old_price: 69.99,
    new_price: 59.99,
    description: "Elegant silver wristwatch with classy finish."
  },
  {
    id: 38,
    name: "Women's Shoes",
    category: "Women",
    image: femaleShoe3,
    old_price: 79.99,
    new_price: 69.99,
    description: "Premium-quality shoes for women, comfortable and stylish."
  },
  {
    id: 39,
    name: "Men's Facecap 1",
    category: "Men",
    image: men_facecap_number1,
    old_price: 29.99,
    new_price: 24.99,
    description: "Casual face cap for men, durable and fashionable."
  },
  {
    id: 40,
    name: "Men's Facecap",
    category: "Men",
    image: men_facecap_number2,
    old_price: 34.99,
    new_price: 29.99,
    description: "Trendy men's cap, lightweight and comfortable fit."
  },
 
]

export default all_products;