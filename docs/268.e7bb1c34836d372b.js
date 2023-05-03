"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [268],
    {
        9602: (g, r, n) => {
            n.d(r, { y: () => m });
            var d = n(1281),
                u = n(8288),
                t = n(4650),
                f = n(6895);
            function s(a, i) {
                1 & a &&
                    (t.ynx(0),
                    t.TgZ(1, "div", 1),
                    t.Hsn(2),
                    t.qZA(),
                    t.TgZ(3, "div", 2),
                    t.Hsn(4, 1),
                    t.qZA(),
                    t.BQk());
            }
            function e(a, i) {
                1 & a && (t.TgZ(0, "div", 4), t.Hsn(1, 3), t.qZA()),
                    2 & a && t.Q6J("@expandCollapse", void 0);
            }
            function l(a, i) {
                if (
                    (1 & a &&
                        (t.ynx(0),
                        t.Hsn(1, 2),
                        t.YNc(2, e, 2, 1, "div", 3),
                        t.BQk()),
                    2 & a)
                ) {
                    const o = t.oxw();
                    t.xp6(2), t.Q6J("ngIf", o.expanded);
                }
            }
            const x = [
                    [["", "amosCardFront", ""]],
                    [["", "amosCardBack", ""]],
                    "*",
                    [["", "amosCardExpansion", ""]],
                ],
                p = [
                    "[amosCardFront]",
                    "[amosCardBack]",
                    "*",
                    "[amosCardExpansion]",
                ];
            let m = (() => {
                class a {
                    constructor() {
                        (this.expanded = !1),
                            (this.face = "front"),
                            (this.flippable = !1);
                    }
                    get classList() {
                        return {
                            "amos-card-expanded": this.expanded,
                            "amos-card-face-back":
                                this.flippable && "back" === this.face,
                            "amos-card-face-front":
                                this.flippable && "front" === this.face,
                            "amos-card-flippable": this.flippable,
                        };
                    }
                    ngOnChanges(o) {
                        "expanded" in o &&
                            (this.expanded = (0, d.Ig)(
                                o.expanded.currentValue
                            )),
                            "flippable" in o &&
                                (this.flippable = (0, d.Ig)(
                                    o.flippable.currentValue
                                ));
                    }
                }
                return (
                    (a.ɵfac = function (o) {
                        return new (o || a)();
                    }),
                    (a.ɵcmp = t.Xpm({
                        type: a,
                        selectors: [["amos-card"]],
                        hostVars: 2,
                        hostBindings: function (o, c) {
                            2 & o && t.Tol(c.classList);
                        },
                        inputs: {
                            expanded: "expanded",
                            face: "face",
                            flippable: "flippable",
                        },
                        exportAs: ["amosCard"],
                        features: [t.TTD],
                        ngContentSelectors: p,
                        decls: 2,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            [1, "amos-card-front"],
                            [1, "amos-card-back"],
                            ["class", "amos-card-expansion", 4, "ngIf"],
                            [1, "amos-card-expansion"],
                        ],
                        template: function (o, c) {
                            1 & o &&
                                (t.F$t(x),
                                t.YNc(0, s, 5, 0, "ng-container", 0),
                                t.YNc(1, l, 3, 1, "ng-container", 0)),
                                2 & o &&
                                    (t.Q6J("ngIf", c.flippable),
                                    t.xp6(1),
                                    t.Q6J("ngIf", !c.flippable));
                        },
                        dependencies: [f.O5],
                        styles: [
                            "amos-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}amos-card.amos-card-flippable .amos-card-front,amos-card.amos-card-flippable .amos-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable .amos-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}amos-card.amos-card-flippable .amos-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n",
                        ],
                        encapsulation: 2,
                        data: { animation: u.L },
                    })),
                    a
                );
            })();
        },
        5804: (g, r, n) => {
            n.d(r, { J: () => f }), n(9602);
            var u = n(6895),
                t = n(4650);
            let f = (() => {
                class s {}
                return (
                    (s.ɵfac = function (l) {
                        return new (l || s)();
                    }),
                    (s.ɵmod = t.oAB({ type: s })),
                    (s.ɵinj = t.cJS({ imports: [u.ez] })),
                    s
                );
            })();
        },
        4268: (g, r, n) => {
            n.r(r), n.d(r, { AuthConfirmationRequiredModule: () => m });
            var d = n(2510),
                u = n(4859),
                t = n(5804),
                f = n(4466),
                s = n(8288),
                e = n(4650);
            const l = function () {
                    return ["/sign-in"];
                },
                p = [
                    {
                        path: "",
                        component: (() => {
                            class a {
                                constructor() {}
                            }
                            return (
                                (a.ɵfac = function (o) {
                                    return new (o || a)();
                                }),
                                (a.ɵcmp = e.Xpm({
                                    type: a,
                                    selectors: [["auth-confirmation-required"]],
                                    decls: 24,
                                    vars: 2,
                                    consts: [
                                        [
                                            1,
                                            "flex",
                                            "flex-col",
                                            "sm:flex-row",
                                            "items-center",
                                            "md:items-start",
                                            "sm:justify-center",
                                            "md:justify-start",
                                            "bg-pattern-img",
                                            "dark:bg-bpattern-img",
                                            "flex-auto",
                                            "min-w-0",
                                            "h-screen",
                                        ],
                                        [
                                            1,
                                            "md:flex",
                                            "md:items-center",
                                            "md:justify-end",
                                            "w-full",
                                            "sm:w-auto",
                                            "md:h-full",
                                            "md:w-1/2",
                                            "py-8",
                                            "px-4",
                                            "sm:p-12",
                                            "md:p-16",
                                            "sm:rounded-2xl",
                                            "md:rounded-none",
                                            "sm:shadow",
                                            "md:shadow-none",
                                            "sm:bg-card",
                                        ],
                                        [
                                            1,
                                            "w-full",
                                            "max-w-80",
                                            "sm:w-80",
                                            "mx-auto",
                                            "sm:mx-0",
                                        ],
                                        [1, "w-12"],
                                        ["src", "assets/images/logo/favi.svg"],
                                        [
                                            1,
                                            "mt-8",
                                            "text-4xl",
                                            "font-extrabold",
                                            "tracking-tight",
                                            "leading-tight",
                                        ],
                                        [1, "mt-4"],
                                        [
                                            1,
                                            "mt-8",
                                            "text-md",
                                            "font-medium",
                                            "text-secondary",
                                        ],
                                        [
                                            1,
                                            "ml-1",
                                            "text-primary-500",
                                            "hover:underline",
                                            3,
                                            "routerLink",
                                        ],
                                        [
                                            1,
                                            "relative",
                                            "hidden",
                                            "md:flex",
                                            "flex-auto",
                                            "items-center",
                                            "justify-center",
                                            "h-full",
                                            "p-0",
                                            "overflow-hidden",
                                            "bg-white",
                                            "dark:bg-neutral-900",
                                        ],
                                        [
                                            "src",
                                            "/assets/images/logo/logg.svg",
                                            1,
                                            "ml-[360px]",
                                            "mx-auto",
                                            "flex",
                                            "justify-end",
                                            "z-10",
                                            "grid",
                                            "place-items-end",
                                            "items-end",
                                            "w-full",
                                            "h-full",
                                            "object-cover",
                                        ],
                                        [
                                            1,
                                            "absolute",
                                            "flex",
                                            "bottom-20",
                                            "dark:text-white",
                                            "text-[#362B6E]",
                                        ],
                                        [1, "p-12", "text-2xl", "leading-none"],
                                        [1, "h-full", "font-bold"],
                                        [
                                            1,
                                            "text-xl",
                                            "mt-2",
                                            "font-semibold",
                                            "italic",
                                            "leading-none",
                                        ],
                                    ],
                                    template: function (o, c) {
                                        1 & o &&
                                            (e.TgZ(0, "div", 0)(1, "div", 1)(
                                                2,
                                                "div",
                                                2
                                            )(3, "div", 3),
                                            e._UZ(4, "img", 4),
                                            e.qZA(),
                                            e.TgZ(5, "div", 5),
                                            e._uU(6, " Confirmation required "),
                                            e.qZA(),
                                            e.TgZ(7, "div", 6),
                                            e._uU(
                                                8,
                                                " A confirmation mail with instructions has been sent to your email address. Follow those instructions to confirm your email address and activate your account. "
                                            ),
                                            e.qZA(),
                                            e.TgZ(9, "div", 7)(10, "span"),
                                            e._uU(11, "Return to"),
                                            e.qZA(),
                                            e.TgZ(12, "a", 8),
                                            e._uU(13, "sign in "),
                                            e.qZA()()()(),
                                            e.TgZ(14, "div", 9),
                                            e._UZ(15, "img", 10),
                                            e.TgZ(16, "div", 11)(17, "div", 12)(
                                                18,
                                                "div",
                                                13
                                            ),
                                            e._uU(
                                                19,
                                                ' "H\u013eadajme sp\xf4sob, aby u\u010ditelia menej u\u010dili '
                                            ),
                                            e._UZ(20, "br"),
                                            e._uU(
                                                21,
                                                " a \u017eiaci viac pochopili.\u201c "
                                            ),
                                            e.qZA(),
                                            e.TgZ(22, "div", 14),
                                            e._uU(
                                                23,
                                                " - J\xe1n Amos Komensk\xfd "
                                            ),
                                            e.qZA()()()()()),
                                            2 & o &&
                                                (e.xp6(12),
                                                e.Q6J(
                                                    "routerLink",
                                                    e.DdM(1, l)
                                                ));
                                    },
                                    dependencies: [d.yS],
                                    encapsulation: 2,
                                    data: { animation: s.L },
                                })),
                                a
                            );
                        })(),
                    },
                ];
            let m = (() => {
                class a {}
                return (
                    (a.ɵfac = function (o) {
                        return new (o || a)();
                    }),
                    (a.ɵmod = e.oAB({ type: a })),
                    (a.ɵinj = e.cJS({
                        imports: [d.Bz.forChild(p), u.ot, t.J, f.m],
                    })),
                    a
                );
            })();
        },
    },
]);
