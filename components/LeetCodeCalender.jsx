'use client';

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import with error handling
const LeetCodeCalendar = dynamic(() => import('leetcode-calendar'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-32">
      <div className="animate-pulse text-gray-500">Loading LeetCode calendar...</div>
    </div>
  )
});

export default function LeetCodeCalendarComponent() {
  const [hasError, setHasError] = useState(false);

  // Custom theme with GitHub-like green colors, from light to dark
  const customTheme = {
    dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
  };

  useEffect(() => {
    // Reset error state when component mounts
    setHasError(false);
  }, []);

  if (hasError) {
    return (
      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <p className="text-gray-600">Unable to load LeetCode calendar. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="scale-x-95">
      <ErrorBoundary onError={() => setHasError(true)}>
        <LeetCodeCalendar
          username="divygandhi4978"
          blockSize={15}     
          blockMargin={3}  
          fontSize={14}      
          theme={customTheme}  
        />
      </ErrorBoundary>
    </div>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LeetCode Calendar Error:', error, errorInfo);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}