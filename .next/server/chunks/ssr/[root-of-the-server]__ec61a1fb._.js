module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoutDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function LogoutDialog() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        console.log('User logged out');
        setIsOpen(false);
    // 👉 Example: await signOut({ callbackUrl: '/signin' })
    };
    // Prevent body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-[#E53E3E] hover:bg-red-50 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: "Log Out"
                    }, void 0, false, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/20 backdrop-blur-[2px] animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Confirm Logout"
                                }, void 0, false, {
                                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 leading-relaxed",
                                children: "Are you sure you want to log out? You’ll need to sign in again to access your account."
                            }, void 0, false, {
                                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 p-6 border-t border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "px-4 py-2 rounded-lg bg-[#E53E3E] text-white hover:bg-[#C53030] transition-colors font-medium",
                                    children: "Log Out"
                                }, void 0, false, {
                                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$components$2f$LogoutDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/src/components/LogoutDialog.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const sidebarItems = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 19,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        text: 'Dashboard',
        href: '/admin-dashboard/dashboard'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 24,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        text: 'Blog Management',
        href: '/admin-dashboard/blog-management'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        text: 'Services Management',
        href: '/admin-dashboard/services'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 34,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        text: 'Podcast Management',
        href: '/admin-dashboard/podcast'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 39,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        text: 'Contact Management',
        href: '/admin-dashboard/contact'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 44,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        text: 'Settings',
        href: '/admin-dashboard/settings'
    }
];
function SidebarItem({ icon, text, href, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-3 px-4 py-[18px] rounded-lg cursor-pointer transition-all ${active ? 'bg-[#d6e6f7] text-[#5A8DEE]' : 'text-[#4A5568] hover:bg-[#e3f2fd]'}`,
            children: [
                icon,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base font-medium",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function AdminSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-[260px] bg-sky-50/50 border-r border-gray-200 min-h-screen flex flex-col ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[80px] flex items-center px-6 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl text-[#5A8DEE] font-bold",
                        children: [
                            "The ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Unburdened"
                            }, void 0, false, {
                                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal",
                                children: "Mind"
                            }, void 0, false, {
                                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex px-4 pt-6 pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: sidebarItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                            ...item,
                            active: pathname === item.href
                        }, item.text, false, {
                            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " px-5 text",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$components$2f$LogoutDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/Sidebar.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/BeUnburdened_admin_dashboard/src/lib/axios.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/axios.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1");
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL
});
const __TURBOPACK__default__export__ = axiosInstance;
}),
"[project]/BeUnburdened_admin_dashboard/src/lib/handleAllGetRequests.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChangePassword",
    ()=>useChangePassword,
    "useDeleteProduct",
    ()=>useDeleteProduct,
    "useGetActiveProducts",
    ()=>useGetActiveProducts,
    "useGetColors",
    ()=>useGetColors,
    "useGetDashboardSummary",
    ()=>useGetDashboardSummary,
    "useGetOrders",
    ()=>useGetOrders,
    "useGetPendingProducts",
    ()=>useGetPendingProducts,
    "useGetRevenueReport",
    ()=>useGetRevenueReport,
    "useGetSellerSales",
    ()=>useGetSellerSales,
    "useGetSingleProductById",
    ()=>useGetSingleProductById,
    "useGetUserProfile",
    ()=>useGetUserProfile,
    "useUpdateProduct",
    ()=>useUpdateProduct,
    "useUpdateUserProfile",
    ()=>useUpdateUserProfile,
    "useUploadAvatar",
    ()=>useUploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/src/lib/axios.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
function useGetOrders() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const role = session?.user?.role;
    const userId = session?.user?.id;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'orders',
            role,
            userId
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/order`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
}
function useGetActiveProducts() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'seller-active-products'
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/product/seller/active-products`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
}
function useGetPendingProducts() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'seller-pending-products'
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/product/seller/pending-products`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
}
function useDeleteProduct() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // console.log('products accessToken', token)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (productId)=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/product/${productId}`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'seller-pending-products'
                ]
            });
        }
    });
}
function useUpdateProduct(options) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (payload)=>{
            const { productId, data } = payload;
            await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/product/${productId}`, data, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'seller-pending-products'
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Proucts updated successfully!');
            options?.onSuccess?.();
        },
        onError: (error)=>{
            options?.onError?.(error);
        }
    });
}
function useGetSingleProductById(productId) {
    const { data, refetch, isLoading, isError, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'single-product',
            productId
        ],
        queryFn: async ()=>{
            if (!productId) return null;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/product/${productId}`);
            return res.data;
        },
        enabled: !!productId
    });
    return {
        data,
        refetch,
        isLoading,
        isError,
        error
    };
}
const useGetSellerSales = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'seller-sales'
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/order/seller/sales`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
};
const useGetUserProfile = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const userId = session?.user?.id;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        // keep userId in the key so invalidations can target it
        queryKey: [
            'user-profile',
            userId
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/user/me`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data.data;
        },
        enabled: !!token
    });
};
const useUpdateUserProfile = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const userId = session?.user?.id;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (data)=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/user/me`, data, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        onSuccess: ()=>{
            // invalidate the exact user-profile key so `useGetUserProfile` refetches
            queryClient.invalidateQueries({
                queryKey: [
                    'user-profile',
                    userId
                ]
            });
        }
    });
};
const useUploadAvatar = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const userId = session?.user?.id;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (file)=>{
            const formData = new FormData();
            formData.append('profileImage', file);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/user/upload-avatar`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    ...token ? {
                        Authorization: `Bearer ${token}`
                    } : {}
                }
            });
            return res.data;
        },
        onSuccess: ()=>{
            // invalidate so profile refetches
            queryClient.invalidateQueries({
                queryKey: [
                    'user-profile',
                    userId
                ]
            });
        }
    });
};
const useChangePassword = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (data)=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/auth/change-password`, data, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        }
    });
};
const useGetDashboardSummary = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'dashboard-summary'
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/dashboard/seller/dashboard-summary`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
};
const useGetRevenueReport = (period)=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'revenue-report',
            period
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/dashboard/seller/revenue-report?filter=${period}`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
};
const useGetColors = (page = 1, limit = 50)=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'colors',
            page,
            limit
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/color?page=${page}&limit=${limit}`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            return res.data;
        },
        enabled: !!token
    });
};
}),
"[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$handleAllGetRequests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BeUnburdened_admin_dashboard/src/lib/handleAllGetRequests.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function UserHeader() {
    const { data: profile, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$src$2f$lib$2f$handleAllGetRequests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetUserProfile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-sky-50/50 border-b border-gray-200 px-8 py-5 flex items-center justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-24 bg-gray-300 rounded"
                    }, void 0, false, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 bg-gray-300 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-[#2D3748]",
                                children: profile?.name || 'David'
                            }, void 0, false, {
                                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: profile?.role || 'Admin'
                            }, void 0, false, {
                                fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/seller-dashboard/settings",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BeUnburdened_admin_dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: profile?.profileImage || '/images/demoUser.png',
                            alt: "User Avatar",
                            width: 40,
                            height: 40,
                            className: "h-10 w-10 rounded-full object-cover border-2 border-gray-200 cursor-pointer hover:border-[#7C4DFF] transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/BeUnburdened_admin_dashboard/src/components/reusable/UserHeader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec61a1fb._.js.map