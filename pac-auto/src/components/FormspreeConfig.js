// Formspree Configuration
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojrnqez'

// Instructions for setting up Formspree:
/*
1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (the part after /f/ in the URL)
5. Replace 'YOUR_FORMSPREE_ID' in the FORMSPREE_ENDPOINT above with your actual form ID
6. The form will automatically send booking details to your registered email
*/

export const sendBookingEmail = async (formData) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        address: formData.address,
        carModel: formData.carModel,
        date: formData.date,
        time: formData.time,
        service: formData.service,
        _subject: `New Booking Request - ${formData.name}`,
        _template: 'table' // Optional: for better email formatting
      })
    })
    
    if (response.ok) {
      return { success: true, message: 'Booking submitted successfully! You will receive a confirmation email shortly.' }
    } else {
      throw new Error('Failed to submit booking')
    }
  } catch (error) {
    return { success: false, message: error.message || 'Failed to submit booking' }
  }
}
