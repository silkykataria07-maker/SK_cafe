import React, { useState, useEffect } from 'react';
import { Search, Phone, MapPin, Clock, Calendar, Mail, Globe, Instagram, Car, Wifi, PartyPopper, Truck, Coffee, ChefHat, Star, Filter, X } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

const menuItems: MenuItem[] = [
  // Coffee & Beverages
  { id: 1, name: 'Signature Espresso', price: 290, description: 'Rich, bold espresso shot with crema perfection', category: 'coffee', popular: true },
  { id: 2, name: 'Artisan Cappuccino', price: 375, description: 'Perfectly balanced espresso, steamed milk, and microfoam', category: 'coffee', popular: true, vegetarian: true },
  { id: 3, name: 'Creamy Latte', price: 395, description: 'Smooth espresso with velvety steamed milk art', category: 'coffee', vegetarian: true },
  { id: 4, name: 'Bold Americano', price: 315, description: 'Pure espresso diluted with hot water for a clean taste', category: 'coffee' },
  { id: 5, name: 'Decadent Mocha', price: 440, description: 'Rich chocolate blended with espresso and steamed milk', category: 'coffee', vegetarian: true },
  { id: 6, name: 'Vanilla Macchiato', price: 415, description: 'Caramelized vanilla syrup with marked espresso', category: 'coffee', vegetarian: true },
  { id: 7, name: 'Cold Brew', price: 355, description: 'Slow-steeped for 12 hours, naturally sweet and smooth', category: 'coffee', popular: true },
  { id: 8, name: 'Café Bombón', price: 425, description: 'Spanish-style espresso with sweetened condensed milk', category: 'coffee', vegetarian: true },
  { id: 9, name: 'Dirty Chai Latte', price: 395, description: 'Spiced chai tea latte with a shot of espresso', category: 'coffee', spicy: true, vegetarian: true },
  { id: 10, name: 'Iced Caramel Macchiato', price: 435, description: 'Cold espresso with caramel drizzle and vanilla milk', category: 'coffee', vegetarian: true },

  // Fresh Pastries & Baked Goods
  { id: 11, name: 'Butter Croissant', price: 270, description: 'Flaky, buttery French pastry baked fresh daily', category: 'pastries', popular: true, vegetarian: true },
  { id: 12, name: 'Blueberry Muffin', price: 230, description: 'Moist muffin bursting with fresh blueberries', category: 'pastries', vegetarian: true },
  { id: 13, name: 'Cheese Danish', price: 250, description: 'Creamy cheese filling in delicate pastry', category: 'pastries', vegetarian: true },
  { id: 14, name: 'Cranberry Scone', price: 210, description: 'Traditional English scone with dried cranberries', category: 'pastries', vegetarian: true },
  { id: 15, name: 'Chocolate Croissant', price: 315, description: 'Pain au chocolat with dark Belgian chocolate', category: 'pastries', popular: true, vegetarian: true },
  { id: 16, name: 'Cinnamon Roll', price: 285, description: 'Warm spiral pastry with cinnamon sugar glaze', category: 'pastries', vegetarian: true },
  { id: 17, name: 'Almond Croissant', price: 295, description: 'Flaky croissant filled with sweet almond cream', category: 'pastries', vegetarian: true },
  { id: 18, name: 'Banana Bread Slice', price: 195, description: 'Homemade moist banana bread with walnuts', category: 'pastries', vegetarian: true },

  // Main Meals & Sandwiches
  { id: 19, name: 'Grilled Paneer Sandwich', price: 345, description: 'Marinated paneer with fresh vegetables and mint chutney', category: 'mains', vegetarian: true, popular: true },
  { id: 20, name: 'Club Sandwich', price: 395, description: 'Triple-layered with fresh vegetables, cheese, and sauces', category: 'mains', vegetarian: true },
  { id: 21, name: 'Pesto Pasta Bowl', price: 425, description: 'Fresh basil pesto with cherry tomatoes and parmesan', category: 'mains', vegetarian: true },
  { id: 22, name: 'Quinoa Buddha Bowl', price: 465, description: 'Superfood bowl with avocado, chickpeas, and tahini dressing', category: 'mains', vegetarian: true },
  { id: 23, name: 'Masala Omelette', price: 285, description: 'Fluffy eggs with onions, tomatoes, and Indian spices', category: 'mains', spicy: true, vegetarian: true },
  { id: 24, name: 'Avocado Toast', price: 325, description: 'Multigrain toast topped with smashed avocado and seeds', category: 'mains', vegetarian: true },
  { id: 25, name: 'Chicken Caesar Wrap', price: 385, description: 'Grilled chicken with romaine lettuce and caesar dressing', category: 'mains' },
  { id: 26, name: 'Margherita Flatbread', price: 365, description: 'Thin crust with fresh mozzarella, basil, and tomato', category: 'mains', vegetarian: true },

  // Cold Beverages & Smoothies
  { id: 27, name: 'Fresh Lime Soda', price: 150, description: 'Zesty lime with sparkling water and mint', category: 'cold', vegetarian: true },
  { id: 28, name: 'Iced Lemon Tea', price: 180, description: 'Refreshing black tea with fresh lemon and honey', category: 'cold', vegetarian: true },
  { id: 29, name: 'Mango Lassi', price: 220, description: 'Creamy yogurt drink with ripe Indian mangoes', category: 'cold', vegetarian: true, popular: true },
  { id: 30, name: 'Fresh Orange Juice', price: 200, description: 'Hand-squeezed from premium oranges', category: 'cold', vegetarian: true },
  { id: 31, name: 'Mint Mojito (Virgin)', price: 250, description: 'Fresh mint leaves with lime and sparkling water', category: 'cold', vegetarian: true },
  { id: 32, name: 'Watermelon Cooler', price: 180, description: 'Fresh watermelon juice with a hint of salt and chaat masala', category: 'cold', vegetarian: true },
  { id: 33, name: 'Green Smoothie', price: 275, description: 'Spinach, banana, apple, and ginger power smoothie', category: 'cold', vegetarian: true },
  { id: 34, name: 'Berry Blast Smoothie', price: 295, description: 'Mixed berries with yogurt and honey', category: 'cold', vegetarian: true },
  { id: 35, name: 'Chocolate Milkshake', price: 285, description: 'Rich chocolate ice cream blended with cold milk', category: 'cold', vegetarian: true },

  // Desserts & Sweet Treats
  { id: 36, name: 'Chocolate Brownie', price: 320, description: 'Fudgy brownie with walnuts, served warm', category: 'desserts', popular: true, vegetarian: true },
  { id: 37, name: 'Vanilla Cheesecake', price: 380, description: 'Creamy New York style cheesecake with berry compote', category: 'desserts', vegetarian: true },
  { id: 38, name: 'Tiramisu', price: 420, description: 'Classic Italian dessert with coffee-soaked ladyfingers', category: 'desserts', vegetarian: true },
  { id: 39, name: 'Apple Pie Slice', price: 290, description: 'Traditional apple pie with cinnamon and vanilla ice cream', category: 'desserts', vegetarian: true },
  { id: 40, name: 'Ice Cream Sundae', price: 240, description: 'Three scoops with hot fudge, nuts, and cherry', category: 'desserts', vegetarian: true },
  { id: 41, name: 'Chocolate Lava Cake', price: 395, description: 'Warm chocolate cake with molten center', category: 'desserts', vegetarian: true },
  { id: 42, name: 'Kulfi with Nuts', price: 195, description: 'Traditional Indian ice cream with pistachios and almonds', category: 'desserts', vegetarian: true },
  { id: 43, name: 'Fruit Tart', price: 275, description: 'Fresh seasonal fruits on pastry cream base', category: 'desserts', vegetarian: true },

  // Light Snacks & Appetizers
  { id: 44, name: 'Masala Fries', price: 180, description: 'Crispy fries tossed with Indian spices and herbs', category: 'snacks', spicy: true, vegetarian: true, popular: true },
  { id: 45, name: 'Garlic Bread', price: 160, description: 'Toasted bread with garlic butter and herbs', category: 'snacks', vegetarian: true },
  { id: 46, name: 'Cheese Nachos', price: 220, description: 'Tortilla chips with melted cheese and jalapeños', category: 'snacks', vegetarian: true, spicy: true },
  { id: 47, name: 'Veggie Spring Rolls', price: 200, description: 'Crispy rolls with fresh vegetables and sweet chili sauce', category: 'snacks', vegetarian: true },
  { id: 48, name: 'Paneer Tikka Bites', price: 280, description: 'Grilled cottage cheese cubes with mint chutney', category: 'snacks', vegetarian: true, spicy: true },
  { id: 49, name: 'Loaded Potato Wedges', price: 235, description: 'Crispy wedges with cheese, herbs, and dipping sauces', category: 'snacks', vegetarian: true },
  { id: 50, name: 'Hummus & Pita', price: 195, description: 'Creamy chickpea hummus with warm pita bread', category: 'snacks', vegetarian: true },
  { id: 51, name: 'Samosa Chaat', price: 165, description: 'Crispy samosas with yogurt, chutneys, and onions', category: 'snacks', vegetarian: true, spicy: true },
];

const categories = [
  { id: 'all', name: 'All Items', icon: Coffee },
  { id: 'coffee', name: 'Coffee & Tea', icon: Coffee },
  { id: 'pastries', name: 'Pastries & Baked Goods', icon: ChefHat },
  { id: 'mains', name: 'Main Meals', icon: ChefHat },
  { id: 'cold', name: 'Cold Beverages', icon: Coffee },
  { id: 'desserts', name: 'Desserts', icon: Star },
  { id: 'snacks', name: 'Snacks & Appetizers', icon: Coffee },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    vegetarian: false,
    popular: false,
    spicy: false,
  });

  useEffect(() => {
    let filtered = menuItems;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Additional filters
    if (filters.vegetarian) {
      filtered = filtered.filter(item => item.vegetarian);
    }
    if (filters.popular) {
      filtered = filtered.filter(item => item.popular);
    }
    if (filters.spicy) {
      filtered = filtered.filter(item => item.spicy);
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-stone-900 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            SK Cafe
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2 tracking-wide opacity-90">
            ARTISAN COFFEE & CUISINE
          </p>
          <p className="text-lg opacity-80 italic">
            Where every cup tells a story
          </p>
        </div>
      </header>

      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-stone-50 rounded-lg">
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.vegetarian}
                    onChange={(e) => setFilters({...filters, vegetarian: e.target.checked})}
                    className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Vegetarian</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.popular}
                    onChange={(e) => setFilters({...filters, popular: e.target.checked})}
                    className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Popular Items</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.spicy}
                    onChange={(e) => setFilters({...filters, spicy: e.target.checked})}
                    className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Spicy</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-1">
                        {item.popular && (
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Veg
                          </span>
                        )}
                        {item.spicy && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            Spicy
                          </span>
                        )}
                      </div>
                    </div>
                    {item.description && (
                      <p className="text-stone-600 text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-700">
                    ₹{item.price}
                  </span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-stone-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-stone-600 mb-2">No items found</h3>
            <p className="text-stone-500">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <section className="bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-900">
            Visit Us Today
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
              <Phone className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-stone-600">(555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
              <MapPin className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-stone-600">Kolaba, Mumbai</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
              <Clock className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-medium">Weekdays</div>
                <div className="text-stone-600">7AM - 10PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
              <Calendar className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-medium">Weekends</div>
                <div className="text-stone-600">8AM - 11PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
              <Mail className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-stone-600">info@skcafe.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
              <Wifi className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-medium">Free WiFi</div>
                <div className="text-stone-600">For all customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Truck className="h-12 w-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Home Delivery</h3>
              <p className="text-stone-600 text-sm">Available within 5km radius</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Coffee className="h-12 w-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Takeaway</h3>
              <p className="text-stone-600 text-sm">Quick pickup service</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <PartyPopper className="h-12 w-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Event Catering</h3>
              <p className="text-stone-600 text-sm">For parties & corporate events</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <ChefHat className="h-12 w-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Coffee Workshops</h3>
              <p className="text-stone-600 text-sm">Learn barista skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-stone-300">
                <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-stone-300">
                <p>Online Ordering</p>
                <p>Corporate Catering</p>
                <p>Private Events</p>
                <p>Gift Cards</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="space-y-2 text-stone-300">
                <p>🏆 FSSAI Licensed</p>
                <p>🌱 Organic Certified</p>
                <p>⭐ ISO 22000:2018</p>
                <p>♻️ Eco-Friendly Packaging</p>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2024 SK Cafe Pvt. Ltd. All rights reserved. | GST: 27AABCS1234A1Z5 | Est. 2018</p>
            <p className="mt-2">Crafted with passion, served with excellence • Mumbai's favorite neighborhood cafe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;