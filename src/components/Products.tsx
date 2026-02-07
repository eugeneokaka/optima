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
  Box
} from 'lucide-react';

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

        {/* Categories from the "Recommended for you" in the image (placeholder for context) */}
        <div className="mt-20">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Recommended for you</h3>

             </div>
             
             <div className="grid md:grid-cols-2 gap-8">
                 {/* Placeholder for the blue Victron controller */}
                 <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                     <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                        <Cpu className="text-blue-500 w-24 h-24" />
                     </div>
                     <h4 className="font-bold text-lg mb-2">SmartSolar Charge Controller</h4>
                     <p className="text-gray-500 mb-4">MPPT 100 | 50</p>
                     <a href="#contact" className="text-optima-blue font-bold hover:underline">View Details</a>
                 </div>

                 {/* Placeholder for the MUST inverter/battery */}
                 <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                     <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                        <Zap className="text-red-500 w-24 h-24" />
                     </div>
                     <h4 className="font-bold text-lg mb-2">Hybrid Solar Inverter</h4>
                     <p className="text-gray-500 mb-4">High Efficiency Power</p>
                     <a href="#contact" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-500">
                        Reach us on WhatsApp
                     </a>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
}
