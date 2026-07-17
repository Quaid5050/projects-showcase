import Link from 'next/link';
import { ICategory } from '@/types';

interface CategoryGridProps {
  categories: ICategory[];
}

const categoryEmojis: Record<string, string> = {
  appetizers: '🥟',
  soups: '🍜',
  beef: '🥩',
  pork: '🍖',
  chicken: '🍗',
  seafood: '🦐',
  vegetables: '🥦',
  'rice-noodles': '🍚',
  'dim-sum': '🥮',
  desserts: '🍮',
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">No categories available yet.</div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat._id}
          href={`/menu?category=${cat.slug}`}
          className="group bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-[#8B0000]/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {categoryEmojis[cat.slug] || '🍽️'}
          </div>
          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#8B0000] transition-colors leading-tight">
            {cat.name}
          </h3>
          {cat.description && (
            <p className="text-xs text-gray-400 mt-1 leading-snug line-clamp-2">{cat.description}</p>
          )}
        </Link>
      ))}
    </div>
  );
}
