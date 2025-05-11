import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter "q" is required' },
      { status: 400 }
    );
  }

  try {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`;
    
    const response = await fetch(itunesUrl, {
      headers: {
        'User-Agent': 'YourAppName/1.0 (your@email.com)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`iTunes API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('iTunes proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from iTunes API' },
      { status: 502 }
    );
  }
}