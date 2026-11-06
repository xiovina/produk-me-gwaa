'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff, User, Lock, ArrowLeft, Key } from "lucide-react"
import { text } from "stream/consumers";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      alert("you must accept the terms and conditions to register.");
      return;
    }

    if (!formData.password || formData.password !== formData.confirmPassword){
      alert("password do not match");
      return;
    }

    console.log("from submitted:", formData);
    router.push("/auth/login");
  };

  const getPasswordStrength = (password: string) => {
    if (password.length >= 12) return {text:"strong", color: "text-green-600"};
    if (password.length >= 8) return {text:"medium", color: "text-yellow-600"};
    if (password.length > 0) return {text:"weak", color: "text-red-600"};
    return {text: "", color: ""};
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const isFromValid = acceptTerms && formData.password && (formData.password === formData.confirmPassword);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 ...">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3x1 ...">
        </div>
      </div>
    </div>
  );
  return (
    <>
    <input 
    type="text" id="name" name="name"
    value={formData.name}
    onChange={handleInputChange}
    placeholder="your full name" required
  />

  <input type={showPassword ? "text" : "password"} />
  <button type="button" onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <EyeOff /> : <Eye />}
  </button>
  </>
    
  );
  
  {formData.password && (
    <div className={`text-sm font-medium mt-1 ${passwordStrength.color}`}>
      Password strength: {passwordStrength.text}
    </div>
  )}

  {formData.confirmPassword && (
    formData.password !== formData.confirmPassword ? (
      <div className="text-sm font-medium mt-1 text-red-600">
        Passwords do not match
      </div>
    ) : (
      <div className="text-sm font-medium mt-1 text-green-600">
        Passwords match
      </div>
    )
  )}
}