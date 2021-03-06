!(function (e, i) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = i())
    : 'function' == typeof define && define.amd
    ? define('wikipediaPreview', [], i)
    : 'object' == typeof exports
    ? (exports.wikipediaPreview = i())
    : (e.wikipediaPreview = i());
})(window, function () {
  return (function (e) {
    var i = {};
    function n(r) {
      if (i[r]) return i[r].exports;
      var a = (i[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = e),
      (n.c = i),
      (n.d = function (e, i, r) {
        n.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, i) {
        if ((1 & i && (e = n(e)), 8 & i)) return e;
        if (4 & i && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & i && 'string' != typeof e)
        )
          for (var a in e)
            n.d(
              r,
              a,
              function (i) {
                return e[i];
              }.bind(null, a)
            );
        return r;
      }),
      (n.n = function (e) {
        var i =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(i, 'a', i), i;
      }),
      (n.o = function (e, i) {
        return Object.prototype.hasOwnProperty.call(e, i);
      }),
      (n.p = ''),
      n((n.s = 96))
    );
  })([
    function (e, i, n) {
      'use strict';
      var r,
        a = function () {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        t = (function () {
          var e = {};
          return function (i) {
            if (void 0 === e[i]) {
              var n = document.querySelector(i);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[i] = n;
            }
            return e[i];
          };
        })(),
        o = [];
      function l(e) {
        for (var i = -1, n = 0; n < o.length; n++)
          if (o[n].identifier === e) {
            i = n;
            break;
          }
        return i;
      }
      function s(e, i) {
        for (var n = {}, r = [], a = 0; a < e.length; a++) {
          var t = e[a],
            s = i.base ? t[0] + i.base : t[0],
            d = n[s] || 0,
            g = ''.concat(s, ' ').concat(d);
          n[s] = d + 1;
          var c = l(g),
            u = { css: t[1], media: t[2], sourceMap: t[3] };
          -1 !== c
            ? (o[c].references++, o[c].updater(u))
            : o.push({ identifier: g, updater: w(u, i), references: 1 }),
            r.push(g);
        }
        return r;
      }
      function d(e) {
        var i = document.createElement('style'),
          r = e.attributes || {};
        if (void 0 === r.nonce) {
          var a = n.nc;
          a && (r.nonce = a);
        }
        if (
          (Object.keys(r).forEach(function (e) {
            i.setAttribute(e, r[e]);
          }),
          'function' == typeof e.insert)
        )
          e.insert(i);
        else {
          var o = t(e.insert || 'head');
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(i);
        }
        return i;
      }
      var g,
        c =
          ((g = []),
          function (e, i) {
            return (g[e] = i), g.filter(Boolean).join('\n');
          });
      function u(e, i, n, r) {
        var a = n
          ? ''
          : r.media
          ? '@media '.concat(r.media, ' {').concat(r.css, '}')
          : r.css;
        if (e.styleSheet) e.styleSheet.cssText = c(i, a);
        else {
          var t = document.createTextNode(a),
            o = e.childNodes;
          o[i] && e.removeChild(o[i]),
            o.length ? e.insertBefore(t, o[i]) : e.appendChild(t);
        }
      }
      function p(e, i, n) {
        var r = n.css,
          a = n.media,
          t = n.sourceMap;
        if (
          (a ? e.setAttribute('media', a) : e.removeAttribute('media'),
          t &&
            'undefined' != typeof btoa &&
            (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              ' */'
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var m = null,
        f = 0;
      function w(e, i) {
        var n, r, a;
        if (i.singleton) {
          var t = f++;
          (n = m || (m = d(i))),
            (r = u.bind(null, n, t, !1)),
            (a = u.bind(null, n, t, !0));
        } else
          (n = d(i)),
            (r = p.bind(null, n, i)),
            (a = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          r(e),
          function (i) {
            if (i) {
              if (
                i.css === e.css &&
                i.media === e.media &&
                i.sourceMap === e.sourceMap
              )
                return;
              r((e = i));
            } else a();
          }
        );
      }
      e.exports = function (e, i) {
        (i = i || {}).singleton ||
          'boolean' == typeof i.singleton ||
          (i.singleton = a());
        var n = s((e = e || []), i);
        return function (e) {
          if (
            ((e = e || []),
            '[object Array]' === Object.prototype.toString.call(e))
          ) {
            for (var r = 0; r < n.length; r++) {
              var a = l(n[r]);
              o[a].references--;
            }
            for (var t = s(e, i), d = 0; d < n.length; d++) {
              var g = l(n[d]);
              0 === o[g].references && (o[g].updater(), o.splice(g, 1));
            }
            n = t;
          }
        };
      };
    },
    function (e, i, n) {
      'use strict';
      e.exports = function (e) {
        var i = [];
        return (
          (i.toString = function () {
            return this.map(function (i) {
              var n = (function (e, i) {
                var n = e[1] || '',
                  r = e[3];
                if (!r) return n;
                if (i && 'function' == typeof btoa) {
                  var a =
                      ((o = r),
                      (l = btoa(
                        unescape(encodeURIComponent(JSON.stringify(o)))
                      )),
                      (s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        l
                      )),
                      '/*# '.concat(s, ' */')),
                    t = r.sources.map(function (e) {
                      return '/*# sourceURL='
                        .concat(r.sourceRoot || '')
                        .concat(e, ' */');
                    });
                  return [n].concat(t).concat([a]).join('\n');
                }
                var o, l, s;
                return [n].join('\n');
              })(i, e);
              return i[2] ? '@media '.concat(i[2], ' {').concat(n, '}') : n;
            }).join('');
          }),
          (i.i = function (e, n, r) {
            'string' == typeof e && (e = [[null, e, '']]);
            var a = {};
            if (r)
              for (var t = 0; t < this.length; t++) {
                var o = this[t][0];
                null != o && (a[o] = !0);
              }
            for (var l = 0; l < e.length; l++) {
              var s = [].concat(e[l]);
              (r && a[s[0]]) ||
                (n &&
                  (s[2]
                    ? (s[2] = ''.concat(n, ' and ').concat(s[2]))
                    : (s[2] = n)),
                i.push(s));
            }
          }),
          i
        );
      };
    },
    function (e) {
      e.exports = JSON.parse(
        '{"continue-reading":"Continue Reading","gallery-loading-error":"There was an error loading this image","gallery-loading-error-offline":"No internet connection available.","gallery-loading-error-refresh":"Refresh","gallery-loading-still":"Still loading","gallery-unknown-author":"Author unknown","preview-error-message":"There was an issue while displaying this preview.","preview-console-error-message":"Preview unavailable for article \'$1\' (Language: $2)","read-on-wiki":"Read on Wikipedia","read-more":"Read more on Wikipedia","preview-disambiguation-message":"Title <strong>$1</strong> is related to more than one article on Wikipedia.","preview-offline-message":"No internet connection available.","preview-offline-cta":"Try again"}'
      );
    },
    function (e, i, n) {
      var r = n(0),
        a = n(91);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var t = { insert: 'head', singleton: !1 };
      r(a, t);
      e.exports = a.locals || {};
    },
    function (e, i, n) {
      /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
      e.exports = (function () {
        'use strict';
        var e = Object.hasOwnProperty,
          i = Object.setPrototypeOf,
          n = Object.isFrozen,
          r = Object.freeze,
          a = Object.seal,
          t = Object.create,
          o = 'undefined' != typeof Reflect && Reflect,
          l = o.apply,
          s = o.construct;
        l ||
          (l = function (e, i, n) {
            return e.apply(i, n);
          }),
          r ||
            (r = function (e) {
              return e;
            }),
          a ||
            (a = function (e) {
              return e;
            }),
          s ||
            (s = function (e, i) {
              return new (Function.prototype.bind.apply(
                e,
                [null].concat(
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var i = 0, n = Array(e.length); i < e.length; i++)
                        n[i] = e[i];
                      return n;
                    }
                    return Array.from(e);
                  })(i)
                )
              ))();
            });
        var d,
          g = x(Array.prototype.forEach),
          c = x(Array.prototype.indexOf),
          u = x(Array.prototype.pop),
          p = x(Array.prototype.push),
          m = x(Array.prototype.slice),
          f = x(String.prototype.toLowerCase),
          w = x(String.prototype.match),
          y = x(String.prototype.replace),
          h = x(String.prototype.indexOf),
          v = x(String.prototype.trim),
          k = x(RegExp.prototype.test),
          b =
            ((d = TypeError),
            function () {
              for (var e = arguments.length, i = Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
              return s(d, i);
            });
        function x(e) {
          return function (i) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1;
              a < n;
              a++
            )
              r[a - 1] = arguments[a];
            return l(e, i, r);
          };
        }
        function M(e, r) {
          i && i(e, null);
          for (var a = r.length; a--; ) {
            var t = r[a];
            if ('string' == typeof t) {
              var o = f(t);
              o !== t && (n(r) || (r[a] = o), (t = o));
            }
            e[t] = !0;
          }
          return e;
        }
        function I(i) {
          var n = t(null),
            r = void 0;
          for (r in i) l(e, i, [r]) && (n[r] = i[r]);
          return n;
        }
        var j = r([
            'a',
            'abbr',
            'acronym',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'bdi',
            'bdo',
            'big',
            'blink',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'center',
            'cite',
            'code',
            'col',
            'colgroup',
            'content',
            'data',
            'datalist',
            'dd',
            'decorator',
            'del',
            'details',
            'dfn',
            'dir',
            'div',
            'dl',
            'dt',
            'element',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'font',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meter',
            'nav',
            'nobr',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'section',
            'select',
            'shadow',
            'small',
            'source',
            'spacer',
            'span',
            'strike',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'template',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'track',
            'tt',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
          ]),
          N = r([
            'svg',
            'a',
            'altglyph',
            'altglyphdef',
            'altglyphitem',
            'animatecolor',
            'animatemotion',
            'animatetransform',
            'audio',
            'canvas',
            'circle',
            'clippath',
            'defs',
            'desc',
            'ellipse',
            'filter',
            'font',
            'g',
            'glyph',
            'glyphref',
            'hkern',
            'image',
            'line',
            'lineargradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialgradient',
            'rect',
            'stop',
            'style',
            'switch',
            'symbol',
            'text',
            'textpath',
            'title',
            'tref',
            'tspan',
            'video',
            'view',
            'vkern',
          ]),
          A = r([
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
          ]),
          S = r([
            'math',
            'menclose',
            'merror',
            'mfenced',
            'mfrac',
            'mglyph',
            'mi',
            'mlabeledtr',
            'mmultiscripts',
            'mn',
            'mo',
            'mover',
            'mpadded',
            'mphantom',
            'mroot',
            'mrow',
            'ms',
            'mspace',
            'msqrt',
            'mstyle',
            'msub',
            'msup',
            'msubsup',
            'mtable',
            'mtd',
            'mtext',
            'mtr',
            'munder',
            'munderover',
          ]),
          L = r(['#text']),
          T = r([
            'accept',
            'action',
            'align',
            'alt',
            'autocapitalize',
            'autocomplete',
            'autopictureinpicture',
            'autoplay',
            'background',
            'bgcolor',
            'border',
            'capture',
            'cellpadding',
            'cellspacing',
            'checked',
            'cite',
            'class',
            'clear',
            'color',
            'cols',
            'colspan',
            'controls',
            'controlslist',
            'coords',
            'crossorigin',
            'datetime',
            'decoding',
            'default',
            'dir',
            'disabled',
            'disablepictureinpicture',
            'disableremoteplayback',
            'download',
            'draggable',
            'enctype',
            'enterkeyhint',
            'face',
            'for',
            'headers',
            'height',
            'hidden',
            'high',
            'href',
            'hreflang',
            'id',
            'inputmode',
            'integrity',
            'ismap',
            'kind',
            'label',
            'lang',
            'list',
            'loading',
            'loop',
            'low',
            'max',
            'maxlength',
            'media',
            'method',
            'min',
            'minlength',
            'multiple',
            'muted',
            'name',
            'noshade',
            'novalidate',
            'nowrap',
            'open',
            'optimum',
            'pattern',
            'placeholder',
            'playsinline',
            'poster',
            'preload',
            'pubdate',
            'radiogroup',
            'readonly',
            'rel',
            'required',
            'rev',
            'reversed',
            'role',
            'rows',
            'rowspan',
            'spellcheck',
            'scope',
            'selected',
            'shape',
            'size',
            'sizes',
            'span',
            'srclang',
            'start',
            'src',
            'srcset',
            'step',
            'style',
            'summary',
            'tabindex',
            'title',
            'translate',
            'type',
            'usemap',
            'valign',
            'value',
            'width',
            'xmlns',
          ]),
          D = r([
            'accent-height',
            'accumulate',
            'additive',
            'alignment-baseline',
            'ascent',
            'attributename',
            'attributetype',
            'azimuth',
            'basefrequency',
            'baseline-shift',
            'begin',
            'bias',
            'by',
            'class',
            'clip',
            'clippathunits',
            'clip-path',
            'clip-rule',
            'color',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'cx',
            'cy',
            'd',
            'dx',
            'dy',
            'diffuseconstant',
            'direction',
            'display',
            'divisor',
            'dur',
            'edgemode',
            'elevation',
            'end',
            'fill',
            'fill-opacity',
            'fill-rule',
            'filter',
            'filterunits',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'fx',
            'fy',
            'g1',
            'g2',
            'glyph-name',
            'glyphref',
            'gradientunits',
            'gradienttransform',
            'height',
            'href',
            'id',
            'image-rendering',
            'in',
            'in2',
            'k',
            'k1',
            'k2',
            'k3',
            'k4',
            'kerning',
            'keypoints',
            'keysplines',
            'keytimes',
            'lang',
            'lengthadjust',
            'letter-spacing',
            'kernelmatrix',
            'kernelunitlength',
            'lighting-color',
            'local',
            'marker-end',
            'marker-mid',
            'marker-start',
            'markerheight',
            'markerunits',
            'markerwidth',
            'maskcontentunits',
            'maskunits',
            'max',
            'mask',
            'media',
            'method',
            'mode',
            'min',
            'name',
            'numoctaves',
            'offset',
            'operator',
            'opacity',
            'order',
            'orient',
            'orientation',
            'origin',
            'overflow',
            'paint-order',
            'path',
            'pathlength',
            'patterncontentunits',
            'patterntransform',
            'patternunits',
            'points',
            'preservealpha',
            'preserveaspectratio',
            'primitiveunits',
            'r',
            'rx',
            'ry',
            'radius',
            'refx',
            'refy',
            'repeatcount',
            'repeatdur',
            'restart',
            'result',
            'rotate',
            'scale',
            'seed',
            'shape-rendering',
            'specularconstant',
            'specularexponent',
            'spreadmethod',
            'startoffset',
            'stddeviation',
            'stitchtiles',
            'stop-color',
            'stop-opacity',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke',
            'stroke-width',
            'style',
            'surfacescale',
            'systemlanguage',
            'tabindex',
            'targetx',
            'targety',
            'transform',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'textlength',
            'type',
            'u1',
            'u2',
            'unicode',
            'values',
            'viewbox',
            'visibility',
            'version',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'width',
            'word-spacing',
            'wrap',
            'writing-mode',
            'xchannelselector',
            'ychannelselector',
            'x',
            'x1',
            'x2',
            'xmlns',
            'y',
            'y1',
            'y2',
            'z',
            'zoomandpan',
          ]),
          z = r([
            'accent',
            'accentunder',
            'align',
            'bevelled',
            'close',
            'columnsalign',
            'columnlines',
            'columnspan',
            'denomalign',
            'depth',
            'dir',
            'display',
            'displaystyle',
            'encoding',
            'fence',
            'frame',
            'height',
            'href',
            'id',
            'largeop',
            'length',
            'linethickness',
            'lspace',
            'lquote',
            'mathbackground',
            'mathcolor',
            'mathsize',
            'mathvariant',
            'maxsize',
            'minsize',
            'movablelimits',
            'notation',
            'numalign',
            'open',
            'rowalign',
            'rowlines',
            'rowspacing',
            'rowspan',
            'rspace',
            'rquote',
            'scriptlevel',
            'scriptminsize',
            'scriptsizemultiplier',
            'selection',
            'separator',
            'separators',
            'stretchy',
            'subscriptshift',
            'supscriptshift',
            'symmetric',
            'voffset',
            'width',
            'xmlns',
          ]),
          O = r([
            'xlink:href',
            'xml:id',
            'xlink:title',
            'xml:space',
            'xmlns:xlink',
          ]),
          E = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
          C = a(/<%[\s\S]*|[\s\S]*%>/gm),
          P = a(/^data-[\-\w.\u00B7-\uFFFF]/),
          W = a(/^aria-[\-\w]+$/),
          R = a(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          ),
          G = a(/^(?:\w+script|data):/i),
          H = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                };
        function Y(e) {
          if (Array.isArray(e)) {
            for (var i = 0, n = Array(e.length); i < e.length; i++) n[i] = e[i];
            return n;
          }
          return Array.from(e);
        }
        var B = function () {
            return 'undefined' == typeof window ? null : window;
          },
          J = function (e, i) {
            if (
              'object' !== (void 0 === e ? 'undefined' : Z(e)) ||
              'function' != typeof e.createPolicy
            )
              return null;
            var n = null;
            i.currentScript &&
              i.currentScript.hasAttribute('data-tt-policy-suffix') &&
              (n = i.currentScript.getAttribute('data-tt-policy-suffix'));
            var r = 'dompurify' + (n ? '#' + n : '');
            try {
              return e.createPolicy(r, {
                createHTML: function (e) {
                  return e;
                },
              });
            } catch (e) {
              return (
                console.warn(
                  'TrustedTypes policy ' + r + ' could not be created.'
                ),
                null
              );
            }
          };
        return (function e() {
          var i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : B(),
            n = function (i) {
              return e(i);
            };
          if (
            ((n.version = '2.1.0'),
            (n.removed = []),
            !i || !i.document || 9 !== i.document.nodeType)
          )
            return (n.isSupported = !1), n;
          var a = i.document,
            t = !1,
            o = i.document,
            l = i.DocumentFragment,
            s = i.HTMLTemplateElement,
            d = i.Node,
            x = i.NodeFilter,
            U = i.NamedNodeMap,
            F = void 0 === U ? i.NamedNodeMap || i.MozNamedAttrMap : U,
            $ = i.Text,
            q = i.Comment,
            Q = i.DOMParser,
            _ = i.trustedTypes;
          if ('function' == typeof s) {
            var X = o.createElement('template');
            X.content &&
              X.content.ownerDocument &&
              (o = X.content.ownerDocument);
          }
          var V = J(_, a),
            K = V && De ? V.createHTML('') : '',
            ee = o,
            ie = ee.implementation,
            ne = ee.createNodeIterator,
            re = ee.getElementsByTagName,
            ae = ee.createDocumentFragment,
            te = a.importNode,
            oe = {};
          try {
            oe = I(o).documentMode ? o.documentMode : {};
          } catch (e) {}
          var le = {};
          n.isSupported = ie && void 0 !== ie.createHTMLDocument && 9 !== oe;
          var se = E,
            de = C,
            ge = P,
            ce = W,
            ue = G,
            pe = H,
            me = R,
            fe = null,
            we = M({}, [].concat(Y(j), Y(N), Y(A), Y(S), Y(L))),
            ye = null,
            he = M({}, [].concat(Y(T), Y(D), Y(z), Y(O))),
            ve = null,
            ke = null,
            be = !0,
            xe = !0,
            Me = !1,
            Ie = !1,
            je = !1,
            Ne = !1,
            Ae = !1,
            Se = !1,
            Le = !1,
            Te = !1,
            De = !1,
            ze = !0,
            Oe = !0,
            Ee = !1,
            Ce = {},
            Pe = M({}, [
              'annotation-xml',
              'audio',
              'colgroup',
              'desc',
              'foreignobject',
              'head',
              'iframe',
              'math',
              'mi',
              'mn',
              'mo',
              'ms',
              'mtext',
              'noembed',
              'noframes',
              'plaintext',
              'script',
              'style',
              'svg',
              'template',
              'thead',
              'title',
              'video',
              'xmp',
            ]),
            We = null,
            Re = M({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
            Ge = null,
            He = M({}, [
              'alt',
              'class',
              'for',
              'id',
              'label',
              'name',
              'pattern',
              'placeholder',
              'summary',
              'title',
              'value',
              'style',
              'xmlns',
            ]),
            Ze = null,
            Ye = o.createElement('form'),
            Be = function (e) {
              (Ze && Ze === e) ||
                ((e && 'object' === (void 0 === e ? 'undefined' : Z(e))) ||
                  (e = {}),
                (e = I(e)),
                (fe = 'ALLOWED_TAGS' in e ? M({}, e.ALLOWED_TAGS) : we),
                (ye = 'ALLOWED_ATTR' in e ? M({}, e.ALLOWED_ATTR) : he),
                (Ge =
                  'ADD_URI_SAFE_ATTR' in e
                    ? M(I(He), e.ADD_URI_SAFE_ATTR)
                    : He),
                (We =
                  'ADD_DATA_URI_TAGS' in e
                    ? M(I(Re), e.ADD_DATA_URI_TAGS)
                    : Re),
                (ve = 'FORBID_TAGS' in e ? M({}, e.FORBID_TAGS) : {}),
                (ke = 'FORBID_ATTR' in e ? M({}, e.FORBID_ATTR) : {}),
                (Ce = 'USE_PROFILES' in e && e.USE_PROFILES),
                (be = !1 !== e.ALLOW_ARIA_ATTR),
                (xe = !1 !== e.ALLOW_DATA_ATTR),
                (Me = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (Ie = e.SAFE_FOR_TEMPLATES || !1),
                (je = e.WHOLE_DOCUMENT || !1),
                (Se = e.RETURN_DOM || !1),
                (Le = e.RETURN_DOM_FRAGMENT || !1),
                (Te = e.RETURN_DOM_IMPORT || !1),
                (De = e.RETURN_TRUSTED_TYPE || !1),
                (Ae = e.FORCE_BODY || !1),
                (ze = !1 !== e.SANITIZE_DOM),
                (Oe = !1 !== e.KEEP_CONTENT),
                (Ee = e.IN_PLACE || !1),
                (me = e.ALLOWED_URI_REGEXP || me),
                Ie && (xe = !1),
                Le && (Se = !0),
                Ce &&
                  ((fe = M({}, [].concat(Y(L)))),
                  (ye = []),
                  !0 === Ce.html && (M(fe, j), M(ye, T)),
                  !0 === Ce.svg && (M(fe, N), M(ye, D), M(ye, O)),
                  !0 === Ce.svgFilters && (M(fe, A), M(ye, D), M(ye, O)),
                  !0 === Ce.mathMl && (M(fe, S), M(ye, z), M(ye, O))),
                e.ADD_TAGS && (fe === we && (fe = I(fe)), M(fe, e.ADD_TAGS)),
                e.ADD_ATTR && (ye === he && (ye = I(ye)), M(ye, e.ADD_ATTR)),
                e.ADD_URI_SAFE_ATTR && M(Ge, e.ADD_URI_SAFE_ATTR),
                Oe && (fe['#text'] = !0),
                je && M(fe, ['html', 'head', 'body']),
                fe.table && (M(fe, ['tbody']), delete ve.tbody),
                r && r(e),
                (Ze = e));
            },
            Je = function (e) {
              p(n.removed, { element: e });
              try {
                e.parentNode.removeChild(e);
              } catch (i) {
                e.outerHTML = K;
              }
            },
            Ue = function (e, i) {
              try {
                p(n.removed, { attribute: i.getAttributeNode(e), from: i });
              } catch (e) {
                p(n.removed, { attribute: null, from: i });
              }
              i.removeAttribute(e);
            },
            Fe = function (e) {
              var i = void 0,
                n = void 0;
              if (Ae) e = '<remove></remove>' + e;
              else {
                var r = w(e, /^[\r\n\t ]+/);
                n = r && r[0];
              }
              var a = V ? V.createHTML(e) : e;
              try {
                i = new Q().parseFromString(a, 'text/html');
              } catch (e) {}
              if ((t && M(ve, ['title']), !i || !i.documentElement)) {
                var l = (i = ie.createHTMLDocument('')).body;
                l.parentNode.removeChild(l.parentNode.firstElementChild),
                  (l.outerHTML = a);
              }
              return (
                e &&
                  n &&
                  i.body.insertBefore(
                    o.createTextNode(n),
                    i.body.childNodes[0] || null
                  ),
                re.call(i, je ? 'html' : 'body')[0]
              );
            };
          n.isSupported &&
            (function () {
              try {
                var e = Fe('<x/><title>&lt;/title&gt;&lt;img&gt;');
                k(/<\/title/, e.querySelector('title').innerHTML) && (t = !0);
              } catch (e) {}
            })();
          var $e = function (e) {
              return ne.call(
                e.ownerDocument || e,
                e,
                x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT,
                function () {
                  return x.FILTER_ACCEPT;
                },
                !1
              );
            },
            qe = function (e) {
              return !(
                e instanceof $ ||
                e instanceof q ||
                ('string' == typeof e.nodeName &&
                  'string' == typeof e.textContent &&
                  'function' == typeof e.removeChild &&
                  e.attributes instanceof F &&
                  'function' == typeof e.removeAttribute &&
                  'function' == typeof e.setAttribute &&
                  'string' == typeof e.namespaceURI)
              );
            },
            Qe = function (e) {
              return 'object' === (void 0 === d ? 'undefined' : Z(d))
                ? e instanceof d
                : e &&
                    'object' === (void 0 === e ? 'undefined' : Z(e)) &&
                    'number' == typeof e.nodeType &&
                    'string' == typeof e.nodeName;
            },
            _e = function (e, i, r) {
              le[e] &&
                g(le[e], function (e) {
                  e.call(n, i, r, Ze);
                });
            },
            Xe = function (e) {
              var i = void 0;
              if ((_e('beforeSanitizeElements', e, null), qe(e)))
                return Je(e), !0;
              if (w(e.nodeName, /[\u0080-\uFFFF]/)) return Je(e), !0;
              var r = f(e.nodeName);
              if (
                (_e('uponSanitizeElement', e, { tagName: r, allowedTags: fe }),
                !Qe(e.firstElementChild) &&
                  (!Qe(e.content) || !Qe(e.content.firstElementChild)) &&
                  k(/<[!/\w]/g, e.innerHTML) &&
                  k(/<[!/\w]/g, e.textContent))
              )
                return Je(e), !0;
              if (!fe[r] || ve[r]) {
                if (Oe && !Pe[r] && 'function' == typeof e.insertAdjacentHTML)
                  try {
                    var a = e.innerHTML;
                    e.insertAdjacentHTML('AfterEnd', V ? V.createHTML(a) : a);
                  } catch (e) {}
                return Je(e), !0;
              }
              return ('noscript' !== r && 'noembed' !== r) ||
                !k(/<\/no(script|embed)/i, e.innerHTML)
                ? (Ie &&
                    3 === e.nodeType &&
                    ((i = e.textContent),
                    (i = y(i, se, ' ')),
                    (i = y(i, de, ' ')),
                    e.textContent !== i &&
                      (p(n.removed, { element: e.cloneNode() }),
                      (e.textContent = i))),
                  _e('afterSanitizeElements', e, null),
                  !1)
                : (Je(e), !0);
            },
            Ve = function (e, i, n) {
              if (ze && ('id' === i || 'name' === i) && (n in o || n in Ye))
                return !1;
              if (xe && k(ge, i));
              else if (be && k(ce, i));
              else {
                if (!ye[i] || ke[i]) return !1;
                if (Ge[i]);
                else if (k(me, y(n, pe, '')));
                else if (
                  ('src' !== i && 'xlink:href' !== i && 'href' !== i) ||
                  'script' === e ||
                  0 !== h(n, 'data:') ||
                  !We[e]
                )
                  if (Me && !k(ue, y(n, pe, '')));
                  else if (n) return !1;
              }
              return !0;
            },
            Ke = function (e) {
              var i = void 0,
                r = void 0,
                a = void 0,
                t = void 0,
                o = void 0;
              _e('beforeSanitizeAttributes', e, null);
              var l = e.attributes;
              if (l) {
                var s = {
                  attrName: '',
                  attrValue: '',
                  keepAttr: !0,
                  allowedAttributes: ye,
                };
                for (o = l.length; o--; ) {
                  var d = (i = l[o]),
                    g = d.name,
                    p = d.namespaceURI;
                  if (
                    ((r = v(i.value)),
                    (a = f(g)),
                    (s.attrName = a),
                    (s.attrValue = r),
                    (s.keepAttr = !0),
                    (s.forceKeepAttr = void 0),
                    _e('uponSanitizeAttribute', e, s),
                    (r = s.attrValue),
                    !s.forceKeepAttr)
                  ) {
                    if ('name' === a && 'IMG' === e.nodeName && l.id)
                      (t = l.id),
                        (l = m(l, [])),
                        Ue('id', e),
                        Ue(g, e),
                        c(l, t) > o && e.setAttribute('id', t.value);
                    else {
                      if (
                        'INPUT' === e.nodeName &&
                        'type' === a &&
                        'file' === r &&
                        s.keepAttr &&
                        (ye[a] || !ke[a])
                      )
                        continue;
                      'id' === g && e.setAttribute(g, ''), Ue(g, e);
                    }
                    if (s.keepAttr)
                      if (k(/\/>/i, r)) Ue(g, e);
                      else {
                        Ie && ((r = y(r, se, ' ')), (r = y(r, de, ' ')));
                        var w = e.nodeName.toLowerCase();
                        if (Ve(w, a, r))
                          try {
                            p
                              ? e.setAttributeNS(p, g, r)
                              : e.setAttribute(g, r),
                              u(n.removed);
                          } catch (e) {}
                      }
                  }
                }
                _e('afterSanitizeAttributes', e, null);
              }
            },
            ei = function e(i) {
              var n = void 0,
                r = $e(i);
              for (_e('beforeSanitizeShadowDOM', i, null); (n = r.nextNode()); )
                _e('uponSanitizeShadowNode', n, null),
                  Xe(n) || (n.content instanceof l && e(n.content), Ke(n));
              _e('afterSanitizeShadowDOM', i, null);
            };
          return (
            (n.sanitize = function (e, r) {
              var t = void 0,
                o = void 0,
                s = void 0,
                g = void 0,
                c = void 0;
              if ((e || (e = '\x3c!--\x3e'), 'string' != typeof e && !Qe(e))) {
                if ('function' != typeof e.toString)
                  throw b('toString is not a function');
                if ('string' != typeof (e = e.toString()))
                  throw b('dirty is not a string, aborting');
              }
              if (!n.isSupported) {
                if (
                  'object' === Z(i.toStaticHTML) ||
                  'function' == typeof i.toStaticHTML
                ) {
                  if ('string' == typeof e) return i.toStaticHTML(e);
                  if (Qe(e)) return i.toStaticHTML(e.outerHTML);
                }
                return e;
              }
              if (
                (Ne || Be(r),
                (n.removed = []),
                'string' == typeof e && (Ee = !1),
                Ee)
              );
              else if (e instanceof d)
                (1 ===
                  (o = (t = Fe('\x3c!--\x3e')).ownerDocument.importNode(e, !0))
                    .nodeType &&
                  'BODY' === o.nodeName) ||
                'HTML' === o.nodeName
                  ? (t = o)
                  : t.appendChild(o);
              else {
                if (!Se && !Ie && !je && -1 === e.indexOf('<'))
                  return V && De ? V.createHTML(e) : e;
                if (!(t = Fe(e))) return Se ? null : K;
              }
              t && Ae && Je(t.firstChild);
              for (var u = $e(Ee ? e : t); (s = u.nextNode()); )
                (3 === s.nodeType && s === g) ||
                  Xe(s) ||
                  (s.content instanceof l && ei(s.content), Ke(s), (g = s));
              if (((g = null), Ee)) return e;
              if (Se) {
                if (Le)
                  for (c = ae.call(t.ownerDocument); t.firstChild; )
                    c.appendChild(t.firstChild);
                else c = t;
                return Te && (c = te.call(a, c, !0)), c;
              }
              var p = je ? t.outerHTML : t.innerHTML;
              return (
                Ie && ((p = y(p, se, ' ')), (p = y(p, de, ' '))),
                V && De ? V.createHTML(p) : p
              );
            }),
            (n.setConfig = function (e) {
              Be(e), (Ne = !0);
            }),
            (n.clearConfig = function () {
              (Ze = null), (Ne = !1);
            }),
            (n.isValidAttribute = function (e, i, n) {
              Ze || Be({});
              var r = f(e),
                a = f(i);
              return Ve(r, a, n);
            }),
            (n.addHook = function (e, i) {
              'function' == typeof i && ((le[e] = le[e] || []), p(le[e], i));
            }),
            (n.removeHook = function (e) {
              le[e] && u(le[e]);
            }),
            (n.removeHooks = function (e) {
              le[e] && (le[e] = []);
            }),
            (n.removeAllHooks = function () {
              le = {};
            }),
            n
          );
        })();
      })();
    },
    function (e, i, n) {
      var r = {
        './ann.json': 6,
        './ar.json': 7,
        './az.json': 8,
        './ban.json': 9,
        './be-tarask.json': 10,
        './bn.json': 11,
        './br.json': 12,
        './bto.json': 13,
        './ca.json': 14,
        './cs.json': 15,
        './cy.json': 16,
        './da.json': 17,
        './de.json': 18,
        './diq.json': 19,
        './el.json': 20,
        './en-gb.json': 21,
        './en.json': 2,
        './es.json': 22,
        './fa.json': 23,
        './fi.json': 24,
        './fr.json': 25,
        './gl.json': 26,
        './glk.json': 27,
        './grc.json': 28,
        './he.json': 29,
        './hi.json': 30,
        './hr.json': 31,
        './hu.json': 32,
        './hy.json': 33,
        './id.json': 34,
        './io.json': 35,
        './is.json': 36,
        './it.json': 37,
        './ja.json': 38,
        './kcg.json': 39,
        './kg.json': 40,
        './kiu.json': 41,
        './km.json': 42,
        './kn.json': 43,
        './ko.json': 44,
        './ku-latn.json': 45,
        './lb.json': 46,
        './lmo.json': 47,
        './mad.json': 48,
        './mk.json': 49,
        './ml.json': 50,
        './mrh.json': 51,
        './ms.json': 52,
        './mt.json': 53,
        './my.json': 54,
        './nb.json': 55,
        './ne.json': 56,
        './nia.json': 57,
        './nl.json': 58,
        './oc.json': 59,
        './om.json': 60,
        './pap.json': 61,
        './pl.json': 62,
        './pt-br.json': 63,
        './pt.json': 64,
        './qqq.json': 65,
        './roa-tara.json': 66,
        './ru.json': 67,
        './sat.json': 68,
        './sc.json': 69,
        './sk.json': 70,
        './sl.json': 71,
        './so.json': 72,
        './sq.json': 73,
        './sv.json': 74,
        './te.json': 75,
        './th.json': 76,
        './ti.json': 77,
        './tl.json': 78,
        './tly.json': 79,
        './tr.json': 80,
        './udm.json': 81,
        './uk.json': 82,
        './vi.json': 83,
        './wls.json': 84,
        './xmf.json': 85,
        './zgh.json': 86,
        './zh-hans.json': 87,
        './zh-hant.json': 88,
      };
      function a(e) {
        var i = t(e);
        return n(i);
      }
      function t(e) {
        if (!n.o(r, e)) {
          var i = new Error("Cannot find module '" + e + "'");
          throw ((i.code = 'MODULE_NOT_FOUND'), i);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = t),
        (e.exports = a),
        (a.id = 5);
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Katelem"]},"continue-reading":"Fo isi kifuk","read-more":"Fuk owuwa ofifi me W??k??pedia"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Hhaboh162002","Meno25","NEHAOUA","???????? ???????? ?????? ????????????"]},"continue-reading":"???????????? ??????????????","gallery-loading-error":"?????? ?????? ?????????? ?????????? ?????? ????????????","gallery-loading-error-offline":"???? ???????? ?????????? ???????? ??????????????????.","gallery-loading-error-refresh":"??????????","gallery-loading-still":"???????? ??????????????","gallery-unknown-author":"???????????? ?????? ??????????","preview-error-message":"???????? ???????? ?????????? ???? ?????? ?????? ????????????????.","read-on-wiki":"???????? ?????? ??????????????????","read-more":"???????? ???????????? ???? ??????????????????","preview-disambiguation-message":"?????????????? <strong>$1</strong> ???? ?????? ?????????? ???? ?????????? ?????????? ?????? ??????????????????.","preview-offline-message":"???? ???????? ?????????? ???????? ??????????????????.","preview-offline-cta":"???????? ?????? ????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["??eyx ??amil"]},"continue-reading":"Oxuma??a davam et","gallery-loading-error":"Bu ????kili y??kl??y??rk??n x??ta ba?? verdi","gallery-loading-error-refresh":"Yenil??","gallery-loading-still":"H??l?? y??kl??nir","gallery-unknown-author":"Nam??lum m????llif","read-on-wiki":"Vikipediyada oxu"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Chinamoonroll","Joseagush"]},"continue-reading":"Lanturang ngawac??n","gallery-loading-error":"W??nten san?? iwang ri tatkala uah gambar","gallery-loading-error-offline":"N??nten w??nten kon??ksi intern??t.","gallery-loading-error-refresh":"Segerang","gallery-loading-still":"Tasih ngantosin","gallery-unknown-author":"$1 Panyurat n??nten kauningin","preview-error-message":"W??nten pikobet rikala ng??dengang pratayang puniki.","read-on-wiki":"Wac??n ring Wikip??dia","read-more":"Lanturang wac??n ring Wikip??dia","preview-disambiguation-message":"Murda <strong>$1</strong> kakait langkung saking satunggal suratan ring Wikip??dia.","preview-offline-message":"N??nten w??nten kon??ksi intern??t.","preview-offline-cta":"Coba malih"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["W"]},"continue-reading":"???????????????????? ????????????????","gallery-loading-error":"?????? ???????????????????? ???????????? ???????????????? ?????????????????? ??????????????.","gallery-loading-error-offline":"???????? ???????????????????? ?????????????????? ???? ??????????????.","gallery-loading-error-refresh":"????????????????","gallery-loading-still":"???????????????? ??????????????????","gallery-unknown-author":"???????????? ????????????????(-????)","preview-error-message":"???????????? ???????????????????????????? ???????????? ?????????????????????????? ???????????????? ????????????????????????.","read-on-wiki":"???????????? ?? ??????????????????","read-more":"???????????? ?????????? ?? ??????????????????","preview-disambiguation-message":"?????????????????? <strong>$1</strong> ?????????????? ?????????? ???? ???????????? ???????????????? ?? ??????????????????.","preview-offline-message":"???????? ???????????????????? ?????????????????? ???? ??????????????.","preview-offline-cta":"???????????????????? ????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Titodutta","Yahya","???????????????????????????????????????"]},"continue-reading":"???????????? ????????????????????? ???????????????","gallery-loading-error":"?????? ????????? ????????? ???????????? ???????????? ???????????? ?????????????????? ??????????????????","gallery-loading-error-offline":"???????????? ??????????????????????????? ??????????????? ????????????","gallery-loading-error-refresh":"???????????????????????? ????????????","gallery-loading-still":"???????????? ????????? ???????????????","gallery-unknown-author":"???????????? ???????????????","preview-error-message":"?????????????????????????????? ????????????????????? ???????????? ???????????? ?????????????????? ?????????????????????","read-on-wiki":"??????????????????????????????????????? ???????????????","read-more":"??????????????????????????????????????? ????????? ???????????????","preview-disambiguation-message":"<strong>$1</strong> ????????????????????? ?????????????????? ????????????????????????????????? ???????????????????????? ???????????? ??????????????????????????????","preview-offline-message":"???????????? ??????????????????????????? ??????????????? ????????????","preview-offline-cta":"???????????? ?????????????????? ????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Adriendelucca"]},"continue-reading":"Kenderc\'hel da lenn","gallery-loading-error":"Ur fazi zo bet en ur garga?? ar skeudenn-ma??","gallery-loading-error-offline":"Kennask internet ebet.","gallery-loading-error-refresh":"Freskaat","gallery-loading-still":"O karga??","gallery-unknown-author":"Aozer dianav","preview-error-message":"Ur fazi zo bet en ur ziskouez an alberz-ma??","read-on-wiki":"Lenn war Wikipedia","read-more":"Lenn muioc\'h war Wikipedia","preview-offline-message":"Kennask internet ebet.","preview-offline-cta":"Klask en-dro"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Filipinayzd"]},"continue-reading":"Padagusa a pagbasa","gallery-loading-error":"Agko sala sa pagkarga kading imahe","gallery-loading-error-offline":"Udang koneksyon sa internet.","gallery-loading-error-refresh":"Uliton","gallery-loading-still":"Kinakarga pa","gallery-unknown-author":"Diri isi a kagsurat","preview-error-message":"Agko sala mantang ipinapabayad ading patan-aw","read-on-wiki":"Magbasa sa Wikipedia","read-more":"Magbasa pa sa Wikipedia","preview-disambiguation-message":"Ana titulong <strong>$1</strong> katakod sa dakul pa sa usad na artikulo sa Wikipedia.","preview-offline-message":"Udang koneksyon sa internet.","preview-offline-cta":"Purbari dayday"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Fitoschido","Mguix"]},"continue-reading":"Continua llegint","gallery-loading-error":"S\'ha produ??t un error en carregar aquesta imatge","gallery-loading-error-offline":"Cap connexi?? d\'internet disponible.","gallery-loading-error-refresh":"Actualitzar","gallery-loading-still":"carregant-se","gallery-unknown-author":"Autoria desconeguda","preview-error-message":"S\'ha produ??t un problema en mostrar aquesta previsualitzaci??.","read-on-wiki":"Llegiu a la Viquip??dia","read-more":"Llegeixi m??s en Viquip??dia","preview-disambiguation-message":"El t??tol <strong>$1</strong> est?? enlla??at a m??s d\'un article a la Viquip??dia.","preview-offline-message":"Cap connexi?? d\'internet disponible.","preview-offline-cta":"Torneu-ho a provar"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Mat??j Such??nek","Robins7"]},"continue-reading":"Pokra??ovat ve ??ten??","gallery-loading-error":"P??i na????t??n?? tohoto obr??zku do??lo k chyb??","gallery-loading-error-offline":"Nen?? dostupn?? internetov?? p??ipojen??.","gallery-loading-error-refresh":"Obnovit","gallery-unknown-author":"Author nezn??m??","preview-error-message":"P??i zobrazov??n?? tohoto n??hledu se objevil probl??m.","read-on-wiki":"P??e????st na Wikipedii","read-more":"P??e????st v??ce na Wikipedii","preview-disambiguation-message":"N??zev <strong>$1</strong> souvis?? s v??ce ne?? jedn??m ??l??nkem na Wikipedii.","preview-offline-message":"Nen?? dostupn?? internetov?? p??ipojen??.","preview-offline-cta":"Zkusit znovu"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Robin Owain"]},"continue-reading":"Parhau i Ddarllen","gallery-loading-error":"Cafwyd nam yn llwytho\'r ddelwedd hon","gallery-loading-error-offline":"Dim cysylltiad rhyngrwyd.","gallery-loading-error-refresh":"Adfywio","gallery-loading-still":"Dal wrthi\'n llwytho","gallery-unknown-author":"Awdur anhysbys","preview-error-message":"Gafwyd gwall tra\'n ceisio arddangos y rhagolwg","read-on-wiki":"Darllen ar Wicipedia","read-more":"Darllen rhagor ar Wicipedia","preview-disambiguation-message":"Mae\'r teitl <strong>$1</strong> yn berthnasol i fwy nag un erthygl ar Wicipedia.","preview-offline-message":"Dim cysylltiad rhyngrwyd.","preview-offline-cta":"Ceisiwch eto"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Saederup92"]},"continue-reading":"Forts??t l??sning","read-on-wiki":"L??s p?? Wikipedia","read-more":"L??s mere p?? Wikipedia","preview-offline-cta":"Pr??v igen"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["BPX-web","DraconicDark","Elliot","ManuelFranz"]},"continue-reading":"Mit dem Lesen fortfahren","gallery-loading-error":"Beim Laden dieses Bildes gab es einen Fehler.","gallery-loading-error-offline":"Es ist keine Internetverbindung vorhanden.","gallery-loading-error-refresh":"Aktualisieren","gallery-loading-still":"Wird noch geladen","gallery-unknown-author":"Urheber unbekannt.","preview-error-message":"Es gab ein Problem bei der Anzeige dieser Vorschau.","preview-console-error-message":"Vorschau f??r Artikel ???$1??? nicht verf??gbar (Sprache: $2)","read-on-wiki":"Auf Wikipedia lesen","read-more":"Mehr bei Wikipedia","preview-disambiguation-message":"Titel <strong>$1</strong> bezieht sich auf mehr als einen Artikel auf Wikipedia.","preview-offline-message":"Es ist keine Internetverbindung vorhanden.","preview-offline-cta":"Erneut versuchen"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["1917 Ekim Devrimi","Mirzali","Orbot707"]},"continue-reading":"Wanay????i dewam ker??","gallery-loading-error":"No asange bar kerd???? de xeta veciye","gallery-loading-error-offline":"G??reniyeyi interneti ????niyo","gallery-loading-error-refresh":"Anewe ker??","gallery-loading-still":"Hewna beno bar","gallery-unknown-author":"Nu??tekar?? n??zan??yeni","preview-error-message":"Mocnay?????? n?? verqayti de x??rabiye esta.","read-on-wiki":"Wikipediya de b??wan??","read-more":"Wikipedia sero tayna b??wan??","preview-disambiguation-message":"Serey <strong>$1</strong> yew ra z??de meqaley?? Wikipedia ya eleqey??no.","preview-offline-message":"G??reniyeyi interneti ????niyo","preview-offline-cta":"Anciya b??cerebne"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Geraki","Norhorn"]},"continue-reading":"???????????????? ??????????????????","gallery-loading-error":"?????????????????????????? ???????????? ???????? ???? ?????????????? ?????????? ?????? ??????????????","gallery-loading-error-offline":"?????? ?????????????? ?????????????????? ?????????????? ?????? ??????????????????.","gallery-loading-error-refresh":"????????????????","gallery-loading-still":"?????????? ????????????????","gallery-unknown-author":"???????????????? ????????????????????","preview-error-message":"???????????? ???????????? ???????????????? ???????? ?????? ???????????????? ?????????? ?????? ????????????????????????????.","read-on-wiki":"???????????????? ?????? ??????????????????????","read-more":"???????????????? ?????????????????????? ?????? ??????????????????????","preview-disambiguation-message":"?? ???????????? <strong>$1</strong> ???????????????????? ???? ?????????????????????? ?????? ?????? ?????????????? ?????? ??????????????????????.","preview-offline-message":"?????? ?????????????? ?????????????????? ?????????????? ?????? ??????????????????.","preview-offline-cta":"?????????????????? ????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Alefar"]},"continue-reading":"Continue Reading","gallery-loading-error":"There was an error loading this image!","gallery-loading-error-offline":"No internet connection available!","gallery-loading-error-refresh":"Refresh","gallery-loading-still":"Still loading","gallery-unknown-author":"Author unknown","preview-error-message":"There was an issue while displaying this preview.","read-on-wiki":"Read on Wikipedia","read-more":"Read more on Wikipedia","preview-offline-message":"No internet connection available!","preview-offline-cta":"TRY AGAIN"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Fitoschido","Rodney Araujo"]},"continue-reading":"Continuar leyendo","gallery-loading-error":"Se produjo un error al cargar esta imagen","gallery-loading-error-offline":"No hay conexi??n a internet disponible.","gallery-loading-error-refresh":"Actualizar","gallery-loading-still":"Todav??a sigue cargando","gallery-unknown-author":"Author desconocido","preview-error-message":"Hubo un problema al mostrar esta previsualizaci??n","read-on-wiki":"Ver en Wikipedia","read-more":"Leer m??s en Wikipedia","preview-disambiguation-message":"El t??tulo <strong>$1</strong> est?? relacionado a m??s de un art??culo en Wikipedia.","preview-offline-message":"No hay conexi??n a internet disponible.","preview-offline-cta":"Reintentar"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Darafsh","Jeeputer"]},"continue-reading":"???????????? ????????????","gallery-loading-error":"???? ?????????? ???????????????? ?????? ?????????? ?????????? ???? ??????","gallery-loading-error-offline":"?????????? ???? ?????????????? ?????????? ????????.","gallery-loading-error-refresh":"???????????????????","gallery-loading-still":"???????????? ???? ?????? ??????????????","gallery-unknown-author":"???????? ????????????????","preview-error-message":"?????????? ?????????? ?????????? ?????? ??????????????????? ?????? ??????.","preview-console-error-message":"??????????????????? ???????? ???????????? \'$1\' ???? ?????????? ???????? (????????: $2)","read-on-wiki":"???? ??????????????????? ??????????????","read-more":"?????????????? ?????????? ???? ???????????????????","preview-disambiguation-message":"?????????? <strong>$1</strong> ???? ??????????????????? ???? ?????? ???? ???? ?????????? ?????????? ??????.","preview-offline-message":"?????????? ???? ?????????????? ?????????? ????????.","preview-offline-cta":"???????? ????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Actuallyisjoha","Alluk.","Nike","Pyscowicz"]},"continue-reading":"Jatka lukemista","gallery-loading-error":"Kuvan lataaminen ep??onnistui","gallery-loading-error-offline":"Ei Internet-yhteytt??","gallery-loading-error-refresh":"P??ivit??","gallery-loading-still":"Ladataan edelleen","gallery-unknown-author":"Tuntematon tekij??","preview-error-message":"Esikatselua ei voida n??ytt????","read-on-wiki":"Lue Wikipediassa","read-more":"Lue lis???? Wikipediassa","preview-disambiguation-message":"Otsikko <strong>$1</strong> liittyy useampaan Wikipedia-artikkeliin.","preview-offline-message":"Ei internet-yhteytt??.","preview-offline-cta":"Yrit?? uudelleen"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Gomoko","PhilW","Verdy p","Wladek92"]},"continue-reading":"Continuer ?? lire","gallery-loading-error":"Une erreur s???est produite durant le chargement de cette image.","gallery-loading-error-offline":"Aucune connexion Internet disponible.","gallery-loading-error-refresh":"Rafra??chir","gallery-loading-still":"Chargement encore en cours","gallery-unknown-author":"Auteur inconnu","preview-error-message":"Un probl??me est survenu en affichant cet aper??u.","preview-console-error-message":"Aper??u non disponible pour l???article \'$1\' (langue : $2)","read-on-wiki":"Lire sur Wikip??dia","read-more":"Lire advantage sur Wikip??dia","preview-disambiguation-message":"Le titre <strong>$1</strong> est li?? ?? plus d???un article dans Wikip??dia.","preview-offline-message":"Aucune connexion Internet disponible.","preview-offline-cta":"Essayez ?? nouveau"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Maria zaos"]},"continue-reading":"Continua a ler","gallery-loading-error":"Houbo un erro ?? cargar esta imaxe.","gallery-loading-error-refresh":"Refrescar","gallery-unknown-author":"Author desco??ecido","preview-error-message":"Houbo un problema ?? amosar esta previsualizaci??n","preview-offline-cta":"T??nteo de novo"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["??????"]},"continue-reading":"???????????? ??????????????","gallery-loading-error":"?????? ???????? ?????????? ??????????????????","gallery-loading-error-refresh":"????????????????","gallery-loading-still":"???????? ?????? ??????????","preview-error-message":"???????????? ???????? ??????-???????????? ?????????? ?????? ??????.","read-on-wiki":"???????????????? ???????? ??????????","read-more":"???????????????? ???????? ?????????? ??????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["PastelKos"]},"continue-reading":"??????????????????? ????? ???????????????????????????","gallery-loading-error":"?????????????? ??????????????? ????? ????????????????????????? ?????????? ??????? ?????????????","gallery-loading-error-offline":"????? ???????????????????? ???????????????????? ????????????????.","gallery-loading-error-refresh":"???????????????????","gallery-loading-still":"??????? ???????????????????????????","gallery-unknown-author":"????????????? ????????????????????","preview-error-message":"?????????????? ????????????? ????? ???????????????????????????","read-on-wiki":"??????????????????????????? ????? ??????????????????????????","read-more":"??????????????????????????? ?????????? ????? ??????????????????????????","preview-disambiguation-message":"??? ???????????? \'\'\'$1\'\'\' ???????????? ??????? ????????????? ?????????????????? ????? ??????????????????????????","preview-offline-message":"????? ???????????????????? ???????????????????? ????????????????.","preview-offline-cta":"?????????? ?????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Amire80","YaronSh"]},"continue-reading":"???????? ??????????","gallery-loading-error":"?????????? ?????????? ?????? ?????????? ???????????? ????????","gallery-loading-error-offline":"?????? ?????????? ???????? ????????????????.","gallery-loading-error-refresh":"??????????","gallery-loading-still":"?????????? ????????????","gallery-unknown-author":"?????????? ???????? ????????","preview-error-message":"?????????? ???????? ???? ???????? ???????????? ?????????????? ????????.","preview-console-error-message":"?????? ?????????? ???????????? ?????????? ???????? ???$1??? (??????: $2)","read-on-wiki":"?????????? ????????????????????","read-more":"?????????? ?????? ????????????????????","preview-disambiguation-message":"???????????? <strong>$1</strong> ?????????? ?????????? ???????? ?????? ????????????????????.","preview-offline-message":"?????? ?????????? ???????? ????????????????.","preview-offline-cta":"?????????? ??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Abijeet Patro"]},"continue-reading":"??????????????? ???????????? ????????????","read-more":"?????????????????????????????? ?????? ???????????? ???????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Bugoslav","Neptune, the Mystic"]},"continue-reading":"Nastavite ??itati","gallery-loading-error":"Do??lo je do pogre??ke pri u??itavanju ove slike","gallery-loading-error-refresh":"U??itaj ponovno","gallery-unknown-author":"Nepoznat author","read-on-wiki":"Pro??itajte na Wikipediji","read-more":"Pro??itajte vi??e na Wikipediji","preview-disambiguation-message":"Naslov <strong>$1</strong> povezan je s vi??e ??lanaka na Wikipediji.","preview-offline-cta":"Poku??ajte ponovo"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Hanna Tardos"]},"gallery-loading-error-offline":"Nincs internetkapcsolat","preview-offline-message":"Nincs internetkapcsolat","preview-offline-cta":"Pr??b??ld ??jra"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Kareyac"]},"continue-reading":"???????????????????? ????????????","gallery-loading-error-refresh":"??????????????????","gallery-unknown-author":"???????????????? ???????????? ??","preview-offline-cta":"?????????? ????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Akmaie Ajam","Daud I.F. Argana","Herryz","Joseagush","Sonic Speedy"]},"continue-reading":"Lanjutkan Membaca","gallery-loading-error":"Terjadi kesalahan saat memuat gambar ini.","gallery-loading-error-offline":"Tidak ada koneksi internet.","gallery-loading-error-refresh":"Muat ulang","gallery-loading-still":"Masih memuat","gallery-unknown-author":"$1 Penulis tidak diketahui","preview-error-message":"Ada masalah ketika menampilkan pratayang ini.","read-on-wiki":"Baca di Wikipedia","read-more":"Baca lebih lanjut tentang Wikipedia","preview-disambiguation-message":"Judul <strong>$1</strong> terkait dengan lebih dari satu artikel di Wikipedia.","preview-offline-message":"Tidak ada koneksi internet.","preview-offline-cta":"Coba lagi"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Joao Xavier"]},"continue-reading":"Durigar lektado","gallery-loading-error":"Eventis eroro dum charjo di ca imajo","gallery-loading-error-offline":"Nula konekto al interreto disponebla.","gallery-loading-error-refresh":"Rinovigar","gallery-loading-still":"Charjo duras","gallery-unknown-author":"Nekonocata autoro","preview-error-message":"Eventis problemo dum la montro di ca previdado.","read-on-wiki":"Lektez che Wikipedio","read-more":"Lektez pluse che Wikipedio","preview-disambiguation-message":"La titulo <strong>$1</strong> uzesas en plu kam 1 artiklo che Wikipedio.","preview-offline-message":"Nula konekto al interreto disponebla.","preview-offline-cta":"Probez itere"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Sveinki","Sveinn ?? Felli"]},"continue-reading":"Halda lestri ??fram","gallery-loading-error":"Upp kom villa vi?? a?? hla??a inn ??essari mynd","gallery-loading-error-offline":"Engin internettenging er tilt??k.","gallery-loading-error-refresh":"Endurlesa","gallery-loading-still":"Enn???? a?? lesa inn","gallery-unknown-author":"????ekkur h??fundur","preview-error-message":"??a?? kom upp vandam??l vi?? a?? birta ??essa forsko??un.","read-on-wiki":"Lesa ?? Wikipedia","read-more":"Lesta meira ?? Wikipedia","preview-disambiguation-message":"Titillinn <strong>$1</strong> tengist fleiri en einni grein ?? Wikipedia.","preview-offline-message":"Engin internettenging er tilt??k.","preview-offline-cta":"Reyndu aftur"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Beta16","Luca.favorido"]},"continue-reading":"Continua a leggere","gallery-loading-error-offline":"Nessuna connessione internet disponibile.","gallery-unknown-author":"Autore sconosciuto","read-more":"Ulteriori informazioni su Wikipedia","preview-offline-message":"Nessuna connessione internet disponibile.","preview-offline-cta":"Riprova"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Omotecho","????????????"]},"continue-reading":"???????????????","gallery-loading-error":"???????????????????????????????????????????????????????????????","gallery-loading-error-offline":"??????????????????????????????????????????????????????","gallery-loading-error-refresh":"??????","gallery-loading-still":"?????????????????????","gallery-unknown-author":"????????????","preview-error-message":"????????????????????????????????????????????????????????????????????????","read-on-wiki":"??????????????????????????????","read-more":"???????????????????????????????????????","preview-disambiguation-message":"??????<strong>$1</strong>??????????????????????????????????????????????????????????????????","preview-offline-message":"??????????????????????????????????????????????????????","preview-offline-cta":"?????????????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Kambai Akau"]},"continue-reading":"Ya a??son di?? fang","gallery-loading-error":"Ghyuap nshya?? di?? kpa??t ghwughwu huni","gallery-loading-error-offline":"Vak ntaniet nshya?? bah","gallery-loading-error-refresh":"Luk","gallery-loading-still":"Ni?? shya?? di?? kpa??t","gallery-unknown-author":"???? lyen a??tyulyuut wu bah","preview-error-message":"A??lyiat a??ghyang nshya?? ma??nang ???? ntyai nwuan a??tsan huni","read-on-wiki":"Fang mi?? Wikipidya","read-more":"A bu fang mi?? Wikipidya","preview-disambiguation-message":"A??pyia?? a??lyiat <strong>$1</strong> byia?? bi??n ma??ng atikut ma??di??di??t mi?? Wikipidya.","preview-offline-message":"Vak ntaniet nshya?? bah","preview-offline-cta":"Bu kwan"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Cgmbo"]},"continue-reading":"Landa Kutanga","gallery-loading-error":"Kifu me salama na ntangu ya kutula kifwanisu yai","gallery-loading-error-offline":"Connection ya internet kele ve.","gallery-loading-error-refresh":"Bandulula","gallery-loading-still":"Yo ke landa kubaka bima","gallery-unknown-author":"Munkwa na yo me zabana ve","preview-error-message":"Kifu me salama na ntangu ya kusonga kima yai.","read-on-wiki":"Tanga na Wikipedia","read-more":"Tanga mambu mingi na Wikipedia","preview-disambiguation-message":"Ntu-diambu <strong>$1</strong> ke na kuwakana ti masolo mingi na Wikipedia.","preview-offline-message":"Connection ya internet kele ve.","preview-offline-cta":"Meka diaka"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["1917 Ekim Devrimi"]},"continue-reading":"Wanay????i dewam ke","gallery-loading-error":"No res??m barkerd???? de xeta veciye","gallery-loading-error-offline":"G??reniyeyi interneti ????niyo","gallery-loading-error-refresh":"Anewe ke","gallery-loading-still":"Hewna beno bar","gallery-unknown-author":"Nu??tekar?? n??zan??yeni","preview-error-message":"Mocnay?????? n?? verqayti de x??rabiye esta.","read-on-wiki":"Wikipediya de b??wan??","read-more":"Wikipedia sero tayna b??wan??","preview-disambiguation-message":"Sernamey <strong>$1</strong> yew ra z??de meqaley?? Wikipedia ya eleqey??no.","preview-offline-message":"G??reniyeyi interneti ????niyo","preview-offline-cta":"Anciya b??cerebne"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Pokno Royal"]},"continue-reading":"??????????????????????????????","gallery-loading-error":"??????????????????????????????????????????????????????????????????????????????????????????","gallery-loading-error-refresh":"????????????????????????????????????","gallery-loading-still":"??????????????????????????????????????????","gallery-unknown-author":"????????????????????????????????????????????????????????????","preview-error-message":"??????????????????????????????????????????????????????????????????????????????????????????","read-on-wiki":"?????????????????????????????????????????????","read-more":"???????????????????????????????????????????????????????????????","preview-disambiguation-message":"??????????????????????????? <strong>$1</strong> ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["AVSmalnad77","??????????????????????????? ?????????????????????"]},"gallery-loading-error-offline":"??????????????????????????? ?????????????????? ???????????????????????????.","gallery-loading-error-refresh":"?????????????????????????????????????????????","gallery-loading-still":"??????????????? ???????????? ???????????????????????????","read-on-wiki":"?????????????????????????????????????????? ?????????","read-more":"?????????????????????????????????????????? ???????????????????????? ?????????","preview-offline-message":"??????????????????????????? ?????????????????? ???????????????????????????.","preview-offline-cta":"??????????????? ??????????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Songhee","Ykhwong","???????????????"]},"continue-reading":"?????? ??????","gallery-loading-error":"??? ???????????? ???????????? ?????? ????????? ??????????????????","gallery-loading-error-offline":"???????????? ???????????? ?????? ????????????.","gallery-loading-error-refresh":"?????? ??????","gallery-loading-still":"?????? ?????? ???","gallery-unknown-author":"?????? ??????","preview-error-message":"??? ??????????????? ???????????? ??? ????????? ???????????????.","read-on-wiki":"?????????????????? ??????","read-more":"?????????????????? ?????? ?????? ??????","preview-disambiguation-message":"<strong>$1</strong> ????????? ???????????? ??? ??? ????????? ????????? ???????????? ????????????.","preview-offline-message":"???????????? ???????????? ?????? ????????????.","preview-offline-cta":"?????? ??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Bikarh??ner"]},"continue-reading":"Xwendin?? Bidom??ne","gallery-loading-error":"??ewtiyeke derket di barkirina v?? w??ney?? de","gallery-loading-error-offline":"Gir??daneke ??nternet?? y?? berdest tine ye.","gallery-loading-error-refresh":"N?? bike","gallery-loading-still":"H?? j?? t?? barkirin","gallery-unknown-author":"Niv??skar nenas e","preview-error-message":"??ewtiyeke derket hol?? gava p????d??tin dihate n????andin.","read-on-wiki":"Li ser W??k??pediyay?? bixw??ne","read-more":"Z??detir bixw??ne li ser W??k??pediyay??","preview-disambiguation-message":"Sernav?? <strong>$1</strong> eleqedar?? ji yek?? z??detir gotaran e li ser W??k??pediyay??.","preview-offline-message":"Gir??daneke ??nternet?? y?? berdest n??ne.","preview-offline-cta":"Cardin bicerib??ne"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Les Meloures","Robby"]},"continue-reading":"Virufuere mat Liesen","gallery-loading-error":"Feeler beim eropluede vum Bild","gallery-loading-error-offline":"Et g??tt keng Internetverbindung","gallery-loading-error-refresh":"Aktualis??ieren","gallery-loading-still":"G??tt nach gelueden","gallery-unknown-author":"Auteur onbekannt","preview-error-message":"Et gouf e Problem fir d??st ze weisen","read-on-wiki":"Op Wikipedia liesen","read-more":"Liest m??i op Wikipedia","preview-offline-message":"Et g??tt keng Internetverbindung","preview-offline-cta":"Prob??iert nach emol"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Salvemm el lombard"]},"continue-reading":"Va adree a lensger","gallery-loading-error":"A gh\'?? stad un eror adree a careg?? quella pagina ch??","gallery-loading-error-offline":"A gh\'?? nissuna conession a l\'internet disponibil.","gallery-loading-error-refresh":"Sgiorna:","gallery-loading-still":"Anm?? adree a careg??","gallery-unknown-author":"Author minga conossud","preview-error-message":"A gh\'?? stad on problema intanta che la vegniva mostrada la pagina de ved?? prima.","read-on-wiki":"Lensg in su Wikipedia","read-more":"Lengs puss??e su Wikipedia","preview-disambiguation-message":"El titol <strong>$1</strong> l\'?? correlad con puss??e de vun articol in su Wikipedia.","preview-offline-message":"A gh\'?? nissuna coneesion a l\'internet disponibil","preview-offline-cta":"Provegh anm??"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Boesenbergia"]},"continue-reading":"Terrosaghi Maca","gallery-loading-error":"B??????? s?? sala b??kto mowa\' gh??mbh??r s?? ar??ya","gallery-loading-error-offline":"Ta?????\' sambhungan intern??t.","gallery-loading-error-refresh":"Pa\'anyar","gallery-loading-still":"Ghi\' mowa\'","gallery-unknown-author":"S?? mecc??\' ta\' ??kataow??","preview-error-message":"B??????? masalah b??kto ngangglaghi tangas ar??ya.","read-on-wiki":"B??ca ?? Wikip?????ia","read-more":"B??ca terrosana ?? Wikip?????ia","preview-disambiguation-message":"Bhul-ombhul <strong>$1</strong> aka??\' ka lebbi ?????ri s??ttong serradh??n ?? Wikip?????ia.","preview-offline-message":"Ta?????\' sambhungan intern??t.","preview-offline-cta":"Jh??jh??l pol??"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Bjankuloski06"]},"continue-reading":"???????????????????? ???? ????????????","gallery-loading-error":"???? ???????? ???????????? ?????? ?????????????????????? ???? ??????????????.","gallery-loading-error-offline":"???????? ?????????? ???? ????????????????????.","gallery-loading-error-refresh":"??????????????????","gallery-loading-still":"???? ???????? ???? ??????????????","gallery-unknown-author":"???????????????? ??????????","preview-error-message":"???? ???????? ?????????????? ?????? ???????????????? ???? ??????????????????.","preview-console-error-message":"?????????????????? ?? ???????????????????? ???? ?????????????????? ???$1??? (??????????: $2)","read-on-wiki":"???????????????????? ???? ????????????????????","read-more":"???????????????????? ???????????? ???? ????????????????????","preview-disambiguation-message":"???????????????? <strong>$1</strong> ?? ?????????????????? ???????????? ???? ???????? ?????????????? ???? ????????????????????.","preview-offline-message":"???????? ?????????? ???? ????????????????????.","preview-offline-cta":"?????????? ???? ??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Kiran Gopi"]},"continue-reading":"???????????? ??????????????????","gallery-loading-error":"??? ?????????????????? ??????????????????????????????????????? ?????????????????????????????????.","gallery-loading-error-refresh":"???????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Taytay","Teitei Para"]},"continue-reading":"Reih pazao","gallery-loading-error":"He hm??thl?? ?? kh?? hai nota p??na s??kha a y","gallery-loading-error-offline":"Internet azaona y vei.","gallery-loading-error-refresh":"Pathieh","gallery-loading-still":"A kh??h hai chy","gallery-unknown-author":"Rohtuh pahno leipa","preview-error-message":"He mochhilina ?? pal?? hai nota p??na s??kha a y.","read-on-wiki":"Wikipedia liata reih","read-more":"Wikipedia liata reina mode","preview-disambiguation-message":"Ch??tl??hpi <strong>$1</strong> nata a zaopa ch??pawzy Wikipedia lia s??kha hl?? hluh a y.","preview-offline-message":"Internet a zaona y vei.","preview-offline-cta":"A zaoh via"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Tofeiku"]},"continue-reading":"Teruskan Membaca","gallery-loading-error":"Terdapat ralat memuatkan imej ini","gallery-loading-error-offline":"Tiada sambungan Internet.","gallery-loading-error-refresh":"Segar semula","gallery-loading-still":"Masih memuatkan","gallery-unknown-author":"Pengarang tidak diketahui","preview-error-message":"Terdapat masalah ketika memaparkan pralihat ini.","read-on-wiki":"Baca tentang Wikipedia","read-more":"Baca lebih lanjut di Wikipedia","preview-disambiguation-message":"Tajuk <strong>$1</strong> berkaitan dengan lebih daripada satu rencana di Wikipedia.","preview-offline-message":"Tiada sambungan Internet.","preview-offline-cta":"Cuba lagi"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["ToniSant"]},"continue-reading":"Kompli Aqra","read-more":"Aqra aktar fuq Wikipedija"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Dr Lotus Black","Sithu015"]},"continue-reading":"?????????????????? ???????????????????????????","gallery-loading-error":"??? ?????????????????? ????????????????????????????????? ??????????????? ??????????????? ?????????????????????????????????","gallery-loading-error-offline":"???????????????????????? ?????????????????????????????? ????????????????????????","gallery-loading-error-refresh":"????????????????????????","gallery-loading-still":"??????????????? ???????????????????????????????????????","gallery-unknown-author":"???????????????????????? ?????????","preview-error-message":"?????????????????????????????????????????????????????? ???????????????????????? ????????????????????????????????????????????????????????????","preview-console-error-message":"??????????????????????????? \'$1\' ??????????????? ?????????????????????????????????????????? ???????????????????????????????????? (????????????????????????: $2)","read-on-wiki":"??????????????????????????????????????? ???????????? ??????????????????","read-more":"??????????????????????????????????????????????????? ?????????????????? ???????????????","preview-disambiguation-message":"??????????????????????????? <strong>$1</strong> ????????? ??????????????????????????????????????? ???????????? ?????????????????????????????? ???????????????????????? ???????????? ????????????????????????????????????","preview-offline-message":"???????????????????????? ?????????????????????????????? ????????????????????????","preview-offline-cta":"??????????????? ??????????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Jon Harald S??by","Kingu"]},"continue-reading":"Fortsett ?? lese","gallery-loading-error":"Kunne ikke laste inn denne siden","gallery-loading-error-offline":"Ikke tilkoblet Internett.","gallery-loading-error-refresh":"Gjeoppfrisk","gallery-loading-still":"Laster fremdeles ???","gallery-unknown-author":"Ukjent forfatter","preview-error-message":"Kunne ikke forh??ndsvise.","read-on-wiki":"Les p?? Wikipedia","read-more":"Les mer p?? Wikipedia","preview-disambiguation-message":"Tittelen <strong>$1</strong> er tilknyttet mer enn ??n artikkel p?? Wikipedia.","preview-offline-message":"Ingen tilgjengelige tilkoblinger til Internett.","preview-offline-cta":"Pr??v igjen"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Nirajan pant"]},"continue-reading":"????????????????????? ??????????????????????????? ????????????????????????","gallery-loading-error":"?????? ?????????????????? ?????????????????? ???????????? ???????????? ?????????????????? ????????? ???????????? ???","gallery-loading-error-refresh":"?????????:????????????","gallery-loading-still":"????????? ??????????????????????????? ???","gallery-unknown-author":"?????????????????? ????????????","preview-error-message":"?????? ?????????????????????????????????????????? ???????????????????????? ??????????????? ???????????? ???????????? ???????????? ????????????????????? ??????","read-on-wiki":"???????????????????????????????????? ???????????????????????????","read-more":"?????? ???????????????????????????????????? ???????????????????????????","preview-disambiguation-message":"<strong>$1</strong> ?????????????????? ???????????????????????????????????? ??????????????? ????????????????????? ????????? ??????????????????????????? ??????????????????????????? ??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Anugrahgori","Slaia"]},"continue-reading":"Tohug?? wombaso","gallery-loading-error":"So zifasala me tehal?? gambara andre","gallery-loading-error-offline":"L?? had??i jaringan internet.","gallery-loading-error-refresh":"Fuli hal??","gallery-loading-still":"Muhal?? na sa","gallery-unknown-author":"L?? t??i zamaz??khi","preview-error-message":"So zifasala g??t?? wangoroma\'?? khala-khala andre.","read-on-wiki":"Baso ya??a ba Wikipedia","read-more":"Baso na sa ya??a ba Wikipedia","preview-disambiguation-message":"H??g?? <strong>$1</strong> no fakhai ba ha\'uga ngawua zura ba Wikipedia","preview-offline-message":"L?? had??i jaringan internet.","preview-offline-cta":"Fuli tesi"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Mainframe98","Romaine"]},"continue-reading":"Verder lezen","gallery-loading-error":"Er is een fout opgetreden bij het laden van deze afbeelding","gallery-loading-error-offline":"Geen internetverbinding beschikbaar.","gallery-loading-error-refresh":"Vernieuwen","gallery-loading-still":"Nog steeds aan het laden","gallery-unknown-author":"Auteur onbekend","preview-error-message":"Er is een problem opgetreden bij het weergeven van deze voorvertoning","read-on-wiki":"Op Wikipedia lezen","read-more":"Meer lezen op Wikipedia","preview-disambiguation-message":"De titel <strong>$1</strong> is gerelateerd aan meer dan ????n artikel op Wikipedia.","preview-offline-message":"Geen internetverbinding beschikbaar.","preview-offline-cta":"Probeer het opnieuw"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["BrennodAloisi","Nicolas Eynaud"]},"continue-reading":"Contunhar a legir","gallery-loading-error":"Una error a agut lu??c durant lo cargament d\'aquel imatge.","gallery-loading-error-offline":"Ges de connexion internet disponible","gallery-loading-error-refresh":"Refrescar","gallery-loading-still":"Cargament totjorn en cors","gallery-unknown-author":"Author desconegut","read-on-wiki":"Legir sus Wikip??dia","read-more":"Legir mai sus Wikip??dia","preview-disambiguation-message":"Lo t??tol <strong>$1</strong> es liat a mai d\'un article dins Wikip??dia.","preview-offline-message":"Ges de connexion internet disponible.","preview-offline-cta":"Ensajatz tornamai"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Maammee"]},"continue-reading":"Dubbisuu itti fufi","gallery-loading-error":"Dogoggara suura kana fee\'utti ta\'e","gallery-loading-error-offline":"Konnekshiniin intarneetaa hin jiru.","gallery-loading-error-refresh":"Haaromsi","gallery-loading-still":"Ammayyu fe\'aara","gallery-unknown-author":"Barreessaan hin beekamu","preview-error-message":"Yeroo yaalii kana agarsiisuu dhimma ta\'e.","read-on-wiki":"Wikipiidiyaa irra Dubbisi","read-more":"Dabalata Wikipiidiyaa irra dubbisi","preview-disambiguation-message":"Mata duree <strong>$1</strong> Wikipiidiyaa irra barruu tokko ol waliin walqabata.","preview-offline-message":"Konnekshiniin intarneetaa hin jiru.","preview-offline-cta":"Irra deebi\'ii yaali"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["ObaTango"]},"continue-reading":"Sigui lesa","gallery-loading-error":"Tabatin un eror ora di karga e im??gen ak??","gallery-loading-error-offline":"No tin konekshon di intern??t.","gallery-loading-error-refresh":"Aktualis??","gallery-loading-still":"Ainda ta karga","gallery-unknown-author":"Outor deskonos??","preview-error-message":"Tabatin un problema ora di mustra e bista previo ak??.","read-on-wiki":"Lesa riba Wikipedia","read-more":"Lesa mas riba Wikipedia","preview-disambiguation-message":"E t??tulo <strong>$1</strong>ta relashon?? ku mas di un art??kulo riba Wikipedia.","preview-offline-message":"No tin konekshon di intern??t disponibel.","preview-offline-cta":"Purba di nobo"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Krzyz23","Rail"]},"continue-reading":"Czytaj dalej","gallery-loading-error":"Podczas ??adowania tego obrazu wyst??pi?? b????d","gallery-loading-error-offline":"Nie ma dost??pnego po????czenia internetowego.","gallery-loading-error-refresh":"Od??wie??","gallery-loading-still":"Wci???? wczytuj??","gallery-unknown-author":"Author nieznany","preview-error-message":"Wyst??pi?? problem podczas wy??wietlania podgl??du.","read-on-wiki":"Przeczytaj na Wikipedii","read-more":"Przeczytaj wi??cej na Wikipedii","preview-disambiguation-message":"Tytu?? <strong>$1</strong> jest zwi??zany z wi??cej ni?? jednym artyku??em na Wikipedii.","preview-offline-message":"Nie ma dost??pnego po????czenia internetowego.","preview-offline-cta":"Spr??buj ponownie"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Eduardo Addad de Oliveira","Eduardoaddad"]},"continue-reading":"Continuar lendo","gallery-loading-error":"Ocorreu um erro ao carregar esta imagem","gallery-loading-error-offline":"Sem liga????o ?? Internet dispon??vel.","gallery-loading-error-refresh":"Atualizar","gallery-loading-still":"Ainda carregando","gallery-unknown-author":"Ator desconhecido","preview-error-message":"Ocorreu um problema ao exibir esta pr??-visualiza????o.","read-on-wiki":"Leia na Wikip??dia","read-more":"Leia mais na Wikip??dia","preview-disambiguation-message":"T??tulo <strong>$1</strong> est?? relacionado a mais de um artigo na Wikip??dia.","preview-offline-message":"Sem liga????o ?? Internet dispon??vel.","preview-offline-cta":"Tente novamente"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Dvpita","Hamilton Abreu"]},"continue-reading":"Continuar a ler","gallery-loading-error":"Ocorreu um erro ao carregar esta imagem","gallery-loading-error-offline":"N??o existe liga????o ?? Internet.","gallery-loading-error-refresh":"Atualizar","gallery-loading-still":"Carregamento em curso","gallery-unknown-author":"Author desconhecido","preview-error-message":"Ocorreu um erro durante a apresenta????o desta antevis??o.","preview-console-error-message":"Antevis??o indispon??vel para o artigo \'$1\' (l??ngua: $2)","read-on-wiki":"Ler na Wikip??dia","read-more":"Leia mais na Wikip??dia","preview-disambiguation-message":"O t??tulo <strong>$1</strong> est?? relacionado com mais do que um artigo na Wikip??dia.","preview-offline-message":"N??o existe liga????o ?? Internet.","preview-offline-cta":"Tente novamente"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Nike"]},"continue-reading":"The message shown in the footer part of the preview popup that allows user to continue reading the summary","gallery-loading-error":"Message shown with fullscreen gallery loading error","gallery-loading-error-offline":"Message shown with fullscreen gallery when offline","gallery-loading-error-refresh":"Message shown with fullscreen gallery loading error","gallery-loading-still":"Message shown 5 seconds after a fullscreen gallery image starts loading","gallery-unknown-author":"Message shown if image author is unknown","preview-error-message":"Message shown with a preview loading error","preview-console-error-message":"Message shown in the JavaScript console when a preview cannot be shown due to an error. Params: \\n* $1 - Title of the article.\\n* $2 - Language code of the article.","read-on-wiki":"Message shown in the Call to Action (CTA) of a preview loading error or disambiguation page","read-more":"The message shown in the footer part of the preview popup that brings user to the wikipedia page to read more about the article","preview-disambiguation-message":"The message shown for disambiguation pages. Params: \\n* $1 - Title of the disambiguation page.","preview-offline-message":"The message shown when offline","preview-offline-cta":"The message shown as the call to action (CTA) when offline"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Joetaras"]},"continue-reading":"Condinue a leggere","gallery-loading-error":"ha assute \'nerrore carecanne st\'immaggine","gallery-loading-error-offline":"Nisciuna connessione Indernette disponibbele.","gallery-loading-error-refresh":"Aggiorne","gallery-loading-still":"Stoche a careche angore","gallery-unknown-author":"Autore scanusciute","preview-error-message":"Ha assute \'nu probbleme sus a\'u \'ndrucamende de l\'andeprime.","read-on-wiki":"\'Mbormaziune sus a Uicchip??die","read-more":"Otre \'mbormaziune sus a Uicchip??die","preview-disambiguation-message":"\'U titole <strong>$1</strong> j?? collegate a cchi?? de \'na v??sce sus a Uicchip??die.","preview-offline-message":"Nisciuna connessione Indernette disponibbele.","preview-offline-cta":"Pru??ve arrete"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Facenapalm","Okras"]},"continue-reading":"???????????????????? ????????????","gallery-loading-error":"?????????????????? ???????????? ?????? ???????????????? ??????????????????????","gallery-loading-error-offline":"?????? ?????????????????????? ?? ??????????????????.","gallery-loading-error-refresh":"????????????????","gallery-loading-still":"???????????????? ????????????????????????","gallery-unknown-author":"?????????? ????????????????????.","preview-error-message":"???????????????? ???????????????? ?? ???????? ??????????????????????????.","preview-console-error-message":"?????? ???????????? \'$1\' ?????????????????????????????? ???????????????? ???????????????????? (????????: $2)","read-on-wiki":"???????????? ?? ??????????????????","read-more":"???????????? ?????????? ?? ??????????????????","preview-disambiguation-message":"???????????????? <strong>$1</strong> ?????????????????? ?? ?????????? ?????? ?????????? ???????????? ?? ??????????????????.","preview-offline-message":"?????? ?????????????????????? ?? ??????????????????.","preview-offline-cta":"???????????????????? ?????? ??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Durga Soren"]},"gallery-loading-error":"????????????.??? ??????????????? ?????? ????????????.??? ??????????????? ????????????","gallery-loading-still":"????????? ????????? ??????????????? ????????? ????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["L2212"]},"continue-reading":"Sighi a l??ghere","gallery-loading-error":"B\'at ??pidu una faddina in su carrigamentu de custa imm??gine","gallery-loading-error-offline":"Peruna connessione a ??nternet a disponimentu.","gallery-loading-error-refresh":"Agiorna","gallery-loading-still":"Galu carrighende","gallery-unknown-author":"Autore disconnotu","preview-error-message":"B\'at ??pidu unu problema in sa visualizatzione de custa antiprima.","preview-console-error-message":"Antiprima no a disponimentu pro s\'art??culu \'$1\' (Limba: $2)","read-on-wiki":"Leghe in Wikipedia","read-more":"??teras informatziones in Wikipedia","preview-disambiguation-message":"Su t??tulu <strong>$1</strong> est ligadu a prus de un\'art??culu in Wikipedia.","preview-offline-message":"Peruna connessione a ??nternet a disponimentu.","preview-offline-cta":"Torra a proare"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Jaroslav.micek","Yardom78"]},"continue-reading":"Pokra??ova?? v ????tan??","gallery-loading-error":"Pri na????tavan?? tohto obr??zku do??lo k chybe.","gallery-loading-error-offline":"Nieje dostupn?? internetov?? pripojenie.","gallery-loading-error-refresh":"Obnovi??","gallery-loading-still":"St??le na????tava","gallery-unknown-author":"Author nezn??my","preview-error-message":"Pri zobrazovan?? tohto n??h??adu sa objavil probl??m.","preview-console-error-message":"Pre ??l??nok \'$1\' nie je dostupn?? n??h??ad (jazyk: $2)","read-on-wiki":"????ta?? na Wikip??dii","read-more":"????ta?? viac na Wikip??dii","preview-disambiguation-message":"N??zov  <strong>$1</strong> s??vis?? s viac ne?? jedn??m artiklom na Wikip??dii.","preview-offline-message":"Nieje dostupn?? internetov?? pripojenie.","preview-offline-cta":"Sk??si?? znova"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Eleassar"]},"continue-reading":"Nadaljuj branje","gallery-loading-error":"Pri nalaganju te slike se je pojavila napaka","gallery-loading-error-offline":"Internetna povezava ni na voljo.","gallery-loading-error-refresh":"Osve??i","gallery-loading-still":"??e vedno nalagam","gallery-unknown-author":"Avtor neznan","preview-error-message":"Pri prikazovanju tega predogleda je pri??lo do napake.","read-on-wiki":"Berite v Wikipediji","read-more":"Ve?? o tem v Wikipediji","preview-disambiguation-message":"Naslov <strong>$1<&strong> se povezuje z ve?? kot enim ??lankom v Wikipediji.","preview-offline-message":"Internetna povezava ni na voljo.","preview-offline-cta":"Poskusite znova"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Abdullahi"]},"continue-reading":"Sii Akhri","gallery-loading-error-refresh":"Cusbooneysii","gallery-unknown-author":"Qoraha lama yaqaan","read-on-wiki":"Ka akhri Wikipedia","read-more":"Faahfaahin dheeraad ka aqri Wikipedia"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Kosovastar"]},"continue-reading":"Vazhdo leximin","gallery-loading-error":"Pati nj?? gabim gjat?? ngarkimit t?? k??tij imazhi","gallery-loading-error-refresh":"Rifresko","gallery-loading-still":"Akoma po ngarkohet","read-on-wiki":"Lexo n?? Wikipedia","read-more":"M?? shum?? n?? Wikipedia"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Sabel??ga","WikiPhoenix"]},"continue-reading":"Forts??tt l??sa","gallery-loading-error":"Ett fel intr??ffade n??r sidan laddades in.","gallery-loading-error-offline":"Ingen internetanslutning ??r tillg??nglig.","gallery-loading-error-refresh":"Uppdatera","gallery-loading-still":"L??ser fortfarande in","gallery-unknown-author":"Ok??nd f??rfattare","preview-error-message":"Det uppstod ett problem n??r f??rhandsvisningen skulle visas.","preview-console-error-message":"F??rhandsgranskning ??r inte tillg??nglig f??r artikeln \\"$1\\" (Spr??k: $2)","read-on-wiki":"L??s p?? Wikipedia","read-more":"L??s mer p?? Wikipedia","preview-disambiguation-message":"Titeln <strong>$1</strong> ??r relaterad till fler ??n en artikel p?? Wikipedia.","preview-offline-message":"Ingen internetanslutning ??r tillg??nglig.","preview-offline-cta":"F??rs??k igen"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Veeven"]},"continue-reading":"??????????????? ????????????????????????????????????","gallery-loading-error":"??? ????????????????????? ?????????????????????????????? ????????????????????? ????????????????????????","gallery-loading-error-offline":"???????????????????????? ???????????????????????????????????? ?????????????????????????????? ????????????.","gallery-loading-error-refresh":"???????????????????????????","gallery-loading-still":"???????????? ??????????????????????????????","gallery-unknown-author":"??????????????????????????????????????? ???????????????","preview-error-message":"??? ???????????????????????? ????????????????????? ????????? ??????????????? ????????????????????????.","read-on-wiki":"???????????????????????????????????? ??????????????????","read-more":"???????????? ???????????????????????????????????? ??????????????????","preview-disambiguation-message":"<strong>$1</strong> ???????????? ???????????? ???????????? ?????????????????? ?????????????????????????????? ??????????????????????????? ??????????????????????????????????????????.","preview-offline-message":"???????????????????????? ???????????????????????????????????? ?????????????????????????????? ????????????.","preview-offline-cta":"??????????????? ???????????????????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Just Sayori","Patsagorn Y."]},"continue-reading":"?????????????????????","gallery-loading-error":"?????????????????????????????????????????????????????????????????????????????????","gallery-loading-error-offline":"?????????????????????????????????????????????????????????????????????","gallery-loading-error-refresh":"??????????????????","gallery-loading-still":"?????????????????????????????????????????????????????????","gallery-unknown-author":"???????????????????????????????????????????????????","preview-error-message":"???????????????????????????????????????????????????????????????????????????????????????","read-on-wiki":"???????????????????????????????????????????????????????????????????????????","read-more":"???????????????????????????????????????????????????????????????????????????","preview-disambiguation-message":"?????????????????? <strong>$1</strong> ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????","preview-offline-message":"?????????????????????????????????????????????????????????????????????","preview-offline-cta":"?????????????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Joanmp17"]},"gallery-loading-error-refresh":"????????????","read-on-wiki":"?????? ??????????????? ????????????","read-more":"???????????? ?????? ??????????????? ????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Mrkczr"]},"gallery-loading-error-offline":"Walang internet connection.","preview-offline-message":"Walang internet connection.","preview-offline-cta":"Subukang muli"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["????????????"]},"continue-reading":"?????????? ??????????????","gallery-loading-error":"???????????? ?????????? ?????????????????? ???????? ????????","gallery-loading-error-offline":"???? ?????????????????? ?????????? ????.","gallery-loading-error-refresh":"???????? ??????????","gallery-loading-still":"?????????? ????????????????","gallery-unknown-author":"?????????????? ???????? ??????????.","preview-error-message":"???? ?????? ???????? ?????????? ???????? ????????.","read-on-wiki":"???????????????????????? ??????????","read-more":"???????????? ?????????????????????? ??????????","preview-disambiguation-message":"?????? <strong>$1</strong> ???????????? ???? ?? ?????????????? ???? ?????????????????? ????????????.","preview-offline-message":"???????????????? ???? ??????????????.","preview-offline-cta":"?????????????????? ?????? ??????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Hedda","MuratTheTurkish","Sayginer"]},"continue-reading":"Okumaya Devam Et","gallery-loading-error":"Bu g??rsel y??klenirken bir hata olu??tu","gallery-loading-error-offline":"??nternet ba??lant??s?? yok.","gallery-loading-error-refresh":"Yenile","gallery-loading-still":"H??l?? y??kleniyor","gallery-unknown-author":"Yazar bilinmiyor","preview-error-message":"Bu ??nizlemeyi g??r??nt??lerken bir sorun olu??tu.","preview-console-error-message":"\'$1\' (Dil: $2) maddesinin ??nizlemesi mevcut de??il","read-on-wiki":"Vikipedi\'de oku","read-more":"Vikipedi\'de daha fazla okuyun","preview-disambiguation-message":"<strong>$1</strong> ba??l??????, Vikipedi\'deki birden fazla madde ile ilgilidir.","preview-offline-message":"??nternet ba??lant??s?? yok.","preview-offline-cta":"Tekrar dene"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Kotwys"]},"gallery-loading-error":"???? ?????????????? ?????????????? ?????????? ????????????","gallery-loading-error-refresh":"????????????????","gallery-loading-still":"?????? ???? ??????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["DDPAT","Piramidion"]},"continue-reading":"???????????????????? ??????????????","gallery-loading-error":"?????????????? ?????????????? ?????? ???????????????????????? ?????????? ????????????????????","gallery-loading-error-offline":"?????????? ?????????????????????? ???? ??????????????????.","gallery-loading-error-refresh":"??????????????","gallery-loading-still":"?????? ???? ????????????????????????????","gallery-unknown-author":"?????????? ??????????????????","preview-error-message":"?????????????? ?????????? ???????????????? ?????? ?????? ???????????? ?????????? ???????????????????????? ??????????????????.","preview-console-error-message":"???????????????????? ???????????????? ???????????? ??$1?? ?????????????????????? (????????: $2)","read-on-wiki":"???????????? ?? ??????????????????","read-more":"???????????? ???????????? ?? ??????????????????","preview-disambiguation-message":"?????????? <strong>$1</strong> ???????????????????? ?????????? ?????? ?????????? ???????????? ?? ??????????????????.","preview-offline-message":"?????????? ?????????????????????? ???? ??????????????????.","preview-offline-cta":"?????????????????? ???? ??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Nguy???n M???nh An"]},"continue-reading":"Ti???p t???c ?????c","gallery-loading-error":"???? x???y ra l???i khi t???i h??nh ???nh n??y","gallery-loading-error-offline":"Kh??ng c?? k???t n???i internet.","gallery-loading-error-refresh":"L??m m???i","gallery-loading-still":"??ang t???i","gallery-unknown-author":"T??c gi??? kh??ng r??.","preview-error-message":"???? x???y ra s??? c??? khi hi???n th??? b???n xem tr?????c n??y.","read-on-wiki":"?????c tr??n Wikipedia","read-more":"?????c th??m tr??n Wikipedia","preview-disambiguation-message":"Ti??u ????? <strong>$1</strong> c?? li??n quan ?????n nhi???u b??i vi???t tr??n Wikipedia.","preview-offline-message":"Kh??ng c?? k???t n???i internet.","preview-offline-cta":"Th??? l???i"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Lea.Fakauvea"]},"continue-reading":"Hoko atu tau lau","gallery-loading-error":"Ne\'e hala te fakah?? o te p??ki aeni","gallery-loading-error-offline":"Mole ha\'ele te neti.","gallery-loading-error-refresh":"Fakafo\'ou","gallery-loading-still":"Kei lolotoga mai","gallery-unknown-author":"Mole ilo\'i pe ko ai ne\'e ina tohi","preview-error-message":"Ne\'e t?? hala tona fakah?? atu fakatomu\'a.","read-on-wiki":"Lau i te Wikipedia","read-more":"Fakak??to?? atu tona lau i te Wikipedia","preview-disambiguation-message":"P??sina <strong>$1</strong> e \'alu tahi mo \'ihi ake p??sina o te Wikipedia.","preview-offline-message":"Mole ha\'ele te neti.","preview-offline-cta":"Toe faiga\'i."}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Narazeni"]},"continue-reading":"???????????????????????? ?????????????????????????????????","gallery-loading-error":"?????? ????????????????????? ????????????????????????????????? ?????????????????? ????????????????????? ?????????????????????","gallery-loading-error-offline":"?????? ?????? ??????????????????????????????????????? ????????????????????????","gallery-loading-error-refresh":"???????????????????????????","gallery-loading-still":"??????????????? ??????????????????","gallery-unknown-author":"?????????????????? ????????????????????? ??????","preview-error-message":"?????? ??????????????????????????????????????? ????????????????????? ?????????????????? ??????????????????????????? ?????????????????????????????????.","read-on-wiki":"?????????????????????????????? ?????????????????????","read-more":"?????????????????? ????????????????????? ??????????????????????????????","preview-disambiguation-message":"????????????????????? <strong>$1</strong> ?????????????????????????????? ??????????????? ??????????????? ????????????????????????????????? ?????? ????????????????????????.","preview-offline-message":"?????? ?????? ??????????????????????????????????????? ????????????.","preview-offline-cta":"????????? ?????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Hakim1bal","Ya2sine"]},"continue-reading":"????????? ????????? ???????????????","gallery-loading-error-refresh":"??????????????????","gallery-loading-still":"???????????? ???????????????","gallery-unknown-author":"??????????????? ???????????????","read-on-wiki":"?????? ??? ???????????????????????????","read-more":"?????? ??????????????? ??? ???????????????????????????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Gerongfenh","Shizhao","SkEy","?????????"]},"continue-reading":"????????????","gallery-loading-error":"???????????????????????????????????????","gallery-loading-error-offline":"???????????????????????????","gallery-loading-error-refresh":"??????","gallery-loading-still":"????????????","gallery-unknown-author":"????????????","preview-error-message":"??????????????????????????????","read-on-wiki":"????????????????????????","read-more":"????????????????????????????????????","preview-disambiguation-message":"???????????????????????????<strong>$1</strong>?????????????????????","preview-offline-message":"???????????????????????????","preview-offline-cta":"??????"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"@metadata":{"authors":["Kly"]},"continue-reading":"????????????","gallery-loading-error":"??????????????????????????????","gallery-loading-error-offline":"??????????????????????????????","gallery-loading-error-refresh":"????????????","gallery-loading-still":"????????????","gallery-unknown-author":"????????????","preview-error-message":"????????????????????????????????????","preview-console-error-message":"?????????$1???????????????????????????$2???","read-on-wiki":"????????????????????????","read-more":"?????????????????????????????????","preview-disambiguation-message":"??????<strong>$1</strong>?????????????????????????????????????????????","preview-offline-message":"??????????????????????????????","preview-offline-cta":"????????????"}'
      );
    },
    function (e, i, n) {
      var r = n(0),
        a = n(90);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var t = { insert: 'head', singleton: !1 };
      r(a, t);
      e.exports = a.locals || {};
    },
    function (e, i, n) {
      (i = n(1)(!1)).push([
        e.i,
        '.wikipediapreview-gallery {\n  display: flex;\n  height: 80px;\n  margin-top: 5px;\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.wikipediapreview-gallery-row {\n  display: flex;\n  overflow: scroll;\n}\n.wikipediapreview-gallery-image {\n  height: 100%;\n  min-width: 100px;\n  background-size: cover;\n  background-position: center;\n  background-color: #eaecf0;\n  border-radius: 2px;\n  margin: 0 2px 0 2px;\n}\n.wp-gallery-fullscreen {\n  background-color: #202122;\n  z-index: 1100;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Lato\', \'Helvetica\', \'Arial\', sans-serif;\n}\n.wp-gallery-fullscreen-close {\n  position: absolute;\n  cursor: pointer;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzE1MjEyNCIgZmlsbC1vcGFjaXR5PSIuNjEiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMCA2LjUxMUwxOC40ODkgNSAxMi41IDEwLjk4OSA2LjUxMSA1IDUgNi41MTFsNS45ODkgNS45ODlMNSAxOC40ODkgNi41MTEgMjBsNS45ODktNS45ODlMMTguNDg5IDIwIDIwIDE4LjQ4OSAxNC4wMTEgMTIuNXoiLz48L2c+PC9zdmc+");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 44px;\n  top: 16px;\n  right: 16px;\n  height: 44px;\n  z-index: 1120;\n}\n.wp-gallery-fullscreen-main {\n  display: flex;\n  max-width: 100%;\n  height: 100%;\n}\n.wp-gallery-fullscreen-slider {\n  display: flex;\n  transition: margin-left 0.25s ease-in-out;\n  flex-wrap: wrap;\n  flex: 1 0 auto;\n  touch-action: none;\n}\n.wp-gallery-fullscreen-slider-item {\n  position: relative;\n  width: calc(100vw);\n  height: calc(100%);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.wp-gallery-fullscreen-slider-item img {\n  background-color: #fff;\n  transition: transform 0.35s ease-in-out;\n}\n.wp-gallery-fullscreen-slider-item-caption {\n  position: absolute;\n  background-color: rgba(32, 33, 34, 0.6);\n  bottom: 59px;\n  width: calc(100vw + 1px);\n  font-size: 16px;\n  line-height: 1.56;\n  color: #f8f9fa;\n  max-height: 41.2%;\n}\n.wp-gallery-fullscreen-slider-item-caption-expand-cue {\n  width: 37px;\n  height: 3px;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxaDM2LjVNMCAyaDM2LjUiIHN0cm9rZT0iI2ZmZiIvPjwvc3ZnPg==");\n  background-repeat: no-repeat;\n  background-color: transparent;\n  margin: auto;\n  margin-top: 10px;\n  padding-bottom: 4px;\n  transition: height 0.25s ease-in-out;\n}\n.wp-gallery-fullscreen-slider-item-caption-expand-cue.expanded {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjY5OCAxLjkyM0wxOC41IDdsMTcuNDUzLTUuMDc3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIzNS45NTMiIGN5PSIxLjkyMyIgcng9IjEuMDQ3IiByeT0iLjkyMyIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIGN4PSIuNjk4IiBjeT0iMS45MjMiIHJ4PSIuNjk4IiByeT0iLjkyMyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==");\n  height: 8px;\n}\n.wp-gallery-fullscreen-slider-item-caption-text {\n  padding-left: 13px;\n  padding-right: 13px;\n  margin-top: 6px;\n  max-height: 80px;\n  overflow-y: scroll;\n  transition: max-height 0.25s ease-in-out;\n  touch-action: none;\n}\n.wp-gallery-fullscreen-slider-item-caption::-webkit-scrollbar {\n  display: none;\n}\n.wp-gallery-fullscreen-slider-item-attribution {\n  position: absolute;\n  background-color: #202122;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  font-size: 16px;\n  color: #f8f9fa;\n  border: #f8f9fa;\n  height: 44px;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 15px;\n  padding-left: 12px;\n}\n.wp-gallery-fullscreen-slider-item-attribution::-webkit-scrollbar {\n  display: none;\n}\n.wp-gallery-fullscreen-slider-item-attribution-info {\n  display: flex;\n  align-items: center;\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-cc {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMjAyMTIyIiBkPSJNLTE2LTYxN2gzNjBWMjNILTE2eiIvPjxwYXRoIGQ9Ik0tMTYtOWgzNjB2MzJILTE2eiIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik03IDBhNyA3IDAgMTAwIDE0QTcgNyAwIDAwNyAwem0wIDEzQTYgNiAwIDExNyAxYTYgNiAwIDAxMCAxMnoiLz48cGF0aCBkPSJNNS4zIDguNGMtLjcgMC0xLS40LTEtMS4yIDAtLjguMy0xLjIgMS0xLjIuNCAwIC42LjIuOC42bC45LS41YTIgMiAwIDAwLTEuOS0xIDIgMiAwIDAwLTEuNS42QTEuODkgMS44OSAwIDAwMyA3LjJhMi4xMDcgMi4xMDcgMCAwMC42IDEuNiAyIDIgMCAwMDEuNS42Yy43OC0uMDE0IDEuNS0uNDMgMS45LTEuMWwtLjktLjRjLS4xNjYuMjktLjQ2Ny40NzctLjguNXoiLz48cGF0aCBkPSJNOS4zIDguNGMtLjcgMC0xLS40LTEtMS4yIDAtLjguMy0xLjIgMS0xLjIuNCAwIC42LjIuOC42bC45LS41YTIgMiAwIDAwLTEuOS0xIDIgMiAwIDAwLTEuNS42QTEuODkgMS44OSAwIDAwNyA3LjJhMi4xMDcgMi4xMDcgMCAwMC42IDEuNiAyIDIgMCAwMDEuNS42Yy43OC0uMDE0IDEuNS0uNDMgMS45LTEuMWwtLjktLjRjLS4xNjYuMjktLjQ2Ny40NzctLjguNXoiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-by {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMjAyMTIyIiBkPSJNLTM4LTYxN2gzNjBWMjNILTM4eiIvPjxwYXRoIGQ9Ik0tMzgtOWgzNjB2MzJILTM4eiIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik03IDBhNyA3IDAgMTAwIDE0QTcgNyAwIDAwNyAwem0wIDEzQTYgNiAwIDExNyAxYTYgNiAwIDAxMCAxMnoiLz48cGF0aCBkPSJNOC44OSA1LjI3djIuODdIOC4xdjMuMzlINS45MlY4LjEyaC0uODFWNS4yN2EuNDQ4LjQ0OCAwIDAxLjQ2LS40NmgyLjg2YS40My40MyAwIDAxLjMxLjEzLjM5Mi4zOTIgMCAwMS4xNS4zM3pNNiAzLjQ2YS44Ny44NyAwIDAxMS0xIC44Ny44NyAwIDAxMSAxIC44Ny44NyAwIDAxLTEgMSAuODcuODcgMCAwMS0xLTF6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-sa {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMjAyMTIyIiBkPSJNLTYwLTYxN2gzNjBWMjNILTYweiIvPjxwYXRoIGQ9Ik0tNjAtOWgzNjB2MzJILTYweiIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik03IDBhNyA3IDAgMTAwIDE0QTcgNyAwIDAwNyAwem0wIDEzQTYgNiAwIDExNyAxYTYgNiAwIDAxMCAxMnoiLz48cGF0aCBkPSJNMy44OSA2YTMuMTQzIDMuMTQzIDAgMDExLTIgMi45OTggMi45OTggMCAwMTItLjcgMy4zNyAzLjM3IDAgMDEyLjY5IDEuMSAzLjg1MiAzLjg1MiAwIDAxMSAyLjczIDMuNzcyIDMuNzcyIDAgMDEtMSAyLjY5IDMuNDMgMy40MyAwIDAxLTIuNjMgMS4wNyAzLjE1IDMuMTUgMCAwMS0yLjA2LS43MiAzLjA0NSAzLjA0NSAwIDAxLTEtMmgxLjczYzAgLjg1LjU1IDEuMjcgMS41MyAxLjI3YTEuMzkgMS4zOSAwIDAwMS4xOC0uNjMgMi44MjEgMi44MjEgMCAwMC40Ni0xLjcxIDIuNzcgMi43NyAwIDAwLS40Mi0xLjY4IDEuMzgxIDEuMzgxIDAgMDAtMS4xNy0uNjNBMS4zNjggMS4zNjggMCAwMDUuNjIgNmguNUw0Ljc1IDcuNDIgMy4zNyA2aC41MnoiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-fair {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMjAyMTIyIiBkPSJNLTE2LTYyMWgzNjBWMTlILTE2eiIvPjxwYXRoIGQ9Ik0tMTYtMTNoMzYwdjMySC0xNnoiLz48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0wIDBsMiA1LTIgNWgxNFYwSDB6bTEzIDlIMS41TDMgNSAxLjUgMUgxM3Y4eiIvPjxwYXRoIGQ9Ik0xNCA3SDlsMS0yLTEtMmg1eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-public {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PGcgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTEwLjcgOS4zYy4xOTQtLjQwNi4yOTYtLjg1LjMtMS4zSDkuM2wxLjQgMS4zem0tLjItNC44YTQuMDAyIDQuMDAyIDAgMDAtNS44LTEuMmwxLjIgMS4yQTIgMiAwIDAxOS4xIDZoMS44YTIuNzA2IDIuNzA2IDAgMDAtLjQtMS41eiIvPjxwYXRoIGQ9Ik03IDBhNyA3IDAgMTAwIDE0QTcgNyAwIDAwNyAwek0xIDdhNS43ODEgNS43ODEgMCAwMTEtMy4ybDEuNCAxLjRhNS4xODggNS4xODggMCAwMC45IDUuMiA0LjM5IDQuMzkgMCAwMDQuOS43bDEgMS4xYy0uOTIzLjU5Ny0yIC45MS0zLjEuOUE2LjE5IDYuMTkgMCAwMTEgN3ptMy45LS4ybDMgMy4xYTIuMjMxIDIuMjMxIDAgMDEtMi41LS44IDQuNzk3IDQuNzk3IDAgMDEtLjUtMi4zem02LjQgNC40TDIuOSAyLjdBNS41MDMgNS41MDMgMCAwMTcgMWE2IDYgMCAwMTYgNiA2LjM0NSA2LjM0NSAwIDAxLTEuNyA0LjJ6Ii8+PC9nPjwvc3ZnPg==");\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-author {\n  width: 220px;\n  height: 14px;\n  margin-right: 4px;\n  font-size: 12px;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.wp-gallery-fullscreen-slider-item-attribution-more-info {\n  height: 44px;\n  width: 44px;\n  display: flex;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjUgMTUuODVhNi4zNSA2LjM1IDAgMTE2LjM1LTYuMzUgNi4zNiA2LjM2IDAgMDEtNi4zNSA2LjM1ek0xMC41IDJhNy41IDcuNSAwIDEwMCAxNSA3LjUgNy41IDAgMDAwLTE1em0uNTggNS43N3Y0LjYxaDEuMTV2MS4xMkg4Ljc3di0xLjEyaDEuMTVWOC45Mkg4Ljc3VjcuNzdoMi4zMXpNOS45MiA1LjVoMS4xNnYxLjEySDkuOTJWNS41eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==");\n  background-repeat: no-repeat;\n  background-position: center;\n  padding-right: 20px;\n  z-index: 1120;\n}\n.wp-gallery-fullscreen-slider-item-attribution-more-info-link {\n  display: block;\n  height: 44px;\n  width: 44px;\n}\n.wp-gallery-fullscreen-slider-item-loading {\n  position: absolute;\n  top: calc(50% - 10px);\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.wp-gallery-fullscreen-slider-item-loading-icons {\n  margin-left: 116px;\n}\n.wp-gallery-fullscreen-slider-item-loading-text {\n  visibility: hidden;\n  padding-top: 10px;\n  text-align: center;\n  font-size: 12px;\n  color: #f8f9fa;\n}\n.wp-gallery-fullscreen-slider-item-loading-error {\n  top: calc(50% - 80px);\n  left: 0;\n  width: 100%;\n  visibility: hidden;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTkuNjM4IDE2LjM2TDExLjUyOCAyLjNhMS44NTEgMS44NTEgMCAwMC0xLjUzLTEuMDkgMS44NSAxLjg1IDAgMDAtMS41MiAxLjA5TC4zNTggMTYuMzZDLS40ODIgMTcuODEuMjA4IDE5IDEuODc4IDE5aDE2LjI0YzEuNjcgMCAyLjM2LTEuMTkgMS41Mi0yLjY0em0tOC42NC0uMzZoLTJ2LTJoMnYyem0wLTRoLTJWNmgydjZ6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsPSIjMDAwIiB4bGluazpocmVmPSIjYSIvPjxnIGZpbGw9IiNGOEY5RkEiIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiLz48L2c+PC9nPjwvc3ZnPg==");\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n}\n.wp-gallery-fullscreen-slider-item-loading-error-text {\n  padding-top: 85px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 16px;\n  color: #f8f9fa;\n}\n.wp-gallery-fullscreen-slider-item-loading-error-refresh {\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  color: #36c;\n}\n.wp-gallery-fullscreen-slider-item-loading-error.offline {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjk5IDlDMTkuMTUgNS4xNiAxMy44IDMuNzYgOC44NCA0Ljc4bDIuNTIgMi41MmMzLjQ3LS4xNyA2Ljk5IDEuMDUgOS42MyAzLjdsMi0yem0tNCA0YTkuNzkzIDkuNzkzIDAgMDAtNC40OS0yLjU2bDMuNTMgMy41My45Ni0uOTd6TTIgMy4wNUw1LjA3IDYuMUMzLjYgNi44MiAyLjIyIDcuNzggMSA5bDEuOTkgMmMxLjI0LTEuMjQgMi42Ny0yLjE2IDQuMi0yLjc3bDIuMjQgMi4yNEE5LjY4NCA5LjY4NCAwIDAwNSAxM3YuMDFMNi45OSAxNWE3LjA0MiA3LjA0MiAwIDAxNC45Mi0yLjA2TDE4Ljk4IDIwbDEuMjctMS4yNkwzLjI5IDEuNzkgMiAzLjA1ek05IDE3bDMgMyAzLTNhNC4yMzcgNC4yMzcgMCAwMC02IDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+");\n}\n.wp-gallery-fullscreen-slider-item-loading-spinner-animation {\n  width: 70px;\n  opacity: 0.8;\n  display: inline-block;\n  white-space: nowrap;\n}\n.wp-gallery-fullscreen-slider-item-loading-spinner-animation .wp-gallery-fullscreen-slider-item-loading-spinner-animation-bounce,\n.wp-gallery-fullscreen-slider-item-loading-spinner-animation:before,\n.wp-gallery-fullscreen-slider-item-loading-spinner-animation:after {\n  content: \'\';\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background-color: #c8ccd1;\n  border-radius: 100%;\n  -webkit-animation: bounce 1.4s infinite ease-in-out;\n  animation: bounce 1.4s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.wp-gallery-fullscreen-slider-item-loading-spinner-animation:before {\n  -webkit-animation-delay: -0.33s;\n  animation-delay: -0.33s;\n}\n.wp-gallery-fullscreen-slider-item-loading-spinner-animation:after {\n  -webkit-animation-delay: -0.01s;\n  animation-delay: -0.01s;\n}\n@-webkit-keyframes bounce {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0.6);\n    transform: scale(0.6);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    background-color: #bbb;\n  }\n}\n@keyframes bounce {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0.6);\n    -ms-transform: scale(0.6);\n    transform: scale(0.6);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.wp-gallery-fullscreen-slider-button {\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  width: 24px;\n  color: #72777d;\n  position: absolute;\n}\n.wp-gallery-fullscreen-slider-button.previous {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDIwYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTUuNTIzIDAgMTAgMCAwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTB6IiBmaWxsPSIjMTUyMTI0IiBmaWxsLW9wYWNpdHk9Ii42MSIvPjxwYXRoIGQ9Ik0xMiAxNmwxLjQxLTEuNDFMOC44MyAxMGw0LjU4LTQuNTlMMTIgNGwtNiA2IDYgNnoiIGZpbGw9IiNFQUYzRkYiLz48L3N2Zz4=");\n  left: 16px;\n  top: 0;\n  height: 100%;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 1100;\n}\n.wp-gallery-fullscreen-slider-button.next {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDIwYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTUuNTIzIDAgMTAgMCAwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTB6IiBmaWxsPSIjMTUyMTI0IiBmaWxsLW9wYWNpdHk9Ii42MSIvPjxwYXRoIGQ9Ik03LjQxIDRMNiA1LjQxIDEwLjU4IDEwIDYgMTQuNTkgNy40MSAxNmw2LTYtNi02eiIgZmlsbD0iI0VBRjNGRiIvPjwvc3ZnPg==");\n  right: 16px;\n  height: 100%;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 1100;\n}\n.wp-gallery-fullscreen-bottom {\n  height: 20vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.wp-gallery-fullscreen-loading {\n  position: absolute;\n  height: 112px;\n  width: 270px;\n}\n.wp-gallery-fullscreen-loading-icons {\n  margin-left: 116px;\n}\n.wp-gallery-fullscreen-loading-text {\n  position: absolute;\n  bottom: 10px;\n  left: -8px;\n  width: 292px;\n  text-align: center;\n  font-size: 12px;\n  color: #f8f9fa;\n}\n.wp-gallery-fullscreen-loading-error {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTkuNjM4IDE2LjM2TDExLjUyOCAyLjNhMS44NTEgMS44NTEgMCAwMC0xLjUzLTEuMDkgMS44NSAxLjg1IDAgMDAtMS41MiAxLjA5TC4zNTggMTYuMzZDLS40ODIgMTcuODEuMjA4IDE5IDEuODc4IDE5aDE2LjI0YzEuNjcgMCAyLjM2LTEuMTkgMS41Mi0yLjY0em0tOC42NC0uMzZoLTJ2LTJoMnYyem0wLTRoLTJWNmgydjZ6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsPSIjMDAwIiB4bGluazpocmVmPSIjYSIvPjxnIGZpbGw9IiNGOEY5RkEiIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiLz48L2c+PC9nPjwvc3ZnPg==");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  top: 45px;\n  left: 125px;\n}\n.wp-gallery-fullscreen-loading-error-refresh {\n  position: absolute;\n  bottom: -20px;\n  left: 100px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #36c;\n}\n.wp-gallery-fullscreen-loading-spinner-animation {\n  margin: 50px auto 0;\n  width: 70px;\n  opacity: 0.8;\n  display: inline-block;\n  white-space: nowrap;\n}\n.wp-gallery-fullscreen-loading-spinner-animation .wp-gallery-fullscreen-loading-spinner-animation-bounce,\n.wp-gallery-fullscreen-loading-spinner-animation:before,\n.wp-gallery-fullscreen-loading-spinner-animation:after {\n  content: \'\';\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background-color: #c8ccd1;\n  border-radius: 100%;\n  -webkit-animation: bounce 1.4s infinite ease-in-out;\n  animation: bounce 1.4s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.wp-gallery-fullscreen-loading-spinner-animation:before {\n  -webkit-animation-delay: -0.33s;\n  animation-delay: -0.33s;\n}\n.wp-gallery-fullscreen-loading-spinner-animation:after {\n  -webkit-animation-delay: -0.01s;\n  animation-delay: -0.01s;\n}\n@-webkit-keyframes bounce {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0.6);\n    transform: scale(0.6);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    background-color: #bbb;\n  }\n}\n@keyframes bounce {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0.6);\n    -ms-transform: scale(0.6);\n    transform: scale(0.6);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.wp-gallery-fullscreen-focus-mode .previous,\n.wp-gallery-fullscreen-focus-mode .next,\n.wp-gallery-fullscreen-focus-mode .wp-gallery-fullscreen-close,\n.wp-gallery-fullscreen-focus-mode .wp-gallery-fullscreen-slider-item-caption,\n.wp-gallery-fullscreen-focus-mode .wp-gallery-fullscreen-slider-item-attribution {\n  visibility: hidden;\n}\n.wp-gallery-fullscreen[dir=\'rtl\'] .wp-gallery-fullscreen-close {\n  right: auto;\n  left: 16px;\n}\n.wp-gallery-fullscreen[dir=\'rtl\'] .wp-gallery-fullscreen-slider {\n  transition: margin-right 0.25s ease-in-out;\n}\n.wp-gallery-fullscreen[dir=\'rtl\'] .wp-gallery-fullscreen-slider-button.previous {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDIwYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTUuNTIzIDAgMTAgMCAwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTB6IiBmaWxsPSIjMTUyMTI0IiBmaWxsLW9wYWNpdHk9Ii42MSIvPjxwYXRoIGQ9Ik03LjQxIDRMNiA1LjQxIDEwLjU4IDEwIDYgMTQuNTkgNy40MSAxNmw2LTYtNi02eiIgZmlsbD0iI0VBRjNGRiIvPjwvc3ZnPg==");\n  left: auto;\n  right: 16px;\n}\n.wp-gallery-fullscreen[dir=\'rtl\'] .wp-gallery-fullscreen-slider-button.next {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDIwYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTUuNTIzIDAgMTAgMCAwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTB6IiBmaWxsPSIjMTUyMTI0IiBmaWxsLW9wYWNpdHk9Ii42MSIvPjxwYXRoIGQ9Ik0xMiAxNmwxLjQxLTEuNDFMOC44MyAxMGw0LjU4LTQuNTlMMTIgNGwtNiA2IDYgNnoiIGZpbGw9IiNFQUYzRkYiLz48L3N2Zz4=");\n  left: 16px;\n  right: auto;\n}\n.wp-gallery-fullscreen[dir=\'rtl\'] .wp-gallery-fullscreen-slider-item-attribution {\n  padding-left: 0;\n  padding-right: 20px;\n}\n.wp-gallery-fullscreen[dir=\'rtl\'] .wp-gallery-fullscreen-loading-icons {\n  margin-left: 0;\n  margin-right: 116px;\n}\n.wp-gallery-fullscreen-slider-item-attribution-info-license,\n.wp-gallery-fullscreen-slider-item-attribution-info-cc,\n.wp-gallery-fullscreen-slider-item-attribution-info-by,\n.wp-gallery-fullscreen-slider-item-attribution-info-sa,\n.wp-gallery-fullscreen-slider-item-attribution-info-fair,\n.wp-gallery-fullscreen-slider-item-attribution-info-public {\n  background-repeat: no-repeat;\n  width: 14px;\n  height: 14px;\n  margin-right: 8px;\n}\n',
        '',
      ]),
        (e.exports = i);
    },
    function (e, i, n) {
      (i = n(1)(!1)).push([
        e.i,
        '.wp-popup,\n.wp-touch-popup {\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 8px 8px 0 0;\n  background-color: #fff;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  z-index: 1100;\n  overflow: hidden;\n  position: absolute;\n}\n.wp-touch-popup {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n@media (orientation: landscape) {\n  .wp-touch-popup {\n    margin: 0 106px;\n  }\n}\n.wp-dark-screen {\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1090;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n',
        '',
      ]),
        (e.exports = i);
    },
    function (e, i, n) {
      var r = n(0),
        a = n(93);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var t = { insert: 'head', singleton: !1 };
      r(a, t);
      e.exports = a.locals || {};
    },
    function (e, i, n) {
      (i = n(1)(!1)).push([
        e.i,
        ".wikipediapreview {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 8px 8px 0 0;\n  background-color: #fff;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Lato', 'Helvetica', 'Arial', sans-serif;\n}\n.wikipediapreview * {\n  padding: 0;\n  box-sizing: border-box;\n  -ms-overflow-style: none;\n}\n.wikipediapreview *::-webkit-scrollbar {\n  display: none;\n}\n.wikipediapreview-header {\n  display: flex;\n  height: 72px;\n  line-height: 62px;\n}\n.wikipediapreview-header-image {\n  background-size: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #eaecf0;\n  height: 56px;\n  width: 56px;\n  border-radius: 4px;\n  border: solid 1px #eaecf0;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n.wikipediapreview-header-wordmark {\n  background-image: url(https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg );\n  background-repeat: no-repeat;\n  background-position: left;\n  height: 100%;\n  flex-grow: 1;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.wikipediapreview-header-wordmark-with-image {\n  margin-top: 8px;\n}\n.wikipediapreview-header-wordmark-ar {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-ar.svg');\n}\n.wikipediapreview-header-wordmark-atj {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-atj.svg');\n}\n.wikipediapreview-header-wordmark-bn {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-bn.svg');\n}\n.wikipediapreview-header-wordmark-ca {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-ca.svg');\n}\n.wikipediapreview-header-wordmark-cs {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-cs.svg');\n}\n.wikipediapreview-header-wordmark-cy {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-cy.svg');\n}\n.wikipediapreview-header-wordmark-et {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-et.svg');\n}\n.wikipediapreview-header-wordmark-fa {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-fa.svg');\n}\n.wikipediapreview-header-wordmark-fr {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-fr.svg');\n}\n.wikipediapreview-header-wordmark-he {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-he.svg');\n}\n.wikipediapreview-header-wordmark-hi {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-hi.svg');\n}\n.wikipediapreview-header-wordmark-ja {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-ja.svg');\n}\n.wikipediapreview-header-wordmark-la {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-la.svg');\n}\n.wikipediapreview-header-wordmark-ps {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-ps.svg');\n}\n.wikipediapreview-header-wordmark-ru {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-ru.svg');\n}\n.wikipediapreview-header-wordmark-sd {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-sd.svg');\n}\n.wikipediapreview-header-wordmark-sr {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-sr.svg');\n}\n.wikipediapreview-header-wordmark-szl {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-szl.svg');\n}\n.wikipediapreview-header-wordmark-tr {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-tr.svg');\n}\n.wikipediapreview-header-wordmark-ur {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-ur.svg');\n}\n.wikipediapreview-header-wordmark-uz {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-uz.svg');\n}\n.wikipediapreview-header-wordmark-zh-c {\n  background-image: url('https://wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-zh-c.svg');\n}\n.wikipediapreview-header-closebtn {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNTQ1OTVEIiBkPSJNNi4zNjMgNUwyMCAxOC42MzcgMTguNjM3IDIwIDUgNi4zNjN6Ii8+PHBhdGggZmlsbD0iIzcyNzc3RCIgZD0iTTIwIDYuMzYzTDYuMzYzIDIwIDUgMTguNjM3IDE4LjYzNyA1eiIvPjwvZz48L3N2Zz4=\");\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  height: 100%;\n  text-align: center;\n  width: 50px;\n}\n.wikipediapreview-body {\n  background-color: #fff;\n  max-height: 248px;\n  overflow: hidden;\n}\n.wikipediapreview-body:after {\n  content: ' ';\n  position: absolute;\n  width: 100%;\n  bottom: 35px;\n  left: 0;\n  right: 200px;\n  top: 235px;\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #fff 100%);\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #fff 100%);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);\n}\n.wikipediapreview-body p {\n  margin: 0;\n  color: #202122;\n  line-height: 1.6;\n  font-size: 18px;\n  padding: 10px 20px;\n}\n.wikipediapreview-body ul {\n  padding-left: 35px;\n  padding-right: 20px;\n  line-height: 1.6;\n}\n.wikipediapreview-body-message {\n  display: flex;\n  margin-left: 23px;\n  margin-right: 23px;\n  font-size: 16px;\n  line-height: 1.4;\n  color: #000;\n}\n.wikipediapreview-body-icon {\n  display: absolute;\n  vertical-align: middle;\n  margin-right: 12px;\n  width: 20px;\n  height: 20px;\n}\n.wikipediapreview-body-action {\n  margin-left: 55px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.wikipediapreview-body-action a {\n  color: #36c;\n}\n.wikipediapreview-body.wikipediapreview-body-error .wikipediapreview-body-icon {\n  content: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iIzcyNzc3RCIgZD0iTTkgMTNoMnYySDl2LTJ6bTAtOGgydjZIOVY1em0uOTktNUM0LjQ3IDAgMCA0LjQ4IDAgMTBzNC40NyAxMCA5Ljk5IDEwQzE1LjUyIDIwIDIwIDE1LjUyIDIwIDEwUzE1LjUyIDAgOS45OSAwek0xMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6Ii8+PC9zdmc+\");\n}\n.wikipediapreview-body.wikipediapreview-body-disambiguation .wikipediapreview-body-icon {\n  content: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTMgM2EyIDIgMCAwMTIgMnYxM2EyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMnptMy0zYTIgMiAwIDAxMiAydjE0aC0yVjJINVYwem0tMyAxNUg0djFoOXYtMXptMC0ySDR2MWg5di0xem0wLTJINHYxaDl2LTF6bTAtNkg5djVoNFY1ek04IDlINHYxaDRWOXptMC0ySDR2MWg0Vjd6bTAtMkg0djFoNFY1eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWxsPSIjNzI3NzdEIiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=\");\n}\n.wikipediapreview-body.wikipediapreview-body-offline .wikipediapreview-body-message {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.wikipediapreview-body.wikipediapreview-body-offline .wikipediapreview-body-icon {\n  content: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjQgLjAxYzAtLjAxIDAtLjAxIDAgMEwwIDB2MjRoMjRWLjAxek0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYweiIvPjxwYXRoIGQ9Ik0yNCAuMDFjMC0uMDEgMC0uMDEgMCAwTDAgMHYyNGgyNFYuMDF6TTAgMGgyNHYyNEgwVjB6bTAgMGgyNHYyNEgwVjB6Ii8+PHBhdGggZmlsbD0iIzcyNzc3RCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIuOTkgOUMxOS4xNSA1LjE2IDEzLjggMy43NiA4Ljg0IDQuNzhsMi41MiAyLjUyYzMuNDctLjE3IDYuOTkgMS4wNSA5LjYzIDMuN2wyLTJ6bS00IDRhOS43OTMgOS43OTMgMCAwMC00LjQ5LTIuNTZsMy41MyAzLjUzLjk2LS45N3pNMiAzLjA1TDUuMDcgNi4xQzMuNiA2LjgyIDIuMjIgNy43OCAxIDlsMS45OSAyYzEuMjQtMS4yNCAyLjY3LTIuMTYgNC4yLTIuNzdsMi4yNCAyLjI0QTkuNjg0IDkuNjg0IDAgMDA1IDEzdi4wMUw2Ljk5IDE1YTcuMDQyIDcuMDQyIDAgMDE0LjkyLTIuMDZMMTguOTggMjBsMS4yNy0xLjI2TDMuMjkgMS43OSAyIDMuMDV6TTkgMTdsMyAzIDMtM2E0LjIzNyA0LjIzNyAwIDAwLTYgMHoiLz48L2c+PC9zdmc+\");\n}\n.wikipediapreview-body.wikipediapreview-body-offline .wikipediapreview-body-action {\n  margin: 12px 49px;\n}\n.wikipediapreview-body.wikipediapreview-body-loading {\n  padding: 10px 20px;\n}\n.wikipediapreview-body.wikipediapreview-body-loading:after {\n  content: none;\n}\n.wikipediapreview-body.wikipediapreview-body-loading .wikipediapreview-body-loading-line {\n  height: 10px;\n  margin-top: 12px;\n  border-radius: 1px;\n  background: linear-gradient(to right, #ebe9e9, #d6d3d3, #eaecf0);\n  background-size: 200% 200%;\n  -webkit-animation: animate-load 2s ease infinite;\n  -moz-animation: animate-load 2s ease infinite;\n  animation: animate-load 2s ease infinite;\n}\n.wikipediapreview-body.wikipediapreview-body-loading .wikipediapreview-body-loading-line.larger {\n  width: 100%;\n}\n.wikipediapreview-body.wikipediapreview-body-loading .wikipediapreview-body-loading-line.medium {\n  width: 80%;\n}\n.wikipediapreview-body.wikipediapreview-body-loading .wikipediapreview-body-loading-line.smaller {\n  width: 60%;\n}\n@-webkit-keyframes animate-load {\n  0% {\n    background-position: 10% 0%;\n  }\n  50% {\n    background-position: 91% 100%;\n  }\n  100% {\n    background-position: 10% 0%;\n  }\n}\n@-moz-keyframes animate-load {\n  0% {\n    background-position: 10% 0%;\n  }\n  50% {\n    background-position: 91% 100%;\n  }\n  100% {\n    background-position: 10% 0%;\n  }\n}\n@keyframes animate-load {\n  0% {\n    background-position: 10% 0%;\n  }\n  50% {\n    background-position: 91% 100%;\n  }\n  100% {\n    background-position: 10% 0%;\n  }\n}\n.wikipediapreview-footer {\n  position: relative;\n}\n.wikipediapreview-footer-cta {\n  width: 100%;\n  height: 50px;\n  text-decoration: none;\n  text-align: center;\n  padding: 16px;\n  font-size: 18px;\n  color: #36c;\n}\n.wikipediapreview-footer-cta-readmore {\n  cursor: pointer;\n  display: block;\n}\n.wikipediapreview-footer-cta-readonwiki {\n  display: none;\n}\n.wikipediapreview-footer-loading {\n  height: 30px;\n  background-color: #eaecf0;\n}\n.wikipediapreview.expanded .wikipediapreview-body {\n  overflow: scroll;\n}\n.wikipediapreview.expanded .wikipediapreview-body:after {\n  content: none;\n}\n.wikipediapreview.expanded .wikipediapreview-footer-cta-readmore {\n  display: none;\n}\n.wikipediapreview.expanded .wikipediapreview-footer-cta-readonwiki {\n  display: block;\n}\n.wikipediapreview.mobile {\n  width: 100%;\n}\n.wikipediapreview.mobile.expanded .wikipediapreview-body {\n  max-height: calc(70vh);\n  overflow: scroll;\n}\n.wikipediapreview[dir='rtl'] .wikipediapreview-header-wordmark,\n.wikipediapreview[dir='rtl'] .wikipediapreview-header-wordmark-with-image {\n  background-position: right;\n  margin-right: 16px;\n  margin-left: 0;\n}\n.wikipediapreview[dir='rtl'] .wikipediapreview-header-image {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.wikipediapreview[dir='rtl'] .wikipediapreview-body-icon {\n  margin-right: 0;\n  margin-left: 12px;\n}\n.wikipediapreview[dir='rtl'] .wikipediapreview-body-action {\n  margin-left: 0;\n  margin-right: 55px;\n}\n.wikipediapreview[dir='rtl'] .wikipediapreview-footer-cc {\n  left: 30px;\n  right: auto;\n}\n.wikipediapreview[dir='rtl'] .wikipediapreview-footer-author {\n  left: 14px;\n  right: auto;\n}\n.wikipediapreview-body-non-regular,\n.wikipediapreview-body.wikipediapreview-body-error,\n.wikipediapreview-body.wikipediapreview-body-disambiguation,\n.wikipediapreview-body.wikipediapreview-body-offline,\n.wikipediapreview-body.wikipediapreview-body-loading {\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n",
        '',
      ]),
        (e.exports = i);
    },
    ,
    ,
    function (e, i, n) {
      'use strict';
      n.r(i),
        n.d(i, 'init', function () {
          return Ye;
        }),
        n.d(i, 'version', function () {
          return b;
        }),
        n.d(i, 'getPreviewHtml', function () {
          return Ze;
        });
      var r = function (e, i) {
          var n = new XMLHttpRequest();
          n.open('GET', e),
            n.send(),
            n.addEventListener('load', function () {
              i(JSON.parse(n.responseText));
            }),
            n.addEventListener('error', function () {
              i(!1, n.status);
            });
        },
        a = {},
        t = function (e, i, n) {
          var t =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r;
          void 0 === a[e]
            ? t(e, function (r, t) {
                r ? n((a[e] = i(r))) : n(!1, t);
              })
            : n(a[e]);
        },
        o = n(4),
        l = n.n(o);
      function s(e, i) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          i &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? s(Object(n), !0).forEach(function (i) {
                g(e, i, n[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (i) {
                Object.defineProperty(
                  e,
                  i,
                  Object.getOwnPropertyDescriptor(n, i)
                );
              });
        }
        return e;
      }
      function g(e, i, n) {
        return (
          i in e
            ? Object.defineProperty(e, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[i] = n),
          e
        );
      }
      var c =
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0,
        u = function () {
          return window.navigator.onLine;
        },
        p = function (e) {
          return -1 ===
            [
              'ar',
              'arc',
              'arz',
              'dv',
              'fa',
              'ha',
              'he',
              'khw',
              'ks',
              'ku',
              'ps',
              'ur',
              'yi',
              'pnb',
              'ckb',
              'mzn',
              'glk',
              'ug',
              'sd',
              'azb',
              'lrc',
            ].indexOf(e)
            ? 'ltr'
            : 'rtl';
        },
        m = { format: 'json', formatversion: 2, origin: '*' },
        f = function (e, i) {
          return (
            (i = d(d({}, m), i)),
            'https://'.concat(e, '.wikipedia.org/w/api.php') +
              '?' +
              Object.keys(i)
                .map(function (e) {
                  return ''.concat(e, '=').concat(encodeURIComponent(i[e]));
                })
                .join('&')
          );
        },
        w = function (e) {
          return e.replace(/https:\/\/(.*?)\./, function (e) {
            return e + 'm.';
          });
        },
        y = function (e) {
          return (
            new window.DOMParser().parseFromString(e, 'text/html').body
              .textContent || ''
          );
        },
        h = function (e) {
          return l.a.sanitize(e);
        },
        v = function () {
          return { height: window.innerHeight, width: window.innerWidth };
        },
        k = function (e, i, n) {
          var r =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          return 'https://'
            .concat(e)
            .concat(n ? '.m' : '', '.wikipedia.org/wiki/')
            .concat(encodeURIComponent(i))
            .concat(r ? '?'.concat('wprov=wppw1') : '');
        },
        b = function () {
          console.log(
            'Wikipedia Preview - version '
              .concat('1.4.0', ' (')
              .concat('70167e0', ')')
          );
        },
        x = function () {
          for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
            i[n] = arguments[n];
          console.error.apply(console, i);
        },
        M = { en: n(2) },
        I = function (e, i) {
          if (!M[e])
            try {
              M[e] = n(5)('./'.concat(e, '.json'));
            } catch (i) {
              M[e] = {};
            }
          for (
            var r = M[e][i] || M.en[i] || i,
              a = arguments.length,
              t = new Array(a > 2 ? a - 2 : 0),
              o = 2;
            o < a;
            o++
          )
            t[o - 2] = arguments[o];
          return (
            t.forEach(function (e, i) {
              r = r.replace(new RegExp('\\$'.concat(i + 1), 'g'), e);
            }),
            r
          );
        },
        j = function (e, i, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t,
            a = {
              action: 'query',
              prop: 'extracts|pageimages',
              exsentences: 4,
              explaintext: 1,
              exsectionformat: 'plain',
              piprop: 'thumbnail',
              pilimit: 1,
              titles: i,
            },
            o = f(e, a);
          r(
            o,
            function (n) {
              var r = n.query.pages[Object.keys(n.query.pages)[0]];
              return (
                !r.missing && {
                  title: i,
                  extractHtml: '<p>' + r.extract + '</p>',
                  imgUrl: r.thumbnail ? r.thumbnail.source : null,
                  dir: p(e),
                  type: 'standard',
                }
              );
            },
            n
          );
        },
        N = function (e, i, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t,
            a = 'https://'
              .concat(e, '.wikipedia.org/api/rest_v1/page/summary/')
              .concat(encodeURIComponent(i), '?')
              .concat('wprov=wppw1');
          r(
            a,
            function (n, r) {
              return n
                ? 'standard' === n.type || 'disambiguation' === n.type
                  ? {
                      title: n.titles.canonical,
                      extractHtml: h(n.extract_html),
                      imgUrl: n.thumbnail ? n.thumbnail.source : null,
                      dir: n.dir,
                      type: n.type,
                    }
                  : 'no-extract' === n.type && n.description
                  ? {
                      title: n.titles.canonical,
                      extractHtml: '<p>' + n.description + '</p>',
                      imgUrl: n.thumbnail ? n.thumbnail.source : null,
                      dir: n.dir,
                      type: 'standard',
                    }
                  : (x(I(e, 'preview-console-error-message', i, e), n), !1)
                : (x(I(e, 'preview-console-error-message', i, e), r), !1);
            },
            n
          );
        },
        A = function (e, i, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t;
          return -1 === i.indexOf(':') ? N(e, i, n, r) : j(e, i, n, r);
        },
        S = function (e, i, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t,
            a = {
              action: 'query',
              prop: 'imageinfo',
              iiextmetadatafilter:
                'License|LicenseShortName|ImageDescription|Artist',
              iiextmetadatalanguage: e,
              iiextmetadatamultilang: 1,
              iiurlwidth: v().width,
              iiurlheight: v().height,
              iiprop: 'url|extmetadata',
              titles: i,
            },
            o = f(e, a);
          r(
            o,
            function (i) {
              var n = i.query.pages[0].imageinfo;
              if (!n) return {};
              var r = n[0].extmetadata,
                a = r.Artist,
                t = r.ImageDescription,
                o = r.LicenseShortName,
                l = a && y(a.value),
                s =
                  t &&
                  y(
                    ('string' == typeof t.value && t.value) ||
                      t.value[e] ||
                      t.value[Object.keys(t.value)[0]]
                  ),
                d = n[0].thumburl;
              return {
                author: l,
                description: s,
                license: o && o.value,
                filePage: w(n[0].descriptionshorturl),
                bestFitImageUrl: d,
              };
            },
            n
          );
        };
      n(89);
      function L(e) {
        return (L =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function T() {
        T = function (e, i) {
          return new n(e, void 0, i);
        };
        var e = RegExp.prototype,
          i = new WeakMap();
        function n(e, r, a) {
          var t = new RegExp(e, r);
          return i.set(t, a || i.get(e)), z(t, n.prototype);
        }
        function r(e, n) {
          var r = i.get(n);
          return Object.keys(r).reduce(function (i, n) {
            return (i[n] = e[r[n]]), i;
          }, Object.create(null));
        }
        return (
          D(n, RegExp),
          (n.prototype.exec = function (i) {
            var n = e.exec.call(this, i);
            return n && (n.groups = r(n, this)), n;
          }),
          (n.prototype[Symbol.replace] = function (n, a) {
            if ('string' == typeof a) {
              var t = i.get(this);
              return e[Symbol.replace].call(
                this,
                n,
                a.replace(/\$<([^>]+)>/g, function (e, i) {
                  return '$' + t[i];
                })
              );
            }
            if ('function' == typeof a) {
              var o = this;
              return e[Symbol.replace].call(this, n, function () {
                var e = arguments;
                return (
                  'object' !== L(e[e.length - 1]) &&
                    (e = [].slice.call(e)).push(r(e, o)),
                  a.apply(this, e)
                );
              });
            }
            return e[Symbol.replace].call(this, n, a);
          }),
          T.apply(this, arguments)
        );
      }
      function D(e, i) {
        if ('function' != typeof i && null !== i)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(i && i.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          i && z(e, i);
      }
      function z(e, i) {
        return (z =
          Object.setPrototypeOf ||
          function (e, i) {
            return (e.__proto__ = i), e;
          })(e, i);
      }
      var O = window.innerWidth,
        E = window.innerHeight,
        C = {
          screenX: null,
          originalMarginLeft: null,
          currentMarginLeft: null,
          originalTransition: null,
          imgOriginalTransition: null,
          durationStart: null,
          translateX: 0,
          translateY: 0,
          clientX: null,
          clientY: null,
          imageRect: {},
        },
        P = [],
        W = -1,
        R = !1,
        G = function (e) {
          return 'IMG' === e.target.nodeName
            ? e.target
            : e.target.querySelector('img');
        },
        H = function (e) {
          return e ? Number(e.slice(e.indexOf('scale') + 6, -1)) : 1;
        },
        Z = function (e, i) {
          var n = [
            ''.concat(i, '-item-caption'),
            ''.concat(i, '-item-caption-expand-cue'),
            ''.concat(i, '-item-caption-text'),
            ''.concat(i, '-item-attribution'),
            ''.concat(i, '-button'),
          ].find(function (i) {
            return e.target.className.indexOf(i) > -1;
          });
          return 'touch' !== e.pointerType || n;
        },
        Y = function () {
          return R;
        },
        B = function (e) {
          return e.naturalHeight <= e.naturalWidth;
        },
        J = function () {
          return P.length;
        },
        U = function (e, i) {
          var n = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              i = arguments.length > 1 ? arguments[1] : void 0,
              n = {},
              r = function () {
                return e.clientY > i.naturalHeight && !B(i)
                  ? i.naturalHeight
                  : e.clientY;
              };
            return (
              2 === P.length
                ? ((n.x = (P[0].clientX + P[1].clientX) / 2),
                  (n.y = (P[0].clientY + P[1].clientY) / 2))
                : ((n.x = e.clientX), (n.y = r())),
              n
            );
          })(i, e);
          return (
            B(e)
              ? (n.y = n.y - e.naturalHeight)
              : (function (e) {
                  return e.naturalWidth + 50 < O;
                })(e) &&
                ((n.x = e.naturalWidth / 2), (n.y = e.naturalHeight / 2)),
            ''.concat(n.x, 'px ').concat(n.y, 'px')
          );
        },
        F = function (e) {
          e &&
            ((e.style.transition = C.imgOriginalTransition),
            (e.style.transform = 'scale('.concat(1, ')')),
            (R = !1),
            (C.translateX = 0),
            (C.translateY = 0));
        },
        $ = function (e) {
          for (
            var i = G(e),
              n = i.style.transform,
              r = H(n),
              a = (function (e) {
                var i = T(/translate3d\((.*?)px, (.*?)px, (.*?)px/, {
                  x: 1,
                  y: 2,
                  z: 3,
                }).exec(e);
                return i
                  ? 'translate3d('
                      .concat(i.groups.x, 'px, ')
                      .concat(i.groups.y, 'px, ', 0, 'px)')
                  : 'translate3d('
                      .concat(C.translateX, 'px, ')
                      .concat(C.translateY, 'px, ', 0, 'px)');
              })(n),
              t = 0;
            t < P.length;
            t++
          )
            if (e.pointerId === P[t].pointerId) {
              P[t] = e;
              break;
            }
          if (2 === P.length) {
            var o = Math.abs(P[0].clientX - P[1].clientX),
              l = Math.abs(P[0].clientY - P[1].clientY),
              s = Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2));
            W > 0 &&
              ((i.style.transformOrigin = U(i)),
              (i.style.transition = 'unset'),
              s > W &&
                ((R = !0),
                r + 0.01 < 2 &&
                  ((r += 0.01),
                  (i.style.transform = ''
                    .concat(a, ' scale(')
                    .concat(r, ')')))),
              s < W &&
                (r - 0.01 > 1.4
                  ? ((r -= 0.01),
                    (i.style.transform = ''
                      .concat(a, ' scale(')
                      .concat(r, ')')))
                  : F(i))),
              (W = s);
          }
        },
        q = function (e) {
          var i = G(e);
          i && (i.style.transition = C.imgOriginalTransition),
            (function (e) {
              for (var i = 0; i < P.length; i++)
                if (P[i].pointerId === e.pointerId) {
                  P.splice(i, 1);
                  break;
                }
            })(e),
            (C.clientX = null),
            (C.clientY = null),
            P.length < 2 && (W = -1);
        };
      function Q(e, i) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, i) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == n) return;
            var r,
              a,
              t = [],
              o = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) &&
                (t.push(r.value), !i || t.length !== i);
                o = !0
              );
            } catch (e) {
              (l = !0), (a = e);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (l) throw a;
              }
            }
            return t;
          })(e, i) ||
          (function (e, i) {
            if (!e) return;
            if ('string' == typeof e) return _(e, i);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _(e, i);
          })(e, i) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(e, i) {
        (null == i || i > e.length) && (i = e.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = e[n];
        return r;
      }
      var X,
        V,
        K,
        ee = [],
        ie = function (e, i, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0;
          e.addEventListener(i, n, r), ee.push([e, i, n, r]);
        },
        ne = 0,
        re = '',
        ae = window.innerWidth,
        te = 'wp-gallery-fullscreen-slider',
        oe = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            t = e
              .map(function () {
                return '\n\t\t<div class="'
                  .concat(te, '-item">\n\t\t\t\t<div class="')
                  .concat(te, '-item-loading">\n\t\t\t\t\t\t<div class="')
                  .concat(
                    te,
                    '-item-loading-spinner">\n\t\t\t\t\t\t\t\t<div class="'
                  )
                  .concat(
                    te,
                    '-item-loading-spinner-animation">\n\t\t\t\t\t\t\t\t\t\t<div class="'
                  )
                  .concat(
                    te,
                    '-item-loading-spinner-animation-bounce"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="'
                  )
                  .concat(te, '-item-loading-text">')
                  .concat(
                    I(n, 'gallery-loading-still'),
                    '</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="'
                  )
                  .concat(te, '-item-loading-error">\n\t\t\t\t\t<div class="')
                  .concat(te, '-item-loading-error-text">')
                  .concat(
                    I(n, 'gallery-loading-error'),
                    '</div>\n\t\t\t\t\t<div class="'
                  )
                  .concat(te, '-item-loading-error-refresh">')
                  .concat(
                    I(n, 'gallery-loading-error-refresh'),
                    '</div>\n\t\t\t\t</div>\n\t\t</div>\n\t\t'
                  )
                  .trim();
              })
              .join('');
          return (
            e.some(function (e, n) {
              return e.thumb === i && ((ne = n), !0);
            }),
            (re = r),
            (X = n),
            (V = e),
            (K = a),
            '\n\t\t<div class="'
              .concat(te, '" style="')
              .concat('ltr' === re ? 'margin-left' : 'margin-right', ':-')
              .concat(ne * ae, 'px">\n\t\t\t\t<div class="')
              .concat(te, '-button previous"></div>\n\t\t\t\t<div class="')
              .concat(te, '-button next"></div>\n\t\t\t\t')
              .concat(t, '\n\t\t</div>\n\t\t')
              .trim()
          );
        },
        le = function (e, i) {
          var n,
            r,
            a = e.author ? e.author : I(X, 'gallery-unknown-author'),
            t = e.filePage,
            o = e.description ? e.description : i.caption ? i.caption : '';
          return '\n\t\t<div class="'
            .concat(te, '-item-caption">\n\t\t\t')
            .concat(
              (ae < 400 && o.length > 128) || (ae > 400 && o.length > 142)
                ? '<div class="'.concat(te, '-item-caption-expand-cue"></div>')
                : '',
              '\n\t\t\t'
            )
            .concat(
              o
                ? '<div class="'
                    .concat(te, '-item-caption-text">')
                    .concat(o, '</div>')
                : '',
              '\n\t\t</div>\n\t\t<div class="'
            )
            .concat(te, '-item-attribution">\n\t\t\t<div class="')
            .concat(te, '-item-attribution-info">\n\t\t\t\t')
            .concat(
              ((n = e.license),
              (r = ''),
              ['CC', 'BY', 'SA', 'Fair', 'Public'].forEach(function (e) {
                n &&
                  -1 !== n.indexOf(e) &&
                  (r += '<div class="'
                    .concat(te, '-item-attribution-info-')
                    .concat(e.toLowerCase(), '"></div>'));
              }),
              r),
              '\n\t\t\t\t'
            )
            .concat(
              a
                ? '<div class="'
                    .concat(te, '-item-attribution-info-author">')
                    .concat(a, '</div>')
                : '',
              '\n\t\t\t</div>\n\t\t\t'
            )
            .concat(
              t
                ? '<div class="'
                    .concat(
                      te,
                      '-item-attribution-more-info">\n\t\t\t\t<a href="'
                    )
                    .concat(t, '" class="')
                    .concat(
                      te,
                      '-item-attribution-more-info-link" target="_blank"></a>\n\t\t\t</div>'
                    )
                : '',
              '\n\t\t</div>\n\t'
            )
            .trim();
        },
        se = function e(i) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = i.querySelector('img'),
            a = i.querySelector('.'.concat(te, '-item-loading')),
            t = i.querySelector('.'.concat(te, '-item-loading-error'));
          if (n) {
            var o = K.querySelector('.'.concat(te)),
              l = o.querySelectorAll('.'.concat(te, '-item'));
            l.forEach(function (e) {
              var i = e.querySelector('img'),
                n = e.querySelector('.'.concat(te, '-item-caption')),
                r = e.querySelector('.'.concat(te, '-item-attribution'));
              i && e.removeChild(i),
                n && e.removeChild(n),
                r && e.removeChild(r);
            }),
              ce(0, !0),
              (a.style.visibility = 'visible'),
              (t.style.visibility = 'hidden');
          }
          if (r.complete)
            (a.style.visibility = 'hidden'),
              (t.style.visibility = 'hidden'),
              (r.style.visibility = 'visible');
          else {
            var s = i.querySelector('.'.concat(te, '-item-loading-text')),
              d = setTimeout(function () {
                s.style.visibility = 'visible';
              }, 5e3);
            r.addEventListener('load', function () {
              (a.style.visibility = 'hidden'),
                (t.style.visibility = 'hidden'),
                (s.style.visibility = 'hidden'),
                clearTimeout(d);
            }),
              r.addEventListener('error', function () {
                var n = i.querySelector(
                  '.'.concat(te, '-item-loading-error-refresh')
                );
                ((a.style.visibility = 'hidden'),
                (r.style.visibility = 'hidden'),
                u()) ||
                  ((i.querySelector(
                    '.'.concat(te, '-item-loading-error-text')
                  ).innerText = I(X, 'gallery-loading-error-offline')),
                  t.classList.add('offline'));
                (t.style.visibility = 'visible'),
                  clearTimeout(d),
                  n.addEventListener('click', function () {
                    e(i, !0);
                  });
              });
          }
        },
        de = function (e) {
          var i =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.querySelector('.'.concat(te, '-item-caption-text')),
            r = e.querySelector('.'.concat(te, '-item-caption-expand-cue')),
            a = e.querySelector('.expanded');
          (r && a) || (i && r)
            ? (r.classList.remove('expanded'), (n.style.maxHeight = '80px'))
            : r && (r.classList.add('expanded'), (n.style.maxHeight = '241px'));
        },
        ge = function (e) {
          var i =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = K.querySelector('.'.concat(te)),
            r = n.querySelectorAll('.'.concat(te, '-item')),
            a = r[e];
          a &&
            S(X, V[e].title, function (n) {
              var r = a.querySelector('img'),
                t = a.querySelector('.'.concat(te, '-item-caption'));
              (r ||
                (i
                  ? a.insertAdjacentHTML(
                      'beforeend',
                      '<img src="'
                        .concat(n.bestFitImageUrl, '?timestamp=')
                        .concat(Date.now(), '"/>')
                    )
                  : a.insertAdjacentHTML(
                      'beforeend',
                      '<img src="'.concat(n.bestFitImageUrl, '"/>')
                    ),
                se(a)),
              t) ||
                (a.insertAdjacentHTML('beforeend', le(n, V[e])),
                a
                  .querySelector('.'.concat(te, '-item-caption'))
                  .addEventListener('click', function () {
                    de(a);
                  }));
            });
        },
        ce = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = K.querySelector('.'.concat(te)),
            r = n.querySelectorAll('.'.concat(te, '-item')),
            a = n.querySelector('.next'),
            t = n.querySelector('.previous'),
            o = ne + e,
            l = r[o],
            s = r[ne].querySelector('img');
          l &&
            (de(r[ne], !0),
            (ne += e),
            (a.style.opacity = ne === r.length - 1 ? '0.5' : '1'),
            (t.style.opacity = 0 === ne ? '0.5' : '1'),
            F(s),
            ge(ne, i),
            ge(ne + 1, i),
            ge(ne - 1, i)),
            (n.style['ltr' === re ? 'marginLeft' : 'marginRight'] =
              -ae * ne + 'px');
        },
        ue = function () {
          ce(-1);
        },
        pe = function () {
          var e = K.querySelector('.'.concat(te)),
            i = 'ltr' === re ? 'marginLeft' : 'marginRight',
            n = e.querySelectorAll('.'.concat(te, '-item'));
          e.addEventListener('pointerdown', function (n) {
            Z(n, te) ||
              ((function (e) {
                var i = G(e),
                  n = i.getBoundingClientRect();
                if (
                  ((C.imageRect.top = n.top),
                  (C.imageRect.bottom = n.bottom),
                  (C.imageRect.left = n.left),
                  (C.imageRect.right = n.right),
                  P.length < 1)
                ) {
                  var r = window.getComputedStyle(i);
                  C.imgOriginalTransition = r.transition;
                }
                P.push(e);
              })(n),
              1 !== J() ||
                Y() ||
                (function (e, i, n) {
                  var r = window.getComputedStyle(i);
                  (C.durationStart = Date.now()),
                    (C.screenX = e.clientX),
                    (C.originalMarginLeft = +r[n].slice(0, -2)),
                    (C.currentMarginLeft = +r[n].slice(0, -2)),
                    (C.originalTransition = r.transition),
                    (i.style.transition = 'unset');
                })(n, e, i));
          }),
            e.addEventListener('pointermove', function (r) {
              Z(r, te) ||
                (J() > 1
                  ? $(r)
                  : Y()
                  ? (function (e, i, n, r, a) {
                      var t = G(e),
                        o = t.style.transform,
                        l = H(o),
                        s = O / 8,
                        d = O - s,
                        g = B(t) ? E / 4 : E / 8,
                        c = E - g;
                      (t.style.transition = 'unset'),
                        (C.clientX && C.clientY) ||
                          ((C.clientX = e.clientX), (C.clientY = e.clientY));
                      var u,
                        p,
                        m = C.translateX + (e.clientX - C.clientX),
                        f = C.translateY + (e.clientY - C.clientY),
                        w = f - C.translateY >= 0,
                        y = m - C.translateX >= 0,
                        h = Math.abs(m) - Math.abs(C.translateX) > 80;
                      if (
                        ((u =
                          (C.imageRect.left < s && y) ||
                          (C.imageRect.right > d && !y)),
                        (p =
                          (C.imageRect.top < g && w) ||
                          (C.imageRect.bottom > c && !w)),
                        u && p)
                      )
                        (C.imageRect.top =
                          C.imageRect.top + (f - C.translateY)),
                          (C.imageRect.bottom =
                            C.imageRect.bottom + (f - C.translateY)),
                          (C.imageRect.left =
                            C.imageRect.left + (m - C.translateX)),
                          (C.imageRect.right =
                            C.imageRect.right + (m - C.translateX)),
                          (C.translateX = m),
                          (C.translateY = f),
                          (C.clientX = e.clientX),
                          (C.clientY = e.clientY),
                          (t.style.transform = 'translate3d('
                            .concat(m, 'px, ')
                            .concat(f, 'px, 0px) scale(')
                            .concat(l, ')'));
                      else if (h) {
                        var v =
                          ('ltr' === a && m < 0) || ('rtl' === a && m > 0);
                        !v && n[r - 1] ? i(-1) : v && n[r + 1] && i(1);
                      }
                    })(r, ce, n, ne, re)
                  : (function (e, i, n, r) {
                      var a = e.clientX - C.screenX;
                      (C.currentMarginLeft =
                        C.originalMarginLeft + a * ('ltr' === r ? 1 : -1)),
                        (i.style[n] = C.currentMarginLeft + 'px'),
                        e.preventDefault();
                    })(r, e, i, re));
            }),
            e.addEventListener('pointerout', function (n) {
              Z(n, te) ||
                ((e.style.transition = C.originalTransition),
                1 !== J() ||
                  Y() ||
                  (function (e, i, n, r, a) {
                    var t = C.originalMarginLeft - C.currentMarginLeft,
                      o = Date.now() - C.durationStart;
                    Math.abs(t / O) > 0.4 || (o <= 300 && Math.abs(t) > 5)
                      ? n(t > 0 ? 1 : -1)
                      : (i.style[r] = -O * a + 'px');
                  })(0, e, ce, i, ne),
                q(n));
            });
        },
        me = function () {
          var e = K.querySelector('.'.concat(te)),
            i = e.querySelectorAll('.'.concat(te, '-item')),
            n = e.querySelector('.next'),
            r = e.querySelector('.previous'),
            a = !1;
          ce(0),
            pe(),
            e.addEventListener('click', function (e) {
              (e.target.className !== ''.concat(te, '-item') &&
                'IMG' !== e.target.tagName) ||
                (a
                  ? (clearTimeout(a),
                    (a = null),
                    (function (e) {
                      var i = G(e);
                      (C.clientX = null),
                        (C.clientY = null),
                        (C.translateX = 0),
                        (C.translateY = 0),
                        (i.style.transformOrigin = U(i, e)),
                        Y()
                          ? ((i.style.transform = 'scale('.concat(1, ')')),
                            (R = !1))
                          : ((i.style.transform = 'scale('.concat(2, ')')),
                            (R = !0));
                    })(e))
                  : (a = setTimeout(function () {
                      (a = null),
                        K.querySelector(
                          '.wp-gallery-fullscreen'
                        ).classList.toggle('wp-gallery-fullscreen-focus-mode');
                    }, 300)));
            }),
            1 === i.length
              ? ((r.style.visibility = 'hidden'),
                (n.style.visibility = 'hidden'))
              : (n.addEventListener('click', function () {
                  ce();
                }),
                r.addEventListener('click', function () {
                  ue();
                }),
                ie(window, 'keydown', function (e) {
                  switch (e.key) {
                    case 'ArrowRight':
                    case 'Right':
                      'ltr' === re ? ce() : ue();
                      break;
                    case 'ArrowLeft':
                    case 'Left':
                      'ltr' === re ? ue() : ce();
                  }
                }));
        },
        fe = function (e, i) {
          return '\n\t\t<div class="'
            .concat('wp-gallery-fullscreen', '" lang="')
            .concat(e, '" dir="')
            .concat(i, '">\n\t\t\t<div class="')
            .concat(
              'wp-gallery-fullscreen',
              '-close"></div>\n\t\t\t<div class="'
            )
            .concat('wp-gallery-fullscreen', '-main"></div>\n\t\t</div>\n\t')
            .trim();
        },
        we = function (e) {
          var i = e.querySelector('.'.concat('wp-gallery-fullscreen'));
          e.removeChild(i),
            ee.forEach(function (e) {
              var i = Q(e, 4),
                n = i[0],
                r = i[1],
                a = i[2],
                t = i[3];
              n.removeEventListener(r, a, t);
            }),
            (ee = []);
        },
        ye = function (e, i) {
          var n = document.createElement('div');
          return (
            n.classList.add('wikipediapreview-gallery-row'),
            e.forEach(function (r) {
              var a = document.createElement('div');
              a.classList.add('wikipediapreview-gallery-image'),
                (a.style.backgroundImage = 'url('.concat(r.thumb, ')')),
                a.addEventListener('click', function (n) {
                  var r = n.target.style.backgroundImage
                    .slice(4, -1)
                    .replace(/"/g, '');
                  !(function (e, i, n, r) {
                    var a =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : document.body;
                    a.insertAdjacentHTML('beforeend', fe(n, r)),
                      a
                        .querySelector(
                          '.'.concat('wp-gallery-fullscreen', '-main')
                        )
                        .insertAdjacentHTML('beforeend', oe(e, i, n, r, a));
                    var t = a.querySelector(
                      '.'.concat('wp-gallery-fullscreen', '-close')
                    );
                    t.addEventListener('click', function () {
                      we(a);
                    }),
                      ie(window, 'keydown', function (e) {
                        var i = e.key;
                        ('Escape' !== i && 'Esc' !== i) || we(a);
                      }),
                      me();
                  })(e, r, i.lang, i.dir);
                }),
                n.appendChild(a);
            }),
            n
          );
        };
      function he(e, i) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, i) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == n) return;
            var r,
              a,
              t = [],
              o = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) &&
                (t.push(r.value), !i || t.length !== i);
                o = !0
              );
            } catch (e) {
              (l = !0), (a = e);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (l) throw a;
              }
            }
            return t;
          })(e, i) ||
          (function (e, i) {
            if (!e) return;
            if ('string' == typeof e) return ve(e, i);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ve(e, i);
          })(e, i) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ve(e, i) {
        (null == i || i > e.length) && (i = e.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = e[n];
        return r;
      }
      var ke,
        be,
        xe,
        Me,
        Ie = function (e) {
          var i = [],
            n = [],
            r = function (e, n, r) {
              var a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0;
              e.addEventListener(n, r, a), i.push([e, n, r, a]);
            },
            a = function (i) {
              var a,
                t,
                o = i.toElement || i.relatedTarget || i.target;
              if (
                o !== e.element.currentTargetElement &&
                !e.element.contains(o)
              ) {
                var l;
                (a = e.hide),
                  (t = setTimeout(a, 300)),
                  n.push(t),
                  (l = t),
                  r(e.element, 'mouseenter', function () {
                    clearTimeout(l);
                  });
              }
            },
            o = function (i) {
              var n = e.element.querySelector('.wikipediapreview-body'),
                r = e.element.querySelector('.wikipediapreview-header'),
                a =
                  e.element.querySelector('.wikipediapreview-footer-cta') ||
                  e.element.querySelector('.wikipediapreview-footer-loading');
              if (n)
                if ('bottom' === e.element.style[2] || e.element.style.bottom) {
                  var t = e.element.getBoundingClientRect().top,
                    o = parseInt(
                      window.getComputedStyle(n).maxHeight.slice(0, -2)
                    );
                  n.style.maxHeight = Math.min(i, o + t) + 'px';
                } else {
                  var l = e.element.getBoundingClientRect().top,
                    s = window.getComputedStyle(r).height.slice(0, -2),
                    d = a ? window.getComputedStyle(a).height.slice(0, -2) : 0,
                    g = window.innerHeight - l - s - d;
                  n.style.maxHeight = Math.min(i, g) + 'px';
                }
            },
            l = function () {
              var i = e.lang,
                n = e.title;
              e.element.component.wikipediapreview.classList.add('expanded'),
                c || o(496),
                !e.loading &&
                  i &&
                  n &&
                  (function (e, i, n) {
                    var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : t,
                      a = 'https://'
                        .concat(
                          e,
                          '.wikipedia.org/api/rest_v1/page/media-list/'
                        )
                        .concat(encodeURIComponent(i));
                    r(
                      a,
                      function (e) {
                        return e.items.reduce(function (e, i) {
                          if (i.showInGallery && 'image' === i.type) {
                            var n =
                                i &&
                                i.srcset &&
                                'https:'.concat(i.srcset[0].src),
                              r = {
                                caption: i.caption && i.caption.text.trim(),
                                thumb: n,
                                title: i.title,
                              };
                            return e.concat(r);
                          }
                          return e;
                        }, []);
                      },
                      n
                    );
                  })(i, n, function (i) {
                    var n = e.element.component.wikipediapreviewGallery;
                    i && i.length > 0
                      ? n.appendChild(ye(i, e))
                      : e.element.component.body.removeChild(n);
                  });
            };
          return {
            onHide: function () {
              e.element.component.wikipediapreview.classList.remove('expanded'),
                (e.lang = null),
                (e.title = null),
                (e.loading = !1),
                (e.element.querySelector(
                  '.wikipediapreview-body'
                ).style.transition = 'auto'),
                i.forEach(function (e) {
                  var i = he(e, 4),
                    n = i[0],
                    r = i[1],
                    a = i[2],
                    t = i[3];
                  n.removeEventListener(r, a, t);
                }),
                (i = []),
                n.forEach(function (e) {
                  clearTimeout(e);
                }),
                (n = []);
            },
            onShow: function (i) {
              if (
                ((i.component = {
                  body: i.querySelector('.wikipediapreview-body'),
                  wikipediapreview: i.querySelector('.wikipediapreview'),
                  wikipediapreviewGallery: i.querySelector(
                    '.wikipediapreview-gallery'
                  ),
                  closeBtn: i.querySelector(
                    '.wikipediapreview-header-closebtn'
                  ),
                  readMore: i.querySelector(
                    '.wikipediapreview-footer-cta-readmore'
                  ),
                  content: i.querySelector('.wikipediapreview-body > p'),
                }),
                i.component.content &&
                i.component.content.getBoundingClientRect().height < 248
                  ? l()
                  : c || o(248),
                r(i.component.closeBtn, 'click', e.hide),
                i.component.readMore && r(i.component.readMore, 'click', l),
                c)
              ) {
                var n = document.querySelector('.wp-dark-screen');
                r(n, 'click', e.hide, !0),
                  (function (i) {
                    var n,
                      a,
                      t,
                      o,
                      s = i.querySelector('.wikipediapreview-header'),
                      d = i.querySelector('.wikipediapreview-body'),
                      g = function (e) {
                        (n = e.touches[0].clientY),
                          (t = window.getComputedStyle(d)),
                          (o = Number(t.height.slice(0, -2)));
                      },
                      c = function (e, r) {
                        r && e.preventDefault();
                        var t = e.touches[0].clientY,
                          l = o + (n - t),
                          s =
                            (!i.querySelector('.wikipediapreview.expanded') &&
                              !r) ||
                            r;
                        (d.style.transition = 'auto'),
                          (a = t),
                          s && (d.style.maxHeight = l + 'px');
                      },
                      u = function (r) {
                        var t = i.querySelector('.wikipediapreview.expanded'),
                          s = n - a,
                          g = Math.abs(s) > 80,
                          c = (!t && !r) || r;
                        (d.style.transition = 'all 0.25s ease-in-out'),
                          s < 0 && g && c
                            ? e.hide()
                            : s > 0 && g && c && !t
                            ? ((d.style.maxHeight = '70vh'), l())
                            : (d.style.maxHeight = o + 'px');
                      };
                    r(d, 'touchstart', g),
                      r(d, 'touchmove', function (e) {
                        c(e, !1);
                      }),
                      r(d, 'touchend', function () {
                        return u(!1);
                      }),
                      r(s, 'touchstart', g),
                      r(s, 'touchmove', function (e) {
                        c(e, !0);
                      }),
                      r(s, 'touchend', function () {
                        return u(!0);
                      });
                  })(i);
              } else
                r(i, 'mouseleave', a),
                  r(i.currentTargetElement, 'mouseleave', a);
            },
            onExpand: l,
          };
        },
        je =
          (n(3),
          function (e, i, n, r, a, t) {
            var o,
              l = '',
              s = '';
            return (
              (o = e.left > a / 2 ? n + e.right - i : n + e.left),
              e.top > t / 2 ? (s = t - e.top - r) : (l = r + e.bottom),
              { left: o, right: '', top: l, bottom: s }
            );
          }),
        Ne = function (e) {
          return e ? e + 'px' : e;
        },
        Ae = function (e) {
          return {
            left: e.left - 3,
            right: e.right + 3,
            top: e.top - 3,
            bottom: e.bottom + 3,
          };
        },
        Se = function (e, i) {
          for (
            var n = i.x, r = i.y, a = e.getClientRects(), t = 0;
            t < a.length;
            t++
          ) {
            var o = Ae(a[t]);
            if (n >= o.left && n <= o.right && r >= o.top && r <= o.bottom)
              return a[t];
          }
          return a[0] || e.getBoundingClientRect();
        },
        Le = function (e) {
          if (!e.querySelector('.wp-dark-screen')) {
            var i = e.createElement('div');
            i.classList.add('wp-dark-screen'),
              e.body.appendChild(i),
              (xe = e.body.style.overflow),
              (e.body.style.overflow = 'hidden');
          }
        },
        Te = function (e) {
          var i = e.getElementsByClassName('wp-dark-screen');
          e.body.removeChild(i[0]), (e.body.style.overflow = xe);
        },
        De =
          (n(92),
          function (e) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '';
            return '\n\t\t<div class="wikipediapreview-header">\n\t\t\t'
              .concat(
                i
                  ? '<div class="wikipediapreview-header-image" style="'.concat(
                      "background-image:url('".concat(
                        i,
                        "');background-size:cover;"
                      ),
                      '"></div>'
                    )
                  : '',
                '\n\t\t\t<div class="wikipediapreview-header-wordmark'
              )
              .concat(
                i ? ' wikipediapreview-header-wordmark-with-image' : '',
                ' wikipediapreview-header-wordmark-'
              )
              .concat(
                e,
                '"></div>\n\t\t\t<div class="wikipediapreview-header-closebtn"></div>\n\t\t</div>\n'
              )
              .trim();
          }),
        ze = function (e, i, n) {
          return '\n\t\t<div class="wikipediapreview-body wikipediapreview-body-'
            .concat(
              e,
              '">\n\t\t\t<div class="wikipediapreview-body-message">\n\t\t\t\t<div class="wikipediapreview-body-icon"></div>\n\t\t\t\t\t'
            )
            .concat(
              i,
              '\n\t\t\t</div>\n\t\t\t<div class="wikipediapreview-body-action">\n\t\t\t\t'
            )
            .concat(n, '\n\t\t\t</div>\n\t\t</div>\n')
            .trim();
        },
        Oe = function (e, i, n, r, a) {
          return '\n\t\t<div class="wikipediapreview '
            .concat(i ? 'mobile' : '', '" lang="')
            .concat(e, '" dir="')
            .concat(n, '">\n\t\t\t')
            .concat(r, '\n\t\t\t')
            .concat(a, '\n\t\t</div>\n\t')
            .trim();
        },
        Ee = function (e, i, n) {
          var r = i.imgUrl,
            a = '\n\t\t\t<div class="wikipediapreview-body">\n\t\t\t\t'
              .concat(
                i.extractHtml,
                '\n\t\t\t\t<div class="wikipediapreview-gallery">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="wikipediapreview-footer">\n\t\t\t\t<span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore">'
              )
              .concat(I(e, 'continue-reading'), '</span>\n\t\t\t\t<a href="')
              .concat(
                k(e, i.title, n),
                '" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank">'
              )
              .concat(I(e, 'read-more'), '</a>\n\t\t\t</div>\n\t\t')
              .trim();
          return Oe(e, n, i.dir, De(e, r), a);
        },
        Ce = function (e, i, n) {
          var r = '\n\t\t<div class="wikipediapreview-body wikipediapreview-body-loading">\n\t\t\t<div class="wikipediapreview-body-loading-line larger"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line medium"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line larger"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line medium"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line smaller"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line larger"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line medium"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line larger"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line medium"></div>\n\t\t\t<div class="wikipediapreview-body-loading-line smaller"></div>\n\t\t</div>\n\t\t<div class="wikipediapreview-footer-loading"></div>\n\t'.trim();
          return Oe(i, e, n, De(i), r);
        },
        Pe = function (e, i, n) {
          return '<a href="'
            .concat(
              k(e, i, n),
              '" target="_blank" class="wikipediapreview-cta-readonwiki">'
            )
            .concat(I(e, 'read-on-wiki'), '</a>');
        },
        We = function (e, i, n, r) {
          var a = '<span>'.concat(I(i, 'preview-error-message'), '</span>'),
            t = Pe(i, n, e);
          return Oe(i, e, r, De(i), ze('error', a, t));
        },
        Re = function (e, i, n, r) {
          var a = '<span>'.concat(
              I(i, 'preview-disambiguation-message', n),
              '</span>'
            ),
            t = Pe(i, n, e);
          return Oe(i, e, r, De(i), ze('disambiguation', a, t));
        },
        Ge = function (e, i, n) {
          var r = '<span>'.concat(I(i, 'preview-offline-message'), '</span>'),
            a = '<a>'.concat(I(i, 'preview-offline-cta'), '</a>');
          return Oe(i, e, n, De(i), ze('offline', r, a));
        },
        He = function (e, i, n) {
          var r = e && e[i];
          if (r instanceof Function)
            try {
              r.apply(null, n);
            } catch (e) {
              console.log(
                'Error invoking Wikipedia Preview custom callback',
                e
              );
            }
        },
        Ze = function (e, i, n) {
          A(i, e, function (e) {
            n(Ee(i, e, c));
          });
        };
      function Ye(e) {
        var i = e.root,
          n = void 0 === i ? document : i,
          r = e.selector,
          a = void 0 === r ? '[data-wikipedia-preview]' : r,
          t = e.lang,
          o = void 0 === t ? 'en' : t,
          l = e.detectLinks,
          s = void 0 !== l && l,
          d = e.popupContainer,
          g = void 0 === d ? document.body : d,
          m = e.events,
          f = void 0 === m ? {} : m,
          w = e.debug,
          y = void 0 !== w && w,
          h = o,
          v = c
            ? (function (e) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : window;
                be ||
                  ((be = i.document.createElement('div')).classList.add(
                    'wp-touch-popup'
                  ),
                  (be.style.visibility = 'hidden'),
                  e.appendChild(be));
                var n = {},
                  r = function (e) {
                    (be.innerHTML = e),
                      (be.style.visibility = 'visible'),
                      Le(i.document),
                      n.onShow && n.onShow(be);
                  },
                  a = function () {
                    n.onHide && n.onHide(be),
                      (be.style.visibility = 'hidden'),
                      Te(i.document);
                  },
                  t = function () {
                    n.onExpand && n.onExpand();
                  },
                  o = function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    e.onShow && (n.onShow = e.onShow),
                      e.onHide && (n.onHide = e.onHide),
                      e.onExpand && (n.onExpand = e.onExpand);
                  };
                return {
                  show: r,
                  hide: a,
                  expand: t,
                  subscribe: o,
                  element: be,
                };
              })(g)
            : (function (e) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : window;
                ke ||
                  ((ke = i.document.createElement('div')).classList.add(
                    'wp-popup'
                  ),
                  (ke.style.visibility = 'hidden'),
                  e.appendChild(ke));
                var n = {},
                  r = function () {
                    n.onHide && n.onHide(ke),
                      (ke.style.visibility = 'hidden'),
                      (ke.currentTargetElement = null);
                  },
                  a = function (e, r, a) {
                    ke.innerHTML = e;
                    var t =
                        void 0 !== i.pageXOffset
                          ? i.pageXOffset
                          : (
                              i.document.documentElement ||
                              i.document.body.parentNode ||
                              i.document.body
                            ).scrollLeft,
                      o =
                        void 0 !== i.pageYOffset
                          ? i.pageYOffset
                          : (
                              i.document.documentElement ||
                              i.document.body.parentNode ||
                              i.document.body
                            ).scrollTop,
                      l = je(
                        Se(r, a),
                        ke.offsetWidth,
                        t,
                        o,
                        i.innerWidth,
                        i.innerHeight
                      );
                    (ke.style.left = Ne(l.left)),
                      (ke.style.right = Ne(l.right)),
                      (ke.style.top = Ne(l.top)),
                      (ke.style.bottom = Ne(l.bottom)),
                      (ke.currentTargetElement = r),
                      (ke.style.visibility = 'visible'),
                      n.onShow && n.onShow(ke);
                  },
                  t = function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    e.onShow && (n.onShow = e.onShow),
                      e.onHide && (n.onHide = e.onHide);
                  };
                return { show: a, hide: r, subscribe: t, element: ke };
              })(g),
          b = Ie(v),
          x = {},
          M = [],
          I = [],
          j = function e(i) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            i.preventDefault();
            var a = Date.now(),
              t = r ? x : i,
              o = t.currentTarget,
              l = r
                ? x.title
                : decodeURIComponent(
                    o.getAttribute('data-wp-title') || o.textContent
                  ),
              s = r ? x.lang : o.getAttribute('data-wp-lang') || h,
              d = r ? x.pointerPosition : { x: i.clientX, y: i.clientY },
              g = p(s);
            (v.element.currentTargetElement !== o || r) &&
              ((Me = a),
              'visible' === v.element.style.visibility && v.hide(),
              (v.loading = !0),
              (v.dir = g),
              v.show(Ce(c, s, g), o, d),
              A(s, l, function (i) {
                if (a === Me && v.loading) {
                  if (((v.loading = !1), i))
                    (v.lang = s),
                      (v.title = l),
                      'standard' === i.type
                        ? (v.show(Ee(s, i, c), o, d),
                          He(f, 'onShow', [l, s, 'standard']))
                        : 'disambiguation' === i.type &&
                          (v.show(Re(c, s, i.title, i.dir), o, d),
                          He(f, 'onShow', [l, s, 'disambiguation']));
                  else if (u())
                    v.show(We(c, s, l, g), o, d),
                      He(f, 'onShow', [l, s, 'error']);
                  else {
                    v.show(Ge(c, s, g), o, d),
                      He(f, 'onShow', [l, s, 'offline']);
                    var r = n.querySelector('.wikipediapreview-body-action');
                    (x.lang = s),
                      (x.title = l),
                      (x.pointerPosition = d),
                      (x.target = o),
                      r.addEventListener('click', function (i) {
                        e(i, !0);
                      });
                  }
                  var t = v.element.querySelector(
                    '.wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki'
                  );
                  t &&
                    t.addEventListener('click', function () {
                      He(f, 'onWikiRead', [l, s]);
                    });
                }
              }));
          };
        v.subscribe(b),
          Array.prototype.forEach.call(n.querySelectorAll(a), function (e) {
            c
              ? e.addEventListener('click', j)
              : e.addEventListener('mouseenter', j),
              M.push({
                text: e.textContent,
                title: e.getAttribute('data-wp-title') || e.textContent,
                lang: e.getAttribute('data-wp-lang') || h,
              });
          }),
          s &&
            Array.prototype.forEach.call(n.querySelectorAll('a'), function (e) {
              var i = (function (e) {
                for (
                  var i = [
                      /^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/wiki\/([^#?]+)/,
                      /^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/w\/index.php\?title=([^#&]+)/,
                    ],
                    n = 0;
                  n < i.length;
                  n++
                ) {
                  var r = i[n].exec(e);
                  if (r) return { lang: r[1], mobile: !!r[2], title: r[3] };
                }
                return null;
              })(e.getAttribute('href'));
              i &&
                (e.setAttribute('data-wp-title', i.title),
                e.setAttribute('data-wp-lang', i.lang),
                c
                  ? e.addEventListener('click', j)
                  : e.addEventListener('mouseenter', j),
                I.push({ text: e.textContent, title: i.title, lang: i.lang }));
            }),
          y &&
            (console.group('Wikipedia Preview [debug mode]'),
            console.group(
              'Searching for "'
                .concat(a, '" inside ')
                .concat(n, ', Total links found: ')
                .concat(M.length)
            ),
            M.forEach(function (e, i) {
              console.log(
                i + 1,
                ''.concat(e.text, ' -> ').concat(k(e.lang, e.title, c, !1))
              );
            }),
            console.groupEnd(),
            s &&
              (console.group(
                'Searching for links to Wikipedia, Total links found: '.concat(
                  I.length
                )
              ),
              I.forEach(function (e, i) {
                console.log(
                  i + 1,
                  ''.concat(e.text, ' -> ').concat(k(e.lang, e.title, c, !1))
                );
              }),
              console.groupEnd()),
            console.groupEnd());
      }
      b();
    },
  ]);
});
