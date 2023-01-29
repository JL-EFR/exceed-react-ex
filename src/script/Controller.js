import axios from "axios"

export const GetPizza = async () => {
  const baseURL = "http://localhost:3004/pizza"
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    return null
  }
}

export const GetPasta = async () => {
  const baseURL = "http://localhost:3004/pasta"
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    return null
  }
}

export const GetDessert = async () => {
  const baseURL = "http://localhost:3004/dessert"
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    return null
  }
}
export const GetDrinks = async () => {
  const baseURL = "http://localhost:3004/drinks"
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    return null
  }
}
export const GetSauces = async () => {
  const baseURL = "http://localhost:3004/sauces"
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    return null
  }
}
export const GetSides = async () => {
  const baseURL = "http://localhost:3004/sides"
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    return null
  }
}
