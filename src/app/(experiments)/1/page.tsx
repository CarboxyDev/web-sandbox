"use client";

import { Globe } from "@/components/magicui/globe";
import type { COBEOptions } from "cobe";

const GLOBE_CONFIG: COBEOptions = {
  width: 1200,
  height: 1200,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.15,
  dark: 0.8,
  diffuse: 1.2,
  mapSamples: 32000,
  mapBrightness: 2.5,
  baseColor: [0.1, 0.1, 0.2],
  markerColor: [0.1, 0.8, 1.0],
  glowColor: [0.2, 0.6, 1.0],
  markers: [
    { location: [40.7128, -74.006], size: 0.08 },
    { location: [51.5074, -0.1278], size: 0.06 },
    { location: [35.6762, 139.6503], size: 0.07 },
    { location: [-33.8688, 151.2093], size: 0.05 },
    { location: [19.076, 72.8777], size: 0.04 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [55.7558, 37.6173], size: 0.05 },
    { location: [52.52, 13.405], size: 0.04 },
    { location: [48.8566, 2.3522], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.06 },
    { location: [39.9042, 116.4074], size: 0.07 },
    { location: [25.276987, 55.296249], size: 0.04 },
    { location: [37.7749, -122.4194], size: 0.08 },
    { location: [34.0522, -118.2437], size: 0.06 },
    { location: [43.6532, -79.3832], size: 0.05 },
  ],
};

export default function Experiment1() {
  return (
    <div className="flex h-screen flex-col items-center justify-center top-20">
      <Globe config={GLOBE_CONFIG} />
    </div>
  );
}
