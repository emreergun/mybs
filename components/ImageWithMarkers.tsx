// components/ImageWithMarkers.tsx
import Image from "next/image";
import { FC } from "react";

interface Marker {
  x: number;
  y: number;
}

interface ImageWithMarkersProps {
  src: string;
  alt: string;
  markers: Marker[];
}

const ImageWithMarkers: FC<ImageWithMarkersProps> = ({ src, alt, markers }) => {
  return (
    <div className="grid grid-cols-3 grid-flow-row ">
      <div className=" row-span-1 border-2">01</div>
      <div className="relative row-span-1  ">
        <Image src={src} alt={alt} width={950} height={950} />
        {markers.map((marker, index) => (
          <div
            key={index}
            className="absolute text-red-500 text-2xl pointer-events-all"
            style={{
              top: `${marker.y}%`,
              left: `${marker.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="marker.svg"
              alt="some file"
              height="35"
              width="35"
              className="hover:animate-bounce"
            />
          </div>
        ))}
      </div>
      <div className="row-span-1  border-2">03</div>
    </div>
  );
};

export default ImageWithMarkers;
