/**
 * Machinery Products Data
 * Central data source for all machinery products
 */

export interface MachinerySpec {
  label: string;
  value: string;
}

export interface MachineryProduct {
  id: number;
  category: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  videoId: string;
  specs: MachinerySpec[];
}

export const machineryProducts: MachineryProduct[] = [
  {
    id: 1,
    category: "roasting",
    name: "Titan-X Industrial Roaster",
    title: "Titan-X Industrial Roaster",
    description:
      "High-capacity drum roaster with integrated PLC control and automated profile replication.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE",
    videoId: "rdHUjOX0Bn8",
    specs: [
      { label: "Power Supply", value: "220V - 440V / 3 Phase" },
      { label: "Production Capacity", value: "120kg / Batch" },
      { label: "Roasting Time", value: "15-20 minutes" },
      { label: "Dimensions", value: "3.2m x 2.1m x 2.8m" },
      { label: "Weight", value: "1,850 kg" },
      { label: "Gas Consumption", value: "12-15 m³/h" },
    ],
  },
  {
    id: 2,
    category: "grinding",
    name: "Precision Grind G-500",
    title: "Precision Grind G-500",
    description:
      "Ultra-uniform particle distribution for industrial scale. Water-cooled discs to preserve aroma during high-volume production.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4fyH8f55RyJciOvAr60lsFO_sNXTzzE9tdym4IzAVT_6GSbzsMeKzZtiHNeXAfR2cSLuBiHsHEBp39dAOAybu5AWVKCdCOeh_2JqSWBFlAfxcd8xnC4FqlwKjYBNs9_smeOoMK8iOyc-mYOGNL001TSPc49vfIG8GmLdIvlAA7VnSsWTLHZIswF3sBpvgusiEhS0NcdPY7fAeExLjc7bwd6S5F67cU819vvogAUUl2ftuhu8a1diwbVqj-JR7JFy9BNURvj70Zw",
    videoId: "oGyR5mVl1_o",
    specs: [
      { label: "Motor Power", value: "15 HP" },
      { label: "Grinding Capacity", value: "500 kg/h" },
      { label: "Disc Diameter", value: "500 mm" },
      { label: "Cooling System", value: "Water-cooled" },
      { label: "Grind Settings", value: "Stepless adjustment" },
      { label: "Voltage", value: "380V / 3 Phase" },
    ],
  },
  {
    id: 3,
    category: "cleaning",
    name: "AeroClean Sorter",
    title: "AeroClean Sorter",
    description:
      "Multi-stage air density separator combined with optical color sorting for defect-free green coffee preparation.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsSHOpYrMA8Pgi65v7lOBBf4lqNnRJjusN8u6qA5yJEzNYgOaehZPMd-w64HxSpqQtf3ROtdt2wfAIajpDp4O7vj5HLDWE-PReDDIyVmcVwNhoff5SyFNo2cmpkYa7QDqUp9Q4YM26nrfqn-eVuIoWLLebGFyItY2iAplRjc9iaZ9CEwq4OXTF7jn3oFlsaTvU4l_Jl7miEeG2rqxo6FbdO1Saw1yrI83KhHbWWFA2rohFoBdaTPDjVbRCqFNUQxSeoUYKBi3jS-Y",
    videoId: "Ztei0ojbnoc",
    specs: [
      { label: "Sorting Capacity", value: "2,000 kg/h" },
      { label: "Camera Resolution", value: "5K Multi-spectral" },
      { label: "Air Channels", value: "6 independent channels" },
      { label: "Detection Rate", value: "99.9% accuracy" },
      { label: "Power Consumption", value: "8 kW" },
      { label: "Dimensions", value: "2.5m x 1.8m x 2.2m" },
    ],
  },
  {
    id: 4,
    category: "processing",
    name: "Solis Dryer Pro",
    title: "Solis Dryer Pro",
    description:
      "Horizontal rotary dryer with controlled humidity sensors to ensure perfect moisture content (10-12%) for export.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKO_sn8Cgf3ARTF-oHtpdQOn8tupfNYY3uvHvh_9EpoNTMXOXyq_hMykdtv-74qFHoQC2EPdCAOu_serT1LD1PQi-u42OGKCkxsRGhItNydsKQiMiSpixqSgMZNDHPAPoaU-dJyBPlx0oBK5NwXY-LGnRCX56sLxIRDI78yJ2KZSlEr1eXRlgKGG-qCdAAYHbv08YZE597fgK1laGdtHQnI9Gwd3AaQ2KukEbK01rSJ-hU-ZYzI1oMrfT2FSuq_jnbyZxx2utai0",
    videoId: "dPQSjuplCPs",
    specs: [
      { label: "Drying Capacity", value: "1,500 kg/batch" },
      { label: "Heat Source", value: "Gas / Biomass" },
      { label: "Temperature Range", value: "40°C - 80°C" },
      { label: "Moisture Control", value: "±0.5% accuracy" },
      { label: "Drum Dimensions", value: "6m x 1.5m diameter" },
      { label: "Cycle Time", value: "6-8 hours" },
    ],
  },
  {
    id: 5,
    category: "roasting",
    name: "MicroBatch Lab Roaster",
    title: "MicroBatch Lab Roaster",
    description:
      "Specialized 5kg roaster for quality control laboratories and specialty coffee micro-lots. Professional control in a compact size.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE",
    videoId: "pMbhXPPCKHo",
    specs: [
      { label: "Batch Capacity", value: "5 kg" },
      { label: "Power Supply", value: "220V / Single Phase" },
      { label: "Control System", value: "Digital PID" },
      { label: "Roasting Time", value: "10-15 minutes" },
      { label: "Dimensions", value: "0.8m x 0.6m x 1.2m" },
      { label: "Weight", value: "95 kg" },
    ],
  },
  {
    id: 6,
    category: "grinding",
    name: "Multi-Mill Series 300",
    title: "Multi-Mill Series 300",
    description:
      "Versatile modular grinding system designed for instant coffee production and high-volume espresso grinds.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4fyH8f55RyJciOvAr60lsFO_sNXTzzE9tdym4IzAVT_6GSbzsMeKzZtiHNeXAfR2cSLuBiHsHEBp39dAOAybu5AWVKCdCOeh_2JqSWBFlAfxcd8xnC4FqlwKjYBNs9_smeOoMK8iOyc-mYOGNL001TSPc49vfIG8GmLdIvlAA7VnSsWTLHZIswF3sBpvgusiEhS0NcdPY7fAeExLjc7bwd6S5F67cU819vvogAUUl2ftuhu8a1diwbVqj-JR7JFy9BNURvj70Zw",
    videoId: "xQNSED2qZes",
    specs: [
      { label: "Motor Power", value: "25 HP" },
      { label: "Production Rate", value: "800 kg/h" },
      { label: "Grinding Technology", value: "Burr + Roller" },
      { label: "Particle Size Range", value: "200-800 microns" },
      { label: "Modular Units", value: "3 independent mills" },
      { label: "Voltage", value: "440V / 3 Phase" },
    ],
  },
];

/**
 * Get all machinery products
 */
export function getAllMachinery(): MachineryProduct[] {
  return machineryProducts;
}

/**
 * Get machinery product by ID
 */
export function getMachineryById(id: number): MachineryProduct | undefined {
  return machineryProducts.find((product) => product.id === id);
}

/**
 * Get machinery products by category
 */
export function getMachineryByCategory(category: string): MachineryProduct[] {
  return machineryProducts.filter((product) => product.category === category);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return Array.from(new Set(machineryProducts.map((product) => product.category)));
}
