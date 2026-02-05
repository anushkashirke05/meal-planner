'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f4f6fb'
    }}>
      <div className="card" style={{ width: 350 }}>
        <h2 style={{ textAlign: 'center' }}>🔐 Login</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 15 }}
        />

        <button className="btn" style={{ width: '100%' }} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: 15, textAlign: 'center' }}>
          Don't have an account?{' '}
         import Link from 'next/link'   
        <Link href="/register" style={{ color: '#16a34a' }}>
  Register
</Link>

        </p>
      </div>
    </div>
  )
}
