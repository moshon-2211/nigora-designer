"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const finish = () => setDone(true);
    if (document.readyState === "complete") {
      const t = setTimeout(finish, 700);
      return () => clearTimeout(t);
    }
    const onLoad = () => setTimeout(finish, 700);
    window.addEventListener("load", onLoad);
    const fallback = setTimeout(finish, 2600);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={`loader${done ? " done" : ""}`} id="loader">
      <div className="mono serif">NS</div>
      <div className="lbar">
        <i />
      </div>
      <div className="lw">Nigora Solieva · Interior</div>
    </div>
  );
}
