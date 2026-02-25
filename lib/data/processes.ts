export interface ProcessData {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  imageUrl: string;
  featured: boolean;
}

export const processesData: ProcessData[] = [
  {
    titleKey: "home.processes.harvesting",
    descriptionKey: "home.processes.harvestingDesc",
    icon: "agriculture",
    imageUrl: "https://vy6bslamfuspbjny.public.blob.vercel-storage.com/1.jpg",
    featured: false,
  },
  {
    titleKey: "home.processes.roasting",
    descriptionKey: "home.processes.roastingDesc",
    icon: "local_fire_department",
    imageUrl: "https://vy6bslamfuspbjny.public.blob.vercel-storage.com/2.jpg",
    featured: true,
  },
  {
    titleKey: "home.processes.grinding",
    descriptionKey: "home.processes.grindingDesc",
    icon: "blur_on",
    imageUrl: "https://vy6bslamfuspbjny.public.blob.vercel-storage.com/3.jpg",
    featured: false,
  },
];
