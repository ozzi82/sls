"use client";

import { Download, FileText, File } from "lucide-react";

export default function DownloadableResource({ title, description, fileSize, fileName, downloadUrl, icon = "pdf" }) {
  const handleDownload = () => {
    // Create download link
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getIcon = () => {
    if (icon === "pdf") return <FileText className="w-6 h-6 text-red-400" />;
    if (icon === "dwg") return <File className="w-6 h-6 text-blue-400" />;
    return <FileText className="w-6 h-6 text-orange-400" />;
  };

  return (
    <div className="group relative rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm p-5 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center">
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 mb-3">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">
              {fileSize}
            </span>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
    </div>
  );
}
