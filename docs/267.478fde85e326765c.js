"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [267],
    {
        3267: (J, A, s) => {
            s.d(A, { LW: () => g, SJ: () => Q, jA: () => O, kh: () => R });
            var l = s(5589),
                w = s(6895),
                e = s(4650),
                b = s(3238),
                v = s(2687),
                I = s(445),
                m = s(1281),
                D = s(9521),
                P = s(3353),
                p = s(7579),
                F = s(4968),
                W = s(6451),
                f = s(9300),
                x = s(4004),
                S = s(9718),
                c = s(2722),
                j = s(1884),
                E = s(5698),
                k = s(8675),
                L = s(8372),
                h = s(7340);
            const y = ["*"],
                z = ["content"];
            function U(a, r) {
                if (1 & a) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 2),
                        e.NdJ("click", function () {
                            e.CHM(t);
                            const i = e.oxw();
                            return e.KtG(i._onBackdropClicked());
                        }),
                        e.qZA();
                }
                if (2 & a) {
                    const t = e.oxw();
                    e.ekj("mat-drawer-shown", t._isShowingBackdrop());
                }
            }
            function V(a, r) {
                1 & a && (e.TgZ(0, "mat-drawer-content"), e.Hsn(1, 2), e.qZA());
            }
            const G = [[["mat-drawer"]], [["mat-drawer-content"]], "*"],
                H = ["mat-drawer", "mat-drawer-content", "*"],
                Y = {
                    transformDrawer: (0, h.X$)("transform", [
                        (0, h.SB)(
                            "open, open-instant",
                            (0, h.oB)({
                                transform: "none",
                                visibility: "visible",
                            })
                        ),
                        (0, h.SB)(
                            "void",
                            (0, h.oB)({
                                "box-shadow": "none",
                                visibility: "hidden",
                            })
                        ),
                        (0, h.eR)("void => open-instant", (0, h.jt)("0ms")),
                        (0, h.eR)(
                            "void <=> open, open-instant => void",
                            (0, h.jt)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)")
                        ),
                    ]),
                },
                K = new e.OlP("MAT_DRAWER_DEFAULT_AUTOSIZE", {
                    providedIn: "root",
                    factory: function Z() {
                        return !1;
                    },
                }),
                B = new e.OlP("MAT_DRAWER_CONTAINER");
            let g = (() => {
                    class a extends l.PQ {
                        constructor(t, n, i, d, _) {
                            super(i, d, _),
                                (this._changeDetectorRef = t),
                                (this._container = n);
                        }
                        ngAfterContentInit() {
                            this._container._contentMarginChanges.subscribe(
                                () => {
                                    this._changeDetectorRef.markForCheck();
                                }
                            );
                        }
                    }
                    return (
                        (a.ɵfac = function (t) {
                            return new (t || a)(
                                e.Y36(e.sBO),
                                e.Y36((0, e.Gpc)(() => R)),
                                e.Y36(e.SBq),
                                e.Y36(l.mF),
                                e.Y36(e.R0b)
                            );
                        }),
                        (a.ɵcmp = e.Xpm({
                            type: a,
                            selectors: [["mat-drawer-content"]],
                            hostAttrs: [1, "mat-drawer-content"],
                            hostVars: 4,
                            hostBindings: function (t, n) {
                                2 & t &&
                                    e.Udp(
                                        "margin-left",
                                        n._container._contentMargins.left,
                                        "px"
                                    )(
                                        "margin-right",
                                        n._container._contentMargins.right,
                                        "px"
                                    );
                            },
                            features: [
                                e._Bn([{ provide: l.PQ, useExisting: a }]),
                                e.qOj,
                            ],
                            ngContentSelectors: y,
                            decls: 1,
                            vars: 0,
                            template: function (t, n) {
                                1 & t && (e.F$t(), e.Hsn(0));
                            },
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        a
                    );
                })(),
                O = (() => {
                    class a {
                        constructor(t, n, i, d, _, M, C, N) {
                            (this._elementRef = t),
                                (this._focusTrapFactory = n),
                                (this._focusMonitor = i),
                                (this._platform = d),
                                (this._ngZone = _),
                                (this._interactivityChecker = M),
                                (this._doc = C),
                                (this._container = N),
                                (this._elementFocusedBeforeDrawerWasOpened =
                                    null),
                                (this._enableAnimations = !1),
                                (this._position = "start"),
                                (this._mode = "over"),
                                (this._disableClose = !1),
                                (this._opened = !1),
                                (this._animationStarted = new p.x()),
                                (this._animationEnd = new p.x()),
                                (this._animationState = "void"),
                                (this.openedChange = new e.vpe(!0)),
                                (this._openedStream = this.openedChange.pipe(
                                    (0, f.h)((o) => o),
                                    (0, x.U)(() => {})
                                )),
                                (this.openedStart = this._animationStarted.pipe(
                                    (0, f.h)(
                                        (o) =>
                                            o.fromState !== o.toState &&
                                            0 === o.toState.indexOf("open")
                                    ),
                                    (0, S.h)(void 0)
                                )),
                                (this._closedStream = this.openedChange.pipe(
                                    (0, f.h)((o) => !o),
                                    (0, x.U)(() => {})
                                )),
                                (this.closedStart = this._animationStarted.pipe(
                                    (0, f.h)(
                                        (o) =>
                                            o.fromState !== o.toState &&
                                            "void" === o.toState
                                    ),
                                    (0, S.h)(void 0)
                                )),
                                (this._destroyed = new p.x()),
                                (this.onPositionChanged = new e.vpe()),
                                (this._modeChanged = new p.x()),
                                this.openedChange.subscribe((o) => {
                                    o
                                        ? (this._doc &&
                                              (this._elementFocusedBeforeDrawerWasOpened =
                                                  this._doc.activeElement),
                                          this._takeFocus())
                                        : this._isFocusWithinDrawer() &&
                                          this._restoreFocus(
                                              this._openedVia || "program"
                                          );
                                }),
                                this._ngZone.runOutsideAngular(() => {
                                    (0, F.R)(
                                        this._elementRef.nativeElement,
                                        "keydown"
                                    )
                                        .pipe(
                                            (0, f.h)(
                                                (o) =>
                                                    o.keyCode === D.hY &&
                                                    !this.disableClose &&
                                                    !(0, D.Vb)(o)
                                            ),
                                            (0, c.R)(this._destroyed)
                                        )
                                        .subscribe((o) =>
                                            this._ngZone.run(() => {
                                                this.close(),
                                                    o.stopPropagation(),
                                                    o.preventDefault();
                                            })
                                        );
                                }),
                                this._animationEnd
                                    .pipe(
                                        (0, j.x)(
                                            (o, u) =>
                                                o.fromState === u.fromState &&
                                                o.toState === u.toState
                                        )
                                    )
                                    .subscribe((o) => {
                                        const { fromState: u, toState: T } = o;
                                        ((0 === T.indexOf("open") &&
                                            "void" === u) ||
                                            ("void" === T &&
                                                0 === u.indexOf("open"))) &&
                                            this.openedChange.emit(
                                                this._opened
                                            );
                                    });
                        }
                        get position() {
                            return this._position;
                        }
                        set position(t) {
                            (t = "end" === t ? "end" : "start") !==
                                this._position &&
                                (this._isAttached &&
                                    this._updatePositionInParent(t),
                                (this._position = t),
                                this.onPositionChanged.emit());
                        }
                        get mode() {
                            return this._mode;
                        }
                        set mode(t) {
                            (this._mode = t),
                                this._updateFocusTrapState(),
                                this._modeChanged.next();
                        }
                        get disableClose() {
                            return this._disableClose;
                        }
                        set disableClose(t) {
                            this._disableClose = (0, m.Ig)(t);
                        }
                        get autoFocus() {
                            return (
                                this._autoFocus ??
                                ("side" === this.mode
                                    ? "dialog"
                                    : "first-tabbable")
                            );
                        }
                        set autoFocus(t) {
                            ("true" === t || "false" === t || null == t) &&
                                (t = (0, m.Ig)(t)),
                                (this._autoFocus = t);
                        }
                        get opened() {
                            return this._opened;
                        }
                        set opened(t) {
                            this.toggle((0, m.Ig)(t));
                        }
                        _forceFocus(t, n) {
                            this._interactivityChecker.isFocusable(t) ||
                                ((t.tabIndex = -1),
                                this._ngZone.runOutsideAngular(() => {
                                    const i = () => {
                                        t.removeEventListener("blur", i),
                                            t.removeEventListener(
                                                "mousedown",
                                                i
                                            ),
                                            t.removeAttribute("tabindex");
                                    };
                                    t.addEventListener("blur", i),
                                        t.addEventListener("mousedown", i);
                                })),
                                t.focus(n);
                        }
                        _focusByCssSelector(t, n) {
                            let i =
                                this._elementRef.nativeElement.querySelector(t);
                            i && this._forceFocus(i, n);
                        }
                        _takeFocus() {
                            if (!this._focusTrap) return;
                            const t = this._elementRef.nativeElement;
                            switch (this.autoFocus) {
                                case !1:
                                case "dialog":
                                    return;
                                case !0:
                                case "first-tabbable":
                                    this._focusTrap
                                        .focusInitialElementWhenReady()
                                        .then((n) => {
                                            !n &&
                                                "function" ==
                                                    typeof this._elementRef
                                                        .nativeElement.focus &&
                                                t.focus();
                                        });
                                    break;
                                case "first-heading":
                                    this._focusByCssSelector(
                                        'h1, h2, h3, h4, h5, h6, [role="heading"]'
                                    );
                                    break;
                                default:
                                    this._focusByCssSelector(this.autoFocus);
                            }
                        }
                        _restoreFocus(t) {
                            "dialog" !== this.autoFocus &&
                                (this._elementFocusedBeforeDrawerWasOpened
                                    ? this._focusMonitor.focusVia(
                                          this
                                              ._elementFocusedBeforeDrawerWasOpened,
                                          t
                                      )
                                    : this._elementRef.nativeElement.blur(),
                                (this._elementFocusedBeforeDrawerWasOpened =
                                    null));
                        }
                        _isFocusWithinDrawer() {
                            const t = this._doc.activeElement;
                            return (
                                !!t &&
                                this._elementRef.nativeElement.contains(t)
                            );
                        }
                        ngAfterViewInit() {
                            (this._isAttached = !0),
                                (this._focusTrap =
                                    this._focusTrapFactory.create(
                                        this._elementRef.nativeElement
                                    )),
                                this._updateFocusTrapState(),
                                "end" === this._position &&
                                    this._updatePositionInParent("end");
                        }
                        ngAfterContentChecked() {
                            this._platform.isBrowser &&
                                (this._enableAnimations = !0);
                        }
                        ngOnDestroy() {
                            this._focusTrap && this._focusTrap.destroy(),
                                this._anchor?.remove(),
                                (this._anchor = null),
                                this._animationStarted.complete(),
                                this._animationEnd.complete(),
                                this._modeChanged.complete(),
                                this._destroyed.next(),
                                this._destroyed.complete();
                        }
                        open(t) {
                            return this.toggle(!0, t);
                        }
                        close() {
                            return this.toggle(!1);
                        }
                        _closeViaBackdropClick() {
                            return this._setOpen(!1, !0, "mouse");
                        }
                        toggle(t = !this.opened, n) {
                            t && n && (this._openedVia = n);
                            const i = this._setOpen(
                                t,
                                !t && this._isFocusWithinDrawer(),
                                this._openedVia || "program"
                            );
                            return t || (this._openedVia = null), i;
                        }
                        _setOpen(t, n, i) {
                            return (
                                (this._opened = t),
                                t
                                    ? (this._animationState = this
                                          ._enableAnimations
                                          ? "open"
                                          : "open-instant")
                                    : ((this._animationState = "void"),
                                      n && this._restoreFocus(i)),
                                this._updateFocusTrapState(),
                                new Promise((d) => {
                                    this.openedChange
                                        .pipe((0, E.q)(1))
                                        .subscribe((_) =>
                                            d(_ ? "open" : "close")
                                        );
                                })
                            );
                        }
                        _getWidth() {
                            return (
                                (this._elementRef.nativeElement &&
                                    this._elementRef.nativeElement
                                        .offsetWidth) ||
                                0
                            );
                        }
                        _updateFocusTrapState() {
                            this._focusTrap &&
                                (this._focusTrap.enabled =
                                    this.opened && "side" !== this.mode);
                        }
                        _updatePositionInParent(t) {
                            const n = this._elementRef.nativeElement,
                                i = n.parentNode;
                            "end" === t
                                ? (this._anchor ||
                                      ((this._anchor =
                                          this._doc.createComment(
                                              "mat-drawer-anchor"
                                          )),
                                      i.insertBefore(this._anchor, n)),
                                  i.appendChild(n))
                                : this._anchor &&
                                  this._anchor.parentNode.insertBefore(
                                      n,
                                      this._anchor
                                  );
                        }
                    }
                    return (
                        (a.ɵfac = function (t) {
                            return new (t || a)(
                                e.Y36(e.SBq),
                                e.Y36(v.qV),
                                e.Y36(v.tE),
                                e.Y36(P.t4),
                                e.Y36(e.R0b),
                                e.Y36(v.ic),
                                e.Y36(w.K0, 8),
                                e.Y36(B, 8)
                            );
                        }),
                        (a.ɵcmp = e.Xpm({
                            type: a,
                            selectors: [["mat-drawer"]],
                            viewQuery: function (t, n) {
                                if ((1 & t && e.Gf(z, 5), 2 & t)) {
                                    let i;
                                    e.iGM((i = e.CRH())) &&
                                        (n._content = i.first);
                                }
                            },
                            hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
                            hostVars: 12,
                            hostBindings: function (t, n) {
                                1 & t &&
                                    e.WFA("@transform.start", function (d) {
                                        return n._animationStarted.next(d);
                                    })("@transform.done", function (d) {
                                        return n._animationEnd.next(d);
                                    }),
                                    2 & t &&
                                        (e.uIk("align", null),
                                        e.d8E("@transform", n._animationState),
                                        e.ekj(
                                            "mat-drawer-end",
                                            "end" === n.position
                                        )("mat-drawer-over", "over" === n.mode)(
                                            "mat-drawer-push",
                                            "push" === n.mode
                                        )("mat-drawer-side", "side" === n.mode)(
                                            "mat-drawer-opened",
                                            n.opened
                                        ));
                            },
                            inputs: {
                                position: "position",
                                mode: "mode",
                                disableClose: "disableClose",
                                autoFocus: "autoFocus",
                                opened: "opened",
                            },
                            outputs: {
                                openedChange: "openedChange",
                                _openedStream: "opened",
                                openedStart: "openedStart",
                                _closedStream: "closed",
                                closedStart: "closedStart",
                                onPositionChanged: "positionChanged",
                            },
                            exportAs: ["matDrawer"],
                            ngContentSelectors: y,
                            decls: 3,
                            vars: 0,
                            consts: [
                                [
                                    "cdkScrollable",
                                    "",
                                    1,
                                    "mat-drawer-inner-container",
                                ],
                                ["content", ""],
                            ],
                            template: function (t, n) {
                                1 & t &&
                                    (e.F$t(),
                                    e.TgZ(0, "div", 0, 1),
                                    e.Hsn(2),
                                    e.qZA());
                            },
                            dependencies: [l.PQ],
                            encapsulation: 2,
                            data: { animation: [Y.transformDrawer] },
                            changeDetection: 0,
                        })),
                        a
                    );
                })(),
                R = (() => {
                    class a {
                        constructor(t, n, i, d, _, M = !1, C) {
                            (this._dir = t),
                                (this._element = n),
                                (this._ngZone = i),
                                (this._changeDetectorRef = d),
                                (this._animationMode = C),
                                (this._drawers = new e.n_E()),
                                (this.backdropClick = new e.vpe()),
                                (this._destroyed = new p.x()),
                                (this._doCheckSubject = new p.x()),
                                (this._contentMargins = {
                                    left: null,
                                    right: null,
                                }),
                                (this._contentMarginChanges = new p.x()),
                                t &&
                                    t.change
                                        .pipe((0, c.R)(this._destroyed))
                                        .subscribe(() => {
                                            this._validateDrawers(),
                                                this.updateContentMargins();
                                        }),
                                _.change()
                                    .pipe((0, c.R)(this._destroyed))
                                    .subscribe(() =>
                                        this.updateContentMargins()
                                    ),
                                (this._autosize = M);
                        }
                        get start() {
                            return this._start;
                        }
                        get end() {
                            return this._end;
                        }
                        get autosize() {
                            return this._autosize;
                        }
                        set autosize(t) {
                            this._autosize = (0, m.Ig)(t);
                        }
                        get hasBackdrop() {
                            return (
                                this._backdropOverride ??
                                (!this._start ||
                                    "side" !== this._start.mode ||
                                    !this._end ||
                                    "side" !== this._end.mode)
                            );
                        }
                        set hasBackdrop(t) {
                            this._backdropOverride =
                                null == t ? null : (0, m.Ig)(t);
                        }
                        get scrollable() {
                            return this._userContent || this._content;
                        }
                        ngAfterContentInit() {
                            this._allDrawers.changes
                                .pipe(
                                    (0, k.O)(this._allDrawers),
                                    (0, c.R)(this._destroyed)
                                )
                                .subscribe((t) => {
                                    this._drawers.reset(
                                        t.filter(
                                            (n) =>
                                                !n._container ||
                                                n._container === this
                                        )
                                    ),
                                        this._drawers.notifyOnChanges();
                                }),
                                this._drawers.changes
                                    .pipe((0, k.O)(null))
                                    .subscribe(() => {
                                        this._validateDrawers(),
                                            this._drawers.forEach((t) => {
                                                this._watchDrawerToggle(t),
                                                    this._watchDrawerPosition(
                                                        t
                                                    ),
                                                    this._watchDrawerMode(t);
                                            }),
                                            (!this._drawers.length ||
                                                this._isDrawerOpen(
                                                    this._start
                                                ) ||
                                                this._isDrawerOpen(
                                                    this._end
                                                )) &&
                                                this.updateContentMargins(),
                                            this._changeDetectorRef.markForCheck();
                                    }),
                                this._ngZone.runOutsideAngular(() => {
                                    this._doCheckSubject
                                        .pipe(
                                            (0, L.b)(10),
                                            (0, c.R)(this._destroyed)
                                        )
                                        .subscribe(() =>
                                            this.updateContentMargins()
                                        );
                                });
                        }
                        ngOnDestroy() {
                            this._contentMarginChanges.complete(),
                                this._doCheckSubject.complete(),
                                this._drawers.destroy(),
                                this._destroyed.next(),
                                this._destroyed.complete();
                        }
                        open() {
                            this._drawers.forEach((t) => t.open());
                        }
                        close() {
                            this._drawers.forEach((t) => t.close());
                        }
                        updateContentMargins() {
                            let t = 0,
                                n = 0;
                            if (this._left && this._left.opened)
                                if ("side" == this._left.mode)
                                    t += this._left._getWidth();
                                else if ("push" == this._left.mode) {
                                    const i = this._left._getWidth();
                                    (t += i), (n -= i);
                                }
                            if (this._right && this._right.opened)
                                if ("side" == this._right.mode)
                                    n += this._right._getWidth();
                                else if ("push" == this._right.mode) {
                                    const i = this._right._getWidth();
                                    (n += i), (t -= i);
                                }
                            (t = t || null),
                                (n = n || null),
                                (t !== this._contentMargins.left ||
                                    n !== this._contentMargins.right) &&
                                    ((this._contentMargins = {
                                        left: t,
                                        right: n,
                                    }),
                                    this._ngZone.run(() =>
                                        this._contentMarginChanges.next(
                                            this._contentMargins
                                        )
                                    ));
                        }
                        ngDoCheck() {
                            this._autosize &&
                                this._isPushed() &&
                                this._ngZone.runOutsideAngular(() =>
                                    this._doCheckSubject.next()
                                );
                        }
                        _watchDrawerToggle(t) {
                            t._animationStarted
                                .pipe(
                                    (0, f.h)((n) => n.fromState !== n.toState),
                                    (0, c.R)(this._drawers.changes)
                                )
                                .subscribe((n) => {
                                    "open-instant" !== n.toState &&
                                        "NoopAnimations" !==
                                            this._animationMode &&
                                        this._element.nativeElement.classList.add(
                                            "mat-drawer-transition"
                                        ),
                                        this.updateContentMargins(),
                                        this._changeDetectorRef.markForCheck();
                                }),
                                "side" !== t.mode &&
                                    t.openedChange
                                        .pipe((0, c.R)(this._drawers.changes))
                                        .subscribe(() =>
                                            this._setContainerClass(t.opened)
                                        );
                        }
                        _watchDrawerPosition(t) {
                            !t ||
                                t.onPositionChanged
                                    .pipe((0, c.R)(this._drawers.changes))
                                    .subscribe(() => {
                                        this._ngZone.onMicrotaskEmpty
                                            .pipe((0, E.q)(1))
                                            .subscribe(() => {
                                                this._validateDrawers();
                                            });
                                    });
                        }
                        _watchDrawerMode(t) {
                            t &&
                                t._modeChanged
                                    .pipe(
                                        (0, c.R)(
                                            (0, W.T)(
                                                this._drawers.changes,
                                                this._destroyed
                                            )
                                        )
                                    )
                                    .subscribe(() => {
                                        this.updateContentMargins(),
                                            this._changeDetectorRef.markForCheck();
                                    });
                        }
                        _setContainerClass(t) {
                            const n = this._element.nativeElement.classList,
                                i = "mat-drawer-container-has-open";
                            t ? n.add(i) : n.remove(i);
                        }
                        _validateDrawers() {
                            (this._start = this._end = null),
                                this._drawers.forEach((t) => {
                                    "end" == t.position
                                        ? (this._end = t)
                                        : (this._start = t);
                                }),
                                (this._right = this._left = null),
                                this._dir && "rtl" === this._dir.value
                                    ? ((this._left = this._end),
                                      (this._right = this._start))
                                    : ((this._left = this._start),
                                      (this._right = this._end));
                        }
                        _isPushed() {
                            return (
                                (this._isDrawerOpen(this._start) &&
                                    "over" != this._start.mode) ||
                                (this._isDrawerOpen(this._end) &&
                                    "over" != this._end.mode)
                            );
                        }
                        _onBackdropClicked() {
                            this.backdropClick.emit(),
                                this._closeModalDrawersViaBackdrop();
                        }
                        _closeModalDrawersViaBackdrop() {
                            [this._start, this._end]
                                .filter(
                                    (t) =>
                                        t &&
                                        !t.disableClose &&
                                        this._canHaveBackdrop(t)
                                )
                                .forEach((t) => t._closeViaBackdropClick());
                        }
                        _isShowingBackdrop() {
                            return (
                                (this._isDrawerOpen(this._start) &&
                                    this._canHaveBackdrop(this._start)) ||
                                (this._isDrawerOpen(this._end) &&
                                    this._canHaveBackdrop(this._end))
                            );
                        }
                        _canHaveBackdrop(t) {
                            return (
                                "side" !== t.mode || !!this._backdropOverride
                            );
                        }
                        _isDrawerOpen(t) {
                            return null != t && t.opened;
                        }
                    }
                    return (
                        (a.ɵfac = function (t) {
                            return new (t || a)(
                                e.Y36(I.Is, 8),
                                e.Y36(e.SBq),
                                e.Y36(e.R0b),
                                e.Y36(e.sBO),
                                e.Y36(l.rL),
                                e.Y36(K),
                                e.Y36(e.QbO, 8)
                            );
                        }),
                        (a.ɵcmp = e.Xpm({
                            type: a,
                            selectors: [["mat-drawer-container"]],
                            contentQueries: function (t, n, i) {
                                if (
                                    (1 & t && (e.Suo(i, g, 5), e.Suo(i, O, 5)),
                                    2 & t)
                                ) {
                                    let d;
                                    e.iGM((d = e.CRH())) &&
                                        (n._content = d.first),
                                        e.iGM((d = e.CRH())) &&
                                            (n._allDrawers = d);
                                }
                            },
                            viewQuery: function (t, n) {
                                if ((1 & t && e.Gf(g, 5), 2 & t)) {
                                    let i;
                                    e.iGM((i = e.CRH())) &&
                                        (n._userContent = i.first);
                                }
                            },
                            hostAttrs: [1, "mat-drawer-container"],
                            hostVars: 2,
                            hostBindings: function (t, n) {
                                2 & t &&
                                    e.ekj(
                                        "mat-drawer-container-explicit-backdrop",
                                        n._backdropOverride
                                    );
                            },
                            inputs: {
                                autosize: "autosize",
                                hasBackdrop: "hasBackdrop",
                            },
                            outputs: { backdropClick: "backdropClick" },
                            exportAs: ["matDrawerContainer"],
                            features: [e._Bn([{ provide: B, useExisting: a }])],
                            ngContentSelectors: H,
                            decls: 4,
                            vars: 2,
                            consts: [
                                [
                                    "class",
                                    "mat-drawer-backdrop",
                                    3,
                                    "mat-drawer-shown",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [4, "ngIf"],
                                [1, "mat-drawer-backdrop", 3, "click"],
                            ],
                            template: function (t, n) {
                                1 & t &&
                                    (e.F$t(G),
                                    e.YNc(0, U, 1, 2, "div", 0),
                                    e.Hsn(1),
                                    e.Hsn(2, 1),
                                    e.YNc(3, V, 2, 0, "mat-drawer-content", 1)),
                                    2 & t &&
                                        (e.Q6J("ngIf", n.hasBackdrop),
                                        e.xp6(3),
                                        e.Q6J("ngIf", !n._content));
                            },
                            dependencies: [w.O5, g],
                            styles: [
                                '.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',
                            ],
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        a
                    );
                })(),
                Q = (() => {
                    class a {}
                    return (
                        (a.ɵfac = function (t) {
                            return new (t || a)();
                        }),
                        (a.ɵmod = e.oAB({ type: a })),
                        (a.ɵinj = e.cJS({
                            imports: [w.ez, b.BQ, l.ZD, l.ZD, b.BQ],
                        })),
                        a
                    );
                })();
        },
    },
]);
