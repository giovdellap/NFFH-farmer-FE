import { ImageResponse, LoginResponse, ProductResponse } from "../model/connectionModel";
import { Product } from "../model/product";

const mockUser: LoginResponse = {
  token: "",
  success: true,
  name: "Li mejo pomodori"
}

const imageResponse: ImageResponse = {
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg",
  success: true
}

const product: Product = {
  id: "1",
  title: "Zucchine stupende",
  seller: "1",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg",
  description: "Ao sono stupende",
  price: 2,
  weight: true,
  availability: false
}

const productResponse: ProductResponse = {
  id: "1",
  title: "Zucchine stupende",
  success: true
}

export { mockUser, imageResponse, product, productResponse };
