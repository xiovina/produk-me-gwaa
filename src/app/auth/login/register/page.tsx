'use client'

import { useState, type ChangeEvent, type FormEvent } from "react"
import { ArrowLeft, Eye, EyeOff, Key, Lock, User } from "lucide-react"

type RegistrationForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [formMessage, setFormMessage] = useState<{
    text: string
    isError: boolean
  } | null>(null)
  const [formData, setFormData] = useState<RegistrationForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
    setFormMessage(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!acceptedTerms) {
      setFormMessage({
        text: "Please accept the terms and conditions to continue.",
        isError: true,
      })
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setFormMessage({ text: "Passwords do not match.", isError: true })
      return
    }

    setFormMessage({
      text: "Your details are valid, but registration is not connected yet.",
      isError: false,
    })
  }

  const getPasswordStrength = (password: string) => {
    if (!password) return { text: "", color: "" }
    if (password.length < 8) return { text: "Weak", color: "text-red-600" }
    if (password.length < 12) return { text: "Medium", color: "text-yellow-600" }
    return { text: "Strong", color: "text-green-600" }
  }

  const passwordStrength = getPasswordStrength(formData.password)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700 block">name</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rouder-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl shadow-sm"
                        required
                    />
            
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700 block">Email</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rouder-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl shadow-sm"
                        required
                    />
            
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700 block">Password</label>
                <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rouder-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl shadow-sm"
                        required
                    />
            
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700 block">name</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rouder-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl shadow-sm"
                        required
                    />
            
                </div>
            </div>

            </form>
            
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 to-blue-600/10 rounded-3xl" />
          <div className="relative z-10">
            <a
              href="/auth/login"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </a>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/5 to-blue-600/100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Create Account
              </h1>
              <p className="text-gray-600">
                Join us today! It takes only a few steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}