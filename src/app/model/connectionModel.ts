/**
 * LOGIN
 */

import { Product } from "./product"

export interface LoginRequest {
    email: string,
    password: string
}

export interface RegistrationRequest {
  email: string,
  password: string,
  address: string,
  image: string,
  username: string,
  area: string
}

export interface LoginResponse {
    token: string,
    success: boolean,
    error: string
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

export interface GetProductsResponse {
  id: string,
  products: Product[]
}

export interface Areas {
  areas: string[]
}
