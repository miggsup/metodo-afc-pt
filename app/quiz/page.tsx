"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import QuizHeader from "@/components/quiz/quiz-header"
import QuizQuestion from "@/components/quiz/quiz-question"
import QuizHeight from "@/components/quiz/quiz-height"
import QuizLoading from "@/components/quiz/quiz-loading"
import QuizResult from "@/components/quiz/quiz-result"

export default function QuizPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [height, setHeight] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      id: "size",
      question: "Qual é o tamanho aproximado do seu pênis ereto?",
      options: [
        { value: "less_than_12", label: "Menos de 12 cm" },
        { value: "12_to_14", label: "De 12 a 14 cm" },
        { value: "14_to_16", label: "De 14 a 16 cm" },
        { value: "more_than_16", label: "Mais de 16 cm" },
      ],
      type: "single",
    },
    {
      id: "frequency",
      question: "Com que frequência você se masturba?",
      options: [
        { value: "more_than_once_daily", label: "Mais de uma vez por dia" },
        { value: "daily", label: "Todos os dias" },
        { value: "2_to_4_weekly", label: "De 2 a 4 vezes por semana" },
        { value: "rarely", label: "Raramente" },
      ],
      type: "single",
    },
    {
      id: "morning_erection",
      question: "Você costuma acordar com o pênis ereto?",
      options: [
        { value: "almost_never", label: "Quase nunca" },
        { value: "rarely", label: "Raramente" },
        { value: "sometimes", label: "Às vezes" },
        { value: "almost_always", label: "Quase sempre" },
      ],
      type: "single",
    },
    {
      id: "previous_methods",
      question: "Você já tentou algum método natural para aumentar o pênis?",
      options: [
        { value: "never_heard", label: "Nunca ouvi falar" },
        { value: "heard_never_tried", label: "Já ouvi falar, mas nunca tentei" },
        { value: "tried_inconsistent", label: "Já tentei, mas sem constância" },
        { value: "tried_disciplined", label: "Sim, fiz com disciplina" },
      ],
      type: "single",
    },
    {
      id: "diet",
      question: "Como é sua dieta diária?",
      options: [
        { value: "junk_only", label: "Só comida processada (refrigerantes, fast food, doces)" },
        { value: "half_half", label: "50% comida processada, 50% saudável" },
        { value: "mostly_healthy", label: "Tento comer bem na maioria das refeições" },
        { value: "natural_balanced", label: "Dieta natural e equilibrada" },
      ],
      type: "single",
    },
    {
      id: "sleep",
      question: "Quantas horas você dorme por noite?",
      options: [
        { value: "less_than_5", label: "Menos de 5 horas" },
        { value: "5_to_6", label: "De 5 a 6 horas" },
        { value: "6_to_7", label: "De 6 a 7 horas" },
        { value: "8_or_more", label: "8 horas ou mais" },
      ],
      type: "single",
    },
    {
      id: "exercise",
      question: "Você pratica atividade física?",
      options: [
        { value: "never", label: "Nunca" },
        { value: "once_weekly", label: "Uma vez por semana ou menos" },
        { value: "2_to_3_weekly", label: "De 2 a 3 vezes por semana" },
        { value: "4_or_more_weekly", label: "4 vezes por semana ou mais" },
      ],
      type: "single",
    },
    {
      id: "age",
      question: "Qual é a sua idade?",
      options: [
        { value: "12_to_18", label: "Entre 12 e 18 anos" },
        { value: "19_to_27", label: "Entre 19 e 27 anos" },
        { value: "28_to_36", label: "Entre 28 e 36 anos" },
        { value: "above_36", label: "Mais de 36 anos" },
      ],
      type: "single",
    },
  ]

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1)
    } else if (currentStep === questions.length) {
      // Height input is complete, show loading
      if (height) {
        setIsLoading(true)
        // Simulate loading and calculation
        setTimeout(() => {
          setIsLoading(false)
          setShowResult(true)
        }, 10000)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleHeightChange = (value: number) => {
    setHeight(value)
  }

  const handleStartPlan = () => {
    router.push("/planos")
  }

  if (isLoading) {
    return <QuizLoading />
  }

  if (showResult) {
    return <QuizResult height={height || 0} onContinue={handleStartPlan} />
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-4">
      <div className="container mx-auto px-4 max-w-3xl">
        <QuizHeader currentStep={currentStep} totalSteps={questions.length} />

        <div className="w-full">
          {currentStep < questions.length ? (
            <QuizQuestion
              question={questions[currentStep].question}
              options={questions[currentStep].options}
              type={questions[currentStep].type}
              value={answers[questions[currentStep].id] || null}
              onChange={(answer) => handleAnswer(questions[currentStep].id, answer)}
              onNext={handleNext}
              onBack={handleBack}
              showBack={currentStep > 0}
            />
          ) : (
            <QuizHeight value={height} onChange={handleHeightChange} onNext={handleNext} onBack={handleBack} />
          )}
        </div>
      </div>
    </div>
  )
}
