/*! For license information please see osano-ui.js.LICENSE.txt */
"use strict";
(self.webpackChunk_osano_cmp_consent_manager = self.webpackChunk_osano_cmp_consent_manager || []).push([
            [209], {
                261: (e, t, o) => {
                        o.r(t), o.d(t, {
                            default: () => zi,
                            getStyleConstant: () => Fi
                        });
                        var r, n = o(2362),
                            i = o(8734);
                        const s = window,
                            a = s.trustedTypes,
                            l = a ? a.createPolicy("lit-html", {
                                createHTML: e => e
                            }) : void 0,
                            c = "$lit$",
                            d = `lit$${(Math.random()+"").slice(9)}$`,
                            p = "?" + d,
                            m = `<${p}>`,
                            g = document,
                            u = () => g.createComment(""),
                            h = e => null === e || "object" != typeof e && "function" != typeof e,
                            b = Array.isArray,
                            f = e => b(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
                            y = "[ \t\n\f\r]",
                            $ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                            _ = /-->/g,
                            v = />/g,
                            w = RegExp(`>|${y}(?:([^\\s"'>=/]+)(${y}*=${y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
                            O = /'/g,
                            k = /"/g,
                            x = /^(?:script|style|textarea|title)$/i,
                            A = e => function(t) {
                                for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) r[n - 1] = arguments[n];
                                return {
                                    _$litType$: e,
                                    strings: t,
                                    values: r
                                }
                            },
                            j = A(1),
                            P = (A(2), Symbol.for("lit-noChange")),
                            D = Symbol.for("lit-nothing"),
                            S = new WeakMap,
                            C = g.createTreeWalker(g, 129, null, !1);

                        function T(e, t) {
                            if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                            return void 0 !== l ? l.createHTML(t) : t
                        }
                        const N = (e, t) => {
                            const o = e.length - 1,
                                r = [];
                            let n, i = 2 === t ? "<svg>" : "",
                                s = $;
                            for (let a = 0; a < o; a++) {
                                const t = e[a];
                                let o, l, p = -1,
                                    g = 0;
                                for (; g < t.length && (s.lastIndex = g, l = s.exec(t), null !== l);) g = s.lastIndex, s === $ ? "!--" === l[1] ? s = _ : void 0 !== l[1] ? s = v : void 0 !== l[2] ? (x.test(l[2]) && (n = RegExp("</" + l[2], "g")), s = w) : void 0 !== l[3] && (s = w) : s === w ? ">" === l[0] ? (s = null != n ? n : $, p = -1) : void 0 === l[1] ? p = -2 : (p = s.lastIndex - l[2].length, o = l[1], s = void 0 === l[3] ? w : '"' === l[3] ? k : O) : s === k || s === O ? s = w : s === _ || s === v ? s = $ : (s = w, n = void 0);
                                const u = s === w && e[a + 1].startsWith("/>") ? " " : "";
                                i += s === $ ? t + m : p >= 0 ? (r.push(o), t.slice(0, p) + c + t.slice(p) + d + u) : t + d + (-2 === p ? (r.push(void 0), a) : u)
                            }
                            return [T(e, i + (e[o] || "<?>") + (2 === t ? "</svg>" : "")), r]
                        };
                        class E {
                            constructor(e, t) {
                                let o, {
                                    strings: r,
                                    _$litType$: n
                                } = e;
                                this.parts = [];
                                let i = 0,
                                    s = 0;
                                const l = r.length - 1,
                                    m = this.parts,
                                    [g, h] = N(r, n);
                                if (this.el = E.createElement(g, t), C.currentNode = this.el.content, 2 === n) {
                                    const e = this.el.content,
                                        t = e.firstChild;
                                    t.remove(), e.append(...t.childNodes)
                                }
                                for (; null !== (o = C.nextNode()) && m.length < l;) {
                                    if (1 === o.nodeType) {
                                        if (o.hasAttributes()) {
                                            const e = [];
                                            for (const t of o.getAttributeNames())
                                                if (t.endsWith(c) || t.startsWith(d)) {
                                                    const r = h[s++];
                                                    if (e.push(t), void 0 !== r) {
                                                        const e = o.getAttribute(r.toLowerCase() + c).split(d),
                                                            t = /([.?@])?(.*)/.exec(r);
                                                        m.push({
                                                            type: 1,
                                                            index: i,
                                                            name: t[2],
                                                            strings: e,
                                                            ctor: "." === t[1] ? F : "?" === t[1] ? z : "@" === t[1] ? R : M
                                                        })
                                                    } else m.push({
                                                        type: 6,
                                                        index: i
                                                    })
                                                }
                                            for (const t of e) o.removeAttribute(t)
                                        }
                                        if (x.test(o.tagName)) {
                                            const e = o.textContent.split(d),
                                                t = e.length - 1;
                                            if (t > 0) {
                                                o.textContent = a ? a.emptyScript : "";
                                                for (let r = 0; r < t; r++) o.append(e[r], u()), C.nextNode(), m.push({
                                                    type: 2,
                                                    index: ++i
                                                });
                                                o.append(e[t], u())
                                            }
                                        }
                                    } else if (8 === o.nodeType)
                                        if (o.data === p) m.push({
                                            type: 2,
                                            index: i
                                        });
                                        else {
                                            let e = -1;
                                            for (; - 1 !== (e = o.data.indexOf(d, e + 1));) m.push({
                                                type: 7,
                                                index: i
                                            }), e += d.length - 1
                                        }
                                    i++
                                }
                            }
                            static createElement(e, t) {
                                const o = g.createElement("template");
                                return o.innerHTML = e, o
                            }
                        }

                        function I(e, t) {
                            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                                r = arguments.length > 3 ? arguments[3] : void 0;
                            var n, i, s, a;
                            if (t === P) return t;
                            let l = void 0 !== r ? null === (n = o._$Co) || void 0 === n ? void 0 : n[r] : o._$Cl;
                            const c = h(t) ? void 0 : t._$litDirective$;
                            return (null == l ? void 0 : l.constructor) !== c && (null === (i = null == l ? void 0 : l._$AO) || void 0 === i || i.call(l, !1), void 0 === c ? l = void 0 : (l = new c(e), l._$AT(e, o, r)), void 0 !== r ? (null !== (s = (a = o)._$Co) && void 0 !== s ? s : a._$Co = [])[r] = l : o._$Cl = l), void 0 !== l && (t = I(e, l._$AS(e, t.values), l, r)), t
                        }
                        class L {
                            constructor(e, t) {
                                this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                            }
                            get parentNode() {
                                return this._$AM.parentNode
                            }
                            get _$AU() {
                                return this._$AM._$AU
                            }
                            u(e) {
                                var t;
                                const {
                                    el: {
                                        content: o
                                    },
                                    parts: r
                                } = this._$AD, n = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : g).importNode(o, !0);
                                C.currentNode = n;
                                let i = C.nextNode(),
                                    s = 0,
                                    a = 0,
                                    l = r[0];
                                for (; void 0 !== l;) {
                                    if (s === l.index) {
                                        let t;
                                        2 === l.type ? t = new B(i, i.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(i, l.name, l.strings, this, e) : 6 === l.type && (t = new W(i, this, e)), this._$AV.push(t), l = r[++a]
                                    }
                                    s !== (null == l ? void 0 : l.index) && (i = C.nextNode(), s++)
                                }
                                return C.currentNode = g, n
                            }
                            v(e) {
                                let t = 0;
                                for (const o of this._$AV) void 0 !== o && (void 0 !== o.strings ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
                            }
                        }
                        class B {
                            constructor(e, t, o, r) {
                                var n;
                                this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = r, this._$Cp = null === (n = null == r ? void 0 : r.isConnected) || void 0 === n || n
                            }
                            get _$AU() {
                                var e, t;
                                return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
                            }
                            get parentNode() {
                                let e = this._$AA.parentNode;
                                const t = this._$AM;
                                return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
                            }
                            get startNode() {
                                return this._$AA
                            }
                            get endNode() {
                                return this._$AB
                            }
                            _$AI(e) {
                                e = I(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this), h(e) ? e === D || null == e || "" === e ? (this._$AH !== D && this._$AR(), this._$AH = D) : e !== this._$AH && e !== P && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : f(e) ? this.T(e) : this._(e)
                            }
                            k(e) {
                                return this._$AA.parentNode.insertBefore(e, this._$AB)
                            }
                            $(e) {
                                this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                            }
                            _(e) {
                                this._$AH !== D && h(this._$AH) ? this._$AA.nextSibling.data = e : this.$(g.createTextNode(e)), this._$AH = e
                            }
                            g(e) {
                                var t;
                                const {
                                    values: o,
                                    _$litType$: r
                                } = e, n = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = E.createElement(T(r.h, r.h[0]), this.options)), r);
                                if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n) this._$AH.v(o);
                                else {
                                    const e = new L(n, this),
                                        t = e.u(this.options);
                                    e.v(o), this.$(t), this._$AH = e
                                }
                            }
                            _$AC(e) {
                                let t = S.get(e.strings);
                                return void 0 === t && S.set(e.strings, t = new E(e)), t
                            }
                            T(e) {
                                b(this._$AH) || (this._$AH = [], this._$AR());
                                const t = this._$AH;
                                let o, r = 0;
                                for (const n of e) r === t.length ? t.push(o = new B(this.k(u()), this.k(u()), this, this.options)) : o = t[r], o._$AI(n), r++;
                                r < t.length && (this._$AR(o && o._$AB.nextSibling, r), t.length = r)
                            }
                            _$AR() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                                    t = arguments.length > 1 ? arguments[1] : void 0;
                                var o;
                                for (null === (o = this._$AP) || void 0 === o || o.call(this, !1, !0, t); e && e !== this._$AB;) {
                                    const t = e.nextSibling;
                                    e.remove(), e = t
                                }
                            }
                            setConnected(e) {
                                var t;
                                void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                            }
                        }
                        class M {
                            constructor(e, t, o, r, n) {
                                this.type = 1, this._$AH = D, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = n, o.length > 2 || "" !== o[0] || "" !== o[1] ? (this._$AH = Array(o.length - 1).fill(new String), this.strings = o) : this._$AH = D
                            }
                            get tagName() {
                                return this.element.tagName
                            }
                            get _$AU() {
                                return this._$AM._$AU
                            }
                            _$AI(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                                    o = arguments.length > 2 ? arguments[2] : void 0,
                                    r = arguments.length > 3 ? arguments[3] : void 0;
                                const n = this.strings;
                                let i = !1;
                                if (void 0 === n) e = I(this, e, t, 0), i = !h(e) || e !== this._$AH && e !== P, i && (this._$AH = e);
                                else {
                                    const r = e;
                                    let s, a;
                                    for (e = n[0], s = 0; s < n.length - 1; s++) a = I(this, r[o + s], t, s), a === P && (a = this._$AH[s]), i || (i = !h(a) || a !== this._$AH[s]), a === D ? e = D : e !== D && (e += (null != a ? a : "") + n[s + 1]), this._$AH[s] = a
                                }
                                i && !r && this.j(e)
                            }
                            j(e) {
                                e === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                            }
                        }
                        class F extends M {
                            constructor() {
                                super(...arguments), this.type = 3
                            }
                            j(e) {
                                this.element[this.name] = e === D ? void 0 : e
                            }
                        }
                        const H = a ? a.emptyScript : "";
                        class z extends M {
                            constructor() {
                                super(...arguments), this.type = 4
                            }
                            j(e) {
                                e && e !== D ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name)
                            }
                        }
                        class R extends M {
                            constructor(e, t, o, r, n) {
                                super(e, t, o, r, n), this.type = 5
                            }
                            _$AI(e) {
                                var t;
                                if ((e = null !== (t = I(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== t ? t : D) === P) return;
                                const o = this._$AH,
                                    r = e === D && o !== D || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive,
                                    n = e !== D && (o === D || r);
                                r && this.element.removeEventListener(this.name, this, o), n && this.element.addEventListener(this.name, this, e), this._$AH = e
                            }
                            handleEvent(e) {
                                var t, o;
                                "function" == typeof this._$AH ? this._$AH.call(null !== (o = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== o ? o : this.element, e) : this._$AH.handleEvent(e)
                            }
                        }
                        class W {
                            constructor(e, t, o) {
                                this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = o
                            }
                            get _$AU() {
                                return this._$AM._$AU
                            }
                            _$AI(e) {
                                I(this, e)
                            }
                        }
                        const U = {
                                O: c,
                                P: d,
                                A: p,
                                C: 1,
                                M: N,
                                L,
                                D: f,
                                R: I,
                                I: B,
                                V: M,
                                H: z,
                                N: R,
                                U: F,
                                F: W
                            },
                            V = s.litHtmlPolyfillSupport;
                        null == V || V(E, B), (null !== (r = s.litHtmlVersions) && void 0 !== r ? r : s.litHtmlVersions = []).push("2.7.5");
                        const Q = (e, t, o) => {
                            var r, n;
                            const i = null !== (r = null == o ? void 0 : o.renderBefore) && void 0 !== r ? r : t;
                            let s = i._$litPart$;
                            if (void 0 === s) {
                                const e = null !== (n = null == o ? void 0 : o.renderBefore) && void 0 !== n ? n : null;
                                i._$litPart$ = s = new B(t.insertBefore(u(), e), e, void 0, null != o ? o : {})
                            }
                            return s._$AI(e), s
                        };
                        var Y = o(5036);
                        const G = i.hT.template("aria.newWindow"),
                            K = i.hT.template("aria.external"),
                            Z = i.hT.template("aria.externalNewWindow");
                        var q = o(5126);
                        const X = {
                            block: "__",
                            modifier: "--",
                            space: "-",
                            value: "_"
                        };

                        function J(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function ee(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? J(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : J(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const te = e => {
                                let {
                                    block: t,
                                    element: o,
                                    modifiers: r = {},
                                    prefix: n = "",
                                    syntax: i = {},
                                    verbose: s = !1,
                                    className: a = []
                                } = e;
                                if (!t && !o) throw new Error("You must specify a block or an element when using BEM syntax");
                                const l = a ? Array.isArray(a) ? a : "object" == typeof a ? Object.keys(a) : a.split(" ") : [],
                                    c = ee(ee({}, X), i),
                                    d = n ? n.replace(/^['"]/, "").replace(/['"]$/, "") : "";
                                if (t) {
                                    l.push(o ? `${d}${t}${c.block}${o}` : `${d}${t}`);
                                    (r.block ? Object.keys(r.block) : []).forEach((e => {
                                        const n = !(!r.block[`${e}`] || "" === r.block[`${e}`]) && r.block[`${e}`];
                                        if ("true" === n || n === !!n) {
                                            if (n) {
                                                const r = `${d}${t}${c.modifier}${e}`;
                                                l.push(r), s && o && l.push(`${r}${c.block}${o}`)
                                            }
                                        } else {
                                            const r = `${d}${t}${c.modifier}${e}${c.value}${n}`;
                                            l.push(r), s && o && l.push(`${r}${c.block}${o}`)
                                        }
                                    }))
                                }
                                if (o) {
                                    l.push(`${d}${o}`);
                                    (r.element ? Object.keys(r.element) : []).forEach((e => {
                                        const n = !(!r.element[`${e}`] || "" === r.element[`${e}`]) && r.element[`${e}`];
                                        "true" === n || n === !!n ? n && (l.push(`${d}${o}${c.modifier}${e}`), s && t && l.push(`${d}${t}${c.block}${o}${c.modifier}${e}`)) : (l.push(`${d}${o}${c.modifier}${e}${c.value}${n}`), s && t && l.push(`${d}${t}${c.block}${o}${c.modifier}${e}${c.value}${n}`))
                                    }))
                                }
                                return l.map((e => e.toString().replace(/\s\s+/g, " ").replace(/[\s!"#$%&'()*+,./:<=>?@[\\\]^`{|}~]/g, c.space)))
                            },
                            oe = function() {
                                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                                return te.apply(null, t).reduce(((e, t) => (e[`${t}`] = !0, e)), {})
                            },
                            re = te,
                            ne = 1,
                            ie = 2,
                            se = e => function() {
                                for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                                return {
                                    _$litDirective$: e,
                                    values: o
                                }
                            };
                        class ae {
                            constructor(e) {}
                            get _$AU() {
                                return this._$AM._$AU
                            }
                            _$AT(e, t, o) {
                                this._$Ct = e, this._$AM = t, this._$Ci = o
                            }
                            _$AS(e, t) {
                                return this.update(e, t)
                            }
                            update(e, t) {
                                return this.render(...t)
                            }
                        }
                        const le = se(class extends ae {
                                constructor(e) {
                                    var t;
                                    if (super(e), e.type !== ne || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                                }
                                render(e) {
                                    return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
                                }
                                update(e, t) {
                                    let [o] = t;
                                    var r, n;
                                    if (void 0 === this.it) {
                                        this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
                                        for (const e in o) o[e] && !(null === (r = this.nt) || void 0 === r ? void 0 : r.has(e)) && this.it.add(e);
                                        return this.render(o)
                                    }
                                    const i = e.element.classList;
                                    this.it.forEach((e => {
                                        e in o || (i.remove(e), this.it.delete(e))
                                    }));
                                    for (const s in o) {
                                        const e = !!o[s];
                                        e === this.it.has(s) || (null === (n = this.nt) || void 0 === n ? void 0 : n.has(s)) || (e ? (i.add(s), this.it.add(s)) : (i.remove(s), this.it.delete(s)))
                                    }
                                    return P
                                }
                            }),
                            ce = e => null != e ? e : D,
                            de = ["block", "label", "disabled", "onClick", "className", "modifiers", "ariaLabel", "tabIndex"];

                        function pe(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function me(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? pe(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : pe(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const ge = "button";

                        function ue(e) {
                            const {
                                block: t,
                                label: o,
                                disabled: r,
                                onClick: n,
                                className: i,
                                modifiers: s = {},
                                ariaLabel: a,
                                tabIndex: l = 0
                            } = e, c = (0, q.A)(e, de), {
                                prefix: d = "osano-cm-"
                            } = c, p = {
                                root: oe({
                                    prefix: d,
                                    block: t,
                                    element: ge,
                                    modifiers: {
                                        block: s.block,
                                        element: me(me({}, s.element), {}, {
                                            disabled: r
                                        })
                                    },
                                    className: i
                                })
                            };
                            return j `<button class="${le(p.root)}" .disabled="${r}" @click="${ce(n)}" aria-label="${ce(a)}" tabindex="${l}"> ${o} </button>`
                        }
                        var he = o(5785),
                            be = o(8437);

                        function fe(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function ye(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? fe(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : fe(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const $e = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t((0, he.Qi)(i.FA)), t((0, he.Zx)(i.FA)), t((0, he.ov)(i.FA)), t(be.Ay.acceptAllConsent()), t(be.Ay.saveConsent()), t(be.Ay.hideAll()), t(be.Ay.showWidget()), t(be.Ay.focusWidget())
                                }
                            },
                            _e = {
                                element: {
                                    type: "accept"
                                }
                            },
                            ve = i.hT.template("buttons.acceptAll");

                        function we(e) {
                            const {
                                prefix: t,
                                store: o,
                                onClick: r
                            } = e;
                            return j `${ue(ye(ye({},e),{},{className:`
                            $ {
                                t
                            }
                            accept - all `,label:ve(),onClick:r??$e(o),modifiers:_e}))}`
                        }

                        function Oe(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function ke(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Oe(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Oe(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const xe = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t(be.Ay.acceptAllConsent()), t(be.Ay.saveConsent()), t(be.Ay.hideDialog()), t(be.Ay.showWidget()), t(be.Ay.focusWidget())
                                }
                            },
                            Ae = {
                                element: {
                                    type: "accept"
                                }
                            },
                            je = i.hT.template("buttons.accept");

                        function Pe(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function De(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Pe(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Pe(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const Se = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t((0, he.Qi)(i.Fr)), t((0, he.Zx)(i.Fr)), t((0, he.ov)(i.Fr)), t((0, he.$V)(i.Fr)), t(be.Ay.denyAllConsent()), t(be.Ay.saveConsent()), t(be.Ay.hideAll()), t(be.Ay.showWidget()), t(be.Ay.focusWidget())
                                }
                            },
                            Ce = {
                                element: {
                                    type: "denyAll"
                                }
                            },
                            Te = i.hT.template("buttons.denyAll");

                        function Ne(e) {
                            const {
                                prefix: t,
                                store: o,
                                onClick: r
                            } = e;
                            return j `${ue(De(De({label:Te()},e),{},{className:`
                            $ {
                                t
                            }
                            denyAll `,onClick:r??Se(o),modifiers:Ce}))}`
                        }

                        function Ee(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Ie(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ee(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ee(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const Le = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t(be.Ay.denyAllConsent()), t(be.Ay.saveConsent()), t(be.Ay.hideDialog()), t(be.Ay.showWidget()), t(be.Ay.focusWidget())
                                }
                            },
                            Be = {
                                element: {
                                    type: "deny"
                                }
                            },
                            Me = i.hT.template("buttons.deny");

                        function Fe(e) {
                            const {
                                prefix: t,
                                store: o,
                                block: r
                            } = e;
                            return j `<div class="osano-cm-drawer-iab-button-container"> ${we({block:r,prefix:t,store:o})} ${Ne({block:r,prefix:t,store:o})} </div>`
                        }

                        function He(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function ze(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? He(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : He(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const Re = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t(be.Ay.saveConsent()), t(be.Ay.hideDialog()), t(be.Ay.showWidget())
                                }
                            },
                            We = {
                                element: {
                                    type: "save"
                                }
                            },
                            Ue = i.hT.template("buttons.save");
                        const Ve = ["ariaDescribedBy", "block", "className", "href", "target", "label", "onClick", "tabIndex", "title", "type"];

                        function Qe(e) {
                            const {
                                ariaDescribedBy: t,
                                block: o,
                                className: r = "",
                                href: n,
                                target: i,
                                label: s,
                                onClick: a,
                                tabIndex: l = 0,
                                title: c,
                                type: d
                            } = e, p = (0, q.A)(e, Ve), {
                                prefix: m = "osano-cm-"
                            } = p, g = {
                                root: oe({
                                    prefix: m,
                                    block: o,
                                    element: "link",
                                    className: r,
                                    modifiers: {
                                        element: {
                                            type: d
                                        }
                                    }
                                })
                            };
                            return j `<a tabindex="${l}" rel="noopener" href="${ce(n)}" target="${ce(i)}" class="${le(g.root)}" @click="${a}" title="${ce(c)}" aria-describedby="${ce(t)}">${s}</a>`
                        }
                        i.hT.template("buttons.denyAll");

                        function Ye(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Ge(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ye(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ye(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }

                        function Ke(e) {
                            const t = e.store.getState(),
                                o = e.linkText || (0, Y.IZ)(t),
                                r = i.hT.template(`buttons.${o}`),
                                n = i.hT.template(`messaging.${o}`),
                                s = `${e.prefix}${e.className||"storage-policy"}`,
                                a = r(void 0, n()),
                                l = e.href || (0, Y.Pq)(t);
                            return j `${Qe(Ge(Ge({},e),{},{ariaDescribedBy:`
                            $ {
                                e.prefix
                            }
                            aria.newWindow `,className:s,label:a,href:l,target:"_blank"}))}`
                        }
                        var Ze = o(924),
                            qe = o(2240),
                            Xe = o(3505);
                        const Je = e => t => {
                                t(be.Ay.showDisclosure(Xe.M.PUSH, e))
                            },
                            et = ["type", "purposeId", "onClick", "retention"];

                        function tt(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }
                        const ot = i.hT.template("iab.legal.title"),
                            rt = i.hT.template("iab.partnerCount"),
                            nt = i.hT.template("iab.partnerCountPlural"),
                            it = i.hT.template("iab.vendor.dataRetention");

                        function st(e) {
                            const {
                                type: t,
                                purposeId: o,
                                onClick: r,
                                retention: s
                            } = e, a = (0, q.A)(e, et), {
                                prefix: l,
                                store: {
                                    dispatch: c,
                                    getState: d
                                }
                            } = a, p = o ? `${l}tcf-v2-legal--${t}_${o}` : `${l}tcf-v2-legal`, m = o ? i.hT.translate(`iab.${t}.${o}.description`) : void 0, g = o ? i.hT.translate(`iab.${t}.${o}.name`) : ot(), u = Object.keys((0, qe.GQ)(d(), {
                                type: t,
                                id: o
                            })).length, h = 1 === u ? rt({
                                interpolations: {
                                    partnerCount: u
                                }
                            }) : nt({
                                interpolations: {
                                    partnerCount: u
                                }
                            });
                            return j `${Qe(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(o),!0).forEach((function(t){(0,n.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):tt(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({label:`
                            $ {
                                g
                            }
                            $ {
                                "purposes" === t ? `(${h})` : ""
                            }
                            `,onClick:r||function(e){c(Je(o));const t=document.getElementById(p);return(0,Ze.mH)(t||e.target).scrollTop=t?t.offsetTop:0,!1},title:m,type:o?"purpose":void 0},a))}${s?` - ${it({interpolations:{days:s}})}`:""}`
                        }
                        const at = e => t => {
                                t(be.Ay.showVendorConsent(Xe.M.PUSH, e))
                            },
                            lt = ["vendorId", "onClick"];

                        function ct(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }
                        const dt = i.hT.template("iab.vendor.title");

                        function pt(e) {
                            const {
                                vendorId: t,
                                onClick: o
                            } = e, r = (0, q.A)(e, lt), {
                                store: {
                                    dispatch: i,
                                    getState: s
                                }
                            } = r, a = s(), l = t ? (0, qe.Tp)(a, t).name : dt();
                            return j `${Qe(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ct(Object(o),!0).forEach((function(t){(0,n.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ct(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({label:l,onClick:o||function(){return i(at(t)),!1},type:"vendor"},r))}`
                        }
                        var mt = o(3803),
                            gt = o(6269);
                        const ut = ["id", "ariaLabel", "ariaLevel", "ariaDescription", "descriptionId", "block", "label", "checked", "disabled", "onChange", "className", "category", "tabIndex", "type", "name", "value"],
                            ht = "toggle";

                        function bt(e) {
                            const {
                                id: t = (0, gt.v4)("toggle"),
                                ariaLabel: o,
                                ariaLevel: r,
                                ariaDescription: n,
                                descriptionId: i,
                                block: s,
                                label: a,
                                checked: l,
                                disabled: c,
                                onChange: d,
                                className: p,
                                category: m,
                                tabIndex: g = 0,
                                type: u,
                                name: h,
                                value: b
                            } = e, f = (0, q.A)(e, ut), {
                                prefix: y = "osano-cm-"
                            } = f, $ = {
                                root: oe({
                                    prefix: y,
                                    block: s,
                                    element: ht,
                                    modifiers: {
                                        element: {
                                            checked: l,
                                            disabled: c,
                                            type: u
                                        }
                                    },
                                    className: p
                                }),
                                input: oe({
                                    prefix: y,
                                    block: ht,
                                    element: "input",
                                    modifiers: {
                                        element: {
                                            checked: l,
                                            disabled: c
                                        }
                                    }
                                }),
                                switch: oe({
                                    prefix: y,
                                    block: ht,
                                    element: "switch"
                                }),
                                label: oe({
                                    prefix: y,
                                    block: ht,
                                    element: "label"
                                })
                            };
                            return j `<label class="${le($.root)}" for="${t}"><input class="${le($.input)}" id="${t}" type="checkbox" @change="${d}" .checked="${l}" .disabled="${c}" data-category="${ce(m)}" name="${ce(h)}" value="${ce(b)}" role="switch" tabindex="${g}" aria-label="${ce(o)}" aria-description="${ce(n)}" aria-describedby="${ce(!n&&i?i:void 0)}"><span class="${le($.switch)}"></span><span role="${ce(r?"heading":void 0)}" aria-level="${ce(r)}" class="${le($.label)}">${a}</span></label>`
                        }

                        function ft(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function yt(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ft(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ft(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const $t = e => {
                            let {
                                category: t,
                                store: o
                            } = e;
                            return e => {
                                const r = e.target.checked;
                                o.dispatch(be.Ay.setConsent(t, r ? i.FA : i.Fr))
                            }
                        };

                        function _t(e) {
                            const {
                                category: t,
                                prefix: o,
                                store: {
                                    getState: r
                                }
                            } = e, n = r(), s = (0, Y.MJ)(n), a = (0, Y.aE)(n, t), l = (0, Y.pU)(n, t), c = s && `${o}drawer-toggle--category_${t}--description`, d = i.hT.translate(`categories.${t}.label`) || "", p = i.hT.translate(`categories.${t}.label`) || "";
                            return bt(yt(yt({}, e), {}, {
                                descriptionId: c,
                                label: d,
                                title: p || d,
                                checked: a,
                                disabled: l,
                                onChange: $t(e)
                            }))
                        }

                        function vt(e) {
                            const {
                                store: {
                                    getState: t
                                },
                                label: o
                            } = e, r = t(), n = (0, gt.v4)("arialabelclose"), {
                                linkColor: i,
                                closeButtonColor: s = i
                            } = (0, Y.Sf)(r);
                            return j `<svg width="20px" height="20px" viewBox="0 0 20 20" role="img" aria-labelledby="${n}"> <title id="${n}">${o}</title> <line role="presentation" x1="2" y1="2" x2="18" y2="18" .stroke="${s}"/> <line role="presentation" x1="2" y1="18" x2="18" y2="2" .stroke="${s}"/> </svg>`
                        }
                        const wt = function(e) {
                                let {
                                    className: t,
                                    block: o,
                                    prefix: r = "osano-cm-"
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return {
                                    prefix: r,
                                    block: o,
                                    element: e,
                                    className: t,
                                    modifiers: {
                                        element: arguments.length > 2 ? arguments[2] : void 0
                                    }
                                }
                            },
                            Ot = function() {
                                return oe(wt(...arguments))
                            },
                            kt = function() {
                                return re(wt(...arguments)).join(" ")
                            };
                        var xt = o(4525);
                        const {
                            I: At
                        } = U, jt = (e, t) => void 0 === t ? void 0 !== (null == e ? void 0 : e._$litType$) : (null == e ? void 0 : e._$litType$) === t, Pt = () => document.createComment(""), Dt = (e, t, o) => {
                            var r;
                            const n = e._$AA.parentNode,
                                i = void 0 === t ? e._$AB : t._$AA;
                            if (void 0 === o) {
                                const t = n.insertBefore(Pt(), i),
                                    r = n.insertBefore(Pt(), i);
                                o = new At(t, r, e, e.options)
                            } else {
                                const t = o._$AB.nextSibling,
                                    s = o._$AM,
                                    a = s !== e;
                                if (a) {
                                    let t;
                                    null === (r = o._$AQ) || void 0 === r || r.call(o, e), o._$AM = e, void 0 !== o._$AP && (t = e._$AU) !== s._$AU && o._$AP(t)
                                }
                                if (t !== i || a) {
                                    let e = o._$AA;
                                    for (; e !== t;) {
                                        const t = e.nextSibling;
                                        n.insertBefore(e, i), e = t
                                    }
                                }
                            }
                            return o
                        }, St = function(e, t) {
                            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                            return e._$AI(t, o), e
                        }, Ct = {}, Tt = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct;
                            return e._$AH = t
                        }, Nt = e => e._$AH, Et = e => {
                            var t;
                            null === (t = e._$AP) || void 0 === t || t.call(e, !1, !0);
                            let o = e._$AA;
                            const r = e._$AB.nextSibling;
                            for (; o !== r;) {
                                const e = o.nextSibling;
                                o.remove(), o = e
                            }
                        }, It = e => {
                            e._$AR()
                        }, Lt = (e, t, o) => {
                            const r = new Map;
                            for (let n = t; n <= o; n++) r.set(e[n], n);
                            return r
                        }, Bt = se(class extends ae {
                            constructor(e) {
                                if (super(e), e.type !== ie) throw Error("repeat() can only be used in text expressions")
                            }
                            dt(e, t, o) {
                                let r;
                                void 0 === o ? o = t : void 0 !== t && (r = t);
                                const n = [],
                                    i = [];
                                let s = 0;
                                for (const a of e) n[s] = r ? r(a, s) : s, i[s] = o(a, s), s++;
                                return {
                                    values: i,
                                    keys: n
                                }
                            }
                            render(e, t, o) {
                                return this.dt(e, t, o).values
                            }
                            update(e, t) {
                                let [o, r, n] = t;
                                var i;
                                const s = Nt(e),
                                    {
                                        values: a,
                                        keys: l
                                    } = this.dt(o, r, n);
                                if (!Array.isArray(s)) return this.ht = l, a;
                                const c = null !== (i = this.ht) && void 0 !== i ? i : this.ht = [],
                                    d = [];
                                let p, m, g = 0,
                                    u = s.length - 1,
                                    h = 0,
                                    b = a.length - 1;
                                for (; g <= u && h <= b;)
                                    if (null === s[g]) g++;
                                    else if (null === s[u]) u--;
                                else if (c[g] === l[h]) d[h] = St(s[g], a[h]), g++, h++;
                                else if (c[u] === l[b]) d[b] = St(s[u], a[b]), u--, b--;
                                else if (c[g] === l[b]) d[b] = St(s[g], a[b]), Dt(e, d[b + 1], s[g]), g++, b--;
                                else if (c[u] === l[h]) d[h] = St(s[u], a[h]), Dt(e, s[g], s[u]), u--, h++;
                                else if (void 0 === p && (p = Lt(l, h, b), m = Lt(c, g, u)), p.has(c[g]))
                                    if (p.has(c[u])) {
                                        const t = m.get(l[h]),
                                            o = void 0 !== t ? s[t] : null;
                                        if (null === o) {
                                            const t = Dt(e, s[g]);
                                            St(t, a[h]), d[h] = t
                                        } else d[h] = St(o, a[h]), Dt(e, s[g], o), s[t] = null;
                                        h++
                                    } else Et(s[u]), u--;
                                else Et(s[g]), g++;
                                for (; h <= b;) {
                                    const t = Dt(e, d[b + 1]);
                                    St(t, a[h]), d[h++] = t
                                }
                                for (; g <= u;) {
                                    const e = s[g++];
                                    null !== e && Et(e)
                                }
                                return this.ht = l, Tt(e, d), P
                            }
                        }), Mt = ["children", "term", "id", "render", "termClass", "descriptionClass"];

                        function Ft(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Ht(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ft(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ft(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }

                        function zt(e) {
                            const {
                                children: t,
                                term: o,
                                id: r = (0, gt.v4)("dt"),
                                render: n,
                                termClass: i,
                                descriptionClass: s
                            } = e, a = (0, q.A)(e, Mt), l = "list-item", c = {
                                term: Ot(l, Ht(Ht({}, e), {}, {
                                    className: i
                                }), {
                                    type: "term"
                                }),
                                description: Ot(l, Ht(Ht({}, e), {}, {
                                    className: s
                                }), {
                                    type: "description"
                                })
                            };
                            return j ` <dt class="${le(c.term)}" id="${r}">${o}</dt> ${Bt(t,xt.D_,(e=>j` <dd role="definition" aria-labelledby="${r}" class="${le(c.description)}"> ${n?n(Ht(Ht({},a),{},{block:l},e)):e} </dd> `))} `
                        }
                        const Rt = se(class extends ae {
                            constructor() {
                                super(...arguments), (0, n.A)(this, "part", null), (0, n.A)(this, "children", null), (0, n.A)(this, "mapper", null), (0, n.A)(this, "index", 0)
                            }
                            commitChild(e) {
                                0 === this.index && It(this.part);
                                const t = Dt(this.part);
                                St(t, e)
                            }
                            draw() {
                                const {
                                    children: e,
                                    mapper: t
                                } = this;
                                window.requestAnimationFrame((o => {
                                    this && this.children === e && this.mapper === t && this.loopChildren(o)
                                }))
                            }
                            loopChildren(e) {
                                for (; this.index < this.children.length;) {
                                    let t = this.children[this.index];
                                    if (void 0 !== this.mapper && (t = this.mapper(t, this.index)), this.commitChild(t), this.index += 1, Date.now() - e > 10) return void this.draw()
                                }
                            }
                            update(e, t) {
                                let [o, r] = t;
                                return o === this.children && r === this.mapper || (this.part = e, this.children = o, this.mapper = r, this.index = 0, this.loopChildren(Date.now())), P
                            }
                            render() {
                                return P
                            }
                        });
                        se(class extends ae {
                            constructor(e) {
                                super(e), this.loaded = !1
                            }
                            update(e, t) {
                                let {
                                    element: o
                                } = e, [r, ...n] = t;
                                return this.loaded ? P : (r.apply(void 0, [o, ...n]), this.loaded = !0)
                            }
                            render() {
                                return this.loaded
                            }
                        });
                        const Wt = new WeakMap;
                        class Ut extends ae {
                            constructor(e) {
                                super(e)
                            }
                            static onScroll(e) {
                                e.stopPropagation();
                                const t = Wt.get(e.target) || {};
                                null != t && t.activeView && (t.scrollPositions[`${t.activeView}`] = e.target.scrollTop)
                            }
                            static saveScrollState(e, t) {
                                const o = Wt.get(e) || {
                                        activeView: "",
                                        scrollPositions: {}
                                    },
                                    r = o.activeView !== t;
                                if (r) {
                                    const r = o.activeView || t;
                                    o.activeView = t, o.scrollPositions[`${r}`] = e.scrollTop || 0
                                }
                                return Wt.set(e, o), r
                            }
                            update(e, t) {
                                let [o] = t;
                                const {
                                    element: r
                                } = e;
                                if (Ut.saveScrollState(r, o)) {
                                    const e = Wt.get(r),
                                        t = e.scrollPositions[`${o}`] ? ? 0;
                                    window.cancelAnimationFrame(e.nextScroll), e.nextScroll = window.requestAnimationFrame((() => {
                                        r.scrollTop = t
                                    }))
                                }
                                return r.addEventListener("scroll", Ut.onScroll), ""
                            }
                            render() {
                                return P
                            }
                        }
                        const Vt = se(Ut),
                            Qt = {},
                            Yt = se(class extends ae {
                                constructor() {
                                    super(...arguments), this.st = Qt
                                }
                                render(e, t) {
                                    return t()
                                }
                                update(e, t) {
                                    let [o, r] = t;
                                    if (Array.isArray(o)) {
                                        if (Array.isArray(this.st) && this.st.length === o.length && o.every(((e, t) => e === this.st[t]))) return P
                                    } else if (this.st === o) return P;
                                    return this.st = Array.isArray(o) ? Array.from(o) : o, this.render(o, r)
                                }
                            }),
                            Gt = ["block", "children", "itemId", "itemRenderer"];

                        function Kt(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Zt(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Kt(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Kt(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }

                        function qt(e) {
                            const {
                                block: t,
                                children: o = [],
                                itemId: r = "id",
                                itemRenderer: n
                            } = e, i = (0, q.A)(e, Gt);
                            return o.length > 30 ? Yt(o, (() => j `${Rt(o,(e=>n(Zt(Zt({},i),"object"==typeof e?e:{[r]:e}))))}`)) : Bt(o, (e => n(Zt(Zt({}, i), {}, {
                                block: t
                            }, "object" == typeof e ? e : {
                                [r]: e
                            }))))
                        }
                        const Xt = ["id", "element", "className", "itemClassName", "title", "ariaLive", "role"];

                        function Jt(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function eo(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Jt(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Jt(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const to = ["render", "elementModifiers"];

                        function oo(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function ro(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? oo(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : oo(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const no = "list-item";

                        function io(e) {
                            const {
                                render: t,
                                elementModifiers: o
                            } = e, r = (0, q.A)(e, to), n = {
                                root: Ot(no, r, o)
                            };
                            return j `<li class="${le(n.root)}"> ${t(ro(ro({},r),{},{block:no}))} </li>`
                        }
                        const so = ["id", "element", "className", "itemClassName", "title", "ariaLive", "role"];

                        function ao(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function lo(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ao(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ao(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }

                        function co(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function po(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? co(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : co(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const mo = "list";

                        function go(e) {
                            const {
                                type: t
                            } = e, o = kt(mo, e, {
                                type: t
                            });
                            return "description" === t ? function(e) {
                                const {
                                    id: t,
                                    element: o,
                                    className: r = "",
                                    itemClassName: n = "",
                                    title: i,
                                    ariaLive: s,
                                    role: a = "list"
                                } = e, l = (0, q.A)(e, Xt);
                                return j `<dl id="${ce(t)}" class="${ce(r)}" role="${a}" aria-label="${ce(i)}" aria-live="${ce(s)}"> ${qt(eo(eo({},l),{},{block:o,className:n,itemRenderer:zt}))} </dl> `
                            }(po(po({}, e), {}, {
                                className: o,
                                element: mo
                            })) : function(e) {
                                const {
                                    id: t,
                                    element: o,
                                    className: r = "",
                                    itemClassName: n = "",
                                    title: i,
                                    ariaLive: s,
                                    role: a = "list"
                                } = e, l = (0, q.A)(e, so);
                                return j `<ul id="${ce(t)}" class="${r}" role="${a}" aria-label="${ce(i)}" aria-live="${ce(s)}"> ${qt(lo(lo({},l),{},{block:o,className:n,itemRenderer:io}))} </ul>`
                            }(po(po({}, e), {}, {
                                className: o,
                                element: mo
                            }))
                        }
                        const uo = (e, t, o) => {
                                const r = (0, Y.qi)(e).toLowerCase();
                                return i.hT.translate(`${t}.${r}`, void 0, o)
                            },
                            ho = ["block"],
                            bo = ["block"],
                            fo = ["block", "disabled", "className"],
                            yo = ["block"],
                            $o = ["block"],
                            _o = ["id", "block", "disabled", "className"],
                            vo = ["id", "block", "className"];

                        function wo(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Oo(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? wo(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : wo(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const ko = i.hT.template("messaging.usageWhat"),
                            xo = i.hT.template("messaging.usageHow"),
                            Ao = i.hT.template("messaging.usageList"),
                            jo = i.hT.template("messaging.timer"),
                            Po = i.hT.template("messaging.categories"),
                            Do = i.hT.template("messaging.default"),
                            So = i.hT.template("iab.layer1"),
                            Co = i.hT.template("messaging.closeButton"),
                            To = i.hT.template("dialog.close"),
                            No = i.hT.template("dialog.label"),
                            Eo = i.hT.template("buttons.denyAll"),
                            Io = i.hT.template("buttons.managePreferences"),
                            Lo = i.hT.template("drawer.header"),
                            Bo = i.hT.template("iab.vendor.title"),
                            Mo = e => {
                                let {
                                    dispatch: t,
                                    getState: o
                                } = e;
                                return () => {
                                    const e = o();
                                    !(0, Y.Gs)(e) && (0, Y.dP)(e) && (t(be.Ay.acceptAllConsent()), t(be.Ay.saveConsent())), t(be.Ay.hideDialog()), t(be.Ay.showWidget()), t(be.Ay.focusWidget())
                                }
                            },
                            Fo = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t(be.Ay.hideDialog()), t(be.Ay.showDrawer())
                                }
                            },
                            Ho = e => {
                                let {
                                    dispatch: t
                                } = e;
                                return () => {
                                    t(be.Ay.hideDialog()), t(be.Ay.showVendorConsent(Xe.M.REPLACE))
                                }
                            },
                            zo = e => {
                                const t = Object.assign({}, (function(e) {
                                        if (null == e) throw new TypeError("Cannot destructure " + e)
                                    }(e), e)),
                                    {
                                        prefix: o,
                                        store: r
                                    } = t,
                                    {
                                        getState: n
                                    } = r,
                                    i = n(),
                                    s = uo(i, "buttons.dialog.openDrawer", Io());
                                return j `${ue(Oo(Oo({},e),{},{className:`
                                $ {
                                    o
                                }
                                manage `,label:s,onClick:Fo(r),modifiers:{element:{type:"manage"}}}))}`
                            },
                            Ro = e => {
                                const {
                                    block: t
                                } = e, o = (0, q.A)(e, ho), {
                                    store: r
                                } = o, {
                                    getState: n
                                } = r, i = n();
                                return j `${(0,Y.Ow)(i)?zo(e):function(e){const{prefix:t,store:o}=e;return j`
                                $ {
                                    ue(ze(ze({}, e), {}, {
                                        className: `${t}save`,
                                        label: Ue(),
                                        onClick: Re(o),
                                        modifiers: We
                                    }))
                                }
                                `}(Oo(Oo({},o),{},{block:t}))}`
                            },
                            Wo = e => {
                                const {
                                    block: t
                                } = e, o = (0, q.A)(e, bo), {
                                    store: r
                                } = e, {
                                    getState: n
                                } = r, i = n();
                                if (!(0, Y.sD)(i)) return "";
                                const s = uo(i, "buttons.dialog.denyAll", Eo());
                                return j `${Ne(Oo(Oo({},o),{},{block:t,label:s}))}`
                            },
                            Uo = e => {
                                const {
                                    block: t,
                                    disabled: o,
                                    className: r = ""
                                } = e, n = (0, q.A)(e, fo), {
                                    prefix: i,
                                    store: s
                                } = n, {
                                    getState: a
                                } = s, l = a(), c = "buttons", d = o || !(0, Y.R_)(l), p = {
                                    root: oe({
                                        prefix: i,
                                        block: t,
                                        element: c,
                                        modifiers: {
                                            element: {
                                                disabled: d
                                            }
                                        },
                                        className: r
                                    })
                                };
                                return (0, Y.dP)(l) ? (0, Y.td)(l) ? j `<div class="${le(p.root)}"> ${zo(Oo(Oo({},n),{},{block:c}))} </div>` : "" : (0, qe.lF)(l) || (0, Y.kA)(l) ? j ` <div class="${le(p.root)}"> ${Ro(Oo(Oo({},n),{},{block:c}))} ${we(Oo(Oo({},n),{},{block:c}))} ${Wo(Oo(Oo({},n),{},{block:c}))} </div> ` : j ` <div class="${le(p.root)}"> ${function(e){const{prefix:t,store:o}=e;return j`
                                $ {
                                    ue(ke(ke({}, e), {}, {
                                        className: `${t}accept`,
                                        label: je(),
                                        onClick: xe(o),
                                        modifiers: Ae
                                    }))
                                }
                                `}(Oo(Oo({},n),{},{block:c}))} ${function(e){const{prefix:t,store:o}=e;return j`
                                $ {
                                    ue(Ie(Ie({}, e), {}, {
                                        className: `${t}deny`,
                                        label: Me(),
                                        onClick: Le(o),
                                        modifiers: Be
                                    }))
                                }
                                `}(Oo(Oo({},n),{},{block:c}))} ${Wo(Oo(Oo({},n),{},{block:c}))} ${(0,Y.td)(l)?zo(Oo(Oo({},n),{},{block:c})):""} </div>`
                            },
                            Vo = e => {
                                let {
                                    line: t
                                } = e;
                                return t
                            },
                            Qo = "dialog";

                        function Yo(e) {
                            const {
                                id: t = (0, gt.v4)(Qo),
                                block: o,
                                className: r = ""
                            } = e, n = (0, q.A)(e, vo), {
                                prefix: s = "osano-cm-",
                                store: a
                            } = n, {
                                getState: l
                            } = a, c = l(), d = (0, Y.rE)(c), p = (0, qe.lF)(c), m = (0, Y.I1)(c), g = !(0, Y.R_)(c), u = p ? (0, Y.PR)(c) : (0, Y.U0)(c), h = p && !(0, Y.BR)(c) || (0, Y.LU)(c), b = (0, Y.Sf)(c), {
                                dialogType: f,
                                displayPosition: y
                            } = b, $ = `${t}__label`, _ = {
                                root: oe({
                                    prefix: s,
                                    block: o,
                                    element: Qo,
                                    modifiers: {
                                        element: {
                                            hidden: g,
                                            position: y,
                                            type: f,
                                            context: (0, Y.jB)(c) && "amp",
                                            wide: "box" === f && p
                                        }
                                    },
                                    className: r
                                }),
                                content: oe({
                                    prefix: s,
                                    block: Qo,
                                    element: "content"
                                })
                            }, v = d.map((e => {
                                let [t, o] = e;
                                return j `<span class="osano-cm-link-separator"></span>${Ke(Oo(Oo({},n),{},{block:"content",className:"additional-link",href:o,linkText:t}))}`
                            }));
                            return j ` <div id="${t}" role="dialog" aria-label="${No()}" aria-describedby="${$}" class="${le(_.root)}" @keyup="${e=>{if("keyup"!==e.type)return;const{getState:t}=a,o=t();27===(e.charCode||e.keyCode)&&(0,Y.Um)(o)&&(e.preventDefault(),e.stopPropagation(),(0,Y.sD)(o)?Se(a)():Mo(a)())}}"> ${(e=>{const{block:t,className:o,prefix:r,store:n}=e,i=n.getState();if(!(0,Y.Um)(i))return"";const s={root:oe({prefix:r,block:t,element:"close",className:o})},a=(0,Y.sD)(i)?Se(n):Mo(n);return j` < button class = "${le(s.root)}"
                            @click = "${a}" > $ {
                                vt({
                                    store: n,
                                    label: To()
                                })
                            } < /button> `})(Oo(Oo({},n),{},{block:"dialog"}))} <div class="${le(_.content)}"> ${(e=>{const{id:t,block:o,disabled:r,className:n=""}=e,s=(0,q.A)(e,_o),{prefix:a,store:{getState:l}}=s,c=l(),d=(0,Y.I1)(c),p=(0,Y.Kn)(c)||Object.keys((0,qe.YQ)(c)).length,m={root:oe({prefix:a,block:o,className:n,element:"message",modifiers:{element:{disabled:r}}})},g={analytics:i.hT.translate("categories.ANALYTICS.label").toLowerCase(),personalization:i.hT.translate("categories.PERSONALIZATION.label").toLowerCase(),marketing:i.hT.translate("categories.MARKETING.label").toLowerCase()};let u=i.hT.template("iab.purposes.1.name")();mt.L_.forEach(((e,t)=>{const o=i.hT.template(`iab.stacks.${e}.name`),r=t===mt.L_.length-1?`, and ${o()}`:`, ${o()}`;u=u.concat(r)}));const h={};for(const y of mt.A5){const e=i.hT.template(`iab.specialFeatures.${y}.name`);h[`iab.specialFeatures.${y}.name`]=e().toLowerCase()}const b=Oo({vendorCount:p,stacks:u.toLowerCase()},h),f=So({interpolations:b}).split("\n\n");return j` <span id="${t}" class="${le(m.root)}"> ${(0,qe.lF)(c)?f.map(((e,t)=>j`${t>0?j`<br><br>`:null}${e}`)):d?ko():Do({interpolations:g})} ${(0,Y.dP)(c)?jo():(0,Y.ze)(c)?Po():""} ${(0,Y.Um)(c)&&(0,Y.sD)(c)?Co():""} </span > `})(Oo(Oo({},n),{},{block:"content",id:$}))} ${m?(e=>{const{block:t}=e,o=(0,q.A)(e,$o),{prefix:r}=o,n="usage-list",i={root:oe({prefix:r,block:t,element:n})};return j` < p class = "${le(i.root)}" > $ {
                                xo()
                            }
                            $ {
                                go(Oo(Oo({}, o), {}, {
                                    block: n,
                                    children: Ao().split(/\r?\n/).map((e => ({
                                        line: e
                                    }))),
                                    render: Vo
                                }))
                            } < /p> `})(Oo(Oo({},n),{},{block:"content"})):""} ${Ke(Oo(Oo({},n),{},{block:"content"}))}${v} ${p||(0,Y.Gy)(c)?(e=>{const{block:t}=e,o=(0,q.A)(e,yo),{prefix:r,store:n,drawerId:i}=o,s=n.getState(),a="drawer-links",l={root:oe({prefix:r,block:t,element:a})};return j` <p class="${le(l.root)}"> ${(0,Y.Ow)(s)?"":Qe(Oo(Oo({},o),{},{block:a,type:"manage",label:Lo(),href:`#${i}`,onClick:Fo(n)}))} ${(0,qe.lF)(s)?Qe(Oo(Oo({},o),{},{block:a,type:"vendor-list",label:Bo(),onClick:Ho(n)})):""} </p > `})(Oo(Oo({},n),{},{block:"content",id:t})):""} ${h?go(Oo(Oo({},n),{},{tabIndex:g?-1:0,block:"dialog",children:u.map((e=>({category:e,id:`
                            $ {
                                s
                            }
                            dialog - toggle--category_$ {
                                e
                            }
                            `}))),itemId:"category",role:"group",render:_t})):""} </div> ${Uo(Oo(Oo({},n),{},{block:"dialog"}))} </div> `
                        }
                        const Go = () => (e, t) => {
                            e(be.Ay.revertConsent()), e(be.Ay.hideDrawer());
                            const o = t();
                            setTimeout((() => {
                                e(be.Ay.hideDoNotSell()), (0, Y.Gs)(o) ? (e(be.Ay.showWidget()), e(be.Ay.focusWidget())) : e(be.Ay.showDialog())
                            }), 400)
                        };
                        const Ko = se(class extends ae {
                                constructor(e) {
                                    super(e), this.tt = new WeakMap
                                }
                                render(e) {
                                    return [e]
                                }
                                update(e, t) {
                                    let [o] = t;
                                    if (jt(this.et) && (!jt(o) || this.et.strings !== o.strings)) {
                                        const t = Nt(e).pop();
                                        let o = this.tt.get(this.et.strings);
                                        if (void 0 === o) {
                                            const e = document.createDocumentFragment();
                                            o = Q(D, e), o.setConnected(!1), this.tt.set(this.et.strings, o)
                                        }
                                        Tt(o, [t]), Dt(o, void 0, t)
                                    }
                                    if (jt(o)) {
                                        if (!jt(this.et) || this.et.strings !== o.strings) {
                                            const t = this.tt.get(o.strings);
                                            if (void 0 !== t) {
                                                const o = Nt(t).pop();
                                                It(e), Dt(e, void 0, o), Tt(e, [o])
                                            }
                                        }
                                        this.et = o
                                    } else this.et = void 0;
                                    return this.render(o)
                                }
                            }),
                            Zo = e => {
                                let {
                                    category: t,
                                    open: o
                                } = e;
                                return e => {
                                    e(be.Ay.toggleDisclosure(t, o))
                                }
                            },
                            qo = ["block", "name", "expiry", "provider", "purpose"],
                            Xo = ["block", "name", "provider", "purpose"],
                            Jo = ["category", "disclosures", "onToggle", "className", "label", "tabIndex"];

                        function er(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function tr(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? er(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : er(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const or = i.hT.template("disclosure.cookie.name"),
                            rr = i.hT.template("disclosure.cookie.provider"),
                            nr = i.hT.template("disclosure.cookie.expiry"),
                            ir = i.hT.template("disclosure.cookie.purpose"),
                            sr = i.hT.template("disclosure.script.name"),
                            ar = i.hT.template("disclosure.script.provider"),
                            lr = i.hT.template("disclosure.script.purpose"),
                            cr = i.hT.template("messaging.viewCookies"),
                            dr = i.hT.template("disclosure.none"),
                            pr = e => {
                                const {
                                    type: t
                                } = e;
                                return "no-results" === t ? j `${dr()}` : j `${Ko("script"===t?(e=>{const{block:t,name:o,provider:r,purpose:n}=e,i=(0,q.A)(e,Xo),{prefix:s="osano-cm-"}=i,a="script-disclosure",l=kt(a,{prefix:s,block:t}),c={termClass:kt("title",{prefix:s,block:a}),descriptionClass:kt("description",{prefix:s,block:a})};return j`
                                $ {
                                    go(tr(tr({}, i), {}, {
                                        block: t,
                                        className: l,
                                        children: [tr(tr({}, c), {}, {
                                            term: sr(),
                                            children: [o || " "]
                                        }), tr(tr({}, c), {}, {
                                            term: ar(),
                                            children: [r || " "]
                                        }), tr(tr({}, c), {}, {
                                            term: lr(),
                                            children: [n || " "]
                                        })],
                                        type: "description",
                                        headingLevel: 3,
                                        title: o
                                    }))
                                }
                                `})(e):(e=>{const{block:t,name:o,expiry:r,provider:n,purpose:i}=e,s=(0,q.A)(e,qo),{prefix:a="osano-cm-"}=s,l="cookie-disclosure",c=kt(l,tr(tr({},s),{},{prefix:a,block:t})),d={termClass:kt("title",{prefix:a,block:l}),descriptionClass:kt("description",{prefix:a,block:l})};return j`
                                $ {
                                    go(tr(tr({}, s), {}, {
                                        block: t,
                                        className: c,
                                        children: [tr(tr({}, d), {}, {
                                            term: or(),
                                            children: [o || " "]
                                        }), tr(tr({}, d), {}, {
                                            term: rr(),
                                            children: [n || " "]
                                        }), tr(tr({}, d), {}, {
                                            term: nr(),
                                            children: [r || " "]
                                        }), tr(tr({}, d), {}, {
                                            term: ir(),
                                            children: [i || " "]
                                        })],
                                        type: "description"
                                    }))
                                }
                                `})(e))}`
                            },
                            mr = "disclosure";
                        const gr = i.hT.template("iab.terms.consent"),
                            ur = i.hT.template("iab.terms.legInt");
                        const hr = (e, t) => o => r => {
                                const n = o.target.checked;
                                r(be.Ay.setConsent(e, n ? i.FA : i.Fr, t))
                            },
                            br = ["purposeId"],
                            fr = ["category", "block", "hasDisclosures"];

                        function yr(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function $r(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? yr(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : yr(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }

                        function _r(e) {
                            const {
                                purposeId: t
                            } = e, o = (0, q.A)(e, br), r = o.store.getState(), n = !!(0, qe.kb)(r)[`${t}`], s = !!(0, qe.jP)(r)[`${t}`];
                            return j `${st(e)}${t?function(e){const{consentChecked:t,liChecked:o,purposeId:r,prefix:n,store:{dispatch:s}}=e,a=(e,t)=>o=>{o.preventDefault();const n=t?i.Fr:i.FA;return s(e(r,n)),!1},l=`
                            $ {
                                n
                            }
                            tcf - purpose$ {
                                r
                            } - consent `,c=gr(),d=`
                            $ {
                                n
                            }
                            tcf - purpose--label `,p=j` < label
                            for = "${l}"
                            class = "${d}" > < input id = "${l}"
                            name = "${l}"
                            type = "checkbox".checked = "${t}"
                            value = "purpose${r}-consent"
                            @change = "${a(he.b6,t)}" > $ {
                                c
                            } < /label>`;if(!mt.C1.includes(r))return p;const m=`${n}tcf-purpose${r}-legint`,g=ur(),u=j`<label for="${m}" class="${d}"> <input id="${m}" name="${m}" type="checkbox" .checked="${o}" value="purpose${r}-legint" @change="${a(he.sL,o)}"> ${g} </label > `;return j`
                            $ {
                                p
                            }
                            $ {
                                u
                            }
                            `}($r({purposeId:t,consentChecked:n,liChecked:s},o)):""}`
                        }

                        function vr(e) {
                            const {
                                category: t = "",
                                block: o,
                                hasDisclosures: r = !0
                            } = e, n = (0, q.A)(e, fr), {
                                prefix: s,
                                store: {
                                    dispatch: a,
                                    getState: l
                                }
                            } = n, c = l(), d = `${s}drawer-toggle--category_${t}--description`, p = (0, qe.lF)(c) && mt.pO[`${t}`], m = p ? i.hT.translate(`iab.stacks.${p}.name`) : i.hT.translate(`categories.${t}.label`) || "", g = p ? `iab.stacks.${p}.description` : `categories.${t}.description`, u = (i.hT.translate(g) || "").split("\n\n").filter(Boolean), h = (mt.Ll[`${t}`] || []).map((e => ({
                                purposeId: e,
                                type: "purposes"
                            }))), b = "description", f = {
                                description: oe({
                                    prefix: s,
                                    block: o,
                                    element: b
                                })
                            };
                            return j `${bt($r($r({},n),{},{ariaLevel:"2",id:`
                            $ {
                                s
                            }
                            drawer - toggle--category_$ {
                                t
                            }
                            `,descriptionId:d,category:t,block:o,label:m,checked:(0,Y.aE)(c,t),disabled:(0,Y.pU)(c,t),onChange:e=>a(hr(t,(0,Y.IP)(c))(e)),className:re({prefix:s,block:o,element:"drawer-toggle"}).join(" ")}))} <div class="${le(f.description)}"> <p id="${d}"> ${u.map(((e,t)=>j`${t>0?j`<br><br>`:null}${e}`))} </p> ${(0,qe.lF)(c)?go($r($r({},n),{},{block:b,children:h,itemId:"purposeId",render:_r})):""} </div> ${r?function(e){const{category:t,disclosures:o=[],onToggle:r=(()=>{}),className:n="",label:i,tabIndex:s=0}=e,a=(0,q.A)(e,Jo),{prefix:l,store:{dispatch:c,getState:d}}=a,p=d(),m=`
                            $ {
                                l
                            }
                            $ {
                                t
                            }
                            _disclosures `,g=(0,Y.ro)(p)&&!(0,Y.DZ)(p,t),u=!(0,Y.G8)(p,t),h={root:Ot(mr,tr(tr({},a),{},{className:n}),{collapse:u,loading:g}),toggle:Ot("toggle",tr(tr({},a),{},{block:mr}))},b=e=>{if(e.preventDefault(),"keypress"===e.type){const t=e.charCode||e.keyCode;if(32!==t&&13!==t)return!1}return c(Zo({category:t})),r(t,!u),!1};return j` < div class = "${le(h.root)}" > < div class = "${le(h.toggle)}"
                            @click = "${b}"
                            @keypress = "${b}"
                            tabindex = "${s}"
                            role = "link"
                            aria - expanded = "${!u}"
                            aria - controls = "${m}"
                            aria - label = "${i} ${cr()}" > $ {
                                cr()
                            } < /div> ${go(tr(tr({},a),{},{id:m,block:"disclosure",children:o,render:pr,ariaLive:u?"none":"polite"}))} </div > `}($r($r({},n),{},{block:o,category:t,disclosures:(0,Y.fc)(c,t),label:m})):""}`
                        }

                        function wr(e) {
                            return Math.max(e || 0, 0) / 60 / 60 / 24
                        }
                        const Or = ["id", "block"];

                        function kr(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function xr(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? kr(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : kr(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const Ar = i.hT.template("drawer.description"),
                            jr = i.hT.template("iab.drawer.description"),
                            Pr = i.hT.template("doNotSell.description"),
                            Dr = i.hT.template("doNotSell.link");

                        function Sr(e) {
                            const {
                                id: t,
                                block: o
                            } = e, r = (0, q.A)(e, Or), {
                                prefix: n,
                                store: {
                                    getState: s
                                }
                            } = r, a = {
                                description: oe({
                                    prefix: n,
                                    block: o,
                                    element: "description"
                                })
                            }, l = s(), c = (0, qe.lF)(l), d = (0, Y.Pq)(l), p = (0, Y.Zp)(l), m = (0, Y.IZ)(l), g = (0, Y.rE)(l), u = i.hT.template(`buttons.${m}`), h = i.hT.template(`messaging.${m}`), b = xr(xr({}, r), {}, {
                                block: "content",
                                className: "osano-cm-storage-policy",
                                label: u(void 0, h()),
                                href: d,
                                target: "_blank"
                            }), f = g.map((e => {
                                let [t, o] = e;
                                return j `<span class="osano-cm-link-separator"></span>${Qe(xr(xr({},b),{},{className:"osano-cm-additional-link",label:i.hT.template(`
                                messaging.$ {
                                    t
                                }
                                `)(),href:o}))}`
                            }));
                            return j `<p id="${ce(t)}" class="${le(a.description)}" tabindex="-1"> ${function(e){if((0,Y.IP)(e))return Pr();if((0,qe.lF)(e))return jr({interpolations:{consentMaxAgeMonths:Math.floor(wr((0,Y.Ym)(e))/30)}}).split(/\r?\n/g).map((e=>j` < br > $ {
                                e
                            }
                            `));return Ar()}(l)} </p> ${(0,Y.IP)(l)?j`<p class="${le(a.description)}"> ${Dr()} ${Qe(b)}${f} </p>`:""} <p class="${le(a.description)}"> ${p&&!(0,Y.IP)(l)?j`${Qe(b)}${f}`:""} ${c?pt(xr({block:"description"},r)):""} ${c?st(xr({block:"description"},r)):""} </p> ${c?Fe(xr(xr({},r),{},{block:o})):""} `
                        }
                        const Cr = e => t => o => {
                                const r = t.target.checked;
                                o((0, he.c)(e, r ? i.FA : i.Fr))
                            },
                            Tr = ["block", "description", "name", "specialFeatureId"];

                        function Nr(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Er(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Nr(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Nr(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }

                        function Ir(e) {
                            const {
                                block: t,
                                description: o,
                                name: r,
                                specialFeatureId: n
                            } = e, i = (0, q.A)(e, Tr), {
                                store: {
                                    dispatch: s,
                                    getState: a
                                }
                            } = i, l = a(), {
                                prefix: c = "osano-cm-"
                            } = i, d = {
                                description: oe({
                                    prefix: c,
                                    block: t,
                                    element: "description"
                                })
                            };
                            return j ` ${bt(Er(Er({},i),{},{id:`
                            $ {
                                c
                            }
                            drawer - toggle--specialFeature_$ {
                                n
                            }
                            `,block:t,label:r,title:r,checked:(0,qe.uY)(l,{specialFeatureId:n}),onChange:e=>s(Cr(n)(e)),className:re({prefix:c,block:t,element:"drawer-toggle"}).join(" ")}))} <div class="${le(d.description)}">${o}</div> `
                        }
                        const Lr = ["id", "active", "block", "className"];

                        function Br(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Mr(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Br(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Br(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const Fr = i.hT.template("buttons.save"),
                            Hr = i.hT.template("messaging.poweredBy");

                        function zr(e) {
                            const {
                                id: t,
                                active: o,
                                block: r,
                                className: n = ""
                            } = e, s = (0, q.A)(e, Lr), {
                                prefix: a = "osano-cm-",
                                store: {
                                    dispatch: l,
                                    getState: c
                                }
                            } = s, d = c(), p = (0, qe.lF)(d), m = [{
                                category: i.H7,
                                hasDisclosures: !1
                            }], g = "iab.specialFeatures", u = (0, Y.IP)(d) ? m : [...p ? (0, Y.PR)(d).map((e => ({
                                category: e
                            }))) : (0, Y.bW)(d).map((e => ({
                                category: e
                            }))), ...(0, Y.tu)(d) ? m : [], ...p ? Object.keys(i.hT.translate(g)).map((e => {
                                const t = `${g}.${e}`;
                                return {
                                    specialFeatureId: e,
                                    name: i.hT.translate(`${t}.name`),
                                    description: i.hT.translate(`${t}.description`),
                                    id: `osano-cm-tcf-v2-specialFeatures--specialFeature_${e}`,
                                    render: Ir
                                }
                            })) : []], h = "view", b = {
                                root: oe({
                                    prefix: a,
                                    block: r,
                                    element: h,
                                    className: n,
                                    modifiers: {
                                        element: {
                                            active: o,
                                            type: "consent"
                                        }
                                    }
                                }),
                                poweredBy: oe({
                                    prefix: a,
                                    block: h,
                                    element: "powered-by"
                                })
                            };
                            return j `<div class="${le(b.root)}"> ${Sr(Mr(Mr({},s),{},{prefix:a,id:t,block:h}))} ${go(Mr(Mr({},s),{},{prefix:a,block:h,children:u,render:vr,itemClassName:re({prefix:a,element:"drawer-item"}).join(" ")}))} ${ue(Mr(Mr({},s),{},{prefix:a,block:h,className:"osano-cm-save",label:Fr(),onClick:()=>l((e=>{e(be.Ay.saveConsent()),e(be.Ay.hideDrawer()),setTimeout((()=>{e(be.Ay.hideDoNotSell()),e(be.Ay.showWidget()),e(be.Ay.focusWidget())}),400)}))}))} <div class="${le(b.poweredBy)}"> ${Qe(Mr(Mr({},s),{},{prefix:a,block:"powered-by",label:Hr(),ariaDescribedBy:`
                            $ {
                                a
                            }
                            aria.external `,href:"https://www.osano.com/?utm_campaign=cmp&utm_source=cmp-dialog&utm_medium=drawer"}))} </div> </div>`
                        }
                        const Rr = ["element", "type", "plural", "itemId"],
                            Wr = ["id", "active", "className"];

                        function Ur(e, t) {
                            var o = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), o.push.apply(o, r)
                            }
                            return o
                        }

                        function Vr(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ur(Object(o), !0).forEach((function(t) {
                                    (0, n.A)(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ur(Object(o)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }
                        const Qr = i.hT.template("iab.legal.preamble"),
                            Yr = i.hT.template("iab.partnerCount"),
                            Gr = i.hT.template("iab.partnerCountPlural"),
                            Kr = i.hT.template("iab.terms.illustrations"),
                            Zr = e => {
                                const {
                                    element: t,
                                    type: o,
                                    plural: r,
                                    itemId: n
                                } = e, s = (0, q.A)(e, Rr), {
                                    store: {
                                        getState: a
                                    }
                                } = s, l = {
                                    description: Ot(t, e)
                                }, c = `iab.${r}.${n}`, d = i.hT.translate(`${c}.description`), p = Object.keys((0, qe.GQ)(a(), {
                                    type: "legIntPurposes",
                                    id: n
                                })).length, m = "purpose" === o ? 1 === p ? Yr({
                                    interpolations: {
                                        partnerCount: p
                                    }
                                }) : Gr({
                                    interpolations: {
                                        partnerCount: p
                                    }
                                }) : "", g = `${c}.illustrations`, u = i.hT.translate(g), h = "object" == typeof u ? Object.keys(u).map((e => ({
                                    item: i.hT.translate(`${g}.${e}`)
                                }))) : [];
                                return j `<p class="${le(l.description)}">${m}</p> <p class="${le(l.description)}">${d}</p> ${h.length?go({type:"description",block:"illustrations",children:[{id:`osano-cm-tcf-v2_2--${o}-${n}-illustrations`,term:Kr(),children:h}],render:e=>{let{item:t}=e;return t}}):""}`
                            },
                            qr = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : `${e}s`;
                                return Object.keys(i.hT.translate(`iab.${t}`)).map((o => ({
                                    element: e,
                                    term: i.hT.translate(`iab.${t}.${o}.name`),
                                    id: `osano-cm-tcf-v2-${t}--${e}_${o}`,
                                    itemId: o,
                                    children: [{
                                        type: e,
                                        plural: t,
                                        itemId: o
                                    }]
                                })))
                            };

                        function Xr(e) {
                            const {
                                id: t,
                                active: o,
                                className: r = ""
                            } = e, n = (0, q.A)(e, Wr), i = "view", s = qr("purpose"), a = qr("specialPurpose"), l = qr("feature"), c = qr("specialFeature"), d = qr("dataCategory", "dataCategories"), p = Vr(Vr({}, n), {}, {
                                type: "description",
                                block: i,
                                render: Zr
                            }), m = {
                                root: Ot(i, Vr(Vr({}, n), {}, {
                                    className: r
                                }), {
                                    active: o,
                                    type: "disclosure"
                                }),
                                description: Ot("description", p)
                            };
                            return j `<div class="${le(m.root)}"> <p id="${ce(t)}" class="${le(m.description)}" tabindex="-1"> ${Qr()} </p> ${go(Vr(Vr({},p),{},{children:s}))}${go(Vr(Vr({},p),{},{children:a}))}${go(Vr(Vr({},p),{},{children:l}))}${go(Vr(Vr({},p),{},{children:c}))}${go(Vr(Vr({},p),{},{children:d}))} </div> `
                        }
                        const Jr = {
                            preventScroll: !0
                        };

                        function en(e) {
                            return null !== e.offsetParent
                        }
                        const tn = function(e) {
                                return (e || document).querySelectorAll('button, a[href]:not([rel="ignore"]), input:not([type="hidden"]):not([type="file"]), select, textarea, [tabindex]:not([tabindex="-1"]):not([data-focus="first"]):not([data-focus="last"])')
                            },
                            on = function(e, t) {
                                if (null === e) return;
                                const o = document.activeElement,
                                    r = Array.from(tn(e)).filter(en)[0];
                                try {
                                    r.focus(Jr)
                                } catch (l) {
                                    t && t.focus(Jr)
                                }
                                return o
                            },
                            rn = {
                                first: "last",
                                last: "first"
                            },
                            nn = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                return function() {
                                    const t = Array.from(tn(this.parentNode)),
                                        o = rn[`${e}`] || "first",
                                        r = "last" === o ? t.length - 1 : 0,
                                        n = "last" === o ? -1 : 1;
                                    let i = t[parseInt(r, 10)];
                                    if (i) {
                                        if (i.getAttribute("data-focus") === o && (i = t[r + n]), i.getAttribute("data-focus") === e) return;
                                        try {
                                            i.focus()
                                        } catch (l) {}
                                    }
                                }
                            };

                        function sn(e) {
                            let {
                                dataFocus: t
                            } = e;
                            return j `${function(e){let{onFocus:t,dataFocus:o}=e;return j` < span tabindex = "0"
                            aria - hidden = "true"
                            data - focus = "${o}"
                            @focus = "${t}" > < /span>`}({dataFocus:t,onFocus:nn(t)})}`}const an=e=>t=>o=>{const r=t.target.checked;o((0,he.Fk)(e,r?i.FA:i.Fr))},ln=e=>t=>o=>{const r=t.target.checked;o((0,he.gG)(e,r?i.FA:i.Fr))};const cn=(e,t)=>o=>{o(be.Ay.toggleExpansionPanel(e,t))},dn=["body","header","id","tabIndex"],pn=(e,t)=>{let{prefix:o,element:r}=t;const n=`${o}${r}--expanded`;e.nextElementSibling.parentNode.classList.toggle(n)},mn="expansion-panel";const gn=["purposes","vendorId"],un=["legIntPurposes","vendorId"],hn=["category","block","vendorId"];function bn(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function fn(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?bn(Object(o),!0).forEach((function(t){(0,n.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):bn(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const yn=i.hT.template("iab.basis.legit"),$n=i.hT.template("iab.basis.consent"),_n=i.hT.template("iab.basis.combined"),vn=i.hT.template("iab.terms.specialPurposes"),wn=i.hT.template("iab.terms.features"),On=i.hT.template("iab.terms.specialFeatures"),kn=i.hT.template("iab.terms.dataCategories"),xn=i.hT.template("iab.legal.title"),An=i.hT.template("iab.vendor.usesNonCookieAccess"),jn=i.hT.template("iab.vendor.maxCookieStorage"),Pn=i.hT.template("disclosure.day"),Dn=i.hT.template("disclosure.dayPlural"),Sn=i.hT.template("messaging.moreDetails"),Cn=i.hT.template("iab.terms.consent"),Tn=i.hT.template("iab.terms.legInt"),Nn={privacy:i.hT.template("messaging.privacyPolicy"),legIntClaim:i.hT.template("iab.terms.legIntClaim")},En=(e,t,o)=>{if(!e)return o;const r=e[t];return void 0===r?o:r},In=e=>t=>({retention:En(e.purposes,t,e.stdRetention),purposeId:t,type:"purposes"}),Ln=e=>t=>({retention:En(e.specialPurposes,t,e.stdRetention),purposeId:t,type:"specialPurposes"}),Bn=e=>({purposeId:e,type:"features"}),Mn=e=>({purposeId:e,type:"specialFeatures"}),Fn=e=>({purposeId:e,type:"dataCategories"}),Hn=(e,t,o)=>null!=t&&t.length?[{term:e(),children:t.map(o)}]:[],zn=(e,t,o)=>{if(null==e||!e.length)return j``;const r=e.reduce(((e,t)=>e.set(t.langId,t)),new Map),n=i.hT.fallbackLanguages.find((e=>r.has(e))),s=n?r.get(n):e[0],a=Object.entries(Nn).map((e=>{let[o,r]=e;const n=s[o];return n?{label:r(),href:n,ariaDescribedBy:`${t.prefix}aria.externalNewWindow`,target:"_blank"}:void 0})).filter(Boolean);return go(fn(fn({},t),{},{block:o.block,className:kt("vendor-link",o),children:a,render:e=>Qe(e)}))},Rn=e=>{const{purposes:t,vendorId:o}=e,r=(0,q.A)(e,gn);if(0===t.length)return"";const{store:{getState:n}}=r,i=n(),s=Cn(),a=(0,qe.Sh)(i)[`${o}`],l=a&&!(0,qe.CT)(i,{vendorId:o});return bt(fn(fn({},r),{},{label:s,title:s,disabled:!a,checked:l}))},Wn=e=>{const{legIntPurposes:t,vendorId:o}=e,r=(0,q.A)(e,un),{store:{getState:n}}=r,i=n(),s=(0,qe.g4)(i,o);if(0===t.length&&!s)return"";const a=Tn(),l=s||(0,qe.ZZ)(i)[`${o}`],c=s||l&&!(0,qe.r6)(i,{vendorId:o});return bt(fn(fn({},r),{},{label:a,title:a,disabled:s||!l,checked:c}))};function Un(e){const{category:t="",block:o,vendorId:r}=e,n=(0,q.A)(e,hn),{store:{dispatch:i,getState:s}}=n,a=s(),{name:l,purposes:c,legIntPurposes:d,flexiblePurposes:p,specialPurposes:m,features:g,specialFeatures:u,cookieMaxAgeSeconds:h,usesNonCookieAccess:b,deviceStorageDisclosureUrl:f,urls:y,dataRetention:$={},dataDeclaration:_}=(0,qe.Tp)(a,{vendorId:r}),{prefix:v}=n,w=c.filter((e=>!p.includes(e))),O=wr(h),k=In($),x=Ln($);return j`${function(e){const{id:t,level:o,title:r}=e;return r?j`<div id="${ce(t)}" role="heading" aria-level="${ce(o)}" class="osano-visually-hidden"> ${r} </div > `:""}({level:2,title:l})} <p>${l}</p> ${Rn(fn(fn({},n),{},{purposes:c,vendorId:r,category:t,block:o,id:`
                            $ {
                                v
                            }
                            drawer - toggle--vendor_$ {
                                r
                            }
                            `,onChange:e=>i(an(r)(e)),className:kt("drawer-toggle",e)}))} ${Wn(fn(fn({},n),{},{legIntPurposes:d,vendorId:r,category:t,block:o,id:`
                            $ {
                                v
                            }
                            drawer - toggle--vendor_$ {
                                r
                            }
                            _li `,onChange:e=>i(ln(r)(e)),className:kt("drawer-toggle",e)}))}${zn(y,n,e)}${function(e){const{body:t="",header:o,id:r=(0,gt.v4)("expansionPanel"),tabIndex:n=0}=e,i=(0,q.A)(e,dn),{prefix:s="osano-cm-",store:a}=i,{dispatch:l,getState:c}=a,d=c(),p=(0,Y.a8)(d,r),m={prefix:s,block:mn},g={root:Ot(mn,e),body:Ot("body",m),toggle:Ot("toggle",m)},u=e=>{if(e.preventDefault(),e.stopPropagation(),"keypress"===e.type){const t=e.charCode||e.keyCode;if(32!==t&&13!==t)return!1}return l(cn(r)),pn(e.target,{prefix:s,element:mn}),!1};return j` < div class = "${le(g.root)}" > < div class = "${le(g.toggle)}"
                            @click = "${u}"
                            @keypress = "${u}"
                            tabindex = "${n}"
                            role = "link"
                            aria - expanded = "${p}"
                            aria - controls = "${r}"
                            aria - label = "${o}"
                            id = "${r}-control" > $ {
                                o
                            } < /div> <div id="${r}" class="${le(g.body)}" role="presentation" aria-labelledby="${r}-control" aria-live="${p?"polite":"none"}"> ${t} </div > < /div> `}(fn(fn({},n),{},{block:o,id:`${v}vendor-disclosure--${r}`,header:xn(),body:go(fn(fn({},n),{},{block:"disclosures",className:kt("disclosures",fn(fn({},e),{},{block:"expansion-panel"})),children:[{term:jn(),children:[{type:"string",disclosure:`${O} ${1===O?Pn():Dn()}`},...b?[{type:"string",disclosure:j`<em>${An()}</em>`}]:[]]},...Hn(yn,d,k),...Hn($n,w,k),...Hn(_n,p,k),...Hn(vn,m,x),...Hn(wn,g,Bn),...Hn(On,u,Mn),...Hn(kn,_,Fn),...f?[{term:Sn(),children:[{type:"link",href:f,label:f,ariaDescribedBy:`${v}aria.externalNewWindow`,title:`${l} ${xn()}`,target:"_blank"}]}]:[]],type:"description",render:e=>{const{type:t,disclosure:o}=e;return"string"===t?o:"link"===t?Qe(e):st(e)}}))}))}`}const Vn=["id","active","className"];function Qn(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Yn(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Qn(Object(o),!0).forEach((function(t){(0,n.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Qn(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const Gn=i.hT.template("iab.vendor.preamble");function Kn(e){const{id:t,active:o,className:r=""}=e,n=(0,q.A)(e,Vn),{prefix:i="osano-cm-",store:{getState:s}}=n,a="view",l=s(),c=(0,qe.lT)(l),d={root:Ot(a,Yn(Yn({},e),{},{className:r}),{active:o,type:"vendor-consent"}),description:Ot("description",Yn(Yn({},n),{},{block:a}))};return j`<div class="${le(d.root)}"> <p id="${ce(t)}" class="${le(d.description)}" tabindex="-1"> ${Gn()} </p > $ {
                                Fe(Yn(Yn({}, n), {}, {
                                    block: a
                                }))
                            }
                            $ {
                                Ko(go(Yn(Yn({}, n), {}, {
                                    block: a,
                                    children: c,
                                    render: Un,
                                    itemId: "vendorId",
                                    itemClassName: kt({
                                        prefix: i,
                                        element: "drawer-item"
                                    })
                                })))
                            } < /div>`}const Zn=["activeView"],qn=["id"],Xn=["className","id"];function Jn(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function ei(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Jn(Object(o),!0).forEach((function(t){(0,n.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Jn(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const ti=document.createElement("span");ti.innerHTML="&slarr;";const oi=i.hT.template("drawer.header"),ri=i.hT.template("doNotSell.header"),ni=i.hT.template("iab.legal.title"),ii=i.hT.template("iab.vendor.title"),si=i.hT.template("drawer.close"),ai=function(){const e=(0,gt.v4)("ccpaoptouticon");return j`<div class="ccpa-opt-out-icon"> <svg role="img" xmlns="http:/ / www.w3.org / 2000 / svg " xmlns:xlink="
                            http: //www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 14" style="enable-background:new 0 0 30 14" xml:space="preserve" aria-labelledby="${e}"> <title id="${e}">California Consumer Privacy Act (CCPA) Opt-Out Icon</title> <g transform="translate(-1275.000000, -200.000000)"> <g transform="translate(1275.000000, 200.000000)"> <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"/> </g> </g> <g transform="translate(-1275.000000, -200.000000)"> <g transform="translate(1275.000000, 200.000000)"> <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f" d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z"/> <path style="fill:#fff" d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z"/> <path style="fill:#06f" d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z"/> </g> </g> </svg> </div>`}(),li={[Xe.V.CONSENT]:oi,[Xe.V.DO_NOT_SELL]:ri,[Xe.V.DISCLOSURE]:ni,[Xe.V.VENDOR_CONSENT]:ii},ci=e=>e.stopPropagation(),di=e=>{switch(e){case Xe.V.CONSENT:case Xe.V.DO_NOT_SELL:return zr;case Xe.V.DISCLOSURE:return Xr;case Xe.V.VENDOR_CONSENT:return Kn}return()=>j``},pi=e=>{let{dispatch:t}=e;return()=>t((e=>{e(be.Ay.goBack())}))},mi=e=>{const{id:t}=e,o=(0,q.A)(e,qn),{store:r}=e,{getState:n}=r,i="info-dialog-header",s=n(),a=(0,Y.q$)(s),l=(0,Y.kR)(s),c={root:Ot(i,e),close:Ot("close",ei(ei({},e),{},{block:i})),header:Ot("header",ei(ei({},e),{},{block:i}))},d=li[`${a[`${l}`]}`]||function(){return""},p=li[`${a[""+(l-1)]}`]||function(){return""};return j`<div class="${le(c.root)}" role="presentation"> <p role="heading" aria-level="1" id="${ce(t)}" class="${le(c.header)}"> ${d()} </p> ${(0,Y.IP)(s)?ai:""} <button class="${le(c.close)}" @click="${(e=>{let{dispatch:t}=e;return()=>t(Go())})(r)}"> ${vt(ei(ei({},o),{},{block:i,label:si()}))} </button> ${l>0?ue(ei(ei({},o),{},{block:i,className:"osano-cm-back",label:ti,ariaLabel:`← ${p()}`,onClick:pi(r)})):""} </div>`},gi="info";function ui(e){const{className:t="",id:o}=e,r=(0,q.A)(e,Xn),{prefix:n,store:{dispatch:i,getState:s}}=r,a=s(),l=!(0,Y.MJ)(a),c=(0,Y.Sf)(a),d=(0,Y.q$)(a).map(((e,t)=>({name:e,index:t,id:`${n}${e}--view`,view:di(e)}))),p=(0,Y.kR)(a),{infoDialogPosition:m}=c,g=`${o}__label`,u={wrapper:Ot("info-dialog",ei(ei({},e),{},{className:t}),{hidden:l}),root:Ot(gi,ei(ei({},r),{},{block:"info-dialog"}),{position:m,do_not_sell:(0,Y.IP)(a),open:!l}),view:Ot("info-views",ei(ei({},r),{},{block:gi}),{hidden:l,position:`${p}`})},h=d[parseInt(p,10)],b=ei(ei({},r),{},{tabIndex:l?-1:0,activeView:h&&h.name,block:"info-views"});return j`<div id="${o}" role="dialog" aria-labelledby="${g}" aria-describedby="${ce(h&&h.id)}" aria-modal="true" aria-hidden="${l}" class="${le(u.wrapper)}" @click="${()=>i(Go())}"> ${sn({dataFocus:"first"})} <div role="presentation" class="${le(u.root)}" @click="${ci}" ${Vt(null==h?void 0:h.name)} @keyup="${e=>{if("keyup"!==e.type)return;27===(e.charCode||e.keyCode)&&i(Go())}}"> ${mi(ei(ei({},r),{},{block:gi,id:g}))} <div class="${le(u.view)}" role="presentation"> ${Yt([d],(()=>Bt(d,(e=>{let{name:t}=e;return t}),(e=>{let{activeView:t}=e,o=(0,q.A)(e,Zn);return e=>{let{view:r,index:n,id:i,name:s}=e;return Ko(r(ei(ei({},o),{},{index:n,id:i,active:t===s})))}})(b))))} </div> </div> ${sn({dataFocus:"last"})} </div>`}const hi=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(0===e.indexOf("rgb"))try{return e.replace(/[^\d,.]/g,"").split(",").map((e=>{const t=parseFloat(e);if(isNaN(t))throw new Error("Invalid color value");return t}))}catch(i){return hi(t,"rgba(0,0,0,1)")}let o=`${e||""}`.toLowerCase().replace(/[^0-9a-f]/,"");if(3===o.length||4===o.length)o=o.split("").map((e=>`${e}${e}`)).join("");else if(6!==o.length&&8!==o.length)return hi(t,"rgba(0,0,0,1)");const r=[];let n=0;for(;n<o.length&&r.length<3;){const e=parseInt(o.slice(n,n+2),16);r.push(255&e),n+=2}if(n<o.length&&3===r.length){const e=parseInt(o.slice(n,n+2),16);r.push(e/255)}return r},bi=e=>(~~(255*e)%256+256)%256,fi=(e,t,o)=>(Math.round(299*e)+Math.round(587*t)+Math.round(114*o))/1e3>=128?0:1,yi=(e,t,o)=>bi(.21*e+.72*t+.07*o),$i=(e,t)=>{const o=Math.abs(t)!==t?-1:1,r=Math.abs(t)<=1;let n=Math.abs(t);n=Math.floor(Math.min(255,Math.max(-255,r?Math.round(255*n):n)))*o;let[i,s,a]="string"==typeof e?hi(e):e;return i+=n,i>255?i=255:i<0&&(i=0),a+=n,a>255?a=255:a<0&&(a=0),s+=n,s>255?s=255:s<0&&(s=0),`#${function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.slice(0,3).reduce(((e,t)=>`${e}${`00${t.toString(16)}`.slice(-2)}`),"")}(i,s,a)}`},_i={},vi=e=>{const t=_i[`${e}`]||[hi(e)];return t[1]=t[1]??fi.apply(null,t[0]),t[2]=t[2]??yi.apply(null,t[0]),_i[`${e}`]=t,t},wi=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.08;const[,o]=vi(e);return(t<0?!o:o)?(r=e,n=Math.abs(t),$i(r,n)):((e,t)=>$i(e,-t))(e,Math.abs(t));var r,n},Oi=["block","id"],ki=i.hT.template("messaging.widgetAltText"),xi=e=>{let{store:t}=e;return()=>{t.dispatch((e=>{e(be.Ay.hideWidget()),e(be.Ay.showDrawer())}))}},Ai="widget";var ji=o(6277),Pi=o(5053),Di=o(6605);let Si,Ci;function Ti(e){let{dom:t,drawerId:o,dialogId:r,widgetId:n}=e;return e=>s=>a=>{const l=s(a),{type:c,payload:d}=a,p=e.getState(),m=(0,Y.YK)(p),g=(0,Y.QH)(p);switch(c){case be.gK.render:t.render();break;case be.gK.ready:switch(d){case"blocking":case"consent":case"dom":if((0,Y.Dp)(p)){const t=(0,Y.z6)(p)||!(0,Y.Gs)(p);requestAnimationFrame((()=>{t?e.dispatch(be.Ay.showDialog()):e.dispatch(be.Ay.showWidget())}))}}break;case be.gK.saveConsent:(0,Y.Gs)(p)&&!d.shouldShowDialog&&requestAnimationFrame((()=>{e.dispatch(be.Ay.hideDialog())}));break;case be.gK.toggleDisclosure:{const{category:t}=d;!(0,Y.ro)(p)&&!(0,Y.DZ)(p,t)&&(e.dispatch(be.Ay.fetchDisclosuresBegin(t)),function(e){let{customerId:t,configId:o,category:r,language="en"}=e;const n={language,category:r};return Pi.A.get(`${Di.DISCLOSURE_URI}/customer/${t}/config/${o}`,n)}({customerId:m,configId:g,category:t}).then((o=>{const r=o||[];return e.dispatch(be.Ay.fetchDisclosuresSuccess(r,t)),o})).catch((o=>{e.dispatch(be.Ay.fetchDisclosuresFailure(o,t))})));break}case be.gK.hideDialog:clearTimeout(Ci);break;case be.gK.showDialog:(0,Y.fJ)(p)&&(Ci&&clearTimeout(Ci),Ci=(e=>(e.dispatch(be.Ay.timeoutBegin()),setTimeout((()=>{(0,Y.Gs)(e.getState())||(e.dispatch(be.Ay.acceptAllConsent()),e.dispatch(be.Ay.saveConsent())),(0,Y.z6)(e.getState())&&(e.dispatch(be.Ay.timeoutComplete()),e.dispatch(be.Ay.showWidget())),(0,Y.HC)(e.getState())||e.dispatch(be.Ay.hideDialog())}),1e3*(0,Y.jU)(e.getState()))))(e)),Si&&Si.focus(),Si=on(i.Bl.getElementById(r));break;case be.gK.showWidget:on(i.Bl.getElementById(n),Si),Si=void 0;break;case be.gK.focusWidget:var u;null===(u=i.Bl.getElementById(n))||void 0===u||u.focus(),Si=void 0;break;case be.gK.showVendorConsent:case be.gK.showDisclosure:case be.gK.showDrawer:Si&&Si.focus(),Si=on(i.Bl.getElementById(o))}return l}}var Ni=o(4814),Ei=o(6421);var Ii=o(8251),Li=o(5677);function Bi(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Mi(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Bi(Object(o),!0).forEach((function(t){(0,n.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Bi(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const Fi=e=>window.getComputedStyle(i.Bl.querySelector(".osano-cm-window")).getPropertyValue(`--${e}`);Object.defineProperty(document,"createElement",Mi(Mi({},Ni.ZS),{},{value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];const r=Ni.ZS.value.apply(this,t);return r.tagName,r}}));const Hi=new WeakMap;class zi{get middleware(){const{middleware:e}=Hi.get(this);return e}get requiredNodes(){const{container:e,styleContainer:t}=Hi.get(this);return[e,t]}constructor(e){let{dynamicMiddleware:t,store:o,config:r}=e;const n=i.Bl.createElement("div");n.setAttribute("data-nosnippet","");const s=i.Bl.createElement("style");Ii.KU&&Li.yu.value.call(s,"nonce",Ii.KU);const a=(0,gt.v4)("dialog"),l=(0,gt.v4)("drawer"),c=(0,gt.v4)("widget");Hi.set(this,{template:()=>{const{getState:e}=o,{prefix:t="osano-cm-"}=e(),n="window";return j` ${function(e){let{prefix:t}=e;return j`<div hidden class="osano-visually-hidden"> <span id="${`${t}aria.newWindow`}">${G()}</span> <span id="${`${t}aria.external`}">${K()}</span> <span id="${`${t}aria.externalNewWindow`}">${Z()}</span> </div>`}({config:r,prefix:t,store:o})} ${Yo({id:a,block:n,config:r,prefix:t,store:o,drawerId:l})} ${function(e){const{block:t,id:o}=e,r=(0,q.A)(e,Oi),{prefix:n="osano-cm-",store:{getState:i}}=r,s=i(),{widgetPosition:a}=(0,Y.Sf)(s),l=!(0,Y.R_)(s),c=!(0,Y.MJ)(s),d=(0,Y.tC)(s),p={root:oe({prefix:n,block:t,element:Ai,modifiers:{element:{hidden:d||!c||!l,position:a}}}),outline:oe({prefix:n,block:Ai,element:"outline"}),dot:oe({prefix:n,block:Ai,element:"dot"})};return j` <button id="${o}" class="${le(p.root)}" title="${ki()}" aria-label="${ki()}" @click="${xi(e)}"> <svg role="img" width="40" height="40" viewBox="0 0 71.85 72.23" xmlns="http://www.w3.org/2000/svg" aria-labelledby="${o}"> <path d="m67.6 36.73a6.26 6.26 0 0 1 -3.2-2.8 5.86 5.86 0 0 0 -5.2-3.1h-.3a11 11 0 0 1 -11.4-9.5 6 6 0 0 1 -.1-1.4 9.2 9.2 0 0 1 .4-2.9 8.65 8.65 0 0 0 .2-1.6 5.38 5.38 0 0 0 -1.9-4.3 7.3 7.3 0 0 1 -2.5-5.5 3.91 3.91 0 0 0 -3.5-3.9 36.46 36.46 0 0 0 -15 1.5 33.14 33.14 0 0 0 -22.1 22.7 35.62 35.62 0 0 0 -1.5 10.2 34.07 34.07 0 0 0 4.8 17.6.75.75 0 0 0 .07.12c.11.17 1.22 1.39 2.68 3-.36.47 5.18 6.16 5.65 6.52a34.62 34.62 0 0 0 55.6-21.9 4.38 4.38 0 0 0 -2.7-4.74z" stroke-width="3" class="${le(p.outline)}"></path> <path d="m68 41.13a32.37 32.37 0 0 1 -52 20.5l-2-1.56c-2.5-3.28-5.62-7.15-5.81-7.44a32 32 0 0 1 -4.5-16.5 34.3 34.3 0 0 1 1.4-9.6 30.56 30.56 0 0 1 20.61-21.13 33.51 33.51 0 0 1 14.1-1.4 1.83 1.83 0 0 1 1.6 1.8 9.38 9.38 0 0 0 3.3 7.1 3.36 3.36 0 0 1 1.2 2.6 3.37 3.37 0 0 1 -.1 1 12.66 12.66 0 0 0 -.5 3.4 9.65 9.65 0 0 0 .1 1.7 13 13 0 0 0 10.5 11.2 16.05 16.05 0 0 0 3.1.2 3.84 3.84 0 0 1 3.5 2 10 10 0 0 0 4.1 3.83 2 2 0 0 1 1.4 2z" stroke-width="3" class="${le(p.outline)}"></path> <g class="${le(p.dot)}"> <path d="m26.6 31.43a5.4 5.4 0 1 1 5.4-5.43 5.38 5.38 0 0 1 -5.33 5.43z"></path> <path d="m25.2 53.13a5.4 5.4 0 1 1 5.4-5.4 5.44 5.44 0 0 1 -5.4 5.4z"></path> <path d="m47.9 52.33a5.4 5.4 0 1 1 5.4-5.4 5.32 5.32 0 0 1 -5.24 5.4z"></path> </g> </svg> </button> `}({id:c,block:n,config:r,prefix:t,store:o})} ${ui({id:l,block:n,config:r,prefix:t,store:o})} `},container:n,dynamicMiddleware:t,middleware:Ti({dom:this,dialogId:a,widgetId:c,drawerId:l}),styleContainer:s,store:o})}setup(){const e=Hi.get(this)||{},{dynamicMiddleware:t,store:o}=e;if(t&&t.addMiddleware(this.middleware),!e.unsubscribe){const t=o.subscribe(this.render.bind(this));Hi.set(this,Mi(Mi({},e),{},{unsubscribe:t}))}return this}teardown(){const e=Hi.get(this)||{},{dynamicMiddleware:t}=e;return t.removeMiddleware(this.middleware),e.unsubscribe&&(e.unsubscribe(),delete e.unsubscribe,Hi.set(this,Mi({},e))),this}render(){if(null===i.Bl.body)return;const{template:e,container:t,styleContainer:o,store:r}=Hi.get(this);if(!(0,Y.Dp)(r.getState()))return;const{getState:n}=r,s=n(),{prefix:a="osano-cm-"}=s,l=re({prefix:a,block:"window",modifiers:{block:{context:(0,Y.jB)(s)&&"amp"}}}).join(" ");return t.className!==l&&(t.className=l),t.parentNode&&t.parentNode===i.Bl.body||(i.Bl.body.firstChild?Ei.y.value.call(i.Bl.body,t,i.Bl.body.firstChild):ji.y.value.call(i.Bl.body,t)),o.parentNode&&o.parentNode===i.Bl.head||(i.Bl.head.firstChild?Ei.y.value.call(i.Bl.head,o,i.Bl.head.firstChild):ji.y.value.call(i.Bl.head,o)),Li.yu.value.call(t,"dir",i.hT.isRTL?"rtl":"ltr"),Q((e=>{const t=e.getState(),{buttonBackgroundColor:o,buttonForegroundColor:r,buttonDenyBackgroundColor:n,buttonDenyForegroundColor:s,dialogBackgroundColor:a,dialogForegroundColor:l,infoDialogBackgroundColor:c,infoDialogForegroundColor:d,infoDialogOverlayColor:p,linkColor:m,toggleOffBackgroundColor:g,toggleButtonOffColor:u,toggleOnBackgroundColor:h,toggleButtonOnColor:b,widgetColor:f,widgetFillColor:y,widgetOutlineColor:$}=(0,Y.Sf)(t),_=`rgba(${hi(c).slice(0,3).join(",")},0)`;return j` ${'.osano-cm-window{font-family:Helvetica,Arial,Hiragino Sans GB,STXihei,Microsoft YaHei,WenQuanYi Micro Hei,Hind,MS Gothic,Apple SD Gothic Neo,NanumBarunGothic,sans-serif;font-size:16px;font-smooth:always;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothingz:auto;display:block;left:0;line-height:1;position:absolute;top:0;width:100%;z-index:2147483638;--fade-transition-time:700ms;--slide-transition-time:400ms}.osano-cm-window--context_amp{height:100%}.osano-visually-hidden{height:1px;left:-10000px;margin:-1px;opacity:0;overflow:hidden;position:absolute;width:1px}.osano-cm-button{border-radius:.25em;border-style:solid;border-width:thin;cursor:pointer;flex:1 1 auto;font-size:1em;font-weight:700;line-height:1;margin:.125em;min-width:6em;padding:.5em .75em;transition-duration:.2s;transition-property:background-color;transition-timing-function:ease-out}.osano-cm-button--type_icon{border-radius:50%;height:1em;line-height:0;min-width:1em;width:1em}.osano-cm-button:focus,.osano-cm-button:hover{outline:none}.osano-cm-close{border-radius:50%;border-style:solid;border-width:2px;box-sizing:content-box;cursor:pointer;height:20px;margin:.5em;min-height:20px;min-width:20px;order:0;outline:none;overflow:hidden;padding:0;width:20px;stroke-width:1px;justify-content:center;line-height:normal;text-decoration:none;transform:rotate(0deg);transition-duration:.2s;transition-property:transform,color,background-color,stroke,stroke-width;transition-timing-function:ease-out;z-index:2}.osano-cm-close:focus,.osano-cm-close:hover{transform:rotate(90deg);stroke-width:2px}.ccpa-opt-out-icon{display:flex;flex:1 1 auto}.ccpa-opt-out-icon svg{max-width:40px}.osano-cm-link{cursor:pointer;text-decoration:underline;transition-duration:.2s;transition-property:color;transition-timing-function:ease-out}.osano-cm-link:active,.osano-cm-link:hover{outline:none}.osano-cm-link:focus{font-weight:700;outline:none}.osano-cm-link--type_feature,.osano-cm-link--type_purpose,.osano-cm-link--type_specialFeature,.osano-cm-link--type_specialPurpose{cursor:help;display:block;-webkit-text-decoration:dashed;text-decoration:dashed}.osano-cm-link--type_denyAll{display:block;text-align:right}[dir=rtl] .osano-cm-link--type_denyAll{text-align:left}.osano-cm-link--type_vendor{display:block}.osano-cm-vendor-link{font-size:.75em}.osano-cm-list-item{margin:0}.osano-cm-list-item--type_term{border-top-style:solid;border-top-width:1px;font-size:.875rem;font-weight:400;margin-bottom:.25em;margin-top:.5em;padding:.5em .75rem 0;position:relative;top:-1px}.osano-cm-list-item--type_description{font-size:.75rem;font-weight:lighter;padding:0 .75rem}.osano-cm-list{list-style-position:outside;list-style-type:none;margin:0;padding:0}.osano-cm-list__list-item{text-indent:0}.osano-cm-list--type_description{margin:0 -1em}.osano-cm-list:first-of-type .osano-cm-list__list-item:first-of-type{border-top-width:0;margin-top:0;padding-top:0}.osano-cm-toggle{align-items:center;display:flex;flex-direction:row-reverse;justify-content:flex-start;margin:.25em 0;pointer-events:auto;position:relative}.osano-cm-toggle__label{margin:0 .5em 0 0}[dir=rtl] .osano-cm-toggle__label{margin:0 0 0 .5em}.osano-cm-toggle__switch{border-radius:14px;border-style:solid;border-width:2px;box-sizing:content-box;color:transparent;display:block;flex-shrink:0;height:18px;line-height:0;margin:0;position:relative;text-indent:-9999px;transition-duration:.2s;transition-property:background-color;transition-timing-function:ease-out;width:40px}.osano-cm-toggle__switch:hover{cursor:pointer}.osano-cm-toggle__switch:after{border-radius:9px;border-width:0;height:18px;left:0;top:0;width:18px}.osano-cm-toggle__switch:before{border-radius:16px;border-width:2px;bottom:-6px;box-sizing:border-box;left:-6px;right:-6px;top:-6px}.osano-cm-toggle__switch:after,.osano-cm-toggle__switch:before{border-style:solid;content:"";margin:0;position:absolute;transform:translateX(0);transition-duration:.3s;transition-property:transform,left,border-color;transition-timing-function:ease-out}.osano-cm-toggle__switch:after:active,.osano-cm-toggle__switch:before:active{transition-duration:.1s}.osano-cm-toggle__switch:after:active{width:26px}.osano-cm-toggle__switch:before:active{width:34px}[dir=rtl] .osano-cm-toggle__switch:after{left:100%;transform:translateX(-100%)}.osano-cm-toggle__input{height:1px;left:-10000px;margin:-1px;opacity:0;overflow:hidden;position:absolute;width:1px}[dir=rtl] .osano-cm-toggle__input{left:0;right:-10000px}.osano-cm-toggle__input:disabled{cursor:default}.osano-cm-toggle--type_checkbox .osano-cm-toggle__switch{border-radius:4px;border-style:solid;border-width:1px;height:22px;width:22px}.osano-cm-toggle--type_checkbox .osano-cm-toggle__switch:after{background-color:transparent!important;border-bottom-width:2px;border-left-width:2px;border-radius:0;content:none;height:6px;left:3px;top:3px;transform:rotate(-45deg);transition-property:color;transition-timing-function:ease-out;width:12px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch{border-radius:4px;border-style:solid;border-width:1px;height:22px;width:22px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:after,.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:before{background-color:transparent!important;border-bottom-width:1px;border-radius:0;border-top-width:1px;content:none;height:0;left:-3px;top:7px;transition-property:color;transition-timing-function:ease-out;width:12px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:after{transform:translate(50%,50%) rotate(-45deg)}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:before{transform:translate(50%,50%) rotate(45deg)}.osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{left:100%;transform:translateX(-100%)}[dir=rtl] .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{left:0;transform:translateX(0)}.osano-cm-toggle__input:disabled+.osano-cm-toggle__switch{cursor:default}.osano-cm-toggle--type_checkbox .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{content:"";left:3px;top:3px;transform:rotate(-45deg)}.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after,.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:before{content:"";left:-1px;top:9px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{transform:translate(50%,50%) rotate(-45deg)}.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:before{transform:translate(50%,50%) rotate(45deg)}.osano-cm-toggle--type_checkbox .osano-cm-toggle__input:disabled+.osano-cm-toggle__switch,.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:disabled+.osano-cm-toggle__switch{opacity:.3}.osano-cm-widget{background:none;border:none;bottom:12px;cursor:pointer;height:40px;opacity:.9;outline:none;padding:0;position:fixed;transition:transform .1s linear 0s,opacity .2s linear 0ms,visibility 0ms linear 0ms;visibility:visible;width:40px;z-index:2147483636}.osano-cm-widget--position_right{right:12px}.osano-cm-widget--position_left{left:12px}.osano-cm-widget:focus{outline:solid;outline-offset:.2rem}.osano-cm-widget:focus,.osano-cm-widget:hover{opacity:1;transform:scale(1.1)}.osano-cm-widget--hidden{opacity:0;visibility:hidden}.osano-cm-widget--hidden:focus,.osano-cm-widget--hidden:hover{opacity:0;transform:scale(1)}.osano-cm-dialog{align-items:center;box-sizing:border-box;font-size:1em;line-height:1.25;max-height:100vh;overflow:auto;padding:1.5em;position:fixed;transition-delay:0ms,0ms;transition-duration:.7s,0ms;transition-property:opacity,visibility;visibility:visible;z-index:2147483637}.osano-cm-dialog--hidden{opacity:0;transition-delay:0ms,.7s;visibility:hidden}.osano-cm-dialog--type_bar{box-sizing:border-box;display:flex;flex-direction:column;left:0;right:0}.osano-cm-dialog--type_bar .osano-cm-button{flex:none;margin:.125em auto;width:80%}@media screen and (min-width:768px){.osano-cm-dialog--type_bar{flex-direction:row}.osano-cm-dialog--type_bar .osano-cm-button{flex:1 1 100%;margin:.25em .5em;width:auto}}.osano-cm-dialog--type_box{flex-direction:column;max-height:calc(100vh - 2em);max-width:20em;width:calc(100vw - 2em)}.osano-cm-dialog__close{position:absolute;right:0;top:0}.osano-cm-dialog__list{margin:.5em 0 0;padding:0}.osano-cm-dialog__list .osano-cm-item{display:flex;margin-top:0}.osano-cm-dialog__list .osano-cm-item:last-child{margin-bottom:0}.osano-cm-dialog__list .osano-cm-toggle{flex-direction:row}[dir=rtl] .osano-cm-dialog__list .osano-cm-toggle{flex-direction:row-reverse}.osano-cm-dialog__list .osano-cm-label{white-space:nowrap}[dir=ltr] .osano-cm-dialog__list .osano-cm-label{margin-left:.375em}[dir=rtl] .osano-cm-dialog__list .osano-cm-label{margin-right:.375em}.osano-cm-dialog__buttons{display:flex;flex-wrap:wrap}.osano-cm-dialog--type_bar .osano-cm-dialog__content{flex:5;margin-bottom:.25em;width:100%}.osano-cm-dialog--type_box .osano-cm-dialog__content{display:flex;flex-direction:column;flex-grow:.0001;transition:flex-grow 1s linear}.osano-cm-dialog--type_bar .osano-cm-dialog__list{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;margin:.75em auto}@media screen and (min-width:376px){.osano-cm-dialog--type_bar .osano-cm-dialog__list{flex-direction:row}}@media screen and (min-width:768px){.osano-cm-dialog--type_bar .osano-cm-dialog__list{margin:.5em 0 0 auto}[dir=rtl] .osano-cm-dialog--type_bar .osano-cm-dialog__list{margin:.5em auto 0 0}}[dir=ltr] .osano-cm-dialog--type_bar .osano-cm-dialog__list .osano-cm-item{margin-right:.5em}[dir=rtl] .osano-cm-dialog--type_bar .osano-cm-dialog__list .osano-cm-item{margin-left:.5em}.osano-cm-dialog--type_bar .osano-cm-dialog__list .osano-cm-label{padding-top:0}.osano-cm-dialog--type_bar .osano-cm-dialog__buttons{flex:1;justify-content:flex-end;margin:0;width:100%}@media screen and (min-width:768px){.osano-cm-dialog--type_bar .osano-cm-dialog__buttons{margin:0 0 0 .5em;max-width:30vw;min-width:16em;position:sticky;top:0;width:auto}[dir=rtl] .osano-cm-dialog--type_bar .osano-cm-dialog__buttons{margin:0 .5em 0 0}}.osano-cm-dialog--type_box .osano-cm-dialog__buttons{margin:.5em 0 0}.osano-cm-dialog--type_bar.osano-cm-dialog--position_top{top:0}.osano-cm-dialog--type_bar.osano-cm-dialog--position_bottom{bottom:0}.osano-cm-dialog--type_box.osano-cm-dialog--position_top-left{left:1em;top:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_top-right{right:1em;top:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_bottom-left{bottom:1em;left:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_bottom-right{bottom:1em;right:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_center{left:50%;top:50%;transform:translate(-50%,-50%)}.osano-cm-dialog--type_box.osano-cm-dialog--wide{max-width:50em}@media screen and (max-height:800px)and (max-width:1200px){.osano-cm-dialog--type_box.osano-cm-dialog--wide{max-width:calc(100vw - 4em)}}.osano-cm-dialog--type_box.osano-cm-dialog--wide .osano-cm-dialog__list{display:flex;flex-wrap:wrap}.osano-cm-dialog--context_amp{height:100%;position:relative}.osano-cm-content__message{margin-bottom:1em;word-break:break-word}.osano-cm-drawer-links{margin:.5em 0 0}.osano-cm-drawer-links__link{display:block}.osano-cm-storage-policy{display:inline-block}.osano-cm-usage-list{margin:0 0 .5em}.osano-cm-usage-list__list{list-style-position:inside;list-style-type:disc}:export{fadeTransitionTime:.7s;slideTransitionTime:.4s}.osano-cm-info-dialog{height:100vh;left:0;position:fixed;top:0;transition-delay:0ms,0ms;transition-duration:.2s,0ms;transition-property:opacity,visibility;visibility:visible;width:100vw;z-index:2147483638}.osano-cm-info-dialog--hidden{opacity:0;transition-delay:0ms,.2s;visibility:hidden}.osano-cm-header{margin:0 0 -1em;padding:1em 0;position:sticky;top:0;z-index:1}.osano-cm-info{animation:delay-overflow .4s;bottom:0;box-shadow:0 0 2px 2px #ccc;box-sizing:border-box;max-width:20em;overflow:visible visible;position:fixed;top:0;transition-duration:.4s;transition-property:transform;width:100%}.osano-cm-info--position_left{left:0;transform:translate(-100%)}.osano-cm-info--position_right{right:0;transform:translate(100%)}.osano-cm-info--open{animation:none;overflow:hidden auto;transform:translate(0)}.osano-cm-info--do_not_sell{animation:none;height:-moz-fit-content;height:fit-content;left:50%;max-height:100vh;position:fixed;right:auto;top:50%;transform:translate(-50%,-50%);transition:none}.osano-cm-info--do_not_sell .osano-cm-close{order:-1}.osano-cm-info--do_not_sell .osano-cm-header{box-sizing:content-box;display:block;flex:none}.osano-cm-info-views{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap;height:100%;transition-duration:.4s;transition-property:transform;width:100%}[dir=rtl] .osano-cm-info-views{flex-direction:row-reverse}.osano-cm-info-views__view{box-sizing:border-box;flex-shrink:0;width:100%}.osano-cm-info-views--position_0>:not(:first-of-type){max-height:100%;overflow:hidden}.osano-cm-info-views--position_1{transform:translateX(-100%)}.osano-cm-info-views--position_1>:not(:nth-of-type(2)){max-height:100%;overflow:hidden}.osano-cm-info-views--position_2{transform:translateX(-200%)}.osano-cm-info-views--position_2>:not(:nth-of-type(3)){max-height:100%;overflow:hidden}.osano-cm-info--do_not_sell .osano-cm-info-views{height:-moz-fit-content;height:fit-content}.osano-cm-view{height:0;padding:0 .75em 1em;transition-delay:.4s;transition-duration:0ms;transition-property:height,visibility;visibility:hidden;width:100%}.osano-cm-view__button{font-size:.875em;margin:1em 0 0;width:100%}.osano-cm-view--active{height:auto;transition-delay:0ms;visibility:visible}.osano-cm-description{font-size:.75em;font-weight:300;line-height:1.375;margin:1em 0 0}.osano-cm-description:first-child{margin:0}.osano-cm-description:last-of-type{margin-bottom:1em}.osano-cm-drawer-toggle .osano-cm-label{font-size:.875em;line-height:1.375em;margin:0 auto 0 0}[dir=rtl] .osano-cm-drawer-toggle .osano-cm-label{margin:0 0 0 auto}.osano-cm-info-dialog-header{align-items:center;display:flex;flex-direction:row-reverse;left:auto;min-height:3.25em;position:sticky;top:0;width:100%;z-index:1}[dir=rtl] .osano-cm-info-dialog-header{flex-direction:row}.osano-cm-info-dialog-header__header{align-items:center;display:flex;flex:1 1 auto;font-size:1em;justify-content:flex-start;margin:0;order:1;padding:1em .75em}.osano-cm-info-dialog-header__description{font-size:.75em;line-height:1.375}.osano-cm-back,.osano-cm-info-dialog-header__close{position:relative}.osano-cm-back{flex:0 1 auto;margin:0 0 0 .5em;min-width:0;order:2;width:auto;z-index:2}[dir=rtl] .osano-cm-back{margin:0 .5em 0 0}.osano-cm-powered-by{align-items:center;display:flex;flex-direction:column;font-weight:700;justify-content:center;margin:1em 0}.osano-cm-powered-by__link{font-size:.625em;outline:none;text-decoration:none}.osano-cm-powered-by__link:focus,.osano-cm-powered-by__link:hover{text-decoration:underline}@keyframes delay-overflow{0%{overflow:hidden auto}}.osano-cm-drawer-iab-button-container{display:flex;gap:.5em;justify-content:center;margin-bottom:2em}.osano-cm-illustrations__list>.osano-cm-list-item--type_description{padding:.2rem 1rem}.osano-cm-drawer-item.osano-cm-description__list li{padding-top:.75em}.osano-cm-tcf-purpose--label{border-bottom:1px solid rgba(0,0,0,.1);display:block;margin-bottom:.5em;padding:.25em 0 .5em}.osano-cm-link.osano-cm-link--type_purpose{font-weight:400}.osano-cm-tcf-purpose--label input{float:right;margin-right:.5em}.osano-cm-expansion-panel{border-bottom:1px solid rgba(0,0,0,.1);display:block;font-size:.75em;margin:0 -1.5em 1em;padding:1.5em 1.5em 0}.osano-cm-expansion-panel--expanded{border-bottom:none}.osano-cm-expansion-panel--empty,.osano-cm-expansion-panel--empty:not([open]){border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:0}.osano-cm-expansion-panel__body{background-color:rgba(0,0,0,.1);line-height:1.25;list-style:none;margin:0 -1.5em;max-height:0;overflow:hidden;padding:0 1.5em;transition-delay:0ms,0ms,0ms,.3s;transition-duration:.3s,.3s,.3s,0s;transition-property:max-height,padding-top,padding-bottom,visibility;transition-timing-function:ease-out;visibility:hidden}.osano-cm-expansion-panel__toggle{cursor:pointer;display:block;line-height:1.25;margin:0 auto 1em 0;outline:none;position:relative}.osano-cm-expansion-panel__toggle:active,.osano-cm-expansion-panel__toggle:focus,.osano-cm-expansion-panel__toggle:hover{outline:none}[dir=rtl] .osano-cm-expansion-panel__toggle{margin:0 0 1em auto}.osano-cm-expansion-panel--expanded .osano-cm-expansion-panel__body{max-height:none;padding:1.25em 1.5em 1em;transition-delay:0ms,0ms,0ms,0ms;visibility:visible}.osano-cm-cookie-disclosure__title,.osano-cm-script-disclosure__title{border:0;clear:both;display:block;flex:0 1 30%;font-size:1em;font-weight:700;line-height:1.375;margin:0 0 .5em;padding:0}.osano-cm-cookie-disclosure__description,.osano-cm-script-disclosure__description{flex:0 1 70%;font-size:1em;line-height:1.375;margin:0 0 .5em;padding:0}.osano-cm-disclosure{border-bottom:none;display:block;font-size:.75em;margin:0 -1.5em 1em;padding:1.5em 1.5em 0}.osano-cm-disclosure--collapse{border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:1em}.osano-cm-disclosure--empty,.osano-cm-disclosure--empty:not([open]){border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:0}.osano-cm-disclosure__list{background-color:rgba(0,0,0,.1);line-height:1.25;list-style:none;margin:0 -1.5em;padding:1.25em 1.5em 1em}.osano-cm-disclosure__list:empty{border:none;padding:0 1.5em}.osano-cm-disclosure__list:first-of-type{margin-top:1em;padding:1.25em 1.5em 1em}.osano-cm-disclosure__list:first-of-type:empty{padding:1.75em 1.5em .75em}.osano-cm-disclosure__list:not(:first-of-type):not(:empty){border-top:1px solid rgba(0,0,0,.1)}.osano-cm-disclosure__list:empty+.osano-cm-disclosure__list:not(:empty){border:none;padding:0 1.5em}.osano-cm-disclosure__list:not(:empty)~.osano-cm-disclosure__list:empty+.osano-cm-disclosure__list:not(:empty){border-top:1px solid rgba(0,0,0,.1)}.osano-cm-disclosure__list>.osano-cm-list-item{line-height:1.25}.osano-cm-disclosure__list>.osano-cm-list-item:not(:first-of-type){border-top:1px solid rgba(0,0,0,.1);margin:1em -1.25em 0;padding:1em 1.25em 0}.osano-cm-disclosure__toggle{cursor:pointer;display:block;font-weight:700;line-height:1.25;margin:0 auto 0 0;outline:none;position:relative}.osano-cm-disclosure__toggle:focus,.osano-cm-disclosure__toggle:hover{text-decoration:underline}[dir=rtl] .osano-cm-disclosure__toggle{margin:0 0 0 auto}.osano-cm-disclosure--loading .osano-cm-disclosure__list{height:0;line-height:0;max-height:0}.osano-cm-disclosure--loading .osano-cm-disclosure__list>*{display:none}.osano-cm-disclosure--loading .osano-cm-disclosure__list:after{animation-duration:1s;animation-iteration-count:infinite;animation-name:osano-load-scale;animation-timing-function:ease-in-out;border-radius:100%;content:"";display:block;height:1em;position:relative;top:-.125em;transform:translateY(-50%);width:1em}.osano-cm-disclosure--collapse .osano-cm-disclosure__list{display:none}.osano-cm-disclosure--collapse .osano-cm-disclosure__list:after{content:none}.osano-cm-cookie-disclosure,.osano-cm-script-disclosure{display:flex;flex-wrap:wrap;margin:0}.osano-cm-cookie-disclosure__description:last-of-type,.osano-cm-cookie-disclosure__title:last-of-type,.osano-cm-script-disclosure__description:last-of-type,.osano-cm-script-disclosure__title:last-of-type{margin-bottom:0}@keyframes osano-load-scale{0%{transform:translateY(-50%) scale(0)}to{opacity:0;transform:translateY(-50%) scale(1)}}'} .osano-cm-window { direction: ${i.hT.isRTL?"rtl":"ltr"}; text-align: ${i.hT.isRTL?"right":"left"}; } .osano-cm-dialog { background: ${a}; color: ${l}; } .osano-cm-dialog__close { color: ${l}; stroke: ${l}; } .osano-cm-dialog__close:focus { background-color: ${l}; border-color: ${l}; stroke: ${a}; } .osano-cm-dialog__close:hover { stroke: ${wi(l)}; } .osano-cm-dialog__close:focus:hover { stroke: ${wi(a)}; } .osano-cm-info-dialog { background: ${p}; } .osano-cm-header, .osano-cm-info-dialog-header { background: ${c}; background: linear-gradient( 180deg, ${c} 2.5em, ${_} 100% ); } .osano-cm-info { background: ${c}; color: ${d}; } .osano-cm-link-separator::before { content: '|'; padding: 0 0.5em; } .osano-cm-close { display: flex; background-color: transparent; border-color: transparent; } .osano-cm-info-dialog-header__close { color: ${d}; stroke: ${d}; } .osano-cm-info-dialog-header__close:focus { background-color: ${d}; border-color: ${d}; stroke: ${c}; } .osano-cm-info-dialog-header__close:hover { stroke: ${wi(d)}; } .osano-cm-info-dialog-header__close:focus:hover { stroke: ${wi(c)}; } .osano-cm-disclosure__list:first-of-type::after { background-color: ${m}; } .osano-cm-disclosure__toggle, .osano-cm-expansion-panel__toggle { color: ${m}; } .osano-cm-disclosure__toggle:hover, .osano-cm-disclosure__toggle:active, .osano-cm-expansion-panel__toggle:hover, .osano-cm-expansion-panel__toggle:active { color: ${m}; } .osano-cm-disclosure__toggle:focus, .osano-cm-expansion-panel__toggle:focus { color: ${wi(m)}; } .osano-cm-button { background-color: ${o}; border-color: ${r}; color: ${r}; } .osano-cm-button--type_deny { background-color: ${n}; border-color: ${s}; color: ${s}; } .osano-cm-button:focus, .osano-cm-button:hover { background-color: ${wi(o,.08)}; } .osano-cm-button--type_deny:focus, .osano-cm-button--type_deny:hover { background-color: ${wi(n,.08)}; } .osano-cm-link { color: ${m}; } .osano-cm-link:hover, .osano-cm-link:active { color: ${m}; } .osano-cm-link:focus { color: ${wi(m)}; } .osano-cm-toggle__switch { background-color: ${g}; } .osano-cm-toggle__switch::after { background-color: ${u}; border-color: ${u}; } .osano-cm-toggle__switch::before { border-color: transparent; } .osano-cm-toggle__input:checked + .osano-cm-toggle__switch { background-color: ${h}; border-color: ${h}; } .osano-cm-toggle__input:checked + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:checked + .osano-cm-toggle__switch::before { border-color: ${b}; } .osano-cm-toggle__input:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:hover + .osano-cm-toggle__switch { background-color: ${wi(g)}; border-color: ${wi(g)}; } .osano-cm-toggle__input:focus + .osano-cm-toggle__switch::before { border-color: ${wi(g)}; } .osano-cm-toggle__input:checked:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:checked:hover + .osano-cm-toggle__switch { background-color: ${wi(h)}; border-color: ${wi(h)}; } .osano-cm-toggle__input:checked:focus + .osano-cm-toggle__switch::before { border-color: ${wi(h)}; } .osano-cm-toggle__input:disabled + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:hover + .osano-cm-toggle__switch { background-color: ${wi(g,.25)}; border-color: ${wi(g,.25)}; } .osano-cm-toggle__input:disabled + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:focus + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:hover + .osano-cm-toggle__switch::after { background-color: ${wi(u,.25)}; border-color: ${wi(u,.25)}; } .osano-cm-toggle__input:disabled + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:focus + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:hover + .osano-cm-toggle__switch::before { border-color: transparent; } .osano-cm-toggle__input:disabled:checked + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:checked:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:checked:hover + .osano-cm-toggle__switch { background-color: ${wi(h,.25)}; border-color: ${wi(h,.25)}; } .osano-cm-toggle__input:disabled:checked + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:checked:focus + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:checked:hover + .osano-cm-toggle__switch::after { background-color: ${wi(b,.25)}; border-color: ${wi(b,.25)}; } .osano-cm-toggle__input:disabled:checked + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:checked:focus + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:checked:hover + .osano-cm-toggle__switch::before { border-color: transparent; } .osano-cm-widget__outline { fill: ${y}; stroke: ${$}; } .osano-cm-widget__dot { fill: ${f}; } .osano-cm-tcf-purpose--label input { accent-color: ${h}; } `})(r),o),Q(e(),t),this}}},5785:(e,t,o)=>{o.d(t,{$V:()=>g,Fk:()=>l,Qi:()=>c,S1:()=>u,Yq:()=>h,Zx:()=>p,b6:()=>i,c:()=>m,fw:()=>b,gG:()=>d,ov:()=>a,sL:()=>s,uu:()=>y,xE:()=>f});var r=o(2775);const n="OsanoCMP_IAB-TCF",i=(0,r.lQ)(`${n}/SET_PURPOSE_CONSENT`,(0,r.YW)("purposeId","acceptOrDeny")),s=(0,r.lQ)(`${n}/SET_PURPOSE_LI_CONSENT`,(0,r.YW)("purposeId","acceptOrDeny")),a=(0,r.lQ)(`${n}/SET_ALL_PURPOSE_CHOICES`,(0,r.YW)("acceptOrDeny")),l=(0,r.lQ)(`${n}/SET_VENDOR_CONSENT`,(0,r.YW)("vendorId","acceptOrDeny")),c=(0,r.lQ)(`${n}/SET_ALL_VENDOR_CONSENT`,(0,r.YW)("acceptOrDeny")),d=(0,r.lQ)(`${n}/SET_VENDOR_LI_CONSENT`,(0,r.YW)("vendorId","acceptOrDeny")),p=(0,r.lQ)(`${n}/SET_ALL_VENDOR_LI_CONSENT`,(0,r.YW)("acceptOrDeny")),m=(0,r.lQ)(`${n}/SET_SPECIAL_FEATURE_CONSENT`,(0,r.YW)("specialFeatureId","acceptOrDeny")),g=(0,r.lQ)(`${n}/SET_ALL_SPECIAL_FEATURE_CONSENT`,(0,r.YW)("acceptOrDeny")),u=(0,r.lQ)(`${n}/SET_GDPR_APPLIES`,r.Mv),h=(0,r.lQ)(`${n}/UPDATE_PURPOSE_LIST`,(0,r.YW)("purposeList","language")),b=(0,r.lQ)(`${n}/UPDATE_VENDOR_LIST_BEGIN`,r.m7),f=(0,r.lQ)(`${n}/UPDATE_VENDOR_LIST_SUCCESS`,r.Mv),y=(0,r.lQ)(`${n}/UPDATE_VENDOR_LIST_FAILURE`,r.Mv)}}]);
                            //# sourceMappingURL=osano-ui.js.map