import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.needDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the crisis need submission
    console.log('[API] Crisis need reported:', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reporting this need. Our network will be notified immediately.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API] Error processing crisis request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return list of active crisis needs
    const crisisNeeds = [
      {
        id: '1',
        title: 'Family in Need - House Fire',
        urgency: 'critical',
        category: 'Emergency Housing',
      },
      {
        id: '2',
        title: 'Elderly Support Needed',
        urgency: 'urgent',
        category: 'Senior Support',
      },
      {
        id: '3',
        title: 'Flood Relief - Multiple Families',
        urgency: 'critical',
        category: 'Emergency Housing',
      },
    ];

    return NextResponse.json({ data: crisisNeeds }, { status: 200 });
  } catch (error) {
    console.error('[API] Error fetching crisis needs:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching crisis needs' },
      { status: 500 }
    );
  }
}
