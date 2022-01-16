import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: "center" }}>Что-то пошло не так...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
