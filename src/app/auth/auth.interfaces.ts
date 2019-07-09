export interface AuthFormValue {
    email: string,
    password?: string,
    firstname?: string,
    lastname?: string,
    terms?: boolean
}

export interface AuthResponse {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}