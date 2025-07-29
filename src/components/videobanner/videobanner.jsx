import React from "react";
import banner from "../../assets/updated-banner-video-comp.mp4";

const VideoBanner = () => {
  return (
    <div className="w-full flex justify-center">
      <video
        className="w-full h-[440px] object-cover shadow-md"
        src={banner}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoBanner;
