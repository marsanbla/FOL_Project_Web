import router from '@/router'

export function requireAuth(to, from, next) {
    const isAuthenticated = localStorage.getItem('token')
    if (isAuthenticated) {
        next()
    } else {
        router.push({ name: 'login' })
    }
}