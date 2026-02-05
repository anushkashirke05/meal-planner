'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      setUser(user)
    }

    fetchUser()
  }, [])

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>👤 My Profile</h1>

        {user && (
          <div >
            <div className="card" style={{ maxWidth: 500 }}>
              <h3 style={{ marginBottom: 10 }}>Account Details</h3>

              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Joined:</strong> {new Date(user.created_at).toDateString()}</p>

              <div style={{ marginTop: 20 }}>
                <button
                  className="btn"
                  onClick={() => alert('Profile editing coming soon!')}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
