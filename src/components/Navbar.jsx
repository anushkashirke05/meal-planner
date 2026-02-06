'use client'

import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const logout = async () => {
    await supabase.auth.signOut()
    setOpen(false)
    router.push('/login')
  }

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE — LOGO */}
        <h2 style={{ margin: 0, color: "white" }}>🍽 Meal Planner</h2>

        {/* RIGHT SIDE — HAMBURGER MENU */}
        <button
          onClick={() => setOpen(prev => !prev)}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* DROPDOWN MENU */}
      <div
        className={open ? "menu show" : "menu"}
        style={{
          display: open ? "flex" : "none",
          position: "absolute",
          top: "60px",
          left: 0,
          width: "100%",
          background: "white",
          flexDirection: "column",
          padding: "15px 20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Link href="/" style={{ color: "#064e3b", marginBottom: 8, textDecoration: "none", fontWeight: 600 }}>🏠 Home</Link>
        <Link href="/dashboard" style={{ color: "#064e3b", marginBottom: 8, textDecoration: "none", fontWeight: 600 }}>📚 Dashboard</Link>
        <Link href="/planner" style={{ color: "#064e3b", marginBottom: 8, textDecoration: "none", fontWeight: 600 }}>📅 Planner</Link>
        <Link href="/add-recipe" style={{ color: "#064e3b", marginBottom: 8, textDecoration: "none", fontWeight: 600 }}>➕ Add Recipe</Link>
        <Link href="/profile" style={{ color: "#064e3b", marginBottom: 8, textDecoration: "none", fontWeight: 600 }}>👤 Profile</Link>

        <button
          onClick={logout}
          style={{
            marginTop: 10,
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
    </nav>
  )
}
