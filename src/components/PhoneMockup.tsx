import { motion } from 'framer-motion';

interface PhoneMockupProps {
  imageSrc?: string;
  delay?: number;
}

const PhoneMockup = ({ imageSrc, delay = 0 }: PhoneMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt="App screenshot" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
              <div className="space-y-4 w-full">
                {/* Mock Dashboard */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="h-3 bg-blue-900 rounded w-1/3 mb-2"></div>
                  <div className="h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-6 bg-green-500 rounded"></div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-6 bg-blue-500 rounded"></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
