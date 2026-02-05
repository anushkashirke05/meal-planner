'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function RecipeDetail() {
  const { id } = useParams()
  const router = useRouter()
  const [recipe, setRecipe] = useState(null)
  const [mealType, setMealType] = useState('Lunch')
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  )

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await supabase
        .from('recipes')
        .select('*')
        .eq('id', id)
        .single()

      setRecipe(data)
    }

    fetchRecipe()
  }, [id])

 
  const addToMealPlan = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/login')
      return
    }

    await supabase.from('meal_plan').insert({
      recipe_id: recipe.id,
      meal_type: mealType,
      date: selectedDate,
      user_id: user.id       
    })

    alert('Added to meal plan!')
    router.push('/planner')
  }

  if (!recipe) return <p>Loading...</p>

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <h1>{recipe.name}</h1>

          <h3>🧾 Ingredients</h3>
          <p>{recipe.ingredients}</p>

          <h3>👨‍🍳 Instructions</h3>
          <p>{recipe.instructions}</p>

          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: '10px' }}>

          
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ padding: 8, borderRadius: 8 }}
            />

            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              style={{ padding: 8, borderRadius: 8 }}
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>

            
            <button
              className="btn"
              onClick={addToMealPlan}
            >
              Add to Meal Plan
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
