'use client'

import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="navbar" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px"
    }}>

      {/* LEFT — Logo / Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h2 style={{ margin: 0 }}>🍽 Meal Planner</h2>
      </div>

      {/* CENTER — Main Navigation */}
      <div style={{
        display: "flex",
        gap: "20px",
        fontWeight: "600"
      }}>
        <Link href="/"> Home</Link>
        <Link href="/dashboard"> Dashboard</Link>
        <Link href="/planner"> Planner</Link>

      </div>

      {/* RIGHT — Profile & Logout */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link href="/profile"> Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
