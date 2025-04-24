
import React from 'react';
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
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Amazing Features Of Our New Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex items-start space-x-4 p-6 rounded-lg bg-navy-800/50 hover:bg-navy-800 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.icon}
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
