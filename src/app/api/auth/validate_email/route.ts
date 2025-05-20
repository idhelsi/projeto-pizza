import { hasEmail } from "@/services/auth"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
    const { email } = await request.json()

    if (!email) return NextResponse.json({ exists: false })

    const has = await hasEmail(email)
    if (!has) return NextResponse.json({ exists: false })

    return NextResponse.json({ exists: true })
}