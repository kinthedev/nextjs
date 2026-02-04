import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
export const runtime = "nodejs" // 🔥 QUAN TRỌNG
export async function GET() {
	try {
		const sql = neon(process.env.DATABASE_URL!)

		// query test đơn giản nhất
		await sql`SELECT 1`

		return NextResponse.json({ message: "CONNECTED TO NEON DB ✅" })
	} catch (error) {
		return NextResponse.json(
			{ message: "FAILED ❌", error: String(error) },
			{ status: 500 },
		)
	}
}
