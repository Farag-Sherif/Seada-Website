import { useEffect, useState } from "react";
import "./Download.css";
import { getSettings } from "@/server/api";

const Download = () => {
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getSettings();
      console.log(data)
      setSettings(data);
    };
    fetchSettings();
  }, []);
  const downloadLink =
    settings && settings.settings.file_path ? settings.settings.file_path : "#";

  return (
    <a
      href={downloadLink}
      target="_blank"
      rel="noopener noreferrer"
      className="download-btn"
      aria-label="Download Profile"
    >
      <div className="download-btn__bg"></div>
      <svg className="download-btn__icon" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15v4c0 .55-.22 1.08-.61 1.47-.4.39-.93.61-1.48.61H5c-.55 0-1.08-.22-1.47-.61-.39-.4-.61-.93-.61-1.48v-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 11l5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16V3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
};

export default Download;