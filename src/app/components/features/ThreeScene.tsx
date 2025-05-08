"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ThreeSceneProps } from "@/types";
import { floorsData } from "@data";

const MODEL_POSITION = new THREE.Vector3(0, 0, 0);
const ROTATION_CENTER = new THREE.Vector3(1.609383, -5.364124, -6.248453);
const CAMERA_RADIUS = 40;
const CAMERA_FOV = 74;
const CAMERA_HEIGHT_OFFSET = 10;
const CAMERA_ASPECT_RATIO = 2048 / 2048;
const VERTICAL_FOV = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2) / CAMERA_ASPECT_RATIO)));
const DRAG_THRESHOLD = 5;

export const ThreeScene = ({ selectedFloor, setSelectedFloor, setSelectedApartament, setIsOpenFloorPanel }: ThreeSceneProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const modelGroupRef = useRef<THREE.Group | null>(null);
    const raycasterRef = useRef(new THREE.Raycaster());
    const mouseRef = useRef(new THREE.Vector2());
    const hoveredObjectRef = useRef<THREE.Mesh | null>(null);

    const isDraggingRef = useRef(false);
    const mouseStartXRef = useRef(0);
    const mouseStartYRef = useRef(0);
    const totalImagesRef = useRef(36);
    const isUpdatingCameraRef = useRef(false);

    const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const resetHoveredObject = () => {
        const hovered = hoveredObjectRef.current;
        if (hovered && hovered.userData?.defaultMaterial) {
            hovered.material = hovered.userData.defaultMaterial;
            hoveredObjectRef.current = null;
        }
    };

    const handleObjectClick = (object: THREE.Object3D) => {
        const floor = floorsData.find((f) => f.occluderName === object.name);
        if (!floor) return;

        resetHoveredObject();
        setSelectedFloor(floor);
        setSelectedApartament(null);
        setIsOpenFloorPanel(true);
    };

    const handlePointerMove = (clientX: number, clientY: number) => {
        if (!rendererRef.current || !cameraRef.current || !modelGroupRef.current) return;

        const rect = rendererRef.current.domElement.getBoundingClientRect();
        mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(modelGroupRef.current.children, true);

        if (hoveredObjectRef.current) {
            const prev = hoveredObjectRef.current;
            if (prev.userData?.defaultMaterial) {
                prev.material = prev.userData.defaultMaterial;
            }
            hoveredObjectRef.current = null;
        }

        if (intersects.length > 0) {
            const mesh = intersects[0].object as THREE.Mesh;
            if (mesh.userData?.hoverMaterial) {
                mesh.material = mesh.userData.hoverMaterial;
                hoveredObjectRef.current = mesh;
            }
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) {
            const dx = e.clientX - mouseStartXRef.current;
            const dy = e.clientY - mouseStartYRef.current;
            if (Math.sqrt(dx * dx + dy * dy) > DRAG_THRESHOLD) {
                isDraggingRef.current = true;
            }
        }
        handlePointerMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 1) {
            handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
    };

    const handleMouseDown = (e: MouseEvent) => {
        isDraggingRef.current = false;
        mouseStartXRef.current = e.clientX;
        mouseStartYRef.current = e.clientY;
    };

    const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
            isDraggingRef.current = false;
            mouseStartXRef.current = e.touches[0].clientX;
            mouseStartYRef.current = e.touches[0].clientY;
        }
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
        if (isDraggingRef.current) return;

        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        if (!rendererRef.current || !cameraRef.current || !modelGroupRef.current) return;

        const rect = rendererRef.current.domElement.getBoundingClientRect();
        mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(modelGroupRef.current.children, true);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            if (clickedObject.userData?.info) {
                handleObjectClick(clickedObject);
            }
        }
    };

    const updateCameraPosition = () => {
        if (isUpdatingCameraRef.current) return;
        isUpdatingCameraRef.current = true;

        const viewer = window.CI360;
        if (viewer?.getActiveIndexByID && cameraRef.current) {
            const index = viewer.getActiveIndexByID("product-360");
            if (index !== undefined) {
                const angle = -(index / totalImagesRef.current) * Math.PI * 2;
                const x = ROTATION_CENTER.x + CAMERA_RADIUS * Math.sin(angle);
                const y = ROTATION_CENTER.y + CAMERA_HEIGHT_OFFSET;
                const z = ROTATION_CENTER.z + CAMERA_RADIUS * Math.cos(angle);
                cameraRef.current.position.set(x, y, z);
                cameraRef.current.lookAt(ROTATION_CENTER);
            }
        }

        isUpdatingCameraRef.current = false;
    };

    const animate = () => {
        requestAnimationFrame(animate);
        updateCameraPosition();
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(VERTICAL_FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const modelGroup = new THREE.Group();
        scene.add(modelGroup);
        modelGroupRef.current = modelGroup;

        const loader = new GLTFLoader();
        loader.load("/models/ocluder.glb", (gltf) => {
            const model = gltf.scene;
            const originalColor = new THREE.Color("#000");

            model.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;

                    const occluderMaterial = new THREE.MeshBasicMaterial({
                        color: originalColor,
                        transparent: false,
                        opacity: 1.0,
                        depthWrite: true,
                        depthTest: true,
                        colorWrite: false,
                        side: THREE.DoubleSide,
                    });

                    const hoverMaterial = new THREE.MeshBasicMaterial({
                        color: originalColor,
                        transparent: true,
                        opacity: 0.4,
                        depthWrite: false,
                        depthTest: true,
                        side: THREE.FrontSide,
                        blending: THREE.NoBlending,
                    });

                    mesh.material = occluderMaterial;
                    mesh.renderOrder = 999;

                    mesh.userData = {
                        info: "Occluder",
                        defaultMaterial: occluderMaterial,
                        hoverMaterial: hoverMaterial,
                    };
                }
            });

            model.position.copy(MODEL_POSITION);
            modelGroup.add(model);
        });

        const getTotalImages = () => {
            const viewer = document.querySelector(".cloudimage-360");
            totalImagesRef.current = parseInt(viewer?.getAttribute("data-amount-x") || "36");
        };

        setTimeout(getTotalImages, 100);
        animate();

        window.addEventListener("resize", () => renderer.setSize(container.clientWidth, container.clientHeight));

        return () => {
            window.removeEventListener("resize", () => renderer.setSize(container.clientWidth, container.clientHeight));
            if (rendererRef.current) rendererRef.current.dispose();
        };
    }, []);

    useEffect(() => {
        const enable = !selectedFloor;

        if (enable) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("click", handleClick);
            window.addEventListener("touchstart", handleTouchStart, { passive: false });
            window.addEventListener("touchmove", handleTouchMove, { passive: false });
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            resetHoveredObject();
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [selectedFloor]);

    return <div ref={containerRef} id="threejs-container" className="w-full h-full" />;
};
