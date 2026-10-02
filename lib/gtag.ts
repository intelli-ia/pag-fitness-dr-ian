declare function gtag(...args: unknown[]): void;

export function trackGenerateLead() {
  if (typeof gtag !== "undefined") {
    gtag("event", "generate_lead");
  }
}

export function trackGoogleAdsConversion() {
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", {
      send_to: "AW-16492052065/RTGXCOLQ67ccEOH8grg9",
      value: 1.0,
      currency: "BRL",
    });
  }
}
