"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [347],
    {
        5347: (Ye, E, a) => {
            a.r(E), a.d(E, { HelpCenterModule: () => Ve });
            var c = a(2510),
                g = a(4859),
                e = a(4650),
                I = a(5017),
                v = a(1281),
                u = a(7579),
                D = a(727);
            let J = 0;
            const H = new e.OlP("CdkAccordion");
            let N = (() => {
                    class n {
                        constructor() {
                            (this._stateChanges = new u.x()),
                                (this._openCloseAllActions = new u.x()),
                                (this.id = "cdk-accordion-" + J++),
                                (this._multi = !1);
                        }
                        get multi() {
                            return this._multi;
                        }
                        set multi(t) {
                            this._multi = (0, v.Ig)(t);
                        }
                        openAll() {
                            this._multi && this._openCloseAllActions.next(!0);
                        }
                        closeAll() {
                            this._openCloseAllActions.next(!1);
                        }
                        ngOnChanges(t) {
                            this._stateChanges.next(t);
                        }
                        ngOnDestroy() {
                            this._stateChanges.complete(),
                                this._openCloseAllActions.complete();
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵdir = e.lG2({
                            type: n,
                            selectors: [
                                ["cdk-accordion"],
                                ["", "cdkAccordion", ""],
                            ],
                            inputs: { multi: "multi" },
                            exportAs: ["cdkAccordion"],
                            features: [
                                e._Bn([{ provide: H, useExisting: n }]),
                                e.TTD,
                            ],
                        })),
                        n
                    );
                })(),
                V = 0,
                Y = (() => {
                    class n {
                        constructor(t, o, r) {
                            (this.accordion = t),
                                (this._changeDetectorRef = o),
                                (this._expansionDispatcher = r),
                                (this._openCloseAllSubscription = D.w0.EMPTY),
                                (this.closed = new e.vpe()),
                                (this.opened = new e.vpe()),
                                (this.destroyed = new e.vpe()),
                                (this.expandedChange = new e.vpe()),
                                (this.id = "cdk-accordion-child-" + V++),
                                (this._expanded = !1),
                                (this._disabled = !1),
                                (this._removeUniqueSelectionListener =
                                    () => {}),
                                (this._removeUniqueSelectionListener = r.listen(
                                    (s, _) => {
                                        this.accordion &&
                                            !this.accordion.multi &&
                                            this.accordion.id === _ &&
                                            this.id !== s &&
                                            (this.expanded = !1);
                                    }
                                )),
                                this.accordion &&
                                    (this._openCloseAllSubscription =
                                        this._subscribeToOpenCloseAllActions());
                        }
                        get expanded() {
                            return this._expanded;
                        }
                        set expanded(t) {
                            (t = (0, v.Ig)(t)),
                                this._expanded !== t &&
                                    ((this._expanded = t),
                                    this.expandedChange.emit(t),
                                    t
                                        ? (this.opened.emit(),
                                          this._expansionDispatcher.notify(
                                              this.id,
                                              this.accordion
                                                  ? this.accordion.id
                                                  : this.id
                                          ))
                                        : this.closed.emit(),
                                    this._changeDetectorRef.markForCheck());
                        }
                        get disabled() {
                            return this._disabled;
                        }
                        set disabled(t) {
                            this._disabled = (0, v.Ig)(t);
                        }
                        ngOnDestroy() {
                            this.opened.complete(),
                                this.closed.complete(),
                                this.destroyed.emit(),
                                this.destroyed.complete(),
                                this._removeUniqueSelectionListener(),
                                this._openCloseAllSubscription.unsubscribe();
                        }
                        toggle() {
                            this.disabled || (this.expanded = !this.expanded);
                        }
                        close() {
                            this.disabled || (this.expanded = !1);
                        }
                        open() {
                            this.disabled || (this.expanded = !0);
                        }
                        _subscribeToOpenCloseAllActions() {
                            return this.accordion._openCloseAllActions.subscribe(
                                (t) => {
                                    this.disabled || (this.expanded = t);
                                }
                            );
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(
                                e.Y36(H, 12),
                                e.Y36(e.sBO),
                                e.Y36(I.A8)
                            );
                        }),
                        (n.ɵdir = e.lG2({
                            type: n,
                            selectors: [
                                ["cdk-accordion-item"],
                                ["", "cdkAccordionItem", ""],
                            ],
                            inputs: {
                                expanded: "expanded",
                                disabled: "disabled",
                            },
                            outputs: {
                                closed: "closed",
                                opened: "opened",
                                destroyed: "destroyed",
                                expandedChange: "expandedChange",
                            },
                            exportAs: ["cdkAccordionItem"],
                            features: [
                                e._Bn([{ provide: H, useValue: void 0 }]),
                            ],
                        })),
                        n
                    );
                })(),
                j = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({})),
                        n
                    );
                })();
            var w = a(4080),
                h = a(6895),
                S = a(3238),
                U = a(2687),
                z = a(1884),
                P = a(8675),
                A = a(9300),
                $ = a(5698),
                T = a(9521),
                X = a(515),
                K = a(6451),
                l = a(7340);
            const W = ["body"];
            function ee(n, i) {}
            const te = [
                    [["mat-expansion-panel-header"]],
                    "*",
                    [["mat-action-row"]],
                ],
                ne = ["mat-expansion-panel-header", "*", "mat-action-row"];
            function oe(n, i) {
                if ((1 & n && e._UZ(0, "span", 2), 2 & n)) {
                    const t = e.oxw();
                    e.Q6J("@indicatorRotate", t._getExpandedState());
                }
            }
            const ie = [
                    [["mat-panel-title"]],
                    [["mat-panel-description"]],
                    "*",
                ],
                ae = ["mat-panel-title", "mat-panel-description", "*"],
                M = new e.OlP("MAT_ACCORDION"),
                L = "225ms cubic-bezier(0.4,0.0,0.2,1)",
                O = {
                    indicatorRotate: (0, l.X$)("indicatorRotate", [
                        (0, l.SB)(
                            "collapsed, void",
                            (0, l.oB)({ transform: "rotate(0deg)" })
                        ),
                        (0, l.SB)(
                            "expanded",
                            (0, l.oB)({ transform: "rotate(180deg)" })
                        ),
                        (0, l.eR)(
                            "expanded <=> collapsed, void => collapsed",
                            (0, l.jt)(L)
                        ),
                    ]),
                    bodyExpansion: (0, l.X$)("bodyExpansion", [
                        (0, l.SB)(
                            "collapsed, void",
                            (0, l.oB)({ height: "0px", visibility: "hidden" })
                        ),
                        (0, l.SB)(
                            "expanded",
                            (0, l.oB)({ height: "*", visibility: "visible" })
                        ),
                        (0, l.eR)(
                            "expanded <=> collapsed, void => collapsed",
                            (0, l.jt)(L)
                        ),
                    ]),
                },
                Q = new e.OlP("MAT_EXPANSION_PANEL");
            let re = (() => {
                    class n {
                        constructor(t, o) {
                            (this._template = t), (this._expansionPanel = o);
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(e.Rgc), e.Y36(Q, 8));
                        }),
                        (n.ɵdir = e.lG2({
                            type: n,
                            selectors: [
                                ["ng-template", "matExpansionPanelContent", ""],
                            ],
                        })),
                        n
                    );
                })(),
                se = 0;
            const B = new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
            let G = (() => {
                class n extends Y {
                    constructor(t, o, r, s, _, q, Z) {
                        super(t, o, r),
                            (this._viewContainerRef = s),
                            (this._animationMode = q),
                            (this._hideToggle = !1),
                            (this.afterExpand = new e.vpe()),
                            (this.afterCollapse = new e.vpe()),
                            (this._inputChanges = new u.x()),
                            (this._headerId =
                                "mat-expansion-panel-header-" + se++),
                            (this._bodyAnimationDone = new u.x()),
                            (this.accordion = t),
                            (this._document = _),
                            this._bodyAnimationDone
                                .pipe(
                                    (0, z.x)(
                                        (f, m) =>
                                            f.fromState === m.fromState &&
                                            f.toState === m.toState
                                    )
                                )
                                .subscribe((f) => {
                                    "void" !== f.fromState &&
                                        ("expanded" === f.toState
                                            ? this.afterExpand.emit()
                                            : "collapsed" === f.toState &&
                                              this.afterCollapse.emit());
                                }),
                            Z && (this.hideToggle = Z.hideToggle);
                    }
                    get hideToggle() {
                        return (
                            this._hideToggle ||
                            (this.accordion && this.accordion.hideToggle)
                        );
                    }
                    set hideToggle(t) {
                        this._hideToggle = (0, v.Ig)(t);
                    }
                    get togglePosition() {
                        return (
                            this._togglePosition ||
                            (this.accordion && this.accordion.togglePosition)
                        );
                    }
                    set togglePosition(t) {
                        this._togglePosition = t;
                    }
                    _hasSpacing() {
                        return (
                            !!this.accordion &&
                            this.expanded &&
                            "default" === this.accordion.displayMode
                        );
                    }
                    _getExpandedState() {
                        return this.expanded ? "expanded" : "collapsed";
                    }
                    toggle() {
                        this.expanded = !this.expanded;
                    }
                    close() {
                        this.expanded = !1;
                    }
                    open() {
                        this.expanded = !0;
                    }
                    ngAfterContentInit() {
                        this._lazyContent &&
                            this._lazyContent._expansionPanel === this &&
                            this.opened
                                .pipe(
                                    (0, P.O)(null),
                                    (0, A.h)(
                                        () => this.expanded && !this._portal
                                    ),
                                    (0, $.q)(1)
                                )
                                .subscribe(() => {
                                    this._portal = new w.UE(
                                        this._lazyContent._template,
                                        this._viewContainerRef
                                    );
                                });
                    }
                    ngOnChanges(t) {
                        this._inputChanges.next(t);
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy(),
                            this._bodyAnimationDone.complete(),
                            this._inputChanges.complete();
                    }
                    _containsFocus() {
                        if (this._body) {
                            const t = this._document.activeElement,
                                o = this._body.nativeElement;
                            return t === o || o.contains(t);
                        }
                        return !1;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(M, 12),
                            e.Y36(e.sBO),
                            e.Y36(I.A8),
                            e.Y36(e.s_b),
                            e.Y36(h.K0),
                            e.Y36(e.QbO, 8),
                            e.Y36(B, 8)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["mat-expansion-panel"]],
                        contentQueries: function (t, o, r) {
                            if ((1 & t && e.Suo(r, re, 5), 2 & t)) {
                                let s;
                                e.iGM((s = e.CRH())) &&
                                    (o._lazyContent = s.first);
                            }
                        },
                        viewQuery: function (t, o) {
                            if ((1 & t && e.Gf(W, 5), 2 & t)) {
                                let r;
                                e.iGM((r = e.CRH())) && (o._body = r.first);
                            }
                        },
                        hostAttrs: [1, "mat-expansion-panel"],
                        hostVars: 6,
                        hostBindings: function (t, o) {
                            2 & t &&
                                e.ekj("mat-expanded", o.expanded)(
                                    "_mat-animation-noopable",
                                    "NoopAnimations" === o._animationMode
                                )(
                                    "mat-expansion-panel-spacing",
                                    o._hasSpacing()
                                );
                        },
                        inputs: {
                            disabled: "disabled",
                            expanded: "expanded",
                            hideToggle: "hideToggle",
                            togglePosition: "togglePosition",
                        },
                        outputs: {
                            opened: "opened",
                            closed: "closed",
                            expandedChange: "expandedChange",
                            afterExpand: "afterExpand",
                            afterCollapse: "afterCollapse",
                        },
                        exportAs: ["matExpansionPanel"],
                        features: [
                            e._Bn([
                                { provide: M, useValue: void 0 },
                                { provide: Q, useExisting: n },
                            ]),
                            e.qOj,
                            e.TTD,
                        ],
                        ngContentSelectors: ne,
                        decls: 7,
                        vars: 4,
                        consts: [
                            [
                                "role",
                                "region",
                                1,
                                "mat-expansion-panel-content",
                                3,
                                "id",
                            ],
                            ["body", ""],
                            [1, "mat-expansion-panel-body"],
                            [3, "cdkPortalOutlet"],
                        ],
                        template: function (t, o) {
                            1 & t &&
                                (e.F$t(te),
                                e.Hsn(0),
                                e.TgZ(1, "div", 0, 1),
                                e.NdJ("@bodyExpansion.done", function (s) {
                                    return o._bodyAnimationDone.next(s);
                                }),
                                e.TgZ(3, "div", 2),
                                e.Hsn(4, 1),
                                e.YNc(5, ee, 0, 0, "ng-template", 3),
                                e.qZA(),
                                e.Hsn(6, 2),
                                e.qZA()),
                                2 & t &&
                                    (e.xp6(1),
                                    e.Q6J(
                                        "@bodyExpansion",
                                        o._getExpandedState()
                                    )("id", o.id),
                                    e.uIk("aria-labelledby", o._headerId),
                                    e.xp6(4),
                                    e.Q6J("cdkPortalOutlet", o._portal));
                        },
                        dependencies: [w.Pl],
                        styles: [
                            '.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}',
                        ],
                        encapsulation: 2,
                        data: { animation: [O.bodyExpansion] },
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            class le {}
            const de = (0, S.sb)(le);
            let R = (() => {
                    class n extends de {
                        constructor(t, o, r, s, _, q, Z) {
                            super(),
                                (this.panel = t),
                                (this._element = o),
                                (this._focusMonitor = r),
                                (this._changeDetectorRef = s),
                                (this._animationMode = q),
                                (this._parentChangeSubscription = D.w0.EMPTY);
                            const f = t.accordion
                                ? t.accordion._stateChanges.pipe(
                                      (0, A.h)(
                                          (m) =>
                                              !(
                                                  !m.hideToggle &&
                                                  !m.togglePosition
                                              )
                                      )
                                  )
                                : X.E;
                            (this.tabIndex = parseInt(Z || "") || 0),
                                (this._parentChangeSubscription = (0, K.T)(
                                    t.opened,
                                    t.closed,
                                    f,
                                    t._inputChanges.pipe(
                                        (0, A.h)(
                                            (m) =>
                                                !!(
                                                    m.hideToggle ||
                                                    m.disabled ||
                                                    m.togglePosition
                                                )
                                        )
                                    )
                                ).subscribe(() =>
                                    this._changeDetectorRef.markForCheck()
                                )),
                                t.closed
                                    .pipe((0, A.h)(() => t._containsFocus()))
                                    .subscribe(() => r.focusVia(o, "program")),
                                _ &&
                                    ((this.expandedHeight = _.expandedHeight),
                                    (this.collapsedHeight = _.collapsedHeight));
                        }
                        get disabled() {
                            return this.panel.disabled;
                        }
                        _toggle() {
                            this.disabled || this.panel.toggle();
                        }
                        _isExpanded() {
                            return this.panel.expanded;
                        }
                        _getExpandedState() {
                            return this.panel._getExpandedState();
                        }
                        _getPanelId() {
                            return this.panel.id;
                        }
                        _getTogglePosition() {
                            return this.panel.togglePosition;
                        }
                        _showToggle() {
                            return (
                                !this.panel.hideToggle && !this.panel.disabled
                            );
                        }
                        _getHeaderHeight() {
                            const t = this._isExpanded();
                            return t && this.expandedHeight
                                ? this.expandedHeight
                                : !t && this.collapsedHeight
                                ? this.collapsedHeight
                                : null;
                        }
                        _keydown(t) {
                            switch (t.keyCode) {
                                case T.L_:
                                case T.K5:
                                    (0, T.Vb)(t) ||
                                        (t.preventDefault(), this._toggle());
                                    break;
                                default:
                                    return void (
                                        this.panel.accordion &&
                                        this.panel.accordion._handleHeaderKeydown(
                                            t
                                        )
                                    );
                            }
                        }
                        focus(t, o) {
                            t
                                ? this._focusMonitor.focusVia(
                                      this._element,
                                      t,
                                      o
                                  )
                                : this._element.nativeElement.focus(o);
                        }
                        ngAfterViewInit() {
                            this._focusMonitor
                                .monitor(this._element)
                                .subscribe((t) => {
                                    t &&
                                        this.panel.accordion &&
                                        this.panel.accordion._handleHeaderFocus(
                                            this
                                        );
                                });
                        }
                        ngOnDestroy() {
                            this._parentChangeSubscription.unsubscribe(),
                                this._focusMonitor.stopMonitoring(
                                    this._element
                                );
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(
                                e.Y36(G, 1),
                                e.Y36(e.SBq),
                                e.Y36(U.tE),
                                e.Y36(e.sBO),
                                e.Y36(B, 8),
                                e.Y36(e.QbO, 8),
                                e.$8M("tabindex")
                            );
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["mat-expansion-panel-header"]],
                            hostAttrs: [
                                "role",
                                "button",
                                1,
                                "mat-expansion-panel-header",
                                "mat-focus-indicator",
                            ],
                            hostVars: 15,
                            hostBindings: function (t, o) {
                                1 & t &&
                                    e.NdJ("click", function () {
                                        return o._toggle();
                                    })("keydown", function (s) {
                                        return o._keydown(s);
                                    }),
                                    2 & t &&
                                        (e.uIk("id", o.panel._headerId)(
                                            "tabindex",
                                            o.tabIndex
                                        )("aria-controls", o._getPanelId())(
                                            "aria-expanded",
                                            o._isExpanded()
                                        )("aria-disabled", o.panel.disabled),
                                        e.Udp("height", o._getHeaderHeight()),
                                        e.ekj("mat-expanded", o._isExpanded())(
                                            "mat-expansion-toggle-indicator-after",
                                            "after" === o._getTogglePosition()
                                        )(
                                            "mat-expansion-toggle-indicator-before",
                                            "before" === o._getTogglePosition()
                                        )(
                                            "_mat-animation-noopable",
                                            "NoopAnimations" ===
                                                o._animationMode
                                        ));
                            },
                            inputs: {
                                tabIndex: "tabIndex",
                                expandedHeight: "expandedHeight",
                                collapsedHeight: "collapsedHeight",
                            },
                            features: [e.qOj],
                            ngContentSelectors: ae,
                            decls: 5,
                            vars: 3,
                            consts: [
                                [1, "mat-content"],
                                ["class", "mat-expansion-indicator", 4, "ngIf"],
                                [1, "mat-expansion-indicator"],
                            ],
                            template: function (t, o) {
                                1 & t &&
                                    (e.F$t(ie),
                                    e.TgZ(0, "span", 0),
                                    e.Hsn(1),
                                    e.Hsn(2, 1),
                                    e.Hsn(3, 2),
                                    e.qZA(),
                                    e.YNc(4, oe, 1, 1, "span", 1)),
                                    2 & t &&
                                        (e.ekj(
                                            "mat-content-hide-toggle",
                                            !o._showToggle()
                                        ),
                                        e.xp6(4),
                                        e.Q6J("ngIf", o._showToggle()));
                            },
                            dependencies: [h.O5],
                            styles: [
                                '.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}',
                            ],
                            encapsulation: 2,
                            data: { animation: [O.indicatorRotate] },
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                pe = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵdir = e.lG2({
                            type: n,
                            selectors: [["mat-panel-title"]],
                            hostAttrs: [1, "mat-expansion-panel-header-title"],
                        })),
                        n
                    );
                })(),
                ce = (() => {
                    class n extends N {
                        constructor() {
                            super(...arguments),
                                (this._ownHeaders = new e.n_E()),
                                (this._hideToggle = !1),
                                (this.displayMode = "default"),
                                (this.togglePosition = "after");
                        }
                        get hideToggle() {
                            return this._hideToggle;
                        }
                        set hideToggle(t) {
                            this._hideToggle = (0, v.Ig)(t);
                        }
                        ngAfterContentInit() {
                            this._headers.changes
                                .pipe((0, P.O)(this._headers))
                                .subscribe((t) => {
                                    this._ownHeaders.reset(
                                        t.filter(
                                            (o) => o.panel.accordion === this
                                        )
                                    ),
                                        this._ownHeaders.notifyOnChanges();
                                }),
                                (this._keyManager = new U.Em(this._ownHeaders)
                                    .withWrap()
                                    .withHomeAndEnd());
                        }
                        _handleHeaderKeydown(t) {
                            this._keyManager.onKeydown(t);
                        }
                        _handleHeaderFocus(t) {
                            this._keyManager.updateActiveItem(t);
                        }
                        ngOnDestroy() {
                            super.ngOnDestroy(), this._ownHeaders.destroy();
                        }
                    }
                    return (
                        (n.ɵfac = (function () {
                            let i;
                            return function (o) {
                                return (i || (i = e.n5z(n)))(o || n);
                            };
                        })()),
                        (n.ɵdir = e.lG2({
                            type: n,
                            selectors: [["mat-accordion"]],
                            contentQueries: function (t, o, r) {
                                if ((1 & t && e.Suo(r, R, 5), 2 & t)) {
                                    let s;
                                    e.iGM((s = e.CRH())) && (o._headers = s);
                                }
                            },
                            hostAttrs: [1, "mat-accordion"],
                            hostVars: 2,
                            hostBindings: function (t, o) {
                                2 & t && e.ekj("mat-accordion-multi", o.multi);
                            },
                            inputs: {
                                multi: "multi",
                                hideToggle: "hideToggle",
                                displayMode: "displayMode",
                                togglePosition: "togglePosition",
                            },
                            exportAs: ["matAccordion"],
                            features: [
                                e._Bn([{ provide: M, useExisting: n }]),
                                e.qOj,
                            ],
                        })),
                        n
                    );
                })(),
                ue = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [h.ez, S.BQ, j, w.eL] })),
                        n
                    );
                })();
            var C = a(9549),
                x = a(7392),
                F = a(4144),
                me = a(7775),
                ge = a(4466),
                b = a(2722),
                k = a(4707),
                y = a(8505),
                he = a(529);
            let p = (() => {
                class n {
                    constructor(t) {
                        (this._httpClient = t),
                            (this._faqs = new k.t(1)),
                            (this._guides = new k.t(1)),
                            (this._guide = new k.t(1));
                    }
                    get faqs$() {
                        return this._faqs.asObservable();
                    }
                    get guides$() {
                        return this._guides.asObservable();
                    }
                    get guide$() {
                        return this._guide.asObservable();
                    }
                    getAllFaqs() {
                        return this._httpClient
                            .get("api/apps/help-center/faqs")
                            .pipe(
                                (0, y.b)((t) => {
                                    this._faqs.next(t);
                                })
                            );
                    }
                    getFaqsByCategory(t) {
                        return this._httpClient
                            .get("api/apps/help-center/faqs", {
                                params: { slug: t },
                            })
                            .pipe(
                                (0, y.b)((o) => {
                                    this._faqs.next(o);
                                })
                            );
                    }
                    getAllGuides(t = "4") {
                        return this._httpClient
                            .get("api/apps/help-center/guides", {
                                params: { limit: t },
                            })
                            .pipe(
                                (0, y.b)((o) => {
                                    this._guides.next(o);
                                })
                            );
                    }
                    getGuidesByCategory(t) {
                        return this._httpClient
                            .get("api/apps/help-center/guides", {
                                params: { slug: t },
                            })
                            .pipe(
                                (0, y.b)((o) => {
                                    this._guides.next(o);
                                })
                            );
                    }
                    getGuide(t, o) {
                        return this._httpClient
                            .get("api/apps/help-center/guide", {
                                params: { categorySlug: t, guideSlug: o },
                            })
                            .pipe(
                                (0, y.b)((r) => {
                                    this._guide.next(r);
                                })
                            );
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(he.eN));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            const fe = function () {
                    return ["faqs"];
                },
                xe = function () {
                    return ["guides"];
                },
                _e = function () {
                    return ["support"];
                };
            let Ce = (() => {
                class n {
                    constructor(t) {
                        (this._helpCenterService = t),
                            (this._unsubscribeAll = new u.x());
                    }
                    ngOnInit() {
                        this._helpCenterService.faqs$
                            .pipe((0, b.R)(this._unsubscribeAll))
                            .subscribe((t) => {
                                this.faqCategory = t[0];
                            });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    trackByFn(t, o) {
                        return o.id || t;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(p));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["help-center"]],
                        decls: 70,
                        vars: 11,
                        consts: [
                            [1, "flex", "flex-col", "flex-auto", "min-w-0"],
                            [
                                "src",
                                "/assets/images/logo/support.svg",
                                1,
                                "object-cover",
                                "absolute",
                                "xl:w-max",
                                "xl:h-max",
                                "lg:w-200",
                                "lg:h-200",
                                "md:w-200",
                                "md:h-200",
                                "rounded-2xl",
                                "grid",
                                "place-items-center",
                                "self-center",
                                "xxl:top-[30px]",
                                "xl:top-[30px]",
                                "lg:top-[60px]",
                                "md:top-[80px]",
                                "sm:top-[40px]",
                                "top-[140px]",
                                "dark:hidden",
                                "block",
                            ],
                            [
                                "src",
                                "/assets/images/logo/supportd.svg",
                                1,
                                "object-cover",
                                "absolute",
                                "xl:w-max",
                                "xl:h-max",
                                "lg:w-200",
                                "lg:h-200",
                                "md:w-200",
                                "md:h-200",
                                "rounded-2xl",
                                "grid",
                                "place-items-center",
                                "self-center",
                                "xxl:top-[30px]",
                                "xl:top-[30px]",
                                "lg:top-[60px]",
                                "md:top-[80px]",
                                "sm:top-[40px]",
                                "top-[140px]",
                                "dark:block",
                                "hidden",
                            ],
                            [
                                1,
                                "bg-white",
                                "dark:bg-neutral-900",
                                "rounded-2xl",
                                "xxl:w-280",
                                "xl:w-280",
                                "lg:w-160",
                                "max-h-full",
                                "xl:h-160",
                                "lg:h-full",
                                "grid",
                                "place-items-center",
                                "self-center",
                                "z-10",
                                "mt-140",
                                "shadow-xl",
                            ],
                            [
                                1,
                                "relative",
                                "pt-8",
                                "pb-28",
                                "px-4",
                                "sm:pt-20",
                                "sm:pb-48",
                                "sm:px-16",
                                "overflow-hidden",
                            ],
                            [
                                1,
                                "z-10",
                                "relative",
                                "flex",
                                "flex-col",
                                "items-center",
                            ],
                            [1, "text-xl", "text-blue-500", "font-semibold"],
                            [
                                1,
                                "mt-1",
                                "text-4xl",
                                "sm:text-7xl",
                                "font-bold",
                                "tracking-tight",
                                "leading-tight",
                                "text-center",
                            ],
                            [
                                1,
                                "mt-3",
                                "sm:text-lg",
                                "text-center",
                                "tracking-tight",
                                "text-secondary",
                            ],
                            [
                                1,
                                "amos-mat-no-subscript",
                                "amos-mat-rounded",
                                "amos-mat-bold",
                                "w-full",
                                "max-w-80",
                                "sm:max-w-120",
                                "mt-10",
                                "sm:mt-10",
                            ],
                            ["matInput", "", 3, "placeholder"],
                            ["matPrefix", "", 3, "svgIcon"],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "items-center",
                                "pb-6",
                                "px-6",
                                "sm:pb-10",
                                "sm:px-10",
                            ],
                            [
                                1,
                                "grid",
                                "grid-cols-1",
                                "md:grid-cols-3",
                                "gap-y-8",
                                "md:gap-y-0",
                                "md:gap-x-6",
                                "w-full",
                                "max-w-sm",
                                "md:max-w-4xl",
                                "-mt-16",
                                "sm:-mt-24",
                            ],
                            [
                                1,
                                "relative",
                                "flex",
                                "flex-col",
                                "hover:shadow-lg",
                                "overflow-hidden",
                                "transition-shadow",
                                "ease-in-out",
                                "duration-150",
                            ],
                            [
                                "width",
                                "60",
                                "height",
                                "60",
                                "viewBox",
                                "0 0 60 60",
                                "fill",
                                "none",
                                "xmlns",
                                "http://www.w3.org/2000/svg",
                                1,
                                "grid",
                                "place-items-center",
                                "self-center",
                            ],
                            [
                                "cx",
                                "30",
                                "cy",
                                "30",
                                "r",
                                "30",
                                "fill",
                                "#6A86EB",
                            ],
                            [
                                "d",
                                "M33.998 34.001H41.9983V36.6679H33.998V34.001Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M33.998 39.333H39.3313V41.9999H33.998V39.333Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M33.998 28.667H36.665V31.3339H33.998V28.667Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M33.998 23.333H41.9983V25.9999H33.998V23.333Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M33.998 18H39.3313V20.6669H33.998V18Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M26.9985 39.6682C26.9985 40.9567 25.9538 42.0014 24.6652 42.0014C23.3767 42.0014 22.332 40.9567 22.332 39.6682C22.332 38.3796 23.3767 37.335 24.6652 37.335C25.9538 37.335 26.9985 38.3796 26.9985 39.6682Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M20.6669 24.6674C20.6669 22.4578 22.4586 20.6673 24.667 20.6673C26.8764 20.6662 28.6672 22.4564 28.6672 24.6663C28.6672 25.7718 28.2191 26.7732 27.4953 27.4956L25.2868 29.7052C23.9848 31.006 23.3336 32.7145 23.3336 34.419V35.3331L26.0002 35.3329V34.4188C26.0002 33.395 26.3912 32.3718 27.1721 31.5905L29.3818 29.3809C30.5863 28.1736 31.335 26.507 31.335 24.6659C31.335 20.9833 28.3488 17.9989 24.6668 18C20.9872 18.0003 18 20.9847 18 24.6684L20.6669 24.6674Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "flex-auto",
                                "items-center",
                                "p-8",
                                "text-center",
                            ],
                            [1, "text-2xl", "font-semibold"],
                            [1, "md:max-w-40", "mt-1", "text-secondary"],
                            [
                                1,
                                "flex",
                                "items-center",
                                "justify-center",
                                "py-4",
                                "px-8",
                                "text-blue-500",
                                "dark:text-blue-500",
                                "bg-gray-50",
                                "dark:bg-transparent",
                            ],
                            [1, "flex", "items-center", 3, "routerLink"],
                            [1, "absolute", "inset-0"],
                            [1, "font-medium"],
                            [
                                1,
                                "ml-2",
                                "icon-size-5",
                                "text-current",
                                3,
                                "svgIcon",
                            ],
                            [
                                "d",
                                "M41.953 39.6751L34.2685 18.525C34.1187 18.1499 33.7063 17.9249 33.294 18.0751L30.7448 19.0126V18.7499C30.7448 18.3374 30.4075 18 29.9952 18H18.7496C18.3373 18 18 18.3374 18 18.7499V41.2501C18 41.6626 18.3373 42 18.7496 42H29.9952C30.4075 42 30.7448 41.6626 30.7448 41.2501V24.225L37.0049 41.4376C37.1547 41.8127 37.567 42.0376 37.9794 41.8875L41.5031 40.6125C41.878 40.5001 42.1029 40.0499 41.9531 39.675L41.953 39.6751ZM21.7485 40.5001H19.4992V39.0002H21.7485V40.5001ZM21.7485 38.25H19.4992V35.2499H21.7485V38.25ZM21.7485 34.4999H19.4992V22.4999H21.7485V34.4999ZM21.7485 21.7499H19.4992V20.9999H21.7485V21.7499ZM21.7485 20.2497H19.4992V19.4998H21.7485V20.2497ZM25.497 40.4998H23.2477V39H25.497V40.4998ZM25.497 38.2497H23.2477V35.2496H25.497V38.2497ZM25.497 34.4997H23.2477V22.4996H25.497V34.4997ZM25.497 21.7496H23.2477V20.9997H25.497V21.7496ZM25.497 20.2495H23.2477V19.4995H25.497V20.2495ZM29.2455 40.4996H26.9962V38.9997H29.2455V40.4996ZM29.2455 38.2494H26.9962V35.2493H29.2455V38.2494ZM29.2455 34.4994H26.9962V22.4993H29.2455V34.4994ZM29.2455 21.7493H26.9962V20.9994H29.2455V21.7493ZM29.2455 20.2492H26.9962V19.4993H29.2455V20.2492ZM30.9697 20.5118L33.0688 19.7242L33.3313 20.4368L31.2322 21.2244L30.9697 20.5118ZM31.4945 21.9369L33.5936 21.1493L33.8561 21.8618L31.757 22.6495L31.4945 21.9369ZM32.0192 23.3243L34.1183 22.5367L38.2418 33.8618L36.1427 34.6494L32.0192 23.3243ZM36.3676 35.3244L38.4667 34.5368L39.4789 37.3493L37.3798 38.1369L36.3676 35.3244ZM38.1668 40.2369L37.642 38.8118L39.7411 38.0241L40.2659 39.4492L38.1668 40.2369Z",
                                "fill",
                                "#FDFDFD",
                            ],
                            [
                                "d",
                                "M30.8937 43.9201C31.4297 44.0694 32.0059 44.0078 32.494 43.7489C32.982 43.4903 33.3412 43.0558 33.4916 42.5427L34.037 40.6748H37.0043C37.7698 40.6748 38.5039 40.3847 39.0453 39.868C39.5864 39.3514 39.8906 38.6506 39.8906 37.92V35.1238L40.6555 34.8813V34.8815C41.1814 34.7149 41.6091 34.3438 41.8328 33.86C42.0567 33.3761 42.0556 32.8246 41.8303 32.3415L40.2082 28.8649C39.9984 28.4177 39.8902 27.9332 39.8906 27.4433C39.8886 25.2634 39.1735 23.1384 37.8452 21.3649C36.517 19.5914 34.6418 18.258 32.4812 17.5507C32.3735 18.2559 32.2773 18.9758 32.1925 19.7104H32.1927C33.8028 20.3328 35.1824 21.3989 36.155 22.7729C37.1277 24.1467 37.6493 25.766 37.6536 27.424C37.6524 28.2109 37.8255 28.9891 38.1617 29.7079L39.6798 32.9558L38.7532 33.2532C38.4355 33.3532 38.1591 33.5461 37.9632 33.805C37.7673 34.0636 37.662 34.3747 37.6622 34.6941V37.9364C37.6622 38.2833 37.3677 38.5646 37.0042 38.5646H32.3658L31.3815 41.8704L21.4436 39.1624L23.0889 33.6527L22.6474 33.2148V33.2146C21.4511 32.0299 20.6499 30.5328 20.3455 28.9132C20.0413 27.2937 20.2473 25.6244 20.9374 24.1164C21.6279 22.6087 22.7712 21.3303 24.2233 20.4432C24.2925 19.5837 24.3791 18.7389 24.483 17.9088V17.9086C22.4058 18.7922 20.6689 20.272 19.5142 22.142C18.3596 24.0119 17.8445 26.1789 18.0408 28.3413C18.2371 30.5038 19.1351 32.5539 20.6095 34.2062L19.2732 38.6801C19.1176 39.1917 19.1826 39.7412 19.4536 40.2067C19.7246 40.6723 20.1792 41.0153 20.7164 41.1594L30.8937 43.9201ZM32.6458 33.6283C33.0511 33.3954 33.5427 33.343 33.9919 33.4846C34.4411 33.6264 34.8029 33.9483 34.9829 34.3658C35.1627 34.7834 35.1428 35.2552 34.9279 35.6574C34.7133 36.0598 34.3254 36.3524 33.8655 36.4591C33.4058 36.5657 32.9204 36.4754 32.5361 36.212C32.1519 35.9485 31.9075 35.5382 31.8666 35.0884C30.5475 34.3195 29.4759 33.2186 28.7695 31.9065C27.6579 32.1021 26.5139 31.7983 25.6683 31.0827C24.8225 30.3671 24.369 29.3196 24.4393 28.2429C24.5094 27.1662 25.0953 26.1802 26.0274 25.5703C26.03 22.7853 26.2229 20.0036 26.6046 17.2423C27.119 17.1345 27.6409 17.0626 28.1662 17.0275C28.4241 17.009 28.6828 17 28.9425 17C29.466 16.9998 29.9887 17.0348 30.5069 17.1045C30.0886 19.849 29.8735 22.6182 29.8635 25.3912C30.9473 25.9589 31.6586 27.0094 31.7559 28.1859C31.8529 29.3621 31.3228 30.506 30.3455 31.2287C30.875 32.2096 31.6691 33.0379 32.6458 33.6283L32.6458 33.6283Z",
                                "fill",
                                "#FDFDFD",
                            ],
                        ],
                        template: function (t, o) {
                            1 & t &&
                                (e.TgZ(0, "div", 0),
                                e._UZ(1, "img", 1)(2, "img", 2),
                                e.TgZ(3, "div", 3)(4, "div", 4)(5, "div", 5)(
                                    6,
                                    "h2",
                                    6
                                ),
                                e._uU(7, "HELP CENTER"),
                                e.qZA(),
                                e.TgZ(8, "div", 7),
                                e._uU(9, " How can we help you today? "),
                                e.qZA(),
                                e.TgZ(10, "div", 8),
                                e._uU(
                                    11,
                                    " We\u2019re here to help and answer any questions you might have. "
                                ),
                                e._UZ(12, "br"),
                                e._uU(
                                    13,
                                    " We look forward to hearing from you "
                                ),
                                e.qZA(),
                                e.TgZ(14, "mat-form-field", 9),
                                e._UZ(15, "input", 10)(16, "mat-icon", 11),
                                e.qZA()()(),
                                e.TgZ(17, "div", 12)(18, "div", 13)(
                                    19,
                                    "div",
                                    14
                                ),
                                e.O4$(),
                                e.TgZ(20, "svg", 15),
                                e._UZ(21, "circle", 16)(22, "path", 17)(
                                    23,
                                    "path",
                                    18
                                )(24, "path", 19)(25, "path", 20)(
                                    26,
                                    "path",
                                    21
                                )(27, "path", 22)(28, "path", 23),
                                e.qZA(),
                                e.kcU(),
                                e.TgZ(29, "div", 24)(30, "div", 25),
                                e._uU(31, "FAQs"),
                                e.qZA(),
                                e.TgZ(32, "div", 26),
                                e._uU(
                                    33,
                                    " Frequently asked questions and answers "
                                ),
                                e.qZA()(),
                                e.TgZ(34, "div", 27)(35, "a", 28),
                                e._UZ(36, "span", 29),
                                e.TgZ(37, "span", 30),
                                e._uU(38, "Go to FAQs"),
                                e.qZA(),
                                e._UZ(39, "mat-icon", 31),
                                e.qZA()()(),
                                e.TgZ(40, "div", 14),
                                e.O4$(),
                                e.TgZ(41, "svg", 15),
                                e._UZ(42, "circle", 16)(43, "path", 32),
                                e.qZA(),
                                e.kcU(),
                                e.TgZ(44, "div", 24)(45, "div", 25),
                                e._uU(46, "Guides"),
                                e.qZA(),
                                e.TgZ(47, "div", 26),
                                e._uU(
                                    48,
                                    " Articles and resources to guide you "
                                ),
                                e.qZA()(),
                                e.TgZ(49, "div", 27)(50, "a", 28),
                                e._UZ(51, "span", 29),
                                e.TgZ(52, "span", 30),
                                e._uU(53, "Check guides"),
                                e.qZA(),
                                e._UZ(54, "mat-icon", 31),
                                e.qZA()()(),
                                e.TgZ(55, "div", 14),
                                e.O4$(),
                                e.TgZ(56, "svg", 15),
                                e._UZ(57, "circle", 16)(58, "path", 33),
                                e.qZA(),
                                e.kcU(),
                                e.TgZ(59, "div", 24)(60, "div", 25),
                                e._uU(61, "Support"),
                                e.qZA(),
                                e.TgZ(62, "div", 26),
                                e._uU(
                                    63,
                                    " Contact us for more detailed support "
                                ),
                                e.qZA()(),
                                e.TgZ(64, "div", 27)(65, "a", 28),
                                e._UZ(66, "span", 29),
                                e.TgZ(67, "span", 30),
                                e._uU(68, "Contact us"),
                                e.qZA(),
                                e._UZ(69, "mat-icon", 31),
                                e.qZA()()()()()()()),
                                2 & t &&
                                    (e.xp6(15),
                                    e.Q6J(
                                        "placeholder",
                                        "Enter a question, topic or keyword"
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:search"
                                    ),
                                    e.xp6(19),
                                    e.Q6J("routerLink", e.DdM(8, fe)),
                                    e.xp6(4),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_solid:arrow-narrow-right"
                                    ),
                                    e.xp6(11),
                                    e.Q6J("routerLink", e.DdM(9, xe)),
                                    e.xp6(4),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_solid:arrow-narrow-right"
                                    ),
                                    e.xp6(11),
                                    e.Q6J("routerLink", e.DdM(10, _e)),
                                    e.xp6(4),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_solid:arrow-narrow-right"
                                    ));
                        },
                        dependencies: [c.yS, C.KE, C.qo, x.Hw, F.Nt],
                        encapsulation: 2,
                    })),
                    n
                );
            })();
            function ve(n, i) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "mat-expansion-panel")(
                            2,
                            "mat-expansion-panel-header",
                            11
                        )(3, "mat-panel-title", 12),
                        e._uU(4),
                        e.qZA()(),
                        e._uU(5),
                        e.qZA(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = i.$implicit;
                    e.xp6(2),
                        e.Q6J("collapsedHeight", "56px"),
                        e.xp6(2),
                        e.Oqu(t.question),
                        e.xp6(1),
                        e.hij(" ", t.answer, " ");
                }
            }
            function be(n, i) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "div", 9),
                        e._uU(2),
                        e.qZA(),
                        e.TgZ(3, "mat-accordion", 10),
                        e.YNc(4, ve, 6, 3, "ng-container", 8),
                        e.qZA(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = i.$implicit,
                        o = e.oxw();
                    e.xp6(2),
                        e.hij(" ", t.title, " "),
                        e.xp6(2),
                        e.Q6J("ngForOf", t.faqs)("ngForTrackBy", o.trackByFn);
                }
            }
            const ye = function () {
                return ["../"];
            };
            let Ae = (() => {
                class n {
                    constructor(t) {
                        (this._helpCenterService = t),
                            (this._unsubscribeAll = new u.x());
                    }
                    ngOnInit() {
                        this._helpCenterService.faqs$
                            .pipe((0, b.R)(this._unsubscribeAll))
                            .subscribe((t) => {
                                this.faqCategories = t;
                            });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    trackByFn(t, o) {
                        return o.id || t;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(p));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["help-center-faqs"]],
                        decls: 11,
                        vars: 6,
                        consts: [
                            [
                                1,
                                "flex",
                                "flex-col",
                                "flex-auto",
                                "min-w-0",
                                "bg-neutral-100",
                                "dark:bg-zinc-800",
                            ],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "items-center",
                                "p-6",
                                "sm:p-10",
                                "mt-20",
                            ],
                            [1, "flex", "flex-col", "w-full", "max-w-4xl"],
                            [1, "-ml-4", "sm:mt-8"],
                            ["mat-button", "", 3, "routerLink", "color"],
                            [3, "svgIcon"],
                            [1, "ml-2"],
                            [
                                1,
                                "mt-2",
                                "text-4xl",
                                "sm:text-7xl",
                                "font-extrabold",
                                "tracking-tight",
                                "leading-tight",
                            ],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [
                                1,
                                "mt-12",
                                "sm:mt-16",
                                "text-3xl",
                                "font-bold",
                                "leading-tight",
                                "tracking-tight",
                            ],
                            [1, "max-w-4xl", "mt-8"],
                            [3, "collapsedHeight"],
                            [1, "font-medium", "leading-tight"],
                        ],
                        template: function (t, o) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                                    3,
                                    "div",
                                    3
                                )(4, "a", 4),
                                e._UZ(5, "mat-icon", 5),
                                e.TgZ(6, "span", 6),
                                e._uU(7, "Back to Help Center"),
                                e.qZA()()(),
                                e.TgZ(8, "div", 7),
                                e._uU(9, " Frequently Asked Questions "),
                                e.qZA(),
                                e.YNc(10, be, 5, 3, "ng-container", 8),
                                e.qZA()()()),
                                2 & t &&
                                    (e.xp6(4),
                                    e.Q6J("routerLink", e.DdM(5, ye))(
                                        "color",
                                        "primary"
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:arrow-narrow-left"
                                    ),
                                    e.xp6(5),
                                    e.Q6J("ngForOf", o.faqCategories)(
                                        "ngForTrackBy",
                                        o.trackByFn
                                    ));
                        },
                        dependencies: [c.yS, g.zs, ce, G, R, pe, x.Hw, h.sg],
                        encapsulation: 2,
                    })),
                    n
                );
            })();
            function Ze(n, i) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "a", 13),
                        e._uU(2),
                        e.qZA(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = i.$implicit;
                    e.xp6(2), e.hij(" ", t.title, " ");
                }
            }
            function He(n, i) {
                1 & n &&
                    (e.TgZ(0, "a", 14)(1, "span", 15),
                    e._uU(2, "View All"),
                    e.qZA(),
                    e._UZ(3, "mat-icon", 16),
                    e.qZA()),
                    2 & n &&
                        (e.xp6(3),
                        e.Q6J("svgIcon", "heroicons_solid:arrow-narrow-right"));
            }
            function we(n, i) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "div", 10)(2, "a", 11),
                        e._uU(3),
                        e.qZA(),
                        e.YNc(4, Ze, 3, 1, "ng-container", 9),
                        e.YNc(5, He, 4, 1, "a", 12),
                        e.qZA(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = i.$implicit,
                        o = e.oxw();
                    e.xp6(3),
                        e.hij(" ", t.title, " "),
                        e.xp6(1),
                        e.Q6J("ngForOf", t.guides)("ngForTrackBy", o.trackByFn),
                        e.xp6(1),
                        e.Q6J("ngIf", t.totalGuides > t.visibleGuides);
                }
            }
            const Te = function () {
                return ["../"];
            };
            let Me = (() => {
                class n {
                    constructor(t) {
                        (this._helpCenterService = t),
                            (this._unsubscribeAll = new u.x());
                    }
                    ngOnInit() {
                        this._helpCenterService.guides$
                            .pipe((0, b.R)(this._unsubscribeAll))
                            .subscribe((t) => {
                                this.guideCategories = t;
                            });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    trackByFn(t, o) {
                        return o.id || t;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(p));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["help-center-guides"]],
                        decls: 12,
                        vars: 6,
                        consts: [
                            [1, "flex", "flex-col", "flex-auto", "min-w-0"],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "items-center",
                                "p-6",
                                "sm:p-10",
                                "mt-20",
                            ],
                            [1, "flex", "flex-col", "w-full", "max-w-4xl"],
                            [1, "-ml-4", "sm:mt-8"],
                            ["mat-button", "", 3, "routerLink", "color"],
                            [3, "svgIcon"],
                            [1, "ml-2"],
                            [
                                1,
                                "mt-2",
                                "text-4xl",
                                "sm:text-7xl",
                                "font-extrabold",
                                "tracking-tight",
                                "leading-tight",
                            ],
                            [
                                1,
                                "grid",
                                "grid-cols-1",
                                "sm:grid-cols-2",
                                "grid-flow-row",
                                "gap-y-12",
                                "sm:gap-x-4",
                                "mt-8",
                                "sm:mt-12",
                            ],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [1, "flex", "flex-col", "items-start"],
                            [
                                1,
                                "flex",
                                "items-center",
                                "mb-1",
                                "text-2xl",
                                "font-semibold",
                            ],
                            [
                                "class",
                                "flex items-center mt-5 pl-4 pr-3 py-0.5 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700",
                                4,
                                "ngIf",
                            ],
                            [
                                1,
                                "mt-3",
                                "font-medium",
                                "hover:underline",
                                "text-primary-500",
                            ],
                            [
                                1,
                                "flex",
                                "items-center",
                                "mt-5",
                                "pl-4",
                                "pr-3",
                                "py-0.5",
                                "rounded-full",
                                "cursor-pointer",
                                "bg-gray-200",
                                "hover:bg-gray-300",
                                "dark:bg-gray-800",
                                "dark:hover:bg-gray-700",
                            ],
                            [1, "text-sm", "font-medium", "text-secondary"],
                            [1, "ml-2", "icon-size-5", 3, "svgIcon"],
                        ],
                        template: function (t, o) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                                    3,
                                    "div",
                                    3
                                )(4, "a", 4),
                                e._UZ(5, "mat-icon", 5),
                                e.TgZ(6, "span", 6),
                                e._uU(7, "Back to Help Center"),
                                e.qZA()()(),
                                e.TgZ(8, "div", 7),
                                e._uU(9, " Guides & Resources "),
                                e.qZA(),
                                e.TgZ(10, "div", 8),
                                e.YNc(11, we, 6, 4, "ng-container", 9),
                                e.qZA()()()()),
                                2 & t &&
                                    (e.xp6(4),
                                    e.Q6J("routerLink", e.DdM(5, Te))(
                                        "color",
                                        "primary"
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:arrow-narrow-left"
                                    ),
                                    e.xp6(6),
                                    e.Q6J("ngForOf", o.guideCategories)(
                                        "ngForTrackBy",
                                        o.trackByFn
                                    ));
                        },
                        dependencies: [c.yS, g.zs, x.Hw, h.sg, h.O5],
                        encapsulation: 2,
                    })),
                    n
                );
            })();
            const Fe = function (n) {
                return [n];
            };
            function ke(n, i) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "a", 10),
                        e._uU(2),
                        e.qZA(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = i.$implicit;
                    e.xp6(1),
                        e.Q6J("routerLink", e.VKq(2, Fe, t.slug)),
                        e.xp6(1),
                        e.hij(" ", t.title, " ");
                }
            }
            const qe = function () {
                return ["../"];
            };
            let Ee = (() => {
                class n {
                    constructor(t, o, r) {
                        (this._activatedRoute = t),
                            (this._helpCenterService = o),
                            (this._router = r),
                            (this._unsubscribeAll = new u.x());
                    }
                    ngOnInit() {
                        this._helpCenterService.guides$
                            .pipe((0, b.R)(this._unsubscribeAll))
                            .subscribe((t) => {
                                this.guideCategory = t[0];
                            });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    trackByFn(t, o) {
                        return o.id || t;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(c.gz), e.Y36(p), e.Y36(c.F0));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["help-center-guides-category"]],
                        decls: 12,
                        vars: 7,
                        consts: [
                            [1, "flex", "flex-col", "flex-auto", "min-w-0"],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "items-center",
                                "p-6",
                                "sm:p-10",
                            ],
                            [1, "flex", "flex-col", "w-full", "max-w-4xl"],
                            [1, "-ml-4", "sm:mt-8"],
                            ["mat-button", "", 3, "routerLink", "color"],
                            [3, "svgIcon"],
                            [1, "ml-2"],
                            [
                                1,
                                "mt-2",
                                "text-4xl",
                                "sm:text-7xl",
                                "font-extrabold",
                                "tracking-tight",
                                "leading-tight",
                            ],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "items-start",
                                "mt-8",
                                "sm:mt-12",
                                "space-y-2",
                            ],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [
                                1,
                                "font-medium",
                                "hover:underline",
                                "text-primary-500",
                                3,
                                "routerLink",
                            ],
                        ],
                        template: function (t, o) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                                    3,
                                    "div",
                                    3
                                )(4, "a", 4),
                                e._UZ(5, "mat-icon", 5),
                                e.TgZ(6, "span", 6),
                                e._uU(7, "Back to Guides & Resources"),
                                e.qZA()()(),
                                e.TgZ(8, "div", 7),
                                e._uU(9),
                                e.qZA(),
                                e.TgZ(10, "div", 8),
                                e.YNc(11, ke, 3, 4, "ng-container", 9),
                                e.qZA()()()()),
                                2 & t &&
                                    (e.xp6(4),
                                    e.Q6J("routerLink", e.DdM(6, qe))(
                                        "color",
                                        "primary"
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:arrow-narrow-left"
                                    ),
                                    e.xp6(4),
                                    e.hij(" ", o.guideCategory.title, " "),
                                    e.xp6(2),
                                    e.Q6J("ngForOf", o.guideCategory.guides)(
                                        "ngForTrackBy",
                                        o.trackByFn
                                    ));
                        },
                        dependencies: [c.yS, g.zs, x.Hw, h.sg],
                        encapsulation: 2,
                    })),
                    n
                );
            })();
            const Ie = function () {
                return ["../"];
            };
            let De = (() => {
                class n {
                    constructor(t) {
                        (this._helpCenterService = t),
                            (this._unsubscribeAll = new u.x());
                    }
                    ngOnInit() {
                        this._helpCenterService.guide$
                            .pipe((0, b.R)(this._unsubscribeAll))
                            .subscribe((t) => {
                                this.guideCategory = t;
                            });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    trackByFn(t, o) {
                        return o.id || t;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(p));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["help-center-guides-guide"]],
                        decls: 31,
                        vars: 12,
                        consts: [
                            [1, "flex", "flex-col", "flex-auto", "min-w-0"],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "items-center",
                                "p-6",
                                "sm:p-10",
                            ],
                            [1, "flex", "flex-col", "w-full", "max-w-4xl"],
                            [1, "-ml-4", "sm:mt-8"],
                            ["mat-button", "", 3, "routerLink", "color"],
                            [3, "svgIcon"],
                            [1, "ml-2"],
                            [
                                1,
                                "mt-2",
                                "text-4xl",
                                "sm:text-7xl",
                                "font-extrabold",
                                "tracking-tight",
                                "leading-tight",
                            ],
                            [
                                1,
                                "mt-1",
                                "sm:text-2xl",
                                "tracking-tight",
                                "text-secondary",
                            ],
                            [
                                1,
                                "mt-8",
                                "sm:mt-12",
                                "max-w-none",
                                "prose",
                                "prose-sm",
                                3,
                                "innerHTML",
                            ],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "sm:flex-row",
                                "sm:items-center",
                                "sm:justify-between",
                                "mt-10",
                                "pt-8",
                                "border-t",
                            ],
                            [1, "text-sm", "font-medium", "text-secondary"],
                            [1, "flex", "items-center", "mt-2", "sm:mt-0"],
                            [1, "font-medium", "text-secondary"],
                            [1, "ml-4"],
                            ["mat-icon-button", ""],
                            [
                                1,
                                "mt-8",
                                "flex",
                                "items-center",
                                "justify-between",
                                "p-6",
                                "sm:px-10",
                                "rounded-2xl",
                                "shadow",
                                "hover:shadow-lg",
                                "bg-card",
                                "transition-shadow",
                                "ease-in-out",
                                "duration-150",
                                3,
                                "routerLink",
                            ],
                            [1, "text-secondary"],
                            [1, "text-lg", "font-semibold"],
                            [1, "ml-3", 3, "svgIcon"],
                        ],
                        template: function (t, o) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                                    3,
                                    "div",
                                    3
                                )(4, "a", 4),
                                e._UZ(5, "mat-icon", 5),
                                e.TgZ(6, "span", 6),
                                e._uU(7),
                                e.qZA()()(),
                                e.TgZ(8, "div", 7),
                                e._uU(9),
                                e.qZA(),
                                e.TgZ(10, "div", 8),
                                e._uU(11),
                                e.qZA(),
                                e._UZ(12, "div", 9),
                                e.TgZ(13, "div", 10)(14, "div", 11),
                                e._uU(15, "Last updated 2 months ago"),
                                e.qZA(),
                                e.TgZ(16, "div", 12)(17, "div", 13),
                                e._uU(18, "Was this page helpful?"),
                                e.qZA(),
                                e.TgZ(19, "div", 14)(20, "button", 15),
                                e._UZ(21, "mat-icon", 5),
                                e.qZA(),
                                e.TgZ(22, "button", 15),
                                e._UZ(23, "mat-icon", 5),
                                e.qZA()()()(),
                                e.TgZ(24, "a", 16)(25, "div")(26, "div", 17),
                                e._uU(27, "Next"),
                                e.qZA(),
                                e.TgZ(28, "div", 18),
                                e._uU(29, "Removing a media from a project"),
                                e.qZA()(),
                                e._UZ(30, "mat-icon", 19),
                                e.qZA()()()()),
                                2 & t &&
                                    (e.xp6(4),
                                    e.Q6J("routerLink", e.DdM(11, Ie))(
                                        "color",
                                        "primary"
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:arrow-narrow-left"
                                    ),
                                    e.xp6(2),
                                    e.hij(
                                        "Back to ",
                                        o.guideCategory.title,
                                        ""
                                    ),
                                    e.xp6(2),
                                    e.Oqu(o.guideCategory.guides[0].title),
                                    e.xp6(2),
                                    e.Oqu(o.guideCategory.guides[0].subtitle),
                                    e.xp6(1),
                                    e.Q6J(
                                        "innerHTML",
                                        o.guideCategory.guides[0].content,
                                        e.oJD
                                    ),
                                    e.xp6(9),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:thumb-up"
                                    ),
                                    e.xp6(2),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:thumb-down"
                                    ),
                                    e.xp6(1),
                                    e.Q6J("routerLink", "."),
                                    e.xp6(6),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_outline:arrow-right"
                                    ));
                        },
                        dependencies: [c.yS, g.lW, g.zs, x.Hw],
                        encapsulation: 2,
                    })),
                    n
                );
            })();
            var d = a(4006),
                Se = a(8288),
                Ue = a(2494);
            const Pe = ["supportNgForm"];
            function Le(n, i) {
                if (
                    (1 & n && (e.TgZ(0, "amos-alert", 24), e._uU(1), e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.Q6J("type", t.alert.type)("showIcon", !1),
                        e.xp6(1),
                        e.hij(" ", t.alert.message, " ");
                }
            }
            function Oe(n, i) {
                1 & n &&
                    (e.TgZ(0, "mat-error"), e._uU(1, " Required "), e.qZA());
            }
            function Qe(n, i) {
                1 & n &&
                    (e.TgZ(0, "mat-error"), e._uU(1, " Required "), e.qZA());
            }
            function Be(n, i) {
                1 & n &&
                    (e.TgZ(0, "mat-error"),
                    e._uU(1, " Enter a valid email address "),
                    e.qZA());
            }
            function Ge(n, i) {
                1 & n &&
                    (e.TgZ(0, "mat-error"), e._uU(1, " Required "), e.qZA());
            }
            function Re(n, i) {
                1 & n &&
                    (e.TgZ(0, "mat-error"), e._uU(1, " Required "), e.qZA());
            }
            const Je = function () {
                    return ["../"];
                },
                Ne = [
                    {
                        path: "",
                        component: Ce,
                        resolve: {
                            faqs: (() => {
                                class n {
                                    constructor(t) {
                                        this._helpCenterService = t;
                                    }
                                    resolve(t, o) {
                                        return this._helpCenterService.getFaqsByCategory(
                                            "most-asked"
                                        );
                                    }
                                }
                                return (
                                    (n.ɵfac = function (t) {
                                        return new (t || n)(e.LFG(p));
                                    }),
                                    (n.ɵprov = e.Yz7({
                                        token: n,
                                        factory: n.ɵfac,
                                        providedIn: "root",
                                    })),
                                    n
                                );
                            })(),
                        },
                    },
                    {
                        path: "faqs",
                        component: Ae,
                        resolve: {
                            faqs: (() => {
                                class n {
                                    constructor(t) {
                                        this._helpCenterService = t;
                                    }
                                    resolve(t, o) {
                                        return this._helpCenterService.getAllFaqs();
                                    }
                                }
                                return (
                                    (n.ɵfac = function (t) {
                                        return new (t || n)(e.LFG(p));
                                    }),
                                    (n.ɵprov = e.Yz7({
                                        token: n,
                                        factory: n.ɵfac,
                                        providedIn: "root",
                                    })),
                                    n
                                );
                            })(),
                        },
                    },
                    {
                        path: "guides",
                        children: [
                            {
                                path: "",
                                component: Me,
                                resolve: {
                                    guides: (() => {
                                        class n {
                                            constructor(t) {
                                                this._helpCenterService = t;
                                            }
                                            resolve(t, o) {
                                                return this._helpCenterService.getAllGuides();
                                            }
                                        }
                                        return (
                                            (n.ɵfac = function (t) {
                                                return new (t || n)(e.LFG(p));
                                            }),
                                            (n.ɵprov = e.Yz7({
                                                token: n,
                                                factory: n.ɵfac,
                                                providedIn: "root",
                                            })),
                                            n
                                        );
                                    })(),
                                },
                            },
                            {
                                path: ":categorySlug",
                                children: [
                                    {
                                        path: "",
                                        component: Ee,
                                        resolve: {
                                            guides: (() => {
                                                class n {
                                                    constructor(t) {
                                                        this._helpCenterService =
                                                            t;
                                                    }
                                                    resolve(t, o) {
                                                        return this._helpCenterService.getGuidesByCategory(
                                                            t.paramMap.get(
                                                                "categorySlug"
                                                            )
                                                        );
                                                    }
                                                }
                                                return (
                                                    (n.ɵfac = function (t) {
                                                        return new (t || n)(
                                                            e.LFG(p)
                                                        );
                                                    }),
                                                    (n.ɵprov = e.Yz7({
                                                        token: n,
                                                        factory: n.ɵfac,
                                                        providedIn: "root",
                                                    })),
                                                    n
                                                );
                                            })(),
                                        },
                                    },
                                    {
                                        path: ":guideSlug",
                                        component: De,
                                        resolve: {
                                            guide: (() => {
                                                class n {
                                                    constructor(t) {
                                                        this._helpCenterService =
                                                            t;
                                                    }
                                                    resolve(t, o) {
                                                        return this._helpCenterService.getGuide(
                                                            t.parent.paramMap.get(
                                                                "categorySlug"
                                                            ),
                                                            t.paramMap.get(
                                                                "guideSlug"
                                                            )
                                                        );
                                                    }
                                                }
                                                return (
                                                    (n.ɵfac = function (t) {
                                                        return new (t || n)(
                                                            e.LFG(p)
                                                        );
                                                    }),
                                                    (n.ɵprov = e.Yz7({
                                                        token: n,
                                                        factory: n.ɵfac,
                                                        providedIn: "root",
                                                    })),
                                                    n
                                                );
                                            })(),
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "support",
                        component: (() => {
                            class n {
                                constructor(t, o) {
                                    (this._formBuilder = t),
                                        (this._helpCenterService = o);
                                }
                                ngOnInit() {
                                    this.supportForm = this._formBuilder.group({
                                        name: ["", d.kI.required],
                                        email: [
                                            "",
                                            [d.kI.required, d.kI.email],
                                        ],
                                        subject: ["", d.kI.required],
                                        message: ["", d.kI.required],
                                    });
                                }
                                clearForm() {
                                    this.supportNgForm.resetForm();
                                }
                                sendForm() {
                                    console.log("Your message has been sent!"),
                                        (this.alert = {
                                            type: "success",
                                            message:
                                                "Your request has been delivered! A member of our support staff will respond as soon as possible.",
                                        }),
                                        setTimeout(() => {
                                            this.alert = null;
                                        }, 7e3),
                                        this.clearForm();
                                }
                            }
                            return (
                                (n.ɵfac = function (t) {
                                    return new (t || n)(e.Y36(d.QS), e.Y36(p));
                                }),
                                (n.ɵcmp = e.Xpm({
                                    type: n,
                                    selectors: [["help-center-support"]],
                                    viewQuery: function (t, o) {
                                        if ((1 & t && e.Gf(Pe, 5), 2 & t)) {
                                            let r;
                                            e.iGM((r = e.CRH())) &&
                                                (o.supportNgForm = r.first);
                                        }
                                    },
                                    decls: 45,
                                    vars: 24,
                                    consts: [
                                        [
                                            1,
                                            "flex",
                                            "flex-col",
                                            "flex-auto",
                                            "min-w-0",
                                        ],
                                        [
                                            1,
                                            "flex",
                                            "flex-col",
                                            "flex-auto",
                                            "items-center",
                                            "p-6",
                                            "sm:p-10",
                                            "mt-20",
                                        ],
                                        [
                                            1,
                                            "flex",
                                            "flex-col",
                                            "w-full",
                                            "max-w-4xl",
                                        ],
                                        [1, "-ml-4", "sm:mt-8"],
                                        [
                                            "mat-button",
                                            "",
                                            3,
                                            "routerLink",
                                            "color",
                                        ],
                                        [3, "svgIcon"],
                                        [1, "ml-2"],
                                        [
                                            1,
                                            "mt-2",
                                            "text-4xl",
                                            "sm:text-7xl",
                                            "font-extrabold",
                                            "tracking-tight",
                                            "leading-tight",
                                        ],
                                        [
                                            1,
                                            "mt-8",
                                            "sm:mt-12",
                                            "p-6",
                                            "pb-7",
                                            "sm:p-10",
                                            "sm:pb-7",
                                            "shadow",
                                            "rounded-2xl",
                                            "bg-card",
                                        ],
                                        [
                                            "class",
                                            "mb-8",
                                            3,
                                            "type",
                                            "showIcon",
                                            4,
                                            "ngIf",
                                        ],
                                        [1, "space-y-3", 3, "formGroup"],
                                        ["supportNgForm", "ngForm"],
                                        [1, "mb-6"],
                                        [
                                            1,
                                            "text-2xl",
                                            "font-bold",
                                            "tracking-tight",
                                        ],
                                        [1, "text-secondary"],
                                        [1, "w-full"],
                                        [
                                            "matInput",
                                            "",
                                            3,
                                            "formControlName",
                                            "required",
                                        ],
                                        [4, "ngIf"],
                                        [
                                            "type",
                                            "email",
                                            "matInput",
                                            "",
                                            3,
                                            "formControlName",
                                            "required",
                                        ],
                                        [1, "amos-mat-textarea", "w-full"],
                                        [
                                            "matInput",
                                            "",
                                            "matTextareaAutosize",
                                            "",
                                            3,
                                            "formControlName",
                                            "required",
                                            "rows",
                                        ],
                                        [
                                            1,
                                            "flex",
                                            "items-center",
                                            "justify-end",
                                        ],
                                        [
                                            "mat-button",
                                            "",
                                            3,
                                            "color",
                                            "disabled",
                                            "click",
                                        ],
                                        [
                                            "mat-flat-button",
                                            "",
                                            1,
                                            "ml-2",
                                            3,
                                            "color",
                                            "disabled",
                                            "click",
                                        ],
                                        [1, "mb-8", 3, "type", "showIcon"],
                                    ],
                                    template: function (t, o) {
                                        1 & t &&
                                            (e.TgZ(0, "div", 0)(1, "div", 1)(
                                                2,
                                                "div",
                                                2
                                            )(3, "div", 3)(4, "a", 4),
                                            e._UZ(5, "mat-icon", 5),
                                            e.TgZ(6, "span", 6),
                                            e._uU(7, "Back to Help Center"),
                                            e.qZA()()(),
                                            e.TgZ(8, "div", 7),
                                            e._uU(9, " Contact support "),
                                            e.qZA(),
                                            e.TgZ(10, "div", 8),
                                            e.YNc(
                                                11,
                                                Le,
                                                2,
                                                3,
                                                "amos-alert",
                                                9
                                            ),
                                            e.TgZ(
                                                12,
                                                "form",
                                                10,
                                                11
                                            )(14, "div", 12)(15, "div", 13),
                                            e._uU(16, " Submit your request "),
                                            e.qZA(),
                                            e.TgZ(17, "div", 14),
                                            e._uU(
                                                18,
                                                " Your request will be processed and our support staff will get back to you in 24 hours. "
                                            ),
                                            e.qZA()(),
                                            e.TgZ(19, "mat-form-field", 15),
                                            e._UZ(20, "input", 16),
                                            e.TgZ(21, "mat-label"),
                                            e._uU(22, "Name"),
                                            e.qZA(),
                                            e.YNc(
                                                23,
                                                Oe,
                                                2,
                                                0,
                                                "mat-error",
                                                17
                                            ),
                                            e.qZA(),
                                            e.TgZ(24, "mat-form-field", 15),
                                            e._UZ(25, "input", 18),
                                            e.TgZ(26, "mat-label"),
                                            e._uU(27, "Email"),
                                            e.qZA(),
                                            e.YNc(
                                                28,
                                                Qe,
                                                2,
                                                0,
                                                "mat-error",
                                                17
                                            ),
                                            e.YNc(
                                                29,
                                                Be,
                                                2,
                                                0,
                                                "mat-error",
                                                17
                                            ),
                                            e.qZA(),
                                            e.TgZ(30, "mat-form-field", 15),
                                            e._UZ(31, "input", 16),
                                            e.TgZ(32, "mat-label"),
                                            e._uU(33, "Subject"),
                                            e.qZA(),
                                            e.YNc(
                                                34,
                                                Ge,
                                                2,
                                                0,
                                                "mat-error",
                                                17
                                            ),
                                            e.qZA(),
                                            e.TgZ(35, "mat-form-field", 19),
                                            e._UZ(36, "textarea", 20),
                                            e.TgZ(37, "mat-label"),
                                            e._uU(38, "Message"),
                                            e.qZA(),
                                            e.YNc(
                                                39,
                                                Re,
                                                2,
                                                0,
                                                "mat-error",
                                                17
                                            ),
                                            e.qZA(),
                                            e.TgZ(40, "div", 21)(
                                                41,
                                                "button",
                                                22
                                            ),
                                            e.NdJ("click", function () {
                                                return o.clearForm();
                                            }),
                                            e._uU(42, " Clear "),
                                            e.qZA(),
                                            e.TgZ(43, "button", 23),
                                            e.NdJ("click", function () {
                                                return o.sendForm();
                                            }),
                                            e._uU(44, " Submit "),
                                            e.qZA()()()()()()()),
                                            2 & t &&
                                                (e.xp6(4),
                                                e.Q6J(
                                                    "routerLink",
                                                    e.DdM(23, Je)
                                                )("color", "primary"),
                                                e.xp6(1),
                                                e.Q6J(
                                                    "svgIcon",
                                                    "heroicons_outline:arrow-narrow-left"
                                                ),
                                                e.xp6(6),
                                                e.Q6J("ngIf", o.alert),
                                                e.xp6(1),
                                                e.Q6J(
                                                    "formGroup",
                                                    o.supportForm
                                                ),
                                                e.xp6(8),
                                                e.Q6J(
                                                    "formControlName",
                                                    "name"
                                                )("required", !0),
                                                e.xp6(3),
                                                e.Q6J(
                                                    "ngIf",
                                                    o.supportForm
                                                        .get("name")
                                                        .hasError("required")
                                                ),
                                                e.xp6(2),
                                                e.Q6J(
                                                    "formControlName",
                                                    "email"
                                                )("required", !0),
                                                e.xp6(3),
                                                e.Q6J(
                                                    "ngIf",
                                                    o.supportForm
                                                        .get("email")
                                                        .hasError("required")
                                                ),
                                                e.xp6(1),
                                                e.Q6J(
                                                    "ngIf",
                                                    o.supportForm
                                                        .get("email")
                                                        .hasError("email")
                                                ),
                                                e.xp6(2),
                                                e.Q6J(
                                                    "formControlName",
                                                    "subject"
                                                )("required", !0),
                                                e.xp6(3),
                                                e.Q6J(
                                                    "ngIf",
                                                    o.supportForm
                                                        .get("subject")
                                                        .hasError("required")
                                                ),
                                                e.xp6(2),
                                                e.Q6J(
                                                    "formControlName",
                                                    "message"
                                                )("required", !0)("rows", 5),
                                                e.xp6(3),
                                                e.Q6J(
                                                    "ngIf",
                                                    o.supportForm
                                                        .get("message")
                                                        .hasError("required")
                                                ),
                                                e.xp6(2),
                                                e.Q6J("color", "accent")(
                                                    "disabled",
                                                    o.supportForm.pristine ||
                                                        o.supportForm.untouched
                                                ),
                                                e.xp6(2),
                                                e.Q6J("color", "primary")(
                                                    "disabled",
                                                    o.supportForm.pristine ||
                                                        o.supportForm.invalid
                                                ));
                                    },
                                    dependencies: [
                                        c.yS,
                                        g.lW,
                                        g.zs,
                                        C.TO,
                                        C.KE,
                                        C.hX,
                                        x.Hw,
                                        F.Nt,
                                        Ue.W,
                                        h.O5,
                                        d._Y,
                                        d.Fj,
                                        d.JJ,
                                        d.JL,
                                        d.Q7,
                                        d.sg,
                                        d.u,
                                    ],
                                    encapsulation: 2,
                                    data: { animation: Se.L },
                                })),
                                n
                            );
                        })(),
                    },
                ];
            let Ve = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({
                        imports: [
                            c.Bz.forChild(Ne),
                            g.ot,
                            ue,
                            C.lN,
                            x.Ps,
                            F.c,
                            me.fC,
                            ge.m,
                        ],
                    })),
                    n
                );
            })();
        },
    },
]);
