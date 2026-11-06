'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, User, Lock, ArrowLeft } from 'lucide-react'

const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const router = useRouter();
router.push('/dashboard');

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
        alert('Please fill in all fields.');
        return;
    }
    console.log('Form submitted:', formData);
    router.push('/dashboard');
};

const getPasswordStrength = (password: string) => {}

<form onSubmit={handleSubmit}>
    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

    <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} />
    <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeOff /> : <Eye />}
    </button>

    <input type="checkbox" name="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />

    <button type="submit" className="w-full bg-blue-600 ...">login</button>
</form>