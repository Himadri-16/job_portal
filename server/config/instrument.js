// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
Sentry.init({
  dsn: "https://b04a9611d4d509769f6d374008a22857@o4509875448250368.ingest.us.sentry.io/4509875454541824",
    integrations: [Sentry.mongooseIntegration()],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});