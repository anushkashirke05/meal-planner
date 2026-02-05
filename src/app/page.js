'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Landing() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: 'linear-gradient(180deg, #ecfdf5, #f0fdf4 60%)',
          padding: '80px 20px 60px',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '2.8rem', marginBottom: 10 }}>
          🍽 Meal Planner
        </h1>
        <p style={{ color: '#4b5563', maxWidth: 600, margin: '0 auto 20px' }}>
          Plan your meals, discover delicious recipes, and stay organized with
          your personalized weekly meal planner — all in one place.
        </p>

        <Link href="/login">
          <button className="btn">Get Started</button>
        </Link>
        
      </div>

      <div className="container">
       
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Why Use Our Meal Planner?
        </h2>

        <div className="grid" style={{ marginTop: 20 }}>
          <div className="card">
            <h3>🥗 Discover Recipes</h3>
            <p style={{ color: '#4b5563' }}>
              Browse a wide variety of veg and non-veg recipes with clear
              ingredients and instructions.
            </p>
          </div>

          <div className="card">
            <h3>📅 Plan Your Meals</h3>
            <p style={{ color: '#4b5563' }}>
              Add meals to specific dates and view them in a clean,
              organized planner.
            </p>
          </div>

          <div className="card">
            <h3>👤 Personalized Profile</h3>
            <p style={{ color: '#4b5563' }}>
              Manage your account and keep track of your meal planning
              history securely.
            </p>
          </div>
        </div>

        
        <h2 className="section-title" style={{ marginTop: 40, textAlign: 'center' }}>
          How It Works
        </h2>

        <div className="grid" style={{ marginTop: 20 }}>
          <div className="card">
            <h3>1️⃣ Sign Up / Login</h3>
            <p style={{ color: '#4b5563' }}>
              Create an account or log in to access your personal planner.
            </p>
          </div>

          <div className="card">
            <h3>2️⃣ Explore Recipes</h3>
            <p style={{ color: '#4b5563' }}>
              Browse and choose recipes that you love.
            </p>
          </div>

          <div className="card">
            <h3>3️⃣ Add to Planner</h3>
            <p style={{ color: '#4b5563' }}>
              Pick a date and meal type, then add it to your plan.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginTop: 40,
            textAlign: 'center',
            background: '#ecfdf5'
          }}
        >
          <h2>Ready to Start Planning?</h2>
          <p style={{ color: '#4b5563', marginBottom: 15 }}>
            Join now and make your meal planning simple and enjoyable.
          </p>

          <Link href="/register">
            <button className="btn">Create Account</button>
          </Link>
        </div>
      </div>
    </>
  )
}
