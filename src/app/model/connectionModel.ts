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

export interface ImageResponse {
  url: string,
  success: boolean
}

export interface ProductRequest {
  title: string,
  seller: string,
  image: string,
  description: string,
  price: number,
  weight: boolean,
}

export interface ProductResponse {
  id: string,
  title: string,
  success: boolean
}
