import http from '../../interceptor'

export const reportLanding = async () => {
  const result = await http.get('/Home/LandingReport');
  return result
}