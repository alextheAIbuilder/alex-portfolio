"use client";

import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const Fallback = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/10" />
);

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <Fallback />;
    return this.props.children;
  }
}

export default function Scene3DWrapper() {
  return (
    <ErrorBoundary>
      <Scene3D />
    </ErrorBoundary>
  );
}
