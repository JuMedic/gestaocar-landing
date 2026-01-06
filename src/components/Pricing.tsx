import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 49,
    description: 'Ideal para pequenas locadoras',
    features: [
      'Até 5 veículos',
      'Alertas de vencimento',
      'Controle de manutenção',
      'Geração de contratos',
      'Suporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Profissional',
    price: 99,
    description: 'Para locadoras em crescimento',
    features: [
      'Até 20 veículos',
      'Todos os recursos do Básico',
      'WhatsApp automático',
      'Histórico de locação',
      'Vistoria com fotos',
      'Suporte prioritário',
    ],
    highlighted: true,
  },
  {
    name: 'Empresarial',
    price: 199,
    description: 'Solução completa sem limites',
    features: [
      'Veículos ilimitados',
      'Todos os recursos do Profissional',
      'API de integração',
      'Relatórios avançados',
      'Múltiplos usuários',
      'Suporte 24/7',
      'Gerente de conta dedicado',
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Planos{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Flexíveis
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho da sua operação
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-900 to-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold">R$</span>
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? 'bg-white/20' : 'bg-blue-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-blue-900'}`} />
                    </div>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-900 hover:bg-blue-50'
                    : 'bg-gradient-to-r from-blue-900 to-blue-600 text-white hover:shadow-lg'
                }`}
              >
                Começar Agora
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>Todos os planos incluem 14 dias de teste grátis • Cancele quando quiser</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
