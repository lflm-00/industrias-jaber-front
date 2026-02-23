"use client";

import { useEffect, useState } from "react";

export const VideoSection = ({ videoid }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Cargar el componente lite-youtube solo en el cliente
    if (typeof window !== "undefined" && !customElements.get("lite-youtube")) {
      import("@justinribeiro/lite-youtube");
    }
  }, []);

  if (!videoid || !isClient) return null;

  return (
    <div className="w-full aspect-video bg-black relative">
      <lite-youtube videoid={videoid} short/>
    </div>
  );
};