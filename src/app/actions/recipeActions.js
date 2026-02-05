'use server'

import { supabase } from '@/lib/supabase'

export async function addRecipe(formData) {
  const name = formData.get('name')
  const category = formData.get('category')
  const ingredients = formData.get('ingredients')
  const instructions = formData.get('instructions')

  const { error } = await supabase.from('recipes').insert({
    name,
    category,
    ingredients,
    instructions,
  })

  if (error) {
    throw new Error(error.message)
  }
}
