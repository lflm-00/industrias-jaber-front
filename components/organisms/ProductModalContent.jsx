"use client";

import { VideoSection, SpecsGrid } from "../molecules";
import { useLanguage } from "@/lib/hooks/useLanguage";

export const ProductModalContent = ({ product }) => {
  const { t } = useLanguage();

  const getCategoryLabel = (key) => {
    return t(`machinery.categories.${key}`);
  };

  return (
    <>
      <VideoSection videoid={product.videoId} />

      <div className="flex-1 overflow-y-auto p-8 lg:p-12 modal-scroll-hide">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
              {getCategoryLabel(product.category)}
            </span>

            <h2 className="text-3xl font-black text-[#181411] dark:text-white">
              {product.name}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#dcd6ce] dark:border-[#3a2f24] pb-2">
              <span className="material-symbols-outlined text-primary">
                settings
              </span>
              <h3 className="text-lg font-bold">
                Technical Specifications
              </h3>
            </div>

            <SpecsGrid specs={product.specs} />
          </div>
        </div>
      </div>
    </>
  );
};