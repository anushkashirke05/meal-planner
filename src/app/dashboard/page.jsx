'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('recipes').select('*')
      setRecipes(data || [])
      setLoading(false)
    }
    load()
  }, [])

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>🍽 Explore Delicious Recipes</h1>
        <p style={{ color: '#555' }}>
          Discover and plan your meals with our curated recipes.
        </p>

        <div className="section-title">🥦 Veg Recipes</div>
        <div className="grid">
          {recipes
            .filter(r => r.category === 'veg')
            .map(r => (
              <div className="card" key={r.id}>
                <h3>{r.name}</h3>
                <Link href={`/recipe/${r.id}`} style={{ color: '#16a34a', fontWeight: 600 }}>
                  View Recipe →
                </Link>
              </div>
            ))}
        </div>

        <div className="section-title">🍗 Non-Veg Recipes</div>
        <div className="grid">
          {recipes
            .filter(r => r.category === 'non-veg')
            .map(r => (
              <div className="card" key={r.id}>
                <h3>{r.name}</h3>
                <Link href={`/recipe/${r.id}`} style={{ color: '#16a34a', fontWeight: 600 }}>
                  View Recipe →
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
