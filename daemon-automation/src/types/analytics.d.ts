interface SegmentAnalytics {
  initialize(): void;
  page(properties?: {
    path?: string;
    url?: string;
    title?: string;
    search?: string;
    [key: string]: string | number | boolean | undefined;
  }): void;
  track(event: string, properties?: object): void;
  identify(userId: string, traits?: object): void;
  group(groupId: string, traits?: object): void;
  alias(userId: string): void;
}

interface Window {
  analytics: SegmentAnalytics;
}
