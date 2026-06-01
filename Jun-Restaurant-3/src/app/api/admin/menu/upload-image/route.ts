import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
import { getSessionUser } from '@/lib/auth'

// ============================================================
// POST /api/admin/menu/upload-image
// Accepts a multipart/form-data file upload, saves it to
// public/images/menu/, and returns the public URL path.
// Requires admin role.
// ============================================================

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const MAX_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB

export async function POST(request: NextRequest) {
  const user = await getSessionUser()
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Only JPEG, PNG, WebP, and GIF images are allowed' },
        { status: 400 }
      )
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { success: false, error: 'File size must be under 5 MB' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Sanitise filename: lowercase, replace spaces/special chars with hyphens
    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
    const baseName = file.name
      .replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80)
    const filename = `${baseName}-${Date.now()}.${ext}`

    const uploadDir = path.join(process.cwd(), 'public', 'images', 'menu')
    await writeFile(path.join(uploadDir, filename), buffer)

    return NextResponse.json({
      success: true,
      data: { url: `/images/menu/${filename}` },
    })
  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 })
  }
}
