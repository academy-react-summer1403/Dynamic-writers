import http from '../../interceptor'

export const reportLanding = async () => {
  try {
  const result = await http.get('/Home/LandingReport');

  return result
  
  } catch (error) {
    console.log(error.message)
  }
}