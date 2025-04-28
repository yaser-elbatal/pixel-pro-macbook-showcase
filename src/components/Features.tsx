
import React from 'react';
import Image from 'next/image';
import { 
  Smartphone, 
  Video, 
  Bell, 
  Wifi, 
  Scan, 
  Share2 
} from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    title: "Mobile Application Control",
    description: "Manage your deliveries on-the-go with our mobile app"
  },
  {
    icon: <Video className="w-6 h-6 text-blue-400" />,
    title: "Livestream Capability",
    description: "Real-time video streaming for enhanced security"
  },
  {
    icon: <Bell className="w-6 h-6 text-blue-400" />,
    title: "Realtime Notifications",
    description: "Instant alerts for all delivery activities"
  },
  {
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    title: "Offline Mode",
    description: "Stay secure even without internet access"
  },
  {
    icon: <Scan className="w-6 h-6 text-blue-400" />,
    title: "Package Scanning",
    description: "Integrated QR/RFID for package tracking"
  },
  {
    icon: <Share2 className="w-6 h-6 text-blue-400" />,
    title: "Device Sharing",
    description: "Multi-access rights to family members"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Border */}
        <div className="text-center mb-14">
          <span className="block text-sm text-blue-400 uppercase tracking-wider mb-2">Features</span>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Amazing Features Of Our <br />New Product
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image - Left Side */}
          <div className="flex justify-center">
            {/* Radial gradient shadow/glow effect */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-blue-400/30 via-blue-700/10 to-transparent blur-xl"></div>
              <Image 
                src="/lovable-uploads/f5760ed8-3fa5-4bfa-aff0-b758e3b29d8b.png" 
                alt="AHLN Smart Delivery Box" 
                width={400}
                height={500}
                className="w-auto max-h-[500px] object-contain relative z-10"
              />
            </div>
          </div>
          
          {/* Features List - Right Side */}
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start gap-4 group hover:bg-navy-800/40 p-4 rounded-lg transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-1">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
