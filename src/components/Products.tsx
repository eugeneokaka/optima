import { Zap, Battery, Check, CreditCard } from 'lucide-react';

const products = [
  {
    title: "Residential Solar",
    subtitle: "3kW - 10kW Systems",
    price: "Flexible Payment Plans",
    features: ["Backup for lights & appliances", "Hybrid Inverter Technology", "Lithium Battery Storage", "Remote Monitoring App"],
    highlight: "Popular for Homes",
    color: "bg-blue-50"
  },
  {
    title: "Commercial Solar",
    subtitle: "5kW - 50kW Systems",
    price: "Custom ROI Analysis",
    features: ["Grid-tied & Hybrid options", "Reduce Operational Costs", "Tax Incentives available", "Industrial Grade components"],
    highlight: "For Business",
    recommended: true, 
    color: "bg-orange-50"
  },
  {
    title: "Solar Pumps",
    subtitle: "Irrigation Systems",
    price: "Fuel Savings",
    features: ["Zero fuel costs", "Reliable water supply", "Maintenance-free", "For farms & greenhouses"],
    highlight: "Agribusiness",
    color: "bg-green-50"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <CreditCard size={16} />
            <span>Pay-As-You-Go Available</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored Solar Solutions</h2>
          <p className="text-gray-600">
            We use premium components from trusted brands like <strong>Longi</strong>, <strong>Jinko Solar</strong>, <strong>BYD</strong>, and <strong>Growatt</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              id={index === 0 ? "residential" : index === 1 ? "commercial" : "irrigation"} 
              className={`relative rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 ${product.recommended ? 'border-optima-orange shadow-lg' : 'border-gray-100'} scroll-mt-24`}
            >
              {product.recommended && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-optima-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                   Top Choice
                 </div>
              )}
              
              <div className={`w-14 h-14 ${product.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Zap className="w-8 h-8 text-gray-800" />
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{product.highlight}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{product.title}</h3>
                <p className="text-optima-blue font-medium mt-1">{product.subtitle}</p>
              </div>

              <div className="border-t border-b border-gray-100 py-6 mb-6">
                 <p className="text-gray-900 font-bold mb-2">{product.price}</p>
                  <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-optima-green shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-3 rounded-xl font-bold bg-gray-900 text-white hover:bg-optima-blue transition-colors">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
