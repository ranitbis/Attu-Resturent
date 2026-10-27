export type DietaryType = 'veg' | 'non-veg' | 'egg';
export type MenuCategory = 
  | 'Noodles' 
  | 'Rice' 
  | 'Bread' 
  | 'Pizza' 
  | 'Biryani' 
  | 'Shanghai' 
  | 'Momo' 
  | 'Roll' 
  | 'Snacks';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description: string;
  dietary: DietaryType;
  spiceLevel: 0 | 1 | 2 | 3;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  imageUrl: string;
}

export const CATEGORIES: { id: MenuCategory; name: string; description: string; count: number }[] = [
  { id: 'Noodles', name: 'Noodles & Chowmein', description: 'Wok-tossed noodles with farm-fresh veggies, scrambled egg, and juicy chicken', count: 9 },
  { id: 'Rice', name: 'Fried Rice', description: 'Fragrant aromatic long-grain rice tossed in high-flame wok with secret spices', count: 7 },
  { id: 'Bread', name: 'Burgers & Sandwiches', description: 'Fresh toasted buns, crunchy vada pavs, layered sandwiches & cheesy toasts', count: 9 },
  { id: 'Pizza', name: 'Freshly Baked Pizza', description: 'Crispy stone-style crust topped with rich tomato sauce, mozzarella & savory toppings', count: 4 },
  { id: 'Biryani', name: 'Authentic Biryani', description: 'Slow-cooked aromatic basmati rice dum biryani infused with saffron & spices', count: 8 },
  { id: 'Shanghai', name: 'Shanghai Specialties', description: 'Indo-Chinese sweet, spicy, and tangy Shanghai style pan-tossed noodles & gravies', count: 4 },
  { id: 'Momo', name: 'Dumplings & Momos', description: 'Handcrafted thin-wrapper Himalayan momos, steamed to perfection or fried crisp', count: 4 },
  { id: 'Roll', name: 'Kolkata Kathi Rolls', description: 'Flaky paratha rolls layered with egg, tender marinated chicken, onions & sauces', count: 2 },
  { id: 'Snacks', name: 'Crispy Fast Food Snacks', description: 'Crispy chicken lollipops, pakoras, Bengali dimer devil, chops & cutlets', count: 10 },
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Noodles (9 items)
  {
    id: 'noodle-egg-chowmein',
    name: 'Egg Chowmein',
    price: 45,
    category: 'Noodles',
    description: 'Classic wok-tossed street-style noodles with shredded cabbage, bell peppers, carrots, and fluffy scrambled egg.',
    dietary: 'egg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-egg-chicken-chowmein',
    name: 'Egg Chicken Chowmein',
    price: 60,
    category: 'Noodles',
    description: 'Tender seasoned chicken shreds and scrambled egg stir-fried with thin noodles, soy, and crunchy scallions.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-mixed-chowmein',
    name: 'Mixed Chowmein',
    price: 70,
    category: 'Noodles',
    description: 'The ultimate wok-fried feast combining juicy chicken chunks, scrambled egg, and seasonal garden vegetables.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-egg-hakka',
    name: 'Egg Hakka Noodles',
    price: 45,
    category: 'Noodles',
    description: 'Non-greasy Hakka-style noodles tossed on high heat with light soya, garlic, crunchy veggies, and egg.',
    dietary: 'egg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-egg-chicken-hakka',
    name: 'Egg Chicken Hakka Noodles',
    price: 60,
    category: 'Noodles',
    description: 'Savory Hakka noodles tossed with tender chicken strips, seasoned eggs, spring onions, and white pepper.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-mixed-hakka',
    name: 'Mixed Hakka Noodles',
    price: 70,
    category: 'Noodles',
    description: 'Loaded Hakka noodles packed with generous portions of chicken, egg, and crisp Chinese greens.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-egg-szechuan',
    name: 'Egg Szechuan Noodles',
    price: 50,
    category: 'Noodles',
    description: 'Spicy fiery Szechuan chili sauce infused noodles with scrambled egg, crushed garlic, and bell peppers.',
    dietary: 'egg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-egg-chicken-szechuan',
    name: 'Egg Chicken Szechuan Noodles',
    price: 70,
    category: 'Noodles',
    description: 'Bold red Szechuan sauce wok-tossed with spicy chicken, eggs, and noodles. A customer favorite.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'noodle-mixed-szechuan',
    name: 'Mixed Szechuan Noodles',
    price: 80,
    category: 'Noodles',
    description: 'Rich fiery blend of chicken, egg, crisp veggies, and premium Szechuan pepper oil on flat noodles.',
    dietary: 'non-veg',
    spiceLevel: 3,
    imageUrl: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=700&q=80'
  },

  // 2. Rice (7 items)
  {
    id: 'rice-egg-fried',
    name: 'Egg Fried Rice',
    price: 60,
    category: 'Rice',
    description: 'Fragrant basmati rice tossed with scrambled egg, sweet green peas, carrots, and light aromatic soy sauce.',
    dietary: 'egg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rice-chicken-fried',
    name: 'Chicken Fried Rice',
    price: 70,
    category: 'Rice',
    description: 'Golden fried rice packed with tender marinated chicken bits, spring onions, and garlic butter aroma.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rice-mixed-fried',
    name: 'Mixed Fried Rice',
    price: 90,
    category: 'Rice',
    description: 'Hearty wok-fried rice combining chicken pieces, scrambled egg, and garden fresh vegetables.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rice-egg-szechuan',
    name: 'Egg Szechuan Fried Rice',
    price: 70,
    category: 'Rice',
    description: 'Zesty red Szechuan fried rice loaded with scrambled egg, chili flakes, and crisp scallions.',
    dietary: 'egg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rice-chicken-szechuan',
    name: 'Chicken Szechuan Fried Rice',
    price: 80,
    category: 'Rice',
    description: 'Fiery wok-tossed spicy chicken fried rice tossed in authentic homemade Szechuan paste.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rice-egg-chicken-szechuan',
    name: 'Egg Chicken Szechuan Fried Rice',
    price: 90,
    category: 'Rice',
    description: 'Juicy chicken bites and scrambled eggs combined with fiery Szechuan chili fried rice.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rice-mixed-szechuan',
    name: 'Mixed Szechuan Fried Rice',
    price: 100,
    category: 'Rice',
    description: 'The master chef mix: chicken, egg, and vegetables tossed in red Szechuan sauce with high-heat wok hei.',
    dietary: 'non-veg',
    spiceLevel: 3,
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80'
  },

  // 3. Bread (9 items)
  {
    id: 'bread-veg-vada-pav',
    name: 'Veg Vada Pav',
    price: 20,
    category: 'Bread',
    description: 'Golden spiced potato fritter nestled inside a soft toasted pav with dry garlic chutney and green chili.',
    dietary: 'veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-chicken-vada-pav',
    name: 'Chicken Vada Pav',
    price: 30,
    category: 'Bread',
    description: 'Crispy spiced minced chicken patty served hot in a butter-toasted pav with tangy and spicy sauces.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-veg-burger',
    name: 'Veg Burger',
    price: 40,
    category: 'Bread',
    description: 'Crispy herb potato patty topped with sliced tomato, crunchy onions, lettuce, and creamy burger mayo.',
    dietary: 'veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-chicken-burger',
    name: 'Chicken Burger',
    price: 50,
    category: 'Bread',
    description: 'Juicy golden-fried chicken patty with crisp greens, fresh tomato, and signature house special sauce.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-chicken-cheese-burger',
    name: 'Chicken Cheese Burger',
    price: 60,
    category: 'Bread',
    description: 'Crisp chicken patty blanketed with melted yellow cheese, crisp lettuce, gherkins, and burger dressing.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-veg-sandwich',
    name: 'Veg Sandwich',
    price: 40,
    category: 'Bread',
    description: 'Fresh grilled bread filled with seasoned cucumber, tomatoes, bell peppers, mint chutney, and butter.',
    dietary: 'veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-chicken-sandwich',
    name: 'Chicken Sandwich',
    price: 50,
    category: 'Bread',
    description: 'Shredded roasted chicken mixed with creamy herb mayonnaise layered between toasted golden bread slices.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-chicken-cheese-sandwich',
    name: 'Chicken Cheese Sandwich',
    price: 60,
    category: 'Bread',
    description: 'Tender seasoned chicken and gooey melted cheese toasted until crisp, golden brown, and delicious.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bread-cheese-chili-toast',
    name: 'Cheese Chili Toast',
    price: 60,
    category: 'Bread',
    description: 'Crisp oven-toasted bread smothered with melted cheddar, chopped green chilies, and herbs.',
    dietary: 'veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80'
  },

  // 4. Pizza (4 items)
  {
    id: 'pizza-veg',
    name: 'Veg Pizza',
    price: 85,
    category: 'Pizza',
    description: 'Stone-crust pizza layered with herb tomato marinara, mozzarella, crisp capsicum, onions, and sweet corn.',
    dietary: 'veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pizza-chicken',
    name: 'Chicken Pizza',
    price: 95,
    category: 'Pizza',
    description: 'Generously topped with spiced diced chicken tikka chunks, melted cheese, and fresh sliced bell peppers.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pizza-margherita',
    name: 'Margherita Pizza',
    price: 110,
    category: 'Pizza',
    description: 'Authentic Italian style with rich slow-simmered tomato sauce, fragrant basil, and double golden mozzarella cheese.',
    dietary: 'veg',
    spiceLevel: 0,
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pizza-barbecue-chicken',
    name: 'Barbecue Chicken Pizza',
    price: 110,
    category: 'Pizza',
    description: 'Smoky BBQ chicken chunks, caramelized red onions, rich barbecue drizzle, and creamy mozzarella.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80'
  },

  // 5. Biryani (8 items)
  {
    id: 'biryani-chicken',
    name: 'Chicken Biryani',
    price: 90,
    category: 'Biryani',
    description: 'Authentic Bengal-style dum biryani with succulent chicken piece, tender saffron potato, and fragrant basmati rice.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-egg-chicken',
    name: 'Egg Chicken Biryani',
    price: 100,
    category: 'Biryani',
    description: 'Rich dum biryani packed with a large juicy chicken piece, slow-cooked spiced whole egg, and melt-in-mouth aloo.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isChefSpecial: true,
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-aloo',
    name: 'Aloo Biryani',
    price: 70,
    category: 'Biryani',
    description: 'Traditional Kolkata-style aloo biryani cooked on slow charcoal dum with ghee-soaked saffron potato and aromatics.',
    dietary: 'veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-egg',
    name: 'Egg Biryani',
    price: 80,
    category: 'Biryani',
    description: 'Golden hard-boiled eggs pan-tossed in biryani masala layered with long-grain dum rice and spiced potato.',
    dietary: 'egg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-special-chicken',
    name: 'Special Chicken Biryani',
    price: 120,
    category: 'Biryani',
    description: 'Grand feast portion with 2 large juicy chicken pieces, whole boiled egg, special aloo, and extra saffron rice.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-mutton',
    name: 'Mutton Biryani',
    price: 140,
    category: 'Biryani',
    description: 'Slow-simmered tender tender mutton piece infused with kewra, meetha attar, and spices with fragrant rice and aloo.',
    dietary: 'non-veg',
    spiceLevel: 2,
    isChefSpecial: true,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-egg-mutton',
    name: 'Egg Mutton Biryani',
    price: 150,
    category: 'Biryani',
    description: 'Melt-in-mouth mutton cutlet piece, whole boiled egg, and soft Kolkata spiced potato over aromatic dum rice.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'biryani-chicken-chaap',
    name: 'Chicken Chaap',
    price: 50,
    category: 'Biryani',
    description: 'Rich royal Mughlai slow-cooked chicken leg cooked in a fragrant cashew, poppy seed, and saffron rich gravy.',
    dietary: 'non-veg',
    spiceLevel: 2,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80'
  },

  // 6. Shanghai (4 items)
  {
    id: 'shanghai-egg',
    name: 'Egg Shanghai',
    price: 60,
    category: 'Shanghai',
    description: 'Pan-tossed Shanghai style flat noodles with scrambled egg, cabbage, sweet pepper, and five-spice glaze.',
    dietary: 'egg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'shanghai-chicken',
    name: 'Chicken Shanghai',
    price: 70,
    category: 'Shanghai',
    description: 'Crispy diced chicken stir-fried in Shanghai spicy sweet chili sauce with scallions, garlic, and greens.',
    dietary: 'non-veg',
    spiceLevel: 2,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'shanghai-egg-chicken',
    name: 'Egg Chicken Shanghai',
    price: 80,
    category: 'Shanghai',
    description: 'Classic combo of tender chicken chunks and fluffy egg tossed in signature Shanghai dark sauce with peppers.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'shanghai-mixed',
    name: 'Mixed Shanghai',
    price: 90,
    category: 'Shanghai',
    description: 'Loaded Shanghai special featuring chicken, egg, and crunchy garden vegetables in rich glaze.',
    dietary: 'non-veg',
    spiceLevel: 2,
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80'
  },

  // 7. Momo (4 items)
  {
    id: 'momo-chicken-steam',
    name: 'Chicken Steam Momo',
    price: 50,
    category: 'Momo',
    description: '6 pieces of delicate steamed dumplings stuffed with minced spiced chicken, served with fiery red chili dip and clear soup.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'momo-chicken-fried',
    name: 'Chicken Fried Momo',
    price: 50,
    category: 'Momo',
    description: 'Crisp, golden-brown fried chicken dumplings with crunchy outer shell and hot juicy interior.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'momo-chicken-fried-szechuan',
    name: 'Chicken Fried Szechuan Momo',
    price: 60,
    category: 'Momo',
    description: 'Crispy fried momos wok-tossed in spicy garlic Szechuan sauce with bell peppers and spring onions.',
    dietary: 'non-veg',
    spiceLevel: 3,
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'momo-gandharaj-chicken',
    name: 'Gandharaj Chicken Momo',
    price: 60,
    category: 'Momo',
    description: 'ATTU signature specialty: chicken momos infused with the refreshing citrus zest and aroma of Bengal Gandharaj lime.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isChefSpecial: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=700&q=80'
  },

  // 8. Roll (2 items)
  {
    id: 'roll-egg',
    name: 'Egg Roll',
    price: 35,
    category: 'Roll',
    description: 'Crisp paratha fried with fresh egg, rolled with crunchy sliced onions, cucumber, green chilies, and tangy chaat masala.',
    dietary: 'egg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'roll-egg-chicken',
    name: 'Egg Chicken Roll',
    price: 50,
    category: 'Roll',
    description: 'All-time Kolkata street food legend: egg-layered laccha paratha wrapped around succulent marinated chicken pieces.',
    dietary: 'non-veg',
    spiceLevel: 2,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80'
  },

  // 9. Snacks (10 items)
  {
    id: 'snack-chicken-lollipop',
    name: 'Chicken Lollipop',
    price: 20,
    category: 'Snacks',
    description: 'Frenched chicken winglet crisp-fried to perfection with Indo-Chinese spices and served with hot garlic chutney.',
    dietary: 'non-veg',
    spiceLevel: 2,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-chicken-pakora',
    name: 'Chicken Pakora',
    price: 10,
    category: 'Snacks',
    description: 'Crunchy golden bite-sized chicken fritter coated in spiced gram flour batter and deep fried.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-chicken-satay',
    name: 'Chicken Satay',
    price: 25,
    category: 'Snacks',
    description: 'Tender marinated chicken skewer grilled with aromatic spices and served with dipping sauce.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-chicken-szechuan-lollipop',
    name: 'Chicken Szechuan Lollipop',
    price: 25,
    category: 'Snacks',
    description: 'Crisp chicken lollipop coated in sticky, fiery red Szechuan sauce with roasted sesame and chopped scallions.',
    dietary: 'non-veg',
    spiceLevel: 3,
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-chicken-cutlet',
    name: 'Chicken Cutlet',
    price: 20,
    category: 'Snacks',
    description: 'Bengali cabin-style breadcrumb crusted minced chicken cutlet, served piping hot with mustard kasundi and salad.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-dimer-devil',
    name: 'Dimer Devil (Egg Devil)',
    price: 15,
    category: 'Snacks',
    description: 'Traditional Bengali egg chop: boiled egg wrapped in spiced minced potato, dipped in egg wash and crispy breadcrumb crust.',
    dietary: 'egg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-vegetable-chop',
    name: 'Vegetable Chop',
    price: 10,
    category: 'Snacks',
    description: 'Classic Kolkata tea-time chop made with sweet beetroot, carrot, roasted peanuts, and Bengali bhaja masala.',
    dietary: 'veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-chicken-pakora-plate',
    name: 'Chicken Pakora Plate',
    price: 50,
    category: 'Snacks',
    description: 'Generous sharing plate of crispy hot boneless chicken pakoras served with green chutney and sliced onions.',
    dietary: 'non-veg',
    spiceLevel: 1,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-fish-cutlet',
    name: 'Fish Cutlet',
    price: 30,
    category: 'Snacks',
    description: 'Seasoned boneless fish patty coated in crunchy golden breadcrumbs, served with Kasundi mustard and onions.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'snack-fish-finger',
    name: 'Fish Finger',
    price: 20,
    category: 'Snacks',
    description: 'Crispy crumbed fish goujon fried to golden perfection, tender inside and ultra-crispy outside.',
    dietary: 'non-veg',
    spiceLevel: 1,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80'
  }
];
