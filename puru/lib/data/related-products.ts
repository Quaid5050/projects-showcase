export const relatedProductMap: Record<string, string[]> = {
  'industrial-machinery': [
    'global-trading',
    'custom-product-sourcing',
    'infrastructure-project-development',
    'strategic-business-development',
  ],
  'custom-product-sourcing': [
    'global-trading',
    'wholesale-consumer-products',
    'agricultural-food-trade-products',
    'industrial-machinery',
  ],
  'wholesale-consumer-products': [
    'global-trading',
    'custom-product-sourcing',
    'strategic-business-development',
    'agricultural-food-trade-products',
  ],
  'agricultural-food-trade-products': [
    'global-trading',
    'wholesale-consumer-products',
    'custom-product-sourcing',
    'infrastructure-project-development',
  ],
  'battery-energy-storage': [
    'ev-charging-infrastructure',
    'smart-grid-power-management',
    'hydrogen-energy',
    'infrastructure-project-development',
  ],
  'hydrogen-energy': [
    'battery-energy-storage',
    'smart-grid-power-management',
    'ev-charging-infrastructure',
    'infrastructure-project-development',
  ],
  'ev-charging-infrastructure': [
    'battery-energy-storage',
    'smart-grid-power-management',
    'infrastructure-project-development',
    'strategic-business-development',
  ],
  'smart-grid-power-management': [
    'battery-energy-storage',
    'ev-charging-infrastructure',
    'hydrogen-energy',
    'infrastructure-project-development',
  ],
  'global-trading': [
    'custom-product-sourcing',
    'wholesale-consumer-products',
    'agricultural-food-trade-products',
    'industrial-machinery',
  ],
  'strategic-business-development': [
    'global-trading',
    'infrastructure-project-development',
    'custom-product-sourcing',
    'industrial-machinery',
  ],
  'infrastructure-project-development': [
    'battery-energy-storage',
    'smart-grid-power-management',
    'industrial-machinery',
    'strategic-business-development',
  ],
};
