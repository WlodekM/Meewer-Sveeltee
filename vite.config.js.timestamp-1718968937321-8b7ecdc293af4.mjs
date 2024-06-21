// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/wlodz/Projects/meewer-svelte-for-my-server/Meower-Svelte/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///mnt/c/Users/wlodz/Projects/meewer-svelte-for-my-server/Meower-Svelte/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vite_config_default = defineConfig({
  plugins: [
    svelte()
    /*
    injectManifest({
    	swSrc: "sw.js",
    	swDest: "dist/sw.js",
    	globDirectory: "dist",
    	globPatterns: ["**\/*.{js,css,html,svg,png,ttf}"],
    	mode: "production"
    }),
    replace({
    	is_vite_preview: true,
    	preventAssignment: true,
    }),
    */
  ],
  base: "/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvd2xvZHovUHJvamVjdHMvbWVld2VyLXN2ZWx0ZS1mb3ItbXktc2VydmVyL01lb3dlci1TdmVsdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy93bG9kei9Qcm9qZWN0cy9tZWV3ZXItc3ZlbHRlLWZvci1teS1zZXJ2ZXIvTWVvd2VyLVN2ZWx0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvd2xvZHovUHJvamVjdHMvbWVld2VyLXN2ZWx0ZS1mb3ItbXktc2VydmVyL01lb3dlci1TdmVsdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHtzdmVsdGV9IGZyb20gXCJAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlXCI7XHJcblxyXG4vLyBpbXBvcnQgcmVwbGFjZSBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tcmVwbGFjZVwiO1xyXG4vLyBpbXBvcnQge2luamVjdE1hbmlmZXN0fSBmcm9tIFwicm9sbHVwLXBsdWdpbi13b3JrYm94XCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdHBsdWdpbnM6IFtcclxuXHRcdHN2ZWx0ZSgpLFxyXG5cdFx0LypcclxuXHRcdGluamVjdE1hbmlmZXN0KHtcclxuXHRcdFx0c3dTcmM6IFwic3cuanNcIixcclxuXHRcdFx0c3dEZXN0OiBcImRpc3Qvc3cuanNcIixcclxuXHRcdFx0Z2xvYkRpcmVjdG9yeTogXCJkaXN0XCIsXHJcblx0XHRcdGdsb2JQYXR0ZXJuczogW1wiKipcXC8qLntqcyxjc3MsaHRtbCxzdmcscG5nLHR0Zn1cIl0sXHJcblx0XHRcdG1vZGU6IFwicHJvZHVjdGlvblwiXHJcblx0XHR9KSxcclxuXHRcdHJlcGxhY2Uoe1xyXG5cdFx0XHRpc192aXRlX3ByZXZpZXc6IHRydWUsXHJcblx0XHRcdHByZXZlbnRBc3NpZ25tZW50OiB0cnVlLFxyXG5cdFx0fSksXHJcblx0XHQqL1xyXG5cdF0sXHJcblx0YmFzZTogXCIvXCIsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlZLFNBQVEsb0JBQW1CO0FBQzVaLFNBQVEsY0FBYTtBQU1yQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWNSO0FBQUEsRUFDQSxNQUFNO0FBQ1AsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
