"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [24],
    {
        6024: (p, i, o) => {
            o.r(i), o.d(i, { LandingModule: () => c });
            var s = o(2510),
                l = o(4859),
                r = o(7392),
                d = o(4466),
                n = o(4650);
            const u = [
                {
                    path: "",
                    component: (() => {
                        class e {
                            constructor() {}
                        }
                        return (
                            (e.ɵfac = function (a) {
                                return new (a || e)();
                            }),
                            (e.ɵcmp = n.Xpm({
                                type: e,
                                selectors: [["landing"]],
                                decls: 15,
                                vars: 3,
                                consts: [
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "items-center",
                                        "justify-center",
                                        "w-full",
                                        "h-full",
                                    ],
                                    [1, "w-full", "max-w-3xl"],
                                    [
                                        1,
                                        "max-w-none",
                                        "mx-auto",
                                        "prose",
                                        "prose-sm",
                                    ],
                                    [
                                        "src",
                                        "assets/images/logo/fr.png",
                                        "alt",
                                        "Logo image",
                                        1,
                                        "w-20",
                                    ],
                                    [
                                        "mat-flat-button",
                                        "",
                                        1,
                                        "mt-8",
                                        3,
                                        "color",
                                        "routerLink",
                                    ],
                                    [1, "ml-2", "icon-size-5", 3, "svgIcon"],
                                ],
                                template: function (a, g) {
                                    1 & a &&
                                        (n.TgZ(0, "div", 0)(1, "div", 1)(
                                            2,
                                            "div",
                                            2
                                        ),
                                        n._UZ(3, "img", 3),
                                        n.TgZ(4, "h1"),
                                        n._uU(5, "Landing Module"),
                                        n.qZA(),
                                        n.TgZ(6, "p"),
                                        n._uU(
                                            7,
                                            " This can be the landing or the welcome page of your application. If you have an SSR (Server Side Rendering) setup, or if you don't need to have Search engine visibility and optimizations, you can even use this page as your primary landing page. "
                                        ),
                                        n.qZA(),
                                        n.TgZ(8, "p"),
                                        n._uU(
                                            9,
                                            ' This is a separate "module", it has its own directory and routing setup and also it\'s completely separated from the actual application. This is also a simple example of a multiple applications setup that uses the same codebase. You can have different entry points and essentially have different applications within the same codebase. '
                                        ),
                                        n.qZA()(),
                                        n.TgZ(10, "div")(11, "a", 4)(
                                            12,
                                            "span"
                                        ),
                                        n._uU(13, "Launch the App"),
                                        n.qZA(),
                                        n._UZ(14, "mat-icon", 5),
                                        n.qZA()()()()),
                                        2 & a &&
                                            (n.xp6(11),
                                            n.Q6J("color", "primary")(
                                                "routerLink",
                                                "/dashboards/home"
                                            ),
                                            n.xp6(3),
                                            n.Q6J(
                                                "svgIcon",
                                                "heroicons_solid:arrow-narrow-right"
                                            ));
                                },
                                dependencies: [s.yS, l.zs, r.Hw],
                                encapsulation: 2,
                            })),
                            e
                        );
                    })(),
                },
            ];
            let c = (() => {
                class e {}
                return (
                    (e.ɵfac = function (a) {
                        return new (a || e)();
                    }),
                    (e.ɵmod = n.oAB({ type: e })),
                    (e.ɵinj = n.cJS({
                        imports: [s.Bz.forChild(u), l.ot, r.Ps, d.m],
                    })),
                    e
                );
            })();
        },
    },
]);
