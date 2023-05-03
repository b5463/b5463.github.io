"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [735],
    {
        9602: (A, k, a) => {
            a.d(k, { y: () => x });
            var g = a(1281),
                _ = a(8288),
                s = a(4650),
                p = a(6895);
            function e(n, l) {
                1 & n &&
                    (s.ynx(0),
                    s.TgZ(1, "div", 1),
                    s.Hsn(2),
                    s.qZA(),
                    s.TgZ(3, "div", 2),
                    s.Hsn(4, 1),
                    s.qZA(),
                    s.BQk());
            }
            function h(n, l) {
                1 & n && (s.TgZ(0, "div", 4), s.Hsn(1, 3), s.qZA()),
                    2 & n && s.Q6J("@expandCollapse", void 0);
            }
            function v(n, l) {
                if (
                    (1 & n &&
                        (s.ynx(0),
                        s.Hsn(1, 2),
                        s.YNc(2, h, 2, 1, "div", 3),
                        s.BQk()),
                    2 & n)
                ) {
                    const i = s.oxw();
                    s.xp6(2), s.Q6J("ngIf", i.expanded);
                }
            }
            const b = [
                    [["", "amosCardFront", ""]],
                    [["", "amosCardBack", ""]],
                    "*",
                    [["", "amosCardExpansion", ""]],
                ],
                E = [
                    "[amosCardFront]",
                    "[amosCardBack]",
                    "*",
                    "[amosCardExpansion]",
                ];
            let x = (() => {
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
                    ngOnChanges(i) {
                        "expanded" in i &&
                            (this.expanded = (0, g.Ig)(
                                i.expanded.currentValue
                            )),
                            "flippable" in i &&
                                (this.flippable = (0, g.Ig)(
                                    i.flippable.currentValue
                                ));
                    }
                }
                return (
                    (n.ɵfac = function (i) {
                        return new (i || n)();
                    }),
                    (n.ɵcmp = s.Xpm({
                        type: n,
                        selectors: [["amos-card"]],
                        hostVars: 2,
                        hostBindings: function (i, u) {
                            2 & i && s.Tol(u.classList);
                        },
                        inputs: {
                            expanded: "expanded",
                            face: "face",
                            flippable: "flippable",
                        },
                        exportAs: ["amosCard"],
                        features: [s.TTD],
                        ngContentSelectors: E,
                        decls: 2,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            [1, "amos-card-front"],
                            [1, "amos-card-back"],
                            ["class", "amos-card-expansion", 4, "ngIf"],
                            [1, "amos-card-expansion"],
                        ],
                        template: function (i, u) {
                            1 & i &&
                                (s.F$t(b),
                                s.YNc(0, e, 5, 0, "ng-container", 0),
                                s.YNc(1, v, 3, 1, "ng-container", 0)),
                                2 & i &&
                                    (s.Q6J("ngIf", u.flippable),
                                    s.xp6(1),
                                    s.Q6J("ngIf", !u.flippable));
                        },
                        dependencies: [p.O5],
                        styles: [
                            "amos-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}amos-card.amos-card-flippable .amos-card-front,amos-card.amos-card-flippable .amos-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable .amos-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}amos-card.amos-card-flippable .amos-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n",
                        ],
                        encapsulation: 2,
                        data: { animation: _.L },
                    })),
                    n
                );
            })();
        },
        5804: (A, k, a) => {
            a.d(k, { J: () => p }), a(9602);
            var _ = a(6895),
                s = a(4650);
            let p = (() => {
                class e {}
                return (
                    (e.ɵfac = function (v) {
                        return new (v || e)();
                    }),
                    (e.ɵmod = s.oAB({ type: e })),
                    (e.ɵinj = s.cJS({ imports: [_.ez] })),
                    e
                );
            })();
        },
        1572: (A, k, a) => {
            a.d(k, { Cq: () => M, Ou: () => c });
            var g = a(1281),
                _ = a(3353),
                s = a(5589),
                p = a(6895),
                e = a(4650),
                h = a(3238),
                v = a(727);
            function b(o, r) {
                if ((1 & o && (e.O4$(), e._UZ(0, "circle", 4)), 2 & o)) {
                    const t = e.oxw(),
                        f = e.MAs(1);
                    e.Udp(
                        "animation-name",
                        "mat-progress-spinner-stroke-rotate-" +
                            t._spinnerAnimationLabel
                    )("stroke-dashoffset", t._getStrokeDashOffset(), "px")(
                        "stroke-dasharray",
                        t._getStrokeCircumference(),
                        "px"
                    )(
                        "stroke-width",
                        t._getCircleStrokeWidth(),
                        "%"
                    )("transform-origin", t._getCircleTransformOrigin(f)),
                        e.uIk("r", t._getCircleRadius());
                }
            }
            function E(o, r) {
                if ((1 & o && (e.O4$(), e._UZ(0, "circle", 4)), 2 & o)) {
                    const t = e.oxw(),
                        f = e.MAs(1);
                    e.Udp("stroke-dashoffset", t._getStrokeDashOffset(), "px")(
                        "stroke-dasharray",
                        t._getStrokeCircumference(),
                        "px"
                    )(
                        "stroke-width",
                        t._getCircleStrokeWidth(),
                        "%"
                    )("transform-origin", t._getCircleTransformOrigin(f)),
                        e.uIk("r", t._getCircleRadius());
                }
            }
            const l = (0, h.pj)(
                    class {
                        constructor(o) {
                            this._elementRef = o;
                        }
                    },
                    "primary"
                ),
                i = new e.OlP("mat-progress-spinner-default-options", {
                    providedIn: "root",
                    factory: function u() {
                        return { diameter: 100 };
                    },
                });
            class c extends l {
                constructor(r, t, f, m, d, w, C, S) {
                    super(r),
                        (this._document = f),
                        (this._diameter = 100),
                        (this._value = 0),
                        (this._resizeSubscription = v.w0.EMPTY),
                        (this.mode = "determinate");
                    const T = c._diameters;
                    (this._spinnerAnimationLabel =
                        this._getSpinnerAnimationLabel()),
                        T.has(f.head) || T.set(f.head, new Set([100])),
                        (this._noopAnimations =
                            "NoopAnimations" === m &&
                            !!d &&
                            !d._forceAnimations),
                        "mat-spinner" ===
                            r.nativeElement.nodeName.toLowerCase() &&
                            (this.mode = "indeterminate"),
                        d &&
                            (d.color &&
                                (this.color = this.defaultColor = d.color),
                            d.diameter && (this.diameter = d.diameter),
                            d.strokeWidth &&
                                (this.strokeWidth = d.strokeWidth)),
                        t.isBrowser &&
                            t.SAFARI &&
                            C &&
                            w &&
                            S &&
                            (this._resizeSubscription = C.change(150).subscribe(
                                () => {
                                    "indeterminate" === this.mode &&
                                        S.run(() => w.markForCheck());
                                }
                            ));
                }
                get diameter() {
                    return this._diameter;
                }
                set diameter(r) {
                    (this._diameter = (0, g.su)(r)),
                        (this._spinnerAnimationLabel =
                            this._getSpinnerAnimationLabel()),
                        this._styleRoot && this._attachStyleNode();
                }
                get strokeWidth() {
                    return this._strokeWidth || this.diameter / 10;
                }
                set strokeWidth(r) {
                    this._strokeWidth = (0, g.su)(r);
                }
                get value() {
                    return "determinate" === this.mode ? this._value : 0;
                }
                set value(r) {
                    this._value = Math.max(0, Math.min(100, (0, g.su)(r)));
                }
                ngOnInit() {
                    const r = this._elementRef.nativeElement;
                    (this._styleRoot = (0, _.kV)(r) || this._document.head),
                        this._attachStyleNode(),
                        r.classList.add(
                            "mat-progress-spinner-indeterminate-animation"
                        );
                }
                ngOnDestroy() {
                    this._resizeSubscription.unsubscribe();
                }
                _getCircleRadius() {
                    return (this.diameter - 10) / 2;
                }
                _getViewBox() {
                    const r = 2 * this._getCircleRadius() + this.strokeWidth;
                    return `0 0 ${r} ${r}`;
                }
                _getStrokeCircumference() {
                    return 2 * Math.PI * this._getCircleRadius();
                }
                _getStrokeDashOffset() {
                    return "determinate" === this.mode
                        ? (this._getStrokeCircumference() *
                              (100 - this._value)) /
                              100
                        : null;
                }
                _getCircleStrokeWidth() {
                    return (this.strokeWidth / this.diameter) * 100;
                }
                _getCircleTransformOrigin(r) {
                    const t = 50 * (r.currentScale ?? 1);
                    return `${t}% ${t}%`;
                }
                _attachStyleNode() {
                    const r = this._styleRoot,
                        t = this._diameter,
                        f = c._diameters;
                    let m = f.get(r);
                    if (!m || !m.has(t)) {
                        const d = this._document.createElement("style");
                        d.setAttribute(
                            "mat-spinner-animation",
                            this._spinnerAnimationLabel
                        ),
                            (d.textContent = this._getAnimationText()),
                            r.appendChild(d),
                            m || ((m = new Set()), f.set(r, m)),
                            m.add(t);
                    }
                }
                _getAnimationText() {
                    const r = this._getStrokeCircumference();
                    return "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n"
                        .replace(/START_VALUE/g, "" + 0.95 * r)
                        .replace(/END_VALUE/g, "" + 0.2 * r)
                        .replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
                }
                _getSpinnerAnimationLabel() {
                    return this.diameter.toString().replace(".", "_");
                }
            }
            (c._diameters = new WeakMap()),
                (c.ɵfac = function (r) {
                    return new (r || c)(
                        e.Y36(e.SBq),
                        e.Y36(_.t4),
                        e.Y36(p.K0, 8),
                        e.Y36(e.QbO, 8),
                        e.Y36(i),
                        e.Y36(e.sBO),
                        e.Y36(s.rL),
                        e.Y36(e.R0b)
                    );
                }),
                (c.ɵcmp = e.Xpm({
                    type: c,
                    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
                    hostAttrs: [
                        "role",
                        "progressbar",
                        "tabindex",
                        "-1",
                        1,
                        "mat-progress-spinner",
                        "mat-spinner",
                    ],
                    hostVars: 10,
                    hostBindings: function (r, t) {
                        2 & r &&
                            (e.uIk(
                                "aria-valuemin",
                                "determinate" === t.mode ? 0 : null
                            )(
                                "aria-valuemax",
                                "determinate" === t.mode ? 100 : null
                            )(
                                "aria-valuenow",
                                "determinate" === t.mode ? t.value : null
                            )("mode", t.mode),
                            e.Udp("width", t.diameter, "px")(
                                "height",
                                t.diameter,
                                "px"
                            ),
                            e.ekj(
                                "_mat-animation-noopable",
                                t._noopAnimations
                            ));
                    },
                    inputs: {
                        color: "color",
                        diameter: "diameter",
                        strokeWidth: "strokeWidth",
                        mode: "mode",
                        value: "value",
                    },
                    exportAs: ["matProgressSpinner"],
                    features: [e.qOj],
                    decls: 4,
                    vars: 8,
                    consts: [
                        [
                            "preserveAspectRatio",
                            "xMidYMid meet",
                            "focusable",
                            "false",
                            "aria-hidden",
                            "true",
                            3,
                            "ngSwitch",
                        ],
                        ["svg", ""],
                        [
                            "cx",
                            "50%",
                            "cy",
                            "50%",
                            3,
                            "animation-name",
                            "stroke-dashoffset",
                            "stroke-dasharray",
                            "stroke-width",
                            "transform-origin",
                            4,
                            "ngSwitchCase",
                        ],
                        [
                            "cx",
                            "50%",
                            "cy",
                            "50%",
                            3,
                            "stroke-dashoffset",
                            "stroke-dasharray",
                            "stroke-width",
                            "transform-origin",
                            4,
                            "ngSwitchCase",
                        ],
                        ["cx", "50%", "cy", "50%"],
                    ],
                    template: function (r, t) {
                        1 & r &&
                            (e.O4$(),
                            e.TgZ(0, "svg", 0, 1),
                            e.YNc(2, b, 1, 11, "circle", 2),
                            e.YNc(3, E, 1, 9, "circle", 3),
                            e.qZA()),
                            2 & r &&
                                (e.Udp("width", t.diameter, "px")(
                                    "height",
                                    t.diameter,
                                    "px"
                                ),
                                e.Q6J("ngSwitch", "indeterminate" === t.mode),
                                e.uIk("viewBox", t._getViewBox()),
                                e.xp6(2),
                                e.Q6J("ngSwitchCase", !0),
                                e.xp6(1),
                                e.Q6J("ngSwitchCase", !1));
                    },
                    dependencies: [p.RF, p.n9],
                    styles: [
                        ".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}",
                    ],
                    encapsulation: 2,
                    changeDetection: 0,
                }));
            let M = (() => {
                class o {}
                return (
                    (o.ɵfac = function (t) {
                        return new (t || o)();
                    }),
                    (o.ɵmod = e.oAB({ type: o })),
                    (o.ɵinj = e.cJS({ imports: [h.BQ, p.ez, h.BQ] })),
                    o
                );
            })();
        },
    },
]);
