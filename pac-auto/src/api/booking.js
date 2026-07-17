const BOOKING_API_URL = '/api/booking'

export const createBooking = async (data) => {
  let response

  try {
    response = await fetch(BOOKING_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    throw new Error('Network error. Please try again.')
  }

  let result

  try {
    result = await response.json()
  } catch (error) {
    throw new Error('Invalid server response.')
  }

  if (!response.ok) {
    throw new Error(result.message || 'Booking request failed.')
  }

  return result
}
