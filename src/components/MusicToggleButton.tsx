import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggleButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music1.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.muted = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // agar birinchi marta bosilsa — audio o‘ynasin
    if (!isPlaying) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Foydalanuvchi ruxsatisiz o‘ynatib bo‘lmadi:", err);
      }
    }

    // mute / unmute
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <button
      onClick={toggleMute}
      title={isMuted ? "Ovoz yoqish" : "Ovoz o‘chirish"}
      className={`
        fixed bottom-6 right-6 z-50 flex items-center justify-center
        w-10 h-8 rounded-full
        border-2 border-green-500
        bg-black/70 text-green-400
        shadow-[0_0_20px_rgba(34,197,94,0.6)]
        hover:shadow-[0_0_30px_rgba(34,197,94,0.9)]
        hover:scale-110
        transition-all duration-300
        backdrop-blur-md
      `}
    >
      {isMuted ? (
        <VolumeX size={28} className="text-green-500" />
      ) : (
        <Volume2 size={28} className="text-green-400 animate-pulse" />
      )}
    </button>
  );
};

export default MusicToggleButton;
