"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({
  initialLikes,
}: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      type="button"
      onClick={() => setLikes((current) => current + 1)}
      className="rounded-lg border border-blue-500 bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500 active:scale-95"
    >
      ❤ {likes}
    </button>
  );
}