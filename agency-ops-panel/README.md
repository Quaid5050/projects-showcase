# Agency AI Operations & Client Communication Panel

A full-stack SaaS agency management panel with an AI assistant that understands your entire agency workflow — clients, projects, tasks, progress, and conversations.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | MongoDB + Mongoose |
| AI | Groq API (OpenAI-compatible, llama-3.3-70b) |
| Auth | JWT (HttpOnly cookies) |
| Docker | Dockerfile + docker-compose |

---

## Features

- **Client Management** — Full client profiles with projects, tasks, progress, and AI summaries
- **Project Tracking** — Progress %, current stage, risks, next steps, assigned team
- **Task Management** — Create, assign, track, update status, add blockers
- **Progress Updates** — Internal and client-safe updates. AI uses only client-safe data
- **AI Operations Assistant** — Ask anything in English or Urdu, AI answers from real MongoDB data
- **AI Client Reply** — Drafts professional client replies based on actual progress. Human approval required
- **Lead & Sales CRM** — Full lead pipeline with AI sales reply generation
- **Conversations** — Chat-style interface with AI-generated reply drafts
- **AI Reply Approval** — All AI replies are drafts until manually approved
- **Role-based Access** — Admin, CEO, Manager, Sales, Team roles

---

## Setup

### 1. Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Groq API key (free at console.groq.com)

### 2. Install
```bash
cd agency-ops-panel
npm install
```

### 3. Environment Variables
```bash
cp .env.example .env.local
```
Edit `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/agency-ops-panel
GROQ_API_KEY=gsk_your_key_here
GROQ_MODEL=llama-3.3-70b-versatile
JWT_SECRET=your_secret_min_32_chars
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Seed Database
```bash
npm run seed
```

### 5. Run
```bash
npm run dev
```
Open http://localhost:3000

---

## Default Login Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | Admin@123456 |
| CEO | ceo@example.com | CEO@123456 |
| Manager | manager@example.com | Manager@123456 |
| Sales | sales@example.com | Sales@123456 |
| Team | team@example.com | Team@123456 |

---

## Docker

```bash
docker-compose up --build
```
App: http://localhost:3000 | MongoDB: localhost:27017

Seed after Docker start:
```bash
docker exec -it agency-ops-app npm run seed
```

---

## How the AI Operations Assistant Works

1. User types a question (English or Urdu) on the `/ai-assistant` page
2. `dataRetriever.ts` parses the question to detect service filter keywords
3. Fetches matching clients, projects, tasks, and client-safe progress from MongoDB
4. Builds a structured JSON context and passes it to Groq LLM
5. AI answers using **only** the provided data — never invents information
6. Answer is displayed in the chat and saved as an approved AI reply

**Example queries:**
- `"Google Ads ki progress kya hai?"` → Lists all Google Ads projects with status, progress %, tasks
- `"Konse clients ko follow-up chahiye?"` → Shows clients with no recent progress updates
- `"ABC Restaurant ka website update batao"` → Fetches that client's project and progress

---

## How Client Communication AI Works

1. Sales/team member opens a conversation linked to a client
2. Pastes client's message and clicks **Generate AI Reply**
3. System fetches: client profile, active projects, **client-safe** progress updates, task summary
4. Groq LLM drafts a professional reply using only that real data
5. Reply is saved as `draft` — **not sent automatically**
6. Team member reviews, edits if needed, then approves
7. Approved reply is added to the conversation

**Rules enforced:**
- Only client-safe progress updates are used
- Internal blockers are never shown to clients
- No deadlines unless ETA exists in data
- If data is missing, AI says "team is checking"

---

## How to Add Clients, Projects, Tasks & Progress

### Client
1. Go to `/clients` → **New Client**
2. Fill in name, company, email, business type

### Project
1. Go to `/projects` → **New Project**
2. Select client and service, set priority

### Task
1. Go to `/tasks` → **New Task**
2. Select project, assign to team member, set due date

### Progress Update
1. Go to project detail → **Add Progress** tab
2. Fill in what was completed, what is pending
3. Set visibility: **Internal** (team only) or **Client Safe** (AI can use this)

---

## AI Approval Flow

```
Team adds progress update (client_safe)
         ↓
Client sends message
         ↓
Sales pastes message in Conversation
         ↓
Click "Generate AI Reply"
         ↓
AI reads client-safe progress → drafts reply
         ↓
Saved as DRAFT (not sent)
         ↓
Manager/Sales reviews and edits
         ↓
Clicks "Approve & Add to Chat"
         ↓
Reply marked approved in DB
         ↓
Sales manually sends to client
```

---

## Phase 2 — ClickUp Integration (Planned)

See `lib/integrations/clickup.ts` for the placeholder.

Planned:
- Auto-create ClickUp tasks when a project is created
- Sync project status with ClickUp
- View ClickUp tasks from project/client pages
