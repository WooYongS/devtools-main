import { defineComponent as Z, withDirectives as q, createElementBlock as h, openBlock as d, normalizeStyle as Ee, unref as r, createTextVNode as Q, toDisplayString as ie, mergeModels as Ae, useModel as Xe, Fragment as se, renderList as de, normalizeClass as ae, createBlock as B, inject as he, toValue as Y, ref as R, computed as E, h as sn, provide as _e, createElementVNode as c, renderSlot as Qe, createCommentVNode as j, isRef as Ge, shallowRef as we, readonly as an, onMounted as Vt, nextTick as Ze, watch as te, getCurrentScope as rn, onScopeDispose as un, getCurrentInstance as et, reactive as gt, toRaw as Nt, createVNode as y, mergeProps as Se, withModifiers as ve, withCtx as H, watchEffect as tt, onUnmounted as ke, vShow as cn, createStaticVNode as dn } from "vue";
import { vTooltip as J, VueButton as fe, VueIcon as ue, VueDropdown as pn, VueDropdownButton as Ct, VueInput as ge, VueIcIcon as Ke, VueCodeBlock as fn, VueDialog as vn, VueSwitch as mn, VueSelect as hn } from "@vue/devtools-ui";
import { isPlainObject as gn, UNDEFINED as Rt, NAN as Cn, INFINITY as _n, NEGATIVE_INFINITY as yn, getRaw as Dt, toSubmit as Be, formatInspectorStateValue as xn, getInspectorStateValueType as _t, escape as bn, toEdit as wn, parse as oe } from "@vue/devtools-kit";
import { rpc as D, useDevToolsState as Pt, DevToolsMessagingEvents as X, onRpcConnected as Me } from "@vue/devtools-core";
import { Splitpanes as Le, Pane as pe } from "splitpanes";
import { isArray as yt, isObject as xt, sortByKey as At, isInSeparateWindow as kn, isInChromePanel as bt } from "@vue/devtools-shared";
import { debounce as In } from "perfect-debounce";
import { RecycleScroller as $n } from "vue-virtual-scroller";
import { flatten as Sn, groupBy as Tn } from "lodash-es";
function wt(n) {
  return n.toString(16).padStart(6, "0");
}
function En(n, e) {
  const o = new Date(n);
  return `${o.toString().match(/\d\d:\d\d:\d\d/)[0]}${e === "ms" ? `.${String(o.getMilliseconds()).padStart(3, "0")}` : ""}`;
}
function Vn(n, e) {
  const o = /* @__PURE__ */ new Map(), t = Lt(n, e.toLowerCase(), o, 0);
  return o.clear(), t;
}
const Mt = 10;
function Lt(n, e, o, t) {
  if (t > Mt)
    return !1;
  let l = !1;
  const s = Object.keys(n);
  let p, i;
  for (let a = 0; a < s.length && (p = s[a], i = n[p], l = Ht(e, p, i, o, t + 1), !l); a++)
    ;
  return l;
}
function Ht(n, e, o, t, l) {
  let s = !1, p;
  return e === "_custom" && (e = o.display, o = o.value), (p = Nn(o)) && (o = p), e && kt(e, n) ? (s = !0, t.set(o, !0)) : t.has(o) ? s = t.get(o) : Array.isArray(o) ? (t.set(o, null), s = Rn(o, n, t, l), t.set(o, s)) : gn(o) ? (t.set(o, null), s = Lt(o, n, t, l), t.set(o, s)) : kt(o, n) && (s = !0, t.set(o, !0)), s;
}
function kt(n, e) {
  return `${n}`.toLowerCase().includes(e);
}
function Nn(n) {
  return n === null ? "null" : n === Rt ? "undefined" : n === Cn ? "NaN" : n === _n ? "Infinity" : n === yn ? "-Infinity" : !1;
}
function Rn(n, e, o, t) {
  if (t > Mt)
    return !1;
  let l = !1, s;
  for (let p = 0; p < n.length && (s = n[p], l = Ht(e, null, s, o, t + 1), !l); p++)
    ;
  return l;
}
function nt(n) {
  const { state: e, filterKey: o, processGroup: t } = n;
  if (!o || !o.trim().length)
    return e;
  const l = {};
  for (const s in e) {
    const i = e[s].filter((a) => Vn({
      // @ts-expect-error typing weak
      [a.key]: a.value
    }, o));
    i.length && (l[s] = t ? t(i) : i);
  }
  return l;
}
const Ut = /* @__PURE__ */ Z({
  __name: "NodeTag",
  props: {
    tag: {}
  },
  setup(n) {
    return (e, o) => q((d(), h("span", {
      style: Ee({
        color: `#${r(wt)(e.tag.textColor)}`,
        backgroundColor: `#${r(wt)(e.tag.backgroundColor)}`
      }),
      class: "ml-2 rounded-sm px-1 text-[0.75rem] leading-snug"
    }, [
      Q(ie(e.tag.label), 1)
    ], 4)), [
      [r(J), {
        content: e.tag.tooltip,
        html: !0
      }]
    ]);
  }
}), Dn = { class: "p2" }, Pn = ["onClick"], An = /* @__PURE__ */ Z({
  __name: "SelectiveList",
  props: /* @__PURE__ */ Ae({
    data: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ae(["select"], ["update:modelValue"]),
  setup(n, { emit: e }) {
    const o = e, t = Xe(n, "modelValue");
    function l(s) {
      t.value = s, o("select", s);
    }
    return (s, p) => (d(), h("ul", Dn, [
      (d(!0), h(se, null, de(s.data, (i) => (d(), h("li", {
        key: i.id,
        class: ae(["selectable-item", { active: i.id === t.value }]),
        onClick: (a) => l(i.id)
      }, [
        Q(ie(i.label) + " ", 1),
        (d(!0), h(se, null, de(i.tags, (a, f) => (d(), B(Ut, {
          key: f,
          tag: a
        }, null, 8, ["tag"]))), 128))
      ], 10, Pn))), 128))
    ]));
  }
}), ot = Symbol("VirtualRouteKey"), Ot = Symbol("VirtualRoutesKey");
function lt(n, e) {
  const o = (e == null ? void 0 : e.defaultRoutePath) ?? Y(n)[0].path, t = R({
    path: o
  }), l = E(() => Y(n)), s = E(() => t.value.path), p = Z({
    setup() {
      return () => {
        const a = l.value.find((f) => f.path === s.value);
        return a ? sn(a.component) : null;
      };
    }
  });
  function i() {
    t.value.path = o;
  }
  return _e(ot, t), _e(Ot, l), { VirtualRouterView: p, restoreRouter: i };
}
function He() {
  const n = he(ot);
  return {
    push(e) {
      n.value.path = e;
    }
  };
}
function Mn() {
  const n = he(Ot), e = he(ot);
  return {
    routes: n,
    currentRoute: e
  };
}
const Ln = {
  border: "b base",
  class: "flex items-center justify-between px3"
}, Hn = ["href"], Un = ["href"], Ve = /* @__PURE__ */ Z({
  __name: "DevToolsHeader",
  props: {
    githubRepoLink: {},
    docLink: {}
  },
  setup(n) {
    const e = He();
    return (o, t) => (d(), h("div", Ln, [
      c("div", null, [
        Qe(o.$slots, "default", {}, () => [
          c("i", {
            class: "i-ep:back cursor-pointer op70 text-base hover:op100",
            onClick: t[0] || (t[0] = (l) => r(e).push("/"))
          })
        ])
      ]),
      c("div", null, [
        c("a", {
          class: "pr2",
          href: o.docLink,
          target: "_blank",
          title: "View Documentation"
        }, t[1] || (t[1] = [
          c("i", { class: "i-clarity:document-line cursor-pointer op70 text-base hover:op100" }, null, -1)
        ]), 8, Hn),
        o.githubRepoLink ? (d(), h("a", {
          key: 0,
          href: o.githubRepoLink,
          target: "_blank",
          title: "Star on GitHub"
        }, t[2] || (t[2] = [
          c("i", { class: "i-mdi:github cursor-pointer op70 text-base hover:op100" }, null, -1)
        ]), 8, Un)) : j("", !0)
      ])
    ]));
  }
}), xe = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [t, l] of e)
    o[t] = l;
  return o;
}, On = {}, jn = { class: "h-full flex flex-col items-center justify-center op50" };
function zn(n, e) {
  return d(), h("div", jn, [
    e[0] || (e[0] = c("i", { class: "i-lets-icons:blank-light" }, null, -1)),
    c("span", null, [
      Qe(n.$slots, "default")
    ])
  ]);
}
const Te = /* @__PURE__ */ xe(On, [["render", zn]]), Bn = { class: "flex gap3" }, Fn = ["onClick"], Ne = /* @__PURE__ */ Z({
  __name: "Navbar",
  setup(n) {
    const { routes: e, currentRoute: o } = Mn(), t = He();
    return (l, s) => (d(), h("ul", Bn, [
      (d(!0), h(se, null, de(r(e), (p, i) => (d(), h("li", {
        key: i,
        class: ae(["h-10 flex cursor-pointer items-center justify-center border-b-[2px] border-solid text-size-sm leading-none hover:op100", r(o).path === p.path ? "op-100 font-medium text-primary-400 border-primary-400" : "border-transparent op-70"]),
        onClick: (a) => r(t).push(p.path)
      }, ie(p.name), 11, Fn))), 128))
    ]));
  }
}), st = /* @__PURE__ */ Z({
  __name: "ToggleExpanded",
  props: {
    value: { type: Boolean }
  },
  setup(n) {
    return (e, o) => (d(), h("i", {
      class: ae(["i-radix-icons:triangle-right flex-none text-4 op-50 transition-base", {
        "transform rotate-90": e.value
      }])
    }, null, 2));
  }
}), jt = Symbol("StateEditorSymbol");
function Zn(n) {
  const e = R(n);
  return _e(jt, e), {
    context: e
  };
}
function at() {
  return he(jt);
}
function Kn() {
  const n = R(""), e = R("string"), o = R(!1), t = at();
  return {
    editingText: n,
    editing: o,
    toggleEditing(l) {
      l && (e.value = l), o.value = !o.value;
    },
    editingType: e,
    nodeId: E(() => t.value.nodeId)
  };
}
function Gn(n, e) {
  if (n === "array")
    return e.length;
  const o = "newProp";
  let t = 1;
  for (; ; ) {
    const l = `${o}${t}`;
    if (!e[l])
      return l;
    t++;
  }
}
function Wn() {
  const n = R({
    enable: !1,
    key: "",
    value: "undefined"
  });
  function e(t, l) {
    const s = Gn(t, l);
    n.value = {
      enable: !0,
      key: s.toString(),
      value: "undefined"
    };
  }
  function o() {
    n.value = {
      enable: !1,
      key: "",
      value: "undefined"
    };
  }
  return {
    addNewProp: e,
    resetDrafting: o,
    draftingNewProp: n
  };
}
const zt = "expanded-state";
function Ce(n = "") {
  const e = R([]);
  return _e(`${zt}-${n}`, e), {
    expanded: e
  };
}
function it(n = "") {
  const e = he(`${zt}-${n}`, R([]));
  function o(t) {
    const l = e.value.indexOf(t);
    l === -1 ? e.value.push(t) : e.value.splice(l, 1);
  }
  return {
    expanded: e,
    toggleExpanded: o
  };
}
function rt(n) {
  return rn() ? (un(n), !0) : !1;
}
const ut = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qn = (n) => typeof n < "u", Jn = Object.prototype.toString, Yn = (n) => Jn.call(n) === "[object Object]", Je = () => {
};
function Bt(n, e) {
  function o(...t) {
    return new Promise((l, s) => {
      Promise.resolve(n(() => e.apply(this, t), { fn: e, thisArg: this, args: t })).then(l).catch(s);
    });
  }
  return o;
}
const Xn = (n) => n();
function Ft(n, e = {}) {
  let o, t, l = Je;
  const s = (a) => {
    clearTimeout(a), l(), l = Je;
  };
  let p;
  return (a) => {
    const f = Y(n), v = Y(e.maxWait);
    return o && s(o), f <= 0 || v !== void 0 && v <= 0 ? (t && (s(t), t = null), Promise.resolve(a())) : new Promise((u, C) => {
      l = e.rejectOnCancel ? C : u, p = a, v && !t && (t = setTimeout(() => {
        o && s(o), t = null, u(p());
      }, v)), o = setTimeout(() => {
        t && s(t), t = null, u(a());
      }, f);
    });
  };
}
function It(n, e = !1, o = "Timeout") {
  return new Promise((t, l) => {
    setTimeout(e ? () => l(o) : t, n);
  });
}
function Qn(n) {
  let e;
  function o() {
    return e || (e = n()), e;
  }
  return o.reset = async () => {
    const t = e;
    e = void 0, t && await t;
  }, o;
}
function eo(n) {
  return et();
}
function Fe(n) {
  return Array.isArray(n) ? n : [n];
}
function $t(n, e = 200, o = {}) {
  return Bt(
    Ft(e, o),
    n
  );
}
function to(n, e, o = {}) {
  const {
    eventFilter: t = Xn,
    ...l
  } = o;
  return te(
    n,
    Bt(
      t,
      e
    ),
    l
  );
}
function no(n, e = !0, o) {
  eo() ? Vt(n, o) : e ? n() : Ze(n);
}
function Ye(n, e = !1) {
  function o(u, { flush: C = "sync", deep: T = !1, timeout: k, throwOnTimeout: g } = {}) {
    let $ = null;
    const V = [new Promise((x) => {
      $ = te(
        n,
        (P) => {
          u(P) !== e && ($ ? $() : Ze(() => $ == null ? void 0 : $()), x(P));
        },
        {
          flush: C,
          deep: T,
          immediate: !0
        }
      );
    })];
    return k != null && V.push(
      It(k, g).then(() => Y(n)).finally(() => $ == null ? void 0 : $())
    ), Promise.race(V);
  }
  function t(u, C) {
    if (!Ge(u))
      return o((P) => P === u, C);
    const { flush: T = "sync", deep: k = !1, timeout: g, throwOnTimeout: $ } = C ?? {};
    let z = null;
    const x = [new Promise((P) => {
      z = te(
        [n, u],
        ([F, K]) => {
          e !== (F === K) && (z ? z() : Ze(() => z == null ? void 0 : z()), P(F));
        },
        {
          flush: T,
          deep: k,
          immediate: !0
        }
      );
    })];
    return g != null && x.push(
      It(g, $).then(() => Y(n)).finally(() => (z == null || z(), Y(n)))
    ), Promise.race(x);
  }
  function l(u) {
    return o((C) => !!C, u);
  }
  function s(u) {
    return t(null, u);
  }
  function p(u) {
    return t(void 0, u);
  }
  function i(u) {
    return o(Number.isNaN, u);
  }
  function a(u, C) {
    return o((T) => {
      const k = Array.from(T);
      return k.includes(u) || k.includes(Y(u));
    }, C);
  }
  function f(u) {
    return v(1, u);
  }
  function v(u = 1, C) {
    let T = -1;
    return o(() => (T += 1, T >= u), C);
  }
  return Array.isArray(Y(n)) ? {
    toMatch: o,
    toContains: a,
    changed: f,
    changedTimes: v,
    get not() {
      return Ye(n, !e);
    }
  } : {
    toMatch: o,
    toBe: t,
    toBeTruthy: l,
    toBeNull: s,
    toBeNaN: i,
    toBeUndefined: p,
    changed: f,
    changedTimes: v,
    get not() {
      return Ye(n, !e);
    }
  };
}
function Zt(n) {
  return Ye(n);
}
function oo(n, e, o = {}) {
  const {
    immediate: t = !0,
    immediateCallback: l = !1
  } = o, s = we(!1);
  let p = null;
  function i() {
    p && (clearTimeout(p), p = null);
  }
  function a() {
    s.value = !1, i();
  }
  function f(...v) {
    l && n(), i(), s.value = !0, p = setTimeout(() => {
      s.value = !1, p = null, n(...v);
    }, Y(e));
  }
  return t && (s.value = !0, ut && f()), rt(a), {
    isPending: an(s),
    start: f,
    stop: a
  };
}
function Kt(n = !1, e = {}) {
  const {
    truthyValue: o = !0,
    falsyValue: t = !1
  } = e, l = Ge(n), s = R(n);
  function p(i) {
    if (arguments.length)
      return s.value = i, s.value;
    {
      const a = Y(o);
      return s.value = s.value === a ? Y(t) : a, s.value;
    }
  }
  return l ? p : [s, p];
}
function Gt(n, e, o = {}) {
  const {
    debounce: t = 0,
    maxWait: l = void 0,
    ...s
  } = o;
  return to(
    n,
    e,
    {
      ...s,
      eventFilter: Ft(t, { maxWait: l })
    }
  );
}
function lo(n, e, o) {
  return te(
    n,
    e,
    {
      ...o,
      immediate: !0
    }
  );
}
const We = ut ? window : void 0, Wt = ut ? window.navigator : void 0;
function be(n) {
  var e;
  const o = Y(n);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
function me(...n) {
  const e = [], o = () => {
    e.forEach((i) => i()), e.length = 0;
  }, t = (i, a, f, v) => (i.addEventListener(a, f, v), () => i.removeEventListener(a, f, v)), l = E(() => {
    const i = Fe(Y(n[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  }), s = lo(
    () => {
      var i, a;
      return [
        (a = (i = l.value) == null ? void 0 : i.map((f) => be(f))) != null ? a : [We].filter((f) => f != null),
        Fe(Y(l.value ? n[1] : n[0])),
        Fe(r(l.value ? n[2] : n[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Y(l.value ? n[3] : n[2])
      ];
    },
    ([i, a, f, v]) => {
      if (o(), !(i != null && i.length) || !(a != null && a.length) || !(f != null && f.length))
        return;
      const u = Yn(v) ? { ...v } : v;
      e.push(
        ...i.flatMap(
          (C) => a.flatMap(
            (T) => f.map((k) => t(C, T, k, u))
          )
        )
      );
    },
    { flush: "post" }
  ), p = () => {
    s(), o();
  };
  return rt(o), p;
}
function so() {
  const n = we(!1), e = et();
  return e && Vt(() => {
    n.value = !0;
  }, e), n;
}
function ct(n) {
  const e = so();
  return E(() => (e.value, !!n()));
}
function St(n, e = {}) {
  const {
    controls: o = !1,
    navigator: t = Wt
  } = e, l = ct(() => t && "permissions" in t), s = we(), p = typeof n == "string" ? { name: n } : n, i = we(), a = () => {
    var v, u;
    i.value = (u = (v = s.value) == null ? void 0 : v.state) != null ? u : "prompt";
  };
  me(s, "change", a, { passive: !0 });
  const f = Qn(async () => {
    if (l.value) {
      if (!s.value)
        try {
          s.value = await t.permissions.query(p);
        } catch {
          s.value = void 0;
        } finally {
          a();
        }
      if (o)
        return Nt(s.value);
    }
  });
  return f(), o ? {
    state: i,
    isSupported: l,
    query: f
  } : i;
}
function ao(n = {}) {
  const {
    navigator: e = Wt,
    read: o = !1,
    source: t,
    copiedDuring: l = 1500,
    legacy: s = !1
  } = n, p = ct(() => e && "clipboard" in e), i = St("clipboard-read"), a = St("clipboard-write"), f = E(() => p.value || s), v = we(""), u = we(!1), C = oo(() => u.value = !1, l, { immediate: !1 });
  function T() {
    let V = !(p.value && z(i.value));
    if (!V)
      try {
        e.clipboard.readText().then((x) => {
          v.value = x;
        });
      } catch {
        V = !0;
      }
    V && (v.value = $());
  }
  f.value && o && me(["copy", "cut"], T, { passive: !0 });
  async function k(V = Y(t)) {
    if (f.value && V != null) {
      let x = !(p.value && z(a.value));
      if (!x)
        try {
          await e.clipboard.writeText(V);
        } catch {
          x = !0;
        }
      x && g(V), v.value = V, u.value = !0, C.start();
    }
  }
  function g(V) {
    const x = document.createElement("textarea");
    x.value = V ?? "", x.style.position = "absolute", x.style.opacity = "0", document.body.appendChild(x), x.select(), document.execCommand("copy"), x.remove();
  }
  function $() {
    var V, x, P;
    return (P = (x = (V = document == null ? void 0 : document.getSelection) == null ? void 0 : V.call(document)) == null ? void 0 : x.toString()) != null ? P : "";
  }
  function z(V) {
    return V === "granted" || V === "prompt";
  }
  return {
    isSupported: f,
    text: v,
    copied: u,
    copy: k
  };
}
function io(n) {
  return JSON.parse(JSON.stringify(n));
}
function ro(n, e, o = {}) {
  const { window: t = We, ...l } = o;
  let s;
  const p = ct(() => t && "ResizeObserver" in t), i = () => {
    s && (s.disconnect(), s = void 0);
  }, a = E(() => {
    const u = Y(n);
    return Array.isArray(u) ? u.map((C) => be(C)) : [be(u)];
  }), f = te(
    a,
    (u) => {
      if (i(), p.value && t) {
        s = new ResizeObserver(e);
        for (const C of u)
          C && s.observe(C, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), v = () => {
    i(), f();
  };
  return rt(v), {
    isSupported: p,
    stop: v
  };
}
function uo(n, e = { width: 0, height: 0 }, o = {}) {
  const { window: t = We, box: l = "content-box" } = o, s = E(() => {
    var u, C;
    return (C = (u = be(n)) == null ? void 0 : u.namespaceURI) == null ? void 0 : C.includes("svg");
  }), p = R(e.width), i = R(e.height), { stop: a } = ro(
    n,
    ([u]) => {
      const C = l === "border-box" ? u.borderBoxSize : l === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (t && s.value) {
        const T = be(n);
        if (T) {
          const k = T.getBoundingClientRect();
          p.value = k.width, i.value = k.height;
        }
      } else if (C) {
        const T = Fe(C);
        p.value = T.reduce((k, { inlineSize: g }) => k + g, 0), i.value = T.reduce((k, { blockSize: g }) => k + g, 0);
      } else
        p.value = u.contentRect.width, i.value = u.contentRect.height;
    },
    o
  );
  no(() => {
    const u = be(n);
    u && (p.value = "offsetWidth" in u ? u.offsetWidth : e.width, i.value = "offsetHeight" in u ? u.offsetHeight : e.height);
  });
  const f = te(
    () => be(n),
    (u) => {
      p.value = u ? e.width : 0, i.value = u ? e.height : 0;
    }
  );
  function v() {
    a(), f();
  }
  return {
    width: p,
    height: i,
    stop: v
  };
}
const co = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function po(n = {}) {
  const {
    reactive: e = !1,
    target: o = We,
    aliasMap: t = co,
    passive: l = !0,
    onEventFired: s = Je
  } = n, p = gt(/* @__PURE__ */ new Set()), i = {
    toJSON() {
      return {};
    },
    current: p
  }, a = e ? gt(i) : i, f = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  function u(g, $) {
    g in a && (e ? a[g] = $ : a[g].value = $);
  }
  function C() {
    p.clear();
    for (const g of v)
      u(g, !1);
  }
  function T(g, $) {
    var z, V;
    const x = (z = g.key) == null ? void 0 : z.toLowerCase(), F = [(V = g.code) == null ? void 0 : V.toLowerCase(), x].filter(Boolean);
    x && ($ ? p.add(x) : p.delete(x));
    for (const K of F)
      v.add(K), u(K, $);
    x === "meta" && !$ ? (f.forEach((K) => {
      p.delete(K), u(K, !1);
    }), f.clear()) : typeof g.getModifierState == "function" && g.getModifierState("Meta") && $ && [...p, ...F].forEach((K) => f.add(K));
  }
  me(o, "keydown", (g) => (T(g, !0), s(g)), { passive: l }), me(o, "keyup", (g) => (T(g, !1), s(g)), { passive: l }), me("blur", C, { passive: l }), me("focus", C, { passive: l });
  const k = new Proxy(
    a,
    {
      get(g, $, z) {
        if (typeof $ != "string")
          return Reflect.get(g, $, z);
        if ($ = $.toLowerCase(), $ in t && ($ = t[$]), !($ in a))
          if (/[+_-]/.test($)) {
            const x = $.split(/[+_-]/g).map((P) => P.trim());
            a[$] = E(() => x.map((P) => Y(k[P])).every(Boolean));
          } else
            a[$] = we(!1);
        const V = Reflect.get(g, $, z);
        return e ? Y(V) : V;
      }
    }
  );
  return k;
}
function fo(n, e, o, t = {}) {
  var l, s, p;
  const {
    clone: i = !1,
    passive: a = !1,
    eventName: f,
    deep: v = !1,
    defaultValue: u,
    shouldEmit: C
  } = t, T = et(), k = o || (T == null ? void 0 : T.emit) || ((l = T == null ? void 0 : T.$emit) == null ? void 0 : l.bind(T)) || ((p = (s = T == null ? void 0 : T.proxy) == null ? void 0 : s.$emit) == null ? void 0 : p.bind(T == null ? void 0 : T.proxy));
  let g = f;
  g = g || `update:${e.toString()}`;
  const $ = (x) => i ? typeof i == "function" ? i(x) : io(x) : x, z = () => qn(n[e]) ? $(n[e]) : u, V = (x) => {
    C ? C(x) && k(g, x) : k(g, x);
  };
  if (a) {
    const x = z(), P = R(x);
    let F = !1;
    return te(
      () => n[e],
      (K) => {
        F || (F = !0, P.value = $(K), Ze(() => F = !1));
      }
    ), te(
      P,
      (K) => {
        !F && (K !== n[e] || v) && V(K);
      },
      { deep: v }
    ), P;
  } else
    return E({
      get() {
        return z();
      },
      set(x) {
        V(x);
      }
    });
}
function vo(n, e = {}) {
  const {
    enter: o = () => {
    },
    leave: t = () => {
    },
    initial: l = !1
  } = e, s = R(l);
  return me(n, "mouseenter", () => {
    s.value = !0, o();
  }), me(n, "mouseleave", () => {
    s.value = !1, t();
  }), {
    isHovering: s
  };
}
const mo = { class: "flex pl5px" }, ho = { class: "w160px py5px" }, go = /* @__PURE__ */ Z({
  __name: "StateFieldEditor",
  props: {
    data: {},
    hovering: { type: Boolean },
    depth: {},
    showAddIfNeeded: { type: Boolean, default: !0 },
    disableEdit: { type: Boolean }
  },
  emits: ["enableEditInput", "addNewProp"],
  setup(n) {
    const e = n, o = at(), { copy: t, isSupported: l } = ao(), s = R(!1), p = E(() => Dt(e.data.value)), i = E(() => p.value.value), a = E(() => p.value.customType), f = E(() => i.value === null ? "null" : typeof i.value), v = {
      flat: !0,
      size: "mini"
    }, u = E(() => ({
      "opacity-0": !e.hovering
    }));
    async function C(k, g = !1) {
      await D.value.editInspectorState({
        path: e.data.path || [e.data.key],
        inspectorId: o.value.inspectorId,
        type: e.data.stateType,
        nodeId: o.value.nodeId,
        state: {
          newKey: null,
          value: Nt(k),
          type: f.value,
          remove: g
        }
      }), await D.value.sendInspectorState(o.value.inspectorId);
    }
    function T(k, g) {
      const $ = typeof k == "number" ? k + g : BigInt(k) + BigInt(g);
      C($);
    }
    return (k, g) => (d(), h("div", mo, [
      !e.disableEdit && k.data.editable ? (d(), h(se, { key: 0 }, [
        f.value === "string" || f.value === "number" || f.value === "object" || f.value === "null" ? (d(), h(se, { key: 0 }, [
          q((d(), B(r(fe), Se(v, {
            class: u.value,
            onClick: g[0] || (g[0] = ve(($) => k.$emit("enableEditInput", f.value), ["stop"]))
          }), {
            icon: H(() => [
              y(r(ue), { icon: "i-material-symbols-edit-rounded" })
            ]),
            _: 1
          }, 16, ["class"])), [
            [r(J), {
              content: "Edit value"
            }]
          ]),
          f.value === "object" && k.showAddIfNeeded ? q((d(), B(r(fe), Se({ key: 0 }, v, {
            class: u.value,
            onClick: g[1] || (g[1] = ve(($) => k.$emit("addNewProp", Array.isArray(i.value) ? "array" : "object"), ["stop"]))
          }), {
            icon: H(() => [
              y(r(ue), { icon: "i-material-symbols-add-circle-rounded" })
            ]),
            _: 1
          }, 16, ["class"])), [
            [r(J), {
              content: "Add new value"
            }]
          ]) : j("", !0)
        ], 64)) : j("", !0),
        f.value === "boolean" ? (d(), B(r(fe), Se({ key: 1 }, v, {
          class: u.value,
          onClick: g[2] || (g[2] = ($) => C(!i.value))
        }), {
          icon: H(() => [
            y(r(ue), {
              icon: i.value ? "i-material-symbols-check-box-sharp" : "i-material-symbols-check-box-outline-blank-sharp"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 16, ["class"])) : f.value === "number" || a.value === "bigint" ? (d(), h(se, { key: 2 }, [
          y(r(fe), Se(v, {
            class: u.value,
            onClick: g[3] || (g[3] = ve(($) => T(i.value, 1), ["stop"]))
          }), {
            icon: H(() => [
              y(r(ue), { icon: "i-carbon-add" })
            ]),
            _: 1
          }, 16, ["class"]),
          y(r(fe), Se(v, {
            class: u.value,
            onClick: g[4] || (g[4] = ve(($) => T(i.value, -1), ["stop"]))
          }), {
            icon: H(() => [
              y(r(ue), { icon: "i-carbon-subtract" })
            ]),
            _: 1
          }, 16, ["class"])
        ], 64)) : j("", !0)
      ], 64)) : j("", !0),
      !e.disableEdit && k.depth > 0 && k.data.editable ? (d(), B(r(fe), Se({ key: 1 }, v, {
        class: u.value,
        onClick: g[5] || (g[5] = ve(($) => C(i.value, !0), ["stop"]))
      }), {
        icon: H(() => [
          y(r(ue), { icon: "i-material-symbols-delete-rounded" })
        ]),
        _: 1
      }, 16, ["class"])) : j("", !0),
      y(r(pn), {
        class: ae({
          "opacity-0": !k.hovering && !s.value
        }),
        "button-props": {
          flat: !0,
          size: "mini"
        },
        disabled: !r(l),
        "onUpdate:visible": g[8] || (g[8] = ($) => s.value = $)
      }, {
        popper: H(() => [
          c("div", ho, [
            y(r(Ct), {
              onClick: g[6] || (g[6] = ($) => r(t)(typeof i.value == "object" ? JSON.stringify(i.value) : i.value.toString()))
            }, {
              icon: H(() => [
                y(r(ue), {
                  icon: "i-material-symbols-copy-all-rounded",
                  class: "mt4px"
                }),
                g[9] || (g[9] = Q(" Copy Value "))
              ]),
              _: 1
            }),
            y(r(Ct), {
              onClick: g[7] || (g[7] = () => {
                r(t)(k.data.key);
              })
            }, {
              icon: H(() => [
                y(r(ue), {
                  icon: "i-material-symbols-copy-all-rounded",
                  class: "mt4px"
                }),
                g[10] || (g[10] = Q(" Copy Path "))
              ]),
              _: 1
            })
          ])
        ]),
        "button-icon": H(() => [
          y(r(ue), { icon: "i-material-symbols:more-vert" })
        ]),
        _: 1
      }, 8, ["class", "disabled"])
    ]));
  }
}), Co = { class: "flex-inline items-center gap4px" }, qe = /* @__PURE__ */ Z({
  __name: "StateFieldInputEditor",
  props: {
    modelValue: {},
    customType: {},
    showActions: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !0 }
  },
  emits: ["cancel", "submit", "update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, t = e, l = E(() => o.customType === "date" ? "datetime-local" : ""), { escape: s, enter: p } = po();
    tt(() => {
      s.value ? t("cancel") : p.value && t("submit");
    });
    const i = fo(o, "modelValue", t);
    function a(u) {
      try {
        return Be(u, o.customType), !0;
      } catch {
        return !1;
      }
    }
    const f = R(!1);
    return te(i, In(() => {
      f.value = !a(i.value);
    }, 300)), (u, C) => (d(), h("span", Co, [
      y(r(ge), {
        modelValue: r(i),
        "onUpdate:modelValue": C[0] || (C[0] = (T) => Ge(i) ? i.value = T : null),
        type: l.value,
        variant: f.value ? "warning" : "normal",
        class: ae(["h25px px4px", u.customType === "date" ? "w240px" : "w120px"]),
        "auto-focus": u.autoFocus,
        onClick: C[1] || (C[1] = ve(() => {
        }, ["stop"]))
      }, null, 8, ["modelValue", "type", "variant", "class", "auto-focus"]),
      u.showActions ? (d(), h(se, { key: 0 }, [
        q((d(), B(r(fe), {
          size: "mini",
          flat: "",
          class: "p2px!",
          onClick: C[2] || (C[2] = ve((T) => u.$emit("cancel"), ["stop"]))
        }, {
          icon: H(() => [
            y(r(ue), { icon: "i-material-symbols-cancel" })
          ]),
          _: 1
        })), [
          [r(J), {
            content: "Esc to cancel"
          }]
        ]),
        f.value ? q((d(), B(r(ue), {
          key: 1,
          icon: "i-material-symbols-warning",
          class: "color-warning-500 dark:color-warning-300"
        }, null, 512)), [
          [r(J), {
            content: "Invalid value"
          }]
        ]) : q((d(), B(r(fe), {
          key: 0,
          size: "mini",
          flat: "",
          class: "p2px!",
          onClick: C[3] || (C[3] = ve((T) => u.$emit("submit"), ["stop"]))
        }, {
          icon: H(() => [
            y(r(ue), { icon: "i-material-symbols-save" })
          ]),
          _: 1
        })), [
          [r(J), {
            content: "Enter to submit change"
          }]
        ])
      ], 64)) : j("", !0)
    ]));
  }
}), _o = {
  key: 1,
  pl5: ""
}, yo = {
  "whitespace-nowrap": "",
  "text-purple-700": "",
  op70: "",
  "dark:text-purple-300": ""
}, xo = ["innerHTML"], bo = { key: 0 }, wo = {
  "overflow-hidden": "",
  "text-ellipsis": "",
  "whitespace-nowrap": "",
  "state-key": ""
}, Tt = 30, ko = /* @__PURE__ */ Z({
  __name: "StateFieldViewer",
  props: {
    data: {},
    depth: {},
    index: {},
    expandedStateId: {}
  },
  setup(n) {
    const e = n, o = R(Tt), t = E(() => xn(e.data.value, !1, {
      customClass: {
        string: "max-w-120 truncate"
      }
    })), l = E(() => _t(e.data.value)), s = E(() => Dt(e.data.value)), { expanded: p, toggleExpanded: i } = it(e.expandedStateId ?? ""), a = E(() => {
      var A;
      return l.value === "custom" ? `${((A = e.data.value._custom) == null ? void 0 : A.type) ?? "string"}-custom-state` : "unknown-state-type";
    }), f = E(() => {
      const { value: A } = s.value;
      return yt(A) ? A.length : xt(A) ? Object.keys(A).length : 0;
    }), v = E(() => e.data.path || [e.data.key]), u = E(() => v.value[v.value.length - 1]), C = E(() => {
      var m, _, N, M, G, re, Ie;
      const A = ["Reactive"], b = ((_ = (m = e.data.value) == null ? void 0 : m._custom) == null ? void 0 : _.stateTypeName) || ((N = e.data) == null ? void 0 : N.stateTypeName);
      if (A.includes(b))
        return b;
      if ((G = (M = e.data.value) == null ? void 0 : M.fields) != null && G.abstract)
        return "";
      {
        const Re = (Ie = (re = e.data.value) == null ? void 0 : re._custom) == null ? void 0 : Ie.type, je = l.value === "custom" && !Re ? `"${t.value}"` : t.value === "" ? '""' : t.value, $e = l.value === "custom" && Re === "ref" ? _t(je) : l.value, ze = l.value === "string" ? "select-text" : "", De = `<span title="${l.value === "string" ? bn(e.data.value) : ""}" class="${$e}-state-type flex whitespace-nowrap ${ze}">${je}</span>`;
        return b ? `${De} <span class="text-gray-500">(${b})</span>` : De;
      }
    }), T = E(() => {
      const { value: A, inherit: b, customType: m } = s.value, _ = m === "set";
      let N = [];
      return yt(A) ? A.slice(0, o.value).map((G, re) => ({
        key: re.toString(),
        path: [...v.value, re.toString()],
        value: G,
        ...b,
        editable: e.data.editable && !_,
        creating: !1
      })) : (xt(A) && (N = Object.keys(A).slice(0, o.value).map((M) => ({
        key: M,
        path: [...v.value, M],
        value: A[M],
        ...b,
        editable: e.data.editable && !_,
        creating: !1
      })), l.value !== "custom" && (N = At(N))), N === e.data.value ? [] : N);
    }), k = E(() => T.value.length > 0), g = R(), $ = at(), { isHovering: z } = vo(() => g.value), { editingType: V, editing: x, editingText: P, toggleEditing: F, nodeId: K } = Kn();
    te(() => x.value, (A) => {
      if (A) {
        const { value: b } = s.value;
        P.value = wn(b, s.value.customType);
      } else
        P.value = "";
    });
    async function ce() {
      const A = e.data;
      await D.value.editInspectorState({
        path: v.value,
        inspectorId: $.value.inspectorId,
        type: A.stateType,
        nodeId: K.value,
        state: {
          newKey: null,
          type: V.value,
          value: Be(P.value, s.value.customType)
        }
      }), await D.value.sendInspectorState($.value.inspectorId), F();
    }
    const { addNewProp: L, draftingNewProp: I, resetDrafting: O } = Wn();
    function ee(A) {
      const b = `${e.depth}-${e.index}`;
      p.value.includes(b) || i(b), L(A, s.value.value);
    }
    async function ne() {
      const A = e.data;
      await D.value.editInspectorState({
        path: [...v.value, I.value.key],
        inspectorId: $.value.inspectorId,
        type: A.stateType,
        nodeId: K.value,
        state: {
          newKey: I.value.key,
          type: typeof Be(I.value.value),
          value: Be(I.value.value)
        }
      }), await D.value.sendInspectorState($.value.inspectorId), O();
    }
    return (A, b) => (d(), h("div", null, [
      c("div", {
        ref_key: "containerRef",
        ref: g,
        class: ae(["font-state-field flex items-center text-3.5", [k.value && "cursor-pointer hover:bg-active"]]),
        style: Ee({ paddingLeft: `${A.depth * 15 + 4}px` }),
        onClick: b[1] || (b[1] = (m) => r(i)(`${A.depth}-${A.index}`))
      }, [
        k.value ? (d(), B(st, {
          key: 0,
          value: r(p).includes(`${A.depth}-${A.index}`)
        }, null, 8, ["value"])) : (d(), h("span", _o)),
        c("span", yo, ie(u.value), 1),
        b[5] || (b[5] = c("span", { mx1: "" }, ":", -1)),
        r(x) ? (d(), B(qe, {
          key: 2,
          modelValue: r(P),
          "onUpdate:modelValue": b[0] || (b[0] = (m) => Ge(P) ? P.value = m : null),
          class: "mr-1",
          "custom-type": s.value.customType,
          onCancel: r(F),
          onSubmit: ce
        }, null, 8, ["modelValue", "custom-type", "onCancel"])) : j("", !0),
        c("span", {
          class: ae([a.value, "flex whitespace-nowrap dark:text-#bdc6cf"])
        }, [
          c("span", {
            class: "flex",
            innerHTML: C.value
          }, null, 8, xo)
        ], 2),
        y(go, {
          hovering: r(z),
          "disable-edit": r($).disableEdit || r(x),
          data: A.data,
          depth: A.depth,
          onEnableEditInput: r(F),
          onAddNewProp: ee
        }, null, 8, ["hovering", "disable-edit", "data", "depth", "onEnableEditInput"])
      ], 6),
      k.value && r(p).includes(`${A.depth}-${A.index}`) ? (d(), h("div", bo, [
        y(qt, {
          data: T.value,
          depth: A.depth,
          index: A.index
        }, null, 8, ["data", "depth", "index"]),
        f.value > o.value ? q((d(), B(r(fe), {
          key: 0,
          flat: "",
          size: "mini",
          class: "ml-4",
          onClick: b[2] || (b[2] = (m) => o.value += Tt)
        }, {
          icon: H(() => [
            y(r(ue), { icon: "i-material-symbols-more-horiz" })
          ]),
          _: 1
        })), [
          [r(J), "Show more"]
        ]) : j("", !0),
        r(I).enable ? (d(), h("div", {
          key: 1,
          style: Ee({ paddingLeft: `${(A.depth + 1) * 15 + 4}px` })
        }, [
          c("span", wo, [
            y(qe, {
              modelValue: r(I).key,
              "onUpdate:modelValue": b[3] || (b[3] = (m) => r(I).key = m),
              "show-actions": !1
            }, null, 8, ["modelValue"])
          ]),
          b[6] || (b[6] = c("span", { "mx-1": "" }, ":", -1)),
          y(qe, {
            modelValue: r(I).value,
            "onUpdate:modelValue": b[4] || (b[4] = (m) => r(I).value = m),
            "auto-focus": !1,
            onCancel: r(O),
            onSubmit: ne
          }, null, 8, ["modelValue", "onCancel"])
        ], 4)) : j("", !0)
      ])) : j("", !0)
    ]));
  }
}), Io = /* @__PURE__ */ xe(ko, [["__scopeId", "data-v-7918b8f2"]]), qt = /* @__PURE__ */ Z({
  __name: "ChildStateViewer",
  props: {
    data: {},
    depth: { default: 0 },
    index: {},
    expandedStateId: { default: "" }
  },
  setup(n) {
    return (e, o) => (d(), h("div", null, [
      (d(!0), h(se, null, de(e.data, (t, l) => (d(), h("div", { key: l }, [
        y(Io, {
          data: t,
          depth: e.depth + 1,
          index: `${e.index}-${l}`,
          "expanded-state-id": e.expandedStateId
        }, null, 8, ["data", "depth", "index", "expanded-state-id"])
      ]))), 128))
    ]));
  }
}), $o = ["onClick"], So = {
  key: 1,
  pl5: ""
}, To = {
  "font-state-field": "",
  "text-3.5": "",
  "text-hex-a3a3a3": ""
}, Eo = { key: 0 }, Ue = /* @__PURE__ */ Z({
  __name: "RootStateViewer",
  props: {
    data: {},
    nodeId: {},
    inspectorId: {},
    disableEdit: { type: Boolean, default: !1 },
    expandedStateId: { default: "" }
  },
  setup(n) {
    const e = n;
    function o() {
      return {
        nodeId: e.nodeId,
        inspectorId: e.inspectorId,
        disableEdit: e.disableEdit
      };
    }
    const { context: t } = Zn(o());
    tt(() => {
      t.value = o();
    });
    const { expanded: l, toggleExpanded: s } = it(e.expandedStateId);
    return (p, i) => (d(), h("div", null, [
      (d(!0), h(se, null, de(p.data, (a, f, v) => (d(), h("div", { key: v }, [
        c("div", {
          class: ae(["flex items-center", [(a == null ? void 0 : a.length) && "cursor-pointer hover:bg-active"]]),
          onClick: (u) => r(s)(`${v}`)
        }, [
          a != null && a.length ? (d(), B(st, {
            key: 0,
            value: r(l).includes(`${v}`)
          }, null, 8, ["value"])) : (d(), h("span", So)),
          c("span", To, ie(f), 1)
        ], 10, $o),
        a != null && a.length && r(l).includes(`${v}`) ? (d(), h("div", Eo, [
          y(qt, {
            data: a,
            index: `${v}`,
            "expanded-state-id": p.expandedStateId
          }, null, 8, ["data", "index", "expanded-state-id"])
        ])) : j("", !0)
      ]))), 128))
    ]));
  }
}), Vo = { class: "p3" }, No = ["onClick"], Ro = {
  key: 0,
  class: "absolute left-5px top-4.5 h10 w0 border-l-2",
  border: "solid gray2"
}, Do = { class: "h-full flex items-center truncate pl5" }, Po = {
  absolute: "",
  "top-5": "",
  pr2: "",
  "text-3": "",
  op40: ""
}, Ao = {
  pl2: "",
  op30: ""
}, Mo = /* @__PURE__ */ Z({
  __name: "EventList",
  props: /* @__PURE__ */ Ae({
    data: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const e = n, o = Xe(n, "modelValue"), t = ["#3e5770", "#42b983", "#0098c4"], l = R(null), s = E(() => {
      let p = -1, i = 0;
      return e.data.forEach((a, f) => {
        (a.groupId !== i || p === -1) && (p = (p + 1) % t.length), i = a.groupId ?? i, a.id = f, a.color = t[p];
      }), e.data;
    });
    return te(() => s.value.length, (p) => {
      var i;
      (i = l.value) == null || i.scrollToItem(p - 1);
    }, { flush: "post" }), (p, i) => (d(), h("div", Vo, [
      y(r($n), {
        ref_key: "scrollerRef",
        ref: l,
        items: s.value,
        "min-item-size": 52,
        "key-field": "id",
        "page-mode": "",
        "item-tag": "li",
        "list-tag": "ul",
        buffer: 20
      }, {
        default: H(({ item: a }) => [
          c("div", {
            class: "relative mb7 h6 cursor-pointer",
            style: Ee({ color: o.value === a.id ? a.color : "" }),
            onClick: (f) => o.value = a.id
          }, [
            c("span", {
              class: "absolute top-1.5 inline-block h3 w3 b rounded-50%",
              style: Ee({ border: `3px solid ${a.color}` })
            }, null, 4),
            a.id < p.data.length - 1 ? (d(), h("span", Ro)) : j("", !0),
            c("p", Do, [
              c("span", Po, "[" + ie(r(En)(a.time)) + "]", 1),
              Q(" " + ie(a.title) + " ", 1),
              c("span", Ao, ie(a.subtitle), 1)
            ])
          ], 12, No)
        ]),
        _: 1
      }, 8, ["items"])
    ]));
  }
}), Lo = { class: "relative h-full flex flex-col" }, Ho = {
  key: 1,
  class: "flex-1 overflow-hidden"
}, Uo = {
  "h-full": "",
  "select-none": "",
  "overflow-scroll": "",
  class: "no-scrollbar"
}, Oo = {
  "h-full": "",
  "overflow-scroll": "",
  class: "no-scrollbar"
}, jo = {
  key: 3,
  class: "absolute right-3 top-12 flex items-center justify-end b-1 border-base rounded-1 b-solid px2 py1"
}, zo = { class: "flex items-center gap-2 px-1" }, Bo = {
  key: 0,
  class: "recording recording-btn bg-[#ef4444]"
}, Fo = {
  key: 1,
  class: "recording-btn bg-black op70 dark:bg-white hover:op100"
}, Zo = { class: "flex items-center gap1" }, Ko = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    layerIds: {},
    pluginId: {},
    docLink: {},
    githubRepoLink: {},
    headerVisible: { type: Boolean, default: !0 },
    switcherVisible: { type: Boolean, default: !0 }
  },
  setup(n, { expose: e }) {
    const o = n, { expanded: t } = Ce("timeline-state");
    t.value = ["0", "1"];
    const l = R([]), s = R(/* @__PURE__ */ new Map()), p = R(0), i = Pt(), a = E(() => {
      var V;
      return (V = i.timelineLayersState.value) == null ? void 0 : V[o.pluginId];
    }), f = E(() => l.value[p.value] ?? null), v = E(() => a.value ? "Stop recording" : "Start recording"), u = E(() => {
      var x;
      const V = [];
      for (const P in (x = f.value) == null ? void 0 : x.data)
        V.push({
          key: P,
          type: P,
          editable: !1,
          value: f.value.data[P]
        });
      return V;
    }), C = E(() => {
      var P, F, K;
      const V = (P = f.value) == null ? void 0 : P.groupId, x = s.value.get(V);
      if (x) {
        const ce = ((F = x[x.length - 1]) == null ? void 0 : F.time) - (((K = x[0]) == null ? void 0 : K.time) ?? 0);
        return [{
          key: "events",
          type: "events",
          editable: !1,
          value: x.length
        }, ce && {
          key: "duration",
          type: "duration",
          editable: !1,
          value: `${ce}ms`
        }].filter(Boolean);
      }
    }), T = E(() => ({ "Event Info": u.value, ...C.value && { "Group Info": C.value } }));
    function k(V) {
      var P;
      const x = V.groupId;
      x !== void 0 && (s.value.set(x, s.value.get(x) ?? []), (P = s.value.get(x)) == null || P.push(V));
    }
    function g(V) {
      const x = oe(V);
      if (!x)
        return;
      const { layerId: P, event: F } = x;
      o.layerIds.includes(P) && (l.value.push(F), k(F));
    }
    D.functions.on(X.TIMELINE_EVENT_UPDATED, g), ke(() => {
      D.functions.off(X.TIMELINE_EVENT_UPDATED, g);
    });
    function $() {
      l.value = [], s.value.clear();
    }
    e({
      clear: $
    });
    function z() {
      D.value.updateTimelineLayersState({
        [o.pluginId]: !a.value
      });
    }
    return (V, x) => (d(), h("div", Lo, [
      V.headerVisible ? (d(), B(Ve, {
        key: 0,
        "doc-link": V.docLink,
        "github-repo-link": V.githubRepoLink
      }, {
        default: H(() => [
          y(Ne)
        ]),
        _: 1
      }, 8, ["doc-link", "github-repo-link"])) : j("", !0),
      l.value.length ? (d(), h("div", Ho, [
        y(r(Le), { class: "h-full" }, {
          default: H(() => [
            y(r(pe), {
              border: "r base",
              size: "40",
              "h-full": ""
            }, {
              default: H(() => [
                c("div", Uo, [
                  y(Mo, {
                    modelValue: p.value,
                    "onUpdate:modelValue": x[0] || (x[0] = (P) => p.value = P),
                    data: l.value
                  }, null, 8, ["modelValue", "data"])
                ])
              ]),
              _: 1
            }),
            y(r(pe), { size: "60" }, {
              default: H(() => [
                c("div", Oo, [
                  y(Ue, {
                    class: "p3",
                    data: T.value,
                    "node-id": "",
                    "inspector-id": "",
                    "disable-edit": !0,
                    "expanded-state-id": "timeline-state"
                  }, null, 8, ["data"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : (d(), B(Te, {
        key: 2,
        class: "flex-1"
      }, {
        default: H(() => x[1] || (x[1] = [
          Q(" No events ")
        ])),
        _: 1
      })),
      V.switcherVisible ? (d(), h("div", jo, [
        c("div", zo, [
          q((d(), h("div", {
            class: "flex items-center gap1",
            onClick: z
          }, [
            a.value ? (d(), h("span", Bo)) : (d(), h("span", Fo))
          ])), [
            [
              r(J),
              { content: v.value },
              void 0,
              { "bottom-end": !0 }
            ]
          ]),
          q((d(), h("div", {
            class: "flex items-center gap1",
            onClick: $
          }, [
            y(r(Ke), {
              name: "baseline-delete",
              "cursor-pointer": "",
              "text-xl": "",
              op70: "",
              "hover:op100": ""
            })
          ])), [
            [
              r(J),
              { content: "Clear all timelines" },
              void 0,
              { "bottom-end": !0 }
            ]
          ]),
          q((d(), h("div", Zo, [
            y(r(Ke), {
              name: "baseline-tips-and-updates",
              "cursor-pointer": "",
              "text-xl": "",
              op70: "",
              "hover:op100": ""
            })
          ])), [
            [
              r(J),
              { content: "<p style='width: 285px'>Timeline events can cause significant performance overhead in large applications, so we recommend enabling it only when needed and on-demand. </p>", html: !0 },
              void 0,
              { "bottom-end": !0 }
            ]
          ])
        ])
      ])) : j("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ xe(Ko, [["__scopeId", "data-v-3dbcfd2a"]]);
function ps() {
  const n = R([]), e = R([]);
  function o(l) {
    e.value = l, l.length < n.value.length && (n.value = []), e.value.forEach((s) => {
      t(s);
    });
  }
  Me(() => {
    D.value.getCustomInspector().then((l) => {
      e.value = l, e.value.forEach((s) => {
        t(s);
      });
    }), D.functions.on(X.INSPECTOR_UPDATED, o);
  });
  function t(l) {
    n.value.some((s) => s.id === l.id) || n.value.push(l);
  }
  return ke(() => {
    D.functions.off(X.INSPECTOR_UPDATED, o);
  }), {
    registeredInspector: n,
    register: t
  };
}
const Jt = Symbol("SelectedSymbolKey");
function Go() {
  const n = R("");
  return _e(Jt, n), {
    selected: n
  };
}
function Wo() {
  const n = he(Jt, R(""));
  function e(o) {
    n.value = o;
  }
  return {
    selected: n,
    select: e
  };
}
const qo = ["onClick", "onDblclick", "onMouseover"], Jo = {
  key: 1,
  pl5: ""
}, Yo = {
  "font-state-field": "",
  "text-3.5": ""
}, Xo = {
  key: 0,
  class: "text-gray-400 dark:text-gray-600 group-hover:text-white group-hover:op50 [.active_&]:op50 [.active_&]:text-white!"
}, Qo = {
  "group-hover:text-white": "",
  class: "ws-nowrap [.active_&]:text-white"
}, el = {
  key: 2,
  class: "text-gray-400 dark:text-gray-600 group-hover:text-white group-hover:op50 [.active_&]:op50 [.active_&]:text-white!"
}, tl = {
  key: 2,
  class: "ml-2 rounded-sm bg-blue-400 px-1 text-[0.75rem] leading-snug dark:bg-blue-800"
}, nl = {
  key: 3,
  class: "ml-2 rounded-sm bg-gray-500 px-1 text-[0.75rem] leading-snug"
}, ol = { key: 0 }, Oe = /* @__PURE__ */ Z({
  __name: "TreeViewer",
  props: /* @__PURE__ */ Ae({
    data: {},
    depth: { default: 0 },
    withTag: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ae(["hover", "leave"], ["update:modelValue"]),
  setup(n, { emit: e }) {
    const o = e, t = Xe(n, "modelValue"), { expanded: l, toggleExpanded: s } = it();
    Wo();
    function p(a) {
      return "name" in a && (a == null ? void 0 : a.name) || "label" in a && a.label;
    }
    function i(a) {
      t.value = a;
    }
    return (a, f) => (d(!0), h(se, null, de(a.data, (v, u) => {
      var C, T;
      return d(), h("div", {
        key: u,
        class: ae({
          "min-w-max": a.depth === 0
        })
      }, [
        c("div", {
          class: ae(["group flex cursor-pointer items-center rounded-1 hover:bg-primary-300 hover:dark:bg-gray-600", { "bg-primary-600! active": t.value === v.id }]),
          style: Ee({ paddingLeft: `${15 * a.depth + 4}px` }),
          onClick: (k) => i(v.id),
          onDblclick: (k) => r(s)(v.id),
          onMouseover: () => o("hover", v.id),
          onMouseleave: f[0] || (f[0] = () => o("leave"))
        }, [
          (C = v == null ? void 0 : v.children) != null && C.length ? (d(), B(st, {
            key: 0,
            value: r(l).includes(v.id),
            class: "[.active_&]:op20 group-hover:op20",
            onClick: ve((k) => r(s)(v.id), ["stop"])
          }, null, 8, ["value", "onClick"])) : (d(), h("span", Jo)),
          c("span", Yo, [
            a.withTag ? (d(), h("span", Xo, "<")) : j("", !0),
            c("span", Qo, ie(p(v)), 1),
            (v.renderKey === 0 || v.renderKey) && v.renderKey !== r(Rt) ? (d(), h("span", {
              key: 1,
              class: ae(["text-xs opacity-50", {
                "opacity-100": t.value === v.id
              }])
            }, [
              c("span", {
                class: ae([t.value === v.id ? "text-purple-200" : "text-purple-500"])
              }, " key", 2),
              f[4] || (f[4] = Q("=")),
              c("span", null, ie(v.renderKey), 1)
            ], 2)) : j("", !0),
            a.withTag ? (d(), h("span", el, ">")) : j("", !0)
          ]),
          v.isFragment ? q((d(), h("span", tl, f[5] || (f[5] = [
            Q(" fragment ")
          ]))), [
            [r(J), "Has multiple root DOM nodes"]
          ]) : j("", !0),
          v.inactive ? q((d(), h("span", nl, f[6] || (f[6] = [
            Q(" inactive ")
          ]))), [
            [r(J), "Currently inactive but not destroyed"]
          ]) : j("", !0),
          (d(!0), h(se, null, de(v.tags, (k, g) => (d(), B(Ut, {
            key: g,
            tag: k
          }, null, 8, ["tag"]))), 128))
        ], 46, qo),
        (T = v == null ? void 0 : v.children) != null && T.length && r(l).includes(v.id) ? (d(), h("div", ol, [
          y(Oe, {
            modelValue: t.value,
            "onUpdate:modelValue": f[1] || (f[1] = (k) => t.value = k),
            data: v == null ? void 0 : v.children,
            depth: a.depth + 1,
            "with-tag": a.withTag,
            onHover: f[2] || (f[2] = (k) => o("hover", k)),
            onLeave: f[3] || (f[3] = (k) => o("leave"))
          }, null, 8, ["modelValue", "data", "depth", "with-tag"])
        ])) : j("", !0)
      ], 2);
    }), 128));
  }
}), Et = 200;
function ll() {
  const n = $t((o) => D.value.highlighComponent(o), Et), e = $t(() => D.value.unhighlight(), Et);
  return {
    highlight: n,
    unhighlight: e
  };
}
const sl = { class: "absolute left-0 top-0 h-full w-full flex flex-col rounded-br-2.5 rounded-tr-2.5 bg-white p2 dark:bg-#121212" }, al = { class: "flex-1 overflow-scroll text-3.5" }, il = /* @__PURE__ */ Z({
  __name: "RenderCode",
  props: {
    code: {}
  },
  emits: ["close"],
  setup(n, { emit: e }) {
    const o = e;
    function t() {
      o("close");
    }
    return (l, s) => (d(), h("div", sl, [
      c("div", { class: "h-12 w-full flex items-center justify-between p-2" }, [
        s[0] || (s[0] = c("span", { class: "font-500" }, "Render Code", -1)),
        c("i", {
          class: "i-carbon-close cursor-pointer hover:op80",
          onClick: t
        })
      ]),
      c("div", al, [
        y(r(fn), {
          code: l.code,
          lang: "javascript"
        }, null, 8, ["code"])
      ])
    ]));
  }
}), rl = { class: "h-full w-full" }, ul = { class: "no-scrollbar h-full flex select-none gap-2 overflow-scroll" }, cl = {
  key: 0,
  class: "h-full flex flex-col p2"
}, dl = { class: "flex py2" }, pl = {
  xmlns: "http://www.w3.org/2000/svg",
  style: { height: "1.1em", width: "1.1em" },
  class: "op-80 hover:op-100",
  viewBox: "0 0 24 24"
}, fl = { class: "h-full flex flex-col p2" }, vl = { class: "flex py2" }, ml = {
  key: 0,
  class: "font-state-field flex items-center px-1 text-3.5"
}, hl = {
  "group-hover:text-white": "",
  class: "max-w-40 of-hidden text-ellipsis ws-nowrap [.active_&]:text-white"
}, gl = { class: "flex items-center gap-2 px-1" }, Cl = { class: "h-full flex flex-col items-center justify-center gap-2" }, _l = { class: "block" }, yl = {
  xmlns: "http://www.w3.org/2000/svg",
  style: { height: "2em", width: "2em", opacity: "0.5", color: "#00dc82" },
  class: "animate-fade",
  viewBox: "0 0 24 24"
}, xl = { class: "flex items-center justify-center" }, Pe = "components", bl = /* @__PURE__ */ Z({
  __name: "index",
  emits: ["openInEditor", "onInspectComponentStart", "onInspectComponentEnd"],
  setup(n, { emit: e }) {
    const o = e, t = R(), l = R(!1), { width: s } = uo(t), p = E(() => l.value ? s.value < 700 : !1), i = R(""), a = R(""), [f, v] = Kt(!0), u = R(!1), C = R(!1), T = R(""), k = R(!1), g = ll();
    function $(w, S = [], U = []) {
      var W;
      return S.push(w.id), ((W = w.children) == null ? void 0 : W.length) === 0 && U.push([...S]), Array.isArray(w.children) && w.children.forEach((le) => {
        $(le, S, U);
      }), S.pop(), U;
    }
    function z(w) {
      const S = [], U = (W) => {
        W == null || W.forEach((le) => {
          var ht;
          S.push(le), (ht = le.children) != null && ht.length && U(le.children);
        });
      };
      return U(w), S;
    }
    function V(w, S) {
      const U = [];
      return w == null || w.forEach((W) => {
        U.push(...W.slice(0, S + 1));
      }), [...new Set(U)];
    }
    function x(w, S) {
      const U = [];
      return w.forEach((W) => {
        const le = W.indexOf(S);
        le !== -1 && U.push(...W.slice(0, le + 1));
      }), [...new Set(U)];
    }
    const P = R([]), F = E(() => {
      var w, S;
      return (w = P.value) != null && w.length ? $((S = P.value) == null ? void 0 : S[0]) : [];
    }), K = E(() => z(P.value)), ce = E(() => K.value.map((w) => w.id)), L = R({}), I = R(""), O = E(() => {
      const w = [], S = (U) => {
        U.forEach((W) => {
          var le;
          W.id === I.value && w.push(W), (le = W.children) != null && le.length && S(W.children);
        });
      };
      return S(P.value), w[0];
    }), ee = E(() => {
      var w;
      return ((w = O.value) == null ? void 0 : w.file) ?? "";
    }), ne = E(() => nt({
      state: L.value,
      filterKey: a.value,
      processGroup(w) {
        return Sn(Object.values(Tn(At(w), "stateType")));
      }
    })), { expanded: A } = Ce(), { expanded: b } = Ce("component-state");
    Go();
    async function m(w = "") {
      return D.value.getInspectorTree({ inspectorId: Pe, filter: w }).then((S) => {
        var W, le;
        const U = oe(S);
        P.value = U, I.value = (le = (W = P.value) == null ? void 0 : W[0]) == null ? void 0 : le.id, A.value = V(F.value, 1), u.value = !0;
      });
    }
    function _(w) {
      if (!w || !(w != null && w.state))
        return {};
      const S = {};
      return w.state.forEach((U) => {
        S[U.type] || (S[U.type] = []), S[U.type].push(U);
      }), S;
    }
    function N(w) {
      D.value.getInspectorState({ inspectorId: Pe, nodeId: w }).then((S) => {
        const U = oe(S);
        U && (L.value = _(U), b.value = Array.from({ length: Object.keys(L.value).length }, (W, le) => `${le}`));
      });
    }
    te(I, (w) => {
      N(w), k.value && vt();
    });
    function M(w) {
      const S = oe(w);
      S.inspectorId !== Pe || S.nodeId !== I.value || (L.value = _({ state: S.state.state }));
    }
    D.functions.on(X.INSPECTOR_STATE_UPDATED, M), m();
    function G(w) {
      const S = w.trim().toLowerCase();
      v(), m(S).then(() => {
        v();
      });
    }
    Gt(i, (w) => {
      G(w);
    }, { debounce: 300 });
    function re(w) {
      var U, W;
      const S = oe(w);
      S.inspectorId === Pe && (i.value ? G(i.value) : P.value = S.rootNodes, ce.value.includes(I.value) || (I.value = (W = (U = P.value) == null ? void 0 : U[0]) == null ? void 0 : W.id, A.value = V(F.value, 1)));
    }
    D.functions.on(X.INSPECTOR_TREE_UPDATED, re), ke(() => {
      D.functions.off(X.INSPECTOR_STATE_UPDATED, M), D.functions.off(X.INSPECTOR_TREE_UPDATED, re);
    });
    const Ie = Pt(), Re = E(() => Ie.appRecords.value.map((w) => ({
      label: w.name + (w.version ? ` (${w.version})` : ""),
      value: w.id
    }))), je = E(() => Re.value.map((w) => ({
      label: w.label,
      id: w.value
    }))), $e = R(Ie.activeAppRecordId.value);
    tt(() => {
      $e.value = Ie.activeAppRecordId.value;
    });
    async function ze(w, S = {}) {
      await D.value.toggleApp(w, S), I.value = "", await m();
    }
    async function De() {
      C.value = !0, o("onInspectComponentStart");
      try {
        const w = JSON.parse(await D.value.inspectComponentInspector()), S = w.id.split(":")[0];
        $e.value !== w.appId && await ze(S, { inspectingComponent: !0 }), I.value = w.id, A.value.includes(w.id) || A.value.push(w.id), A.value = [.../* @__PURE__ */ new Set([...A.value, ...x(F.value, w.id)])], on();
      } finally {
        C.value = !1, o("onInspectComponentEnd");
      }
    }
    function ft() {
      C.value = !1, D.value.cancelInspectComponentInspector();
    }
    me("keydown", (w) => {
      w.key === "s" && (w.ctrlKey || w.metaKey) && !C.value ? De() : w.key === "Escape" && C.value && ft();
    });
    function en() {
      D.value.scrollToComponent(I.value);
    }
    function tn() {
      D.value.inspectDOM(I.value).then(() => {
        chrome.devtools.inspectedWindow.eval("inspect(window.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__)");
      });
    }
    function vt() {
      D.value.getComponentRenderCode(I.value).then((w) => {
        T.value = w, k.value = !0;
      });
    }
    function nn() {
      o("openInEditor", ee.value);
    }
    const mt = R();
    function on() {
      setTimeout(() => {
        var S;
        const w = (S = mt.value) == null ? void 0 : S.querySelector(".active");
        w == null || w.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
    function ln() {
      T.value = "", k.value = !1;
    }
    return (w, S) => (d(), h("div", rl, [
      y(r(Le), {
        ref_key: "splitpanesRef",
        ref: t,
        class: "flex-1 overflow-auto",
        horizontal: p.value,
        onReady: S[4] || (S[4] = (U) => l.value = !0)
      }, {
        default: H(() => [
          Re.value.length > 1 ? (d(), B(r(pe), {
            key: 0,
            border: "base h-full",
            size: "20"
          }, {
            default: H(() => [
              c("div", ul, [
                y(An, {
                  modelValue: $e.value,
                  "onUpdate:modelValue": S[0] || (S[0] = (U) => $e.value = U),
                  data: je.value,
                  class: "w-full",
                  onSelect: ze
                }, null, 8, ["modelValue", "data"])
              ])
            ]),
            _: 1
          })) : j("", !0),
          y(r(pe), {
            border: "base",
            "h-full": ""
          }, {
            default: H(() => [
              u.value ? (d(), h("div", cl, [
                c("div", dl, [
                  y(r(ge), {
                    modelValue: i.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (U) => i.value = U),
                    "loading-debounce-time": 250,
                    loading: !r(f),
                    placeholder: "Find components...",
                    class: "flex-1 text-3.5"
                  }, null, 8, ["modelValue", "loading"]),
                  r(kn) ? j("", !0) : q((d(), h("button", {
                    key: 0,
                    "px-1": "",
                    class: "hover:color-#00dc82",
                    onClick: De
                  }, [
                    (d(), h("svg", pl, S[6] || (S[6] = [
                      c("path", {
                        fill: "currentColor",
                        d: "M10.611 10.611a1 1 0 0 1 1.11-.208l8.839 3.889a1 1 0 0 1-.14 1.88l-3.338.91l-.91 3.338a1 1 0 0 1-1.88.14l-3.89-8.84a1 1 0 0 1 .209-1.109M17 3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-3.73 10.269l1.715 3.9l.318-1.164a1 1 0 0 1 .701-.702l1.165-.318l-3.9-1.716Z"
                      }, null, -1)
                    ])))
                  ])), [
                    [
                      r(J),
                      "Select component in the page",
                      void 0,
                      { bottom: !0 }
                    ]
                  ])
                ]),
                c("div", {
                  ref_key: "componentTreeContainer",
                  ref: mt,
                  class: "no-scrollbar flex-1 select-none overflow-scroll"
                }, [
                  y(Oe, {
                    modelValue: I.value,
                    "onUpdate:modelValue": S[2] || (S[2] = (U) => I.value = U),
                    data: P.value,
                    "with-tag": !0,
                    onHover: r(g).highlight,
                    onLeave: r(g).unhighlight
                  }, null, 8, ["modelValue", "data", "onHover", "onLeave"])
                ], 512)
              ])) : j("", !0)
            ]),
            _: 1
          }),
          y(r(pe), {
            relative: "",
            "h-full": ""
          }, {
            default: H(() => {
              var U;
              return [
                c("div", fl, [
                  c("div", vl, [
                    (U = O.value) != null && U.name ? (d(), h("span", ml, [
                      S[7] || (S[7] = c("span", { class: "text-gray-400 dark:text-gray-600" }, "<", -1)),
                      c("span", hl, ie(O.value.name), 1),
                      S[8] || (S[8] = c("span", { class: "text-gray-400 dark:text-gray-600" }, ">", -1))
                    ])) : j("", !0),
                    y(r(ge), {
                      modelValue: a.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (W) => a.value = W),
                      "loading-debounce-time": 250,
                      placeholder: "Filter State...",
                      class: "flex-1 text-3.5"
                    }, null, 8, ["modelValue"]),
                    c("div", gl, [
                      q(c("i", {
                        class: "i-material-symbols-light:eye-tracking-outline h-4 w-4 cursor-pointer hover:op-70",
                        onClick: en
                      }, null, 512), [
                        [
                          r(J),
                          "Scroll to component",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]),
                      q(c("i", {
                        class: "i-material-symbols-light:code h-5 w-5 cursor-pointer hover:op-70",
                        onClick: vt
                      }, null, 512), [
                        [
                          r(J),
                          "Show render code",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]),
                      r(bt) ? q((d(), h("i", {
                        key: 0,
                        class: "i-material-symbols-light:menu-open h-5 w-5 cursor-pointer hover:op-70",
                        onClick: tn
                      }, null, 512)), [
                        [
                          r(J),
                          "Inspect DOM",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]) : j("", !0),
                      ee.value ? q((d(), h("i", {
                        key: 1,
                        class: "i-carbon-launch h-4 w-4 cursor-pointer hover:op-70",
                        onClick: nn
                      }, null, 512)), [
                        [
                          r(J),
                          "Open in Editor",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]) : j("", !0)
                    ])
                  ]),
                  y(Ue, {
                    class: "no-scrollbar flex-1 overflow-scroll",
                    data: ne.value,
                    "node-id": I.value,
                    "inspector-id": Pe,
                    "expanded-state-id": "component-state"
                  }, null, 8, ["data", "node-id"])
                ]),
                k.value && T.value ? (d(), B(il, {
                  key: 0,
                  code: T.value,
                  onClose: ln
                }, null, 8, ["code"])) : j("", !0)
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["horizontal"]),
      r(bt) ? (d(), B(r(vn), {
        key: 0,
        modelValue: C.value,
        "onUpdate:modelValue": S[5] || (S[5] = (U) => C.value = U),
        title: "",
        height: "12rem",
        closable: !1
      }, {
        footer: H(() => [
          c("div", xl, [
            y(r(fe), { onClick: ft }, {
              default: H(() => S[11] || (S[11] = [
                Q(" Cancel ")
              ])),
              _: 1
            })
          ])
        ]),
        default: H(() => [
          c("div", Cl, [
            c("span", _l, [
              (d(), h("svg", yl, S[9] || (S[9] = [
                c("g", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2"
                }, [
                  c("circle", {
                    cx: "12",
                    cy: "12",
                    r: ".5",
                    fill: "currentColor"
                  }),
                  c("path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0m7-9v2m-9 7h2m7 7v2m7-9h2" })
                ], -1)
              ])))
            ]),
            S[10] || (S[10] = c("p", null, " Click on a component on the page to select it ", -1))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])) : j("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ xe(bl, [["__scopeId", "data-v-7f4a452a"]]), wl = {}, kl = { class: "h-screen w-screen $ui-fcc flex-col" };
function Il(n, e) {
  return d(), h("div", kl, [
    e[0] || (e[0] = c("div", { class: "outer" }, [
      c("div", { class: "inner" }, [
        c("i", {
          class: "i-logos-vue inline-block h8! w8!",
          alt: "Vue logo"
        })
      ])
    ], -1)),
    Qe(n.$slots, "default", {}, void 0, !0)
  ]);
}
const $l = /* @__PURE__ */ xe(wl, [["render", Il], ["__scopeId", "data-v-b8018f07"]]), Yt = Symbol.for("VueDevToolsCustomInspectorStateSymbol");
function ye() {
  return he(Yt);
}
function pt() {
  const n = R({
    homepage: "",
    id: "",
    label: "",
    logo: "",
    timelineLayerIds: []
  });
  return _e(Yt, n), n;
}
const Sl = {}, Tl = {
  width: "175",
  height: "34",
  viewBox: "0 0 175 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function El(n, e) {
  return d(), h("svg", Tl, e[0] || (e[0] = [
    c("path", {
      fill: "currentColor",
      d: "M0.570999 33.3121V1.80715H10.8288C13.6975 1.80715 16.3198 2.39225 18.6962 3.56242C21.0721 4.73263 22.9701 6.5029 24.3901 8.87327C25.81 11.2136 26.52 14.1091 26.52 17.5596C26.52 20.9801 25.81 23.8756 24.3901 26.2458C22.9701 28.6162 21.0721 30.3868 18.6962 31.5568C16.3198 32.7269 13.6975 33.3121 10.8288 33.3121H0.570999ZM10.1332 27.461C12.9439 27.461 15.2767 26.6812 17.1314 25.1208C18.9858 23.5306 19.913 21.0102 19.913 17.5596C19.913 14.1091 18.9858 11.5887 17.1314 9.99846C15.2767 8.40819 12.9439 7.61306 10.1332 7.61306H7.09085V27.461H10.1332ZM50.3628 25.6159C49.928 28.0463 48.7544 29.9966 46.8421 31.4669C44.9297 32.9368 42.6257 33.672 39.931 33.672C37.5551 33.672 35.5119 33.117 33.8024 32.007C32.1216 30.8668 30.8468 29.3965 29.9772 27.5961C29.1081 25.7961 28.6733 23.9056 28.6733 21.9253C28.6733 19.915 29.0645 18.0247 29.8468 16.2544C30.6584 14.4841 31.8756 13.0439 33.498 11.9337C35.1499 10.8236 37.1491 10.2685 39.4962 10.2685C41.9306 10.2685 43.9589 10.8086 45.5817 11.8888C47.2045 12.9689 48.3924 14.3491 49.1456 16.0294C49.928 17.7097 50.3192 19.4799 50.3192 21.3402C50.3192 22.0303 50.2904 22.7054 50.2324 23.3656H34.4979C34.7295 24.9858 35.3091 26.2612 36.2363 27.191C37.1927 28.0914 38.4243 28.5412 39.931 28.5412C41.1482 28.5412 42.1478 28.3014 42.9301 27.8214C43.7125 27.3111 44.2197 26.5759 44.4513 25.6159H50.3628ZM39.4962 14.8592C38.1055 14.8592 37.0043 15.2343 36.1931 15.9844C35.3815 16.7045 34.8455 17.8447 34.5847 19.4049H44.2777C44.1905 18.0847 43.7269 17.0045 42.8865 16.1644C42.0466 15.2943 40.9162 14.8592 39.4962 14.8592ZM64.1603 33.3121H58.5969L50.599 10.6285H56.7713L61.3788 25.3008L65.9427 10.6285H72.1582L64.1603 33.3121ZM88.2757 33.3121H81.7559V7.61306H72.7585V1.80715H97.2731V7.61306H88.2757V33.3121ZM106.325 33.672C104.123 33.672 102.138 33.1771 100.37 32.1868C98.6029 31.1667 97.2266 29.7717 96.2414 28.0011C95.2562 26.2011 94.7634 24.1907 94.7634 21.9703C94.7634 19.75 95.2562 17.7547 96.2414 15.9844C97.2266 14.1841 98.6029 12.7889 100.37 11.7987C102.138 10.7786 104.123 10.2685 106.325 10.2685C108.528 10.2685 110.513 10.7786 112.28 11.7987C114.048 12.7889 115.424 14.1841 116.409 15.9844C117.395 17.7547 117.887 19.75 117.887 21.9703C117.887 24.1907 117.395 26.2011 116.409 28.0011C115.424 29.7717 114.048 31.1667 112.28 32.1868C110.513 33.1771 108.528 33.672 106.325 33.672ZM106.325 28.2712C107.948 28.2712 109.266 27.6864 110.281 26.5159C111.295 25.3458 111.802 23.8306 111.802 21.9703C111.802 20.08 111.295 18.5498 110.281 17.3796C109.266 16.2094 107.948 15.6243 106.325 15.6243C104.702 15.6243 103.384 16.2094 102.37 17.3796C101.356 18.5498 100.848 20.08 100.848 21.9703C100.848 23.8306 101.356 25.3458 102.37 26.5159C103.384 27.6864 104.702 28.2712 106.325 28.2712ZM131.624 33.672C129.422 33.672 127.436 33.1771 125.669 32.1868C123.901 31.1667 122.525 29.7717 121.54 28.0011C120.555 26.2011 120.062 24.1907 120.062 21.9703C120.062 19.75 120.555 17.7547 121.54 15.9844C122.525 14.1841 123.901 12.7889 125.669 11.7987C127.436 10.7786 129.422 10.2685 131.624 10.2685C133.826 10.2685 135.811 10.7786 137.579 11.7987C139.346 12.7889 140.722 14.1841 141.708 15.9844C142.693 17.7547 143.186 19.75 143.186 21.9703C143.186 24.1907 142.693 26.2011 141.708 28.0011C140.722 29.7717 139.346 31.1667 137.579 32.1868C135.811 33.1771 133.826 33.672 131.624 33.672ZM131.624 28.2712C133.246 28.2712 134.565 27.6864 135.579 26.5159C136.593 25.3458 137.101 23.8306 137.101 21.9703C137.101 20.08 136.593 18.5498 135.579 17.3796C134.565 16.2094 133.246 15.6243 131.624 15.6243C130.001 15.6243 128.682 16.2094 127.668 17.3796C126.654 18.5498 126.147 20.08 126.147 21.9703C126.147 23.8306 126.654 25.3458 127.668 26.5159C128.682 27.6864 130.001 28.2712 131.624 28.2712ZM152.88 33.3121H146.838V0.771999H152.88V33.3121ZM165.652 33.672C162.957 33.672 160.769 32.9522 159.088 31.5117C157.437 30.0418 156.553 28.0914 156.437 25.661H161.653C161.768 26.6812 162.174 27.4913 162.87 28.0914C163.594 28.6613 164.522 28.9463 165.652 28.9463C166.579 28.9463 167.332 28.7363 167.912 28.3163C168.52 27.8963 168.825 27.3712 168.825 26.7412C168.825 25.9008 168.477 25.3159 167.782 24.9858C167.086 24.6557 165.985 24.3557 164.478 24.0856C162.913 23.7856 161.638 23.4556 160.653 23.0955C159.668 22.7354 158.813 22.0903 158.089 21.1602C157.393 20.2 157.045 18.8498 157.045 17.1096C157.045 15.7893 157.379 14.6192 158.045 13.599C158.741 12.5488 159.682 11.7387 160.871 11.1686C162.058 10.5685 163.391 10.2685 164.869 10.2685C167.506 10.2685 169.636 10.9436 171.259 12.2938C172.91 13.644 173.794 15.4293 173.91 17.6496H168.651C168.535 16.7195 168.115 15.9994 167.39 15.4893C166.695 14.9492 165.912 14.6792 165.043 14.6792C164.174 14.6792 163.478 14.8742 162.957 15.2643C162.435 15.6543 162.174 16.1944 162.174 16.8845C162.174 17.7246 162.508 18.2948 163.174 18.5948C163.87 18.8648 164.956 19.1049 166.434 19.3149C168.028 19.5549 169.331 19.855 170.346 20.215C171.389 20.5451 172.287 21.2052 173.041 22.1953C173.794 23.1855 174.171 24.6257 174.171 26.5159C174.171 28.6762 173.389 30.4166 171.824 31.737C170.288 33.0271 168.23 33.672 165.652 33.672Z"
    }, null, -1)
  ]));
}
const Vl = /* @__PURE__ */ xe(Sl, [["render", El]]), Nl = {
  "h-full": "",
  "w-full": "",
  flex: "",
  "items-center": ""
}, Rl = {
  flex: "~ col gap2",
  ma: "",
  "px-5": ""
}, Dl = {
  flex: "~ col",
  "mt-20": "",
  "items-center": ""
}, Pl = {
  flex: "~",
  "mt--10": "",
  "items-center": "",
  "justify-center": ""
}, Al = { class: "mr-1" }, Ml = {
  key: 0,
  class: "inline-block w20"
}, Ll = ["src", "alt"], Hl = {
  key: 1,
  class: "mr2 inline-block min-w-20 text-center text-10 font-600"
}, Ul = {
  mb6: "",
  "mt--1": "",
  "text-center": "",
  "text-sm": "",
  flex: "~ gap-1"
}, Ol = { op40: "" }, jl = { flex: "~ gap2 wrap" }, zl = {
  flex: "~ gap-6 wrap",
  "mt-5": "",
  "items-center": "",
  "justify-center": ""
}, Bl = ["href"], Fl = /* @__PURE__ */ Z({
  __name: "About",
  setup(n) {
    const e = He(), o = ye(), t = R(!1), l = R(!1);
    function s() {
      t.value = !0;
    }
    function p() {
      t.value = !0, l.value = !0;
    }
    return (i, a) => {
      var f;
      return d(), h("div", Nl, [
        c("div", Rl, [
          a[5] || (a[5] = c("div", { "flex-auto": "" }, null, -1)),
          c("div", Dl, [
            c("div", Pl, [
              c("span", Al, [
                t.value ? j("", !0) : (d(), h("span", Ml)),
                q(c("img", {
                  src: r(o).logo,
                  alt: `${r(o).label} Logo`,
                  class: "inline-block h16",
                  onError: p,
                  onLoad: s
                }, null, 40, Ll), [
                  [cn, t.value && !l.value]
                ]),
                l.value ? (d(), h("span", Hl, ie(r(o).label), 1)) : j("", !0)
              ]),
              c("span", null, [
                y(Vl, { "h-18": "" })
              ])
            ]),
            c("div", Ul, [
              c("span", Ol, ie(r(o).label) + " DevTools ", 1)
            ])
          ]),
          a[6] || (a[6] = c("div", { "flex-auto": "" }, null, -1)),
          c("div", jl, [
            c("div", {
              flex: "~ col auto",
              "min-w-40": "",
              p4: "",
              "theme-card-lime": "",
              onClick: a[0] || (a[0] = (v) => r(e).push("/state"))
            }, a[2] || (a[2] = [
              c("div", {
                "i-carbon-tree-view-alt": "",
                "text-3xl": ""
              }, null, -1),
              c("code", null, "State", -1)
            ])),
            (f = r(o).timelineLayerIds) != null && f.length ? (d(), h("div", {
              key: 0,
              flex: "~ col auto",
              "min-w-40": "",
              p4: "",
              "theme-card-lime": "",
              onClick: a[1] || (a[1] = (v) => r(e).push("/timeline"))
            }, a[3] || (a[3] = [
              c("div", {
                "i-mdi:timeline-clock-outline": "",
                "text-3xl": ""
              }, null, -1),
              c("div", null, "Timeline", -1)
            ]))) : j("", !0)
          ]),
          c("div", zl, [
            c("a", {
              href: r(o).homepage,
              target: "_blank",
              flex: "~ gap1",
              "items-center": "",
              op50: "",
              hover: "op100 text-yellow",
              transition: ""
            }, a[4] || (a[4] = [
              c("div", { "i-carbon-document": "" }, null, -1),
              Q(" View Documentation ")
            ]), 8, Bl)
          ]),
          a[7] || (a[7] = c("div", { "flex-auto": "" }, null, -1))
        ])
      ]);
    };
  }
}), Zl = { class: "flex-1 overflow-y-auto p2" }, Kl = { class: "max-w-[190px] flex-1 select-none py-1.5 text-sm" }, Gl = { class: "w-4/5" }, Wl = {
  key: 0,
  class: "flex justify-start"
}, ql = { key: 1 }, Xt = /* @__PURE__ */ Z({
  __name: "Settings",
  props: {
    pluginId: {},
    options: {},
    values: {}
  },
  emits: ["update"],
  setup(n, { emit: e }) {
    const o = n, t = e, l = E(() => o.options), s = E(() => o.values);
    function p(i, a) {
      D.value.updatePluginSettings(o.pluginId, i, a), D.value.getPluginSettings(o.pluginId).then((f) => {
        t("update", f);
      });
    }
    return (i, a) => (d(), h("div", Zl, [
      c("ul", null, [
        (d(!0), h(se, null, de(l.value, (f, v) => (d(), h("li", {
          key: v,
          class: "flex items-center py-2"
        }, [
          c("div", Kl, ie(f.label), 1),
          c("div", Gl, [
            f.type === "boolean" ? (d(), h("div", Wl, [
              y(r(mn), {
                "model-value": s.value[v],
                class: "row-reverse flex hover:bg-active py1 pl2 pr1",
                "onUpdate:modelValue": (u) => p(v, u)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : f.type === "choice" ? (d(), h("div", ql, [
              y(r(hn), {
                "model-value": s.value[v],
                options: f.options,
                "onUpdate:modelValue": (u) => p(v, u)
              }, null, 8, ["model-value", "options", "onUpdate:modelValue"])
            ])) : f.type === "text" ? (d(), B(r(ge), {
              key: 2,
              "model-value": s.value[v],
              "onUpdate:modelValue": (u) => p(v, u)
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : j("", !0)
          ])
        ]))), 128))
      ])
    ]));
  }
}), Jl = { class: "h-full flex flex-col" }, Yl = /* @__PURE__ */ Z({
  __name: "Settings",
  setup(n) {
    const e = he("pluginSettings"), o = ye(), t = E(() => e.value.options), l = E(() => e.value.values);
    function s(p) {
      e.value = p;
    }
    return (p, i) => (d(), h("div", Jl, [
      y(Ve, {
        "doc-link": r(o).homepage
      }, {
        default: H(() => [
          y(Ne)
        ]),
        _: 1
      }, 8, ["doc-link"]),
      y(Xt, {
        "plugin-id": r(o).pluginId,
        options: t.value,
        values: l.value,
        onUpdate: s
      }, null, 8, ["plugin-id", "options", "values"])
    ]));
  }
}), Xl = { class: "h-full flex flex-col" }, Ql = { class: "h-full flex flex-col p2" }, e1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, t1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, n1 = ["onClick"], o1 = {
  key: 0,
  class: "no-scrollbar flex-1 select-none overflow-scroll"
}, l1 = { class: "h-full flex flex-col p2" }, s1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, a1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, i1 = ["onClick"], r1 = /* @__PURE__ */ Z({
  __name: "Index",
  setup(n) {
    const { expanded: e } = Ce(), { expanded: o } = Ce("custom-inspector-state"), t = ye(), l = E(() => t.value.id), s = R([]), p = R([]), i = R([]), a = E(() => {
      var m, _;
      return (m = i.value) != null && m.length ? V((_ = i.value) == null ? void 0 : _[0]) : [];
    }), f = E(() => P(i.value)), v = E(() => f.value.map((m) => m.id)), u = R(""), C = R({}), T = E(() => !Object.keys(C.value).length), k = ye(), g = R(""), $ = R("");
    te(g, (m, _) => {
      !m.trim().length && !_.trim().length || ne(m);
    });
    const z = E(() => nt({
      state: C.value,
      filterKey: $.value
    }));
    function V(m, _ = [], N = []) {
      var M;
      return _.push(m.id), ((M = m.children) == null ? void 0 : M.length) === 0 && N.push([..._]), Array.isArray(m.children) && m.children.forEach((G) => {
        V(G, _, N);
      }), _.pop(), N;
    }
    function x(m, _) {
      const N = [];
      return m == null || m.forEach((M) => {
        N.push(...M.slice(0, _ + 1));
      }), [...new Set(N)];
    }
    function P(m) {
      const _ = [], N = (M) => {
        M == null || M.forEach((G) => {
          var re;
          _.push(G), (re = G.children) != null && re.length && N(G.children);
        });
      };
      return N(m), _;
    }
    function F() {
      D.value.getInspectorNodeActions(l.value).then((m) => {
        s.value = m;
      });
    }
    function K() {
      D.value.getInspectorActions(l.value).then((m) => {
        p.value = m;
      });
    }
    F(), K();
    function ce(m) {
      D.value.callInspectorNodeAction(l.value, m, u.value);
    }
    function L(m) {
      D.value.callInspectorAction(l.value, m);
    }
    function I(m) {
      var _;
      for (const N in m)
        (_ = m[N]) != null && _.length || delete m[N];
      return m;
    }
    function O(m) {
      D.value.getInspectorState({ inspectorId: l.value, nodeId: m }).then((_) => {
        const N = oe(_);
        N && (C.value = I(N), o.value = Array.from({ length: Object.keys(C.value).length }, (M, G) => `${G}`));
      });
    }
    function ee() {
      C.value = {};
    }
    te(u, () => {
      ee(), O(u.value);
    });
    function ne(m = "") {
      D.value.getInspectorTree({ inspectorId: l.value, filter: m }).then((_) => {
        const N = oe(_);
        i.value = N, !u.value && N.length && (u.value = N[0].id, e.value = x(a.value, 1), O(N[0].id));
      });
    }
    Zt(l).toBeTruthy().then(() => ne());
    function A(m) {
      var N, M;
      const _ = oe(m);
      !_.rootNodes.length || _.inspectorId !== l.value || (i.value = _.rootNodes, v.value.includes(u.value) || (u.value = (M = (N = i.value) == null ? void 0 : N[0]) == null ? void 0 : M.id, e.value = x(a.value, 1)));
    }
    function b(m) {
      const _ = oe(m);
      if (_.inspectorId !== l.value || !_.state || _.nodeId !== u.value)
        return;
      const { inspectorId: N, ...M } = _.state;
      C.value = I(M);
    }
    return Me(() => {
      D.functions.on(X.INSPECTOR_TREE_UPDATED, A), D.functions.on(X.INSPECTOR_STATE_UPDATED, b);
    }), ke(() => {
      D.functions.off(X.INSPECTOR_TREE_UPDATED, A), D.functions.off(X.INSPECTOR_STATE_UPDATED, b);
    }), (m, _) => (d(), h("div", Xl, [
      y(Ve, {
        "doc-link": r(t).homepage
      }, {
        default: H(() => [
          y(Ne)
        ]),
        _: 1
      }, 8, ["doc-link"]),
      !i.value.length && !g.value.trim().length ? (d(), B(Te, { key: 0 }, {
        default: H(() => _[3] || (_[3] = [
          Q(" No Data ")
        ])),
        _: 1
      })) : (d(), B(r(Le), {
        key: 1,
        class: "flex-1 overflow-auto"
      }, {
        default: H(() => [
          y(r(pe), {
            border: "r base",
            size: "40",
            "h-full": ""
          }, {
            default: H(() => {
              var N;
              return [
                c("div", Ql, [
                  c("div", e1, [
                    y(r(ge), {
                      modelValue: g.value,
                      "onUpdate:modelValue": _[0] || (_[0] = (M) => g.value = M),
                      placeholder: r(k).treeFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (N = p.value) != null && N.length ? (d(), h("div", t1, [
                      (d(!0), h(se, null, de(p.value, (M, G) => q((d(), h("div", {
                        key: G,
                        class: "flex items-center gap1",
                        onClick: (re) => L(G)
                      }, [
                        y(r(Ke), {
                          name: `baseline-${M.icon.replace(/\_/g, "-")}`,
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 8, ["name"])
                      ], 8, n1)), [
                        [
                          r(J),
                          { content: M.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : j("", !0)
                  ]),
                  i.value.length ? (d(), h("div", o1, [
                    y(Oe, {
                      modelValue: u.value,
                      "onUpdate:modelValue": _[1] || (_[1] = (M) => u.value = M),
                      data: i.value
                    }, null, 8, ["modelValue", "data"])
                  ])) : (d(), B(Te, { key: 1 }, {
                    default: H(() => _[4] || (_[4] = [
                      Q(" No Data ")
                    ])),
                    _: 1
                  }))
                ])
              ];
            }),
            _: 1
          }),
          y(r(pe), { size: "60" }, {
            default: H(() => {
              var N;
              return [
                c("div", l1, [
                  c("div", s1, [
                    y(r(ge), {
                      modelValue: $.value,
                      "onUpdate:modelValue": _[2] || (_[2] = (M) => $.value = M),
                      placeholder: r(k).stateFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (N = s.value) != null && N.length ? (d(), h("div", a1, [
                      (d(!0), h(se, null, de(s.value, (M, G) => q((d(), h("div", {
                        key: G,
                        class: "flex items-center gap1",
                        onClick: (re) => ce(G)
                      }, [
                        y(r(Ke), {
                          name: `baseline-${M.icon.replace(/\_/g, "-")}`,
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 8, ["name"])
                      ], 8, i1)), [
                        [
                          r(J),
                          { content: M.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : j("", !0)
                  ]),
                  u.value && !T.value ? (d(), B(Ue, {
                    key: 0,
                    data: z.value,
                    "node-id": u.value,
                    "inspector-id": l.value,
                    "expanded-state-id": "custom-inspector-state",
                    class: "no-scrollbar flex-1 overflow-scroll"
                  }, null, 8, ["data", "node-id", "inspector-id"])) : (d(), B(Te, { key: 1 }, {
                    default: H(() => _[5] || (_[5] = [
                      Q(" No Data ")
                    ])),
                    _: 1
                  }))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }))
    ]));
  }
}), u1 = /* @__PURE__ */ Z({
  __name: "Index",
  setup(n) {
    const e = ye();
    return (o, t) => (d(), B(dt, {
      "layer-ids": r(e).timelineLayerIds,
      "doc-link": r(e).homepage,
      "plugin-id": r(e).pluginId
    }, null, 8, ["layer-ids", "doc-link", "plugin-id"]));
  }
}), c1 = {
  "h-full": "",
  "w-full": ""
}, d1 = { key: 0 }, vs = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    id: {},
    pluginId: {}
  },
  emits: ["loadError"],
  setup(n, { emit: e }) {
    const o = n, t = e, l = pt(), s = R(!1), p = R(null);
    _e("pluginSettings", p);
    const i = E(() => {
      var u;
      return [
        {
          path: "/state",
          name: "State",
          component: r1,
          icon: "i-carbon-tree-view-alt"
        },
        ((u = l.value.timelineLayerIds) == null ? void 0 : u.length) && {
          path: "/timeline",
          name: "Timeline",
          component: u1,
          icon: "i-mdi:timeline-clock-outline"
        },
        {
          path: "/about",
          name: "About",
          component: Fl
        },
        p.value && {
          path: "/settings",
          name: "Settings",
          component: Yl,
          icon: "i-mdi:cog-outline"
        }
      ].filter(Boolean);
    }), { VirtualRouterView: a, restoreRouter: f } = lt(i, {
      defaultRoutePath: "/state"
    });
    function v() {
      s.value = !0, Me(() => {
        D.value.getInspectorInfo(o.id).then((u) => {
          if (!u) {
            t("loadError");
            return;
          }
          const C = {
            homepage: u == null ? void 0 : u.homepage,
            id: u == null ? void 0 : u.id,
            label: u == null ? void 0 : u.label,
            logo: u == null ? void 0 : u.logo,
            timelineLayerIds: u == null ? void 0 : u.timelineLayers.map((T) => T.id),
            pluginId: o.pluginId,
            treeFilterPlaceholder: u.treeFilterPlaceholder,
            stateFilterPlaceholder: u.stateFilterPlaceholder
          };
          l.value = C, f(), s.value = !1;
        }), D.value.getPluginSettings(o.pluginId).then((u) => {
          u.options ? p.value = u : p.value = null;
        });
      });
    }
    return te(() => o.id, () => {
      v();
    }, {
      immediate: !0
    }), ke(() => {
      D.value.unhighlight();
    }), (u, C) => (d(), h("div", c1, [
      s.value ? (d(), h("div", d1, [
        y($l)
      ])) : (d(), B(r(a), { key: 1 }))
    ]));
  }
}), p1 = {}, f1 = {
  viewBox: "0 0 566 154",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function v1(n, e) {
  return d(), h("svg", f1, e[0] || (e[0] = [
    dn('<svg height="130" viewBox="0 0 319 477" width="180" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a"><stop offset="0" stop-color="#52ce63"></stop><stop offset="1" stop-color="#51a256"></stop></linearGradient><linearGradient id="b" x1="55.342075%" x2="42.816933%" xlink:href="#a" y1="0%" y2="42.862855%"></linearGradient><linearGradient id="c" x1="55.348642%" x2="42.808103%" xlink:href="#a" y1="0%" y2="42.862855%"></linearGradient><linearGradient id="d" x1="50%" x2="50%" y1="0%" y2="58.811243%"><stop offset="0" stop-color="#8ae99c"></stop><stop offset="1" stop-color="#52ce63"></stop></linearGradient><linearGradient id="e" x1="51.37763%" x2="44.584719%" y1="17.472551%" y2="100%"><stop offset="0" stop-color="#ffe56c"></stop><stop offset="1" stop-color="#ffc63a"></stop></linearGradient><g fill="none" fill-rule="evenodd" transform="translate(-34 -24)"><g transform="matrix(.99254615 .12186934 -.12186934 .99254615 33.922073 .976691)"><path d="m103.950535 258.274149c44.361599-4.360825 60.014503-40.391282 65.353094-94.699444s-30.93219-103.451001-46.020347-101.9678079c-15.088156 1.4831932-63.0385313 58.9051239-68.3771222 113.2132869-5.3385908 54.308162 4.6827754 87.814791 49.0443752 83.453965z" fill="url(#b)" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -80.496332 125.892944)"></path><path d="m275.876752 258.273992c44.3616 4.360826 53.167133-29.265322 47.828542-83.573485-5.338591-54.308162-52.073133-111.6105744-67.16129-113.0937675-15.088156-1.4831931-52.57477 47.5401275-47.236179 101.8482895s22.207328 90.458137 66.568927 94.818963z" fill="url(#c)" transform="matrix(.70710678 .70710678 -.70710678 .70710678 191.403399 -141.861963)"></path><path d="m188.370027 216.876305c39.941834 0 50.95265-38.251987 50.95265-97.89874 0-59.6467532-37.367733-118.10125956-50.95265-118.10125956s-52.04735 58.45450636-52.04735 118.10125956c0 59.646753 12.105516 97.89874 52.04735 97.89874z" fill="url(#d)"></path></g><path d="m184.473473 501c83.118854 0 150.526527-24.145148 150.526527-133.645148s-67.407673-199.354852-150.526527-199.354852c-83.118855 0-150.473473 89.854852-150.473473 199.354852s67.354618 133.645148 150.473473 133.645148z" fill="url(#e)"></path><ellipse cx="260.5" cy="335" fill="#eaadcc" rx="21.5" ry="10"></ellipse><ellipse cx="102.5" cy="329" fill="#eaadcc" rx="21.5" ry="10" transform="matrix(.99254615 .12186934 -.12186934 .99254615 40.859033 -10.039292)"></ellipse><g transform="matrix(-.99939083 .0348995 .0348995 .99939083 269.284825 271.027667)"><path d="m73.1046985 58.2728794c6.7372416 4.9130333 14.3132632 6.6640587 22.7280649 5.2530761 8.4148016-1.4109825 14.5054466-5.2535769 18.2719346-11.527783" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" transform="matrix(.9998477 .01745241 -.01745241 .9998477 1.026464 -1.624794)"></path><path d="m154.501124 3c-5.937545 0-11.312782 2.40629805-15.203644 6.29680621-3.89094 3.89058529-6.29748 9.26545449-6.29748 15.20263179 0 5.9376888 2.406488 11.3127422 6.297291 15.2034272 3.890886 3.8907673 9.266197 6.2971348 15.203833 6.2971348 5.937109 0 11.311896-2.4063889 15.202387-6.2972348 3.890299-3.8906535 6.296489-9.2656636 6.296489-15.2033272 0-5.9371521-2.406242-11.3119781-6.296677-15.20253181-3.890469-3.89058674-9.265181-6.29690619-15.202199-6.29690619z" fill="#000"></path><path d="m154 21c0-3.865549 3.135362-7 6.999413-7 3.866399 0 7.000587 3.134451 7.000587 7s-3.134188 7-7.000587 7c-3.864051-.0011735-6.999413-3.134451-6.999413-7z" fill="#fff"></path><path d="m24.5 13c-5.9375292 0-11.312426 2.406268-15.20299427 6.2967181-3.89069464 3.8905765-6.29700573 9.2654765-6.29700573 15.2027199 0 5.9377549 2.40625962 11.3128391 6.29681766 15.2035153 3.89059104 3.8907092 9.26556184 6.2970467 15.20318234 6.2970467 5.9371249 0 11.3122514-2.406419 15.2030371-6.2973229 3.8905441-3.8906623 6.2969629-9.2656416 6.2969629-15.2032391 0-5.937086-2.4064703-11.3118811-6.297151-15.2024437-3.890763-3.8906448-9.2658154-6.2969943-15.202849-6.2969943z" fill="#000"></path><g fill="#fff"><path d="m136 24.499438c0 10.2185232 8.282911 18.500562 18.501124 18.500562 10.217089 0 18.498876-8.2820388 18.498876-18.500562 0-10.2173992-8.281787-18.499438-18.498876-18.499438-10.218213 0-18.501124 8.2820388-18.501124 18.499438zm-6 0c0-13.5311954 10.96929-24.499438 24.501124-24.499438 13.530838 0 24.498876 10.9683711 24.498876 24.499438 0 13.5319607-10.967808 24.500562-24.498876 24.500562-13.532064 0-24.501124-10.9684728-24.501124-24.500562z" fill-rule="nonzero" stroke="#fff" stroke-width="3"></path><path d="m6 34.499438c0 10.2185232 8.2817873 18.500562 18.5 18.500562 10.2170889 0 18.5-8.2820388 18.5-18.500562 0-10.2173992-8.2829111-18.499438-18.5-18.499438-10.2182127 0-18.5 8.2820388-18.5 18.499438zm-6 0c0-13.531297 10.9682681-24.499438 24.5-24.499438 13.5309398 0 24.5 10.9684728 24.5 24.499438 0 13.5318591-10.96883 24.500562-24.5 24.500562-13.531962 0-24.5-10.9683711-24.5-24.500562z" fill-rule="nonzero" stroke="#fff" stroke-width="3"></path><path d="m24 31c0-3.865549 3.134451-7 7-7s7 3.134451 7 7-3.134451 7-7 7-7-3.134451-7-7z"></path></g></g><g stroke-linecap="round" stroke-width="11"><g stroke="#ecb732"><path d="m70.5 377.5 74 77"></path><path d="m134.5 386.5-47 50"></path></g><g stroke="#ecb732" transform="matrix(-1 0 0 1 298 377)"><path d="m.5.5 74 77"></path><path d="m64.5 9.5-47 50"></path></g><g stroke="#ffc73b" transform="matrix(0 1 -1 0 215 207)"><path d="m.5.5 49 49"></path><path d="m.5 10.5 49 49" transform="matrix(-1 0 0 1 50 0)"></path></g></g></g></svg><path d="M152.571 118V46.1333H176.8C183.576 46.1333 189.77 47.468 195.383 50.1373C200.995 52.8067 205.478 56.8449 208.832 62.252C212.186 67.5907 213.863 74.1956 213.863 82.0667C213.863 89.8693 212.186 96.4742 208.832 101.881C205.478 107.288 200.995 111.327 195.383 113.996C189.77 116.665 183.576 118 176.8 118H152.571ZM175.157 104.653C181.796 104.653 187.306 102.874 191.687 99.3147C196.067 95.6871 198.257 89.9378 198.257 82.0667C198.257 74.1956 196.067 68.4462 191.687 64.8187C187.306 61.1911 181.796 59.3773 175.157 59.3773H167.971V104.653H175.157ZM270.18 100.444C269.153 105.988 266.381 110.437 261.864 113.791C257.347 117.144 251.905 118.821 245.54 118.821C239.928 118.821 235.102 117.555 231.064 115.023C227.094 112.422 224.083 109.068 222.029 104.961C219.976 100.855 218.949 96.5427 218.949 92.0253C218.949 87.4396 219.873 83.1276 221.721 79.0893C223.638 75.0511 226.513 71.7658 230.345 69.2333C234.247 66.7009 238.969 65.4347 244.513 65.4347C250.263 65.4347 255.054 66.6667 258.887 69.1307C262.72 71.5947 265.526 74.7431 267.305 78.576C269.153 82.4089 270.077 86.4471 270.077 90.6907C270.077 92.2649 270.009 93.8049 269.872 95.3107H232.707C233.254 99.0067 234.623 101.916 236.813 104.037C239.072 106.091 241.981 107.117 245.54 107.117C248.415 107.117 250.776 106.57 252.624 105.475C254.472 104.311 255.67 102.634 256.217 100.444H270.18ZM244.513 75.9067C241.228 75.9067 238.627 76.7622 236.711 78.4733C234.794 80.116 233.528 82.7169 232.912 86.276H255.807C255.601 83.2644 254.506 80.8004 252.521 78.884C250.537 76.8991 247.867 75.9067 244.513 75.9067ZM302.77 118H289.629L270.738 66.256H285.317L296.2 99.7253L306.98 66.256H321.661L302.77 118ZM359.731 118H344.331V59.3773H323.079V46.1333H380.983V59.3773H359.731V118ZM402.364 118.821C397.163 118.821 392.474 117.692 388.299 115.433C384.124 113.106 380.873 109.924 378.546 105.885C376.219 101.779 375.055 97.1929 375.055 92.128C375.055 87.0631 376.219 82.5116 378.546 78.4733C380.873 74.3667 384.124 71.184 388.299 68.9253C392.474 66.5982 397.163 65.4347 402.364 65.4347C407.566 65.4347 412.255 66.5982 416.43 68.9253C420.605 71.184 423.856 74.3667 426.183 78.4733C428.51 82.5116 429.674 87.0631 429.674 92.128C429.674 97.1929 428.51 101.779 426.183 105.885C423.856 109.924 420.605 113.106 416.43 115.433C412.255 117.692 407.566 118.821 402.364 118.821ZM402.364 106.501C406.197 106.501 409.311 105.167 411.707 102.497C414.103 99.828 415.3 96.3716 415.3 92.128C415.3 87.816 414.103 84.3253 411.707 81.656C409.311 78.9867 406.197 77.652 402.364 77.652C398.531 77.652 395.417 78.9867 393.022 81.656C390.626 84.3253 389.428 87.816 389.428 92.128C389.428 96.3716 390.626 99.828 393.022 102.497C395.417 105.167 398.531 106.501 402.364 106.501ZM462.12 118.821C456.918 118.821 452.229 117.692 448.054 115.433C443.879 113.106 440.628 109.924 438.301 105.885C435.974 101.779 434.81 97.1929 434.81 92.128C434.81 87.0631 435.974 82.5116 438.301 78.4733C440.628 74.3667 443.879 71.184 448.054 68.9253C452.229 66.5982 456.918 65.4347 462.12 65.4347C467.321 65.4347 472.01 66.5982 476.185 68.9253C480.36 71.184 483.611 74.3667 485.938 78.4733C488.265 82.5116 489.429 87.0631 489.429 92.128C489.429 97.1929 488.265 101.779 485.938 105.885C483.611 109.924 480.36 113.106 476.185 115.433C472.01 117.692 467.321 118.821 462.12 118.821ZM462.12 106.501C465.952 106.501 469.067 105.167 471.462 102.497C473.858 99.828 475.056 96.3716 475.056 92.128C475.056 87.816 473.858 84.3253 471.462 81.656C469.067 78.9867 465.952 77.652 462.12 77.652C458.287 77.652 455.172 78.9867 452.777 81.656C450.381 84.3253 449.184 87.816 449.184 92.128C449.184 96.3716 450.381 99.828 452.777 102.497C455.172 105.167 458.287 106.501 462.12 106.501ZM512.327 118H498.056V43.772H512.327V118ZM542.494 118.821C536.129 118.821 530.961 117.179 526.991 113.893C523.09 110.54 521.002 106.091 520.729 100.547H533.049C533.322 102.874 534.281 104.722 535.923 106.091C537.634 107.391 539.825 108.041 542.494 108.041C544.684 108.041 546.464 107.562 547.833 106.604C549.27 105.646 549.989 104.448 549.989 103.011C549.989 101.094 549.167 99.7596 547.525 99.0067C545.882 98.2538 543.281 97.5693 539.722 96.9533C536.026 96.2689 533.014 95.516 530.687 94.6947C528.36 93.8733 526.341 92.4018 524.63 90.28C522.987 88.0898 522.166 85.0098 522.166 81.04C522.166 78.0284 522.953 75.3591 524.527 73.032C526.17 70.6364 528.394 68.7884 531.201 67.488C534.007 66.1191 537.155 65.4347 540.646 65.4347C546.874 65.4347 551.905 66.9747 555.738 70.0547C559.639 73.1347 561.727 77.2071 562.001 82.272H549.578C549.304 80.1502 548.312 78.5076 546.601 77.344C544.958 76.112 543.11 75.496 541.057 75.496C539.003 75.496 537.361 75.9409 536.129 76.8307C534.897 77.7204 534.281 78.9524 534.281 80.5267C534.281 82.4431 535.068 83.7436 536.642 84.428C538.285 85.044 540.851 85.5916 544.342 86.0707C548.106 86.6182 551.186 87.3027 553.582 88.124C556.046 88.8769 558.168 90.3827 559.947 92.6413C561.727 94.9 562.617 98.1853 562.617 102.497C562.617 107.425 560.769 111.395 557.073 114.407C553.445 117.35 548.585 118.821 542.494 118.821Z" fill="currentColor"></path>', 2)
  ]));
}
const m1 = /* @__PURE__ */ xe(p1, [["render", v1]]), h1 = {
  "h-full": "",
  "w-full": "",
  flex: "",
  "items-center": ""
}, g1 = {
  flex: "~ col gap2",
  ma: "",
  "px-5": ""
}, C1 = {
  flex: "~ col",
  "mt-20": "",
  "items-center": ""
}, _1 = {
  flex: "~",
  "mt--10": "",
  "items-center": "",
  "justify-center": ""
}, y1 = { flex: "~ gap2 wrap" }, x1 = /* @__PURE__ */ Z({
  __name: "About",
  setup(n) {
    const e = He();
    return (o, t) => (d(), h("div", h1, [
      c("div", g1, [
        t[5] || (t[5] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", C1, [
          c("div", _1, [
            y(m1, { "h-18": "" })
          ]),
          t[2] || (t[2] = c("div", {
            mb6: "",
            "mt--1": "",
            "text-center": "",
            "text-sm": "",
            flex: "~ gap-1"
          }, [
            c("span", { op40: "" }, " Pinia DevTools ")
          ], -1))
        ]),
        t[6] || (t[6] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", y1, [
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[0] || (t[0] = (l) => r(e).push("/store"))
          }, t[3] || (t[3] = [
            c("div", {
              "i-carbon-tree-view-alt": "",
              "text-3xl": ""
            }, null, -1),
            c("code", null, "Store", -1)
          ])),
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[1] || (t[1] = (l) => r(e).push("/timeline"))
          }, t[4] || (t[4] = [
            c("div", {
              "i-mdi:timeline-clock-outline": "",
              "text-3xl": ""
            }, null, -1),
            c("div", null, "Timeline", -1)
          ]))
        ]),
        t[7] || (t[7] = c("div", {
          flex: "~ gap-6 wrap",
          "mt-5": "",
          "items-center": "",
          "justify-center": ""
        }, [
          c("a", {
            href: "https://github.com/vuejs/pinia",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-blue",
            transition: ""
          }, [
            c("div", { "i-carbon-star": "" }),
            Q(" Star on GitHub ")
          ]),
          c("a", {
            href: "https://pinia.vuejs.org/",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-yellow",
            transition: ""
          }, [
            c("div", { "i-carbon-document": "" }),
            Q(" View Documentation ")
          ])
        ], -1)),
        t[8] || (t[8] = c("div", { "flex-auto": "" }, null, -1))
      ])
    ]));
  }
}), b1 = { class: "h-full flex flex-col" }, w1 = /* @__PURE__ */ Z({
  __name: "Settings",
  setup(n) {
    const e = he("pluginSettings"), o = E(() => e.value.options), t = E(() => e.value.values);
    function l(s) {
      e.value = s;
    }
    return (s, p) => (d(), h("div", b1, [
      y(Ve, {
        "doc-link": "https://pinia.vuejs.org/",
        "github-repo-link": "https://github.com/vuejs/pinia"
      }, {
        default: H(() => [
          y(Ne)
        ]),
        _: 1
      }),
      y(Xt, {
        "plugin-id": "dev.esm.pinia",
        options: o.value,
        values: t.value,
        onUpdate: l
      }, null, 8, ["options", "values"])
    ]));
  }
}), k1 = "dev.esm.pinia", Qt = "pinia", I1 = { class: "h-full flex flex-col" }, $1 = { class: "h-full flex flex-col p2" }, S1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, T1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, E1 = ["onClick"], V1 = { class: "no-scrollbar flex-1 select-none overflow-scroll" }, N1 = { class: "h-full flex flex-col p2" }, R1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, D1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, P1 = ["onClick"], A1 = /* @__PURE__ */ Z({
  __name: "Index",
  setup(n) {
    const { expanded: e } = Ce(), { expanded: o } = Ce("pinia-store-state"), t = Qt, l = R([]), s = R([]), p = ye(), i = R(""), a = R([]), f = E(() => {
      var b, m;
      return (b = a.value) != null && b.length ? z((m = a.value) == null ? void 0 : m[0]) : [];
    }), v = E(() => x(a.value)), u = E(() => v.value.map((b) => b.id)), C = R({}), T = R(""), k = R("");
    te(T, (b, m) => {
      !b.trim().length && !m.trim().length || ee(b);
    });
    const g = E(() => nt({
      state: C.value,
      filterKey: k.value
    })), $ = E(() => {
      var b, m;
      return !((b = C.value.state) != null && b.length) && !((m = C.value.getters) != null && m.length);
    });
    function z(b, m = [], _ = []) {
      var N;
      return m.push(b.id), ((N = b.children) == null ? void 0 : N.length) === 0 && _.push([...m]), Array.isArray(b.children) && b.children.forEach((M) => {
        z(M, m, _);
      }), m.pop(), _;
    }
    function V(b, m) {
      const _ = [];
      return b == null || b.forEach((N) => {
        _.push(...N.slice(0, m + 1));
      }), [...new Set(_)];
    }
    function x(b) {
      const m = [], _ = (N) => {
        N == null || N.forEach((M) => {
          var G;
          m.push(M), (G = M.children) != null && G.length && _(M.children);
        });
      };
      return _(b), m;
    }
    function P() {
      D.value.getInspectorNodeActions(t).then((b) => {
        l.value = b;
      });
    }
    function F() {
      D.value.getInspectorActions(t).then((b) => {
        s.value = b;
      });
    }
    P(), F();
    function K(b) {
      D.value.callInspectorNodeAction(t, b, i.value);
    }
    function ce(b) {
      D.value.callInspectorAction(t, b);
    }
    function L(b) {
      var m;
      for (const _ in b)
        (m = b[_]) != null && m.length || delete b[_];
      return b;
    }
    function I(b) {
      D.value.getInspectorState({ inspectorId: t, nodeId: b }).then((m) => {
        const _ = oe(m);
        _ && (C.value = L(_), o.value = Array.from({ length: Object.keys(C.value).length }, (N, M) => `${M}`));
      });
    }
    function O() {
      C.value = {};
    }
    te(i, () => {
      O(), I(i.value);
    });
    function ee(b = "") {
      D.value.getInspectorTree({ inspectorId: t, filter: b }).then((m) => {
        const _ = oe(m);
        a.value = _, !i.value && _.length && (i.value = _[0].id, I(_[0].id), e.value = V(f.value, 1));
      });
    }
    ee();
    function ne(b) {
      const m = oe(b);
      m.inspectorId !== t || !m.rootNodes.length || (a.value = m.rootNodes, u.value.includes(i.value) || (i.value = m.rootNodes[0].id, e.value = V(f.value, 1), I(m.rootNodes[0].id)));
    }
    function A(b) {
      const m = oe(b);
      if (m.inspectorId !== t)
        return;
      const _ = m.state;
      _ && (C.value = L({
        state: _.state,
        getters: _.getters
      }));
    }
    return D.functions.on(X.INSPECTOR_TREE_UPDATED, ne), D.functions.on(X.INSPECTOR_STATE_UPDATED, A), ke(() => {
      D.functions.off(X.INSPECTOR_TREE_UPDATED, ne), D.functions.off(X.INSPECTOR_STATE_UPDATED, A);
    }), (b, m) => (d(), h("div", I1, [
      y(Ve, {
        "doc-link": "https://pinia.vuejs.org/",
        "github-repo-link": "https://github.com/vuejs/pinia"
      }, {
        default: H(() => [
          y(Ne)
        ]),
        _: 1
      }),
      y(r(Le), { class: "flex-1 overflow-auto" }, {
        default: H(() => [
          y(r(pe), {
            border: "r base",
            size: "40",
            "h-full": ""
          }, {
            default: H(() => {
              var _;
              return [
                c("div", $1, [
                  c("div", S1, [
                    y(r(ge), {
                      modelValue: T.value,
                      "onUpdate:modelValue": m[0] || (m[0] = (N) => T.value = N),
                      placeholder: r(p).treeFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (_ = s.value) != null && _.length ? (d(), h("div", T1, [
                      (d(!0), h(se, null, de(s.value, (N, M) => q((d(), h("div", {
                        key: M,
                        class: "flex items-center gap1",
                        onClick: (G) => ce(M)
                      }, [
                        c("i", {
                          class: ae(`i-ic-baseline-${N.icon.replace(/\_/g, "-")}`),
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 2)
                      ], 8, E1)), [
                        [
                          r(J),
                          { content: N.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : j("", !0)
                  ]),
                  c("div", V1, [
                    y(Oe, {
                      modelValue: i.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (N) => i.value = N),
                      data: a.value
                    }, null, 8, ["modelValue", "data"])
                  ])
                ])
              ];
            }),
            _: 1
          }),
          y(r(pe), { size: "60" }, {
            default: H(() => {
              var _;
              return [
                c("div", N1, [
                  c("div", R1, [
                    y(r(ge), {
                      modelValue: k.value,
                      "onUpdate:modelValue": m[2] || (m[2] = (N) => k.value = N),
                      placeholder: r(p).stateFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (_ = l.value) != null && _.length ? (d(), h("div", D1, [
                      (d(!0), h(se, null, de(l.value, (N, M) => q((d(), h("div", {
                        key: M,
                        class: "flex items-center gap1",
                        onClick: (G) => K(M)
                      }, [
                        c("i", {
                          class: ae(`i-ic-baseline-${N.icon.replace(/\_/g, "-")}`),
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 2)
                      ], 8, P1)), [
                        [
                          r(J),
                          { content: N.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : j("", !0)
                  ]),
                  i.value && !$.value ? (d(), B(Ue, {
                    key: 0,
                    class: "no-scrollbar flex-1 overflow-scroll",
                    data: g.value,
                    "node-id": i.value,
                    "inspector-id": r(t),
                    "expanded-state-id": "pinia-store-state"
                  }, null, 8, ["data", "node-id", "inspector-id"])) : (d(), B(Te, { key: 1 }, {
                    default: H(() => m[3] || (m[3] = [
                      Q(" No Data ")
                    ])),
                    _: 1
                  }))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), M1 = "dev.esm.pinia", L1 = /* @__PURE__ */ Z({
  __name: "Index",
  setup(n) {
    const e = ["pinia:mutations"];
    return (o, t) => (d(), B(dt, {
      "layer-ids": e,
      "doc-link": "https://pinia.vuejs.org/",
      "plugin-id": M1,
      "github-repo-link": "https://github.com/vuejs/pinia"
    }));
  }
}), H1 = {
  "h-full": "",
  "w-full": ""
}, ms = /* @__PURE__ */ Z({
  __name: "index",
  setup(n) {
    const e = R(null);
    _e("pluginSettings", e);
    const o = E(() => [
      {
        path: "/store",
        name: "Store",
        component: A1,
        icon: "i-carbon-tree-view-alt"
      },
      {
        path: "/timeline",
        name: "Timeline",
        component: L1,
        icon: "i-mdi:timeline-clock-outline"
      },
      {
        path: "/",
        name: "About",
        component: x1,
        icon: "i-logos-pinia"
      },
      e.value && {
        path: "/settings",
        name: "Settings",
        component: w1,
        icon: "i-mdi:cog-outline"
      }
    ].filter(Boolean)), { VirtualRouterView: t } = lt(o, {
      defaultRoutePath: "/store"
    }), l = pt();
    return Me(() => {
      D.value.getPluginSettings(k1).then((s) => {
        s.options ? e.value = s : e.value = null;
      }), D.value.getInspectorInfo(Qt).then((s) => {
        s && (l.value = {
          stateFilterPlaceholder: s.stateFilterPlaceholder,
          treeFilterPlaceholder: s.treeFilterPlaceholder
        });
      });
    }), (s, p) => (d(), h("div", H1, [
      y(r(t))
    ]));
  }
}), U1 = {}, O1 = {
  viewBox: "0 0 566 154",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function j1(n, e) {
  return d(), h("svg", O1, e[0] || (e[0] = [
    c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "8em",
      height: "8em",
      viewBox: "0 -4 24 24"
    }, [
      c("path", {
        fill: "#3dd68c",
        d: "M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 0 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5l-4-5zm15-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
      })
    ], -1),
    c("path", {
      d: "M152.571 118V46.1333H176.8C183.576 46.1333 189.77 47.468 195.383 50.1373C200.995 52.8067 205.478 56.8449 208.832 62.252C212.186 67.5907 213.863 74.1956 213.863 82.0667C213.863 89.8693 212.186 96.4742 208.832 101.881C205.478 107.288 200.995 111.327 195.383 113.996C189.77 116.665 183.576 118 176.8 118H152.571ZM175.157 104.653C181.796 104.653 187.306 102.874 191.687 99.3147C196.067 95.6871 198.257 89.9378 198.257 82.0667C198.257 74.1956 196.067 68.4462 191.687 64.8187C187.306 61.1911 181.796 59.3773 175.157 59.3773H167.971V104.653H175.157ZM270.18 100.444C269.153 105.988 266.381 110.437 261.864 113.791C257.347 117.144 251.905 118.821 245.54 118.821C239.928 118.821 235.102 117.555 231.064 115.023C227.094 112.422 224.083 109.068 222.029 104.961C219.976 100.855 218.949 96.5427 218.949 92.0253C218.949 87.4396 219.873 83.1276 221.721 79.0893C223.638 75.0511 226.513 71.7658 230.345 69.2333C234.247 66.7009 238.969 65.4347 244.513 65.4347C250.263 65.4347 255.054 66.6667 258.887 69.1307C262.72 71.5947 265.526 74.7431 267.305 78.576C269.153 82.4089 270.077 86.4471 270.077 90.6907C270.077 92.2649 270.009 93.8049 269.872 95.3107H232.707C233.254 99.0067 234.623 101.916 236.813 104.037C239.072 106.091 241.981 107.117 245.54 107.117C248.415 107.117 250.776 106.57 252.624 105.475C254.472 104.311 255.67 102.634 256.217 100.444H270.18ZM244.513 75.9067C241.228 75.9067 238.627 76.7622 236.711 78.4733C234.794 80.116 233.528 82.7169 232.912 86.276H255.807C255.601 83.2644 254.506 80.8004 252.521 78.884C250.537 76.8991 247.867 75.9067 244.513 75.9067ZM302.77 118H289.629L270.738 66.256H285.317L296.2 99.7253L306.98 66.256H321.661L302.77 118ZM359.731 118H344.331V59.3773H323.079V46.1333H380.983V59.3773H359.731V118ZM402.364 118.821C397.163 118.821 392.474 117.692 388.299 115.433C384.124 113.106 380.873 109.924 378.546 105.885C376.219 101.779 375.055 97.1929 375.055 92.128C375.055 87.0631 376.219 82.5116 378.546 78.4733C380.873 74.3667 384.124 71.184 388.299 68.9253C392.474 66.5982 397.163 65.4347 402.364 65.4347C407.566 65.4347 412.255 66.5982 416.43 68.9253C420.605 71.184 423.856 74.3667 426.183 78.4733C428.51 82.5116 429.674 87.0631 429.674 92.128C429.674 97.1929 428.51 101.779 426.183 105.885C423.856 109.924 420.605 113.106 416.43 115.433C412.255 117.692 407.566 118.821 402.364 118.821ZM402.364 106.501C406.197 106.501 409.311 105.167 411.707 102.497C414.103 99.828 415.3 96.3716 415.3 92.128C415.3 87.816 414.103 84.3253 411.707 81.656C409.311 78.9867 406.197 77.652 402.364 77.652C398.531 77.652 395.417 78.9867 393.022 81.656C390.626 84.3253 389.428 87.816 389.428 92.128C389.428 96.3716 390.626 99.828 393.022 102.497C395.417 105.167 398.531 106.501 402.364 106.501ZM462.12 118.821C456.918 118.821 452.229 117.692 448.054 115.433C443.879 113.106 440.628 109.924 438.301 105.885C435.974 101.779 434.81 97.1929 434.81 92.128C434.81 87.0631 435.974 82.5116 438.301 78.4733C440.628 74.3667 443.879 71.184 448.054 68.9253C452.229 66.5982 456.918 65.4347 462.12 65.4347C467.321 65.4347 472.01 66.5982 476.185 68.9253C480.36 71.184 483.611 74.3667 485.938 78.4733C488.265 82.5116 489.429 87.0631 489.429 92.128C489.429 97.1929 488.265 101.779 485.938 105.885C483.611 109.924 480.36 113.106 476.185 115.433C472.01 117.692 467.321 118.821 462.12 118.821ZM462.12 106.501C465.952 106.501 469.067 105.167 471.462 102.497C473.858 99.828 475.056 96.3716 475.056 92.128C475.056 87.816 473.858 84.3253 471.462 81.656C469.067 78.9867 465.952 77.652 462.12 77.652C458.287 77.652 455.172 78.9867 452.777 81.656C450.381 84.3253 449.184 87.816 449.184 92.128C449.184 96.3716 450.381 99.828 452.777 102.497C455.172 105.167 458.287 106.501 462.12 106.501ZM512.327 118H498.056V43.772H512.327V118ZM542.494 118.821C536.129 118.821 530.961 117.179 526.991 113.893C523.09 110.54 521.002 106.091 520.729 100.547H533.049C533.322 102.874 534.281 104.722 535.923 106.091C537.634 107.391 539.825 108.041 542.494 108.041C544.684 108.041 546.464 107.562 547.833 106.604C549.27 105.646 549.989 104.448 549.989 103.011C549.989 101.094 549.167 99.7596 547.525 99.0067C545.882 98.2538 543.281 97.5693 539.722 96.9533C536.026 96.2689 533.014 95.516 530.687 94.6947C528.36 93.8733 526.341 92.4018 524.63 90.28C522.987 88.0898 522.166 85.0098 522.166 81.04C522.166 78.0284 522.953 75.3591 524.527 73.032C526.17 70.6364 528.394 68.7884 531.201 67.488C534.007 66.1191 537.155 65.4347 540.646 65.4347C546.874 65.4347 551.905 66.9747 555.738 70.0547C559.639 73.1347 561.727 77.2071 562.001 82.272H549.578C549.304 80.1502 548.312 78.5076 546.601 77.344C544.958 76.112 543.11 75.496 541.057 75.496C539.003 75.496 537.361 75.9409 536.129 76.8307C534.897 77.7204 534.281 78.9524 534.281 80.5267C534.281 82.4431 535.068 83.7436 536.642 84.428C538.285 85.044 540.851 85.5916 544.342 86.0707C548.106 86.6182 551.186 87.3027 553.582 88.124C556.046 88.8769 558.168 90.3827 559.947 92.6413C561.727 94.9 562.617 98.1853 562.617 102.497C562.617 107.425 560.769 111.395 557.073 114.407C553.445 117.35 548.585 118.821 542.494 118.821Z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const z1 = /* @__PURE__ */ xe(U1, [["render", j1]]), B1 = {
  "h-full": "",
  "w-full": "",
  flex: "",
  "items-center": ""
}, F1 = {
  flex: "~ col gap2",
  ma: "",
  "px-5": ""
}, Z1 = {
  flex: "~ col",
  "mt-20": "",
  "items-center": ""
}, K1 = {
  flex: "~",
  "mt--10": "",
  "items-center": "",
  "justify-center": ""
}, G1 = { flex: "~ gap2 wrap" }, W1 = /* @__PURE__ */ Z({
  __name: "About",
  setup(n) {
    const e = He();
    return (o, t) => (d(), h("div", B1, [
      c("div", F1, [
        t[5] || (t[5] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", Z1, [
          c("div", K1, [
            y(z1, { "h-18": "" })
          ]),
          t[2] || (t[2] = c("div", {
            mb6: "",
            "mt--1": "",
            "text-center": "",
            "text-sm": "",
            flex: "~ gap-1"
          }, [
            c("span", { op40: "" }, " Router DevTools ")
          ], -1))
        ]),
        t[6] || (t[6] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", G1, [
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[0] || (t[0] = (l) => r(e).push("/routes"))
          }, t[3] || (t[3] = [
            c("div", {
              "i-carbon-tree-view-alt": "",
              "text-3xl": ""
            }, null, -1),
            c("code", null, "Routes", -1)
          ])),
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[1] || (t[1] = (l) => r(e).push("/timeline"))
          }, t[4] || (t[4] = [
            c("div", {
              "i-mdi:timeline-clock-outline": "",
              "text-3xl": ""
            }, null, -1),
            c("div", null, "Timeline", -1)
          ]))
        ]),
        t[7] || (t[7] = c("div", {
          flex: "~ gap-6 wrap",
          "mt-5": "",
          "items-center": "",
          "justify-center": ""
        }, [
          c("a", {
            href: "https://github.com/vuejs/router",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-blue",
            transition: ""
          }, [
            c("div", { "i-carbon-star": "" }),
            Q(" Star on GitHub ")
          ]),
          c("a", {
            href: "https://router.vuejs.org/",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-yellow",
            transition: ""
          }, [
            c("div", { "i-carbon-document": "" }),
            Q(" View Documentation ")
          ])
        ], -1)),
        t[8] || (t[8] = c("div", { "flex-auto": "" }, null, -1))
      ])
    ]));
  }
}), q1 = { class: "h-full flex flex-col" }, J1 = {
  "h-full": "",
  "select-none": "",
  "overflow-scroll": "",
  p2: "",
  class: "no-scrollbar"
}, Y1 = { class: "pb2" }, X1 = {
  "h-full": "",
  "overflow-scroll": "",
  class: "no-scrollbar"
}, Q1 = /* @__PURE__ */ Z({
  __name: "Index",
  setup(n) {
    const { expanded: e } = Ce(), { expanded: o } = Ce("routes-state"), t = ye(), l = E(() => t.value.id), s = R(""), p = R(""), [i, a] = Kt(!0), f = R([]), v = E(() => {
      var L, I;
      return (L = f.value) != null && L.length ? k((I = f.value) == null ? void 0 : I[0]) : [];
    }), u = E(() => $(f.value)), C = E(() => u.value.map((L) => L.id)), T = R({});
    function k(L, I = [], O = []) {
      var ee;
      return I.push(L.id), ((ee = L.children) == null ? void 0 : ee.length) === 0 && O.push([...I]), Array.isArray(L.children) && L.children.forEach((ne) => {
        k(ne, I, O);
      }), I.pop(), O;
    }
    function g(L, I) {
      const O = [];
      return L == null || L.forEach((ee) => {
        O.push(...ee.slice(0, I + 1));
      }), [...new Set(O)];
    }
    function $(L) {
      const I = [], O = (ee) => {
        ee == null || ee.forEach((ne) => {
          var A;
          I.push(ne), (A = ne.children) != null && A.length && O(ne.children);
        });
      };
      return O(L), I;
    }
    function z(L) {
      var I;
      for (const O in L)
        (I = L[O]) != null && I.length || delete L[O];
      return L;
    }
    function V(L) {
      D.value.getInspectorState({ inspectorId: l.value, nodeId: L }).then((I) => {
        const O = oe(I);
        O && (T.value = z(O), o.value = Array.from({ length: Object.keys(T.value).length }, (ee, ne) => `${ne}`));
      });
    }
    function x() {
      T.value = {};
    }
    te(s, () => {
      x(), V(s.value);
    });
    const P = async (L = "") => {
      await D.value.getInspectorTree({ inspectorId: l.value, filter: L }).then((I) => {
        const O = oe(I);
        f.value = O, !s.value && O.length && (s.value = O[0].id, V(O[0].id), e.value = g(v.value, 1));
      });
    };
    Zt(l).toBeTruthy().then(() => {
      P();
    });
    function F(L) {
      const I = oe(L);
      I.inspectorId !== l.value || !I.rootNodes.length || (f.value = I.rootNodes, C.value.includes(s.value) || (s.value = I.rootNodes[0].id, e.value = g(v.value, 1), V(I.rootNodes[0].id)));
    }
    function K(L) {
      const I = oe(L);
      if (I.inspectorId !== l.value)
        return;
      const O = I.state;
      T.value = z(O);
    }
    D.functions.on(X.INSPECTOR_TREE_UPDATED, F), D.functions.on(X.INSPECTOR_STATE_UPDATED, K), ke(() => {
      D.functions.off(X.INSPECTOR_TREE_UPDATED, F), D.functions.off(X.INSPECTOR_STATE_UPDATED, K);
    });
    function ce(L) {
      const I = L.trim().toLowerCase();
      a(), P(I).then(() => {
        a();
      });
    }
    return Gt(p, (L) => {
      ce(L);
    }, { debounce: 300 }), (L, I) => (d(), h("div", q1, [
      y(Ve, {
        "doc-link": "https://router.vuejs.org/",
        "github-repo-link": "https://github.com/vuejs/router"
      }, {
        default: H(() => [
          y(Ne)
        ]),
        _: 1
      }),
      y(r(Le), { class: "flex-1 overflow-auto" }, {
        default: H(() => [
          y(r(pe), {
            border: "r base",
            size: "40",
            "h-full": ""
          }, {
            default: H(() => [
              c("div", J1, [
                c("div", Y1, [
                  y(r(ge), {
                    modelValue: p.value,
                    "onUpdate:modelValue": I[0] || (I[0] = (O) => p.value = O),
                    placeholder: "Search routes",
                    loading: !r(i),
                    "loading-debounce-time": 250,
                    class: "text-3.5"
                  }, null, 8, ["modelValue", "loading"])
                ]),
                y(Oe, {
                  modelValue: s.value,
                  "onUpdate:modelValue": I[1] || (I[1] = (O) => s.value = O),
                  data: f.value
                }, null, 8, ["modelValue", "data"])
              ])
            ]),
            _: 1
          }),
          y(r(pe), { size: "60" }, {
            default: H(() => [
              c("div", X1, [
                s.value ? (d(), B(Ue, {
                  key: 0,
                  class: "p3",
                  data: T.value,
                  "node-id": "",
                  "inspector-id": "router",
                  "expanded-state-id": "routes-state"
                }, null, 8, ["data"])) : (d(), B(Te, { key: 1 }, {
                  default: H(() => I[2] || (I[2] = [
                    Q(" No Data ")
                  ])),
                  _: 1
                }))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), es = "org.vuejs.router", ts = /* @__PURE__ */ Z({
  __name: "Index",
  setup(n) {
    const e = ye();
    return (o, t) => (d(), B(dt, {
      "layer-ids": r(e).timelineLayerIds,
      "doc-link": "https://router.vuejs.org/",
      "plugin-id": es,
      "github-repo-link": "https://github.com/vuejs/router"
    }, null, 8, ["layer-ids"]));
  }
}), ns = {
  "h-full": "",
  "w-full": ""
}, hs = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    id: {}
  },
  setup(n) {
    const e = n, o = pt(), t = R(!1), { VirtualRouterView: l, restoreRouter: s } = lt([
      {
        path: "/routes",
        name: "Routes",
        component: Q1,
        icon: "i-carbon-tree-view-alt"
      },
      {
        path: "/timeline",
        name: "Timeline",
        component: ts,
        icon: "i-mdi:timeline-clock-outline"
      },
      {
        path: "/about",
        name: "About",
        component: W1,
        icon: "i-ri-route-line"
      }
    ], {
      defaultRoutePath: "/routes"
    });
    function p() {
      t.value = !0, Me(() => {
        D.value.getInspectorInfo(e.id).then((i) => {
          if (!i)
            return;
          const a = {
            homepage: i == null ? void 0 : i.homepage,
            id: i == null ? void 0 : i.id,
            label: i == null ? void 0 : i.label,
            logo: i == null ? void 0 : i.logo,
            timelineLayerIds: i == null ? void 0 : i.timelineLayers.map((f) => f.id)
          };
          o.value = a, s(), t.value = !1;
        });
      });
    }
    return te(() => e.id, (i) => {
      i && p();
    }), (i, a) => (d(), h("div", ns, [
      y(r(l))
    ]));
  }
});
export {
  fs as Components,
  vs as CustomInspector,
  ms as Pinia,
  hs as Router,
  An as SelectiveList,
  dt as Timeline,
  ps as useCustomInspector
};
