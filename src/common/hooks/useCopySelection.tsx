import { useEffect } from "react";

type UseCopySelectionOptions = {
  targetRef: React.RefObject<HTMLElement | null>;
  onCopy?: (text: string) => void;
};

export const useCopySelection = ({
  targetRef,
  onCopy,
}: UseCopySelectionOptions) => {
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as Node;
      if (targetRef.current && targetRef.current.contains(target)) {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) return;
        const selectedText = selection.toString();
        if (!selectedText) return;
        navigator.clipboard
          .writeText(selectedText)
          .then(() => {
            if (onCopy) {
              onCopy(selectedText);
            } else {
              console.log("Скопировано:", selectedText);
            }
          })
          .catch((err) => {
            console.error("Ошибка при копировании:", err);
          });
      }
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [targetRef, onCopy]);
};
