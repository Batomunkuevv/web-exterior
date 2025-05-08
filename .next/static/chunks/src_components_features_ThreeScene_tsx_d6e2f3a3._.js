(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/features/ThreeScene.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThreeScene": (()=>ThreeScene)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ThreeScene = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const MODEL_POSITION = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
            const ROTATION_CENTER = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.609383, -5.364124, -6.248453);
            const CAMERA_RADIUS = 40;
            const CAMERA_FOV = 74;
            const CAMERA_HEIGHT_OFFSET = 10;
            const CAMERA_WIDTH = 2048;
            const CAMERA_HEIGHT = 2048;
            const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
            const CAMERA_ASPECT_RATIO = CAMERA_WIDTH / CAMERA_HEIGHT;
            const VERTICAL_FOV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].radToDeg(2 * Math.atan(Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(CAMERA_FOV) / 2) / CAMERA_ASPECT_RATIO));
            let scene, camera, renderer, modelGroup;
            const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
            const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
            let isDragging = false;
            let mouseStartX = 0;
            let mouseStartY = 0;
            let hoveredObject = null;
            function init() {
                const container = containerRef.current;
                if (!container) return;
                scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](CAMERA_FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
                camera.position.set(0, CAMERA_HEIGHT_OFFSET, CAMERA_RADIUS);
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: true
                });
                renderer.setSize(container.clientWidth, container.clientHeight);
                container.appendChild(renderer.domElement);
                modelGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                modelGroup.position.copy(MODEL_POSITION);
                scene.add(modelGroup);
                const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HemisphereLight"](0xffffff, 0x444444);
                light.position.set(0, 20, 0);
                scene.add(light);
                const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
                loader.load("/models/ocluder.glb", {
                    "ThreeScene.useEffect.init": (gltf)=>{
                        modelGroup.add(gltf.scene);
                    }
                }["ThreeScene.useEffect.init"]);
                container.addEventListener("mousedown", onMouseDown);
                container.addEventListener("mousemove", onMouseMove);
                container.addEventListener("mouseup", onMouseUp);
                container.addEventListener("touchstart", onTouchStart);
                container.addEventListener("touchmove", onTouchMove);
                container.addEventListener("touchend", onTouchEnd);
                window.addEventListener("resize", onWindowResize);
            }
            function onWindowResize() {
                const container = containerRef.current;
                if (!container) return;
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
            function onMouseDown(e) {
                isDragging = true;
                mouseStartX = e.clientX;
                mouseStartY = e.clientY;
            }
            function onMouseMove(e) {
                if (isDragging) {
                    const deltaX = e.clientX - mouseStartX;
                    modelGroup.rotation.y += deltaX * 0.01;
                    mouseStartX = e.clientX;
                }
            }
            function onMouseUp() {
                isDragging = false;
            }
            function onTouchStart(e) {
                if (e.touches.length === 1) {
                    isDragging = true;
                    mouseStartX = e.touches[0].clientX;
                }
            }
            function onTouchMove(e) {
                if (isDragging && e.touches.length === 1) {
                    const deltaX = e.touches[0].clientX - mouseStartX;
                    modelGroup.rotation.y += deltaX * 0.01;
                    mouseStartX = e.touches[0].clientX;
                }
            }
            function onTouchEnd() {
                isDragging = false;
            }
            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            init();
            animate();
            return ({
                "ThreeScene.useEffect": ()=>{
                    const container = containerRef.current;
                    if (container) {
                        container.removeEventListener("mousedown", onMouseDown);
                        container.removeEventListener("mousemove", onMouseMove);
                        container.removeEventListener("mouseup", onMouseUp);
                        container.removeEventListener("touchstart", onTouchStart);
                        container.removeEventListener("touchmove", onTouchMove);
                        container.removeEventListener("touchend", onTouchEnd);
                        container.removeChild(renderer.domElement);
                    }
                    renderer.dispose();
                }
            })["ThreeScene.useEffect"];
        }
    }["ThreeScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "threejs-container",
        ref: containerRef,
        style: {
            width: "100%",
            height: "100%"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/features/ThreeScene.tsx",
        lineNumber: 134,
        columnNumber: 12
    }, this);
};
_s(ThreeScene, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ThreeScene;
var _c;
__turbopack_context__.k.register(_c, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_features_ThreeScene_tsx_d6e2f3a3._.js.map