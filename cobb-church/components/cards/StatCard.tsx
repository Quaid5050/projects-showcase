interface StatCardProps {
  value: string | number;
  label: string;
  icon?: string;
  description?: string;
}

export default function StatCard({ value, label, icon, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-gold">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-4xl md:text-5xl font-bold text-gold mb-2">{value}</p>
          <p className="text-lg font-semibold text-dark-text">{label}</p>
          {description && <p className="text-sm text-medium-gray mt-2">{description}</p>}
        </div>
        {icon && <span className="text-4xl ml-4">{icon}</span>}
      </div>
    </div>
  );
}
