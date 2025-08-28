"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PlanosPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 9,90",
      checkoutUrl: "https://go.disruptybr.com.br/my7njr278f",
      features: [
        "Protocolo básico do Método DTM",
        "Guia de exercícios fundamentais",
        "Técnicas básicas de biomecânica",
        "Suporte por email",
        "Garantia de 7 dias",
      ],
    },
    {
      name: "Plano Intermediário",
      price: "R$ 17,00",
      checkoutUrl: "https://go.disruptybr.com.br/uaj3e",
      isPopular: true,
      features: [
        "Protocolo intermediário do Método DTM",
        "Guia de exercícios avançados",
        "Técnicas intermediárias de biomecânica",
        "Plano de nutrição básico",
        "Suporte por WhatsApp",
        "Garantia de 15 dias",
      ],
    },
  ]

  const handleCheckout = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Acesso Completo ao Método DTM</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desbloqueie todo seu potencial com nosso protocolo cientificamente comprovado
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div
                className={`${plan.isPopular ? "bg-gradient-to-br from-red-600 to-red-700 p-1" : "bg-gradient-to-br from-gray-700 to-gray-800 p-1"} rounded-2xl`}
              >
                <div className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-red-500 mb-4">{plan.price}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-start"
                      >
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleCheckout(plan.checkoutUrl)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
                    } text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    COMEÇAR AGORA
                  </motion.button>

                  <p className="text-center text-gray-500 text-xs mt-3">Pagamento seguro processado pela Sunize</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">Garantia de Satisfação</h3>
            <p className="text-gray-400">
              Se não estiver completamente satisfeito com os resultados, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
