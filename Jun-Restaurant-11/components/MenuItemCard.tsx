'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IMenuItem } from '@/types';
import { PlusIcon } from './Icons';
import ItemModal from './ItemModal';

interface MenuItemCardProps {
  item: IMenuItem;
  allItems?: IMenuItem[]; // for "frequently bought together"
}

export default function MenuItemCard({ item, allItems = [] }: MenuItemCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ── CARD ── */}
      <div
        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
        onClick={() => setShowModal(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${item.name}`}
        onKeyDown={(e) => e.key === 'Enter' && setShowModal(true)}
      >
        {/* Image */}
        <div className="relative h-44 bg-gradient-to-br from-[#8B0000]/10 to-[#1a5c1a]/10 overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-5xl opacity-60">🍜</span>
            </div>
          )}
          {item.isFeatured && (
            <span className="absolute top-2 left-2 bg-[#FFD700] text-[#1a0a00] text-xs font-bold px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
          {/* Quick-add overlay button */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center shadow-lg">
              <PlusIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#8B0000] transition-colors">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
              {item.description}
            </p>
          )}
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-[#8B0000] font-bold text-lg">${item.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 bg-[#8B0000] hover:bg-[#a00000] text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200">
              <PlusIcon className="w-3.5 h-3.5" />
              {item.isAvailable ? 'Add' : 'Unavailable'}
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {showModal && (
        <ItemModal
          item={item}
          allItems={allItems}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
