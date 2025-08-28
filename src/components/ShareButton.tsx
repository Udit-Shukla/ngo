"use client";

import { useState } from 'react';

export default function ShareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: '📘',
      color: 'hover:bg-blue-100',
      onClick: () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Support our NGO\'s mission! Every donation makes a difference. Join us in creating positive change.');
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
        setIsModalOpen(false);
      }
    },
    {
      name: 'Twitter',
      icon: '🐦',
      color: 'hover:bg-sky-100',
      onClick: () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Support our NGO\'s mission! Every donation makes a difference. Join us in creating positive change.');
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        setIsModalOpen(false);
      }
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: 'hover:bg-blue-100',
      onClick: () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Support our NGO\'s mission! Every donation makes a difference.');
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        setIsModalOpen(false);
      }
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'hover:bg-green-100',
      onClick: () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Support our NGO\'s mission! Every donation makes a difference.');
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        setIsModalOpen(false);
      }
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        Share
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-card-foreground">Share on Social Media</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-card-foreground text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.onClick}
                  className="bg-muted/50 p-4 rounded-lg border border-border hover:bg-muted transition-colors flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">{option.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
