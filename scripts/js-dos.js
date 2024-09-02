var e = Object.defineProperty
  , t = (t,n,r)=>(((t,n,r)=>{
    n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[n] = r
}
)(t, "symbol" != typeof n ? n + "" : n, r),
r);
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver((e=>{
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
var n, r, o, i, s, a, c, l, u = {}, d = [], f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, h = Array.isArray;
function p(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function m(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}
function v(e, t, r) {
    var o, i, s, a = {};
    for (s in t)
        "key" == s ? o = t[s] : "ref" == s ? i = t[s] : a[s] = t[s];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? n.call(arguments, 2) : r),
    "function" == typeof e && null != e.defaultProps)
        for (s in e.defaultProps)
            void 0 === a[s] && (a[s] = e.defaultProps[s]);
    return y(e, a, o, i, null)
}
function y(e, t, n, i, s) {
    var a = {
        type: e,
        props: t,
        key: n,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == s ? ++o : s,
        __i: -1,
        __u: 0
    };
    return null == s && null != r.vnode && r.vnode(a),
    a
}
function b() {
    return {
        current: null
    }
}
function g(e) {
    return e.children
}
function _(e, t) {
    this.props = e,
    this.context = t
}
function w(e, t) {
    if (null == t)
        return e.__ ? w(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e)
            return n.__e;
    return "function" == typeof e.type ? w(e) : null
}
function k(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return k(e)
    }
}
function x(e) {
    (!e.__d && (e.__d = !0) && i.push(e) && !C.__r++ || s !== r.debounceRendering) && ((s = r.debounceRendering) || a)(C)
}
function C() {
    var e, t, n, o, s, a, l, u, d;
    for (i.sort(c); e = i.shift(); )
        e.__d && (t = i.length,
        o = void 0,
        a = (s = (n = e).__v).__e,
        u = [],
        d = [],
        (l = n.__P) && ((o = p({}, s)).__v = s.__v + 1,
        r.vnode && r.vnode(o),
        T(l, o, s, n.__n, void 0 !== l.ownerSVGElement, 32 & s.__u ? [a] : null, u, null == a ? w(s) : a, !!(32 & s.__u), d),
        o.__.__k[o.__i] = o,
        B(u, o, d),
        o.__e != a && k(o)),
        i.length > t && i.sort(c));
    C.__r = 0
}
function S(e, t, n, r, o, i, s, a, c, l, f) {
    var p, m, v, b, _, k = r && r.__k || d, x = t.length;
    for (n.__d = c,
    function(e, t, n) {
        var r, o, i, s, a, c = t.length, l = n.length, u = l, d = 0;
        for (e.__k = [],
        r = 0; r < c; r++)
            null != (o = e.__k[r] = null == (o = t[r]) || "boolean" == typeof o || "function" == typeof o ? null : "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? y(null, o, null, null, o) : h(o) ? y(g, {
                children: o
            }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? y(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) ? (o.__ = e,
            o.__b = e.__b + 1,
            a = O(o, n, s = r + d, u),
            o.__i = a,
            i = null,
            -1 !== a && (u--,
            (i = n[a]) && (i.__u |= 131072)),
            null == i || null === i.__v ? (-1 == a && d--,
            "function" != typeof o.type && (o.__u |= 65536)) : a !== s && (a === s + 1 ? d++ : a > s ? u > c - s ? d += a - s : d-- : d = a < s && a == s - 1 ? a - s : 0,
            a !== r + d && (o.__u |= 65536))) : (i = n[r]) && null == i.key && i.__e && (i.__e == e.__d && (e.__d = w(i)),
            R(i, i, !1),
            n[r] = null,
            u--);
        if (u)
            for (r = 0; r < l; r++)
                null != (i = n[r]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = w(i)),
                R(i, i))
    }(n, t, k),
    c = n.__d,
    p = 0; p < x; p++)
        null != (v = n.__k[p]) && "boolean" != typeof v && "function" != typeof v && (m = -1 === v.__i ? u : k[v.__i] || u,
        v.__i = p,
        T(e, v, m, o, i, s, a, c, l, f),
        b = v.__e,
        v.ref && m.ref != v.ref && (m.ref && z(m.ref, null, v),
        f.push(v.ref, v.__c || b, v)),
        null == _ && null != b && (_ = b),
        65536 & v.__u || m.__k === v.__k ? c = E(v, c, e) : "function" == typeof v.type && void 0 !== v.__d ? c = v.__d : b && (c = b.nextSibling),
        v.__d = void 0,
        v.__u &= -196609);
    n.__d = c,
    n.__e = _
}
function E(e, t, n) {
    var r, o;
    if ("function" == typeof e.type) {
        for (r = e.__k,
        o = 0; r && o < r.length; o++)
            r[o] && (r[o].__ = e,
            t = E(r[o], t, n));
        return t
    }
    return e.__e != t && (n.insertBefore(e.__e, t || null),
    t = e.__e),
    t && t.nextSibling
}
function P(e, t) {
    return t = t || [],
    null == e || "boolean" == typeof e || (h(e) ? e.some((function(e) {
        P(e, t)
    }
    )) : t.push(e)),
    t
}
function O(e, t, n, r) {
    var o = e.key
      , i = e.type
      , s = n - 1
      , a = n + 1
      , c = t[n];
    if (null === c || c && o == c.key && i === c.type)
        return n;
    if (r > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
        for (; s >= 0 || a < t.length; ) {
            if (s >= 0) {
                if ((c = t[s]) && 0 == (131072 & c.__u) && o == c.key && i === c.type)
                    return s;
                s--
            }
            if (a < t.length) {
                if ((c = t[a]) && 0 == (131072 & c.__u) && o == c.key && i === c.type)
                    return a;
                a++
            }
        }
    return -1
}
function M(e, t, n) {
    "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || f.test(t) ? n : n + "px"
}
function j(e, t, n, r, o) {
    var i;
    e: if ("style" === t)
        if ("string" == typeof n)
            e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""),
            r)
                for (t in r)
                    n && t in n || M(e.style, t, "");
            if (n)
                for (t in n)
                    r && n[t] === r[t] || M(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1])
        i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")),
        t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + i] = n,
        n ? r ? n.u = r.u : (n.u = Date.now(),
        e.addEventListener(t, i ? D : A, i)) : e.removeEventListener(t, i ? D : A, i);
    else {
        if (o)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e)
            try {
                e[t] = null == n ? "" : n;
                break e
            } catch (s) {}
        "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
}
function A(e) {
    var t = this.l[e.type + !1];
    if (e.t) {
        if (e.t <= t.u)
            return
    } else
        e.t = Date.now();
    return t(r.event ? r.event(e) : e)
}
function D(e) {
    return this.l[e.type + !0](r.event ? r.event(e) : e)
}
function T(e, t, o, i, s, a, c, l, d, f) {
    var v, y, b, k, x, C, E, P, O, M, A, D, T, B, z, R = t.type;
    if (void 0 !== t.constructor)
        return null;
    128 & o.__u && (d = !!(32 & o.__u),
    a = [l = t.__e = o.__e]),
    (v = r.__b) && v(t);
    e: if ("function" == typeof R)
        try {
            if (P = t.props,
            O = (v = R.contextType) && i[v.__c],
            M = v ? O ? O.props.value : v.__ : i,
            o.__c ? E = (y = t.__c = o.__c).__ = y.__E : ("prototype"in R && R.prototype.render ? t.__c = y = new R(P,M) : (t.__c = y = new _(P,M),
            y.constructor = R,
            y.render = L),
            O && O.sub(y),
            y.props = P,
            y.state || (y.state = {}),
            y.context = M,
            y.__n = i,
            b = y.__d = !0,
            y.__h = [],
            y._sb = []),
            null == y.__s && (y.__s = y.state),
            null != R.getDerivedStateFromProps && (y.__s == y.state && (y.__s = p({}, y.__s)),
            p(y.__s, R.getDerivedStateFromProps(P, y.__s))),
            k = y.props,
            x = y.state,
            y.__v = t,
            b)
                null == R.getDerivedStateFromProps && null != y.componentWillMount && y.componentWillMount(),
                null != y.componentDidMount && y.__h.push(y.componentDidMount);
            else {
                if (null == R.getDerivedStateFromProps && P !== k && null != y.componentWillReceiveProps && y.componentWillReceiveProps(P, M),
                !y.__e && (null != y.shouldComponentUpdate && !1 === y.shouldComponentUpdate(P, y.__s, M) || t.__v === o.__v)) {
                    for (t.__v !== o.__v && (y.props = P,
                    y.state = y.__s,
                    y.__d = !1),
                    t.__e = o.__e,
                    t.__k = o.__k,
                    t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    }
                    )),
                    A = 0; A < y._sb.length; A++)
                        y.__h.push(y._sb[A]);
                    y._sb = [],
                    y.__h.length && c.push(y);
                    break e
                }
                null != y.componentWillUpdate && y.componentWillUpdate(P, y.__s, M),
                null != y.componentDidUpdate && y.__h.push((function() {
                    y.componentDidUpdate(k, x, C)
                }
                ))
            }
            if (y.context = M,
            y.props = P,
            y.__P = e,
            y.__e = !1,
            D = r.__r,
            T = 0,
            "prototype"in R && R.prototype.render) {
                for (y.state = y.__s,
                y.__d = !1,
                D && D(t),
                v = y.render(y.props, y.state, y.context),
                B = 0; B < y._sb.length; B++)
                    y.__h.push(y._sb[B]);
                y._sb = []
            } else
                do {
                    y.__d = !1,
                    D && D(t),
                    v = y.render(y.props, y.state, y.context),
                    y.state = y.__s
                } while (y.__d && ++T < 25);
            y.state = y.__s,
            null != y.getChildContext && (i = p(p({}, i), y.getChildContext())),
            b || null == y.getSnapshotBeforeUpdate || (C = y.getSnapshotBeforeUpdate(k, x)),
            S(e, h(z = null != v && v.type === g && null == v.key ? v.props.children : v) ? z : [z], t, o, i, s, a, c, l, d, f),
            y.base = t.__e,
            t.__u &= -161,
            y.__h.length && c.push(y),
            E && (y.__E = y.__ = null)
        } catch (N) {
            t.__v = null,
            d || null != a ? (t.__e = l,
            t.__u |= d ? 160 : 32,
            a[a.indexOf(l)] = null) : (t.__e = o.__e,
            t.__k = o.__k),
            r.__e(N, t, o)
        }
    else
        null == a && t.__v === o.__v ? (t.__k = o.__k,
        t.__e = o.__e) : t.__e = function(e, t, r, o, i, s, a, c, l) {
            var d, f, p, v, y, b, g, _ = r.props, k = t.props, x = t.type;
            if ("svg" === x && (i = !0),
            null != s)
                for (d = 0; d < s.length; d++)
                    if ((y = s[d]) && "setAttribute"in y == !!x && (x ? y.localName === x : 3 === y.nodeType)) {
                        e = y,
                        s[d] = null;
                        break
                    }
            if (null == e) {
                if (null === x)
                    return document.createTextNode(k);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", x) : document.createElement(x, k.is && k),
                s = null,
                c = !1
            }
            if (null === x)
                _ === k || c && e.data === k || (e.data = k);
            else {
                if (s = s && n.call(e.childNodes),
                _ = r.props || u,
                !c && null != s)
                    for (_ = {},
                    d = 0; d < e.attributes.length; d++)
                        _[(y = e.attributes[d]).name] = y.value;
                for (d in _)
                    y = _[d],
                    "children" == d || ("dangerouslySetInnerHTML" == d ? p = y : "key" === d || d in k || j(e, d, null, y, i));
                for (d in k)
                    y = k[d],
                    "children" == d ? v = y : "dangerouslySetInnerHTML" == d ? f = y : "value" == d ? b = y : "checked" == d ? g = y : "key" === d || c && "function" != typeof y || _[d] === y || j(e, d, y, _[d], i);
                if (f)
                    c || p && (f.__html === p.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html),
                    t.__k = [];
                else if (p && (e.innerHTML = ""),
                S(e, h(v) ? v : [v], t, r, o, i && "foreignObject" !== x, s, a, s ? s[0] : r.__k && w(r, 0), c, l),
                null != s)
                    for (d = s.length; d--; )
                        null != s[d] && m(s[d]);
                c || (d = "value",
                void 0 !== b && (b !== e[d] || "progress" === x && !b || "option" === x && b !== _[d]) && j(e, d, b, _[d], !1),
                d = "checked",
                void 0 !== g && g !== e[d] && j(e, d, g, _[d], !1))
            }
            return e
        }(o.__e, t, o, i, s, a, c, d, f);
    (v = r.diffed) && v(t)
}
function B(e, t, n) {
    t.__d = void 0;
    for (var o = 0; o < n.length; o++)
        z(n[o], n[++o], n[++o]);
    r.__c && r.__c(t, e),
    e.some((function(t) {
        try {
            e = t.__h,
            t.__h = [],
            e.some((function(e) {
                e.call(t)
            }
            ))
        } catch (n) {
            r.__e(n, t.__v)
        }
    }
    ))
}
function z(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (o) {
        r.__e(o, n)
    }
}
function R(e, t, n) {
    var o, i;
    if (r.unmount && r.unmount(e),
    (o = e.ref) && (o.current && o.current !== e.__e || z(o, null, t)),
    null != (o = e.__c)) {
        if (o.componentWillUnmount)
            try {
                o.componentWillUnmount()
            } catch (s) {
                r.__e(s, t)
            }
        o.base = o.__P = null,
        e.__c = void 0
    }
    if (o = e.__k)
        for (i = 0; i < o.length; i++)
            o[i] && R(o[i], t, n || "function" != typeof e.type);
    n || null == e.__e || m(e.__e),
    e.__ = e.__e = e.__d = void 0
}
function L(e, t, n) {
    return this.constructor(e, n)
}
function N(e, t, o) {
    var i, s, a, c;
    r.__ && r.__(e, t),
    s = (i = "function" == typeof o) ? null : o && o.__k || t.__k,
    a = [],
    c = [],
    T(t, e = (!i && o || t).__k = v(g, null, [e]), s || u, u, void 0 !== t.ownerSVGElement, !i && o ? [o] : s ? null : t.firstChild ? n.call(t.childNodes) : null, a, !i && o ? o : s ? s.__e : t.firstChild, i, c),
    B(a, e, c)
}
function I(e, t) {
    N(e, t, I)
}
function U(e, t, r) {
    var o, i, s, a, c = p({}, e.props);
    for (s in e.type && e.type.defaultProps && (a = e.type.defaultProps),
    t)
        "key" == s ? o = t[s] : "ref" == s ? i = t[s] : c[s] = void 0 === t[s] && void 0 !== a ? a[s] : t[s];
    return arguments.length > 2 && (c.children = arguments.length > 3 ? n.call(arguments, 2) : r),
    y(e.type, c, o || e.key, i || e.ref, null)
}
function K(e, t) {
    var n = {
        __c: t = "__cC" + l++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [],
            (r = {})[t] = this,
            this.getChildContext = function() {
                return r
            }
            ,
            this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some((function(e) {
                    e.__e = !0,
                    x(e)
                }
                ))
            }
            ,
            this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1),
                    t && t.call(e)
                }
            }
            ),
            e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
function F(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function H(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if ("function" == typeof t) {
        var n = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach((function(t) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(n, t, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[t]
            }
        })
    }
    )),
    n
}
n = d.slice,
r = {
    __e: function(e, t, n, r) {
        for (var o, i, s; t = t.__; )
            if ((o = t.__c) && !o.__)
                try {
                    if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)),
                    s = o.__d),
                    null != o.componentDidCatch && (o.componentDidCatch(e, r || {}),
                    s = o.__d),
                    s)
                        return o.__E = o
                } catch (a) {
                    e = a
                }
        throw e
    }
},
o = 0,
_.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state),
    "function" == typeof e && (e = e(p({}, n), this.props)),
    e && p(n, e),
    null != e && this.__v && (t && this._sb.push(t),
    x(this))
}
,
_.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    x(this))
}
,
_.prototype.render = g,
i = [],
a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
c = function(e, t) {
    return e.__v.__b - t.__v.__b
}
,
C.__r = 0,
l = 0;
var V, W, q, X, $ = {
    exports: {}
}, G = {}, Y = 0, Q = [], J = [], Z = r.__b, ee = r.__r, te = r.diffed, ne = r.__c, re = r.unmount;
function oe(e, t) {
    r.__h && r.__h(W, e, Y || t),
    Y = 0;
    var n = W.__H || (W.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({
        __V: J
    }),
    n.__[e]
}
function ie(e) {
    return Y = 1,
    se(ke, e)
}
function se(e, t, n) {
    var r = oe(V++, 2);
    if (r.t = e,
    !r.__c && (r.__ = [n ? n(t) : ke(void 0, t), function(e) {
        var t = r.__N ? r.__N[0] : r.__[0]
          , n = r.t(t, e);
        t !== n && (r.__N = [n, r.__[1]],
        r.__c.setState({}))
    }
    ],
    r.__c = W,
    !W.u)) {
        var o = function(e, t, n) {
            if (!r.__c.__H)
                return !0;
            var o = r.__c.__H.__.filter((function(e) {
                return e.__c
            }
            ));
            if (o.every((function(e) {
                return !e.__N
            }
            )))
                return !i || i.call(this, e, t, n);
            var s = !1;
            return o.forEach((function(e) {
                if (e.__N) {
                    var t = e.__[0];
                    e.__ = e.__N,
                    e.__N = void 0,
                    t !== e.__[0] && (s = !0)
                }
            }
            )),
            !(!s && r.__c.props === e) && (!i || i.call(this, e, t, n))
        };
        W.u = !0;
        var i = W.shouldComponentUpdate
          , s = W.componentWillUpdate;
        W.componentWillUpdate = function(e, t, n) {
            if (this.__e) {
                var r = i;
                i = void 0,
                o(e, t, n),
                i = r
            }
            s && s.call(this, e, t, n)
        }
        ,
        W.shouldComponentUpdate = o
    }
    return r.__N || r.__
}
function ae(e, t) {
    var n = oe(V++, 3);
    !r.__s && we(n.__H, t) && (n.__ = e,
    n.i = t,
    W.__H.__h.push(n))
}
function ce(e, t) {
    var n = oe(V++, 4);
    !r.__s && we(n.__H, t) && (n.__ = e,
    n.i = t,
    W.__h.push(n))
}
function le(e) {
    return Y = 5,
    de((function() {
        return {
            current: e
        }
    }
    ), [])
}
function ue(e, t, n) {
    Y = 6,
    ce((function() {
        return "function" == typeof e ? (e(t()),
        function() {
            return e(null)
        }
        ) : e ? (e.current = t(),
        function() {
            return e.current = null
        }
        ) : void 0
    }
    ), null == n ? n : n.concat(e))
}
function de(e, t) {
    var n = oe(V++, 7);
    return we(n.__H, t) ? (n.__V = e(),
    n.i = t,
    n.__h = e,
    n.__V) : n.__
}
function fe(e, t) {
    return Y = 8,
    de((function() {
        return e
    }
    ), t)
}
function he(e) {
    var t = W.context[e.__c]
      , n = oe(V++, 9);
    return n.c = e,
    t ? (null == n.__ && (n.__ = !0,
    t.sub(W)),
    t.props.value) : e.__
}
function pe(e, t) {
    r.useDebugValue && r.useDebugValue(t ? t(e) : e)
}
function me() {
    var e = oe(V++, 11);
    if (!e.__) {
        for (var t = W.__v; null !== t && !t.__m && null !== t.__; )
            t = t.__;
        var n = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + n[0] + "-" + n[1]++
    }
    return e.__
}
function ve() {
    for (var e; e = Q.shift(); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(ge),
                e.__H.__h.forEach(_e),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                r.__e(t, e.__v)
            }
}
r.__b = function(e) {
    W = null,
    Z && Z(e)
}
,
r.__r = function(e) {
    ee && ee(e),
    V = 0;
    var t = (W = e.__c).__H;
    t && (q === W ? (t.__h = [],
    W.__h = [],
    t.__.forEach((function(e) {
        e.__N && (e.__ = e.__N),
        e.__V = J,
        e.__N = e.i = void 0
    }
    ))) : (t.__h.forEach(ge),
    t.__h.forEach(_e),
    t.__h = [],
    V = 0)),
    q = W
}
,
r.diffed = function(e) {
    te && te(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== Q.push(t) && X === r.requestAnimationFrame || ((X = r.requestAnimationFrame) || be)(ve)),
    t.__H.__.forEach((function(e) {
        e.i && (e.__H = e.i),
        e.__V !== J && (e.__ = e.__V),
        e.i = void 0,
        e.__V = J
    }
    ))),
    q = W = null
}
,
r.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(ge),
            e.__h = e.__h.filter((function(e) {
                return !e.__ || _e(e)
            }
            ))
        } catch (n) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            }
            )),
            t = [],
            r.__e(n, e.__v)
        }
    }
    )),
    ne && ne(e, t)
}
,
r.unmount = function(e) {
    re && re(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            ge(e)
        } catch (n) {
            t = n
        }
    }
    )),
    n.__H = void 0,
    t && r.__e(t, n.__v))
}
;
var ye = "function" == typeof requestAnimationFrame;
function be(e) {
    var t, n = function() {
        clearTimeout(r),
        ye && cancelAnimationFrame(t),
        setTimeout(e)
    }, r = setTimeout(n, 100);
    ye && (t = requestAnimationFrame(n))
}
function ge(e) {
    var t = W
      , n = e.__c;
    "function" == typeof n && (e.__c = void 0,
    n()),
    W = t
}
function _e(e) {
    var t = W;
    e.__c = e.__(),
    W = t
}
function we(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }
    ))
}
function ke(e, t) {
    return "function" == typeof t ? t(e) : t
}
function xe(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function Ce(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t))
            return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r])
            return !0;
    return !1
}
function Se(e) {
    this.props = e
}
function Ee(e, t) {
    function n(e) {
        var n = this.props.ref
          , r = n == e.ref;
        return !r && n && (n.call ? n(null) : n.current = null),
        t ? !t(this.props, e) || !r : Ce(this.props, e)
    }
    function r(t) {
        return this.shouldComponentUpdate = n,
        v(e, t)
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")",
    r.prototype.isReactComponent = !0,
    r.__f = !0,
    r
}
(Se.prototype = new _).isPureReactComponent = !0,
Se.prototype.shouldComponentUpdate = function(e, t) {
    return Ce(this.props, e) || Ce(this.state, t)
}
;
var Pe = r.__b;
r.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
    e.ref = null),
    Pe && Pe(e)
}
;
var Oe = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Me(e) {
    function t(t) {
        var n = xe({}, t);
        return delete n.ref,
        e(n, t.ref || null)
    }
    return t.$$typeof = Oe,
    t.render = t,
    t.prototype.isReactComponent = t.__f = !0,
    t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
    t
}
var je = function(e, t) {
    return null == e ? null : P(P(e).map(t))
}
  , Ae = {
    map: je,
    forEach: je,
    count: function(e) {
        return e ? P(e).length : 0
    },
    only: function(e) {
        var t = P(e);
        if (1 !== t.length)
            throw "Children.only";
        return t[0]
    },
    toArray: P
}
  , De = r.__e;
r.__e = function(e, t, n, r) {
    if (e.then)
        for (var o, i = t; i = i.__; )
            if ((o = i.__c) && o.__c)
                return null == t.__e && (t.__e = n.__e,
                t.__k = n.__k),
                o.__c(e, t);
    De(e, t, n, r)
}
;
var Te = r.unmount;
function Be(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
        "function" == typeof e.__c && e.__c()
    }
    )),
    e.__c.__H = null),
    null != (e = xe({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t),
    e.__c = null),
    e.__k = e.__k && e.__k.map((function(e) {
        return Be(e, t, n)
    }
    ))),
    e
}
function ze(e, t, n) {
    return e && n && (e.__v = null,
    e.__k = e.__k && e.__k.map((function(e) {
        return ze(e, t, n)
    }
    )),
    e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e),
    e.__c.__e = !0,
    e.__c.__P = n)),
    e
}
function Re() {
    this.__u = 0,
    this.t = null,
    this.__b = null
}
function Le(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}
function Ne(e) {
    var t, n, r;
    function o(o) {
        if (t || (t = e()).then((function(e) {
            n = e.default || e
        }
        ), (function(e) {
            r = e
        }
        )),
        r)
            throw r;
        if (!n)
            throw t;
        return v(n, o)
    }
    return o.displayName = "Lazy",
    o.__f = !0,
    o
}
function Ie() {
    this.u = null,
    this.o = null
}
r.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(),
    t && 32 & e.__u && (e.type = null),
    Te && Te(e)
}
,
(Re.prototype = new _).__c = function(e, t) {
    var n = t.__c
      , r = this;
    null == r.t && (r.t = []),
    r.t.push(n);
    var o = Le(r.__v)
      , i = !1
      , s = function() {
        i || (i = !0,
        n.__R = null,
        o ? o(a) : a())
    };
    n.__R = s;
    var a = function() {
        if (!--r.__u) {
            if (r.state.__a) {
                var e = r.state.__a;
                r.__v.__k[0] = ze(e, e.__c.__P, e.__c.__O)
            }
            var t;
            for (r.setState({
                __a: r.__b = null
            }); t = r.t.pop(); )
                t.forceUpdate()
        }
    };
    r.__u++ || 32 & t.__u || r.setState({
        __a: r.__b = r.__v.__k[0]
    }),
    e.then(s, s)
}
,
Re.prototype.componentWillUnmount = function() {
    this.t = []
}
,
Re.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div")
              , r = this.__v.__k[0].__c;
            this.__v.__k[0] = Be(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var o = t.__a && v(g, null, e.fallback);
    return o && (o.__u &= -33),
    [v(g, null, t.__a ? null : e.children), o]
}
;
var Ue = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n; ) {
            for (; n.length > 3; )
                n.pop()();
            if (n[1] < n[0])
                break;
            e.u = n = n[2]
        }
};
function Ke(e) {
    return this.getChildContext = function() {
        return e.context
    }
    ,
    e.children
}
function Fe(e) {
    var t = this
      , n = e.i;
    t.componentWillUnmount = function() {
        N(null, t.l),
        t.l = null,
        t.i = null
    }
    ,
    t.i && t.i !== n && t.componentWillUnmount(),
    t.l || (t.i = n,
    t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e),
            t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e),
            t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
            t.i.removeChild(e)
        }
    }),
    N(v(Ke, {
        context: t.context
    }, e.__v), t.l)
}
function He(e, t) {
    var n = v(Fe, {
        __v: e,
        i: t
    });
    return n.containerInfo = t,
    n
}
(Ie.prototype = new _).__a = function(e) {
    var t = this
      , n = Le(t.__v)
      , r = t.o.get(e);
    return r[0]++,
    function(o) {
        var i = function() {
            t.props.revealOrder ? (r.push(o),
            Ue(t, e, r)) : o()
        };
        n ? n(i) : i()
    }
}
,
Ie.prototype.render = function(e) {
    this.u = null,
    this.o = new Map;
    var t = P(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--; )
        this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}
,
Ie.prototype.componentDidUpdate = Ie.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        Ue(e, n, t)
    }
    ))
}
;
var Ve = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
  , We = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
  , qe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
  , Xe = /[A-Z0-9]/g
  , $e = "undefined" != typeof document
  , Ge = function(e) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
};
function Ye(e, t, n) {
    return null == t.__k && (t.textContent = ""),
    N(e, t),
    "function" == typeof n && n(),
    e ? e.__c : null
}
function Qe(e, t, n) {
    return I(e, t),
    "function" == typeof n && n(),
    e ? e.__c : null
}
_.prototype.isReactComponent = {},
["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(_.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}
));
var Je = r.event;
function Ze() {}
function et() {
    return this.cancelBubble
}
function tt() {
    return this.defaultPrevented
}
r.event = function(e) {
    return Je && (e = Je(e)),
    e.persist = Ze,
    e.isPropagationStopped = et,
    e.isDefaultPrevented = tt,
    e.nativeEvent = e
}
;
var nt, rt = {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this.class
    }
}, ot = r.vnode;
r.vnode = function(e) {
    "string" == typeof e.type && function(e) {
        var t = e.props
          , n = e.type
          , r = {};
        for (var o in t) {
            var i = t[o];
            if (!("value" === o && "defaultValue"in t && null == i || $e && "children" === o && "noscript" === n || "class" === o || "className" === o)) {
                var s = o.toLowerCase();
                "defaultValue" === o && "value"in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === s ? o = "ondblclick" : "onchange" !== s || "input" !== n && "textarea" !== n || Ge(t.type) ? "onfocus" === s ? o = "onfocusin" : "onblur" === s ? o = "onfocusout" : qe.test(o) ? o = s : -1 === n.indexOf("-") && We.test(o) ? o = o.replace(Xe, "-$&").toLowerCase() : null === i && (i = void 0) : s = o = "oninput",
                "oninput" === s && r[o = s] && (o = "oninputCapture"),
                r[o] = i
            }
        }
        "select" == n && r.multiple && Array.isArray(r.value) && (r.value = P(t.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }
        ))),
        "select" == n && null != r.defaultValue && (r.value = P(t.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }
        ))),
        t.class && !t.className ? (r.class = t.class,
        Object.defineProperty(r, "className", rt)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className),
        e.props = r
    }(e),
    e.$$typeof = Ve,
    ot && ot(e)
}
;
var it = r.__r;
r.__r = function(e) {
    it && it(e),
    nt = e.__c
}
;
var st = r.diffed;
r.diffed = function(e) {
    st && st(e);
    var t = e.props
      , n = e.__e;
    null != n && "textarea" === e.type && "value"in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value),
    nt = null
}
;
var at = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return nt.__n[e.__c].props.value
            }
        }
    }
};
function ct(e) {
    return v.bind(null, e)
}
function lt(e) {
    return !!e && e.$$typeof === Ve
}
function ut(e) {
    return lt(e) && e.type === g
}
function dt(e) {
    return lt(e) ? U.apply(null, arguments) : e
}
function ft(e) {
    return !!e.__k && (N(null, e),
    !0)
}
function ht(e) {
    return e && (e.base || 1 === e.nodeType && e) || null
}
var pt = function(e, t) {
    return e(t)
}
  , mt = function(e, t) {
    return e(t)
}
  , vt = g;
function yt(e) {
    e()
}
function bt(e) {
    return e
}
function gt() {
    return [!1, yt]
}
var _t = ce
  , wt = lt;
function kt(e, t) {
    var n = t()
      , r = ie({
        h: {
            __: n,
            v: t
        }
    })
      , o = r[0].h
      , i = r[1];
    return ce((function() {
        o.__ = n,
        o.v = t,
        xt(o) && i({
            h: o
        })
    }
    ), [e, n, t]),
    ae((function() {
        return xt(o) && i({
            h: o
        }),
        e((function() {
            xt(o) && i({
                h: o
            })
        }
        ))
    }
    ), [e]),
    n
}
function xt(e) {
    var t, n, r = e.v, o = e.__;
    try {
        var i = r();
        return !((t = o) === (n = i) && (0 !== t || 1 / t == 1 / n) || t != t && n != n)
    } catch (s) {
        return !0
    }
}
var Ct = {
    useState: ie,
    useId: me,
    useReducer: se,
    useEffect: ae,
    useLayoutEffect: ce,
    useInsertionEffect: _t,
    useTransition: gt,
    useDeferredValue: bt,
    useSyncExternalStore: kt,
    startTransition: yt,
    useRef: le,
    useImperativeHandle: ue,
    useMemo: de,
    useCallback: fe,
    useContext: he,
    useDebugValue: pe,
    version: "17.0.2",
    Children: Ae,
    render: Ye,
    hydrate: Qe,
    unmountComponentAtNode: ft,
    createPortal: He,
    createElement: v,
    createContext: K,
    createFactory: ct,
    cloneElement: dt,
    createRef: b,
    Fragment: g,
    isValidElement: lt,
    isElement: wt,
    isFragment: ut,
    findDOMNode: ht,
    Component: _,
    PureComponent: Se,
    memo: Ee,
    forwardRef: Me,
    flushSync: mt,
    unstable_batchedUpdates: pt,
    StrictMode: vt,
    Suspense: Re,
    SuspenseList: Ie,
    lazy: Ne,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: at
};
const St = Object.freeze(Object.defineProperty({
    __proto__: null,
    Children: Ae,
    Component: _,
    Fragment: g,
    PureComponent: Se,
    StrictMode: vt,
    Suspense: Re,
    SuspenseList: Ie,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: at,
    cloneElement: dt,
    createContext: K,
    createElement: v,
    createFactory: ct,
    createPortal: He,
    createRef: b,
    default: Ct,
    findDOMNode: ht,
    flushSync: mt,
    forwardRef: Me,
    hydrate: Qe,
    isElement: wt,
    isFragment: ut,
    isValidElement: lt,
    lazy: Ne,
    memo: Ee,
    render: Ye,
    startTransition: yt,
    unmountComponentAtNode: ft,
    unstable_batchedUpdates: pt,
    useCallback: fe,
    useContext: he,
    useDebugValue: pe,
    useDeferredValue: bt,
    useEffect: ae,
    useErrorBoundary: function(e) {
        var t = oe(V++, 10)
          , n = ie();
        return t.__ = e,
        W.componentDidCatch || (W.componentDidCatch = function(e, r) {
            t.__ && t.__(e, r),
            n[1](e)
        }
        ),
        [n[0], function() {
            n[1](void 0)
        }
        ]
    },
    useId: me,
    useImperativeHandle: ue,
    useInsertionEffect: _t,
    useLayoutEffect: ce,
    useMemo: de,
    useReducer: se,
    useRef: le,
    useState: ie,
    useSyncExternalStore: kt,
    useTransition: gt,
    version: "17.0.2"
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Et = H(St);
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt = Et;
var Ot = "function" == typeof Object.is ? Object.is : function(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
  , Mt = Pt.useState
  , jt = Pt.useEffect
  , At = Pt.useLayoutEffect
  , Dt = Pt.useDebugValue;
function Tt(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ot(e, n)
    } catch (r) {
        return !0
    }
}
var Bt = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
    return t()
}
: function(e, t) {
    var n = t()
      , r = Mt({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , i = r[1];
    return At((function() {
        o.value = n,
        o.getSnapshot = t,
        Tt(o) && i({
            inst: o
        })
    }
    ), [e, n, t]),
    jt((function() {
        return Tt(o) && i({
            inst: o
        }),
        e((function() {
            Tt(o) && i({
                inst: o
            })
        }
        ))
    }
    ), [e]),
    Dt(n),
    n
}
;
G.useSyncExternalStore = void 0 !== Pt.useSyncExternalStore ? Pt.useSyncExternalStore : Bt,
$.exports = G;
var zt = $.exports
  , Rt = {
    exports: {}
}
  , Lt = {}
  , Nt = Et
  , It = zt;
var Ut = "function" == typeof Object.is ? Object.is : function(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
  , Kt = It.useSyncExternalStore
  , Ft = Nt.useRef
  , Ht = Nt.useEffect
  , Vt = Nt.useMemo
  , Wt = Nt.useDebugValue;
Lt.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var i = Ft(null);
    if (null === i.current) {
        var s = {
            hasValue: !1,
            value: null
        };
        i.current = s
    } else
        s = i.current;
    i = Vt((function() {
        function e(e) {
            if (!c) {
                if (c = !0,
                i = e,
                e = r(e),
                void 0 !== o && s.hasValue) {
                    var t = s.value;
                    if (o(t, e))
                        return a = t
                }
                return a = e
            }
            if (t = a,
            Ut(i, e))
                return t;
            var n = r(e);
            return void 0 !== o && o(t, n) ? t : (i = e,
            a = n)
        }
        var i, a, c = !1, l = void 0 === n ? null : n;
        return [function() {
            return e(t())
        }
        , null === l ? void 0 : function() {
            return e(l())
        }
        ]
    }
    ), [t, n, r, o]);
    var a = Kt(e, i[0], i[1]);
    return Ht((function() {
        s.hasValue = !0,
        s.value = a
    }
    ), [a]),
    Wt(a),
    a
}
,
Rt.exports = Lt;
var qt = Rt.exports;
let Xt = function(e) {
    e()
};
const $t = ()=>Xt
  , Gt = Symbol.for("react-redux-context")
  , Yt = "undefined" != typeof globalThis ? globalThis : {};
function Qt() {
    var e;
    if (!K)
        return {};
    const t = null != (e = Yt[Gt]) ? e : Yt[Gt] = new Map;
    let n = t.get(K);
    return n || (n = K(null),
    t.set(K, n)),
    n
}
const Jt = Qt();
function Zt(e=Jt) {
    return function() {
        return he(e)
    }
}
const en = Zt();
let tn = ()=>{
    throw new Error("uSES not initialized!")
}
;
const nn = (e,t)=>e === t;
function rn(e=Jt) {
    const t = e === Jt ? en : Zt(e);
    return function(e, n={}) {
        const {equalityFn: r=nn, stabilityCheck: o, noopCheck: i} = "function" == typeof n ? {
            equalityFn: n
        } : n
          , {store: s, subscription: a, getServerState: c, stabilityCheck: l, noopCheck: u} = t();
        le(!0);
        const d = fe({
            [e.name]: t=>e(t)
        }[e.name], [e, l, o])
          , f = tn(a.addNestedSub, s.getState, c || s.getState, d, r);
        return pe(f),
        f
    }
}
const on = rn();
var sn = {
    exports: {}
}
  , an = {}
  , cn = "function" == typeof Symbol && Symbol.for
  , ln = cn ? Symbol.for("react.element") : 60103
  , un = cn ? Symbol.for("react.portal") : 60106
  , dn = cn ? Symbol.for("react.fragment") : 60107
  , fn = cn ? Symbol.for("react.strict_mode") : 60108
  , hn = cn ? Symbol.for("react.profiler") : 60114
  , pn = cn ? Symbol.for("react.provider") : 60109
  , mn = cn ? Symbol.for("react.context") : 60110
  , vn = cn ? Symbol.for("react.async_mode") : 60111
  , yn = cn ? Symbol.for("react.concurrent_mode") : 60111
  , bn = cn ? Symbol.for("react.forward_ref") : 60112
  , gn = cn ? Symbol.for("react.suspense") : 60113
  , _n = cn ? Symbol.for("react.suspense_list") : 60120
  , wn = cn ? Symbol.for("react.memo") : 60115
  , kn = cn ? Symbol.for("react.lazy") : 60116
  , xn = cn ? Symbol.for("react.block") : 60121
  , Cn = cn ? Symbol.for("react.fundamental") : 60117
  , Sn = cn ? Symbol.for("react.responder") : 60118
  , En = cn ? Symbol.for("react.scope") : 60119;
function Pn(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
        case ln:
            switch (e = e.type) {
            case vn:
            case yn:
            case dn:
            case hn:
            case fn:
            case gn:
                return e;
            default:
                switch (e = e && e.$$typeof) {
                case mn:
                case bn:
                case kn:
                case wn:
                case pn:
                    return e;
                default:
                    return t
                }
            }
        case un:
            return t
        }
    }
}
function On(e) {
    return Pn(e) === yn
}
an.AsyncMode = vn,
an.ConcurrentMode = yn,
an.ContextConsumer = mn,
an.ContextProvider = pn,
an.Element = ln,
an.ForwardRef = bn,
an.Fragment = dn,
an.Lazy = kn,
an.Memo = wn,
an.Portal = un,
an.Profiler = hn,
an.StrictMode = fn,
an.Suspense = gn,
an.isAsyncMode = function(e) {
    return On(e) || Pn(e) === vn
}
,
an.isConcurrentMode = On,
an.isContextConsumer = function(e) {
    return Pn(e) === mn
}
,
an.isContextProvider = function(e) {
    return Pn(e) === pn
}
,
an.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === ln
}
,
an.isForwardRef = function(e) {
    return Pn(e) === bn
}
,
an.isFragment = function(e) {
    return Pn(e) === dn
}
,
an.isLazy = function(e) {
    return Pn(e) === kn
}
,
an.isMemo = function(e) {
    return Pn(e) === wn
}
,
an.isPortal = function(e) {
    return Pn(e) === un
}
,
an.isProfiler = function(e) {
    return Pn(e) === hn
}
,
an.isStrictMode = function(e) {
    return Pn(e) === fn
}
,
an.isSuspense = function(e) {
    return Pn(e) === gn
}
,
an.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === dn || e === yn || e === hn || e === fn || e === gn || e === _n || "object" == typeof e && null !== e && (e.$$typeof === kn || e.$$typeof === wn || e.$$typeof === pn || e.$$typeof === mn || e.$$typeof === bn || e.$$typeof === Cn || e.$$typeof === Sn || e.$$typeof === En || e.$$typeof === xn)
}
,
an.typeOf = Pn,
sn.exports = an;
var Mn = sn.exports
  , jn = {};
jn[Mn.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
},
jn[Mn.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
};
var An, Dn = {}, Tn = Symbol.for("react.element"), Bn = Symbol.for("react.portal"), zn = Symbol.for("react.fragment"), Rn = Symbol.for("react.strict_mode"), Ln = Symbol.for("react.profiler"), Nn = Symbol.for("react.provider"), In = Symbol.for("react.context"), Un = Symbol.for("react.server_context"), Kn = Symbol.for("react.forward_ref"), Fn = Symbol.for("react.suspense"), Hn = Symbol.for("react.suspense_list"), Vn = Symbol.for("react.memo"), Wn = Symbol.for("react.lazy"), qn = Symbol.for("react.offscreen");
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Xn(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
        case Tn:
            switch (e = e.type) {
            case zn:
            case Ln:
            case Rn:
            case Fn:
            case Hn:
                return e;
            default:
                switch (e = e && e.$$typeof) {
                case Un:
                case In:
                case Kn:
                case Wn:
                case Vn:
                case Nn:
                    return e;
                default:
                    return t
                }
            }
        case Bn:
            return t
        }
    }
}
An = Symbol.for("react.module.reference"),
Dn.ContextConsumer = In,
Dn.ContextProvider = Nn,
Dn.Element = Tn,
Dn.ForwardRef = Kn,
Dn.Fragment = zn,
Dn.Lazy = Wn,
Dn.Memo = Vn,
Dn.Portal = Bn,
Dn.Profiler = Ln,
Dn.StrictMode = Rn,
Dn.Suspense = Fn,
Dn.SuspenseList = Hn,
Dn.isAsyncMode = function() {
    return !1
}
,
Dn.isConcurrentMode = function() {
    return !1
}
,
Dn.isContextConsumer = function(e) {
    return Xn(e) === In
}
,
Dn.isContextProvider = function(e) {
    return Xn(e) === Nn
}
,
Dn.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === Tn
}
,
Dn.isForwardRef = function(e) {
    return Xn(e) === Kn
}
,
Dn.isFragment = function(e) {
    return Xn(e) === zn
}
,
Dn.isLazy = function(e) {
    return Xn(e) === Wn
}
,
Dn.isMemo = function(e) {
    return Xn(e) === Vn
}
,
Dn.isPortal = function(e) {
    return Xn(e) === Bn
}
,
Dn.isProfiler = function(e) {
    return Xn(e) === Ln
}
,
Dn.isStrictMode = function(e) {
    return Xn(e) === Rn
}
,
Dn.isSuspense = function(e) {
    return Xn(e) === Fn
}
,
Dn.isSuspenseList = function(e) {
    return Xn(e) === Hn
}
,
Dn.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === zn || e === Ln || e === Rn || e === Fn || e === Hn || e === qn || "object" == typeof e && null !== e && (e.$$typeof === Wn || e.$$typeof === Vn || e.$$typeof === Nn || e.$$typeof === In || e.$$typeof === Kn || e.$$typeof === An || void 0 !== e.getModuleId)
}
,
Dn.typeOf = Xn;
const $n = {
    notify() {},
    get: ()=>[]
};
function Gn(e, t) {
    let n, r = $n, o = 0, i = !1;
    function s() {
        l.onStateChange && l.onStateChange()
    }
    function a() {
        o++,
        n || (n = t ? t.addNestedSub(s) : e.subscribe(s),
        r = function() {
            const e = $t();
            let t = null
              , n = null;
            return {
                clear() {
                    t = null,
                    n = null
                },
                notify() {
                    e((()=>{
                        let e = t;
                        for (; e; )
                            e.callback(),
                            e = e.next
                    }
                    ))
                },
                get() {
                    let e = []
                      , n = t;
                    for (; n; )
                        e.push(n),
                        n = n.next;
                    return e
                },
                subscribe(e) {
                    let r = !0
                      , o = n = {
                        callback: e,
                        next: null,
                        prev: n
                    };
                    return o.prev ? o.prev.next = o : t = o,
                    function() {
                        r && null !== t && (r = !1,
                        o.next ? o.next.prev = o.prev : n = o.prev,
                        o.prev ? o.prev.next = o.next : t = o.next)
                    }
                }
            }
        }())
    }
    function c() {
        o--,
        n && 0 === o && (n(),
        n = void 0,
        r.clear(),
        r = $n)
    }
    const l = {
        addNestedSub: function(e) {
            a();
            const t = r.subscribe(e);
            let n = !1;
            return ()=>{
                n || (n = !0,
                t(),
                c())
            }
        },
        notifyNestedSubs: function() {
            r.notify()
        },
        handleChangeWrapper: s,
        isSubscribed: function() {
            return i
        },
        trySubscribe: function() {
            i || (i = !0,
            a())
        },
        tryUnsubscribe: function() {
            i && (i = !1,
            c())
        },
        getListeners: ()=>r
    };
    return l
}
const Yn = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? ce : ae;
function Qn({store: e, context: t, children: n, serverState: r, stabilityCheck: o="once", noopCheck: i="once"}) {
    const s = de((()=>{
        const t = Gn(e);
        return {
            store: e,
            subscription: t,
            getServerState: r ? ()=>r : void 0,
            stabilityCheck: o,
            noopCheck: i
        }
    }
    ), [e, r, o, i])
      , a = de((()=>e.getState()), [e]);
    Yn((()=>{
        const {subscription: t} = s;
        return t.onStateChange = t.notifyNestedSubs,
        t.trySubscribe(),
        a !== e.getState() && t.notifyNestedSubs(),
        ()=>{
            t.tryUnsubscribe(),
            t.onStateChange = void 0
        }
    }
    ), [s, a]);
    return v((t || Jt).Provider, {
        value: s
    }, n)
}
function Jn(e=Jt) {
    const t = e === Jt ? en : Zt(e);
    return function() {
        const {store: e} = t();
        return e
    }
}
const Zn = Jn();
function er(e=Jt) {
    const t = e === Jt ? Zn : Jn(e);
    return function() {
        return t().dispatch
    }
}
const tr = er();
var nr;
function rr(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(e) {
        return "'" + e + "'"
    }
    )).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}
function or(e) {
    return !!e && !!e[Vr]
}
function ir(e) {
    var t;
    return !!e && (function(e) {
        if (!e || "object" != typeof e)
            return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t)
            return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return n === Object || "function" == typeof n && Function.toString.call(n) === Wr
    }(e) || Array.isArray(e) || !!e[Hr] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Hr]) || dr(e) || fr(e))
}
function sr(e, t, n) {
    void 0 === n && (n = !1),
    0 === ar(e) ? (n ? Object.keys : qr)(e).forEach((function(r) {
        n && "symbol" == typeof r || t(r, e[r], e)
    }
    )) : e.forEach((function(n, r) {
        return t(r, n, e)
    }
    ))
}
function ar(e) {
    var t = e[Vr];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : dr(e) ? 2 : fr(e) ? 3 : 0
}
function cr(e, t) {
    return 2 === ar(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function lr(e, t, n) {
    var r = ar(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
}
function ur(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
}
function dr(e) {
    return Ir && e instanceof Map
}
function fr(e) {
    return Ur && e instanceof Set
}
function hr(e) {
    return e.o || e.t
}
function pr(e) {
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    var t = Xr(e);
    delete t[Vr];
    for (var n = qr(t), r = 0; r < n.length; r++) {
        var o = n[r]
          , i = t[o];
        !1 === i.writable && (i.writable = !0,
        i.configurable = !0),
        (i.get || i.set) && (t[o] = {
            configurable: !0,
            writable: !0,
            enumerable: i.enumerable,
            value: e[o]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}
function mr(e, t) {
    return void 0 === t && (t = !1),
    yr(e) || or(e) || !ir(e) || (ar(e) > 1 && (e.set = e.add = e.clear = e.delete = vr),
    Object.freeze(e),
    t && sr(e, (function(e, t) {
        return mr(t, !0)
    }
    ), !0)),
    e
}
function vr() {
    rr(2)
}
function yr(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e)
}
function br(e) {
    var t = $r[e];
    return t || rr(18, e),
    t
}
function gr() {
    return Lr
}
function _r(e, t) {
    t && (br("Patches"),
    e.u = [],
    e.s = [],
    e.v = t)
}
function wr(e) {
    kr(e),
    e.p.forEach(Cr),
    e.p = null
}
function kr(e) {
    e === Lr && (Lr = e.l)
}
function xr(e) {
    return Lr = {
        p: [],
        l: Lr,
        h: e,
        m: !0,
        _: 0
    }
}
function Cr(e) {
    var t = e[Vr];
    0 === t.i || 1 === t.i ? t.j() : t.g = !0
}
function Sr(e, t) {
    t._ = t.p.length;
    var n = t.p[0]
      , r = void 0 !== e && e !== n;
    return t.h.O || br("ES5").S(t, e, r),
    r ? (n[Vr].P && (wr(t),
    rr(4)),
    ir(e) && (e = Er(t, e),
    t.l || Or(t, e)),
    t.u && br("Patches").M(n[Vr].t, e, t.u, t.s)) : e = Er(t, n, []),
    wr(t),
    t.u && t.v(t.u, t.s),
    e !== Fr ? e : void 0
}
function Er(e, t, n) {
    if (yr(t))
        return t;
    var r = t[Vr];
    if (!r)
        return sr(t, (function(o, i) {
            return Pr(e, r, t, o, i, n)
        }
        ), !0),
        t;
    if (r.A !== e)
        return t;
    if (!r.P)
        return Or(e, r.t, !0),
        r.t;
    if (!r.I) {
        r.I = !0,
        r.A._--;
        var o = 4 === r.i || 5 === r.i ? r.o = pr(r.k) : r.o
          , i = o
          , s = !1;
        3 === r.i && (i = new Set(o),
        o.clear(),
        s = !0),
        sr(i, (function(t, i) {
            return Pr(e, r, o, t, i, n, s)
        }
        )),
        Or(e, o, !1),
        n && e.u && br("Patches").N(r, n, e.u, e.s)
    }
    return r.o
}
function Pr(e, t, n, r, o, i, s) {
    if (or(o)) {
        var a = Er(e, o, i && t && 3 !== t.i && !cr(t.R, r) ? i.concat(r) : void 0);
        if (lr(n, r, a),
        !or(a))
            return;
        e.m = !1
    } else
        s && n.add(o);
    if (ir(o) && !yr(o)) {
        if (!e.h.D && e._ < 1)
            return;
        Er(e, o),
        t && t.A.l || Or(e, o)
    }
}
function Or(e, t, n) {
    void 0 === n && (n = !1),
    !e.l && e.h.D && e.m && mr(t, n)
}
function Mr(e, t) {
    var n = e[Vr];
    return (n ? hr(n) : e)[t]
}
function jr(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r)
                return r;
            n = Object.getPrototypeOf(n)
        }
}
function Ar(e) {
    e.P || (e.P = !0,
    e.l && Ar(e.l))
}
function Dr(e) {
    e.o || (e.o = pr(e.t))
}
function Tr(e, t, n) {
    var r = dr(t) ? br("MapSet").F(t, n) : fr(t) ? br("MapSet").T(t, n) : e.O ? function(e, t) {
        var n = Array.isArray(e)
          , r = {
            i: n ? 1 : 0,
            A: t ? t.A : gr(),
            P: !1,
            I: !1,
            R: {},
            l: t,
            t: e,
            k: null,
            o: null,
            j: null,
            C: !1
        }
          , o = r
          , i = Gr;
        n && (o = [r],
        i = Yr);
        var s = Proxy.revocable(o, i)
          , a = s.revoke
          , c = s.proxy;
        return r.k = c,
        r.j = a,
        c
    }(t, n) : br("ES5").J(t, n);
    return (n ? n.A : gr()).p.push(r),
    r
}
function Br(e) {
    return or(e) || rr(22, e),
    function e(t) {
        if (!ir(t))
            return t;
        var n, r = t[Vr], o = ar(t);
        if (r) {
            if (!r.P && (r.i < 4 || !br("ES5").K(r)))
                return r.t;
            r.I = !0,
            n = zr(t, o),
            r.I = !1
        } else
            n = zr(t, o);
        return sr(n, (function(t, o) {
            r && function(e, t) {
                return 2 === ar(e) ? e.get(t) : e[t]
            }(r.t, t) === o || lr(n, t, e(o))
        }
        )),
        3 === o ? new Set(n) : n
    }(e)
}
function zr(e, t) {
    switch (t) {
    case 2:
        return new Map(e);
    case 3:
        return Array.from(e)
    }
    return pr(e)
}
nr = qt.useSyncExternalStoreWithSelector,
tn = nr,
Xt = pt;
var Rr, Lr, Nr = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), Ir = "undefined" != typeof Map, Ur = "undefined" != typeof Set, Kr = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, Fr = Nr ? Symbol.for("immer-nothing") : ((Rr = {})["immer-nothing"] = !0,
Rr), Hr = Nr ? Symbol.for("immer-draftable") : "__$immer_draftable", Vr = Nr ? Symbol.for("immer-state") : "__$immer_state", Wr = "" + Object.prototype.constructor, qr = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Object.getOwnPropertyNames, Xr = Object.getOwnPropertyDescriptors || function(e) {
    var t = {};
    return qr(e).forEach((function(n) {
        t[n] = Object.getOwnPropertyDescriptor(e, n)
    }
    )),
    t
}
, $r = {}, Gr = {
    get: function(e, t) {
        if (t === Vr)
            return e;
        var n, r, o, i = hr(e);
        if (!cr(i, t))
            return n = e,
            (o = jr(i, t)) ? "value"in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(n.k) : void 0;
        var s = i[t];
        return e.I || !ir(s) ? s : s === Mr(e.t, t) ? (Dr(e),
        e.o[t] = Tr(e.A.h, s, e)) : s
    },
    has: function(e, t) {
        return t in hr(e)
    },
    ownKeys: function(e) {
        return Reflect.ownKeys(hr(e))
    },
    set: function(e, t, n) {
        var r = jr(hr(e), t);
        if (null == r ? void 0 : r.set)
            return r.set.call(e.k, n),
            !0;
        if (!e.P) {
            var o = Mr(hr(e), t)
              , i = null == o ? void 0 : o[Vr];
            if (i && i.t === n)
                return e.o[t] = n,
                e.R[t] = !1,
                !0;
            if (ur(n, o) && (void 0 !== n || cr(e.t, t)))
                return !0;
            Dr(e),
            Ar(e)
        }
        return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n,
        e.R[t] = !0),
        !0
    },
    deleteProperty: function(e, t) {
        return void 0 !== Mr(e.t, t) || t in e.t ? (e.R[t] = !1,
        Dr(e),
        Ar(e)) : delete e.R[t],
        e.o && delete e.o[t],
        !0
    },
    getOwnPropertyDescriptor: function(e, t) {
        var n = hr(e)
          , r = Reflect.getOwnPropertyDescriptor(n, t);
        return r ? {
            writable: !0,
            configurable: 1 !== e.i || "length" !== t,
            enumerable: r.enumerable,
            value: n[t]
        } : r
    },
    defineProperty: function() {
        rr(11)
    },
    getPrototypeOf: function(e) {
        return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function() {
        rr(12)
    }
}, Yr = {};
sr(Gr, (function(e, t) {
    Yr[e] = function() {
        return arguments[0] = arguments[0][0],
        t.apply(this, arguments)
    }
}
)),
Yr.deleteProperty = function(e, t) {
    return Yr.set.call(this, e, t, void 0)
}
,
Yr.set = function(e, t, n) {
    return Gr.set.call(this, e[0], t, n, e[0])
}
;
var Qr = function() {
    function e(e) {
        var t = this;
        this.O = Kr,
        this.D = !0,
        this.produce = function(e, n, r) {
            if ("function" == typeof e && "function" != typeof n) {
                var o = n;
                n = e;
                var i = t;
                return function(e) {
                    var t = this;
                    void 0 === e && (e = o);
                    for (var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                        s[a - 1] = arguments[a];
                    return i.produce(e, (function(e) {
                        var r;
                        return (r = n).call.apply(r, [t, e].concat(s))
                    }
                    ))
                }
            }
            var s;
            if ("function" != typeof n && rr(6),
            void 0 !== r && "function" != typeof r && rr(7),
            ir(e)) {
                var a = xr(t)
                  , c = Tr(t, e, void 0)
                  , l = !0;
                try {
                    s = n(c),
                    l = !1
                } finally {
                    l ? wr(a) : kr(a)
                }
                return "undefined" != typeof Promise && s instanceof Promise ? s.then((function(e) {
                    return _r(a, r),
                    Sr(e, a)
                }
                ), (function(e) {
                    throw wr(a),
                    e
                }
                )) : (_r(a, r),
                Sr(s, a))
            }
            if (!e || "object" != typeof e) {
                if (void 0 === (s = n(e)) && (s = e),
                s === Fr && (s = void 0),
                t.D && mr(s, !0),
                r) {
                    var u = []
                      , d = [];
                    br("Patches").M(e, s, u, d),
                    r(u, d)
                }
                return s
            }
            rr(21, e)
        }
        ,
        this.produceWithPatches = function(e, n) {
            if ("function" == typeof e)
                return function(n) {
                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                        o[i - 1] = arguments[i];
                    return t.produceWithPatches(n, (function(t) {
                        return e.apply(void 0, [t].concat(o))
                    }
                    ))
                }
                ;
            var r, o, i = t.produce(e, n, (function(e, t) {
                r = e,
                o = t
            }
            ));
            return "undefined" != typeof Promise && i instanceof Promise ? i.then((function(e) {
                return [e, r, o]
            }
            )) : [i, r, o]
        }
        ,
        "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
        "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
    }
    var t = e.prototype;
    return t.createDraft = function(e) {
        ir(e) || rr(8),
        or(e) && (e = Br(e));
        var t = xr(this)
          , n = Tr(this, e, void 0);
        return n[Vr].C = !0,
        kr(t),
        n
    }
    ,
    t.finishDraft = function(e, t) {
        var n = (e && e[Vr]).A;
        return _r(n, t),
        Sr(void 0, n)
    }
    ,
    t.setAutoFreeze = function(e) {
        this.D = e
    }
    ,
    t.setUseProxies = function(e) {
        e && !Kr && rr(20),
        this.O = e
    }
    ,
    t.applyPatches = function(e, t) {
        var n;
        for (n = t.length - 1; n >= 0; n--) {
            var r = t[n];
            if (0 === r.path.length && "replace" === r.op) {
                e = r.value;
                break
            }
        }
        n > -1 && (t = t.slice(n + 1));
        var o = br("Patches").$;
        return or(e) ? o(e, t) : this.produce(e, (function(e) {
            return o(e, t)
        }
        ))
    }
    ,
    e
}()
  , Jr = new Qr
  , Zr = Jr.produce;
function eo(e) {
    return (eo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function to(e) {
    var t = function(e, t) {
        if ("object" !== eo(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== eo(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" === eo(t) ? t : String(t)
}
function no(e, t, n) {
    return (t = to(t))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function ro(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function oo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ro(Object(n), !0).forEach((function(t) {
            no(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ro(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function io(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
Jr.produceWithPatches.bind(Jr),
Jr.setAutoFreeze.bind(Jr),
Jr.setUseProxies.bind(Jr),
Jr.applyPatches.bind(Jr),
Jr.createDraft.bind(Jr),
Jr.finishDraft.bind(Jr);
var so = "function" == typeof Symbol && Symbol.observable || "@@observable"
  , ao = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , co = {
    INIT: "@@redux/INIT" + ao(),
    REPLACE: "@@redux/REPLACE" + ao(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + ao()
    }
};
function lo(e, t, n) {
    var r;
    if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3])
        throw new Error(io(0));
    if ("function" == typeof t && void 0 === n && (n = t,
    t = void 0),
    void 0 !== n) {
        if ("function" != typeof n)
            throw new Error(io(1));
        return n(lo)(e, t)
    }
    if ("function" != typeof e)
        throw new Error(io(2));
    var o = e
      , i = t
      , s = []
      , a = s
      , c = !1;
    function l() {
        a === s && (a = s.slice())
    }
    function u() {
        if (c)
            throw new Error(io(3));
        return i
    }
    function d(e) {
        if ("function" != typeof e)
            throw new Error(io(4));
        if (c)
            throw new Error(io(5));
        var t = !0;
        return l(),
        a.push(e),
        function() {
            if (t) {
                if (c)
                    throw new Error(io(6));
                t = !1,
                l();
                var n = a.indexOf(e);
                a.splice(n, 1),
                s = null
            }
        }
    }
    function f(e) {
        if (!function(e) {
            if ("object" != typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }(e))
            throw new Error(io(7));
        if (void 0 === e.type)
            throw new Error(io(8));
        if (c)
            throw new Error(io(9));
        try {
            c = !0,
            i = o(i, e)
        } finally {
            c = !1
        }
        for (var t = s = a, n = 0; n < t.length; n++) {
            (0,
            t[n])()
        }
        return e
    }
    return f({
        type: co.INIT
    }),
    (r = {
        dispatch: f,
        subscribe: d,
        getState: u,
        replaceReducer: function(e) {
            if ("function" != typeof e)
                throw new Error(io(10));
            o = e,
            f({
                type: co.REPLACE
            })
        }
    })[so] = function() {
        var e, t = d;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e || null === e)
                    throw new Error(io(11));
                function n() {
                    e.next && e.next(u())
                }
                return n(),
                {
                    unsubscribe: t(n)
                }
            }
        })[so] = function() {
            return this
        }
        ,
        e
    }
    ,
    r
}
function uo(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        "function" == typeof e[o] && (n[o] = e[o])
    }
    var i, s = Object.keys(n);
    try {
        !function(e) {
            Object.keys(e).forEach((function(t) {
                var n = e[t];
                if (void 0 === n(void 0, {
                    type: co.INIT
                }))
                    throw new Error(io(12));
                if (void 0 === n(void 0, {
                    type: co.PROBE_UNKNOWN_ACTION()
                }))
                    throw new Error(io(13))
            }
            ))
        }(n)
    } catch (a) {
        i = a
    }
    return function(e, t) {
        if (void 0 === e && (e = {}),
        i)
            throw i;
        for (var r = !1, o = {}, a = 0; a < s.length; a++) {
            var c = s[a]
              , l = n[c]
              , u = e[c]
              , d = l(u, t);
            if (void 0 === d)
                throw t && t.type,
                new Error(io(14));
            o[c] = d,
            r = r || d !== u
        }
        return (r = r || s.length !== Object.keys(e).length) ? o : e
    }
}
function fo() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    }
    : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }
    ))
}
function ho() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function(e) {
        return function() {
            var n = e.apply(void 0, arguments)
              , r = function() {
                throw new Error(io(15))
            }
              , o = {
                getState: n.getState,
                dispatch: function() {
                    return r.apply(void 0, arguments)
                }
            }
              , i = t.map((function(e) {
                return e(o)
            }
            ));
            return r = fo.apply(void 0, i)(n.dispatch),
            oo(oo({}, n), {}, {
                dispatch: r
            })
        }
    }
}
function po(e) {
    return function(t) {
        var n = t.dispatch
          , r = t.getState;
        return function(t) {
            return function(o) {
                return "function" == typeof o ? o(n, r, e) : t(o)
            }
        }
    }
}
var mo = po();
mo.withExtraArgument = po;
const vo = mo;
var yo = function() {
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(t, n)
    };
    return function(t, n) {
        if ("function" != typeof n && null !== n)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function r() {
            this.constructor = t
        }
        e(t, n),
        t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
        new r)
    }
}()
  , bo = function(e, t) {
    var n, r, o, i, s = {
        label: 0,
        sent: function() {
            if (1 & o[0])
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(i) {
        return function(a) {
            return function(i) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; s; )
                    try {
                        if (n = 1,
                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                        0) : r.next) && !(o = o.call(r, i[1])).done)
                            return o;
                        switch (r = 0,
                        o && (i = [2 & i[0], o.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4:
                            return s.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            s.label++,
                            r = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = s.ops.pop(),
                            s.trys.pop();
                            continue;
                        default:
                            if (!(o = s.trys,
                            (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                s.label = i[1];
                                break
                            }
                            if (6 === i[0] && s.label < o[1]) {
                                s.label = o[1],
                                o = i;
                                break
                            }
                            if (o && s.label < o[2]) {
                                s.label = o[2],
                                s.ops.push(i);
                                break
                            }
                            o[2] && s.ops.pop(),
                            s.trys.pop();
                            continue
                        }
                        i = t.call(e, s)
                    } catch (a) {
                        i = [6, a],
                        r = 0
                    } finally {
                        n = o = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }([i, a])
        }
    }
}
  , go = function(e, t) {
    for (var n = 0, r = t.length, o = e.length; n < r; n++,
    o++)
        e[o] = t[n];
    return e
}
  , _o = Object.defineProperty
  , wo = Object.defineProperties
  , ko = Object.getOwnPropertyDescriptors
  , xo = Object.getOwnPropertySymbols
  , Co = Object.prototype.hasOwnProperty
  , So = Object.prototype.propertyIsEnumerable
  , Eo = function(e, t, n) {
    return t in e ? _o(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
}
  , Po = function(e, t) {
    for (var n in t || (t = {}))
        Co.call(t, n) && Eo(e, n, t[n]);
    if (xo)
        for (var r = 0, o = xo(t); r < o.length; r++) {
            n = o[r];
            So.call(t, n) && Eo(e, n, t[n])
        }
    return e
}
  , Oo = function(e, t) {
    return wo(e, ko(t))
}
  , Mo = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (0 !== arguments.length)
        return "object" == typeof arguments[0] ? fo : fo.apply(null, arguments)
}
;
function jo(e, t) {
    function n() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        if (t) {
            var o = t.apply(void 0, n);
            if (!o)
                throw new Error("prepareAction did not return an object");
            return Po(Po({
                type: e,
                payload: o.payload
            }, "meta"in o && {
                meta: o.meta
            }), "error"in o && {
                error: o.error
            })
        }
        return {
            type: e,
            payload: n[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }
    ,
    n.type = e,
    n.match = function(t) {
        return t.type === e
    }
    ,
    n
}
var Ao = function(e) {
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        var o = e.apply(this, n) || this;
        return Object.setPrototypeOf(o, t.prototype),
        o
    }
    return yo(t, e),
    Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.concat = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        return e.prototype.concat.apply(this, t)
    }
    ,
    t.prototype.prepend = function() {
        for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
        return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, go([void 0], e[0].concat(this)))) : new (t.bind.apply(t, go([void 0], e.concat(this))))
    }
    ,
    t
}(Array)
  , Do = function(e) {
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        var o = e.apply(this, n) || this;
        return Object.setPrototypeOf(o, t.prototype),
        o
    }
    return yo(t, e),
    Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.concat = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        return e.prototype.concat.apply(this, t)
    }
    ,
    t.prototype.prepend = function() {
        for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
        return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, go([void 0], e[0].concat(this)))) : new (t.bind.apply(t, go([void 0], e.concat(this))))
    }
    ,
    t
}(Array);
function To(e) {
    return ir(e) ? Zr(e, (function() {}
    )) : e
}
function Bo() {
    return function(e) {
        return function(e) {
            void 0 === e && (e = {});
            var t = e.thunk
              , n = void 0 === t || t;
            e.immutableCheck,
            e.serializableCheck,
            e.actionCreatorCheck;
            var r = new Ao;
            n && ("boolean" == typeof n ? r.push(vo) : r.push(vo.withExtraArgument(n.extraArgument)));
            return r
        }(e)
    }
}
var zo = !0;
function Ro(e) {
    var t, n = Bo(), r = e || {}, o = r.reducer, i = void 0 === o ? void 0 : o, s = r.middleware, a = void 0 === s ? n() : s, c = r.devTools, l = void 0 === c || c, u = r.preloadedState, d = void 0 === u ? void 0 : u, f = r.enhancers, h = void 0 === f ? void 0 : f;
    if ("function" == typeof i)
        t = i;
    else {
        if (!function(e) {
            if ("object" != typeof e || null === e)
                return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t)
                return !0;
            for (var n = t; null !== Object.getPrototypeOf(n); )
                n = Object.getPrototypeOf(n);
            return t === n
        }(i))
            throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
        t = uo(i)
    }
    var p = a;
    "function" == typeof p && (p = p(n));
    var m = ho.apply(void 0, p)
      , v = fo;
    l && (v = Mo(Po({
        trace: !zo
    }, "object" == typeof l && l)));
    var y = new Do(m)
      , b = y;
    return Array.isArray(h) ? b = go([m], h) : "function" == typeof h && (b = h(y)),
    lo(t, d, v.apply(void 0, b))
}
function Lo(e) {
    var t, n = {}, r = [], o = {
        addCase: function(e, t) {
            var r = "string" == typeof e ? e : e.type;
            if (!r)
                throw new Error("`builder.addCase` cannot be called with an empty action type");
            if (r in n)
                throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
            return n[r] = t,
            o
        },
        addMatcher: function(e, t) {
            return r.push({
                matcher: e,
                reducer: t
            }),
            o
        },
        addDefaultCase: function(e) {
            return t = e,
            o
        }
    };
    return e(o),
    [n, r, t]
}
function No(e) {
    var t = e.name;
    if (!t)
        throw new Error("`name` is a required option for createSlice");
    var n, r = "function" == typeof e.initialState ? e.initialState : To(e.initialState), o = e.reducers || {}, i = Object.keys(o), s = {}, a = {}, c = {};
    function l() {
        var t = "function" == typeof e.extraReducers ? Lo(e.extraReducers) : [e.extraReducers]
          , n = t[0]
          , o = void 0 === n ? {} : n
          , i = t[1]
          , s = void 0 === i ? [] : i
          , c = t[2]
          , l = void 0 === c ? void 0 : c
          , u = Po(Po({}, o), a);
        return function(e, t, n, r) {
            void 0 === n && (n = []);
            var o, i = "function" == typeof t ? Lo(t) : [t, n, r], s = i[0], a = i[1], c = i[2];
            if ("function" == typeof e)
                o = function() {
                    return To(e())
                }
                ;
            else {
                var l = To(e);
                o = function() {
                    return l
                }
            }
            function u(e, t) {
                void 0 === e && (e = o());
                var n = go([s[t.type]], a.filter((function(e) {
                    return (0,
                    e.matcher)(t)
                }
                )).map((function(e) {
                    return e.reducer
                }
                )));
                return 0 === n.filter((function(e) {
                    return !!e
                }
                )).length && (n = [c]),
                n.reduce((function(e, n) {
                    if (n) {
                        var r;
                        if (or(e))
                            return void 0 === (r = n(e, t)) ? e : r;
                        if (ir(e))
                            return Zr(e, (function(e) {
                                return n(e, t)
                            }
                            ));
                        if (void 0 === (r = n(e, t))) {
                            if (null === e)
                                return e;
                            throw Error("A case reducer on a non-draftable value must not return undefined")
                        }
                        return r
                    }
                    return e
                }
                ), e)
            }
            return u.getInitialState = o,
            u
        }(r, (function(e) {
            for (var t in u)
                e.addCase(t, u[t]);
            for (var n = 0, r = s; n < r.length; n++) {
                var o = r[n];
                e.addMatcher(o.matcher, o.reducer)
            }
            l && e.addDefaultCase(l)
        }
        ))
    }
    return i.forEach((function(e) {
        var n, r, i = o[e], l = t + "/" + e;
        "reducer"in i ? (n = i.reducer,
        r = i.prepare) : n = i,
        s[e] = n,
        a[l] = n,
        c[e] = r ? jo(l, r) : jo(l)
    }
    )),
    {
        name: t,
        reducer: function(e, t) {
            return n || (n = l()),
            n(e, t)
        },
        actions: c,
        caseReducers: s,
        getInitialState: function() {
            return n || (n = l()),
            n.getInitialState()
        }
    }
}
var Io = ["name", "message", "stack", "code"]
  , Uo = function() {
    return function(e, t) {
        this.payload = e,
        this.meta = t
    }
}()
  , Ko = function() {
    return function(e, t) {
        this.payload = e,
        this.meta = t
    }
}()
  , Fo = function(e) {
    if ("object" == typeof e && null !== e) {
        for (var t = {}, n = 0, r = Io; n < r.length; n++) {
            var o = r[n];
            "string" == typeof e[o] && (t[o] = e[o])
        }
        return t
    }
    return {
        message: String(e)
    }
};
function Ho(e) {
    if (e.meta && e.meta.rejectedWithValue)
        throw e.payload;
    if (e.error)
        throw e.error;
    return e.payload
}
!function() {
    function e(e, t, n) {
        var r = jo(e + "/fulfilled", (function(e, t, n, r) {
            return {
                payload: e,
                meta: Oo(Po({}, r || {}), {
                    arg: n,
                    requestId: t,
                    requestStatus: "fulfilled"
                })
            }
        }
        ))
          , o = jo(e + "/pending", (function(e, t, n) {
            return {
                payload: void 0,
                meta: Oo(Po({}, n || {}), {
                    arg: t,
                    requestId: e,
                    requestStatus: "pending"
                })
            }
        }
        ))
          , i = jo(e + "/rejected", (function(e, t, r, o, i) {
            return {
                payload: o,
                error: (n && n.serializeError || Fo)(e || "Rejected"),
                meta: Oo(Po({}, i || {}), {
                    arg: r,
                    requestId: t,
                    rejectedWithValue: !!o,
                    requestStatus: "rejected",
                    aborted: "AbortError" === (null == e ? void 0 : e.name),
                    condition: "ConditionError" === (null == e ? void 0 : e.name)
                })
            }
        }
        ))
          , s = "undefined" != typeof AbortController ? AbortController : function() {
            function e() {
                this.signal = {
                    aborted: !1,
                    addEventListener: function() {},
                    dispatchEvent: function() {
                        return !1
                    },
                    onabort: function() {},
                    removeEventListener: function() {},
                    reason: void 0,
                    throwIfAborted: function() {}
                }
            }
            return e.prototype.abort = function() {}
            ,
            e
        }();
        return Object.assign((function(e) {
            return function(a, c, l) {
                var u, d = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : function(e) {
                    void 0 === e && (e = 21);
                    for (var t = "", n = e; n--; )
                        t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64 * Math.random() | 0];
                    return t
                }(), f = new s;
                function h(e) {
                    u = e,
                    f.abort()
                }
                var p = function() {
                    return s = this,
                    p = null,
                    m = function() {
                        var s, p, m, v, y, b;
                        return bo(this, (function(g) {
                            switch (g.label) {
                            case 0:
                                return g.trys.push([0, 4, , 5]),
                                v = null == (s = null == n ? void 0 : n.condition) ? void 0 : s.call(n, e, {
                                    getState: c,
                                    extra: l
                                }),
                                null === (_ = v) || "object" != typeof _ || "function" != typeof _.then ? [3, 2] : [4, v];
                            case 1:
                                v = g.sent(),
                                g.label = 2;
                            case 2:
                                if (!1 === v || f.signal.aborted)
                                    throw {
                                        name: "ConditionError",
                                        message: "Aborted due to condition callback returning false."
                                    };
                                return y = new Promise((function(e, t) {
                                    return f.signal.addEventListener("abort", (function() {
                                        return t({
                                            name: "AbortError",
                                            message: u || "Aborted"
                                        })
                                    }
                                    ))
                                }
                                )),
                                a(o(d, e, null == (p = null == n ? void 0 : n.getPendingMeta) ? void 0 : p.call(n, {
                                    requestId: d,
                                    arg: e
                                }, {
                                    getState: c,
                                    extra: l
                                }))),
                                [4, Promise.race([y, Promise.resolve(t(e, {
                                    dispatch: a,
                                    getState: c,
                                    extra: l,
                                    requestId: d,
                                    signal: f.signal,
                                    abort: h,
                                    rejectWithValue: function(e, t) {
                                        return new Uo(e,t)
                                    },
                                    fulfillWithValue: function(e, t) {
                                        return new Ko(e,t)
                                    }
                                })).then((function(t) {
                                    if (t instanceof Uo)
                                        throw t;
                                    return t instanceof Ko ? r(t.payload, d, e, t.meta) : r(t, d, e)
                                }
                                ))])];
                            case 3:
                                return m = g.sent(),
                                [3, 5];
                            case 4:
                                return b = g.sent(),
                                m = b instanceof Uo ? i(null, d, e, b.payload, b.meta) : i(b, d, e),
                                [3, 5];
                            case 5:
                                return n && !n.dispatchConditionRejection && i.match(m) && m.meta.condition || a(m),
                                [2, m]
                            }
                            var _
                        }
                        ))
                    }
                    ,
                    new Promise((function(e, t) {
                        var n = function(e) {
                            try {
                                o(m.next(e))
                            } catch (n) {
                                t(n)
                            }
                        }
                          , r = function(e) {
                            try {
                                o(m.throw(e))
                            } catch (n) {
                                t(n)
                            }
                        }
                          , o = function(t) {
                            return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r)
                        };
                        o((m = m.apply(s, p)).next())
                    }
                    ));
                    var s, p, m
                }();
                return Object.assign(p, {
                    abort: h,
                    requestId: d,
                    arg: e,
                    unwrap: function() {
                        return p.then(Ho)
                    }
                })
            }
        }
        ), {
            pending: o,
            rejected: i,
            fulfilled: r,
            typePrefix: e
        })
    }
    e.withTypes = function() {
        return e
    }
}();
var Vo = "listenerMiddleware";
jo(Vo + "/add"),
jo(Vo + "/removeAll"),
jo(Vo + "/remove"),
"function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : "undefined" != typeof global ? global : globalThis),
function() {
    function e(e, t) {
        var n = s[e];
        return n ? n.enumerable = t : s[e] = n = {
            configurable: !0,
            enumerable: t,
            get: function() {
                var t = this[Vr];
                return Gr.get(t, e)
            },
            set: function(t) {
                var n = this[Vr];
                Gr.set(n, e, t)
            }
        },
        n
    }
    function t(e) {
        for (var t = e.length - 1; t >= 0; t--) {
            var o = e[t][Vr];
            if (!o.P)
                switch (o.i) {
                case 5:
                    r(o) && Ar(o);
                    break;
                case 4:
                    n(o) && Ar(o)
                }
        }
    }
    function n(e) {
        for (var t = e.t, n = e.k, r = qr(n), o = r.length - 1; o >= 0; o--) {
            var i = r[o];
            if (i !== Vr) {
                var s = t[i];
                if (void 0 === s && !cr(t, i))
                    return !0;
                var a = n[i]
                  , c = a && a[Vr];
                if (c ? c.t !== s : !ur(a, s))
                    return !0
            }
        }
        var l = !!t[Vr];
        return r.length !== qr(t).length + (l ? 0 : 1)
    }
    function r(e) {
        var t = e.k;
        if (t.length !== e.t.length)
            return !0;
        var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
        if (n && !n.get)
            return !0;
        for (var r = 0; r < t.length; r++)
            if (!t.hasOwnProperty(r))
                return !0;
        return !1
    }
    var o, i, s = {};
    i = {
        J: function(t, n) {
            var r = Array.isArray(t)
              , o = function(t, n) {
                if (t) {
                    for (var r = Array(n.length), o = 0; o < n.length; o++)
                        Object.defineProperty(r, "" + o, e(o, !0));
                    return r
                }
                var i = Xr(n);
                delete i[Vr];
                for (var s = qr(i), a = 0; a < s.length; a++) {
                    var c = s[a];
                    i[c] = e(c, t || !!i[c].enumerable)
                }
                return Object.create(Object.getPrototypeOf(n), i)
            }(r, t)
              , i = {
                i: r ? 5 : 4,
                A: n ? n.A : gr(),
                P: !1,
                I: !1,
                R: {},
                l: n,
                t: t,
                k: o,
                o: null,
                g: !1,
                C: !1
            };
            return Object.defineProperty(o, Vr, {
                value: i,
                writable: !0
            }),
            o
        },
        S: function(e, n, o) {
            o ? or(n) && n[Vr].A === e && t(e.p) : (e.u && function e(t) {
                if (t && "object" == typeof t) {
                    var n = t[Vr];
                    if (n) {
                        var o = n.t
                          , i = n.k
                          , s = n.R
                          , a = n.i;
                        if (4 === a)
                            sr(i, (function(t) {
                                t !== Vr && (void 0 !== o[t] || cr(o, t) ? s[t] || e(i[t]) : (s[t] = !0,
                                Ar(n)))
                            }
                            )),
                            sr(o, (function(e) {
                                void 0 !== i[e] || cr(i, e) || (s[e] = !1,
                                Ar(n))
                            }
                            ));
                        else if (5 === a) {
                            if (r(n) && (Ar(n),
                            s.length = !0),
                            i.length < o.length)
                                for (var c = i.length; c < o.length; c++)
                                    s[c] = !1;
                            else
                                for (var l = o.length; l < i.length; l++)
                                    s[l] = !0;
                            for (var u = Math.min(i.length, o.length), d = 0; d < u; d++)
                                i.hasOwnProperty(d) || (s[d] = !0),
                                void 0 === s[d] && e(i[d])
                        }
                    }
                }
            }(e.p[0]),
            t(e.p))
        },
        K: function(e) {
            return 4 === e.i ? n(e) : r(e)
        }
    },
    $r[o = "ES5"] || ($r[o] = i)
}();
class Wo {
    constructor() {
        t(this, "length", 0),
        t(this, "storage", {})
    }
    setItem(e, t) {
        this.storage[e] = t,
        this.length = Object.keys(this.storage).length
    }
    getItem(e) {
        const t = this.storage[e];
        return void 0 === t ? null : t
    }
    removeItem(e) {
        delete this.storage[e],
        this.length = Object.keys(this.storage).length
    }
    key(e) {
        const t = Object.keys(this.storage);
        return void 0 === t[e] ? null : t[e]
    }
    clear() {
        this.length = 0,
        this.storage = {}
    }
}
const qo = new class {
    constructor(e, n) {
        t(this, "backend"),
        t(this, "length"),
        t(this, "prefix"),
        this.prefix = n;
        try {
            this.backend = e || localStorage,
            this.testBackend()
        } catch (r) {
            this.backend = new Wo
        }
        this.length = this.backend.length,
        "function" == typeof this.backend.sync && (this.sync = e=>{
            this.backend.sync(e)
        }
        )
    }
    testBackend() {
        const e = this.prefix + ".test.record";
        this.backend.setItem(e, "123");
        const t = this.backend.getItem(e);
        this.backend.removeItem(e);
        if (!("123" === t && null === this.backend.getItem(e)))
            throw new Error("Storage backend is not working properly")
    }
    setLocalStoragePrefix(e) {
        this.prefix = e
    }
    clear() {
        if (!this.backend.length)
            return;
        const e = [];
        for (let t = 0; t < this.backend.length; ++t) {
            const n = this.backend.key(t);
            n && n.startsWith(this.prefix) && e.push(n)
        }
        for (const t of e)
            this.backend.removeItem(t);
        this.length = this.backend.length
    }
    key(e) {
        return this.backend.key(e)
    }
    setItem(e, t) {
        if (!t || void 0 === t.length || 0 === t.length)
            return void this.writeStringToKey(e, "");
        let n = 0;
        for (; n < t.length; ) {
            let r = t.substr(n, 1024);
            n += r.length,
            n < t.length && (r += "@"),
            this.writeStringToKey(e, r),
            e += "."
        }
    }
    getItem(e) {
        let t = this.readStringFromKey(e);
        if (null === t)
            return null;
        if (0 === t.length)
            return t;
        for (; "@" === t[t.length - 1]; ) {
            t = t.substr(0, t.length - 1),
            e += ".";
            const n = this.readStringFromKey(e);
            t += null === n ? "" : n
        }
        return t
    }
    removeItem(e) {
        this.backend.removeItem(this.prefix + e),
        this.length = this.backend.length
    }
    writeStringToKey(e, t) {
        this.backend.setItem(this.prefix + e, t),
        this.length = this.backend.length
    }
    readStringFromKey(e) {
        return this.backend.getItem(this.prefix + e)
    }
}
(void 0,"jsdos.8.");
class Xo {
    constructor() {
        t(this, "owner", "")
    }
    close() {}
    put(e, t) {
        return Promise.resolve()
    }
    get(e, t) {
        return void 0 !== t ? Promise.resolve(t) : Promise.reject(new Error("Cache is not supported on this host"))
    }
    del(e) {
        return Promise.resolve()
    }
    keys() {
        return Promise.resolve([])
    }
    forEach(e) {
        return Promise.resolve()
    }
}
class $o {
    constructor(e, n, r) {
        if (t(this, "owner"),
        t(this, "storeName", "files"),
        t(this, "indexedDB"),
        t(this, "db", null),
        this.owner = e,
        this.indexedDB = "undefined" == typeof window ? void 0 : window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
        this.indexedDB)
            try {
                const t = this.indexedDB.open("js-dos-cache (" + e + ")", 1);
                t.onerror = e=>{
                    var n;
                    r("Can't open cache database: " + (null == (n = t.error) ? void 0 : n.message))
                }
                ,
                t.onsuccess = e=>{
                    this.db = t.result,
                    n(this)
                }
                ,
                t.onupgradeneeded = e=>{
                    try {
                        this.db = t.result,
                        this.db.onerror = e=>{
                            r("Can't upgrade cache database")
                        }
                        ;
                        this.db.createObjectStore(this.storeName).createIndex("key", "", {
                            unique: !0,
                            multiEntry: !1
                        })
                    } catch (n) {
                        r("Can't upgrade cache database")
                    }
                }
            } catch (o) {
                r("Can't open cache database: " + o.message)
            }
        else
            r("Indexed db is not supported on this host")
    }
    close() {
        null !== this.db && (this.db.close(),
        this.db = null)
    }
    put(e, t) {
        return new Promise(((n,r)=>{
            if (null === this.db)
                return void n();
            const o = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).put(t.buffer, e);
            o.onerror = ()=>r,
            o.onsuccess = ()=>n()
        }
        ))
    }
    del(e) {
        return new Promise(((t,n)=>{
            if (null === this.db)
                return void t();
            const r = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).delete(e);
            r.onerror = ()=>n,
            r.onsuccess = ()=>t()
        }
        ))
    }
    get(e, t) {
        return new Promise(((n,r)=>{
            function o(e) {
                void 0 === t ? r(new Error(e)) : n(t)
            }
            if (null === this.db)
                return void o("db is not initalized");
            const i = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(e);
            i.onerror = ()=>r(new Error("Can't read value for key '" + e + "'")),
            i.onsuccess = ()=>{
                i.result ? n(new Uint8Array(i.result)) : o("Result is empty for key '" + e + "', result: " + i.result)
            }
        }
        ))
    }
    keys() {
        return new Promise(((e,t)=>{
            if (null === this.db)
                return void e([]);
            const n = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).index("key").getAllKeys();
            n.onerror = ()=>t,
            n.onsuccess = t=>{
                const n = t.target.result;
                e(n)
            }
        }
        ))
    }
    forEach(e) {
        return new Promise(((t,n)=>{
            if (null === this.db)
                return void t();
            const r = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).openCursor();
            r.onerror = ()=>n,
            r.onsuccess = n=>{
                const r = n.target.result;
                r ? (e(r.key.toString(), new Uint8Array(r.value)),
                r.continue()) : t()
            }
        }
        ))
    }
}
function Go(e) {
    return new Promise((t=>{
        new $o(e,t,(e=>{
            console.error("Can't open IndexedDB cache", e),
            t(new Xo)
        }
        ))
    }
    ))
}
const Yo = "cached.account"
  , Qo = (()=>{
    const e = new URLSearchParams(location.search).get("jsdos_token");
    if (null !== e)
        return Zo(e),
        history.replaceState(null, "", location.href.substring(0, location.href.indexOf("?"))),
        null;
    {
        const e = qo.getItem(Yo)
          , t = null !== e ? JSON.parse(e) : null;
        return null !== t && t.token.validUntilMs - Date.now() > 36e5 ? t : null
    }
}
)()
  , Jo = No({
    name: "auth",
    initialState: {
        loginUrl: location.href,
        account: Qo,
        ready: null !== Qo
    },
    reducers: {
        login: (e,t)=>{
            Zo(t.payload.token.refresh_token),
            e.account = t.payload,
            e.account.premium = e.account.premium || "dz.caiiiycuk@gmail.com" === e.account.email,
            qo.setItem(Yo, JSON.stringify(t.payload)),
            t.asyncStore((e=>{
                "dz.caiiiycuk@gmail.com" === t.payload.email && e.dispatch(Ci.actions.setSockdriveWrite(!1)),
                Go(t.payload.email).then((t=>mi(e).cache = t)).catch(console.error).finally((()=>{
                    e.dispatch(Jo.actions.ready())
                }
                ))
            }
            ))
        }
        ,
        logout: (e,t)=>{
            ei(),
            qo.removeItem(Yo),
            t.asyncStore((e=>{
                Go("guest").then((t=>mi(e).cache = t)).catch(console.error)
            }
            )),
            e.account = null
        }
        ,
        ready: e=>{
            e.ready = !0
        }
        ,
        setLoginUrl: (e,t)=>{
            e.loginUrl = t.payload
        }
    }
});
function Zo(e) {
    if (null !== e)
        return qo.setItem("cached.rt", e);
    ei()
}
function ei() {
    qo.removeItem("cached.rt")
}
const ti = {
    ru: {
        mobile_controls: "Моибльное управление",
        mirrored_controls: "Отразить управление",
        scale_controls: "Масштаб управления",
        enter_name_of_drive: "Введите название диска",
        ws_outdated: "Необходимо обновить DOS Браузер",
        update: "Обновить",
        preloading_sockdrive: "Загрузка",
        filter: "Фильтр",
        add: "Добавить",
        logout: "Выйти",
        please_login: "Войдите в аккаунт",
        features: "Функции",
        premium: "Подписка",
        buy: "Купить",
        experimental_features: "Доступ к экспериентальным функциям",
        cloud_saves: "Облачные сохранения",
        writeable_fat32: "FAT32 диски",
        net_no_limits: "Выбор сервера для стевой игры",
        unlock_options: "Доступ ко всем настройкам",
        error: "Упс... Что-то пошло не так...",
        consult_logs: "Проверьте логи браузера",
        bundle_loading: "Загрузка бандла",
        bundle_config: "Чтение конфигурации",
        try_free: "дней бесплатно",
        upload_file: "Выбирите архив jsdos/zip что бы начать...",
        emulation_backend: "Эмуляция",
        render_backend: "Рендер",
        render_aspect: "Соотношение сторон",
        worker: "Фоновый поток",
        mouse_sensitivity: "Чувст. мыши",
        mouse_lock: "Захват мыши",
        volume: "Громкость",
        pause: "Пауза",
        dosboxconf_template: "dosbox.conf шаблон:",
        preview: "Превью",
        continue: "Продолжить",
        skip: "Пропустить",
        loading: "Загрузка",
        extract_loading: "Распаковка архива",
        extract_long_time: "Может занять длительное время, пожалуйста ждите...",
        theme: "Тема",
        create_empty: "Создать пустой бандл",
        uploading_file: "Загрузка файла",
        fs_restart: "Вы хотите пересобрать бандл используя эту FS?",
        please_wait: "Пожалуйста подождите",
        making_bundle: "Создаем бандл",
        size: "Размер",
        room: "Команта",
        server: "Сервер",
        load_by_url: "Загрузить по ссылке",
        enter_url: "Введите ссылку",
        load: "Загрузить",
        stored: "Сохраненные",
        delete: "Удалить",
        editor: "Редактор",
        download: "Скачать",
        changes: "Сохранения",
        account_not_ready: "Пропустить загрузку сохранений",
        loading_saves: "Загрузка сохранений",
        success: "Успешно",
        unable_to_save: "Ошибка записи",
        not_premium: "Подключить подписку",
        copy_net_link: "Отправьте ссылку на подключение",
        copied: "Скопировано",
        image_rendering: "Обработка изображения",
        read_only_access: "Диск FAT32 открыт только для чтения",
        fix: "Исправить",
        close: "Закрыть",
        cancle: "Отказаться",
        manage: "Управлять",
        unable_to_cancle_subscription: "Не удалось отменить подписку",
        subscription_cancelled: "Подписка отменена",
        hardware: "Аппаратное ускорение",
        net_drives: "Сетевые диски",
        fat_write: "FAT запись",
        play: "Запустить",
        system_cursor: "Системный курсор"
    },
    en: {
        play: "Start",
        system_cursor: "System cursor",
        mobile_controls: "Mobile controls",
        mirrored_controls: "Mirror controls",
        scale_controls: "Scale controls",
        enter_name_of_drive: "Enter name of drive",
        ws_outdated: "Must update DOS Browser App",
        update: "Update",
        preloading_sockdrive: "Loading",
        filter: "Filter",
        add: "Add",
        logout: "Logout",
        please_login: "Please login",
        features: "Features",
        premium: "Subscription",
        buy: "Buy",
        experimental_features: "Access to all experimental features",
        cloud_saves: "Cloud saves",
        writeable_fat32: "Writable FAT32",
        net_no_limits: "Change the network region",
        unlock_options: "Unlock all configuration options",
        error: "Oops... Something went wrong...",
        consult_logs: "Please check browser logs",
        bundle_loading: "Bundle loading",
        bundle_config: "Reading config",
        try_free: "days for free",
        upload_file: "Select jsdos/zip file to start...",
        emulation_backend: "Emulation",
        render_backend: "Render",
        render_aspect: "Aspect",
        worker: "Worker thread",
        mouse_sensitivity: "Mouse sens...",
        mouse_lock: "Capture mouse",
        volume: "Volume",
        pause: "Pause",
        dosboxconf_template: "dosbox.conf template:",
        preview: "Preview",
        continue: "Continue",
        skip: "Skip",
        loading: "Loading",
        extract_loading: "Unpacking archive",
        extract_long_time: "Can take long time, please be patient...",
        theme: "Theme",
        create_empty: "Create empty bundle",
        uploading_file: "Uploading file",
        fs_restart: "Do you want to rebuild the bundle using this fs?",
        please_wait: "Please wait",
        making_bundle: "Creating bundle",
        size: "Size",
        room: "Room",
        server: "Server",
        load_by_url: "Load by url",
        enter_url: "Enter url",
        load: "Load",
        stored: "Stored",
        delete: "Delete",
        editor: "Editor",
        download: "Download",
        changes: "Saves",
        account_not_ready: "Skip loading saves",
        loading_saves: "Loading saves",
        success: "Success",
        unable_to_save: "Unable to save",
        not_premium: "Subscribe",
        copy_net_link: "Share this link to connect",
        copied: "Copied",
        image_rendering: "Image rendering",
        read_only_access: "The FAT32 drive is open in read-only mode",
        fix: "Fix",
        close: "Close",
        cancle: "Cancle",
        manage: "Manage",
        unable_to_cancle_subscription: "Unable to cancle subscription",
        subscription_cancelled: "Subscription cancelled",
        hardware: "Hardware acceleration",
        net_drives: "Net drives",
        fat_write: "Writeable FAT"
    }
}
  , ni = navigator.language.startsWith("ru") ? "ru" : "en"
  , ri = No({
    name: "i18n",
    initialState: {
        lang: ni,
        keys: ti[ni]
    },
    reducers: {
        setLang: (e,t)=>{
            e.lang = t.payload,
            e.keys = ti[t.payload]
        }
    }
});
function oi() {
    const e = on((e=>e.i18n.keys));
    return t=>e[t] ?? t
}
const ii = No({
    name: "storage",
    initialState: {
        recived: 0,
        total: 0,
        ready: !1
    },
    reducers: {
        reset: e=>{
            e.recived = -1,
            e.total = 0,
            e.ready = !1
        }
        ,
        progress: (e,t)=>{
            e.recived = t.payload[0],
            e.total = t.payload[1]
        }
        ,
        ready: e=>{
            e.ready = !0
        }
    }
})
  , si = [{
    name: "7.xx",
    backend: "dosbox",
    contents: "[sdl]\nautolock=false\n\nfullscreen=false\nfulldouble=false\nfullresolution=original\nwindowresolution=original\noutput=surface\nsensitivity=100\nwaitonerror=true\npriority=higher,normal\nmapperfile=mapper-jsdos.map\nusescancodes=true\nvsync=false\n[dosbox]\nmachine=svga_s3\n\nlanguage=\ncaptures=capture\nmemsize=16\n[cpu]\ncore=auto\ncputype=auto\ncycles=auto\n\ncycleup=10\ncycledown=20\n[mixer]\nnosound=false\nrate=44100\n\nblocksize=1024\nprebuffer=20\n\n[render]\n# frameskip: How many frames DOSBox skips before drawing one.\n#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.\n#    scaler: Scaler used to enlarge/enhance low resolution modes.\n#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.\n#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.\n\nframeskip=0\naspect=false\nscaler=none\n\n[midi]\n#     mpu401: Type of MPU-401 to emulate.\n#             Possible values: intelligent, uart, none.\n# mididevice: Device that will receive the MIDI data from MPU-401.\n#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.\n# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.\n#               See the README/Manual for more details.\n\nmpu401=intelligent\nmididevice=default\nmidiconfig=\n\n[sblaster]\n#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.\n#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.\n#  sbbase: The IO address of the soundblaster.\n#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.\n#     irq: The IRQ number of the soundblaster.\n#          Possible values: 7, 5, 3, 9, 10, 11, 12.\n#     dma: The DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n#    hdma: The High DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.\n# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.\n#          Possible values: auto, cms, opl2, dualopl2, opl3, none.\n#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).\n#          Possible values: default, compat, fast.\n# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).\n#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.\n\nsbtype=sb16\nsbbase=220\nirq=7\ndma=1\nhdma=5\nsbmixer=true\noplmode=auto\noplemu=default\noplrate=44100\n\n[gus]\n#      gus: Enable the Gravis Ultrasound emulation.\n#  gusrate: Sample rate of Ultrasound emulation.\n#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#  gusbase: The IO base address of the Gravis Ultrasound.\n#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.\n#   gusirq: The IRQ number of the Gravis Ultrasound.\n#           Possible values: 5, 3, 7, 9, 10, 11, 12.\n#   gusdma: The DMA channel of the Gravis Ultrasound.\n#           Possible values: 3, 0, 1, 5, 6, 7.\n# ultradir: Path to Ultrasound directory. In this directory\n#           there should be a MIDI directory that contains\n#           the patch files for GUS playback. Patch sets used\n#           with Timidity should work fine.\n\ngus=false\ngusrate=44100\ngusbase=240\ngusirq=5\ngusdma=3\nultradir=C:\\ULTRASND\n\n[speaker]\n# pcspeaker: Enable PC-Speaker emulation.\n#    pcrate: Sample rate of the PC-Speaker sound generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.\n#            Possible values: auto, on, off.\n# tandyrate: Sample rate of the Tandy 3-Voice generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).\n\npcspeaker=true\npcrate=44100\ntandy=auto\ntandyrate=44100\ndisney=true\n\n[joystick]\n# joysticktype: Type of joystick to emulate: auto (default), none,\n#               2axis (supports two joysticks),\n#               4axis (supports one joystick, first joystick used),\n#               4axis_2 (supports one joystick, second joystick used),\n#               fcs (Thrustmaster), ch (CH Flightstick).\n#               none disables joystick emulation.\n#               auto chooses emulation depending on real joystick(s).\n#               (Remember to reset dosbox's mapperfile if you saved it earlier)\n#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.\n#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).\n#     autofire: continuously fires as long as you keep the button pressed.\n#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.\n#   buttonwrap: enable button wrapping at the number of emulated buttons.\n\njoysticktype=auto\ntimed=true\nautofire=false\nswap34=false\nbuttonwrap=false\n\n[serial]\n# serial1: set type of device connected to com port.\n#          Can be disabled, dummy, modem, nullmodem, directserial.\n#          Additional parameters must be in the same line in the form of\n#          parameter:value. Parameter for all types is irq (optional).\n#          for directserial: realport (required), rxdelay (optional).\n#                           (realport:COM1 realport:ttyS0).\n#          for modem: listenport (optional).\n#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,\n#                         transparent, port, inhsocket (all optional).\n#          Example: serial1=modem listenport:5000\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial2: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial3: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial4: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n\nserial1=dummy\nserial2=dummy\nserial3=disabled\nserial4=disabled\n\n[dos]\n#            xms: Enable XMS support.\n#            ems: Enable EMS support.\n#            umb: Enable UMB support.\n# keyboardlayout: Language code of the keyboard layout (or none).\n\nxms=true\nems=true\numb=true\nkeyboardlayout=auto\n\n[ipx]\n# ipx: Enable ipx over UDP/IP emulation.\n\nipx=true\n[autoexec]\necho off\nmount c .\nc:\n\ntype jsdos~1/readme.txt\necho on\n\n# Generated using https://js-dos.com\n# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█\n# █ ███ █ ██▄ █ ▀ ▄ █ ███ █\n# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █\n# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀\n# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀\n# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄\n# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀\n#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄\n# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀\n# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄\n# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█\n# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█\n# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀\n".replace(/\n/g, "\r\n")
}, {
    name: "DOS 7.1",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\n\n[dosbox]\ntitle=DOS 7.1\nmemsize=64\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\n\n[sblaster]\nsbtype=sb16vibra\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system dos7.1-v1\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load DOS 7.1\necho on\n# \n# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█\n# █ ███ █ ██▄ █ ▀ ▄ █ ███ █\n# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █\n# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀\n# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀\n# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄\n# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀\n#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄\n# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀\n# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄\n# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█\n# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█\n# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀\n#\n".replace(/\n/g, "\r\n")
}, {
    name: "Win 95",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\nmouse_emulation=integration\n\n[dosbox]\ntitle=Windows 95\nmemsize=128\n\n[video]\nvmemsize=8\nvesa modelist width limit=0\nvesa modelist height limit=0\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\nintegration device=true\n\n[sblaster]\nsbtype=sb16vibra\n\n[fdc, primary]\nint13fakev86io=true\n\n[ide, primary]\nint13fakeio=true\nint13fakev86io=true\n\n[ide, secondary]\nint13fakeio=true\nint13fakev86io=true\ncd-rom insertion delay=4000\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system win95-v1\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load windows 95\necho on\n# \n# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█\n# █ ███ █ ██▄ █ ▀ ▄ █ ███ █\n# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █\n# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀\n# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀\n# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄\n# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀\n#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄\n# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀\n# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄\n# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█\n# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█\n# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀\n#\n".replace(/\n/g, "\r\n")
}, {
    name: "Win 98",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\nmouse_emulation=integration\n\n[dosbox]\ntitle=Windows 98\nmemsize=128\n\n[video]\nvmemsize=8\nvesa modelist width limit=0\nvesa modelist height limit=0\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\nintegration device=true\n\n[sblaster]\nsbtype=sb16vibra\n\n[fdc, primary]\nint13fakev86io=true\n\n[ide, primary]\nint13fakeio=true\nint13fakev86io=true\n\n[ide, secondary]\nint13fakeio=true\nint13fakev86io=true\ncd-rom insertion delay=4000\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system win98-v1\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load windows 98\necho on\n# \n# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█\n# █ ███ █ ██▄ █ ▀ ▄ █ ███ █\n# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █\n# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀\n# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀\n# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄\n# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀\n#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄\n# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀\n# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄\n# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█\n# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█\n# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀\n#\n".replace(/\n/g, "\r\n")
}]
  , ai = No({
    name: "editor",
    initialState: {
        configChanged: !1,
        bundleConfig: null,
        errorMessage: null,
        fs: []
    },
    reducers: {
        init: (e,t)=>{
            null === t.payload ? (e.configChanged = !0,
            e.bundleConfig = {
                dosboxConf: si[0].contents,
                jsdosConf: {
                    version: "js-dos-v8"
                }
            }) : (e.configChanged = !1,
            e.bundleConfig = t.payload)
        }
        ,
        dosboxConf: (e,t)=>{
            e.configChanged = !0,
            e.bundleConfig.dosboxConf = t.payload
        }
    }
})
  , ci = ["localhost", "js-dos"]
  , li = {
    "js-dos": {
        sockdriveEndpoint: "https://sockdrive.js-dos.com:8001",
        sockdriveWssEndpoint: "wss://sockdrive.js-dos.com:8001"
    },
    localhost: {
        sockdriveEndpoint: "http://localhost:8001",
        sockdriveWssEndpoint: "ws://localhost:8001"
    }
};
let ui = -1;
function di() {
    return ui += 1,
    {
        storeUid: ui,
        slice: No({
            name: "init",
            initialState: {
                uid: ui,
                sockdriveBackendName: qo.getItem("sockdrive.backend.name") ?? "js-dos"
            },
            reducers: {
                setSockdriveBackendName: (e,t)=>{
                    e.sockdriveBackendName = t.payload,
                    qo.setItem("sockdrive.backend.name", t.payload)
                }
            }
        })
    }
}
const fi = di().slice
  , hi = e=>t=>n=>{
    const r = Object.assign({}, n, {
        asyncStore: function(t) {
            setTimeout((()=>t(e)), 4)
        }
    });
    t(r)
}
  , pi = {};
function mi(e) {
    return "function" == typeof e.getState ? pi[e.getState().init.uid] : pi[e.init.uid]
}
function vi() {
    return mi(Zn())
}
function yi(e, t, n) {
    e.options.onEvent && setTimeout((()=>{
        var r, o;
        null == (o = (r = e.options).onEvent) || o.call(r, t, n)
    }
    ), 4)
}
const bi = "qwertyuiopasdfghjklzxcvbnm1234567890"
  , gi = ["dosbox", "dosboxX"]
  , _i = ["webgl", "canvas"]
  , wi = ["AsIs", "1/1", "5/4", "4/3", "16/10", "16/9", "Fit"]
  , ki = 65535
  , xi = ["pixelated", "smooth"]
  , Ci = No({
    name: "dos",
    initialState: {
        step: "emu-init",
        emuVersion: "-",
        error: null,
        bundle: null,
        config: {},
        worker: "false" !== qo.getItem("worker"),
        backend: qo.getItem("backend") ?? "dosbox",
        backendLocked: !1,
        backendHardware: "false" !== qo.getItem("backendHardware"),
        renderBackend: qo.getItem("renderBackend") ?? "webgl",
        renderAspect: qo.getItem("renderAspect") ?? "AsIs",
        /* CUSTOM CHANGE set a much lower default volume original was too loud */
        volume: Number.parseFloat(".3"),
        mobileControls: !1,
        mirroredControls: "true" === qo.getItem("mirroredControls"),
        scaleControls: Number.parseFloat(qo.getItem("scaleControls") ?? "0.2"),
        mouseSensitivity: Number.parseFloat(qo.getItem("mouse_sensitivity") ?? "1.0"),
        mouseCapture: !1,
        paused: !1,
        stats: {
            cyclesPerMs: 0,
            nonSkippableSleepPreSec: 0,
            sleepPerSec: 0,
            sleepTimePerSec: 0,
            framePerSec: 0,
            soundPerSec: 0,
            msgSentPerSec: 0,
            msgRecvPerSec: 0,
            netRecv: 0,
            netSent: 0,
            driveSent: 0,
            driveRecv: 0,
            driveRecvTime: 0,
            driveCacheHit: 0,
            driveCacheMiss: 0,
            driveCacheUsed: 0,
            driveIo: []
        },
        network: {
            server: qo.getItem("net.server") ?? "netherlands",
            room: Pi() + Pi() + Pi(),
            ipx: "disconnected"
        },
        ci: !1,
        ciStartedAt: 0,
        imageRendering: qo.getItem("imageRendering") ?? "pixelated",
        sockdriveWrite: !0,
        softKeyboard: !1,
        softKeyboardLayout: ["{esc} ` 1 2 3 4 5 6 7 8 9 0 () - = {bksp} {enter}", "{tab} q w e r t y u i o p { } \\ {up}", "{shift} {left} {right} a s d f g h j k l : ; ' [ {down}", "⎘ {alt} {ctrl} z x c v b n m , . / ] {space}"],
        softKeyboardSymbols: [{
            "{esc}": "␛",
            "{bksp}": "⌫",
            "{enter}": "↵",
            "{space}": "Space",
            "{up}": "↑",
            "{down}": "↓",
            "{left}": "←",
            "{right}": "→",
            "{shift}": "⇑",
            "{ctrl}": "Ctrl",
            "{alt}": "Alt",
            "{tab}": "Tab"
        }, {
            "{esc}": "␛",
            "{bksp}": "⌫",
            "{enter}": "↵",
            "{space}": "Space",
            "{up}": "↑",
            "{down}": "↓",
            "{left}": "←",
            "{right}": "→",
            "{shift}": "⇑",
            "{alt}": "Alt",
            "{ctrl}": "Ctrl",
            "{tab}": "Tab",
            q: "й",
            w: "ц",
            e: "у",
            r: "к",
            t: "е",
            y: "н",
            u: "г",
            i: "ш",
            o: "щ",
            p: "з",
            "{": "х",
            "}": "ъ",
            a: "ф",
            s: "ы",
            d: "в",
            f: "а",
            g: "п",
            h: "р",
            j: "о",
            k: "л",
            l: "д",
            ";": "ж",
            "'": "э",
            z: "я",
            x: "ч",
            c: "с",
            v: "м",
            b: "и",
            n: "т",
            m: "ь",
            ",": "б",
            ".": "ю"
        }],
        softKeyboardActiveSymbols: 0,
        noCursor: !1
    },
    reducers: {
        emuReady: (e,t)=>{
            e.step = "emu-ready",
            e.emuVersion = t.payload
        }
        ,
        emuError: (e,t)=>{
            e.step = "emu-error",
            e.error = t.payload ?? "Unexpeceted error"
        }
        ,
        bndLoad: (e,t)=>{
            e.step = "bnd-load",
            e.bundle = t.payload
        }
        ,
        bndError: (e,t)=>{
            e.step = "bnd-error",
            e.error = t.payload ?? "Unexpeceted error"
        }
        ,
        bndConfig: e=>{
            e.step = "bnd-config"
        }
        ,
        bndReady: (e,t)=>{
            e.step = "bnd-ready",
            e.config = t.payload
        }
        ,
        bndPlay: (e,t)=>{
            e.step = "bnd-play",
            t.asyncStore((e=>{
                yi(mi(e), "bnd-play")
            }
            ))
        }
        ,
        dosWorker: (e,t)=>{
            e.worker = t.payload,
            qo.setItem("worker", e.worker ? "true" : "false")
        }
        ,
        dosBackend: (e,t)=>{
            e.backend = t.payload
        }
        ,
        dosBackendLocked: (e,t)=>{
            e.backendLocked = t.payload
        }
        ,
        dosBackendHardware: (e,t)=>{
            e.backendHardware = t.payload,
            qo.setItem("backendHardware", e.backendHardware ? "true" : "false")
        }
        ,
        renderBackend: (e,t)=>{
            e.renderBackend = t.payload,
            qo.setItem("renderBackend", e.renderBackend)
        }
        ,
        renderAspect: (e,t)=>{
            e.renderAspect = t.payload,
            qo.setItem("renderAspect", e.renderAspect)
        }
        ,
        imageRendering: (e,t)=>{
            e.imageRendering = t.payload,
            qo.setItem("imageRendering", e.imageRendering)
        }
        ,
        volume: (e,t)=>{
            e.volume = t.payload,
            qo.setItem("volume", e.volume + "")
        }
        ,
        mouseSensitivity: (e,t)=>{
            e.mouseSensitivity = t.payload,
            qo.setItem("mouse_sensitivity", e.mouseSensitivity + "")
        }
        ,
        mouseCapture: (e,t)=>{
            e.mouseCapture = t.payload
        }
        ,
        paused: (e,t)=>{
            e.paused = t.payload
        }
        ,
        stats: (e,t)=>{
            e.stats = t.payload
        }
        ,
        ci: (e,t)=>{
            e.ci = t.payload,
            t.payload && (e.ciStartedAt = Date.now())
        }
        ,
        connectIpx: (e,t)=>{
            if ("connected" === e.network.ipx)
                throw new Error("Already connected");
            if (!e.ci)
                throw new Error("DOS is not started");
            const {room: n, address: r} = t.payload;
            e.network.ipx = "connecting",
            t.asyncStore((e=>{
                const t = mi(e);
                if (!t.ci)
                    throw new Error("DOS is not started");
                const o = r.endsWith("/") ? r.substring(0, r.length - 1) : r;
                t.ci.networkConnect(0, o + ":1900/ipx/" + n.replaceAll("@", "_")).then((()=>{
                    e.dispatch(Ci.actions.statusIpx("connected"))
                }
                )).catch((t=>{
                    e.dispatch(Ci.actions.statusIpx("error")),
                    console.error(t)
                }
                ))
            }
            ))
        }
        ,
        statusIpx: (e,t)=>{
            e.network.ipx = t.payload
        }
        ,
        disconnectIpx: (e,t)=>{
            e.network.ipx = "disconnected",
            t.asyncStore((e=>{
                var t;
                null == (t = mi(e).ci) || t.networkDisconnect(0)
            }
            ))
        }
        ,
        setRoom: (e,t)=>{
            e.network.room = t.payload
        }
        ,
        setServer: (e,t)=>{
            e.network.server = t.payload,
            qo.setItem("net.server", t.payload)
        }
        ,
        setSockdriveWrite: (e,t)=>{
            e.sockdriveWrite = t.payload
        }
        ,
        mobileControls: (e,t)=>{
            e.mobileControls = t.payload
        }
        ,
        mirroredControls: (e,t)=>{
            e.mirroredControls = t.payload,
            qo.setItem("mirroredControls", t.payload ? "true" : "false")
        }
        ,
        scaleControls: (e,t)=>{
            e.scaleControls = t.payload,
            qo.setItem("scaleControls", e.scaleControls + "")
        }
        ,
        softKeyboard: (e,t)=>{
            e.softKeyboard = t.payload
        }
        ,
        softKeyboardLayout: (e,t)=>{
            e.softKeyboardLayout = t.payload
        }
        ,
        softKeyboardSymbols: (e,t)=>{
            e.softKeyboardSymbols = t.payload
        }
        ,
        softKeyboardActiveSymbols: (e,t)=>{
            e.softKeyboardActiveSymbols = t.payload
        }
        ,
        noCursor: (e,t)=>{
            e.noCursor = t.payload
        }
    }
});
let Si = !1;
function Ei(e, t) {
    e.dispatch((async e=>{
        try {
            Si || (await function(e) {
                if (null !== document.querySelector("#emulators.js"))
                    return Promise.resolve();
                return new Promise(((t,n)=>{
                    const r = document.createElement("script");
                    r.async = !0,
                    r.type = "text/javascript",
                    r.src = e + "emulators.js",
                    r.onload = ()=>{
                        emulators.pathPrefix = e,
                        t()
                    }
                    ,
                    r.onerror = e=>{
                        n(new Error("Unable to add emulators.js. Probably you should set the 'pathPrefix' option to point to the js-dos folder."))
                    }
                    ,
                    document.head.appendChild(r)
                }
                ))
            }(t),
            Si = !0),
            e(Ci.actions.emuReady(emulators.version))
        } catch (n) {
            console.error("Unable to init emulators.js", n),
            e(Ci.actions.emuError(n.message))
        }
    }
    ))
}
function Pi() {
    return bi[Math.round(Math.random() * (bi.length - 1))]
}
const Oi = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
  , Mi = No({
    name: "js-dos v8s",
    initialState: {
        hidden: !1,
        modal: "none",
        frame: "none",
        frameXs: !1,
        window: "none",
        theme: qo.getItem("theme") ?? "dark",
        editor: !1,
        wideScreen: !0,
        fullScreen: !1,
        toast: null,
        toastIntent: "none",
        toastTimeoutId: 0,
        background: null,
        readOnlyWarning: !1,
        updateWsWarning: !1,
        cloudSaves: !0,
        autoStart: !1,
        kiosk: !1,
        documentHidden: document.hidden ?? !1,
        noNetworking: !1,
        noCloud: !1
    },
    reducers: {
        theme: (e,t)=>{
            qo.setItem("theme", t.payload),
            e.theme = t.payload
        }
        ,
        modalLogin: e=>{
            e.modal = "login"
        }
        ,
        modalNone: e=>{
            e.modal = "none"
        }
        ,
        frameNone: e=>{
            e.frame = "none",
            e.frameXs = !1
        }
        ,
        frameAccount: e=>{
            !function(e, t) {
                e.frame === t ? e.frame = "none" : e.frame = t
            }(e, "account"),
            e.frameXs = !1
        }
        ,
        frameSettings: e=>{
            e.frame = "settings",
            e.frameXs = !1
        }
        ,
        frameNetwork: e=>{
            e.frame = "network",
            e.frameXs = !1
        }
        ,
        frameStats: e=>{
            e.frame = "stats",
            e.frameXs = !1
        }
        ,
        frameConf: e=>{
            e.frame = "editor-conf",
            e.frameXs = !1
        }
        ,
        frameFs: e=>{
            e.frame = "editor-fs",
            e.frameXs = !1
        }
        ,
        frameFatDrives: e=>{
            e.frame = "fat-drives",
            e.frameXs = !1
        }
        ,
        frameQuickSave: e=>{
            e.frame = "quick-save",
            e.frameXs = !0
        }
        ,
        frameImageRendering: e=>{
            e.frame = "image-rendering",
            e.frameXs = !1
        }
        ,
        framePreRun: e=>{
            e.frame = "prerun",
            e.frameXs = !1
        }
        ,
        windowSelect: e=>{
            e.window = "select"
        }
        ,
        background: (e,t)=>{
            e.background = t.payload
        }
        ,
        setEditor: (e,t)=>{
            e.editor = t.payload
        }
        ,
        setWideScreen: (e,t)=>{
            e.wideScreen = t.payload
        }
        ,
        setFullScreen: (e,t)=>{
            e.fullScreen = t.payload
        }
        ,
        showToast: (e,t)=>{
            0 !== e.toastTimeoutId && clearInterval(e.toastTimeoutId),
            e.toast = t.payload.message,
            e.toastIntent = t.payload.intent ?? "none",
            "panic" !== t.payload.intent && (e.toastTimeoutId = setTimeout((()=>{
                t.asyncStore((e=>e.dispatch(Mi.actions.hideToast())))
            }
            ), t.payload.long ? 5e3 : 1500))
        }
        ,
        hideToast: e=>{
            e.toast = null,
            e.toastTimeoutId = 0
        }
        ,
        readOnlyWarning: (e,t)=>{
            e.readOnlyWarning = t.payload
        }
        ,
        updateWsWarning: (e,t)=>{
            e.updateWsWarning = t.payload
        }
        ,
        cloudSaves: (e,t)=>{
            e.cloudSaves = t.payload
        }
        ,
        autoStart: (e,t)=>{
            e.autoStart = t.payload
        }
        ,
        kiosk: (e,t)=>{
            e.kiosk = t.payload
        }
        ,
        documentHidden: (e,t)=>{
            e.documentHidden = t.payload
        }
        ,
        noNetworking: (e,t)=>{
            e.noNetworking = t.payload
        }
        ,
        noCloud: (e,t)=>{
            e.noCloud = t.payload
        }
        ,
        hidden: (e,t)=>{
            e.hidden = t.payload
        }
    },
    extraReducers: e=>{
        e.addCase(jo("dos/bndLoad"), ((e,t)=>{
            e.window = "loading"
        }
        )).addCase(jo("editor/extract"), ((e,t)=>{
            e.window = "loading"
        }
        )).addCase(jo("editor/ready"), ((e,t)=>{
            e.window = "prerun"
        }
        )).addCase(jo("dos/bndReady"), ((e,t)=>{
            e.autoStart ? t.asyncStore((e=>{
                e.dispatch(Ci.actions.bndPlay({}))
            }
            )) : e.window = "prerun"
        }
        )).addCase(jo("dos/bndPlay"), ((e,t)=>{
            e.window = "run",
            e.frame = "none"
        }
        )).addMatcher((e=>e.type.startsWith("dos/") && e.type.endsWith("Error")), ((e,t)=>{
            e.window = "error"
        }
        ))
    }
});
function ji(e, t) {
    t(null === e ? Mi.actions.modalLogin() : Mi.actions.frameAccount())
}
var Ai = 0;
function Di(e, t, n, o, i, s) {
    var a, c, l = {};
    for (c in t)
        "ref" == c ? a = t[c] : l[c] = t[c];
    var u = {
        type: e,
        props: l,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --Ai,
        __i: -1,
        __u: 0,
        __source: i,
        __self: s
    };
    if ("function" == typeof e && (a = e.defaultProps))
        for (c in a)
            void 0 === l[c] && (l[c] = a[c]);
    return r.vnode && r.vnode(u),
    u
}
function Ti(e) {
    return Di("div", {
        class: "text-gray-400 hover:text-gray-600 btn " + e.class,
        onClick: e.onClose,
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "w-full h-full",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
        })
    })
}
const Bi = "https://v8.js-dos.com/auth/"
  , zi = "doszone-uploads"
  , Ri = "https://storage.yandexcloud.net"
  , Li = "dzapi"
  , Ni = "https://d5dn8hh4ivlobv6682ep.apigw.yandexcloud.net/presign-put"
  , Ii = "https://subscriptions.xsolla.com​/api/user/v1/projects/184012/subscriptions"
  , Ui = "sumOxNVr"
  , Ki = "https://br.cdn.dos.zone"
  , Fi = {
    en: "https://v8.js-dos.com/cancel-your-subscription/",
    ru: "https://v8.js-dos.com/ru/cancel-your-subscription/"
}
  , Hi = 2;
function Vi() {
    const e = le(null)
      , t = on((e=>e.auth.account))
      , n = "login" === on((e=>e.ui.modal))
      , r = on((e=>e.auth.loginUrl))
      , o = tr();
    return ae((()=>{
        if (null != t)
            return;
        const n = e.current;
        if (null === n)
            return o(Jo.actions.logout({})),
            o(Jo.actions.ready()),
            void console.error("Unable to inialize authentificator!");
        async function r(e) {
            if ("auth/ready" === e.data.action)
                Wi("auth/authenicate", n, o);
            else if ("auth/authenicate" === e.data.action) {
                const n = e.data.account;
                if (null !== n) {
                    try {
                        n.premium = await async function(e) {
                            const t = await fetch(Ii, {
                                method: "GET",
                                cache: "no-cache",
                                headers: {
                                    Authorization: "Bearer " + e
                                }
                            })
                              , n = await t.json();
                            return void 0 === n.items ? (console.error("Unexpected subscriptions response:", n),
                            !1) : n.items.length > 0 && n.items[0].plan_external_id === Ui
                        }(n.token.access_token)
                    } catch (t) {
                        console.error(t),
                        n.premium = !1
                    }
                    o(Jo.actions.login(e.data.account))
                } else
                    o(Jo.actions.logout({})),
                    o(Jo.actions.ready())
            }
        }
        return window.addEventListener("message", r),
        n.src = Bi,
        ()=>{
            window.removeEventListener("message", r)
        }
    }
    ), []),
    ae((()=>{
        if (n) {
            const t = e.current;
            if (null === t)
                return;
            Wi("auth/login", t, o, r)
        }
    }
    ), [n, r]),
    Di("div", {
        id: "login",
        class: "login-widget " + (n ? "block" : "hidden"),
        children: [Di("iframe", {
            id: "authentificator",
            ref: e
        }), Di(Ti, {
            class: "absolute z-40 right-24 top-10",
            onClose: ()=>o(Mi.actions.modalNone())
        })]
    })
}
function Wi(e, t, n, r) {
    const o = {
        action: e,
        refresh_token: "auth/authenicate" === e ? qo.getItem("cached.rt") : void 0,
        url: "auth/login" === e ? r : void 0
    };
    t && t.contentWindow ? t.contentWindow.postMessage(o, "*") : (console.error("Can't find authentificator iframe"),
    n(Jo.actions.logout({})),
    n(Jo.actions.ready()))
}
function qi(e) {
    const t = oi()
      , n = on((e=>e.auth.account))
      , r = tr();
    if (null === n)
        return null;
    return Di("div", {
        class: "account-frame frame-root items-center",
        children: [null !== n.picture && Di("img", {
            class: "account-img",
            src: n.picture
        }), Di("div", {
            class: "font-bold flex flex-row",
            children: [null === n.picture && Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                class: "w-6 h-6 mr-2",
                children: Di("path", {
                    "fill-rule": "evenodd",
                    d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
                    "clip-rule": "evenodd"
                })
            }), n.name ?? n.email]
        }), Di("button", {
            class: "btn mt-8 w-full",
            onClick: function() {
                r(Jo.actions.logout({})),
                r(Mi.actions.frameNone())
            },
            children: t("logout")
        }), Di("div", {
            class: "mt-8 mb-4 flex flex-row items-center",
            children: [Di("div", {
                class: "text-2xl",
                children: t("features")
            }), Di("div", {
                class: "ml-2 cursor-pointer self-end text-primary",
                onClick: Gi,
                children: Di("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6",
                    children: Di("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    })
                })
            })]
        }), Di(Xi, {})]
    })
}
function Xi(e) {
    const t = oi()
      , n = on((e=>e.i18n.lang))
      , r = on((e=>e.auth.account))
      , [o,i] = ie(!1)
      , s = tr();
    if (null === r)
        return null;
    const a = r.token.access_token;
    return Di("div", {
        class: "premium-plan-root " + (r.premium ? "have-premium" : ""),
        children: [Di("div", {
            class: "premium-plan-head flex",
            children: [r.premium && Di($i, {}), Di("div", {
                class: "cursor-pointer underline",
                onClick: Gi,
                children: t("premium")
            }), Di("div", {
                class: "flex-grow"
            }), r.premium && Di("button", {
                onClick: async function() {
                    const e = ()=>{
                        s(Mi.actions.showToast({
                            message: t("unable_to_cancle_subscription"),
                            intent: "error"
                        })),
                        window.open(Fi[n] ?? Fi.en, "_blank")
                    }
                    ;
                    if (r)
                        try {
                            await async function(e) {
                                const t = await fetch(Ii + "/" + Ui + "/cancel", {
                                    method: "PUT",
                                    cache: "no-cache",
                                    headers: {
                                        Authorization: "Bearer " + e
                                    }
                                })
                                  , n = await t.json();
                                return !n.error || (console.error("Unexpected subscriptions response:", n),
                                !1)
                            }(r.token.access_token) ? s(Mi.actions.showToast({
                                message: t("subscription_cancelled"),
                                intent: "success"
                            })) : e()
                        } catch (o) {
                            e()
                        }
                    else
                        e()
                },
                class: "ml-2 btn btn-ghost btn-xs text-success-content",
                children: t("cancle")
            })]
        }), !r.premium && Di(g, {
            children: [Di("div", {
                class: "flex flex-row my-6 items-top",
                children: [Di("div", {
                    class: "premium-plan-cost",
                    children: "$3"
                }), Di("div", {
                    class: "premium-plan-cost-expl",
                    children: [Di("div", {
                        children: "USD / mo"
                    }), Di("div", {
                        children: [Di("span", {
                            class: "text-blue-600",
                            children: "5"
                        }), " ", t("try_free")]
                    })]
                })]
            }), Di("button", {
                class: "btn btn-primary w-full " + (o ? "hidden" : ""),
                onClick: function() {
                    o || ("js-dos.com" === location.host ? (i(!0),
                    async function(e) {
                        const t = await fetch(Ii + "/buy", {
                            method: "POST",
                            cache: "no-cache",
                            headers: {
                                Authorization: "Bearer " + e,
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                plan_external_id: Ui
                            })
                        })
                          , n = await t.json();
                        return void 0 === n.link_to_ps ? (console.error("Unexpected subscriptions response:", n),
                        null) : n.link_to_ps
                    }(a).then((e=>{
                        null !== e && window.open(e, "_blank")
                    }
                    )).catch(console.error).finally((()=>i(!1)))) : window.open("https://js-dos.com/subscription.html#subscribe", "_blank"))
                },
                children: t("buy")
            })]
        }), Di("div", {
            class: "flex flex-col mt-4",
            children: [Di("div", {
                class: "premium-plan-highlight",
                children: [Di($i, {}), Di("div", {
                    children: t("cloud_saves")
                })]
            }), Di("div", {
                class: "premium-plan-highlight",
                children: [Di($i, {}), Di("div", {
                    children: t("experimental_features")
                })]
            }), Di("div", {
                class: "premium-plan-highlight",
                children: [Di($i, {}), Di("div", {
                    children: t("writeable_fat32")
                }), Di("div", {
                    class: "flex-grow"
                }), Di("button", {
                    onClick: ()=>s(Mi.actions.frameFatDrives()),
                    target: "_blank",
                    class: "ml-2 btn btn-xs text-success-content",
                    children: t("manage")
                })]
            }), Di("div", {
                class: "premium-plan-highlight",
                children: [Di($i, {}), Di("div", {
                    children: t("net_no_limits")
                })]
            }), Di("div", {
                class: "premium-plan-highlight",
                style: "border-bottom: 0px",
                children: [Di($i, {}), Di("div", {
                    children: t("unlock_options")
                })]
            })]
        })]
    })
}
function $i(e) {
    return Di("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "mr-4 w-6 h-6 text-blue-500 flex-shrink-0",
        children: Di("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
        })
    })
}
function Gi() {
    window.open("https://js-dos.com/cloud-overview.html", "_blank")
}
const Yi = "imgmount\\s+(\\d+)\\s+sockdrive\\s+([^\\s]+)\\s+([^\\s]+)\\s+([^\\s]+)\\s*$"
  , Qi = "imgmount\\s+(\\d+)\\s+sockdrive\\s+.*$";
function Ji() {
    const e = oi()
      , t = on((e=>e.editor.bundleConfig))
      , n = on((e=>e.auth.account))
      , r = on((e=>e.dos.backend))
      , {sockdriveEndpoint: o, sockdriveWssEndpoint: i} = on((e=>li[e.init.sockdriveBackendName] ?? li["js-dos"]))
      , s = tr()
      , [a,c] = ie([]);
    function l(e) {
        const t = {}
          , n = new RegExp(Yi,"gm");
        let r;
        for (; r = n.exec(e); ) {
            const [e,n,o,i,s] = r;
            t[n] = {
                num: n,
                backend: o,
                owner: i,
                drive: s
            }
        }
        return t
    }
    ae((()=>{
        n && n.token ? fetch(o + "/list/drives/" + n.token.access_token).then((e=>e.json())).then(c).catch(console.error) : c([])
    }
    ), [null == n ? void 0 : n.token, o]);
    const [u,d] = ie(l((null == t ? void 0 : t.dosboxConf) ?? ""));
    function f(e) {
        if (d(e),
        t) {
            const n = [];
            for (const t of Object.values(e))
                t.owner.length > 0 && t.drive.length > 0 && n.push(`imgmount ${t.num} sockdrive ${t.backend} ${t.owner} ${t.drive}`);
            let r = t.dosboxConf;
            if (r = r.replaceAll(new RegExp(Qi,"gm"), ""),
            n.length > 0) {
                let e = r.indexOf("[autoexec]");
                -1 === e ? e = r.length : e += 10;
                const t = r.substring(e);
                r = r.substring(0, e),
                r += "\n" + n.join("\n") + "\n" + t.trim()
            }
            p(r)
        }
    }
    function h(e) {
        d(l(e)),
        p(e)
    }
    function p(e) {
        s(Ci.actions.mouseCapture(e.indexOf("autolock=true") > 0)),
        s(ai.actions.dosboxConf(e)),
        s(Ci.actions.dosBackendLocked(e.indexOf("sockdrive") >= 0)),
        s(Ci.actions.noCursor(e.indexOf("sockdrive") >= 0))
    }
    return null === t ? null : Di("div", {
        class: "editor-conf-frame flex flex-col flex-grow w-full gap-2",
        children: [Di("div", {
            class: "",
            children: e("dosboxconf_template")
        }), Di("div", {
            class: "flex flex-row flex-wrap items-center gap-2",
            children: si.map((({name: e, backend: t, contents: n})=>Di("button", {
                class: "btn btn-sm",
                onClick: ()=>{
                    s(Ci.actions.dosBackend("dosboxX" === t ? "dosboxX" : "dosbox")),
                    h(n.replaceAll("{wss-makevm}", i))
                }
                ,
                children: e
            })))
        }), "dosboxX" === r && Di(g, {
            children: [Di("button", {
                class: "btn btn-ghost btn-xs self-start",
                target: "_blank",
                onClick: ()=>s(Mi.actions.frameFatDrives()),
                children: [e("net_drives"), ":", Di("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-4 h-4",
                    children: Di("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    })
                })]
            }), ["2", "3"].map((e=>{
                var t, n;
                return Di("div", {
                    class: "flex flex-row justify-start items-center gap-3 w-full",
                    children: [Di("p", {
                        children: "2" === e ? "C:" : "D:"
                    }), Di("div", {
                        class: "flex flex-col gap-2",
                        children: [Di("div", {
                            class: "flex flex-row gap-1 items-center",
                            children: [Di("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "w-4 h-4",
                                children: Di("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                })
                            }), Di("input", {
                                class: "input input-xs",
                                type: "text",
                                value: (null == (t = u[e]) ? void 0 : t.owner) ?? "",
                                onChange: t=>{
                                    var n, r;
                                    const o = {
                                        ...u
                                    };
                                    o[e] = {
                                        num: e,
                                        backend: (null == (n = u[e]) ? void 0 : n.backend) ?? i,
                                        owner: t.currentTarget.value,
                                        drive: (null == (r = u[e]) ? void 0 : r.drive) ?? ""
                                    },
                                    f(o)
                                }
                            })]
                        }), Di("div", {
                            class: "flex flex-row gap-1 items-center",
                            children: [Di("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "w-4 h-4",
                                children: Di("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                })
                            }), Di("input", {
                                class: "input input-xs",
                                type: "text",
                                value: (null == (n = u[e]) ? void 0 : n.drive) ?? "",
                                onChange: t=>{
                                    var n, r;
                                    const o = {
                                        ...u
                                    };
                                    o[e] = {
                                        num: e,
                                        backend: (null == (n = u[e]) ? void 0 : n.backend) ?? i,
                                        owner: (null == (r = u[e]) ? void 0 : r.owner) ?? "",
                                        drive: t.currentTarget.value
                                    },
                                    f(o)
                                }
                            })]
                        })]
                    }), Di("div", {
                        class: "dropdown dropdown-bottom dropdown-end",
                        children: [Di("button", {
                            tabIndex: 0,
                            role: "button",
                            class: "btn btn-sm",
                            children: Di("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "w-4 h-4",
                                children: Di("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                                })
                            })
                        }), Di("ul", {
                            tabIndex: 0,
                            class: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-h-80 overflow-auto",
                            children: a.map((({name: t, owner: n})=>Di("li", {
                                onClick: r=>{
                                    const o = {
                                        ...u
                                    };
                                    o[e] = {
                                        num: e,
                                        owner: n,
                                        backend: i,
                                        drive: t
                                    },
                                    f(o),
                                    r.currentTarget.parentElement.blur()
                                }
                                ,
                                children: Di("a", {
                                    children: t
                                })
                            })))
                        })]
                    }), Di("button", {
                        class: "btn btn-sm",
                        onClick: ()=>{
                            const t = {
                                ...u
                            };
                            delete t[e],
                            f(t)
                        }
                        ,
                        children: Di("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "w-4 h-4",
                            children: Di("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                            })
                        })
                    })]
                })
            }
            ))]
        }), Di("textarea", {
            class: "flex-grow",
            value: t.dosboxConf,
            onChange: e=>{
                var t;
                return h((null == (t = e.currentTarget) ? void 0 : t.value) ?? "")
            }
        })]
    })
}
var Zi = {
    exports: {}
};
/*! react-checkbox-tree - v1.8.0 | 2022 */
self;
const es = F(Zi.exports = (e=>(()=>{
    var t = {
        4184: (e,t)=>{
            var n;
            !function() {
                var r = {}.hasOwnProperty;
                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var i = typeof n;
                            if ("string" === i || "number" === i)
                                e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var s = o.apply(null, n);
                                    s && e.push(s)
                                }
                            } else if ("object" === i)
                                if (n.toString === Object.prototype.toString)
                                    for (var a in n)
                                        r.call(n, a) && n[a] && e.push(a);
                                else
                                    e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (o.default = o,
                e.exports = o) : void 0 === (n = function() {
                    return o
                }
                .apply(t, [])) || (e.exports = n)
            }()
        }
        ,
        8552: (e,t,n)=>{
            var r = n(852)(n(5639), "DataView");
            e.exports = r
        }
        ,
        1989: (e,t,n)=>{
            var r = n(1789)
              , o = n(401)
              , i = n(7667)
              , s = n(1327)
              , a = n(1866);
            function c(e) {
                var t = -1
                  , n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            c.prototype.clear = r,
            c.prototype.delete = o,
            c.prototype.get = i,
            c.prototype.has = s,
            c.prototype.set = a,
            e.exports = c
        }
        ,
        8407: (e,t,n)=>{
            var r = n(7040)
              , o = n(4125)
              , i = n(2117)
              , s = n(7518)
              , a = n(4705);
            function c(e) {
                var t = -1
                  , n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            c.prototype.clear = r,
            c.prototype.delete = o,
            c.prototype.get = i,
            c.prototype.has = s,
            c.prototype.set = a,
            e.exports = c
        }
        ,
        7071: (e,t,n)=>{
            var r = n(852)(n(5639), "Map");
            e.exports = r
        }
        ,
        3369: (e,t,n)=>{
            var r = n(4785)
              , o = n(1285)
              , i = n(6e3)
              , s = n(9916)
              , a = n(5265);
            function c(e) {
                var t = -1
                  , n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            c.prototype.clear = r,
            c.prototype.delete = o,
            c.prototype.get = i,
            c.prototype.has = s,
            c.prototype.set = a,
            e.exports = c
        }
        ,
        3818: (e,t,n)=>{
            var r = n(852)(n(5639), "Promise");
            e.exports = r
        }
        ,
        8525: (e,t,n)=>{
            var r = n(852)(n(5639), "Set");
            e.exports = r
        }
        ,
        8668: (e,t,n)=>{
            var r = n(3369)
              , o = n(619)
              , i = n(2385);
            function s(e) {
                var t = -1
                  , n = null == e ? 0 : e.length;
                for (this.__data__ = new r; ++t < n; )
                    this.add(e[t])
            }
            s.prototype.add = s.prototype.push = o,
            s.prototype.has = i,
            e.exports = s
        }
        ,
        6384: (e,t,n)=>{
            var r = n(8407)
              , o = n(7465)
              , i = n(3779)
              , s = n(7599)
              , a = n(4758)
              , c = n(4309);
            function l(e) {
                var t = this.__data__ = new r(e);
                this.size = t.size
            }
            l.prototype.clear = o,
            l.prototype.delete = i,
            l.prototype.get = s,
            l.prototype.has = a,
            l.prototype.set = c,
            e.exports = l
        }
        ,
        2705: (e,t,n)=>{
            var r = n(5639).Symbol;
            e.exports = r
        }
        ,
        1149: (e,t,n)=>{
            var r = n(5639).Uint8Array;
            e.exports = r
        }
        ,
        577: (e,t,n)=>{
            var r = n(852)(n(5639), "WeakMap");
            e.exports = r
        }
        ,
        4963: e=>{
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r; ) {
                    var s = e[n];
                    t(s, n, e) && (i[o++] = s)
                }
                return i
            }
        }
        ,
        4636: (e,t,n)=>{
            var r = n(2545)
              , o = n(5694)
              , i = n(1469)
              , s = n(4144)
              , a = n(5776)
              , c = n(6719)
              , l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = i(e)
                  , u = !n && o(e)
                  , d = !n && !u && s(e)
                  , f = !n && !u && !d && c(e)
                  , h = n || u || d || f
                  , p = h ? r(e.length, String) : []
                  , m = p.length;
                for (var v in e)
                    !t && !l.call(e, v) || h && ("length" == v || d && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, m)) || p.push(v);
                return p
            }
        }
        ,
        2488: e=>{
            e.exports = function(e, t) {
                for (var n = -1, r = t.length, o = e.length; ++n < r; )
                    e[o + n] = t[n];
                return e
            }
        }
        ,
        2908: e=>{
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                    if (t(e[n], n, e))
                        return !0;
                return !1
            }
        }
        ,
        8470: (e,t,n)=>{
            var r = n(7813);
            e.exports = function(e, t) {
                for (var n = e.length; n--; )
                    if (r(e[n][0], t))
                        return n;
                return -1
            }
        }
        ,
        8866: (e,t,n)=>{
            var r = n(2488)
              , o = n(1469);
            e.exports = function(e, t, n) {
                var i = t(e);
                return o(e) ? i : r(i, n(e))
            }
        }
        ,
        4239: (e,t,n)=>{
            var r = n(2705)
              , o = n(9607)
              , i = n(2333)
              , s = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? o(e) : i(e)
            }
        }
        ,
        9454: (e,t,n)=>{
            var r = n(4239)
              , o = n(7005);
            e.exports = function(e) {
                return o(e) && "[object Arguments]" == r(e)
            }
        }
        ,
        939: (e,t,n)=>{
            var r = n(2492)
              , o = n(7005);
            e.exports = function e(t, n, i, s, a) {
                return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, i, s, e, a))
            }
        }
        ,
        2492: (e,t,n)=>{
            var r = n(6384)
              , o = n(7114)
              , i = n(8351)
              , s = n(6096)
              , a = n(4160)
              , c = n(1469)
              , l = n(4144)
              , u = n(6719)
              , d = "[object Arguments]"
              , f = "[object Array]"
              , h = "[object Object]"
              , p = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, m, v, y) {
                var b = c(e)
                  , g = c(t)
                  , _ = b ? f : a(e)
                  , w = g ? f : a(t)
                  , k = (_ = _ == d ? h : _) == h
                  , x = (w = w == d ? h : w) == h
                  , C = _ == w;
                if (C && l(e)) {
                    if (!l(t))
                        return !1;
                    b = !0,
                    k = !1
                }
                if (C && !k)
                    return y || (y = new r),
                    b || u(e) ? o(e, t, n, m, v, y) : i(e, t, _, n, m, v, y);
                if (!(1 & n)) {
                    var S = k && p.call(e, "__wrapped__")
                      , E = x && p.call(t, "__wrapped__");
                    if (S || E) {
                        var P = S ? e.value() : e
                          , O = E ? t.value() : t;
                        return y || (y = new r),
                        v(P, O, n, m, y)
                    }
                }
                return !!C && (y || (y = new r),
                s(e, t, n, m, v, y))
            }
        }
        ,
        8458: (e,t,n)=>{
            var r = n(3560)
              , o = n(5346)
              , i = n(3218)
              , s = n(346)
              , a = /^\[object .+?Constructor\]$/
              , c = Function.prototype
              , l = Object.prototype
              , u = c.toString
              , d = l.hasOwnProperty
              , f = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!i(e) || o(e)) && (r(e) ? f : a).test(s(e))
            }
        }
        ,
        8749: (e,t,n)=>{
            var r = n(4239)
              , o = n(1780)
              , i = n(7005)
              , s = {};
            s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0,
            s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1,
            e.exports = function(e) {
                return i(e) && o(e.length) && !!s[r(e)]
            }
        }
        ,
        280: (e,t,n)=>{
            var r = n(5726)
              , o = n(6916)
              , i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e))
                    return o(e);
                var t = [];
                for (var n in Object(e))
                    i.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        }
        ,
        2545: e=>{
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e; )
                    r[n] = t(n);
                return r
            }
        }
        ,
        1717: e=>{
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        }
        ,
        4757: e=>{
            e.exports = function(e, t) {
                return e.has(t)
            }
        }
        ,
        4429: (e,t,n)=>{
            var r = n(5639)["__core-js_shared__"];
            e.exports = r
        }
        ,
        7114: (e,t,n)=>{
            var r = n(8668)
              , o = n(2908)
              , i = n(4757);
            e.exports = function(e, t, n, s, a, c) {
                var l = 1 & n
                  , u = e.length
                  , d = t.length;
                if (u != d && !(l && d > u))
                    return !1;
                var f = c.get(e)
                  , h = c.get(t);
                if (f && h)
                    return f == t && h == e;
                var p = -1
                  , m = !0
                  , v = 2 & n ? new r : void 0;
                for (c.set(e, t),
                c.set(t, e); ++p < u; ) {
                    var y = e[p]
                      , b = t[p];
                    if (s)
                        var g = l ? s(b, y, p, t, e, c) : s(y, b, p, e, t, c);
                    if (void 0 !== g) {
                        if (g)
                            continue;
                        m = !1;
                        break
                    }
                    if (v) {
                        if (!o(t, (function(e, t) {
                            if (!i(v, t) && (y === e || a(y, e, n, s, c)))
                                return v.push(t)
                        }
                        ))) {
                            m = !1;
                            break
                        }
                    } else if (y !== b && !a(y, b, n, s, c)) {
                        m = !1;
                        break
                    }
                }
                return c.delete(e),
                c.delete(t),
                m
            }
        }
        ,
        8351: (e,t,n)=>{
            var r = n(2705)
              , o = n(1149)
              , i = n(7813)
              , s = n(7114)
              , a = n(8776)
              , c = n(1814)
              , l = r ? r.prototype : void 0
              , u = l ? l.valueOf : void 0;
            e.exports = function(e, t, n, r, l, d, f) {
                switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                        return !1;
                    e = e.buffer,
                    t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !d(new o(e), new o(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return i(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var h = a;
                case "[object Set]":
                    var p = 1 & r;
                    if (h || (h = c),
                    e.size != t.size && !p)
                        return !1;
                    var m = f.get(e);
                    if (m)
                        return m == t;
                    r |= 2,
                    f.set(e, t);
                    var v = s(h(e), h(t), r, l, d, f);
                    return f.delete(e),
                    v;
                case "[object Symbol]":
                    if (u)
                        return u.call(e) == u.call(t)
                }
                return !1
            }
        }
        ,
        6096: (e,t,n)=>{
            var r = n(8234)
              , o = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, i, s, a) {
                var c = 1 & n
                  , l = r(e)
                  , u = l.length;
                if (u != r(t).length && !c)
                    return !1;
                for (var d = u; d--; ) {
                    var f = l[d];
                    if (!(c ? f in t : o.call(t, f)))
                        return !1
                }
                var h = a.get(e)
                  , p = a.get(t);
                if (h && p)
                    return h == t && p == e;
                var m = !0;
                a.set(e, t),
                a.set(t, e);
                for (var v = c; ++d < u; ) {
                    var y = e[f = l[d]]
                      , b = t[f];
                    if (i)
                        var g = c ? i(b, y, f, t, e, a) : i(y, b, f, e, t, a);
                    if (!(void 0 === g ? y === b || s(y, b, n, i, a) : g)) {
                        m = !1;
                        break
                    }
                    v || (v = "constructor" == f)
                }
                if (m && !v) {
                    var _ = e.constructor
                      , w = t.constructor;
                    _ == w || !("constructor"in e) || !("constructor"in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w || (m = !1)
                }
                return a.delete(e),
                a.delete(t),
                m
            }
        }
        ,
        1957: (e,t,n)=>{
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = r
        }
        ,
        8234: (e,t,n)=>{
            var r = n(8866)
              , o = n(9551)
              , i = n(3674);
            e.exports = function(e) {
                return r(e, i, o)
            }
        }
        ,
        5050: (e,t,n)=>{
            var r = n(7019);
            e.exports = function(e, t) {
                var n = e.__data__;
                return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }
        }
        ,
        852: (e,t,n)=>{
            var r = n(8458)
              , o = n(7801);
            e.exports = function(e, t) {
                var n = o(e, t);
                return r(n) ? n : void 0
            }
        }
        ,
        9607: (e,t,n)=>{
            var r = n(2705)
              , o = Object.prototype
              , i = o.hasOwnProperty
              , s = o.toString
              , a = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = i.call(e, a)
                  , n = e[a];
                try {
                    e[a] = void 0;
                    var r = !0
                } catch (c) {}
                var o = s.call(e);
                return r && (t ? e[a] = n : delete e[a]),
                o
            }
        }
        ,
        9551: (e,t,n)=>{
            var r = n(4963)
              , o = n(479)
              , i = Object.prototype.propertyIsEnumerable
              , s = Object.getOwnPropertySymbols
              , a = s ? function(e) {
                return null == e ? [] : (e = Object(e),
                r(s(e), (function(t) {
                    return i.call(e, t)
                }
                )))
            }
            : o;
            e.exports = a
        }
        ,
        4160: (e,t,n)=>{
            var r = n(8552)
              , o = n(7071)
              , i = n(3818)
              , s = n(8525)
              , a = n(577)
              , c = n(4239)
              , l = n(346)
              , u = "[object Map]"
              , d = "[object Promise]"
              , f = "[object Set]"
              , h = "[object WeakMap]"
              , p = "[object DataView]"
              , m = l(r)
              , v = l(o)
              , y = l(i)
              , b = l(s)
              , g = l(a)
              , _ = c;
            (r && _(new r(new ArrayBuffer(1))) != p || o && _(new o) != u || i && _(i.resolve()) != d || s && _(new s) != f || a && _(new a) != h) && (_ = function(e) {
                var t = c(e)
                  , n = "[object Object]" == t ? e.constructor : void 0
                  , r = n ? l(n) : "";
                if (r)
                    switch (r) {
                    case m:
                        return p;
                    case v:
                        return u;
                    case y:
                        return d;
                    case b:
                        return f;
                    case g:
                        return h
                    }
                return t
            }
            ),
            e.exports = _
        }
        ,
        7801: e=>{
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        }
        ,
        1789: (e,t,n)=>{
            var r = n(4536);
            e.exports = function() {
                this.__data__ = r ? r(null) : {},
                this.size = 0
            }
        }
        ,
        401: e=>{
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0,
                t
            }
        }
        ,
        7667: (e,t,n)=>{
            var r = n(4536)
              , o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (r) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return o.call(t, e) ? t[e] : void 0
            }
        }
        ,
        1327: (e,t,n)=>{
            var r = n(4536)
              , o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return r ? void 0 !== t[e] : o.call(t, e)
            }
        }
        ,
        1866: (e,t,n)=>{
            var r = n(4536);
            e.exports = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t,
                this
            }
        }
        ,
        5776: e=>{
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, n) {
                var r = typeof e;
                return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && t.test(e)) && e > -1 && e % 1 == 0 && e < n
            }
        }
        ,
        7019: e=>{
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        }
        ,
        5346: (e,t,n)=>{
            var r, o = n(4429), i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
            e.exports = function(e) {
                return !!i && i in e
            }
        }
        ,
        5726: e=>{
            var t = Object.prototype;
            e.exports = function(e) {
                var n = e && e.constructor;
                return e === ("function" == typeof n && n.prototype || t)
            }
        }
        ,
        7040: e=>{
            e.exports = function() {
                this.__data__ = [],
                this.size = 0
            }
        }
        ,
        4125: (e,t,n)=>{
            var r = n(8470)
              , o = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__
                  , n = r(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1),
                --this.size,
                0))
            }
        }
        ,
        2117: (e,t,n)=>{
            var r = n(8470);
            e.exports = function(e) {
                var t = this.__data__
                  , n = r(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
        }
        ,
        7518: (e,t,n)=>{
            var r = n(8470);
            e.exports = function(e) {
                return r(this.__data__, e) > -1
            }
        }
        ,
        4705: (e,t,n)=>{
            var r = n(8470);
            e.exports = function(e, t) {
                var n = this.__data__
                  , o = r(n, e);
                return o < 0 ? (++this.size,
                n.push([e, t])) : n[o][1] = t,
                this
            }
        }
        ,
        4785: (e,t,n)=>{
            var r = n(1989)
              , o = n(8407)
              , i = n(7071);
            e.exports = function() {
                this.size = 0,
                this.__data__ = {
                    hash: new r,
                    map: new (i || o),
                    string: new r
                }
            }
        }
        ,
        1285: (e,t,n)=>{
            var r = n(5050);
            e.exports = function(e) {
                var t = r(this, e).delete(e);
                return this.size -= t ? 1 : 0,
                t
            }
        }
        ,
        6e3: (e,t,n)=>{
            var r = n(5050);
            e.exports = function(e) {
                return r(this, e).get(e)
            }
        }
        ,
        9916: (e,t,n)=>{
            var r = n(5050);
            e.exports = function(e) {
                return r(this, e).has(e)
            }
        }
        ,
        5265: (e,t,n)=>{
            var r = n(5050);
            e.exports = function(e, t) {
                var n = r(this, e)
                  , o = n.size;
                return n.set(e, t),
                this.size += n.size == o ? 0 : 1,
                this
            }
        }
        ,
        8776: e=>{
            e.exports = function(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                }
                )),
                n
            }
        }
        ,
        4536: (e,t,n)=>{
            var r = n(852)(Object, "create");
            e.exports = r
        }
        ,
        6916: (e,t,n)=>{
            var r = n(5569)(Object.keys, Object);
            e.exports = r
        }
        ,
        1167: (e,t,n)=>{
            e = n.nmd(e);
            var r = n(1957)
              , o = t && !t.nodeType && t
              , i = o && e && !e.nodeType && e
              , s = i && i.exports === o && r.process
              , a = function() {
                try {
                    return i && i.require && i.require("util").types || s && s.binding && s.binding("util")
                } catch (e) {}
            }();
            e.exports = a
        }
        ,
        2333: e=>{
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        }
        ,
        5569: e=>{
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        }
        ,
        5639: (e,t,n)=>{
            var r = n(1957)
              , o = "object" == typeof self && self && self.Object === Object && self
              , i = r || o || Function("return this")();
            e.exports = i
        }
        ,
        619: e=>{
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"),
                this
            }
        }
        ,
        2385: e=>{
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        }
        ,
        1814: e=>{
            e.exports = function(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                }
                )),
                n
            }
        }
        ,
        7465: (e,t,n)=>{
            var r = n(8407);
            e.exports = function() {
                this.__data__ = new r,
                this.size = 0
            }
        }
        ,
        3779: e=>{
            e.exports = function(e) {
                var t = this.__data__
                  , n = t.delete(e);
                return this.size = t.size,
                n
            }
        }
        ,
        7599: e=>{
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        }
        ,
        4758: e=>{
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        }
        ,
        4309: (e,t,n)=>{
            var r = n(8407)
              , o = n(7071)
              , i = n(3369);
            e.exports = function(e, t) {
                var n = this.__data__;
                if (n instanceof r) {
                    var s = n.__data__;
                    if (!o || s.length < 199)
                        return s.push([e, t]),
                        this.size = ++n.size,
                        this;
                    n = this.__data__ = new i(s)
                }
                return n.set(e, t),
                this.size = n.size,
                this
            }
        }
        ,
        346: e=>{
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (n) {}
                    try {
                        return e + ""
                    } catch (n) {}
                }
                return ""
            }
        }
        ,
        7813: e=>{
            e.exports = function(e, t) {
                return e === t || e != e && t != t
            }
        }
        ,
        5694: (e,t,n)=>{
            var r = n(9454)
              , o = n(7005)
              , i = Object.prototype
              , s = i.hasOwnProperty
              , a = i.propertyIsEnumerable
              , c = r(function() {
                return arguments
            }()) ? r : function(e) {
                return o(e) && s.call(e, "callee") && !a.call(e, "callee")
            }
            ;
            e.exports = c
        }
        ,
        1469: e=>{
            var t = Array.isArray;
            e.exports = t
        }
        ,
        8612: (e,t,n)=>{
            var r = n(3560)
              , o = n(1780);
            e.exports = function(e) {
                return null != e && o(e.length) && !r(e)
            }
        }
        ,
        4144: (e,t,n)=>{
            e = n.nmd(e);
            var r = n(5639)
              , o = n(5062)
              , i = t && !t.nodeType && t
              , s = i && e && !e.nodeType && e
              , a = s && s.exports === i ? r.Buffer : void 0
              , c = (a ? a.isBuffer : void 0) || o;
            e.exports = c
        }
        ,
        8446: (e,t,n)=>{
            var r = n(939);
            e.exports = function(e, t) {
                return r(e, t)
            }
        }
        ,
        3560: (e,t,n)=>{
            var r = n(4239)
              , o = n(3218);
            e.exports = function(e) {
                if (!o(e))
                    return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        }
        ,
        1780: e=>{
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        }
        ,
        3218: e=>{
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        }
        ,
        7005: e=>{
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        }
        ,
        6719: (e,t,n)=>{
            var r = n(8749)
              , o = n(1717)
              , i = n(1167)
              , s = i && i.isTypedArray
              , a = s ? o(s) : r;
            e.exports = a
        }
        ,
        3674: (e,t,n)=>{
            var r = n(4636)
              , o = n(280)
              , i = n(8612);
            e.exports = function(e) {
                return i(e) ? r(e) : o(e)
            }
        }
        ,
        8306: (e,t,n)=>{
            var r = n(3369);
            function o(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t)
                    throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments
                      , o = t ? t.apply(this, r) : r[0]
                      , i = n.cache;
                    if (i.has(o))
                        return i.get(o);
                    var s = e.apply(this, r);
                    return n.cache = i.set(o, s) || i,
                    s
                };
                return n.cache = new (o.Cache || r),
                n
            }
            o.Cache = r,
            e.exports = o
        }
        ,
        479: e=>{
            e.exports = function() {
                return []
            }
        }
        ,
        5062: e=>{
            e.exports = function() {
                return !1
            }
        }
        ,
        2703: (e,t,n)=>{
            var r = n(414);
            function o() {}
            function i() {}
            i.resetWarningCache = o,
            e.exports = function() {
                function e(e, t, n, o, i, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation",
                        a
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n,
                n
            }
        }
        ,
        5697: (e,t,n)=>{
            e.exports = n(2703)()
        }
        ,
        414: e=>{
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        ,
        9787: t=>{
            t.exports = e
        }
    }
      , n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o)
            return o.exports;
        var i = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e](i, i.exports, r),
        i.loaded = !0,
        i.exports
    }
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    r.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e);
    var o = {};
    return (()=>{
        r.r(o),
        r.d(o, {
            default: ()=>le,
            expandNodesToLevel: ()=>ce
        });
        var e = r(4184)
          , t = r.n(e)
          , n = r(8446)
          , i = r.n(n)
          , s = r(8306)
          , a = r.n(s);
        let c = (e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e + ((t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_")), "");
        var l = r(5697)
          , u = r.n(l)
          , d = r(9787)
          , f = r.n(d);
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var p = ["children", "title"];
        function m() {
            return m = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            m.apply(this, arguments)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var g = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && v(e, t)
            }(s, e);
            var t, n, r, o, i = (r = s,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = y(r);
                if (o) {
                    var n = y(this).constructor;
                    e = Reflect.construct(t, arguments, n)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === h(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, e)
            }
            );
            function s() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                i.apply(this, arguments)
            }
            return t = s,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.title
                      , r = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, o = function(e, t) {
                            if (null == e)
                                return {};
                            var n, r, o = {}, i = Object.keys(e);
                            for (r = 0; r < i.length; r++)
                                n = i[r],
                                t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++)
                                n = i[r],
                                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(e, p);
                    return f().createElement("button", m({
                        "aria-label": n,
                        title: n,
                        type: "button"
                    }, r), t)
                }
            }]) && function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }(t.prototype, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            s
        }(f().PureComponent);
        b(g, "propTypes", {
            children: u().node.isRequired,
            title: u().string
        }),
        b(g, "defaultProps", {
            title: null
        });
        const _ = g
          , w = {
            ALL: "all",
            PARENT: "parent",
            LEAF: "leaf"
        };
        function k(e) {
            this.message = e,
            this.stack = Error().stack
        }
        k.prototype = Object.create(Error.prototype),
        k.prototype.name = "CheckboxTreeError";
        const x = k;
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var E = w;
        const P = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, e),
                this.props = t,
                this.flatNodes = n
            }
            var t, n;
            return t = e,
            n = [{
                key: "setProps",
                value: function(e) {
                    this.props = e
                }
            }, {
                key: "clone",
                value: function() {
                    var t = this
                      , n = {};
                    return Object.keys(this.flatNodes).forEach((function(e) {
                        var r = t.flatNodes[e];
                        n[e] = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? C(Object(n), !0).forEach((function(t) {
                                    S(e, t, n[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }
                                ))
                            }
                            return e
                        }({}, r)
                    }
                    )),
                    new e(this.props,n)
                }
            }, {
                key: "getNode",
                value: function(e) {
                    return this.flatNodes[e]
                }
            }, {
                key: "reset",
                value: function() {
                    this.flatNodes = {}
                }
            }, {
                key: "flattenNodes",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (Array.isArray(e) && 0 !== e.length) {
                        var o = this.props
                          , i = o.disabled
                          , s = o.noCascade;
                        e.forEach((function(e, o) {
                            var a = t.nodeHasChildren(e);
                            if (void 0 !== t.flatNodes[e.value])
                                throw new x("Duplicate value '".concat(e.value, "' detected. All node values must be unique."));
                            t.flatNodes[e.value] = {
                                label: e.label,
                                value: e.value,
                                children: e.children,
                                parent: n,
                                isChild: void 0 !== n.value,
                                isParent: a,
                                isLeaf: !a,
                                showCheckbox: void 0 === e.showCheckbox || e.showCheckbox,
                                disabled: t.getDisabledState(e, n, i, s),
                                treeDepth: r,
                                index: o
                            },
                            t.flattenNodes(e.children, e, r + 1)
                        }
                        ))
                    }
                }
            }, {
                key: "nodeHasChildren",
                value: function(e) {
                    return Array.isArray(e.children)
                }
            }, {
                key: "getDisabledState",
                value: function(e, t, n, r) {
                    return !!n || !(r || !t.disabled) || Boolean(e.disabled)
                }
            }, {
                key: "deserializeLists",
                value: function(e) {
                    var t = this
                      , n = ["checked", "expanded"];
                    Object.keys(this.flatNodes).forEach((function(e) {
                        n.forEach((function(n) {
                            t.flatNodes[e][n] = !1
                        }
                        ))
                    }
                    )),
                    n.forEach((function(n) {
                        e[n].forEach((function(e) {
                            void 0 !== t.flatNodes[e] && (t.flatNodes[e][n] = !0)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "serializeList",
                value: function(e) {
                    var t = this
                      , n = [];
                    return Object.keys(this.flatNodes).forEach((function(r) {
                        t.flatNodes[r][e] && n.push(r)
                    }
                    )),
                    n
                }
            }, {
                key: "expandAllNodes",
                value: function(e) {
                    var t = this;
                    return Object.keys(this.flatNodes).forEach((function(n) {
                        t.flatNodes[n].isParent && (t.flatNodes[n].expanded = e)
                    }
                    )),
                    this
                }
            }, {
                key: "toggleChecked",
                value: function(e, t, n, r) {
                    var o = this
                      , i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                      , s = this.flatNodes[e.value]
                      , a = [E.PARENT, E.ALL].indexOf(n) > -1
                      , c = [E.LEAF, E.ALL].indexOf(n) > -1;
                    if (s.isLeaf || r) {
                        if (e.disabled)
                            return this;
                        this.toggleNode(e.value, "checked", t)
                    } else
                        (a || 0 === s.children.length) && this.toggleNode(e.value, "checked", t),
                        c && s.children.forEach((function(e) {
                            o.toggleChecked(e, t, n, r, !1)
                        }
                        ));
                    return i && !r && s.isChild && a && this.toggleParentStatus(s.parent, n),
                    this
                }
            }, {
                key: "toggleParentStatus",
                value: function(e, t) {
                    var n = this.flatNodes[e.value];
                    n.isChild ? (t === E.ALL && this.toggleNode(e.value, "checked", this.isEveryChildChecked(n)),
                    this.toggleParentStatus(n.parent, t)) : this.toggleNode(e.value, "checked", this.isEveryChildChecked(n))
                }
            }, {
                key: "isEveryChildChecked",
                value: function(e) {
                    var t = this;
                    return e.children.every((function(e) {
                        return t.getNode(e.value).checked
                    }
                    ))
                }
            }, {
                key: "toggleNode",
                value: function(e, t, n) {
                    return this.flatNodes[e][t] = n,
                    this
                }
            }],
            n && function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }(t.prototype, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function M() {
            return M = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            M.apply(this, arguments)
        }
        function j(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function A(e, t) {
            return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function D(e) {
            return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function T(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var B = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && A(e, t)
            }(s, e);
            var t, n, r, o, i = (r = s,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = D(r);
                if (o) {
                    var n = D(this).constructor;
                    e = Reflect.construct(t, arguments, n)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === O(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, e)
            }
            );
            function s() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                i.apply(this, arguments)
            }
            return t = s,
            n = [{
                key: "componentDidMount",
                value: function() {
                    this.updateDeterminateProperty()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateDeterminateProperty()
                }
            }, {
                key: "updateDeterminateProperty",
                value: function() {
                    var e = this.props.indeterminate;
                    this.checkbox.indeterminate = e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? j(Object(n), !0).forEach((function(t) {
                                T(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, this.props);
                    return delete t.indeterminate,
                    f().createElement("input", M({}, t, {
                        ref: function(t) {
                            e.checkbox = t
                        },
                        type: "checkbox"
                    }))
                }
            }],
            n && function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }(t.prototype, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            s
        }(f().PureComponent);
        T(B, "propTypes", {
            indeterminate: u().bool
        }),
        T(B, "defaultProps", {
            indeterminate: !1
        });
        const z = B
          , R = u().shape({
            check: u().node,
            uncheck: u().node,
            halfCheck: u().node,
            expandClose: u().node,
            expandOpen: u().node,
            expandAll: u().node,
            collapseAll: u().node,
            parentClose: u().node,
            parentOpen: u().node,
            leaf: u().node
        })
          , L = u().shape({
            collapseAll: u().string.isRequired,
            expandAll: u().string.isRequired,
            toggle: u().string.isRequired
        });
        function N(e) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function I(e, t) {
            return (I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function U(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function K(e) {
            return (K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function F(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var H = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && I(e, t)
            }(a, e);
            var n, r, o, i, s = (o = a,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = K(o);
                if (i) {
                    var n = K(this).constructor;
                    e = Reflect.construct(t, arguments, n)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === N(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return U(e)
                }(this, e)
            }
            );
            function a(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (t = s.call(this, e)).onCheck = t.onCheck.bind(U(t)),
                t.onCheckboxKeyPress = t.onCheckboxKeyPress.bind(U(t)),
                t.onCheckboxKeyUp = t.onCheckboxKeyUp.bind(U(t)),
                t.onClick = t.onClick.bind(U(t)),
                t.onExpand = t.onExpand.bind(U(t)),
                t
            }
            return n = a,
            (r = [{
                key: "onCheck",
                value: function() {
                    var e = this.props
                      , t = e.value;
                    (0,
                    e.onCheck)({
                        value: t,
                        checked: this.getCheckState({
                            toggle: !0
                        })
                    })
                }
            }, {
                key: "onCheckboxKeyPress",
                value: function(e) {
                    32 === e.which && e.preventDefault()
                }
            }, {
                key: "onCheckboxKeyUp",
                value: function(e) {
                    var t = e.keyCode;
                    [13, 32].includes(t) && this.onCheck()
                }
            }, {
                key: "onClick",
                value: function() {
                    var e = this.props
                      , t = e.expandOnClick
                      , n = e.isParent
                      , r = e.value
                      , o = e.onClick;
                    n && t && this.onExpand(),
                    o({
                        value: r,
                        checked: this.getCheckState({
                            toggle: !1
                        })
                    })
                }
            }, {
                key: "onExpand",
                value: function() {
                    var e = this.props
                      , t = e.expanded
                      , n = e.value;
                    (0,
                    e.onExpand)({
                        value: n,
                        expanded: !t
                    })
                }
            }, {
                key: "getCheckState",
                value: function(e) {
                    var t = e.toggle
                      , n = this.props
                      , r = n.checked
                      , o = n.optimisticToggle;
                    return !(0 !== r || !t) || 1 === r && !t || 2 === r && o
                }
            }, {
                key: "renderCollapseButton",
                value: function() {
                    var e = this.props
                      , t = e.expandDisabled
                      , n = e.isLeaf
                      , r = e.lang;
                    return n ? f().createElement("span", {
                        className: "rct-collapse"
                    }, f().createElement("span", {
                        className: "rct-icon"
                    })) : f().createElement(_, {
                        className: "rct-collapse rct-collapse-btn",
                        disabled: t,
                        title: r.toggle,
                        onClick: this.onExpand
                    }, this.renderCollapseIcon())
                }
            }, {
                key: "renderCollapseIcon",
                value: function() {
                    var e = this.props
                      , t = e.expanded
                      , n = e.icons
                      , r = n.expandClose
                      , o = n.expandOpen;
                    return t ? o : r
                }
            }, {
                key: "renderCheckboxIcon",
                value: function() {
                    var e = this.props
                      , t = e.checked
                      , n = e.icons
                      , r = n.uncheck
                      , o = n.check
                      , i = n.halfCheck;
                    return 0 === t ? r : 1 === t ? o : i
                }
            }, {
                key: "renderNodeIcon",
                value: function() {
                    var e = this.props
                      , t = e.expanded
                      , n = e.icon
                      , r = e.icons
                      , o = r.leaf
                      , i = r.parentClose
                      , s = r.parentOpen
                      , a = e.isLeaf;
                    return null !== n ? n : a ? o : t ? s : i
                }
            }, {
                key: "renderBareLabel",
                value: function(e) {
                    var t = this.props
                      , n = t.onClick
                      , r = t.title
                      , o = null !== n;
                    return f().createElement("span", {
                        className: "rct-bare-label",
                        title: r
                    }, o ? f().createElement("span", {
                        className: "rct-node-clickable",
                        onClick: this.onClick,
                        onKeyPress: this.onClick,
                        role: "button",
                        tabIndex: 0
                    }, e) : e)
                }
            }, {
                key: "renderCheckboxLabel",
                value: function(e) {
                    var t = this.props
                      , n = t.checked
                      , r = t.disabled
                      , o = t.title
                      , i = t.treeId
                      , s = t.value
                      , a = null !== t.onClick
                      , c = "".concat(i, "-").concat(String(s).split(" ").join("_"))
                      , l = [f().createElement("label", {
                        key: 0,
                        htmlFor: c,
                        title: o
                    }, f().createElement(z, {
                        checked: 1 === n,
                        disabled: r,
                        id: c,
                        indeterminate: 2 === n,
                        onClick: this.onCheck,
                        onChange: function() {}
                    }), f().createElement("span", {
                        "aria-checked": 1 === n,
                        "aria-disabled": r,
                        className: "rct-checkbox",
                        role: "checkbox",
                        tabIndex: 0,
                        onKeyPress: this.onCheckboxKeyPress,
                        onKeyUp: this.onCheckboxKeyUp
                    }, this.renderCheckboxIcon()), a ? null : e)];
                    return a && l.push(f().createElement("span", {
                        key: 1,
                        className: "rct-node-clickable",
                        onClick: this.onClick,
                        onKeyPress: this.onClick,
                        role: "link",
                        tabIndex: 0
                    }, e)),
                    l
                }
            }, {
                key: "renderLabel",
                value: function() {
                    var e = this.props
                      , t = e.label
                      , n = e.showCheckbox
                      , r = [e.showNodeIcon ? f().createElement("span", {
                        key: 0,
                        className: "rct-node-icon"
                    }, this.renderNodeIcon()) : null, f().createElement("span", {
                        key: 1,
                        className: "rct-title"
                    }, t)];
                    return n ? this.renderCheckboxLabel(r) : this.renderBareLabel(r)
                }
            }, {
                key: "renderChildren",
                value: function() {
                    return this.props.expanded ? this.props.children : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , n = e.className
                      , r = e.disabled
                      , o = e.expanded
                      , i = e.isLeaf
                      , s = t()({
                        "rct-node": !0,
                        "rct-node-leaf": i,
                        "rct-node-parent": !i,
                        "rct-node-expanded": !i && o,
                        "rct-node-collapsed": !i && !o,
                        "rct-disabled": r
                    }, n);
                    return f().createElement("li", {
                        className: s
                    }, f().createElement("span", {
                        className: "rct-text"
                    }, this.renderCollapseButton(), this.renderLabel()), this.renderChildren())
                }
            }]) && function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }(n.prototype, r),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            a
        }(f().PureComponent);
        F(H, "propTypes", {
            checked: u().number.isRequired,
            disabled: u().bool.isRequired,
            expandDisabled: u().bool.isRequired,
            expanded: u().bool.isRequired,
            icons: R.isRequired,
            isLeaf: u().bool.isRequired,
            isParent: u().bool.isRequired,
            label: u().node.isRequired,
            lang: L.isRequired,
            optimisticToggle: u().bool.isRequired,
            showNodeIcon: u().bool.isRequired,
            treeId: u().string.isRequired,
            value: u().oneOfType([u().string, u().number]).isRequired,
            onCheck: u().func.isRequired,
            onExpand: u().func.isRequired,
            children: u().node,
            className: u().string,
            expandOnClick: u().bool,
            icon: u().node,
            showCheckbox: u().bool,
            title: u().string,
            onClick: u().func
        }),
        F(H, "defaultProps", {
            children: null,
            className: null,
            expandOnClick: !1,
            icon: null,
            showCheckbox: !0,
            title: null,
            onClick: function() {}
        });
        const V = H
          , W = u().oneOfType([u().arrayOf(u().string), u().arrayOf(u().number)]);
        function q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function X(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? q(Object(n), !0).forEach((function(t) {
                    $(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function $(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var G = {
            label: u().node.isRequired,
            value: u().oneOfType([u().string, u().number]).isRequired,
            disabled: u().bool,
            icon: u().node,
            showCheckbox: u().bool,
            title: u().string
        };
        const Y = u().oneOfType([u().shape(G), u().shape(X(X({}, G), {}, {
            children: u().arrayOf(G).isRequired
        }))]);
        function Q(e) {
            return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function J(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? J(Object(n), !0).forEach((function(t) {
                    oe(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function te(e, t) {
            return (te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ne(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function re(e) {
            return (re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function oe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var ie = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && te(e, t)
            }(d, e);
            var n, r, o, s, l, u = (s = d,
            l = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = re(s);
                if (l) {
                    var n = re(this).constructor;
                    e = Reflect.construct(t, arguments, n)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Q(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ne(e)
                }(this, e)
            }
            );
            function d(e) {
                var t;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, d),
                t = u.call(this, e);
                var n = new P(e);
                return n.flattenNodes(e.nodes),
                n.deserializeLists({
                    checked: e.checked,
                    expanded: e.expanded
                }),
                t.state = {
                    id: e.id || "rct-".concat(c()),
                    model: n,
                    prevProps: e
                },
                t.onCheck = t.onCheck.bind(ne(t)),
                t.onExpand = t.onExpand.bind(ne(t)),
                t.onNodeClick = t.onNodeClick.bind(ne(t)),
                t.onExpandAll = t.onExpandAll.bind(ne(t)),
                t.onCollapseAll = t.onCollapseAll.bind(ne(t)),
                t.combineMemorized = a()((function(e, t) {
                    return Z(Z({}, e), t)
                }
                )).bind(ne(t)),
                t
            }
            return n = d,
            r = [{
                key: "onCheck",
                value: function(e) {
                    var t = this.props
                      , n = t.checkModel
                      , r = t.noCascade
                      , o = t.onCheck
                      , i = this.state.model.clone()
                      , s = i.getNode(e.value);
                    i.toggleChecked(e, e.checked, n, r),
                    o(i.serializeList("checked"), Z(Z({}, s), e))
                }
            }, {
                key: "onExpand",
                value: function(e) {
                    var t = this.props.onExpand
                      , n = this.state.model.clone()
                      , r = n.getNode(e.value);
                    n.toggleNode(e.value, "expanded", e.expanded),
                    t(n.serializeList("expanded"), Z(Z({}, r), e))
                }
            }, {
                key: "onNodeClick",
                value: function(e) {
                    (0,
                    this.props.onClick)(Z(Z({}, this.state.model.getNode(e.value)), e))
                }
            }, {
                key: "onExpandAll",
                value: function() {
                    this.expandAllNodes()
                }
            }, {
                key: "onCollapseAll",
                value: function() {
                    this.expandAllNodes(!1)
                }
            }, {
                key: "expandAllNodes",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    (0,
                    this.props.onExpand)(this.state.model.clone().expandAllNodes(e).serializeList("expanded"))
                }
            }, {
                key: "determineShallowCheckState",
                value: function(e, t) {
                    var n = this.state.model.getNode(e.value);
                    return n.isLeaf || t || 0 === e.children.length ? n.checked ? 1 : 0 : this.isEveryChildChecked(e) ? 1 : this.isSomeChildChecked(e) ? 2 : 0
                }
            }, {
                key: "isEveryChildChecked",
                value: function(e) {
                    var t = this;
                    return e.children.every((function(e) {
                        return 1 === t.state.model.getNode(e.value).checkState
                    }
                    ))
                }
            }, {
                key: "isSomeChildChecked",
                value: function(e) {
                    var t = this;
                    return e.children.some((function(e) {
                        return t.state.model.getNode(e.value).checkState > 0
                    }
                    ))
                }
            }, {
                key: "renderTreeNodes",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = this.props
                      , o = r.expandDisabled
                      , i = r.expandOnClick
                      , s = r.icons
                      , a = r.lang
                      , c = r.noCascade
                      , l = r.onClick
                      , u = r.onlyLeafCheckboxes
                      , h = r.optimisticToggle
                      , p = r.showNodeTitle
                      , m = r.showNodeIcon
                      , v = this.state
                      , y = v.id
                      , b = v.model
                      , g = d.defaultProps.icons
                      , _ = e.map((function(e) {
                        var r = e.value
                          , d = b.getNode(e.value)
                          , v = d.isParent ? t.renderTreeNodes(e.children, e) : null;
                        d.checkState = t.determineShallowCheckState(e, c);
                        var _ = u ? d.isLeaf : d.showCheckbox;
                        return !n.value || b.getNode(n.value).expanded ? f().createElement(V, {
                            key: r,
                            checked: d.checkState,
                            className: e.className,
                            disabled: d.disabled,
                            expandDisabled: o,
                            expandOnClick: i,
                            expanded: d.expanded,
                            icon: e.icon,
                            icons: t.combineMemorized(g, s),
                            label: e.label,
                            lang: a,
                            optimisticToggle: h,
                            isLeaf: d.isLeaf,
                            isParent: d.isParent,
                            showCheckbox: _,
                            showNodeIcon: m,
                            title: p ? e.title || e.label : e.title,
                            treeId: y,
                            value: e.value,
                            onCheck: t.onCheck,
                            onClick: l && t.onNodeClick,
                            onExpand: t.onExpand
                        }, v) : null
                    }
                    ));
                    return f().createElement("ol", null, _)
                }
            }, {
                key: "renderExpandAll",
                value: function() {
                    var e = this.props
                      , t = e.icons
                      , n = t.expandAll
                      , r = t.collapseAll
                      , o = e.lang;
                    return e.showExpandAll ? f().createElement("div", {
                        className: "rct-options"
                    }, f().createElement(_, {
                        className: "rct-option rct-option-expand-all",
                        title: o.expandAll,
                        onClick: this.onExpandAll
                    }, n), f().createElement(_, {
                        className: "rct-option rct-option-collapse-all",
                        title: o.collapseAll,
                        onClick: this.onCollapseAll
                    }, r)) : null
                }
            }, {
                key: "renderHiddenInput",
                value: function() {
                    var e = this.props
                      , t = e.name
                      , n = e.nameAsArray;
                    return void 0 === t ? null : n ? this.renderArrayHiddenInput() : this.renderJoinedHiddenInput()
                }
            }, {
                key: "renderArrayHiddenInput",
                value: function() {
                    var e = this.props
                      , t = e.checked
                      , n = e.name;
                    return t.map((function(e) {
                        var t = "".concat(n, "[]");
                        return f().createElement("input", {
                            key: e,
                            name: t,
                            type: "hidden",
                            value: e
                        })
                    }
                    ))
                }
            }, {
                key: "renderJoinedHiddenInput",
                value: function() {
                    var e = this.props
                      , t = e.checked
                      , n = e.name
                      , r = t.join(",");
                    return f().createElement("input", {
                        name: n,
                        type: "hidden",
                        value: r
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, n = this.props, r = n.direction, o = n.disabled, i = n.iconsClass, s = n.nodes, a = n.nativeCheckboxes, c = this.state.id, l = this.renderTreeNodes(s), u = t()((oe(e = {
                        "react-checkbox-tree": !0,
                        "rct-disabled": o
                    }, "rct-icons-".concat(i), !0),
                    oe(e, "rct-native-display", a),
                    oe(e, "rct-direction-rtl", "rtl" === r),
                    e));
                    return f().createElement("div", {
                        className: u,
                        id: c
                    }, this.renderExpandAll(), this.renderHiddenInput(), l)
                }
            }],
            o = [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = t.model
                      , r = t.prevProps
                      , o = e.disabled
                      , s = e.id
                      , a = e.nodes
                      , c = Z(Z({}, t), {}, {
                        prevProps: e
                    });
                    return n.setProps(e),
                    i()(r.nodes, a) && r.disabled === o || (n.reset(),
                    n.flattenNodes(a)),
                    null !== s && (c = Z(Z({}, c), {}, {
                        id: s
                    })),
                    n.deserializeLists({
                        checked: e.checked,
                        expanded: e.expanded
                    }),
                    c
                }
            }],
            r && ee(n.prototype, r),
            o && ee(n, o),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            d
        }(f().Component);
        function se(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ae(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ae(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ae(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function ce(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (n > t)
                return [];
            var r = [];
            return e.forEach((function(e) {
                e.children && (r = [].concat(se(r), [e.value], se(ce(e.children, t, n + 1))))
            }
            )),
            r
        }
        oe(ie, "propTypes", {
            nodes: u().arrayOf(Y).isRequired,
            checkModel: u().oneOf([w.LEAF, w.ALL]),
            checked: W,
            direction: u().string,
            disabled: u().bool,
            expandDisabled: u().bool,
            expandOnClick: u().bool,
            expanded: W,
            icons: R,
            iconsClass: u().string,
            id: u().string,
            lang: L,
            name: u().string,
            nameAsArray: u().bool,
            nativeCheckboxes: u().bool,
            noCascade: u().bool,
            onlyLeafCheckboxes: u().bool,
            optimisticToggle: u().bool,
            showExpandAll: u().bool,
            showNodeIcon: u().bool,
            showNodeTitle: u().bool,
            onCheck: u().func,
            onClick: u().func,
            onExpand: u().func
        }),
        oe(ie, "defaultProps", {
            checkModel: w.LEAF,
            checked: [],
            direction: "ltr",
            disabled: !1,
            expandDisabled: !1,
            expandOnClick: !1,
            expanded: [],
            icons: {
                check: f().createElement("span", {
                    className: "rct-icon rct-icon-check"
                }),
                uncheck: f().createElement("span", {
                    className: "rct-icon rct-icon-uncheck"
                }),
                halfCheck: f().createElement("span", {
                    className: "rct-icon rct-icon-half-check"
                }),
                expandClose: f().createElement("span", {
                    className: "rct-icon rct-icon-expand-close"
                }),
                expandOpen: f().createElement("span", {
                    className: "rct-icon rct-icon-expand-open"
                }),
                expandAll: f().createElement("span", {
                    className: "rct-icon rct-icon-expand-all"
                }),
                collapseAll: f().createElement("span", {
                    className: "rct-icon rct-icon-collapse-all"
                }),
                parentClose: f().createElement("span", {
                    className: "rct-icon rct-icon-parent-close"
                }),
                parentOpen: f().createElement("span", {
                    className: "rct-icon rct-icon-parent-open"
                }),
                leaf: f().createElement("span", {
                    className: "rct-icon rct-icon-leaf"
                })
            },
            iconsClass: "fa4",
            id: null,
            lang: {
                collapseAll: "Collapse all",
                expandAll: "Expand all",
                toggle: "Toggle"
            },
            name: void 0,
            nameAsArray: !1,
            nativeCheckboxes: !1,
            noCascade: !1,
            onlyLeafCheckboxes: !1,
            optimisticToggle: !0,
            showExpandAll: !1,
            showNodeIcon: !0,
            showNodeTitle: !1,
            onCheck: function() {},
            onClick: null,
            onExpand: function() {}
        });
        const le = ie
    }
    )(),
    o
}
)())(Et));
function ts(e, t) {
    const n = function(e, t) {
        const n = t.lastIndexOf("/")
          , r = t.substring(n + 1);
        return "personal-v2/" + Li + "/" + e + "/" + r
    }(e, t);
    return Ri + "/" + zi + "/" + n
}
async function ns(e, t) {
    let n = await fetch(Ni + "?bundleUrl=" + encodeURIComponent(e));
    const r = await n.json();
    if (!r.success)
        throw new Error("Unable to put personal bundle");
    const o = r.post
      , i = new FormData;
    if (Object.entries(o.fields).forEach((([e,t])=>{
        i.append(e, t)
    }
    )),
    i.append("acl", "public-read"),
    i.append("file", new Blob([t])),
    n = await fetch(o.url, {
        method: "post",
        body: i
    }),
    200 !== n.status && 204 !== n.status)
        throw new Error("Unable to put changes: " + n.statusText)
}
function rs(e, t) {
    return is(e.name, function(e, t) {
        return new Promise((n=>{
            t.dispatch(ii.actions.reset());
            const r = new FileReader;
            r.addEventListener("load", (async e=>{
                n(new Uint8Array(r.result))
            }
            )),
            r.addEventListener("progress", (e=>{
                t.dispatch(ii.actions.progress([e.loaded, e.total]))
            }
            )),
            r.readAsArrayBuffer(e)
        }
        ))
    }(e, t), null, null, t)
}
async function os(e, t) {
    var n;
    const r = (null == (n = t.getState().auth.account) ? void 0 : n.email) ?? "guest"
      , o = await ts(r, e);
    return is(e, async function(e, t) {
        try {
            return await mi(t).cache.get(e)
        } catch (u) {}
        t.dispatch(ii.actions.reset());
        const n = await fetch(e, {
            cache: "no-store"
        });
        if (200 !== n.status)
            throw new Error("Resource not avalible (" + n.status + "): " + n.statusText);
        const r = n.headers.get("Content-Length")
          , o = null === r ? 0 : Number.parseInt(r)
          , i = n.body.getReader();
        let s = 0;
        const a = [];
        for (; ; ) {
            const {done: n, value: r} = await i.read();
            if (n)
                break;
            a.push(r),
            s += r.length;
            const c = Math.min(e.startsWith(Ki) ? s / 2 : s, o);
            t.dispatch(ii.actions.progress([c, o]))
        }
        let c = 0;
        const l = new Uint8Array(s);
        for (const d of a)
            l.set(d, c),
            c += d.length;
        return mi(t).cache.put(e, l).catch(console.error),
        l
    }(e, t), async function(e, t) {
        t.getState().auth.ready || await new Promise((e=>{
            let n = null;
            const r = ()=>{
                t.getState().auth.ready && (n(),
                e())
            }
            ;
            n = t.subscribe(r)
        }
        ));
        const n = t.getState().auth.account
          , r = (null == n ? void 0 : n.email) ?? "guest"
          , o = ts(r, e)
          , i = await async function(e, t, n) {
            if (null === t || !t.premium)
                return await mi(n).cache.get(e).catch((()=>null));
            try {
                const t = await fetch(e, {
                    cache: "no-cache"
                });
                if (200 !== t.status)
                    throw new Error("Resource not avalible (" + t.status + "): " + t.statusText);
                return t.arrayBuffer().then((e=>new Uint8Array(e)))
            } catch (r) {
                return await mi(n).cache.get(e).catch((()=>null))
            }
        }(o, n, t);
        return {
            url: o,
            bundle: i
        }
    }(o, t), e, t)
}
async function is(e, t, n, r, o) {
    const i = mi(o)
      , s = o.dispatch;
    i.loadedBundle = null,
    s(Ci.actions.bndLoad(e));
    const a = await t;
    s(ii.actions.ready());
    /* CUSTOM CHANGE swapped this off of async to skip waiting on saves to load */
    const c = n;
    s(Ci.actions.bndConfig());
    const l = await emulators.bundleConfig(a);
    s(ai.actions.init(l)),
    null === l ? s(Mi.actions.frameConf()) : ss(l, s),
    i.loadedBundle = {
        bundleUrl: r,
        bundleChangesUrl: (null == c ? void 0 : c.url) ?? null,
        bundle: a,
        bundleChanges: (null == c ? void 0 : c.bundle) ?? null,
        initFs: null
    },
    s(Ci.actions.bndReady({}))
}
function ss(e, t) {
    e.dosboxConf.indexOf("sockdrive") >= 0 && (t(Ci.actions.dosBackendLocked(!0)),
    t(Ci.actions.dosBackend("dosboxX")),
    t(Ci.actions.noCursor(!0))),
    t(Ci.actions.mouseCapture(e.dosboxConf.indexOf("autolock=true") >= 0))
}
function as(e, t) {
    const n = new Blob([t],{
        type: "application/zip"
    });
    !function(e, t, n=!0) {
        const r = document.createElement("a");
        r.href = t,
        r.target = n ? "_blank" : "_self",
        r.download = e,
        r.style.display = "none",
        document.body.appendChild(r),
        r.click(),
        r.remove()
    }(e, URL.createObjectURL(n))
}
function cs() {
    const e = oi()
      , t = on((e=>e.dos.ci))
      , n = vi()
      , [r,o] = ie(0)
      , [i,s] = ie(null)
      , [a,c] = ie([])
      , [l,u] = ie([])
      , [d,f] = ie(null)
      , [h,p] = ie(!1);
    function m(e) {
        s(e),
        o(Math.round(ms(e) / 1024 / 1024 * 100) / 100)
    }
    return ae((()=>{
        if (null === n.ci || !t)
            return;
        let e = !1;
        return n.ci.fsTree().then((t=>{
            e || m(ls(t))
        }
        )).catch((t=>{
            console.error(t),
            e || m(null)
        }
        )),
        ()=>{
            e = !0
        }
    }
    ), [t]),
    Di("div", {
        class: "editor-fs-frame frame-root items-start px-4",
        children: [(h || null !== d) && Di("div", {
            class: "card card-bordered bg-base-100 shadow-xl w-full",
            children: Di("div", {
                class: "card-body",
                children: [Di("div", {
                    class: "card-title",
                    children: e(h ? "please_wait" : "uploading_file")
                }), Di("span", {
                    class: "break-words",
                    children: h ? e("making_bundle") : d
                })]
            })
        }), !h && null === d && i && Di("div", {
            className: "fs-tree-view",
            children: [Di(ds, {
                onRefresh: async function() {
                    if (m(null),
                    null === n.ci || !t)
                        return;
                    m(ls(await n.ci.fsTree()))
                },
                onUploadingFile: f,
                onMakingBundle: p
            }), Di("div", {
                class: "bg-base-200 px-2 py-1 text-right",
                children: [e("size"), ": ", r, " Mb"]
            }), Di("div", {
                class: "fs-tree",
                children: Di(es, {
                    icons: {
                        expandOpen: Di(hs, {}),
                        expandClose: Di(ps, {})
                    },
                    iconsClass: "icon",
                    nativeCheckboxes: !1,
                    onlyLeafCheckboxes: !0,
                    nodes: i,
                    checked: l,
                    onCheck: function(e, t) {
                        u(e)
                    },
                    expanded: a,
                    onExpand: function(e, t) {
                        c(e)
                    }
                })
            })]
        })]
    })
}
function ls(e) {
    var t;
    const n = [];
    for (const r of (null == (t = e.nodes) ? void 0 : t.sort(fs)) || [])
        n.push(us(r, "."));
    return n
}
function us(e, t) {
    const n = t + "/" + e.name
      , r = {
        label: e.name,
        value: n,
        fsNode: e
    };
    if (null !== e.nodes) {
        const t = e.nodes.sort(fs).map((e=>us(e, n)));
        r.children = t
    }
    return r
}
function ds(e) {
    const t = oi()
      , n = le(null)
      , r = le(null)
      , o = Zn()
      , i = vi()
      , {onRefresh: s, onUploadingFile: a, onMakingBundle: c} = e;
    function l(e) {
        const t = (e ? r : n).current;
        null !== t && t.click()
    }
    async function u(e) {
        const t = i.ci
          , n = e.target.files;
        if (null !== t && null !== n) {
            try {
                for (const e of n) {
                    a(e.name);
                    const n = (e.webkitRelativePath ?? "").split("/");
                    n.shift();
                    const r = n.join("/");
                    await t.fsWriteFile(0 == r.length ? e.name : r, e.stream())
                }
            } finally {
                a(null)
            }
            await s()
        }
    }
    return ae((()=>{
        null !== n.current && (n.current.setAttribute("directory", ""),
        n.current.setAttribute("webkitdirectory", ""))
    }
    ), [n]),
    Di("div", {
        class: "h-6 flex flex-row",
        children: [Di("input", {
            class: "hidden",
            type: "file",
            multiple: !0,
            ref: n,
            onChange: u
        }), Di("input", {
            class: "hidden",
            type: "file",
            multiple: !0,
            ref: r,
            onChange: u
        }), Di("button", {
            class: "refresh btn-xs rounded-none",
            onClick: s,
            children: Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                })
            })
        }), Di("button", {
            class: "add-file btn-xs rounded-none",
            onClick: ()=>l(!0),
            children: Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                })
            })
        }), Di("button", {
            class: "add-dir btn-xs rounded-none",
            onClick: ()=>l(!1),
            children: Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                })
            })
        }), Di("div", {
            class: "flex-grow"
        }), Di("button", {
            class: "download btn-xs rounded-none",
            onClick: async function() {
                const e = i.ci;
                if (null !== e) {
                    c(!0);
                    try {
                        const t = await e.persist(!1);
                        t && as("bundle.jsdos", t)
                    } finally {
                        c(!1)
                    }
                }
            },
            children: Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                })
            })
        }), Di("button", {
            class: "restart btn-xs rounded-none",
            onClick: async function() {
                const e = i.ci;
                if (null !== e && window.confirm(t("fs_restart"))) {
                    c(!0);
                    try {
                        const t = await e.persist(!1);
                        t && async function(e, t, n) {
                            await is("bundle.jsdos", Promise.resolve(e), null, null, n),
                            t && n.dispatch(Mi.actions.frameConf())
                        }(t, !0, o)
                    } finally {
                        c(!1)
                    }
                }
            },
            children: Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                })
            })
        })]
    })
}
function fs(e, t) {
    return null !== e.nodes && null !== t.nodes ? t.name.localeCompare(e.name) : null === e.nodes ? 1 : -1
}
function hs() {
    return Di("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "w-4 h-4 mr-2",
        children: Di("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        })
    })
}
function ps() {
    return Di("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "w-4 h-4 mr-2",
        children: Di("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
        })
    })
}
function ms(e) {
    if (!e)
        return 0;
    let t = 0;
    for (const n of e)
        null !== n.fsNode.size ? t += n.fsNode.size : t += ms(n.children);
    return t
}
function vs(e) {
    const t = oi()
      , n = !0 === e.multiline;
    return Di("div", {
        class: e.class + " option flex " + (n ? "flex-col" : "flex-row items-center"),
        children: [Di("div", {
            class: n ? "mb-2" : "mr-4",
            children: e.label
        }), Di("div", {
            class: "flex-grow",
            children: Di("select", {
                class: e.selectClass ? e.selectClass : n ? "w-full" : "w-28",
                onChange: function(t) {
                    void 0 !== e.onSelect && e.onSelect(t.currentTarget.value)
                },
                disabled: !0 === e.disabled,
                children: e.values.map((n=>Di("option", {
                    selected: n === e.selected,
                    value: n,
                    children: t(n)
                })))
            })
        })]
    })
}
function ys(e) {
    const t = on((e=>e.dos.backendLocked));
    return Di(xs, {
        multiline: e.multiline,
        label: "emulation_backend",
        values: [...gi],
        disabled: t,
        selector: e=>e.dos.backend,
        dispatch: e=>(qo.setItem("backend", e),
        Ci.actions.dosBackend(e))
    })
}
function bs(e) {
    const t = "run" === on((e=>e.ui.window));
    return Di(xs, {
        multiline: e.multiline,
        label: "render_backend",
        values: [..._i],
        disabled: t,
        selector: e=>e.dos.renderBackend,
        dispatch: e=>Ci.actions.renderBackend(e)
    })
}
function gs(e) {
    return Di(xs, {
        label: "render_aspect",
        multiline: e.multiline,
        values: [...wi],
        selector: e=>e.dos.renderAspect,
        dispatch: e=>Ci.actions.renderAspect(e)
    })
}
function _s(e) {
    return Di(xs, {
        label: "image_rendering",
        multiline: e.multiline,
        values: [...xi],
        selector: e=>e.dos.imageRendering,
        dispatch: e=>Ci.actions.imageRendering(e)
    })
}
function ws(e) {
    return Di(xs, {
        class: e.class,
        label: "theme",
        values: [...Oi],
        selector: e=>e.ui.theme,
        dispatch: e=>Mi.actions.theme(e),
        multiline: e.multiline
    })
}
function ks(e) {
    return Di(xs, {
        class: e.class,
        label: "FAT16/32 Backend",
        values: ci,
        selector: e=>e.init.sockdriveBackendName,
        dispatch: e=>fi.actions.setSockdriveBackendName(e),
        multiline: e.multiline
    })
}
function xs(e) {
    const t = oi()
      , n = on(e.selector)
      , r = tr();
    return Di(vs, {
        class: "mt-4 " + e.class,
        selectClass: e.selectClass,
        disabled: e.disabled,
        multiline: e.multiline,
        label: t(e.label),
        selected: n,
        values: e.values,
        onSelect: function(t) {
            r(e.dispatch(t))
        }
    })
}
function Cs(e) {
    return Di("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        class: e.class ?? "absolute left-0 top-0 -ml-1 -mt-1 text-error w-4 h-4",
        children: Di("path", {
            "fill-rule": "evenodd",
            d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
            "clip-rule": "evenodd"
        })
    })
}
function Ss() {
    const e = oi()
      , t = on((e=>e.auth.account))
      , {sockdriveEndpoint: n} = on((e=>li[e.init.sockdriveBackendName] ?? li["js-dos"]))
      , [r,o] = ie([])
      , i = tr()
      , s = (null == t ? void 0 : t.email) ?? ""
      , [a,c] = ie("")
      , [l,u] = ie(!0)
      , d = le(null)
      , f = le(null)
      , [h,p] = ie("")
      , [m,v] = ie("")
      , [y,b] = ie(null)
      , [_,w] = ie(-1)
      , [k,x] = ie(!1)
      , C = ((null == t ? void 0 : t.premium) ?? !1) || k;
    function S() {
        t && t.token ? (u(!0),
        fetch(n + "/list/drives/" + t.token.access_token).then((e=>e.json())).then((e=>{
            o(e.sort(((e,t)=>e.name.localeCompare(t.name))))
        }
        )).catch(console.error).finally((()=>u(!1))),
        fetch(n + "/premium/" + t.email).then((e=>e.json())).then((e=>{
            x(e.premium)
        }
        )).catch((e=>{
            console.error(e),
            x(!1)
        }
        ))) : (o([{
            fork_of: [],
            name: "fat32-2gb",
            owner: "system",
            template: "fat32-2gb"
        }, {
            fork_of: [],
            name: "fat16-256m",
            owner: "system",
            template: "fat16-256m"
        }, {
            fork_of: ["system/fat16-256m"],
            name: "win95-v1",
            owner: "system",
            template: "fat16-256m"
        }, {
            fork_of: ["system/fat16-256m"],
            name: "dos7.1-v1",
            owner: "system",
            template: "fat16-256m"
        }, {
            fork_of: ["system/fat32-2gb"],
            name: "win98-v1",
            owner: "system",
            template: "fat32-2gb"
        }, {
            fork_of: ["system/fat32-2gb"],
            name: "win95-v2",
            owner: "system",
            template: "fat32-2gb"
        }]),
        u(!1))
    }
    return ae((()=>{
        S()
    }
    ), [null == t ? void 0 : t.token, n]),
    Di("div", {
        class: "frame-root items-start gap-3 px-4",
        children: [Di(ks, {
            multiline: !0,
            class: "w-full "
        }), Di("input", {
            class: "input input-bordered input-sm w-full",
            placeholder: e("filter"),
            value: a,
            onChange: e=>c(e.currentTarget.value ?? "")
        }), Di("div", {
            class: "w-full",
            children: [!l && Di("table", {
                class: "table w-full",
                children: [Di("thead", {
                    children: Di("tr", {
                        children: [Di("th", {
                            children: e("net_drives")
                        }), Di("th", {})]
                    })
                }), Di("tbody", {
                    children: r.map((({name: n, owner: r, fork_of: o},c)=>a.length > 0 && -1 === r.indexOf(a) && -1 === n.indexOf(a) ? null : Di(g, {
                        children: Di("tr", {
                            children: [Di("td", {
                                onClick: ()=>{}
                                ,
                                children: [Di("p", {
                                    class: "font-bold",
                                    children: n
                                }), o.map((e=>Di("p", {
                                    class: "text-xs",
                                    children: ["    ", e]
                                }))), r !== (null == t ? void 0 : t.email) && Di("p", {
                                    class: "text-xs",
                                    children: r
                                })]
                            }), C && Di("td", {
                                children: [(null == t ? void 0 : t.token) && Di("div", {
                                    class: "btn btn-ghost btn-xs",
                                    onClick: ()=>{
                                        var e;
                                        w(c),
                                        null == (e = d.current) || e.showModal()
                                    }
                                    ,
                                    children: "Fork"
                                }), (null == t ? void 0 : t.token) && r === s && Di("div", {
                                    class: "btn btn-xs btn-ghost",
                                    onClick: ()=>{
                                        var e;
                                        w(c),
                                        null == (e = f.current) || e.showModal()
                                    }
                                    ,
                                    children: e("delete")
                                })]
                            }), !C && Di("td", {
                                children: Di("div", {
                                    class: "cursor-pointer",
                                    onClick: ()=>ji(t, i),
                                    children: Di(Cs, {
                                        class: "text-error"
                                    })
                                })
                            })]
                        })
                    })))
                })]
            }), l && Di("span", {
                class: "loading loading-spinner loading-lg"
            })]
        }), Di("dialog", {
            ref: d,
            class: "modal",
            children: !l && _ >= 0 && null !== t && Di("div", {
                class: "modal-box",
                children: [Di("h3", {
                    class: "font-bold text-lg",
                    children: [e("enter_name_of_drive"), ":"]
                }), Di("p", {
                    class: "text-xs text-neutral-content mt-2",
                    children: ["fork of: ", r[_].owner, "/", r[_].name]
                }), Di("input", {
                    type: "text",
                    placeholder: "name",
                    value: h,
                    class: "mt-6 input input-bordered input-primary w-full",
                    onChange: e=>p(e.currentTarget.value)
                }), null !== y && Di("p", {
                    class: "mt-2 text-error",
                    children: [e("error"), ": ", y]
                }), Di("div", {
                    class: "modal-action",
                    children: [h.length > 0 && Di("button", {
                        class: "btn mr-2 btn-primary",
                        onClick: ()=>{
                            w(-1),
                            u(!0),
                            fetch(`${n}/fork/drive/${r[_].owner}/${r[_].name}/${h}/${t.token.access_token}`, {
                                method: "POST"
                            }).then((e=>e.json())).then((e=>{
                                var t;
                                if (e.error)
                                    throw new Error(e.error);
                                o([]),
                                S(),
                                null == (t = d.current) || t.close()
                            }
                            )).catch((e=>{
                                console.error(e.message),
                                i(Mi.actions.showToast({
                                    message: e.message,
                                    intent: "error"
                                }))
                            }
                            )).finally((()=>{
                                u(!1)
                            }
                            ))
                        }
                        ,
                        children: e("fork")
                    }), Di("button", {
                        class: "btn",
                        onClick: ()=>{
                            var e;
                            return null == (e = d.current) ? void 0 : e.close()
                        }
                        ,
                        children: e("close")
                    })]
                })]
            })
        }), Di("dialog", {
            ref: f,
            class: "modal",
            children: !l && _ >= 0 && null !== t && Di("div", {
                class: "modal-box",
                children: [Di("h3", {
                    class: "font-bold text-lg",
                    children: [e("enter_name_of_drive"), ":"]
                }), Di("p", {
                    class: "text-xs text-neutral mt-2",
                    children: [r[_].owner, "/", r[_].name]
                }), Di("input", {
                    type: "text",
                    placeholder: "name",
                    value: m,
                    class: "mt-6 input input-bordered input-primary w-full",
                    onChange: e=>v(e.currentTarget.value)
                }), null !== y && Di("p", {
                    class: "mt-2 text-error",
                    children: [e("error"), ": ", b]
                }), Di("div", {
                    class: "modal-action",
                    children: [m === r[_].owner + "/" + r[_].name && Di("button", {
                        class: "btn mr-2 btn-primary",
                        onClick: ()=>{
                            w(-1),
                            u(!0),
                            fetch(`${n}/fork/delete/${r[_].owner}/${r[_].name}/${t.token.access_token}`, {
                                method: "POST"
                            }).then((e=>e.json())).then((e=>{
                                var t;
                                if (e.error)
                                    throw new Error(e.error);
                                {
                                    const e = [...r];
                                    e.splice(_, 1),
                                    o(e)
                                }
                                null == (t = f.current) || t.close()
                            }
                            )).catch((e=>{
                                console.error(e.message),
                                b(e.message),
                                i(Mi.actions.showToast({
                                    message: e.message,
                                    intent: "error"
                                }))
                            }
                            )).finally((()=>{
                                u(!1)
                            }
                            ))
                        }
                        ,
                        children: e("delete")
                    }), Di("button", {
                        class: "btn",
                        onClick: ()=>{
                            var e;
                            return null == (e = f.current) ? void 0 : e.close()
                        }
                        ,
                        children: e("close")
                    })]
                })]
            })
        })]
    })
}
function Es(e) {
    const t = le(null);
    return ae((()=>{
        null !== t && null !== t.current && (t.current.indeterminate = e.intermediate)
    }
    ), [t, e.intermediate]),
    Di("div", {
        className: e.class + " form-control option",
        onClick: function() {
            e.onChange && e.onChange(!(!0 === e.checked))
        },
        children: Di("label", {
            className: "label cursor-pointer",
            children: [Di("span", {
                className: "label-text mr-6",
                children: e.label
            }), Di("input", {
                ref: t,
                checked: !0 === e.checked,
                type: "checkbox",
                className: "toggle " + (e.checked ? " toggle-primary " : "") + e.toggleClass,
                disabled: !0 === e.disabled
            })]
        })
    })
}
function Ps() {
    const e = on((e=>e.auth.account))
      , t = on((e=>e.dos.network))
      , n = t.room
      , r = t.server
      , o = "disconnected" !== t.ipx
      , i = oi()
      , s = tr()
      , a = !0 === (null == e ? void 0 : e.premium)
      , c = "connected" === t.ipx ? location.href + function() {
        if (location.href.endsWith("?") || location.href.endsWith("&"))
            return "";
        return location.href.indexOf("?") > 0 ? "&" : "?"
    }() + "ipx=1&server=" + t.server + "&room=" + n : null;
    return ae((()=>{
        "netherlands" !== r && !0 !== (null == e ? void 0 : e.premium) && s(Ci.actions.setServer("netherlands"))
    }
    ), [r, e]),
    Di("div", {
        class: "network-frame frame-root items-start px-4 relative",
        children: [Di("div", {
            class: "ml-1 mb-4 w-full flex flex-row items-center",
            children: [Di(vs, {
                class: "text-sm",
                selectClass: "w-full",
                label: i("server") + ":",
                selected: r,
                values: ["netherlands", "newyork", "singapore"],
                disabled: o,
                onSelect: function(t) {
                    var n;
                    n = t,
                    s(Ci.actions.setServer(n)),
                    a || ji(e, s)
                }
            }), Di("div", {
                onClick: function() {
                    ji(e, s)
                },
                children: Di(Cs, {
                    class: "cursor-pointer ml-2 w-4 h-4 text-error"
                })
            })]
        }), Di("div", {
            class: "form-control w-full",
            children: [Di("label", {
                class: "label",
                children: Di("span", {
                    class: "label-text",
                    children: [i("room"), ":"]
                })
            }), Di("input", {
                type: "text",
                class: "input w-full input-sm input-bordered",
                disabled: o,
                onChange: e=>{
                    return t = e.currentTarget.value,
                    void s(Ci.actions.setRoom(t));
                    var t
                }
                ,
                value: n
            })]
        }), Di(Es, {
            class: "mt-4 " + ("error" === t.ipx ? "error" : ""),
            onChange: function() {
                "connected" === t.ipx ? s(Ci.actions.disconnectIpx({})) : s(Ci.actions.connectIpx({
                    room: n,
                    address: "wss://" + (a ? r : "netherlands") + ".dos.zone"
                }))
            },
            label: "IPX",
            checked: "connected" === t.ipx,
            disabled: "connecting" === t.ipx,
            intermediate: "connecting" === t.ipx
        }), null !== c && Di("div", {
            class: "mt-4 text-sm alert alert-success shadow-lg flex flex-col",
            children: [Di("div", {
                children: [i("copy_net_link"), ":"]
            }), Di("div", {
                class: "flex flex-row",
                children: [Di("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-6 h-6 mx-1 cursor-pointer hover:text-accent-focus flex-shrink-0",
                    fill: "none",
                    onClick: function() {
                        c && (!async function(e, t, n) {
                            if (!navigator.clipboard)
                                return;
                            try {
                                await navigator.clipboard.writeText(e),
                                n(Mi.actions.showToast({
                                    message: t("copied"),
                                    intent: "success"
                                }))
                            } catch (r) {
                                n(Mi.actions.showToast({
                                    message: t("error"),
                                    intent: "error"
                                }))
                            }
                        }(c, i, s),
                        s(Mi.actions.frameNone()))
                    },
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    children: Di("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    })
                }), Di("div", {
                    class: "contextmenu underline break-all",
                    target: "_blank",
                    children: c
                })]
            })]
        })]
    })
}
function Os(e) {
    return Di("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        style: "padding: 2px",
        viewBox: "0 0 16 16",
        "enable-background": "new 0 0 16 16",
        fill: "currentColor",
        class: "w-full h-full rounded-lg " + e.class,
        children: Di("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
        })
    })
}
async function Ms(e, t, n) {
    var r;
    const o = t.ci
      , i = null == (r = t.loadedBundle) ? void 0 : r.bundleChangesUrl;
    if (null === o || !i || !e.ui.cloudSaves)
        return !1;
    const s = function(e) {
        return t=>e.i18n.keys[t] ?? t
    }(e)
      , a = e.auth.account;
    try {
        const e = await o.persist(!0);
        return null !== e && (null !== a && a.premium ? await Promise.all([ns(i, e), t.cache.put(i, e)]) : await t.cache.put(i, e)),
        n(Mi.actions.showToast({
            message: s("success"),
            intent: "success"
        })),
        !0
    } catch (c) {
        return n(Mi.actions.showToast({
            message: s("unable_to_save"),
            intent: "error"
        })),
        console.error(c),
        !1
    }
}
function js(e) {
    const [t,n] = ie(!1)
      , r = tr()
      , o = on((e=>e.ui.cloudSaves))
      , i = vi()
      , s = Zn();
    if (!o || null === i.loadedBundle || null === i.loadedBundle.bundleChangesUrl)
        return null;
    return Di("div", {
        class: "save-button sidebar-button overflow-hidden " + (t ? " sidebar-highlight " : "") + e.class,
        onClick: function() {
            t || (n(!0),
            Ms(s.getState(), i, r).finally((()=>n(!1))))
        },
        children: Di("div", {
            class: "w-full h-full flex justify-center",
            children: [Di(Os, {}), t && Di("div", {
                class: "sidebar-badge"
            }), Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "absolute bottom-1 w-3 h-3 text-primary-content",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                })
            })]
        })
    })
}
function As() {
    var e;
    const t = (null == (e = on((e=>e.auth.account))) ? void 0 : e.premium) && !1;
    return Di("div", {
        class: "quick-save-frame flex flex-col justify-center items-center -my-2",
        children: [Di(js, {}), Di(Ds, {
            label: "quick",
            bgcolor: "bg-primary",
            textcolor: "text-primary-content"
        }), Di(Ts, {
            label: "quick",
            bgcolor: "bg-primary"
        }), t && Di(g, {
            children: [Di(Ds, {
                disabled: !t,
                label: 2,
                bgcolor: "bg-secondary",
                textcolor: "text-secondary-content"
            }), Di(Ts, {
                disabled: !t,
                label: 2,
                bgcolor: "bg-secondary"
            }), Di(Ds, {
                disabled: !t,
                label: 3,
                bgcolor: "bg-accent",
                textcolor: "text-accent-content"
            }), Di(Ts, {
                disabled: !t,
                label: 3,
                bgcolor: "bg-accent"
            })]
        })]
    })
}
function Ds(e) {
    const t = on((e=>e.auth.account))
      , n = tr()
      , r = vi();
    return Di("div", {
        class: "sidebar-button flex justify-center " + (e.disabled ? "opacity-50" : ""),
        onClick: function() {
            !0 === e.disabled && ji(t, n);
            const o = r.ci;
            null !== o && o.sendBackendEvent({
                type: "wc-trigger-event",
                event: "hand_savestate"
            })
        },
        children: [Di(Os, {}), !0 !== e.disabled && Di("div", {
            class: "text-badge " + e.textcolor + " " + e.bgcolor,
            children: e.label
        }), !0 === e.disabled && Di(Cs, {}), Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "absolute bottom-1 w-3 h-3",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            })
        })]
    })
}
function Ts(e) {
    const t = on((e=>e.auth.account))
      , n = tr()
      , r = vi();
    return Di("div", {
        class: "sidebar-button flex justify-center " + (e.disabled ? " opacity-50" : ""),
        onClick: function() {
            !0 === e.disabled && ji(t, n);
            const o = r.ci;
            null !== o && o.sendBackendEvent({
                type: "wc-trigger-event",
                event: "hand_loadstate"
            })
        },
        children: [Di(Os, {
            class: "opacity-10"
        }), !0 === e.disabled && Di(Cs, {}), Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "absolute bottom-1 w-6 h-6 -scale-y-100",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            })
        })]
    })
}
function Bs() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.ui.editor));
    return Di(Es, {
        class: "mt-4",
        label: e("editor"),
        checked: n,
        onChange: e=>t(Mi.actions.setEditor(e))
    })
}
function zs() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.dos.mouseCapture));
    return Di(Es, {
        class: "mt-4",
        label: e("mouse_lock"),
        checked: n,
        onChange: e=>t(Ci.actions.mouseCapture(e))
    })
}
function Rs() {
    const e = oi()
      , t = tr()
      , n = on((e=>!e.dos.noCursor));
    return Di(Es, {
        class: "mt-4",
        label: e("system_cursor"),
        checked: n,
        onChange: e=>t(Ci.actions.noCursor(!e))
    })
}
function Ls() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.dos.mobileControls));
    return Di(Es, {
        class: "mt-4",
        label: e("mobile_controls"),
        checked: n,
        onChange: e=>t(Ci.actions.mobileControls(e))
    })
}
function Ns() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.dos.mirroredControls));
    return Di(Es, {
        class: "mt-4",
        label: e("mirrored_controls"),
        checked: n,
        onChange: e=>t(Ci.actions.mirroredControls(e))
    })
}
function Is() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.dos.paused))
      , r = "run" !== on((e=>e.ui.window));
    return Di(Es, {
        class: "mt-4",
        label: e("pause"),
        checked: n,
        disabled: r,
        onChange: e=>t(Ci.actions.paused(e))
    })
}
function Us() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.dos.worker))
      , r = on((e=>e.dos.backendHardware))
      , o = "run" === on((e=>e.ui.window))
      , i = vi();
    return r && i.options.backendHardware ? null : Di(Es, {
        class: "mt-4",
        label: e("worker"),
        checked: n,
        disabled: o,
        onChange: e=>t(Ci.actions.dosWorker(e))
    })
}
function Ks() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.dos.backendHardware));
    return vi().options.backendHardware ? Di(Es, {
        class: "mt-4",
        label: e("hardware"),
        checked: n,
        onChange: e=>t(Ci.actions.dosBackendHardware(e))
    }) : null
}
function Fs() {
    const e = oi()
      , t = tr()
      , n = on((e=>e.auth.account))
      , r = on((e=>"dosboxX" === e.dos.backend))
      , o = on((e=>e.dos.sockdriveWrite)) && null !== n;
    return r ? Di(Es, {
        class: "mt-4",
        label: e("fat_write"),
        checked: o,
        onChange: e=>{
            n ? t(Ci.actions.setSockdriveWrite(e)) : ji(n, t)
        }
    }) : null
}
function Hs(e) {
    const t = le(null)
      , n = le(null);
    ae((()=>{
        if (null === (null == t ? void 0 : t.current))
            return;
        const n = t.current;
        let r = !1;
        function o(t) {
            const r = n.getBoundingClientRect()
              , o = Math.min(1, Math.max(0, (t.clientX - r.left) / r.width));
            e.onChange(o)
        }
        function i(e) {
            r = !0,
            o(e)
        }
        function s(e) {
            r && o(e)
        }
        function a(e) {
            r = !1
        }
        return n.addEventListener("pointerdown", i),
        n.addEventListener("pointermove", s),
        n.addEventListener("pointerup", a),
        n.addEventListener("pointercancel", a),
        n.addEventListener("pointerleave", a),
        ()=>{
            n.removeEventListener("pointerdown", i),
            n.removeEventListener("pointermove", s),
            n.removeEventListener("pointerup", a),
            n.removeEventListener("pointercancel", a),
            n.removeEventListener("pointerleave", a)
        }
    }
    ), [t]);
    const r = Math.min(Math.max(0, 100 * e.value), 100);
    return Di("div", {
        class: e.class + " slider option",
        children: [Di("div", {
            class: "label",
            children: e.label
        }), Di("div", {
            class: "touch",
            ref: t,
            children: [Di("div", {
                class: "bg"
            }), Di("div", {
                class: "point",
                ref: n,
                style: {
                    left: "calc(" + r + "% - 12px)"
                }
            })]
        })]
    })
}
function Vs(e) {
    const t = oi()
      , n = on((e=>e.dos.mouseSensitivity))
      , r = tr();
    return Di(Hs, {
        class: e.class,
        label: t("mouse_sensitivity"),
        value: n,
        onChange: e=>r(Ci.actions.mouseSensitivity(e))
    })
}
function Ws(e) {
    const t = oi()
      , n = on((e=>e.dos.scaleControls))
      , r = tr();
    return Di(Hs, {
        class: e.class,
        label: t("scale_controls"),
        value: n,
        onChange: e=>r(Ci.actions.scaleControls(e))
    })
}
function qs(e) {
    const t = oi()
      , n = on((e=>e.dos.volume))
      , r = tr();
    return Di(Hs, {
        class: e.class,
        label: t("volume"),
        value: n,
        onChange: e=>r(Ci.actions.volume(e))
    })
}
function Xs(e) {
    return Di("div", {
        class: "settings-frame frame-root items-start pl-4",
        children: [Di(Is, {}), Di(Rs, {}), Di(zs, {}), Di(Ls, {}), Di(Ns, {}), Di(Ws, {
            class: "mt-4"
        }), Di(Vs, {}), Di(qs, {}), Di(ws, {
            multiline: !0
        })]
    })
}
function $s() {
    const e = on((e=>e.dos.ciStartedAt))
      , t = on((e=>e.dos.stats))
      , n = Math.round(on((e=>e.dos.stats.cyclesPerMs)) / 1e3)
      , r = Math.round(t.driveRecv / 1024 / 1024 * 100) / 100
      , o = t.driveRecvTime / 1e3 > 1 ? Math.round(r / t.driveRecvTime * 1e3 * 100) / 100 : 0;
    return Di("div", {
        class: "stats-frame frame-root items-start px-4",
        children: Di("div", {
            class: "w-full overflow-x-auto",
            children: Di("table", {
                class: "table table-compact w-full",
                children: [Di("thead", {
                    children: Di("tr", {
                        children: [Di("th", {
                            children: "Metric"
                        }), Di("th", {
                            children: "Value"
                        })]
                    })
                }), Di("tbody", {
                    children: [Di("tr", {
                        children: [Di("td", {
                            children: "Uptime"
                        }), Di("td", {
                            children: [Math.round((Date.now() - e) / 100) / 10, " s"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Cycles/ms"
                        }), n <= 0 && Di("td", {
                            children: "~ K"
                        }), n > 0 && n <= 1e3 && Di("td", {
                            children: [n, " K"]
                        }), n > 1e3 && Di("td", {
                            children: [Math.round(n / 1e3), " KK"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "NonSkipSleep COUNT/s"
                        }), Di("td", {
                            children: t.nonSkippableSleepPreSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Sleep COUNT/s"
                        }), Di("td", {
                            children: t.sleepPerSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Sleep TIME/s"
                        }), Di("td", {
                            children: t.sleepTimePerSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Msg FRAME/s"
                        }), Di("td", {
                            children: t.framePerSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Msg SOUND/s"
                        }), Di("td", {
                            children: t.soundPerSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Msg SENT/s"
                        }), Di("td", {
                            children: t.msgSentPerSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Msg RECV/s"
                        }), Di("td", {
                            children: t.msgRecvPerSec
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Net SENT/s"
                        }), Di("td", {
                            children: [Math.round(t.netSent / 1024 * 100) / 100, "Kb"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "Net RECV/s"
                        }), Di("td", {
                            children: [Math.round(t.netRecv / 1024 * 100) / 100, "Kb"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "HDD RECV/s"
                        }), Di("td", {
                            children: [r, "Mb (~", o, "Mb/s)"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "HDD SENT/s"
                        }), Di("td", {
                            children: [Math.round(t.driveSent / 1024 / 1024 * 100) / 100, "Mb"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "HDD Cache"
                        }), Di("td", {
                            children: [Math.round(t.driveCacheUsed / 1024 / 1024 * 100) / 100, "Mb"]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "HDD Cache Hit/Miss"
                        }), Di("td", {
                            children: [t.driveCacheHit, " / ", t.driveCacheMiss]
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "HDD RX"
                        }), Di("td", {
                            children: t.driveIo.map((e=>e.read)).join(", ")
                        })]
                    }), Di("tr", {
                        children: [Di("td", {
                            children: "HDD TX"
                        }), Di("td", {
                            children: t.driveIo.map((e=>e.write)).join(", ")
                        })]
                    })]
                })]
            })
        })
    })
}
function Gs(e) {
    return Di("div", {
        class: "image-rendering-frame frame-root items-start pl-4",
        children: [Di(gs, {
            multiline: !0
        }), Di(_s, {
            multiline: !0
        })]
    })
}
function Ys() {
    const e = on((e=>e.dos.emuVersion));
    return Di("div", {
        class: "pre-run-window",
        children: [Di(Qs, {}), Di("div", {
            class: "text-center mt-8 absolute bottom-4",
            children: ["jsdos/emu version: ", Di("span", {
                class: "text-ellipsis overflow-hidden",
                children: ["8.1.19", "/", e]
            })]
        })]
    })
}
function Qs(e) {
    const t = on((e=>e.editor.configChanged))
      , n = on((e=>e.editor.bundleConfig))
      , r = on((e=>"none" !== e.ui.frame))
      , o = vi()
      , i = tr()
      , s = oi();
    async function a() {
        var e;
        if (t) {
            const t = n
              , s = null == (e = o.loadedBundle) ? void 0 : e.bundle;
            if (null === s || null === t || !ArrayBuffer.isView(s))
                throw new Error("Unexpected behaviour (internal state is broken), bundle is null");
            try {
                o.loadedBundle.bundle = await emulators.bundleUpdateConfig(s, t),
                i(Ci.actions.bndPlay({}))
            } catch (r) {
                i(Ci.actions.bndError(r.message ?? "unexpected error"))
            }
        } else
            i(Ci.actions.bndPlay({}))
    }
    return !0 === e.button ? Di("div", {
        class: "btn btn-accent w-full sm:hidden",
        onClick: a,
        children: [Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-6 h-6",
            children: [Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }), Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            })]
        }), s("play")]
    }) : Di("div", {
        class: e.class + " relative cursor-pointer w-1/4 h-1/4 min-w-48 min-h-48 max-w-96 max-h-96",
        onClick: a,
        children: [Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full play-button",
            children: [Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }), Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            })]
        }), Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-10 h-10 absolute right-0 bottom-0 cursor-pointer" + (r ? " sidebar-highlight" : ""),
            onClick: e=>{
                i(r ? Mi.actions.frameNone() : Mi.actions.framePreRun()),
                e.stopPropagation()
            }
            ,
            children: [Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            })]
        })]
    })
}
function Js(e) {
    return Di("div", {
        class: "prerun-frame frame-root items-start pl-4",
        children: [Di(Qs, {
            button: !0
        }), Di(Rs, {}), Di(zs, {}), Di(Ls, {}), Di(Ns, {}), Di(Ws, {
            class: "mt-4"
        }), Di(Vs, {}), Di(qs, {}), Di(ys, {
            multiline: !0
        }), Di(Us, {}), Di(bs, {
            multiline: !0
        }), Di(gs, {
            multiline: !0
        }), Di(Ks, {}), Di(Fs, {}), Di(Bs, {}), Di(ws, {
            multiline: !0
        })]
    })
}
function Zs(e) {
    const t = on((e=>e.ui.frame))
      , n = on((e=>e.ui.frameXs))
      , r = on((e=>e.ui.wideScreen));
    return "none" === t ? null : Di("div", {
        class: "frame " + (n ? " frame-xs " : "") + (n || r ? "" : " frame-md"),
        children: ["account" === t && Di(qi, {}), "settings" === t && Di(Xs, {}), "editor-conf" === t && Di(Ji, {}), "editor-fs" === t && Di(cs, {}), "network" === t && Di(Ps, {}), "stats" === t && Di($s, {}), "fat-drives" === t && Di(Ss, {}), "quick-save" === t && Di(As, {}), "image-rendering" === t && Di(Gs, {}), "prerun" === t && Di(Js, {})]
    })
}
function ea(e) {
    const t = on((e=>e.auth.account))
      , n = null !== t
      , r = "account" === on((e=>e.ui.frame))
      , o = tr();
    return Di("div", {
        class: "sidebar-button " + (r ? "sidebar-highlight " : "") + ("dz.caiiiycuk@gmail.com" === (null == t ? void 0 : t.email) ? "bg-accent " : "") + e.class,
        onClick: function() {
            ji(t, o)
        },
        children: [Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            })
        }), !1 === n && Di("div", {
            class: "sidebar-badge"
        })]
    })
}
function ta(e, t) {
    const n = mi(t).root;
    e ? n.requestFullscreen ? n.requestFullscreen() : n.webkitRequestFullscreen ? n.webkitRequestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : n.webkitEnterFullscreen ? n.webkitEnterFullscreen() : n.classList.add("jsdos-fullscreen-workaround") : n.classList.contains("jsdos-fullscreen-workaround") ? n.classList.remove("jsdos-fullscreen-workaround") : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(),
    t.dispatch(Mi.actions.setFullScreen(e))
}
function na(e) {
    const t = on((e=>e.ui.fullScreen))
      , n = Zn();
    return Di("div", {
        class: "fullscreen-button sidebar-button " + e.class,
        onClick: function() {
            ta(!t, n)
        },
        children: Di("div", {
            class: "w-full h-full scale-75 hover:scale-90",
            children: [!t && Di("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                stroke: "none",
                "enable-background": "new 0 0 16 16",
                children: Di("g", {
                    children: Di("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z"
                    })
                })
            }), t && Di("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                stroke: "none",
                "enable-background": "new 0 0 16 16",
                children: Di("g", {
                    children: Di("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.99,0.99c0-0.55-0.45-1-1-1c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29V1.99 c0-0.55-0.45-1-1-1s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1.59L15.7,1.7 C15.88,1.52,15.99,1.27,15.99,0.99z M5.99,8.99h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59l-3.29,3.29c-0.18,0.18-0.29,0.43-0.29,0.71 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C6.99,9.44,6.54,8.99,5.99,8.99z"
                    })
                })
            })]
        })
    })
}
function ra(e) {
    const t = "network" === on((e=>e.ui.frame))
      , n = on((e=>"connected" !== e.dos.network.ipx))
      , r = tr();
    return Di("div", {
        class: "network-button sidebar-button " + (t ? " sidebar-highlight " : "") + (n ? " inactive " : "") + e.class,
        onClick: function() {
            r(t ? Mi.actions.frameNone() : Mi.actions.frameNetwork())
        },
        children: Di("div", {
            class: "w-full h-full",
            children: [Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-full h-full",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                })
            }), n && Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-full text-error h-full absolute top-0 left-0",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4 4L18 18"
                })
            })]
        })
    })
}
function oa(e) {
    return Di(fa, {
        class: e.class,
        frame: "image-rendering",
        action: Mi.actions.frameImageRendering(),
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            })
        })
    })
}
function ia(e) {
    const t = null === on((e=>e.auth.account)) && !1
      , n = t ? Mi.actions.modalLogin() : Mi.actions.frameQuickSave();
    return Di(fa, {
        class: e.class + (t ? " opacity-50" : ""),
        frame: "quick-save",
        action: n,
        children: [Di(Os, {}), t && Di(Cs, {})]
    })
}
function sa(e) {
    return Di(fa, {
        class: e.class,
        frame: "fat-drives",
        action: Mi.actions.frameFatDrives(),
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
            })
        })
    })
}
function aa(e) {
    return Di(fa, {
        class: e.class,
        frame: "editor-conf",
        action: Mi.actions.frameConf(),
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            })
        })
    })
}
function ca(e) {
    return Di(fa, {
        class: e.class,
        frame: "editor-fs",
        action: Mi.actions.frameFs(),
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
            })
        })
    })
}
function la() {
    const e = Math.round(on((e=>e.dos.stats.cyclesPerMs)) / 1e3);
    return Di(fa, {
        class: "cycles",
        frame: "stats",
        action: Mi.actions.frameStats(),
        children: [e <= 0 && Di(g, {
            children: [Di("span", {
                children: "~"
            }), Di("sup", {
                children: "KC"
            })]
        }), e > 0 && e <= 1e3 && Di(g, {
            children: [Di("span", {
                children: e
            }), Di("sup", {
                children: "KC"
            })]
        }), e > 0 && e > 1e3 && Di(g, {
            children: [Di("span", {
                children: Math.round(e / 1e3)
            }), Di("sup", {
                children: [Di("strong", {
                    children: "K"
                }), "KC"]
            })]
        })]
    })
}
function ua(e) {
    const t = Zn()
      , n = le(null)
      , [r] = ie({
        recv: 0,
        enabled: !1,
        delayLedTo: 0
    });
    ae((()=>{
        if (n.current) {
            const e = n.current;
            e.classList.add("bg-base-300");
            const o = setInterval((()=>{
                if (r.delayLedTo <= Date.now()) {
                    const n = t.getState().dos.stats.driveRecv
                      , o = r.recv !== n;
                    o !== r.enabled && (e.classList.remove("bg-base-300", "bg-green-300", "animate-led"),
                    o ? e.classList.add("bg-green-300", "animate-led") : e.classList.add("bg-base-300"),
                    r.enabled = o),
                    r.delayLedTo = o ? Date.now() + 300 + 1500 * Math.random() : 0,
                    r.recv = n
                }
            }
            ), 150);
            return ()=>{
                e.classList.remove("bg-base-300", "bg-green-300", "animate-led"),
                clearInterval(o)
            }
        }
    }
    ), [n, r]);
    const [o,i] = ie(!1)
      , [s,a] = ie({
        recv: 0,
        timeoutId: null
    })
      , c = on((e=>e.dos.stats.driveRecv));
    if (s.recv !== c) {
        o || i(!0),
        s.timeoutId && clearTimeout(s.timeoutId);
        const e = setTimeout((()=>{
            i(!1),
            a({
                recv: c,
                timeoutId: null
            })
        }
        ), 1e3);
        a({
            recv: c,
            timeoutId: e
        })
    }
    return Di("div", {
        ref: n,
        class: "self-end mr-2 -mt-3 w-2 h-1"
    })
}
function da(e) {
    return Di(fa, {
        class: e.class,
        action: Mi.actions.frameSettings(),
        frame: "settings",
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: [Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            })]
        })
    })
}
function fa(e) {
    const t = on((e=>e.ui.frame)) === e.frame
      , n = tr();
    return Di("div", {
        class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
        onClick: function() {
            n(t ? Mi.actions.frameNone() : e.action)
        },
        children: e.children
    })
}
function ha(e) {
    const t = on((e=>e.dos.softKeyboard))
      , n = tr();
    return Di("div", {
        class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
        onClick: ()=>n(Ci.actions.softKeyboard(!t)),
        children: Di("svg", {
            class: "w-full h-full",
            fill: "currentColor",
            stroke: "currentColor",
            version: "1.1",
            id: "Layer_1",
            viewBox: "0 0 507.9 507.9",
            children: [Di("g", {
                id: "SVGRepo_bgCarrier",
                "stroke-width": "0"
            }), Di("g", {
                id: "SVGRepo_tracerCarrier",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), Di("g", {
                id: "SVGRepo_iconCarrier",
                children: [" ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M465.7,140.75H268.1v-77.3c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v77.3H42.3c-23.3,0-42.3,19-42.3,42.3 v233.2c0,23.3,19,42.3,42.3,42.3h423.3c23.3,0,42.3-19,42.3-42.3v-233.2C508,159.75,489,140.75,465.7,140.75z M465.7,430.35H42.3 c-7.8,0-14.1-6.3-14.1-14.1v-233.2c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v233.2h0.1 C479.8,424.05,473.5,430.35,465.7,430.35z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M440.6,194.05h-85.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h85.4c7.8,0,14.1-6.3,14.1-14.1 C454.7,200.35,448.4,194.05,440.6,194.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M80.9,377.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95,383.35,88.7,377.05,80.9,377.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M303.3,377.05H141.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h161.8c7.8,0,14.1-6.3,14.1-14.1 C317.5,383.35,311.1,377.05,303.3,377.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M80.9,255.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,261.35,88.7,255.05,80.9,255.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M152.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,261.35,160.6,255.05,152.8,255.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M224.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,261.35,232.6,255.05,224.8,255.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M296.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,261.35,304.5,255.05,296.7,255.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M80.9,194.05H67.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,200.35,88.7,194.05,80.9,194.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M152.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,200.35,160.6,194.05,152.8,194.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M224.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,200.35,232.6,194.05,224.8,194.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M296.7,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,200.35,304.5,194.05,296.7,194.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M368.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,261.35,376.4,255.05,368.7,255.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M440.6,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,261.35,448.4,255.05,440.6,255.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M368.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,322.35,376.4,316.05,368.7,316.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M440.6,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,322.35,448.4,316.05,440.6,316.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M368.7,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,383.35,376.4,377.05,368.7,377.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M440.6,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,383.35,448.4,377.05,440.6,377.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M80.9,316.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,322.35,88.7,316.05,80.9,316.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M152.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,322.35,160.6,316.05,152.8,316.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M224.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,322.35,232.6,316.05,224.8,316.05z"
                        }), " "]
                    }), " "]
                }), " ", Di("g", {
                    children: [" ", Di("g", {
                        children: [" ", Di("path", {
                            d: "M296.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,322.35,304.5,316.05,296.7,316.05z"
                        }), " "]
                    }), " "]
                }), " "]
            })]
        })
    })
}
function pa(e) {
    return Di(fa, {
        class: e.class,
        frame: "prerun",
        action: Mi.actions.framePreRun(),
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: [Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            })]
        })
    })
}
function ma(e) {
    const t = on((e=>e.ui.window))
      , n = on((e=>e.ui.editor))
      , r = on((e=>e.dos.backend))
      , o = on((e=>e.ui.kiosk))
      , i = !on((e=>e.ui.noNetworking))
      , s = !on((e=>e.ui.noCloud))
      , a = on((e=>e.dos.mobileControls));
    return o ? null : Di("div", {
        class: "sidebar",
        children: ["run" === t && "dosbox" === r && Di(js, {}), "run" === t && "dosboxX" === r && Di(ia, {}), "run" === t && a && Di(ha, {}), "run" === t && Di(oa, {}), "run" === t && i && Di(ra, {}), n && "prerun" === t && Di(aa, {}), n && "prerun" === t && "dosboxX" === r && Di(sa, {}), n && "run" === t && Di(ca, {}), Di("div", {
            class: "contentbar"
        }), "run" === t && Di(na, {}), "run" === t && Di(la, {}), "run" === t && Di(ua, {}), "prerun" === t && Di(pa, {}), "run" === t && Di(da, {}), "run" !== t && s && Di(ea, {})]
    })
}
const va = 0
  , ya = 48
  , ba = 256
  , ga = 258
  , _a = 259
  , wa = 257
  , ka = 32
  , xa = 342
  , Ca = 341
  , Sa = 340
  , Ea = 280
  , Pa = 91
  , Oa = 93
  , Ma = 59
  , ja = 39
  , Aa = 46
  , Da = 44
  , Ta = 263
  , Ba = 265
  , za = 264
  , Ra = 262
  , La = {
    8: _a,
    9: ga,
    13: wa,
    16: Sa,
    17: Ca,
    18: xa,
    19: 284,
    27: ba,
    32: ka,
    33: 266,
    34: 267,
    35: 269,
    36: 268,
    37: Ta,
    38: Ba,
    39: Ra,
    40: za,
    45: 260,
    46: 261,
    48: ya,
    49: 49,
    50: 50,
    51: 51,
    52: 52,
    53: 53,
    54: 54,
    55: 55,
    56: 56,
    57: 57,
    59: Ma,
    64: 61,
    65: 65,
    66: 66,
    67: 67,
    68: 68,
    69: 69,
    70: 70,
    71: 71,
    72: 72,
    73: 73,
    74: 74,
    75: 75,
    76: 76,
    77: 77,
    78: 78,
    79: 79,
    80: 80,
    81: 81,
    82: 82,
    83: 83,
    84: 84,
    85: 85,
    86: 86,
    87: 87,
    88: 88,
    89: 89,
    90: 90,
    91: Pa,
    93: Oa,
    96: 320,
    97: 321,
    98: 322,
    99: 323,
    100: 324,
    101: 325,
    102: 326,
    103: 327,
    104: 328,
    105: 329,
    111: 331,
    112: 290,
    113: 291,
    114: 292,
    115: 293,
    116: 294,
    117: 295,
    118: 296,
    119: 297,
    120: 298,
    121: 299,
    122: 300,
    123: 301,
    144: 282,
    145: 281,
    173: 45,
    186: Ma,
    187: 61,
    188: Da,
    189: 45,
    190: Aa,
    191: 47,
    219: Pa,
    220: 92,
    221: Oa
}
  , Na = {
    KBD_NONE: va,
    KBD_0: ya,
    KBD_1: 49,
    KBD_2: 50,
    KBD_3: 51,
    KBD_4: 52,
    KBD_5: 53,
    KBD_6: 54,
    KBD_7: 55,
    KBD_8: 56,
    KBD_9: 57,
    KBD_a: 65,
    KBD_b: 66,
    KBD_c: 67,
    KBD_d: 68,
    KBD_e: 69,
    KBD_f: 70,
    KBD_g: 71,
    KBD_h: 72,
    KBD_i: 73,
    KBD_j: 74,
    KBD_k: 75,
    KBD_l: 76,
    KBD_m: 77,
    KBD_n: 78,
    KBD_o: 79,
    KBD_p: 80,
    KBD_q: 81,
    KBD_r: 82,
    KBD_s: 83,
    KBD_t: 84,
    KBD_u: 85,
    KBD_v: 86,
    KBD_w: 87,
    KBD_x: 88,
    KBD_y: 89,
    KBD_z: 90,
    KBD_f1: 290,
    KBD_f2: 291,
    KBD_f3: 292,
    KBD_f4: 293,
    KBD_f5: 294,
    KBD_f6: 295,
    KBD_f7: 296,
    KBD_f8: 297,
    KBD_f9: 298,
    KBD_f10: 299,
    KBD_f11: 300,
    KBD_f12: 301,
    KBD_kp0: 320,
    KBD_kp1: 321,
    KBD_kp2: 322,
    KBD_kp3: 323,
    KBD_kp4: 324,
    KBD_kp5: 325,
    KBD_kp6: 326,
    KBD_kp7: 327,
    KBD_kp8: 328,
    KBD_kp9: 329,
    KBD_kpperiod: 330,
    KBD_kpdivide: 331,
    KBD_kpmultiply: 332,
    KBD_kpminus: 333,
    KBD_kpplus: 334,
    KBD_kpenter: 335,
    KBD_esc: ba,
    KBD_tab: ga,
    KBD_backspace: _a,
    KBD_enter: wa,
    KBD_space: ka,
    KBD_leftalt: xa,
    KBD_rightalt: 346,
    KBD_leftctrl: Ca,
    KBD_rightctrl: 345,
    KBD_leftshift: Sa,
    KBD_rightshift: 344,
    KBD_capslock: Ea,
    KBD_scrolllock: 281,
    KBD_numlock: 282,
    KBD_grave: 96,
    KBD_minus: 45,
    KBD_equals: 61,
    KBD_backslash: 92,
    KBD_leftbracket: Pa,
    KBD_rightbracket: Oa,
    KBD_semicolon: Ma,
    KBD_quote: ja,
    KBD_period: Aa,
    KBD_comma: Da,
    KBD_slash: 47,
    KBD_printscreen: 283,
    KBD_pause: 284,
    KBD_insert: 260,
    KBD_home: 268,
    KBD_pageup: 266,
    KBD_delete: 261,
    KBD_end: 269,
    KBD_pagedown: 267,
    KBD_left: Ta,
    KBD_up: Ba,
    KBD_down: za,
    KBD_right: Ra,
    KBD_extra_lt_gt: 348
};
for (const Fl of Object.keys(La))
    ;
function Ia(e) {
    return La[e] || 0
}
function Ua(e, t, n, r) {
    const o = e.parentElement.getBoundingClientRect()
      , i = o.width
      , s = o.height;
    if (0 === n)
        return;
    const a = r === ki ? i / s : r ?? t / n;
    let c = i
      , l = i / a;
    l > s && (l = s,
    c = s * a),
    e.style.position = "relative",
    e.style.top = (s - l) / 2 + "px",
    e.style.left = (i - c) / 2 + "px",
    e.style.width = c + "px",
    e.style.height = l + "px"
}
const Ka = "\nattribute vec4 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main(void) {\n  gl_Position = aVertexPosition;\n  vTextureCoord = aTextureCoord;\n}\n"
  , Fa = "\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\n\nvoid main(void) {\n  highp vec4 color = texture2D(uSampler, vTextureCoord);\n  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);\n}\n";
function Ha(e, t, n) {
    const r = e.getContext("webgl");
    if (null === r)
        throw new Error("Unable to create webgl context on given canvas");
    const o = function(e, t, n) {
        const r = Va(e, e.VERTEX_SHADER, t)
          , o = Va(e, e.FRAGMENT_SHADER, n)
          , i = e.createProgram();
        if (e.attachShader(i, r),
        e.attachShader(i, o),
        e.linkProgram(i),
        !e.getProgramParameter(i, e.LINK_STATUS))
            throw new Error("Unable to initialize the shader program: " + e.getProgramInfoLog(i));
        return i
    }(r, Ka, Fa)
      , i = r.getAttribLocation(o, "aVertexPosition")
      , s = r.getAttribLocation(o, "aTextureCoord")
      , a = r.getUniformLocation(o, "uSampler");
    !function(e, t, n) {
        const r = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, r);
        const o = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(o), e.STATIC_DRAW),
        e.vertexAttribPointer(t, 3, e.FLOAT, !1, 0, 0),
        e.enableVertexAttribArray(t);
        const i = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, i);
        const s = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(s), e.STATIC_DRAW),
        e.vertexAttribPointer(n, 2, e.FLOAT, !1, 0, 0),
        e.enableVertexAttribArray(n)
    }(r, i, s);
    const c = r.createTexture();
    r.bindTexture(r.TEXTURE_2D, c),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR);
    const l = new Uint8Array([0, 0, 0]);
    r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, l),
    r.useProgram(o),
    r.activeTexture(r.TEXTURE0),
    r.uniform1i(a, 0);
    let u = 0
      , d = 0
      , f = null
      , h = null
      , p = 0;
    const m = ()=>{
        null !== h && (r.texImage2D(r.TEXTURE_2D, 0, p, u, d, 0, p, r.UNSIGNED_BYTE, h),
        h = null),
        r.drawArrays(r.TRIANGLES, 0, 6),
        f = null
    }
      , v = ()=>{
        Ua(e, u, d, n)
    }
      , y = (t,n)=>{
        u = t,
        d = n,
        e.width = u,
        e.height = d,
        h = null,
        r.viewport(0, 0, u, d),
        v()
    }
    ;
    t.events().onFrameSize(y),
    t.events().onFrame(((e,t)=>{
        h = null != e ? e : t,
        p = null != e ? r.RGB : r.RGBA,
        null === f && (f = requestAnimationFrame(m))
    }
    )),
    y(t.width(), t.height());
    const b = new ResizeObserver(v);
    return b.observe(e.parentElement),
    window.addEventListener("resize", v),
    ()=>{
        t.events().onFrameSize((()=>{}
        )),
        t.events().onFrame((()=>{}
        )),
        b.disconnect(),
        window.removeEventListener("resize", v)
    }
}
function Va(e, t, n) {
    const r = e.createShader(t);
    if (e.shaderSource(r, n),
    e.compileShader(r),
    !e.getShaderParameter(r, e.COMPILE_STATUS)) {
        const t = e.getShaderInfoLog(r);
        throw e.deleteShader(r),
        new Error("An error occurred compiling the shaders: " + t)
    }
    return r
}
function Wa(e, t, n) {
    const r = e.getContext("2d");
    if (null === r)
        throw new Error("Unable to create 2d context on given canvas");
    let o = 0
      , i = 0;
    const s = ()=>{
        Ua(e, o, i, n)
    }
    ;
    let a = new Uint8ClampedArray(0);
    const c = (t,n)=>{
        o = t,
        i = n,
        e.width = o,
        e.height = i,
        a = new Uint8ClampedArray(t * n * 4),
        s()
    }
    ;
    t.events().onFrameSize(c),
    t.events().onFrame(((e,t)=>{
        if (null === e && null === t)
            return;
        const n = null !== e ? e : t;
        let s = 0
          , c = 0;
        for (; c < a.length; )
            a[c++] = n[s++],
            a[c++] = n[s++],
            a[c++] = n[s++],
            a[c++] = 255,
            n.length === a.length && s++;
        r.putImageData(new ImageData(a,o,i), 0, 0)
    }
    )),
    c(t.width(), t.height());
    const l = new ResizeObserver(s);
    return l.observe(e.parentElement),
    window.addEventListener("resize", s),
    ()=>{
        t.events().onFrameSize((()=>{}
        )),
        t.events().onFrame((()=>{}
        )),
        l.disconnect(),
        window.removeEventListener("resize", s)
    }
}
class qa {
    constructor() {
        t(this, "samplesQueue", [])
    }
    push(e) {
        this.samplesQueue.push(e)
    }
    length() {
        let e = 0;
        for (const t of this.samplesQueue)
            e += t.length;
        return e
    }
    writeTo(e, t) {
        let n = 0;
        for (; this.samplesQueue.length > 0; ) {
            const r = this.samplesQueue[0]
              , o = Math.min(t - n, r.length);
            if (o === r.length ? (e.set(r, n),
            this.samplesQueue.shift()) : (e.set(r.slice(0, o), n),
            this.samplesQueue[0] = r.slice(o)),
            n += o,
            n === t)
                break
        }
        n < t && e.fill(0, n)
    }
}
function Xa(e, t) {
    if (e.type.match(/^touch/)) {
        const n = e
          , r = t.getBoundingClientRect();
        return {
            x: n.targetTouches[0].clientX - r.x,
            y: n.targetTouches[0].clientY - r.y,
            mX: 0,
            mY: 0
        }
    }
    if (e.type.match(/^pointer/)) {
        const t = e;
        return {
            x: t.offsetX,
            y: t.offsetY,
            mX: t.movementX,
            mY: t.movementY
        }
    }
    {
        const t = e;
        return {
            x: t.offsetX,
            y: t.offsetY,
            mX: t.movementX,
            mY: t.movementY,
            button: 0 === t.button ? 0 : 1
        }
    }
}
const $a = function() {
    const e = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2
      , t = e && !!("ontouchstart"in window)
      , n = e && !!window.PointerEvent
      , r = e && !!window.MSPointerEvent;
    let o = !e;
    const i = []
      , s = []
      , a = []
      , c = []
      , l = [];
    return n ? (i.push("pointerdown"),
    a.push("pointerup", "pointercancel"),
    s.push("pointermove"),
    l.push("touchstart", "touchmove", "touchend")) : r ? (i.push("MSPointerDown"),
    s.push("MSPointerMove"),
    a.push("MSPointerUp")) : t ? (o = !1,
    i.push("touchstart", "mousedown"),
    s.push("touchmove"),
    a.push("touchend", "touchcancel", "mouseup")) : (i.push("mousedown"),
    s.push("mousemove"),
    a.push("mouseup"),
    c.push("mouseleave")),
    {
        mobile: e,
        canLock: o,
        starters: i,
        changers: s,
        enders: a,
        prevents: l,
        leavers: c
    }
}();
function Ga(e, t, n, r, o) {
    const i = n=>{
        if (n.target !== e)
            return;
        const r = Xa(n, e);
        t(r.x, r.y, r.button),
        n.stopPropagation()
    }
      , s = t=>{
        if (t.target !== e)
            return;
        const r = Xa(t, e);
        n(r.x, r.y, r.mX, r.mY),
        t.stopPropagation()
    }
      , a = t=>{
        const n = Xa(t, e);
        r(n.x, n.y, n.button),
        t.stopPropagation()
    }
      , c = t=>{
        if (t.target !== e)
            return;
        const n = Xa(t, e);
        o(n.x, n.y),
        t.stopPropagation()
    }
      , l = e=>{
        e.stopPropagation()
    }
      , u = {
        capture: !1
    };
    for (const d of $a.starters)
        e.addEventListener(d, i, u);
    for (const d of $a.changers)
        e.addEventListener(d, s, u);
    for (const d of $a.enders)
        e.addEventListener(d, a, u);
    for (const d of $a.prevents)
        e.addEventListener(d, l, u);
    for (const d of $a.leavers)
        e.addEventListener(d, c, u);
    return ()=>{
        for (const t of $a.starters)
            e.removeEventListener(t, i, u);
        for (const t of $a.changers)
            e.removeEventListener(t, s, u);
        for (const t of $a.enders)
            e.removeEventListener(t, a, u);
        for (const t of $a.prevents)
            e.removeEventListener(t, l, u);
        for (const t of $a.leavers)
            e.removeEventListener(t, c, u)
    }
}
const Ya = .01;
function Qa(e, t, n) {
    const r = (e,r)=>function(e, t, n, r) {
        const {width: o, height: i} = n.getBoundingClientRect()
          , s = r.width()
          , a = r.height()
          , c = s / a;
        let l = o
          , u = o / c;
        u > i && (u = i,
        l = i * c);
        const d = (i - u) / 2
          , f = (o - l) / 2;
        let h = Math.max(0, Math.min(1, (e - f) / l))
          , p = Math.max(0, Math.min(1, (t - d) / u));
        h <= Ya && (h = 0);
        h >= 1 - Ya && (h = 1);
        p <= Ya && (p = 0);
        p >= 1 - Ya && (p = 1);
        return {
            x: h,
            y: p
        }
    }(e, r, t, n);
    return document.pointerLockElement === t && document.exitPointerLock(),
    Ga(t, (function(t, o, i) {
        const s = r(t, o);
        n.sendMouseMotion(s.x, s.y),
        n.sendMouseButton(i ?? e, !0)
    }
    ), (function(e, t, o, i) {
        const s = r(e, t);
        n.sendMouseMotion(s.x, s.y)
    }
    ), (function(t, o, i) {
        const s = r(t, o);
        n.sendMouseMotion(s.x, s.y),
        n.sendMouseButton(i ?? e, !1)
    }
    ), (function(e, t) {
        const o = r(e, t);
        n.sendMouseMotion(o.x, o.y)
    }
    ))
}
const Ja = 500
  , Za = 50;
function ec(e, t, n, r) {
    let o = -1
      , i = 0
      , s = 0
      , a = 0;
    return Ga(n, ((e,t,n)=>{
        o = Date.now(),
        i = 0,
        s = e,
        a = t,
        void 0 !== n && r.sendMouseButton(n, !0)
    }
    ), (function(t, n, o, c) {
        void 0 === o && (o = t - s),
        void 0 === c && (c = n - a),
        s = t,
        a = n,
        0 === o && 0 === c || (i += Math.abs(o) + Math.abs(c),
        r.sendMouseRelativeMotion(o * e * 2, c * e * 2))
    }
    ), ((e,n,s)=>{
        if (void 0 !== s)
            r.sendMouseButton(s, !1);
        else {
            if (Date.now() - o < Ja && i < Za) {
                const e = s ?? t;
                r.sendMouseButton(e, !0),
                setTimeout((()=>r.sendMouseButton(e, !1)), 60)
            }
        }
    }
    ), (()=>{}
    ))
}
function tc(e, t, n, r, o) {
    if (e && !$a.canLock)
        return ec(t, n, r, o);
    if (e) {
        const e = function(e) {
            function t() {
                document.pointerLockElement === e || (e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock).call(e)
            }
            const n = {
                capture: !0
            };
            for (const r of $a.starters)
                e.addEventListener(r, t, n);
            return ()=>{
                for (const r of $a.starters)
                    e.removeEventListener(r, t, n)
            }
        }(r)
          , i = ec(t, n, r, o);
        return ()=>{
            i(),
            e()
        }
    }
    return Qa(n, r, o)
}
function nc(e, t) {
    const n = document.createElement("div");
    return n.className = e,
    void 0 !== t && (n.innerHTML = t),
    n
}
class rc {
    constructor(e, n, r, o) {
        t(this, "options"),
        t(this, "root"),
        t(this, "canvas"),
        t(this, "mouseOverlay"),
        t(this, "width"),
        t(this, "height"),
        t(this, "keyboardVisible", !1),
        t(this, "pointerLock", !1),
        t(this, "pointerDisabled", !1),
        t(this, "pointerButton", 0),
        t(this, "toggleKeyboard"),
        t(this, "onResize"),
        t(this, "onKeyDown"),
        t(this, "onKeyUp"),
        t(this, "onKeyPress"),
        t(this, "onKeysPress"),
        this.toggleKeyboard = r,
        this.options = o,
        this.root = e,
        this.root.classList.add("emulator-root"),
        this.canvas = n,
        this.canvas.className = "emulator-canvas",
        this.mouseOverlay = nc("emulator-mouse-overlay", ""),
        this.root.appendChild(this.mouseOverlay),
        this.width = e.offsetWidth,
        this.height = e.offsetHeight,
        this.onResize = [],
        this.onKeyDown = ()=>{}
        ,
        this.onKeyUp = ()=>{}
        ,
        this.onKeyPress = ()=>{}
        ,
        this.onKeysPress = ()=>{}
        ,
        new ResizeObserver((t=>{
            for (const n of t)
                if (n.target === e) {
                    this.width = n.contentRect.width,
                    this.height = n.contentRect.height;
                    for (const e of this.onResize)
                        e(this.width, this.height)
                }
        }
        )).observe(this.root)
    }
    addOnResize(e) {
        this.onResize.push(e)
    }
    removeOnResize(e) {
        this.onResize = this.onResize.filter((t=>t !== e))
    }
    setOnKeyDown(e) {
        this.onKeyDown = e
    }
    fireKeyDown(e) {
        this.onKeyDown(e)
    }
    setOnKeyUp(e) {
        this.onKeyUp = e
    }
    fireKeyUp(e) {
        this.onKeyUp(e)
    }
    setOnKeyPress(e) {
        this.onKeyPress = e
    }
    fireKeyPress(e) {
        this.onKeyPress(e)
    }
    setOnKeysPress(e) {
        this.onKeysPress = e
    }
    fireKeysPress(e) {
        this.onKeysPress(e)
    }
}
function oc(e) {
    return void 0 !== e.layersConfig ? (1 === e.layersConfig.version && function(e) {
        for (const t of e.layers)
            for (const e of t.controls)
                if ("Key" === e.type) {
                    const t = e;
                    "number" == typeof t.mapTo && (t.mapTo = [t.mapTo])
                }
    }(e.layersConfig),
    e.layersConfig) : void 0 !== e.layers ? e.layers : null
}
const ic = function() {
    const e = {};
    for (const t of Object.keys(Na))
        e[Na[t]] = t.substr(4, 2);
    return e
}();
function sc(e, t, n) {
    const r = Math.round(.6 * n)
      , o = Math.round(.5 * n)
      , i = Math.max(1, Math.round(n / 20))
      , s = pc[e.toLowerCase()]
      , a = void 0 === s ? e : ""
      , c = ac("emulator-button-touch-zone")
      , l = ac("emulator-button")
      , u = ac("emulator-button-text", void 0 === s ? void 0 === a || 0 === a.length ? "□" : a.substr(0, 1).toUpperCase() : "");
    void 0 !== s && (l.style.backgroundImage = 'url("' + s + '")'),
    l.style.width = r + "px",
    l.style.height = r + "px",
    u.style.fontSize = o + "px",
    c.widthPx = n - 2 * i,
    c.heightPx = n - 2 * i,
    c.style.width = c.widthPx + "px",
    c.style.height = c.heightPx + "px",
    c.style.borderWidth = i + "px",
    c.appendChild(l),
    c.appendChild(u);
    const d = e=>{
        void 0 !== t.onDown && t.onDown(),
        void 0 !== t.onClick && t.onClick(),
        e.stopPropagation(),
        e.preventDefault()
    }
      , f = e=>{
        void 0 !== t.onUp && t.onUp(),
        e.stopPropagation(),
        e.preventDefault()
    }
      , h = e=>{
        e.stopPropagation(),
        e.preventDefault()
    }
      , p = {
        capture: !0
    };
    for (const m of $a.starters)
        c.addEventListener(m, d, p);
    for (const m of $a.enders)
        c.addEventListener(m, f, p);
    for (const m of $a.changers)
        c.addEventListener(m, h, p);
    for (const m of $a.leavers)
        c.addEventListener(m, h, p);
    for (const m of $a.prevents)
        c.addEventListener(m, h, p);
    return c
}
function ac(e, t) {
    const n = document.createElement("div");
    return n.className = e,
    void 0 !== t && (n.innerHTML = t),
    n
}
function cc(e) {
    return "number" == typeof e ? ic[e] : e
}
function lc(e, t) {
    return "click" === e.action ? {
        onClick: ()=>t.fireKeyPress(e.mapTo)
    } : {
        onDown: ()=>t.fireKeyDown(e.mapTo),
        onUp: ()=>t.fireKeyUp(e.mapTo)
    }
}
const uc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  , dc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  , fc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  , hc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  , pc = {
    fullscreen: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    save: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
    options: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    keyboard: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    up: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    down: uc,
    do: uc,
    dw: uc,
    dwn: uc,
    left: dc,
    le: dc,
    lft: dc,
    right: fc,
    ri: fc,
    rght: fc,
    rgh: fc,
    enter: hc,
    en: hc,
    enr: hc,
    ent: hc,
    entr: hc
}
  , mc = 500
  , vc = 50;
function yc(e, t) {
    const n = e.mouseOverlay
      , r = (n,r)=>function(e, t, n, r) {
        const o = n.width()
          , i = n.height()
          , s = r.width
          , a = r.height
          , c = o / i;
        let l = s
          , u = s / c;
        u > a && (u = a,
        l = a * c);
        const d = (a - u) / 2
          , f = (s - l) / 2;
        let h = Math.max(0, Math.min(1, (e - f) / l))
          , p = Math.max(0, Math.min(1, (t - d) / u));
        h <= bc && (h = 0);
        h >= 1 - bc && (h = 1);
        p <= bc && (p = 0);
        p >= 1 - bc && (p = 1);
        return {
            x: h,
            y: p
        }
    }(n, r, t, e);
    return document.pointerLockElement === n && document.exitPointerLock(),
    gc(n, e, (function(e, n, o) {
        const i = r(e, n);
        t.sendMouseMotion(i.x, i.y),
        t.sendMouseButton(o, !0)
    }
    ), (function(e, n, o, i) {
        const s = r(e, n);
        t.sendMouseMotion(s.x, s.y)
    }
    ), (function(e, n, o) {
        const i = r(e, n);
        t.sendMouseMotion(i.x, i.y),
        t.sendMouseButton(o, !1)
    }
    ), (function(e, n) {
        const o = r(e, n);
        t.sendMouseMotion(o.x, o.y)
    }
    ))
}
const bc = .01;
function gc(e, t, n, r, o, i) {
    let s = 0;
    const a = r=>{
        if (r.target !== e)
            return;
        if (t.pointerDisabled)
            return void r.stopPropagation();
        const o = Xa(r, e);
        s = o.button || t.pointerButton,
        n(o.x, o.y, s),
        r.stopPropagation()
    }
      , c = n=>{
        if (n.target !== e)
            return;
        if (t.pointerDisabled)
            return void n.stopPropagation();
        const o = Xa(n, e);
        r(o.x, o.y, o.mX, o.mY),
        n.stopPropagation()
    }
      , l = n=>{
        if (t.pointerDisabled)
            return void n.stopPropagation();
        const r = Xa(n, e);
        o(r.x, r.y, s),
        n.stopPropagation()
    }
      , u = n=>{
        if (n.target !== e)
            return;
        if (t.pointerDisabled)
            return void n.stopPropagation();
        const r = Xa(n, e);
        i(r.x, r.y),
        n.stopPropagation()
    }
      , d = e=>{
        e.stopPropagation()
    }
      , f = {
        capture: !1
    };
    for (const h of $a.starters)
        e.addEventListener(h, a, f);
    for (const h of $a.changers)
        e.addEventListener(h, c, f);
    for (const h of $a.enders)
        e.addEventListener(h, l, f);
    for (const h of $a.prevents)
        e.addEventListener(h, d, f);
    for (const h of $a.leavers)
        e.addEventListener(h, u, f);
    return ()=>{
        for (const t of $a.starters)
            e.removeEventListener(t, a, f);
        for (const t of $a.changers)
            e.removeEventListener(t, c, f);
        for (const t of $a.enders)
            e.removeEventListener(t, l, f);
        for (const t of $a.prevents)
            e.removeEventListener(t, d, f);
        for (const t of $a.leavers)
            e.removeEventListener(t, u, f)
    }
}
function _c(e, t, n, r) {
    return e && !$a.canLock ? function(e, t, n) {
        const r = t.mouseOverlay;
        let o = -1
          , i = 0
          , s = 0
          , a = 0;
        return gc(r, t, ((e,t)=>{
            o = Date.now(),
            i = 0,
            s = e,
            a = t
        }
        ), (function(t, r, o, c) {
            void 0 === o && (o = t - s),
            void 0 === c && (c = r - a),
            s = t,
            a = r,
            0 === o && 0 === c || (i += Math.abs(o) + Math.abs(c),
            n.sendMouseRelativeMotion(o * e * 2, c * e * 2))
        }
        ), ((e,r)=>{
            if (Date.now() - o < mc && i < vc) {
                const e = t.pointerButton || 0;
                n.sendMouseButton(e, !0),
                setTimeout((()=>n.sendMouseButton(e, !1)), 60)
            }
        }
        ), (()=>{}
        ))
    }(t, n, r) : e ? function(e, t, n) {
        const r = t.mouseOverlay;
        function o() {
            return document.pointerLockElement !== r
        }
        return gc(r, t, (function(e, t, i) {
            o() ? (r.requestPointerLock || r.mozRequestPointerLock || r.webkitRequestPointerLock).call(r) : n.sendMouseButton(i, !0)
        }
        ), (function(t, r, i, s) {
            o() || 0 === i && 0 === s || n.sendMouseRelativeMotion(i * e, s * e)
        }
        ), (function(e, t, r) {
            o() || n.sendMouseButton(r, !1)
        }
        ), (function(e, t) {}
        ))
    }(t, n, r) : yc(n, r)
}
const wc = (e,t)=>{
    const n = t.x - e.x
      , r = t.y - e.y;
    return Math.sqrt(n * n + r * r)
}
  , kc = e=>e * (Math.PI / 180)
  , xc = e=>e * (180 / Math.PI)
  , Cc = new Map
  , Sc = e=>{
    Cc.has(e) && clearTimeout(Cc.get(e)),
    Cc.set(e, setTimeout(e, 100))
}
  , Ec = (e,t,n)=>{
    const r = t.split(/[ ,]+/g);
    let o;
    for (let i = 0; i < r.length; i += 1)
        o = r[i],
        e.addEventListener ? e.addEventListener(o, n, !1) : e.attachEvent && e.attachEvent(o, n)
}
  , Pc = (e,t,n)=>{
    const r = t.split(/[ ,]+/g);
    let o;
    for (let i = 0; i < r.length; i += 1)
        o = r[i],
        e.removeEventListener ? e.removeEventListener(o, n) : e.detachEvent && e.detachEvent(o, n)
}
  , Oc = e=>(e.preventDefault(),
e.type.match(/^touch/) ? e.changedTouches : e)
  , Mc = ()=>({
    x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
})
  , jc = (e,t)=>{
    t.top || t.right || t.bottom || t.left ? (e.style.top = t.top,
    e.style.right = t.right,
    e.style.bottom = t.bottom,
    e.style.left = t.left) : (e.style.left = t.x + "px",
    e.style.top = t.y + "px")
}
  , Ac = (e,t,n)=>{
    const r = Dc(e);
    for (let o in r)
        if (r.hasOwnProperty(o))
            if ("string" == typeof t)
                r[o] = t + " " + n;
            else {
                let e = "";
                for (let r = 0, o = t.length; r < o; r += 1)
                    e += t[r] + " " + n + ", ";
                r[o] = e.slice(0, -2)
            }
    return r
}
  , Dc = e=>{
    const t = {};
    t[e] = "";
    return ["webkit", "Moz", "o"].forEach((function(n) {
        t[n + e.charAt(0).toUpperCase() + e.slice(1)] = ""
    }
    )),
    t
}
  , Tc = (e,t)=>{
    for (let n in t)
        t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
}
  , Bc = (e,t)=>{
    if (e.length)
        for (let n = 0, r = e.length; n < r; n += 1)
            t(e[n]);
    else
        t(e)
}
;
var zc, Rc = !!("ontouchstart"in window), Lc = !!window.PointerEvent, Nc = !!window.MSPointerEvent, Ic = {
    start: "mousedown",
    move: "mousemove",
    end: "mouseup"
}, Uc = {};
function Kc() {}
function Fc(e, t) {
    return this.identifier = t.identifier,
    this.position = t.position,
    this.frontPosition = t.frontPosition,
    this.collection = e,
    this.defaults = {
        size: 100,
        threshold: .1,
        color: "white",
        fadeTime: 250,
        dataOnly: !1,
        restJoystick: !0,
        restOpacity: .5,
        mode: "dynamic",
        zone: document.body,
        lockX: !1,
        lockY: !1,
        shape: "circle"
    },
    this.config(t),
    "dynamic" === this.options.mode && (this.options.restOpacity = 0),
    this.id = Fc.id,
    Fc.id += 1,
    this.buildEl().stylize(),
    this.instance = {
        el: this.ui.el,
        on: this.on.bind(this),
        off: this.off.bind(this),
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        add: this.addToDom.bind(this),
        remove: this.removeFromDom.bind(this),
        destroy: this.destroy.bind(this),
        setPosition: this.setPosition.bind(this),
        resetDirection: this.resetDirection.bind(this),
        computeDirection: this.computeDirection.bind(this),
        trigger: this.trigger.bind(this),
        position: this.position,
        frontPosition: this.frontPosition,
        ui: this.ui,
        identifier: this.identifier,
        id: this.id,
        options: this.options
    },
    this.instance
}
function Hc(e, t) {
    var n = this;
    n.nipples = [],
    n.idles = [],
    n.actives = [],
    n.ids = [],
    n.pressureIntervals = {},
    n.manager = e,
    n.id = Hc.id,
    Hc.id += 1,
    n.defaults = {
        zone: document.body,
        multitouch: !1,
        maxNumberOfNipples: 10,
        mode: "dynamic",
        position: {
            top: 0,
            left: 0
        },
        catchDistance: 200,
        size: 100,
        threshold: .1,
        color: "white",
        fadeTime: 250,
        dataOnly: !1,
        restJoystick: !0,
        restOpacity: .5,
        lockX: !1,
        lockY: !1,
        shape: "circle",
        dynamicPage: !1,
        follow: !1
    },
    n.config(t),
    "static" !== n.options.mode && "semi" !== n.options.mode || (n.options.multitouch = !1),
    n.options.multitouch || (n.options.maxNumberOfNipples = 1);
    const r = getComputedStyle(n.options.zone.parentElement);
    return r && "flex" === r.display && (n.parentIsFlex = !0),
    n.updateBox(),
    n.prepareNipples(),
    n.bindings(),
    n.begin(),
    n.nipples
}
function Vc(e) {
    var t = this;
    t.ids = {},
    t.index = 0,
    t.collections = [],
    t.scroll = Mc(),
    t.config(e),
    t.prepareCollections();
    var n = function() {
        var e;
        t.collections.forEach((function(n) {
            n.forEach((function(n) {
                e = n.el.getBoundingClientRect(),
                n.position = {
                    x: t.scroll.x + e.left,
                    y: t.scroll.y + e.top
                }
            }
            ))
        }
        ))
    };
    Ec(window, "resize", (function() {
        Sc(n)
    }
    ));
    var r = function() {
        t.scroll = Mc()
    };
    return Ec(window, "scroll", (function() {
        Sc(r)
    }
    )),
    t.collections
}
Lc ? zc = {
    start: "pointerdown",
    move: "pointermove",
    end: "pointerup, pointercancel"
} : Nc ? zc = {
    start: "MSPointerDown",
    move: "MSPointerMove",
    end: "MSPointerUp"
} : Rc ? (zc = {
    start: "touchstart",
    move: "touchmove",
    end: "touchend, touchcancel"
},
Uc = Ic) : zc = Ic,
Kc.prototype.on = function(e, t) {
    var n, r = this, o = e.split(/[ ,]+/g);
    r._handlers_ = r._handlers_ || {};
    for (var i = 0; i < o.length; i += 1)
        n = o[i],
        r._handlers_[n] = r._handlers_[n] || [],
        r._handlers_[n].push(t);
    return r
}
,
Kc.prototype.off = function(e, t) {
    var n = this;
    return n._handlers_ = n._handlers_ || {},
    void 0 === e ? n._handlers_ = {} : void 0 === t ? n._handlers_[e] = null : n._handlers_[e] && n._handlers_[e].indexOf(t) >= 0 && n._handlers_[e].splice(n._handlers_[e].indexOf(t), 1),
    n
}
,
Kc.prototype.trigger = function(e, t) {
    var n, r = this, o = e.split(/[ ,]+/g);
    r._handlers_ = r._handlers_ || {};
    for (var i = 0; i < o.length; i += 1)
        n = o[i],
        r._handlers_[n] && r._handlers_[n].length && r._handlers_[n].forEach((function(e) {
            e.call(r, {
                type: n,
                target: r
            }, t)
        }
        ))
}
,
Kc.prototype.config = function(e) {
    var t = this;
    t.options = t.defaults || {},
    e && (t.options = ((e,t)=>{
        const n = {};
        for (let r in e)
            e.hasOwnProperty(r) && t.hasOwnProperty(r) ? n[r] = t[r] : e.hasOwnProperty(r) && (n[r] = e[r]);
        return n
    }
    )(t.options, e))
}
,
Kc.prototype.bindEvt = function(e, t) {
    var n = this;
    return n._domHandlers_ = n._domHandlers_ || {},
    n._domHandlers_[t] = function() {
        "function" == typeof n["on" + t] ? n["on" + t].apply(n, arguments) : console.warn('[WARNING] : Missing "on' + t + '" handler.')
    }
    ,
    Ec(e, zc[t], n._domHandlers_[t]),
    Uc[t] && Ec(e, Uc[t], n._domHandlers_[t]),
    n
}
,
Kc.prototype.unbindEvt = function(e, t) {
    var n = this;
    return n._domHandlers_ = n._domHandlers_ || {},
    Pc(e, zc[t], n._domHandlers_[t]),
    Uc[t] && Pc(e, Uc[t], n._domHandlers_[t]),
    delete n._domHandlers_[t],
    this
}
,
Fc.prototype = new Kc,
Fc.constructor = Fc,
Fc.id = 0,
Fc.prototype.buildEl = function(e) {
    return this.ui = {},
    this.options.dataOnly || (this.ui.el = document.createElement("div"),
    this.ui.back = document.createElement("div"),
    this.ui.front = document.createElement("div"),
    this.ui.el.className = "nipple collection_" + this.collection.id,
    this.ui.back.className = "back",
    this.ui.front.className = "front",
    this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id),
    this.ui.el.appendChild(this.ui.back),
    this.ui.el.appendChild(this.ui.front)),
    this
}
,
Fc.prototype.stylize = function() {
    if (this.options.dataOnly)
        return this;
    var e = this.options.fadeTime + "ms"
      , t = ((e,t)=>{
        const n = Dc(e);
        for (let r in n)
            n.hasOwnProperty(r) && (n[r] = t);
        return n
    }
    )("borderRadius", "50%")
      , n = Ac("transition", "opacity", e)
      , r = {};
    return r.el = {
        position: "absolute",
        opacity: this.options.restOpacity,
        display: "block",
        zIndex: 999
    },
    r.back = {
        position: "absolute",
        display: "block",
        width: this.options.size + "px",
        height: this.options.size + "px",
        left: 0,
        marginLeft: -this.options.size / 2 + "px",
        marginTop: -this.options.size / 2 + "px",
        background: this.options.color,
        opacity: ".5"
    },
    r.front = {
        width: this.options.size / 2 + "px",
        height: this.options.size / 2 + "px",
        position: "absolute",
        display: "block",
        left: 0,
        marginLeft: -this.options.size / 4 + "px",
        marginTop: -this.options.size / 4 + "px",
        background: this.options.color,
        opacity: ".5",
        transform: "translate(0px, 0px)"
    },
    Tc(r.el, n),
    "circle" === this.options.shape && Tc(r.back, t),
    Tc(r.front, t),
    this.applyStyles(r),
    this
}
,
Fc.prototype.applyStyles = function(e) {
    for (var t in this.ui)
        if (this.ui.hasOwnProperty(t))
            for (var n in e[t])
                this.ui[t].style[n] = e[t][n];
    return this
}
,
Fc.prototype.addToDom = function() {
    return this.options.dataOnly || document.body.contains(this.ui.el) || this.options.zone.appendChild(this.ui.el),
    this
}
,
Fc.prototype.removeFromDom = function() {
    return this.options.dataOnly || !document.body.contains(this.ui.el) || this.options.zone.removeChild(this.ui.el),
    this
}
,
Fc.prototype.destroy = function() {
    clearTimeout(this.removeTimeout),
    clearTimeout(this.showTimeout),
    clearTimeout(this.restTimeout),
    this.trigger("destroyed", this.instance),
    this.removeFromDom(),
    this.off()
}
,
Fc.prototype.show = function(e) {
    var t = this;
    return t.options.dataOnly || (clearTimeout(t.removeTimeout),
    clearTimeout(t.showTimeout),
    clearTimeout(t.restTimeout),
    t.addToDom(),
    t.restCallback(),
    setTimeout((function() {
        t.ui.el.style.opacity = 1
    }
    ), 0),
    t.showTimeout = setTimeout((function() {
        t.trigger("shown", t.instance),
        "function" == typeof e && e.call(this)
    }
    ), t.options.fadeTime)),
    t
}
,
Fc.prototype.hide = function(e) {
    var t = this;
    if (t.options.dataOnly)
        return t;
    if (t.ui.el.style.opacity = t.options.restOpacity,
    clearTimeout(t.removeTimeout),
    clearTimeout(t.showTimeout),
    clearTimeout(t.restTimeout),
    t.removeTimeout = setTimeout((function() {
        var n = "dynamic" === t.options.mode ? "none" : "block";
        t.ui.el.style.display = n,
        "function" == typeof e && e.call(t),
        t.trigger("hidden", t.instance)
    }
    ), t.options.fadeTime),
    t.options.restJoystick) {
        const n = t.options.restJoystick
          , r = {};
        r.x = !0 === n || !1 !== n.x ? 0 : t.instance.frontPosition.x,
        r.y = !0 === n || !1 !== n.y ? 0 : t.instance.frontPosition.y,
        t.setPosition(e, r)
    }
    return t
}
,
Fc.prototype.setPosition = function(e, t) {
    var n = this;
    n.frontPosition = {
        x: t.x,
        y: t.y
    };
    var r = n.options.fadeTime + "ms"
      , o = {};
    o.front = Ac("transition", ["transform"], r);
    var i = {
        front: {}
    };
    i.front = {
        transform: "translate(" + n.frontPosition.x + "px," + n.frontPosition.y + "px)"
    },
    n.applyStyles(o),
    n.applyStyles(i),
    n.restTimeout = setTimeout((function() {
        "function" == typeof e && e.call(n),
        n.restCallback()
    }
    ), n.options.fadeTime)
}
,
Fc.prototype.restCallback = function() {
    var e = this
      , t = {};
    t.front = Ac("transition", "none", ""),
    e.applyStyles(t),
    e.trigger("rested", e.instance)
}
,
Fc.prototype.resetDirection = function() {
    this.direction = {
        x: !1,
        y: !1,
        angle: !1
    }
}
,
Fc.prototype.computeDirection = function(e) {
    var t, n, r, o = e.angle.radian, i = Math.PI / 4, s = Math.PI / 2;
    if (o > i && o < 3 * i && !e.lockX ? t = "up" : o > -i && o <= i && !e.lockY ? t = "left" : o > 3 * -i && o <= -i && !e.lockX ? t = "down" : e.lockY || (t = "right"),
    e.lockY || (n = o > -s && o < s ? "left" : "right"),
    e.lockX || (r = o > 0 ? "up" : "down"),
    e.force > this.options.threshold) {
        var a, c = {};
        for (a in this.direction)
            this.direction.hasOwnProperty(a) && (c[a] = this.direction[a]);
        var l = {};
        for (a in this.direction = {
            x: n,
            y: r,
            angle: t
        },
        e.direction = this.direction,
        c)
            c[a] === this.direction[a] && (l[a] = !0);
        if (l.x && l.y && l.angle)
            return e;
        l.x && l.y || this.trigger("plain", e),
        l.x || this.trigger("plain:" + n, e),
        l.y || this.trigger("plain:" + r, e),
        l.angle || this.trigger("dir dir:" + t, e)
    } else
        this.resetDirection();
    return e
}
,
Hc.prototype = new Kc,
Hc.constructor = Hc,
Hc.id = 0,
Hc.prototype.prepareNipples = function() {
    var e = this
      , t = e.nipples;
    t.on = e.on.bind(e),
    t.off = e.off.bind(e),
    t.options = e.options,
    t.destroy = e.destroy.bind(e),
    t.ids = e.ids,
    t.id = e.id,
    t.processOnMove = e.processOnMove.bind(e),
    t.processOnEnd = e.processOnEnd.bind(e),
    t.get = function(e) {
        if (void 0 === e)
            return t[0];
        for (var n = 0, r = t.length; n < r; n += 1)
            if (t[n].identifier === e)
                return t[n];
        return !1
    }
}
,
Hc.prototype.bindings = function() {
    var e = this;
    e.bindEvt(e.options.zone, "start"),
    e.options.zone.style.touchAction = "none",
    e.options.zone.style.msTouchAction = "none"
}
,
Hc.prototype.begin = function() {
    var e = this
      , t = e.options;
    if ("static" === t.mode) {
        var n = e.createNipple(t.position, e.manager.getIdentifier());
        n.add(),
        e.idles.push(n)
    }
}
,
Hc.prototype.createNipple = function(e, t) {
    var n = this
      , r = n.manager.scroll
      , o = {}
      , i = n.options
      , s = n.parentIsFlex ? r.x : r.x + n.box.left
      , a = n.parentIsFlex ? r.y : r.y + n.box.top;
    if (e.x && e.y)
        o = {
            x: e.x - s,
            y: e.y - a
        };
    else if (e.top || e.right || e.bottom || e.left) {
        var c = document.createElement("DIV");
        c.style.display = "hidden",
        c.style.top = e.top,
        c.style.right = e.right,
        c.style.bottom = e.bottom,
        c.style.left = e.left,
        c.style.position = "absolute",
        i.zone.appendChild(c);
        var l = c.getBoundingClientRect();
        i.zone.removeChild(c),
        o = e,
        e = {
            x: l.left + r.x,
            y: l.top + r.y
        }
    }
    var u = new Fc(n,{
        color: i.color,
        size: i.size,
        threshold: i.threshold,
        fadeTime: i.fadeTime,
        dataOnly: i.dataOnly,
        restJoystick: i.restJoystick,
        restOpacity: i.restOpacity,
        mode: i.mode,
        identifier: t,
        position: e,
        zone: i.zone,
        frontPosition: {
            x: 0,
            y: 0
        },
        shape: i.shape
    });
    return i.dataOnly || (jc(u.ui.el, o),
    jc(u.ui.front, u.frontPosition)),
    n.nipples.push(u),
    n.trigger("added " + u.identifier + ":added", u),
    n.manager.trigger("added " + u.identifier + ":added", u),
    n.bindNipple(u),
    u
}
,
Hc.prototype.updateBox = function() {
    this.box = this.options.zone.getBoundingClientRect()
}
,
Hc.prototype.bindNipple = function(e) {
    var t, n = this, r = function(e, r) {
        t = e.type + " " + r.id + ":" + e.type,
        n.trigger(t, r)
    };
    e.on("destroyed", n.onDestroyed.bind(n)),
    e.on("shown hidden rested dir plain", r),
    e.on("dir:up dir:right dir:down dir:left", r),
    e.on("plain:up plain:right plain:down plain:left", r)
}
,
Hc.prototype.pressureFn = function(e, t, n) {
    var r = this
      , o = 0;
    clearInterval(r.pressureIntervals[n]),
    r.pressureIntervals[n] = setInterval(function() {
        var n = e.force || e.pressure || e.webkitForce || 0;
        n !== o && (t.trigger("pressure", n),
        r.trigger("pressure " + t.identifier + ":pressure", n),
        o = n)
    }
    .bind(r), 100)
}
,
Hc.prototype.onstart = function(e) {
    var t = this
      , n = t.options
      , r = e;
    e = Oc(e),
    t.updateBox();
    return Bc(e, (function(o) {
        t.actives.length < n.maxNumberOfNipples ? t.processOnStart(o) : r.type.match(/^touch/) && (Object.keys(t.manager.ids).forEach((function(n) {
            if (Object.values(r.touches).findIndex((function(e) {
                return e.identifier === n
            }
            )) < 0) {
                var o = [e[0]];
                o.identifier = n,
                t.processOnEnd(o)
            }
        }
        )),
        t.actives.length < n.maxNumberOfNipples && t.processOnStart(o))
    }
    )),
    t.manager.bindDocument(),
    !1
}
,
Hc.prototype.processOnStart = function(e) {
    var t, n = this, r = n.options, o = n.manager.getIdentifier(e), i = e.force || e.pressure || e.webkitForce || 0, s = {
        x: e.pageX,
        y: e.pageY
    }, a = n.getOrCreate(o, s);
    a.identifier !== o && n.manager.removeIdentifier(a.identifier),
    a.identifier = o;
    var c = function(t) {
        t.trigger("start", t),
        n.trigger("start " + t.id + ":start", t),
        t.show(),
        i > 0 && n.pressureFn(e, t, t.identifier),
        n.processOnMove(e)
    };
    if ((t = n.idles.indexOf(a)) >= 0 && n.idles.splice(t, 1),
    n.actives.push(a),
    n.ids.push(a.identifier),
    "semi" !== r.mode)
        c(a);
    else {
        if (!(wc(s, a.position) <= r.catchDistance))
            return a.destroy(),
            void n.processOnStart(e);
        c(a)
    }
    return a
}
,
Hc.prototype.getOrCreate = function(e, t) {
    var n, r = this, o = r.options;
    return /(semi|static)/.test(o.mode) ? (n = r.idles[0]) ? (r.idles.splice(0, 1),
    n) : "semi" === o.mode ? r.createNipple(t, e) : (console.warn("Coudln't find the needed nipple."),
    !1) : n = r.createNipple(t, e)
}
,
Hc.prototype.processOnMove = function(e) {
    var t = this
      , n = t.options
      , r = t.manager.getIdentifier(e)
      , o = t.nipples.get(r)
      , i = t.manager.scroll;
    if ((e=>isNaN(e.buttons) ? 0 !== e.pressure : 0 !== e.buttons)(e)) {
        if (!o)
            return console.error("Found zombie joystick with ID " + r),
            void t.manager.removeIdentifier(r);
        if (n.dynamicPage) {
            var s = o.el.getBoundingClientRect();
            o.position = {
                x: i.x + s.left,
                y: i.y + s.top
            }
        }
        o.identifier = r;
        var a = o.options.size / 2
          , c = {
            x: e.pageX,
            y: e.pageY
        };
        n.lockX && (c.y = o.position.y),
        n.lockY && (c.x = o.position.x);
        var l, u, d = wc(c, o.position), f = ((e,t)=>{
            const n = t.x - e.x
              , r = t.y - e.y;
            return xc(Math.atan2(r, n))
        }
        )(c, o.position), h = kc(f), p = d / a, m = {
            distance: d,
            position: c
        };
        if ("circle" === o.options.shape ? (l = Math.min(d, a),
        u = ((e,t,n)=>{
            const r = {
                x: 0,
                y: 0
            };
            return n = kc(n),
            r.x = e.x - t * Math.cos(n),
            r.y = e.y - t * Math.sin(n),
            r
        }
        )(o.position, l, f)) : (u = ((e,t,n)=>({
            x: Math.min(Math.max(e.x, t.x - n), t.x + n),
            y: Math.min(Math.max(e.y, t.y - n), t.y + n)
        }))(c, o.position, a),
        l = wc(u, o.position)),
        n.follow) {
            if (d > a) {
                let e = c.x - u.x
                  , n = c.y - u.y;
                o.position.x += e,
                o.position.y += n,
                o.el.style.top = o.position.y - (t.box.top + i.y) + "px",
                o.el.style.left = o.position.x - (t.box.left + i.x) + "px",
                d = wc(c, o.position)
            }
        } else
            c = u,
            d = l;
        var v = c.x - o.position.x
          , y = c.y - o.position.y;
        o.frontPosition = {
            x: v,
            y: y
        },
        n.dataOnly || (o.ui.front.style.transform = "translate(" + v + "px," + y + "px)");
        var b = {
            identifier: o.identifier,
            position: c,
            force: p,
            pressure: e.force || e.pressure || e.webkitForce || 0,
            distance: d,
            angle: {
                radian: h,
                degree: f
            },
            vector: {
                x: v / a,
                y: -y / a
            },
            raw: m,
            instance: o,
            lockX: n.lockX,
            lockY: n.lockY
        };
        (b = o.computeDirection(b)).angle = {
            radian: kc(180 - f),
            degree: 180 - f
        },
        o.trigger("move", b),
        t.trigger("move " + o.id + ":move", b)
    } else
        this.processOnEnd(e)
}
,
Hc.prototype.processOnEnd = function(e) {
    var t = this
      , n = t.options
      , r = t.manager.getIdentifier(e)
      , o = t.nipples.get(r)
      , i = t.manager.removeIdentifier(o.identifier);
    o && (n.dataOnly || o.hide((function() {
        "dynamic" === n.mode && (o.trigger("removed", o),
        t.trigger("removed " + o.id + ":removed", o),
        t.manager.trigger("removed " + o.id + ":removed", o),
        o.destroy())
    }
    )),
    clearInterval(t.pressureIntervals[o.identifier]),
    o.resetDirection(),
    o.trigger("end", o),
    t.trigger("end " + o.id + ":end", o),
    t.ids.indexOf(o.identifier) >= 0 && t.ids.splice(t.ids.indexOf(o.identifier), 1),
    t.actives.indexOf(o) >= 0 && t.actives.splice(t.actives.indexOf(o), 1),
    /(semi|static)/.test(n.mode) ? t.idles.push(o) : t.nipples.indexOf(o) >= 0 && t.nipples.splice(t.nipples.indexOf(o), 1),
    t.manager.unbindDocument(),
    /(semi|static)/.test(n.mode) && (t.manager.ids[i.id] = i.identifier))
}
,
Hc.prototype.onDestroyed = function(e, t) {
    var n = this;
    n.nipples.indexOf(t) >= 0 && n.nipples.splice(n.nipples.indexOf(t), 1),
    n.actives.indexOf(t) >= 0 && n.actives.splice(n.actives.indexOf(t), 1),
    n.idles.indexOf(t) >= 0 && n.idles.splice(n.idles.indexOf(t), 1),
    n.ids.indexOf(t.identifier) >= 0 && n.ids.splice(n.ids.indexOf(t.identifier), 1),
    n.manager.removeIdentifier(t.identifier),
    n.manager.unbindDocument()
}
,
Hc.prototype.destroy = function() {
    var e = this;
    for (var t in e.unbindEvt(e.options.zone, "start"),
    e.nipples.forEach((function(e) {
        e.destroy()
    }
    )),
    e.pressureIntervals)
        e.pressureIntervals.hasOwnProperty(t) && clearInterval(e.pressureIntervals[t]);
    e.trigger("destroyed", e.nipples),
    e.manager.unbindDocument(),
    e.off()
}
,
Vc.prototype = new Kc,
Vc.constructor = Vc,
Vc.prototype.prepareCollections = function() {
    var e = this;
    e.collections.create = e.create.bind(e),
    e.collections.on = e.on.bind(e),
    e.collections.off = e.off.bind(e),
    e.collections.destroy = e.destroy.bind(e),
    e.collections.get = function(t) {
        var n;
        return e.collections.every((function(e) {
            return !(n = e.get(t))
        }
        )),
        n
    }
}
,
Vc.prototype.create = function(e) {
    return this.createCollection(e)
}
,
Vc.prototype.createCollection = function(e) {
    var t = this
      , n = new Hc(t,e);
    return t.bindCollection(n),
    t.collections.push(n),
    n
}
,
Vc.prototype.bindCollection = function(e) {
    var t, n = this, r = function(e, r) {
        t = e.type + " " + r.id + ":" + e.type,
        n.trigger(t, r)
    };
    e.on("destroyed", n.onDestroyed.bind(n)),
    e.on("shown hidden rested dir plain", r),
    e.on("dir:up dir:right dir:down dir:left", r),
    e.on("plain:up plain:right plain:down plain:left", r)
}
,
Vc.prototype.bindDocument = function() {
    var e = this;
    e.binded || (e.bindEvt(document, "move").bindEvt(document, "end"),
    e.binded = !0)
}
,
Vc.prototype.unbindDocument = function(e) {
    var t = this;
    Object.keys(t.ids).length && !0 !== e || (t.unbindEvt(document, "move").unbindEvt(document, "end"),
    t.binded = !1)
}
,
Vc.prototype.getIdentifier = function(e) {
    var t;
    return e ? void 0 === (t = void 0 === e.identifier ? e.pointerId : e.identifier) && (t = this.latest || 0) : t = this.index,
    void 0 === this.ids[t] && (this.ids[t] = this.index,
    this.index += 1),
    this.latest = t,
    this.ids[t]
}
,
Vc.prototype.removeIdentifier = function(e) {
    var t = {};
    for (var n in this.ids)
        if (this.ids[n] === e) {
            t.id = n,
            t.identifier = this.ids[n],
            delete this.ids[n];
            break
        }
    return t
}
,
Vc.prototype.onmove = function(e) {
    return this.onAny("move", e),
    !1
}
,
Vc.prototype.onend = function(e) {
    return this.onAny("end", e),
    !1
}
,
Vc.prototype.oncancel = function(e) {
    return this.onAny("end", e),
    !1
}
,
Vc.prototype.onAny = function(e, t) {
    var n, r = this, o = "processOn" + e.charAt(0).toUpperCase() + e.slice(1);
    t = Oc(t);
    var i = function(e, t, n) {
        n.ids.indexOf(t) >= 0 && (n[o](e),
        e._found_ = !0)
    };
    return Bc(t, (function(e) {
        n = r.getIdentifier(e),
        Bc(r.collections, i.bind(null, e, n)),
        e._found_ || r.removeIdentifier(n)
    }
    )),
    !1
}
,
Vc.prototype.destroy = function() {
    var e = this;
    e.unbindDocument(!0),
    e.ids = {},
    e.index = 0,
    e.collections.forEach((function(e) {
        e.destroy()
    }
    )),
    e.off()
}
,
Vc.prototype.onDestroyed = function(e, t) {
    var n = this;
    if (n.collections.indexOf(t) < 0)
        return !1;
    n.collections.splice(n.collections.indexOf(t), 1)
}
;
const Wc = new Vc
  , qc = {
    create: function(e) {
        return Wc.create(e)
    },
    factory: Wc
};
function Xc(e, t, n, r, o, i) {
    const s = Math.round(r / 4);
    let a = !1;
    const c = ()=>{
        const e = a ? "flex" : "none";
        for (const t of l)
            t != u && (t.style.display = e)
    }
      , l = [$c(t, n), sc("keyboard", {
        onClick: ()=>{
            e.toggleKeyboard(),
            a && (a = !1,
            c())
        }
    }, r), sc("options", {
        onClick: ()=>{
            a = !a,
            c()
        }
    }, r)]
      , u = l[l.length - 1]
      , d = nc("emulator-options");
    for (const f of l)
        f !== u && f.classList.add("emulator-button-control"),
        f.style.marginRight = s + "px",
        f.style.marginBottom = s + "px",
        f !== u && (f.style.display = "none"),
        d.appendChild(f);
    return d.style.position = "absolute",
    d.style.right = i + "px",
    d.style.top = o + "px",
    e.mouseOverlay.appendChild(d),
    ()=>{
        e.mouseOverlay.removeChild(d)
    }
}
function $c(e, t) {
    if (e.length <= 1)
        return document.createElement("div");
    const n = document.createElement("select");
    n.classList.add("emulator-control-select");
    for (const r of e) {
        const e = document.createElement("option");
        e.value = r,
        e.innerHTML = r,
        n.appendChild(e)
    }
    return n.onchange = e=>{
        const n = e.target.value;
        t(n)
    }
    ,
    function(e, t=!0) {
        const n = e=>{
            e.stopPropagation()
        }
          , r = e=>{
            e.stopPropagation(),
            t && e.preventDefault()
        }
          , o = {
            capture: !1
        };
        for (const i of $a.starters)
            e.addEventListener(i, n, o);
        for (const i of $a.enders)
            e.addEventListener(i, n, o);
        for (const i of $a.prevents)
            e.addEventListener(i, r, o)
    }(n, !1),
    n
}
function Gc(e, t, n) {
    const r = n || {};
    function o(e) {
        return void 0 !== r[e] ? r[e] : e
    }
    return e.setOnKeyDown((e=>{
        t.sendKeyEvent(o(e), !0)
    }
    )),
    e.setOnKeyUp((e=>{
        t.sendKeyEvent(o(e), !1)
    }
    )),
    e.setOnKeyPress((e=>{
        t.simulateKeyPress(o(e))
    }
    )),
    e.setOnKeysPress((e=>{
        t.simulateKeyPress(...e)
    }
    )),
    ()=>{
        e.setOnKeyDown((e=>{}
        )),
        e.setOnKeyUp((e=>{}
        )),
        e.setOnKeyPress((e=>{}
        )),
        e.setOnKeysPress((e=>{}
        ))
    }
}
function Yc(e, t, n, r) {
    var o;
    const i = Object.keys(n)
      , s = {
        keyboard: ()=>{}
        ,
        mouse: ()=>{}
        ,
        gestures: ()=>{}
        ,
        buttons: ()=>{}
    }
      , a = o=>{
        s.keyboard(),
        s.mouse(),
        s.gestures(),
        s.buttons(),
        s.keyboard = ()=>{}
        ,
        s.mouse = ()=>{}
        ,
        s.gestures = ()=>{}
        ,
        s.buttons = ()=>{}
        ;
        const i = n[o];
        void 0 !== i && (s.keyboard = Gc(t, r, i.mapper),
        void 0 !== i.gestures && i.gestures.length > 0 ? s.gestures = function(e, t, n) {
            const r = qc.create({
                zone: e.mouseOverlay,
                multitouch: !0,
                maxNumberOfNipples: 2
            });
            let o = -1;
            const i = ()=>{
                -1 !== o && (e.fireKeyUp(o),
                o = -1)
            }
              , s = {}
              , a = {}
              , c = {};
            for (const u of n)
                "end:release" === u.event ? s[u.joystickId] = !0 : u.mapTo !== va && ("tap" === u.event ? a[u.joystickId] = u.mapTo : r.on(u.event, (()=>{
                    var t;
                    c[u.joystickId] = Date.now(),
                    i(),
                    t = u.mapTo,
                    e.fireKeyDown(t),
                    o = t
                }
                )));
            const l = {};
            return r.on("start", (()=>{
                const e = r.ids.length - 1;
                l[e] = Date.now()
            }
            )),
            r.on("end", (()=>{
                const t = r.ids.length - 1
                  , n = Date.now() - l[t];
                !0 === s[t] && i(),
                a[t] && n < 500 && c[t] < l[t] && e.fireKeyPress(a[t])
            }
            )),
            ()=>r.destroy()
        }(t, 0, i.gestures) : s.mouse = _c(e.autolock, e.sensitivity, t, r),
        void 0 !== i.buttons && i.buttons.length && (s.buttons = function(e, t, n, r) {
            const o = Math.round(r / 4)
              , i = [];
            for (const s of n) {
                if (s.mapTo === va)
                    continue;
                const t = sc((s.symbol || cc(s.mapTo)).toUpperCase(), lc(s, e), r);
                t.style.position = "absolute";
                const n = s.style;
                if (n)
                    for (const e of Object.keys(n))
                        t.style[e] = n[e];
                if (void 0 !== s.position) {
                    const e = s.position.left
                      , n = s.position.top
                      , i = s.position.bottom
                      , a = s.position.right;
                    void 0 !== e && (t.style.left = o * e + r * (e - 1) + "px"),
                    void 0 !== a && (t.style.right = o * a + r * (a - 1) + "px"),
                    void 0 !== n && (t.style.top = o * n + r * (n - 1) + "px"),
                    void 0 !== i && (t.style.bottom = o * i + r * (i - 1) + "px")
                }
                e.mouseOverlay.appendChild(t),
                i.push(t)
            }
            return ()=>{
                for (const t of i)
                    t.parentElement === e.mouseOverlay && e.mouseOverlay.removeChild(t)
            }
        }(t, 0, i.buttons, 54)))
    }
      , c = 0 === (null == (o = t.options.optionControls) ? void 0 : o.length) ? ()=>{}
    : Xc(t, i, a, 54, 13.5, 0);
    return a("default"),
    ()=>{
        s.gestures(),
        s.buttons(),
        s.mouse(),
        s.keyboard(),
        c()
    }
}
function Qc(e) {
    switch (e) {
    case "square":
        return function() {
            class e {
                constructor() {
                    t(this, "aspect", .625)
                }
                getConfiguration(e, t, n=1) {
                    const r = this.getCols()
                      , o = this.getRows()
                      , i = Math.floor(r / 2)
                      , s = Math.floor(o / 2)
                      , a = 5 * e / 100 / 2
                      , c = a
                      , l = (e - 2 * a) / r * n
                      , u = (t - 2 * c) / o * n
                      , d = Math.min(l, u)
                      , f = [];
                    for (let h = 0; h < o; ++h) {
                        const n = [];
                        for (let l = 0; l < r; ++l)
                            n.push({
                                centerX: l < i ? a + d * (l + .5) : e - a - d * (r - l - 1 + .5),
                                centerY: h < s ? c + d * (h + .5) : t - c - d * (o - h - 1 + .5)
                            });
                        f.push(n)
                    }
                    return {
                        gridType: "square",
                        cells: f,
                        columnWidth: d,
                        rowHeight: d,
                        columnsPadding: a,
                        rowsPadding: c,
                        width: e,
                        height: t
                    }
                }
                getCols() {
                    return 10
                }
                getRows() {
                    return Math.floor(this.getCols() * this.aspect) + 1
                }
            }
            return new e
        }();
    case "honeycomb":
        return function() {
            class e {
                constructor() {
                    t(this, "aspect", .625)
                }
                getConfiguration(e, t, n=1) {
                    const r = this.getCols()
                      , o = this.getRows()
                      , i = Math.floor(r / 2)
                      , s = Math.floor(o / 2)
                      , a = 5 * e / 100 / 2
                      , c = a
                      , l = (e - 2 * a) / r * n
                      , u = (t - 2 * c) / o * n
                      , d = Math.min(l, u)
                      , f = [];
                    for (let h = 0; h < o; ++h) {
                        const n = []
                          , l = h % 2 == 0 ? r : r - 1
                          , u = h % 2 == 0 ? 0 : d / 2;
                        for (let f = 0; f < l; ++f)
                            n.push({
                                centerX: f < i ? u + a + d * (f + .5) : u + e - a - d * (r - f - 1 + .5),
                                centerY: h < s ? c + d * (h + .5) : t - c - d * (o - h - 1 + .5)
                            });
                        f.push(n)
                    }
                    return {
                        gridType: "honeycomb",
                        cells: f,
                        columnWidth: d,
                        rowHeight: d,
                        columnsPadding: a,
                        rowsPadding: c,
                        width: e,
                        height: t
                    }
                }
                getCols() {
                    return 10
                }
                getRows() {
                    return Math.floor(this.getCols() * this.aspect) + 1
                }
            }
            return new e
        }()
    }
    throw new Error("Unknown grid type " + e)
}
function Jc(e, t, n, r, o, i, s) {
    let a = t.layers[0];
    if (void 0 !== s)
        for (const c of t.layers)
            if (c.title === s) {
                a = c;
                break
            }
    return function(e, t, n, r, o, i) {
        const s = Gc(t, n)
          , a = _c(r.autolock, r.sensitivity, t, n)
          , c = [];
        function l(s, a) {
            var l;
            for (const e of c)
                e();
            c.splice(0, c.length);
            const u = Qc(e.grid).getConfiguration(s, a, i)
              , d = new Zc;
            for (const t of e.controls) {
                const {row: e, column: n, type: r} = t;
                "NippleActivator" === r && rl(u, e, n)
            }
            let f = -1;
            if (0 === (null == (l = t.options.optionControls) ? void 0 : l.length))
                for (const t of e.controls) {
                    const {row: e, type: n} = t;
                    if ("Options" === n) {
                        f = e;
                        break
                    }
                }
            const h = {};
            if (o)
                for (const t of e.controls) {
                    const {row: e} = t;
                    let n = t.column;
                    const r = u.cells[e].length
                      , o = r / 2;
                    e === f && n >= o && (n = Math.min(n + 1, r - 1)),
                    void 0 === h[e] && (h[e] = {
                        leftStart: o,
                        leftEnd: 0,
                        rightStart: r - 1,
                        rightEnd: o
                    }),
                    n < o ? (h[e].leftStart = Math.min(h[e].leftStart, n),
                    h[e].leftEnd = Math.max(h[e].leftEnd, n)) : (h[e].rightStart = Math.min(h[e].rightStart, n),
                    h[e].rightEnd = Math.max(h[e].rightEnd, n))
                }
            for (const i of e.controls) {
                const e = el[i.type];
                if (void 0 === e) {
                    console.error("Factory for control '" + i.type + "' is not defined");
                    continue
                }
                const s = {
                    ...i
                }
                  , a = u.cells[i.row].length
                  , l = a / 2;
                if (f === i.row && i.column >= l && (s.column = Math.min(s.column + 1, a - 1)),
                o) {
                    const {leftStart: e, leftEnd: t, rightStart: n, rightEnd: r} = h[s.row]
                      , o = s.column < l;
                    o ? s.column += l + (l - t) - e - 1 : s.column -= l + (n - l) - (a - r) + 1,
                    s.column >= a ? (console.error("Column", s.column, "is out of bound", a, o ? "[leftSide]" : "[rightSide]", h),
                    s.column = a - 1) : s.column < 0 && (console.error("Column", s.column, "is out of bound", 0, o ? "[leftSide]" : "[rightSide]", h),
                    s.column = 0)
                }
                const p = e(s, t, n, u, d, r);
                c.push(p)
            }
        }
        return t.addOnResize(l),
        l(t.width, t.height),
        ()=>{
            t.removeOnResize(l),
            s(),
            a();
            for (const e of c)
                e()
        }
    }(a, e, n, r, o, i)
}
class Zc {
    constructor() {
        t(this, "sensors", {})
    }
    activate(e, t) {
        const n = this.sensors[t + "_" + e];
        void 0 !== n && n.activate()
    }
    deactivate(e, t) {
        const n = this.sensors[t + "_" + e];
        void 0 !== n && n.deactivate()
    }
    register(e, t, n) {
        this.sensors[t + "_" + e] = n
    }
}
const el = {
    Key: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l} = e
          , {centerX: u, centerY: d} = s[c][l]
          , f = {
            onDown: ()=>{
                for (const t of e.mapTo)
                    n.sendKeyEvent(t, !0)
            }
            ,
            onUp: ()=>{
                for (const t of e.mapTo)
                    n.sendKeyEvent(t, !1)
            }
        };
        if (o.register(c, l, {
            activate: f.onDown,
            deactivate: f.onUp
        }),
        nl(r, c, l))
            return ()=>{}
            ;
        const h = sc(e.symbol, f, a);
        return h.style.position = "absolute",
        h.style.left = u - h.widthPx / 2 + "px",
        h.style.top = d - h.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(h),
        ()=>t.mouseOverlay.removeChild(h)
    },
    Options: function(e, t, n, r, o, i) {
        var s;
        if (0 === (null == (s = t.options.optionControls) ? void 0 : s.length))
            return ()=>{}
            ;
        if (void 0 !== t.options.optionControls && 1 === t.options.optionControls.length && "keyboard" === t.options.optionControls[0])
            return tl(e, t, n, r);
        const {cells: a, columnWidth: c, rowHeight: l} = r
          , {row: u, column: d} = e
          , {centerX: f, centerY: h} = a[u][d]
          , p = h - l / 2
          , m = f - c / 2
          , v = r.width - m - c;
        return Xc(t, ["default"], (()=>{}
        ), c, p, v)
    },
    Keyboard: tl,
    Switch: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l} = e
          , {centerX: u, centerY: d} = s[c][l]
          , f = sc(e.symbol, {
            onUp: ()=>i.setActiveConfig(i.getActiveConfig(), e.layerName)
        }, a);
        return f.style.position = "absolute",
        f.style.left = u - f.widthPx / 2 + "px",
        f.style.top = d - f.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(f),
        ()=>{
            t.mouseOverlay.removeChild(f)
        }
    },
    ScreenMove: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l} = e
          , {centerX: u, centerY: d} = s[c][l];
        let f = .5
          , h = .5;
        e.direction.indexOf("up") >= 0 && (h = 0);
        e.direction.indexOf("down") >= 0 && (h = 1);
        e.direction.indexOf("left") >= 0 && (f = 0);
        e.direction.indexOf("right") >= 0 && (f = 1);
        const p = {
            onDown: ()=>{
                n.sendMouseMotion(f, h)
            }
            ,
            onUp: ()=>{
                n.sendMouseMotion(.5, .5)
            }
        };
        if (o.register(c, l, {
            activate: p.onDown,
            deactivate: p.onUp
        }),
        nl(r, c, l))
            return ()=>{}
            ;
        const m = sc(e.symbol, p, a);
        return m.style.position = "absolute",
        m.style.left = u - m.widthPx / 2 + "px",
        m.style.top = d - m.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(m),
        ()=>t.mouseOverlay.removeChild(m)
    },
    PointerButton: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l, click: u} = e
          , {centerX: d, centerY: f} = s[c][l]
          , h = {
            onDown: ()=>{
                u ? n.sendMouseButton(e.button, !0) : t.pointerButton = e.button
            }
            ,
            onUp: ()=>{
                u ? n.sendMouseButton(e.button, !1) : t.pointerButton = 0
            }
        };
        if (o.register(c, l, {
            activate: h.onDown,
            deactivate: h.onUp
        }),
        nl(r, c, l))
            return ()=>{}
            ;
        const p = sc(e.symbol, h, a);
        return p.style.position = "absolute",
        p.style.left = d - p.widthPx / 2 + "px",
        p.style.top = f - p.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(p),
        ()=>t.mouseOverlay.removeChild(p)
    },
    PointerMove: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l, x: u, y: d} = e
          , {centerX: f, centerY: h} = s[c][l]
          , p = {
            onDown: ()=>{
                n.sendMouseMotion(u, d)
            }
            ,
            onUp: ()=>{
                n.sendMouseMotion(u, d)
            }
        };
        if (o.register(c, l, {
            activate: p.onDown,
            deactivate: p.onUp
        }),
        nl(r, c, l))
            return ()=>{}
            ;
        const m = sc(e.symbol, p, a);
        return m.style.position = "absolute",
        m.style.left = f - m.widthPx / 2 + "px",
        m.style.top = h - m.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(m),
        ()=>t.mouseOverlay.removeChild(m)
    },
    PointerReset: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l} = e
          , {centerX: u, centerY: d} = s[c][l]
          , f = {
            onDown: ()=>{
                n.sendMouseSync()
            }
        };
        if (o.register(c, l, {
            activate: f.onDown,
            deactivate: ()=>{}
        }),
        nl(r, c, l))
            return ()=>{}
            ;
        const h = sc(e.symbol, f, a);
        return h.style.position = "absolute",
        h.style.left = u - h.widthPx / 2 + "px",
        h.style.top = d - h.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(h),
        ()=>t.mouseOverlay.removeChild(h)
    },
    PointerToggle: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a} = r
          , {row: c, column: l} = e
          , {centerX: u, centerY: d} = s[c][l]
          , f = {
            onDown: ()=>{
                t.pointerDisabled = !t.pointerDisabled,
                t.pointerDisabled ? h.classList.contains("emulator-button-highlight") || h.classList.add("emulator-button-highlight") : h.classList.remove("emulator-button-highlight")
            }
        };
        if (o.register(c, l, {
            activate: f.onDown,
            deactivate: ()=>{}
        }),
        nl(r, c, l))
            return ()=>{}
            ;
        const h = sc(e.symbol, f, a);
        return h.style.position = "absolute",
        h.style.left = u - h.widthPx / 2 + "px",
        h.style.top = d - h.heightPx / 2 + "px",
        t.mouseOverlay.appendChild(h),
        ()=>t.mouseOverlay.removeChild(h)
    },
    NippleActivator: function(e, t, n, r, o, i) {
        const {cells: s, columnWidth: a, rowHeight: c, width: l, height: u} = r
          , {row: d, column: f} = e
          , {centerX: h, centerY: p} = s[d][f]
          , m = document.createElement("div")
          , v = 1.5
          , y = Math.max(0, h - a * v)
          , b = Math.max(0, p - c * v)
          , g = Math.max(0, l - h - a * v)
          , _ = Math.max(0, u - p - c * v);
        m.style.position = "absolute",
        m.style.zIndex = "999",
        m.style.left = y + "px",
        m.style.top = b + "px",
        m.style.right = g + "px",
        m.style.bottom = _ + "px",
        t.mouseOverlay.appendChild(m);
        const w = qc.create({
            zone: m,
            multitouch: !1,
            maxNumberOfNipples: 1,
            mode: "static",
            follow: !1,
            dynamicPage: !0,
            size: 1.5 * Math.max(a, c),
            position: {
                left: (l - g - y) / 2 + "px",
                top: (u - _ - b) / 2 + "px"
            }
        });
        let k = -1
          , x = -1;
        w.on("move", ((e,t)=>{
            if (t.distance < 10)
                return o.deactivate(x, k),
                k = -1,
                void (x = -1);
            let n = -1
              , r = -1;
            const i = 22.5
              , s = t.angle.degree;
            s > i && s <= 67.5 ? (n = f + 1,
            r = d - 1) : s > 67.5 && s <= 112.5 ? (n = f,
            r = d - 1) : s > 112.5 && s <= 157.5 ? (n = f - 1,
            r = d - 1) : s > 157.5 && s <= 202.5 ? (n = f - 1,
            r = d) : s > 202.5 && s <= 247.5 ? (n = f - 1,
            r = d + 1) : s > 247.5 && s <= 292.5 ? (n = f,
            r = d + 1) : s > 292.5 && s <= 337.5 ? (n = f + 1,
            r = d + 1) : (n = f + 1,
            r = d),
            k === n && x === r || (o.deactivate(x, k),
            o.activate(r, n),
            k = n,
            x = r)
        }
        ));
        let C = !1;
        w.on("start", (()=>{
            C = !0
        }
        )),
        w.on("end", (()=>{
            C = !1,
            o.deactivate(x, k),
            x = -1,
            k = -1
        }
        ));
        const S = {
            capture: !0
        };
        function E(e) {
            C && w.processOnEnd(e)
        }
        for (const P of $a.enders)
            t.mouseOverlay.addEventListener(P, E, S);
        return ()=>{
            w.destroy(),
            t.mouseOverlay.removeChild(m);
            for (const e of $a.enders)
                t.mouseOverlay.removeEventListener(e, E, S)
        }
    }
};
function tl(e, t, n, r, o, i) {
    const {cells: s, columnWidth: a} = r
      , {row: c, column: l} = e
      , {centerX: u, centerY: d} = s[c][l]
      , f = sc("keyboard", {
        onUp: ()=>t.toggleKeyboard()
    }, a);
    return f.style.position = "absolute",
    f.style.left = u - f.widthPx / 2 + "px",
    f.style.top = d - f.heightPx / 2 + "px",
    t.mouseOverlay.appendChild(f),
    ()=>{
        t.mouseOverlay.removeChild(f)
    }
}
function nl(e, t, n) {
    return !0 === e.cells[t][n].hidden
}
function rl(e, t, n) {
    function r(r, o) {
        if ((r !== t || o !== n) && r >= 0 && r < e.cells.length) {
            const t = e.cells[r];
            o >= 0 && o < t.length && (t[o].hidden = !0)
        }
    }
    for (let o = t - 1; o <= t + 1; ++o)
        for (let e = n - 1; e <= n + 1; ++e)
            r(o, e)
}
function ol(e, t) {
    !function(e) {
        const t = tr()
          , n = oi();
        ae((()=>{
            const r = {};
            e.events().onMessage(((e,...o)=>{
                var i, s, a, c, l;
                if ("error" === e && (null == (i = o[0]) ? void 0 : i.startsWith("[panic]")))
                    t(Mi.actions.showToast({
                        message: o[0],
                        intent: "panic"
                    }));
                else if ("log" === e && -1 !== (null == (s = o[0]) ? void 0 : s.indexOf("sockdrive:"))) {
                    const e = o[0].substring(o[0].indexOf(" ") + 1, o[0].indexOf(","));
                    if (t(Mi.actions.cloudSaves(!1)),
                    -1 !== (null == (a = o[0]) ? void 0 : a.indexOf("write=")) && console.log("drive", e, "config:", o[0]),
                    -1 !== (null == (c = o[0]) ? void 0 : c.indexOf("write=false")) && t(Mi.actions.readOnlyWarning(!0)),
                    -1 !== (null == (l = o[0]) ? void 0 : l.indexOf("preload="))) {
                        const i = Number.parseInt(o[0].substring(o[0].indexOf("preload=") + 8));
                        void 0 === r[e] && (r[e] = i),
                        t(Mi.actions.showToast({
                            message: n("preloading_sockdrive") + " " + e.substring(e.indexOf("/") + 1) + " — " + (Math.round(r[e] - i) / 1024 / 1024).toFixed(2) + "/" + Math.round(r[e] / 1024 / 1024) + "Mb",
                            long: !0
                        }))
                    }
                }
            }
            ))
        }
        ), [e, t])
    }(t),
    function(e) {
        const t = on((e=>e.dos.imageRendering));
        ae((()=>{
            e.style.imageRendering = "smooth" === t ? "auto" : t
        }
        ), [e, t])
    }(e),
    function(e) {
        const t = tr();
        ae((()=>{
            let n = 0
              , r = 0
              , o = 0
              , i = ya
              , s = 0
              , a = 0
              , c = 0
              , l = 0
              , u = Date.now();
            const d = setInterval((()=>{
                e.asyncifyStats().then((e=>{
                    const d = Date.now() - u
                      , f = d / 1e3;
                    if (f > 0) {
                        const h = {
                            cyclesPerMs: Math.round((e.cycles - n) / d),
                            nonSkippableSleepPreSec: Math.round((e.nonSkippableSleepCount - r) / f),
                            sleepPerSec: Math.round((e.sleepCount - o) / f),
                            sleepTimePerSec: Math.round((e.sleepTime - i) / f),
                            framePerSec: Math.round((e.messageFrame - s) / f),
                            soundPerSec: Math.round((e.messageSound - a) / f),
                            msgSentPerSec: Math.round((e.messageSent - c) / f),
                            msgRecvPerSec: Math.round((e.messageReceived - l) / f),
                            netSent: e.netSent,
                            netRecv: e.netRecv,
                            driveSent: e.driveSent,
                            driveRecv: e.driveRecv,
                            driveRecvTime: e.driveRecvTime,
                            driveCacheHit: e.driveCacheHit,
                            driveCacheMiss: e.driveCacheMiss,
                            driveCacheUsed: e.driveCacheUsed,
                            driveIo: e.driveIo
                        };
                        t(Ci.actions.stats(h)),
                        n = e.cycles,
                        r = e.nonSkippableSleepCount,
                        o = e.sleepCount,
                        i = e.sleepTime,
                        s = e.messageFrame,
                        a = e.messageSound,
                        c = e.messageSent,
                        l = e.messageReceived,
                        u = Date.now()
                    }
                }
                ))
            }
            ), 3e3);
            return ()=>{
                clearInterval(d)
            }
        }
        ), [t, e])
    }(t),
    function(e) {
        const t = on((e=>e.dos.paused))
          , n = on((e=>e.ui.documentHidden));
        ae((()=>{
            t || n ? e.pause() : e.resume()
        }
        ), [t, n, e])
    }(t),
    function(e) {
        ae((()=>function(e, t) {
            function n(e) {
                if ("text" === e.target.type)
                    return;
                const n = Ia(e.keyCode);
                t.sendKeyEvent(n, !0),
                e.stopPropagation(),
                e.preventDefault()
            }
            function r(e) {
                if ("text" === e.target.type)
                    return;
                const n = Ia(e.keyCode);
                t.sendKeyEvent(n, !1),
                e.stopPropagation(),
                e.preventDefault()
            }
            return e.addEventListener("keydown", n),
            e.addEventListener("keyup", r),
            ()=>{
                e.removeEventListener("keydown", n),
                e.removeEventListener("keyup", r)
            }
        }(window, e)), [e])
    }(t),
    function(e, t) {
        const n = on((e=>e.dos.mobileControls))
          , r = on((e=>e.dos.mouseCapture))
          , o = .1 + 3 * on((e=>e.dos.mouseSensitivity));
        ae((()=>{
            if (!n)
                return tc(r, o, 0, e, t)
        }
        ), [e, t, r, o, n])
    }(e, t),
    function(e, t) {
        const n = vi()
          , r = on((e=>e.dos.mouseCapture))
          , o = on((e=>e.dos.mirroredControls))
          , i = 1 + on((e=>e.dos.scaleControls))
          , s = .1 + 3 * on((e=>e.dos.mouseSensitivity))
          , a = on((e=>e.dos.mobileControls))
          , c = tr();
        let l = on((e=>e.dos.softKeyboard));
        function u() {
            l = !l,
            c(Ci.actions.softKeyboard(l))
        }
        ae((()=>{
            a ? null === n.layers ? (n.layers = async function() {
                const n = new rc(e.parentElement,e,u,{})
                  , a = oc((await t.config()).jsdosConf);
                let c, l = null, d = ()=>{}
                ;
                const f = {
                    config: a,
                    layers: n,
                    autolock: r,
                    sensitivity: s,
                    mirroredControls: o,
                    scaleControls: i,
                    activeLayer: c,
                    getActiveConfig: ()=>l,
                    setActiveConfig: (e,r)=>{
                        l = e,
                        c = r,
                        d(),
                        null === e ? (d = ()=>{}
                        ,
                        n.mouseOverlay.style.display = "none") : void 0 === e.version ? (n.mouseOverlay.style.display = "block",
                        d = Yc(f, n, e, t)) : (n.mouseOverlay.style.display = "block",
                        d = Jc(n, e, t, f, f.mirroredControls, f.scaleControls, r))
                    }
                };
                return f.setActiveConfig(a),
                f
            }(),
            n.layers.catch(console.error)) : n.layers.then((e=>{
                e.autolock = r,
                e.sensitivity = s,
                e.mirroredControls = o,
                e.scaleControls = i,
                e.setActiveConfig(e.getActiveConfig() ?? e.config, e.activeLayer)
            }
            )) : null !== n.layers && n.layers.then((e=>e.setActiveConfig(null)))
        }
        ), [t, r, s, a, o, i])
    }(e, t),
    function(e, t) {
        const n = on((e=>e.dos.renderBackend))
          , r = on((e=>e.dos.renderAspect));
        let o;
        switch (r) {
        case "1/1":
            o = 1;
            break;
        case "5/4":
            o = 5 / 4;
            break;
        case "4/3":
            o = 4 / 3;
            break;
        case "16/10":
            o = 1.6;
            break;
        case "16/9":
            o = 16 / 9;
            break;
        case "Fit":
            o = ki
        }
        ae((()=>{
            let r = ()=>{}
            ;
            if ("canvas" === n)
                r = Wa(e, t, o);
            else
                try {
                    r = Ha(e, t, o)
                } catch (i) {
                    console.error("Unalbe to start webgl render", i),
                    r = Wa(e, t, o)
                }
            return r
        }
        ), [e, t, n, o])
    }(e, t),
    function(e) {
        const t = Zn();
        ae((()=>{
            const n = function(e, t) {
                const n = e.soundFrequency();
                if (0 === n)
                    return console.warn("Can't create audio node with sampleRate === 0, ingnoring"),
                    ()=>{}
                    ;
                let r = null;
                if ("undefined" != typeof AudioContext ? r = new AudioContext({
                    sampleRate: n,
                    latencyHint: "interactive"
                }) : void 0 !== window.webkitAudioContext && (r = new window.webkitAudioContext({
                    sampleRate: n,
                    latencyHint: "interactive"
                })),
                null == r)
                    return ()=>{}
                    ;
                const o = new qa;
                e.events().onSoundPush((e=>{
                    o.length() < 6144 && o.push(e)
                }
                ));
                const i = r.createScriptProcessor(2048, 0, 1);
                let s = !1;
                i.onaudioprocess = e=>{
                    const t = e.outputBuffer.length
                      , n = e.outputBuffer.numberOfChannels
                      , r = o.length();
                    if (s || (s = r >= 2048),
                    s)
                        for (let i = 0; i < n; i++) {
                            const n = e.outputBuffer.getChannelData(i);
                            o.writeTo(n, t)
                        }
                }
                ;
                const a = r.createGain();
                let c;
                a.connect(r.destination),
                i.connect(a),
                a.gain.value = 1,
                t && (c = t((e=>{
                    a.gain.value = e
                }
                )));
                const l = ()=>{
                    null !== r && "suspended" === r.state && r.resume()
                }
                ;
                return document.addEventListener("pointerdown", l, {
                    once: !0
                }),
                document.addEventListener("keydown", l, {
                    once: !0
                }),
                ()=>{
                    e.events().onSoundPush((()=>{}
                    )),
                    null !== r && (i.disconnect(),
                    a.disconnect(),
                    r.close().catch(console.error),
                    r = null),
                    void 0 !== c && c(),
                    document.removeEventListener("pointerdown", l),
                    document.removeEventListener("keydown", l)
                }
            }(e, (e=>{
                let n = 1;
                const r = ()=>{
                    const r = t.getState().dos.volume;
                    Math.abs(n - r) >= .05 && (e(r),
                    n = r)
                }
                ;
                return t.subscribe(r)
            }
            ));
            return n
        }
        ), [e])
    }(t)
}
const il = "/b4b5275904d86a4ab8a20917b2b7e34f0df47bf7.jsdos";
function sl(e) {
    const t = e.ci
      , n = on((e=>e.dos.backend))
      , r = on((e=>e.dos.worker))
      , [o,i] = ie({
        runs: 0,
        time: 0,
        vax: 0,
        pc: null
    })
      , [s,a] = ie({
        sleepPerSec: 0,
        cyclesPerMs: 0
    });
    return ae((()=>{
        const e = [];
        t.events().onStdout((t=>{
            for (const n of e)
                n(t)
        }
        ));
        const n = t.events().onStdout;
        t.events().onStdout = t=>{
            e.push(t)
        }
        ;
        let r = Date.now()
          , o = 0
          , s = 0;
        return t.events().onStdout((e=>{
            if (!e.startsWith("dhry2:"))
                return;
            t.asyncifyStats().then((e=>{
                const t = Date.now() - r;
                a({
                    sleepPerSec: Math.round(1e3 * (e.sleepCount - o) / t),
                    cyclesPerMs: Math.round((e.cycles - s) / t)
                }),
                r = Date.now(),
                o = e.sleepCount,
                s = e.cycles
            }
            ));
            const [n,c,l,u] = e.split(" ")
              , d = Number.parseInt(c)
              , f = Number.parseFloat(l)
              , h = Number.parseFloat(u);
            i(f >= 5e3 ? {
                runs: d,
                time: Math.round(10 * f) / 10,
                vax: Math.round(100 * h) / 100,
                pc: al(h)
            } : {
                runs: d,
                time: Math.round(10 * f) / 10,
                vax: Math.round(100 * h) / 100,
                pc: null
            })
        }
        )),
        ()=>{
            t.events().onStdout = n
        }
    }
    ), [t]),
    Di("div", {
        class: "dhry2-window",
        children: [Di("div", {
            class: "title",
            children: "Dhrystone 2 Benchmark"
        }), Di("div", {
            class: "backend",
            children: ["Backend: ", n + "-" + (r ? "worker" : "direct")]
        }), Di("div", {
            class: "results",
            children: [Di("div", {
                children: "VAX:"
            }), Di("div", {
                children: o.vax
            }), Di("div", {
                children: "Cycles p/ms:"
            }), Di("div", {
                children: s.cyclesPerMs
            }), Di("div", {
                children: "Sleep p/sec:"
            }), Di("div", {
                children: s.sleepPerSec
            }), Di("div", {
                children: "Runs:"
            }), Di("div", {
                children: o.runs
            }), Di("div", {
                children: "Time:"
            }), Di("div", {
                children: [o.time, " ", Di("span", {
                    children: "ms"
                })]
            }), null !== o.pc && Di("div", {
                children: "PC:"
            }), null !== o.pc && Di("div", {
                children: o.pc ?? "..."
            })]
        })]
    })
}
function al(e) {
    let t = 0;
    for (; 2 * t + 1 < cl.length && !(cl[2 * t + 1] >= e); )
        t++;
    return t = Math.min(cl.length / 2 - 1, t),
    (cl[2 * t] + "").trim()
}
const cl = ["AMD 80386 40MHz", 13.7, "IBM 486D2 50MHz", 22.4, "80486 DX2 66MHz", 35.3, "IBM 486BL 100MHz", 40.9, "AMD 5X86 133MHz", 84.5, "Pentium 75MHz", 87.1, "Cyrix P150 120MHz", 160, "Pentium 100MHz", 122, "Cyrix PP166 133MHz", 180, "IBM 6x86 150MHz", 188, "Pentium 133MHz", 181, "Pentium 166MHz", 189, "Cyrix PR233 188MHz", 232, "Pentium 200MHz", 269, "Pentium MMX 200MHz", 276, "AMD K6 200MHz", 289, "Pentium Pro 200MHz", 312, "Celeron A 300MHz", 484, "Pentium II 300MHz", 477, "AMD K62 500MHz", 606, "AMD K63 450MHz", 645, "Pentium II 450MHz", 713, "Celeron A 450MHz", 720, "Pentium III 450MHz", 722, "Pentium III 600MHz", 959, "Athlon 600MHz", 942, "Duron 600MHz", 999, "Pentium III 1000MHz", 1595, "PIII Tualatin 1200MHz", 1907, "Pentium 4 1700MHz", 1843, "Athlon Tbird 1000MHz", 1659, "Duron 1000MHz", 1674, "Celeron M 1295MHz", 2273, "Atom 1600MHz", 1828, "Pentium 4 1900MHz", 2003, "Atom 1666MHz", 1948, "P4 Xeon 2200MHz", 2265, "Atom Z8300 1840MHz", 2686, "Athlon 4 1600MHz", 2830, "Pentium M 1862MHz", 3933, "Ath4 Barton 1800MHz", 3172, "Pentium 4E 3000MHz", 3553, "Athlon XP 2080MHz", 3700, "Turion 64 M 1900MHz", 3742, "Pentium 4 3066MHz", 4012, "Opteron 1991MHz", 3985, "Core 2 Duo M 1830MHz", 4952, "Athlon XP 2338MHz", 4160, "Athlon 64 2150MHz", 4288, "Pentium 4 3678MHz", 4227, "Athlon 64 2211MHz", 4462, "Celeron C2 M 2000MHz", 5275, "Core 2 Duo 1 CP 2400MHz", 6446, "Core i5 2467M 2300MHz", 4752, "Phenom II 1 CP 3000MHz", 7615, "Core i7 930 3066MHz", 8684, "Core i7 860 3460MHz", 9978, "Core i7 3930K 3800MHz", 11197, "Core i7 4820K 3900MHz", 11867, "Core i7 4820K 3900MHz", 11978, "Core i7 3930K", 13877]
  , ll = Symbol("newer")
  , ul = Symbol("older");
class dl {
    constructor(e, t) {
        "number" != typeof e && (t = e,
        e = 0),
        this.size = 0,
        this.limit = e,
        this.oldest = this.newest = void 0,
        this._keymap = new Map,
        t && (this.assign(t),
        e < 1 && (this.limit = this.size))
    }
    _markEntryAsUsed(e) {
        e !== this.newest && (e[ll] && (e === this.oldest && (this.oldest = e[ll]),
        e[ll][ul] = e[ul]),
        e[ul] && (e[ul][ll] = e[ll]),
        e[ll] = void 0,
        e[ul] = this.newest,
        this.newest && (this.newest[ll] = e),
        this.newest = e)
    }
    assign(e) {
        let t, n = this.limit || Number.MAX_VALUE;
        this._keymap.clear();
        const r = e[Symbol.iterator]();
        for (let o = r.next(); !o.done; o = r.next()) {
            const e = new fl(o.value[0],o.value[1]);
            if (this._keymap.set(e.key, e),
            t ? (t[ll] = e,
            e[ul] = t) : this.oldest = e,
            t = e,
            0 == n--)
                throw new Error("overflow")
        }
        this.newest = t,
        this.size = this._keymap.size
    }
    get(e) {
        const t = this._keymap.get(e);
        if (t)
            return this._markEntryAsUsed(t),
            t.value
    }
    set(e, t) {
        let n = this._keymap.get(e);
        return n ? (n.value = t,
        this._markEntryAsUsed(n),
        this) : (this._keymap.set(e, n = new fl(e,t)),
        this.newest ? (this.newest[ll] = n,
        n[ul] = this.newest) : this.oldest = n,
        this.newest = n,
        ++this.size,
        this.size > this.limit && this.shift(),
        this)
    }
    shift() {
        const e = this.oldest;
        if (e)
            return this.oldest[ll] ? (this.oldest = this.oldest[ll],
            this.oldest[ul] = void 0) : (this.oldest = void 0,
            this.newest = void 0),
            e[ll] = e[ul] = void 0,
            this._keymap.delete(e.key),
            --this.size,
            [e.key, e.value]
    }
}
function fl(e, t) {
    this.key = e,
    this.value = t,
    this[ll] = void 0,
    this[ul] = void 0
}
class hl {
    constructor(e, t, n) {
        this.aheadRange = t,
        this.sectorSize = e,
        this.lru = new dl(Math.floor(n / (t * e)))
    }
    read(e, t) {
        const n = this.getOrigin(e)
          , r = this.lru.get(n);
        if (r) {
            if (t)
                return r;
            {
                const t = e - n;
                return r.slice(t * this.sectorSize, (t + 1) * this.sectorSize)
            }
        }
        return null
    }
    write(e, t) {
        const n = this.getOrigin(e)
          , r = this.lru.get(n);
        return r && r.set(t, (e - n) * this.sectorSize),
        void 0 !== r
    }
    create(e, t) {
        this.lru.set(e, t.slice(0))
    }
    getOrigin(e) {
        return e - e % this.aheadRange
    }
    memUsed() {
        return this.lru.size * this.aheadRange * this.sectorSize
    }
}
const pl = 67108864;
class ml {
    constructor(e, t, n, r, o, i, s=!0, a=!1) {
        this.socket = Promise.resolve(null),
        this.aheadRange = 0,
        this.aheadSize = 0,
        this.maxRead = 0,
        this.readBuffer = new Uint8Array(0),
        this.readAheadBuffer = new Uint8Array(0),
        this.readAheadPos = 0,
        this.readAheadCompressed = 0,
        this.readStartedAt = 0,
        this.decodeBuffer = new Uint8Array(0),
        this.cache = null,
        this.cleanup = ()=>{}
        ,
        this.openFn = (e,t,n,r,o)=>{}
        ,
        this.preloadProgressFn = e=>{}
        ,
        this.errorFn = e=>{}
        ,
        this.preloadQueue = [],
        this.readOnly = !1,
        this.sectorSize = 512,
        this.module = i,
        this.endpoint = e,
        this.owner = t,
        this.drive = n,
        this.token = r,
        this.request = null,
        this.pendingRequest = null,
        this.writeBuffer = new Uint8Array(5 + this.sectorSize),
        this.stats = o,
        this.retries = 3,
        this.preloadSectors = s,
        this.originReadMode = a,
        this.reconnect()
    }
    onError(e) {
        this.errorFn = e
    }
    onOpen(e) {
        this.openFn = e
    }
    onPreloadProgress(e) {
        this.preloadProgressFn = e
    }
    reconnect() {
        this.socket = new Promise(((e,t)=>{
            const n = new WebSocket(this.endpoint);
            n.binaryType = "arraybuffer";
            const r = this.onMessage.bind(this)
              , o = ()=>{
                const o = i=>{
                    if (n.removeEventListener("message", o),
                    i.data.startsWith("write") || i.data.startsWith("read")) {
                        const [o,s,a] = i.data.split(",")
                          , c = Number.parseInt(s);
                        this.aheadRange = c,
                        this.aheadSize = c * this.sectorSize,
                        this.maxRead = Math.floor(1048576 / this.aheadSize);
                        const l = this.aheadSize * this.maxRead;
                        this.readBuffer = new Uint8Array(5 + 4 * this.maxRead),
                        this.readAheadBuffer = new Uint8Array(l),
                        this.decodeBuffer = new Uint8Array(l),
                        this.cache = new hl(this.sectorSize,c,pl);
                        let u = 0
                          , d = 0
                          , f = new Uint8Array(0);
                        const h = i=>{
                            let s = new Uint8Array(i.data);
                            if (0 === u && (u = s[0] + (s[1] << 8) + (s[2] << 16) + (s[3] << 24),
                            f = new Uint8Array(u - 4),
                            s = s.slice(4)),
                            d < u && (f.set(s, d),
                            d += s.length),
                            d > f.length) {
                                const e = new Error("Preload buffer is bigger then expected");
                                this.errorFn(e),
                                t(e)
                            } else if (d == f.length) {
                                if (this.preloadQueue = [],
                                this.preloadSectors)
                                    for (let e = 0; e < f.length; e += 4)
                                        this.preloadQueue.push(f[e] + (f[e + 1] << 8) + (f[e + 2] << 16) + (f[e + 3] << 24));
                                n.removeEventListener("message", h),
                                n.addEventListener("message", r),
                                this.readOnly = "write" !== o,
                                this.openFn(!0, !this.readOnly, 1024 * (Number.parseInt(a) ?? 2097152), this.preloadQueue, c),
                                e(n),
                                this.preloadQueue.length > 0 && (this.preloadQueue.length * this.aheadSize > pl && (console.log("WARN! preloadQueue size is bigger then allowed", this.preloadQueue.length * this.aheadSize / 1024 / 1024, ">", 64),
                                this.preloadQueue = this.preloadQueue.slice(0, Math.floor(pl / this.aheadSize))),
                                this.request = this.makeReadRequest(this.preloadQueue.shift()),
                                this.executeRequest(this.request))
                            }
                        }
                        ;
                        n.addEventListener("message", h)
                    } else {
                        const e = new Error(i.data ?? "Unable to establish connection");
                        this.errorFn(e),
                        t(e)
                    }
                }
                ;
                n.addEventListener("message", o),
                n.send(this.owner + "&" + this.drive + "&" + this.token)
            }
              , i = e=>{
                if (console.error("Network error", e, "will reconnect"),
                s(),
                n.close(),
                this.retries--,
                0 === this.retries) {
                    const e = new Error("Network problem");
                    this.errorFn(e),
                    t(e)
                } else
                    setTimeout(this.reconnect.bind(this), 300)
            }
            ;
            n.addEventListener("error", i),
            n.addEventListener("open", o);
            const s = function() {
                n.removeEventListener("message", r),
                n.removeEventListener("open", o),
                n.removeEventListener("error", i)
            };
            this.cleanup = s
        }
        )),
        null !== this.request && this.executeRequest(this.request)
    }
    makeReadRequest(e, t=-1, n=(()=>{}
    )) {
        const r = [e];
        if (this.preloadQueue.length > 0) {
            for (this.preloadProgressFn(this.preloadQueue.length * this.aheadSize); this.preloadQueue.length > 0 && r.length < this.maxRead; ) {
                const t = this.preloadQueue.shift();
                t !== e && r.push(t)
            }
            for (let t = 0; t < this.preloadQueue.length; ++t)
                if (this.preloadQueue[t] == e) {
                    this.preloadQueue.splice(t, 1);
                    break
                }
        }
        return {
            type: 1,
            sectors: r,
            buffer: t,
            resolve: n
        }
    }
    read(e, t, n) {
        const r = this.cache.read(e, this.originReadMode);
        return null !== r ? (this.stats.cacheHit++,
        this.module.HEAPU8.set(r, t),
        n ? 0 : Promise.resolve(0)) : n ? 255 : new Promise((n=>{
            this.stats.cacheMiss++;
            const r = this.makeReadRequest(e, t, n);
            null !== this.request ? null === this.pendingRequest ? this.pendingRequest = r : (console.error("New read request while old one is still processed"),
            n(3)) : (this.request = r,
            this.executeRequest(this.request))
        }
        ))
    }
    write(e, t) {
        const n = {
            type: 2,
            sectors: [e],
            buffer: this.module.HEAPU8.slice(t, t + this.sectorSize),
            resolve: ()=>{}
        };
        return this.cache.write(e, n.buffer),
        this.executeRequest(n),
        0
    }
    async close() {
        const e = await this.socket;
        await new Promise((t=>{
            const n = setInterval((()=>{
                0 === e.bufferedAmount && (clearInterval(n),
                t())
            }
            ), 32)
        }
        )),
        this.cleanup(),
        e.close()
    }
    executeRequest(e) {
        this.socket.then((t=>{
            if (1 === e.type) {
                const {sectors: n} = e;
                this.readStartedAt = Date.now(),
                this.readAheadPos = 0,
                this.readAheadCompressed = 0,
                this.readBuffer[0] = 1,
                this.readBuffer[1] = 255 & n.length,
                this.readBuffer[2] = n.length >> 8 & 255,
                this.readBuffer[3] = n.length >> 16 & 255,
                this.readBuffer[4] = n.length >> 24 & 255;
                for (let t = 0; t < n.length; ++t) {
                    const r = this.cache.getOrigin(n[t]);
                    if (t > 0 && r !== n[t])
                        return console.error("Assertion failed orign should equal to sector", r, n[t]),
                        void e.resolve(5);
                    this.readBuffer[5 + 4 * t] = 255 & r,
                    this.readBuffer[5 + 4 * t + 1] = r >> 8 & 255,
                    this.readBuffer[5 + 4 * t + 2] = r >> 16 & 255,
                    this.readBuffer[5 + 4 * t + 3] = r >> 24 & 255
                }
                t.send(this.readBuffer.slice(0, 4 * n.length + 5).buffer)
            } else if (this.readOnly)
                e.resolve(0);
            else {
                const {sectors: n, buffer: r, resolve: o} = e;
                this.stats.write += this.sectorSize,
                this.writeBuffer[0] = 2,
                this.writeBuffer[1] = 255 & n[0],
                this.writeBuffer[2] = n[0] >> 8 & 255,
                this.writeBuffer[3] = n[0] >> 16 & 255,
                this.writeBuffer[4] = n[0] >> 24 & 255,
                this.writeBuffer.set(r, 5),
                t.send(this.writeBuffer.buffer),
                o(0)
            }
        }
        ))
    }
    onMessage(e) {
        if (null === this.request)
            console.error("Received message without request"),
            this.reconnect();
        else if (2 === this.request.type)
            console.error("Received read payload while write request"),
            this.reconnect();
        else if (e.data instanceof ArrayBuffer) {
            let t = new Uint8Array(e.data);
            0 === this.readAheadCompressed && (this.readAheadCompressed = t[0] + (t[1] << 8) + (t[2] << 16) + (t[3] << 24),
            t = t.slice(4));
            const {sectors: n, buffer: r, resolve: o} = this.request
              , i = this.readAheadCompressed - this.readAheadPos;
            if (t.byteLength > i || i < 0)
                console.error("wrong read payload length " + t.byteLength + " instead of " + i),
                o(3);
            else {
                this.readAheadBuffer.set(t, this.readAheadPos),
                this.readAheadPos += t.byteLength;
                const e = this.aheadSize * n.length;
                if (this.readAheadPos == this.readAheadCompressed) {
                    let t = e;
                    if (this.readAheadCompressed < e) {
                        const n = function(e, t, n, r) {
                            let o, i, s;
                            for (n = n || 0,
                            r = r || e.length - n,
                            o = n,
                            i = r,
                            s = 0; o < i; ) {
                                const n = e[o++];
                                let r = n >> 4;
                                if (r > 0) {
                                    let n = r + 240;
                                    for (; 255 === n; )
                                        n = e[o++],
                                        r += n;
                                    const a = o + r;
                                    for (; o < a; )
                                        t[s++] = e[o++];
                                    if (o === i)
                                        return s
                                }
                                const a = e[o++] | e[o++] << 8;
                                if (0 === a)
                                    return s;
                                if (a > s)
                                    return -(o - 2);
                                let c = 15 & n
                                  , l = c + 240;
                                for (; 255 === l; )
                                    l = e[o++],
                                    c += l;
                                let u = s - a;
                                const d = s + c + 4;
                                for (; s < d; )
                                    t[s++] = t[u++]
                            }
                            return s
                        }(this.readAheadBuffer, this.decodeBuffer, 0, this.readAheadCompressed);
                        n < 0 ? t = n : this.readAheadBuffer.set(this.decodeBuffer.slice(0, e), 0)
                    }
                    if (t != e)
                        console.error("wrong decode result " + t + " should be " + e),
                        o(4);
                    else {
                        for (let e = 0; e < n.length; ++e) {
                            const t = e * this.aheadSize
                              , o = n[e]
                              , i = this.cache.getOrigin(o);
                            if (this.cache.create(i, this.readAheadBuffer.slice(t, t + this.aheadSize)),
                            0 == e && r >= 0) {
                                if (this.originReadMode && o !== i)
                                    throw new Error("Sector must be one of origins in originReadMode");
                                const e = (o - i) * this.sectorSize;
                                this.module.HEAPU8.set(this.readAheadBuffer.slice(e, e + (this.originReadMode ? this.aheadRange : 1) * this.sectorSize), r)
                            }
                        }
                        this.stats.cacheUsed = this.cache.memUsed(),
                        this.stats.read += this.readAheadCompressed,
                        this.stats.readTotalTime += Date.now() - this.readStartedAt,
                        this.request = null,
                        o(0),
                        null !== this.pendingRequest ? (this.request = this.pendingRequest,
                        this.pendingRequest = null,
                        this.executeRequest(this.request)) : this.preloadQueue.length > 0 && (this.request = this.makeReadRequest(this.preloadQueue.shift()),
                        this.executeRequest(this.request))
                    }
                }
            }
        } else
            console.error("Received non arraybuffer data"),
            this.reconnect()
    }
}
const vl = new TextDecoder
  , yl = new TextEncoder
  , bl = 2e8
  , gl = {};
["wc-install", "wc-run", "wc-pack-fs-to-bundle", "wc-add-key", "wc-mouse-move", "wc-mouse-button", "wc-mouse-sync", "wc-exit", "wc-sync-sleep", "wc-pause", "wc-resume", "wc-mute", "wc-unmute", "wc-connect", "wc-disconnect", "wc-backend-event", "wc-asyncify-stats", "wc-fs-tree", "wc-fs-get-file", "wc-send-data-chunk", "wc-net-connected", "wc-net-received"].forEach(((e,t)=>gl[e] = t));
const _l = {};
["ws-extract-progress", "ws-ready", "ws-server-ready", "ws-frame-set-size", "ws-update-lines", "ws-log", "ws-warn", "ws-err", "ws-stdout", "ws-exit", "ws-persist", "ws-sound-init", "ws-sound-push", "ws-config", "ws-sync-sleep", "ws-connected", "ws-disconnected", "ws-asyncify-stats", "ws-fs-tree", "ws-send-data-chunk", "ws-net-connect", "ws-net-disconnect", "ws-net-send"].forEach(((e,t)=>_l[t] = e));
class wl {
    constructor(e, n) {
        t(this, "socket"),
        t(this, "sessionId", Date.now() + ""),
        t(this, "hardware"),
        t(this, "onInit", (()=>{}
        )),
        t(this, "cycles", 0),
        t(this, "sockdrive", function(e, t, n) {
            let r = 0;
            const o = {}
              , i = {}
              , s = {}
              , a = {
                read: 0,
                write: 0,
                readTotalTime: 0,
                cacheHit: 0,
                cacheMiss: 0,
                cacheUsed: 0
            };
            return {
                stats: a,
                open: async(c,l,u,d)=>{
                    const f = await fetch(c.replace("wss://", "https://").replace("ws://", "http://") + "/template/" + l + "/" + u)
                      , h = await f.json();
                    if (h.error)
                        throw new Error(h.error);
                    r++,
                    i[r] = {
                        name: h.name,
                        size: h.size ?? 0,
                        heads: h.heads ?? 1,
                        cylinders: h.cylinders ?? 520,
                        sectors: h.sectors ?? 63,
                        sectorSize: h.sector_size ?? 512
                    };
                    const p = i[r].sectorSize
                      , m = {
                        HEAPU8: new Uint8Array(0)
                    };
                    return o[r] = new ml(c,l,u,d,a,m,!0,!0),
                    new Promise(((i,a)=>{
                        const c = l + "/" + u;
                        o[r].onOpen(((t,n,o,a,l)=>{
                            s[r] = new Uint8Array(p + p * l),
                            m.HEAPU8 = s[r],
                            e(c, t, n, o, a),
                            i({
                                handle: r,
                                aheadRange: l
                            })
                        }
                        )),
                        o[r].onPreloadProgress((e=>{
                            n(c, e)
                        }
                        )),
                        o[r].onError((e=>{
                            t(e),
                            a(e)
                        }
                        ))
                    }
                    ))
                }
                ,
                read: async(e,t)=>{
                    if (o[e]) {
                        const n = i[r].sectorSize;
                        let a = o[e].read(t, n, !0);
                        return (a = 255) && (a = await o[e].read(t, n, !1)),
                        {
                            code: a,
                            buffer: s[e].slice(n)
                        }
                    }
                    return console.error("ERROR! sockdrive handle", e, "not found"),
                    Promise.resolve({
                        code: 1
                    })
                }
                ,
                write: (e,n,r)=>r.byteLength != i[e].sectorSize ? (t(new Error("sockdrive write buffer size " + r.byteLength + " != sector size " + i[e].sectorSize)),
                1) : o[e] ? (s[e].set(r, 0),
                o[e].write(n, 0)) : (console.error("ERROR! sockdrive handle", e, "not found"),
                1),
                close: e=>{
                    o[e] && (o[e].close(),
                    delete s[e],
                    delete i[e],
                    delete o[e])
                }
                ,
                template: e=>i[e]
            }
        }(this.onSockdriveOpen.bind(this), this.onSockdriveError.bind(this), this.onSockdrivePreloadProgress.bind(this))),
        t(this, "handler", (()=>{}
        )),
        this.socket = e,
        this.socket.addEventListener("error", (e=>{
            this.handler("ws-err", {
                tag: "ws",
                message: e.message ?? "Unknown transport layer error"
            }),
            this.handler("ws-exit", {}),
            this.socket.close()
        }
        )),
        this.socket.addEventListener("message", (async e=>{
            const t = e.data;
            this.onMessage(new Uint8Array(await t.arrayBuffer()))
        }
        )),
        this.sendMessageToSocket("wc-install"),
        this.hardware = null,
        this.onInit = n
    }
    writeUint32(e, t, n) {
        return e[n] = 255 & t,
        e[n + 1] = (65280 & t) >> 8,
        e[n + 2] = (16711680 & t) >> 16,
        e[n + 3] = (4278190080 & t) >> 24,
        n + 4
    }
    readUint32(e, t) {
        return 255 & e[t] | e[t + 1] << 8 & 65280 | e[t + 2] << 16 & 16711680 | e[t + 3] << 24 & 4278190080
    }
    readUint64(e, t) {
        return this.readUint32(e, t) + this.readUint32(e, t + 4) * 2 ** 32
    }
    sendMessageToSocket(e, ...t) {
        let n = 1;
        for (const i of t)
            n += 4 + ((null == i ? void 0 : i.length) ?? 0);
        const r = new Uint8Array(n);
        r[0] = "string" == typeof e ? gl[e] : e;
        let o = 1;
        for (const i of t)
            this.writeUint32(r, (null == i ? void 0 : i.length) ?? 0, o),
            o += 4,
            i && (r.set(i, o),
            o += i.length);
        this.socket.send(r)
    }
    readMessage(e) {
        const t = [];
        let n = 1;
        for (; n + 4 <= e.length; ) {
            const r = this.readUint32(e, n);
            if (n += 4,
            n + r > e.length)
                throw new Error("read_message out of bounds");
            t.push(e.slice(n, n + r)),
            n += r
        }
        return {
            id: e[0],
            payload: t
        }
    }
    onMessage(e) {
        var t;
        const {id: n, payload: r} = this.readMessage(e)
          , o = _l[n];
        switch (o) {
        case "ws-ready":
            this.onInit(r && r[0] && r.length > 0 ? r[0][0] : 0),
            this.handler(o, {});
            break;
        case "ws-server-ready":
        case "ws-exit":
            "ws-server-ready" !== o && this.handler(o, {});
            break;
        case "ws-stdout":
        case "ws-log":
        case "ws-warn":
        case "ws-err":
            this.handler(o, {
                tag: vl.decode(r[0]),
                message: vl.decode(r[1])
            });
            break;
        case "ws-send-data-chunk":
            {
                const e = {
                    type: vl.decode(r[0]),
                    name: vl.decode(r[1]),
                    data: r[2]
                };
                this.handler(o, {
                    chunk: e
                })
            }
            break;
        case "ws-config":
            this.handler(o, {
                dosboxConf: r[0],
                jsdosConf: vl.decode(r[1])
            });
            break;
        case "ws-sound-init":
            this.handler(o, {
                freq: this.readUint32(r[0], 0)
            }),
            this.handler("ws-server-ready", {});
            break;
        case "ws-sound-push":
            this.handler(o, {
                samples: new Float32Array(r[0].buffer)
            });
            break;
        case "ws-frame-set-size":
            this.handler(o, {
                width: this.readUint32(r[0], 0),
                height: this.readUint32(r[0], 4)
            });
            break;
        case "ws-update-lines":
            if (r.length > 0) {
                const e = [];
                for (const t of r)
                    e.push({
                        start: this.readUint32(t, 0),
                        heapu8: t.slice(4)
                    });
                this.handler(o, {
                    lines: e
                })
            }
            break;
        case "ws-asyncify-stats":
            {
                this.cycles += this.readUint32(r[0], 0);
                const e = {
                    messageSent: this.readUint32(r[0], 4),
                    messageReceived: this.readUint32(r[0], 8),
                    messageFrame: this.readUint32(r[0], 12),
                    messageSound: this.readUint32(r[0], 16),
                    nonSkippableSleepCount: 0,
                    sleepCount: 0,
                    sleepTime: 0,
                    cycles: this.cycles,
                    netSent: 0,
                    netRecv: 0,
                    driveSent: this.sockdrive.stats.write,
                    driveRecv: this.sockdrive.stats.read,
                    driveRecvTime: this.sockdrive.stats.readTotalTime,
                    driveCacheHit: this.sockdrive.stats.cacheHit,
                    driveCacheMiss: this.sockdrive.stats.cacheMiss,
                    driveCacheUsed: this.sockdrive.stats.cacheUsed
                };
                this.handler(o, e)
            }
            break;
        case "ws-connected":
            this.handler(o, {
                networkType: r[0][0],
                address: vl.decode(r[1])
            });
            break;
        case "ws-disconnected":
            this.handler(o, {
                networkType: r[0][0]
            });
            break;
        case "ws-fs-tree":
            {
                let e = function(e) {
                    var t;
                    const n = e.split("/");
                    let r = i;
                    for (let o = 1; o < n.length - 1; ++o) {
                        const i = n[o];
                        if (r = null == (t = r.nodes) ? void 0 : t.find((e=>e.name == i)),
                        !r)
                            throw new Error("Unable to find node " + e + ", subdir " + i)
                    }
                    return [r, n[n.length - 1]]
                };
                const n = [];
                for (let t = 0; t < r.length - 1; ++t)
                    n.push({
                        name: vl.decode(r[t]),
                        size: null
                    });
                const o = r[r.length - 1];
                for (let t = 0; t < n.length; ++t) {
                    const e = this.readUint32(o, 4 * t);
                    n[t].size = e < 0 ? null : e
                }
                const i = {
                    name: ".",
                    nodes: [],
                    size: null
                };
                for (const {name: r, size: s} of n) {
                    const [n,o] = e(r);
                    null == (t = n.nodes) || t.push({
                        name: o,
                        size: s,
                        nodes: null === s ? [] : null
                    })
                }
                this.handler("ws-fs-tree", {
                    fsTree: i
                })
            }
            break;
        case "ws-persist":
            this.handler("ws-persist", {
                bundle: r.length > 0 ? r[0] : null
            });
            break;
        case "ws-net-connect":
            {
                let e = vl.decode(r[0]);
                e.startsWith("wss://") || e.startsWith("ws://") || (e = ("http:" === window.location.protocol && "localhost" !== window.location.hostname ? "ws://" : "wss://") + e),
                this.handler("ws-net-connect", {
                    address: e
                })
            }
            break;
        case "ws-net-send":
            this.handler("ws-net-send", {
                networkId: this.readUint32(r[0], 0),
                data: r[1]
            });
            break;
        case "ws-net-disconnect":
            this.handler("ws-net-disconnect", {
                networkId: this.readUint32(r[0], 0)
            });
            break;
        default:
            void 0 === o ? (async()=>{
                switch (n) {
                case 100:
                    {
                        const e = vl.decode(r[0])
                          , t = vl.decode(r[1])
                          , n = vl.decode(r[2])
                          , o = vl.decode(r[3])
                          , {handle: i, aheadRange: s} = await this.sockdrive.open(e, t, n, o)
                          , a = this.sockdrive.template(i)
                          , c = new Uint8Array(28);
                        let l = 0;
                        l = this.writeUint32(c, i, l),
                        l = this.writeUint32(c, a.size, l),
                        l = this.writeUint32(c, a.heads, l),
                        l = this.writeUint32(c, a.cylinders, l),
                        l = this.writeUint32(c, a.sectors, l),
                        l = this.writeUint32(c, a.sectorSize, l),
                        this.writeUint32(c, s, l),
                        this.sendMessageToSocket(100, c)
                    }
                    break;
                case 101:
                    {
                        const e = this.readUint32(r[0], 0)
                          , t = this.readUint32(r[0], 4)
                          , n = await this.sockdrive.read(e, t)
                          , o = new Uint8Array(4);
                        this.writeUint32(o, n.code, 0),
                        this.sendMessageToSocket(101, o, n.buffer ?? null)
                    }
                    break;
                case 102:
                    {
                        const e = this.readUint32(r[0], 0)
                          , t = this.readUint32(r[0], 4)
                          , n = this.sockdrive.write(e, t, r[1])
                          , o = new Uint8Array(4);
                        this.writeUint32(o, n, 0)
                    }
                    break;
                case 103:
                    this.sockdrive.close(this.readUint32(r[0], 0));
                    break;
                default:
                    console.log("WARN! Unhandled server non standard message", n, r)
                }
            }
            )().catch((e=>{
                this.handler("ws-err", {
                    tag: "panic",
                    message: "sockdrive error: " + (e.message ?? "???")
                })
            }
            )) : console.warn("WARN! Unhandled server message", o)
        }
    }
    async sendMessageToServer(e, t) {
        if (void 0 === t || (null == t ? void 0 : t.sessionId) !== this.sessionId)
            return;
        const n = gl[e];
        switch (e) {
        case "wc-run":
            {
                const e = t.token ?? "";
                this.sendMessageToSocket(n, yl.encode(e))
            }
            break;
        case "wc-send-data-chunk":
            {
                const e = t.chunk;
                this.sendMessageToSocket(n, yl.encode(e.type), yl.encode(e.name), e.data ? new Uint8Array(e.data) : null)
            }
            break;
        case "wc-asyncify-stats":
        case "wc-fs-tree":
            this.sendMessageToSocket(n);
            break;
        case "wc-add-key":
            {
                const e = new Uint8Array(12);
                let r = 0;
                r = this.writeUint32(e, t.key, r),
                r = this.writeUint32(e, t.pressed ? 1 : 0, r),
                this.writeUint32(e, t.timeMs, r),
                this.sendMessageToSocket(n, e)
            }
            break;
        case "wc-mouse-move":
            {
                const e = new Uint8Array(15);
                let r = 0;
                r = this.writeUint32(e, Math.abs(t.x) * bl, r),
                r = this.writeUint32(e, Math.abs(t.y) * bl, r),
                r = this.writeUint32(e, t.timeMs, r),
                e[r] = t.relative ? 1 : 0,
                e[r + 1] = t.x >= 0 ? 0 : 1,
                e[r + 2] = t.y >= 0 ? 0 : 1,
                this.sendMessageToSocket(n, e)
            }
            break;
        case "wc-mouse-button":
            {
                const e = new Uint8Array(6);
                e[0] = t.button,
                e[1] = t.pressed ? 1 : 0,
                this.writeUint32(e, t.timeMs, 2),
                this.sendMessageToSocket(n, e)
            }
            break;
        case "wc-mouse-sync":
            {
                const e = new Uint8Array(4);
                this.writeUint32(e, t.timeMs, 0),
                this.sendMessageToSocket(n, e)
            }
            break;
        case "wc-connect":
            this.sendMessageToSocket(n, new Uint8Array([t.networkType]), yl.encode(t.address));
            break;
        case "wc-pack-fs-to-bundle":
            this.sendMessageToSocket(n, new Uint8Array([t.onlyChanges ? 1 : 0]));
            break;
        case "wc-net-connected":
            {
                const e = new Uint8Array(4);
                this.writeUint32(e, t.networkId + 1, 0),
                this.sendMessageToSocket(n, e)
            }
            break;
        case "wc-net-received":
            {
                const e = new Uint8Array(4);
                this.writeUint32(e, t.networkId, 0),
                this.sendMessageToSocket(n, e, new Uint8Array(t.data))
            }
            break;
        default:
            console.log("Unhandled client message (wc):", e, n, t)
        }
    }
    initMessageHandler(e) {
        this.handler = (t,n)=>{
            n.sessionId = this.sessionId,
            e(t, n)
        }
    }
    exit() {
        this.sendMessageToSocket("wc-exit")
    }
    onSockdriveOpen(e, t, n, r, o) {
        this.handler("ws-log", {
            tag: "worker",
            message: "sockdrive: " + e + ", read=" + t + ", write=" + n + ", imageSize=" + Math.round(r / 1024 / 1024) + "Mb, preloadQueue=" + o.length
        })
    }
    onSockdriveError(e) {
        this.handler("ws-err", {
            tag: "panic",
            message: e.message ?? "unable to open sockdrive"
        })
    }
    onSockdrivePreloadProgress(e, t) {
        this.handler("ws-log", {
            tag: "worker",
            message: "sockdrive: " + e + ", preload=" + t
        })
    }
}
function kl(e) {
    const {ci: t} = e
      , n = on((e=>e.dos.softKeyboard))
      , r = on((e=>e.dos.softKeyboardLayout))
      , o = on((e=>e.dos.softKeyboardSymbols))
      , i = on((e=>e.dos.softKeyboardActiveSymbols))
      , s = tr()
      , a = o[i] ?? {};
    if (!n || null === t)
        return null;
    function c(e, n) {
        if (null !== t)
            if ("⎘" === e) {
                if (n) {
                    const e = (i + 1) % o.length;
                    e !== i && s(Ci.actions.softKeyboardActiveSymbols(e))
                }
            } else
                for (const r of function(e) {
                    if (e.length > 1)
                        return "{enter}" === e ? [wa] : "{shift}" === e ? [Sa] : "{bksp}" === e ? [_a] : "{lock}" === e ? [Ea] : "{tab}" === e ? [ga] : "{space}" === e ? [ka] : "{esc}" === e ? [ba] : "{ctrl}" === e ? [Ca] : "{alt}" === e ? [xa] : "{up}" === e ? [Ba] : "{down}" === e ? [za] : "{left}" === e ? [Ta] : "{right}" === e ? [Ra] : (console.warn("Unknown button", e),
                        []);
                    if ("," === e)
                        return [Da];
                    if ("." === e)
                        return [Aa];
                    if ("'" === e)
                        return [ja];
                    if (":" === e)
                        return [Sa, Ma];
                    if ("{" === e)
                        return [Sa, Pa];
                    if ("}" === e)
                        return [Sa, Oa];
                    const t = Ia(e.toUpperCase().charCodeAt(0));
                    if (0 === t)
                        return [];
                    return [t]
                }(e))
                    t.sendKeyEvent(r, n)
    }
    return Di("div", {
        class: "soft-keyboard flex flex-col gap-3 my-2 mx-2 items-center",
        children: r.map((e=>Di("div", {
            class: "flex flex-row gap-2 flex-wrap",
            children: e.split(" ").map((e=>Di("kbd", {
                class: "kbd kbd-md cursor-pointer hover:bg-slate-400",
                onPointerDown: ()=>c(e, !0),
                onPointerUp: ()=>c(e, !1),
                onPointerCancel: ()=>c(e, !1),
                children: a[e] ?? e
            })))
        })))
    })
}
function xl(e) {
    const t = le(null)
      , [n,r] = ie(null)
      , o = on((e=>e.dos.sockdriveWrite))
      , i = on((e=>{
        var t;
        return null == (t = e.auth.account) ? void 0 : t.token.access_token
    }
    ))
      , s = o ? i : void 0
      , a = on((e=>e.dos.worker))
      , c = on((e=>e.dos.backend))
      , l = on((e=>e.dos.backendHardware))
      , u = on((e=>e.dos.noCursor))
      , d = tr()
      , f = vi();
    return ae((()=>{
        try {
            const e = f.loadedBundle;
            let t = null !== e.bundleChanges ? [e.bundle, e.bundleChanges] : e.bundle;
            if (null !== e.initFs)
                if (Array.isArray(t) || (t = [t]),
                Array.isArray(e.initFs))
                    for (const r of e.initFs)
                        t.push(r);
                else
                    t.push(e.initFs);
            e.bundle = null,
            e.bundleChanges = null,
            e.initFs = null;
            const n = (async()=>{
                if (l && f.options.backendHardware) {
                    const r = await f.options.backendHardware(c);
                    if (null !== r)
                        return emulators.backend(t, await (e = r,
                        n = e=>{
                            e < Hi && d(Mi.actions.updateWsWarning(!0)),
                            console.log("wsServer:", e, " expected:", Hi)
                        }
                        ,
                        new Promise((t=>{
                            let r = !1;
                            const o = setInterval((()=>{
                                if (r)
                                    return;
                                r = !0;
                                const i = new WebSocket(e)
                                  , s = ()=>{
                                    clearInterval(o),
                                    console.log("Connected to", e),
                                    t(new wl(i,n))
                                }
                                ;
                                i.addEventListener("error", (t=>{
                                    console.error("Can't conect to ", e, t),
                                    i.removeEventListener("open", s),
                                    i.close(),
                                    r = !1
                                }
                                )),
                                i.addEventListener("open", s)
                            }
                            ), 1e3)
                        }
                        ))), {
                            token: s
                        })
                }
                var e, n;
                return emulators[("dosbox" !== c && "dosboxX" !== c ? "dosbox" : c) + (a ? "Worker" : "Direct")](t, {
                    token: s
                })
            }
            )();
            return n.then((e=>{
                r(e),
                d(Ci.actions.ci(!0)),
                $a.mobile && e.config().then((e=>{
                    d(Ci.actions.mobileControls(null !== oc(e.jsdosConf)))
                }
                )).catch((e=>d(Ci.actions.emuError(e.message)))),
                f.ci = e,
                yi(f, "ci-ready", e),
                window.ci = e
            }
            )).catch((e=>d(Ci.actions.emuError(e.message)))),
            ()=>{
                n.then((e=>{
                    d(Ci.actions.ci(!1)),
                    f.ci = null,
                    e.exit()
                }
                ))
            }
        } catch (e) {
            d(Ci.actions.emuError(e.message))
        }
    }
    ), [a, c, s ?? null]),
    Di("div", {
        class: "flex flex-col flex-grow h-full overflow-hidden",
        children: [Di("div", {
            class: "bg-black h-full flex-grow overflow-hidden relative",
            children: [Di("canvas", {
                class: u ? "cursor-none" : "",
                ref: t
            }), t.current && n && Di(Cl, {
                canvas: t.current,
                ci: n
            })]
        }), Di(kl, {
            ci: n
        })]
    })
}
function Cl(e) {
    const {canvas: t, ci: n} = e
      , r = on((e=>e.dos.bundle));
    return ol(t, n),
    Di(g, {
        children: (null == r ? void 0 : r.endsWith(il)) && Di(sl, {
            ci: n
        })
    })
}
function Sl(e) {
    const t = oi()
      , n = e.error ?? "Unexpected error";
    return Di("div", {
        class: "flex-grow flex flex-col items-center justify-center px-8 m-auto",
        children: [Di("div", {
            class: "text-2xl text-center",
            children: t("error")
        }), Di("div", {
            class: "text-red-400 mt-8 text-2xl text-center",
            children: ['"', n, '"']
        }), Di("div", {
            class: "mt-8 text-sm text-center",
            children: t("consult_logs")
        }), e.onSkip && Di("button", {
            class: "mt-8 btn-primary",
            onClick: e.onSkip,
            children: t("skip")
        })]
    })
}
function El() {
    return Di(Sl, {
        error: on((e=>e.dos.error))
    })
}
function Pl(e) {
    const {head: t, message: n} = e;
    return Di("div", {
        class: "flex flex-col items-center justify-center frame-color px-8",
        children: [Di("div", {
            class: "text-2xl text-center",
            children: t
        }), Di("div", {
            class: "mt-2 text-center",
            children: n
        })]
    })
}
function Ol(e) {
    return e < 1024 ? e + "b" : (e /= 1024) < 1024 ? Math.round(e) + "kb" : (e /= 1024,
    Math.round(10 * e) / 10 + "mb")
}
function Ml() {
    const e = oi()
      , t = on((e=>e.dos.step))
      , n = on((e=>e.storage.recived))
      , r = on((e=>e.storage.total))
      , o = on((e=>e.storage.ready));
    let i = e("loading")
      , s = "100%";
    switch (t) {
    case "bnd-load":
        i = e("bundle_loading"),
        n > 0 && (s = `${Ol(n)} / ${Ol(r)}`,
        r > 0 && (s += ` (${Math.round(1e3 * n / r) / 10}%)`));
        break;
    case "bnd-config":
        i = e("bundle_config")
    }
    return Di("div", {
        class: "flex flex-col w-full h-full items-center justify-center",
        children: [Di(Pl, {
            head: i,
            message: s
        }), "bnd-load" === t && o && Di(jl, {})]
    })
}
function jl() {
    const e = oi()
      , t = tr();
    return Di(g, {
        children: [Di("div", {
            class: "mt-16 text-2xl",
            children: e("loading_saves")
        }), Di("div", {
            onClick: function() {
                t(Jo.actions.ready())
            },
            class: "self-center cursor-pointer underline mt-4 text-lg animate-pulse",
            children: e("account_not_ready")
        })]
    })
}
const Al = document.createElement("input");
function Dl() {
    const e = oi()
      , t = Zn()
      , [n,r] = ie(!1);
    if (n)
        return Di("div", {
            class: "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8 py-8",
            children: Di(Tl, {})
        });
    return Di("div", {
        class: "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8",
        children: [Di("div", {
            class: "mb-4 text-center underline cursor-pointer hover:text-accent",
            onClick: ()=>r(!0),
            children: e("load_by_url")
        }), Di(Bl, {}), Di("div", {
            class: "mt-4 text-center",
            children: e("upload_file")
        }), Di("div", {
            class: "mt-4 text-center underline cursor-pointer hover:text-accent",
            onClick: async function() {
                try {
                    await async function(e) {
                        await is("empty.jsdos", (async()=>(await emulators.bundle()).toUint8Array())(), null, null, e),
                        e.dispatch(Mi.actions.frameConf()),
                        e.dispatch(Mi.actions.setEditor(!0))
                    }(t).catch(console.error)
                } catch (e) {
                    t.dispatch(Ci.actions.bndError(e.message ?? "unexpected error"))
                }
            },
            children: e("create_empty")
        })]
    })
}
function Tl() {
    const e = oi()
      , t = Zn()
      , n = tr()
      , [r,o] = ie("")
      , [i,s] = ie(null);
    return Di(g, {
        children: [Di("div", {
            class: "form-control w-3/4 mb-4",
            children: [Di("label", {
                class: "label",
                children: Di("span", {
                    class: "label-text",
                    children: [e("enter_url"), ":"]
                })
            }), Di("input", {
                type: "text",
                class: "input w-full input-sm input-bordered",
                onChange: e=>o(e.currentTarget.value ?? ""),
                value: r
            })]
        }), Di("div", {
            class: "mt-4 text-center underline cursor-pointer hover:text-accent",
            onClick: ()=>async function(e) {
                let r;
                n(Mi.actions.frameNone());
                try {
                    r = new URL(e)
                } catch (o) {
                    return void s(o.message)
                }
                try {
                    await os(r.toString(), t)
                } catch (o) {
                    n(Ci.actions.bndError(o.message ?? "unexpected error"))
                }
            }(r),
            children: e("load")
        }), null !== i && Di("div", {
            class: "mt-8 text-center text-error",
            children: i
        })]
    })
}
function Bl() {
    const e = Zn();
    async function t() {
        if (Al.removeEventListener("change", t),
        null === Al.files || 0 === Al.files.length)
            return;
        const n = Al.files[0];
        try {
            await rs(n, e).catch((t=>e.dispatch(Ci.actions.bndError(t.message))))
        } catch (r) {
            e.dispatch(Ci.actions.bndError(r.message ?? "unexpected error"))
        }
    }
    return Di("div", {
        class: "cursor-pointer",
        onClick: function() {
            Al.addEventListener("change", t),
            Al.click()
        },
        children: Di("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-48 h-48 play-button",
            children: Di("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            })
        })
    })
}
function zl(e) {
    const t = "none" !== on((e=>e.ui.frame))
      , n = on((e=>e.ui.frameXs))
      , r = on((e=>e.ui.window))
      , o = on((e=>e.ui.background))
      , i = on((e=>e.ui.kiosk));
    let s = Di(Rl, {});
    switch (r) {
    case "error":
        s = Di(El, {});
        break;
    case "loading":
        s = Di(Ml, {});
        break;
    case "prerun":
        /* CUSTOM CHANGE Got rid of prerun jumps right into game with no built in UI */
        // s = Di(Ys, {});
        s = Di(xl, {});
        break;
    case "run":
        s = Di(xl, {});
        break;
    case "select":
        s = Di(Dl, {})
    }
    return Di("div", {
        class: "window absolute w-full h-full bg-base-100 flex justify-center",
        children: [Di("div", {
            class: "background-image",
            style: {
                backgroundImage: o ? "url(" + o + ")" : void 0
            }
        }), Di("div", {
            class: "relative flex flex-row h-full w-full items-center justify-center overflow-auto",
            children: [!i && Di("div", {
                class: (t ? n ? "w-24" : "w-96" : "w-12") + " flex-shrink-0"
            }), s]
        })]
    })
}
function Rl() {
    return Di("div", {
        class: "w-full h-full flex justify-center items-center",
        children: Di("div", {
            class: "radial-progress animate-spin",
            style: "--value:70;"
        })
    })
}
Al.type = "file";
let Ll = Mi.getInitialState().wideScreen;
function Nl() {
    const e = le(null)
      , t = on((e=>e.ui.hidden))
      , n = on((e=>e.ui.theme))
      , r = tr();
    return ae((()=>{
        if (t || null === e || null === e.current)
            return;
        const n = e.current;
        function o() {
            const e = n.getBoundingClientRect().width > 640;
            e !== Ll && (Ll = e,
            r(Mi.actions.setWideScreen(Ll)))
        }
        const i = new ResizeObserver(o);
        return i.observe(n),
        window.addEventListener("resize", o),
        ()=>{
            i.disconnect(),
            window.removeEventListener("resize", o)
        }
    }
    ), [t, e, r]),
    t ? null : Di("div", {
        ref: e,
        class: "w-full h-full relative",
        "data-theme": n,
        children: [Di(zl, {}), Di(Zs, {}), Di(ma, {}), Di(Vi, {}), Di(Il, {}), Di(Ul, {}), Di(Kl, {})]
    })
}
function Il() {
    const e = on((e=>e.ui.toast))
      , t = on((e=>e.ui.toastIntent))
      , n = on((e=>e.ui.readOnlyWarning));
    return null === e ? null : Di("div", {
        class: "absolute right-10 " + (n ? "bottom-32" : "bottom-10"),
        children: Di("div", {
            class: "alert alert-" + ("panic" === t ? "error" : t),
            children: e
        })
    })
}
function Ul() {
    const e = on((e=>e.ui.readOnlyWarning))
      , t = on((e=>e.auth.account))
      , n = oi()
      , r = tr();
    if (!e)
        return null;
    return Di("div", {
        class: "absolute right-10 bottom-10",
        children: Di("div", {
            class: "alert",
            children: [Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                class: "stroke-info shrink-0 w-6 h-6",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })
            }), Di("span", {
                children: n("read_only_access")
            }), Di("div", {
                children: [Di("button", {
                    class: "btn btn-sm btn-primary mr-2",
                    onClick: function() {
                        r(Mi.actions.readOnlyWarning(!1)),
                        ji(t, r)
                    },
                    children: n("fix")
                }), Di("button", {
                    class: "btn btn-sm",
                    onClick: function() {
                        r(Mi.actions.readOnlyWarning(!1))
                    },
                    children: n("close")
                })]
            })]
        })
    })
}
function Kl() {
    const e = on((e=>e.ui.updateWsWarning))
      , t = oi()
      , n = tr();
    if (!e)
        return null;
    return Di("div", {
        class: "absolute left-20 right-10 top-10 flex justify-center",
        children: Di("div", {
            class: "alert w-auto",
            children: [Di("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-6 text-error",
                children: Di("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                })
            }), Di("span", {
                children: t("ws_outdated")
            }), Di("div", {
                children: [Di("button", {
                    class: "btn btn-sm btn-primary mr-2",
                    onClick: function() {
                        window.open("https://dos.zone/download/", "_blank"),
                        n(Mi.actions.updateWsWarning(!1))
                    },
                    children: t("update")
                }), Di("button", {
                    class: "btn btn-sm",
                    onClick: function() {
                        n(Mi.actions.updateWsWarning(!1))
                    },
                    children: t("close")
                })]
            })]
        })
    })
}
window.Dos = (e,t={})=>{
    var n;
    const r = function(e) {
        return {
            root: null,
            loadedBundle: null,
            ci: null,
            cache: new Xo,
            options: e,
            layers: null
        }
    }(t)
      , o = function(e, t) {
        const {storeUid: n, slice: r} = di()
          , o = Ro({
            reducer: {
                init: r.reducer,
                i18n: ri.reducer,
                auth: Jo.reducer,
                ui: Mi.reducer,
                dos: Ci.reducer,
                storage: ii.reducer,
                editor: ai.reducer
            },
            middleware: e=>{
                const t = e();
                return t.push(hi),
                t
            }
        });
        return pi[n] = e,
        t.sockdriveBackend && -1 === ci.indexOf(t.sockdriveBackend.name) && (ci.push(t.sockdriveBackend.name),
        li[t.sockdriveBackend.name] = {
            sockdriveEndpoint: "https://" + t.sockdriveBackend.host,
            sockdriveWssEndpoint: "wss://" + t.sockdriveBackend.host
        },
        o.dispatch(fi.actions.setSockdriveBackendName(t.sockdriveBackend.name))),
        o
    }(r, t);
    "dz.caiiiycuk@gmail.com" === (null == (n = o.getState().auth.account) ? void 0 : n.email) && o.dispatch(Ci.actions.setSockdriveWrite(!1)),
    function(e, t, n) {
        function r() {
            n.dispatch(Mi.actions.documentHidden(document.hidden))
        }
        t.root = e,
        e.classList.add("jsdos-rso"),
        e.addEventListener("contextmenu", (e=>{
            var t;
            if (null === e.target || !(null == (t = e.target.classList) ? void 0 : t.contains("contextmenu")))
                return e.stopPropagation(),
                e.preventDefault(),
                !1
        }
        )),
        document.addEventListener("fullscreenchange", (()=>{
            const t = document.fullscreenElement === e;
            n.dispatch(Mi.actions.setFullScreen(t))
        }
        )),
        document.addEventListener("visibilitychange", r)
    }(e, r, o);
    let i = "none";
    function s(e) {
        o.dispatch(Mi.actions.theme(e))
    }
    function a(e) {
        o.dispatch(ri.actions.setLang(e))
    }
    function c(e) {
        o.dispatch(Ci.actions.dosBackend(e))
    }
    function l(e) {
        o.dispatch(Ci.actions.dosBackendLocked(e))
    }
    function u(e) {
        o.dispatch(Ci.actions.dosWorker(e))
    }
    function d(e) {
        o.dispatch(Ci.actions.mouseCapture(e))
    }
    function f(e) {
        o.dispatch(Ci.actions.setServer(e))
    }
    function h(e) {
        o.dispatch(Ci.actions.setRoom(e))
    }
    function p(e) {
        o.dispatch(Mi.actions.background(e))
    }
    function m(e) {
        ta(e, o)
    }
    function v(e) {
        o.dispatch(Mi.actions.autoStart(e))
    }
    function y(e) {
        o.dispatch(Mi.actions.kiosk(e))
    }
    function b(e) {
        o.dispatch(Ci.actions.imageRendering(e))
    }
    function g(e) {
        o.dispatch(Ci.actions.renderBackend(e))
    }
    function _(e) {
        o.dispatch(Ci.actions.renderAspect(e))
    }
    function w(e) {
        o.dispatch(Mi.actions.noNetworking(e))
    }
    function k(e) {
        o.dispatch(Mi.actions.noCloud(e))
    }
    function x(e) {
        o.dispatch(Ci.actions.scaleControls(e))
    }
    function C(e) {
        o.dispatch(Ci.actions.mouseSensitivity(e))
    }
    function S(e) {
        o.dispatch(Ci.actions.noCursor(e))
    }
    function E(e) {
        o.dispatch(Ci.actions.softKeyboardLayout(e))
    }
    function P(e) {
        o.dispatch(Ci.actions.softKeyboardSymbols(e))
    }
    return o.subscribe((function() {
        (async()=>{
            var e;
            const t = o.getState()
              , n = t.dos.step;
            if (n !== i && (i = n,
            "emu-ready" === t.dos.step)) {
                const n = null == (e = t.auth.account) ? void 0 : e.email;
                if (r.cache = await Go(n ?? "guest"),
                r.options.url)
                    try {
                        os(r.options.url, o)
                    } catch (s) {
                        o.dispatch(Ci.actions.bndError(s.message))
                    }
                else
                    r.options.dosboxConf ? async function(e, t, n) {
                        const r = mi(n)
                          , o = n.dispatch;
                        r.loadedBundle = null,
                        o(ai.actions.init(e)),
                        ss(e, o),
                        r.loadedBundle = {
                            bundleUrl: null,
                            bundleChangesUrl: null,
                            bundle: e,
                            bundleChanges: null,
                            initFs: t
                        },
                        o(Ci.actions.bndReady({}))
                    }({
                        dosboxConf: r.options.dosboxConf,
                        jsdosConf: {
                            version: "8"
                        }
                    }, r.options.initFs ?? null, o) : o.dispatch(Mi.actions.windowSelect());
                yi(r, "emu-ready")
            }
        }
        )().catch(console.error)
    }
    )),
    Ei(o, t.pathPrefix ?? "https://v8.js-dos.com/latest/emulators/"),
    t.theme && s(t.theme),
    t.lang && a(t.lang),
    t.backend && c(t.backend),
    t.backendLocked && l(t.backendLocked),
    void 0 !== t.workerThread && u(t.workerThread),
    void 0 !== t.mouseCapture && d(t.mouseCapture),
    t.server && f(t.server),
    t.room && h(t.room),
    t.background && p(t.background),
    void 0 !== t.fullScreen && m(t.fullScreen),
    void 0 !== t.loginUrl && o.dispatch(Jo.actions.setLoginUrl(t.loginUrl)),
    void 0 !== t.autoStart && v(t.autoStart),
    void 0 !== t.kiosk && y(t.kiosk),
    void 0 !== t.imageRendering && b(t.imageRendering),
    void 0 !== t.renderBackend && g(t.renderBackend),
    void 0 !== t.renderAspect && _(t.renderAspect),
    void 0 !== t.noNetworking && w(t.noNetworking),
    void 0 !== t.noCloud && k(t.noCloud),
    void 0 !== t.scaleControls && x(t.scaleControls),
    void 0 !== t.mouseSensitivity && C(t.mouseSensitivity),
    void 0 !== t.noCursor && S(t.noCursor),
    void 0 !== t.softKeyboardLayout && E(t.softKeyboardLayout),
    void 0 !== t.softKeyboardSymbols && P(t.softKeyboardSymbols),
    N(Di(Qn, {
        store: o,
        children: Di(Nl, {})
    }), e),
    {
        setTheme: s,
        setLang: a,
        setBackend: c,
        setBackendLocked: l,
        setWorkerThread: u,
        setMouseCapture: d,
        setServer: f,
        setRoom: h,
        setFrame: function(e) {
            o.dispatch(Mi.actions.frameNetwork())
        },
        setBackground: p,
        setFullScreen: m,
        setAutoStart: v,
        setKiosk: y,
        setImageRendering: b,
        setRenderBackend: g,
        setRenderAspect: _,
        setNoNetworking: w,
        setNoCloud: k,
        setPaused: function(e) {
            o.dispatch(Ci.actions.paused(e))
        },
        setScaleControls: x,
        setMouseSensitivity: C,
        setNoCursor: S,
        setSoftKeyboardLayout: E,
        setSoftKeyboardSymbols: P,
        save: ()=>Ms(o.getState(), r, o.dispatch),
        stop: async()=>{
            o.dispatch(Mi.actions.hidden(!0));
            const e = mi(o);
            if (e.ci)
                return e.ci.exit()
        }
    }
}
;
//# sourceMappingURL=js-dos.js.map
