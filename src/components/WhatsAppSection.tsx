import { motion } from 'framer-motion';
import { MessageCircle, Calculator, Clock, CheckCircle } from 'lucide-react';

const WhatsAppSection = () => {
  const whatsappFeatures = [
    {
      icon: Calculator,
      title: 'Cálculo Automático',
      description: 'Valores atualizados com multa e juros calculados automaticamente',
    },
    {
      icon: Clock,
      title: 'Disparo Diário',
      description: 'Mensagens enviadas todos os dias para clientes inadimplentes',
    },
    {
      icon: CheckCircle,
      title: 'Baixa de Pagamento',
      description: 'Dê baixa total ou parcial direto no sistema',
    },
  ];

  return (
    <section id="whatsapp" className="py-20 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Integração WhatsApp</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Cobrança Automática via WhatsApp
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Automatize suas cobranças com mensagens personalizadas enviadas diretamente
              para o WhatsApp dos seus clientes, com valores sempre atualizados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {whatsappFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">GestãoCar Bot</div>
                  <div className="text-sm text-gray-500">Online</div>
                </div>
              </div>

              {/* Message Bubble */}
              <div className="space-y-4">
                <div className="bg-green-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                  <p className="text-gray-800 text-sm mb-2">
                    Olá! Identificamos um pagamento pendente:
                  </p>
                  <div className="bg-white rounded-lg p-3 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Valor Original:</span>
                      <span className="font-semibold">R$ 150,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Multa:</span>
                      <span className="font-semibold text-red-600">R$ 15,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Juros:</span>
                      <span className="font-semibold text-red-600">R$ 7,50</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-green-600">R$ 172,50</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">12:30</p>
                </div>
              </div>
            </div>

            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg"
            >
              <MessageCircle className="w-8 h-8 text-green-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
