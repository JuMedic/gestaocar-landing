import { motion } from 'framer-motion';
import { Bell, MessageCircle, Wrench, FileText, History, Camera } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Alertas de Vencimento',
    description: 'Receba notificações automáticas de vencimentos próximos e nunca perca um prazo.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: MessageCircle,
    title: 'Cobrança via WhatsApp',
    description: 'Disparo automático de mensagens com valores atualizados incluindo multa e juros diariamente.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Controle de Manutenção',
    description: 'Registre todos os custos de manutenção de cada veículo e acompanhe o histórico completo.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'Geração de Contratos',
    description: 'Crie contratos profissionais rapidamente com entrada automática de dados.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: History,
    title: 'Histórico de Locação',
    description: 'Acompanhe quando cada veículo foi alugado e quanto tempo ficou parado.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Camera,
    title: 'Vistoria com Fotos',
    description: 'Campo dedicado para fotos dos veículos facilitando a vistoria mensal.',
    color: 'from-indigo-500 to-blue-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Funcionalidades{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar sua frota de forma eficiente e profissional
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
