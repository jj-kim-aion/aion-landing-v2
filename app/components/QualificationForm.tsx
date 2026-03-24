'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Step 1 schema
const step1Schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .refine(
      (email) => {
        const domain = email.split('@')[1]
        const blockedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
        return !blockedDomains.includes(domain)
      },
      { message: 'Please use your corporate email address' }
    ),
  company: z.string().min(2, 'Company name is required'),
})

// Step 2 schema
const step2Schema = z.object({
  jobTitle: z.string().min(2, 'Job title is required'),
  revenue: z.enum(['under-100m', '100m-500m', '500m-1b', '1b-5b', '5b-plus'], {
    required_error: 'Please select company revenue',
  }),
  aiMaturity: z.enum(['no-experience', 'exploring', 'pilot', 'deployed'], {
    required_error: 'Please select AI maturity level',
  }),
  challenge: z.string().min(10, 'Please describe your primary challenge'),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>

export default function QualificationForm() {
  const [step, setStep] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form1 = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  })

  const form2 = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  })

  const onStep1Submit = (data: Step1Data) => {
    setStep1Data(data)
    setStep(2)
  }

  const onStep2Submit = async (data: Step2Data) => {
    setIsSubmitting(true)
    
    // Combine data and send to backend
    const fullData = { ...step1Data, ...data }
    console.log('Form submitted:', fullData)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Move to Calendly step
    setStep(3)
    setIsSubmitting(false)
  }

  return (
    <section id="qualification" className="section-padding bg-soft-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-6">
              Schedule your AI impact assessment
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              30 minutes. One workflow. Concrete efficiency opportunities.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 w-16 transition-colors duration-300 ${
                  s <= step ? 'bg-near-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Step 1: Basic info */}
          {step === 1 && (
            <form onSubmit={form1.handleSubmit(onStep1Submit)} className="space-y-6">
              <div className="bg-white border border-gray-200 p-8 md:p-12 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    Full Name
                  </label>
                  <input
                    {...form1.register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg"
                    placeholder="Sarah Chen"
                  />
                  {form1.formState.errors.name && (
                    <p className="mt-2 text-sm text-red-600">{form1.formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    Corporate Email
                  </label>
                  <input
                    {...form1.register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg"
                    placeholder="sarah.chen@company.com"
                  />
                  {form1.formState.errors.email && (
                    <p className="mt-2 text-sm text-red-600">{form1.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    Company
                  </label>
                  <input
                    {...form1.register('company')}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg"
                    placeholder="Acme Industries"
                  />
                  {form1.formState.errors.company && (
                    <p className="mt-2 text-sm text-red-600">{form1.formState.errors.company.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-near-black text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
              >
                Continue
              </button>
            </form>
          )}

          {/* Step 2: Qualification */}
          {step === 2 && (
            <form onSubmit={form2.handleSubmit(onStep2Submit)} className="space-y-6">
              <div className="bg-white border border-gray-200 p-8 md:p-12 space-y-6">
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    Job Title
                  </label>
                  <input
                    {...form2.register('jobTitle')}
                    type="text"
                    id="jobTitle"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg"
                    placeholder="VP Operations"
                  />
                  {form2.formState.errors.jobTitle && (
                    <p className="mt-2 text-sm text-red-600">{form2.formState.errors.jobTitle.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="revenue" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    Company Revenue
                  </label>
                  <select
                    {...form2.register('revenue')}
                    id="revenue"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg bg-white"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-100m">Under $100M</option>
                    <option value="100m-500m">$100M - $500M</option>
                    <option value="500m-1b">$500M - $1B</option>
                    <option value="1b-5b">$1B - $5B</option>
                    <option value="5b-plus">$5B+</option>
                  </select>
                  {form2.formState.errors.revenue && (
                    <p className="mt-2 text-sm text-red-600">{form2.formState.errors.revenue.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="aiMaturity" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    AI Maturity
                  </label>
                  <select
                    {...form2.register('aiMaturity')}
                    id="aiMaturity"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg bg-white"
                  >
                    <option value="">Select current state</option>
                    <option value="no-experience">No AI experience</option>
                    <option value="exploring">Exploring options</option>
                    <option value="pilot">Running pilots</option>
                    <option value="deployed">Systems deployed</option>
                  </select>
                  {form2.formState.errors.aiMaturity && (
                    <p className="mt-2 text-sm text-red-600">{form2.formState.errors.aiMaturity.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-700">
                    Primary Challenge
                  </label>
                  <textarea
                    {...form2.register('challenge')}
                    id="challenge"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-near-black focus:outline-none text-lg resize-none"
                    placeholder="Describe the operational challenge you're looking to solve..."
                  />
                  {form2.formState.errors.challenge && (
                    <p className="mt-2 text-sm text-red-600">{form2.formState.errors.challenge.message}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold text-lg hover:border-near-black transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-near-black text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Schedule Call'}
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Calendly */}
          {step === 3 && (
            <div className="bg-white border border-gray-200 p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Select a time that works for you
                </h3>
                <p className="text-gray-600">
                  You'll meet with one of our AI deployment specialists for a 30-minute impact assessment.
                </p>
              </div>
              
              {/* Calendly embed placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-16 text-center">
                <p className="text-gray-600 mb-4">
                  Calendly embed will appear here
                </p>
                <p className="text-sm text-gray-500 font-mono">
                  https://calendly.com/aion-ai/impact-assessment
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep(1)
                  form1.reset()
                  form2.reset()
                  setStep1Data(null)
                }}
                className="mt-8 w-full px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:border-near-black transition-colors duration-200"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
