"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

type QuizResultProps = {
  height: number
  onContinue: () => void
}

export default function QuizResult({ height, onContinue }: QuizResultProps) {
  const potentialGain = Math.floor(Math.random() * 4) + 4 // 4-7cm gain
  const maxHeight = height + potentialGain

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Seu Resultado <span className="text-red-500">Personalizado</span>
          </h1>
          <p className="text-lg text-gray-300">Baseado na sua análise, descobrimos seu potencial de aumento</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-gray-800 shadow-xl mb-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white">
              Você pode aumentar até <span className="text-red-500 text-3xl">{potentialGain}cm</span> do seu tamanho
            </h2>
            <p className="text-gray-400 mt-2">Seu tamanho tem potencial para crescer em apenas 30 dias</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-xl text-center w-full md:w-auto">
              <p className="text-gray-400 mb-1 text-sm">Tamanho atual</p>
              <p className="text-2xl font-bold text-white">{height}cm</p>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="h-8 w-8 text-red-500" />
            </div>
            <div className="block md:hidden">
              <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="bg-gradient-to-r from-red-900 to-red-700 p-4 rounded-xl text-center w-full md:w-auto">
              <p className="text-gray-200 mb-1 text-sm">Seu potencial máximo</p>
              <p className="text-2xl font-bold text-white">{maxHeight}cm</p>
            </div>
          </div>

          <div className="relative h-16 bg-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="absolute bottom-0 left-0 w-1/2 bg-gray-700 h-full flex items-center justify-center border-r-2 border-dashed border-white/20">
              <span className="text-white font-bold text-lg">{height}cm</span>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 bg-gradient-to-r from-red-800 to-red-600 h-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">{maxHeight}cm</span>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1">
              <ArrowRight className="h-4 w-4 text-red-600" />
            </div>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg mb-4">
            <div className="flex items-start">
              <div className="bg-red-600 rounded-full p-1 mr-3 mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-gray-300 text-sm">
                <span className="font-bold text-white">97% das pessoas</span> conseguem alcançar seu potencial máximo em{" "}
                <span className="font-bold text-white">30 dias</span> seguindo nosso protocolo.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="flex items-start">
              <div className="bg-red-600 rounded-full p-1 mr-3 mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-gray-300 text-sm">
                Seu protocolo personalizado requer apenas{" "}
                <span className="font-bold text-white">15 minutos por dia</span> para resultados efetivos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onContinue}
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Começar Meu Protocolo Personalizado
          </button>
          <p className="mt-3 text-gray-400 text-xs">
            Seu protocolo personalizado foi criado baseado nas suas respostas.
            <br />
            Comece agora e veja resultados em apenas 30 dias.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
