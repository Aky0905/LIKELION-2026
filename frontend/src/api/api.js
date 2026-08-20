const BASE_URL = '/api'

async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }
  return response.json()
}

export function getHome() {
  return fetchData('/home')
}

export function getSkin() {
  return fetchData('/skin')
}

export function getCare() {
  return fetchData('/care')
}

export function getWHS() {
  return fetchData('/whs')
}

export function getProfile() {
  return fetchData('/profile')
}
