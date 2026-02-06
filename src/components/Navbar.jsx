'use client'

import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        flexWrap: "wrap"
      }}
    >
      {/* LEFT — Logo */}
      <h2 style={{ margin: 0 }}>🍽 Meal Planner</h2>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          fontSize: "22px",
          cursor: "pointer"
        }}
        className="menu-btn"
      >
        ☰
      </button>

      {/* NAV LINKS */}
      <div
        className={`nav-links ${open ? "show" : ""}`}
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center"
        }}
      >
        <Link href="/">🏠 Home</Link>
        <Link href="/dashboard">📚 Dashboard</Link>
        <Link href="/planner">📅 Planner</Link>
        <Link href="/add-recipe">➕ Add Recipe</Link>
        <Link href="/profile">👤 Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>

      {/* MOBILE STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          .menu-btn {
            display: block !important;
          }

          .nav-links {
            width: 100%;
            display: none !important;
            flex-direction: column;
            background: white;
            padding: 10px;
            margin-top: 10px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .nav-links.show {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  )
}
