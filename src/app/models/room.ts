import { Owner } from "./owner"

export interface Room {
    id:number
    title: string
    price: Number
    image_name: string
    description: string
    owner: Owner
}