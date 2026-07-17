import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/agency-ops-panel';

// Inline schemas for seed
const UserSchema = new mongoose.Schema({ name: String, email: { type: String, unique: true }, passwordHash: String, role: { type: String, enum: ['admin','ceo','manager','sales','team'], default: 'sales' }, isActive: { type: Boolean, default: true } }, { timestamps: true });
const ServiceSchema = new mongoose.Schema({ name: String, slug: { type: String, unique: true }, description: String, discoveryQuestions: [String], processSteps: [String], deliverables: [String], commonObjections: [String], reportingFields: [String], isActive: { type: Boolean, default: true } }, { timestamps: true });
const ClientSchema = new mongoose.Schema({ name: String, companyName: String, email: String, phone: String, businessType: String, source: String, status: { type: String, default: 'active' }, notes: { type: String, default: '' }, tags: [String] }, { timestamps: true });
const ProjectSchema = new mongoose.Schema({ clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }, serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, name: String, description: String, type: String, status: { type: String, default: 'in_progress' }, priority: { type: String, default: 'medium' }, progressPercentage: { type: Number, default: 0 }, currentStage: String, latestUpdate: String, risks: String, nextStep: String, assignedTeam: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] }, { timestamps: true });
const TaskSchema = new mongoose.Schema({ projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }, clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }, serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, title: String, description: String, status: { type: String, default: 'todo' }, priority: { type: String, default: 'medium' }, blockers: { type: String, default: '' } }, { timestamps: true });
const ProgressSchema = new mongoose.Schema({ clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }, projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }, serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, updateTitle: String, updateText: String, completedWork: String, pendingWork: String, blockers: String, nextSteps: String, eta: String, visibility: { type: String, default: 'internal' }, createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);
const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema);
const Client = mongoose.models.Client || mongoose.model('Client', ClientSchema);
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
const ProgressUpdate = mongoose.models.ProgressUpdate || mongoose.model('ProgressUpdate', ProgressSchema);

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-').trim();

async function main() {
  console.log('🌱 Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected\n');

  // ── Users ──
  console.log('👥 Seeding users...');
  const userData = [
    { name: 'Admin User', email: 'admin@example.com', password: 'Admin@123456', role: 'admin' },
    { name: 'CEO User', email: 'ceo@example.com', password: 'CEO@123456', role: 'ceo' },
    { name: 'Manager User', email: 'manager@example.com', password: 'Manager@123456', role: 'manager' },
    { name: 'Sales User', email: 'sales@example.com', password: 'Sales@123456', role: 'sales' },
    { name: 'Team User', email: 'team@example.com', password: 'Team@123456', role: 'team' },
  ];
  const userMap: Record<string, mongoose.Types.ObjectId> = {};
  for (const u of userData) {
    const exists = await User.findOne({ email: u.email });
    if (exists) { console.log(`  ⏭  ${u.email}`); userMap[u.role] = exists._id; continue; }
    const passwordHash = await bcrypt.hash(u.password, 12);
    const created = await User.create({ name: u.name, email: u.email, passwordHash, role: u.role });
    userMap[u.role] = created._id;
    console.log(`  ✅ ${u.role}: ${u.email}`);
  }

  // ── Services ──
  console.log('\n🔧 Seeding services...');
  const services = [
    { name: 'Website Development', description: 'Professional website design and development', discoveryQuestions: ['How many pages?','Do you need e-commerce?','Do you have a domain?','What is your timeline?','What is your budget?'] },
    { name: 'App Development', description: 'Mobile and web application development', discoveryQuestions: ['iOS, Android, or Web?','What are the main features?','Do you need an admin panel?','Do you need payments?','What is your budget?'] },
    { name: 'Google Ads', description: 'Google Search and Display ad campaigns', discoveryQuestions: ['What is your monthly ad budget?','What city/region do you target?','Do you have a website?','What are your campaign goals?'] },
    { name: 'Meta Ads', description: 'Facebook and Instagram ad campaigns', discoveryQuestions: ['What is your monthly ad budget?','What is your target audience?','Do you have creatives ready?','What are your goals?'] },
    { name: 'SEO', description: 'Search engine optimization', discoveryQuestions: ['What is your website URL?','What keywords do you want to rank for?','What is your target location?'] },
    { name: 'Branding', description: 'Logo and brand identity design', discoveryQuestions: ['What is your business name?','What industry are you in?','Do you have an existing logo?'] },
    { name: 'Social Media Management', description: 'Social media content and management', discoveryQuestions: ['Which platforms?','How many posts per week?','Do you need content creation?'] },
    { name: 'Graphic Design', description: 'Creative design for marketing materials', discoveryQuestions: ['What do you need designed?','What format?','What is the deadline?'] },
    { name: 'Existing Client Support', description: 'Support for existing clients', discoveryQuestions: ['What change is needed?','Do you have assets ready?','What is the deadline?'] },
    { name: 'General Inquiry', description: 'General questions', discoveryQuestions: ['What service are you looking for?','What is your budget?','What is your timeline?'] },
  ];
  const serviceMap: Record<string, mongoose.Types.ObjectId> = {};
  for (const s of services) {
    const slug = slugify(s.name);
    const doc = await Service.findOneAndUpdate({ slug }, { ...s, slug, isActive: true }, { upsert: true, new: true, returnDocument: 'after' });
    serviceMap[s.name] = doc._id;
    console.log(`  ✅ ${s.name}`);
  }

  // ── Sample Clients ──
  console.log('\n👤 Seeding clients...');
  const clientsData = [
    { name: 'Ahmed Al-Rashidi', companyName: 'ABC Restaurant', email: 'ahmed@abcrestaurant.com', phone: '+971501234567', businessType: 'Restaurant', status: 'active' },
    { name: 'Sara Hassan', companyName: 'Bright Dental Clinic', email: 'sara@brightdental.com', phone: '+971502345678', businessType: 'Dental Clinic', status: 'active' },
    { name: 'Khalid Mahmoud', companyName: 'Urban Fitness Studio', email: 'khalid@urbanfitness.com', phone: '+971503456789', businessType: 'Gym / Fitness', status: 'active' },
  ];
  const clientMap: Record<string, mongoose.Types.ObjectId> = {};
  for (const c of clientsData) {
    const existing = await Client.findOne({ email: c.email });
    if (existing) { clientMap[c.companyName] = existing._id; console.log(`  ⏭  ${c.companyName}`); continue; }
    const created = await Client.create(c);
    clientMap[c.companyName] = created._id;
    console.log(`  ✅ ${c.companyName}`);
  }

  // ── Sample Projects ──
  console.log('\n📁 Seeding projects...');
  const projectsData = [
    {
      companyKey: 'ABC Restaurant', serviceName: 'Website Development',
      name: 'ABC Restaurant Website', type: 'website_development',
      status: 'in_progress', priority: 'high', progressPercentage: 45,
      currentStage: 'Homepage completed, menu page in progress',
      latestUpdate: 'Homepage design approved. Team is now building the menu page and booking section.',
      risks: 'Client has not provided the full menu content yet.',
      nextStep: 'Request menu content and images from client.',
    },
    {
      companyKey: 'Bright Dental Clinic', serviceName: 'Google Ads',
      name: 'Bright Dental Google Ads Campaign', type: 'google_ads',
      status: 'in_progress', priority: 'high', progressPercentage: 60,
      currentStage: 'Campaign setup completed, conversion tracking in progress',
      latestUpdate: 'Google Ads account created. Search campaign is live. Conversion tracking setup in progress.',
      risks: 'Conversion tracking not fully verified yet.',
      nextStep: 'Complete conversion tracking and start optimization.',
    },
    {
      companyKey: 'Urban Fitness Studio', serviceName: 'Meta Ads',
      name: 'Urban Fitness Meta Ads Campaign', type: 'meta_ads',
      status: 'waiting_client', priority: 'medium', progressPercentage: 30,
      currentStage: 'Waiting for ad creatives approval',
      latestUpdate: 'Campaign strategy and audience targeting completed. Waiting for client to approve ad creatives.',
      risks: 'Delay in creative approval may push launch date.',
      nextStep: 'Follow up with client for creative approval.',
    },
  ];
  const projectMap: Record<string, mongoose.Types.ObjectId> = {};
  for (const p of projectsData) {
    const clientId = clientMap[p.companyKey];
    const serviceId = serviceMap[p.serviceName];
    if (!clientId || !serviceId) { console.log(`  ⚠ Skipping ${p.name} — missing client or service`); continue; }
    const existing = await Project.findOne({ name: p.name, clientId });
    if (existing) { projectMap[p.name] = existing._id; console.log(`  ⏭  ${p.name}`); continue; }
    const created = await Project.create({ ...p, clientId, serviceId, assignedTeam: [userMap['team']].filter(Boolean) });
    projectMap[p.name] = created._id;
    console.log(`  ✅ ${p.name}`);
  }

  // ── Sample Tasks ──
  console.log('\n✅ Seeding tasks...');
  const tasksData = [
    { projectKey: 'ABC Restaurant Website', companyKey: 'ABC Restaurant', serviceName: 'Website Development', title: 'Build menu page', status: 'in_progress', priority: 'high' },
    { projectKey: 'ABC Restaurant Website', companyKey: 'ABC Restaurant', serviceName: 'Website Development', title: 'Setup booking system', status: 'todo', priority: 'medium' },
    { projectKey: 'ABC Restaurant Website', companyKey: 'ABC Restaurant', serviceName: 'Website Development', title: 'Mobile responsiveness testing', status: 'todo', priority: 'medium' },
    { projectKey: 'Bright Dental Google Ads Campaign', companyKey: 'Bright Dental Clinic', serviceName: 'Google Ads', title: 'Complete conversion tracking setup', status: 'in_progress', priority: 'high' },
    { projectKey: 'Bright Dental Google Ads Campaign', companyKey: 'Bright Dental Clinic', serviceName: 'Google Ads', title: 'Create remarketing audience', status: 'todo', priority: 'medium' },
    { projectKey: 'Urban Fitness Meta Ads Campaign', companyKey: 'Urban Fitness Studio', serviceName: 'Meta Ads', title: 'Follow up for creative approval', status: 'blocked', priority: 'urgent', blockers: 'Client not responding to emails' },
  ];
  for (const t of tasksData) {
    const projectId = projectMap[t.projectKey];
    const clientId = clientMap[t.companyKey];
    const serviceId = serviceMap[t.serviceName];
    if (!projectId || !clientId || !serviceId) continue;
    const existing = await Task.findOne({ title: t.title, projectId });
    if (existing) { console.log(`  ⏭  ${t.title}`); continue; }
    await Task.create({ ...t, projectId, clientId, serviceId, assignedTo: userMap['team'] });
    console.log(`  ✅ ${t.title}`);
  }

  // ── Progress Updates ──
  console.log('\n📊 Seeding progress updates...');
  const progressData = [
    {
      projectKey: 'ABC Restaurant Website', companyKey: 'ABC Restaurant', serviceName: 'Website Development',
      updateTitle: 'Homepage Completed',
      updateText: 'The homepage has been fully designed and developed. All sections including hero, about, and contact are live on staging.',
      completedWork: 'Homepage design and development completed. Responsive across all devices.',
      pendingWork: 'Menu page, booking section, and gallery still pending.',
      nextSteps: 'Proceed with menu page development once client provides content.',
      eta: 'Menu page: 3-5 days after content received',
      visibility: 'client_safe',
    },
    {
      projectKey: 'Bright Dental Google Ads Campaign', companyKey: 'Bright Dental Clinic', serviceName: 'Google Ads',
      updateTitle: 'Campaign Live — Conversion Tracking Pending',
      updateText: 'The Google Ads search campaign is now live and running. We are seeing initial impressions and clicks. Conversion tracking setup is in final stages.',
      completedWork: 'Google Ads account setup, keyword research, campaign creation, and ad copywriting completed. Campaign is live.',
      pendingWork: 'Conversion tracking verification and optimization report.',
      nextSteps: 'Complete conversion tracking. Start weekly optimization report from next week.',
      eta: 'Conversion tracking: 1-2 days',
      visibility: 'client_safe',
    },
    {
      projectKey: 'Urban Fitness Meta Ads Campaign', companyKey: 'Urban Fitness Studio', serviceName: 'Meta Ads',
      updateTitle: 'Strategy Ready — Waiting for Creatives',
      updateText: 'Campaign strategy, target audiences, and ad sets are fully prepared. We are waiting for the client to approve the ad creatives before launching.',
      completedWork: 'Audience research, campaign structure, and targeting setup completed.',
      pendingWork: 'Ad creative approval and campaign launch.',
      blockers: 'Client has not responded to creative approval request sent 3 days ago.',
      nextSteps: 'Follow up with client via phone call.',
      eta: 'Launch: Within 24 hours of creative approval',
      visibility: 'internal',
    },
  ];
  const adminUser = await User.findOne({ role: 'admin' });
  for (const p of progressData) {
    const projectId = projectMap[p.projectKey];
    const clientId = clientMap[p.companyKey];
    const serviceId = serviceMap[p.serviceName];
    if (!projectId || !clientId || !serviceId) continue;
    const existing = await ProgressUpdate.findOne({ updateTitle: p.updateTitle, projectId });
    if (existing) { console.log(`  ⏭  ${p.updateTitle}`); continue; }
    await ProgressUpdate.create({ ...p, projectId, clientId, serviceId, createdBy: adminUser?._id || userMap['admin'] });
    console.log(`  ✅ ${p.updateTitle}`);
  }

  console.log('\n🎉 Seed complete!\n');
  console.log('Default credentials:');
  console.log('  Admin:   admin@example.com   / Admin@123456');
  console.log('  CEO:     ceo@example.com     / CEO@123456');
  console.log('  Manager: manager@example.com / Manager@123456');
  console.log('  Sales:   sales@example.com   / Sales@123456');
  console.log('  Team:    team@example.com    / Team@123456');

  await mongoose.disconnect();
}

main().catch(e => { console.error('❌ Seed failed:', e); process.exit(1); });
