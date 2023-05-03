"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [367],
    {
        9602: (y, c, o) => {
            o.d(c, { y: () => b });
            var g = o(1281),
                p = o(8288),
                i = o(4650),
                f = o(6895);
            function l(n, u) {
                1 & n &&
                    (i.ynx(0),
                    i.TgZ(1, "div", 1),
                    i.Hsn(2),
                    i.qZA(),
                    i.TgZ(3, "div", 2),
                    i.Hsn(4, 1),
                    i.qZA(),
                    i.BQk());
            }
            function e(n, u) {
                1 & n && (i.TgZ(0, "div", 4), i.Hsn(1, 3), i.qZA()),
                    2 & n && i.Q6J("@expandCollapse", void 0);
            }
            function x(n, u) {
                if (
                    (1 & n &&
                        (i.ynx(0),
                        i.Hsn(1, 2),
                        i.YNc(2, e, 2, 1, "div", 3),
                        i.BQk()),
                    2 & n)
                ) {
                    const a = i.oxw();
                    i.xp6(2), i.Q6J("ngIf", a.expanded);
                }
            }
            const Z = [
                    [["", "amosCardFront", ""]],
                    [["", "amosCardBack", ""]],
                    "*",
                    [["", "amosCardExpansion", ""]],
                ],
                v = [
                    "[amosCardFront]",
                    "[amosCardBack]",
                    "*",
                    "[amosCardExpansion]",
                ];
            let b = (() => {
                class n {
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
                    ngOnChanges(a) {
                        "expanded" in a &&
                            (this.expanded = (0, g.Ig)(
                                a.expanded.currentValue
                            )),
                            "flippable" in a &&
                                (this.flippable = (0, g.Ig)(
                                    a.flippable.currentValue
                                ));
                    }
                }
                return (
                    (n.ɵfac = function (a) {
                        return new (a || n)();
                    }),
                    (n.ɵcmp = i.Xpm({
                        type: n,
                        selectors: [["amos-card"]],
                        hostVars: 2,
                        hostBindings: function (a, m) {
                            2 & a && i.Tol(m.classList);
                        },
                        inputs: {
                            expanded: "expanded",
                            face: "face",
                            flippable: "flippable",
                        },
                        exportAs: ["amosCard"],
                        features: [i.TTD],
                        ngContentSelectors: v,
                        decls: 2,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            [1, "amos-card-front"],
                            [1, "amos-card-back"],
                            ["class", "amos-card-expansion", 4, "ngIf"],
                            [1, "amos-card-expansion"],
                        ],
                        template: function (a, m) {
                            1 & a &&
                                (i.F$t(Z),
                                i.YNc(0, l, 5, 0, "ng-container", 0),
                                i.YNc(1, x, 3, 1, "ng-container", 0)),
                                2 & a &&
                                    (i.Q6J("ngIf", m.flippable),
                                    i.xp6(1),
                                    i.Q6J("ngIf", !m.flippable));
                        },
                        dependencies: [f.O5],
                        styles: [
                            "amos-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}amos-card.amos-card-flippable .amos-card-front,amos-card.amos-card-flippable .amos-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable .amos-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}amos-card.amos-card-flippable .amos-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n",
                        ],
                        encapsulation: 2,
                        data: { animation: p.L },
                    })),
                    n
                );
            })();
        },
        5804: (y, c, o) => {
            o.d(c, { J: () => f }), o(9602);
            var p = o(6895),
                i = o(4650);
            let f = (() => {
                class l {}
                return (
                    (l.ɵfac = function (x) {
                        return new (x || l)();
                    }),
                    (l.ɵmod = i.oAB({ type: l })),
                    (l.ɵinj = i.cJS({ imports: [p.ez] })),
                    l
                );
            })();
        },
        6367: (y, c, o) => {
            o.r(c), o.d(c, { PricingSimpleModule: () => A });
            var g = o(2510),
                p = o(4859),
                i = o(7392),
                f = o(5804),
                l = o(4466),
                e = o(4650),
                x = o(9602),
                Z = o(6895),
                v = o(4006);
            function b(t, r) {
                1 & t &&
                    (e.ynx(0),
                    e.TgZ(1, "div"),
                    e._uU(2, "Your"),
                    e.qZA(),
                    e.TgZ(3, "div"),
                    e._UZ(4, "b"),
                    e._uU(5, " Specified Amount"),
                    e.qZA(),
                    e.BQk());
            }
            function n(t, r) {
                1 & t && (e.ynx(0), e._uU(1, "$5"), e.BQk());
            }
            function u(t, r) {
                1 & t && (e.ynx(0), e._uU(1, "$5"), e.BQk());
            }
            function a(t, r) {
                1 & t && (e.ynx(0), e._uU(1, "$3"), e.BQk());
            }
            function m(t, r) {
                1 & t && (e.ynx(0), e._uU(1, "$3"), e.BQk());
            }
            function h(t, r) {
                1 & t &&
                    (e.ynx(0),
                    e.TgZ(1, "div"),
                    e._uU(2, "Pack of"),
                    e.qZA(),
                    e.TgZ(3, "div"),
                    e._uU(4, "300 Coins For $3"),
                    e.qZA(),
                    e.BQk());
            }
            function _(t, r) {
                1 & t &&
                    (e.ynx(0),
                    e._UZ(1, "div"),
                    e.TgZ(2, "div"),
                    e._UZ(3, "b"),
                    e.qZA(),
                    e.BQk());
            }
            const T = [
                {
                    path: "",
                    component: (() => {
                        class t {
                            constructor() {
                                this.yearlyBilling = !0;
                            }
                            updateResult() {
                                const d = parseFloat(
                                    this.inputValue.toString()
                                );
                                this.result = isNaN(d) ? null : 100 * d;
                            }
                            ngOnInit() {
                                this.updateResult();
                            }
                        }
                        return (
                            (t.ɵfac = function (d) {
                                return new (d || t)();
                            }),
                            (t.ɵcmp = e.Xpm({
                                type: t,
                                selectors: [["pricing-simple"]],
                                decls: 184,
                                vars: 18,
                                consts: [
                                    [
                                        1,
                                        "relative",
                                        "flex",
                                        "flex-col",
                                        "flex-auto",
                                        "min-w-0",
                                        "overflow-hidden",
                                        "sm:mt-0",
                                        "mt-10",
                                    ],
                                    [
                                        1,
                                        "relative",
                                        "pt-8",
                                        "pb-12",
                                        "sm:pt-20",
                                        "sm:pb-24",
                                        "px-6",
                                        "sm:px-16",
                                        "overflow-hidden",
                                    ],
                                    [
                                        "viewBox",
                                        "0 0 960 540",
                                        "width",
                                        "100%",
                                        "height",
                                        "100%",
                                        "preserveAspectRatio",
                                        "xMidYMax slice",
                                        "xmlns",
                                        "http://www.w3.org/2000/svg",
                                        1,
                                        "-z-1",
                                        "absolute",
                                        "inset-0",
                                    ],
                                    [
                                        "fill",
                                        "none",
                                        "stroke",
                                        "currentColor",
                                        "stroke-width",
                                        "100",
                                        1,
                                        "opacity-40",
                                        "text-gray-200",
                                        "dark:text-gray-800",
                                    ],
                                    ["r", "234", "cx", "196", "cy", "23"],
                                    ["r", "234", "cx", "790", "cy", "491"],
                                    [1, "flex", "flex-col", "items-center"],
                                    [
                                        1,
                                        "text-xl",
                                        "font-semibold",
                                        "text-blue-500",
                                    ],
                                    [
                                        1,
                                        "mt-1",
                                        "text-4xl",
                                        "sm:text-7xl",
                                        "font-extrabold",
                                        "tracking-tight",
                                        "leading-tight",
                                        "text-center",
                                    ],
                                    [
                                        1,
                                        "mt-3",
                                        "sm:text-2xl",
                                        "text-center",
                                        "tracking-tight",
                                        "text-secondary",
                                    ],
                                    [1, ""],
                                    [
                                        1,
                                        "flex",
                                        "justify-center",
                                        "mt-10",
                                        "sm:mt-20",
                                    ],
                                    [1, "w-full", "max-w-sm", "md:max-w-7xl"],
                                    [
                                        1,
                                        "grid",
                                        "grid-cols-1",
                                        "md:grid-cols-2",
                                        "lg:grid-cols-3",
                                        "gap-y-6",
                                        "lg:gap-y-0",
                                        "md:gap-x-6",
                                        "lg:gap-x-0",
                                    ],
                                    [
                                        1,
                                        "flex-col",
                                        "items-center",
                                        "max-w-sm",
                                        "md:max-w-none",
                                        "lg:my-16",
                                        "p-8",
                                        "sm:py-12",
                                        "sm:px-10",
                                        "lg:rounded-none",
                                        "lg:rounded-l-2xl",
                                        "text-center",
                                    ],
                                    [
                                        1,
                                        "text-4xl",
                                        "font-bold",
                                        "tracking-tight",
                                        "leading-tight",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "items-baseline",
                                        "mt-8",
                                        "whitespace-nowrap",
                                    ],
                                    [
                                        1,
                                        "text-6xl",
                                        "font-semibold",
                                        "leading-tight",
                                        "tracking-tight",
                                    ],
                                    [
                                        "type",
                                        "text",
                                        "placeholder",
                                        "Price",
                                        1,
                                        "shadow",
                                        "appearance-none",
                                        "rounded",
                                        "w-26",
                                        "text-black",
                                        "dark:text-white",
                                        "leading-tight",
                                        "focus:outline-none",
                                        "focus:shadow-outline",
                                        3,
                                        "ngModel",
                                        "ngModelChange",
                                    ],
                                    [
                                        1,
                                        "ml-2",
                                        "mt-5",
                                        "text-2xl",
                                        "text-secondary",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "mt-4",
                                        "text-secondary",
                                    ],
                                    [4, "ngIf"],
                                    [1, "mt-8", "space-y-2"],
                                    [
                                        "mat-stroked-button",
                                        "",
                                        1,
                                        "amos-mat-button-large",
                                        "w-full",
                                        "mt-10",
                                        3,
                                        "color",
                                    ],
                                    [
                                        1,
                                        "relative",
                                        "flex-col",
                                        "items-center",
                                        "max-w-sm",
                                        "md:max-w-none",
                                        "invisible",
                                        "lg:visible",
                                        "sm:visible",
                                        "md:visible",
                                        "xl:visible",
                                        "xxl:visible",
                                        "p-8",
                                        "sm:py-12",
                                        "sm:px-10",
                                        "lg:pb-28",
                                        "lg:overflow-visible",
                                        "lg:z-99",
                                        "lg:shadow-2xl",
                                        "text-center",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "items-center",
                                        "h-8",
                                        "px-8",
                                        "rounded-full",
                                        "font-semibold",
                                        "text-center",
                                        "leading-none",
                                        "bg-primary-100",
                                        "text-on-primary-100",
                                    ],
                                    [
                                        1,
                                        "mt-8",
                                        "text-4xl",
                                        "font-extrabold",
                                        "tracking-tight",
                                        "leading-tight",
                                    ],
                                    [1, "ml-2", "text-2xl", "text-secondary"],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "mt-2",
                                        "text-secondary",
                                    ],
                                    [
                                        "mat-flat-button",
                                        "",
                                        1,
                                        "amos-mat-button-large",
                                        "w-full",
                                        "mt-10",
                                        3,
                                        "color",
                                    ],
                                    [
                                        1,
                                        "flex-col",
                                        "items-center",
                                        "max-w-sm",
                                        "md:max-w-none",
                                        "invisible",
                                        "lg:visible",
                                        "sm:visible",
                                        "md:visible",
                                        "xl:visible",
                                        "xxl:visible",
                                        "lg:my-16",
                                        "p-8",
                                        "sm:py-12",
                                        "sm:px-10",
                                        "lg:rounded-none",
                                        "lg:rounded-r-2xl",
                                        "text-center",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "mt-14",
                                        "text-secondary",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "items-center",
                                        "px-6",
                                        "py-10",
                                        "sm:px-16",
                                        "-mt-240",
                                        "sm:mt-0",
                                        "md:mt-0",
                                        "lg:mt-0",
                                        "xl:mt-0",
                                        "sm:pt-18",
                                        "sm:pb-20",
                                        "bg-white",
                                        "dark:bg-neutral-900",
                                    ],
                                    [1, "w-full", "max-w-7xl"],
                                    [
                                        1,
                                        "text-4xl",
                                        "font-extrabold",
                                        "tracking-tight",
                                        "leading-tight",
                                    ],
                                    [
                                        1,
                                        "max-w-xl",
                                        "mt-2",
                                        "text-xl",
                                        "text-secondary",
                                    ],
                                    [
                                        1,
                                        "grid",
                                        "grid-cols-1",
                                        "gap-x-6",
                                        "gap-y-12",
                                        "sm:grid-cols-2",
                                        "lg:grid-cols-3",
                                        "lg:gap-16",
                                        "w-full",
                                        "mt-12",
                                        "sm:mt-16",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "items-center",
                                        "justify-center",
                                        "w-12",
                                        "h-12",
                                        "rounded",
                                        "bg-primary",
                                    ],
                                    [1, "text-white", 3, "svgIcon"],
                                    [1, "mt-4", "text-xl", "font-medium"],
                                    [1, "mt-2", "leading-6", "text-secondary"],
                                    [
                                        1,
                                        "px-6",
                                        "py-10",
                                        "sm:py-12",
                                        "sm:px-16",
                                        "bg-primary-600",
                                        "text-on-primary-600",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "items-center",
                                        "w-full",
                                        "max-w-7xl",
                                        "mx-auto",
                                        "text-center",
                                    ],
                                    [
                                        1,
                                        "text-3xl",
                                        "sm:text-4xl",
                                        "sm:text-5xl",
                                        "font-extrabold",
                                        "leading-6",
                                        "sm:leading-10",
                                    ],
                                    [
                                        1,
                                        "mt-2",
                                        "text-3xl",
                                        "sm:text-4xl",
                                        "sm:text-5xl",
                                        "font-extrabold",
                                        "leading-6",
                                        "sm:leading-10",
                                        "text-black",
                                        "text-opacity-70",
                                    ],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "items-center",
                                        "pt-12",
                                        "sm:pt-18",
                                        "pb-8",
                                        "sm:pb-20",
                                        "px-6",
                                        "sm:px-16",
                                        "bg-gray-50",
                                        "dark:bg-neutral-900",
                                    ],
                                    [
                                        1,
                                        "grid",
                                        "grid-cols-1",
                                        "gap-x-6",
                                        "gap-y-12",
                                        "sm:grid-cols-2",
                                        "lg:gap-x-16",
                                        "w-full",
                                        "mt-12",
                                        "sm:mt-16",
                                    ],
                                    [1, "text-xl", "font-semibold"],
                                    [1, "mt-2"],
                                ],
                                template: function (d, s) {
                                    1 & d &&
                                        (e.TgZ(0, "div", 0)(1, "div", 1),
                                        e.O4$(),
                                        e.TgZ(2, "svg", 2)(3, "g", 3),
                                        e._UZ(4, "circle", 4)(5, "circle", 5),
                                        e.qZA()(),
                                        e.kcU(),
                                        e.TgZ(6, "div", 6)(7, "h2", 7),
                                        e._uU(8, "PRICING"),
                                        e.qZA(),
                                        e.TgZ(9, "div", 8),
                                        e._uU(
                                            10,
                                            " Take control of your productivity "
                                        ),
                                        e.qZA(),
                                        e.TgZ(11, "div", 9)(12, "div", 10),
                                        e._uU(
                                            13,
                                            " With Coins you can support Events or buy Notes. "
                                        ),
                                        e.qZA(),
                                        e.TgZ(14, "div", 10),
                                        e._uU(
                                            15,
                                            "Take control of everything."
                                        ),
                                        e.qZA()()(),
                                        e.TgZ(16, "div", 11)(17, "div", 12)(
                                            18,
                                            "div",
                                            13
                                        )(19, "amos-card", 14)(20, "div", 15),
                                        e._uU(21, " Personal "),
                                        e.qZA(),
                                        e.TgZ(22, "div", 16)(23, "div", 17),
                                        e._uU(24, " $ "),
                                        e.ynx(25),
                                        e.TgZ(26, "input", 18),
                                        e.NdJ("ngModelChange", function (U) {
                                            return (s.inputValue = U);
                                        })("ngModelChange", function () {
                                            return s.updateResult();
                                        }),
                                        e.qZA(),
                                        e.BQk(),
                                        e.TgZ(27, "div", 19),
                                        e._uU(28),
                                        e.qZA()()(),
                                        e.TgZ(29, "div", 20),
                                        e.YNc(30, b, 6, 0, "ng-container", 21),
                                        e.qZA(),
                                        e.TgZ(31, "div", 22)(32, "div"),
                                        e._UZ(33, "b"),
                                        e._uU(
                                            34,
                                            " Control over the amount spent"
                                        ),
                                        e.qZA(),
                                        e.TgZ(35, "div"),
                                        e._uU(36, "Flexible"),
                                        e.qZA(),
                                        e.TgZ(37, "div"),
                                        e._UZ(38, "b"),
                                        e._uU(39, " Payment"),
                                        e.qZA(),
                                        e.TgZ(40, "div"),
                                        e._uU(41, "Option"),
                                        e.qZA(),
                                        e._UZ(42, "div"),
                                        e.qZA(),
                                        e.TgZ(43, "button", 23),
                                        e._uU(44, " Buy Coins "),
                                        e.qZA()(),
                                        e.TgZ(45, "amos-card", 24)(
                                            46,
                                            "div",
                                            25
                                        ),
                                        e._uU(47, " POPULAR "),
                                        e.qZA(),
                                        e.TgZ(48, "div", 26),
                                        e._uU(49, " Premium "),
                                        e.qZA(),
                                        e.TgZ(50, "div", 16)(51, "div", 17),
                                        e.YNc(52, n, 2, 0, "ng-container", 21),
                                        e.YNc(53, u, 2, 0, "ng-container", 21),
                                        e.qZA(),
                                        e.TgZ(54, "div", 27),
                                        e._uU(55, " / 500 Coins "),
                                        e.qZA()(),
                                        e._UZ(56, "div", 28),
                                        e.TgZ(57, "div", 22)(58, "div"),
                                        e._uU(59, "Exclusive Perks"),
                                        e.qZA(),
                                        e.TgZ(60, "div"),
                                        e._uU(61, "Bigger Amount"),
                                        e.qZA(),
                                        e.TgZ(62, "div"),
                                        e._uU(63, "Features"),
                                        e.qZA(),
                                        e._UZ(64, "div")(65, "div"),
                                        e.qZA(),
                                        e.TgZ(66, "button", 29),
                                        e._uU(67, " Buy Coins "),
                                        e.qZA()(),
                                        e.TgZ(68, "amos-card", 30)(
                                            69,
                                            "div",
                                            15
                                        ),
                                        e._uU(70, " Trios "),
                                        e.qZA(),
                                        e.TgZ(71, "div", 16)(72, "div", 17),
                                        e.YNc(73, a, 2, 0, "ng-container", 21),
                                        e.YNc(74, m, 2, 0, "ng-container", 21),
                                        e.qZA(),
                                        e.TgZ(75, "div", 27),
                                        e._uU(76, " / 300 Coins "),
                                        e.qZA()(),
                                        e.TgZ(77, "div", 31),
                                        e.YNc(78, h, 5, 0, "ng-container", 21),
                                        e.YNc(79, _, 4, 0, "ng-container", 21),
                                        e.qZA(),
                                        e.TgZ(80, "div", 22)(81, "div"),
                                        e._uU(82, "Great Value"),
                                        e.qZA(),
                                        e.TgZ(83, "div"),
                                        e._uU(84, "For Money"),
                                        e.qZA(),
                                        e.TgZ(85, "div"),
                                        e._uU(86, "Convenient pack"),
                                        e.qZA(),
                                        e.TgZ(87, "div"),
                                        e._uU(88, "Size for small purchases"),
                                        e.qZA(),
                                        e._UZ(89, "div"),
                                        e.qZA(),
                                        e.TgZ(90, "button", 23),
                                        e._uU(91, " Buy Coins "),
                                        e.qZA()()()()()(),
                                        e.TgZ(92, "div", 32)(93, "div", 33)(
                                            94,
                                            "div"
                                        )(95, "div", 34),
                                        e._uU(
                                            96,
                                            " Everything you need to create efficiently "
                                        ),
                                        e.qZA(),
                                        e.TgZ(97, "div", 35),
                                        e._uU(
                                            98,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(99, "div", 36)(100, "div")(
                                            101,
                                            "span",
                                            37
                                        ),
                                        e._UZ(102, "mat-icon", 38),
                                        e.qZA(),
                                        e.TgZ(103, "div", 39),
                                        e._uU(104, " Lorem ipsum dolor "),
                                        e.qZA(),
                                        e.TgZ(105, "div", 40),
                                        e._uU(
                                            106,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(107, "div")(108, "span", 37),
                                        e._UZ(109, "mat-icon", 38),
                                        e.qZA(),
                                        e.TgZ(110, "div", 39),
                                        e._uU(111, " Lorem ipsum dolor "),
                                        e.qZA(),
                                        e.TgZ(112, "div", 40),
                                        e._uU(
                                            113,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(114, "div")(115, "span", 37),
                                        e._UZ(116, "mat-icon", 38),
                                        e.qZA(),
                                        e.TgZ(117, "div", 39),
                                        e._uU(118, " Lorem ipsum dolor "),
                                        e.qZA(),
                                        e.TgZ(119, "div", 40),
                                        e._uU(
                                            120,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(121, "div")(122, "span", 37),
                                        e._UZ(123, "mat-icon", 38),
                                        e.qZA(),
                                        e.TgZ(124, "div", 39),
                                        e._uU(125, " Lorem ipsum dolor "),
                                        e.qZA(),
                                        e.TgZ(126, "div", 40),
                                        e._uU(
                                            127,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(128, "div")(129, "span", 37),
                                        e._UZ(130, "mat-icon", 38),
                                        e.qZA(),
                                        e.TgZ(131, "div", 39),
                                        e._uU(132, " Lorem ipsum dolor "),
                                        e.qZA(),
                                        e.TgZ(133, "div", 40),
                                        e._uU(
                                            134,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(135, "div")(136, "span", 37),
                                        e._UZ(137, "mat-icon", 38),
                                        e.qZA(),
                                        e.TgZ(138, "div", 39),
                                        e._uU(139, " Lorem ipsum dolor "),
                                        e.qZA(),
                                        e.TgZ(140, "div", 40),
                                        e._uU(
                                            141,
                                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus vitae, reiciendis possimus placeat doloribus harum "
                                        ),
                                        e.qZA()()()()(),
                                        e.TgZ(142, "div", 41)(143, "div", 42)(
                                            144,
                                            "div",
                                            43
                                        ),
                                        e._uU(
                                            145,
                                            " Boost your productivity. "
                                        ),
                                        e.qZA(),
                                        e.TgZ(146, "div", 44),
                                        e._uU(147, " Start using Amos today. "),
                                        e.qZA()()(),
                                        e.TgZ(148, "div", 45)(149, "div", 33)(
                                            150,
                                            "div"
                                        )(151, "div", 34),
                                        e._uU(
                                            152,
                                            " Frequently asked questions "
                                        ),
                                        e.qZA(),
                                        e.TgZ(153, "div", 35),
                                        e._uU(
                                            154,
                                            " Here are the most frequently asked questions you may check before getting started "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(155, "div", 46)(156, "div")(
                                            157,
                                            "div",
                                            47
                                        ),
                                        e._uU(
                                            158,
                                            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque "
                                        ),
                                        e.qZA(),
                                        e.TgZ(159, "div", 40)(160, "p"),
                                        e._uU(
                                            161,
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eveniet minus optio culpa ipsam id quia. Fuga totam odit rerum rem temporibus similique ab. Ratione, dicta cumque. Suscipit, fugiat recusandae? "
                                        ),
                                        e.qZA()()(),
                                        e.TgZ(162, "div")(163, "div", 47),
                                        e._uU(
                                            164,
                                            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque "
                                        ),
                                        e.qZA(),
                                        e.TgZ(165, "div", 40)(166, "p"),
                                        e._uU(
                                            167,
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eveniet minus optio culpa ipsam id quia. Fuga totam odit rerum rem temporibus similique ab. Ratione, dicta cumque. Suscipit, fugiat recusandae? "
                                        ),
                                        e.qZA()()(),
                                        e.TgZ(168, "div")(169, "div", 47),
                                        e._uU(
                                            170,
                                            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque "
                                        ),
                                        e.qZA(),
                                        e.TgZ(171, "div", 40)(172, "p"),
                                        e._uU(
                                            173,
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eveniet minus optio culpa ipsam id quia. Fuga totam odit rerum rem temporibus similique ab. Ratione, dicta cumque. Suscipit, fugiat recusandae? "
                                        ),
                                        e.qZA(),
                                        e.TgZ(174, "p", 48),
                                        e._uU(
                                            175,
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eveniet minus optio culpa ipsam id quia. Fuga totam odit rerum rem temporibus similique ab. Ratione, dicta cumque. Suscipit, fugiat recusandae? "
                                        ),
                                        e.qZA()()(),
                                        e.TgZ(176, "div")(177, "div", 47),
                                        e._uU(
                                            178,
                                            " Lorem ipsum, dolor sit ame "
                                        ),
                                        e.qZA(),
                                        e.TgZ(179, "div", 40)(180, "p"),
                                        e._uU(
                                            181,
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eveniet minus optio culpa ipsam id quia. Fuga totam odit rerum rem temporibus similique ab. Ratione, dicta cumque. Suscipit, fugiat recusandae? "
                                        ),
                                        e.qZA(),
                                        e.TgZ(182, "p", 48),
                                        e._uU(
                                            183,
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eveniet minus optio culpa ipsam id quia. Fuga totam odit rerum rem temporibus similique ab. Ratione, dicta cumque. Suscipit, fugiat recusandae? "
                                        ),
                                        e.qZA()()()()()()()),
                                        2 & d &&
                                            (e.xp6(26),
                                            e.Q6J("ngModel", s.inputValue),
                                            e.xp6(2),
                                            e.hij(" / ", s.result, " Coins "),
                                            e.xp6(2),
                                            e.Q6J("ngIf", s.yearlyBilling),
                                            e.xp6(13),
                                            e.Q6J("color", "primary"),
                                            e.xp6(9),
                                            e.Q6J("ngIf", s.yearlyBilling),
                                            e.xp6(1),
                                            e.Q6J("ngIf", !s.yearlyBilling),
                                            e.xp6(13),
                                            e.Q6J("color", "primary"),
                                            e.xp6(7),
                                            e.Q6J("ngIf", s.yearlyBilling),
                                            e.xp6(1),
                                            e.Q6J("ngIf", !s.yearlyBilling),
                                            e.xp6(4),
                                            e.Q6J("ngIf", s.yearlyBilling),
                                            e.xp6(1),
                                            e.Q6J("ngIf", !s.yearlyBilling),
                                            e.xp6(11),
                                            e.Q6J("color", "primary"),
                                            e.xp6(12),
                                            e.Q6J(
                                                "svgIcon",
                                                "heroicons_outline:pencil-alt"
                                            ),
                                            e.xp6(7),
                                            e.Q6J(
                                                "svgIcon",
                                                "heroicons_outline:filter"
                                            ),
                                            e.xp6(7),
                                            e.Q6J(
                                                "svgIcon",
                                                "heroicons_outline:refresh"
                                            ),
                                            e.xp6(7),
                                            e.Q6J(
                                                "svgIcon",
                                                "heroicons_outline:tag"
                                            ),
                                            e.xp6(7),
                                            e.Q6J(
                                                "svgIcon",
                                                "heroicons_outline:document-text"
                                            ),
                                            e.xp6(7),
                                            e.Q6J(
                                                "svgIcon",
                                                "heroicons_outline:chart-square-bar"
                                            ));
                                },
                                dependencies: [
                                    p.lW,
                                    i.Hw,
                                    x.y,
                                    Z.O5,
                                    v.Fj,
                                    v.JJ,
                                    v.On,
                                ],
                                encapsulation: 2,
                                changeDetection: 0,
                            })),
                            t
                        );
                    })(),
                },
            ];
            let A = (() => {
                class t {}
                return (
                    (t.ɵfac = function (d) {
                        return new (d || t)();
                    }),
                    (t.ɵmod = e.oAB({ type: t })),
                    (t.ɵinj = e.cJS({
                        imports: [g.Bz.forChild(T), p.ot, i.Ps, f.J, l.m],
                    })),
                    t
                );
            })();
        },
    },
]);
