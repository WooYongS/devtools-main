// @unocss-include

import { Dropdown as ae, vClosePopper as Y, Tooltip as re } from "floating-vue";
import { vTooltip as Bt } from "floating-vue";
/* empty css             */
/* empty css               */
import { createElementBlock as f, openBlock as u, renderSlot as v, createElementVNode as m, defineComponent as h, useAttrs as ne, computed as k, useSlots as q, createBlock as w, resolveDynamicComponent as J, mergeProps as D, withCtx as g, createCommentVNode as $, unref as b, normalizeClass as y, shallowRef as le, nextTick as H, Fragment as E, renderList as R, toDisplayString as B, watchEffect as P, ref as S, onMounted as z, Teleport as X, createVNode as C, Transition as N, normalizeStyle as j, createTextVNode as _, isRef as x, h as se, render as U, normalizeProps as G, guardReactiveProps as Q, withModifiers as ie, provide as de, createSlots as Z, inject as ue, withDirectives as A, vModelDynamic as ce } from "vue";
import { useVModel as T, useScrollLock as pe, onKeyStroke as ee, useColorMode as me, useElementSize as fe, refDebounced as ge, refWithControl as ve, useToggle as be } from "@vueuse/core";
import { createHighlighterCore as ye } from "shiki/core";
import { createJavaScriptRegexEngine as he } from "shiki/engine/javascript";
import { i as ke } from "./ic-icons-data-B4q1VTSq.js";
const O = (l, t) => {
  const e = l.__vccOpts || l;
  for (const [s, o] of t)
    e[s] = o;
  return e;
}, we = {}, $e = { class: "mx-0.5 $ui-base inline-block select-none whitespace-nowrap rounded px-1.5 py-0.5 text-xs" };
function Ce(l, t) {
  return u(), f("span", $e, [
    v(l.$slots, "default")
  ]);
}
const dt = /* @__PURE__ */ O(we, [["render", Ce]]), Ve = {}, Be = { class: "h-3 w-3 $ui-inline-fcc" };
function _e(l, t) {
  return u(), f("div", Be, t[0] || (t[0] = [
    m("svg", {
      class: "animate-spin",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, [
      m("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      }),
      m("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      })
    ], -1)
  ]));
}
const te = /* @__PURE__ */ O(Ve, [["render", _e]]), Te = { key: 2 }, M = /* @__PURE__ */ h({
  inheritAttrs: !1,
  __name: "Button",
  props: {
    type: { default: "default" },
    round: { type: [String, Boolean], default: "normal" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "normal" },
    flat: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const e = l, s = t, o = ne(), n = k(() => o.to ? "router-link" : o.href ? "a" : "button"), r = k(() => e.loading || e.disabled);
    function d(c) {
      if (r.value) {
        c.preventDefault(), c.stopPropagation(), c.stopImmediatePropagation();
        return;
      }
      s("click", c);
    }
    const a = {
      common: {
        default: "active:bg-primary-100-darker dark:active:bg-gray-800-darker",
        primary: "active:bg-primary-500-darker",
        accent: "active:bg-accent-500-darker",
        danger: "active:bg-danger-500-darker",
        warning: "active:bg-warning-500-darker",
        info: "active:bg-primary-100-darker dark:active:bg-gray-800-darker",
        success: "active:bg-primary-100-darker dark:active:bg-gray-800-darker"
      },
      normal: {
        default: "bg-primary-100 hover:bg-primary-100-lighter dark:bg-gray-800 dark:hover:bg-gray-800-lighter dark:hover:text-white",
        primary: " text-white bg-primary-500 hover:bg-primary-500-lighter dark:hover:bg-primary-500-darker",
        accent: "text-white bg-accent-500 hover:bg-accent-500-lighter dark:bg-accent-500-darker dark:bg-accent-300",
        danger: "text-white bg-danger-500 hover:bg-danger-500-lighter dark:hover:bg-danger-500-darker",
        warning: "text-white bg-warning-500 hover:bg-warning-500-lighter dark:hover:bg-warning-500-darker",
        info: "text-info-500 bg-primary-100 hover:bg-primary-100-lighter dark:bg-gray-800 dark:hover:bg-gray-800-lighter",
        success: "text-primary-500 bg-primary-100 hover:bg-primary-100-lighter dark:bg-gray-800 dark:hover:bg-gray-800-lighter"
      },
      flat: {
        default: "hover:bg-primary-100 hover:text-black !dark:text-white dark:hover:bg-primary-800",
        primary: "hover:bg-primary-500 hover:text-white",
        accent: "hover:bg-accent-500 hover:text-white",
        danger: "hover:bg-danger-500 hover:text-white",
        warning: "hover:bg-warning-500 hover:text-white",
        info: "hover:bg-primary-100 hover:text-info-500 dark:hover:bg-gray-800 dark:hover:text-info-400",
        success: "hover:bg-primary-100 hover:text-primary-500 dark:hover:bg-primary-800 dark:hover:text-primary-400"
      },
      outlined: {
        default: "hover:border-primary-100 hover:text-primary-300 hover:active:ring-primary-100:5 hover:active:bg-primary-100:5",
        primary: "hover:border-primary-500 hover:text-primary-500 active:ring-primary-500:5 active:bg-primary-500:5",
        accent: "hover:border-accent-500 hover:text-accent-500 active:ring-accent-500:5 active:bg-accent-500:5",
        danger: "hover:border-danger-500 hover:text-danger-500 active:ring-danger-500:5 active:bg-danger-500:5",
        warning: "hover:border-warning-500 hover:text-warning-500 active:ring-warning-500:5 active:bg-warning-500:5",
        info: "hover:border-info-500 hover:text-info-500 active:ring-info-500:5 active:bg-info-500:5",
        success: "hover:border-primary-500 hover:text-primary-500 active:ring-primary-500:5 active:bg-primary-500:5"
      }
    }, i = q(), p = k(() => e.flat ? a.flat[e.type] : e.outlined ? a.outlined[e.type] : a.normal[e.type]);
    return (c, V) => (u(), w(J(n.value), D(c.$attrs, {
      role: "button",
      "aria-disabled": r.value,
      class: ["$ui-base $ui-inline-fcc inline-flex cursor-pointer select-none gap1.25 py-0 no-underline $ui-transition", [
        [a.common[e.type]],
        {
          "rounded-full": e.round === "full",
          "$ui-base-br": e.round === "normal",
          "opacity-50 cursor-not-allowed": r.value,
          "bg-transparent": e.flat || e.outlined
        },
        [
          c.outlined ? "b-1 $ui-border-base active:ring-3 shadow-sm" : "border-none",
          c.size === "mini" ? "px1 text-3 h5.5" : "px3.5 text-3.5 h8",
          p.value
        ]
      ]],
      onClickCapture: d
    }), {
      default: g(() => [
        c.loading ? (u(), w(te, {
          key: 0,
          class: "mt0.5 h-full w3"
        })) : v(c.$slots, "icon", {
          key: 1,
          class: "h-full w3 $ui-inline-fcc"
        }),
        b(i).default ? (u(), f("div", Te, [
          v(c.$slots, "default")
        ])) : $("", !0),
        v(c.$slots, "icon-right")
      ]),
      _: 3
    }, 16, ["aria-disabled", "class"]));
  }
}), De = {}, Me = { class: "$ui-base border $ui-border-base rounded shadow-sm" };
function Se(l, t) {
  return u(), f("div", Me, [
    v(l.$slots, "default")
  ]);
}
const ut = /* @__PURE__ */ O(De, [["render", Se]]), ct = /* @__PURE__ */ h({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    variant: { default: "normal" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const o = T(l, "modelValue", t);
    return (n, r) => (u(), f("div", {
      class: y(["relative $ui-base h5 w5 $ui-inline-fcc cursor-pointer border-0.125rem rounded-1.25 transition-colors duration-200 ease-in-out", [
        b(o) ? n.variant === "normal" ? "bg-primary-500 border-primary-200 dark:border-primary-100" : "bg-accent-500 border-accent-200 dark:border-accent-100" : ""
      ]]),
      onClick: r[0] || (r[0] = (d) => o.value = !b(o))
    }, [
      m("div", {
        class: y([[
          b(o) ? "opacity-100" : "opacity-0"
        ], "h-60% w-35% transform-translate-y--0.25 transform-rotate-45 border-width-[0_0.125rem_0.125rem_0] border-white border-solid transition-opacity duration-200 ease-in-out"])
      }, null, 2)
    ], 2));
  }
}), I = le();
let K = null;
function Ie(l, t = "text") {
  var s;
  if (!K && !I.value) {
    const o = he();
    K = ye({
      themes: [
        import("shiki/themes/vitesse-dark.mjs"),
        import("shiki/themes/vitesse-light.mjs")
      ],
      langs: [
        import("shiki/langs/json.mjs"),
        import("shiki/langs/yaml.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/javascript.mjs"),
        import("shiki/langs/typescript.mjs"),
        import("shiki/langs/vue.mjs"),
        import("shiki/langs/vue-html.mjs"),
        import("shiki/langs/html.mjs"),
        import("shiki/langs/diff.mjs"),
        import("shiki/langs/shellscript.mjs")
      ],
      engine: o
    }).then((n) => {
      I.value = n;
    });
  }
  const e = (s = I.value) == null ? void 0 : s.getLoadedLanguages().includes(t);
  return e ? {
    code: I.value.codeToHtml(l, {
      lang: t,
      themes: {
        dark: "vitesse-dark",
        light: "vitesse-light"
      }
    }),
    supported: !0
  } : {
    code: l,
    supported: e
  };
}
const Ee = ["innerHTML"], Pe = { class: "shiki" }, ze = ["textContent"], pt = /* @__PURE__ */ h({
  __name: "CodeBlock",
  props: {
    code: {},
    lang: {},
    lines: { type: Boolean, default: !0 },
    transformRendered: {}
  },
  emits: ["loaded"],
  setup(l, { emit: t }) {
    const e = l, s = t, o = k(() => {
      const n = e.lang === "text" ? { code: e.code, supported: !1 } : Ie(e.code, e.lang) || { code: e.code, supported: !1 };
      return n.supported && e.transformRendered && (n.code = e.transformRendered(n.code)), n.supported && H(() => s("loaded")), n;
    });
    return (n, r) => n.lang && o.value.supported ? (u(), f("pre", {
      key: 0,
      class: y(["code-block", n.lines ? "code-block-lines" : ""]),
      innerHTML: o.value.code
    }, null, 10, Ee)) : (u(), f("pre", {
      key: 1,
      class: y(["code-block", n.lines ? "code-block-lines" : ""])
    }, [
      m("pre", Pe, [
        m("code", null, [
          (u(!0), f(E, null, R(n.code.split(`
`), (d, a) => (u(), f(E, { key: a }, [
            m("span", {
              class: "line",
              textContent: B(d)
            }, null, 8, ze),
            r[0] || (r[0] = m("br", null, null, -1))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ h({
  __name: "Overlay",
  props: {
    dim: { type: Boolean },
    blur: { type: Boolean },
    position: { default: "fixed" }
  },
  setup(l) {
    return (t, e) => (u(), f("div", {
      class: y(["left-0 top-0 $ui-z-max h-full w-full $ui-fcc transition-opacity transition-duration-300 $ui-bg-base", [
        t.dim ? "bg-opacity-50!" : "bg-opacity-0!",
        t.blur ? "backdrop-blur-sm" : "",
        t.position
      ]])
    }, [
      v(t.$slots, "default")
    ], 2));
  }
}), Le = { class: "h7.5 w-full $ui-fbc" }, Re = { class: "text-4.5" }, Fe = { class: "content transition-all transition-duration-300" }, He = { class: "footer h8 w-full transition-all transition-duration-300 delay-250" }, Ne = { class: "$ui-fcc" }, je = /* @__PURE__ */ h({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    autoClose: { type: Boolean, default: !0 },
    title: { default: "Dialog" },
    width: { default: "32rem" },
    height: { default: "18rem" },
    closable: { type: Boolean, default: !0 },
    mountTo: { default: "body" },
    dim: { type: Boolean },
    blur: { type: Boolean },
    position: {}
  },
  emits: ["close", "update:modelValue"],
  setup(l, { emit: t }) {
    const e = l, o = T(e, "modelValue", t, { passive: !0 }), n = pe(() => window.document.documentElement);
    P(() => {
      o.value ? n.value = !0 : n.value = !1;
    });
    function r() {
      o.value && e.autoClose && (o.value = !1);
    }
    ee("Escape", () => {
      r();
    });
    const d = S(!1);
    return z(() => d.value = !0), (a, i) => d.value || a.mountTo === "body" ? (u(), w(X, {
      key: 0,
      to: a.mountTo
    }, [
      C(N, {
        "enter-from-class": "opacity-0 [&_.modal]:scale-95 [&_.content,&_.footer]:translate-y--2.5 [&_.content,&_.footer]:opacity-0",
        "enter-to-class": "opacity-100 [&_.modal]:scale-100",
        "leave-from-class": "opacity-100 [&_.modal]:scale-100",
        "leave-to-class": "opacity-0 [&_.modal]:scale-95"
      }, {
        default: g(() => [
          b(o) ? (u(), w(oe, {
            key: 0,
            dim: a.dim,
            blur: a.blur,
            position: a.position
          }, {
            default: g(() => [
              m("div", {
                class: "modal relative grid grid-rows-[1.875rem_1fr_2.5rem] $ui-base max-h-[calc(100vh-6.25rem)] max-w-[calc(100vw-6.25rem)] min-h-6.25rem min-w-12.5rem gap-2.5 rounded-md bg-white px6 py4.5 color-gray-800 shadow-2xl transition-transform transition-duration-300 dark:bg-gray-900 dark:color-gray-200",
                style: j({
                  width: e.width,
                  height: e.height
                })
              }, [
                m("div", Le, [
                  m("div", Re, [
                    v(a.$slots, "title", {}, () => [
                      _(B(e.title), 1)
                    ])
                  ]),
                  a.closable ? (u(), f("div", {
                    key: 0,
                    class: "h6 w6 $ui-fcc cursor-pointer rounded-full transition-colors hover:bg-primary-100 dark:hover:bg-gray-700",
                    onClick: r
                  }, i[0] || (i[0] = [
                    m("div", { class: "i-carbon-close" }, null, -1)
                  ]))) : $("", !0)
                ]),
                m("div", Fe, [
                  v(a.$slots, "default")
                ]),
                m("div", He, [
                  v(a.$slots, "footer", {}, () => [
                    v(a.$slots, "footer", {}, () => [
                      m("div", Ne, [
                        C(M, {
                          type: "primary",
                          onClick: r
                        }, {
                          default: g(() => i[1] || (i[1] = [
                            _(" close ")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ], 4)
            ]),
            _: 3
          }, 8, ["dim", "blur", "position"])) : $("", !0)
        ]),
        _: 3
      })
    ], 8, ["to"])) : $("", !0);
  }
}), xe = { class: "$ui-fec gap2.5" }, mt = /* @__PURE__ */ h({
  __name: "Confirm",
  props: {
    modelValue: { type: Boolean },
    content: {},
    cancelText: { default: "Cancel" },
    confirmText: { default: "Confirm" },
    width: { default: "20%" },
    height: { default: "9rem" },
    title: { default: "Warning" },
    loading: { type: Boolean, default: !1 },
    autoClose: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close"],
  setup(l, { emit: t }) {
    const e = l, s = t, o = T(e, "modelValue", s);
    P(() => {
      o.value || s("close");
    });
    function n(r = !1) {
      (e.autoClose || r) && (o.value = !1);
    }
    return (r, d) => (u(), w(je, {
      modelValue: b(o),
      "onUpdate:modelValue": d[2] || (d[2] = (a) => x(o) ? o.value = a : null),
      width: r.width,
      height: r.height,
      title: r.title,
      closable: !1
    }, {
      footer: g(() => [
        m("div", xe, [
          C(M, {
            onClick: d[0] || (d[0] = () => {
              s("cancel"), n(!0);
            })
          }, {
            default: g(() => [
              _(B(r.cancelText), 1)
            ]),
            _: 1
          }),
          C(M, {
            loading: r.loading,
            type: "primary",
            onClick: d[1] || (d[1] = () => {
              s("confirm"), n();
            })
          }, {
            default: g(() => [
              _(B(r.confirmText), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      default: g(() => [
        v(r.$slots, "default", { class: "h-auto w-auto" }, () => [
          _(B(r.content), 1)
        ])
      ]),
      _: 3
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}), Ae = /* @__PURE__ */ h({
  __name: "Notification",
  props: {
    message: {},
    type: { default: "info" },
    classes: {},
    duration: { default: 3e3 },
    placement: { default: "top-center" },
    onClose: {}
  },
  setup(l) {
    const t = l, e = {
      success: "i-carbon-checkmark",
      info: "i-material-symbols-light-info",
      warning: "i-carbon-warning",
      error: "i-carbon-close"
    }, s = {
      success: "text-primary-500 border-primary-200 dark:text-primary-200 dark:border-primary-500",
      info: "text-blue-4 border-blue-2 dark:text-blue-2 dark:border-blue-4",
      warning: "text-amber-4 border-amber-2 dark:border-amber-4",
      error: "text-red-4 border-red-2 dark:border-red-4"
    }, o = S(!1);
    z(() => {
      o.value = !0, setTimeout(() => {
        o.value = !1;
      }, t.duration);
    });
    const n = k(() => t.placement.startsWith("top") ? "translate-y--300%" : "translate-y-300%");
    return (r, d) => (u(), f("div", {
      class: y(["fixed left-0 right-0 $ui-z-max-override text-center", [
        { "top-0": r.placement.startsWith("top") },
        { "bottom-0": r.placement.startsWith("bottom") }
      ]])
    }, [
      C(N, {
        "enter-from-class": n.value,
        "leave-to-class": n.value,
        onAfterLeave: d[0] || (d[0] = () => {
          var a;
          o.value || (a = r.onClose) == null || a.call(r);
        })
      }, {
        default: g(() => [
          o.value ? (u(), f("div", {
            key: 0,
            class: "flex transition-all duration-300",
            style: j({ justifyContent: r.placement.includes("right") ? "right" : r.placement.includes("left") ? "left" : "center" })
          }, [
            m("div", {
              class: y(["m3 flex-inline items-center gap2 b-1 b-1 rounded px4 py1 shadow transition-all duration-300 $ui-bg-base", [r.classes, s[r.type]]])
            }, [
              m("div", {
                class: y(e[r.type])
              }, null, 2),
              m("div", null, B(r.message), 1)
            ], 2)
          ], 4)) : $("", !0)
        ]),
        _: 1
      }, 8, ["enter-from-class", "leave-to-class"])
    ], 2));
  }
});
function ft(l) {
  const t = document.createElement("div");
  t.classList.add("$ui-z-max-override", "fixed"), document.body.appendChild(t);
  const e = l.onClose;
  function s() {
    U(null, t);
  }
  l.onClose = () => {
    s(), e == null || e(), document.body.removeChild(t);
  };
  const o = se(Ae, l);
  U(o, t);
}
const Oe = "__vue-devtools-theme__";
function We(l = {}) {
  const t = me({
    ...l,
    storageKey: Oe
  });
  return {
    colorMode: t,
    isDark: k(() => t.value === "dark")
  };
}
const Ue = { class: "$ui-dark-toggle-vtr" }, gt = /* @__PURE__ */ h({
  __name: "DarkToggle",
  props: {
    isDark: { type: Boolean, default: !1 },
    animation: { type: Boolean, default: !0 },
    animationDuration: { default: 400 }
  },
  setup(l) {
    const t = l, e = T(t, "isDark"), { colorMode: s } = We({
      initialValue: e.value ? "dark" : "light",
      onChanged: (d) => {
        e.value = d === "dark";
      }
    }), o = k({
      get: () => s.value === "dark",
      set: (d) => s.value = d ? "dark" : "light"
    }), n = !!document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function r(d) {
      if (!n || !d || !t.animation) {
        o.value = !o.value;
        return;
      }
      const a = d.clientX, i = d.clientY, p = Math.hypot(
        Math.max(a, innerWidth - a),
        Math.max(i, innerHeight - i)
      );
      document.startViewTransition(async () => {
        o.value = !o.value, await H();
      }).ready.then(() => {
        const V = [
          `circle(0px at ${a}px ${i}px)`,
          `circle(${p}px at ${a}px ${i}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: o.value ? [...V].reverse() : V
          },
          {
            duration: t.animationDuration,
            easing: "ease-in",
            pseudoElement: o.value ? "::view-transition-old(root)" : "::view-transition-new(root)"
          }
        );
      });
    }
    return (d, a) => (u(), f("span", Ue, [
      v(d.$slots, "default", G(Q({ mode: b(s), isDark: o.value, toggle: r })))
    ]));
  }
}), vt = /* @__PURE__ */ h({
  __name: "Drawer",
  props: {
    modelValue: { type: Boolean },
    mountTo: { default: "body" },
    placement: { default: "right" },
    closeOutside: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !0 },
    contentClass: {},
    permanent: { type: Boolean, default: !1 },
    contentBlur: { type: Boolean, default: !1 },
    top: {},
    dim: { type: Boolean },
    blur: { type: Boolean },
    position: {}
  },
  emits: ["update:modelValue", "close"],
  setup(l, { emit: t }) {
    const e = l, s = t, { height: o } = fe(() => typeof e.top == "string" ? document.querySelector(e.top) : e.top, void 0, { box: "border-box" }), n = T(e, "modelValue", s), r = {
      left: {
        class: "left-0 h-full b-r",
        transition: "[&_.drawer]:translate-x--100%"
      },
      right: {
        class: "right-0 h-full b-l",
        transition: "[&_.drawer]:translate-x-full"
      },
      top: {
        class: "w-full b-b",
        transition: "[&_.drawer]:translate-y--100%"
      },
      bottom: {
        class: "bottom-0 w-full b-t",
        transition: "[&_.drawer]:translate-y-100%"
      }
    };
    ee("Escape", () => {
      e.closable && (n.value = !1);
    });
    const d = k(() => r[e.placement]), a = S(!1);
    return z(() => a.value = !0), (i, p) => a.value || i.mountTo === "body" ? (u(), w(X, {
      key: 0,
      to: i.mountTo
    }, [
      C(N, {
        "enter-from-class": `${d.value.transition}`,
        "leave-to-class": `${d.value.transition}`
      }, {
        default: g(() => [
          b(n) ? (u(), w(oe, {
            key: 0,
            class: y({
              "pointer-events-none": i.permanent
            }),
            dim: i.dim,
            blur: i.blur,
            position: i.position,
            onClick: p[2] || (p[2] = (c) => i.closeOutside && i.closable && (n.value = !1))
          }, {
            default: g(() => [
              m("div", {
                class: y([[d.value.class, i.contentClass ?? "", i.contentBlur ? "$ui-glass-effect" : "$ui-bg-base"], "drawer pointer-events-auto absolute min-w-25 of-auto $ui-border-base transition-transform transition-duration-300"]),
                style: j({
                  top: i.placement === "bottom" ? "auto" : `${b(o)}px`,
                  height: ["top", "bottom"].includes(i.placement) ? "auto" : `calc(100% - ${b(o)}px)`
                }),
                onClick: p[1] || (p[1] = ie(() => {
                }, ["stop"]))
              }, [
                i.closable ? (u(), f("div", {
                  key: 0,
                  class: "i-carbon-close absolute right-1.5 top-1.5 $ui-z-max cursor-pointer p1 text-lg $ui-text",
                  onClick: p[0] || (p[0] = (c) => n.value = !1)
                })) : $("", !0),
                v(i.$slots, "default")
              ], 6)
            ]),
            _: 3
          }, 8, ["class", "dim", "blur", "position"])) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ], 8, ["to"])) : $("", !0);
  }
}), Ke = { class: "overflow-hidden rounded-lg shadow-lg" }, Ye = /* @__PURE__ */ h({
  __name: "Dropdown",
  props: {
    label: {},
    buttonProps: { default: () => ({}) },
    buttonClass: { default: "" },
    trigger: { default: "click" },
    distance: { default: 0 },
    skidding: {},
    placement: {},
    disabled: { type: Boolean, default: !1 },
    shown: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(l) {
    const t = l;
    return de("$ui-dropdown-disabled", k(() => t.disabled)), (e, s) => (u(), w(b(ae), {
      disabled: e.disabled,
      class: "inline-block w-auto",
      shown: e.shown,
      triggers: [e.trigger],
      distance: e.distance + 6,
      placement: e.placement,
      skidding: e.skidding,
      "onUpdate:shown": s[0] || (s[0] = (o) => e.$emit("update:visible", o)),
      onClick: s[1] || (s[1] = (o) => {
        o.stopPropagation();
      })
    }, {
      popper: g(({ hide: o }) => [
        m("div", Ke, [
          v(e.$slots, "popper", G(Q({ hide: o })), () => [
            s[2] || (s[2] = m("div", { class: "p2 opacity-40" }, " Empty... ", -1))
          ])
        ])
      ]),
      default: g(() => [
        v(e.$slots, "default", {}, () => [
          C(M, D({
            ...e.buttonProps,
            disabled: e.disabled
          }, { class: e.buttonClass }), Z({
            icon: g(() => [
              v(e.$slots, "button-icon")
            ]),
            "icon-right": g(() => [
              v(e.$slots, "button-icon-right")
            ]),
            _: 2
          }, [
            e.label ? {
              name: "default",
              fn: g(() => [
                _(B(e.label), 1)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["class"])
        ])
      ]),
      _: 3
    }, 8, ["disabled", "shown", "triggers", "distance", "placement", "skidding"]));
  }
}), bt = /* @__PURE__ */ h({
  __name: "DropdownButton",
  props: {
    type: {},
    round: { type: [String, Boolean] },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    size: {},
    flat: { type: Boolean },
    outlined: { type: Boolean },
    keepOpen: { type: Boolean, default: !1 }
  },
  setup(l) {
    const t = l, e = ue("$ui-dropdown-disabled", void 0);
    return (s, o) => A((u(), w(M, D({
      ...t,
      round: !1
    }, {
      disabled: b(e),
      class: "w-full justify-start transition-colors not-action:bg-transparent!"
    }), {
      icon: g(() => [
        v(s.$slots, "icon")
      ]),
      default: g(() => [
        v(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"])), [
      [b(Y)]
    ]);
  }
}), F = /* @__PURE__ */ h({
  __name: "Icon",
  props: {
    icon: {},
    inline: { type: Boolean },
    action: { type: Boolean, default: !1 }
  },
  setup(l) {
    return (t, e) => (u(), w(J(t.inline ? "span" : "div"), {
      class: y(["$ui-base", [t.icon, t.action ? "cursor-pointer hover:op50" : ""]])
    }, null, 8, ["class"]));
  }
}), qe = ["type", "placeholder", "disabled"], Je = {
  key: 3,
  class: "pointer-events-none absolute bottom--0.25 left-50% right-50% z-9999 h-0.75 bg-primary-500 opacity-0 transition-all duration-240 group-[&.focused]:left-0 group-[&.focused]:right-0 group-[&.focused]:opacity-100 group-[&.accent.focused]:bg-accent-500"
}, L = "transition-colors $ui-fcc color-gray-500 dark:color-gray-300 group-[&.focused]:color-primary-500; group-[&.accent.focused]:color-accent-500", Xe = /* @__PURE__ */ h({
  __name: "Input",
  props: {
    modelValue: {},
    placeholder: { default: "" },
    variant: { default: "normal" },
    disabled: { type: Boolean, default: !1 },
    leftIcon: {},
    rightIcon: {},
    loading: { type: Boolean, default: !1 },
    autoFocus: { type: Boolean, default: !1 },
    loadingDebounceTime: { default: 0 },
    readonly: { type: Boolean, default: !1 },
    type: { default: "text" }
  },
  emits: ["update:modelValue", "updateFocused", "keyTab"],
  setup(l, { emit: t }) {
    const e = l, s = t, o = T(e, "modelValue", s), n = ge(k(() => e.loading), e.loadingDebounceTime), r = ve(!1, {
      onChanged(c) {
        s("updateFocused", c);
      }
    }), d = k(() => e.variant === "flat" || e.variant === "warning" || e.disabled || e.readonly), a = k(() => e.disabled || n.value), i = S();
    let p = !1;
    return P(() => {
      n.value && r.value ? p = !0 : !n.value && p && (p = !1, H(() => {
        r.value = !0;
      }));
    }), z(() => {
      e.autoFocus && (r.value = !0);
    }), P(() => {
      var c;
      r.value && ((c = i.value) == null || c.focus());
    }), (c, V) => (u(), f("div", {
      class: y(["group relative w-50 w-auto flex items-center justify-between gap-0.5 overflow-hidden b-1 rounded-1 px3 py-0.75 color-gray-800 dark:color-gray-100", [
        {
          "border-none bg-transparent group": c.variant === "flat",
          "cursor-not-allowed opacity-50": a.value,
          accent: c.variant === "accent",
          focused: b(r)
        },
        [
          c.variant === "warning" ? "border-warning-500 dark:border-warning-300" : "border-primary-100 dark:border-gray-700"
        ]
      ]]),
      onClick: V[2] || (V[2] = () => {
        r.value = !0;
      })
    }, [
      c.leftIcon ? (u(), f("div", {
        key: 0,
        class: y(L)
      }, [
        C(F, { icon: c.leftIcon }, null, 8, ["icon"])
      ])) : $("", !0),
      A(m("input", {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": V[0] || (V[0] = (W) => x(o) ? o.value = W : null),
        class: "$ui-base w-full bg-transparent color-inherit outline-none placeholder-color-gray-500 dark:placeholder-gray-300",
        type: c.type,
        placeholder: c.placeholder,
        disabled: a.value || c.readonly,
        onBlur: V[1] || (V[1] = (W) => r.value = !1)
      }, null, 40, qe), [
        [ce, b(o)]
      ]),
      b(n) ? (u(), f("div", {
        key: 1,
        class: y(L)
      }, [
        C(te)
      ])) : c.rightIcon ? (u(), f("div", {
        key: 2,
        class: y(L)
      }, [
        C(F, { icon: c.rightIcon }, null, 8, ["icon"])
      ])) : $("", !0),
      d.value ? $("", !0) : (u(), f("div", Je))
    ], 2));
  }
}), Ge = { class: "$ui-base" }, yt = /* @__PURE__ */ h({
  __name: "FormField",
  props: {
    modelValue: {},
    status: { default: "normal" },
    showMessage: { type: Boolean, default: !0 },
    message: { default: "" },
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const e = l, o = T(e, "modelValue", t), n = S(!1), r = k(() => e.message && e.message.length && e.showMessage), d = {
      normal: "color-gray-600 dark:color-gray-400",
      warning: "color-warning-500 dark:color-warning-200",
      danger: "color-danger-500 dark:color-danger-200",
      success: "color-primary-700 dark:color-primary-500"
    }, a = {
      warning: "i-bx:bxs-error",
      danger: "i-ic-round-error",
      success: "i-ep:success-filled"
    };
    return (i, p) => (u(), f("div", Ge, [
      C(Xe, {
        modelValue: b(o),
        "onUpdate:modelValue": p[0] || (p[0] = (c) => x(o) ? o.value = c : null),
        placeholder: i.placeholder,
        onUpdateFocused: p[1] || (p[1] = (c) => n.value = c)
      }, null, 8, ["modelValue", "placeholder"]),
      m("div", {
        class: y(["mt2 $ui-base text-3.5", [
          d[i.status],
          { "opacity-65": !n.value }
        ]])
      }, [
        i.status !== "normal" && r.value ? (u(), w(F, {
          key: 0,
          inline: "",
          icon: a[i.status]
        }, null, 8, ["icon"])) : $("", !0),
        _(" " + B(r.value ? i.message : ""), 1)
      ], 2)
    ]));
  }
}), Qe = ["innerHTML"], ht = /* @__PURE__ */ h({
  __name: "IcIcon",
  props: {
    name: {}
  },
  setup(l) {
    const t = l, e = k(() => ke[t.name] ?? "");
    return (s, o) => (u(), f("div", null, [
      (u(), f("svg", {
        class: "custom-svg h-1em w-1em",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        innerHTML: e.value
      }, null, 8, Qe))
    ]));
  }
}), Ze = { class: "m1 min-w-35 w-auto flex flex-col" }, et = ["onClick"], kt = /* @__PURE__ */ h({
  __name: "Select",
  props: {
    modelValue: {},
    multiple: { default: !1 },
    options: {},
    placeholder: { default: "Select..." },
    autoClose: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    labelRenderer: { type: Function, default: (l) => String(l) },
    buttonProps: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const e = l, s = t, o = q(), n = k({
      get: () => e.modelValue,
      set: (a) => s("update:modelValue", a)
    }), r = k(() => {
      const a = e.options.find((i) => i.value === n.value);
      return a != null && a.label ? e.labelRenderer(a.label) : e.placeholder;
    });
    function d(a) {
      e.multiple ? n.value = n.value.includes(a.value) ? n.value.filter((i) => i !== a.value) : [...n.value, a.value] : n.value = a.value;
    }
    return (a, i) => (u(), w(Ye, D({ label: r.value }, {
      buttonProps: a.buttonProps,
      disabled: a.disabled
    }), Z({
      popper: g(() => [
        m("div", Ze, [
          b(o).item ? (u(!0), f(E, { key: 0 }, R(a.options, (p) => (u(), f("div", {
            key: p.value,
            class: "cursor-pointer",
            onClick: (c) => d(p)
          }, [
            v(a.$slots, "item", D({ ref_for: !0 }, {
              item: p,
              active: a.multiple ? n.value.includes(p.value) : p.value === n.value,
              disabled: a.disabled
            }))
          ], 8, et))), 128)) : (u(!0), f(E, { key: 1 }, R(a.options, (p) => A((u(), w(M, {
            key: p.value,
            disabled: a.disabled,
            round: "normal",
            class: y(["flex-[auto_1_1] not-hover:[&:not(.active)]:bg-transparent!", {
              active: a.multiple ? n.value.includes(p.value) : p.value === n.value
            }]),
            onClick: (c) => d(p)
          }, {
            default: g(() => [
              _(B(p.label), 1)
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onClick"])), [
            [b(Y), a.autoClose]
          ])), 128))
        ])
      ]),
      "button-icon-right": g(() => [
        i[0] || (i[0] = m("div", { class: "i-mdi-chevron-down" }, null, -1))
      ]),
      _: 2
    }, [
      b(o).button ? {
        name: "default",
        fn: g(() => [
          v(a.$slots, "button")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["label"]));
  }
}), wt = /* @__PURE__ */ h({
  __name: "Switch",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const o = T(l, "modelValue", t), n = be(o);
    return (r, d) => (u(), f("div", {
      class: y([[
        r.disabled ? "cursor-not-allowed" : "cursor-pointer"
      ], "$ui-base $ui-if-sc cursor-pointer select-none gap1.25 vertical-mid text-3.5"]),
      role: "checkbox",
      onClick: d[0] || (d[0] = (a) => !r.disabled && b(n)())
    }, [
      v(r.$slots, "default"),
      m("div", {
        class: y([{
          selected: b(o)
        }, "group relative $ui-base h4 w8 rounded-2 bg-primary-100 transition-colors dark:bg-gray-700 [&.selected]:bg-primary-500!"])
      }, [
        m("div", {
          class: y(["h4 w4 rounded-full bg-primary-800 transition-transform group-[&.selected]:transform-translate-x-4 dark:bg-white", [
            { "group-hover:opacity-75 group-active:scale-85": !r.disabled },
            { "opacity-65": r.disabled }
          ]])
        }, null, 2)
      ], 2)
    ], 2));
  }
}), $t = /* @__PURE__ */ h({
  __name: "Tooltip",
  props: {
    trigger: {},
    distance: {},
    skidding: {},
    placement: {},
    disabled: { type: Boolean },
    shown: { type: Boolean }
  },
  setup(l) {
    return (t, e) => (u(), w(b(re), D({
      disabled: t.disabled,
      placement: t.placement
    }, t.$attrs), {
      popper: g(() => [
        v(t.$slots, "popper")
      ]),
      default: g(() => [
        v(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled", "placement"]));
  }
});
export {
  Oe as THEME_KEY,
  dt as VueBadge,
  M as VueButton,
  ut as VueCard,
  ct as VueCheckbox,
  pt as VueCodeBlock,
  mt as VueConfirm,
  gt as VueDarkToggle,
  je as VueDialog,
  vt as VueDrawer,
  Ye as VueDropdown,
  bt as VueDropdownButton,
  yt as VueFormField,
  ht as VueIcIcon,
  F as VueIcon,
  Xe as VueInput,
  te as VueLoadingIndicator,
  Ae as VueNotification,
  oe as VueOverlay,
  kt as VueSelect,
  wt as VueSwitch,
  $t as VueTooltip,
  ft as showVueNotification,
  We as useDevToolsColorMode,
  Bt as vTooltip
};
