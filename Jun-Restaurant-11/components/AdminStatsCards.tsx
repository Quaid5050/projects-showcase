interface StatsCardsProps {
  totalOrders: number;
  revenue: number;
  pendingOrders: number;
  completedOrders: number;
}

export default function AdminStatsCards({
  totalOrders,
  revenue,
  pendingOrders,
  completedOrders,
}: StatsCardsProps) {
  const cards = [
    {
      label: 'Total Orders',
      value: totalOrders.toString(),
      icon: '📋',
      color: 'bg-blue-900/30 border-blue-700/30',
      textColor: 'text-blue-400',
    },
    {
      label: 'Revenue (Paid)',
      value: `$${revenue.toFixed(2)}`,
      icon: '💰',
      color: 'bg-yellow-900/30 border-yellow-700/30',
      textColor: 'text-[#FFD700]',
    },
    {
      label: 'Active / Pending',
      value: pendingOrders.toString(),
      icon: '⏳',
      color: 'bg-orange-900/30 border-orange-700/30',
      textColor: 'text-orange-400',
    },
    {
      label: 'Completed',
      value: completedOrders.toString(),
      icon: '✅',
      color: 'bg-green-900/30 border-green-700/30',
      textColor: 'text-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`${card.color} border rounded-xl p-5`}
        >
          <div className="text-2xl mb-2">{card.icon}</div>
          <p className={`text-2xl font-bold ${card.textColor}`}>{card.value}</p>
          <p className="text-gray-400 text-xs mt-1">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
