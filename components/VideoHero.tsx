import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoHeroProps {
  video: string;
  image: string;
  title?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  video,
  image,
  children,
  height = "100vh",
  overlayOpacity = 0.5
}) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showSoundButton, setShowSoundButton] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setShowSoundButton(true);
  };

  const handleVideoError = () => {
    setVideoLoaded(false);
    setShowSoundButton(false);
  };

  return (
    <div ref={ref} className="relative overflow-hidden bg-gray-900" style={{ height, minHeight: '450px' }}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
        />

        {/* Fallback Image */}
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover absolute inset-0"
          style={{ opacity: videoLoaded ? 0 : 1, transition: 'opacity 0.5s' }}
          loading="eager"
        />

        {/* Overlays */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        {children}
      </motion.div>

      {/* Sound Toggle Button */}
      {showSoundButton && videoLoaded && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={toggleSound}
          className="absolute bottom-24 right-8 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-full transition-all hover:scale-110"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 z-20 hidden sm:block"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};
