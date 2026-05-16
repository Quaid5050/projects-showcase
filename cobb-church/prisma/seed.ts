import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

/** Seed admin only — set a new strong password in production (Vercel env / DB update). */
const SEED_ADMIN_PASSWORD = 'Km9#Tp2$vL8@nQ4wX7jF5hR3cM6bY1zA8'

const DEMO_CHURCH_PASSWORD = 'DemoChurch2026!'

async function main() {
  console.log('🌱 Starting seed...')

  await prisma.emailLog.deleteMany()
  await prisma.notification.deleteMany()
  await prisma.message.deleteMany()
  await prisma.resourceResponse.deleteMany()
  await prisma.crisisResponse.deleteMany()
  await prisma.crisisAlert.deleteMany()
  await prisma.donation.deleteMany()
  await prisma.eventRegistration.deleteMany()
  await prisma.onboardingApplication.deleteMany()
  await prisma.announcement.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.event.deleteMany()
  await prisma.pastorStory.deleteMany()
  await prisma.crisisNeed.deleteMany()
  await prisma.user.deleteMany()
  await prisma.church.deleteMany()

  console.log('✅ Cleared existing data')

  const adminHash = await bcrypt.hash(SEED_ADMIN_PASSWORD, 10)
  await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@cobbchurch.org',
      password: adminHash,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  })
  console.log('✅ Created admin user (ADMIN)')

  const churchHash = await bcrypt.hash(DEMO_CHURCH_PASSWORD, 10)

  const churchData = [
    {
      name: 'First Baptist Church of Powder Springs',
      slug: 'first-baptist-powder-springs',
      description:
        'A welcoming congregation committed to worship, discipleship, and serving west Cobb families.',
      pastorName: 'Daniel Mercer',
      address: '123 Church Street',
      city: 'Powder Springs',
      state: 'GA',
      zip: '30127',
      phone: '(770) 555-0101',
      email: 'info@fbcps-demo.org',
      website: 'https://example.org/fbcps',
      image:
        'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&h=800&fit=crop&q=80',
      denomination: 'Baptist',
      size: '500-1000',
      founded: '1985',
      services: ['Sunday Worship 10:00 AM', 'Wednesday Bible Study 7:00 PM', 'Youth Group Friday 6:00 PM'],
      ministries: ['Worship', 'Youth Ministry', 'Outreach', 'Missions'],
    },
    {
      name: 'Vision for Souls Church',
      slug: 'vision-for-souls',
      description: 'Reaching neighbors with practical compassion and the hope of the Gospel.',
      pastorName: 'Ricky Mims',
      address: '456 Faith Avenue',
      city: 'Austell',
      state: 'GA',
      zip: '30106',
      phone: '(770) 555-0102',
      email: 'contact@visionforsouls-demo.org',
      website: 'https://example.org/vfs',
      image:
        'https://images.unsplash.com/photo-1529070538774-184350cb1f90?w=1200&h=800&fit=crop&q=80',
      denomination: 'Non-denominational',
      size: '200-500',
      founded: '2010',
      services: ['Sunday Service 11:00 AM', 'Prayer Meeting Tuesday 6:30 PM'],
      ministries: ['Evangelism', 'Prayer', 'Youth', 'Community Outreach'],
    },
    {
      name: 'New Hope Community Church',
      slug: 'new-hope-community',
      description: 'A multi-generational church helping families find hope and belonging in Christ.',
      pastorName: 'Michael Thompson',
      address: '789 Hope Lane',
      city: 'Kennesaw',
      state: 'GA',
      zip: '30144',
      phone: '(770) 555-0103',
      email: 'hello@newhope-demo.org',
      website: 'https://example.org/newhope',
      image:
        'https://images.unsplash.com/photo-1517457373618-aD372be19cbd?w=1200&h=800&fit=crop&q=80',
      denomination: 'Non-denominational',
      size: '300-500',
      founded: '2005',
      services: ['Sunday Worship 9:00 AM & 11:00 AM', 'Small Groups Wednesday'],
      ministries: ['Worship', 'Families', 'Serve', 'Children'],
    },
    {
      name: 'Bridge of Faith Church',
      slug: 'bridge-of-faith',
      description: 'Connecting Scripture, service, and community for lasting impact.',
      pastorName: 'David Williams',
      address: '321 Bridge Road',
      city: 'Smyrna',
      state: 'GA',
      zip: '30080',
      phone: '(770) 555-0104',
      email: 'info@bridgeoffaith-demo.org',
      website: 'https://example.org/bof',
      image:
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop&q=80',
      denomination: 'Non-denominational',
      size: '400-600',
      founded: '2000',
      services: ['Sunday Service 10:30 AM', 'Community Dinner Thursday 6:00 PM'],
      ministries: ['Faith', 'Community', 'Outreach', 'Counseling'],
    },
    {
      name: 'Grace Fellowship Church',
      slug: 'grace-fellowship',
      description: "Growing in grace—sending teams to love Cobb's schools and neighborhoods.",
      pastorName: 'James Walker',
      address: '987 Grace Street',
      city: 'Mableton',
      state: 'GA',
      zip: '30126',
      phone: '(770) 555-0105',
      email: 'info@gracefellowship-demo.org',
      website: 'https://example.org/grace',
      image:
        'https://images.unsplash.com/photo-1491430596883-006a5936edb3?w=1200&h=800&fit=crop&q=80',
      denomination: 'Non-denominational',
      size: '350-500',
      founded: '2008',
      services: ['Sunday Service 9:30 AM & 11:30 AM'],
      ministries: ['Grace', 'Groups', 'Serve', 'Worship'],
    },
  ]

  const churches = []
  for (const c of churchData) {
    const ch = await prisma.church.create({
      data: {
        ...c,
        approvalStatus: 'APPROVED',
        published: true,
      },
    })
    churches.push(ch)
  }
  console.log(`✅ Created ${churches.length} approved & published churches`)

  const [c0, c1, c2] = [churches[0]!, churches[1]!, churches[2]!]

  const u0 = await prisma.user.create({
    data: {
      name: 'Daniel Mercer',
      email: 'pastor.powder@demo.cobbchurch.org',
      password: churchHash,
      role: 'CHURCH_USER',
      churchId: c0.id,
      status: 'ACTIVE',
    },
  })
  const u1 = await prisma.user.create({
    data: {
      name: 'Ricky Mims',
      email: 'pastor.vision@demo.cobbchurch.org',
      password: churchHash,
      role: 'CHURCH_USER',
      churchId: c1.id,
      status: 'ACTIVE',
    },
  })
  const u2 = await prisma.user.create({
    data: {
      name: 'Michael Thompson',
      email: 'pastor.newhope@demo.cobbchurch.org',
      password: churchHash,
      role: 'CHURCH_USER',
      churchId: c2.id,
      status: 'ACTIVE',
    },
  })

  await prisma.church.update({ where: { id: c0.id }, data: { ownerUserId: u0.id } })
  await prisma.church.update({ where: { id: c1.id }, data: { ownerUserId: u1.id } })
  await prisma.church.update({ where: { id: c2.id }, data: { ownerUserId: u2.id } })
  console.log('✅ Created 3 demo church users (CHURCH_USER) with owner links')

  await prisma.resource.createMany({
    data: [
      {
        title: 'Fellowship hall & AV for joint trainings',
        description:
          'Weeknight availability for up to 120 guests. Sound system, projector, and kitchen access by arrangement.',
        category: 'Space',
        type: 'OFFER',
        churchId: c0.id,
        status: 'ACTIVE',
        published: true,
      },
      {
        title: 'Volunteer team for food & supply drives',
        description:
          'Twelve adults and youth ready to pack boxes, load vehicles, and serve at distribution sites.',
        category: 'Volunteers',
        type: 'OFFER',
        churchId: c1.id,
        status: 'ACTIVE',
        published: true,
      },
      {
        title: 'Hygiene kits for west Cobb families',
        description: 'Seeking travel-size toiletries and diapers for partner schools and mobile pantries.',
        category: 'Essentials',
        type: 'REQUEST',
        churchId: c2.id,
        status: 'ACTIVE',
        published: true,
      },
      {
        title: 'Translation help for community clinic day',
        description: 'Spanish and Portuguese interpreters needed for a one-day clinic in south Cobb.',
        category: 'Volunteers',
        type: 'REQUEST',
        churchId: churches[3]!.id,
        status: 'ACTIVE',
        published: true,
      },
    ],
  })
  console.log('✅ Created 2 offers and 2 requests')

  await prisma.event.createMany({
    data: [
      {
        title: 'Cobb County Prayer & Unity Night',
        slug: 'cobb-prayer-unity-night',
        description:
          'Pastors and ministry leaders gather for worship, Scripture, and prayer for our schools and first responders.',
        date: new Date('2026-06-18'),
        time: '7:00 PM',
        location: 'New Hope Community Church',
        address: '789 Hope Lane, Kennesaw, GA 30144',
        organizer: 'Cobb Church Network',
        contactEmail: 'events@cobbchurch.org',
        contactPhone: '(770) 555-0100',
        image:
          'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&h=800&fit=crop&q=80',
        category: 'Prayer',
        capacity: 300,
        registered: 42,
        published: true,
      },
      {
        title: 'Network Serve Day — Parks & Schools',
        slug: 'network-serve-day-2026',
        description: 'Churches team up for beautification projects and encouragement visits across Cobb.',
        date: new Date('2026-08-09'),
        time: '8:30 AM',
        location: 'Multiple sites (briefing at Bridge of Faith)',
        address: '321 Bridge Road, Smyrna, GA 30080',
        organizer: 'Cobb Church Network',
        contactEmail: 'serve@cobbchurch.org',
        contactPhone: '(770) 555-0100',
        image:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop&q=80',
        category: 'Community',
        capacity: 250,
        registered: 88,
        published: true,
      },
      {
        title: 'Thanksgiving Meal Packing (archive)',
        slug: 'thanksgiving-packing-2025',
        description: 'Past event: churches packed 1,200 meals for families across the county.',
        date: new Date('2025-11-15'),
        time: '9:00 AM – 1:00 PM',
        location: 'Grace Fellowship Church',
        address: '987 Grace Street, Mableton, GA 30126',
        organizer: 'Grace Fellowship Church',
        contactEmail: 'info@gracefellowship-demo.org',
        contactPhone: '(770) 555-0105',
        image:
          'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop&q=80',
        category: 'Outreach',
        capacity: 80,
        registered: 80,
        published: true,
      },
    ],
  })
  console.log('✅ Created 2 upcoming events and 1 past event')

  await prisma.crisisNeed.createMany({
    data: [
      {
        title: 'Family displacement — temporary housing',
        description: 'Household of four needs short-term housing and clothing after an apartment fire.',
        urgency: 'urgent',
        category: 'Housing',
        location: 'Austell, GA',
        contactName: 'Ricky Mims',
        contactEmail: 'crisis@visionforsouls-demo.org',
        contactPhone: '(770) 555-0102',
        needBy: new Date('2026-06-01'),
        status: 'active',
        resolved: false,
      },
    ],
  })
  console.log('✅ Created sample crisis need (legacy module)')

  await prisma.pastorStory.createMany({
    data: [
      {
        pastorName: 'Pastor Daniel Mercer',
        churchName: 'First Baptist Church of Powder Springs',
        title: 'When Collaboration Becomes Ministry',
        slug: 'when-collaboration-becomes-ministry',
        story:
          'Partnering through the Cobb Church Network helped us share volunteers and space with churches we might never have met otherwise.',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80',
        videoUrl: null,
        featured: true,
        published: true,
      },
      {
        pastorName: 'Pastor Marie Santos',
        churchName: 'New Hope Community Church',
        title: 'Stronger Together in Crisis',
        slug: 'stronger-together-crisis',
        story:
          'When a storm hit our area, other churches in the network showed up with supplies before we even finished making calls.',
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&q=80',
        videoUrl: null,
        featured: true,
        published: true,
      },
      {
        pastorName: 'Pastor James Walker',
        churchName: 'Grace Fellowship Church',
        title: 'From Our Parking Lot to the Classroom',
        slug: 'parking-lot-to-classroom',
        story:
          'We started mentoring students together with two partner congregations—now principals are asking when we will be back.',
        image:
          'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop&q=80',
        videoUrl: null,
        featured: true,
        published: true,
      },
    ],
  })
  console.log('✅ Created pastor stories')

  await prisma.announcement.create({
    data: {
      title: 'Summer network gathering — save the date',
      body: 'Pastors and leaders: mark your calendars for our July county gathering. Details and registration will appear under Events soon.',
      createdBy: 'seed',
      published: true,
      notifyByEmail: false,
    },
  })
  console.log('✅ Created published announcement')

  await prisma.crisisAlert.create({
    data: {
      title: '[DRAFT] Heat advisory support — do not distribute',
      body: 'Internal draft only. Supplies and hydration stations TBD.',
      urgency: 'medium',
      location: 'Cobb County (TBD)',
      instructions: 'Do not share until leadership approves.',
      active: false,
      notifyByEmail: false,
      createdBy: 'seed',
    },
  })
  await prisma.crisisAlert.create({
    data: {
      title: 'Severe weather shelter partners needed',
      body: 'Forecast models show elevated risk next weekend. We are coordinating churches willing to open cooling/warming space.',
      urgency: 'high',
      location: 'Cobb County',
      instructions: 'Reply on your dashboard with capacity, hours, and a contact number for the county VOAD list.',
      active: true,
      notifyByEmail: false,
      createdBy: 'seed',
    },
  })
  console.log('✅ Created crisis alerts (1 inactive draft, 1 active)')

  await prisma.message.create({
    data: {
      senderUserId: u1.id,
      senderChurchId: c1.id,
      recipientChurchId: c0.id,
      subject: 'Partnership: joint serve day',
      body: `Hi Daniel — this is Ricky from ${c1.name}. We'd love to combine teams for the August serve day. Could we schedule a quick call?`,
      messageKind: 'GENERAL',
      read: false,
    },
  })

  await prisma.notification.create({
    data: {
      userId: u0.id,
      churchId: c0.id,
      type: 'SEED_DEMO',
      title: 'Welcome to your demo inbox',
      body: 'This is a sample notification. Live alerts will appear here when churches respond or admins post updates.',
      read: false,
      actionUrl: '/dashboard/messages',
    },
  })

  await prisma.emailLog.createMany({
    data: [
      {
        to: 'pastor.powder@demo.cobbchurch.org',
        subject: 'Sample: join confirmation (logged)',
        template: 'join_applicant_confirmation',
        status: 'LOGGED',
        relatedEntityType: 'Seed',
        relatedEntityId: null,
      },
      {
        to: 'admin@cobbchurch.org',
        subject: 'Sample: admin notification (logged)',
        template: 'join_admin_notification',
        status: 'LOGGED',
        relatedEntityType: 'Seed',
        relatedEntityId: null,
      },
    ],
  })

  await prisma.donation.create({
    data: {
      stripeSessionId: 'seed_completed_demo_session_001',
      amountTotal: 10000,
      currency: 'usd',
      donorEmail: 'donor@example.com',
      donorName: 'Demo Donor',
      frequency: 'ONE_TIME',
      provider: 'stripe',
      status: 'COMPLETED',
      completedAt: new Date(),
    },
  })

  console.log('✅ Sample message, notification, email logs, and demo donation')

  console.log('')
  console.log('🎉 Seed completed.')
  console.log(`   Admin:        admin@cobbchurch.org / ${SEED_ADMIN_PASSWORD}`)
  console.log(`   Church users: password for all — ${DEMO_CHURCH_PASSWORD}`)
  console.log('     • pastor.powder@demo.cobbchurch.org (First Baptist Powder Springs)')
  console.log('     • pastor.vision@demo.cobbchurch.org (Vision for Souls)')
  console.log('     • pastor.newhope@demo.cobbchurch.org (New Hope Community)')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
