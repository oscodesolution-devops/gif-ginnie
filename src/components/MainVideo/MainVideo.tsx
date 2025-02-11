import { useEffect, useRef } from "react";

export default function MainVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="video-section w-screen h-screen">
      <video
        ref={videoRef}
        src="./main-video.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    </div>
  );
}
