import { getAllProducts } from "@/services/product";
import { NextResponse } from "next/server";

export async function GET() {
    let pizzas = await getAllProducts()

    // metdodo de coloca a url de uma img em api 
    pizzas = pizzas.map(pizza => ({
        ...pizza,   // NEXT_PUBLIC_BASE_URL -> esta dentro do arq .env
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${pizza.image}`
    }))

    return NextResponse.json({ pizzas })
}