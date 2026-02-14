import { 
  Zap, 
  Sun, 
  Battery, 
  Droplets, 
  Lightbulb, 
  Cpu, 
  Plug, 
  ThermometerSun, 
  Activity,
  Box,
  CheckCircle2,
  Phone
} from 'lucide-react';

const packages = [
  {
    name: "Starter Home System (3kW)",
    price: "KSh 225,000 – 245,000",
    description: "Perfect for young families and first-time solar buyers.",
    features: [
      "6–8 high-efficiency solar panels",
      "3kW hybrid inverter",
      "5kWh lithium battery",
      "Mounting structure & Cables",
      "Basic installation"
    ],
    powers: ["lighting", "TV", "WiFi", "Fridge", "Laptop", "Decoder"],
    badge: "FAST SELLER",
    color: "blue"
  },
  {
    name: "Most Popular System (5–6kW)",
    price: "KSh 400,000 – 460,000",
    description: "The ideal choice for modern homes with standard appliances.",
    features: [
      "10–14 solar panels",
      "5–6kW hybrid inverter",
      "10kWh lithium battery",
      "Smart monitoring system",
      "Full installation"
    ],
    powers: ["Washing machine", "Microwave", "Water pump", "Fridges", "Home office"],
    badge: "MOST POPULAR",
    color: "green" // Optima green
  },
  {
    name: "Executive / Business (8kW)",
    price: "KSh 560,000 – 620,000",
    description: "For large homes and small businesses engaging in heavy usage.",
    features: [
      "16–18 panels",
      "8kW inverter",
      "15kWh lithium battery",
      "Advanced protections",
      "Professional installation"
    ],
    powers: ["Air conditioners", "Salon equipment", "Office setups", "Borehole pump"],
    badge: "PREMIUM",
    color: "orange"
  },
  {
    name: "Energy Independence (10kW)",
    price: "KSh 650,000 – 750,000",
    description: "Complete energy independence for large villas and institutions.",
    features: [
      "20+ premium panels",
      "10kW hybrid inverter",
      "20kWh lithium battery",
      "Smart energy monitoring",
      "Priority installation"
    ],
    powers: ["Large villas", "Hospitals", "Schools", "Restaurants", "Farms"],
    badge: "ULTIMATE",
    color: "gray"
  }
];

const categories = [
  { name: "Solar Inverters", icon: <Zap /> },
  { name: "Solar Panels", icon: <Sun /> },
  { name: "Water Heaters", icon: <ThermometerSun /> },
  { name: "Solar Batteries", icon: <Battery /> },
  { name: "Lithium Batteries", icon: <Battery className="rotate-90" /> }, // Distinguish visually
  { name: "Solar Water Pumps", icon: <Droplets /> },
  { name: "Charge Controllers", icon: <Cpu /> },
  { name: "Solar Lights", icon: <Lightbulb /> },
  { name: "Water Pumping Inverters", icon: <Activity /> },
  { name: "Backup Kits", icon: <Box /> },
  { name: "Solar Accessories", icon: <Plug /> },
  { name: "More Categories", icon: <Sun /> }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Department</h2>
          <p className="text-gray-600">
            Explore our wide range of tailored solar solutions and components.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <a href="#contact" key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-100 border border-green-100">
                <div className="text-optima-green w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-center font-medium text-gray-800 group-hover:text-optima-blue transition-colors">
                {category.name}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Solar Packages</h2>
              <p className="text-gray-600">
                Choose the perfect power solution for your home or business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl relative flex flex-col ${pkg.badge === 'MOST POPULAR' ? 'border-optima-green shadow-lg scale-105 z-10' : 'border-transparent shadow-md hover:border-gray-200'}`}>
                  {pkg.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
                      pkg.badge === 'MOST POPULAR' ? 'bg-optima-green' : 
                      pkg.badge === 'FAST SELLER' ? 'bg-blue-500' :
                      pkg.badge === 'PREMIUM' ? 'bg-optima-orange' : 'bg-gray-800'
                    }`}>
                      {pkg.badge}
                    </div>
                  )}

                  <div className="mb-6 mt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 h-10">{pkg.description}</p>
                    <div className="text-optima-blue font-bold text-lg mb-1">{pkg.price}</div>
                    <div className="text-xs text-gray-400">Retail Price (Est.)</div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Includes</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Powers</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.powers.map((power, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            {power}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    className={`w-full py-3 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 ${
                      pkg.badge === 'MOST POPULAR' 
                        ? 'bg-optima-green text-white hover:bg-green-600' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Query <Phone size={16} />
                  </a>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
