import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

let commitCount = 0;
try {
  commitCount = execSync('git rev-list --count HEAD').toString().trim();
} catch (_) {
  commitCount = 0;
}

const version = `v 1.0.${commitCount}`;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(version)
  }
})
