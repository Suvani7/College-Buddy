// src/features/profile/api/getProfile.js
import { api } from '../../../app/api'

export async function getProfile() {
  try {
    const response = await api.get('users/profile/')

    // Successful response
    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      }
    }

    // Handle unexpected successful status codes
    return {
      status: response.status,
      data: null,
      error: 'Unexpected response status',
    }
  }
  catch (error) {
    // Handle 403 (unauthorized user) - not logged in
    if (error?.response?.status === 403) {
      return {
        status: 403,
        data: null,
      }
    }

    // Handle 401 (unauthorized user) - invalid credentials
    if (error?.response?.status === 401) {
      return {
        status: 401,
        data: null,
      }
    }

    // Handle network errors or other issues
    if (!error?.response) {
      console.error('Network error in getProfile:', error)
      return {
        status: 500,
        data: null,
        error: 'Network error',
      }
    }

    // Handle all other HTTP errors
    console.error('getProfile error:', error)
    return {
      status: error.response.status || 500,
      data: null,
      error: error?.response?.data?.message || error?.message || 'Unexpected error',
    }
  }
}
