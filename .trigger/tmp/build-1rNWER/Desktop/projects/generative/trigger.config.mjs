import {
  defineConfig
} from "../../../chunk-ZZFRROTA.mjs";
import {
  init_esm
} from "../../../chunk-SAABVWHG.mjs";

// trigger.config.ts
init_esm();
var trigger_config_default = defineConfig({
  // Your Trigger.dev project ref (proj_xxx) — from the Trigger.dev dashboard
  project: process.env.TRIGGER_PROJECT_REF ?? "proj_REPLACE_ME",
  dirs: ["./trigger"],
  maxDuration: 3600,
  retries: {
    enabledInDev: false,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1e4,
      maxTimeoutInMs: 1e4,
      factor: 2,
      randomize: true
    }
  },
  build: {}
});
var resolveEnvVars = void 0;
export {
  trigger_config_default as default,
  resolveEnvVars
};
//# sourceMappingURL=trigger.config.mjs.map
