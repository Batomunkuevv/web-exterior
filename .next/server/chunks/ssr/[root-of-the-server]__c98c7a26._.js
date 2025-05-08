module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/components/features/ThreeScene.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThreeScene": (()=>ThreeScene)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MODEL_POSITION = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
const ROTATION_CENTER = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1.609383, -5.364124, -6.248453);
const CAMERA_RADIUS = 40;
const CAMERA_FOV = 74;
const CAMERA_HEIGHT_OFFSET = 10;
const CAMERA_WIDTH = 2048;
const CAMERA_HEIGHT = 2048;
const CAMERA_ASPECT_RATIO = CAMERA_WIDTH / CAMERA_HEIGHT;
const VERTICAL_FOV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].radToDeg(2 * Math.atan(Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(CAMERA_FOV) / 2) / CAMERA_ASPECT_RATIO));
const DRAG_THRESHOLD = 5;
const ThreeScene = ({ setSelectedFloor })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const raycasterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Raycaster"]());
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]());
    const axesHelperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debugSphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePositionHelperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [debugVisible, setDebugVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const hoveredObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(36);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const mouseStartXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mouseStartYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isUpdatingCameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isTouchDevice = "undefined" !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const handleObjectClick = (object)=>{
        const { name } = object;
        setSelectedFloor();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        sceneRef.current = scene;
        const axesHelper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxesHelper"](5);
        scene.add(axesHelper);
        axesHelper.visible = false;
        axesHelperRef.current = axesHelper;
        const sphereGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 16, 16);
        const sphereMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0xff0000
        });
        const debugSphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](sphereGeometry, sphereMaterial);
        scene.add(debugSphere);
        debugSphere.visible = false;
        debugSphereRef.current = debugSphere;
        const lineGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        const lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: 0x00ff00
        });
        const mousePositionHelper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"](lineGeometry, lineMaterial);
        scene.add(mousePositionHelper);
        mousePositionHelper.visible = false;
        mousePositionHelperRef.current = mousePositionHelper;
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](VERTICAL_FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
        cameraRef.current = camera;
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        const modelGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        scene.add(modelGroup);
        modelGroupRef.current = modelGroup;
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        loader.load("/models/ocluder.glb", (gltf)=>{
            const model = gltf.scene;
            const originalColor = 0xff0000;
            model.traverse((child)=>{
                if (child.isMesh) {
                    const mesh = child;
                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: originalColor,
                        transparent: true,
                        opacity: 0.0,
                        depthWrite: true,
                        depthTest: true,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
                        stencilWrite: true,
                        stencilRef: 1,
                        stencilFunc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlwaysStencilFunc"],
                        stencilZPass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceStencilOp"]
                    });
                }
                child.userData = {
                    info: "Penthouse Floor Model",
                    originalColor: originalColor,
                    isVisible: false,
                    isOccluder: true
                };
            });
            model.renderOrder = 0;
            modelGroup.renderOrder = 0;
            model.position.copy(MODEL_POSITION);
            modelGroup.add(model);
        });
        const handleKeyDown = (event)=>{
            if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "l") {
                setDebugVisible((prev)=>!prev);
                if (axesHelperRef.current) axesHelperRef.current.visible = !debugVisible;
                if (debugSphereRef.current) debugSphereRef.current.visible = !debugVisible;
                if (mousePositionHelperRef.current) mousePositionHelperRef.current.visible = !debugVisible;
            }
        };
        const updateRendererSize = ()=>{
            const viewer360Canvas = document.querySelector(".cloudimage-360 canvas");
            if (viewer360Canvas && rendererRef.current && cameraRef.current) {
                const rect = viewer360Canvas.getBoundingClientRect();
                rendererRef.current.setSize(rect.width, rect.height);
                // Remove inline styles
                rendererRef.current.domElement.style.position = "";
                rendererRef.current.domElement.style.left = "";
                rendererRef.current.domElement.style.top = "";
                // Update camera aspect
                const aspect = rect.width / rect.height;
                cameraRef.current.aspect = aspect;
                cameraRef.current.updateProjectionMatrix();
            }
        };
        const handlePointerMove = (clientX, clientY)=>{
            if (!rendererRef.current || !cameraRef.current || !modelGroupRef.current) return;
            const rect = rendererRef.current.domElement.getBoundingClientRect();
            mouseRef.current.x = (clientX - rect.left) / rect.width * 2 - 1;
            mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(modelGroupRef.current.children, true);
            // Update debug sphere position
            if (debugSphereRef.current && intersects.length > 0) {
                debugSphereRef.current.position.copy(intersects[0].point);
            }
            // Update mouse ray line
            if (mousePositionHelperRef.current) {
                const points = [
                    cameraRef.current.position
                ];
                const targetPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
                raycasterRef.current.ray.at(10, targetPoint);
                points.push(targetPoint);
                mousePositionHelperRef.current.geometry.setFromPoints(points);
            }
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            if (hoveredObjectRef.current) {
                const mat = hoveredObjectRef.current.material;
                mat.opacity = 0.0;
                mat.depthWrite = true;
                mat.userData.isOccluder = true;
                mat.blending = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NormalBlending"];
                hoveredObjectRef.current = null;
            }
            if (intersects.length > 0) {
                const intersectedObject = intersects[0].object;
                if (intersectedObject.userData) {
                    hoveredObjectRef.current = intersectedObject;
                    const mat = intersectedObject.material;
                    mat.color.set(0x000044);
                    mat.opacity = 0.05;
                    mat.depthWrite = false;
                    mat.blending = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoBlending"];
                    intersectedObject.userData.isOccluder = false;
                    intersectedObject.userData.isVisible = true;
                }
            }
        };
        const handleMouseMove = (e)=>{
            if (!isDraggingRef.current) {
                const dx = e.clientX - mouseStartXRef.current;
                const dy = e.clientY - mouseStartYRef.current;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > DRAG_THRESHOLD) {
                    isDraggingRef.current = true;
                }
            }
            handlePointerMove(e.clientX, e.clientY);
        };
        const handleTouchMove = (e)=>{
            if (e.touches.length === 1) {
                handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        const handleMouseDown = (e)=>{
            isDraggingRef.current = false;
            mouseStartXRef.current = e.clientX;
            mouseStartYRef.current = e.clientY;
        };
        const handleTouchStart = (e)=>{
            if (e.touches.length === 1) {
                isDraggingRef.current = false;
                mouseStartXRef.current = e.touches[0].clientX;
                mouseStartYRef.current = e.touches[0].clientY;
            }
        };
        const handleClick = (e)=>{
            if (isDraggingRef.current) return;
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
            if (!rendererRef.current || !cameraRef.current || !modelGroupRef.current) return;
            const rect = rendererRef.current.domElement.getBoundingClientRect();
            mouseRef.current.x = (clientX - rect.left) / rect.width * 2 - 1;
            mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(modelGroupRef.current.children, true);
            if (intersects.length > 0) {
                const clickedObject = intersects[0].object;
                if (clickedObject.userData && clickedObject.userData.info) {
                    handleObjectClick(clickedObject);
                }
            }
        };
        const updateCameraPosition = ()=>{
            if (isUpdatingCameraRef.current) return;
            isUpdatingCameraRef.current = true;
            const viewer = window.CI360;
            if (viewer?.getActiveIndexByID && cameraRef.current) {
                const currentIndex = viewer.getActiveIndexByID("product-360");
                if (currentIndex !== undefined) {
                    const angle = -(currentIndex / totalImagesRef.current) * Math.PI * 2;
                    const x = ROTATION_CENTER.x + CAMERA_RADIUS * Math.sin(angle);
                    const y = ROTATION_CENTER.y + CAMERA_HEIGHT_OFFSET;
                    const z = ROTATION_CENTER.z + CAMERA_RADIUS * Math.cos(angle);
                    cameraRef.current.position.set(x, y, z);
                    cameraRef.current.lookAt(ROTATION_CENTER);
                }
            }
            isUpdatingCameraRef.current = false;
        };
        const animate = ()=>{
            requestAnimationFrame(animate);
            updateCameraPosition();
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };
        const getTotalImages = ()=>{
            const viewer = document.querySelector(".cloudimage-360");
            if (viewer) {
                totalImagesRef.current = parseInt(viewer.getAttribute("data-amount-x") || "36");
            }
        };
        setTimeout(()=>{
            updateRendererSize();
            getTotalImages();
        }, 100);
        window.addEventListener("resize", updateRendererSize);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("click", handleClick);
        document.addEventListener("touchstart", handleTouchStart, {
            passive: false
        });
        document.addEventListener("touchmove", handleTouchMove, {
            passive: false
        });
        document.addEventListener("keydown", handleKeyDown);
        animate();
        // Cleanup
        return ()=>{
            window.removeEventListener("resize", updateRendererSize);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("click", handleClick);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("keydown", handleKeyDown);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "threejs-container",
        style: {
            width: "100%",
            height: "100%"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/features/ThreeScene.tsx",
        lineNumber: 324,
        columnNumber: 12
    }, this);
};
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c98c7a26._.js.map