/**
 * LOGIN
 */

export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    token: string,
    success: boolean,
    name: string
}