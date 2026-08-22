import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "react-router";

const COLOR = "#0075ff";

const MIN_SHOW_TIME = 300;
const COMPLETE_TIME = 200;
const HIDE_DELAY = 500;
const PROGRESS_POINTS = [0.05, 0.12, 0.25, 0.4, 0.55, 0.68, 0.75, 0.82, 0.95];

const NavigationProgressBar = () => {
  const [isShow, setIsShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef(0);
  const progressIndexRef = useRef(0);
  const progressTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const { state } = useNavigation();
  const { i18n } = useTranslation();
  const DIR = i18n.dir();

  const isLoading = state === "loading";

  useEffect(() => {
    if (isLoading) {
      startTimeRef.current = Date.now();

      clearTimeout(progressTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);

      setIsShow(true);
      setProgress(0);

      progressIndexRef.current = 0;

      const increaseProgress = () => {
        const next = PROGRESS_POINTS[progressIndexRef.current] ?? 0.95;

        setProgress(next);

        progressIndexRef.current += 1;

        if (progressIndexRef.current < PROGRESS_POINTS.length) {
          progressTimeoutRef.current = setTimeout(increaseProgress, 300);
        }
      };

      increaseProgress();

      return;
    }

    if (isShow) {
      clearTimeout(progressTimeoutRef.current);

      const elapsedTime = Date.now() - startTimeRef.current;
      const remainingTime = MIN_SHOW_TIME - elapsedTime;

      const complete = () => {
        setProgress(1);

        hideTimeoutRef.current = setTimeout(() => {
          setIsShow(false);
          setProgress(0);
        }, COMPLETE_TIME + HIDE_DELAY);
      };

      if (remainingTime > 0) {
        hideTimeoutRef.current = setTimeout(complete, remainingTime);
      } else {
        complete();
      }
    }

    return () => {
      clearTimeout(progressTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, [isLoading, isShow]);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: progress,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: progress === 1 ? COMPLETE_TIME / 1000 : 0.3,
            ease: "easeOut",
          }}
          className={clsx([
            "fixed z-9999 h-1 w-full",
            "after:absolute after:top-0 after:h-full after:w-12 after:content-['']",
            "after:shadow-[0_0_20px_4px_var(--progress-bar-color)]",

            DIR === "ltr"
              ? "origin-left after:right-0"
              : "origin-right after:left-0",
          ])}
          style={{
            "--progress-bar-color": COLOR,
            backgroundColor: "var(--progress-bar-color)",
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default NavigationProgressBar;
