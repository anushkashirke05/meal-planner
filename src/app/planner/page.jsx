'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

export default function Planner() {
  const [meals, setMeals] = useState([])
  const router = useRouter()

  useEffect(() => {
    const checkUserAndFetch = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      fetchMeals(user.id)
    }

    checkUserAndFetch()
  }, [])

  const fetchMeals = async (userId) => {
    const { data, error } = await supabase
      .from('meal_plan')
      .select(`
        id,
        date,
        meal_type,
        recipe_id,
        recipes ( name )
      `)
      .eq('user_id', userId)         
      .order('date', { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return
    }

    console.log("Meals from Supabase:", data) 
    setMeals(data || [])
  }

  
  const grouped = meals.reduce((acc, meal) => {
    const date = meal.date

    if (!acc[date]) acc[date] = []
    acc[date].push(meal)

    return acc
  }, {})

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b) - new Date(a)
  )

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>📅 My Meal Planner</h1>
        <p style={{ color: '#555' }}>
          Your meals organized by date.
        </p>

        {meals.length === 0 && (
          <p>No meals planned yet.</p>
        )}



        <h2 className="section-title" style={{ marginTop: 30 }}>
          Meals Grouped by Date
        </h2>

        {sortedDates.length === 0 && (
          <p>No meals planned yet.</p>
        )}

        {sortedDates.map(date => (
          <div key={date} style={{ marginBottom: 30 }}>
            <h3>📆 {date}</h3>

            <div className="grid">
              {grouped[date].map(meal => (
                <div key={meal.id} className="card">
                  <h3>{meal.recipes?.name || `Recipe ID: ${meal.recipe_id}`}</h3>
                  <p>🍽 {meal.meal_type}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
