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
    <nav
      style={{
        width: "100%",
        background: "#064e3b",
        padding: "12px 20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h2 style={{ margin: 0, color: "white" }}>🍽 Meal Planner</h2>

        {/* Links always visible */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Home
          </Link>

          <Link href="/dashboard" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Dashboard
          </Link>

          <Link href="/planner" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Planner
          </Link>

          <Link href="/profile" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Profile
          </Link>

          <button
            onClick={logout}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}