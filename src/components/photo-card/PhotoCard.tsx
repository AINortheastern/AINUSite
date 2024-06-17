// PhotoCard.tsx
import React, { ReactNode } from "react";
import "./photocard.scss";

interface PhotoCardProps {
  imageSrc: ReactNode;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageSrc }) => {
  return (
    <div className="card">
      {typeof imageSrc === "string" ? (
        <img src={imageSrc} alt="Card Image" />
      ) : (
        imageSrc
      )}
    </div>
  );
};

export default PhotoCard;
