"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [427],
    {
        7427: (ct, Q, l) => {
            l.r(Q), l.d(Q, { SettingsModule: () => ot });
            var ee = l(2510),
                C = l(4859),
                m = l(9549),
                x = l(7392),
                w = l(4144),
                e = l(4650),
                p = l(3238),
                R = l(2687),
                v = l(1281),
                E = l(5017),
                c = l(4006);
            let me = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({ imports: [p.si, p.BQ, p.BQ] })),
                    n
                );
            })();
            var k = l(8184),
                f = l(6895),
                L = l(5589),
                he = l(445),
                _ = l(9521),
                M = l(7579),
                ge = l(9770),
                U = l(6451),
                H = l(8675),
                Y = l(3900),
                q = l(5698),
                V = l(9300),
                j = l(4004),
                _e = l(1884),
                y = l(2722),
                h = l(7340);
            const fe = ["trigger"],
                ve = ["panel"];
            function be(n, o) {
                if (
                    (1 & n && (e.TgZ(0, "span", 8), e._uU(1), e.qZA()), 2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(1), e.Oqu(t.placeholder);
                }
            }
            function ye(n, o) {
                if (
                    (1 & n && (e.TgZ(0, "span", 12), e._uU(1), e.qZA()), 2 & n)
                ) {
                    const t = e.oxw(2);
                    e.xp6(1), e.Oqu(t.triggerValue);
                }
            }
            function Ce(n, o) {
                1 & n && e.Hsn(0, 0, ["*ngSwitchCase", "true"]);
            }
            function xe(n, o) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "span", 9),
                        e.YNc(1, ye, 2, 1, "span", 10),
                        e.YNc(2, Ce, 1, 0, "ng-content", 11),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.Q6J("ngSwitch", !!t.customTrigger),
                        e.xp6(2),
                        e.Q6J("ngSwitchCase", !0);
                }
            }
            function Ze(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 13)(1, "div", 14, 15),
                        e.NdJ("@transformPanel.done", function (a) {
                            e.CHM(t);
                            const s = e.oxw();
                            return e.KtG(
                                s._panelDoneAnimatingStream.next(a.toState)
                            );
                        })("keydown", function (a) {
                            e.CHM(t);
                            const s = e.oxw();
                            return e.KtG(s._handleKeydown(a));
                        }),
                        e.Hsn(3, 1),
                        e.qZA()();
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.Q6J("@transformPanelWrap", void 0),
                        e.xp6(1),
                        e.Gre("mat-select-panel ", t._getPanelTheme(), ""),
                        e.Udp("transform-origin", t._transformOrigin)(
                            "font-size",
                            t._triggerFontSize,
                            "px"
                        ),
                        e.Q6J("ngClass", t.panelClass)(
                            "@transformPanel",
                            t.multiple ? "showing-multiple" : "showing"
                        ),
                        e.uIk("id", t.id + "-panel")(
                            "aria-multiselectable",
                            t.multiple
                        )("aria-label", t.ariaLabel || null)(
                            "aria-labelledby",
                            t._getPanelAriaLabelledby()
                        );
                }
            }
            const we = [[["mat-select-trigger"]], "*"],
                ke = ["mat-select-trigger", "*"],
                K = {
                    transformPanelWrap: (0, h.X$)("transformPanelWrap", [
                        (0, h.eR)(
                            "* => void",
                            (0, h.IO)("@transformPanel", [(0, h.pV)()], {
                                optional: !0,
                            })
                        ),
                    ]),
                    transformPanel: (0, h.X$)("transformPanel", [
                        (0, h.SB)(
                            "void",
                            (0, h.oB)({
                                transform: "scaleY(0.8)",
                                minWidth: "100%",
                                opacity: 0,
                            })
                        ),
                        (0, h.SB)(
                            "showing",
                            (0, h.oB)({
                                opacity: 1,
                                minWidth: "calc(100% + 32px)",
                                transform: "scaleY(1)",
                            })
                        ),
                        (0, h.SB)(
                            "showing-multiple",
                            (0, h.oB)({
                                opacity: 1,
                                minWidth: "calc(100% + 64px)",
                                transform: "scaleY(1)",
                            })
                        ),
                        (0, h.eR)(
                            "void => *",
                            (0, h.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")
                        ),
                        (0, h.eR)(
                            "* => void",
                            (0, h.jt)(
                                "100ms 25ms linear",
                                (0, h.oB)({ opacity: 0 })
                            )
                        ),
                    ]),
                };
            let z = 0;
            const S = 256,
                X = new e.OlP("mat-select-scroll-strategy"),
                Me = new e.OlP("MAT_SELECT_CONFIG"),
                Oe = {
                    provide: X,
                    deps: [k.aV],
                    useFactory: function Ae(n) {
                        return () => n.scrollStrategies.reposition();
                    },
                };
            class Ie {
                constructor(o, t) {
                    (this.source = o), (this.value = t);
                }
            }
            const Re = (0, p.Kr)(
                    (0, p.sb)(
                        (0, p.Id)(
                            (0, p.FD)(
                                class {
                                    constructor(n, o, t, i, a) {
                                        (this._elementRef = n),
                                            (this._defaultErrorStateMatcher =
                                                o),
                                            (this._parentForm = t),
                                            (this._parentFormGroup = i),
                                            (this.ngControl = a),
                                            (this.stateChanges = new M.x());
                                    }
                                }
                            )
                        )
                    )
                ),
                $ = new e.OlP("MatSelectTrigger");
            let Ue = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵdir = e.lG2({
                            type: n,
                            selectors: [["mat-select-trigger"]],
                            features: [e._Bn([{ provide: $, useExisting: n }])],
                        })),
                        n
                    );
                })(),
                qe = (() => {
                    class n extends Re {
                        constructor(
                            t,
                            i,
                            a,
                            s,
                            r,
                            u,
                            d,
                            g,
                            T,
                            A,
                            st,
                            rt,
                            lt,
                            J
                        ) {
                            super(r, s, d, g, A),
                                (this._viewportRuler = t),
                                (this._changeDetectorRef = i),
                                (this._ngZone = a),
                                (this._dir = u),
                                (this._parentFormField = T),
                                (this._liveAnnouncer = lt),
                                (this._defaultOptions = J),
                                (this._panelOpen = !1),
                                (this._compareWith = (b, F) => b === F),
                                (this._uid = "mat-select-" + z++),
                                (this._triggerAriaLabelledBy = null),
                                (this._destroy = new M.x()),
                                (this._onChange = () => {}),
                                (this._onTouched = () => {}),
                                (this._valueId = "mat-select-value-" + z++),
                                (this._panelDoneAnimatingStream = new M.x()),
                                (this._overlayPanelClass =
                                    this._defaultOptions?.overlayPanelClass ||
                                    ""),
                                (this._focused = !1),
                                (this.controlType = "mat-select"),
                                (this._multiple = !1),
                                (this._disableOptionCentering =
                                    this._defaultOptions
                                        ?.disableOptionCentering ?? !1),
                                (this.ariaLabel = ""),
                                (this.optionSelectionChanges = (0, ge.P)(() => {
                                    const b = this.options;
                                    return b
                                        ? b.changes.pipe(
                                              (0, H.O)(b),
                                              (0, Y.w)(() =>
                                                  (0, U.T)(
                                                      ...b.map(
                                                          (F) =>
                                                              F.onSelectionChange
                                                      )
                                                  )
                                              )
                                          )
                                        : this._ngZone.onStable.pipe(
                                              (0, q.q)(1),
                                              (0, Y.w)(
                                                  () =>
                                                      this
                                                          .optionSelectionChanges
                                              )
                                          );
                                })),
                                (this.openedChange = new e.vpe()),
                                (this._openedStream = this.openedChange.pipe(
                                    (0, V.h)((b) => b),
                                    (0, j.U)(() => {})
                                )),
                                (this._closedStream = this.openedChange.pipe(
                                    (0, V.h)((b) => !b),
                                    (0, j.U)(() => {})
                                )),
                                (this.selectionChange = new e.vpe()),
                                (this.valueChange = new e.vpe()),
                                this.ngControl &&
                                    (this.ngControl.valueAccessor = this),
                                null != J?.typeaheadDebounceInterval &&
                                    (this._typeaheadDebounceInterval =
                                        J.typeaheadDebounceInterval),
                                (this._scrollStrategyFactory = rt),
                                (this._scrollStrategy =
                                    this._scrollStrategyFactory()),
                                (this.tabIndex = parseInt(st) || 0),
                                (this.id = this.id);
                        }
                        get focused() {
                            return this._focused || this._panelOpen;
                        }
                        get placeholder() {
                            return this._placeholder;
                        }
                        set placeholder(t) {
                            (this._placeholder = t), this.stateChanges.next();
                        }
                        get required() {
                            return (
                                this._required ??
                                this.ngControl?.control?.hasValidator(
                                    c.kI.required
                                ) ??
                                !1
                            );
                        }
                        set required(t) {
                            (this._required = (0, v.Ig)(t)),
                                this.stateChanges.next();
                        }
                        get multiple() {
                            return this._multiple;
                        }
                        set multiple(t) {
                            this._multiple = (0, v.Ig)(t);
                        }
                        get disableOptionCentering() {
                            return this._disableOptionCentering;
                        }
                        set disableOptionCentering(t) {
                            this._disableOptionCentering = (0, v.Ig)(t);
                        }
                        get compareWith() {
                            return this._compareWith;
                        }
                        set compareWith(t) {
                            (this._compareWith = t),
                                this._selectionModel &&
                                    this._initializeSelection();
                        }
                        get value() {
                            return this._value;
                        }
                        set value(t) {
                            this._assignValue(t) && this._onChange(t);
                        }
                        get typeaheadDebounceInterval() {
                            return this._typeaheadDebounceInterval;
                        }
                        set typeaheadDebounceInterval(t) {
                            this._typeaheadDebounceInterval = (0, v.su)(t);
                        }
                        get id() {
                            return this._id;
                        }
                        set id(t) {
                            (this._id = t || this._uid),
                                this.stateChanges.next();
                        }
                        ngOnInit() {
                            (this._selectionModel = new E.Ov(this.multiple)),
                                this.stateChanges.next(),
                                this._panelDoneAnimatingStream
                                    .pipe((0, _e.x)(), (0, y.R)(this._destroy))
                                    .subscribe(() =>
                                        this._panelDoneAnimating(this.panelOpen)
                                    );
                        }
                        ngAfterContentInit() {
                            this._initKeyManager(),
                                this._selectionModel.changed
                                    .pipe((0, y.R)(this._destroy))
                                    .subscribe((t) => {
                                        t.added.forEach((i) => i.select()),
                                            t.removed.forEach((i) =>
                                                i.deselect()
                                            );
                                    }),
                                this.options.changes
                                    .pipe(
                                        (0, H.O)(null),
                                        (0, y.R)(this._destroy)
                                    )
                                    .subscribe(() => {
                                        this._resetOptions(),
                                            this._initializeSelection();
                                    });
                        }
                        ngDoCheck() {
                            const t = this._getTriggerAriaLabelledby(),
                                i = this.ngControl;
                            if (t !== this._triggerAriaLabelledBy) {
                                const a = this._elementRef.nativeElement;
                                (this._triggerAriaLabelledBy = t),
                                    t
                                        ? a.setAttribute("aria-labelledby", t)
                                        : a.removeAttribute("aria-labelledby");
                            }
                            i &&
                                (this._previousControl !== i.control &&
                                    (void 0 !== this._previousControl &&
                                        null !== i.disabled &&
                                        i.disabled !== this.disabled &&
                                        (this.disabled = i.disabled),
                                    (this._previousControl = i.control)),
                                this.updateErrorState());
                        }
                        ngOnChanges(t) {
                            (t.disabled || t.userAriaDescribedBy) &&
                                this.stateChanges.next(),
                                t.typeaheadDebounceInterval &&
                                    this._keyManager &&
                                    this._keyManager.withTypeAhead(
                                        this._typeaheadDebounceInterval
                                    );
                        }
                        ngOnDestroy() {
                            this._destroy.next(),
                                this._destroy.complete(),
                                this.stateChanges.complete();
                        }
                        toggle() {
                            this.panelOpen ? this.close() : this.open();
                        }
                        open() {
                            this._canOpen() &&
                                ((this._panelOpen = !0),
                                this._keyManager.withHorizontalOrientation(
                                    null
                                ),
                                this._highlightCorrectOption(),
                                this._changeDetectorRef.markForCheck());
                        }
                        close() {
                            this._panelOpen &&
                                ((this._panelOpen = !1),
                                this._keyManager.withHorizontalOrientation(
                                    this._isRtl() ? "rtl" : "ltr"
                                ),
                                this._changeDetectorRef.markForCheck(),
                                this._onTouched());
                        }
                        writeValue(t) {
                            this._assignValue(t);
                        }
                        registerOnChange(t) {
                            this._onChange = t;
                        }
                        registerOnTouched(t) {
                            this._onTouched = t;
                        }
                        setDisabledState(t) {
                            (this.disabled = t),
                                this._changeDetectorRef.markForCheck(),
                                this.stateChanges.next();
                        }
                        get panelOpen() {
                            return this._panelOpen;
                        }
                        get selected() {
                            return this.multiple
                                ? this._selectionModel?.selected || []
                                : this._selectionModel?.selected[0];
                        }
                        get triggerValue() {
                            if (this.empty) return "";
                            if (this._multiple) {
                                const t = this._selectionModel.selected.map(
                                    (i) => i.viewValue
                                );
                                return (
                                    this._isRtl() && t.reverse(), t.join(", ")
                                );
                            }
                            return this._selectionModel.selected[0].viewValue;
                        }
                        _isRtl() {
                            return !!this._dir && "rtl" === this._dir.value;
                        }
                        _handleKeydown(t) {
                            this.disabled ||
                                (this.panelOpen
                                    ? this._handleOpenKeydown(t)
                                    : this._handleClosedKeydown(t));
                        }
                        _handleClosedKeydown(t) {
                            const i = t.keyCode,
                                a =
                                    i === _.JH ||
                                    i === _.LH ||
                                    i === _.oh ||
                                    i === _.SV,
                                s = i === _.K5 || i === _.L_,
                                r = this._keyManager;
                            if (
                                (!r.isTyping() && s && !(0, _.Vb)(t)) ||
                                ((this.multiple || t.altKey) && a)
                            )
                                t.preventDefault(), this.open();
                            else if (!this.multiple) {
                                const u = this.selected;
                                r.onKeydown(t);
                                const d = this.selected;
                                d &&
                                    u !== d &&
                                    this._liveAnnouncer.announce(
                                        d.viewValue,
                                        1e4
                                    );
                            }
                        }
                        _handleOpenKeydown(t) {
                            const i = this._keyManager,
                                a = t.keyCode,
                                s = a === _.JH || a === _.LH,
                                r = i.isTyping();
                            if (s && t.altKey) t.preventDefault(), this.close();
                            else if (
                                r ||
                                (a !== _.K5 && a !== _.L_) ||
                                !i.activeItem ||
                                (0, _.Vb)(t)
                            )
                                if (
                                    !r &&
                                    this._multiple &&
                                    a === _.A &&
                                    t.ctrlKey
                                ) {
                                    t.preventDefault();
                                    const u = this.options.some(
                                        (d) => !d.disabled && !d.selected
                                    );
                                    this.options.forEach((d) => {
                                        d.disabled ||
                                            (u ? d.select() : d.deselect());
                                    });
                                } else {
                                    const u = i.activeItemIndex;
                                    i.onKeydown(t),
                                        this._multiple &&
                                            s &&
                                            t.shiftKey &&
                                            i.activeItem &&
                                            i.activeItemIndex !== u &&
                                            i.activeItem._selectViaInteraction();
                                }
                            else
                                t.preventDefault(),
                                    i.activeItem._selectViaInteraction();
                        }
                        _onFocus() {
                            this.disabled ||
                                ((this._focused = !0),
                                this.stateChanges.next());
                        }
                        _onBlur() {
                            (this._focused = !1),
                                !this.disabled &&
                                    !this.panelOpen &&
                                    (this._onTouched(),
                                    this._changeDetectorRef.markForCheck(),
                                    this.stateChanges.next());
                        }
                        _onAttached() {
                            this._overlayDir.positionChange
                                .pipe((0, q.q)(1))
                                .subscribe(() => {
                                    this._changeDetectorRef.detectChanges(),
                                        this._positioningSettled();
                                });
                        }
                        _getPanelTheme() {
                            return this._parentFormField
                                ? `mat-${this._parentFormField.color}`
                                : "";
                        }
                        get empty() {
                            return (
                                !this._selectionModel ||
                                this._selectionModel.isEmpty()
                            );
                        }
                        _initializeSelection() {
                            Promise.resolve().then(() => {
                                this.ngControl &&
                                    (this._value = this.ngControl.value),
                                    this._setSelectionByValue(this._value),
                                    this.stateChanges.next();
                            });
                        }
                        _setSelectionByValue(t) {
                            if (
                                (this._selectionModel.selected.forEach((i) =>
                                    i.setInactiveStyles()
                                ),
                                this._selectionModel.clear(),
                                this.multiple && t)
                            )
                                Array.isArray(t),
                                    t.forEach((i) =>
                                        this._selectOptionByValue(i)
                                    ),
                                    this._sortValues();
                            else {
                                const i = this._selectOptionByValue(t);
                                i
                                    ? this._keyManager.updateActiveItem(i)
                                    : this.panelOpen ||
                                      this._keyManager.updateActiveItem(-1);
                            }
                            this._changeDetectorRef.markForCheck();
                        }
                        _selectOptionByValue(t) {
                            const i = this.options.find((a) => {
                                if (this._selectionModel.isSelected(a))
                                    return !1;
                                try {
                                    return (
                                        null != a.value &&
                                        this._compareWith(a.value, t)
                                    );
                                } catch {
                                    return !1;
                                }
                            });
                            return i && this._selectionModel.select(i), i;
                        }
                        _assignValue(t) {
                            return (
                                !!(
                                    t !== this._value ||
                                    (this._multiple && Array.isArray(t))
                                ) &&
                                (this.options && this._setSelectionByValue(t),
                                (this._value = t),
                                !0)
                            );
                        }
                        _initKeyManager() {
                            (this._keyManager = new R.s1(this.options)
                                .withTypeAhead(this._typeaheadDebounceInterval)
                                .withVerticalOrientation()
                                .withHorizontalOrientation(
                                    this._isRtl() ? "rtl" : "ltr"
                                )
                                .withHomeAndEnd()
                                .withAllowedModifierKeys(["shiftKey"])),
                                this._keyManager.tabOut
                                    .pipe((0, y.R)(this._destroy))
                                    .subscribe(() => {
                                        this.panelOpen &&
                                            (!this.multiple &&
                                                this._keyManager.activeItem &&
                                                this._keyManager.activeItem._selectViaInteraction(),
                                            this.focus(),
                                            this.close());
                                    }),
                                this._keyManager.change
                                    .pipe((0, y.R)(this._destroy))
                                    .subscribe(() => {
                                        this._panelOpen && this.panel
                                            ? this._scrollOptionIntoView(
                                                  this._keyManager
                                                      .activeItemIndex || 0
                                              )
                                            : !this._panelOpen &&
                                              !this.multiple &&
                                              this._keyManager.activeItem &&
                                              this._keyManager.activeItem._selectViaInteraction();
                                    });
                        }
                        _resetOptions() {
                            const t = (0, U.T)(
                                this.options.changes,
                                this._destroy
                            );
                            this.optionSelectionChanges
                                .pipe((0, y.R)(t))
                                .subscribe((i) => {
                                    this._onSelect(i.source, i.isUserInput),
                                        i.isUserInput &&
                                            !this.multiple &&
                                            this._panelOpen &&
                                            (this.close(), this.focus());
                                }),
                                (0, U.T)(
                                    ...this.options.map((i) => i._stateChanges)
                                )
                                    .pipe((0, y.R)(t))
                                    .subscribe(() => {
                                        this._changeDetectorRef.markForCheck(),
                                            this.stateChanges.next();
                                    });
                        }
                        _onSelect(t, i) {
                            const a = this._selectionModel.isSelected(t);
                            null != t.value || this._multiple
                                ? (a !== t.selected &&
                                      (t.selected
                                          ? this._selectionModel.select(t)
                                          : this._selectionModel.deselect(t)),
                                  i && this._keyManager.setActiveItem(t),
                                  this.multiple &&
                                      (this._sortValues(), i && this.focus()))
                                : (t.deselect(),
                                  this._selectionModel.clear(),
                                  null != this.value &&
                                      this._propagateChanges(t.value)),
                                a !== this._selectionModel.isSelected(t) &&
                                    this._propagateChanges(),
                                this.stateChanges.next();
                        }
                        _sortValues() {
                            if (this.multiple) {
                                const t = this.options.toArray();
                                this._selectionModel.sort((i, a) =>
                                    this.sortComparator
                                        ? this.sortComparator(i, a, t)
                                        : t.indexOf(i) - t.indexOf(a)
                                ),
                                    this.stateChanges.next();
                            }
                        }
                        _propagateChanges(t) {
                            let i = null;
                            (i = this.multiple
                                ? this.selected.map((a) => a.value)
                                : this.selected
                                ? this.selected.value
                                : t),
                                (this._value = i),
                                this.valueChange.emit(i),
                                this._onChange(i),
                                this.selectionChange.emit(
                                    this._getChangeEvent(i)
                                ),
                                this._changeDetectorRef.markForCheck();
                        }
                        _highlightCorrectOption() {
                            this._keyManager &&
                                (this.empty
                                    ? this._keyManager.setFirstItemActive()
                                    : this._keyManager.setActiveItem(
                                          this._selectionModel.selected[0]
                                      ));
                        }
                        _canOpen() {
                            return (
                                !this._panelOpen &&
                                !this.disabled &&
                                this.options?.length > 0
                            );
                        }
                        focus(t) {
                            this._elementRef.nativeElement.focus(t);
                        }
                        _getPanelAriaLabelledby() {
                            if (this.ariaLabel) return null;
                            const t = this._parentFormField?.getLabelId();
                            return this.ariaLabelledby
                                ? (t ? t + " " : "") + this.ariaLabelledby
                                : t;
                        }
                        _getAriaActiveDescendant() {
                            return this.panelOpen &&
                                this._keyManager &&
                                this._keyManager.activeItem
                                ? this._keyManager.activeItem.id
                                : null;
                        }
                        _getTriggerAriaLabelledby() {
                            if (this.ariaLabel) return null;
                            const t = this._parentFormField?.getLabelId();
                            let i = (t ? t + " " : "") + this._valueId;
                            return (
                                this.ariaLabelledby &&
                                    (i += " " + this.ariaLabelledby),
                                i
                            );
                        }
                        _panelDoneAnimating(t) {
                            this.openedChange.emit(t);
                        }
                        setDescribedByIds(t) {
                            t.length
                                ? this._elementRef.nativeElement.setAttribute(
                                      "aria-describedby",
                                      t.join(" ")
                                  )
                                : this._elementRef.nativeElement.removeAttribute(
                                      "aria-describedby"
                                  );
                        }
                        onContainerClick() {
                            this.focus(), this.open();
                        }
                        get shouldLabelFloat() {
                            return (
                                this._panelOpen ||
                                !this.empty ||
                                (this._focused && !!this._placeholder)
                            );
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(
                                e.Y36(L.rL),
                                e.Y36(e.sBO),
                                e.Y36(e.R0b),
                                e.Y36(p.rD),
                                e.Y36(e.SBq),
                                e.Y36(he.Is, 8),
                                e.Y36(c.F, 8),
                                e.Y36(c.sg, 8),
                                e.Y36(m.G_, 8),
                                e.Y36(c.a5, 10),
                                e.$8M("tabindex"),
                                e.Y36(X),
                                e.Y36(R.Kd),
                                e.Y36(Me, 8)
                            );
                        }),
                        (n.ɵdir = e.lG2({
                            type: n,
                            viewQuery: function (t, i) {
                                if (
                                    (1 & t &&
                                        (e.Gf(fe, 5),
                                        e.Gf(ve, 5),
                                        e.Gf(k.pI, 5)),
                                    2 & t)
                                ) {
                                    let a;
                                    e.iGM((a = e.CRH())) &&
                                        (i.trigger = a.first),
                                        e.iGM((a = e.CRH())) &&
                                            (i.panel = a.first),
                                        e.iGM((a = e.CRH())) &&
                                            (i._overlayDir = a.first);
                                }
                            },
                            inputs: {
                                userAriaDescribedBy: [
                                    "aria-describedby",
                                    "userAriaDescribedBy",
                                ],
                                panelClass: "panelClass",
                                placeholder: "placeholder",
                                required: "required",
                                multiple: "multiple",
                                disableOptionCentering:
                                    "disableOptionCentering",
                                compareWith: "compareWith",
                                value: "value",
                                ariaLabel: ["aria-label", "ariaLabel"],
                                ariaLabelledby: [
                                    "aria-labelledby",
                                    "ariaLabelledby",
                                ],
                                errorStateMatcher: "errorStateMatcher",
                                typeaheadDebounceInterval:
                                    "typeaheadDebounceInterval",
                                sortComparator: "sortComparator",
                                id: "id",
                            },
                            outputs: {
                                openedChange: "openedChange",
                                _openedStream: "opened",
                                _closedStream: "closed",
                                selectionChange: "selectionChange",
                                valueChange: "valueChange",
                            },
                            features: [e.qOj, e.TTD],
                        })),
                        n
                    );
                })(),
                D = (() => {
                    class n extends qe {
                        constructor() {
                            super(...arguments),
                                (this._scrollTop = 0),
                                (this._triggerFontSize = 0),
                                (this._transformOrigin = "top"),
                                (this._offsetY = 0),
                                (this._positions = [
                                    {
                                        originX: "start",
                                        originY: "top",
                                        overlayX: "start",
                                        overlayY: "top",
                                    },
                                    {
                                        originX: "start",
                                        originY: "bottom",
                                        overlayX: "start",
                                        overlayY: "bottom",
                                    },
                                ]);
                        }
                        _calculateOverlayScroll(t, i, a) {
                            const s = this._getItemHeight();
                            return Math.min(Math.max(0, s * t - i + s / 2), a);
                        }
                        ngOnInit() {
                            super.ngOnInit(),
                                this._viewportRuler
                                    .change()
                                    .pipe((0, y.R)(this._destroy))
                                    .subscribe(() => {
                                        this.panelOpen &&
                                            ((this._triggerRect =
                                                this.trigger.nativeElement.getBoundingClientRect()),
                                            this._changeDetectorRef.markForCheck());
                                    });
                        }
                        open() {
                            super._canOpen() &&
                                (super.open(),
                                (this._triggerRect =
                                    this.trigger.nativeElement.getBoundingClientRect()),
                                (this._triggerFontSize = parseInt(
                                    getComputedStyle(this.trigger.nativeElement)
                                        .fontSize || "0"
                                )),
                                this._calculateOverlayPosition(),
                                this._ngZone.onStable
                                    .pipe((0, q.q)(1))
                                    .subscribe(() => {
                                        this._triggerFontSize &&
                                            this._overlayDir.overlayRef &&
                                            this._overlayDir.overlayRef
                                                .overlayElement &&
                                            (this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`);
                                    }));
                        }
                        _scrollOptionIntoView(t) {
                            const i = (0, p.CB)(
                                    t,
                                    this.options,
                                    this.optionGroups
                                ),
                                a = this._getItemHeight();
                            this.panel.nativeElement.scrollTop =
                                0 === t && 1 === i
                                    ? 0
                                    : (0, p.jH)(
                                          (t + i) * a,
                                          a,
                                          this.panel.nativeElement.scrollTop,
                                          S
                                      );
                        }
                        _positioningSettled() {
                            this._calculateOverlayOffsetX(),
                                (this.panel.nativeElement.scrollTop =
                                    this._scrollTop);
                        }
                        _panelDoneAnimating(t) {
                            this.panelOpen
                                ? (this._scrollTop = 0)
                                : ((this._overlayDir.offsetX = 0),
                                  this._changeDetectorRef.markForCheck()),
                                super._panelDoneAnimating(t);
                        }
                        _getChangeEvent(t) {
                            return new Ie(this, t);
                        }
                        _calculateOverlayOffsetX() {
                            const t =
                                    this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),
                                i = this._viewportRuler.getViewportSize(),
                                a = this._isRtl(),
                                s = this.multiple ? 56 : 32;
                            let r;
                            if (this.multiple) r = 40;
                            else if (this.disableOptionCentering) r = 16;
                            else {
                                let g =
                                    this._selectionModel.selected[0] ||
                                    this.options.first;
                                r = g && g.group ? 32 : 16;
                            }
                            a || (r *= -1);
                            const u = 0 - (t.left + r - (a ? s : 0)),
                                d = t.right + r - i.width + (a ? 0 : s);
                            u > 0 ? (r += u + 8) : d > 0 && (r -= d + 8),
                                (this._overlayDir.offsetX = Math.round(r)),
                                this._overlayDir.overlayRef.updatePosition();
                        }
                        _calculateOverlayOffsetY(t, i, a) {
                            const s = this._getItemHeight(),
                                r = (s - this._triggerRect.height) / 2,
                                u = Math.floor(S / s);
                            let d;
                            return this.disableOptionCentering
                                ? 0
                                : ((d =
                                      0 === this._scrollTop
                                          ? t * s
                                          : this._scrollTop === a
                                          ? (t - (this._getItemCount() - u)) *
                                                s +
                                            (s -
                                                ((this._getItemCount() * s -
                                                    S) %
                                                    s))
                                          : i - s / 2),
                                  Math.round(-1 * d - r));
                        }
                        _checkOverlayWithinViewport(t) {
                            const i = this._getItemHeight(),
                                a = this._viewportRuler.getViewportSize(),
                                s = this._triggerRect.top - 8,
                                r = a.height - this._triggerRect.bottom - 8,
                                u = Math.abs(this._offsetY),
                                g =
                                    Math.min(this._getItemCount() * i, S) -
                                    u -
                                    this._triggerRect.height;
                            g > r
                                ? this._adjustPanelUp(g, r)
                                : u > s
                                ? this._adjustPanelDown(u, s, t)
                                : (this._transformOrigin =
                                      this._getOriginBasedOnOption());
                        }
                        _adjustPanelUp(t, i) {
                            const a = Math.round(t - i);
                            (this._scrollTop -= a),
                                (this._offsetY -= a),
                                (this._transformOrigin =
                                    this._getOriginBasedOnOption()),
                                this._scrollTop <= 0 &&
                                    ((this._scrollTop = 0),
                                    (this._offsetY = 0),
                                    (this._transformOrigin = "50% bottom 0px"));
                        }
                        _adjustPanelDown(t, i, a) {
                            const s = Math.round(t - i);
                            if (
                                ((this._scrollTop += s),
                                (this._offsetY += s),
                                (this._transformOrigin =
                                    this._getOriginBasedOnOption()),
                                this._scrollTop >= a)
                            )
                                return (
                                    (this._scrollTop = a),
                                    (this._offsetY = 0),
                                    void (this._transformOrigin = "50% top 0px")
                                );
                        }
                        _calculateOverlayPosition() {
                            const t = this._getItemHeight(),
                                i = this._getItemCount(),
                                a = Math.min(i * t, S),
                                r = i * t - a;
                            let u;
                            (u = this.empty
                                ? 0
                                : Math.max(
                                      this.options
                                          .toArray()
                                          .indexOf(
                                              this._selectionModel.selected[0]
                                          ),
                                      0
                                  )),
                                (u += (0, p.CB)(
                                    u,
                                    this.options,
                                    this.optionGroups
                                ));
                            const d = a / 2;
                            (this._scrollTop = this._calculateOverlayScroll(
                                u,
                                d,
                                r
                            )),
                                (this._offsetY = this._calculateOverlayOffsetY(
                                    u,
                                    d,
                                    r
                                )),
                                this._checkOverlayWithinViewport(r);
                        }
                        _getOriginBasedOnOption() {
                            const t = this._getItemHeight(),
                                i = (t - this._triggerRect.height) / 2;
                            return `50% ${
                                Math.abs(this._offsetY) - i + t / 2
                            }px 0px`;
                        }
                        _getItemHeight() {
                            return 3 * this._triggerFontSize;
                        }
                        _getItemCount() {
                            return (
                                this.options.length + this.optionGroups.length
                            );
                        }
                    }
                    return (
                        (n.ɵfac = (function () {
                            let o;
                            return function (i) {
                                return (o || (o = e.n5z(n)))(i || n);
                            };
                        })()),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["mat-select"]],
                            contentQueries: function (t, i, a) {
                                if (
                                    (1 & t &&
                                        (e.Suo(a, $, 5),
                                        e.Suo(a, p.ey, 5),
                                        e.Suo(a, p.K7, 5)),
                                    2 & t)
                                ) {
                                    let s;
                                    e.iGM((s = e.CRH())) &&
                                        (i.customTrigger = s.first),
                                        e.iGM((s = e.CRH())) && (i.options = s),
                                        e.iGM((s = e.CRH())) &&
                                            (i.optionGroups = s);
                                }
                            },
                            hostAttrs: [
                                "role",
                                "combobox",
                                "aria-autocomplete",
                                "none",
                                "aria-haspopup",
                                "true",
                                1,
                                "mat-select",
                            ],
                            hostVars: 19,
                            hostBindings: function (t, i) {
                                1 & t &&
                                    e.NdJ("keydown", function (s) {
                                        return i._handleKeydown(s);
                                    })("focus", function () {
                                        return i._onFocus();
                                    })("blur", function () {
                                        return i._onBlur();
                                    }),
                                    2 & t &&
                                        (e.uIk("id", i.id)(
                                            "tabindex",
                                            i.tabIndex
                                        )(
                                            "aria-controls",
                                            i.panelOpen ? i.id + "-panel" : null
                                        )("aria-expanded", i.panelOpen)(
                                            "aria-label",
                                            i.ariaLabel || null
                                        )(
                                            "aria-required",
                                            i.required.toString()
                                        )(
                                            "aria-disabled",
                                            i.disabled.toString()
                                        )("aria-invalid", i.errorState)(
                                            "aria-activedescendant",
                                            i._getAriaActiveDescendant()
                                        ),
                                        e.ekj(
                                            "mat-select-disabled",
                                            i.disabled
                                        )("mat-select-invalid", i.errorState)(
                                            "mat-select-required",
                                            i.required
                                        )("mat-select-empty", i.empty)(
                                            "mat-select-multiple",
                                            i.multiple
                                        ));
                            },
                            inputs: {
                                disabled: "disabled",
                                disableRipple: "disableRipple",
                                tabIndex: "tabIndex",
                            },
                            exportAs: ["matSelect"],
                            features: [
                                e._Bn([
                                    { provide: m.Eo, useExisting: n },
                                    { provide: p.HF, useExisting: n },
                                ]),
                                e.qOj,
                            ],
                            ngContentSelectors: ke,
                            decls: 9,
                            vars: 12,
                            consts: [
                                [
                                    "cdk-overlay-origin",
                                    "",
                                    1,
                                    "mat-select-trigger",
                                    3,
                                    "click",
                                ],
                                ["origin", "cdkOverlayOrigin", "trigger", ""],
                                [1, "mat-select-value", 3, "ngSwitch"],
                                [
                                    "class",
                                    "mat-select-placeholder mat-select-min-line",
                                    4,
                                    "ngSwitchCase",
                                ],
                                [
                                    "class",
                                    "mat-select-value-text",
                                    3,
                                    "ngSwitch",
                                    4,
                                    "ngSwitchCase",
                                ],
                                [1, "mat-select-arrow-wrapper"],
                                [1, "mat-select-arrow"],
                                [
                                    "cdk-connected-overlay",
                                    "",
                                    "cdkConnectedOverlayLockPosition",
                                    "",
                                    "cdkConnectedOverlayHasBackdrop",
                                    "",
                                    "cdkConnectedOverlayBackdropClass",
                                    "cdk-overlay-transparent-backdrop",
                                    3,
                                    "cdkConnectedOverlayPanelClass",
                                    "cdkConnectedOverlayScrollStrategy",
                                    "cdkConnectedOverlayOrigin",
                                    "cdkConnectedOverlayOpen",
                                    "cdkConnectedOverlayPositions",
                                    "cdkConnectedOverlayMinWidth",
                                    "cdkConnectedOverlayOffsetY",
                                    "backdropClick",
                                    "attach",
                                    "detach",
                                ],
                                [
                                    1,
                                    "mat-select-placeholder",
                                    "mat-select-min-line",
                                ],
                                [1, "mat-select-value-text", 3, "ngSwitch"],
                                [
                                    "class",
                                    "mat-select-min-line",
                                    4,
                                    "ngSwitchDefault",
                                ],
                                [4, "ngSwitchCase"],
                                [1, "mat-select-min-line"],
                                [1, "mat-select-panel-wrap"],
                                [
                                    "role",
                                    "listbox",
                                    "tabindex",
                                    "-1",
                                    3,
                                    "ngClass",
                                    "keydown",
                                ],
                                ["panel", ""],
                            ],
                            template: function (t, i) {
                                if (
                                    (1 & t &&
                                        (e.F$t(we),
                                        e.TgZ(0, "div", 0, 1),
                                        e.NdJ("click", function () {
                                            return i.toggle();
                                        }),
                                        e.TgZ(3, "div", 2),
                                        e.YNc(4, be, 2, 1, "span", 3),
                                        e.YNc(5, xe, 3, 2, "span", 4),
                                        e.qZA(),
                                        e.TgZ(6, "div", 5),
                                        e._UZ(7, "div", 6),
                                        e.qZA()(),
                                        e.YNc(8, Ze, 4, 14, "ng-template", 7),
                                        e.NdJ("backdropClick", function () {
                                            return i.close();
                                        })("attach", function () {
                                            return i._onAttached();
                                        })("detach", function () {
                                            return i.close();
                                        })),
                                    2 & t)
                                ) {
                                    const a = e.MAs(1);
                                    e.uIk(
                                        "aria-owns",
                                        i.panelOpen ? i.id + "-panel" : null
                                    ),
                                        e.xp6(3),
                                        e.Q6J("ngSwitch", i.empty),
                                        e.uIk("id", i._valueId),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", !0),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", !1),
                                        e.xp6(3),
                                        e.Q6J(
                                            "cdkConnectedOverlayPanelClass",
                                            i._overlayPanelClass
                                        )(
                                            "cdkConnectedOverlayScrollStrategy",
                                            i._scrollStrategy
                                        )("cdkConnectedOverlayOrigin", a)(
                                            "cdkConnectedOverlayOpen",
                                            i.panelOpen
                                        )(
                                            "cdkConnectedOverlayPositions",
                                            i._positions
                                        )(
                                            "cdkConnectedOverlayMinWidth",
                                            null == i._triggerRect
                                                ? null
                                                : i._triggerRect.width
                                        )(
                                            "cdkConnectedOverlayOffsetY",
                                            i._offsetY
                                        );
                                }
                            },
                            dependencies: [f.mk, f.RF, f.n9, f.ED, k.pI, k.xu],
                            styles: [
                                '.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}',
                            ],
                            encapsulation: 2,
                            data: {
                                animation: [
                                    K.transformPanelWrap,
                                    K.transformPanel,
                                ],
                            },
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                De = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            providers: [Oe],
                            imports: [
                                f.ez,
                                k.U8,
                                p.Ng,
                                p.BQ,
                                L.ZD,
                                m.lN,
                                p.Ng,
                                p.BQ,
                            ],
                        })),
                        n
                    );
                })();
            var B = l(455),
                I = l(3267),
                Be = l(7775),
                Je = l(4466),
                Fe = l(4880);
            let Qe = (() => {
                    class n {
                        constructor(t) {
                            this._formBuilder = t;
                        }
                        ngOnInit() {
                            this.accountForm = this._formBuilder.group({
                                name: ["Samuel Zima"],
                                username: ["Samo"],
                                title: ["Student"],
                                company: ["YXZ Software"],
                                about: [],
                                email: ["samuel.zima@gmail.com", c.kI.email],
                                phone: ["+421 907 483 564"],
                                country: ["slovakia"],
                                language: ["slovak"],
                            });
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(c.QS));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["settings-account"]],
                            decls: 86,
                            vars: 26,
                            consts: [
                                [1, "w-full", "max-w-3xl"],
                                [3, "formGroup"],
                                [1, "w-full"],
                                [
                                    1,
                                    "text-xl",
                                    "font-semibold",
                                    "dark:text-white",
                                    "text-black",
                                ],
                                [1, "text-secondary"],
                                [
                                    1,
                                    "grid",
                                    "sm:grid-cols-4",
                                    "gap-6",
                                    "w-full",
                                    "mt-8",
                                ],
                                [1, "sm:col-span-4"],
                                [
                                    1,
                                    "amos-mat-no-subscript",
                                    "w-full",
                                    "dark:text-white",
                                    "text-black",
                                ],
                                [1, "dark:text-white", "text-black"],
                                [
                                    "matPrefix",
                                    "",
                                    1,
                                    "icon-size-5",
                                    3,
                                    "svgIcon",
                                ],
                                [
                                    "matInput",
                                    "",
                                    1,
                                    "dark:text-white",
                                    "text-black",
                                    3,
                                    "formControlName",
                                ],
                                [1, "amos-mat-no-subscript", "w-full"],
                                ["matPrefix", "", 1, "text-secondary"],
                                [1, "sm:col-span-2"],
                                [1, "my-5", "border-t"],
                                [1, "text-xl", "dark:text-white", "text-black"],
                                [
                                    1,
                                    "dark:text-white",
                                    "text-black",
                                    3,
                                    "formControlName",
                                ],
                                [3, "value"],
                                [1, "mt-11", "mb-10", "border-t"],
                                [1, "flex", "items-center", "justify-end"],
                                [
                                    "mat-stroked-button",
                                    "",
                                    "type",
                                    "button",
                                    1,
                                    "dark:text-white",
                                    "text-black",
                                ],
                                [
                                    "mat-flat-button",
                                    "",
                                    "type",
                                    "button",
                                    1,
                                    "ml-4",
                                    3,
                                    "color",
                                ],
                            ],
                            template: function (t, i) {
                                1 & t &&
                                    (e.TgZ(0, "div", 0)(1, "form", 1)(
                                        2,
                                        "div",
                                        2
                                    )(3, "div", 3),
                                    e._uU(4, " Profile "),
                                    e.qZA(),
                                    e.TgZ(5, "div", 4),
                                    e._uU(
                                        6,
                                        " Following information is publicly displayed, be careful! "
                                    ),
                                    e.qZA()(),
                                    e.TgZ(7, "div", 5)(8, "div", 6)(
                                        9,
                                        "mat-form-field",
                                        7
                                    )(10, "mat-label", 8),
                                    e._uU(11, "Name"),
                                    e.qZA(),
                                    e._UZ(12, "mat-icon", 9)(13, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(14, "div", 6)(
                                        15,
                                        "mat-form-field",
                                        11
                                    )(16, "mat-label", 8),
                                    e._uU(17, "Username"),
                                    e.qZA(),
                                    e.TgZ(18, "div", 12),
                                    e._uU(19, "amos.com/"),
                                    e.qZA(),
                                    e._UZ(20, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(21, "div", 13)(
                                        22,
                                        "mat-form-field",
                                        11
                                    )(23, "mat-label", 8),
                                    e._uU(24, "Title"),
                                    e.qZA(),
                                    e._UZ(25, "mat-icon", 9)(26, "input", 10),
                                    e.qZA()()(),
                                    e._UZ(27, "div", 14),
                                    e.TgZ(28, "div", 2)(29, "div", 15),
                                    e._uU(30, " Personal Information "),
                                    e.qZA(),
                                    e.TgZ(31, "div", 4),
                                    e._uU(
                                        32,
                                        " Communication details in case we want to connect with you. These will be kept private. "
                                    ),
                                    e.qZA()(),
                                    e.TgZ(33, "div", 5)(34, "div", 13)(
                                        35,
                                        "mat-form-field",
                                        11
                                    )(36, "mat-label", 8),
                                    e._uU(37, "Email"),
                                    e.qZA(),
                                    e._UZ(38, "mat-icon", 9)(39, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(40, "div", 13)(
                                        41,
                                        "mat-form-field",
                                        11
                                    )(42, "mat-label", 8),
                                    e._uU(43, "Phone"),
                                    e.qZA(),
                                    e._UZ(44, "mat-icon", 9)(45, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(46, "div", 13)(
                                        47,
                                        "mat-form-field",
                                        11
                                    )(48, "mat-label", 8),
                                    e._uU(49, "Country"),
                                    e.qZA(),
                                    e._UZ(50, "mat-icon", 9),
                                    e.TgZ(51, "mat-select", 16)(
                                        52,
                                        "mat-option",
                                        17
                                    ),
                                    e._uU(53, "United States"),
                                    e.qZA(),
                                    e.TgZ(54, "mat-option", 17),
                                    e._uU(55, "Slovakia"),
                                    e.qZA(),
                                    e.TgZ(56, "mat-option", 17),
                                    e._uU(57, "Mexico"),
                                    e.qZA(),
                                    e.TgZ(58, "mat-option", 17),
                                    e._uU(59, "France"),
                                    e.qZA(),
                                    e.TgZ(60, "mat-option", 17),
                                    e._uU(61, "Germany"),
                                    e.qZA(),
                                    e.TgZ(62, "mat-option", 17),
                                    e._uU(63, "Italy"),
                                    e.qZA()()()(),
                                    e.TgZ(64, "div", 13)(
                                        65,
                                        "mat-form-field",
                                        11
                                    )(66, "mat-label", 8),
                                    e._uU(67, "Language"),
                                    e.qZA(),
                                    e._UZ(68, "mat-icon", 9),
                                    e.TgZ(69, "mat-select", 16)(
                                        70,
                                        "mat-option",
                                        17
                                    ),
                                    e._uU(71, "English"),
                                    e.qZA(),
                                    e.TgZ(72, "mat-option", 17),
                                    e._uU(73, "Slovak"),
                                    e.qZA(),
                                    e.TgZ(74, "mat-option", 17),
                                    e._uU(75, "French"),
                                    e.qZA(),
                                    e.TgZ(76, "mat-option", 17),
                                    e._uU(77, "German"),
                                    e.qZA(),
                                    e.TgZ(78, "mat-option", 17),
                                    e._uU(79, "Italian"),
                                    e.qZA()()()()(),
                                    e._UZ(80, "div", 18),
                                    e.TgZ(81, "div", 19)(82, "button", 20),
                                    e._uU(83, " Cancel "),
                                    e.qZA(),
                                    e.TgZ(84, "button", 21),
                                    e._uU(85, " Save "),
                                    e.qZA()()()()),
                                    2 & t &&
                                        (e.xp6(1),
                                        e.Q6J("formGroup", i.accountForm),
                                        e.xp6(11),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:user"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "name"),
                                        e.xp6(7),
                                        e.Q6J("formControlName", "username"),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:briefcase"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "title"),
                                        e.xp6(12),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:mail"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "email"),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:phone"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "phone"),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:location-marker"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "country"),
                                        e.xp6(1),
                                        e.Q6J("value", "usa"),
                                        e.xp6(2),
                                        e.Q6J("value", "slovakia"),
                                        e.xp6(2),
                                        e.Q6J("value", "mexico"),
                                        e.xp6(2),
                                        e.Q6J("value", "france"),
                                        e.xp6(2),
                                        e.Q6J("value", "germany"),
                                        e.xp6(2),
                                        e.Q6J("value", "italy"),
                                        e.xp6(6),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:globe-alt"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "language"),
                                        e.xp6(1),
                                        e.Q6J("value", "english"),
                                        e.xp6(2),
                                        e.Q6J("value", "slovak"),
                                        e.xp6(2),
                                        e.Q6J("value", "french"),
                                        e.xp6(2),
                                        e.Q6J("value", "german"),
                                        e.xp6(2),
                                        e.Q6J("value", "italian"),
                                        e.xp6(6),
                                        e.Q6J("color", "blue"));
                            },
                            dependencies: [
                                C.lW,
                                m.KE,
                                m.hX,
                                m.qo,
                                x.Hw,
                                w.Nt,
                                D,
                                p.ey,
                                c._Y,
                                c.Fj,
                                c.JJ,
                                c.JL,
                                c.sg,
                                c.u,
                            ],
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                Ee = (() => {
                    class n {
                        constructor(t) {
                            this._formBuilder = t;
                        }
                        ngOnInit() {
                            this.securityForm = this._formBuilder.group({
                                currentPassword: [""],
                                newPassword: [""],
                                twoStep: [!0],
                                askPasswordChange: [!1],
                            });
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(c.QS));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["settings-security"]],
                            decls: 51,
                            vars: 10,
                            consts: [
                                [1, "w-full", "max-w-3xl"],
                                [3, "formGroup"],
                                [1, "w-full"],
                                [1, "text-xl"],
                                [1, "text-secondary"],
                                [
                                    1,
                                    "grid",
                                    "sm:grid-cols-4",
                                    "gap-6",
                                    "w-full",
                                    "mt-8",
                                ],
                                [1, "sm:col-span-4"],
                                [1, "amos-mat-no-subscript", "w-full"],
                                [1, "dark:text-white", "text-black"],
                                [
                                    "matPrefix",
                                    "",
                                    1,
                                    "icon-size-5",
                                    3,
                                    "svgIcon",
                                ],
                                [
                                    "type",
                                    "password",
                                    "matInput",
                                    "",
                                    3,
                                    "formControlName",
                                ],
                                [1, "mt-1", "text-md", "text-hint"],
                                [1, "my-10", "border-t"],
                                [
                                    1,
                                    "sm:col-span-4",
                                    "flex",
                                    "items-center",
                                    "justify-between",
                                ],
                                [1, "flex-auto", "cursor-pointer", 3, "click"],
                                [1, "leading-6", "font-medium"],
                                [1, "text-md", "text-secondary"],
                                [1, "ml-4", 3, "color", "formControlName"],
                                ["twoStepToggle", ""],
                                ["askPasswordChangeToggle", ""],
                                [1, "flex", "items-center", "justify-end"],
                                ["mat-stroked-button", "", "type", "button"],
                                [
                                    "mat-flat-button",
                                    "",
                                    "type",
                                    "button",
                                    1,
                                    "ml-4",
                                    3,
                                    "color",
                                ],
                            ],
                            template: function (t, i) {
                                if (1 & t) {
                                    const a = e.EpF();
                                    e.TgZ(0, "div", 0)(1, "form", 1)(
                                        2,
                                        "div",
                                        2
                                    )(3, "div", 3),
                                        e._uU(4, "Change your password"),
                                        e.qZA(),
                                        e.TgZ(5, "div", 4),
                                        e._uU(
                                            6,
                                            " You can only change your password twice within 24 hours! "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(7, "div", 5)(8, "div", 6)(
                                            9,
                                            "mat-form-field",
                                            7
                                        )(10, "mat-label", 8),
                                        e._uU(11, "Current password"),
                                        e.qZA(),
                                        e._UZ(12, "mat-icon", 9)(
                                            13,
                                            "input",
                                            10
                                        ),
                                        e.qZA()(),
                                        e.TgZ(14, "div", 6)(
                                            15,
                                            "mat-form-field",
                                            7
                                        )(16, "mat-label"),
                                        e._uU(17, "New password"),
                                        e.qZA(),
                                        e._UZ(18, "mat-icon", 9)(
                                            19,
                                            "input",
                                            10
                                        ),
                                        e.qZA(),
                                        e.TgZ(20, "div", 11),
                                        e._uU(
                                            21,
                                            " Minimum 8 characters. Must include numbers, letters and special characters. "
                                        ),
                                        e.qZA()()(),
                                        e._UZ(22, "div", 12),
                                        e.TgZ(23, "div", 2)(24, "div", 3),
                                        e._uU(25, "Security preferences"),
                                        e.qZA(),
                                        e.TgZ(26, "div", 4),
                                        e._uU(
                                            27,
                                            " Keep your account more secure with following preferences. "
                                        ),
                                        e.qZA()(),
                                        e.TgZ(28, "div", 5)(29, "div", 13)(
                                            30,
                                            "div",
                                            14
                                        ),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(36);
                                            return e.KtG(r.toggle());
                                        }),
                                        e.TgZ(31, "div", 15),
                                        e._uU(
                                            32,
                                            " Enable 2-step authentication "
                                        ),
                                        e.qZA(),
                                        e.TgZ(33, "div", 16),
                                        e._uU(
                                            34,
                                            " Protects you against password theft by requesting an authentication code via SMS on every login. "
                                        ),
                                        e.qZA()(),
                                        e._UZ(35, "mat-slide-toggle", 17, 18),
                                        e.qZA(),
                                        e.TgZ(37, "div", 13)(38, "div", 14),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(44);
                                            return e.KtG(r.toggle());
                                        }),
                                        e.TgZ(39, "div", 15),
                                        e._uU(
                                            40,
                                            " Ask to change password on every 6 months "
                                        ),
                                        e.qZA(),
                                        e.TgZ(41, "div", 16),
                                        e._uU(
                                            42,
                                            " A simple but an effective way to be protected against data leaks and password theft. "
                                        ),
                                        e.qZA()(),
                                        e._UZ(43, "mat-slide-toggle", 17, 19),
                                        e.qZA()(),
                                        e._UZ(45, "div", 12),
                                        e.TgZ(46, "div", 20)(47, "button", 21),
                                        e._uU(48, "Cancel"),
                                        e.qZA(),
                                        e.TgZ(49, "button", 22),
                                        e._uU(50, " Save "),
                                        e.qZA()()()();
                                }
                                2 & t &&
                                    (e.xp6(1),
                                    e.Q6J("formGroup", i.securityForm),
                                    e.xp6(11),
                                    e.Q6J("svgIcon", "heroicons_solid:key"),
                                    e.xp6(1),
                                    e.Q6J("formControlName", "currentPassword"),
                                    e.xp6(5),
                                    e.Q6J("svgIcon", "heroicons_solid:key"),
                                    e.xp6(1),
                                    e.Q6J("formControlName", "newPassword"),
                                    e.xp6(16),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "twoStep"
                                    ),
                                    e.xp6(8),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "askPasswordChange"
                                    ),
                                    e.xp6(6),
                                    e.Q6J("color", "primary"));
                            },
                            dependencies: [
                                C.lW,
                                m.KE,
                                m.hX,
                                m.qo,
                                x.Hw,
                                w.Nt,
                                B.Rr,
                                c._Y,
                                c.Fj,
                                c.JJ,
                                c.JL,
                                c.sg,
                                c.u,
                            ],
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                Pe = (() => {
                    class n {
                        constructor(t) {
                            this._formBuilder = t;
                        }
                        ngOnInit() {
                            (this.planBillingForm = this._formBuilder.group({
                                plan: ["team"],
                                cardHolder: ["Samuel Zima"],
                                cardNumber: [""],
                                cardExpiration: [""],
                                cardCVC: [""],
                                country: ["slovakia"],
                                zip: [""],
                            })),
                                (this.plans = [
                                    {
                                        value: "basic",
                                        label: "Individual",
                                        details:
                                            "Starter plan for individuals.",
                                        price: "",
                                    },
                                    {
                                        value: "team",
                                        label: "Popular",
                                        details: "Buy more notes.",
                                        price: "5",
                                    },
                                    {
                                        value: "enterprise",
                                        label: "Trios",
                                        details: "For tripple the notes.",
                                        price: "3",
                                    },
                                ]);
                        }
                        trackByFn(t, i) {
                            return i.id || t;
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(c.QS));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["settings-plan-billing"]],
                            decls: 63,
                            vars: 21,
                            consts: [
                                [1, "w-full", "max-w-3xl"],
                                [3, "formGroup"],
                                [1, "mt-12", "mb-10", "border-t"],
                                [1, "w-full"],
                                [1, "text-xl"],
                                [1, "text-secondary"],
                                [
                                    1,
                                    "grid",
                                    "grid-cols-4",
                                    "gap-6",
                                    "w-full",
                                    "mt-8",
                                ],
                                [1, "col-span-4"],
                                [1, "amos-mat-no-subscript", "w-full"],
                                [
                                    "matPrefix",
                                    "",
                                    1,
                                    "icon-size-5",
                                    3,
                                    "svgIcon",
                                ],
                                ["matInput", "", 3, "formControlName"],
                                [1, "col-span-4", "sm:col-span-2"],
                                [1, "col-span-2", "sm:col-span-1"],
                                [
                                    1,
                                    "amos-mat-no-subscript",
                                    "w-full",
                                    3,
                                    "floatLabel",
                                ],
                                [
                                    "matInput",
                                    "",
                                    3,
                                    "formControlName",
                                    "placeholder",
                                ],
                                [3, "formControlName"],
                                [3, "value"],
                                ["matInput", ""],
                                [1, "mt-11", "mb-10", "border-t"],
                                [1, "flex", "items-center", "justify-end"],
                                ["mat-stroked-button", "", "type", "button"],
                                [
                                    "mat-flat-button",
                                    "",
                                    "type",
                                    "button",
                                    1,
                                    "ml-4",
                                    3,
                                    "color",
                                ],
                            ],
                            template: function (t, i) {
                                1 & t &&
                                    (e.TgZ(0, "div", 0)(1, "form", 1),
                                    e._UZ(2, "div", 2),
                                    e.TgZ(3, "div", 3)(4, "div", 4),
                                    e._uU(5, "Payment Details"),
                                    e.qZA(),
                                    e.TgZ(6, "div", 5),
                                    e._uU(
                                        7,
                                        " Update your billing information. Make sure to set your location correctly as it could affect your tax rates. "
                                    ),
                                    e.qZA()(),
                                    e.TgZ(8, "div", 6)(9, "div", 7)(
                                        10,
                                        "mat-form-field",
                                        8
                                    )(11, "mat-label"),
                                    e._uU(12, "Card holder"),
                                    e.qZA(),
                                    e._UZ(13, "mat-icon", 9)(14, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(15, "div", 11)(
                                        16,
                                        "mat-form-field",
                                        8
                                    )(17, "mat-label"),
                                    e._uU(18, "Card number"),
                                    e.qZA(),
                                    e._UZ(19, "mat-icon", 9)(20, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(21, "div", 12)(
                                        22,
                                        "mat-form-field",
                                        13
                                    )(23, "mat-label"),
                                    e._uU(24, "Expiration date"),
                                    e.qZA(),
                                    e._UZ(25, "mat-icon", 9)(26, "input", 14),
                                    e.qZA()(),
                                    e.TgZ(27, "div", 12)(
                                        28,
                                        "mat-form-field",
                                        8
                                    )(29, "mat-label"),
                                    e._uU(30, "CVC / CVC2"),
                                    e.qZA(),
                                    e._UZ(31, "mat-icon", 9)(32, "input", 10),
                                    e.qZA()(),
                                    e.TgZ(33, "div", 11)(
                                        34,
                                        "mat-form-field",
                                        8
                                    )(35, "mat-label"),
                                    e._uU(36, "Country"),
                                    e.qZA(),
                                    e._UZ(37, "mat-icon", 9),
                                    e.TgZ(38, "mat-select", 15)(
                                        39,
                                        "mat-option",
                                        16
                                    ),
                                    e._uU(40, "United States"),
                                    e.qZA(),
                                    e.TgZ(41, "mat-option", 16),
                                    e._uU(42, "Canada"),
                                    e.qZA(),
                                    e.TgZ(43, "mat-option", 16),
                                    e._uU(44, "Mexico"),
                                    e.qZA(),
                                    e.TgZ(45, "mat-option", 16),
                                    e._uU(46, "France"),
                                    e.qZA(),
                                    e.TgZ(47, "mat-option", 16),
                                    e._uU(48, "Germany"),
                                    e.qZA(),
                                    e.TgZ(49, "mat-option", 16),
                                    e._uU(50, "Italy"),
                                    e.qZA()()()(),
                                    e.TgZ(51, "div", 11)(
                                        52,
                                        "mat-form-field",
                                        8
                                    )(53, "mat-label"),
                                    e._uU(54, "ZIP / Postal code"),
                                    e.qZA(),
                                    e._UZ(55, "mat-icon", 9)(56, "input", 17),
                                    e.qZA()()(),
                                    e._UZ(57, "div", 18),
                                    e.TgZ(58, "div", 19)(59, "button", 20),
                                    e._uU(60, "Cancel"),
                                    e.qZA(),
                                    e.TgZ(61, "button", 21),
                                    e._uU(62, " Save "),
                                    e.qZA()()()()),
                                    2 & t &&
                                        (e.xp6(1),
                                        e.Q6J("formGroup", i.planBillingForm),
                                        e.xp6(12),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:user"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "cardHolder"),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:credit-card"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "cardNumber"),
                                        e.xp6(2),
                                        e.Q6J("floatLabel", "always"),
                                        e.xp6(3),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:calendar"
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "formControlName",
                                            "cardExpiration"
                                        )("placeholder", "MM / YY"),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:lock-closed"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "cardCVC"),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:location-marker"
                                        ),
                                        e.xp6(1),
                                        e.Q6J("formControlName", "country"),
                                        e.xp6(1),
                                        e.Q6J("value", "usa"),
                                        e.xp6(2),
                                        e.Q6J("value", "canada"),
                                        e.xp6(2),
                                        e.Q6J("value", "mexico"),
                                        e.xp6(2),
                                        e.Q6J("value", "france"),
                                        e.xp6(2),
                                        e.Q6J("value", "germany"),
                                        e.xp6(2),
                                        e.Q6J("value", "italy"),
                                        e.xp6(6),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_solid:hashtag"
                                        ),
                                        e.xp6(6),
                                        e.Q6J("color", "primary"));
                            },
                            dependencies: [
                                C.lW,
                                m.KE,
                                m.hX,
                                m.qo,
                                x.Hw,
                                w.Nt,
                                D,
                                p.ey,
                                c._Y,
                                c.Fj,
                                c.JJ,
                                c.JL,
                                c.sg,
                                c.u,
                            ],
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                Ge = (() => {
                    class n {
                        constructor(t) {
                            this._formBuilder = t;
                        }
                        ngOnInit() {
                            this.notificationsForm = this._formBuilder.group({
                                communication: [!0],
                                security: [!0],
                                meetups: [!1],
                                comments: [!1],
                                mention: [!0],
                                follow: [!0],
                                inquiry: [!0],
                            });
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(c.QS));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["settings-notifications"]],
                            decls: 61,
                            vars: 16,
                            consts: [
                                [1, "w-full", "max-w-3xl"],
                                [3, "formGroup"],
                                [1, "w-full", "text-xl"],
                                [
                                    1,
                                    "grid",
                                    "grid-cols-1",
                                    "gap-6",
                                    "w-full",
                                    "mt-8",
                                ],
                                [1, "flex", "items-center", "justify-between"],
                                [1, "flex-auto", "cursor-pointer", 3, "click"],
                                [1, "leading-6", "font-medium"],
                                [1, "text-md", "text-secondary"],
                                [1, "ml-2", 3, "color", "formControlName"],
                                ["communication", ""],
                                ["securityToggle", ""],
                                ["meetupsToggle", ""],
                                [1, "my-10", "border-t"],
                                [1, "w-full", "mt-8", "font-medium"],
                                [
                                    1,
                                    "grid",
                                    "grid-cols-1",
                                    "gap-4",
                                    "w-full",
                                    "mt-4",
                                ],
                                [
                                    1,
                                    "flex-auto",
                                    "leading-6",
                                    "cursor-pointer",
                                    3,
                                    "click",
                                ],
                                ["comments", ""],
                                ["mention", ""],
                                ["follow", ""],
                                ["inquiry", ""],
                                [1, "flex", "items-center", "justify-end"],
                                ["mat-stroked-button", "", "type", "button"],
                                [
                                    "mat-flat-button",
                                    "",
                                    "type",
                                    "button",
                                    1,
                                    "ml-4",
                                    3,
                                    "color",
                                ],
                            ],
                            template: function (t, i) {
                                if (1 & t) {
                                    const a = e.EpF();
                                    e.TgZ(0, "div", 0)(1, "form", 1)(
                                        2,
                                        "div",
                                        2
                                    ),
                                        e._uU(3, "Alerts"),
                                        e.qZA(),
                                        e.TgZ(4, "div", 3)(5, "div", 4)(
                                            6,
                                            "div",
                                            5
                                        ),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(12);
                                            return e.KtG(r.toggle());
                                        }),
                                        e.TgZ(7, "div", 6),
                                        e._uU(8, "Communication"),
                                        e.qZA(),
                                        e.TgZ(9, "div", 7),
                                        e._uU(
                                            10,
                                            "Get news, announcements, and product updates."
                                        ),
                                        e.qZA()(),
                                        e._UZ(11, "mat-slide-toggle", 8, 9),
                                        e.qZA(),
                                        e.TgZ(13, "div", 4)(14, "div", 5),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(20);
                                            return e.KtG(r.toggle());
                                        }),
                                        e.TgZ(15, "div", 6),
                                        e._uU(16, "Security"),
                                        e.qZA(),
                                        e.TgZ(17, "div", 7),
                                        e._uU(
                                            18,
                                            " Get important notifications about your account security. "
                                        ),
                                        e.qZA()(),
                                        e._UZ(19, "mat-slide-toggle", 8, 10),
                                        e.qZA(),
                                        e.TgZ(21, "div", 4)(22, "div", 5),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(28);
                                            return e.KtG(r.toggle());
                                        }),
                                        e.TgZ(23, "div", 6),
                                        e._uU(24, "Meetups"),
                                        e.qZA(),
                                        e.TgZ(25, "div", 7),
                                        e._uU(
                                            26,
                                            " Get an email when a Meetup is posted close to my location. "
                                        ),
                                        e.qZA()(),
                                        e._UZ(27, "mat-slide-toggle", 8, 11),
                                        e.qZA()(),
                                        e._UZ(29, "div", 12),
                                        e.TgZ(30, "div", 2),
                                        e._uU(31, "Account Activity"),
                                        e.qZA(),
                                        e.TgZ(32, "div", 13),
                                        e._uU(33, "Email me when:"),
                                        e.qZA(),
                                        e.TgZ(34, "div", 14)(35, "div", 4)(
                                            36,
                                            "div",
                                            15
                                        ),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(39);
                                            return e.KtG(r.toggle());
                                        }),
                                        e._uU(
                                            37,
                                            " someone comments on one of my items "
                                        ),
                                        e.qZA(),
                                        e._UZ(38, "mat-slide-toggle", 8, 16),
                                        e.qZA(),
                                        e.TgZ(40, "div", 4)(41, "div", 15),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(44);
                                            return e.KtG(r.toggle());
                                        }),
                                        e._uU(42, " someone mentions me "),
                                        e.qZA(),
                                        e._UZ(43, "mat-slide-toggle", 8, 17),
                                        e.qZA(),
                                        e.TgZ(45, "div", 4)(46, "div", 15),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(49);
                                            return e.KtG(r.toggle());
                                        }),
                                        e._uU(47, " someone follows me "),
                                        e.qZA(),
                                        e._UZ(48, "mat-slide-toggle", 8, 18),
                                        e.qZA(),
                                        e.TgZ(50, "div", 4)(51, "div", 15),
                                        e.NdJ("click", function () {
                                            e.CHM(a);
                                            const r = e.MAs(54);
                                            return e.KtG(r.toggle());
                                        }),
                                        e._uU(
                                            52,
                                            " someone replies to my job posting "
                                        ),
                                        e.qZA(),
                                        e._UZ(53, "mat-slide-toggle", 8, 19),
                                        e.qZA()(),
                                        e._UZ(55, "div", 12),
                                        e.TgZ(56, "div", 20)(57, "button", 21),
                                        e._uU(58, " Cancel "),
                                        e.qZA(),
                                        e.TgZ(59, "button", 22),
                                        e._uU(60, "Save "),
                                        e.qZA()()()();
                                }
                                2 & t &&
                                    (e.xp6(1),
                                    e.Q6J("formGroup", i.notificationsForm),
                                    e.xp6(10),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "communication"
                                    ),
                                    e.xp6(8),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "security"
                                    ),
                                    e.xp6(8),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "meetups"
                                    ),
                                    e.xp6(11),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "comments"
                                    ),
                                    e.xp6(5),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "mention"
                                    ),
                                    e.xp6(5),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "follow"
                                    ),
                                    e.xp6(5),
                                    e.Q6J("color", "primary")(
                                        "formControlName",
                                        "inquiry"
                                    ),
                                    e.xp6(6),
                                    e.Q6J("color", "primary"));
                            },
                            dependencies: [
                                C.lW,
                                B.Rr,
                                c._Y,
                                c.JJ,
                                c.JL,
                                c.sg,
                                c.u,
                            ],
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        n
                    );
                })();
            function Ne(n, o) {
                if (
                    (1 & n && (e.ynx(0), e._UZ(1, "img", 27), e.BQk()), 2 & n)
                ) {
                    const t = e.oxw().$implicit;
                    e.xp6(1), e.Q6J("src", t.avatar, e.LSH);
                }
            }
            function Le(n, o) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "div", 28),
                        e._uU(2),
                        e.qZA(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = e.oxw().$implicit;
                    e.xp6(2), e.hij(" ", t.name.charAt(0), " ");
                }
            }
            function He(n, o) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "mat-option", 29)(2, "div", 14),
                        e._uU(3),
                        e.qZA(),
                        e.TgZ(4, "div", 30),
                        e._uU(5),
                        e.qZA()(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = o.$implicit;
                    e.xp6(1),
                        e.Q6J("value", t.value),
                        e.xp6(2),
                        e.hij(" ", t.label, " "),
                        e.xp6(2),
                        e.hij(" ", t.description, " ");
                }
            }
            function Ye(n, o) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "div", 9)(2, "div", 10)(3, "div", 11),
                        e.YNc(4, Ne, 2, 1, "ng-container", 12),
                        e.YNc(5, Le, 3, 1, "ng-container", 12),
                        e.qZA(),
                        e.TgZ(6, "div", 13)(7, "div", 14),
                        e._uU(8),
                        e.qZA(),
                        e.TgZ(9, "div", 15),
                        e._uU(10),
                        e.qZA()()(),
                        e.TgZ(11, "div", 16)(12, "div", 17)(
                            13,
                            "mat-form-field",
                            18
                        )(
                            14,
                            "mat-select",
                            19,
                            20
                        )(
                            16,
                            "mat-select-trigger",
                            21
                        )(17, "span"),
                        e._uU(18, "Role:"),
                        e.qZA(),
                        e.TgZ(19, "span", 22),
                        e._uU(20),
                        e.ALo(21, "titlecase"),
                        e.qZA()(),
                        e.YNc(22, He, 6, 3, "ng-container", 23),
                        e.qZA()()(),
                        e.TgZ(23, "div", 24)(24, "button", 25),
                        e._UZ(25, "mat-icon", 26),
                        e.qZA()()()(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = o.$implicit,
                        i = e.MAs(15),
                        a = e.oxw();
                    e.xp6(4),
                        e.Q6J("ngIf", t.avatar),
                        e.xp6(1),
                        e.Q6J("ngIf", !t.avatar),
                        e.xp6(3),
                        e.Oqu(t.name),
                        e.xp6(2),
                        e.Oqu(t.email),
                        e.xp6(4),
                        e.Q6J(
                            "panelClass",
                            "w-72 min-w-72 max-w-72 h-auto max-h-none"
                        )("value", t.role),
                        e.xp6(6),
                        e.Oqu(e.lcZ(21, 9, i.value)),
                        e.xp6(2),
                        e.Q6J("ngForOf", a.roles),
                        e.xp6(3),
                        e.Q6J("svgIcon", "heroicons_outline:trash");
                }
            }
            let Ve = (() => {
                class n {
                    constructor() {}
                    ngOnInit() {
                        (this.members = [
                            {
                                avatar: "assets/images/avatars/male-01.jpg",
                                name: "Dejesus Michael",
                                email: "dejesusmichael@mail.org",
                                role: "admin",
                            },
                            {
                                avatar: "assets/images/avatars/male-03.jpg",
                                name: "Mclaughlin Steele",
                                email: "mclaughlinsteele@mail.me",
                                role: "admin",
                            },
                            {
                                avatar: "assets/images/avatars/female-02.jpg",
                                name: "Laverne Dodson",
                                email: "lavernedodson@mail.ca",
                                role: "write",
                            },
                            {
                                avatar: "assets/images/avatars/female-03.jpg",
                                name: "Trudy Berg",
                                email: "trudyberg@mail.us",
                                role: "read",
                            },
                            {
                                avatar: "assets/images/avatars/male-07.jpg",
                                name: "Lamb Underwood",
                                email: "lambunderwood@mail.me",
                                role: "read",
                            },
                            {
                                avatar: "assets/images/avatars/male-08.jpg",
                                name: "Mcleod Wagner",
                                email: "mcleodwagner@mail.biz",
                                role: "read",
                            },
                            {
                                avatar: "assets/images/avatars/female-07.jpg",
                                name: "Shannon Kennedy",
                                email: "shannonkennedy@mail.ca",
                                role: "read",
                            },
                        ]),
                            (this.roles = [
                                {
                                    label: "Read",
                                    value: "read",
                                    description:
                                        "Can read and clone this repository. Can also open and comment on issues and pull requests.",
                                },
                                {
                                    label: "Write",
                                    value: "write",
                                    description:
                                        "Can read, clone, and push to this repository. Can also manage issues and pull requests.",
                                },
                                {
                                    label: "Admin",
                                    value: "admin",
                                    description:
                                        "Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators.",
                                },
                            ]);
                    }
                    trackByFn(t, i) {
                        return i.id || t;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["settings-team"]],
                        decls: 11,
                        vars: 6,
                        consts: [
                            [1, "w-full", "max-w-3xl"],
                            [1, "w-full"],
                            [
                                1,
                                "amos-mat-no-subscript",
                                "w-full",
                                3,
                                "floatLabel",
                            ],
                            ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"],
                            ["matInput", "", 3, "placeholder"],
                            ["mat-icon-button", "", "matSuffix", ""],
                            [1, "icon-size-5", 3, "svgIcon"],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "mt-8",
                                "divide-y",
                                "border-t",
                                "border-b",
                            ],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [
                                1,
                                "flex",
                                "flex-col",
                                "sm:flex-row",
                                "sm:items-center",
                                "py-6",
                            ],
                            [1, "flex", "items-center"],
                            [
                                1,
                                "flex",
                                "flex-0",
                                "items-center",
                                "justify-center",
                                "w-10",
                                "h-10",
                                "rounded-full",
                                "overflow-hidden",
                            ],
                            [4, "ngIf"],
                            [1, "ml-4"],
                            [1, "font-medium"],
                            [1, "text-secondary"],
                            [
                                1,
                                "flex",
                                "items-center",
                                "mt-4",
                                "sm:mt-0",
                                "sm:ml-auto",
                            ],
                            [1, "order-2", "sm:order-1", "ml-4", "sm:ml-0"],
                            [
                                1,
                                "amos-mat-dense",
                                "amos-mat-no-subscript",
                                "w-32",
                            ],
                            [
                                "disableOptionCentering",
                                "",
                                3,
                                "panelClass",
                                "value",
                            ],
                            ["roleSelect", "matSelect"],
                            [1, "text-md"],
                            [1, "ml-1", "font-medium"],
                            [4, "ngFor", "ngForOf"],
                            [1, "order-1", "sm:order-2", "sm:ml-3"],
                            ["mat-icon-button", ""],
                            [1, "text-hint", 3, "svgIcon"],
                            [
                                "alt",
                                "Contact avatar",
                                1,
                                "object-cover",
                                "w-full",
                                "h-full",
                                3,
                                "src",
                            ],
                            [
                                1,
                                "flex",
                                "items-center",
                                "justify-center",
                                "w-full",
                                "h-full",
                                "rounded-full",
                                "text-lg",
                                "uppercase",
                                "bg-gray-200",
                                "text-gray-600",
                                "dark:bg-gray-700",
                                "dark:text-gray-200",
                            ],
                            [1, "h-auto", "py-4", "leading-none", 3, "value"],
                            [
                                1,
                                "mt-1.5",
                                "text-sm",
                                "whitespace-normal",
                                "leading-normal",
                                "text-secondary",
                            ],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(
                                    2,
                                    "mat-form-field",
                                    2
                                )(3, "mat-label"),
                                e._uU(4, "Add team members"),
                                e.qZA(),
                                e._UZ(5, "mat-icon", 3)(6, "input", 4),
                                e.TgZ(7, "button", 5),
                                e._UZ(8, "mat-icon", 6),
                                e.qZA()()(),
                                e.TgZ(9, "div", 7),
                                e.YNc(10, Ye, 26, 11, "ng-container", 8),
                                e.qZA()()),
                                2 & t &&
                                    (e.xp6(2),
                                    e.Q6J("floatLabel", "always"),
                                    e.xp6(3),
                                    e.Q6J("svgIcon", "heroicons_solid:user"),
                                    e.xp6(1),
                                    e.Q6J("placeholder", "Email address"),
                                    e.xp6(2),
                                    e.Q6J(
                                        "svgIcon",
                                        "heroicons_solid:plus-circle"
                                    ),
                                    e.xp6(2),
                                    e.Q6J("ngForOf", i.members)(
                                        "ngForTrackBy",
                                        i.trackByFn
                                    ));
                        },
                        dependencies: [
                            C.lW,
                            m.KE,
                            m.hX,
                            m.qo,
                            m.R9,
                            x.Hw,
                            w.Nt,
                            D,
                            Ue,
                            p.ey,
                            f.sg,
                            f.O5,
                            f.rS,
                        ],
                        encapsulation: 2,
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const je = ["drawer"],
                Ke = function (n, o) {
                    return {
                        "hover:bg-gray-100 dark:hover:bg-gray-100/10": n,
                        "bg-slate-300/20 dark:bg-hover": o,
                    };
                },
                ze = function (n, o) {
                    return {
                        "text-hint": n,
                        "text-primary dark:text-blue-800": o,
                    };
                },
                We = function (n) {
                    return { "text-primary dark:text-blue-800": n };
                };
            function Xe(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.ynx(0),
                        e.TgZ(1, "div", 19),
                        e.NdJ("click", function () {
                            const s = e.CHM(t).$implicit,
                                r = e.oxw();
                            return e.KtG(r.goToPanel(s.id));
                        }),
                        e._UZ(2, "mat-icon", 20),
                        e.TgZ(3, "div", 21)(4, "div", 22)(5, "div", 23),
                        e._uU(6),
                        e.qZA()(),
                        e.TgZ(7, "div", 24),
                        e._uU(8),
                        e.qZA()()(),
                        e.BQk();
                }
                if (2 & n) {
                    const t = o.$implicit,
                        i = e.oxw();
                    e.xp6(1),
                        e.Q6J(
                            "ngClass",
                            e.WLB(
                                6,
                                Ke,
                                !i.selectedPanel || i.selectedPanel !== t.id,
                                i.selectedPanel && i.selectedPanel === t.id
                            )
                        ),
                        e.xp6(1),
                        e.Q6J(
                            "ngClass",
                            e.WLB(
                                9,
                                ze,
                                !i.selectedPanel || i.selectedPanel !== t.id,
                                i.selectedPanel && i.selectedPanel === t.id
                            )
                        )("svgIcon", t.icon),
                        e.xp6(2),
                        e.Q6J(
                            "ngClass",
                            e.VKq(
                                12,
                                We,
                                i.selectedPanel && i.selectedPanel === t.id
                            )
                        ),
                        e.xp6(2),
                        e.hij(" ", t.title, " "),
                        e.xp6(2),
                        e.hij(" ", t.description, " ");
                }
            }
            function $e(n, o) {
                1 & n && (e.ynx(0), e._UZ(1, "settings-account"), e.BQk());
            }
            function et(n, o) {
                1 & n && (e.ynx(0), e._UZ(1, "settings-security"), e.BQk());
            }
            function tt(n, o) {
                1 & n && (e.ynx(0), e._UZ(1, "settings-plan-billing"), e.BQk());
            }
            function it(n, o) {
                1 & n &&
                    (e.ynx(0), e._UZ(1, "settings-notifications"), e.BQk());
            }
            function nt(n, o) {
                1 & n && (e.ynx(0), e._UZ(1, "settings-team"), e.BQk());
            }
            const at = [
                {
                    path: "",
                    component: (() => {
                        class n {
                            constructor(t, i) {
                                (this._changeDetectorRef = t),
                                    (this._amosMediaWatcherService = i),
                                    (this.drawerMode = "side"),
                                    (this.drawerOpened = !0),
                                    (this.panels = []),
                                    (this.selectedPanel = "account"),
                                    (this._unsubscribeAll = new M.x());
                            }
                            ngOnInit() {
                                (this.panels = [
                                    {
                                        id: "account",
                                        icon: "heroicons_outline:user-circle",
                                        title: "Account",
                                        description:
                                            "Manage your public profile and private information",
                                    },
                                    {
                                        id: "security",
                                        icon: "heroicons_outline:lock-closed",
                                        title: "Security",
                                        description:
                                            "Manage your password and 2-step verification preferences",
                                    },
                                    {
                                        id: "plan-billing",
                                        icon: "heroicons_outline:credit-card",
                                        title: "Billing",
                                        description:
                                            "Manage your payment method and billing information",
                                    },
                                ]),
                                    this._amosMediaWatcherService.onMediaChange$
                                        .pipe((0, y.R)(this._unsubscribeAll))
                                        .subscribe(({ matchingAliases: t }) => {
                                            t.includes("lg")
                                                ? ((this.drawerMode = "side"),
                                                  (this.drawerOpened = !0))
                                                : ((this.drawerMode = "over"),
                                                  (this.drawerOpened = !1)),
                                                this._changeDetectorRef.markForCheck();
                                        });
                            }
                            ngOnDestroy() {
                                this._unsubscribeAll.next(null),
                                    this._unsubscribeAll.complete();
                            }
                            goToPanel(t) {
                                (this.selectedPanel = t),
                                    "over" === this.drawerMode &&
                                        this.drawer.close();
                            }
                            getPanelInfo(t) {
                                return this.panels.find((i) => i.id === t);
                            }
                            trackByFn(t, i) {
                                return i.id || t;
                            }
                        }
                        return (
                            (n.ɵfac = function (t) {
                                return new (t || n)(e.Y36(e.sBO), e.Y36(Fe.T));
                            }),
                            (n.ɵcmp = e.Xpm({
                                type: n,
                                selectors: [["settings"]],
                                viewQuery: function (t, i) {
                                    if ((1 & t && e.Gf(je, 5), 2 & t)) {
                                        let a;
                                        e.iGM((a = e.CRH())) &&
                                            (i.drawer = a.first);
                                    }
                                },
                                decls: 26,
                                vars: 14,
                                consts: [
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "w-full",
                                        "min-w-0",
                                        "sm:absolute",
                                        "sm:inset-0",
                                        "sm:overflow-hidden",
                                    ],
                                    [
                                        1,
                                        "flex-auto",
                                        "sm:h-full",
                                        "bg-transparent",
                                    ],
                                    [
                                        1,
                                        "sm:w-96",
                                        "xl:bg-white/50",
                                        "xl:dark:bg-black/50",
                                        "lg:bg-white/50",
                                        "lg:dark:bg-black/50",
                                        "sm:bg-white",
                                        "sm:dark:bg-black",
                                        "dark:bg-black",
                                        "bg-white",
                                        3,
                                        "autoFocus",
                                        "mode",
                                        "opened",
                                    ],
                                    ["drawer", ""],
                                    [
                                        1,
                                        "flex",
                                        "items-center",
                                        "justify-between",
                                        "m-8",
                                        "mr-6",
                                        "sm:my-20",
                                        "mt-20",
                                    ],
                                    [
                                        1,
                                        "text-4xl",
                                        "sm:ml-20",
                                        "dark:text-white",
                                        "text-black",
                                        "font-extrabold",
                                        "tracking-tight",
                                        "leading-none",
                                    ],
                                    [1, "lg:hidden"],
                                    ["mat-icon-button", "", 3, "click"],
                                    [3, "svgIcon"],
                                    [
                                        1,
                                        "flex",
                                        "flex-col",
                                        "divide-y",
                                        "border-t",
                                        "border-b",
                                    ],
                                    [4, "ngFor", "ngForOf", "ngForTrackBy"],
                                    [1, "flex", "flex-col"],
                                    [
                                        1,
                                        "flex-auto",
                                        "px-6",
                                        "pt-9",
                                        "pb-12",
                                        "md:p-8",
                                        "md:pb-12",
                                        "lg:p-12",
                                    ],
                                    [1, "flex", "items-center"],
                                    [
                                        "mat-icon-button",
                                        "",
                                        1,
                                        "lg:hidden",
                                        "-ml-2",
                                        "mt-10",
                                        3,
                                        "click",
                                    ],
                                    [
                                        1,
                                        "ml-4",
                                        "mt-10",
                                        "lg:ml-0",
                                        "dark:text-white",
                                        "text-black",
                                        "text-3xl",
                                        "font-bold",
                                        "tracking-tight",
                                        "leading-none",
                                    ],
                                    [1, "mt-8"],
                                    [3, "ngSwitch"],
                                    [4, "ngSwitchCase"],
                                    [
                                        1,
                                        "flex",
                                        "px-8",
                                        "py-5",
                                        "cursor-pointer",
                                        3,
                                        "ngClass",
                                        "click",
                                    ],
                                    [3, "ngClass", "svgIcon"],
                                    [1, "ml-3"],
                                    [
                                        1,
                                        "font-medium",
                                        "leading-6",
                                        3,
                                        "ngClass",
                                    ],
                                    [1, ""],
                                    [1, "mt-0.5", "text-secondary"],
                                ],
                                template: function (t, i) {
                                    if (1 & t) {
                                        const a = e.EpF();
                                        e.TgZ(0, "div", 0)(
                                            1,
                                            "mat-drawer-container",
                                            1
                                        )(
                                            2,
                                            "mat-drawer",
                                            2,
                                            3
                                        )(4, "div", 4)(5, "div", 5),
                                            e._uU(6, " Settings "),
                                            e.qZA(),
                                            e.TgZ(7, "div", 6)(8, "button", 7),
                                            e.NdJ("click", function () {
                                                e.CHM(a);
                                                const r = e.MAs(3);
                                                return e.KtG(r.close());
                                            }),
                                            e._UZ(9, "mat-icon", 8),
                                            e.qZA()()(),
                                            e.TgZ(10, "div", 9),
                                            e.YNc(
                                                11,
                                                Xe,
                                                9,
                                                14,
                                                "ng-container",
                                                10
                                            ),
                                            e.qZA()(),
                                            e.TgZ(12, "mat-drawer-content", 11)(
                                                13,
                                                "div",
                                                12
                                            )(14, "div", 13)(15, "button", 14),
                                            e.NdJ("click", function () {
                                                e.CHM(a);
                                                const r = e.MAs(3);
                                                return e.KtG(r.toggle());
                                            }),
                                            e._UZ(16, "mat-icon", 8),
                                            e.qZA(),
                                            e.TgZ(17, "div", 15),
                                            e._uU(18),
                                            e.qZA()(),
                                            e.TgZ(19, "div", 16),
                                            e.ynx(20, 17),
                                            e.YNc(
                                                21,
                                                $e,
                                                2,
                                                0,
                                                "ng-container",
                                                18
                                            ),
                                            e.YNc(
                                                22,
                                                et,
                                                2,
                                                0,
                                                "ng-container",
                                                18
                                            ),
                                            e.YNc(
                                                23,
                                                tt,
                                                2,
                                                0,
                                                "ng-container",
                                                18
                                            ),
                                            e.YNc(
                                                24,
                                                it,
                                                2,
                                                0,
                                                "ng-container",
                                                18
                                            ),
                                            e.YNc(
                                                25,
                                                nt,
                                                2,
                                                0,
                                                "ng-container",
                                                18
                                            ),
                                            e.BQk(),
                                            e.qZA()()()()();
                                    }
                                    2 & t &&
                                        (e.xp6(2),
                                        e.Q6J("autoFocus", !1)(
                                            "mode",
                                            i.drawerMode
                                        )("opened", i.drawerOpened),
                                        e.xp6(7),
                                        e.Q6J("svgIcon", "heroicons_outline:x"),
                                        e.xp6(2),
                                        e.Q6J("ngForOf", i.panels)(
                                            "ngForTrackBy",
                                            i.trackByFn
                                        ),
                                        e.xp6(5),
                                        e.Q6J(
                                            "svgIcon",
                                            "heroicons_outline:dots-horizontal"
                                        ),
                                        e.xp6(2),
                                        e.hij(
                                            " ",
                                            i.getPanelInfo(i.selectedPanel)
                                                .title,
                                            " "
                                        ),
                                        e.xp6(2),
                                        e.Q6J("ngSwitch", i.selectedPanel),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", "account"),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", "security"),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", "plan-billing"),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", "notifications"),
                                        e.xp6(1),
                                        e.Q6J("ngSwitchCase", "team"));
                                },
                                dependencies: [
                                    C.lW,
                                    x.Hw,
                                    I.jA,
                                    I.kh,
                                    I.LW,
                                    f.mk,
                                    f.sg,
                                    f.RF,
                                    f.n9,
                                    Qe,
                                    Ee,
                                    Pe,
                                    Ge,
                                    Ve,
                                ],
                                encapsulation: 2,
                                changeDetection: 0,
                            })),
                            n
                        );
                    })(),
                },
            ];
            let ot = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({
                        imports: [
                            ee.Bz.forChild(at),
                            C.ot,
                            m.lN,
                            x.Ps,
                            w.c,
                            me,
                            De,
                            I.SJ,
                            B.rP,
                            Be.fC,
                            Je.m,
                        ],
                    })),
                    n
                );
            })();
        },
    },
]);
