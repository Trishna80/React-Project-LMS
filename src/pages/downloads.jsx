// downloads.jsx
import React from 'react';
import { HardDrive } from 'lucide-react';

export default function Download() {
  return (
    <div className="w-full h-full p-12">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Downloaded Files</h2>
        <p className="text-gray-500">View your saved materials</p>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-200 mb-6">
          <HardDrive size={48} />
        </div>
        <p className="text-gray-400 font-medium text-xl italic">
          No files downloaded yet.
        </p>
        <p className="text-gray-400 mt-2 max-w-sm">
          Once you download course notes, they will appear here. 👀
        </p>
      </div>
    </div>
  );
}