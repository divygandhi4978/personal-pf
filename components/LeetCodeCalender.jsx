'use client';

import React, { useState, useEffect } from "react";

export default function LeetCodeCalendarComponent() {
  const [LeetCodeCalendar, setLeetCodeCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only load the component on the client side
    const loadCalendar = async () => {
      try {
        // Polyfill for self reference
        if (typeof self === 'undefined' && typeof window !== 'undefined') {
          window.self = window;
        }
        
        const { default: Calendar } = await import('leetcode-calendar');
        setLeetCodeCalendar(() => Calendar);
        setLoading(false);
      } catch (err) {
        console.error('Error loading calendar:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadCalendar();
  }, []);

  // Custom theme with GitHub-like green colors, from light to dark
  const customTheme = {
    dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
  };

  if (loading) {
    return (
      <div className="scale-x-95">
        <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
          <span className="text-gray-600">Loading LeetCode calendar...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="scale-x-95">
        <div className="p-4 border border-red-200 rounded bg-red-50">
          <p className="text-red-600">Failed to load calendar</p>
          <p className="text-sm text-gray-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!LeetCodeCalendar) {
    return (
      <div className="scale-x-95">
        <div className="p-4 border border-gray-200 rounded bg-gray-50">
          <p className="text-gray-600">Calendar not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scale-x-95">
      <LeetCodeCalendar
        username="divygandhi4978"
        blockSize={15}     
        blockMargin={3}  
        fontSize={14}      
        theme={customTheme}  
      />
    </div>
  );
}