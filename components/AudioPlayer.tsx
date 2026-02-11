
import React, { useRef, useEffect } from 'react';
import { AUDIO_SOURCE } from '../constants';

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_SOURCE);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
  }, [setIsPlaying]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error("Playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={togglePlayback}
        className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all transform active:scale-95 ${
          isPlaying 
            ? 'bg-[var(--primary-color)] text-white animate-pulse' 
            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105'
        }`}
        title={isPlaying ? "Pause Quran Recitation" : "Play Quran Recitation"}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="hidden sm:block">
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">Holy Quran</p>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
          {isPlaying ? "Currently Playing..." : "Recitation Player"}
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
