"use client";

export default function PrintButton() {
  return (
    <div className="fixed bottom-6 right-6 print:hidden">
      <button
        onClick={() => window.print()}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-colors"
      >
        Print / Save as PDF
      </button>
    </div>
  );
}
