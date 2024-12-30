export const ROUTES = {
  HOME: '/',
  LOGIN: '#login',
  SIGNUP: '#signup',
  FORGOT_PASSWORD: '#forgot-password',
  FEATURES: '#features',
  PRICING: '#pricing',
  ABOUT: '#about',
} as const;

export function navigate(route: string) {
  window.location.hash = route.startsWith('#') ? route.slice(1) : route;
}

export function getCurrentRoute() {
  return window.location.hash || '/';
}