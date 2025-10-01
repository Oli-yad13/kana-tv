import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity/client'

export async function GET() {
  try {
    // Test the connection by fetching a simple query
    const result = await client.fetch('*[_type == "post"] | order(_createdAt desc) [0...5]')
    return NextResponse.json({ 
      success: true, 
      message: 'Sanity connection successful',
      count: result.length 
    })
  } catch (error) {
    console.error('Sanity connection error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to Sanity' 
    }, { status: 500 })
  }
}
