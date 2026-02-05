'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      alert('Account created! Please login.')
      router.push('/login')
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e6f7ef, #f4f6fb)',
      }}
    >
      <div className="card" style={{ width: 350 }}>
        <h2 style={{ textAlign: 'center' }}>📝 Register</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 15 }}
        />

        <button
          className="btn"
          style={{ width: '100%' }}
          onClick={handleRegister}
        >
          Create Account
        </button>

        <p style={{ marginTop: 15, textAlign: 'center' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#16a34a' }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
