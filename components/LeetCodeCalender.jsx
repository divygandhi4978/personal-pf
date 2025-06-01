'use client';

import React, { useState, useEffect } from "react";

export default function LeetCodeCalendarComponent() {
  const [CalendarComponent, setCalendarComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only run this code in the browser, never during build
    if (typeof window === 'undefined') return;

    let isMounted = true;

    const loadCalendar = async () => {
      try {
        // Wait a bit to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Create a self polyfill before importing
        if (typeof self === 'undefined') {
          window.self = window;
        }
        
        // Dynamic import only in browser
        const module = await import('leetcode-calendar');
        const LeetCodeCalendar = module.default;
        
        if (isMounted) {
          // Create a wrapper component
          const WrappedCalendar = (props) => {
            try {
              return React.createElement(LeetCodeCalendar, props);
            } catch (err) {
              console.error('Calendar render error:', err);
              return (
                <div className="p-4 border border-red-200 rounded bg-red-50">
                  <p className="text-red-600">Calendar render failed</p>
                </div>
              );
            }
          };
          
          setCalendarComponent(() => WrappedCalendar);
          setLoading(false);
        }
        
      } catch (err) {
        console.error('Error loading calendar:', err);
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    loadCalendar();

    return () => {
      isMounted = false;
    };
  }, []);

  // Custom theme with GitHub-like green colors, from light to dark
  const customTheme = {
    dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
  };

  // Show loading state
  if (loading) {
    return (
      <div className="scale-x-95">
        <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
          <span className="text-gray-600">Loading LeetCode calendar...</span>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="scale-x-95">
        <div className="p-4 border border-yellow-200 rounded bg-yellow-50">
          <p className="text-yellow-700">LeetCode Calendar</p>
          <p className="text-sm text-gray-600">Username: divygandhi4978</p>
          <p className="text-xs text-gray-500 mt-2">Calendar temporarily unavailable</p>
        </div>
      </div>
    );
  }

  // Show calendar if loaded successfully
  if (CalendarComponent) {
    return (
      <div className="scale-x-95">
        <CalendarComponent
          username="divygandhi4978"
          blockSize={15}     
          blockMargin={3}  
          fontSize={14}      
          theme={customTheme}  
        />
      </div>
    );
  }

  // Fallback
  return (
    <div className="scale-x-95">
      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <p className="text-gray-600">Initializing calendar...</p>
      </div>
    </div>
  );