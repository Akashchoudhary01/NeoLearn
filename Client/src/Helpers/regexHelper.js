export function isEmailValid(string){
    return string.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}

export function isPasswordValid(string){
    return string.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
}