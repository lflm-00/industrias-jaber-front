/**
 * Data exports for easy importing
 * Usage: import { getAllMachinery, MachineryProduct } from "@/lib/data"
 */

export {
  machineryProducts,
  getAllMachinery,
  getMachineryById,
  getMachineryByCategory,
  getCategories,
  type MachineryProduct,
  type MachinerySpec,
} from "./machinery";

export { processesData, type ProcessData } from "./processes";
export { heroData, type HeroData } from "./hero";
