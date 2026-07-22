"use client";
import React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

interface FlashSaleCountdownProps {
  /** Target date/time (e.g., "2026-12-31T23:59:59", a Date object, or a timestamp) */
  targetDate: string | number | Date;
  /** Callback triggered when the countdown hits zero */
  onExpire?: () => void;
}

export const FlashSaleCountdown: React.FC<FlashSaleCountdownProps> = ({
  targetDate,
  onExpire,
}) => {
  // Helper to pad single digits with a leading zero
  const formatNumber = (num: number): string => String(num).padStart(2, "0");

  // Custom renderer required to apply Tailwind styling
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="inline-flex items-center justify-center px-4 py-2 bg-red-100 text-red-700 font-bold text-sm rounded-md uppercase tracking-wider animate-pulse">
          Sale Ended!
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 bg-neutral-900 text-white p-4 rounded-2xl w-fit shadow-xl border border-neutral-800">
        {/* Live Indicator Label */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <p className="text-xs font-bold uppercase tracking-widest text-red-500">
            Flash Sale Ends In:
          </p>
        </div>

        {/* Timer Blocks */}
        <div className="flex items-center gap-2 font-mono">
          {/* Days (Only shows if 1 or more days remain) */}
          {days > 0 && (
            <>
              <div className="flex flex-col items-center">
                <div className="bg-neutral-800 text-white px-3 py-2 rounded-lg text-xl font-bold min-w-[44px] text-center shadow-inner">
                  {formatNumber(days)}
                </div>
                <span className="text-[10px] text-neutral-400 uppercase mt-1">Days</span>
              </div>
              <span className="text-xl font-bold text-neutral-600 bottom-2 relative">:</span>
            </>
          )}

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-neutral-800 text-white px-3 py-2 rounded-lg text-xl font-bold min-w-[44px] text-center shadow-inner">
              {formatNumber(hours)}
            </div>
            <span className="text-[10px] text-neutral-400 uppercase mt-1">Hrs</span>
          </div>

          <span className="text-xl font-bold text-neutral-600 bottom-2 relative">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-neutral-800 text-white px-3 py-2 rounded-lg text-xl font-bold min-w-[44px] text-center shadow-inner">
              {formatNumber(minutes)}
            </div>
            <span className="text-[10px] text-neutral-400 uppercase mt-1">Min</span>
          </div>

          <span className="text-xl font-bold text-neutral-600 bottom-2 relative">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-xl font-bold min-w-[44px] text-center shadow-md">
              {formatNumber(seconds)}
            </div>
            <span className="text-[10px] text-red-400 uppercase mt-1 font-sans font-semibold">Sec</span>
          </div>
        </div>
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} onComplete={onExpire} />;
};