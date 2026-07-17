require('dotenv').config()
const mongoose = require('mongoose')
const Service = require('./models/Service')
const Blog = require('./models/Blog')

const services = [
  {
    title: 'Life Insurance',
    icon: 'shield',
    description:
      'Protect your family\'s financial future with the right life insurance plan. Whether you need term coverage for a specific period or permanent protection for life, we help you choose a plan that fits your budget and your family\'s needs.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    features: [
      'Term Life Insurance (10, 20, 30 year options)',
      'Whole Life & Universal Life coverage',
      'Critical Illness add-ons available',
      'Coverage from $100K to $5M+',
      'No medical exam options available',
      'Free policy review and comparison',
    ],
    order: 1,
  },
  {
    title: 'Retirement Planning',
    icon: 'trending-up',
    description:
      'Start building the retirement you deserve — today. We create personalized RRSP and retirement strategies that maximize your tax savings, grow your wealth, and ensure you never outlive your money.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    features: [
      'RRSP contribution strategy & optimization',
      'RRIF conversion planning',
      'Pension income splitting strategies',
      'CPP & OAS maximization',
      'Retirement income projections',
      'Estate transfer planning',
    ],
    order: 2,
  },
  {
    title: 'TFSA & Investment Planning',
    icon: 'bar-chart',
    description:
      'Grow your wealth tax-free with a smart TFSA strategy. We help you invest in the right vehicles — from GICs to mutual funds — so your money works as hard as you do, with zero tax on growth or withdrawals.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    features: [
      'TFSA contribution room optimization',
      'Diversified mutual fund portfolios',
      'Risk-based investment matching',
      'Regular portfolio rebalancing',
      'Segregated fund options with guarantees',
      'Tax-efficient withdrawal planning',
    ],
    order: 3,
  },
  {
    title: 'RESP — Education Savings',
    icon: 'graduation-cap',
    description:
      'Give your children the gift of education without the financial stress. Our RESP strategies maximize government grants (up to $7,200 free money!) and grow your savings so your kids can focus on their future, not debt.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    features: [
      'Canada Education Savings Grant (CESG) — up to $7,200',
      'Canada Learning Bond for eligible families',
      'Family vs. individual RESP setup',
      'Flexible investment options within RESP',
      'Strategies to maximize grant eligibility',
      'Transition planning when child starts school',
    ],
    order: 4,
  },
]

const blogs = [
  {
    title: 'TFSA vs RRSP: Which One Should You Use First in 2024?',
    slug: 'tfsa-vs-rrsp-which-one-first-2024',
    excerpt:
      'Two of the most powerful savings tools in Canada — but which one should you contribute to first? The answer depends on your income, goals, and timeline. Here\'s how to decide.',
    category: 'Tax Planning',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    date: new Date('2024-11-10'),
    content: `
<p>If you're a Canadian trying to decide between a TFSA and an RRSP, you're not alone. This is one of the most common questions I get from families across Canada — and the good news is, there's a clear framework to help you decide.</p>

<h2>The Core Difference</h2>
<p><strong>RRSP (Registered Retirement Savings Plan)</strong> gives you a tax deduction today. You contribute pre-tax dollars, your investments grow tax-deferred, and you pay tax when you withdraw in retirement. The idea is that you'll be in a lower tax bracket when you retire.</p>
<p><strong>TFSA (Tax-Free Savings Account)</strong> gives you no deduction today, but ALL growth and withdrawals are 100% tax-free — forever. You contribute after-tax dollars, but you'll never pay tax on the growth.</p>

<h2>When to Use RRSP First</h2>
<ul>
  <li>You're in a high income bracket (above $80,000/year)</li>
  <li>You expect to be in a lower tax bracket in retirement</li>
  <li>You want to reduce your taxable income today</li>
  <li>You're buying your first home (Home Buyers' Plan)</li>
</ul>

<h2>When to Use TFSA First</h2>
<ul>
  <li>You're in a lower income bracket (under $50,000/year)</li>
  <li>You expect your income to grow significantly</li>
  <li>You might need to access funds before retirement</li>
  <li>You're a student, new immigrant, or just starting out</li>
</ul>

<h2>The Best Strategy: Use Both</h2>
<p>For most Canadian families, the ideal approach is to use BOTH accounts strategically. Maximize your RRSP when your income is high (say, during peak earning years), and use your TFSA as a flexible, always-accessible tax-free bucket.</p>

<p>A personalized plan based on your specific income, family size, and goals will always outperform a generic "do this" approach. That's exactly what I help my clients with.</p>

<p><strong>Ready to build your tax-free wealth strategy?</strong> Book a free consultation and we'll map out the perfect plan for your family.</p>
    `.trim(),
  },
  {
    title: 'How Much Life Insurance Does a Canadian Family Really Need?',
    slug: 'how-much-life-insurance-canadian-family-needs',
    excerpt:
      'Most Canadians are either over-insured or dangerously under-insured. Here\'s a simple framework to calculate exactly how much life insurance your family needs — and why getting it right matters.',
    category: 'Life Insurance',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    date: new Date('2024-12-05'),
    content: `
<p>One of the biggest mistakes I see Canadian families make is picking a life insurance amount without a real calculation behind it. Some people guess $500K. Some copy what their coworker has. And some avoid the conversation entirely.</p>

<p>Let's fix that today.</p>

<h2>The DIME Formula</h2>
<p>A simple way to estimate your coverage need is the <strong>DIME method</strong>:</p>
<ul>
  <li><strong>D — Debt:</strong> Total outstanding debts (mortgage, car, credit cards)</li>
  <li><strong>I — Income:</strong> Annual income × years until retirement</li>
  <li><strong>M — Mortgage:</strong> Outstanding mortgage balance</li>
  <li><strong>E — Education:</strong> Estimated cost of children's post-secondary education</li>
</ul>
<p>Add these together and that's your starting coverage target.</p>

<h2>A Realistic Example</h2>
<p>Let's say you're 35, earn $75,000/year, have a $400,000 mortgage, $30,000 in other debts, 25 years until retirement, and two kids who will need $50,000 each for school.</p>
<ul>
  <li>Debt: $30,000</li>
  <li>Income: $75,000 × 25 = $1,875,000</li>
  <li>Mortgage: $400,000</li>
  <li>Education: $100,000</li>
  <li><strong>Total: ~$2.4 million</strong></li>
</ul>

<h2>But Wait — Term or Permanent?</h2>
<p>For most families, <strong>term life insurance</strong> is the most cost-effective solution. A healthy 35-year-old can often get $1 million in 20-year term coverage for less than $50/month.</p>
<p>Permanent insurance (Whole Life or Universal Life) has its place too — especially for estate planning, business owners, or those who want lifelong coverage with a cash value component.</p>

<h2>The Bottom Line</h2>
<p>There's no one-size-fits-all answer. Your life insurance need depends on your income, debts, family structure, and long-term goals. The best thing you can do is sit down with a licensed advisor and run the real numbers.</p>

<p>That's exactly what my free consultation is designed to do. No pressure, no jargon — just a clear picture of what you need and what it costs.</p>
    `.trim(),
  },
  {
    title: 'RESP in Canada: The $7,200 Free Money Most Parents Are Leaving on the Table',
    slug: 'resp-canada-free-money-parents-missing',
    excerpt:
      'The Canadian government will give your child up to $7,200 in free education savings — but most families aren\'t taking full advantage. Here\'s everything you need to know about RESP and the Canada Education Savings Grant.',
    category: 'Education Savings',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    date: new Date('2025-01-15'),
    content: `
<p>If you have children and you're not already contributing to an RESP, you may be leaving thousands of dollars of free government money on the table. Let me explain why.</p>

<h2>What is an RESP?</h2>
<p>A <strong>Registered Education Savings Plan (RESP)</strong> is a special savings account designed to help Canadian families save for their children's post-secondary education. The money grows tax-sheltered, and the student pays tax on withdrawals — usually at a very low rate since students have little income.</p>

<h2>The Canada Education Savings Grant (CESG)</h2>
<p>Here's the best part: the federal government matches <strong>20% of your annual RESP contributions</strong>, up to $2,500 per year — meaning you get up to <strong>$500 free every year</strong>.</p>
<p>Over 18 years, that adds up to <strong>$7,200 in free grant money</strong>.</p>

<h2>Who Qualifies?</h2>
<ul>
  <li>Any Canadian resident child under 18</li>
  <li>You don't need to be the parent — grandparents, aunts, uncles can contribute too</li>
  <li>Lower-income families may qualify for the <strong>Canada Learning Bond (CLB)</strong> — up to $2,000 with no contribution required</li>
</ul>

<h2>How Much Should You Contribute?</h2>
<p>To maximize the grant, contribute at least <strong>$2,500/year per child</strong>. That's about $208/month. If you missed previous years, you can carry forward unused grant room (up to $1,000/year in extra grants).</p>

<h2>What Happens if Your Child Doesn't Go to University?</h2>
<p>Great question. Your child can use RESP funds for college, trade school, or apprenticeship programs — not just university. If they truly don't pursue any post-secondary education, you can return the grants and withdraw your contributions tax-free.</p>

<h2>Start Today — Even With a Small Amount</h2>
<p>The earlier you start, the more you benefit from compound growth AND government grants. Even $50/month started at birth is significantly better than waiting.</p>

<p>Want a customized RESP projection showing exactly how much your child could have at 18? Book your free consultation and I'll run the numbers with you.</p>
    `.trim(),
  },
]

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected ✓')

    // Clear existing
    await Service.deleteMany({})
    await Blog.deleteMany({})
    console.log('Cleared existing services and blogs ✓')

    // Insert services
    const insertedServices = await Service.insertMany(services)
    console.log(`✓ Inserted ${insertedServices.length} services`)

    // Insert blogs
    const insertedBlogs = await Blog.insertMany(blogs)
    console.log(`✓ Inserted ${insertedBlogs.length} blogs`)

    console.log('\n🎉 Seed complete! Your website now has real content.')
    process.exit(0)
  } catch (err) {
    console.error('Seed error:', err)
    process.exit(1)
  }
}

seed()
