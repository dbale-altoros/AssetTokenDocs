/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      268: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => o });
        var a = n(81),
          s = n.n(a),
          r = n(645),
          i = n.n(r)()(s());
        i.push([
          e.id,
          '@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap);',
        ]),
          i.push([e.id, "\nhtml,\nbody {\n  font-family: 'Source Code Pro', monospace;\n}\n", '']);
        const o = i;
      },
      645: e => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  a = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  a && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  a && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, a, s, r) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (a)
                for (var o = 0; o < this.length; o++) {
                  var d = this[o][0];
                  null != d && (i[d] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var p = [].concat(e[u]);
                (a && i[p[0]]) ||
                  (void 0 !== r &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'.concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {').concat(p[1], '}')),
                    (p[5] = r)),
                  n && (p[2] ? ((p[1] = '@media '.concat(p[2], ' {').concat(p[1], '}')), (p[2] = n)) : (p[2] = n)),
                  s &&
                    (p[4]
                      ? ((p[1] = '@supports ('.concat(p[4], ') {').concat(p[1], '}')), (p[4] = s))
                      : (p[4] = ''.concat(s))),
                  t.push(p));
              }
            }),
            t
          );
        };
      },
      81: e => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      387: (e, t, n) => {
        var a = n(268);
        a.__esModule && (a = a.default),
          'string' == typeof a && (a = [[e.id, a, '']]),
          a.locals && (e.exports = a.locals),
          (0, n(346).Z)('0b345cf4', a, !1, {});
      },
      346: (e, t, n) => {
        'use strict';
        function a(e, t) {
          for (var n = [], a = {}, s = 0; s < t.length; s++) {
            var r = t[s],
              i = r[0],
              o = { id: e + ':' + s, css: r[1], media: r[2], sourceMap: r[3] };
            a[i] ? a[i].parts.push(o) : n.push((a[i] = { id: i, parts: [o] }));
          }
          return n;
        }
        n.d(t, { Z: () => m });
        var s = 'undefined' != typeof document;
        if ('undefined' != typeof DEBUG && DEBUG && !s)
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
          );
        var r = {},
          i = s && (document.head || document.getElementsByTagName('head')[0]),
          o = null,
          d = 0,
          u = !1,
          p = function () {},
          l = null,
          c = 'data-vue-ssr-id',
          y = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function m(e, t, n, s) {
          (u = n), (l = s || {});
          var i = a(e, t);
          return (
            f(i),
            function (t) {
              for (var n = [], s = 0; s < i.length; s++) {
                var o = i[s];
                (d = r[o.id]).refs--, n.push(d);
              }
              for (t ? f((i = a(e, t))) : (i = []), s = 0; s < n.length; s++) {
                var d;
                if (0 === (d = n[s]).refs) {
                  for (var u = 0; u < d.parts.length; u++) d.parts[u]();
                  delete r[d.id];
                }
              }
            }
          );
        }
        function f(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              a = r[n.id];
            if (a) {
              a.refs++;
              for (var s = 0; s < a.parts.length; s++) a.parts[s](n.parts[s]);
              for (; s < n.parts.length; s++) a.parts.push(v(n.parts[s]));
              a.parts.length > n.parts.length && (a.parts.length = n.parts.length);
            } else {
              var i = [];
              for (s = 0; s < n.parts.length; s++) i.push(v(n.parts[s]));
              r[n.id] = { id: n.id, refs: 1, parts: i };
            }
          }
        }
        function h() {
          var e = document.createElement('style');
          return (e.type = 'text/css'), i.appendChild(e), e;
        }
        function v(e) {
          var t,
            n,
            a = document.querySelector('style[' + c + '~="' + e.id + '"]');
          if (a) {
            if (u) return p;
            a.parentNode.removeChild(a);
          }
          if (y) {
            var s = d++;
            (a = o || (o = h())), (t = T.bind(null, a, s, !1)), (n = T.bind(null, a, s, !0));
          } else
            (a = h()),
              (t = _.bind(null, a)),
              (n = function () {
                a.parentNode.removeChild(a);
              });
          return (
            t(e),
            function (a) {
              if (a) {
                if (a.css === e.css && a.media === e.media && a.sourceMap === e.sourceMap) return;
                t((e = a));
              } else n();
            }
          );
        }
        var b,
          g =
            ((b = []),
            function (e, t) {
              return (b[e] = t), b.filter(Boolean).join('\n');
            });
        function T(e, t, n, a) {
          var s = n ? '' : a.css;
          if (e.styleSheet) e.styleSheet.cssText = g(t, s);
          else {
            var r = document.createTextNode(s),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
          }
        }
        function _(e, t) {
          var n = t.css,
            a = t.media,
            s = t.sourceMap;
          if (
            (a && e.setAttribute('media', a),
            l.ssrId && e.setAttribute(c, t.id),
            s &&
              ((n += '\n/*# sourceURL=' + s.sources[0] + ' */'),
              (n +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(s)))) +
                ' */')),
            e.styleSheet)
          )
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
      },
    },
    t = {};
  function n(a) {
    var s = t[a];
    if (void 0 !== s) return s.exports;
    var r = (t[a] = { id: a, exports: {} });
    return e[a](r, r.exports, n), r.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      'use strict';
      var e = Object.freeze({});
      function t(e) {
        return null == e;
      }
      function a(e) {
        return null != e;
      }
      function s(e) {
        return !0 === e;
      }
      function r(e) {
        return 'string' == typeof e || 'number' == typeof e || 'symbol' == typeof e || 'boolean' == typeof e;
      }
      function i(e) {
        return null !== e && 'object' == typeof e;
      }
      var o = Object.prototype.toString;
      function d(e) {
        return '[object Object]' === o.call(e);
      }
      function u(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }
      function p(e) {
        return a(e) && 'function' == typeof e.then && 'function' == typeof e.catch;
      }
      function l(e) {
        return null == e ? '' : Array.isArray(e) || (d(e) && e.toString === o) ? JSON.stringify(e, null, 2) : String(e);
      }
      function c(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }
      function y(e, t) {
        for (var n = Object.create(null), a = e.split(','), s = 0; s < a.length; s++) n[a[s]] = !0;
        return t
          ? function (e) {
              return n[e.toLowerCase()];
            }
          : function (e) {
              return n[e];
            };
      }
      var m = y('slot,component', !0),
        f = y('key,ref,slot,slot-scope,is');
      function h(e, t) {
        if (e.length) {
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1);
        }
      }
      var v = Object.prototype.hasOwnProperty;
      function b(e, t) {
        return v.call(e, t);
      }
      function g(e) {
        var t = Object.create(null);
        return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }
      var T = /-(\w)/g,
        _ = g(function (e) {
          return e.replace(T, function (e, t) {
            return t ? t.toUpperCase() : '';
          });
        }),
        A = g(function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }),
        k = /\B([A-Z])/g,
        R = g(function (e) {
          return e.replace(k, '-$1').toLowerCase();
        }),
        w = Function.prototype.bind
          ? function (e, t) {
              return e.bind(t);
            }
          : function (e, t) {
              function n(n) {
                var a = arguments.length;
                return a ? (a > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
              }
              return (n._length = e.length), n;
            };
      function x(e, t) {
        t = t || 0;
        for (var n = e.length - t, a = new Array(n); n--; ) a[n] = e[n + t];
        return a;
      }
      function C(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function M(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && C(t, e[n]);
        return t;
      }
      function S(e, t, n) {}
      var E = function (e, t, n) {
          return !1;
        },
        I = function (e) {
          return e;
        };
      function O(e, t) {
        if (e === t) return !0;
        var n = i(e),
          a = i(t);
        if (!n || !a) return !n && !a && String(e) === String(t);
        try {
          var s = Array.isArray(e),
            r = Array.isArray(t);
          if (s && r)
            return (
              e.length === t.length &&
              e.every(function (e, n) {
                return O(e, t[n]);
              })
            );
          if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
          if (s || r) return !1;
          var o = Object.keys(e),
            d = Object.keys(t);
          return (
            o.length === d.length &&
            o.every(function (n) {
              return O(e[n], t[n]);
            })
          );
        } catch (e) {
          return !1;
        }
      }
      function $(e, t) {
        for (var n = 0; n < e.length; n++) if (O(e[n], t)) return n;
        return -1;
      }
      function z(e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(this, arguments));
        };
      }
      var D = 'data-server-rendered',
        F = ['component', 'directive', 'filter'],
        L = [
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'beforeDestroy',
          'destroyed',
          'activated',
          'deactivated',
          'errorCaptured',
          'serverPrefetch',
        ],
        j = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: E,
          isReservedAttr: E,
          isUnknownElement: E,
          getTagNamespace: S,
          parsePlatformTagName: I,
          mustUseProp: E,
          async: !0,
          _lifecycleHooks: L,
        },
        N =
          /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      function P(e) {
        var t = (e + '').charCodeAt(0);
        return 36 === t || 95 === t;
      }
      function q(e, t, n, a) {
        Object.defineProperty(e, t, { value: n, enumerable: !!a, writable: !0, configurable: !0 });
      }
      var B,
        U = new RegExp('[^' + N.source + '.$_\\d]'),
        G = '__proto__' in {},
        H = 'undefined' != typeof window,
        V = 'undefined' != typeof WXEnvironment && !!WXEnvironment.platform,
        W = V && WXEnvironment.platform.toLowerCase(),
        K = H && window.navigator.userAgent.toLowerCase(),
        X = K && /msie|trident/.test(K),
        J = K && K.indexOf('msie 9.0') > 0,
        Q = K && K.indexOf('edge/') > 0,
        Y = (K && K.indexOf('android'), (K && /iphone|ipad|ipod|ios/.test(K)) || 'ios' === W),
        Z = (K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K), K && K.match(/firefox\/(\d+)/)),
        ee = {}.watch,
        te = !1;
      if (H)
        try {
          var ne = {};
          Object.defineProperty(ne, 'passive', {
            get: function () {
              te = !0;
            },
          }),
            window.addEventListener('test-passive', null, ne);
        } catch (e) {}
      var ae = function () {
          return (
            void 0 === B && (B = !H && !V && void 0 !== n.g && n.g.process && 'server' === n.g.process.env.VUE_ENV), B
          );
        },
        se = H && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function re(e) {
        return 'function' == typeof e && /native code/.test(e.toString());
      }
      var ie,
        oe = 'undefined' != typeof Symbol && re(Symbol) && 'undefined' != typeof Reflect && re(Reflect.ownKeys);
      ie =
        'undefined' != typeof Set && re(Set)
          ? Set
          : (function () {
              function e() {
                this.set = Object.create(null);
              }
              return (
                (e.prototype.has = function (e) {
                  return !0 === this.set[e];
                }),
                (e.prototype.add = function (e) {
                  this.set[e] = !0;
                }),
                (e.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                e
              );
            })();
      var de = S,
        ue = 0,
        pe = function () {
          (this.id = ue++), (this.subs = []);
        };
      (pe.prototype.addSub = function (e) {
        this.subs.push(e);
      }),
        (pe.prototype.removeSub = function (e) {
          h(this.subs, e);
        }),
        (pe.prototype.depend = function () {
          pe.target && pe.target.addDep(this);
        }),
        (pe.prototype.notify = function () {
          for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
        }),
        (pe.target = null);
      var le = [];
      function ce(e) {
        le.push(e), (pe.target = e);
      }
      function ye() {
        le.pop(), (pe.target = le[le.length - 1]);
      }
      var me = function (e, t, n, a, s, r, i, o) {
          (this.tag = e),
            (this.data = t),
            (this.children = n),
            (this.text = a),
            (this.elm = s),
            (this.ns = void 0),
            (this.context = r),
            (this.fnContext = void 0),
            (this.fnOptions = void 0),
            (this.fnScopeId = void 0),
            (this.key = t && t.key),
            (this.componentOptions = i),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = o),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1);
        },
        fe = { child: { configurable: !0 } };
      (fe.child.get = function () {
        return this.componentInstance;
      }),
        Object.defineProperties(me.prototype, fe);
      var he = function (e) {
        void 0 === e && (e = '');
        var t = new me();
        return (t.text = e), (t.isComment = !0), t;
      };
      function ve(e) {
        return new me(void 0, void 0, void 0, String(e));
      }
      function be(e) {
        var t = new me(
          e.tag,
          e.data,
          e.children && e.children.slice(),
          e.text,
          e.elm,
          e.context,
          e.componentOptions,
          e.asyncFactory,
        );
        return (
          (t.ns = e.ns),
          (t.isStatic = e.isStatic),
          (t.key = e.key),
          (t.isComment = e.isComment),
          (t.fnContext = e.fnContext),
          (t.fnOptions = e.fnOptions),
          (t.fnScopeId = e.fnScopeId),
          (t.asyncMeta = e.asyncMeta),
          (t.isCloned = !0),
          t
        );
      }
      var ge = Array.prototype,
        Te = Object.create(ge);
      ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (e) {
        var t = ge[e];
        q(Te, e, function () {
          for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
          var s,
            r = t.apply(this, n),
            i = this.__ob__;
          switch (e) {
            case 'push':
            case 'unshift':
              s = n;
              break;
            case 'splice':
              s = n.slice(2);
          }
          return s && i.observeArray(s), i.dep.notify(), r;
        });
      });
      var _e = Object.getOwnPropertyNames(Te),
        Ae = !0;
      function ke(e) {
        Ae = e;
      }
      var Re = function (e) {
        (this.value = e),
          (this.dep = new pe()),
          (this.vmCount = 0),
          q(e, '__ob__', this),
          Array.isArray(e)
            ? (G
                ? (function (e, t) {
                    e.__proto__ = t;
                  })(e, Te)
                : (function (e, t, n) {
                    for (var a = 0, s = n.length; a < s; a++) {
                      var r = n[a];
                      q(e, r, t[r]);
                    }
                  })(e, Te, _e),
              this.observeArray(e))
            : this.walk(e);
      };
      function we(e, t) {
        var n;
        if (i(e) && !(e instanceof me))
          return (
            b(e, '__ob__') && e.__ob__ instanceof Re
              ? (n = e.__ob__)
              : Ae && !ae() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new Re(e)),
            t && n && n.vmCount++,
            n
          );
      }
      function xe(e, t, n, a, s) {
        var r = new pe(),
          i = Object.getOwnPropertyDescriptor(e, t);
        if (!i || !1 !== i.configurable) {
          var o = i && i.get,
            d = i && i.set;
          (o && !d) || 2 !== arguments.length || (n = e[t]);
          var u = !s && we(n);
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = o ? o.call(e) : n;
              return pe.target && (r.depend(), u && (u.dep.depend(), Array.isArray(t) && Se(t))), t;
            },
            set: function (t) {
              var a = o ? o.call(e) : n;
              t === a || (t != t && a != a) || (o && !d) || (d ? d.call(e, t) : (n = t), (u = !s && we(t)), r.notify());
            },
          });
        }
      }
      function Ce(e, t, n) {
        if (Array.isArray(e) && u(t)) return (e.length = Math.max(e.length, t)), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return (e[t] = n), n;
        var a = e.__ob__;
        return e._isVue || (a && a.vmCount) ? n : a ? (xe(a.value, t, n), a.dep.notify(), n) : ((e[t] = n), n);
      }
      function Me(e, t) {
        if (Array.isArray(e) && u(t)) e.splice(t, 1);
        else {
          var n = e.__ob__;
          e._isVue || (n && n.vmCount) || (b(e, t) && (delete e[t], n && n.dep.notify()));
        }
      }
      function Se(e) {
        for (var t = void 0, n = 0, a = e.length; n < a; n++)
          (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Se(t);
      }
      (Re.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) xe(e, t[n]);
      }),
        (Re.prototype.observeArray = function (e) {
          for (var t = 0, n = e.length; t < n; t++) we(e[t]);
        });
      var Ee = j.optionMergeStrategies;
      function Ie(e, t) {
        if (!t) return e;
        for (var n, a, s, r = oe ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++)
          '__ob__' !== (n = r[i]) &&
            ((a = e[n]), (s = t[n]), b(e, n) ? a !== s && d(a) && d(s) && Ie(a, s) : Ce(e, n, s));
        return e;
      }
      function Oe(e, t, n) {
        return n
          ? function () {
              var a = 'function' == typeof t ? t.call(n, n) : t,
                s = 'function' == typeof e ? e.call(n, n) : e;
              return a ? Ie(a, s) : s;
            }
          : t
          ? e
            ? function () {
                return Ie(
                  'function' == typeof t ? t.call(this, this) : t,
                  'function' == typeof e ? e.call(this, this) : e,
                );
              }
            : t
          : e;
      }
      function $e(e, t) {
        var n = t ? (e ? e.concat(t) : Array.isArray(t) ? t : [t]) : e;
        return n
          ? (function (e) {
              for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
              return t;
            })(n)
          : n;
      }
      function ze(e, t, n, a) {
        var s = Object.create(e || null);
        return t ? C(s, t) : s;
      }
      (Ee.data = function (e, t, n) {
        return n ? Oe(e, t, n) : t && 'function' != typeof t ? e : Oe(e, t);
      }),
        L.forEach(function (e) {
          Ee[e] = $e;
        }),
        F.forEach(function (e) {
          Ee[e + 's'] = ze;
        }),
        (Ee.watch = function (e, t, n, a) {
          if ((e === ee && (e = void 0), t === ee && (t = void 0), !t)) return Object.create(e || null);
          if (!e) return t;
          var s = {};
          for (var r in (C(s, e), t)) {
            var i = s[r],
              o = t[r];
            i && !Array.isArray(i) && (i = [i]), (s[r] = i ? i.concat(o) : Array.isArray(o) ? o : [o]);
          }
          return s;
        }),
        (Ee.props =
          Ee.methods =
          Ee.inject =
          Ee.computed =
            function (e, t, n, a) {
              if (!e) return t;
              var s = Object.create(null);
              return C(s, e), t && C(s, t), s;
            }),
        (Ee.provide = Oe);
      var De = function (e, t) {
        return void 0 === t ? e : t;
      };
      function Fe(e, t, n) {
        if (
          ('function' == typeof t && (t = t.options),
          (function (e, t) {
            var n = e.props;
            if (n) {
              var a,
                s,
                r = {};
              if (Array.isArray(n))
                for (a = n.length; a--; ) 'string' == typeof (s = n[a]) && (r[_(s)] = { type: null });
              else if (d(n)) for (var i in n) (s = n[i]), (r[_(i)] = d(s) ? s : { type: s });
              e.props = r;
            }
          })(t),
          (function (e, t) {
            var n = e.inject;
            if (n) {
              var a = (e.inject = {});
              if (Array.isArray(n)) for (var s = 0; s < n.length; s++) a[n[s]] = { from: n[s] };
              else if (d(n))
                for (var r in n) {
                  var i = n[r];
                  a[r] = d(i) ? C({ from: r }, i) : { from: i };
                }
            }
          })(t),
          (function (e) {
            var t = e.directives;
            if (t)
              for (var n in t) {
                var a = t[n];
                'function' == typeof a && (t[n] = { bind: a, update: a });
              }
          })(t),
          !t._base && (t.extends && (e = Fe(e, t.extends, n)), t.mixins))
        )
          for (var a = 0, s = t.mixins.length; a < s; a++) e = Fe(e, t.mixins[a], n);
        var r,
          i = {};
        for (r in e) o(r);
        for (r in t) b(e, r) || o(r);
        function o(a) {
          var s = Ee[a] || De;
          i[a] = s(e[a], t[a], n, a);
        }
        return i;
      }
      function Le(e, t, n, a) {
        if ('string' == typeof n) {
          var s = e[t];
          if (b(s, n)) return s[n];
          var r = _(n);
          if (b(s, r)) return s[r];
          var i = A(r);
          return b(s, i) ? s[i] : s[n] || s[r] || s[i];
        }
      }
      function je(e, t, n, a) {
        var s = t[e],
          r = !b(n, e),
          i = n[e],
          o = Be(Boolean, s.type);
        if (o > -1)
          if (r && !b(s, 'default')) i = !1;
          else if ('' === i || i === R(e)) {
            var d = Be(String, s.type);
            (d < 0 || o < d) && (i = !0);
          }
        if (void 0 === i) {
          i = (function (e, t, n) {
            if (b(t, 'default')) {
              var a = t.default;
              return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]
                ? e._props[n]
                : 'function' == typeof a && 'Function' !== Pe(t.type)
                ? a.call(e)
                : a;
            }
          })(a, s, e);
          var u = Ae;
          ke(!0), we(i), ke(u);
        }
        return i;
      }
      var Ne = /^\s*function (\w+)/;
      function Pe(e) {
        var t = e && e.toString().match(Ne);
        return t ? t[1] : '';
      }
      function qe(e, t) {
        return Pe(e) === Pe(t);
      }
      function Be(e, t) {
        if (!Array.isArray(t)) return qe(t, e) ? 0 : -1;
        for (var n = 0, a = t.length; n < a; n++) if (qe(t[n], e)) return n;
        return -1;
      }
      function Ue(e, t, n) {
        ce();
        try {
          if (t)
            for (var a = t; (a = a.$parent); ) {
              var s = a.$options.errorCaptured;
              if (s)
                for (var r = 0; r < s.length; r++)
                  try {
                    if (!1 === s[r].call(a, e, t, n)) return;
                  } catch (e) {
                    He(e, a, 'errorCaptured hook');
                  }
            }
          He(e, t, n);
        } finally {
          ye();
        }
      }
      function Ge(e, t, n, a, s) {
        var r;
        try {
          (r = n ? e.apply(t, n) : e.call(t)) &&
            !r._isVue &&
            p(r) &&
            !r._handled &&
            (r.catch(function (e) {
              return Ue(e, a, s + ' (Promise/async)');
            }),
            (r._handled = !0));
        } catch (e) {
          Ue(e, a, s);
        }
        return r;
      }
      function He(e, t, n) {
        if (j.errorHandler)
          try {
            return j.errorHandler.call(null, e, t, n);
          } catch (t) {
            t !== e && Ve(t);
          }
        Ve(e);
      }
      function Ve(e, t, n) {
        if ((!H && !V) || 'undefined' == typeof console) throw e;
        console.error(e);
      }
      var We,
        Ke = !1,
        Xe = [],
        Je = !1;
      function Qe() {
        Je = !1;
        var e = Xe.slice(0);
        Xe.length = 0;
        for (var t = 0; t < e.length; t++) e[t]();
      }
      if ('undefined' != typeof Promise && re(Promise)) {
        var Ye = Promise.resolve();
        (We = function () {
          Ye.then(Qe), Y && setTimeout(S);
        }),
          (Ke = !0);
      } else if (
        X ||
        'undefined' == typeof MutationObserver ||
        (!re(MutationObserver) && '[object MutationObserverConstructor]' !== MutationObserver.toString())
      )
        We =
          'undefined' != typeof setImmediate && re(setImmediate)
            ? function () {
                setImmediate(Qe);
              }
            : function () {
                setTimeout(Qe, 0);
              };
      else {
        var Ze = 1,
          et = new MutationObserver(Qe),
          tt = document.createTextNode(String(Ze));
        et.observe(tt, { characterData: !0 }),
          (We = function () {
            (Ze = (Ze + 1) % 2), (tt.data = String(Ze));
          }),
          (Ke = !0);
      }
      function nt(e, t) {
        var n;
        if (
          (Xe.push(function () {
            if (e)
              try {
                e.call(t);
              } catch (e) {
                Ue(e, t, 'nextTick');
              }
            else n && n(t);
          }),
          Je || ((Je = !0), We()),
          !e && 'undefined' != typeof Promise)
        )
          return new Promise(function (e) {
            n = e;
          });
      }
      var at = new ie();
      function st(e) {
        rt(e, at), at.clear();
      }
      function rt(e, t) {
        var n,
          a,
          s = Array.isArray(e);
        if (!((!s && !i(e)) || Object.isFrozen(e) || e instanceof me)) {
          if (e.__ob__) {
            var r = e.__ob__.dep.id;
            if (t.has(r)) return;
            t.add(r);
          }
          if (s) for (n = e.length; n--; ) rt(e[n], t);
          else for (n = (a = Object.keys(e)).length; n--; ) rt(e[a[n]], t);
        }
      }
      var it = g(function (e) {
        var t = '&' === e.charAt(0),
          n = '~' === (e = t ? e.slice(1) : e).charAt(0),
          a = '!' === (e = n ? e.slice(1) : e).charAt(0);
        return { name: (e = a ? e.slice(1) : e), once: n, capture: a, passive: t };
      });
      function ot(e, t) {
        function n() {
          var e = arguments,
            a = n.fns;
          if (!Array.isArray(a)) return Ge(a, null, arguments, t, 'v-on handler');
          for (var s = a.slice(), r = 0; r < s.length; r++) Ge(s[r], null, e, t, 'v-on handler');
        }
        return (n.fns = e), n;
      }
      function dt(e, n, a, r, i, o) {
        var d, u, p, l;
        for (d in e)
          (u = e[d]),
            (p = n[d]),
            (l = it(d)),
            t(u) ||
              (t(p)
                ? (t(u.fns) && (u = e[d] = ot(u, o)),
                  s(l.once) && (u = e[d] = i(l.name, u, l.capture)),
                  a(l.name, u, l.capture, l.passive, l.params))
                : u !== p && ((p.fns = u), (e[d] = p)));
        for (d in n) t(e[d]) && r((l = it(d)).name, n[d], l.capture);
      }
      function ut(e, n, r) {
        var i;
        e instanceof me && (e = e.data.hook || (e.data.hook = {}));
        var o = e[n];
        function d() {
          r.apply(this, arguments), h(i.fns, d);
        }
        t(o) ? (i = ot([d])) : a(o.fns) && s(o.merged) ? (i = o).fns.push(d) : (i = ot([o, d])),
          (i.merged = !0),
          (e[n] = i);
      }
      function pt(e, t, n, s, r) {
        if (a(t)) {
          if (b(t, n)) return (e[n] = t[n]), r || delete t[n], !0;
          if (b(t, s)) return (e[n] = t[s]), r || delete t[s], !0;
        }
        return !1;
      }
      function lt(e) {
        return r(e) ? [ve(e)] : Array.isArray(e) ? yt(e) : void 0;
      }
      function ct(e) {
        return a(e) && a(e.text) && !1 === e.isComment;
      }
      function yt(e, n) {
        var i,
          o,
          d,
          u,
          p = [];
        for (i = 0; i < e.length; i++)
          t((o = e[i])) ||
            'boolean' == typeof o ||
            ((u = p[(d = p.length - 1)]),
            Array.isArray(o)
              ? o.length > 0 &&
                (ct((o = yt(o, (n || '') + '_' + i))[0]) && ct(u) && ((p[d] = ve(u.text + o[0].text)), o.shift()),
                p.push.apply(p, o))
              : r(o)
              ? ct(u)
                ? (p[d] = ve(u.text + o))
                : '' !== o && p.push(ve(o))
              : ct(o) && ct(u)
              ? (p[d] = ve(u.text + o.text))
              : (s(e._isVList) && a(o.tag) && t(o.key) && a(n) && (o.key = '__vlist' + n + '_' + i + '__'), p.push(o)));
        return p;
      }
      function mt(e, t) {
        if (e) {
          for (var n = Object.create(null), a = oe ? Reflect.ownKeys(e) : Object.keys(e), s = 0; s < a.length; s++) {
            var r = a[s];
            if ('__ob__' !== r) {
              for (var i = e[r].from, o = t; o; ) {
                if (o._provided && b(o._provided, i)) {
                  n[r] = o._provided[i];
                  break;
                }
                o = o.$parent;
              }
              if (!o && 'default' in e[r]) {
                var d = e[r].default;
                n[r] = 'function' == typeof d ? d.call(t) : d;
              }
            }
          }
          return n;
        }
      }
      function ft(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, a = 0, s = e.length; a < s; a++) {
          var r = e[a],
            i = r.data;
          if (
            (i && i.attrs && i.attrs.slot && delete i.attrs.slot,
            (r.context !== t && r.fnContext !== t) || !i || null == i.slot)
          )
            (n.default || (n.default = [])).push(r);
          else {
            var o = i.slot,
              d = n[o] || (n[o] = []);
            'template' === r.tag ? d.push.apply(d, r.children || []) : d.push(r);
          }
        }
        for (var u in n) n[u].every(ht) && delete n[u];
        return n;
      }
      function ht(e) {
        return (e.isComment && !e.asyncFactory) || ' ' === e.text;
      }
      function vt(e) {
        return e.isComment && e.asyncFactory;
      }
      function bt(t, n, a) {
        var s,
          r = Object.keys(n).length > 0,
          i = t ? !!t.$stable : !r,
          o = t && t.$key;
        if (t) {
          if (t._normalized) return t._normalized;
          if (i && a && a !== e && o === a.$key && !r && !a.$hasNormal) return a;
          for (var d in ((s = {}), t)) t[d] && '$' !== d[0] && (s[d] = gt(n, d, t[d]));
        } else s = {};
        for (var u in n) u in s || (s[u] = Tt(n, u));
        return (
          t && Object.isExtensible(t) && (t._normalized = s),
          q(s, '$stable', i),
          q(s, '$key', o),
          q(s, '$hasNormal', r),
          s
        );
      }
      function gt(e, t, n) {
        var a = function () {
          var e = arguments.length ? n.apply(null, arguments) : n({}),
            t = (e = e && 'object' == typeof e && !Array.isArray(e) ? [e] : lt(e)) && e[0];
          return e && (!t || (1 === e.length && t.isComment && !vt(t))) ? void 0 : e;
        };
        return n.proxy && Object.defineProperty(e, t, { get: a, enumerable: !0, configurable: !0 }), a;
      }
      function Tt(e, t) {
        return function () {
          return e[t];
        };
      }
      function _t(e, t) {
        var n, s, r, o, d;
        if (Array.isArray(e) || 'string' == typeof e)
          for (n = new Array(e.length), s = 0, r = e.length; s < r; s++) n[s] = t(e[s], s);
        else if ('number' == typeof e) for (n = new Array(e), s = 0; s < e; s++) n[s] = t(s + 1, s);
        else if (i(e))
          if (oe && e[Symbol.iterator]) {
            n = [];
            for (var u = e[Symbol.iterator](), p = u.next(); !p.done; ) n.push(t(p.value, n.length)), (p = u.next());
          } else
            for (o = Object.keys(e), n = new Array(o.length), s = 0, r = o.length; s < r; s++)
              (d = o[s]), (n[s] = t(e[d], d, s));
        return a(n) || (n = []), (n._isVList = !0), n;
      }
      function At(e, t, n, a) {
        var s,
          r = this.$scopedSlots[e];
        r
          ? ((n = n || {}), a && (n = C(C({}, a), n)), (s = r(n) || ('function' == typeof t ? t() : t)))
          : (s = this.$slots[e] || ('function' == typeof t ? t() : t));
        var i = n && n.slot;
        return i ? this.$createElement('template', { slot: i }, s) : s;
      }
      function kt(e) {
        return Le(this.$options, 'filters', e) || I;
      }
      function Rt(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
      }
      function wt(e, t, n, a, s) {
        var r = j.keyCodes[t] || n;
        return s && a && !j.keyCodes[t] ? Rt(s, a) : r ? Rt(r, e) : a ? R(a) !== t : void 0 === e;
      }
      function xt(e, t, n, a, s) {
        if (n && i(n)) {
          var r;
          Array.isArray(n) && (n = M(n));
          var o = function (i) {
            if ('class' === i || 'style' === i || f(i)) r = e;
            else {
              var o = e.attrs && e.attrs.type;
              r = a || j.mustUseProp(t, o, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
            }
            var d = _(i),
              u = R(i);
            d in r ||
              u in r ||
              ((r[i] = n[i]),
              s &&
                ((e.on || (e.on = {}))['update:' + i] = function (e) {
                  n[i] = e;
                }));
          };
          for (var d in n) o(d);
        }
        return e;
      }
      function Ct(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
          a = n[e];
        return (
          (a && !t) ||
            St((a = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this)), '__static__' + e, !1),
          a
        );
      }
      function Mt(e, t, n) {
        return St(e, '__once__' + t + (n ? '_' + n : ''), !0), e;
      }
      function St(e, t, n) {
        if (Array.isArray(e))
          for (var a = 0; a < e.length; a++) e[a] && 'string' != typeof e[a] && Et(e[a], t + '_' + a, n);
        else Et(e, t, n);
      }
      function Et(e, t, n) {
        (e.isStatic = !0), (e.key = t), (e.isOnce = n);
      }
      function It(e, t) {
        if (t && d(t)) {
          var n = (e.on = e.on ? C({}, e.on) : {});
          for (var a in t) {
            var s = n[a],
              r = t[a];
            n[a] = s ? [].concat(s, r) : r;
          }
        }
        return e;
      }
      function Ot(e, t, n, a) {
        t = t || { $stable: !n };
        for (var s = 0; s < e.length; s++) {
          var r = e[s];
          Array.isArray(r) ? Ot(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), (t[r.key] = r.fn));
        }
        return a && (t.$key = a), t;
      }
      function $t(e, t) {
        for (var n = 0; n < t.length; n += 2) {
          var a = t[n];
          'string' == typeof a && a && (e[t[n]] = t[n + 1]);
        }
        return e;
      }
      function zt(e, t) {
        return 'string' == typeof e ? t + e : e;
      }
      function Dt(e) {
        (e._o = Mt),
          (e._n = c),
          (e._s = l),
          (e._l = _t),
          (e._t = At),
          (e._q = O),
          (e._i = $),
          (e._m = Ct),
          (e._f = kt),
          (e._k = wt),
          (e._b = xt),
          (e._v = ve),
          (e._e = he),
          (e._u = Ot),
          (e._g = It),
          (e._d = $t),
          (e._p = zt);
      }
      function Ft(t, n, a, r, i) {
        var o,
          d = this,
          u = i.options;
        b(r, '_uid') ? ((o = Object.create(r))._original = r) : ((o = r), (r = r._original));
        var p = s(u._compiled),
          l = !p;
        (this.data = t),
          (this.props = n),
          (this.children = a),
          (this.parent = r),
          (this.listeners = t.on || e),
          (this.injections = mt(u.inject, r)),
          (this.slots = function () {
            return d.$slots || bt(t.scopedSlots, (d.$slots = ft(a, r))), d.$slots;
          }),
          Object.defineProperty(this, 'scopedSlots', {
            enumerable: !0,
            get: function () {
              return bt(t.scopedSlots, this.slots());
            },
          }),
          p &&
            ((this.$options = u), (this.$slots = this.slots()), (this.$scopedSlots = bt(t.scopedSlots, this.$slots))),
          u._scopeId
            ? (this._c = function (e, t, n, a) {
                var s = Ut(o, e, t, n, a, l);
                return s && !Array.isArray(s) && ((s.fnScopeId = u._scopeId), (s.fnContext = r)), s;
              })
            : (this._c = function (e, t, n, a) {
                return Ut(o, e, t, n, a, l);
              });
      }
      function Lt(e, t, n, a, s) {
        var r = be(e);
        return (r.fnContext = n), (r.fnOptions = a), t.slot && ((r.data || (r.data = {})).slot = t.slot), r;
      }
      function jt(e, t) {
        for (var n in t) e[_(n)] = t[n];
      }
      Dt(Ft.prototype);
      var Nt = {
          init: function (e, t) {
            if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
              var n = e;
              Nt.prepatch(n, n);
            } else
              (e.componentInstance = (function (e, t) {
                var n = { _isComponent: !0, _parentVnode: e, parent: t },
                  s = e.data.inlineTemplate;
                return (
                  a(s) && ((n.render = s.render), (n.staticRenderFns = s.staticRenderFns)),
                  new e.componentOptions.Ctor(n)
                );
              })(e, Zt)).$mount(t ? e.elm : void 0, t);
          },
          prepatch: function (t, n) {
            var a = n.componentOptions;
            !(function (t, n, a, s, r) {
              var i = s.data.scopedSlots,
                o = t.$scopedSlots,
                d = !!(
                  (i && !i.$stable) ||
                  (o !== e && !o.$stable) ||
                  (i && t.$scopedSlots.$key !== i.$key) ||
                  (!i && t.$scopedSlots.$key)
                ),
                u = !!(r || t.$options._renderChildren || d);
              if (
                ((t.$options._parentVnode = s),
                (t.$vnode = s),
                t._vnode && (t._vnode.parent = s),
                (t.$options._renderChildren = r),
                (t.$attrs = s.data.attrs || e),
                (t.$listeners = a || e),
                n && t.$options.props)
              ) {
                ke(!1);
                for (var p = t._props, l = t.$options._propKeys || [], c = 0; c < l.length; c++) {
                  var y = l[c],
                    m = t.$options.props;
                  p[y] = je(y, m, n, t);
                }
                ke(!0), (t.$options.propsData = n);
              }
              a = a || e;
              var f = t.$options._parentListeners;
              (t.$options._parentListeners = a), Yt(t, a, f), u && ((t.$slots = ft(r, s.context)), t.$forceUpdate());
            })((n.componentInstance = t.componentInstance), a.propsData, a.listeners, n, a.children);
          },
          insert: function (e) {
            var t,
              n = e.context,
              a = e.componentInstance;
            a._isMounted || ((a._isMounted = !0), sn(a, 'mounted')),
              e.data.keepAlive && (n._isMounted ? (((t = a)._inactive = !1), on.push(t)) : nn(a, !0));
          },
          destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? an(t, !0) : t.$destroy());
          },
        },
        Pt = Object.keys(Nt);
      function qt(n, r, o, d, u) {
        if (!t(n)) {
          var l = o.$options._base;
          if ((i(n) && (n = l.extend(n)), 'function' == typeof n)) {
            var c;
            if (
              t(n.cid) &&
              ((n = (function (e, n) {
                if (s(e.error) && a(e.errorComp)) return e.errorComp;
                if (a(e.resolved)) return e.resolved;
                var r = Vt;
                if (
                  (r && a(e.owners) && -1 === e.owners.indexOf(r) && e.owners.push(r), s(e.loading) && a(e.loadingComp))
                )
                  return e.loadingComp;
                if (r && !a(e.owners)) {
                  var o = (e.owners = [r]),
                    d = !0,
                    u = null,
                    l = null;
                  r.$on('hook:destroyed', function () {
                    return h(o, r);
                  });
                  var c = function (e) {
                      for (var t = 0, n = o.length; t < n; t++) o[t].$forceUpdate();
                      e &&
                        ((o.length = 0),
                        null !== u && (clearTimeout(u), (u = null)),
                        null !== l && (clearTimeout(l), (l = null)));
                    },
                    y = z(function (t) {
                      (e.resolved = Wt(t, n)), d ? (o.length = 0) : c(!0);
                    }),
                    m = z(function (t) {
                      a(e.errorComp) && ((e.error = !0), c(!0));
                    }),
                    f = e(y, m);
                  return (
                    i(f) &&
                      (p(f)
                        ? t(e.resolved) && f.then(y, m)
                        : p(f.component) &&
                          (f.component.then(y, m),
                          a(f.error) && (e.errorComp = Wt(f.error, n)),
                          a(f.loading) &&
                            ((e.loadingComp = Wt(f.loading, n)),
                            0 === f.delay
                              ? (e.loading = !0)
                              : (u = setTimeout(function () {
                                  (u = null), t(e.resolved) && t(e.error) && ((e.loading = !0), c(!1));
                                }, f.delay || 200))),
                          a(f.timeout) &&
                            (l = setTimeout(function () {
                              (l = null), t(e.resolved) && m(null);
                            }, f.timeout)))),
                    (d = !1),
                    e.loading ? e.loadingComp : e.resolved
                  );
                }
              })((c = n), l)),
              void 0 === n)
            )
              return (function (e, t, n, a, s) {
                var r = he();
                return (r.asyncFactory = e), (r.asyncMeta = { data: t, context: n, children: a, tag: s }), r;
              })(c, r, o, d, u);
            (r = r || {}),
              xn(n),
              a(r.model) &&
                (function (e, t) {
                  var n = (e.model && e.model.prop) || 'value',
                    s = (e.model && e.model.event) || 'input';
                  (t.attrs || (t.attrs = {}))[n] = t.model.value;
                  var r = t.on || (t.on = {}),
                    i = r[s],
                    o = t.model.callback;
                  a(i) ? (Array.isArray(i) ? -1 === i.indexOf(o) : i !== o) && (r[s] = [o].concat(i)) : (r[s] = o);
                })(n.options, r);
            var y = (function (e, n, s) {
              var r = n.options.props;
              if (!t(r)) {
                var i = {},
                  o = e.attrs,
                  d = e.props;
                if (a(o) || a(d))
                  for (var u in r) {
                    var p = R(u);
                    pt(i, d, u, p, !0) || pt(i, o, u, p, !1);
                  }
                return i;
              }
            })(r, n);
            if (s(n.options.functional))
              return (function (t, n, s, r, i) {
                var o = t.options,
                  d = {},
                  u = o.props;
                if (a(u)) for (var p in u) d[p] = je(p, u, n || e);
                else a(s.attrs) && jt(d, s.attrs), a(s.props) && jt(d, s.props);
                var l = new Ft(s, d, i, r, t),
                  c = o.render.call(null, l._c, l);
                if (c instanceof me) return Lt(c, s, l.parent, o);
                if (Array.isArray(c)) {
                  for (var y = lt(c) || [], m = new Array(y.length), f = 0; f < y.length; f++)
                    m[f] = Lt(y[f], s, l.parent, o);
                  return m;
                }
              })(n, y, r, o, d);
            var m = r.on;
            if (((r.on = r.nativeOn), s(n.options.abstract))) {
              var f = r.slot;
              (r = {}), f && (r.slot = f);
            }
            !(function (e) {
              for (var t = e.hook || (e.hook = {}), n = 0; n < Pt.length; n++) {
                var a = Pt[n],
                  s = t[a],
                  r = Nt[a];
                s === r || (s && s._merged) || (t[a] = s ? Bt(r, s) : r);
              }
            })(r);
            var v = n.options.name || u;
            return new me(
              'vue-component-' + n.cid + (v ? '-' + v : ''),
              r,
              void 0,
              void 0,
              void 0,
              o,
              { Ctor: n, propsData: y, listeners: m, tag: u, children: d },
              c,
            );
          }
        }
      }
      function Bt(e, t) {
        var n = function (n, a) {
          e(n, a), t(n, a);
        };
        return (n._merged = !0), n;
      }
      function Ut(e, t, n, o, d, u) {
        return (
          (Array.isArray(n) || r(n)) && ((d = o), (o = n), (n = void 0)),
          s(u) && (d = 2),
          (function (e, t, n, s, r) {
            if (a(n) && a(n.__ob__)) return he();
            if ((a(n) && a(n.is) && (t = n.is), !t)) return he();
            var o, d, u;
            (Array.isArray(s) &&
              'function' == typeof s[0] &&
              (((n = n || {}).scopedSlots = { default: s[0] }), (s.length = 0)),
            2 === r
              ? (s = lt(s))
              : 1 === r &&
                (s = (function (e) {
                  for (var t = 0; t < e.length; t++)
                    if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                  return e;
                })(s)),
            'string' == typeof t)
              ? ((d = (e.$vnode && e.$vnode.ns) || j.getTagNamespace(t)),
                (o = j.isReservedTag(t)
                  ? new me(j.parsePlatformTagName(t), n, s, void 0, void 0, e)
                  : (n && n.pre) || !a((u = Le(e.$options, 'components', t)))
                  ? new me(t, n, s, void 0, void 0, e)
                  : qt(u, n, e, s, t)))
              : (o = qt(t, n, e, s));
            return Array.isArray(o)
              ? o
              : a(o)
              ? (a(d) && Gt(o, d),
                a(n) &&
                  (function (e) {
                    i(e.style) && st(e.style), i(e.class) && st(e.class);
                  })(n),
                o)
              : he();
          })(e, t, n, o, d)
        );
      }
      function Gt(e, n, r) {
        if (((e.ns = n), 'foreignObject' === e.tag && ((n = void 0), (r = !0)), a(e.children)))
          for (var i = 0, o = e.children.length; i < o; i++) {
            var d = e.children[i];
            a(d.tag) && (t(d.ns) || (s(r) && 'svg' !== d.tag)) && Gt(d, n, r);
          }
      }
      var Ht,
        Vt = null;
      function Wt(e, t) {
        return (e.__esModule || (oe && 'Module' === e[Symbol.toStringTag])) && (e = e.default), i(e) ? t.extend(e) : e;
      }
      function Kt(e) {
        if (Array.isArray(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (a(n) && (a(n.componentOptions) || vt(n))) return n;
          }
      }
      function Xt(e, t) {
        Ht.$on(e, t);
      }
      function Jt(e, t) {
        Ht.$off(e, t);
      }
      function Qt(e, t) {
        var n = Ht;
        return function a() {
          var s = t.apply(null, arguments);
          null !== s && n.$off(e, a);
        };
      }
      function Yt(e, t, n) {
        (Ht = e), dt(t, n || {}, Xt, Jt, Qt, e), (Ht = void 0);
      }
      var Zt = null;
      function en(e) {
        var t = Zt;
        return (
          (Zt = e),
          function () {
            Zt = t;
          }
        );
      }
      function tn(e) {
        for (; e && (e = e.$parent); ) if (e._inactive) return !0;
        return !1;
      }
      function nn(e, t) {
        if (t) {
          if (((e._directInactive = !1), tn(e))) return;
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
          e._inactive = !1;
          for (var n = 0; n < e.$children.length; n++) nn(e.$children[n]);
          sn(e, 'activated');
        }
      }
      function an(e, t) {
        if (!((t && ((e._directInactive = !0), tn(e))) || e._inactive)) {
          e._inactive = !0;
          for (var n = 0; n < e.$children.length; n++) an(e.$children[n]);
          sn(e, 'deactivated');
        }
      }
      function sn(e, t) {
        ce();
        var n = e.$options[t],
          a = t + ' hook';
        if (n) for (var s = 0, r = n.length; s < r; s++) Ge(n[s], e, null, e, a);
        e._hasHookEvent && e.$emit('hook:' + t), ye();
      }
      var rn = [],
        on = [],
        dn = {},
        un = !1,
        pn = !1,
        ln = 0,
        cn = 0,
        yn = Date.now;
      if (H && !X) {
        var mn = window.performance;
        mn &&
          'function' == typeof mn.now &&
          yn() > document.createEvent('Event').timeStamp &&
          (yn = function () {
            return mn.now();
          });
      }
      function fn() {
        var e, t;
        for (
          cn = yn(),
            pn = !0,
            rn.sort(function (e, t) {
              return e.id - t.id;
            }),
            ln = 0;
          ln < rn.length;
          ln++
        )
          (e = rn[ln]).before && e.before(), (t = e.id), (dn[t] = null), e.run();
        var n = on.slice(),
          a = rn.slice();
        (ln = rn.length = on.length = 0),
          (dn = {}),
          (un = pn = !1),
          (function (e) {
            for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), nn(e[t], !0);
          })(n),
          (function (e) {
            for (var t = e.length; t--; ) {
              var n = e[t],
                a = n.vm;
              a._watcher === n && a._isMounted && !a._isDestroyed && sn(a, 'updated');
            }
          })(a),
          se && j.devtools && se.emit('flush');
      }
      var hn = 0,
        vn = function (e, t, n, a, s) {
          (this.vm = e),
            s && (e._watcher = this),
            e._watchers.push(this),
            a
              ? ((this.deep = !!a.deep),
                (this.user = !!a.user),
                (this.lazy = !!a.lazy),
                (this.sync = !!a.sync),
                (this.before = a.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++hn),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new ie()),
            (this.newDepIds = new ie()),
            (this.expression = ''),
            'function' == typeof t
              ? (this.getter = t)
              : ((this.getter = (function (e) {
                  if (!U.test(e)) {
                    var t = e.split('.');
                    return function (e) {
                      for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]];
                      }
                      return e;
                    };
                  }
                })(t)),
                this.getter || (this.getter = S)),
            (this.value = this.lazy ? void 0 : this.get());
        };
      (vn.prototype.get = function () {
        var e;
        ce(this);
        var t = this.vm;
        try {
          e = this.getter.call(t, t);
        } catch (e) {
          if (!this.user) throw e;
          Ue(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && st(e), ye(), this.cleanupDeps();
        }
        return e;
      }),
        (vn.prototype.addDep = function (e) {
          var t = e.id;
          this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
        }),
        (vn.prototype.cleanupDeps = function () {
          for (var e = this.deps.length; e--; ) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }),
        (vn.prototype.update = function () {
          this.lazy
            ? (this.dirty = !0)
            : this.sync
            ? this.run()
            : (function (e) {
                var t = e.id;
                if (null == dn[t]) {
                  if (((dn[t] = !0), pn)) {
                    for (var n = rn.length - 1; n > ln && rn[n].id > e.id; ) n--;
                    rn.splice(n + 1, 0, e);
                  } else rn.push(e);
                  un || ((un = !0), nt(fn));
                }
              })(this);
        }),
        (vn.prototype.run = function () {
          if (this.active) {
            var e = this.get();
            if (e !== this.value || i(e) || this.deep) {
              var t = this.value;
              if (((this.value = e), this.user)) {
                var n = 'callback for watcher "' + this.expression + '"';
                Ge(this.cb, this.vm, [e, t], this.vm, n);
              } else this.cb.call(this.vm, e, t);
            }
          }
        }),
        (vn.prototype.evaluate = function () {
          (this.value = this.get()), (this.dirty = !1);
        }),
        (vn.prototype.depend = function () {
          for (var e = this.deps.length; e--; ) this.deps[e].depend();
        }),
        (vn.prototype.teardown = function () {
          if (this.active) {
            this.vm._isBeingDestroyed || h(this.vm._watchers, this);
            for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
            this.active = !1;
          }
        });
      var bn = { enumerable: !0, configurable: !0, get: S, set: S };
      function gn(e, t, n) {
        (bn.get = function () {
          return this[t][n];
        }),
          (bn.set = function (e) {
            this[t][n] = e;
          }),
          Object.defineProperty(e, n, bn);
      }
      var Tn = { lazy: !0 };
      function _n(e, t, n) {
        var a = !ae();
        'function' == typeof n
          ? ((bn.get = a ? An(t) : kn(n)), (bn.set = S))
          : ((bn.get = n.get ? (a && !1 !== n.cache ? An(t) : kn(n.get)) : S), (bn.set = n.set || S)),
          Object.defineProperty(e, t, bn);
      }
      function An(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t) return t.dirty && t.evaluate(), pe.target && t.depend(), t.value;
        };
      }
      function kn(e) {
        return function () {
          return e.call(this, this);
        };
      }
      function Rn(e, t, n, a) {
        return d(n) && ((a = n), (n = n.handler)), 'string' == typeof n && (n = e[n]), e.$watch(t, n, a);
      }
      var wn = 0;
      function xn(e) {
        var t = e.options;
        if (e.super) {
          var n = xn(e.super);
          if (n !== e.superOptions) {
            e.superOptions = n;
            var a = (function (e) {
              var t,
                n = e.options,
                a = e.sealedOptions;
              for (var s in n) n[s] !== a[s] && (t || (t = {}), (t[s] = n[s]));
              return t;
            })(e);
            a && C(e.extendOptions, a), (t = e.options = Fe(n, e.extendOptions)).name && (t.components[t.name] = e);
          }
        }
        return t;
      }
      function Cn(e) {
        this._init(e);
      }
      function Mn(e) {
        return e && (e.Ctor.options.name || e.tag);
      }
      function Sn(e, t) {
        return Array.isArray(e)
          ? e.indexOf(t) > -1
          : 'string' == typeof e
          ? e.split(',').indexOf(t) > -1
          : ((n = e), !('[object RegExp]' !== o.call(n)) && e.test(t));
        var n;
      }
      function En(e, t) {
        var n = e.cache,
          a = e.keys,
          s = e._vnode;
        for (var r in n) {
          var i = n[r];
          if (i) {
            var o = i.name;
            o && !t(o) && In(n, r, a, s);
          }
        }
      }
      function In(e, t, n, a) {
        var s = e[t];
        !s || (a && s.tag === a.tag) || s.componentInstance.$destroy(), (e[t] = null), h(n, t);
      }
      !(function (t) {
        t.prototype._init = function (t) {
          var n = this;
          (n._uid = wn++),
            (n._isVue = !0),
            t && t._isComponent
              ? (function (e, t) {
                  var n = (e.$options = Object.create(e.constructor.options)),
                    a = t._parentVnode;
                  (n.parent = t.parent), (n._parentVnode = a);
                  var s = a.componentOptions;
                  (n.propsData = s.propsData),
                    (n._parentListeners = s.listeners),
                    (n._renderChildren = s.children),
                    (n._componentTag = s.tag),
                    t.render && ((n.render = t.render), (n.staticRenderFns = t.staticRenderFns));
                })(n, t)
              : (n.$options = Fe(xn(n.constructor), t || {}, n)),
            (n._renderProxy = n),
            (n._self = n),
            (function (e) {
              var t = e.$options,
                n = t.parent;
              if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent; ) n = n.$parent;
                n.$children.push(e);
              }
              (e.$parent = n),
                (e.$root = n ? n.$root : e),
                (e.$children = []),
                (e.$refs = {}),
                (e._watcher = null),
                (e._inactive = null),
                (e._directInactive = !1),
                (e._isMounted = !1),
                (e._isDestroyed = !1),
                (e._isBeingDestroyed = !1);
            })(n),
            (function (e) {
              (e._events = Object.create(null)), (e._hasHookEvent = !1);
              var t = e.$options._parentListeners;
              t && Yt(e, t);
            })(n),
            (function (t) {
              (t._vnode = null), (t._staticTrees = null);
              var n = t.$options,
                a = (t.$vnode = n._parentVnode),
                s = a && a.context;
              (t.$slots = ft(n._renderChildren, s)),
                (t.$scopedSlots = e),
                (t._c = function (e, n, a, s) {
                  return Ut(t, e, n, a, s, !1);
                }),
                (t.$createElement = function (e, n, a, s) {
                  return Ut(t, e, n, a, s, !0);
                });
              var r = a && a.data;
              xe(t, '$attrs', (r && r.attrs) || e, null, !0), xe(t, '$listeners', n._parentListeners || e, null, !0);
            })(n),
            sn(n, 'beforeCreate'),
            (function (e) {
              var t = mt(e.$options.inject, e);
              t &&
                (ke(!1),
                Object.keys(t).forEach(function (n) {
                  xe(e, n, t[n]);
                }),
                ke(!0));
            })(n),
            (function (e) {
              e._watchers = [];
              var t = e.$options;
              t.props &&
                (function (e, t) {
                  var n = e.$options.propsData || {},
                    a = (e._props = {}),
                    s = (e.$options._propKeys = []);
                  e.$parent && ke(!1);
                  var r = function (r) {
                    s.push(r);
                    var i = je(r, t, n, e);
                    xe(a, r, i), r in e || gn(e, '_props', r);
                  };
                  for (var i in t) r(i);
                  ke(!0);
                })(e, t.props),
                t.methods &&
                  (function (e, t) {
                    for (var n in (e.$options.props, t)) e[n] = 'function' != typeof t[n] ? S : w(t[n], e);
                  })(e, t.methods),
                t.data
                  ? (function (e) {
                      var t = e.$options.data;
                      d(
                        (t = e._data =
                          'function' == typeof t
                            ? (function (e, t) {
                                ce();
                                try {
                                  return e.call(t, t);
                                } catch (e) {
                                  return Ue(e, t, 'data()'), {};
                                } finally {
                                  ye();
                                }
                              })(t, e)
                            : t || {}),
                      ) || (t = {});
                      for (var n = Object.keys(t), a = e.$options.props, s = (e.$options.methods, n.length); s--; ) {
                        var r = n[s];
                        (a && b(a, r)) || P(r) || gn(e, '_data', r);
                      }
                      we(t, !0);
                    })(e)
                  : we((e._data = {}), !0),
                t.computed &&
                  (function (e, t) {
                    var n = (e._computedWatchers = Object.create(null)),
                      a = ae();
                    for (var s in t) {
                      var r = t[s],
                        i = 'function' == typeof r ? r : r.get;
                      a || (n[s] = new vn(e, i || S, S, Tn)), s in e || _n(e, s, r);
                    }
                  })(e, t.computed),
                t.watch &&
                  t.watch !== ee &&
                  (function (e, t) {
                    for (var n in t) {
                      var a = t[n];
                      if (Array.isArray(a)) for (var s = 0; s < a.length; s++) Rn(e, n, a[s]);
                      else Rn(e, n, a);
                    }
                  })(e, t.watch);
            })(n),
            (function (e) {
              var t = e.$options.provide;
              t && (e._provided = 'function' == typeof t ? t.call(e) : t);
            })(n),
            sn(n, 'created'),
            n.$options.el && n.$mount(n.$options.el);
        };
      })(Cn),
        (function (e) {
          Object.defineProperty(e.prototype, '$data', {
            get: function () {
              return this._data;
            },
          }),
            Object.defineProperty(e.prototype, '$props', {
              get: function () {
                return this._props;
              },
            }),
            (e.prototype.$set = Ce),
            (e.prototype.$delete = Me),
            (e.prototype.$watch = function (e, t, n) {
              var a = this;
              if (d(t)) return Rn(a, e, t, n);
              (n = n || {}).user = !0;
              var s = new vn(a, e, t, n);
              if (n.immediate) {
                var r = 'callback for immediate watcher "' + s.expression + '"';
                ce(), Ge(t, a, [s.value], a, r), ye();
              }
              return function () {
                s.teardown();
              };
            });
        })(Cn),
        (function (e) {
          var t = /^hook:/;
          (e.prototype.$on = function (e, n) {
            var a = this;
            if (Array.isArray(e)) for (var s = 0, r = e.length; s < r; s++) a.$on(e[s], n);
            else (a._events[e] || (a._events[e] = [])).push(n), t.test(e) && (a._hasHookEvent = !0);
            return a;
          }),
            (e.prototype.$once = function (e, t) {
              var n = this;
              function a() {
                n.$off(e, a), t.apply(n, arguments);
              }
              return (a.fn = t), n.$on(e, a), n;
            }),
            (e.prototype.$off = function (e, t) {
              var n = this;
              if (!arguments.length) return (n._events = Object.create(null)), n;
              if (Array.isArray(e)) {
                for (var a = 0, s = e.length; a < s; a++) n.$off(e[a], t);
                return n;
              }
              var r,
                i = n._events[e];
              if (!i) return n;
              if (!t) return (n._events[e] = null), n;
              for (var o = i.length; o--; )
                if ((r = i[o]) === t || r.fn === t) {
                  i.splice(o, 1);
                  break;
                }
              return n;
            }),
            (e.prototype.$emit = function (e) {
              var t = this,
                n = t._events[e];
              if (n) {
                n = n.length > 1 ? x(n) : n;
                for (var a = x(arguments, 1), s = 'event handler for "' + e + '"', r = 0, i = n.length; r < i; r++)
                  Ge(n[r], t, a, t, s);
              }
              return t;
            });
        })(Cn),
        (function (e) {
          (e.prototype._update = function (e, t) {
            var n = this,
              a = n.$el,
              s = n._vnode,
              r = en(n);
            (n._vnode = e),
              (n.$el = s ? n.__patch__(s, e) : n.__patch__(n.$el, e, t, !1)),
              r(),
              a && (a.__vue__ = null),
              n.$el && (n.$el.__vue__ = n),
              n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
          }),
            (e.prototype.$forceUpdate = function () {
              this._watcher && this._watcher.update();
            }),
            (e.prototype.$destroy = function () {
              var e = this;
              if (!e._isBeingDestroyed) {
                sn(e, 'beforeDestroy'), (e._isBeingDestroyed = !0);
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e),
                  e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--; ) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--,
                  (e._isDestroyed = !0),
                  e.__patch__(e._vnode, null),
                  sn(e, 'destroyed'),
                  e.$off(),
                  e.$el && (e.$el.__vue__ = null),
                  e.$vnode && (e.$vnode.parent = null);
              }
            });
        })(Cn),
        (function (e) {
          Dt(e.prototype),
            (e.prototype.$nextTick = function (e) {
              return nt(e, this);
            }),
            (e.prototype._render = function () {
              var e,
                t = this,
                n = t.$options,
                a = n.render,
                s = n._parentVnode;
              s && (t.$scopedSlots = bt(s.data.scopedSlots, t.$slots, t.$scopedSlots)), (t.$vnode = s);
              try {
                (Vt = t), (e = a.call(t._renderProxy, t.$createElement));
              } catch (n) {
                Ue(n, t, 'render'), (e = t._vnode);
              } finally {
                Vt = null;
              }
              return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof me || (e = he()), (e.parent = s), e;
            });
        })(Cn);
      var On = [String, RegExp, Array],
        $n = {
          name: 'keep-alive',
          abstract: !0,
          props: { include: On, exclude: On, max: [String, Number] },
          methods: {
            cacheVNode: function () {
              var e = this,
                t = e.cache,
                n = e.keys,
                a = e.vnodeToCache,
                s = e.keyToCache;
              if (a) {
                var r = a.tag,
                  i = a.componentInstance,
                  o = a.componentOptions;
                (t[s] = { name: Mn(o), tag: r, componentInstance: i }),
                  n.push(s),
                  this.max && n.length > parseInt(this.max) && In(t, n[0], n, this._vnode),
                  (this.vnodeToCache = null);
              }
            },
          },
          created: function () {
            (this.cache = Object.create(null)), (this.keys = []);
          },
          destroyed: function () {
            for (var e in this.cache) In(this.cache, e, this.keys);
          },
          mounted: function () {
            var e = this;
            this.cacheVNode(),
              this.$watch('include', function (t) {
                En(e, function (e) {
                  return Sn(t, e);
                });
              }),
              this.$watch('exclude', function (t) {
                En(e, function (e) {
                  return !Sn(t, e);
                });
              });
          },
          updated: function () {
            this.cacheVNode();
          },
          render: function () {
            var e = this.$slots.default,
              t = Kt(e),
              n = t && t.componentOptions;
            if (n) {
              var a = Mn(n),
                s = this.include,
                r = this.exclude;
              if ((s && (!a || !Sn(s, a))) || (r && a && Sn(r, a))) return t;
              var i = this.cache,
                o = this.keys,
                d = null == t.key ? n.Ctor.cid + (n.tag ? '::' + n.tag : '') : t.key;
              i[d]
                ? ((t.componentInstance = i[d].componentInstance), h(o, d), o.push(d))
                : ((this.vnodeToCache = t), (this.keyToCache = d)),
                (t.data.keepAlive = !0);
            }
            return t || (e && e[0]);
          },
        },
        zn = { KeepAlive: $n };
      !(function (e) {
        var t = {
          get: function () {
            return j;
          },
        };
        Object.defineProperty(e, 'config', t),
          (e.util = { warn: de, extend: C, mergeOptions: Fe, defineReactive: xe }),
          (e.set = Ce),
          (e.delete = Me),
          (e.nextTick = nt),
          (e.observable = function (e) {
            return we(e), e;
          }),
          (e.options = Object.create(null)),
          F.forEach(function (t) {
            e.options[t + 's'] = Object.create(null);
          }),
          (e.options._base = e),
          C(e.options.components, zn),
          (function (e) {
            e.use = function (e) {
              var t = this._installedPlugins || (this._installedPlugins = []);
              if (t.indexOf(e) > -1) return this;
              var n = x(arguments, 1);
              return (
                n.unshift(this),
                'function' == typeof e.install ? e.install.apply(e, n) : 'function' == typeof e && e.apply(null, n),
                t.push(e),
                this
              );
            };
          })(e),
          (function (e) {
            e.mixin = function (e) {
              return (this.options = Fe(this.options, e)), this;
            };
          })(e),
          (function (e) {
            e.cid = 0;
            var t = 1;
            e.extend = function (e) {
              e = e || {};
              var n = this,
                a = n.cid,
                s = e._Ctor || (e._Ctor = {});
              if (s[a]) return s[a];
              var r = e.name || n.options.name,
                i = function (e) {
                  this._init(e);
                };
              return (
                ((i.prototype = Object.create(n.prototype)).constructor = i),
                (i.cid = t++),
                (i.options = Fe(n.options, e)),
                (i.super = n),
                i.options.props &&
                  (function (e) {
                    var t = e.options.props;
                    for (var n in t) gn(e.prototype, '_props', n);
                  })(i),
                i.options.computed &&
                  (function (e) {
                    var t = e.options.computed;
                    for (var n in t) _n(e.prototype, n, t[n]);
                  })(i),
                (i.extend = n.extend),
                (i.mixin = n.mixin),
                (i.use = n.use),
                F.forEach(function (e) {
                  i[e] = n[e];
                }),
                r && (i.options.components[r] = i),
                (i.superOptions = n.options),
                (i.extendOptions = e),
                (i.sealedOptions = C({}, i.options)),
                (s[a] = i),
                i
              );
            };
          })(e),
          (function (e) {
            F.forEach(function (t) {
              e[t] = function (e, n) {
                return n
                  ? ('component' === t && d(n) && ((n.name = n.name || e), (n = this.options._base.extend(n))),
                    'directive' === t && 'function' == typeof n && (n = { bind: n, update: n }),
                    (this.options[t + 's'][e] = n),
                    n)
                  : this.options[t + 's'][e];
              };
            });
          })(e);
      })(Cn),
        Object.defineProperty(Cn.prototype, '$isServer', { get: ae }),
        Object.defineProperty(Cn.prototype, '$ssrContext', {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        Object.defineProperty(Cn, 'FunctionalRenderContext', { value: Ft }),
        (Cn.version = '2.6.14');
      var Dn = y('style,class'),
        Fn = y('input,textarea,option,select,progress'),
        Ln = function (e, t, n) {
          return (
            ('value' === n && Fn(e) && 'button' !== t) ||
            ('selected' === n && 'option' === e) ||
            ('checked' === n && 'input' === e) ||
            ('muted' === n && 'video' === e)
          );
        },
        jn = y('contenteditable,draggable,spellcheck'),
        Nn = y('events,caret,typing,plaintext-only'),
        Pn = y(
          'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible',
        ),
        qn = 'http://www.w3.org/1999/xlink',
        Bn = function (e) {
          return ':' === e.charAt(5) && 'xlink' === e.slice(0, 5);
        },
        Un = function (e) {
          return Bn(e) ? e.slice(6, e.length) : '';
        },
        Gn = function (e) {
          return null == e || !1 === e;
        };
      function Hn(e, t) {
        return { staticClass: Vn(e.staticClass, t.staticClass), class: a(e.class) ? [e.class, t.class] : t.class };
      }
      function Vn(e, t) {
        return e ? (t ? e + ' ' + t : e) : t || '';
      }
      function Wn(e) {
        return Array.isArray(e)
          ? (function (e) {
              for (var t, n = '', s = 0, r = e.length; s < r; s++)
                a((t = Wn(e[s]))) && '' !== t && (n && (n += ' '), (n += t));
              return n;
            })(e)
          : i(e)
          ? (function (e) {
              var t = '';
              for (var n in e) e[n] && (t && (t += ' '), (t += n));
              return t;
            })(e)
          : 'string' == typeof e
          ? e
          : '';
      }
      var Kn = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' },
        Xn = y(
          'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot',
        ),
        Jn = y(
          'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
          !0,
        ),
        Qn = function (e) {
          return Xn(e) || Jn(e);
        };
      function Yn(e) {
        return Jn(e) ? 'svg' : 'math' === e ? 'math' : void 0;
      }
      var Zn = Object.create(null),
        ea = y('text,number,password,search,email,tel,url');
      function ta(e) {
        return 'string' == typeof e ? document.querySelector(e) || document.createElement('div') : e;
      }
      var na = Object.freeze({
          createElement: function (e, t) {
            var n = document.createElement(e);
            return (
              'select' !== e ||
                (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute('multiple', 'multiple')),
              n
            );
          },
          createElementNS: function (e, t) {
            return document.createElementNS(Kn[e], t);
          },
          createTextNode: function (e) {
            return document.createTextNode(e);
          },
          createComment: function (e) {
            return document.createComment(e);
          },
          insertBefore: function (e, t, n) {
            e.insertBefore(t, n);
          },
          removeChild: function (e, t) {
            e.removeChild(t);
          },
          appendChild: function (e, t) {
            e.appendChild(t);
          },
          parentNode: function (e) {
            return e.parentNode;
          },
          nextSibling: function (e) {
            return e.nextSibling;
          },
          tagName: function (e) {
            return e.tagName;
          },
          setTextContent: function (e, t) {
            e.textContent = t;
          },
          setStyleScope: function (e, t) {
            e.setAttribute(t, '');
          },
        }),
        aa = {
          create: function (e, t) {
            sa(t);
          },
          update: function (e, t) {
            e.data.ref !== t.data.ref && (sa(e, !0), sa(t));
          },
          destroy: function (e) {
            sa(e, !0);
          },
        };
      function sa(e, t) {
        var n = e.data.ref;
        if (a(n)) {
          var s = e.context,
            r = e.componentInstance || e.elm,
            i = s.$refs;
          t
            ? Array.isArray(i[n])
              ? h(i[n], r)
              : i[n] === r && (i[n] = void 0)
            : e.data.refInFor
            ? Array.isArray(i[n])
              ? i[n].indexOf(r) < 0 && i[n].push(r)
              : (i[n] = [r])
            : (i[n] = r);
        }
      }
      var ra = new me('', {}, []),
        ia = ['create', 'activate', 'update', 'remove', 'destroy'];
      function oa(e, n) {
        return (
          e.key === n.key &&
          e.asyncFactory === n.asyncFactory &&
          ((e.tag === n.tag &&
            e.isComment === n.isComment &&
            a(e.data) === a(n.data) &&
            (function (e, t) {
              if ('input' !== e.tag) return !0;
              var n,
                s = a((n = e.data)) && a((n = n.attrs)) && n.type,
                r = a((n = t.data)) && a((n = n.attrs)) && n.type;
              return s === r || (ea(s) && ea(r));
            })(e, n)) ||
            (s(e.isAsyncPlaceholder) && t(n.asyncFactory.error)))
        );
      }
      function da(e, t, n) {
        var s,
          r,
          i = {};
        for (s = t; s <= n; ++s) a((r = e[s].key)) && (i[r] = s);
        return i;
      }
      var ua = {
        create: pa,
        update: pa,
        destroy: function (e) {
          pa(e, ra);
        },
      };
      function pa(e, t) {
        (e.data.directives || t.data.directives) &&
          (function (e, t) {
            var n,
              a,
              s,
              r = e === ra,
              i = t === ra,
              o = ca(e.data.directives, e.context),
              d = ca(t.data.directives, t.context),
              u = [],
              p = [];
            for (n in d)
              (a = o[n]),
                (s = d[n]),
                a
                  ? ((s.oldValue = a.value),
                    (s.oldArg = a.arg),
                    ma(s, 'update', t, e),
                    s.def && s.def.componentUpdated && p.push(s))
                  : (ma(s, 'bind', t, e), s.def && s.def.inserted && u.push(s));
            if (u.length) {
              var l = function () {
                for (var n = 0; n < u.length; n++) ma(u[n], 'inserted', t, e);
              };
              r ? ut(t, 'insert', l) : l();
            }
            if (
              (p.length &&
                ut(t, 'postpatch', function () {
                  for (var n = 0; n < p.length; n++) ma(p[n], 'componentUpdated', t, e);
                }),
              !r)
            )
              for (n in o) d[n] || ma(o[n], 'unbind', e, e, i);
          })(e, t);
      }
      var la = Object.create(null);
      function ca(e, t) {
        var n,
          a,
          s = Object.create(null);
        if (!e) return s;
        for (n = 0; n < e.length; n++)
          (a = e[n]).modifiers || (a.modifiers = la), (s[ya(a)] = a), (a.def = Le(t.$options, 'directives', a.name));
        return s;
      }
      function ya(e) {
        return e.rawName || e.name + '.' + Object.keys(e.modifiers || {}).join('.');
      }
      function ma(e, t, n, a, s) {
        var r = e.def && e.def[t];
        if (r)
          try {
            r(n.elm, e, n, a, s);
          } catch (a) {
            Ue(a, n.context, 'directive ' + e.name + ' ' + t + ' hook');
          }
      }
      var fa = [aa, ua];
      function ha(e, n) {
        var s = n.componentOptions;
        if (!((a(s) && !1 === s.Ctor.options.inheritAttrs) || (t(e.data.attrs) && t(n.data.attrs)))) {
          var r,
            i,
            o = n.elm,
            d = e.data.attrs || {},
            u = n.data.attrs || {};
          for (r in (a(u.__ob__) && (u = n.data.attrs = C({}, u)), u))
            (i = u[r]), d[r] !== i && va(o, r, i, n.data.pre);
          for (r in ((X || Q) && u.value !== d.value && va(o, 'value', u.value), d))
            t(u[r]) && (Bn(r) ? o.removeAttributeNS(qn, Un(r)) : jn(r) || o.removeAttribute(r));
        }
      }
      function va(e, t, n, a) {
        a || e.tagName.indexOf('-') > -1
          ? ba(e, t, n)
          : Pn(t)
          ? Gn(n)
            ? e.removeAttribute(t)
            : ((n = 'allowfullscreen' === t && 'EMBED' === e.tagName ? 'true' : t), e.setAttribute(t, n))
          : jn(t)
          ? e.setAttribute(
              t,
              (function (e, t) {
                return Gn(t) || 'false' === t ? 'false' : 'contenteditable' === e && Nn(t) ? t : 'true';
              })(t, n),
            )
          : Bn(t)
          ? Gn(n)
            ? e.removeAttributeNS(qn, Un(t))
            : e.setAttributeNS(qn, t, n)
          : ba(e, t, n);
      }
      function ba(e, t, n) {
        if (Gn(n)) e.removeAttribute(t);
        else {
          if (X && !J && 'TEXTAREA' === e.tagName && 'placeholder' === t && '' !== n && !e.__ieph) {
            var a = function (t) {
              t.stopImmediatePropagation(), e.removeEventListener('input', a);
            };
            e.addEventListener('input', a), (e.__ieph = !0);
          }
          e.setAttribute(t, n);
        }
      }
      var ga = { create: ha, update: ha };
      function Ta(e, n) {
        var s = n.elm,
          r = n.data,
          i = e.data;
        if (!(t(r.staticClass) && t(r.class) && (t(i) || (t(i.staticClass) && t(i.class))))) {
          var o = (function (e) {
              for (var t = e.data, n = e, s = e; a(s.componentInstance); )
                (s = s.componentInstance._vnode) && s.data && (t = Hn(s.data, t));
              for (; a((n = n.parent)); ) n && n.data && (t = Hn(t, n.data));
              return (r = t.staticClass), (i = t.class), a(r) || a(i) ? Vn(r, Wn(i)) : '';
              var r, i;
            })(n),
            d = s._transitionClasses;
          a(d) && (o = Vn(o, Wn(d))), o !== s._prevClass && (s.setAttribute('class', o), (s._prevClass = o));
        }
      }
      var _a,
        Aa,
        ka,
        Ra,
        wa,
        xa,
        Ca = { create: Ta, update: Ta },
        Ma = /[\w).+\-_$\]]/;
      function Sa(e) {
        var t,
          n,
          a,
          s,
          r,
          i = !1,
          o = !1,
          d = !1,
          u = !1,
          p = 0,
          l = 0,
          c = 0,
          y = 0;
        for (a = 0; a < e.length; a++)
          if (((n = t), (t = e.charCodeAt(a)), i)) 39 === t && 92 !== n && (i = !1);
          else if (o) 34 === t && 92 !== n && (o = !1);
          else if (d) 96 === t && 92 !== n && (d = !1);
          else if (u) 47 === t && 92 !== n && (u = !1);
          else if (124 !== t || 124 === e.charCodeAt(a + 1) || 124 === e.charCodeAt(a - 1) || p || l || c) {
            switch (t) {
              case 34:
                o = !0;
                break;
              case 39:
                i = !0;
                break;
              case 96:
                d = !0;
                break;
              case 40:
                c++;
                break;
              case 41:
                c--;
                break;
              case 91:
                l++;
                break;
              case 93:
                l--;
                break;
              case 123:
                p++;
                break;
              case 125:
                p--;
            }
            if (47 === t) {
              for (var m = a - 1, f = void 0; m >= 0 && ' ' === (f = e.charAt(m)); m--);
              (f && Ma.test(f)) || (u = !0);
            }
          } else void 0 === s ? ((y = a + 1), (s = e.slice(0, a).trim())) : h();
        function h() {
          (r || (r = [])).push(e.slice(y, a).trim()), (y = a + 1);
        }
        if ((void 0 === s ? (s = e.slice(0, a).trim()) : 0 !== y && h(), r))
          for (a = 0; a < r.length; a++) s = Ea(s, r[a]);
        return s;
      }
      function Ea(e, t) {
        var n = t.indexOf('(');
        if (n < 0) return '_f("' + t + '")(' + e + ')';
        var a = t.slice(0, n),
          s = t.slice(n + 1);
        return '_f("' + a + '")(' + e + (')' !== s ? ',' + s : s);
      }
      function Ia(e, t) {
        console.error('[Vue compiler]: ' + e);
      }
      function Oa(e, t) {
        return e
          ? e
              .map(function (e) {
                return e[t];
              })
              .filter(function (e) {
                return e;
              })
          : [];
      }
      function $a(e, t, n, a, s) {
        (e.props || (e.props = [])).push(Ba({ name: t, value: n, dynamic: s }, a)), (e.plain = !1);
      }
      function za(e, t, n, a, s) {
        (s ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(
          Ba({ name: t, value: n, dynamic: s }, a),
        ),
          (e.plain = !1);
      }
      function Da(e, t, n, a) {
        (e.attrsMap[t] = n), e.attrsList.push(Ba({ name: t, value: n }, a));
      }
      function Fa(e, t, n, a, s, r, i, o) {
        (e.directives || (e.directives = [])).push(
          Ba({ name: t, rawName: n, value: a, arg: s, isDynamicArg: r, modifiers: i }, o),
        ),
          (e.plain = !1);
      }
      function La(e, t, n) {
        return n ? '_p(' + t + ',"' + e + '")' : e + t;
      }
      function ja(t, n, a, s, r, i, o, d) {
        var u;
        (s = s || e).right
          ? d
            ? (n = '(' + n + ")==='click'?'contextmenu':(" + n + ')')
            : 'click' === n && ((n = 'contextmenu'), delete s.right)
          : s.middle && (d ? (n = '(' + n + ")==='click'?'mouseup':(" + n + ')') : 'click' === n && (n = 'mouseup')),
          s.capture && (delete s.capture, (n = La('!', n, d))),
          s.once && (delete s.once, (n = La('~', n, d))),
          s.passive && (delete s.passive, (n = La('&', n, d))),
          s.native
            ? (delete s.native, (u = t.nativeEvents || (t.nativeEvents = {})))
            : (u = t.events || (t.events = {}));
        var p = Ba({ value: a.trim(), dynamic: d }, o);
        s !== e && (p.modifiers = s);
        var l = u[n];
        Array.isArray(l) ? (r ? l.unshift(p) : l.push(p)) : (u[n] = l ? (r ? [p, l] : [l, p]) : p), (t.plain = !1);
      }
      function Na(e, t, n) {
        var a = Pa(e, ':' + t) || Pa(e, 'v-bind:' + t);
        if (null != a) return Sa(a);
        if (!1 !== n) {
          var s = Pa(e, t);
          if (null != s) return JSON.stringify(s);
        }
      }
      function Pa(e, t, n) {
        var a;
        if (null != (a = e.attrsMap[t]))
          for (var s = e.attrsList, r = 0, i = s.length; r < i; r++)
            if (s[r].name === t) {
              s.splice(r, 1);
              break;
            }
        return n && delete e.attrsMap[t], a;
      }
      function qa(e, t) {
        for (var n = e.attrsList, a = 0, s = n.length; a < s; a++) {
          var r = n[a];
          if (t.test(r.name)) return n.splice(a, 1), r;
        }
      }
      function Ba(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
      }
      function Ua(e, t, n) {
        var a = n || {},
          s = a.number,
          r = '$$v';
        a.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), s && (r = '_n(' + r + ')');
        var i = Ga(t, r);
        e.model = { value: '(' + t + ')', expression: JSON.stringify(t), callback: 'function ($$v) {' + i + '}' };
      }
      function Ga(e, t) {
        var n = (function (e) {
          if (((e = e.trim()), (_a = e.length), e.indexOf('[') < 0 || e.lastIndexOf(']') < _a - 1))
            return (Ra = e.lastIndexOf('.')) > -1
              ? { exp: e.slice(0, Ra), key: '"' + e.slice(Ra + 1) + '"' }
              : { exp: e, key: null };
          for (Aa = e, Ra = wa = xa = 0; !Va(); ) Wa((ka = Ha())) ? Xa(ka) : 91 === ka && Ka(ka);
          return { exp: e.slice(0, wa), key: e.slice(wa + 1, xa) };
        })(e);
        return null === n.key ? e + '=' + t : '$set(' + n.exp + ', ' + n.key + ', ' + t + ')';
      }
      function Ha() {
        return Aa.charCodeAt(++Ra);
      }
      function Va() {
        return Ra >= _a;
      }
      function Wa(e) {
        return 34 === e || 39 === e;
      }
      function Ka(e) {
        var t = 1;
        for (wa = Ra; !Va(); )
          if (Wa((e = Ha()))) Xa(e);
          else if ((91 === e && t++, 93 === e && t--, 0 === t)) {
            xa = Ra;
            break;
          }
      }
      function Xa(e) {
        for (var t = e; !Va() && (e = Ha()) !== t; );
      }
      var Ja;
      function Qa(e, t, n) {
        var a = Ja;
        return function s() {
          var r = t.apply(null, arguments);
          null !== r && es(e, s, n, a);
        };
      }
      var Ya = Ke && !(Z && Number(Z[1]) <= 53);
      function Za(e, t, n, a) {
        if (Ya) {
          var s = cn,
            r = t;
          t = r._wrapper = function (e) {
            if (
              e.target === e.currentTarget ||
              e.timeStamp >= s ||
              e.timeStamp <= 0 ||
              e.target.ownerDocument !== document
            )
              return r.apply(this, arguments);
          };
        }
        Ja.addEventListener(e, t, te ? { capture: n, passive: a } : n);
      }
      function es(e, t, n, a) {
        (a || Ja).removeEventListener(e, t._wrapper || t, n);
      }
      function ts(e, n) {
        if (!t(e.data.on) || !t(n.data.on)) {
          var s = n.data.on || {},
            r = e.data.on || {};
          (Ja = n.elm),
            (function (e) {
              if (a(e.__r)) {
                var t = X ? 'change' : 'input';
                (e[t] = [].concat(e.__r, e[t] || [])), delete e.__r;
              }
              a(e.__c) && ((e.change = [].concat(e.__c, e.change || [])), delete e.__c);
            })(s),
            dt(s, r, Za, es, Qa, n.context),
            (Ja = void 0);
        }
      }
      var ns,
        as = { create: ts, update: ts };
      function ss(e, n) {
        if (!t(e.data.domProps) || !t(n.data.domProps)) {
          var s,
            r,
            i = n.elm,
            o = e.data.domProps || {},
            d = n.data.domProps || {};
          for (s in (a(d.__ob__) && (d = n.data.domProps = C({}, d)), o)) s in d || (i[s] = '');
          for (s in d) {
            if (((r = d[s]), 'textContent' === s || 'innerHTML' === s)) {
              if ((n.children && (n.children.length = 0), r === o[s])) continue;
              1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
            }
            if ('value' === s && 'PROGRESS' !== i.tagName) {
              i._value = r;
              var u = t(r) ? '' : String(r);
              rs(i, u) && (i.value = u);
            } else if ('innerHTML' === s && Jn(i.tagName) && t(i.innerHTML)) {
              (ns = ns || document.createElement('div')).innerHTML = '<svg>' + r + '</svg>';
              for (var p = ns.firstChild; i.firstChild; ) i.removeChild(i.firstChild);
              for (; p.firstChild; ) i.appendChild(p.firstChild);
            } else if (r !== o[s])
              try {
                i[s] = r;
              } catch (e) {}
          }
        }
      }
      function rs(e, t) {
        return (
          !e.composing &&
          ('OPTION' === e.tagName ||
            (function (e, t) {
              var n = !0;
              try {
                n = document.activeElement !== e;
              } catch (e) {}
              return n && e.value !== t;
            })(e, t) ||
            (function (e, t) {
              var n = e.value,
                s = e._vModifiers;
              if (a(s)) {
                if (s.number) return c(n) !== c(t);
                if (s.trim) return n.trim() !== t.trim();
              }
              return n !== t;
            })(e, t))
        );
      }
      var is = { create: ss, update: ss },
        os = g(function (e) {
          var t = {},
            n = /:(.+)/;
          return (
            e.split(/;(?![^(]*\))/g).forEach(function (e) {
              if (e) {
                var a = e.split(n);
                a.length > 1 && (t[a[0].trim()] = a[1].trim());
              }
            }),
            t
          );
        });
      function ds(e) {
        var t = us(e.style);
        return e.staticStyle ? C(e.staticStyle, t) : t;
      }
      function us(e) {
        return Array.isArray(e) ? M(e) : 'string' == typeof e ? os(e) : e;
      }
      var ps,
        ls = /^--/,
        cs = /\s*!important$/,
        ys = function (e, t, n) {
          if (ls.test(t)) e.style.setProperty(t, n);
          else if (cs.test(n)) e.style.setProperty(R(t), n.replace(cs, ''), 'important');
          else {
            var a = fs(t);
            if (Array.isArray(n)) for (var s = 0, r = n.length; s < r; s++) e.style[a] = n[s];
            else e.style[a] = n;
          }
        },
        ms = ['Webkit', 'Moz', 'ms'],
        fs = g(function (e) {
          if (((ps = ps || document.createElement('div').style), 'filter' !== (e = _(e)) && e in ps)) return e;
          for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ms.length; n++) {
            var a = ms[n] + t;
            if (a in ps) return a;
          }
        });
      function hs(e, n) {
        var s = n.data,
          r = e.data;
        if (!(t(s.staticStyle) && t(s.style) && t(r.staticStyle) && t(r.style))) {
          var i,
            o,
            d = n.elm,
            u = r.staticStyle,
            p = r.normalizedStyle || r.style || {},
            l = u || p,
            c = us(n.data.style) || {};
          n.data.normalizedStyle = a(c.__ob__) ? C({}, c) : c;
          var y = (function (e, t) {
            for (var n, a = {}, s = e; s.componentInstance; )
              (s = s.componentInstance._vnode) && s.data && (n = ds(s.data)) && C(a, n);
            (n = ds(e.data)) && C(a, n);
            for (var r = e; (r = r.parent); ) r.data && (n = ds(r.data)) && C(a, n);
            return a;
          })(n);
          for (o in l) t(y[o]) && ys(d, o, '');
          for (o in y) (i = y[o]) !== l[o] && ys(d, o, null == i ? '' : i);
        }
      }
      var vs = { create: hs, update: hs },
        bs = /\s+/;
      function gs(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(' ') > -1
              ? t.split(bs).forEach(function (t) {
                  return e.classList.add(t);
                })
              : e.classList.add(t);
          else {
            var n = ' ' + (e.getAttribute('class') || '') + ' ';
            n.indexOf(' ' + t + ' ') < 0 && e.setAttribute('class', (n + t).trim());
          }
      }
      function Ts(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(' ') > -1
              ? t.split(bs).forEach(function (t) {
                  return e.classList.remove(t);
                })
              : e.classList.remove(t),
              e.classList.length || e.removeAttribute('class');
          else {
            for (var n = ' ' + (e.getAttribute('class') || '') + ' ', a = ' ' + t + ' '; n.indexOf(a) >= 0; )
              n = n.replace(a, ' ');
            (n = n.trim()) ? e.setAttribute('class', n) : e.removeAttribute('class');
          }
      }
      function _s(e) {
        if (e) {
          if ('object' == typeof e) {
            var t = {};
            return !1 !== e.css && C(t, As(e.name || 'v')), C(t, e), t;
          }
          return 'string' == typeof e ? As(e) : void 0;
        }
      }
      var As = g(function (e) {
          return {
            enterClass: e + '-enter',
            enterToClass: e + '-enter-to',
            enterActiveClass: e + '-enter-active',
            leaveClass: e + '-leave',
            leaveToClass: e + '-leave-to',
            leaveActiveClass: e + '-leave-active',
          };
        }),
        ks = H && !J,
        Rs = 'transition',
        ws = 'animation',
        xs = 'transition',
        Cs = 'transitionend',
        Ms = 'animation',
        Ss = 'animationend';
      ks &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((xs = 'WebkitTransition'), (Cs = 'webkitTransitionEnd')),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((Ms = 'WebkitAnimation'), (Ss = 'webkitAnimationEnd')));
      var Es = H
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function (e) {
            return e();
          };
      function Is(e) {
        Es(function () {
          Es(e);
        });
      }
      function Os(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), gs(e, t));
      }
      function $s(e, t) {
        e._transitionClasses && h(e._transitionClasses, t), Ts(e, t);
      }
      function zs(e, t, n) {
        var a = Fs(e, t),
          s = a.type,
          r = a.timeout,
          i = a.propCount;
        if (!s) return n();
        var o = s === Rs ? Cs : Ss,
          d = 0,
          u = function () {
            e.removeEventListener(o, p), n();
          },
          p = function (t) {
            t.target === e && ++d >= i && u();
          };
        setTimeout(function () {
          d < i && u();
        }, r + 1),
          e.addEventListener(o, p);
      }
      var Ds = /\b(transform|all)(,|$)/;
      function Fs(e, t) {
        var n,
          a = window.getComputedStyle(e),
          s = (a[xs + 'Delay'] || '').split(', '),
          r = (a[xs + 'Duration'] || '').split(', '),
          i = Ls(s, r),
          o = (a[Ms + 'Delay'] || '').split(', '),
          d = (a[Ms + 'Duration'] || '').split(', '),
          u = Ls(o, d),
          p = 0,
          l = 0;
        return (
          t === Rs
            ? i > 0 && ((n = Rs), (p = i), (l = r.length))
            : t === ws
            ? u > 0 && ((n = ws), (p = u), (l = d.length))
            : (l = (n = (p = Math.max(i, u)) > 0 ? (i > u ? Rs : ws) : null) ? (n === Rs ? r.length : d.length) : 0),
          { type: n, timeout: p, propCount: l, hasTransform: n === Rs && Ds.test(a[xs + 'Property']) }
        );
      }
      function Ls(e, t) {
        for (; e.length < t.length; ) e = e.concat(e);
        return Math.max.apply(
          null,
          t.map(function (t, n) {
            return js(t) + js(e[n]);
          }),
        );
      }
      function js(e) {
        return 1e3 * Number(e.slice(0, -1).replace(',', '.'));
      }
      function Ns(e, n) {
        var s = e.elm;
        a(s._leaveCb) && ((s._leaveCb.cancelled = !0), s._leaveCb());
        var r = _s(e.data.transition);
        if (!t(r) && !a(s._enterCb) && 1 === s.nodeType) {
          for (
            var o = r.css,
              d = r.type,
              u = r.enterClass,
              p = r.enterToClass,
              l = r.enterActiveClass,
              y = r.appearClass,
              m = r.appearToClass,
              f = r.appearActiveClass,
              h = r.beforeEnter,
              v = r.enter,
              b = r.afterEnter,
              g = r.enterCancelled,
              T = r.beforeAppear,
              _ = r.appear,
              A = r.afterAppear,
              k = r.appearCancelled,
              R = r.duration,
              w = Zt,
              x = Zt.$vnode;
            x && x.parent;

          )
            (w = x.context), (x = x.parent);
          var C = !w._isMounted || !e.isRootInsert;
          if (!C || _ || '' === _) {
            var M = C && y ? y : u,
              S = C && f ? f : l,
              E = C && m ? m : p,
              I = (C && T) || h,
              O = C && 'function' == typeof _ ? _ : v,
              $ = (C && A) || b,
              D = (C && k) || g,
              F = c(i(R) ? R.enter : R),
              L = !1 !== o && !J,
              j = Bs(O),
              N = (s._enterCb = z(function () {
                L && ($s(s, E), $s(s, S)), N.cancelled ? (L && $s(s, M), D && D(s)) : $ && $(s), (s._enterCb = null);
              }));
            e.data.show ||
              ut(e, 'insert', function () {
                var t = s.parentNode,
                  n = t && t._pending && t._pending[e.key];
                n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), O && O(s, N);
              }),
              I && I(s),
              L &&
                (Os(s, M),
                Os(s, S),
                Is(function () {
                  $s(s, M), N.cancelled || (Os(s, E), j || (qs(F) ? setTimeout(N, F) : zs(s, d, N)));
                })),
              e.data.show && (n && n(), O && O(s, N)),
              L || j || N();
          }
        }
      }
      function Ps(e, n) {
        var s = e.elm;
        a(s._enterCb) && ((s._enterCb.cancelled = !0), s._enterCb());
        var r = _s(e.data.transition);
        if (t(r) || 1 !== s.nodeType) return n();
        if (!a(s._leaveCb)) {
          var o = r.css,
            d = r.type,
            u = r.leaveClass,
            p = r.leaveToClass,
            l = r.leaveActiveClass,
            y = r.beforeLeave,
            m = r.leave,
            f = r.afterLeave,
            h = r.leaveCancelled,
            v = r.delayLeave,
            b = r.duration,
            g = !1 !== o && !J,
            T = Bs(m),
            _ = c(i(b) ? b.leave : b),
            A = (s._leaveCb = z(function () {
              s.parentNode && s.parentNode._pending && (s.parentNode._pending[e.key] = null),
                g && ($s(s, p), $s(s, l)),
                A.cancelled ? (g && $s(s, u), h && h(s)) : (n(), f && f(s)),
                (s._leaveCb = null);
            }));
          v ? v(k) : k();
        }
        function k() {
          A.cancelled ||
            (!e.data.show && s.parentNode && ((s.parentNode._pending || (s.parentNode._pending = {}))[e.key] = e),
            y && y(s),
            g &&
              (Os(s, u),
              Os(s, l),
              Is(function () {
                $s(s, u), A.cancelled || (Os(s, p), T || (qs(_) ? setTimeout(A, _) : zs(s, d, A)));
              })),
            m && m(s, A),
            g || T || A());
        }
      }
      function qs(e) {
        return 'number' == typeof e && !isNaN(e);
      }
      function Bs(e) {
        if (t(e)) return !1;
        var n = e.fns;
        return a(n) ? Bs(Array.isArray(n) ? n[0] : n) : (e._length || e.length) > 1;
      }
      function Us(e, t) {
        !0 !== t.data.show && Ns(t);
      }
      var Gs = (function (e) {
        var n,
          i,
          o = {},
          d = e.modules,
          u = e.nodeOps;
        for (n = 0; n < ia.length; ++n)
          for (o[ia[n]] = [], i = 0; i < d.length; ++i) a(d[i][ia[n]]) && o[ia[n]].push(d[i][ia[n]]);
        function p(e) {
          var t = u.parentNode(e);
          a(t) && u.removeChild(t, e);
        }
        function l(e, t, n, r, i, d, p) {
          if (
            (a(e.elm) && a(d) && (e = d[p] = be(e)),
            (e.isRootInsert = !i),
            !(function (e, t, n, r) {
              var i = e.data;
              if (a(i)) {
                var d = a(e.componentInstance) && i.keepAlive;
                if ((a((i = i.hook)) && a((i = i.init)) && i(e, !1), a(e.componentInstance)))
                  return (
                    c(e, t),
                    m(n, e.elm, r),
                    s(d) &&
                      (function (e, t, n, s) {
                        for (var r, i = e; i.componentInstance; )
                          if (a((r = (i = i.componentInstance._vnode).data)) && a((r = r.transition))) {
                            for (r = 0; r < o.activate.length; ++r) o.activate[r](ra, i);
                            t.push(i);
                            break;
                          }
                        m(n, e.elm, s);
                      })(e, t, n, r),
                    !0
                  );
              }
            })(e, t, n, r))
          ) {
            var l = e.data,
              y = e.children,
              h = e.tag;
            a(h)
              ? ((e.elm = e.ns ? u.createElementNS(e.ns, h) : u.createElement(h, e)),
                b(e),
                f(e, y, t),
                a(l) && v(e, t),
                m(n, e.elm, r))
              : s(e.isComment)
              ? ((e.elm = u.createComment(e.text)), m(n, e.elm, r))
              : ((e.elm = u.createTextNode(e.text)), m(n, e.elm, r));
          }
        }
        function c(e, t) {
          a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), (e.data.pendingInsert = null)),
            (e.elm = e.componentInstance.$el),
            h(e) ? (v(e, t), b(e)) : (sa(e), t.push(e));
        }
        function m(e, t, n) {
          a(e) && (a(n) ? u.parentNode(n) === e && u.insertBefore(e, t, n) : u.appendChild(e, t));
        }
        function f(e, t, n) {
          if (Array.isArray(t)) for (var a = 0; a < t.length; ++a) l(t[a], n, e.elm, null, !0, t, a);
          else r(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)));
        }
        function h(e) {
          for (; e.componentInstance; ) e = e.componentInstance._vnode;
          return a(e.tag);
        }
        function v(e, t) {
          for (var s = 0; s < o.create.length; ++s) o.create[s](ra, e);
          a((n = e.data.hook)) && (a(n.create) && n.create(ra, e), a(n.insert) && t.push(e));
        }
        function b(e) {
          var t;
          if (a((t = e.fnScopeId))) u.setStyleScope(e.elm, t);
          else
            for (var n = e; n; )
              a((t = n.context)) && a((t = t.$options._scopeId)) && u.setStyleScope(e.elm, t), (n = n.parent);
          a((t = Zt)) &&
            t !== e.context &&
            t !== e.fnContext &&
            a((t = t.$options._scopeId)) &&
            u.setStyleScope(e.elm, t);
        }
        function g(e, t, n, a, s, r) {
          for (; a <= s; ++a) l(n[a], r, e, t, !1, n, a);
        }
        function T(e) {
          var t,
            n,
            s = e.data;
          if (a(s))
            for (a((t = s.hook)) && a((t = t.destroy)) && t(e), t = 0; t < o.destroy.length; ++t) o.destroy[t](e);
          if (a((t = e.children))) for (n = 0; n < e.children.length; ++n) T(e.children[n]);
        }
        function _(e, t, n) {
          for (; t <= n; ++t) {
            var s = e[t];
            a(s) && (a(s.tag) ? (A(s), T(s)) : p(s.elm));
          }
        }
        function A(e, t) {
          if (a(t) || a(e.data)) {
            var n,
              s = o.remove.length + 1;
            for (
              a(t)
                ? (t.listeners += s)
                : (t = (function (e, t) {
                    function n() {
                      0 == --n.listeners && p(e);
                    }
                    return (n.listeners = t), n;
                  })(e.elm, s)),
                a((n = e.componentInstance)) && a((n = n._vnode)) && a(n.data) && A(n, t),
                n = 0;
              n < o.remove.length;
              ++n
            )
              o.remove[n](e, t);
            a((n = e.data.hook)) && a((n = n.remove)) ? n(e, t) : t();
          } else p(e.elm);
        }
        function k(e, t, n, s) {
          for (var r = n; r < s; r++) {
            var i = t[r];
            if (a(i) && oa(e, i)) return r;
          }
        }
        function R(e, n, r, i, d, p) {
          if (e !== n) {
            a(n.elm) && a(i) && (n = i[d] = be(n));
            var c = (n.elm = e.elm);
            if (s(e.isAsyncPlaceholder)) a(n.asyncFactory.resolved) ? C(e.elm, n, r) : (n.isAsyncPlaceholder = !0);
            else if (s(n.isStatic) && s(e.isStatic) && n.key === e.key && (s(n.isCloned) || s(n.isOnce)))
              n.componentInstance = e.componentInstance;
            else {
              var y,
                m = n.data;
              a(m) && a((y = m.hook)) && a((y = y.prepatch)) && y(e, n);
              var f = e.children,
                v = n.children;
              if (a(m) && h(n)) {
                for (y = 0; y < o.update.length; ++y) o.update[y](e, n);
                a((y = m.hook)) && a((y = y.update)) && y(e, n);
              }
              t(n.text)
                ? a(f) && a(v)
                  ? f !== v &&
                    (function (e, n, s, r, i) {
                      for (
                        var o,
                          d,
                          p,
                          c = 0,
                          y = 0,
                          m = n.length - 1,
                          f = n[0],
                          h = n[m],
                          v = s.length - 1,
                          b = s[0],
                          T = s[v],
                          A = !i;
                        c <= m && y <= v;

                      )
                        t(f)
                          ? (f = n[++c])
                          : t(h)
                          ? (h = n[--m])
                          : oa(f, b)
                          ? (R(f, b, r, s, y), (f = n[++c]), (b = s[++y]))
                          : oa(h, T)
                          ? (R(h, T, r, s, v), (h = n[--m]), (T = s[--v]))
                          : oa(f, T)
                          ? (R(f, T, r, s, v),
                            A && u.insertBefore(e, f.elm, u.nextSibling(h.elm)),
                            (f = n[++c]),
                            (T = s[--v]))
                          : oa(h, b)
                          ? (R(h, b, r, s, y), A && u.insertBefore(e, h.elm, f.elm), (h = n[--m]), (b = s[++y]))
                          : (t(o) && (o = da(n, c, m)),
                            t((d = a(b.key) ? o[b.key] : k(b, n, c, m)))
                              ? l(b, r, e, f.elm, !1, s, y)
                              : oa((p = n[d]), b)
                              ? (R(p, b, r, s, y), (n[d] = void 0), A && u.insertBefore(e, p.elm, f.elm))
                              : l(b, r, e, f.elm, !1, s, y),
                            (b = s[++y]));
                      c > m ? g(e, t(s[v + 1]) ? null : s[v + 1].elm, s, y, v, r) : y > v && _(n, c, m);
                    })(c, f, v, r, p)
                  : a(v)
                  ? (a(e.text) && u.setTextContent(c, ''), g(c, null, v, 0, v.length - 1, r))
                  : a(f)
                  ? _(f, 0, f.length - 1)
                  : a(e.text) && u.setTextContent(c, '')
                : e.text !== n.text && u.setTextContent(c, n.text),
                a(m) && a((y = m.hook)) && a((y = y.postpatch)) && y(e, n);
            }
          }
        }
        function w(e, t, n) {
          if (s(n) && a(e.parent)) e.parent.data.pendingInsert = t;
          else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]);
        }
        var x = y('attrs,class,staticClass,staticStyle,key');
        function C(e, t, n, r) {
          var i,
            o = t.tag,
            d = t.data,
            u = t.children;
          if (((r = r || (d && d.pre)), (t.elm = e), s(t.isComment) && a(t.asyncFactory)))
            return (t.isAsyncPlaceholder = !0), !0;
          if (a(d) && (a((i = d.hook)) && a((i = i.init)) && i(t, !0), a((i = t.componentInstance))))
            return c(t, n), !0;
          if (a(o)) {
            if (a(u))
              if (e.hasChildNodes())
                if (a((i = d)) && a((i = i.domProps)) && a((i = i.innerHTML))) {
                  if (i !== e.innerHTML) return !1;
                } else {
                  for (var p = !0, l = e.firstChild, y = 0; y < u.length; y++) {
                    if (!l || !C(l, u[y], n, r)) {
                      p = !1;
                      break;
                    }
                    l = l.nextSibling;
                  }
                  if (!p || l) return !1;
                }
              else f(t, u, n);
            if (a(d)) {
              var m = !1;
              for (var h in d)
                if (!x(h)) {
                  (m = !0), v(t, n);
                  break;
                }
              !m && d.class && st(d.class);
            }
          } else e.data !== t.text && (e.data = t.text);
          return !0;
        }
        return function (e, n, r, i) {
          if (!t(n)) {
            var d,
              p = !1,
              c = [];
            if (t(e)) (p = !0), l(n, c);
            else {
              var y = a(e.nodeType);
              if (!y && oa(e, n)) R(e, n, c, null, null, i);
              else {
                if (y) {
                  if ((1 === e.nodeType && e.hasAttribute(D) && (e.removeAttribute(D), (r = !0)), s(r) && C(e, n, c)))
                    return w(n, c, !0), e;
                  (d = e), (e = new me(u.tagName(d).toLowerCase(), {}, [], void 0, d));
                }
                var m = e.elm,
                  f = u.parentNode(m);
                if ((l(n, c, m._leaveCb ? null : f, u.nextSibling(m)), a(n.parent)))
                  for (var v = n.parent, b = h(n); v; ) {
                    for (var g = 0; g < o.destroy.length; ++g) o.destroy[g](v);
                    if (((v.elm = n.elm), b)) {
                      for (var A = 0; A < o.create.length; ++A) o.create[A](ra, v);
                      var k = v.data.hook.insert;
                      if (k.merged) for (var x = 1; x < k.fns.length; x++) k.fns[x]();
                    } else sa(v);
                    v = v.parent;
                  }
                a(f) ? _([e], 0, 0) : a(e.tag) && T(e);
              }
            }
            return w(n, c, p), n.elm;
          }
          a(e) && T(e);
        };
      })({
        nodeOps: na,
        modules: [
          ga,
          Ca,
          as,
          is,
          vs,
          H
            ? {
                create: Us,
                activate: Us,
                remove: function (e, t) {
                  !0 !== e.data.show ? Ps(e, t) : t();
                },
              }
            : {},
        ].concat(fa),
      });
      J &&
        document.addEventListener('selectionchange', function () {
          var e = document.activeElement;
          e && e.vmodel && Ys(e, 'input');
        });
      var Hs = {
        inserted: function (e, t, n, a) {
          'select' === n.tag
            ? (a.elm && !a.elm._vOptions
                ? ut(n, 'postpatch', function () {
                    Hs.componentUpdated(e, t, n);
                  })
                : Vs(e, t, n.context),
              (e._vOptions = [].map.call(e.options, Xs)))
            : ('textarea' === n.tag || ea(e.type)) &&
              ((e._vModifiers = t.modifiers),
              t.modifiers.lazy ||
                (e.addEventListener('compositionstart', Js),
                e.addEventListener('compositionend', Qs),
                e.addEventListener('change', Qs),
                J && (e.vmodel = !0)));
        },
        componentUpdated: function (e, t, n) {
          if ('select' === n.tag) {
            Vs(e, t, n.context);
            var a = e._vOptions,
              s = (e._vOptions = [].map.call(e.options, Xs));
            s.some(function (e, t) {
              return !O(e, a[t]);
            }) &&
              (e.multiple
                ? t.value.some(function (e) {
                    return Ks(e, s);
                  })
                : t.value !== t.oldValue && Ks(t.value, s)) &&
              Ys(e, 'change');
          }
        },
      };
      function Vs(e, t, n) {
        Ws(e, t),
          (X || Q) &&
            setTimeout(function () {
              Ws(e, t);
            }, 0);
      }
      function Ws(e, t, n) {
        var a = t.value,
          s = e.multiple;
        if (!s || Array.isArray(a)) {
          for (var r, i, o = 0, d = e.options.length; o < d; o++)
            if (((i = e.options[o]), s)) (r = $(a, Xs(i)) > -1), i.selected !== r && (i.selected = r);
            else if (O(Xs(i), a)) return void (e.selectedIndex !== o && (e.selectedIndex = o));
          s || (e.selectedIndex = -1);
        }
      }
      function Ks(e, t) {
        return t.every(function (t) {
          return !O(t, e);
        });
      }
      function Xs(e) {
        return '_value' in e ? e._value : e.value;
      }
      function Js(e) {
        e.target.composing = !0;
      }
      function Qs(e) {
        e.target.composing && ((e.target.composing = !1), Ys(e.target, 'input'));
      }
      function Ys(e, t) {
        var n = document.createEvent('HTMLEvents');
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }
      function Zs(e) {
        return !e.componentInstance || (e.data && e.data.transition) ? e : Zs(e.componentInstance._vnode);
      }
      var er = {
          bind: function (e, t, n) {
            var a = t.value,
              s = (n = Zs(n)).data && n.data.transition,
              r = (e.__vOriginalDisplay = 'none' === e.style.display ? '' : e.style.display);
            a && s
              ? ((n.data.show = !0),
                Ns(n, function () {
                  e.style.display = r;
                }))
              : (e.style.display = a ? r : 'none');
          },
          update: function (e, t, n) {
            var a = t.value;
            !a != !t.oldValue &&
              ((n = Zs(n)).data && n.data.transition
                ? ((n.data.show = !0),
                  a
                    ? Ns(n, function () {
                        e.style.display = e.__vOriginalDisplay;
                      })
                    : Ps(n, function () {
                        e.style.display = 'none';
                      }))
                : (e.style.display = a ? e.__vOriginalDisplay : 'none'));
          },
          unbind: function (e, t, n, a, s) {
            s || (e.style.display = e.__vOriginalDisplay);
          },
        },
        tr = { model: Hs, show: er },
        nr = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        };
      function ar(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? ar(Kt(t.children)) : e;
      }
      function sr(e) {
        var t = {},
          n = e.$options;
        for (var a in n.propsData) t[a] = e[a];
        var s = n._parentListeners;
        for (var r in s) t[_(r)] = s[r];
        return t;
      }
      function rr(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e('keep-alive', { props: t.componentOptions.propsData });
      }
      var ir = function (e) {
          return e.tag || vt(e);
        },
        or = function (e) {
          return 'show' === e.name;
        },
        dr = {
          name: 'transition',
          props: nr,
          abstract: !0,
          render: function (e) {
            var t = this,
              n = this.$slots.default;
            if (n && (n = n.filter(ir)).length) {
              var a = this.mode,
                s = n[0];
              if (
                (function (e) {
                  for (; (e = e.parent); ) if (e.data.transition) return !0;
                })(this.$vnode)
              )
                return s;
              var i = ar(s);
              if (!i) return s;
              if (this._leaving) return rr(e, s);
              var o = '__transition-' + this._uid + '-';
              i.key =
                null == i.key
                  ? i.isComment
                    ? o + 'comment'
                    : o + i.tag
                  : r(i.key)
                  ? 0 === String(i.key).indexOf(o)
                    ? i.key
                    : o + i.key
                  : i.key;
              var d = ((i.data || (i.data = {})).transition = sr(this)),
                u = this._vnode,
                p = ar(u);
              if (
                (i.data.directives && i.data.directives.some(or) && (i.data.show = !0),
                p &&
                  p.data &&
                  !(function (e, t) {
                    return t.key === e.key && t.tag === e.tag;
                  })(i, p) &&
                  !vt(p) &&
                  (!p.componentInstance || !p.componentInstance._vnode.isComment))
              ) {
                var l = (p.data.transition = C({}, d));
                if ('out-in' === a)
                  return (
                    (this._leaving = !0),
                    ut(l, 'afterLeave', function () {
                      (t._leaving = !1), t.$forceUpdate();
                    }),
                    rr(e, s)
                  );
                if ('in-out' === a) {
                  if (vt(i)) return u;
                  var c,
                    y = function () {
                      c();
                    };
                  ut(d, 'afterEnter', y),
                    ut(d, 'enterCancelled', y),
                    ut(l, 'delayLeave', function (e) {
                      c = e;
                    });
                }
              }
              return s;
            }
          },
        },
        ur = C({ tag: String, moveClass: String }, nr);
      delete ur.mode;
      var pr = {
        props: ur,
        beforeMount: function () {
          var e = this,
            t = this._update;
          this._update = function (n, a) {
            var s = en(e);
            e.__patch__(e._vnode, e.kept, !1, !0), (e._vnode = e.kept), s(), t.call(e, n, a);
          };
        },
        render: function (e) {
          for (
            var t = this.tag || this.$vnode.data.tag || 'span',
              n = Object.create(null),
              a = (this.prevChildren = this.children),
              s = this.$slots.default || [],
              r = (this.children = []),
              i = sr(this),
              o = 0;
            o < s.length;
            o++
          ) {
            var d = s[o];
            d.tag &&
              null != d.key &&
              0 !== String(d.key).indexOf('__vlist') &&
              (r.push(d), (n[d.key] = d), ((d.data || (d.data = {})).transition = i));
          }
          if (a) {
            for (var u = [], p = [], l = 0; l < a.length; l++) {
              var c = a[l];
              (c.data.transition = i), (c.data.pos = c.elm.getBoundingClientRect()), n[c.key] ? u.push(c) : p.push(c);
            }
            (this.kept = e(t, null, u)), (this.removed = p);
          }
          return e(t, null, r);
        },
        updated: function () {
          var e = this.prevChildren,
            t = this.moveClass || (this.name || 'v') + '-move';
          e.length &&
            this.hasMove(e[0].elm, t) &&
            (e.forEach(lr),
            e.forEach(cr),
            e.forEach(yr),
            (this._reflow = document.body.offsetHeight),
            e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                  a = n.style;
                Os(n, t),
                  (a.transform = a.WebkitTransform = a.transitionDuration = ''),
                  n.addEventListener(
                    Cs,
                    (n._moveCb = function e(a) {
                      (a && a.target !== n) ||
                        (a && !/transform$/.test(a.propertyName)) ||
                        (n.removeEventListener(Cs, e), (n._moveCb = null), $s(n, t));
                    }),
                  );
              }
            }));
        },
        methods: {
          hasMove: function (e, t) {
            if (!ks) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses &&
              e._transitionClasses.forEach(function (e) {
                Ts(n, e);
              }),
              gs(n, t),
              (n.style.display = 'none'),
              this.$el.appendChild(n);
            var a = Fs(n);
            return this.$el.removeChild(n), (this._hasMove = a.hasTransform);
          },
        },
      };
      function lr(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }
      function cr(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }
      function yr(e) {
        var t = e.data.pos,
          n = e.data.newPos,
          a = t.left - n.left,
          s = t.top - n.top;
        if (a || s) {
          e.data.moved = !0;
          var r = e.elm.style;
          (r.transform = r.WebkitTransform = 'translate(' + a + 'px,' + s + 'px)'), (r.transitionDuration = '0s');
        }
      }
      var mr = { Transition: dr, TransitionGroup: pr };
      (Cn.config.mustUseProp = Ln),
        (Cn.config.isReservedTag = Qn),
        (Cn.config.isReservedAttr = Dn),
        (Cn.config.getTagNamespace = Yn),
        (Cn.config.isUnknownElement = function (e) {
          if (!H) return !0;
          if (Qn(e)) return !1;
          if (((e = e.toLowerCase()), null != Zn[e])) return Zn[e];
          var t = document.createElement(e);
          return e.indexOf('-') > -1
            ? (Zn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement)
            : (Zn[e] = /HTMLUnknownElement/.test(t.toString()));
        }),
        C(Cn.options.directives, tr),
        C(Cn.options.components, mr),
        (Cn.prototype.__patch__ = H ? Gs : S),
        (Cn.prototype.$mount = function (e, t) {
          return (function (e, t, n) {
            var a;
            return (
              (e.$el = t),
              e.$options.render || (e.$options.render = he),
              sn(e, 'beforeMount'),
              (a = function () {
                e._update(e._render(), n);
              }),
              new vn(
                e,
                a,
                S,
                {
                  before: function () {
                    e._isMounted && !e._isDestroyed && sn(e, 'beforeUpdate');
                  },
                },
                !0,
              ),
              (n = !1),
              null == e.$vnode && ((e._isMounted = !0), sn(e, 'mounted')),
              e
            );
          })(this, (e = e && H ? ta(e) : void 0), t);
        }),
        H &&
          setTimeout(function () {
            j.devtools && se && se.emit('init', Cn);
          }, 0);
      var fr,
        hr = /\{\{((?:.|\r?\n)+?)\}\}/g,
        vr = /[-.*+?^${}()|[\]\/\\]/g,
        br = g(function (e) {
          var t = e[0].replace(vr, '\\$&'),
            n = e[1].replace(vr, '\\$&');
          return new RegExp(t + '((?:.|\\n)+?)' + n, 'g');
        }),
        gr = {
          staticKeys: ['staticClass'],
          transformNode: function (e, t) {
            t.warn;
            var n = Pa(e, 'class');
            n && (e.staticClass = JSON.stringify(n));
            var a = Na(e, 'class', !1);
            a && (e.classBinding = a);
          },
          genData: function (e) {
            var t = '';
            return (
              e.staticClass && (t += 'staticClass:' + e.staticClass + ','),
              e.classBinding && (t += 'class:' + e.classBinding + ','),
              t
            );
          },
        },
        Tr = {
          staticKeys: ['staticStyle'],
          transformNode: function (e, t) {
            t.warn;
            var n = Pa(e, 'style');
            n && (e.staticStyle = JSON.stringify(os(n)));
            var a = Na(e, 'style', !1);
            a && (e.styleBinding = a);
          },
          genData: function (e) {
            var t = '';
            return (
              e.staticStyle && (t += 'staticStyle:' + e.staticStyle + ','),
              e.styleBinding && (t += 'style:(' + e.styleBinding + '),'),
              t
            );
          },
        },
        _r = y('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr'),
        Ar = y('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'),
        kr = y(
          'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track',
        ),
        Rr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        wr = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        xr = '[a-zA-Z_][\\-\\.0-9_a-zA-Z' + N.source + ']*',
        Cr = '((?:' + xr + '\\:)?' + xr + ')',
        Mr = new RegExp('^<' + Cr),
        Sr = /^\s*(\/?)>/,
        Er = new RegExp('^<\\/' + Cr + '[^>]*>'),
        Ir = /^<!DOCTYPE [^>]+>/i,
        Or = /^<!\--/,
        $r = /^<!\[/,
        zr = y('script,style,textarea', !0),
        Dr = {},
        Fr = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&amp;': '&', '&#10;': '\n', '&#9;': '\t', '&#39;': "'" },
        Lr = /&(?:lt|gt|quot|amp|#39);/g,
        jr = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Nr = y('pre,textarea', !0),
        Pr = function (e, t) {
          return e && Nr(e) && '\n' === t[0];
        };
      function qr(e, t) {
        var n = t ? jr : Lr;
        return e.replace(n, function (e) {
          return Fr[e];
        });
      }
      var Br,
        Ur,
        Gr,
        Hr,
        Vr,
        Wr,
        Kr,
        Xr,
        Jr = /^@|^v-on:/,
        Qr = /^v-|^@|^:|^#/,
        Yr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Zr = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        ei = /^\(|\)$/g,
        ti = /^\[.*\]$/,
        ni = /:(.*)$/,
        ai = /^:|^\.|^v-bind:/,
        si = /\.[^.\]]+(?=[^\]]*$)/g,
        ri = /^v-slot(:|$)|^#/,
        ii = /[\r\n]/,
        oi = /[ \f\t\r\n]+/g,
        di = g(function (e) {
          return ((fr = fr || document.createElement('div')).innerHTML = e), fr.textContent;
        }),
        ui = '_empty_';
      function pi(e, t, n) {
        return { type: 1, tag: e, attrsList: t, attrsMap: hi(t), rawAttrsMap: {}, parent: n, children: [] };
      }
      function li(e, t) {
        var n;
        !(function (e) {
          var t = Na(e, 'key');
          t && (e.key = t);
        })(e),
          (e.plain = !e.key && !e.scopedSlots && !e.attrsList.length),
          (function (e) {
            var t = Na(e, 'ref');
            t &&
              ((e.ref = t),
              (e.refInFor = (function (e) {
                for (var t = e; t; ) {
                  if (void 0 !== t.for) return !0;
                  t = t.parent;
                }
                return !1;
              })(e)));
          })(e),
          (function (e) {
            var t;
            'template' === e.tag
              ? ((t = Pa(e, 'scope')), (e.slotScope = t || Pa(e, 'slot-scope')))
              : (t = Pa(e, 'slot-scope')) && (e.slotScope = t);
            var n = Na(e, 'slot');
            if (
              (n &&
                ((e.slotTarget = '""' === n ? '"default"' : n),
                (e.slotTargetDynamic = !(!e.attrsMap[':slot'] && !e.attrsMap['v-bind:slot'])),
                'template' === e.tag ||
                  e.slotScope ||
                  za(
                    e,
                    'slot',
                    n,
                    (function (e, t) {
                      return e.rawAttrsMap[':slot'] || e.rawAttrsMap['v-bind:slot'] || e.rawAttrsMap.slot;
                    })(e),
                  )),
              'template' === e.tag)
            ) {
              var a = qa(e, ri);
              if (a) {
                var s = mi(a),
                  r = s.name,
                  i = s.dynamic;
                (e.slotTarget = r), (e.slotTargetDynamic = i), (e.slotScope = a.value || ui);
              }
            } else {
              var o = qa(e, ri);
              if (o) {
                var d = e.scopedSlots || (e.scopedSlots = {}),
                  u = mi(o),
                  p = u.name,
                  l = u.dynamic,
                  c = (d[p] = pi('template', [], e));
                (c.slotTarget = p),
                  (c.slotTargetDynamic = l),
                  (c.children = e.children.filter(function (e) {
                    if (!e.slotScope) return (e.parent = c), !0;
                  })),
                  (c.slotScope = o.value || ui),
                  (e.children = []),
                  (e.plain = !1);
              }
            }
          })(e),
          'slot' === (n = e).tag && (n.slotName = Na(n, 'name')),
          (function (e) {
            var t;
            (t = Na(e, 'is')) && (e.component = t), null != Pa(e, 'inline-template') && (e.inlineTemplate = !0);
          })(e);
        for (var a = 0; a < Gr.length; a++) e = Gr[a](e, t) || e;
        return (
          (function (e) {
            var t,
              n,
              a,
              s,
              r,
              i,
              o,
              d,
              u = e.attrsList;
            for (t = 0, n = u.length; t < n; t++)
              if (((a = s = u[t].name), (r = u[t].value), Qr.test(a)))
                if (((e.hasBindings = !0), (i = fi(a.replace(Qr, ''))) && (a = a.replace(si, '')), ai.test(a)))
                  (a = a.replace(ai, '')),
                    (r = Sa(r)),
                    (d = ti.test(a)) && (a = a.slice(1, -1)),
                    i &&
                      (i.prop && !d && 'innerHtml' === (a = _(a)) && (a = 'innerHTML'),
                      i.camel && !d && (a = _(a)),
                      i.sync &&
                        ((o = Ga(r, '$event')),
                        d
                          ? ja(e, '"update:"+(' + a + ')', o, null, !1, 0, u[t], !0)
                          : (ja(e, 'update:' + _(a), o, null, !1, 0, u[t]),
                            R(a) !== _(a) && ja(e, 'update:' + R(a), o, null, !1, 0, u[t])))),
                    (i && i.prop) || (!e.component && Kr(e.tag, e.attrsMap.type, a))
                      ? $a(e, a, r, u[t], d)
                      : za(e, a, r, u[t], d);
                else if (Jr.test(a))
                  (a = a.replace(Jr, '')), (d = ti.test(a)) && (a = a.slice(1, -1)), ja(e, a, r, i, !1, 0, u[t], d);
                else {
                  var p = (a = a.replace(Qr, '')).match(ni),
                    l = p && p[1];
                  (d = !1),
                    l && ((a = a.slice(0, -(l.length + 1))), ti.test(l) && ((l = l.slice(1, -1)), (d = !0))),
                    Fa(e, a, s, r, l, d, i, u[t]);
                }
              else
                za(e, a, JSON.stringify(r), u[t]),
                  !e.component && 'muted' === a && Kr(e.tag, e.attrsMap.type, a) && $a(e, a, 'true', u[t]);
          })(e),
          e
        );
      }
      function ci(e) {
        var t;
        if ((t = Pa(e, 'v-for'))) {
          var n = (function (e) {
            var t = e.match(Yr);
            if (t) {
              var n = {};
              n.for = t[2].trim();
              var a = t[1].trim().replace(ei, ''),
                s = a.match(Zr);
              return (
                s
                  ? ((n.alias = a.replace(Zr, '').trim()),
                    (n.iterator1 = s[1].trim()),
                    s[2] && (n.iterator2 = s[2].trim()))
                  : (n.alias = a),
                n
              );
            }
          })(t);
          n && C(e, n);
        }
      }
      function yi(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }
      function mi(e) {
        var t = e.name.replace(ri, '');
        return (
          t || ('#' !== e.name[0] && (t = 'default')),
          ti.test(t) ? { name: t.slice(1, -1), dynamic: !0 } : { name: '"' + t + '"', dynamic: !1 }
        );
      }
      function fi(e) {
        var t = e.match(si);
        if (t) {
          var n = {};
          return (
            t.forEach(function (e) {
              n[e.slice(1)] = !0;
            }),
            n
          );
        }
      }
      function hi(e) {
        for (var t = {}, n = 0, a = e.length; n < a; n++) t[e[n].name] = e[n].value;
        return t;
      }
      var vi = /^xmlns:NS\d+/,
        bi = /^NS\d+:/;
      function gi(e) {
        return pi(e.tag, e.attrsList.slice(), e.parent);
      }
      var Ti,
        _i,
        Ai,
        ki = [
          gr,
          Tr,
          {
            preTransformNode: function (e, t) {
              if ('input' === e.tag) {
                var n,
                  a = e.attrsMap;
                if (!a['v-model']) return;
                if (
                  ((a[':type'] || a['v-bind:type']) && (n = Na(e, 'type')),
                  a.type || n || !a['v-bind'] || (n = '(' + a['v-bind'] + ').type'),
                  n)
                ) {
                  var s = Pa(e, 'v-if', !0),
                    r = s ? '&&(' + s + ')' : '',
                    i = null != Pa(e, 'v-else', !0),
                    o = Pa(e, 'v-else-if', !0),
                    d = gi(e);
                  ci(d),
                    Da(d, 'type', 'checkbox'),
                    li(d, t),
                    (d.processed = !0),
                    (d.if = '(' + n + ")==='checkbox'" + r),
                    yi(d, { exp: d.if, block: d });
                  var u = gi(e);
                  Pa(u, 'v-for', !0),
                    Da(u, 'type', 'radio'),
                    li(u, t),
                    yi(d, { exp: '(' + n + ")==='radio'" + r, block: u });
                  var p = gi(e);
                  return (
                    Pa(p, 'v-for', !0),
                    Da(p, ':type', n),
                    li(p, t),
                    yi(d, { exp: s, block: p }),
                    i ? (d.else = !0) : o && (d.elseif = o),
                    d
                  );
                }
              }
            },
          },
        ],
        Ri = {
          model: function (e, t, n) {
            var a = t.value,
              s = t.modifiers,
              r = e.tag,
              i = e.attrsMap.type;
            if (e.component) return Ua(e, a, s), !1;
            if ('select' === r)
              !(function (e, t, n) {
                var a =
                  'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
                  (n && n.number ? '_n(val)' : 'val') +
                  '});';
                ja(
                  e,
                  'change',
                  (a = a + ' ' + Ga(t, '$event.target.multiple ? $$selectedVal : $$selectedVal[0]')),
                  null,
                  !0,
                );
              })(e, a, s);
            else if ('input' === r && 'checkbox' === i)
              !(function (e, t, n) {
                var a = n && n.number,
                  s = Na(e, 'value') || 'null',
                  r = Na(e, 'true-value') || 'true',
                  i = Na(e, 'false-value') || 'false';
                $a(
                  e,
                  'checked',
                  'Array.isArray(' +
                    t +
                    ')?_i(' +
                    t +
                    ',' +
                    s +
                    ')>-1' +
                    ('true' === r ? ':(' + t + ')' : ':_q(' + t + ',' + r + ')'),
                ),
                  ja(
                    e,
                    'change',
                    'var $$a=' +
                      t +
                      ',$$el=$event.target,$$c=$$el.checked?(' +
                      r +
                      '):(' +
                      i +
                      ');if(Array.isArray($$a)){var $$v=' +
                      (a ? '_n(' + s + ')' : s) +
                      ',$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(' +
                      Ga(t, '$$a.concat([$$v])') +
                      ')}else{$$i>-1&&(' +
                      Ga(t, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') +
                      ')}}else{' +
                      Ga(t, '$$c') +
                      '}',
                    null,
                    !0,
                  );
              })(e, a, s);
            else if ('input' === r && 'radio' === i)
              !(function (e, t, n) {
                var a = n && n.number,
                  s = Na(e, 'value') || 'null';
                $a(e, 'checked', '_q(' + t + ',' + (s = a ? '_n(' + s + ')' : s) + ')'),
                  ja(e, 'change', Ga(t, s), null, !0);
              })(e, a, s);
            else if ('input' === r || 'textarea' === r)
              !(function (e, t, n) {
                var a = e.attrsMap.type,
                  s = n || {},
                  r = s.lazy,
                  i = s.number,
                  o = s.trim,
                  d = !r && 'range' !== a,
                  u = r ? 'change' : 'range' === a ? '__r' : 'input',
                  p = '$event.target.value';
                o && (p = '$event.target.value.trim()'), i && (p = '_n(' + p + ')');
                var l = Ga(t, p);
                d && (l = 'if($event.target.composing)return;' + l),
                  $a(e, 'value', '(' + t + ')'),
                  ja(e, u, l, null, !0),
                  (o || i) && ja(e, 'blur', '$forceUpdate()');
              })(e, a, s);
            else if (!j.isReservedTag(r)) return Ua(e, a, s), !1;
            return !0;
          },
          text: function (e, t) {
            t.value && $a(e, 'textContent', '_s(' + t.value + ')', t);
          },
          html: function (e, t) {
            t.value && $a(e, 'innerHTML', '_s(' + t.value + ')', t);
          },
        },
        wi = {
          expectHTML: !0,
          modules: ki,
          directives: Ri,
          isPreTag: function (e) {
            return 'pre' === e;
          },
          isUnaryTag: _r,
          mustUseProp: Ln,
          canBeLeftOpenTag: Ar,
          isReservedTag: Qn,
          getTagNamespace: Yn,
          staticKeys:
            ((Ai = ki),
            Ai.reduce(function (e, t) {
              return e.concat(t.staticKeys || []);
            }, []).join(',')),
        },
        xi = g(function (e) {
          return y(
            'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (e ? ',' + e : ''),
          );
        });
      function Ci(e, t) {
        e && ((Ti = xi(t.staticKeys || '')), (_i = t.isReservedTag || E), Mi(e), Si(e, !1));
      }
      function Mi(e) {
        if (
          ((e.static = (function (e) {
            return (
              2 !== e.type &&
              (3 === e.type ||
                !(
                  !e.pre &&
                  (e.hasBindings ||
                    e.if ||
                    e.for ||
                    m(e.tag) ||
                    !_i(e.tag) ||
                    (function (e) {
                      for (; e.parent; ) {
                        if ('template' !== (e = e.parent).tag) return !1;
                        if (e.for) return !0;
                      }
                      return !1;
                    })(e) ||
                    !Object.keys(e).every(Ti))
                ))
            );
          })(e)),
          1 === e.type)
        ) {
          if (!_i(e.tag) && 'slot' !== e.tag && null == e.attrsMap['inline-template']) return;
          for (var t = 0, n = e.children.length; t < n; t++) {
            var a = e.children[t];
            Mi(a), a.static || (e.static = !1);
          }
          if (e.ifConditions)
            for (var s = 1, r = e.ifConditions.length; s < r; s++) {
              var i = e.ifConditions[s].block;
              Mi(i), i.static || (e.static = !1);
            }
        }
      }
      function Si(e, t) {
        if (1 === e.type) {
          if (
            ((e.static || e.once) && (e.staticInFor = t),
            e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
          )
            return void (e.staticRoot = !0);
          if (((e.staticRoot = !1), e.children))
            for (var n = 0, a = e.children.length; n < a; n++) Si(e.children[n], t || !!e.for);
          if (e.ifConditions) for (var s = 1, r = e.ifConditions.length; s < r; s++) Si(e.ifConditions[s].block, t);
        }
      }
      var Ei = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        Ii = /\([^)]*?\);*$/,
        Oi = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        $i = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
        zi = {
          esc: ['Esc', 'Escape'],
          tab: 'Tab',
          enter: 'Enter',
          space: [' ', 'Spacebar'],
          up: ['Up', 'ArrowUp'],
          left: ['Left', 'ArrowLeft'],
          right: ['Right', 'ArrowRight'],
          down: ['Down', 'ArrowDown'],
          delete: ['Backspace', 'Delete', 'Del'],
        },
        Di = function (e) {
          return 'if(' + e + ')return null;';
        },
        Fi = {
          stop: '$event.stopPropagation();',
          prevent: '$event.preventDefault();',
          self: Di('$event.target !== $event.currentTarget'),
          ctrl: Di('!$event.ctrlKey'),
          shift: Di('!$event.shiftKey'),
          alt: Di('!$event.altKey'),
          meta: Di('!$event.metaKey'),
          left: Di("'button' in $event && $event.button !== 0"),
          middle: Di("'button' in $event && $event.button !== 1"),
          right: Di("'button' in $event && $event.button !== 2"),
        };
      function Li(e, t) {
        var n = t ? 'nativeOn:' : 'on:',
          a = '',
          s = '';
        for (var r in e) {
          var i = ji(e[r]);
          e[r] && e[r].dynamic ? (s += r + ',' + i + ',') : (a += '"' + r + '":' + i + ',');
        }
        return (a = '{' + a.slice(0, -1) + '}'), s ? n + '_d(' + a + ',[' + s.slice(0, -1) + '])' : n + a;
      }
      function ji(e) {
        if (!e) return 'function(){}';
        if (Array.isArray(e))
          return (
            '[' +
            e
              .map(function (e) {
                return ji(e);
              })
              .join(',') +
            ']'
          );
        var t = Oi.test(e.value),
          n = Ei.test(e.value),
          a = Oi.test(e.value.replace(Ii, ''));
        if (e.modifiers) {
          var s = '',
            r = '',
            i = [];
          for (var o in e.modifiers)
            if (Fi[o]) (r += Fi[o]), $i[o] && i.push(o);
            else if ('exact' === o) {
              var d = e.modifiers;
              r += Di(
                ['ctrl', 'shift', 'alt', 'meta']
                  .filter(function (e) {
                    return !d[e];
                  })
                  .map(function (e) {
                    return '$event.' + e + 'Key';
                  })
                  .join('||'),
              );
            } else i.push(o);
          return (
            i.length &&
              (s += (function (e) {
                return "if(!$event.type.indexOf('key')&&" + e.map(Ni).join('&&') + ')return null;';
              })(i)),
            r && (s += r),
            'function($event){' +
              s +
              (t
                ? 'return ' + e.value + '.apply(null, arguments)'
                : n
                ? 'return (' + e.value + ').apply(null, arguments)'
                : a
                ? 'return ' + e.value
                : e.value) +
              '}'
          );
        }
        return t || n ? e.value : 'function($event){' + (a ? 'return ' + e.value : e.value) + '}';
      }
      function Ni(e) {
        var t = parseInt(e, 10);
        if (t) return '$event.keyCode!==' + t;
        var n = $i[e],
          a = zi[e];
        return (
          '_k($event.keyCode,' + JSON.stringify(e) + ',' + JSON.stringify(n) + ',$event.key,' + JSON.stringify(a) + ')'
        );
      }
      var Pi = {
          on: function (e, t) {
            e.wrapListeners = function (e) {
              return '_g(' + e + ',' + t.value + ')';
            };
          },
          bind: function (e, t) {
            e.wrapData = function (n) {
              return (
                '_b(' +
                n +
                ",'" +
                e.tag +
                "'," +
                t.value +
                ',' +
                (t.modifiers && t.modifiers.prop ? 'true' : 'false') +
                (t.modifiers && t.modifiers.sync ? ',true' : '') +
                ')'
              );
            };
          },
          cloak: S,
        },
        qi = function (e) {
          (this.options = e),
            (this.warn = e.warn || Ia),
            (this.transforms = Oa(e.modules, 'transformCode')),
            (this.dataGenFns = Oa(e.modules, 'genData')),
            (this.directives = C(C({}, Pi), e.directives));
          var t = e.isReservedTag || E;
          (this.maybeComponent = function (e) {
            return !!e.component || !t(e.tag);
          }),
            (this.onceId = 0),
            (this.staticRenderFns = []),
            (this.pre = !1);
        };
      function Bi(e, t) {
        var n = new qi(t);
        return {
          render: 'with(this){return ' + (e ? ('script' === e.tag ? 'null' : Ui(e, n)) : '_c("div")') + '}',
          staticRenderFns: n.staticRenderFns,
        };
      }
      function Ui(e, t) {
        if ((e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed)) return Gi(e, t);
        if (e.once && !e.onceProcessed) return Hi(e, t);
        if (e.for && !e.forProcessed) return Ki(e, t);
        if (e.if && !e.ifProcessed) return Vi(e, t);
        if ('template' !== e.tag || e.slotTarget || t.pre) {
          if ('slot' === e.tag)
            return (function (e, t) {
              var n = e.slotName || '"default"',
                a = Yi(e, t),
                s = '_t(' + n + (a ? ',function(){return ' + a + '}' : ''),
                r =
                  e.attrs || e.dynamicAttrs
                    ? to(
                        (e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
                          return { name: _(e.name), value: e.value, dynamic: e.dynamic };
                        }),
                      )
                    : null,
                i = e.attrsMap['v-bind'];
              return (
                (!r && !i) || a || (s += ',null'),
                r && (s += ',' + r),
                i && (s += (r ? '' : ',null') + ',' + i),
                s + ')'
              );
            })(e, t);
          var n;
          if (e.component)
            n = (function (e, t, n) {
              var a = t.inlineTemplate ? null : Yi(t, n, !0);
              return '_c(' + e + ',' + Xi(t, n) + (a ? ',' + a : '') + ')';
            })(e.component, e, t);
          else {
            var a;
            (!e.plain || (e.pre && t.maybeComponent(e))) && (a = Xi(e, t));
            var s = e.inlineTemplate ? null : Yi(e, t, !0);
            n = "_c('" + e.tag + "'" + (a ? ',' + a : '') + (s ? ',' + s : '') + ')';
          }
          for (var r = 0; r < t.transforms.length; r++) n = t.transforms[r](e, n);
          return n;
        }
        return Yi(e, t) || 'void 0';
      }
      function Gi(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return (
          e.pre && (t.pre = e.pre),
          t.staticRenderFns.push('with(this){return ' + Ui(e, t) + '}'),
          (t.pre = n),
          '_m(' + (t.staticRenderFns.length - 1) + (e.staticInFor ? ',true' : '') + ')'
        );
      }
      function Hi(e, t) {
        if (((e.onceProcessed = !0), e.if && !e.ifProcessed)) return Vi(e, t);
        if (e.staticInFor) {
          for (var n = '', a = e.parent; a; ) {
            if (a.for) {
              n = a.key;
              break;
            }
            a = a.parent;
          }
          return n ? '_o(' + Ui(e, t) + ',' + t.onceId++ + ',' + n + ')' : Ui(e, t);
        }
        return Gi(e, t);
      }
      function Vi(e, t, n, a) {
        return (e.ifProcessed = !0), Wi(e.ifConditions.slice(), t, n, a);
      }
      function Wi(e, t, n, a) {
        if (!e.length) return a || '_e()';
        var s = e.shift();
        return s.exp ? '(' + s.exp + ')?' + r(s.block) + ':' + Wi(e, t, n, a) : '' + r(s.block);
        function r(e) {
          return n ? n(e, t) : e.once ? Hi(e, t) : Ui(e, t);
        }
      }
      function Ki(e, t, n, a) {
        var s = e.for,
          r = e.alias,
          i = e.iterator1 ? ',' + e.iterator1 : '',
          o = e.iterator2 ? ',' + e.iterator2 : '';
        return (
          (e.forProcessed = !0),
          (a || '_l') + '((' + s + '),function(' + r + i + o + '){return ' + (n || Ui)(e, t) + '})'
        );
      }
      function Xi(e, t) {
        var n = '{',
          a = (function (e, t) {
            var n = e.directives;
            if (n) {
              var a,
                s,
                r,
                i,
                o = 'directives:[',
                d = !1;
              for (a = 0, s = n.length; a < s; a++) {
                (r = n[a]), (i = !0);
                var u = t.directives[r.name];
                u && (i = !!u(e, r, t.warn)),
                  i &&
                    ((d = !0),
                    (o +=
                      '{name:"' +
                      r.name +
                      '",rawName:"' +
                      r.rawName +
                      '"' +
                      (r.value ? ',value:(' + r.value + '),expression:' + JSON.stringify(r.value) : '') +
                      (r.arg ? ',arg:' + (r.isDynamicArg ? r.arg : '"' + r.arg + '"') : '') +
                      (r.modifiers ? ',modifiers:' + JSON.stringify(r.modifiers) : '') +
                      '},'));
              }
              return d ? o.slice(0, -1) + ']' : void 0;
            }
          })(e, t);
        a && (n += a + ','),
          e.key && (n += 'key:' + e.key + ','),
          e.ref && (n += 'ref:' + e.ref + ','),
          e.refInFor && (n += 'refInFor:true,'),
          e.pre && (n += 'pre:true,'),
          e.component && (n += 'tag:"' + e.tag + '",');
        for (var s = 0; s < t.dataGenFns.length; s++) n += t.dataGenFns[s](e);
        if (
          (e.attrs && (n += 'attrs:' + to(e.attrs) + ','),
          e.props && (n += 'domProps:' + to(e.props) + ','),
          e.events && (n += Li(e.events, !1) + ','),
          e.nativeEvents && (n += Li(e.nativeEvents, !0) + ','),
          e.slotTarget && !e.slotScope && (n += 'slot:' + e.slotTarget + ','),
          e.scopedSlots &&
            (n +=
              (function (e, t, n) {
                var a =
                    e.for ||
                    Object.keys(t).some(function (e) {
                      var n = t[e];
                      return n.slotTargetDynamic || n.if || n.for || Ji(n);
                    }),
                  s = !!e.if;
                if (!a)
                  for (var r = e.parent; r; ) {
                    if ((r.slotScope && r.slotScope !== ui) || r.for) {
                      a = !0;
                      break;
                    }
                    r.if && (s = !0), (r = r.parent);
                  }
                var i = Object.keys(t)
                  .map(function (e) {
                    return Qi(t[e], n);
                  })
                  .join(',');
                return (
                  'scopedSlots:_u([' +
                  i +
                  ']' +
                  (a ? ',null,true' : '') +
                  (!a && s
                    ? ',null,false,' +
                      (function (e) {
                        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
                        return t >>> 0;
                      })(i)
                    : '') +
                  ')'
                );
              })(e, e.scopedSlots, t) + ','),
          e.model &&
            (n +=
              'model:{value:' +
              e.model.value +
              ',callback:' +
              e.model.callback +
              ',expression:' +
              e.model.expression +
              '},'),
          e.inlineTemplate)
        ) {
          var r = (function (e, t) {
            var n = e.children[0];
            if (n && 1 === n.type) {
              var a = Bi(n, t.options);
              return (
                'inlineTemplate:{render:function(){' +
                a.render +
                '},staticRenderFns:[' +
                a.staticRenderFns
                  .map(function (e) {
                    return 'function(){' + e + '}';
                  })
                  .join(',') +
                ']}'
              );
            }
          })(e, t);
          r && (n += r + ',');
        }
        return (
          (n = n.replace(/,$/, '') + '}'),
          e.dynamicAttrs && (n = '_b(' + n + ',"' + e.tag + '",' + to(e.dynamicAttrs) + ')'),
          e.wrapData && (n = e.wrapData(n)),
          e.wrapListeners && (n = e.wrapListeners(n)),
          n
        );
      }
      function Ji(e) {
        return 1 === e.type && ('slot' === e.tag || e.children.some(Ji));
      }
      function Qi(e, t) {
        var n = e.attrsMap['slot-scope'];
        if (e.if && !e.ifProcessed && !n) return Vi(e, t, Qi, 'null');
        if (e.for && !e.forProcessed) return Ki(e, t, Qi);
        var a = e.slotScope === ui ? '' : String(e.slotScope),
          s =
            'function(' +
            a +
            '){return ' +
            ('template' === e.tag
              ? e.if && n
                ? '(' + e.if + ')?' + (Yi(e, t) || 'undefined') + ':undefined'
                : Yi(e, t) || 'undefined'
              : Ui(e, t)) +
            '}',
          r = a ? '' : ',proxy:true';
        return '{key:' + (e.slotTarget || '"default"') + ',fn:' + s + r + '}';
      }
      function Yi(e, t, n, a, s) {
        var r = e.children;
        if (r.length) {
          var i = r[0];
          if (1 === r.length && i.for && 'template' !== i.tag && 'slot' !== i.tag) {
            var o = n ? (t.maybeComponent(i) ? ',1' : ',0') : '';
            return '' + (a || Ui)(i, t) + o;
          }
          var d = n
              ? (function (e, t) {
                  for (var n = 0, a = 0; a < e.length; a++) {
                    var s = e[a];
                    if (1 === s.type) {
                      if (
                        Zi(s) ||
                        (s.ifConditions &&
                          s.ifConditions.some(function (e) {
                            return Zi(e.block);
                          }))
                      ) {
                        n = 2;
                        break;
                      }
                      (t(s) ||
                        (s.ifConditions &&
                          s.ifConditions.some(function (e) {
                            return t(e.block);
                          }))) &&
                        (n = 1);
                    }
                  }
                  return n;
                })(r, t.maybeComponent)
              : 0,
            u = s || eo;
          return (
            '[' +
            r
              .map(function (e) {
                return u(e, t);
              })
              .join(',') +
            ']' +
            (d ? ',' + d : '')
          );
        }
      }
      function Zi(e) {
        return void 0 !== e.for || 'template' === e.tag || 'slot' === e.tag;
      }
      function eo(e, t) {
        return 1 === e.type
          ? Ui(e, t)
          : 3 === e.type && e.isComment
          ? (function (e) {
              return '_e(' + JSON.stringify(e.text) + ')';
            })(e)
          : '_v(' + (2 === (n = e).type ? n.expression : no(JSON.stringify(n.text))) + ')';
        var n;
      }
      function to(e) {
        for (var t = '', n = '', a = 0; a < e.length; a++) {
          var s = e[a],
            r = no(s.value);
          s.dynamic ? (n += s.name + ',' + r + ',') : (t += '"' + s.name + '":' + r + ',');
        }
        return (t = '{' + t.slice(0, -1) + '}'), n ? '_d(' + t + ',[' + n.slice(0, -1) + '])' : t;
      }
      function no(e) {
        return e.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
      }
      function ao(e, t) {
        try {
          return new Function(e);
        } catch (n) {
          return t.push({ err: n, code: e }), S;
        }
      }
      function so(e) {
        var t = Object.create(null);
        return function (n, a, s) {
          (a = C({}, a)).warn, delete a.warn;
          var r = a.delimiters ? String(a.delimiters) + n : n;
          if (t[r]) return t[r];
          var i = e(n, a),
            o = {},
            d = [];
          return (
            (o.render = ao(i.render, d)),
            (o.staticRenderFns = i.staticRenderFns.map(function (e) {
              return ao(e, d);
            })),
            (t[r] = o)
          );
        };
      }
      new RegExp(
        '\\b' +
          'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments'
            .split(',')
            .join('\\b|\\b') +
          '\\b',
      ),
        new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');
      var ro,
        io,
        oo =
          ((ro = function (e, t) {
            var n = (function (e, t) {
              (Br = t.warn || Ia),
                (Wr = t.isPreTag || E),
                (Kr = t.mustUseProp || E),
                (Xr = t.getTagNamespace || E),
                t.isReservedTag,
                (Gr = Oa(t.modules, 'transformNode')),
                (Hr = Oa(t.modules, 'preTransformNode')),
                (Vr = Oa(t.modules, 'postTransformNode')),
                (Ur = t.delimiters);
              var n,
                a,
                s = [],
                r = !1 !== t.preserveWhitespace,
                i = t.whitespace,
                o = !1,
                d = !1;
              function u(e) {
                if (
                  (p(e),
                  o || e.processed || (e = li(e, t)),
                  s.length || e === n || (n.if && (e.elseif || e.else) && yi(n, { exp: e.elseif, block: e })),
                  a && !e.forbidden)
                )
                  if (e.elseif || e.else)
                    (i = e),
                      (u = (function (e) {
                        for (var t = e.length; t--; ) {
                          if (1 === e[t].type) return e[t];
                          e.pop();
                        }
                      })(a.children)),
                      u && u.if && yi(u, { exp: i.elseif, block: i });
                  else {
                    if (e.slotScope) {
                      var r = e.slotTarget || '"default"';
                      (a.scopedSlots || (a.scopedSlots = {}))[r] = e;
                    }
                    a.children.push(e), (e.parent = a);
                  }
                var i, u;
                (e.children = e.children.filter(function (e) {
                  return !e.slotScope;
                })),
                  p(e),
                  e.pre && (o = !1),
                  Wr(e.tag) && (d = !1);
                for (var l = 0; l < Vr.length; l++) Vr[l](e, t);
              }
              function p(e) {
                if (!d)
                  for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && ' ' === t.text; )
                    e.children.pop();
              }
              return (
                (function (e, t) {
                  for (
                    var n, a, s = [], r = t.expectHTML, i = t.isUnaryTag || E, o = t.canBeLeftOpenTag || E, d = 0;
                    e;

                  ) {
                    if (((n = e), a && zr(a))) {
                      var u = 0,
                        p = a.toLowerCase(),
                        l = Dr[p] || (Dr[p] = new RegExp('([\\s\\S]*?)(</' + p + '[^>]*>)', 'i')),
                        c = e.replace(l, function (e, n, a) {
                          return (
                            (u = a.length),
                            zr(p) ||
                              'noscript' === p ||
                              (n = n.replace(/<!\--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                            Pr(p, n) && (n = n.slice(1)),
                            t.chars && t.chars(n),
                            ''
                          );
                        });
                      (d += e.length - c.length), (e = c), x(p, d - u, d);
                    } else {
                      var y = e.indexOf('<');
                      if (0 === y) {
                        if (Or.test(e)) {
                          var m = e.indexOf('--\x3e');
                          if (m >= 0) {
                            t.shouldKeepComment && t.comment(e.substring(4, m), d, d + m + 3), k(m + 3);
                            continue;
                          }
                        }
                        if ($r.test(e)) {
                          var f = e.indexOf(']>');
                          if (f >= 0) {
                            k(f + 2);
                            continue;
                          }
                        }
                        var h = e.match(Ir);
                        if (h) {
                          k(h[0].length);
                          continue;
                        }
                        var v = e.match(Er);
                        if (v) {
                          var b = d;
                          k(v[0].length), x(v[1], b, d);
                          continue;
                        }
                        var g = R();
                        if (g) {
                          w(g), Pr(g.tagName, e) && k(1);
                          continue;
                        }
                      }
                      var T = void 0,
                        _ = void 0,
                        A = void 0;
                      if (y >= 0) {
                        for (
                          _ = e.slice(y);
                          !(Er.test(_) || Mr.test(_) || Or.test(_) || $r.test(_) || (A = _.indexOf('<', 1)) < 0);

                        )
                          (y += A), (_ = e.slice(y));
                        T = e.substring(0, y);
                      }
                      y < 0 && (T = e), T && k(T.length), t.chars && T && t.chars(T, d - T.length, d);
                    }
                    if (e === n) {
                      t.chars && t.chars(e);
                      break;
                    }
                  }
                  function k(t) {
                    (d += t), (e = e.substring(t));
                  }
                  function R() {
                    var t = e.match(Mr);
                    if (t) {
                      var n,
                        a,
                        s = { tagName: t[1], attrs: [], start: d };
                      for (k(t[0].length); !(n = e.match(Sr)) && (a = e.match(wr) || e.match(Rr)); )
                        (a.start = d), k(a[0].length), (a.end = d), s.attrs.push(a);
                      if (n) return (s.unarySlash = n[1]), k(n[0].length), (s.end = d), s;
                    }
                  }
                  function w(e) {
                    var n = e.tagName,
                      d = e.unarySlash;
                    r && ('p' === a && kr(n) && x(a), o(n) && a === n && x(n));
                    for (var u = i(n) || !!d, p = e.attrs.length, l = new Array(p), c = 0; c < p; c++) {
                      var y = e.attrs[c],
                        m = y[3] || y[4] || y[5] || '',
                        f = 'a' === n && 'href' === y[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                      l[c] = { name: y[1], value: qr(m, f) };
                    }
                    u ||
                      (s.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: l, start: e.start, end: e.end }),
                      (a = n)),
                      t.start && t.start(n, l, u, e.start, e.end);
                  }
                  function x(e, n, r) {
                    var i, o;
                    if ((null == n && (n = d), null == r && (r = d), e))
                      for (o = e.toLowerCase(), i = s.length - 1; i >= 0 && s[i].lowerCasedTag !== o; i--);
                    else i = 0;
                    if (i >= 0) {
                      for (var u = s.length - 1; u >= i; u--) t.end && t.end(s[u].tag, n, r);
                      (s.length = i), (a = i && s[i - 1].tag);
                    } else
                      'br' === o
                        ? t.start && t.start(e, [], !0, n, r)
                        : 'p' === o && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r));
                  }
                  x();
                })(e, {
                  warn: Br,
                  expectHTML: t.expectHTML,
                  isUnaryTag: t.isUnaryTag,
                  canBeLeftOpenTag: t.canBeLeftOpenTag,
                  shouldDecodeNewlines: t.shouldDecodeNewlines,
                  shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
                  shouldKeepComment: t.comments,
                  outputSourceRange: t.outputSourceRange,
                  start: function (e, r, i, p, l) {
                    var c = (a && a.ns) || Xr(e);
                    X &&
                      'svg' === c &&
                      (r = (function (e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                          var a = e[n];
                          vi.test(a.name) || ((a.name = a.name.replace(bi, '')), t.push(a));
                        }
                        return t;
                      })(r));
                    var y,
                      m = pi(e, r, a);
                    c && (m.ns = c),
                      ('style' !== (y = m).tag &&
                        ('script' !== y.tag || (y.attrsMap.type && 'text/javascript' !== y.attrsMap.type))) ||
                        ae() ||
                        (m.forbidden = !0);
                    for (var f = 0; f < Hr.length; f++) m = Hr[f](m, t) || m;
                    o ||
                      ((function (e) {
                        null != Pa(e, 'v-pre') && (e.pre = !0);
                      })(m),
                      m.pre && (o = !0)),
                      Wr(m.tag) && (d = !0),
                      o
                        ? (function (e) {
                            var t = e.attrsList,
                              n = t.length;
                            if (n)
                              for (var a = (e.attrs = new Array(n)), s = 0; s < n; s++)
                                (a[s] = { name: t[s].name, value: JSON.stringify(t[s].value) }),
                                  null != t[s].start && ((a[s].start = t[s].start), (a[s].end = t[s].end));
                            else e.pre || (e.plain = !0);
                          })(m)
                        : m.processed ||
                          (ci(m),
                          (function (e) {
                            var t = Pa(e, 'v-if');
                            if (t) (e.if = t), yi(e, { exp: t, block: e });
                            else {
                              null != Pa(e, 'v-else') && (e.else = !0);
                              var n = Pa(e, 'v-else-if');
                              n && (e.elseif = n);
                            }
                          })(m),
                          (function (e) {
                            null != Pa(e, 'v-once') && (e.once = !0);
                          })(m)),
                      n || (n = m),
                      i ? u(m) : ((a = m), s.push(m));
                  },
                  end: function (e, t, n) {
                    var r = s[s.length - 1];
                    (s.length -= 1), (a = s[s.length - 1]), u(r);
                  },
                  chars: function (e, t, n) {
                    if (a && (!X || 'textarea' !== a.tag || a.attrsMap.placeholder !== e)) {
                      var s,
                        u,
                        p,
                        l = a.children;
                      (e =
                        d || e.trim()
                          ? 'script' === (s = a).tag || 'style' === s.tag
                            ? e
                            : di(e)
                          : l.length
                          ? i
                            ? 'condense' === i && ii.test(e)
                              ? ''
                              : ' '
                            : r
                            ? ' '
                            : ''
                          : '') &&
                        (d || 'condense' !== i || (e = e.replace(oi, ' ')),
                        !o &&
                        ' ' !== e &&
                        (u = (function (e, t) {
                          var n = t ? br(t) : hr;
                          if (n.test(e)) {
                            for (var a, s, r, i = [], o = [], d = (n.lastIndex = 0); (a = n.exec(e)); ) {
                              (s = a.index) > d && (o.push((r = e.slice(d, s))), i.push(JSON.stringify(r)));
                              var u = Sa(a[1].trim());
                              i.push('_s(' + u + ')'), o.push({ '@binding': u }), (d = s + a[0].length);
                            }
                            return (
                              d < e.length && (o.push((r = e.slice(d))), i.push(JSON.stringify(r))),
                              { expression: i.join('+'), tokens: o }
                            );
                          }
                        })(e, Ur))
                          ? (p = { type: 2, expression: u.expression, tokens: u.tokens, text: e })
                          : (' ' === e && l.length && ' ' === l[l.length - 1].text) || (p = { type: 3, text: e }),
                        p && l.push(p));
                    }
                  },
                  comment: function (e, t, n) {
                    if (a) {
                      var s = { type: 3, text: e, isComment: !0 };
                      a.children.push(s);
                    }
                  },
                }),
                n
              );
            })(e.trim(), t);
            !1 !== t.optimize && Ci(n, t);
            var a = Bi(n, t);
            return { ast: n, render: a.render, staticRenderFns: a.staticRenderFns };
          }),
          function (e) {
            function t(t, n) {
              var a = Object.create(e),
                s = [],
                r = [];
              if (n)
                for (var i in (n.modules && (a.modules = (e.modules || []).concat(n.modules)),
                n.directives && (a.directives = C(Object.create(e.directives || null), n.directives)),
                n))
                  'modules' !== i && 'directives' !== i && (a[i] = n[i]);
              a.warn = function (e, t, n) {
                (n ? r : s).push(e);
              };
              var o = ro(t.trim(), a);
              return (o.errors = s), (o.tips = r), o;
            }
            return { compile: t, compileToFunctions: so(t) };
          }),
        uo = oo(wi),
        po = (uo.compile, uo.compileToFunctions);
      function lo(e) {
        return (
          ((io = io || document.createElement('div')).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>'),
          io.innerHTML.indexOf('&#10;') > 0
        );
      }
      var co = !!H && lo(!1),
        yo = !!H && lo(!0),
        mo = g(function (e) {
          var t = ta(e);
          return t && t.innerHTML;
        }),
        fo = Cn.prototype.$mount;
      (Cn.prototype.$mount = function (e, t) {
        if ((e = e && ta(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
          var a = n.template;
          if (a)
            if ('string' == typeof a) '#' === a.charAt(0) && (a = mo(a));
            else {
              if (!a.nodeType) return this;
              a = a.innerHTML;
            }
          else
            e &&
              (a = (function (e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement('div');
                return t.appendChild(e.cloneNode(!0)), t.innerHTML;
              })(e));
          if (a) {
            var s = po(
                a,
                {
                  outputSourceRange: !1,
                  shouldDecodeNewlines: co,
                  shouldDecodeNewlinesForHref: yo,
                  delimiters: n.delimiters,
                  comments: n.comments,
                },
                this,
              ),
              r = s.render,
              i = s.staticRenderFns;
            (n.render = r), (n.staticRenderFns = i);
          }
        }
        return fo.call(this, e, t);
      }),
        (Cn.compile = po);
      const ho = Cn;
      function vo(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      var bo = /[!'()*]/g,
        go = function (e) {
          return '%' + e.charCodeAt(0).toString(16);
        },
        To = /%2C/g,
        _o = function (e) {
          return encodeURIComponent(e).replace(bo, go).replace(To, ',');
        };
      function Ao(e) {
        try {
          return decodeURIComponent(e);
        } catch (e) {}
        return e;
      }
      var ko = function (e) {
        return null == e || 'object' == typeof e ? e : String(e);
      };
      function Ro(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, ''))
          ? (e.split('&').forEach(function (e) {
              var n = e.replace(/\+/g, ' ').split('='),
                a = Ao(n.shift()),
                s = n.length > 0 ? Ao(n.join('=')) : null;
              void 0 === t[a] ? (t[a] = s) : Array.isArray(t[a]) ? t[a].push(s) : (t[a] = [t[a], s]);
            }),
            t)
          : t;
      }
      function wo(e) {
        var t = e
          ? Object.keys(e)
              .map(function (t) {
                var n = e[t];
                if (void 0 === n) return '';
                if (null === n) return _o(t);
                if (Array.isArray(n)) {
                  var a = [];
                  return (
                    n.forEach(function (e) {
                      void 0 !== e && (null === e ? a.push(_o(t)) : a.push(_o(t) + '=' + _o(e)));
                    }),
                    a.join('&')
                  );
                }
                return _o(t) + '=' + _o(n);
              })
              .filter(function (e) {
                return e.length > 0;
              })
              .join('&')
          : null;
        return t ? '?' + t : '';
      }
      var xo = /\/?$/;
      function Co(e, t, n, a) {
        var s = a && a.options.stringifyQuery,
          r = t.query || {};
        try {
          r = Mo(r);
        } catch (e) {}
        var i = {
          name: t.name || (e && e.name),
          meta: (e && e.meta) || {},
          path: t.path || '/',
          hash: t.hash || '',
          query: r,
          params: t.params || {},
          fullPath: Io(t, s),
          matched: e ? Eo(e) : [],
        };
        return n && (i.redirectedFrom = Io(n, s)), Object.freeze(i);
      }
      function Mo(e) {
        if (Array.isArray(e)) return e.map(Mo);
        if (e && 'object' == typeof e) {
          var t = {};
          for (var n in e) t[n] = Mo(e[n]);
          return t;
        }
        return e;
      }
      var So = Co(null, { path: '/' });
      function Eo(e) {
        for (var t = []; e; ) t.unshift(e), (e = e.parent);
        return t;
      }
      function Io(e, t) {
        var n = e.path,
          a = e.query;
        void 0 === a && (a = {});
        var s = e.hash;
        return void 0 === s && (s = ''), (n || '/') + (t || wo)(a) + s;
      }
      function Oo(e, t, n) {
        return t === So
          ? e === t
          : !!t &&
              (e.path && t.path
                ? e.path.replace(xo, '') === t.path.replace(xo, '') &&
                  (n || (e.hash === t.hash && $o(e.query, t.query)))
                : !(!e.name || !t.name) &&
                  e.name === t.name &&
                  (n || (e.hash === t.hash && $o(e.query, t.query) && $o(e.params, t.params))));
      }
      function $o(e, t) {
        if ((void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t)) return e === t;
        var n = Object.keys(e).sort(),
          a = Object.keys(t).sort();
        return (
          n.length === a.length &&
          n.every(function (n, s) {
            var r = e[n];
            if (a[s] !== n) return !1;
            var i = t[n];
            return null == r || null == i
              ? r === i
              : 'object' == typeof r && 'object' == typeof i
              ? $o(r, i)
              : String(r) === String(i);
          })
        );
      }
      function zo(e) {
        for (var t = 0; t < e.matched.length; t++) {
          var n = e.matched[t];
          for (var a in n.instances) {
            var s = n.instances[a],
              r = n.enteredCbs[a];
            if (s && r) {
              delete n.enteredCbs[a];
              for (var i = 0; i < r.length; i++) s._isBeingDestroyed || r[i](s);
            }
          }
        }
      }
      var Do = {
        name: 'RouterView',
        functional: !0,
        props: { name: { type: String, default: 'default' } },
        render: function (e, t) {
          var n = t.props,
            a = t.children,
            s = t.parent,
            r = t.data;
          r.routerView = !0;
          for (
            var i = s.$createElement,
              o = n.name,
              d = s.$route,
              u = s._routerViewCache || (s._routerViewCache = {}),
              p = 0,
              l = !1;
            s && s._routerRoot !== s;

          ) {
            var c = s.$vnode ? s.$vnode.data : {};
            c.routerView && p++, c.keepAlive && s._directInactive && s._inactive && (l = !0), (s = s.$parent);
          }
          if (((r.routerViewDepth = p), l)) {
            var y = u[o],
              m = y && y.component;
            return m ? (y.configProps && Fo(m, r, y.route, y.configProps), i(m, r, a)) : i();
          }
          var f = d.matched[p],
            h = f && f.components[o];
          if (!f || !h) return (u[o] = null), i();
          (u[o] = { component: h }),
            (r.registerRouteInstance = function (e, t) {
              var n = f.instances[o];
              ((t && n !== e) || (!t && n === e)) && (f.instances[o] = t);
            }),
            ((r.hook || (r.hook = {})).prepatch = function (e, t) {
              f.instances[o] = t.componentInstance;
            }),
            (r.hook.init = function (e) {
              e.data.keepAlive &&
                e.componentInstance &&
                e.componentInstance !== f.instances[o] &&
                (f.instances[o] = e.componentInstance),
                zo(d);
            });
          var v = f.props && f.props[o];
          return v && (vo(u[o], { route: d, configProps: v }), Fo(h, r, d, v)), i(h, r, a);
        },
      };
      function Fo(e, t, n, a) {
        var s = (t.props = (function (e, t) {
          switch (typeof t) {
            case 'undefined':
              return;
            case 'object':
              return t;
            case 'function':
              return t(e);
            case 'boolean':
              return t ? e.params : void 0;
          }
        })(n, a));
        if (s) {
          s = t.props = vo({}, s);
          var r = (t.attrs = t.attrs || {});
          for (var i in s) (e.props && i in e.props) || ((r[i] = s[i]), delete s[i]);
        }
      }
      function Lo(e, t, n) {
        var a = e.charAt(0);
        if ('/' === a) return e;
        if ('?' === a || '#' === a) return t + e;
        var s = t.split('/');
        (n && s[s.length - 1]) || s.pop();
        for (var r = e.replace(/^\//, '').split('/'), i = 0; i < r.length; i++) {
          var o = r[i];
          '..' === o ? s.pop() : '.' !== o && s.push(o);
        }
        return '' !== s[0] && s.unshift(''), s.join('/');
      }
      function jo(e) {
        return e.replace(/\/+/g, '/');
      }
      var No =
          Array.isArray ||
          function (e) {
            return '[object Array]' == Object.prototype.toString.call(e);
          },
        Po = function e(t, n, a) {
          return (
            No(n) || ((a = n || a), (n = [])),
            (a = a || {}),
            t instanceof RegExp
              ? (function (e, t) {
                  var n = e.source.match(/\((?!\?)/g);
                  if (n)
                    for (var a = 0; a < n.length; a++)
                      t.push({
                        name: a,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null,
                      });
                  return Qo(e, t);
                })(t, n)
              : No(t)
              ? (function (t, n, a) {
                  for (var s = [], r = 0; r < t.length; r++) s.push(e(t[r], n, a).source);
                  return Qo(new RegExp('(?:' + s.join('|') + ')', Yo(a)), n);
                })(t, n, a)
              : (function (e, t, n) {
                  return Zo(Ho(e, n), t, n);
                })(t, n, a)
          );
        },
        qo = Ho,
        Bo = Ko,
        Uo = Zo,
        Go = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g',
        );
      function Ho(e, t) {
        for (var n, a = [], s = 0, r = 0, i = '', o = (t && t.delimiter) || '/'; null != (n = Go.exec(e)); ) {
          var d = n[0],
            u = n[1],
            p = n.index;
          if (((i += e.slice(r, p)), (r = p + d.length), u)) i += u[1];
          else {
            var l = e[r],
              c = n[2],
              y = n[3],
              m = n[4],
              f = n[5],
              h = n[6],
              v = n[7];
            i && (a.push(i), (i = ''));
            var b = null != c && null != l && l !== c,
              g = '+' === h || '*' === h,
              T = '?' === h || '*' === h,
              _ = n[2] || o,
              A = m || f;
            a.push({
              name: y || s++,
              prefix: c || '',
              delimiter: _,
              optional: T,
              repeat: g,
              partial: b,
              asterisk: !!v,
              pattern: A ? Jo(A) : v ? '.*' : '[^' + Xo(_) + ']+?',
            });
          }
        }
        return r < e.length && (i += e.substr(r)), i && a.push(i), a;
      }
      function Vo(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function Wo(e) {
        return encodeURI(e).replace(/[?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function Ko(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          'object' == typeof e[a] && (n[a] = new RegExp('^(?:' + e[a].pattern + ')$', Yo(t)));
        return function (t, a) {
          for (var s = '', r = t || {}, i = (a || {}).pretty ? Vo : encodeURIComponent, o = 0; o < e.length; o++) {
            var d = e[o];
            if ('string' != typeof d) {
              var u,
                p = r[d.name];
              if (null == p) {
                if (d.optional) {
                  d.partial && (s += d.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + d.name + '" to be defined');
              }
              if (No(p)) {
                if (!d.repeat)
                  throw new TypeError(
                    'Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(p) + '`',
                  );
                if (0 === p.length) {
                  if (d.optional) continue;
                  throw new TypeError('Expected "' + d.name + '" to not be empty');
                }
                for (var l = 0; l < p.length; l++) {
                  if (((u = i(p[l])), !n[o].test(u)))
                    throw new TypeError(
                      'Expected all "' +
                        d.name +
                        '" to match "' +
                        d.pattern +
                        '", but received `' +
                        JSON.stringify(u) +
                        '`',
                    );
                  s += (0 === l ? d.prefix : d.delimiter) + u;
                }
              } else {
                if (((u = d.asterisk ? Wo(p) : i(p)), !n[o].test(u)))
                  throw new TypeError(
                    'Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + u + '"',
                  );
                s += d.prefix + u;
              }
            } else s += d;
          }
          return s;
        };
      }
      function Xo(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function Jo(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function Qo(e, t) {
        return (e.keys = t), e;
      }
      function Yo(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function Zo(e, t, n) {
        No(t) || ((n = t || n), (t = []));
        for (var a = (n = n || {}).strict, s = !1 !== n.end, r = '', i = 0; i < e.length; i++) {
          var o = e[i];
          if ('string' == typeof o) r += Xo(o);
          else {
            var d = Xo(o.prefix),
              u = '(?:' + o.pattern + ')';
            t.push(o),
              o.repeat && (u += '(?:' + d + u + ')*'),
              (r += u =
                o.optional ? (o.partial ? d + '(' + u + ')?' : '(?:' + d + '(' + u + '))?') : d + '(' + u + ')');
          }
        }
        var p = Xo(n.delimiter || '/'),
          l = r.slice(-p.length) === p;
        return (
          a || (r = (l ? r.slice(0, -p.length) : r) + '(?:' + p + '(?=$))?'),
          (r += s ? '$' : a && l ? '' : '(?=' + p + '|$)'),
          Qo(new RegExp('^' + r, Yo(n)), t)
        );
      }
      (Po.parse = qo),
        (Po.compile = function (e, t) {
          return Ko(Ho(e, t), t);
        }),
        (Po.tokensToFunction = Bo),
        (Po.tokensToRegExp = Uo);
      var ed = Object.create(null);
      function td(e, t, n) {
        t = t || {};
        try {
          var a = ed[e] || (ed[e] = Po.compile(e));
          return 'string' == typeof t.pathMatch && (t[0] = t.pathMatch), a(t, { pretty: !0 });
        } catch (e) {
          return '';
        } finally {
          delete t[0];
        }
      }
      function nd(e, t, n, a) {
        var s = 'string' == typeof e ? { path: e } : e;
        if (s._normalized) return s;
        if (s.name) {
          var r = (s = vo({}, e)).params;
          return r && 'object' == typeof r && (s.params = vo({}, r)), s;
        }
        if (!s.path && s.params && t) {
          (s = vo({}, s))._normalized = !0;
          var i = vo(vo({}, t.params), s.params);
          if (t.name) (s.name = t.name), (s.params = i);
          else if (t.matched.length) {
            var o = t.matched[t.matched.length - 1].path;
            s.path = td(o, i, t.path);
          }
          return s;
        }
        var d = (function (e) {
            var t = '',
              n = '',
              a = e.indexOf('#');
            a >= 0 && ((t = e.slice(a)), (e = e.slice(0, a)));
            var s = e.indexOf('?');
            return s >= 0 && ((n = e.slice(s + 1)), (e = e.slice(0, s))), { path: e, query: n, hash: t };
          })(s.path || ''),
          u = (t && t.path) || '/',
          p = d.path ? Lo(d.path, u, n || s.append) : u,
          l = (function (e, t, n) {
            void 0 === t && (t = {});
            var a,
              s = n || Ro;
            try {
              a = s(e || '');
            } catch (e) {
              a = {};
            }
            for (var r in t) {
              var i = t[r];
              a[r] = Array.isArray(i) ? i.map(ko) : ko(i);
            }
            return a;
          })(d.query, s.query, a && a.options.parseQuery),
          c = s.hash || d.hash;
        return c && '#' !== c.charAt(0) && (c = '#' + c), { _normalized: !0, path: p, query: l, hash: c };
      }
      var ad,
        sd = function () {},
        rd = {
          name: 'RouterLink',
          props: {
            to: { type: [String, Object], required: !0 },
            tag: { type: String, default: 'a' },
            custom: Boolean,
            exact: Boolean,
            exactPath: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            ariaCurrentValue: { type: String, default: 'page' },
            event: { type: [String, Array], default: 'click' },
          },
          render: function (e) {
            var t = this,
              n = this.$router,
              a = this.$route,
              s = n.resolve(this.to, a, this.append),
              r = s.location,
              i = s.route,
              o = s.href,
              d = {},
              u = n.options.linkActiveClass,
              p = n.options.linkExactActiveClass,
              l = null == u ? 'router-link-active' : u,
              c = null == p ? 'router-link-exact-active' : p,
              y = null == this.activeClass ? l : this.activeClass,
              m = null == this.exactActiveClass ? c : this.exactActiveClass,
              f = i.redirectedFrom ? Co(null, nd(i.redirectedFrom), null, n) : i;
            (d[m] = Oo(a, f, this.exactPath)),
              (d[y] =
                this.exact || this.exactPath
                  ? d[m]
                  : (function (e, t) {
                      return (
                        0 === e.path.replace(xo, '/').indexOf(t.path.replace(xo, '/')) &&
                        (!t.hash || e.hash === t.hash) &&
                        (function (e, t) {
                          for (var n in t) if (!(n in e)) return !1;
                          return !0;
                        })(e.query, t.query)
                      );
                    })(a, f));
            var h = d[m] ? this.ariaCurrentValue : null,
              v = function (e) {
                id(e) && (t.replace ? n.replace(r, sd) : n.push(r, sd));
              },
              b = { click: id };
            Array.isArray(this.event)
              ? this.event.forEach(function (e) {
                  b[e] = v;
                })
              : (b[this.event] = v);
            var g = { class: d },
              T =
                !this.$scopedSlots.$hasNormal &&
                this.$scopedSlots.default &&
                this.$scopedSlots.default({ href: o, route: i, navigate: v, isActive: d[y], isExactActive: d[m] });
            if (T) {
              if (1 === T.length) return T[0];
              if (T.length > 1 || !T.length) return 0 === T.length ? e() : e('span', {}, T);
            }
            if ('a' === this.tag) (g.on = b), (g.attrs = { href: o, 'aria-current': h });
            else {
              var _ = od(this.$slots.default);
              if (_) {
                _.isStatic = !1;
                var A = (_.data = vo({}, _.data));
                for (var k in ((A.on = A.on || {}), A.on)) {
                  var R = A.on[k];
                  k in b && (A.on[k] = Array.isArray(R) ? R : [R]);
                }
                for (var w in b) w in A.on ? A.on[w].push(b[w]) : (A.on[w] = v);
                var x = (_.data.attrs = vo({}, _.data.attrs));
                (x.href = o), (x['aria-current'] = h);
              } else g.on = b;
            }
            return e(this.tag, g, this.$slots.default);
          },
        };
      function id(e) {
        if (
          !(
            e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.defaultPrevented ||
            (void 0 !== e.button && 0 !== e.button)
          )
        ) {
          if (e.currentTarget && e.currentTarget.getAttribute) {
            var t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
          }
          return e.preventDefault && e.preventDefault(), !0;
        }
      }
      function od(e) {
        if (e)
          for (var t, n = 0; n < e.length; n++) {
            if ('a' === (t = e[n]).tag) return t;
            if (t.children && (t = od(t.children))) return t;
          }
      }
      var dd = 'undefined' != typeof window;
      function ud(e, t, n, a, s) {
        var r = t || [],
          i = n || Object.create(null),
          o = a || Object.create(null);
        e.forEach(function (e) {
          pd(r, i, o, e, s);
        });
        for (var d = 0, u = r.length; d < u; d++) '*' === r[d] && (r.push(r.splice(d, 1)[0]), u--, d--);
        return { pathList: r, pathMap: i, nameMap: o };
      }
      function pd(e, t, n, a, s, r) {
        var i = a.path,
          o = a.name,
          d = a.pathToRegexpOptions || {},
          u = (function (e, t, n) {
            return n || (e = e.replace(/\/$/, '')), '/' === e[0] || null == t ? e : jo(t.path + '/' + e);
          })(i, s, d.strict);
        'boolean' == typeof a.caseSensitive && (d.sensitive = a.caseSensitive);
        var p = {
          path: u,
          regex: ld(u, d),
          components: a.components || { default: a.component },
          alias: a.alias ? ('string' == typeof a.alias ? [a.alias] : a.alias) : [],
          instances: {},
          enteredCbs: {},
          name: o,
          parent: s,
          matchAs: r,
          redirect: a.redirect,
          beforeEnter: a.beforeEnter,
          meta: a.meta || {},
          props: null == a.props ? {} : a.components ? a.props : { default: a.props },
        };
        if (
          (a.children &&
            a.children.forEach(function (a) {
              var s = r ? jo(r + '/' + a.path) : void 0;
              pd(e, t, n, a, p, s);
            }),
          t[p.path] || (e.push(p.path), (t[p.path] = p)),
          void 0 !== a.alias)
        )
          for (var l = Array.isArray(a.alias) ? a.alias : [a.alias], c = 0; c < l.length; ++c) {
            var y = { path: l[c], children: a.children };
            pd(e, t, n, y, s, p.path || '/');
          }
        o && (n[o] || (n[o] = p));
      }
      function ld(e, t) {
        return Po(e, [], t);
      }
      function cd(e, t) {
        var n = ud(e),
          a = n.pathList,
          s = n.pathMap,
          r = n.nameMap;
        function i(e, n, i) {
          var d = nd(e, n, !1, t),
            u = d.name;
          if (u) {
            var p = r[u];
            if (!p) return o(null, d);
            var l = p.regex.keys
              .filter(function (e) {
                return !e.optional;
              })
              .map(function (e) {
                return e.name;
              });
            if (('object' != typeof d.params && (d.params = {}), n && 'object' == typeof n.params))
              for (var c in n.params) !(c in d.params) && l.indexOf(c) > -1 && (d.params[c] = n.params[c]);
            return (d.path = td(p.path, d.params)), o(p, d, i);
          }
          if (d.path) {
            d.params = {};
            for (var y = 0; y < a.length; y++) {
              var m = a[y],
                f = s[m];
              if (yd(f.regex, d.path, d.params)) return o(f, d, i);
            }
          }
          return o(null, d);
        }
        function o(e, n, a) {
          return e && e.redirect
            ? (function (e, n) {
                var a = e.redirect,
                  s = 'function' == typeof a ? a(Co(e, n, null, t)) : a;
                if (('string' == typeof s && (s = { path: s }), !s || 'object' != typeof s)) return o(null, n);
                var d = s,
                  u = d.name,
                  p = d.path,
                  l = n.query,
                  c = n.hash,
                  y = n.params;
                if (
                  ((l = d.hasOwnProperty('query') ? d.query : l),
                  (c = d.hasOwnProperty('hash') ? d.hash : c),
                  (y = d.hasOwnProperty('params') ? d.params : y),
                  u)
                )
                  return r[u], i({ _normalized: !0, name: u, query: l, hash: c, params: y }, void 0, n);
                if (p) {
                  var m = (function (e, t) {
                    return Lo(e, t.parent ? t.parent.path : '/', !0);
                  })(p, e);
                  return i({ _normalized: !0, path: td(m, y), query: l, hash: c }, void 0, n);
                }
                return o(null, n);
              })(e, a || n)
            : e && e.matchAs
            ? (function (e, t, n) {
                var a = i({ _normalized: !0, path: td(n, t.params) });
                if (a) {
                  var s = a.matched,
                    r = s[s.length - 1];
                  return (t.params = a.params), o(r, t);
                }
                return o(null, t);
              })(0, n, e.matchAs)
            : Co(e, n, a, t);
        }
        return {
          match: i,
          addRoute: function (e, t) {
            var n = 'object' != typeof e ? r[e] : void 0;
            ud([t || e], a, s, r, n),
              n &&
                n.alias.length &&
                ud(
                  n.alias.map(function (e) {
                    return { path: e, children: [t] };
                  }),
                  a,
                  s,
                  r,
                  n,
                );
          },
          getRoutes: function () {
            return a.map(function (e) {
              return s[e];
            });
          },
          addRoutes: function (e) {
            ud(e, a, s, r);
          },
        };
      }
      function yd(e, t, n) {
        var a = t.match(e);
        if (!a) return !1;
        if (!n) return !0;
        for (var s = 1, r = a.length; s < r; ++s) {
          var i = e.keys[s - 1];
          i && (n[i.name || 'pathMatch'] = 'string' == typeof a[s] ? Ao(a[s]) : a[s]);
        }
        return !0;
      }
      var md = dd && window.performance && window.performance.now ? window.performance : Date;
      function fd() {
        return md.now().toFixed(3);
      }
      var hd = fd();
      function vd() {
        return hd;
      }
      function bd(e) {
        return (hd = e);
      }
      var gd = Object.create(null);
      function Td() {
        'scrollRestoration' in window.history && (window.history.scrollRestoration = 'manual');
        var e = window.location.protocol + '//' + window.location.host,
          t = window.location.href.replace(e, ''),
          n = vo({}, window.history.state);
        return (
          (n.key = vd()),
          window.history.replaceState(n, '', t),
          window.addEventListener('popstate', kd),
          function () {
            window.removeEventListener('popstate', kd);
          }
        );
      }
      function _d(e, t, n, a) {
        if (e.app) {
          var s = e.options.scrollBehavior;
          s &&
            e.app.$nextTick(function () {
              var r = (function () {
                  var e = vd();
                  if (e) return gd[e];
                })(),
                i = s.call(e, t, n, a ? r : null);
              i &&
                ('function' == typeof i.then
                  ? i
                      .then(function (e) {
                        Md(e, r);
                      })
                      .catch(function (e) {})
                  : Md(i, r));
            });
        }
      }
      function Ad() {
        var e = vd();
        e && (gd[e] = { x: window.pageXOffset, y: window.pageYOffset });
      }
      function kd(e) {
        Ad(), e.state && e.state.key && bd(e.state.key);
      }
      function Rd(e) {
        return xd(e.x) || xd(e.y);
      }
      function wd(e) {
        return { x: xd(e.x) ? e.x : window.pageXOffset, y: xd(e.y) ? e.y : window.pageYOffset };
      }
      function xd(e) {
        return 'number' == typeof e;
      }
      var Cd = /^#\d/;
      function Md(e, t) {
        var n,
          a = 'object' == typeof e;
        if (a && 'string' == typeof e.selector) {
          var s = Cd.test(e.selector)
            ? document.getElementById(e.selector.slice(1))
            : document.querySelector(e.selector);
          if (s) {
            var r = e.offset && 'object' == typeof e.offset ? e.offset : {};
            t = (function (e, t) {
              var n = document.documentElement.getBoundingClientRect(),
                a = e.getBoundingClientRect();
              return { x: a.left - n.left - t.x, y: a.top - n.top - t.y };
            })(s, (r = { x: xd((n = r).x) ? n.x : 0, y: xd(n.y) ? n.y : 0 }));
          } else Rd(e) && (t = wd(e));
        } else a && Rd(e) && (t = wd(e));
        t &&
          ('scrollBehavior' in document.documentElement.style
            ? window.scrollTo({ left: t.x, top: t.y, behavior: e.behavior })
            : window.scrollTo(t.x, t.y));
      }
      var Sd,
        Ed =
          dd &&
          ((-1 === (Sd = window.navigator.userAgent).indexOf('Android 2.') && -1 === Sd.indexOf('Android 4.0')) ||
            -1 === Sd.indexOf('Mobile Safari') ||
            -1 !== Sd.indexOf('Chrome') ||
            -1 !== Sd.indexOf('Windows Phone')) &&
          window.history &&
          'function' == typeof window.history.pushState;
      function Id(e, t) {
        Ad();
        var n = window.history;
        try {
          if (t) {
            var a = vo({}, n.state);
            (a.key = vd()), n.replaceState(a, '', e);
          } else n.pushState({ key: bd(fd()) }, '', e);
        } catch (n) {
          window.location[t ? 'replace' : 'assign'](e);
        }
      }
      function Od(e) {
        Id(e, !0);
      }
      function $d(e, t, n) {
        var a = function (s) {
          s >= e.length
            ? n()
            : e[s]
            ? t(e[s], function () {
                a(s + 1);
              })
            : a(s + 1);
        };
        a(0);
      }
      var zd = { redirected: 2, aborted: 4, cancelled: 8, duplicated: 16 };
      function Dd(e, t) {
        return Fd(
          e,
          t,
          zd.cancelled,
          'Navigation cancelled from "' + e.fullPath + '" to "' + t.fullPath + '" with a new navigation.',
        );
      }
      function Fd(e, t, n, a) {
        var s = new Error(a);
        return (s._isRouter = !0), (s.from = e), (s.to = t), (s.type = n), s;
      }
      var Ld = ['params', 'query', 'hash'];
      function jd(e) {
        return Object.prototype.toString.call(e).indexOf('Error') > -1;
      }
      function Nd(e, t) {
        return jd(e) && e._isRouter && (null == t || e.type === t);
      }
      function Pd(e, t) {
        return qd(
          e.map(function (e) {
            return Object.keys(e.components).map(function (n) {
              return t(e.components[n], e.instances[n], e, n);
            });
          }),
        );
      }
      function qd(e) {
        return Array.prototype.concat.apply([], e);
      }
      var Bd = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag;
      function Ud(e) {
        var t = !1;
        return function () {
          for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
          if (!t) return (t = !0), e.apply(this, n);
        };
      }
      var Gd = function (e, t) {
        (this.router = e),
          (this.base = (function (e) {
            if (!e)
              if (dd) {
                var t = document.querySelector('base');
                e = (e = (t && t.getAttribute('href')) || '/').replace(/^https?:\/\/[^\/]+/, '');
              } else e = '/';
            return '/' !== e.charAt(0) && (e = '/' + e), e.replace(/\/$/, '');
          })(t)),
          (this.current = So),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []),
          (this.listeners = []);
      };
      function Hd(e, t, n, a) {
        var s = Pd(e, function (e, a, s, r) {
          var i = (function (e, t) {
            return 'function' != typeof e && (e = ad.extend(e)), e.options[t];
          })(e, t);
          if (i)
            return Array.isArray(i)
              ? i.map(function (e) {
                  return n(e, a, s, r);
                })
              : n(i, a, s, r);
        });
        return qd(a ? s.reverse() : s);
      }
      function Vd(e, t) {
        if (t)
          return function () {
            return e.apply(t, arguments);
          };
      }
      (Gd.prototype.listen = function (e) {
        this.cb = e;
      }),
        (Gd.prototype.onReady = function (e, t) {
          this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t));
        }),
        (Gd.prototype.onError = function (e) {
          this.errorCbs.push(e);
        }),
        (Gd.prototype.transitionTo = function (e, t, n) {
          var a,
            s = this;
          try {
            a = this.router.match(e, this.current);
          } catch (e) {
            throw (
              (this.errorCbs.forEach(function (t) {
                t(e);
              }),
              e)
            );
          }
          var r = this.current;
          this.confirmTransition(
            a,
            function () {
              s.updateRoute(a),
                t && t(a),
                s.ensureURL(),
                s.router.afterHooks.forEach(function (e) {
                  e && e(a, r);
                }),
                s.ready ||
                  ((s.ready = !0),
                  s.readyCbs.forEach(function (e) {
                    e(a);
                  }));
            },
            function (e) {
              n && n(e),
                e &&
                  !s.ready &&
                  ((Nd(e, zd.redirected) && r === So) ||
                    ((s.ready = !0),
                    s.readyErrorCbs.forEach(function (t) {
                      t(e);
                    })));
            },
          );
        }),
        (Gd.prototype.confirmTransition = function (e, t, n) {
          var a = this,
            s = this.current;
          this.pending = e;
          var r,
            i,
            o = function (e) {
              !Nd(e) &&
                jd(e) &&
                (a.errorCbs.length
                  ? a.errorCbs.forEach(function (t) {
                      t(e);
                    })
                  : console.error(e)),
                n && n(e);
            },
            d = e.matched.length - 1,
            u = s.matched.length - 1;
          if (Oo(e, s) && d === u && e.matched[d] === s.matched[u])
            return (
              this.ensureURL(),
              e.hash && _d(this.router, s, e, !1),
              o(
                (((i = Fd(
                  (r = s),
                  e,
                  zd.duplicated,
                  'Avoided redundant navigation to current location: "' + r.fullPath + '".',
                )).name = 'NavigationDuplicated'),
                i),
              )
            );
          var p,
            l = (function (e, t) {
              var n,
                a = Math.max(e.length, t.length);
              for (n = 0; n < a && e[n] === t[n]; n++);
              return { updated: t.slice(0, n), activated: t.slice(n), deactivated: e.slice(n) };
            })(this.current.matched, e.matched),
            c = l.updated,
            y = l.deactivated,
            m = l.activated,
            f = [].concat(
              (function (e) {
                return Hd(e, 'beforeRouteLeave', Vd, !0);
              })(y),
              this.router.beforeHooks,
              (function (e) {
                return Hd(e, 'beforeRouteUpdate', Vd);
              })(c),
              m.map(function (e) {
                return e.beforeEnter;
              }),
              ((p = m),
              function (e, t, n) {
                var a = !1,
                  s = 0,
                  r = null;
                Pd(p, function (e, t, i, o) {
                  if ('function' == typeof e && void 0 === e.cid) {
                    (a = !0), s++;
                    var d,
                      u = Ud(function (t) {
                        var a;
                        ((a = t).__esModule || (Bd && 'Module' === a[Symbol.toStringTag])) && (t = t.default),
                          (e.resolved = 'function' == typeof t ? t : ad.extend(t)),
                          (i.components[o] = t),
                          --s <= 0 && n();
                      }),
                      p = Ud(function (e) {
                        var t = 'Failed to resolve async component ' + o + ': ' + e;
                        r || ((r = jd(e) ? e : new Error(t)), n(r));
                      });
                    try {
                      d = e(u, p);
                    } catch (e) {
                      p(e);
                    }
                    if (d)
                      if ('function' == typeof d.then) d.then(u, p);
                      else {
                        var l = d.component;
                        l && 'function' == typeof l.then && l.then(u, p);
                      }
                  }
                }),
                  a || n();
              }),
            ),
            h = function (t, n) {
              if (a.pending !== e) return o(Dd(s, e));
              try {
                t(e, s, function (t) {
                  !1 === t
                    ? (a.ensureURL(!0),
                      o(
                        (function (e, t) {
                          return Fd(
                            e,
                            t,
                            zd.aborted,
                            'Navigation aborted from "' +
                              e.fullPath +
                              '" to "' +
                              t.fullPath +
                              '" via a navigation guard.',
                          );
                        })(s, e),
                      ))
                    : jd(t)
                    ? (a.ensureURL(!0), o(t))
                    : 'string' == typeof t ||
                      ('object' == typeof t && ('string' == typeof t.path || 'string' == typeof t.name))
                    ? (o(
                        (function (e, t) {
                          return Fd(
                            e,
                            t,
                            zd.redirected,
                            'Redirected when going from "' +
                              e.fullPath +
                              '" to "' +
                              (function (e) {
                                if ('string' == typeof e) return e;
                                if ('path' in e) return e.path;
                                var t = {};
                                return (
                                  Ld.forEach(function (n) {
                                    n in e && (t[n] = e[n]);
                                  }),
                                  JSON.stringify(t, null, 2)
                                );
                              })(t) +
                              '" via a navigation guard.',
                          );
                        })(s, e),
                      ),
                      'object' == typeof t && t.replace ? a.replace(t) : a.push(t))
                    : n(t);
                });
              } catch (e) {
                o(e);
              }
            };
          $d(f, h, function () {
            var n = (function (e) {
              return Hd(e, 'beforeRouteEnter', function (e, t, n, a) {
                return (function (e, t, n) {
                  return function (a, s, r) {
                    return e(a, s, function (e) {
                      'function' == typeof e && (t.enteredCbs[n] || (t.enteredCbs[n] = []), t.enteredCbs[n].push(e)),
                        r(e);
                    });
                  };
                })(e, n, a);
              });
            })(m);
            $d(n.concat(a.router.resolveHooks), h, function () {
              if (a.pending !== e) return o(Dd(s, e));
              (a.pending = null),
                t(e),
                a.router.app &&
                  a.router.app.$nextTick(function () {
                    zo(e);
                  });
            });
          });
        }),
        (Gd.prototype.updateRoute = function (e) {
          (this.current = e), this.cb && this.cb(e);
        }),
        (Gd.prototype.setupListeners = function () {}),
        (Gd.prototype.teardown = function () {
          this.listeners.forEach(function (e) {
            e();
          }),
            (this.listeners = []),
            (this.current = So),
            (this.pending = null);
        });
      var Wd = (function (e) {
        function t(t, n) {
          e.call(this, t, n), (this._startLocation = Kd(this.base));
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.setupListeners = function () {
            var e = this;
            if (!(this.listeners.length > 0)) {
              var t = this.router,
                n = t.options.scrollBehavior,
                a = Ed && n;
              a && this.listeners.push(Td());
              var s = function () {
                var n = e.current,
                  s = Kd(e.base);
                (e.current === So && s === e._startLocation) ||
                  e.transitionTo(s, function (e) {
                    a && _d(t, e, n, !0);
                  });
              };
              window.addEventListener('popstate', s),
                this.listeners.push(function () {
                  window.removeEventListener('popstate', s);
                });
            }
          }),
          (t.prototype.go = function (e) {
            window.history.go(e);
          }),
          (t.prototype.push = function (e, t, n) {
            var a = this,
              s = this.current;
            this.transitionTo(
              e,
              function (e) {
                Id(jo(a.base + e.fullPath)), _d(a.router, e, s, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var a = this,
              s = this.current;
            this.transitionTo(
              e,
              function (e) {
                Od(jo(a.base + e.fullPath)), _d(a.router, e, s, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.ensureURL = function (e) {
            if (Kd(this.base) !== this.current.fullPath) {
              var t = jo(this.base + this.current.fullPath);
              e ? Id(t) : Od(t);
            }
          }),
          (t.prototype.getCurrentLocation = function () {
            return Kd(this.base);
          }),
          t
        );
      })(Gd);
      function Kd(e) {
        var t = window.location.pathname,
          n = t.toLowerCase(),
          a = e.toLowerCase();
        return (
          !e || (n !== a && 0 !== n.indexOf(jo(a + '/'))) || (t = t.slice(e.length)),
          (t || '/') + window.location.search + window.location.hash
        );
      }
      var Xd = (function (e) {
        function t(t, n, a) {
          e.call(this, t, n),
            (a &&
              (function (e) {
                var t = Kd(e);
                if (!/^\/#/.test(t)) return window.location.replace(jo(e + '/#' + t)), !0;
              })(this.base)) ||
              Jd();
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.setupListeners = function () {
            var e = this;
            if (!(this.listeners.length > 0)) {
              var t = this.router.options.scrollBehavior,
                n = Ed && t;
              n && this.listeners.push(Td());
              var a = function () {
                  var t = e.current;
                  Jd() &&
                    e.transitionTo(Qd(), function (a) {
                      n && _d(e.router, a, t, !0), Ed || eu(a.fullPath);
                    });
                },
                s = Ed ? 'popstate' : 'hashchange';
              window.addEventListener(s, a),
                this.listeners.push(function () {
                  window.removeEventListener(s, a);
                });
            }
          }),
          (t.prototype.push = function (e, t, n) {
            var a = this,
              s = this.current;
            this.transitionTo(
              e,
              function (e) {
                Zd(e.fullPath), _d(a.router, e, s, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var a = this,
              s = this.current;
            this.transitionTo(
              e,
              function (e) {
                eu(e.fullPath), _d(a.router, e, s, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.go = function (e) {
            window.history.go(e);
          }),
          (t.prototype.ensureURL = function (e) {
            var t = this.current.fullPath;
            Qd() !== t && (e ? Zd(t) : eu(t));
          }),
          (t.prototype.getCurrentLocation = function () {
            return Qd();
          }),
          t
        );
      })(Gd);
      function Jd() {
        var e = Qd();
        return '/' === e.charAt(0) || (eu('/' + e), !1);
      }
      function Qd() {
        var e = window.location.href,
          t = e.indexOf('#');
        return t < 0 ? '' : (e = e.slice(t + 1));
      }
      function Yd(e) {
        var t = window.location.href,
          n = t.indexOf('#');
        return (n >= 0 ? t.slice(0, n) : t) + '#' + e;
      }
      function Zd(e) {
        Ed ? Id(Yd(e)) : (window.location.hash = e);
      }
      function eu(e) {
        Ed ? Od(Yd(e)) : window.location.replace(Yd(e));
      }
      var tu = (function (e) {
          function t(t, n) {
            e.call(this, t, n), (this.stack = []), (this.index = -1);
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.push = function (e, t, n) {
              var a = this;
              this.transitionTo(
                e,
                function (e) {
                  (a.stack = a.stack.slice(0, a.index + 1).concat(e)), a.index++, t && t(e);
                },
                n,
              );
            }),
            (t.prototype.replace = function (e, t, n) {
              var a = this;
              this.transitionTo(
                e,
                function (e) {
                  (a.stack = a.stack.slice(0, a.index).concat(e)), t && t(e);
                },
                n,
              );
            }),
            (t.prototype.go = function (e) {
              var t = this,
                n = this.index + e;
              if (!(n < 0 || n >= this.stack.length)) {
                var a = this.stack[n];
                this.confirmTransition(
                  a,
                  function () {
                    var e = t.current;
                    (t.index = n),
                      t.updateRoute(a),
                      t.router.afterHooks.forEach(function (t) {
                        t && t(a, e);
                      });
                  },
                  function (e) {
                    Nd(e, zd.duplicated) && (t.index = n);
                  },
                );
              }
            }),
            (t.prototype.getCurrentLocation = function () {
              var e = this.stack[this.stack.length - 1];
              return e ? e.fullPath : '/';
            }),
            (t.prototype.ensureURL = function () {}),
            t
          );
        })(Gd),
        nu = function (e) {
          void 0 === e && (e = {}),
            (this.app = null),
            (this.apps = []),
            (this.options = e),
            (this.beforeHooks = []),
            (this.resolveHooks = []),
            (this.afterHooks = []),
            (this.matcher = cd(e.routes || [], this));
          var t = e.mode || 'hash';
          switch (
            ((this.fallback = 'history' === t && !Ed && !1 !== e.fallback),
            this.fallback && (t = 'hash'),
            dd || (t = 'abstract'),
            (this.mode = t),
            t)
          ) {
            case 'history':
              this.history = new Wd(this, e.base);
              break;
            case 'hash':
              this.history = new Xd(this, e.base, this.fallback);
              break;
            case 'abstract':
              this.history = new tu(this, e.base);
          }
        },
        au = { currentRoute: { configurable: !0 } };
      function su(e, t) {
        return (
          e.push(t),
          function () {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          }
        );
      }
      (nu.prototype.match = function (e, t, n) {
        return this.matcher.match(e, t, n);
      }),
        (au.currentRoute.get = function () {
          return this.history && this.history.current;
        }),
        (nu.prototype.init = function (e) {
          var t = this;
          if (
            (this.apps.push(e),
            e.$once('hook:destroyed', function () {
              var n = t.apps.indexOf(e);
              n > -1 && t.apps.splice(n, 1), t.app === e && (t.app = t.apps[0] || null), t.app || t.history.teardown();
            }),
            !this.app)
          ) {
            this.app = e;
            var n = this.history;
            if (n instanceof Wd || n instanceof Xd) {
              var a = function (e) {
                n.setupListeners(),
                  (function (e) {
                    var a = n.current,
                      s = t.options.scrollBehavior;
                    Ed && s && 'fullPath' in e && _d(t, e, a, !1);
                  })(e);
              };
              n.transitionTo(n.getCurrentLocation(), a, a);
            }
            n.listen(function (e) {
              t.apps.forEach(function (t) {
                t._route = e;
              });
            });
          }
        }),
        (nu.prototype.beforeEach = function (e) {
          return su(this.beforeHooks, e);
        }),
        (nu.prototype.beforeResolve = function (e) {
          return su(this.resolveHooks, e);
        }),
        (nu.prototype.afterEach = function (e) {
          return su(this.afterHooks, e);
        }),
        (nu.prototype.onReady = function (e, t) {
          this.history.onReady(e, t);
        }),
        (nu.prototype.onError = function (e) {
          this.history.onError(e);
        }),
        (nu.prototype.push = function (e, t, n) {
          var a = this;
          if (!t && !n && 'undefined' != typeof Promise)
            return new Promise(function (t, n) {
              a.history.push(e, t, n);
            });
          this.history.push(e, t, n);
        }),
        (nu.prototype.replace = function (e, t, n) {
          var a = this;
          if (!t && !n && 'undefined' != typeof Promise)
            return new Promise(function (t, n) {
              a.history.replace(e, t, n);
            });
          this.history.replace(e, t, n);
        }),
        (nu.prototype.go = function (e) {
          this.history.go(e);
        }),
        (nu.prototype.back = function () {
          this.go(-1);
        }),
        (nu.prototype.forward = function () {
          this.go(1);
        }),
        (nu.prototype.getMatchedComponents = function (e) {
          var t = e ? (e.matched ? e : this.resolve(e).route) : this.currentRoute;
          return t
            ? [].concat.apply(
                [],
                t.matched.map(function (e) {
                  return Object.keys(e.components).map(function (t) {
                    return e.components[t];
                  });
                }),
              )
            : [];
        }),
        (nu.prototype.resolve = function (e, t, n) {
          var a = nd(e, (t = t || this.history.current), n, this),
            s = this.match(a, t),
            r = s.redirectedFrom || s.fullPath,
            i = (function (e, t, n) {
              var a = 'hash' === n ? '#' + t : t;
              return e ? jo(e + '/' + a) : a;
            })(this.history.base, r, this.mode);
          return { location: a, route: s, href: i, normalizedTo: a, resolved: s };
        }),
        (nu.prototype.getRoutes = function () {
          return this.matcher.getRoutes();
        }),
        (nu.prototype.addRoute = function (e, t) {
          this.matcher.addRoute(e, t),
            this.history.current !== So && this.history.transitionTo(this.history.getCurrentLocation());
        }),
        (nu.prototype.addRoutes = function (e) {
          this.matcher.addRoutes(e),
            this.history.current !== So && this.history.transitionTo(this.history.getCurrentLocation());
        }),
        Object.defineProperties(nu.prototype, au),
        (nu.install = function e(t) {
          if (!e.installed || ad !== t) {
            (e.installed = !0), (ad = t);
            var n = function (e) {
                return void 0 !== e;
              },
              a = function (e, t) {
                var a = e.$options._parentVnode;
                n(a) && n((a = a.data)) && n((a = a.registerRouteInstance)) && a(e, t);
              };
            t.mixin({
              beforeCreate: function () {
                n(this.$options.router)
                  ? ((this._routerRoot = this),
                    (this._router = this.$options.router),
                    this._router.init(this),
                    t.util.defineReactive(this, '_route', this._router.history.current))
                  : (this._routerRoot = (this.$parent && this.$parent._routerRoot) || this),
                  a(this, this);
              },
              destroyed: function () {
                a(this);
              },
            }),
              Object.defineProperty(t.prototype, '$router', {
                get: function () {
                  return this._routerRoot._router;
                },
              }),
              Object.defineProperty(t.prototype, '$route', {
                get: function () {
                  return this._routerRoot._route;
                },
              }),
              t.component('RouterView', Do),
              t.component('RouterLink', rd);
            var s = t.config.optionMergeStrategies;
            s.beforeRouteEnter = s.beforeRouteLeave = s.beforeRouteUpdate = s.created;
          }
        }),
        (nu.version = '3.5.3'),
        (nu.isNavigationFailure = Nd),
        (nu.NavigationFailureType = zd),
        (nu.START_LOCATION = So),
        dd && window.Vue && window.Vue.use(nu);
      const ru = nu;
      var iu = function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t('div', { staticClass: 'min-h-screen bg-gray-100 px-4 pt-6' }, [t('router-view')], 1);
      };
      function ou(e, t, n, a, s, r, i, o) {
        var d,
          u = 'function' == typeof e ? e.options : e;
        if (
          (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
          a && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          i
            ? ((d = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  s && s.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(i);
              }),
              (u._ssrRegister = d))
            : s &&
              (d = o
                ? function () {
                    s.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : s),
          d)
        )
          if (u.functional) {
            u._injectStyles = d;
            var p = u.render;
            u.render = function (e, t) {
              return d.call(t), p(e, t);
            };
          } else {
            var l = u.beforeCreate;
            u.beforeCreate = l ? [].concat(l, d) : [d];
          }
        return { exports: e, options: u };
      }
      (iu._withStripped = !0), n(387);
      var du = ou({}, iu, [], !1, null, null, null);
      du.options.__file = 'node_modules/hardhat-docgen/src/App.vue';
      const uu = du.exports;
      var pu = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'w-full space-y-10 md:max-w-screen-sm lg:max-w-screen-md mx-auto' },
          [
            n('HeaderBar'),
            e._v(' '),
            n(
              'div',
              { staticClass: 'pb-32' },
              [
                n('div', { staticClass: 'space-y-4' }, [
                  n('span', { staticClass: 'text-lg' }, [e._v('\n        ' + e._s(e.json.source) + '\n      ')]),
                  e._v(' '),
                  n('h1', { staticClass: 'text-xl' }, [e._v('\n        ' + e._s(e.json.name) + '\n      ')]),
                  e._v(' '),
                  n('h2', { staticClass: 'text-lg' }, [e._v('\n        ' + e._s(e.json.title) + '\n      ')]),
                  e._v(' '),
                  n('h2', { staticClass: 'text-lg' }, [e._v('\n        ' + e._s(e.json.author) + '\n      ')]),
                  e._v(' '),
                  n('p', [e._v(e._s(e.json.notice))]),
                  e._v(' '),
                  n('p', [e._v(e._s(e.json.details))]),
                ]),
                e._v(' '),
                n(
                  'div',
                  { staticClass: 'mt-8' },
                  [
                    e.json.hasOwnProperty('constructor')
                      ? n('Member', { attrs: { json: e.json.constructor } })
                      : e._e(),
                  ],
                  1,
                ),
                e._v(' '),
                n(
                  'div',
                  { staticClass: 'mt-8' },
                  [e.json.receive ? n('Member', { attrs: { json: e.json.receive } }) : e._e()],
                  1,
                ),
                e._v(' '),
                n(
                  'div',
                  { staticClass: 'mt-8' },
                  [e.json.fallback ? n('Member', { attrs: { json: e.json.fallback } }) : e._e()],
                  1,
                ),
                e._v(' '),
                e.json.events ? n('MemberSet', { attrs: { title: 'Events', json: e.json.events } }) : e._e(),
                e._v(' '),
                e.json.stateVariables
                  ? n('MemberSet', { attrs: { title: 'State Variables', json: e.json.stateVariables } })
                  : e._e(),
                e._v(' '),
                e.json.methods ? n('MemberSet', { attrs: { title: 'Methods', json: e.json.methods } }) : e._e(),
              ],
              1,
            ),
            e._v(' '),
            n('FooterBar'),
          ],
          1,
        );
      };
      pu._withStripped = !0;
      var lu = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'bg-gray-100 fixed bottom-0 right-0 w-full border-t border-dashed border-gray-300' },
          [
            n('div', { staticClass: 'w-full text-center py-2 md:max-w-screen-sm lg:max-w-screen-md mx-auto' }, [
              n(
                'button',
                {
                  staticClass: 'py-1 px-2 text-gray-500',
                  on: {
                    click: function (t) {
                      return e.openLink(e.repository);
                    },
                  },
                },
                [e._v('\n      built with ' + e._s(e.name) + '\n    ')],
              ),
            ]),
          ],
        );
      };
      lu._withStripped = !0;
      const cu = JSON.parse('{"u2":"hardhat-docgen","cj":"https://github.com/ItsNickBarry/hardhat-docgen"}');
      var yu = ou(
        {
          data: function () {
            return { repository: cu.cj, name: cu.u2 };
          },
          methods: {
            openLink(e) {
              window.open(e, '_blank');
            },
          },
        },
        lu,
        [],
        !1,
        null,
        null,
        null,
      );
      yu.options.__file = 'node_modules/hardhat-docgen/src/components/FooterBar.vue';
      const mu = yu.exports;
      var fu = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'w-full border-b border-dashed py-2 border-gray-300' },
          [n('router-link', { staticClass: 'py-2 text-gray-500', attrs: { to: '/' } }, [e._v('\n    <- Go back\n  ')])],
          1,
        );
      };
      fu._withStripped = !0;
      var hu = ou({}, fu, [], !1, null, null, null);
      hu.options.__file = 'node_modules/hardhat-docgen/src/components/HeaderBar.vue';
      const vu = hu.exports;
      var bu = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'border-2 border-gray-400 border-dashed w-full p-2' }, [
          n('h3', { staticClass: 'text-lg pb-2 mb-2 border-b-2 border-gray-400 border-dashed' }, [
            e._v('\n    ' + e._s(e.name) + ' ' + e._s(e.keywords) + ' ' + e._s(e.inputSignature) + '\n  '),
          ]),
          e._v(' '),
          n(
            'div',
            { staticClass: 'space-y-3' },
            [
              n('p', [e._v(e._s(e.json.notice))]),
              e._v(' '),
              n('p', [e._v(e._s(e.json.details))]),
              e._v(' '),
              n('MemberSection', { attrs: { name: 'Parameters', items: e.inputs } }),
              e._v(' '),
              n('MemberSection', { attrs: { name: 'Return Values', items: e.outputs } }),
            ],
            1,
          ),
        ]);
      };
      bu._withStripped = !0;
      var gu = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.items.length > 0
          ? n(
              'ul',
              [
                n('h4', { staticClass: 'text-lg' }, [e._v('\n    ' + e._s(e.name) + '\n  ')]),
                e._v(' '),
                e._l(e.items, function (t, a) {
                  return n('li', { key: a }, [
                    n('span', { staticClass: 'bg-gray-300' }, [e._v(e._s(t.type))]),
                    e._v(' '),
                    n('b', [e._v(e._s(t.name || '_' + a))]),
                    t.desc ? n('span', [e._v(': '), n('i', [e._v(e._s(t.desc))])]) : e._e(),
                  ]);
                }),
              ],
              2,
            )
          : e._e();
      };
      gu._withStripped = !0;
      var Tu = ou(
        { props: { name: { type: String, default: '' }, items: { type: Array, default: () => new Array() } } },
        gu,
        [],
        !1,
        null,
        null,
        null,
      );
      Tu.options.__file = 'node_modules/hardhat-docgen/src/components/MemberSection.vue';
      const _u = {
        components: { MemberSection: Tu.exports },
        props: { json: { type: Object, default: () => new Object() } },
        computed: {
          name: function () {
            return this.json.name || this.json.type;
          },
          keywords: function () {
            let e = [];
            return (
              this.json.stateMutability && e.push(this.json.stateMutability),
              'true' === this.json.anonymous && e.push('anonymous'),
              e.join(' ')
            );
          },
          params: function () {
            return this.json.params || {};
          },
          returns: function () {
            return this.json.returns || {};
          },
          inputs: function () {
            return (this.json.inputs || []).map(e => ({ ...e, desc: this.params[e.name] }));
          },
          inputSignature: function () {
            return `(${this.inputs.map(e => e.type).join(',')})`;
          },
          outputs: function () {
            return (this.json.outputs || []).map((e, t) => ({ ...e, desc: this.returns[e.name || `_${t}`] }));
          },
          outputSignature: function () {
            return `(${this.outputs.map(e => e.type).join(',')})`;
          },
        },
      };
      var Au = ou(_u, bu, [], !1, null, null, null);
      Au.options.__file = 'node_modules/hardhat-docgen/src/components/Member.vue';
      const ku = Au.exports;
      var Ru = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'w-full mt-8' },
          [
            n('h2', { staticClass: 'text-lg' }, [e._v(e._s(e.title))]),
            e._v(' '),
            e._l(Object.keys(e.json), function (t) {
              return n('Member', { key: t, staticClass: 'mt-3', attrs: { json: e.json[t] } });
            }),
          ],
          2,
        );
      };
      Ru._withStripped = !0;
      var wu = ou(
        {
          components: { Member: ku },
          props: { title: { type: String, default: '' }, json: { type: Object, default: () => new Object() } },
        },
        Ru,
        [],
        !1,
        null,
        null,
        null,
      );
      wu.options.__file = 'node_modules/hardhat-docgen/src/components/MemberSet.vue';
      var xu = ou(
        {
          components: { Member: ku, MemberSet: wu.exports, HeaderBar: vu, FooterBar: mu },
          props: { json: { type: Object, default: () => new Object() } },
        },
        pu,
        [],
        !1,
        null,
        null,
        null,
      );
      xu.options.__file = 'node_modules/hardhat-docgen/src/components/Contract.vue';
      const Cu = xu.exports;
      var Mu = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'w-full space-y-10 md:max-w-screen-sm lg:max-w-screen-md mx-auto pb-32' },
          [
            n('Branch', { attrs: { json: e.trees, name: 'Sources:' } }),
            e._v(' '),
            n('FooterBar', { staticClass: 'mt-20' }),
          ],
          1,
        );
      };
      Mu._withStripped = !0;
      var Su = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          e._v('\n  ' + e._s(e.name) + '\n  '),
          Array.isArray(e.json)
            ? n(
                'div',
                { staticClass: 'pl-5' },
                e._l(e.json, function (t, a) {
                  return n(
                    'div',
                    { key: a },
                    [
                      n('router-link', { attrs: { to: t.source + ':' + t.name } }, [
                        e._v('\n        ' + e._s(t.name) + '\n      '),
                      ]),
                    ],
                    1,
                  );
                }),
                0,
              )
            : n(
                'div',
                { staticClass: 'pl-5' },
                e._l(Object.keys(e.json), function (t) {
                  return n('div', { key: t }, [n('Branch', { attrs: { json: e.json[t], name: t } })], 1);
                }),
                0,
              ),
        ]);
      };
      Su._withStripped = !0;
      var Eu = ou(
        {
          name: 'Branch',
          props: {
            name: { type: String, default: null },
            json: { type: [Object, Array], default: () => new Object() },
          },
        },
        Su,
        [],
        !1,
        null,
        null,
        null,
      );
      Eu.options.__file = 'node_modules/hardhat-docgen/src/components/Branch.vue';
      var Iu = ou(
        {
          components: { Branch: Eu.exports, FooterBar: mu },
          props: { json: { type: Object, default: () => new Object() } },
          computed: {
            trees: function () {
              let e = {};
              for (let t in this.json)
                t.replace('/', '//')
                  .split(/\/(?=[^\/])/)
                  .reduce(
                    function (e, n) {
                      if (!n.includes(':')) return (e[n] = e[n] || {}), e[n];
                      {
                        let [a] = n.split(':');
                        (e[a] = e[a] || []), e[a].push(this.json[t]);
                      }
                    }.bind(this),
                    e,
                  );
              return e;
            },
          },
        },
        Mu,
        [],
        !1,
        null,
        null,
        null,
      );
      Iu.options.__file = 'node_modules/hardhat-docgen/src/components/Index.vue';
      const Ou = Iu.exports;
      ho.use(ru);
      const $u = {
        'contracts/assetToken/AccessManager.sol:AccessManager': {
          source: 'contracts/assetToken/AccessManager.sol',
          name: 'AccessManager',
          title: 'Access Manager for AssetToken Contract',
          author: 'Swarm Markets',
          notice: 'Contract to manage the Asset Token contracts',
          events: {
            'AddedToAuthorizationContracts(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToAuthorizationContracts',
              type: 'event',
              notice: 'Emitted when a contract is added to the Asset Token Authorization list',
            },
            'AddedToBlacklist(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToBlacklist',
              type: 'event',
              notice: 'Emitted when an account is added to the Asset Token Blacklist',
            },
            'AddedTransferOnSafeguardAccount(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'AddedTransferOnSafeguardAccount',
              type: 'event',
              notice: 'Emitted when an account is granted with the right to transfer on safeguard state',
            },
            'AgentAdded(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
              ],
              name: 'AgentAdded',
              type: 'event',
              notice: 'Emitted when Agent is added to the contract',
            },
            'AgentAuthorizationListTransferred(address,address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'AgentAuthorizationListTransferred',
              type: 'event',
              notice: 'Emitted when an Agent list is transferred to another Agent',
            },
            'AgentRemoved(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_agent', type: 'address' },
              ],
              name: 'AgentRemoved',
              type: 'event',
              notice: 'Emitted when Agent is removed from the contract',
            },
            'ChangedToSafeGuard(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'ChangedToSafeGuard',
              type: 'event',
              notice: 'Emitted when the contract changes to safeguard mode',
            },
            'FreezedContract(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'FreezedContract',
              type: 'event',
              notice: 'Emitted when the contract gets freezed',
            },
            'GuardianTransferred(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newGuardian', type: 'address' },
              ],
              name: 'GuardianTransferred',
              type: 'event',
              notice: 'Emitted when Guardian is transferred',
            },
            'IssuerTransferred(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newIssuer', type: 'address' },
              ],
              name: 'IssuerTransferred',
              type: 'event',
              notice: 'Emitted when Issuer is transferred',
            },
            'RemovedFromAuthorizationContracts(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromAuthorizationContracts',
              type: 'event',
              notice: 'Emitted when a contract is removed from the Asset Token Authorization list',
            },
            'RemovedFromBlacklist(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromBlacklist',
              type: 'event',
              notice: 'Emitted when an account is removed from the Asset Token Blacklist',
            },
            'RemovedTransferOnSafeguardAccount(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'RemovedTransferOnSafeguardAccount',
              type: 'event',
              notice: 'Emitted when an account is revoked the right to transfer on safeguard state',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
            'TokenDeleted(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'TokenDeleted',
              type: 'event',
              notice: 'Emitted when an  Asset Token is deleted',
            },
            'TokenRegistered(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'TokenRegistered',
              type: 'event',
              notice: 'Emitted when a new Asset Token is deployed and registered',
            },
            'UnfreezedContract(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'UnfreezedContract',
              type: 'event',
              notice: 'Emitted when the contract gets unfreezed',
            },
          },
          stateVariables: {
            'DECIMALS()': {
              inputs: [],
              name: 'DECIMALS',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'This is a RAY on DSMATH representing 1',
            },
            'HUNDRED_PERCENT()': {
              inputs: [],
              name: 'HUNDRED_PERCENT',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'This is a proportion of 1 representing 100%, equal to a RAY',
            },
            'maxQtyOfAuthorizationLists()': {
              inputs: [],
              name: 'maxQtyOfAuthorizationLists',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'this is just to have an estimation of qty and prevent innecesary looping',
            },
          },
          methods: {
            'ASSET_DEPLOYER_ROLE()': {
              inputs: [],
              name: 'ASSET_DEPLOYER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'Role to be able to deploy an Asset Token',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'addAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newAgent', type: 'address' },
              ],
              name: 'addAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAgent: 'to be added', _tokenAddress: 'address of the current token being managed' },
              notice: 'Adds an AGENT',
            },
            'addMemberToBlacklist(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'addMemberToBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the address to be blacklisted',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Adds an address to the blacklist',
            },
            'addToAuthorizationList(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_contractAddress', type: 'address' },
              ],
              name: 'addToAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _contractAddress: 'the address to be added',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Adds an address to the authorization list',
            },
            'allowTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'allowTransferOnSafeguard',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the account to grant the right to transfer on safeguard state',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Allow TRANSFER on Safeguard',
            },
            'authorizationContractAddedBy(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_contractAddress', type: 'address' },
              ],
              name: 'authorizationContractAddedBy',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address of the agent' },
              notice: 'Get the agent address who was responsable of the validation contract (_contractAddress)',
            },
            'c_0x46786af8(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x46786af8', type: 'bytes32' }],
              name: 'c_0x46786af8',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'deleteAssetToken(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'deleteAssetToken',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Deletes the asset token from this contractIt has no real use (I think should be removed)',
            },
            'freezeContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'freezeContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Freeze the contract',
            },
            'getAuthorizationAddressByIndex(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'uint256', name: '_index', type: 'uint256' },
              ],
              name: 'getAuthorizationAddressByIndex',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address the address of the authorization contract' },
              notice: 'Get the authorization contract address given an index in authorizationContracts array',
            },
            'getGuardian(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getGuardian',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address the guardian address' },
              notice: 'Get the guardian of the asset token',
            },
            'getIndexByAuthorizationAddress(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_authorizationContractAddress', type: 'address' },
              ],
              name: 'getIndexByAuthorizationAddress',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'uint256 the index of the array' },
              notice: 'Get the position (index) in the authorizationContracts array of the authorization contract',
            },
            'getIssuer(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getIssuer',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address the issuer address' },
              notice: 'Get the issuer of the asset token',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'isAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_agentAddress', type: 'address' },
              ],
              name: 'isAgent',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if account is an agent' },
              notice: 'Get if the account is an agent of the asset token',
            },
            'isAllowedTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'isAllowedTransferOnSafeguard',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: {
                _account: 'the account to get info from',
                _tokenAddress: 'address of the current token being managed',
              },
              returns: { _0: 'bool true or false' },
              notice: 'Return if the account can transfer on safeguard',
            },
            'isBlacklisted(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'isBlacklisted',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if the account is blacklisted' },
              notice: 'Get if the account is blacklisted for the asset token',
            },
            'isContractActive(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isContractActive',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if the contract is Active' },
              notice: 'Get if the contract is Active or not',
            },
            'isContractFreezed(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isContractFreezed',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if the contract is Freezed' },
              notice: 'Get if the contract is Freezed or not',
            },
            'mustBeAuthorizedHolders(address,address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_from', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'mustBeAuthorizedHolders',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _amount: 'of the operation to be made',
                _from: 'to be checked if its authorized',
                _to: 'to be checked if its authorized',
                _tokenAddress: 'address of the current token being managed',
              },
              returns: { _0: 'bool true if _account is authorized' },
              notice: 'checks if the user is authorized by the agent',
            },
            'onlyActiveContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyActiveContract',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Check if the token contract is Active',
            },
            'onlyAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyAgent',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is an AGENT',
            },
            'onlyIssuer(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuer',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is the ISSUER',
            },
            'onlyIssuerOrAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuerOrAgent',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is AGENT_or ISSUER',
            },
            'onlyIssuerOrGuardian(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuerOrGuardian',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is GUARDIAN or ISSUER',
            },
            'onlyStoredToken(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyStoredToken',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Check if the token is valid',
            },
            'onlyUnfreezedContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyUnfreezedContract',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Check if the token contract is Not Freezed',
            },
            'preventTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'preventTransferOnSafeguard',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the account to be revoked from the right to transfer on safeguard state',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Removed TRANSFER on Safeguard',
            },
            'registerAssetToken(address,address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_issuer', type: 'address' },
                { internalType: 'address', name: '_guardian', type: 'address' },
              ],
              name: 'registerAssetToken',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _guardian: 'address of the contract guardian',
                _issuer: 'address of the contract issuer',
                _tokenAddress: 'address of the current token being managed',
              },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Register the asset tokens and its rates in this contract',
            },
            'removeAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_agent', type: 'address' },
              ],
              name: 'removeAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _agent: 'to be removed', _tokenAddress: 'address of the current token being managed' },
              notice: 'Deletes an AGENT',
            },
            'removeFromAuthorizationList(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_contractAddress', type: 'address' },
              ],
              name: 'removeFromAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _contractAddress: 'the address to be removed',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Removes an address from the authorization list',
            },
            'removeMemberFromBlacklist(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'removeMemberFromBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the address to be removed from the blacklisted',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Removes an address from the blacklist',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setContractToSafeguard(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'setContractToSafeguard',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Set the contract into Safeguard)',
            },
            'tokensData(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'tokensData',
              outputs: [
                { internalType: 'address', name: 'issuer', type: 'address' },
                { internalType: 'address', name: 'guardian', type: 'address' },
                { internalType: 'bool', name: 'isFreezed', type: 'bool' },
                { internalType: 'bool', name: 'isOnSafeguard', type: 'bool' },
                { internalType: 'bool', name: 'positiveInterest', type: 'bool' },
                { internalType: 'uint256', name: 'interestRate', type: 'uint256' },
                { internalType: 'uint256', name: 'rate', type: 'uint256' },
                { internalType: 'uint256', name: 'lastUpdate', type: 'uint256' },
              ],
              stateMutability: 'view',
              type: 'function',
              notice: 'mapping of TokenData, entered by token Address',
            },
            'transferAgentList(address,address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newAgent', type: 'address' },
                { internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'transferAgentList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _newAgent: 'to link the authorization list',
                _oldAgent: 'to unlink the authrization list',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Transfers the authorization contracts to a new Agent',
            },
            'transferGuardian(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newGuardian', type: 'address' },
              ],
              name: 'transferGuardian',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _newGuardian: 'to be assigned in the contract',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Changes the GUARDIAN',
            },
            'transferIssuer(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newIssuer', type: 'address' },
              ],
              name: 'transferIssuer',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _newIssuer: 'to be assigned in the contract',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Changes the ISSUER',
            },
            'unfreezeContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'unfreezeContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Unfreeze the contract',
            },
          },
        },
        'contracts/assetToken/AssetToken.sol:AssetToken': {
          source: 'contracts/assetToken/AssetToken.sol',
          name: 'AssetToken',
          title: 'AssetToken',
          author: 'Swarm Markets',
          notice: 'Main Asset Token Contract',
          constructor: {
            inputs: [
              { internalType: 'address', name: '_assetTokenData', type: 'address' },
              { internalType: 'uint256', name: '_statePercent', type: 'uint256' },
              { internalType: 'string', name: '_kya', type: 'string' },
              { internalType: 'uint256', name: '_minimumRedemptionAmount', type: 'uint256' },
              { internalType: 'string', name: '_name', type: 'string' },
              { internalType: 'string', name: '_symbol', type: 'string' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'spender', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
            },
            'AssetTokenDataChanged(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_oldAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'AssetTokenDataChanged',
              type: 'event',
              notice: 'Emitted when the address of the asset token data is set',
            },
            'KyaChanged(string,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'string', name: '_kya', type: 'string' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'KyaChanged',
              type: 'event',
              notice: 'Emitted when kya string is set',
            },
            'MinimumRedemptionAmountChanged(uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'uint256', name: '_newAmount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'MinimumRedemptionAmountChanged',
              type: 'event',
              notice: 'Emitted when minimumRedemptionAmount is set',
            },
            'MintApproved(uint256,address,uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_mintRequestID', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_destination', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_amountMinted', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'MintApproved',
              type: 'event',
              notice: 'Emitted when a mint request gets approved',
            },
            'MintRequested(uint256,address,uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_mintRequestID', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_destination', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_amount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'MintRequested',
              type: 'event',
              notice: 'Emitted when a mint request is requested',
            },
            'RedemptionApproved(uint256,uint256,uint256,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: '_assetTokenAmount', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: '_underlyingAssetAmount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_requestReceiver', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RedemptionApproved',
              type: 'event',
              notice: 'Emitted when a redemption request is approved',
            },
            'RedemptionCanceled(uint256,address,string,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_requestReceiver', type: 'address' },
                { indexed: !1, internalType: 'string', name: '_motive', type: 'string' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RedemptionCanceled',
              type: 'event',
              notice: 'Emitted when a redemption request is canceled',
            },
            'RedemptionRequested(uint256,uint256,uint256,bool,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: '_assetTokenAmount', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: '_underlyingAssetAmount', type: 'uint256' },
                { indexed: !1, internalType: 'bool', name: '_fromStake', type: 'bool' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RedemptionRequested',
              type: 'event',
              notice: 'Emitted when a redemption request is requested',
            },
            'SafeguardUnstaked(uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'uint256', name: '_amount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'SafeguardUnstaked',
              type: 'event',
              notice: 'Emitted when the contract change to safeguard',
            },
            'TokenBurned(uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'uint256', name: '_amount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'TokenBurned',
              type: 'event',
              notice: 'Emitted when the token gets bruned',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
            },
          },
          stateVariables: {
            'DECIMALS()': {
              inputs: [],
              name: 'DECIMALS',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'This is a RAY on DSMATH representing 1',
            },
            'HUNDRED_PERCENT()': {
              inputs: [],
              name: 'HUNDRED_PERCENT',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'This is a proportion of 1 representing 100%, equal to a RAY',
            },
          },
          methods: {
            'allowance(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
              ],
              name: 'allowance',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-allowance}.',
            },
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.',
            },
            'approveMint(uint256,string)': {
              inputs: [
                { internalType: 'uint256', name: '_mintRequestID', type: 'uint256' },
                { internalType: 'string', name: '_referenceTo', type: 'string' },
              ],
              name: 'approveMint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _mintRequestID: 'the ID to be referenced in the mapping',
                _referenceTo: 'reference comment for the issuer',
              },
              notice: 'Approves the Mint Request',
            },
            'approveRedemption(uint256,string)': {
              inputs: [
                { internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { internalType: 'string', name: '_approveTxID', type: 'string' },
              ],
              name: 'approveRedemption',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _approveTxID: 'the transaction ID',
                _redemptionRequestID: 'redemption request ID to be referenced in the mapping',
              },
              notice: 'Approves the Redemption Requests',
            },
            'assetTokenDataAddress()': {
              inputs: [],
              name: 'assetTokenDataAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'AssetTokenData Address',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-balanceOf}.',
            },
            'burn(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _amount: 'qty of assetTokens to be burned' },
              notice: 'Burns a certain amount of tokens',
            },
            'c_0x86caf0d4(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x86caf0d4', type: 'bytes32' }],
              name: 'c_0x86caf0d4',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'cancelRedemptionRequest(uint256,string)': {
              inputs: [
                { internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { internalType: 'string', name: '_motive', type: 'string' },
              ],
              name: 'cancelRedemptionRequest',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _motive: 'motive of the cancelation',
                _redemptionRequestID: 'redemption request ID to be referenced in the mapping',
              },
              notice: 'Approves the Redemption Requests',
            },
            'decimals()': {
              inputs: [],
              name: 'decimals',
              outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.',
            },
            'decreaseAllowance(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
              ],
              name: 'decreaseAllowance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.',
            },
            'freezeContract()': {
              inputs: [],
              name: 'freezeContract',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              notice: 'Freeze the contract',
            },
            'increaseAllowance(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
              ],
              name: 'increaseAllowance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.',
            },
            'kya()': {
              inputs: [],
              name: 'kya',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'know your asset string',
            },
            'minimumRedemptionAmount()': {
              inputs: [],
              name: 'minimumRedemptionAmount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'minimum Redemption Amount (in Asset token value)',
            },
            'mintRequestID()': {
              inputs: [],
              name: 'mintRequestID',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'mintRequests(uint256)': {
              inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              name: 'mintRequests',
              outputs: [
                { internalType: 'address', name: 'destination', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'string', name: 'referenceTo', type: 'string' },
                { internalType: 'bool', name: 'completed', type: 'bool' },
              ],
              stateMutability: 'view',
              type: 'function',
              notice: 'Mint Requests mapping and last ID',
            },
            'name()': {
              inputs: [],
              name: 'name',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the name of the token.',
            },
            'redemptionRequestID()': {
              inputs: [],
              name: 'redemptionRequestID',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'redemptionRequests(uint256)': {
              inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              name: 'redemptionRequests',
              outputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'string', name: 'receipt', type: 'string' },
                { internalType: 'uint256', name: 'assetTokenAmount', type: 'uint256' },
                { internalType: 'uint256', name: 'underlyingAssetAmount', type: 'uint256' },
                { internalType: 'bool', name: 'completed', type: 'bool' },
                { internalType: 'bool', name: 'fromStake', type: 'bool' },
                { internalType: 'string', name: 'approveTxID', type: 'string' },
                { internalType: 'address', name: 'canceledBy', type: 'address' },
              ],
              stateMutability: 'view',
              type: 'function',
              notice: 'Redemption Requests mapping and last ID',
            },
            'requestMint(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
              name: 'requestMint',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _amount: 'the amount to mint in asset token format' },
              returns: { _0: 'uint256 request ID to be referenced in the mapping' },
              notice: 'Requests a mint to the caller',
            },
            'requestMint(uint256,address)': {
              inputs: [
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
                { internalType: 'address', name: '_destination', type: 'address' },
              ],
              name: 'requestMint',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _amount: 'the amount to mint in asset token format',
                _destination: 'the receiver of the tokens',
              },
              returns: { _0: 'uint256 request ID to be referenced in the mapping' },
              notice: 'Requests a mint to the _destination address',
            },
            'requestRedemption(uint256,string)': {
              inputs: [
                { internalType: 'uint256', name: '_assetTokenAmount', type: 'uint256' },
                { internalType: 'string', name: '_destination', type: 'string' },
              ],
              name: 'requestRedemption',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _assetTokenAmount: 'the amount of Asset Token to be redeemed',
                _destination: 'the off chain hash of the redemption transaction',
              },
              returns: { _0: 'uint256 redemptionRequest ID to be referenced in the mapping' },
              notice: 'Requests an amount of assetToken Redemption',
            },
            'safeguardStake(uint256,string)': {
              inputs: [
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
                { internalType: 'string', name: '_receipt', type: 'string' },
              ],
              name: 'safeguardStake',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _amount: 'the assetToken amount to be staked',
                _receipt: 'the off chain hash of the redemption transaction',
              },
              notice: 'Performs the Safeguard Stake',
            },
            'safeguardStakes(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'safeguardStakes',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'mapping to hold each user safeguardStake amoun',
            },
            'safeguardUnstake()': {
              inputs: [],
              name: 'safeguardUnstake',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              notice: 'Calls to UnStake all the funds',
            },
            'safeguardUnstake(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
              name: 'safeguardUnstake',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _amount: 'to be unStaked in asset token' },
              notice: 'Calls to UnStake with a certain amount',
            },
            'setAssetTokenData(address)': {
              inputs: [{ internalType: 'address', name: '_newAddress', type: 'address' }],
              name: 'setAssetTokenData',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAddress: 'value to be set' },
              notice: 'Sets Asset Token Data Address',
            },
            'setKya(string)': {
              inputs: [{ internalType: 'string', name: '_kya', type: 'string' }],
              name: 'setKya',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _kya: 'value to be set' },
              notice: 'Sets the verification link',
            },
            'setMinimumRedemptionAmount(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_minimumRedemptionAmount', type: 'uint256' }],
              name: 'setMinimumRedemptionAmount',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _minimumRedemptionAmount: 'value to be set' },
              notice: 'Sets the _minimumRedemptionAmount',
            },
            'stakedRedemptionRequests(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'stakedRedemptionRequests',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice:
                'stakedRedemptionRequests is map from requester to request IDexists to detect that sender already has request from stake function',
            },
            'statePercent()': {
              inputs: [],
              name: 'statePercent',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'the percetage (on 27 digits)if this gets overgrown the contract change state',
            },
            'symbol()': {
              inputs: [],
              name: 'symbol',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the symbol of the token, usually a shorter version of the name.',
            },
            'totalStakes()': {
              inputs: [],
              name: 'totalStakes',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'sum of the total stakes amounts',
            },
            'totalSupply()': {
              inputs: [],
              name: 'totalSupply',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-totalSupply}.',
            },
            'transfer(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'transfer',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.",
            },
            'unfreezeContract()': {
              inputs: [],
              name: 'unfreezeContract',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              notice: 'unfreeze the contract',
            },
          },
        },
        'contracts/assetToken/AssetTokenData.sol:AssetTokenData': {
          source: 'contracts/assetToken/AssetTokenData.sol',
          name: 'AssetTokenData',
          title: 'Asset Token Data for Asset Token Contract',
          author: 'Swarm Markets',
          notice: 'Contract to manage the interest rate on the Asset Token contract',
          constructor: {
            inputs: [{ internalType: 'uint256', name: '_maxQtyOfAuthorizationLists', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'AddedToAuthorizationContracts(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToAuthorizationContracts',
              type: 'event',
              notice: 'Emitted when a contract is added to the Asset Token Authorization list',
            },
            'AddedToBlacklist(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToBlacklist',
              type: 'event',
              notice: 'Emitted when an account is added to the Asset Token Blacklist',
            },
            'AddedTransferOnSafeguardAccount(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'AddedTransferOnSafeguardAccount',
              type: 'event',
              notice: 'Emitted when an account is granted with the right to transfer on safeguard state',
            },
            'AgentAdded(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
              ],
              name: 'AgentAdded',
              type: 'event',
              notice: 'Emitted when Agent is added to the contract',
            },
            'AgentAuthorizationListTransferred(address,address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'AgentAuthorizationListTransferred',
              type: 'event',
              notice: 'Emitted when an Agent list is transferred to another Agent',
            },
            'AgentRemoved(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_agent', type: 'address' },
              ],
              name: 'AgentRemoved',
              type: 'event',
              notice: 'Emitted when Agent is removed from the contract',
            },
            'ChangedToSafeGuard(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'ChangedToSafeGuard',
              type: 'event',
              notice: 'Emitted when the contract changes to safeguard mode',
            },
            'FreezedContract(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'FreezedContract',
              type: 'event',
              notice: 'Emitted when the contract gets freezed',
            },
            'GuardianTransferred(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newGuardian', type: 'address' },
              ],
              name: 'GuardianTransferred',
              type: 'event',
              notice: 'Emitted when Guardian is transferred',
            },
            'InterestRateStored(address,address,uint256,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_interestRate', type: 'uint256' },
                { indexed: !1, internalType: 'bool', name: '_positiveInterest', type: 'bool' },
              ],
              name: 'InterestRateStored',
              type: 'event',
              notice: 'Emitted when the interest rate is set',
            },
            'IssuerTransferred(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newIssuer', type: 'address' },
              ],
              name: 'IssuerTransferred',
              type: 'event',
              notice: 'Emitted when Issuer is transferred',
            },
            'RateUpdated(address,address,uint256,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_newRate', type: 'uint256' },
                { indexed: !1, internalType: 'bool', name: '_positiveInterest', type: 'bool' },
              ],
              name: 'RateUpdated',
              type: 'event',
              notice: 'Emitted when the rate gets updated',
            },
            'RemovedFromAuthorizationContracts(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromAuthorizationContracts',
              type: 'event',
              notice: 'Emitted when a contract is removed from the Asset Token Authorization list',
            },
            'RemovedFromBlacklist(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromBlacklist',
              type: 'event',
              notice: 'Emitted when an account is removed from the Asset Token Blacklist',
            },
            'RemovedTransferOnSafeguardAccount(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'RemovedTransferOnSafeguardAccount',
              type: 'event',
              notice: 'Emitted when an account is revoked the right to transfer on safeguard state',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
            'TokenDeleted(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'TokenDeleted',
              type: 'event',
              notice: 'Emitted when an  Asset Token is deleted',
            },
            'TokenRegistered(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'TokenRegistered',
              type: 'event',
              notice: 'Emitted when a new Asset Token is deployed and registered',
            },
            'UnfreezedContract(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'UnfreezedContract',
              type: 'event',
              notice: 'Emitted when the contract gets unfreezed',
            },
          },
          methods: {
            'ASSET_DEPLOYER_ROLE()': {
              inputs: [],
              name: 'ASSET_DEPLOYER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'Role to be able to deploy an Asset Token',
            },
            'DECIMALS()': {
              inputs: [],
              name: 'DECIMALS',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'HUNDRED_PERCENT()': {
              inputs: [],
              name: 'HUNDRED_PERCENT',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'addAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newAgent', type: 'address' },
              ],
              name: 'addAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAgent: 'to be added', _tokenAddress: 'address of the current token being managed' },
              notice: 'Adds an AGENT',
            },
            'addMemberToBlacklist(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'addMemberToBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the address to be blacklisted',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Adds an address to the blacklist',
            },
            'addToAuthorizationList(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_contractAddress', type: 'address' },
              ],
              name: 'addToAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _contractAddress: 'the address to be added',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Adds an address to the authorization list',
            },
            'allowTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'allowTransferOnSafeguard',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the account to grant the right to transfer on safeguard state',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Allow TRANSFER on Safeguard',
            },
            'authorizationContractAddedBy(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_contractAddress', type: 'address' },
              ],
              name: 'authorizationContractAddedBy',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address of the agent' },
              notice: 'Get the agent address who was responsable of the validation contract (_contractAddress)',
            },
            'c_0x40b2d01d(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x40b2d01d', type: 'bytes32' }],
              name: 'c_0x40b2d01d',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'c_0x46786af8(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x46786af8', type: 'bytes32' }],
              name: 'c_0x46786af8',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'deleteAssetToken(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'deleteAssetToken',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Deletes the asset token from this contractIt has no real use (I think should be removed)',
            },
            'freezeContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'freezeContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Freeze the contract',
            },
            'getAuthorizationAddressByIndex(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'uint256', name: '_index', type: 'uint256' },
              ],
              name: 'getAuthorizationAddressByIndex',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address the address of the authorization contract' },
              notice: 'Get the authorization contract address given an index in authorizationContracts array',
            },
            'getCurrentRate(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getCurrentRate',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'uint256 the rate' },
              notice: 'Gets the current rate',
            },
            'getGuardian(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getGuardian',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address the guardian address' },
              notice: 'Get the guardian of the asset token',
            },
            'getIndexByAuthorizationAddress(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_authorizationContractAddress', type: 'address' },
              ],
              name: 'getIndexByAuthorizationAddress',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'uint256 the index of the array' },
              notice: 'Get the position (index) in the authorizationContracts array of the authorization contract',
            },
            'getInterestRate(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getInterestRate',
              outputs: [
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'bool', name: '', type: 'bool' },
              ],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: {
                _0: 'uint256 the interest rate',
                _1: 'bool true if it is positive interest, false if it is not',
              },
              notice: 'Gets the interest rate and positive/negative interest value',
            },
            'getIssuer(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getIssuer',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'address the issuer address' },
              notice: 'Get the issuer of the asset token',
            },
            'getLastUpdate(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getLastUpdate',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'uint256 the last update in block.timestamp format' },
              notice: 'Gets the timestamp of the last update',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'isAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_agentAddress', type: 'address' },
              ],
              name: 'isAgent',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if account is an agent' },
              notice: 'Get if the account is an agent of the asset token',
            },
            'isAllowedTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'isAllowedTransferOnSafeguard',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: {
                _account: 'the account to get info from',
                _tokenAddress: 'address of the current token being managed',
              },
              returns: { _0: 'bool true or false' },
              notice: 'Return if the account can transfer on safeguard',
            },
            'isBlacklisted(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'isBlacklisted',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if the account is blacklisted' },
              notice: 'Get if the account is blacklisted for the asset token',
            },
            'isContractActive(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isContractActive',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if the contract is Active' },
              notice: 'Get if the contract is Active or not',
            },
            'isContractFreezed(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isContractFreezed',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if the contract is Freezed' },
              notice: 'Get if the contract is Freezed or not',
            },
            'maxQtyOfAuthorizationLists()': {
              inputs: [],
              name: 'maxQtyOfAuthorizationLists',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'mustBeAuthorizedHolders(address,address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_from', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'mustBeAuthorizedHolders',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _amount: 'of the operation to be made',
                _from: 'to be checked if its authorized',
                _to: 'to be checked if its authorized',
                _tokenAddress: 'address of the current token being managed',
              },
              returns: { _0: 'bool true if _account is authorized' },
              notice: 'checks if the user is authorized by the agent',
            },
            'onlyActiveContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyActiveContract',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Check if the token contract is Active',
            },
            'onlyAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyAgent',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is an AGENT',
            },
            'onlyIssuer(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuer',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is the ISSUER',
            },
            'onlyIssuerOrAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuerOrAgent',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is AGENT_or ISSUER',
            },
            'onlyIssuerOrGuardian(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuerOrGuardian',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: {
                _functionCaller: 'the caller of the function where this is used',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Check if sender is GUARDIAN or ISSUER',
            },
            'onlyStoredToken(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyStoredToken',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Check if the token is valid',
            },
            'onlyUnfreezedContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyUnfreezedContract',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Check if the token contract is Not Freezed',
            },
            'preventTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'preventTransferOnSafeguard',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the account to be revoked from the right to transfer on safeguard state',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Removed TRANSFER on Safeguard',
            },
            'registerAssetToken(address,address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_issuer', type: 'address' },
                { internalType: 'address', name: '_guardian', type: 'address' },
              ],
              name: 'registerAssetToken',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _guardian: 'address of the contract guardian',
                _issuer: 'address of the contract issuer',
                _tokenAddress: 'address of the current token being managed',
              },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Register the asset tokens and its rates in this contract',
            },
            'removeAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_agent', type: 'address' },
              ],
              name: 'removeAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _agent: 'to be removed', _tokenAddress: 'address of the current token being managed' },
              notice: 'Deletes an AGENT',
            },
            'removeFromAuthorizationList(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_contractAddress', type: 'address' },
              ],
              name: 'removeFromAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _contractAddress: 'the address to be removed',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Removes an address from the authorization list',
            },
            'removeMemberFromBlacklist(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'removeMemberFromBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _account: 'the address to be removed from the blacklisted',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Removes an address from the blacklist',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setContractToSafeguard(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'setContractToSafeguard',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Set the contract into Safeguard)',
            },
            'setInterestRate(address,uint256,bool)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'uint256', name: '_interestRate', type: 'uint256' },
                { internalType: 'bool', name: '_positiveInterest', type: 'bool' },
              ],
              name: 'setInterestRate',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _interestRate: 'the value to be set',
                _positiveInterest: "if it's a negative or positive interest",
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Sets the new intereset rate',
            },
            'tokensData(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'tokensData',
              outputs: [
                { internalType: 'address', name: 'issuer', type: 'address' },
                { internalType: 'address', name: 'guardian', type: 'address' },
                { internalType: 'bool', name: 'isFreezed', type: 'bool' },
                { internalType: 'bool', name: 'isOnSafeguard', type: 'bool' },
                { internalType: 'bool', name: 'positiveInterest', type: 'bool' },
                { internalType: 'uint256', name: 'interestRate', type: 'uint256' },
                { internalType: 'uint256', name: 'rate', type: 'uint256' },
                { internalType: 'uint256', name: 'lastUpdate', type: 'uint256' },
              ],
              stateMutability: 'view',
              type: 'function',
              notice: 'mapping of TokenData, entered by token Address',
            },
            'transferAgentList(address,address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newAgent', type: 'address' },
                { internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'transferAgentList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _newAgent: 'to link the authorization list',
                _oldAgent: 'to unlink the authrization list',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Transfers the authorization contracts to a new Agent',
            },
            'transferGuardian(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newGuardian', type: 'address' },
              ],
              name: 'transferGuardian',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _newGuardian: 'to be assigned in the contract',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Changes the GUARDIAN',
            },
            'transferIssuer(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_newIssuer', type: 'address' },
              ],
              name: 'transferIssuer',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _newIssuer: 'to be assigned in the contract',
                _tokenAddress: 'address of the current token being managed',
              },
              notice: 'Changes the ISSUER',
            },
            'unfreezeContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'unfreezeContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              returns: { _0: 'bool true if operation was successful' },
              notice: 'Unfreeze the contract',
            },
            'update(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'update',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'address of the current token being managed' },
              notice: 'Update the Structure counting the blocks since the last update and calculating the rate',
            },
          },
        },
        'contracts/assetToken/AssetTokenFactory.sol:AssetTokenFactory': {
          source: 'contracts/assetToken/AssetTokenFactory.sol',
          name: 'AssetTokenFactory',
          title: 'Asset Token Factory for Asset Token Contract',
          author: 'Swarm Markets',
          notice: 'Contract to deploy Asset Token contracts',
          events: {
            'AssetTokenDataChanged(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_oldAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'AssetTokenDataChanged',
              type: 'event',
              notice: 'Emitted when the address of the asset token data is set',
            },
            'AssetTokenDeployed(string,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'string', name: '_name', type: 'string' },
                { indexed: !0, internalType: 'address', name: '_assetTokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_deployer', type: 'address' },
              ],
              name: 'AssetTokenDeployed',
              type: 'event',
              notice: 'Emitted when an asset token is deployed',
            },
            'AssetTokenInfoDisabled(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_assetTokenAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'AssetTokenInfoDisabled',
              type: 'event',
              notice: 'Emitted when the asset token gets its enabled structure to false (only infomarional)',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
          },
          methods: {
            'ASSET_DEPLOYER_ROLE()': {
              inputs: [],
              name: 'ASSET_DEPLOYER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'deployer role to be able to execute the deploy function',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'assetTokenContracts(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'assetTokenContracts',
              outputs: [
                { internalType: 'string', name: 'name', type: 'string' },
                { internalType: 'bool', name: 'enabled', type: 'bool' },
              ],
              stateMutability: 'view',
              type: 'function',
              notice: 'mapping holding all the deployed asset tokens',
            },
            'assetTokenDataAddress()': {
              inputs: [],
              name: 'assetTokenDataAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'AssetTokenData Address',
            },
            'c_0x0b6269d3(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x0b6269d3', type: 'bytes32' }],
              name: 'c_0x0b6269d3',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'deployAssetToken(address,address,uint256,string,uint256,string,string)': {
              inputs: [
                { internalType: 'address', name: '_issuer', type: 'address' },
                { internalType: 'address', name: '_guardian', type: 'address' },
                { internalType: 'uint256', name: '_statePercent', type: 'uint256' },
                { internalType: 'string', name: '_kya', type: 'string' },
                { internalType: 'uint256', name: '_minimumRedemptionAmount', type: 'uint256' },
                { internalType: 'string', name: '_name', type: 'string' },
                { internalType: 'string', name: '_symbol', type: 'string' },
              ],
              name: 'deployAssetToken',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _guardian: 'the guardian',
                _issuer: 'the issuer of the contract',
                _kya: 'verification link',
                _minimumRedemptionAmount: 'less than this value is not allowed',
                _name: 'name of the token',
                _statePercent: 'the state percent to check the safeguard convertion',
                _symbol: 'symbol of the token',
              },
              returns: { _0: 'address the address of the new asset token contract deployed' },
              notice:
                'Deploy an Asset Token ContractRequired: the caller should have ASSET_DEPLOYER_ROLE from this contractRequired: this contract should have ASSET_DEPLOYER_ROLE from Asset Token Data contract',
            },
            'disableAssetTokenInfo(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'disableAssetTokenInfo',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _tokenAddress: 'the address of the token' },
              notice:
                'Set the Token as NOT enabled (this is just for information purposes, it does not disable the token)',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'getTokenName(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getTokenName',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'the address of the token to get the name from' },
              returns: { _0: 'string the asset token name' },
              notice: 'Gets the Token Name',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'initialize(address)': {
              inputs: [{ internalType: 'address', name: '_assetTokenDataAddress', type: 'address' }],
              name: 'initialize',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Initalize the contract.',
            },
            'isTokenEnabled(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isTokenEnabled',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _tokenAddress: 'the address of the token to get if it is enabled (if it exists)' },
              returns: { _0: 'bool true if the token exists' },
              notice: 'Gets if the Token is enabled. This is used in the Authorization Contract',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setAssetTokenData(address)': {
              inputs: [{ internalType: 'address', name: '_newAddress', type: 'address' }],
              name: 'setAssetTokenData',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAddress: 'value to be set' },
              notice: 'Sets Asset Token Data Address',
            },
          },
        },
        'contracts/authorization/AssetTokenAuthorization.sol:AssetTokenAuthorization': {
          source: 'contracts/authorization/AssetTokenAuthorization.sol',
          name: 'AssetTokenAuthorization',
          title: 'Swarm Authorization for AssetToken Token Contract',
          author: 'Swarm Markets',
          notice: 'Contract to perform validation on swarm ecosystem',
          events: {
            'AssetTokenFactoryAddressSet(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_previousAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'AssetTokenFactoryAddressSet',
              type: 'event',
              notice: 'Emitted when the asset token factory address is set',
            },
            'EurPriceFeedAddressSet(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_previousAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'EurPriceFeedAddressSet',
              type: 'event',
              notice: 'Emitted when the euro price feed address is set',
            },
            'PermissionAddressSet(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_previousAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'PermissionAddressSet',
              type: 'event',
              notice: 'Emitted when the permission manager address is set',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
            'ValidationAsSecurityAndAmountChangedTo(bool,uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'bool', name: '_value', type: 'bool' },
                { indexed: !1, internalType: 'uint256', name: '_amount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'ValidationAsSecurityAndAmountChangedTo',
              type: 'event',
              notice: 'Emitted when the validateAsSecurityToken variable is set and/or the fiatAmountValidation is set',
            },
          },
          methods: {
            'AUTHORIZED_CALLER_ROLE()': {
              inputs: [],
              name: 'AUTHORIZED_CALLER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'role to be able to call isTxAuthorized',
            },
            'CONTRACT_DECIMALS()': {
              inputs: [],
              name: 'CONTRACT_DECIMALS',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'the decimals units this contract is working with',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'assetTokenFactoryAddress()': {
              inputs: [],
              name: 'assetTokenFactoryAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'AsetTokenFactory address',
            },
            'c_0x11639c7d(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x11639c7d', type: 'bytes32' }],
              name: 'c_0x11639c7d',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'checkAmount(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'checkAmount',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _amount: 'the amount of asset tokens', _tokenAddress: 'the address of the current token' },
              returns: { _0: 'bool true if the amount is larger than the fiatAmountValidation amount' },
              notice: 'Checks if the tx amount is larger than the parametrized amount in EUR',
            },
            'eurPriceFeedAddress()': {
              inputs: [],
              name: 'eurPriceFeedAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'EurPriceFeed module address',
            },
            'fiatAmountValidation()': {
              inputs: [],
              name: 'fiatAmountValidation',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'fiatAmountValidation for security tokens (in EUR)',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'grantAdminRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantAdminRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the admin role' },
              notice: 'Grants DEFAULT_ADMIN_ROLE to set contract parameters.',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'initialize(address,address,address,uint256,bool)': {
              inputs: [
                { internalType: 'address', name: '_permissionManagerAddress', type: 'address' },
                { internalType: 'address', name: '_eurPriceFeedAddress', type: 'address' },
                { internalType: 'address', name: '_assetTokenFactoryAddress', type: 'address' },
                { internalType: 'uint256', name: '_fiatAmountValidation', type: 'uint256' },
                { internalType: 'bool', name: '_validateAsSecurityToken', type: 'bool' },
              ],
              name: 'initialize',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _assetTokenFactoryAddress: 'assetTokenFactory address',
                _eurPriceFeedAddress: 'eurPriceFeed address',
                _fiatAmountValidation: 'amount to validate as a security token (18 digits)',
                _permissionManagerAddress: 'permission manager address',
                _validateAsSecurityToken: 'how this will contract validates asset token (regular or security)',
              },
              notice: 'Contract constructor',
            },
            'isAccountAuthorized(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'isAccountAuthorized',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _account: 'the address to be ckecked' },
              returns: { _0: 'bool true if `account` is authorized' },
              notice: 'Returns true if `account` is authorized in Swarm Ecosystem',
            },
            'isTxAuthorized(address,address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_from', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'isTxAuthorized',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _amount: 'the amount to be ckecked',
                _from: 'the sender',
                _to: 'the receiver',
                _tokenAddress: 'the address of the current token',
              },
              returns: { _0: 'bool true if the transaction is authorized' },
              notice: 'This is called from the Asset Token contract to check if the accounts are authorized',
            },
            'permissionManagerAddress()': {
              inputs: [],
              name: 'permissionManagerAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'permissionManagerAddress of Swarm Ecosystem',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setAssetTokenFactoryAddress(address)': {
              inputs: [{ internalType: 'address', name: '_assetTokenFactoryAddress', type: 'address' }],
              name: 'setAssetTokenFactoryAddress',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _assetTokenFactoryAddress: 'The address of the asset token factory' },
              notice: 'Sets the AssetTokenFactory contract address',
            },
            'setEurPriceFeedAddress(address)': {
              inputs: [{ internalType: 'address', name: '_eurPriceFeedAddress', type: 'address' }],
              name: 'setEurPriceFeedAddress',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _eurPriceFeedAddress: 'The address of the EUR Price feed module.' },
              notice: 'Sets the EurPriceFeed contract address',
            },
            'setPermissionManagerAddress(address)': {
              inputs: [{ internalType: 'address', name: '_permissionManagerAddress', type: 'address' }],
              name: 'setPermissionManagerAddress',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _permissionManagerAddress: 'permissionManagerAddress contract' },
              notice: 'Sets PermissionManager contract address as the permission manager from swarm ecosystem',
            },
            'setValidationAsSecurityAndAmount(bool,uint256)': {
              inputs: [
                { internalType: 'bool', name: '_validateAsSecurityToken', type: 'bool' },
                { internalType: 'uint256', name: '_fiatAmountValidation', type: 'uint256' },
              ],
              name: 'setValidationAsSecurityAndAmount',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _fiatAmountValidation: 'The new fiat amount to compare to',
                _validateAsSecurityToken: 'The new value to set',
              },
              notice:
                'Sets the if this contract should validate the token as a security assetand/or changes the _fiatAmountValidation to compare to',
            },
            'validateAsSecurityToken()': {
              inputs: [],
              name: 'validateAsSecurityToken',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'tells this contract if the security check should take place or not',
            },
          },
        },
        'contracts/childToken/ChildAccessManager.sol:ChildAccessManager': {
          source: 'contracts/childToken/ChildAccessManager.sol',
          name: 'ChildAccessManager',
          title: 'Access Manager Child for AssetToken Child Token Contract',
          author: 'Swarm Markets',
          notice: 'Contract to manage accesses and uses of the AST tokens',
          events: {
            'AddedToAuthorizationContracts(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToAuthorizationContracts',
              type: 'event',
            },
            'AddedToBlacklist(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToBlacklist',
              type: 'event',
            },
            'AgentAdded(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
              ],
              name: 'AgentAdded',
              type: 'event',
            },
            'AgentAuthorizationListTransferred(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'AgentAuthorizationListTransferred',
              type: 'event',
            },
            'AgentRemoved(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_agent', type: 'address' },
              ],
              name: 'AgentRemoved',
              type: 'event',
            },
            'ChildChainManagerProxyAddressSet(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' }],
              name: 'ChildChainManagerProxyAddressSet',
              type: 'event',
            },
            'RemovedFromAuthorizationContracts(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromAuthorizationContracts',
              type: 'event',
            },
            'RemovedFromBlacklist(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromBlacklist',
              type: 'event',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'EXECUTOR_ROLE()': {
              inputs: [],
              name: 'EXECUTOR_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'SAFEGUARD_TRANSFER_ROLE()': {
              inputs: [],
              name: 'SAFEGUARD_TRANSFER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'addAgent(address)': {
              inputs: [{ internalType: 'address', name: '_newAgent', type: 'address' }],
              name: 'addAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAgent: 'to be added' },
              notice: 'Adds an AGENT',
            },
            'addMemberToBlacklist(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'addMemberToBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'the address to be blacklisted' },
              notice: 'Adds an address to the blacklist',
            },
            'addToAuthorizationList(address)': {
              inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
              name: 'addToAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _contractAddress: 'the address to be added' },
              notice: 'Adds an address to the authorization list',
            },
            'agents(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'agents',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'agent => bool (enabled/disabled agent)',
            },
            'authorizationContracts(uint256)': {
              inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              name: 'authorizationContracts',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice:
                'array of addresses. Each one is a contract with the functionto ask is the account is authorized to operate with this token',
            },
            'authorizationsPerAgent(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'authorizationsPerAgent',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'authorization contracts => agents:list of addresses of each agent to authorize a user',
            },
            'blacklist(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'blacklist',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'account => bool (if enabled, account is blacklisted)',
            },
            'c_0xc61e28d3(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0xc61e28d3', type: 'bytes32' }],
              name: 'c_0xc61e28d3',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'childChainManagerProxy()': {
              inputs: [],
              name: 'childChainManagerProxy',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'child manager proxy address',
            },
            'getIndexFromAuthorizationList(address)': {
              inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
              name: 'getIndexFromAuthorizationList',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              params: { _contractAddress: 'the address to be searched' },
              returns: { _0: 'uint256 the index in the array' },
              notice: 'Gets the index from the array of authorization list',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'grantAdminRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantAdminRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the admin role' },
              notice: 'Grants DEFAULT_ADMIN_ROLE to set contract parameters.',
            },
            'grantExecutorRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantExecutorRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the EXECUTOR_ROLE' },
              notice: 'Grants EXECUTOR_ROLE',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'grantSafeguardTransferRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantSafeguardTransferRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the SAFEGUARD_TRANSFER_ROLE' },
              notice: 'Grants SAFEGUARD_TRANSFER_ROLE',
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'isFreezed()': {
              inputs: [],
              name: 'isFreezed',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'boolean to store if the contract is freezed',
            },
            'maxQtyOfAuthorizationLists()': {
              inputs: [],
              name: 'maxQtyOfAuthorizationLists',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'max quantity of contracts allowed',
            },
            'mustBeAuthorizedHolders(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'mustBeAuthorizedHolders',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _account: 'to be checked if its authorized' },
              returns: { _0: 'bool true if _account is authorized' },
              notice: 'checks if the user is authorized by the agent',
            },
            'removeAgent(address)': {
              inputs: [{ internalType: 'address', name: '_agent', type: 'address' }],
              name: 'removeAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _agent: 'to be removed' },
              notice: 'Deletes an AGENT',
            },
            'removeFromAuthorizationList(address)': {
              inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
              name: 'removeFromAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _contractAddress: 'the address to be removed' },
              notice: 'Removes an address from the authorization list',
            },
            'removeMemberFromBlacklist(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'removeMemberFromBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'the address to be removed from the blacklisted' },
              notice: 'Removes an address from the blacklist',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setChildChainManagerProxyAddress(address)': {
              inputs: [{ internalType: 'address', name: '_newAddress', type: 'address' }],
              name: 'setChildChainManagerProxyAddress',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAddress: 'to replace the old one' },
              notice: 'Sets childChainManagerProxy address',
            },
            'transferAgentList(address,address)': {
              inputs: [
                { internalType: 'address', name: '_newAgent', type: 'address' },
                { internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'transferAgentList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAgent: 'to link the authorization list', _oldAgent: 'to unlink the authrization list' },
              notice: 'Transfers the authorization contracts to a new Agent',
            },
          },
        },
        'contracts/childToken/ChildAssetToken.sol:ChildAssetToken': {
          source: 'contracts/childToken/ChildAssetToken.sol',
          name: 'ChildAssetToken',
          title: 'AssetToken',
          author: 'Swarm Markets',
          notice: 'Main AST Token Contract',
          constructor: {
            inputs: [
              { internalType: 'string', name: '_kya', type: 'string' },
              { internalType: 'uint256', name: '_maxQtyOfAuthorizationLists', type: 'uint256' },
              { internalType: 'address', name: '_childChainManagerProxy', type: 'address' },
              { internalType: 'string', name: '_name', type: 'string' },
              { internalType: 'string', name: '_symbol', type: 'string' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'AddedToAuthorizationContracts(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToAuthorizationContracts',
              type: 'event',
            },
            'AddedToBlacklist(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'AddedToBlacklist',
              type: 'event',
            },
            'AgentAdded(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
              ],
              name: 'AgentAdded',
              type: 'event',
            },
            'AgentAuthorizationListTransferred(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAgent', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'AgentAuthorizationListTransferred',
              type: 'event',
            },
            'AgentRemoved(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_agent', type: 'address' },
              ],
              name: 'AgentRemoved',
              type: 'event',
            },
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'spender', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
            },
            'ChildChainManagerProxyAddressSet(address)': {
              anonymous: !1,
              inputs: [{ indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' }],
              name: 'ChildChainManagerProxyAddressSet',
              type: 'event',
            },
            'FreezeStateChanged(bool,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'bool', name: '_isFreezed', type: 'bool' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'FreezeStateChanged',
              type: 'event',
            },
            'KyaChanged(string,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'string', name: '_kya', type: 'string' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'KyaChanged',
              type: 'event',
            },
            'RemovedFromAuthorizationContracts(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_contractAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromAuthorizationContracts',
              type: 'event',
            },
            'RemovedFromBlacklist(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_account', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_from', type: 'address' },
              ],
              name: 'RemovedFromBlacklist',
              type: 'event',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
            'TokenBurned(uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'uint256', name: '_amount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'TokenBurned',
              type: 'event',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'EXECUTOR_ROLE()': {
              inputs: [],
              name: 'EXECUTOR_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'SAFEGUARD_TRANSFER_ROLE()': {
              inputs: [],
              name: 'SAFEGUARD_TRANSFER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'addAgent(address)': {
              inputs: [{ internalType: 'address', name: '_newAgent', type: 'address' }],
              name: 'addAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAgent: 'to be added' },
              notice: 'Adds an AGENT',
            },
            'addMemberToBlacklist(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'addMemberToBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'the address to be blacklisted' },
              notice: 'Adds an address to the blacklist',
            },
            'addToAuthorizationList(address)': {
              inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
              name: 'addToAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _contractAddress: 'the address to be added' },
              notice: 'Adds an address to the authorization list',
            },
            'agents(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'agents',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'agent => bool (enabled/disabled agent)',
            },
            'allowance(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
              ],
              name: 'allowance',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-allowance}.',
            },
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.',
            },
            'authorizationContracts(uint256)': {
              inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              name: 'authorizationContracts',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice:
                'array of addresses. Each one is a contract with the functionto ask is the account is authorized to operate with this token',
            },
            'authorizationsPerAgent(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'authorizationsPerAgent',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'authorization contracts => agents:list of addresses of each agent to authorize a user',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-balanceOf}.',
            },
            'blacklist(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'blacklist',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'account => bool (if enabled, account is blacklisted)',
            },
            'c_0xc61e28d3(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0xc61e28d3', type: 'bytes32' }],
              name: 'c_0xc61e28d3',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'c_0xcff8aa4c(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0xcff8aa4c', type: 'bytes32' }],
              name: 'c_0xcff8aa4c',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'childChainManagerProxy()': {
              inputs: [],
              name: 'childChainManagerProxy',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'child manager proxy address',
            },
            'decimals()': {
              inputs: [],
              name: 'decimals',
              outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.',
            },
            'decreaseAllowance(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
              ],
              name: 'decreaseAllowance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.',
            },
            'deposit(address,bytes)': {
              inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'bytes', name: '_depositData', type: 'bytes' },
              ],
              name: 'deposit',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'getIndexFromAuthorizationList(address)': {
              inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
              name: 'getIndexFromAuthorizationList',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              params: { _contractAddress: 'the address to be searched' },
              returns: { _0: 'uint256 the index in the array' },
              notice: 'Gets the index from the array of authorization list',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'grantAdminRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantAdminRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the admin role' },
              notice: 'Grants DEFAULT_ADMIN_ROLE to set contract parameters.',
            },
            'grantExecutorRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantExecutorRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the EXECUTOR_ROLE' },
              notice: 'Grants EXECUTOR_ROLE',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'grantSafeguardTransferRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantSafeguardTransferRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the SAFEGUARD_TRANSFER_ROLE' },
              notice: 'Grants SAFEGUARD_TRANSFER_ROLE',
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'increaseAllowance(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
              ],
              name: 'increaseAllowance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.',
            },
            'isFreezed()': {
              inputs: [],
              name: 'isFreezed',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'boolean to store if the contract is freezed',
            },
            'kya()': {
              inputs: [],
              name: 'kya',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
            },
            'maxQtyOfAuthorizationLists()': {
              inputs: [],
              name: 'maxQtyOfAuthorizationLists',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'max quantity of contracts allowed',
            },
            'mustBeAuthorizedHolders(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'mustBeAuthorizedHolders',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _account: 'to be checked if its authorized' },
              returns: { _0: 'bool true if _account is authorized' },
              notice: 'checks if the user is authorized by the agent',
            },
            'name()': {
              inputs: [],
              name: 'name',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the name of the token.',
            },
            'removeAgent(address)': {
              inputs: [{ internalType: 'address', name: '_agent', type: 'address' }],
              name: 'removeAgent',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _agent: 'to be removed' },
              notice: 'Deletes an AGENT',
            },
            'removeFromAuthorizationList(address)': {
              inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
              name: 'removeFromAuthorizationList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _contractAddress: 'the address to be removed' },
              notice: 'Removes an address from the authorization list',
            },
            'removeMemberFromBlacklist(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'removeMemberFromBlacklist',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'the address to be removed from the blacklisted' },
              notice: 'Removes an address from the blacklist',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setChildChainManagerProxyAddress(address)': {
              inputs: [{ internalType: 'address', name: '_newAddress', type: 'address' }],
              name: 'setChildChainManagerProxyAddress',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAddress: 'to replace the old one' },
              notice: 'Sets childChainManagerProxy address',
            },
            'setFreezeState(bool)': {
              inputs: [{ internalType: 'bool', name: '_isFreezed', type: 'bool' }],
              name: 'setFreezeState',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _isFreezed: 'value to be set' },
              notice: 'Sets the freezeState variable to freeze the contract',
            },
            'setKya(string)': {
              inputs: [{ internalType: 'string', name: '_kya', type: 'string' }],
              name: 'setKya',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _kya: 'value to be set' },
              notice: 'Sets the verification link',
            },
            'symbol()': {
              inputs: [],
              name: 'symbol',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the symbol of the token, usually a shorter version of the name.',
            },
            'totalSupply()': {
              inputs: [],
              name: 'totalSupply',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-totalSupply}.',
            },
            'transfer(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'transfer',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.',
            },
            'transferAgentList(address,address)': {
              inputs: [
                { internalType: 'address', name: '_newAgent', type: 'address' },
                { internalType: 'address', name: '_oldAgent', type: 'address' },
              ],
              name: 'transferAgentList',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newAgent: 'to link the authorization list', _oldAgent: 'to unlink the authrization list' },
              notice: 'Transfers the authorization contracts to a new Agent',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.",
            },
            'withdraw(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
              name: 'withdraw',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
          },
        },
        'contracts/interfaces/IAssetTokenData.sol:IAssetTokenData': {
          source: 'contracts/interfaces/IAssetTokenData.sol',
          name: 'IAssetTokenData',
          title: '@notice',
          author: 'Swarm Markets',
          methods: {
            'beforeTokenTransfer(address,address)': {
              inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'address', name: '', type: 'address' },
              ],
              name: 'beforeTokenTransfer',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'checkIfTransactionIsAllowed(address,address,address,address,bytes4,bytes)': {
              inputs: [
                { internalType: 'address', name: '_caller', type: 'address' },
                { internalType: 'address', name: '_from', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'bytes4', name: '_operation', type: 'bytes4' },
                { internalType: 'bytes', name: '_data', type: 'bytes' },
              ],
              name: 'checkIfTransactionIsAllowed',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'freezeContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'freezeContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'getCurrentRate(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getCurrentRate',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'getGuardian(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getGuardian',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
            },
            'getIssuer(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'getIssuer',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'isAllowedTransferOnSafeguard(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_account', type: 'address' },
              ],
              name: 'isAllowedTransferOnSafeguard',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'isContractActive(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isContractActive',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'isContractFreezed(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isContractFreezed',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'mustBeAuthorizedHolders(address,address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_from', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'mustBeAuthorizedHolders',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'onlyActiveContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyActiveContract',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
            },
            'onlyIssuer(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuer',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
            },
            'onlyIssuerOrAgent(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuerOrAgent',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
            },
            'onlyIssuerOrGuardian(address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_functionCaller', type: 'address' },
              ],
              name: 'onlyIssuerOrGuardian',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
            },
            'onlyStoredToken(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyStoredToken',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
            },
            'onlyUnfreezedContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'onlyUnfreezedContract',
              outputs: [],
              stateMutability: 'view',
              type: 'function',
            },
            'registerAssetToken(address,address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_issuer', type: 'address' },
                { internalType: 'address', name: '_guardian', type: 'address' },
              ],
              name: 'registerAssetToken',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'setContractToSafeguard(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'setContractToSafeguard',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'unfreezeContract(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'unfreezeContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'update(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'update',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
          },
        },
        'contracts/interfaces/IAssetTokenFactory.sol:IAssetTokenFactory': {
          source: 'contracts/interfaces/IAssetTokenFactory.sol',
          name: 'IAssetTokenFactory',
          title: 'IAssetToken Factory interface',
          author: 'Swarm Markets',
          notice: 'Provided interface to interact with any contract to checkauthorization to a certain transaction',
          methods: {
            'isTokenEnabled(address)': {
              inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
              name: 'isTokenEnabled',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'registerAssetToken(address,address,address)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_issuer', type: 'address' },
                { internalType: 'address', name: '_guardian', type: 'address' },
              ],
              name: 'registerAssetToken',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
          },
        },
        'contracts/interfaces/IAuthorizationContract.sol:IAuthorizationContract': {
          source: 'contracts/interfaces/IAuthorizationContract.sol',
          name: 'IAuthorizationContract',
          title: 'IAuthorizationContracts',
          author: 'Swarm Markets',
          notice: 'Provided interface to interact with any contract to checkauthorization to a certain transaction',
          methods: {
            'isAccountAuthorized(address)': {
              inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
              name: 'isAccountAuthorized',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'isTxAuthorized(address,address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'address', name: '_from', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'isTxAuthorized',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
          },
        },
        'contracts/interfaces/IERC1155Burnable.sol:IERC1155Burnable': {
          source: 'contracts/interfaces/IERC1155Burnable.sol',
          name: 'IERC1155Burnable',
          title: 'IERC1155Burnable',
          author: 'Protofire',
          details: 'IERC1155Burnable Interface.',
          events: {
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
            },
            'TransferBatch(address,address,address,uint256[],uint256[])': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !1, internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
                { indexed: !1, internalType: 'uint256[]', name: 'values', type: 'uint256[]' },
              ],
              name: 'TransferBatch',
              type: 'event',
            },
            'TransferSingle(address,address,address,uint256,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'id', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'TransferSingle',
              type: 'event',
            },
            'URI(string,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'string', name: 'value', type: 'string' },
                { indexed: !0, internalType: 'uint256', name: 'id', type: 'uint256' },
              ],
              name: 'URI',
              type: 'event',
            },
          },
          methods: {
            'balanceOf(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'id', type: 'uint256' },
              ],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.',
            },
            'balanceOfBatch(address[],uint256[])': {
              inputs: [
                { internalType: 'address[]', name: 'accounts', type: 'address[]' },
                { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
              ],
              name: 'balanceOfBatch',
              outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.',
            },
            'burn(address,uint256,uint256)': {
              inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'id', type: 'uint256' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burn erc 1155 Token',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.",
            },
            'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
                { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeBatchTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.',
            },
            'safeTransferFrom(address,address,uint256,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'id', type: 'uint256' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must be have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.",
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.",
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.',
            },
          },
        },
        'contracts/interfaces/IEurPriceFeed.sol:IEurPriceFeed': {
          source: 'contracts/interfaces/IEurPriceFeed.sol',
          name: 'IEurPriceFeed',
          title: 'IEurPriceFeed',
          author: 'Protofire',
          details: 'Interface to be implemented by any EurPriceFeed logic contract used in the protocol.',
          methods: {
            'calculateAmount(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_asset', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
              ],
              name: 'calculateAmount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Gets how many EUR represents the `_amount` of `_asset`.',
              params: { _amount: 'amount of `_asset`.', _asset: 'address of asset to get the price.' },
            },
            'getPrice(address)': {
              inputs: [{ internalType: 'address', name: '_asset', type: 'address' }],
              name: 'getPrice',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Gets the price a `_asset` in EUR.',
              params: { _asset: 'address of asset to get the price.' },
            },
            'setAssetFeed(address,address)': {
              inputs: [
                { internalType: 'address', name: '_asset', type: 'address' },
                { internalType: 'address', name: '_feed', type: 'address' },
              ],
              name: 'setAssetFeed',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Sets feed addresse for a given asset.',
              params: { _asset: 'Assets address.', _feed: 'Asset/ETH price feed.' },
            },
            'setAssetsFeeds(address[],address[])': {
              inputs: [
                { internalType: 'address[]', name: '_assets', type: 'address[]' },
                { internalType: 'address[]', name: '_feeds', type: 'address[]' },
              ],
              name: 'setAssetsFeeds',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Sets feed addresses for a given group of assets.',
              params: { _assets: 'Array of assets addresses.', _feeds: 'Array of asset/ETH price feeds.' },
            },
          },
        },
        'contracts/interfaces/IPermissionManager.sol:IPermissionManager': {
          source: 'contracts/interfaces/IPermissionManager.sol',
          name: 'IPermissionManager',
          title: 'IPermissionManager',
          author: 'Swarm Markets',
          notice: 'Provided interface to interact with Swarm Permission Managerauthorization to a given address',
          methods: {
            'assignItem(uint256,address[])': {
              inputs: [
                { internalType: 'uint256', name: '_itemId', type: 'uint256' },
                { internalType: 'address[]', name: '_accounts', type: 'address[]' },
              ],
              name: 'assignItem',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'editLastSecurityTokenId(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_newId', type: 'uint256' }],
              name: 'editLastSecurityTokenId',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'generateSecurityTokenId(address)': {
              inputs: [{ internalType: 'address', name: '_tokenContract', type: 'address' }],
              name: 'generateSecurityTokenId',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'getSecurityTokenId(address)': {
              inputs: [{ internalType: 'address', name: '_tokenContract', type: 'address' }],
              name: 'getSecurityTokenId',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'hasSecurityToken(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_user', type: 'address' },
                { internalType: 'uint256', name: 'itemId', type: 'uint256' },
              ],
              name: 'hasSecurityToken',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'hasTier2(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'hasTier2',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'isRejected(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'isRejected',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
            'isSuspended(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'isSuspended',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
            },
          },
        },
        'contracts/interfaces/IXTokenWrapper.sol:IXTokenWrapper': {
          source: 'contracts/interfaces/IXTokenWrapper.sol',
          name: 'IXTokenWrapper',
          title: 'IXTokenWrapper',
          author: 'Protofire',
          details: 'XTokenWrapper Interface.',
          methods: {
            'tokenToXToken(address)': {
              inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
              name: 'tokenToXToken',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Token to xToken registry.',
            },
          },
        },
        'contracts/libraries/DSMath.sol:DSMath': {
          source: 'contracts/libraries/DSMath.sol',
          name: 'DSMath',
          methods: {
            'RAY()': {
              inputs: [],
              name: 'RAY',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'WAD()': {
              inputs: [],
              name: 'WAD',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'c_0xf9c6bbac(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0xf9c6bbac', type: 'bytes32' }],
              name: 'c_0xf9c6bbac',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
          },
        },
        'contracts/redemptionQueue/RedemptionQueue.sol:RedemptionQueue': {
          source: 'contracts/redemptionQueue/RedemptionQueue.sol',
          name: 'RedemptionQueue',
          title: 'Redemption Queue for Asset Tokens Contracts',
          author: 'Swarm Markets',
          notice: 'Contract to manage a queue of token deposits',
          events: {
            'AuthorizationAddressSet(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_previousAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
              ],
              name: 'AuthorizationAddressSet',
              type: 'event',
              notice: 'Emitted when authorizationContractAddress is set',
            },
            'RedemptionCanceled(uint256,string,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !1, internalType: 'string', name: '_motive', type: 'string' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RedemptionCanceled',
              type: 'event',
              notice: 'Emitted when a Redemption request is canceled',
            },
            'RedemptionExecuted(uint256,address,address,uint256,uint256,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_requester', type: 'address' },
                { indexed: !1, internalType: 'address', name: '_assetAddress', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_asset1155Id', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: '_assetAmount', type: 'uint256' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'bool', name: '_success', type: 'bool' },
              ],
              name: 'RedemptionExecuted',
              type: 'event',
              notice: 'Emitted when a Redemption is executed',
            },
            'RedemptionNotExecuted(uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RedemptionNotExecuted',
              type: 'event',
              notice: 'Emitted when Redemption is skipped from its execution',
            },
            'RedemptionRequested(uint256,address,uint256,uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { indexed: !1, internalType: 'address', name: '_assetAddress', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_assetId', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: '_assetAmount', type: 'uint256' },
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RedemptionRequested',
              type: 'event',
              notice: 'Emitted when Requesting a Redemption',
            },
            'RemovedFromWhitelist1155Token(address,uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'address', name: '_asset', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_assetId', type: 'uint256' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'RemovedFromWhitelist1155Token',
              type: 'event',
              notice: 'Emitted when removing an 1155 token from the whitelist',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
            },
            'Whitelisted1155Token(address,uint256,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !1, internalType: 'address', name: '_asset', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: '_assetId', type: 'uint256' },
                { indexed: !1, internalType: 'address', name: '_caller', type: 'address' },
              ],
              name: 'Whitelisted1155Token',
              type: 'event',
              notice: 'Emitted when whitelisting an 1155 token',
            },
            'XTokenWrapperAddressSet(address,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: '_caller', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_previousAddress', type: 'address' },
                { indexed: !0, internalType: 'address', name: '_newAddress', type: 'address' },
              ],
              name: 'XTokenWrapperAddressSet',
              type: 'event',
              notice: 'Emitted when xTokenWrapperAddress is set',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'allowed1155Assets(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'uint256', name: '', type: 'uint256' },
              ],
              name: 'allowed1155Assets',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'allowed Nft assets',
            },
            'authorizationContractAddress()': {
              inputs: [],
              name: 'authorizationContractAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'Address of the Authorization contract',
            },
            'c_0x463e1079(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'c__0x463e1079', type: 'bytes32' }],
              name: 'c_0x463e1079',
              outputs: [],
              stateMutability: 'pure',
              type: 'function',
            },
            'cancelRedemptionRequest(uint256,string)': {
              inputs: [
                { internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' },
                { internalType: 'string', name: '_motive', type: 'string' },
              ],
              name: 'cancelRedemptionRequest',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _motive: 'motive of the cancelation',
                _redemptionRequestID: 'redemption request ID to be referenced in the mapping',
              },
              notice: 'Cancel Redemption Request',
            },
            'currentRedemptionRequestID()': {
              inputs: [],
              name: 'currentRedemptionRequestID',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'executeRedemption(uint256[],string)': {
              inputs: [
                { internalType: 'uint256[]', name: '_redemptionRequests', type: 'uint256[]' },
                { internalType: 'string', name: '_referenceTo', type: 'string' },
              ],
              name: 'executeRedemption',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _redemptionRequests: 'array of redemption requests ID to be referenced in the mapping',
                _referenceTo: 'the transaction ID',
              },
              returns: { _0: 'bool showing if there was an invalid ID involved' },
              notice: 'Execute Redemption Requests',
            },
            'getRedemptionRequestByID(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_redemptionRequestID', type: 'uint256' }],
              name: 'getRedemptionRequestByID',
              outputs: [
                {
                  components: [
                    { internalType: 'address', name: 'requester', type: 'address' },
                    { internalType: 'string', name: 'referenceTo', type: 'string' },
                    { internalType: 'address', name: 'assetAddress', type: 'address' },
                    { internalType: 'uint256', name: 'asset1155Id', type: 'uint256' },
                    { internalType: 'uint256', name: 'assetAmount', type: 'uint256' },
                    { internalType: 'bool', name: 'completed', type: 'bool' },
                    { internalType: 'address', name: 'canceledBy', type: 'address' },
                    { internalType: 'string', name: 'cancelMotive', type: 'string' },
                  ],
                  internalType: 'struct RedemptionQueue.RedemptionRequest',
                  name: '',
                  type: 'tuple',
                },
              ],
              stateMutability: 'view',
              type: 'function',
              params: { _redemptionRequestID: 'Id of the redemption request' },
              returns: { _0: 'RedemptionRequest structure (the redemption request structure)' },
              notice: 'Get the Redemption Request by ID',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'getRoleMember(bytes32,uint256)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
              ],
              name: 'getRoleMember',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.',
            },
            'getRoleMemberCount(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleMemberCount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.',
            },
            'grantAdminRole(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'grantAdminRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _account: 'to be granted the admin role' },
              notice: 'Grants DEFAULT_ADMIN_ROLE to set contract parameters.',
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'initialize(address,address)': {
              inputs: [
                { internalType: 'address', name: '_authorizationContractAddress', type: 'address' },
                { internalType: 'address', name: '_xTokenWrapperAddress', type: 'address' },
              ],
              name: 'initialize',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _authorizationContractAddress: 'sets the _authorizationContractAddress to check active accounts',
                _xTokenWrapperAddress: 'sets the xTokenWrapper address',
              },
              notice: 'Initalize the contract.',
            },
            'isAuthorized(address)': {
              inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
              name: 'isAuthorized',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              params: { _account: 'the address to be ckecked' },
              returns: { _0: 'bool true if `account` is authorized' },
              notice: 'Returns true if `account` is authorized in Swarm Ecosystem',
            },
            'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)': {
              inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'uint256[]', name: '', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '', type: 'uint256[]' },
                { internalType: 'bytes', name: '', type: 'bytes' },
              ],
              name: 'onERC1155BatchReceived',
              outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'onERC1155Received(address,address,uint256,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'bytes', name: '', type: 'bytes' },
              ],
              name: 'onERC1155Received',
              outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
              stateMutability: 'nonpayable',
              type: 'function',
            },
            'redemptionRequests(uint256)': {
              inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              name: 'redemptionRequests',
              outputs: [
                { internalType: 'address', name: 'requester', type: 'address' },
                { internalType: 'string', name: 'referenceTo', type: 'string' },
                { internalType: 'address', name: 'assetAddress', type: 'address' },
                { internalType: 'uint256', name: 'asset1155Id', type: 'uint256' },
                { internalType: 'uint256', name: 'assetAmount', type: 'uint256' },
                { internalType: 'bool', name: 'completed', type: 'bool' },
                { internalType: 'address', name: 'canceledBy', type: 'address' },
                { internalType: 'string', name: 'cancelMotive', type: 'string' },
              ],
              stateMutability: 'view',
              type: 'function',
              notice: 'Redemption Requests mapping and last ID',
            },
            'removeFromWhitelist1155Token(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_asset', type: 'address' },
                { internalType: 'uint256', name: '_assetId', type: 'uint256' },
              ],
              name: 'removeFromWhitelist1155Token',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _asset: 'address of the contract who minted the token', _assetId: 'ID of the 1155 token' },
              notice: 'Remove from Whitelist an ERC1155 token',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.",
            },
            'requestRedemption(address,uint256,uint256,string)': {
              inputs: [
                { internalType: 'address', name: '_asset', type: 'address' },
                { internalType: 'uint256', name: '_assetId', type: 'uint256' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
                { internalType: 'string', name: '_referenceTo', type: 'string' },
              ],
              name: 'requestRedemption',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: {
                _amount: 'the amount of the Token to be redeemed',
                _asset: 'the address of Asset to be redeemed',
                _assetId: 'the ID of the Asset',
                _referenceTo: 'the off chain hash of the redemption transaction',
              },
              returns: { _0: 'uint256 redemption request ID to be referenced in the mapping' },
              notice: 'Requests an amount to redeem of a certain asset',
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.",
            },
            'setAuthorizationContractAddress(address)': {
              inputs: [{ internalType: 'address', name: '_authorizationContractAddress', type: 'address' }],
              name: 'setAuthorizationContractAddress',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _authorizationContractAddress: 'authorizationContractAddress' },
              notice: 'Sets `authorizationContractAddress` as the permission contract to check accounts',
            },
            'setXTokenWrapper(address)': {
              inputs: [{ internalType: 'address', name: '_xTokenWrapperAddress', type: 'address' }],
              name: 'setXTokenWrapper',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _xTokenWrapperAddress: 'xTokenWrapperAddress contract' },
              notice: 'Sets `_xTokenWrapperAddress` as the xToken Wrapper module.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.',
            },
            'whitelist1155Token(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '_asset', type: 'address' },
                { internalType: 'uint256', name: '_assetId', type: 'uint256' },
              ],
              name: 'whitelist1155Token',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _asset: 'address of the contract who minted the token', _assetId: 'ID of the 1155 token' },
              notice: 'Whitelist an ERC1155 token',
            },
            'xTokenWrapperAddress()': {
              inputs: [],
              name: 'xTokenWrapperAddress',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              notice: 'Address of the xTokenWrapper contract',
            },
          },
        },
      };
      new ho({
        el: '#app',
        router: new ru({
          routes: [
            { path: '/', component: Ou, props: () => ({ json: $u }) },
            { path: '*', component: Cu, props: e => ({ json: $u[e.path.slice(1)] }) },
          ],
        }),
        mounted() {
          document.dispatchEvent(new Event('render-event'));
        },
        render: e => e(uu),
      });
    })();
})();
