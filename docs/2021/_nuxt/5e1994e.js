(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    129: function (t, e, n) {
      'use strict';
      var o = n(0),
        r = n(186);
      o.a.use(r.a);
    },
    130: function (t, e, n) {
      'use strict';
      n(37);
      e.a = function (t, e) {
        var n = t.$config.sections;
        e(
          'sections',
          Object.keys(n).reduce(function (t, e) {
            return (t[e] = 'true' === n[e]), t;
          }, {})
        );
      };
    },
    163: function (t, e, n) {
      var content = n(238);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('00f029c9', content, !0, { sourceMap: !1 });
    },
    165: function (t, e, n) {
      var content = n(246);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('5c346d62', content, !0, { sourceMap: !1 });
    },
    166: function (t, e, n) {
      var content = n(248);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('1cade319', content, !0, { sourceMap: !1 });
    },
    167: function (t, e, n) {
      var content = n(250);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('f5f91032', content, !0, { sourceMap: !1 });
    },
    168: function (t, e, n) {
      var content = n(252);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('77259759', content, !0, { sourceMap: !1 });
    },
    169: function (t, e, n) {
      var content = n(254);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('8e98b84e', content, !0, { sourceMap: !1 });
    },
    170: function (t, e, n) {
      var content = n(256);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('6f78de59', content, !0, { sourceMap: !1 });
    },
    189: function (t, e, n) {
      'use strict';
      n(245);
      var o = n(8),
        component = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'layout', attrs: { id: 'top' } },
              [
                n('layouts-page-header'),
                t._v(' '),
                n('layouts-page-main'),
                t._v(' '),
                n('layouts-page-footer'),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, {
        LayoutsPageHeader: n(267).default,
        LayoutsPageMain: n(270).default,
        LayoutsPageFooter: n(271).default,
      });
    },
    191: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(20),
        r =
          (n(234),
          {
            props: {
              anchor: { type: String, default: '' },
              document: {
                type: Object,
                default: function () {
                  return null;
                },
              },
              content: { type: String, default: '' },
              title: { type: String, default: '' },
              render: { type: Boolean, default: !1 },
            },
            computed: {
              articleClass: function () {
                return Object(o.a)(
                  { 'container--centered': !0, 'content-section__content': !0 },
                  this.anchor,
                  !0
                );
              },
            },
          }),
        c = (n(237), n(8)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'section',
              { staticClass: 'content-section' },
              [
                t.anchor
                  ? n('div', { staticClass: 'anchor', attrs: { id: t.anchor } })
                  : t._e(),
                t._v(' '),
                t.title
                  ? n('header', { staticClass: 'content-section__header' }, [
                      n('h3', { domProps: { innerHTML: t._s(t.title) } }),
                    ])
                  : t._e(),
                t._v(' '),
                null !== t.document
                  ? [
                      n('nuxt-content', {
                        class: t.articleClass,
                        attrs: { document: t.document },
                      }),
                    ]
                  : '' !== t.content
                  ? [
                      n('article', {
                        class: t.articleClass,
                        domProps: { innerHTML: t._s(t.content) },
                      }),
                    ]
                  : [
                      n(
                        'article',
                        { class: t.articleClass },
                        [t._t('default')],
                        2
                      ),
                    ],
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    194: function (t, e, n) {
      n(195), (t.exports = n(196));
    },
    237: function (t, e, n) {
      'use strict';
      n(163);
    },
    238: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.content-section{font-size:2.2rem}.content-section .spacer{height:7.5rem}.content-section .anchor{display:block;position:relative;top:-5.8rem;visibility:hidden}.content-section.bigger{font-size:3rem}.content-section.center{text-align:center}.content-section__header{background:#0d0d09;color:#f6f6f6;text-align:center;margin:auto -2rem;padding:1.5rem 0}.content-section__header h3{text-transform:uppercase;font-size:4rem;font-weight:700}.content-section__content{padding:3rem 0;color:#1f1f1f}.content-section__content img{margin:0 auto;max-width:100%}.content-section__content img.center{display:block;margin:0 auto 7rem}.content-section__content a,.content-section__content a:visited{color:#0d607b;border-bottom:2px solid transparent}.content-section__content a:hover{border-bottom:2px solid red}.content-section__content h1,.content-section__content h2,.content-section__content h3,.content-section__content h4,.content-section__content h5,.content-section__content h6{font-weight:500}.content-section__content h1{font-size:4rem;margin-bottom:3.5rem}.content-section__content h2{font-size:3.3rem;margin-bottom:3rem}.content-section__content h3,.content-section__content h4{margin-bottom:2.5rem}.content-section__content p{line-height:1.5}.content-section__content ol,.content-section__content p:not(:last-child),.content-section__content ul{margin-bottom:2.5rem}.content-section__content ol li,.content-section__content ul li{line-height:1.5;padding-left:1.5rem;padding-bottom:.2rem}.content-section__content ol li::marker,.content-section__content ul li::marker{font-size:2rem}.content-section__content ol{padding-left:2.2rem}.content-section__content ul{list-style-type:"-";padding-left:1rem}.content-section__content.streaming-social a:hover,.content-section__content.streaming-social a:link,.content-section__content.streaming-social a:visited{border-bottom-color:transparent}.content-section__content.streaming-social>h4>a{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.content-section__content.streaming-social>h4>a>img{margin:1rem}.content-section__content.food{display:flex;flex-direction:row;justify-content:space-between;align-items:stretch}.content-section__content.food>div:not(:last-child){margin-right:3.5rem}.content-section__content.food>div{width:100%;padding:1.5rem;background-color:#ccc;background-image:linear-gradient(180deg,#ddd,#eee)}.content-section__content.food>div:first-child p:nth-child(3),.content-section__content.food>div:nth-child(2)>p:nth-child(2){max-width:max(39rem,35rem);margin-right:auto;margin-left:auto}.content-section__content.food>div h2{font-size:4rem;margin-bottom:1rem;font-style:italic;font-family:"Crimson Text",serif;font-weight:500}.content-section__content.food>div div.little-chocolate-donuts{font-family:"Crimson Text",serif;font-size:1.4rem;font-style:italic;margin-bottom:1rem}.content-section__content.food>div a:hover{border-bottom-color:transparent}.content-section__content.food>div>h3{margin-bottom:0}.content-section__content.food>div>p{padding:0 2rem;font-size:1.8rem}.content-section__content.cfp h4,.content-section__content.sponsors h4{font-size:3.5rem;margin-bottom:2rem}.content-section__content.cfp p.apply,.content-section__content.sponsors p.apply{margin-bottom:3rem}.content-section__content.cfp p.apply a,.content-section__content.sponsors p.apply a{font-weight:700;font-size:4rem}.content-section__content.sponsors img{width:100%}.content-section__content.venue{padding-bottom:10rem}.content-section__content--numbered{margin-left:2rem;padding-left:4.5rem;position:relative;border-left:1px solid #ccc}.content-section__content--numbered:not(:last-child){padding-bottom:3rem}.content-section__content--numbered h2{line-height:4rem;margin-bottom:1rem}.content-section__content--numbered data{position:absolute;display:inline-block;top:0;left:-2rem;font-size:2rem;height:4rem;line-height:4rem;width:4rem;border:1px solid #ccc;background:#fff;text-align:center;border-radius:100%}.content-section__content .google-map{height:35rem;position:relative}.content-section__content .google-map iframe{border:0;height:100%;width:100%}@media only screen and (max-width:51.875em){.content-section__content.food{flex-direction:column;align-items:center}.content-section__content.food>div:not(:last-child){margin-right:0;margin-bottom:3.5rem}.content-section__content.food>div{border:1px solid #595959;width:100%}.content-section__content.food>div>p{font-size:1.5rem}}@media only screen and (min-width:63.75em){.content-section__content{padding:6rem 0}.content-section__content--numbered{margin-left:3rem;padding-left:7rem}.content-section__content--numbered h2{line-height:6rem}.content-section__content--numbered data{left:-3rem;font-size:3rem;height:6rem;line-height:6rem;width:6rem}}',
        '',
      ]),
        (t.exports = o);
    },
    241: function (t, e, n) {
      var content = n(242);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(25).default)('16581f06', content, !0, { sourceMap: !1 });
    },
    242: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '@import url(https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&family=Rubik:wght@400;500;700&family=Ubuntu+Mono:ital,wght@0,400;1,700&display=swap);',
      ]),
        o.push([
          t.i,
          '*,:after,:before{margin:0;padding:0;border:0 solid;box-sizing:inherit}html{font-size:62.5%;font-family:Rubik,sans-serif;overflow-y:scroll}body,html{height:100%}body{box-sizing:border-box;background-color:#1f1e16}#__layout,#__nuxt{min-height:100%}a{text-decoration:none;color:currentColor}',
          '',
        ]),
        (t.exports = o);
    },
    245: function (t, e, n) {
      'use strict';
      n(165);
    },
    246: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.container{max-width:80rem}.container--centered{max-width:80rem;margin:0 auto}@media only screen and (max-width:51.875em){.container,.container--centered{max-width:55rem}}.layout{height:100%}',
        '',
      ]),
        (t.exports = o);
    },
    247: function (t, e, n) {
      'use strict';
      n(166);
    },
    248: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.header{position:fixed;top:0;right:0;left:0;z-index:50;height:6rem;background-color:#1f1f1f;color:#f6f6f6}.header__wrapper{background-color:#1f1f1f;padding:.8rem 1.5rem;display:flex;align-items:center}.header__box{flex:1;display:flex;justify-content:center}.header__box:first-child{display:inline-block;justify-content:flex-start}.header__box:last-child{justify-content:flex-end}.header__logo svg{width:7.7rem;height:4rem}.header__logo svg:hover{filter:drop-shadow(0 0 .4rem rgba(255,255,255,.7))}.header__health-safety-statement-link>a{border-bottom:2px solid #f6f6f6;font-size:1.5rem;padding:.5rem;align-self:left;white-space:nowrap}@media only screen and (min-width:63.75em){.header{display:flex;justify-content:space-between;align-items:center}.header__logo{padding:.2rem 0 -.2rem}.header__health-safety-statement-link{margin-left:1.5rem}.header__health-safety-statement-link>a{padding:.5rem .2rem}}',
        '',
      ]),
        (t.exports = o);
    },
    249: function (t, e, n) {
      'use strict';
      n(167);
    },
    250: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.hamburger-menu{display:flex;z-index:50;align-items:center;height:100%}.hamburger{width:36px;height:36px;position:relative;transform:rotate(0deg);transition:.3s ease-in-out;cursor:pointer}.hamburger span{display:block;position:absolute;height:2px;width:35px;background:#eee;border-radius:2px;opacity:1;left:0;transform:rotate(0deg);transition:.15s ease-in-out}.hamburger span:first-child{top:3px;transform-origin:left center}.hamburger span:nth-child(2){top:15px;transform-origin:left center}.hamburger span:nth-child(3){top:27px;transform-origin:left center}.hamburger.open span:first-child{width:38px;transform:rotate(45deg);top:2px;left:5px}.hamburger.open span:nth-child(2){width:0;opacity:0}.hamburger.open span:nth-child(3){width:38px;transform:rotate(-45deg);left:5px;top:29px}@media (min-width:63.75em){.hamburger-menu.header__box{display:none}}',
        '',
      ]),
        (t.exports = o);
    },
    251: function (t, e, n) {
      'use strict';
      n(168);
    },
    252: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.main-menu{background-color:#1f1f1f;position:absolute;width:100%;height:auto;z-index:-25;color:#fff;transform:translateY(-100%);transform-origin:top;overflow:hidden}.main-menu__closed,.main-menu__open{transition:all .3s;overflow:hidden}.main-menu__closed ul,.main-menu__open ul{transition:all .3s}.main-menu__open,.main-menu__open ul{transform:translateY(0)}.main-menu__closed ul{transform:translateY(100%)}.main-menu ul{padding-bottom:2rem;display:flex;flex-direction:column;align-items:center}.main-menu ul li{font-size:2rem;padding:1.2rem;list-style:none;white-space:nowrap}.main-menu ul li.cta{margin-top:1rem;padding:.9rem;color:#f6f6f6;background-color:#b33018;border-radius:2rem;font-style:italic}.main-menu ul li.cta svg{fill:currentColor;width:1.5rem;height:1.5rem;margin-left:.2rem}.main-menu__hidden{transition:all 0}@media only screen and (min-width:63.75em){.main-menu{width:auto;height:6rem;position:static;display:flex;flex-direction:row;align-items:center;transform:translateY(0)}.main-menu__closed,.main-menu__open{transition:all 0s}.main-menu ul{transform:translateY(0);padding-bottom:0;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center}.main-menu ul li{margin-right:0;padding:1.2rem .2rem}.main-menu ul li:hover a{color:#fff;border-bottom:2px solid #f6f6f6}.main-menu ul li a{font-size:1.6rem;color:#bbb;text-decoration:none;padding:.6rem;border-bottom:2px solid transparent}.main-menu ul li.cta{margin-top:0;padding:0;margin-right:.7rem}.main-menu ul li.cta a{border-bottom:none;display:inline-block;color:#f6f6f6;padding:.5rem .9rem}}',
        '',
      ]),
        (t.exports = o);
    },
    253: function (t, e, n) {
      'use strict';
      n(169);
    },
    254: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.main{background-color:#f6f6f6;padding:6rem 2rem 3rem}',
        '',
      ]),
        (t.exports = o);
    },
    255: function (t, e, n) {
      'use strict';
      n(170);
    },
    256: function (t, e, n) {
      var o = n(24)(!1);
      o.push([
        t.i,
        '.footer{padding:6rem 3rem 20rem;font-size:1.8rem;background-color:#151411;color:#bbb}.footer .footer-inner{border-top:1px solid #333;padding-top:2rem;flex-direction:row;justify-content:space-between}.footer .footer-inner,.footer .footer-inner .social{display:flex;align-items:center}.footer .footer-inner .social .icon{display:inline-block}.footer .footer-inner .social .icon:not(:first-child){margin-left:1rem}.footer .footer-inner .social .icon svg{fill:currentColor;width:2.1rem;height:2.1rem}@media only screen and (min-width:63.75em){.footer{padding:6rem 3rem 15rem}}',
        '',
      ]),
        (t.exports = o);
    },
    257: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'state', function () {
          return o;
        }),
        n.d(e, 'getters', function () {
          return r;
        }),
        n.d(e, 'mutations', function () {
          return c;
        });
      n(35), n(17);
      var o = function () {
          return {
            hamburgerOpen: !1,
            menus: {
              main: [
                {
                  name: 'cfp',
                  url: { path: '/', hash: 'cfp' },
                  label: 'Call For Papers',
                },
                {
                  name: 'streamingSocial',
                  url: { path: '/', hash: 'streaming-social' },
                  label: 'Streaming & Social',
                },
                {
                  name: 'schedule',
                  url: { path: '/', hash: 'schedule' },
                  label: 'Schedule',
                },
                {
                  name: 'eventsWorkshops',
                  url: { path: '/', hash: 'events-workshops' },
                  label: 'Events & Workshops',
                },
                {
                  name: 'parking',
                  url: { path: '/', hash: 'parking' },
                  label: 'Parking',
                },
                {
                  name: 'food',
                  url: { path: '/', hash: 'food' },
                  label: 'Food',
                },
                {
                  name: 'updates',
                  url: { path: '/', hash: 'updates' },
                  label: 'Updates',
                },
                {
                  name: 'sponsors',
                  url: { path: '/', hash: 'sponsors' },
                  label: 'Sponsors',
                },
                {
                  name: 'about',
                  url: { path: '/', hash: 'about' },
                  label: 'About',
                },
                {
                  name: 'venue',
                  url: { path: '/', hash: 'venue' },
                  label: 'Venue',
                },
                {
                  name: 'principles',
                  url: { path: '/', hash: 'principles' },
                  label: 'Principles',
                  scroll: !0,
                },
              ],
            },
          };
        },
        r = {
          isHamburgerOpen: function (t) {
            return t.hamburgerOpen;
          },
          links: function (t) {
            return function (menu, e) {
              return t.menus[menu].filter(function (t) {
                return e[t.name];
              });
            };
          },
        },
        c = {
          toggleHamburger: function (t) {
            return (t.hamburgerOpen = !t.hamburgerOpen);
          },
          setHamburger: function (t, e) {
            return (t.hamburgerOpen = e);
          },
        };
    },
    267: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          methods: {
            onHome: function () {
              return '/' === this.$route.path;
            },
            maybeHideMenu: function () {
              this.onHome() &&
                this.$store.getters['nav/isHamburgerOpen'] &&
                this.$store.commit('nav/setHamburger', !1);
            },
          },
        },
        r = (n(247), n(8)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              'header',
              { staticClass: 'header' },
              [
                o(
                  'div',
                  { staticClass: 'header__wrapper' },
                  [
                    o(
                      'nuxt-link',
                      {
                        staticClass: 'header__logo header__box',
                        attrs: { to: { path: '/', hash: '#top' } },
                        nativeOn: {
                          click: function (e) {
                            return t.maybeHideMenu.apply(null, arguments);
                          },
                        },
                      },
                      [
                        o('svg', [
                          o('title', [t._v('BSides RDU')]),
                          t._v(' '),
                          o('use', {
                            attrs: {
                              'xlink:href': n(71) + '#icon-bsides-logo-small',
                            },
                          }),
                        ]),
                      ]
                    ),
                    t._v(' '),
                    t.$sections.healthSafety
                      ? o(
                          'div',
                          {
                            staticClass:
                              'header__health-safety-statement-link header__box',
                          },
                          [
                            o(
                              'nuxt-link',
                              {
                                attrs: {
                                  to: { path: '/', hash: '#health-safety' },
                                },
                                nativeOn: {
                                  click: function (e) {
                                    return t.maybeHideMenu.apply(
                                      null,
                                      arguments
                                    );
                                  },
                                },
                              },
                              [t._v('\n        Health & Safety\n      ')]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(' '),
                    o('layouts-hamburger-menu', { staticClass: 'header__box' }),
                  ],
                  1
                ),
                t._v(' '),
                o('layouts-main-menu'),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        LayoutsHamburgerMenu: n(268).default,
        LayoutsMainMenu: n(269).default,
      });
    },
    268: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          computed: {
            hamburgerClass: function () {
              return { open: this.$store.getters['nav/isHamburgerOpen'] };
            },
          },
        },
        r = (n(249), n(8)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'hamburger-menu' }, [
              n(
                'div',
                {
                  staticClass: 'hamburger',
                  class: t.hamburgerClass,
                  on: {
                    click: function (e) {
                      return t.$store.commit('nav/toggleHamburger');
                    },
                  },
                },
                [n('span'), t._v(' '), n('span'), t._v(' '), n('span')]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    269: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          computed: {
            mainMenuClass: function () {
              var t = this.$store.getters['nav/isHamburgerOpen'];
              return {
                'main-menu': !0,
                'main-menu__open': t,
                'main-menu__closed': !t && null !== this.toggled,
              };
            },
            links: function () {
              return this.$store.getters['nav/links']('main', this.$sections);
            },
          },
          methods: {
            hideMenu: function (t, e) {
              this.$store.commit('nav/setHamburger', !1);
            },
          },
        },
        r = (n(251), n(8)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              'nav',
              {
                class: t.mainMenuClass,
                on: {
                  click: function (e) {
                    return e.target !== e.currentTarget
                      ? null
                      : t.hideMenu.apply(null, arguments);
                  },
                },
              },
              [
                o(
                  'ul',
                  [
                    t._l(t.links, function (link) {
                      return o(
                        'li',
                        { key: link.name },
                        [
                          o('nuxt-link', {
                            staticClass: 'menu-link',
                            attrs: { to: link.url },
                            domProps: { innerHTML: t._s(link.label) },
                            nativeOn: {
                              click: function (e) {
                                return e.target !== e.currentTarget
                                  ? null
                                  : function (e) {
                                      t.hideMenu(e, !!link.scroll);
                                    }.apply(null, arguments);
                              },
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    t._v(' '),
                    o('li', { staticClass: 'cta' }, [
                      o(
                        'a',
                        {
                          attrs: {
                            href: 'https://events.eventzilla.net/e/bsides-rdu-2021-2138800332',
                            target: '_blank',
                          },
                        },
                        [
                          t._v('Register Now\n        '),
                          o('svg', [
                            o('use', {
                              attrs: {
                                'xlink:href': n(71) + '#icon-new-window',
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ],
                  2
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    270: function (t, e, n) {
      'use strict';
      n.r(e);
      n(253);
      var o = n(8),
        component = Object(o.a)(
          {},
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('main', { staticClass: 'main' }, [e('nuxt')], 1);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    271: function (t, e, n) {
      'use strict';
      n.r(e);
      n(255);
      var o = n(8),
        component = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o('footer', { staticClass: 'footer' }, [
              o('div', { staticClass: 'container--centered footer-inner' }, [
                o('p', { staticClass: 'copyright' }, [
                  t._v(
                    '\n      © Copyright 2021 BSidesRDU - All Rights Reserved\n    '
                  ),
                ]),
                t._v(' '),
                o('aside', { staticClass: 'social' }, [
                  o('span', { staticClass: 'icon' }, [
                    o(
                      'a',
                      {
                        attrs: {
                          href: 'https://twitter.com/BSidesRDU',
                          target: '_blank',
                        },
                      },
                      [
                        o('svg', [
                          o('title', [t._v('BSides RDU Twitter Profile')]),
                          t._v(' '),
                          o('use', {
                            attrs: { 'xlink:href': n(71) + '#icon-twitter' },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                  t._v(' '),
                  o('span', { staticClass: 'icon' }, [
                    o(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.facebook.com/BSidesRDU/',
                          target: '_blank',
                        },
                      },
                      [
                        o('svg', [
                          o('title', [t._v('BSides RDU Facebook Page')]),
                          t._v(' '),
                          o('use', {
                            attrs: { 'xlink:href': n(71) + '#icon-facebook' },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    40: function (t, e, n) {
      'use strict';
      var o = {
          props: ['error'],
          layout: 'error',
          data: function () {
            return {
              errorContent:
                '<h1>Page not found</h1><h2><a href="/">Home page</a></h2>',
            };
          },
        },
        r = n(8),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)('content-section', {
              attrs: { content: t.errorContent },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, { ContentSection: n(191).default });
    },
    71: function (t, e, n) {
      t.exports = n.p + 'img/icons.svg';
    },
  },
  [[194, 24, 2, 25]],
]);
