import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('[metaline-design] Unhandled error:', error, info.componentStack);
  }

  private handleReset = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">משהו השתבש</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              אירעה שגיאה בלתי צפויה. אנא רעננו את הדף ונסו שוב.
            </p>
            <button
              onClick={() => {
                this.handleReset();
                window.location.href = '/';
              }}
              className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              חזרה לדף הבית
            </button>
            {import.meta.env.DEV && (
              <pre className="mt-6 text-left text-xs bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 p-3 rounded overflow-auto">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
