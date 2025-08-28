"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function QuizLoading() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Analisando seu perfil pessoal...",
    "Calculando seu potencial de crescimento...",
    "Determinando o protocolo ideal...",
    "Gerando seu plano personalizado...",
    "Finalizando seu diagnóstico...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval)
          return steps.length - 1
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(stepInterval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Analisando Seu Potencial de <span className="text-red-500">Crescimento</span>
          </h1>
          <p className="text-lg text-gray-300">Estamos criando seu protocolo personalizado...</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-300">Progresso da Análise</span>
              <span className="text-sm font-medium text-red-500">{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-red-600 to-red-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                  index <= currentStep ? "bg-red-900/30 border border-red-500/30" : "bg-gray-800 border border-gray-700"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`w-4 h-4 rounded-full mr-3 flex-shrink-0 ${
                    index < currentStep
                      ? "bg-green-500"
                      : index === currentStep
                        ? "bg-red-500 animate-pulse"
                        : "bg-gray-600"
                  }`}
                />
                <span className={`text-sm ${index <= currentStep ? "text-white font-medium" : "text-gray-400"}`}>
                  {step}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full"
            />
            <p className="text-gray-400 text-xs mt-2">Por favor, aguarde enquanto processamos suas informações...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
