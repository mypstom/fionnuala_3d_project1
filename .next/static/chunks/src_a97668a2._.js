(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/component/FallingText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const FallingText = ({ text = '', highlightWords = [], highlightClass = "highlighted", trigger = "auto", backgroundColor = "transparent", wireframes = false, gravity = 1, mouseConstraintStiffness = 0.2, fontSize = "1rem" })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [effectStarted, setEffectStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingText.useEffect": ()=>{
            if (!textRef.current) return;
            const words = text.split(" ");
            const newHTML = words.map({
                "FallingText.useEffect.newHTML": (word)=>{
                    const isHighlighted = highlightWords.some({
                        "FallingText.useEffect.newHTML.isHighlighted": (hw)=>word.startsWith(hw)
                    }["FallingText.useEffect.newHTML.isHighlighted"]);
                    return `<span class="word ${isHighlighted ? highlightClass : ""}">${word}</span>`;
                }
            }["FallingText.useEffect.newHTML"]).join(" ");
            textRef.current.innerHTML = newHTML;
        }
    }["FallingText.useEffect"], [
        text,
        highlightWords,
        highlightClass
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingText.useEffect": ()=>{
            if (trigger === "auto") {
                setEffectStarted(true);
                return;
            }
            if (trigger === "scroll" && containerRef.current) {
                const observer = new IntersectionObserver({
                    "FallingText.useEffect": ([entry])=>{
                        if (entry.isIntersecting) {
                            setEffectStarted(true);
                            observer.disconnect();
                        }
                    }
                }["FallingText.useEffect"], {
                    threshold: 0.1
                });
                observer.observe(containerRef.current);
                return ({
                    "FallingText.useEffect": ()=>observer.disconnect()
                })["FallingText.useEffect"];
            }
        }
    }["FallingText.useEffect"], [
        trigger
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingText.useEffect": ()=>{
            if (!effectStarted) return;
            const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            const containerRect = containerRef.current.getBoundingClientRect();
            const width = containerRect.width;
            const height = containerRect.height;
            if (width <= 0 || height <= 0) {
                return;
            }
            const engine = Engine.create();
            engine.world.gravity.y = gravity;
            const render = Render.create({
                element: canvasContainerRef.current,
                engine,
                options: {
                    width,
                    height,
                    background: backgroundColor,
                    wireframes
                }
            });
            const boundaryOptions = {
                isStatic: true,
                render: {
                    fillStyle: "transparent"
                }
            };
            const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
            const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
            const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
            const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);
            const wordSpans = textRef.current.querySelectorAll(".word");
            const wordBodies = [
                ...wordSpans
            ].map({
                "FallingText.useEffect.wordBodies": (elem)=>{
                    const rect = elem.getBoundingClientRect();
                    const x = rect.left - containerRect.left + rect.width / 2;
                    const y = rect.top - containerRect.top + rect.height / 2;
                    const body = Bodies.rectangle(x, y, rect.width, rect.height, {
                        render: {
                            fillStyle: "transparent"
                        },
                        restitution: 0.8,
                        frictionAir: 0.01,
                        friction: 0.2
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setVelocity(body, {
                        x: (Math.random() - 0.5) * 5,
                        y: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
                    return {
                        elem,
                        body
                    };
                }
            }["FallingText.useEffect.wordBodies"]);
            wordBodies.forEach({
                "FallingText.useEffect": ({ elem, body })=>{
                    elem.style.position = "absolute";
                    elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
                    elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
                    elem.style.transform = "none";
                }
            }["FallingText.useEffect"]);
            const mouse = Mouse.create(containerRef.current);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: mouseConstraintStiffness,
                    render: {
                        visible: false
                    }
                }
            });
            render.mouse = mouse;
            World.add(engine.world, [
                floor,
                leftWall,
                rightWall,
                ceiling,
                mouseConstraint,
                ...wordBodies.map({
                    "FallingText.useEffect": (wb)=>wb.body
                }["FallingText.useEffect"])
            ]);
            const runner = Runner.create();
            Runner.run(runner, engine);
            Render.run(render);
            const updateLoop = {
                "FallingText.useEffect.updateLoop": ()=>{
                    wordBodies.forEach({
                        "FallingText.useEffect.updateLoop": ({ body, elem })=>{
                            const { x, y } = body.position;
                            elem.style.left = `${x}px`;
                            elem.style.top = `${y}px`;
                            elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
                        }
                    }["FallingText.useEffect.updateLoop"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.update(engine);
                    requestAnimationFrame(updateLoop);
                }
            }["FallingText.useEffect.updateLoop"];
            updateLoop();
            return ({
                "FallingText.useEffect": ()=>{
                    Render.stop(render);
                    Runner.stop(runner);
                    if (render.canvas && canvasContainerRef.current) {
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        canvasContainerRef.current.removeChild(render.canvas);
                    }
                    World.clear(engine.world);
                    Engine.clear(engine);
                }
            })["FallingText.useEffect"];
        }
    }["FallingText.useEffect"], [
        effectStarted,
        gravity,
        wireframes,
        backgroundColor,
        mouseConstraintStiffness
    ]);
    const handleTrigger = ()=>{
        if (!effectStarted && (trigger === "click" || trigger === "hover")) {
            setEffectStarted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "falling-text-container",
        onClick: trigger === "click" ? handleTrigger : undefined,
        onMouseOver: trigger === "hover" ? handleTrigger : undefined,
        style: {
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "falling-text-target",
                style: {
                    fontSize: fontSize,
                    lineHeight: 1.4
                }
            }, void 0, false, {
                fileName: "[project]/src/component/FallingText.js",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasContainerRef,
                className: "falling-text-canvas"
            }, void 0, false, {
                fileName: "[project]/src/component/FallingText.js",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/FallingText.js",
        lineNumber: 187,
        columnNumber: 5
    }, this);
};
_s(FallingText, "eHvFl6O29bOgs5Z9Y2zvcA3Wbb4=");
_c = FallingText;
const __TURBOPACK__default__export__ = FallingText;
var _c;
__turbopack_context__.k.register(_c, "FallingText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/about/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>About)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$FallingText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/FallingText.js [app-client] (ecmascript)");
"use client";
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-blue-100 flex justify-center items-center rounded-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$FallingText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: `Hello, This is Fionnuala's page.`,
            highlightWords: [
                "Hello",
                "Fionnuala's"
            ],
            highlightClass: "highlighted",
            trigger: "hover",
            backgroundColor: "transparent",
            wireframes: false,
            gravity: 0.56,
            fontSize: "2rem",
            mouseConstraintStiffness: 0.9
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.js",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/about/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a97668a2._.js.map