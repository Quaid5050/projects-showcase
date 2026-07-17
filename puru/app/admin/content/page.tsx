'use client';
import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Save, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

interface ContentItem {
  _id: string;
  section: string;
  key: string;
  value: string;
  type: string;
  label: string;
}

const sectionLabels: Record<string, string> = {
  hero: '🏠 Hero Section',
  about: '📖 About Section',
  navbar: '🔗 Navbar',
  footer: '📋 Footer',
  contact: '📞 Contact Page',
  partnership: '🤝 Partnership Page',
  industries: '🏭 Industries Page',
  products: '📦 Products Page',
  cta_banner: '📣 CTA Banner',
};

export default function ContentEditorPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState('hero');

  const fetchContent = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin/content');
    const data = await res.json();
    if (data.success) {
      setContent(data.data);
      const initial: Record<string, string> = {};
      data.data.forEach((item: ContentItem) => { initial[`${item.section}::${item.key}`] = item.value; });
      setEdits(initial);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchContent(); }, [fetchContent]);

  const handleChange = (section: string, key: string, value: string) => {
    setEdits(prev => ({ ...prev, [`${section}::${key}`]: value }));
  };

  const saveSection = async (section: string) => {
    setSaving(true);
    setSaveStatus('idle');
    const sectionItems = content.filter(c => c.section === section);
    const updates = sectionItems.map(item => ({
      section: item.section,
      key: item.key,
      value: edits[`${item.section}::${item.key}`] ?? item.value,
    }));

    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates }),
      });
      const data = await res.json();
      if (data.success) { setSaveStatus('success'); setTimeout(() => setSaveStatus('idle'), 3000); }
      else { setSaveStatus('error'); }
    } catch { setSaveStatus('error'); }
    setSaving(false);
  };

  const sections = [...new Set(content.map(c => c.section))];
  const sectionContent = content.filter(c => c.section === activeSection);

  return (
    <AdminShell title="Site Content Editor" username={session?.user?.name || 'admin'}>
      <p className="text-gray-400 text-sm mb-6">
        Edit any text on the website. Changes are saved to the database and reflected on the live site.
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Section tabs */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-3 space-y-1">
            {sections.map(sec => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === sec
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {sectionLabels[sec] || sec}
              </button>
            ))}
          </div>
        </div>

        {/* Editor panel */}
        <div className="flex-1 min-w-0">
          {loading ? (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center text-gray-500">
              Loading content...
            </div>
          ) : (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              {/* Section header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <div>
                  <h2 className="font-semibold text-white text-lg">
                    {sectionLabels[activeSection] || activeSection}
                  </h2>
                  <p className="text-gray-500 text-xs mt-0.5">{sectionContent.length} editable fields</p>
                </div>
                <div className="flex items-center gap-3">
                  {saveStatus === 'success' && (
                    <span className="flex items-center gap-1.5 text-teal-400 text-sm">
                      <CheckCircle className="w-4 h-4" /> Saved
                    </span>
                  )}
                  {saveStatus === 'error' && (
                    <span className="flex items-center gap-1.5 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" /> Error
                    </span>
                  )}
                  <button
                    onClick={() => saveSection(activeSection)}
                    disabled={saving}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium transition-all disabled:opacity-60"
                  >
                    {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Section
                  </button>
                </div>
              </div>

              {/* Fields */}
              <div className="p-6 space-y-5">
                {sectionContent.map(item => (
                  <div key={`${item.section}::${item.key}`}>
                    <label className="block text-gray-300 text-sm font-medium mb-1.5">
                      {item.label}
                      <span className="ml-2 text-gray-600 text-xs font-mono">({item.section}.{item.key})</span>
                    </label>
                    {item.type === 'textarea' ? (
                      <textarea
                        value={edits[`${item.section}::${item.key}`] ?? item.value}
                        onChange={e => handleChange(item.section, item.key, e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={edits[`${item.section}::${item.key}`] ?? item.value}
                        onChange={e => handleChange(item.section, item.key, e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    )}
                    {/* Preview of change */}
                    {edits[`${item.section}::${item.key}`] !== item.value && (
                      <p className="text-xs text-yellow-500/70 mt-1.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                        Unsaved change
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom save */}
              <div className="px-6 py-4 bg-gray-950/50 border-t border-gray-800 flex justify-end">
                <button
                  onClick={() => saveSection(activeSection)}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium transition-all disabled:opacity-60"
                >
                  {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
