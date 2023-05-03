"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [668],
    {
        668: (Vt, J, a) => {
            a.r(J), a.d(J, { NotesModule: () => Pt });
            var A = a(2510),
                C = a(4859),
                M = a(6709),
                u = a(5412),
                f = a(9549),
                N = a(7392),
                w = a(4144),
                T = a(5655),
                I = a(3238),
                k = a(3267),
                E = a(8288),
                t = a(4650),
                L = a(4880),
                _ = a(6895);
            function H(n, c) {
                1 & n && t.GkF(0);
            }
            const q = function (n) {
                return { $implicit: n };
            };
            let K = (() => {
                    class n {
                        constructor(e) {
                            (this._amosMediaWatcherService = e),
                                (this.items = []),
                                (this.distributedColumns = []);
                        }
                        ngOnChanges(e) {
                            "columns" in e && this._distributeItems(),
                                "items" in e && this._distributeItems();
                        }
                        ngAfterViewInit() {
                            this._distributeItems();
                        }
                        _distributeItems() {
                            if (0 !== this.items.length) {
                                this.distributedColumns = Array.from(
                                    Array(this.columns),
                                    (e) => ({ items: [] })
                                );
                                for (let e = 0; e < this.items.length; e++)
                                    this.distributedColumns[
                                        e % this.columns
                                    ].items.push(this.items[e]);
                            } else this.distributedColumns = [];
                        }
                    }
                    return (
                        (n.ɵfac = function (e) {
                            return new (e || n)(t.Y36(L.T));
                        }),
                        (n.ɵcmp = t.Xpm({
                            type: n,
                            selectors: [["amos-masonry"]],
                            inputs: {
                                columnsTemplate: "columnsTemplate",
                                columns: "columns",
                                items: "items",
                            },
                            exportAs: ["amosMasonry"],
                            features: [t.TTD],
                            decls: 2,
                            vars: 4,
                            consts: [
                                [1, "flex"],
                                [
                                    4,
                                    "ngTemplateOutlet",
                                    "ngTemplateOutletContext",
                                ],
                            ],
                            template: function (e, o) {
                                1 & e &&
                                    (t.TgZ(0, "div", 0),
                                    t.YNc(1, H, 1, 0, "ng-container", 1),
                                    t.qZA()),
                                    2 & e &&
                                        (t.xp6(1),
                                        t.Q6J(
                                            "ngTemplateOutlet",
                                            o.columnsTemplate
                                        )(
                                            "ngTemplateOutletContext",
                                            t.VKq(2, q, o.distributedColumns)
                                        ));
                            },
                            dependencies: [_.tP],
                            encapsulation: 2,
                            data: { animation: E.L },
                        })),
                        n
                    );
                })(),
                G = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (e) {
                            return new (e || n)();
                        }),
                        (n.ɵmod = t.oAB({ type: n })),
                        (n.ɵinj = t.cJS({ imports: [_.ez] })),
                        n
                    );
                })();
            var j = a(4466);
            let R = (() => {
                class n {
                    constructor() {
                        (this.likes =
                            parseInt(localStorage.getItem("likes")) || 0),
                            (this.dislikes =
                                parseInt(localStorage.getItem("dislikes")) ||
                                0);
                    }
                    like() {
                        this.likes++,
                            localStorage.setItem(
                                "likes",
                                this.likes.toString()
                            );
                    }
                    dislike() {
                        this.dislikes--,
                            localStorage.setItem(
                                "dislikes",
                                this.dislikes.toString()
                            );
                    }
                }
                return (
                    (n.ɵfac = function (e) {
                        return new (e || n)();
                    }),
                    (n.ɵcmp = t.Xpm({
                        type: n,
                        selectors: [["notes"]],
                        decls: 2,
                        vars: 0,
                        consts: [
                            [
                                1,
                                "w-full",
                                "h-15",
                                "flex",
                                "absolute",
                                "bg-neutral-100",
                                "dark:bg-neutral-800",
                                "z-10",
                            ],
                        ],
                        template: function (e, o) {
                            1 & e && t._UZ(0, "div", 0)(1, "router-outlet");
                        },
                        dependencies: [A.lC],
                        encapsulation: 2,
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            var h = a(1135),
                b = a(7579),
                y = a(2722),
                z = a(9841),
                W = a(1884),
                v = a(4004),
                B = a(9646),
                F = a(8372),
                m = a(3900),
                g = a(7323),
                p = a(9306),
                D = a(7495),
                x = a(8505),
                P = a(5698),
                X = a(2843),
                U = a(5840),
                V = a(529);
            let Q = (() => {
                class n {
                    constructor(e) {
                        (this._httpClient = e),
                            (this._labels = new h.X(null)),
                            (this._note = new h.X(null)),
                            (this._notes = new h.X(null));
                    }
                    get labels$() {
                        return this._labels.asObservable();
                    }
                    get notes$() {
                        return this._notes.asObservable();
                    }
                    get Archiveds$() {
                        return this._notes.asObservable();
                    }
                    get note$() {
                        return this._note.asObservable();
                    }
                    getLabels() {
                        return this._httpClient
                            .get("api/apps/notes/labels")
                            .pipe(
                                (0, x.b)((e) => {
                                    this._labels.next(e);
                                })
                            );
                    }
                    addLabel(e) {
                        return this._httpClient
                            .post("api/apps/notes/labels", { title: e })
                            .pipe(
                                (0, x.b)((o) => {
                                    this._labels.next(o);
                                })
                            );
                    }
                    updateLabel(e) {
                        return this._httpClient
                            .patch("api/apps/notes/labels", { label: e })
                            .pipe(
                                (0, x.b)((o) => {
                                    this.getNotes().subscribe(),
                                        this._labels.next(o);
                                })
                            );
                    }
                    deleteLabel(e) {
                        return this._httpClient
                            .delete("api/apps/notes/labels", {
                                params: { id: e },
                            })
                            .pipe(
                                (0, x.b)((o) => {
                                    this.getNotes().subscribe(),
                                        this._labels.next(o);
                                })
                            );
                    }
                    getNotes() {
                        return this._httpClient.get("api/apps/notes/all").pipe(
                            (0, x.b)((e) => {
                                this._notes.next(e);
                            })
                        );
                    }
                    getNoteById(e) {
                        return this._notes.pipe(
                            (0, P.q)(1),
                            (0, v.U)((o) => {
                                const i = o.find((s) => s.id === e) || null;
                                return this._note.next(i), i;
                            }),
                            (0, m.w)((o) =>
                                o
                                    ? (0, B.of)(o)
                                    : (0, X._)(
                                          "Could not found the note with id of " +
                                              e +
                                              "!"
                                      )
                            )
                        );
                    }
                    addTask(e, o) {
                        return this._httpClient
                            .post("api/apps/notes/tasks", { note: e, task: o })
                            .pipe(
                                (0, m.w)(() =>
                                    this.getNotes().pipe(
                                        (0, m.w)(() => this.getNoteById(e.id))
                                    )
                                )
                            );
                    }
                    createNote(e) {
                        return this._httpClient
                            .post("api/apps/notes", { note: e })
                            .pipe(
                                (0, m.w)((o) =>
                                    this.getNotes().pipe(
                                        (0, m.w)(() =>
                                            this.getNoteById(o.id).pipe(
                                                (0, v.U)(() => o)
                                            )
                                        )
                                    )
                                )
                            );
                    }
                    updateNote(e) {
                        const o = (0, U.Z)(e);
                        return (
                            o.labels.length &&
                                (o.labels = o.labels.map((i) => i.id)),
                            this._httpClient
                                .patch("api/apps/notes", { updatedNote: o })
                                .pipe(
                                    (0, x.b)((i) => {
                                        this.getNotes().subscribe();
                                    })
                                )
                        );
                    }
                    deleteNote(e) {
                        return this._httpClient
                            .delete("api/apps/notes", { params: { id: e.id } })
                            .pipe(
                                (0, v.U)(
                                    (o) => (this.getNotes().subscribe(), o)
                                )
                            );
                    }
                }
                return (
                    (n.ɵfac = function (e) {
                        return new (e || n)(t.LFG(V.eN));
                    }),
                    (n.ɵprov = t.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var d = a(4006);
            function tt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "button", 13),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw(2).ngIf,
                                s = t.oxw();
                            return t.KtG(s.removeImage(i));
                        }),
                        t._UZ(2, "mat-icon", 14),
                        t.qZA(),
                        t.BQk();
                }
                2 & n &&
                    (t.xp6(2), t.Q6J("svgIcon", "heroicons_outline:trash"));
            }
            function et(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 8)(2, "div", 9),
                        t.YNc(3, tt, 3, 1, "ng-container", 3),
                        t.qZA(),
                        t._UZ(4, "img", 10),
                        t.TgZ(5, "div", 11)(6, "p", 12),
                        t._uU(7, " Scroll down to explore! "),
                        t.qZA()()(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().ngIf;
                    t.xp6(3),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(1),
                        t.Q6J("src", e.image, t.LSH);
                }
            }
            const nt = function (n) {
                return { "text-secondary line-through": n };
            };
            function ot(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div", 21)(2, "mat-checkbox", 22),
                        t.NdJ("ngModelChange", function (i) {
                            const r = t.CHM(e).$implicit;
                            return t.KtG((r.completed = i));
                        })("change", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(2).ngIf,
                                l = t.oxw();
                            return t.KtG(l.updateTaskOnNote(r, s));
                        }),
                        t.qZA(),
                        t.TgZ(3, "input", 23),
                        t.NdJ("ngModelChange", function (i) {
                            const r = t.CHM(e).$implicit;
                            return t.KtG((r.content = i));
                        })("input", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(2).ngIf,
                                l = t.oxw();
                            return t.KtG(l.updateTaskOnNote(r, s));
                        }),
                        t.qZA(),
                        t.TgZ(4, "mat-icon", 24),
                        t.NdJ("click", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(2).ngIf,
                                l = t.oxw();
                            return t.KtG(l.removeTaskFromNote(r, s));
                        }),
                        t.qZA()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = c.$implicit;
                    t.xp6(2),
                        t.Q6J("color", "primary")("ngModel", e.completed),
                        t.xp6(1),
                        t.Q6J("ngClass", t.VKq(6, nt, e.completed))(
                            "placeholder",
                            "Task"
                        )("ngModel", e.content),
                        t.xp6(1),
                        t.Q6J("svgIcon", "heroicons_solid:x");
                }
            }
            function it(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div", 15),
                        t.YNc(2, ot, 5, 8, "ng-container", 16),
                        t.TgZ(3, "div", 17),
                        t._UZ(4, "mat-icon", 18),
                        t.TgZ(5, "input", 19, 20),
                        t.NdJ("keydown.enter", function () {
                            t.CHM(e);
                            const i = t.MAs(6),
                                s = t.oxw().ngIf;
                            return (
                                t.oxw().addTaskToNote(s, i.value),
                                t.KtG((i.value = ""))
                            );
                        }),
                        t.qZA()()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = t.oxw().ngIf,
                        o = t.oxw();
                    t.xp6(2),
                        t.Q6J("ngForOf", e.tasks)("ngForTrackBy", o.trackByFn),
                        t.xp6(2),
                        t.Q6J("svgIcon", "heroicons_solid:plus"),
                        t.xp6(1),
                        t.Q6J("placeholder", "Add task");
                }
            }
            function st(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div", 25)(2, "button", 26),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw(2);
                            return t.KtG(i.like());
                        }),
                        t._UZ(3, "mat-icon", 27),
                        t.qZA(),
                        t.TgZ(4, "span", 28),
                        t._uU(5),
                        t.qZA(),
                        t.TgZ(6, "button", 29),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw(2);
                            return t.KtG(i.dislike());
                        }),
                        t._UZ(7, "mat-icon", 27),
                        t.qZA(),
                        t.TgZ(8, "span", 30),
                        t._uU(9),
                        t.qZA()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = t.oxw().ngIf;
                    t.xp6(3),
                        t.Q6J("svgIcon", "heroicons_outline:thumb-up"),
                        t.xp6(2),
                        t.Oqu(e.likes || 0),
                        t.xp6(2),
                        t.Q6J("svgIcon", "heroicons_outline:thumb-down"),
                        t.xp6(2),
                        t.Oqu(e.dislikes || 0);
                }
            }
            function ct(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "mat-icon", 34),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw().$implicit,
                                s = t.oxw(2).ngIf,
                                r = t.oxw();
                            return t.KtG(r.toggleLabelOnNote(s, i));
                        }),
                        t.qZA();
                }
                2 & n && t.Q6J("svgIcon", "heroicons_solid:x-circle");
            }
            function rt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 32)(2, "div"),
                        t._uU(3),
                        t.qZA(),
                        t.YNc(4, ct, 1, 1, "mat-icon", 33),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.$implicit,
                        o = t.oxw(2).ngIf;
                    t.xp6(3),
                        t.hij(" ", e.title, " "),
                        t.xp6(1),
                        t.Q6J("ngIf", !o.archived);
                }
            }
            function at(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 31),
                        t.YNc(2, rt, 5, 2, "ng-container", 16),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().ngIf,
                        o = t.oxw();
                    t.xp6(2),
                        t.Q6J("ngForOf", e.labels)("ngForTrackBy", o.trackByFn);
                }
            }
            function lt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 35)(2, "div", 36),
                        t._uU(3),
                        t.TgZ(4, "div", 37),
                        t._UZ(5, "img", 38),
                        t.qZA()()(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().ngIf;
                    t.xp6(3), t.hij(" ", e.price, " ");
                }
            }
            function _t(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div", 39)(2, "button", 40),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw().ngIf,
                                s = t.oxw();
                            return t.KtG(s.createNote(i));
                        }),
                        t._uU(3, " Save "),
                        t.qZA()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = t.oxw().ngIf;
                    t.xp6(2),
                        t.Q6J("color", "primary")(
                            "disabled",
                            !e.title && !e.content
                        );
                }
            }
            function gt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div")(2, "input", 45, 46),
                        t.NdJ("change", function () {
                            t.CHM(e);
                            const i = t.MAs(3),
                                s = t.oxw(2).ngIf,
                                r = t.oxw();
                            return t.KtG(r.uploadImage(s, i.files));
                        }),
                        t.qZA(),
                        t.TgZ(4, "label", 47),
                        t._UZ(5, "mat-icon", 27),
                        t.qZA()(),
                        t.BQk();
                }
                2 & n &&
                    (t.xp6(2),
                    t.Q6J("multiple", !1)("accept", "image/jpeg, image/png"),
                    t.xp6(3),
                    t.Q6J("svgIcon", "heroicons_outline:photograph"));
            }
            function pt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "button", 51),
                        t.NdJ("click", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(4).ngIf,
                                l = t.oxw();
                            return t.KtG(l.toggleLabelOnNote(r, s));
                        }),
                        t.TgZ(2, "span", 17),
                        t._UZ(3, "mat-checkbox", 52),
                        t.TgZ(4, "span", 53),
                        t._uU(5),
                        t.qZA()()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = c.$implicit,
                        o = t.oxw(4).ngIf,
                        i = t.oxw();
                    t.xp6(3),
                        t.Q6J("color", "primary")(
                            "checked",
                            i.isNoteHasLabel(o, e)
                        ),
                        t.xp6(2),
                        t.Oqu(e.title);
                }
            }
            function mt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.YNc(1, pt, 6, 3, "ng-container", 50),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.ngIf;
                    t.xp6(1), t.Q6J("ngForOf", e);
                }
            }
            function dt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "button", 48),
                        t._UZ(2, "mat-icon", 27),
                        t.qZA(),
                        t.TgZ(3, "mat-menu", null, 49),
                        t.YNc(5, mt, 2, 1, "ng-container", 3),
                        t.ALo(6, "async"),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.MAs(4),
                        o = t.oxw(3);
                    t.xp6(1),
                        t.Q6J("matMenuTriggerFor", e),
                        t.xp6(1),
                        t.Q6J("svgIcon", "heroicons_outline:tag"),
                        t.xp6(3),
                        t.Q6J("ngIf", t.lcZ(6, 3, o.labels$));
                }
            }
            function ut(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "button", 13),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw(2).ngIf,
                                s = t.oxw();
                            return t.KtG(s.deleteNote(i));
                        }),
                        t._UZ(2, "mat-icon", 27),
                        t.qZA(),
                        t.BQk();
                }
                2 & n &&
                    (t.xp6(2), t.Q6J("svgIcon", "heroicons_outline:trash"));
            }
            function ft(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "a", 54)(2, "button"),
                        t._UZ(3, "mat-icon", 55),
                        t.qZA()(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw(2).ngIf;
                    t.xp6(1),
                        t.s9C("href", e.image, t.LSH),
                        t.xp6(2),
                        t.Q6J("svgIcon", "heroicons_outline:download");
                }
            }
            function xt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "input", 56),
                        t.NdJ("ngModelChange", function (i) {
                            t.CHM(e);
                            const s = t.oxw(2).ngIf;
                            return t.KtG((s.price = i));
                        })("ngModelChange", function () {
                            t.CHM(e);
                            const i = t.oxw(3);
                            return t.KtG(i.updatePrice());
                        })("input", function () {
                            t.CHM(e);
                            const i = t.oxw(2).ngIf,
                                s = t.oxw();
                            return t.KtG(s.updateNoteDetails(i));
                        }),
                        t.qZA(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = t.oxw(2).ngIf;
                    t.xp6(1), t.Q6J("placeholder", "Price")("ngModel", e.price);
                }
            }
            function ht(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "button", 57),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw(2).ngIf,
                                s = t.oxw();
                            return (
                                s.toggleArchiveOnNote(i), t.KtG(s.updatePfp())
                            );
                        }),
                        t._uU(2, " Sell "),
                        t.qZA(),
                        t.BQk();
                }
            }
            function bt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "button", 58),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const i = t.oxw(2).ngIf,
                                s = t.oxw();
                            return (
                                s.toggleArchiveOnNote(i),
                                t.KtG(s.subtractNotePriceFromUserCoins(i.id))
                            );
                        }),
                        t._uU(2, " Buy "),
                        t.qZA(),
                        t.BQk();
                }
            }
            function vt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 41)(2, "div", 42),
                        t.YNc(3, gt, 6, 3, "ng-container", 3),
                        t.YNc(4, dt, 7, 5, "ng-container", 3),
                        t.YNc(5, ut, 3, 1, "ng-container", 3),
                        t.YNc(6, ft, 4, 2, "ng-container", 3),
                        t.qZA(),
                        t.YNc(7, xt, 2, 2, "ng-container", 3),
                        t.YNc(8, ht, 3, 0, "ng-container", 3),
                        t._UZ(9, "div", 43),
                        t.YNc(10, bt, 3, 0, "ng-container", 3),
                        t.TgZ(11, "button", 44),
                        t._uU(12, " Close "),
                        t.qZA()(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().ngIf;
                    t.xp6(3),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.archived),
                        t.xp6(2),
                        t.Q6J("ngIf", e.archived);
                }
            }
            function Ct(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0, 2),
                        t.YNc(1, et, 8, 2, "ng-container", 3),
                        t.TgZ(2, "div", 4)(3, "div")(4, "input", 5),
                        t.NdJ("ngModelChange", function (i) {
                            const r = t.CHM(e).ngIf;
                            return t.KtG((r.title = i));
                        })("input", function () {
                            const s = t.CHM(e).ngIf,
                                r = t.oxw();
                            return t.KtG(r.updateNoteDetails(s));
                        }),
                        t.qZA()(),
                        t.TgZ(5, "div", 6)(6, "textarea", 7),
                        t.NdJ("ngModelChange", function (i) {
                            const r = t.CHM(e).ngIf;
                            return t.KtG((r.content = i));
                        })("input", function () {
                            const s = t.CHM(e).ngIf,
                                r = t.oxw();
                            return t.KtG(r.updateNoteDetails(s));
                        }),
                        t.qZA()(),
                        t.YNc(7, it, 7, 4, "ng-container", 3),
                        t.YNc(8, st, 10, 4, "ng-container", 3),
                        t.YNc(9, at, 3, 2, "ng-container", 3),
                        t.YNc(10, lt, 6, 1, "ng-container", 3),
                        t.YNc(11, _t, 4, 2, "ng-container", 3),
                        t.YNc(12, vt, 13, 7, "ng-container", 3),
                        t.qZA(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = c.ngIf;
                    t.xp6(1),
                        t.Q6J("ngIf", e.image),
                        t.xp6(3),
                        t.Q6J("placeholder", "Title")("ngModel", e.title),
                        t.xp6(2),
                        t.Q6J("placeholder", "Note")("ngModel", e.content),
                        t.xp6(1),
                        t.Q6J("ngIf", e.tasks),
                        t.xp6(1),
                        t.Q6J("ngIf", e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", e.labels && e.labels.length),
                        t.xp6(1),
                        t.Q6J("ngIf", e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.id),
                        t.xp6(1),
                        t.Q6J("ngIf", e.id);
                }
            }
            let $ = (() => {
                class n {
                    constructor(e, o, i, s, r) {
                        (this._changeDetectorRef = e),
                            (this.userService = o),
                            (this._data = i),
                            (this._notesService = s),
                            (this._matDialogRef = r),
                            (this._labels = g.p),
                            (this._notes = g.$),
                            (this.noteChanged = new b.x()),
                            (this._unsubscribeAll = new b.x()),
                            (this.likes = 0),
                            (this.dislikes = 0),
                            (this.note = i.note),
                            this.userService.user$.subscribe((l) => {
                                (this.user = l), this.handleCoinUpdate();
                            });
                    }
                    scrollToPosition(e, o) {
                        window.scrollTo(e, o);
                    }
                    onScroll() {
                        const e = document.getElementById("my-div"),
                            o = document.getElementById("scroll");
                        e.addEventListener("scroll", () => {
                            e.scrollTop > 0
                                ? o.classList.add("hidden")
                                : o.classList.remove("hidden");
                        });
                    }
                    like() {
                        this.likes++;
                    }
                    dislike() {
                        this.dislikes--;
                    }
                    ngOnInit() {
                        this._data.note.id
                            ? (this._notesService
                                  .getNoteById(this._data.note.id)
                                  .subscribe(),
                              (this.note$ = this._notesService.note$))
                            : (this.note$ = (0, B.of)({
                                  id: null,
                                  title: "",
                                  content: "",
                                  value: " ",
                                  tasks: null,
                                  image: null,
                                  reminder: null,
                                  labels: [],
                                  archived: !1,
                                  user_view: !1,
                                  createdAt: null,
                                  updatedAt: null,
                              })),
                            (this.labels$ = this._notesService.labels$),
                            this.noteChanged
                                .pipe(
                                    (0, y.R)(this._unsubscribeAll),
                                    (0, F.b)(500),
                                    (0, m.w)((e) =>
                                        this._notesService.updateNote(e)
                                    )
                                )
                                .subscribe(() => {
                                    this._changeDetectorRef.markForCheck();
                                });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    createNote(e) {
                        this._notesService
                            .createNote(e)
                            .pipe(
                                (0, v.U)(() => {
                                    this.note$ = this._notesService.note$;
                                })
                            )
                            .subscribe();
                    }
                    uploadImage(e, o) {
                        if (!o.length) return;
                        const s = o[0];
                        !["image/jpeg", "image/png"].includes(s.type) ||
                            this._readAsDataURL(s).then((r) => {
                                (e.image = r), this.noteChanged.next(e);
                            });
                    }
                    removeImage(e) {
                        (e.image = null), this.noteChanged.next(e);
                    }
                    addTasksToNote(e) {
                        e.tasks || (e.tasks = []);
                    }
                    addTaskToNote(e, o) {
                        "" !== o.trim() &&
                            this._notesService.addTask(e, o).subscribe();
                    }
                    removeTaskFromNote(e, o) {
                        (e.tasks = e.tasks.filter((i) => i.id !== o.id)),
                            this.noteChanged.next(e);
                    }
                    updateTaskOnNote(e, o) {
                        o.id && this.noteChanged.next(e);
                    }
                    isNoteHasLabel(e, o) {
                        return !!e.labels.find((i) => i.id === o.id);
                    }
                    toggleLabelOnNote(e, o) {
                        this.isNoteHasLabel(e, o)
                            ? (e.labels = e.labels.filter((i) => i.id !== o.id))
                            : e.labels.push(o),
                            this.noteChanged.next(e);
                    }
                    updatePfp() {
                        this.user.pfp = this.note.archived
                            ? p.E.avatar
                            : "assets/images/avatars/male-15.jpg";
                    }
                    toggleArchiveOnNote(e) {
                        (e.archived = !e.archived),
                            (e.user_view = !0),
                            this.noteChanged.next(e),
                            this._matDialogRef.close();
                    }
                    updateNoteDetails(e) {
                        this.noteChanged.next(e);
                    }
                    deleteNote(e) {
                        this._notesService.deleteNote(e).subscribe((o) => {
                            !o || this._matDialogRef.close();
                        });
                    }
                    trackByFn(e, o) {
                        return o.id || e;
                    }
                    _readAsDataURL(e) {
                        return new Promise((o, i) => {
                            const s = new FileReader();
                            (s.onload = () => {
                                o(s.result);
                            }),
                                (s.onerror = (r) => {
                                    i(r);
                                }),
                                s.readAsDataURL(e);
                        });
                    }
                    createCopy(e) {
                        const o = g.$.find((l) => l.id === e),
                            i = e.split("-");
                        i[3] = "copy";
                        const s = { ...o, id: i.join("-"), archived: !1 },
                            r = g.$.findIndex((l) => l.id === e);
                        return g.$.splice(r + 1, 0, s), console.log(g.$), o;
                    }
                    checkBalanceSufficient(e) {
                        const o = g.$.find((s) => s.id === e);
                        parseInt(o.price) > p.E.coins &&
                            document
                                .getElementById(e + "-image")
                                .classList.add("blur-sm");
                    }
                    deactivateButtonIfBalanceIsInsufficient(e) {
                        const o = g.$.find((s) => s.id === e);
                        parseInt(o.price) > p.E.coins
                            ? ((document.getElementById("buyButton").disabled =
                                  !0),
                              document
                                  .getElementById("blurr")
                                  .classList.add("backdrop-blur-xl"))
                            : (document.getElementById("buyButton").disabled =
                                  !1);
                    }
                    ngAfterViewInit() {
                        this.deactivateButtonIfBalanceIsInsufficient(
                            this.note.id
                        );
                    }
                    subtractNotePriceFromUserCoins(e) {
                        const o = g.$.find((s) => s.id === e);
                        let i = parseInt(o.price);
                        i <= p.E.coins &&
                            ((p.E.coins -= i),
                            (document.getElementById("coins").innerHTML =
                                p.E.coins.toString()),
                            (document.getElementById("coinss").innerHTML =
                                p.E.coins.toString()),
                            p.E.coins - i == 0 &&
                                document
                                    .getElementById("coinsk")
                                    .classList.add("blur-sm"));
                    }
                    handleCoinUpdate() {
                        if (0 === this.user.coins) {
                            const e = document.getElementById("pixel");
                            e && e.classList.add("blur-sm");
                        }
                    }
                }
                return (
                    (n.ɵfac = function (e) {
                        return new (e || n)(
                            t.Y36(t.sBO),
                            t.Y36(D.K),
                            t.Y36(u.WI),
                            t.Y36(Q),
                            t.Y36(u.so)
                        );
                    }),
                    (n.ɵcmp = t.Xpm({
                        type: n,
                        selectors: [["notes-details"]],
                        decls: 3,
                        vars: 3,
                        consts: [
                            [
                                "id",
                                "my-div",
                                1,
                                "flex",
                                "flex-col",
                                "flex-auto",
                                "md:w-160",
                                "md:min-w-160",
                                "md:h-200",
                                "md:max-h-300",
                                "h-140",
                                "-m-6",
                            ],
                            ["id", "my-div-div", 4, "ngIf"],
                            ["id", "my-div-div"],
                            [4, "ngIf"],
                            [1, "m-4"],
                            [
                                1,
                                "w-full",
                                "p-2",
                                "text-2xl",
                                3,
                                "placeholder",
                                "ngModel",
                                "ngModelChange",
                                "input",
                            ],
                            [1, "flex", "w-full", "py-5", "px-2"],
                            [
                                "matTextareaAutosize",
                                "",
                                1,
                                "w-full",
                                3,
                                "placeholder",
                                "ngModel",
                                "ngModelChange",
                                "input",
                            ],
                            [
                                "oncontextmenu",
                                "return false",
                                "id",
                                "xxx",
                                1,
                                "relative",
                                "w-full",
                            ],
                            [1, "absolute", "right-0", "bottom-0", "p-4"],
                            [1, "w-full", "object-cover", 3, "src"],
                            [
                                "id",
                                "scroll",
                                1,
                                "absolute",
                                "left-0",
                                "visible",
                                "right-0",
                                "mx-auto",
                                "justify-center",
                                "-mt-10",
                                "sm:-mt-28",
                                "sm:py-2",
                                "py-1",
                                "px-4",
                                "bg-white/70",
                                "text-black",
                                "rounded-lg",
                                "h-6",
                                "sm:h-8",
                                "sm:w-64",
                                "w-50",
                                "text-center",
                            ],
                            [
                                1,
                                "text-sm",
                                "place-items-center",
                                "font-sm",
                                "sm:font-bold",
                            ],
                            ["mat-icon-button", "", 3, "click"],
                            [1, "text-white", 3, "svgIcon"],
                            [1, "mx-2", "mt-4", "space-y-1.5"],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [1, "flex", "items-center"],
                            [
                                1,
                                "-ml-0.5",
                                "icon-size-5",
                                "text-hint",
                                3,
                                "svgIcon",
                            ],
                            [
                                1,
                                "w-full",
                                "ml-1.5",
                                "px-1",
                                "py-0.5",
                                3,
                                "placeholder",
                                "keydown.enter",
                            ],
                            ["newTaskInput", ""],
                            [1, "group", "flex", "items-center"],
                            [
                                1,
                                "flex",
                                "items-center",
                                3,
                                "color",
                                "ngModel",
                                "ngModelChange",
                                "change",
                            ],
                            [
                                1,
                                "w-full",
                                "px-1",
                                "py-0.5",
                                3,
                                "ngClass",
                                "placeholder",
                                "ngModel",
                                "ngModelChange",
                                "input",
                            ],
                            [
                                1,
                                "hidden",
                                "group-hover:flex",
                                "ml-auto",
                                "icon-size-5",
                                "cursor-pointer",
                                3,
                                "svgIcon",
                                "click",
                            ],
                            [1, "flex", "items-center", "relative", "ml-2"],
                            [1, "text-green-500", "mr-2", 3, "click"],
                            [3, "svgIcon"],
                            [1, "text-xl", "text-green-600", "mr-2"],
                            [1, "text-red-500", "mr-2", 3, "click"],
                            [1, "text-xl", "text-red-600", "mr-2"],
                            [
                                1,
                                "flex",
                                "flex-wrap",
                                "items-center",
                                "mx-1",
                                "mt-6",
                            ],
                            [
                                1,
                                "flex",
                                "items-center",
                                "m-1",
                                "py-0.5",
                                "px-3",
                                "rounded-full",
                                "text-sm",
                                "font-medium",
                                "text-gray-500",
                                "bg-gray-100",
                                "dark:text-gray-300",
                                "dark:bg-gray-700",
                            ],
                            [
                                "class",
                                "ml-1 icon-size-4 cursor-pointer",
                                3,
                                "svgIcon",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                1,
                                "ml-1",
                                "icon-size-4",
                                "cursor-pointer",
                                3,
                                "svgIcon",
                                "click",
                            ],
                            [
                                1,
                                "flex",
                                "items-end",
                                "grid",
                                "flex-wrap",
                                "relative",
                            ],
                            [
                                1,
                                "text-black",
                                "dark:text-white",
                                "mr-10",
                                "place-self-end",
                                "grid",
                                "flex",
                                "self-end",
                                "items-end",
                                "justify-self-end",
                                "justify-end",
                                "place-items-end",
                                "place-content-end",
                                "content-end",
                                "text-3xl",
                                "font-semibold",
                            ],
                            [1, "flex", "-mr-7", "-mt-10", "mb-1.5"],
                            [
                                "src",
                                "/assets/images/logo/coinsoran.svg",
                                "alt",
                                "",
                                1,
                                "w-6",
                                "h-6",
                            ],
                            [1, "flex", "items-center", "justify-end", "mt-4"],
                            [
                                "mat-flat-button",
                                "",
                                3,
                                "color",
                                "disabled",
                                "click",
                            ],
                            [
                                1,
                                "flex",
                                "items-center",
                                "justify-between",
                                "mt-4",
                                "sm:ml-0",
                                "-ml-3",
                            ],
                            [
                                1,
                                "flex",
                                "items-center",
                                "sm:space-x-3",
                                "space-x-0",
                            ],
                            [1, "h-10", "mt-10", "flex"],
                            [
                                "mat-flat-button",
                                "",
                                "matDialogClose",
                                "",
                                1,
                                "-pl-16",
                            ],
                            [
                                "id",
                                "image-file-input",
                                "type",
                                "file",
                                1,
                                "absolute",
                                "h-0",
                                "w-0",
                                "opacity-0",
                                "invisible",
                                "pointer-events-none",
                                3,
                                "multiple",
                                "accept",
                                "change",
                            ],
                            ["imageFileInput", ""],
                            [
                                "for",
                                "image-file-input",
                                "matRipple",
                                "",
                                1,
                                "flex",
                                "items-center",
                                "justify-center",
                                "w-10",
                                "h-10",
                                "rounded-full",
                                "cursor-pointer",
                                "hover:bg-gray-400",
                                "hover:bg-opacity-20",
                                "dark:hover:bg-black",
                                "dark:hover:bg-opacity-5",
                            ],
                            ["mat-icon-button", "", 3, "matMenuTriggerFor"],
                            ["labelsMenu", "matMenu"],
                            [4, "ngFor", "ngForOf"],
                            ["mat-menu-item", "", 3, "click"],
                            [
                                "disableRipple",
                                "",
                                1,
                                "flex",
                                "items-center",
                                "pointer-events-none",
                                3,
                                "color",
                                "checked",
                            ],
                            [1, "ml-1", "leading-5"],
                            ["download", "", 3, "href"],
                            [1, "mt-1", 3, "svgIcon"],
                            [
                                1,
                                "p-2",
                                "text-black",
                                "xl:w-40",
                                "lg:w-40",
                                "md:w-30",
                                "sm:w-20",
                                "w-[54px]",
                                "h-10",
                                "font-semibold",
                                "text-xl",
                                "bg-purple-200",
                                "xl:ml-20",
                                "lg:ml-20",
                                "md:ml-10",
                                "sm:ml-10",
                                "ml-1",
                                "rounded-full",
                                3,
                                "placeholder",
                                "ngModel",
                                "ngModelChange",
                                "input",
                            ],
                            [
                                1,
                                "md:bg-blue-200",
                                "bg-transparent",
                                "md:hover:bg-blue-200",
                                "hover:bg-hover",
                                "font-medium",
                                "text-black",
                                "w-20",
                                "h-10",
                                "sm:ml-0",
                                "ml-2",
                                "rounded-full",
                                3,
                                "click",
                            ],
                            [
                                "id",
                                "buyButton",
                                1,
                                "bg-purple-200",
                                "dark:text-black",
                                "text-black",
                                "font-medium",
                                "hover:bg-purple-100",
                                "hover:ease-in",
                                "duration-300",
                                "w-18",
                                "h-10",
                                "xl:ml-100",
                                "lg:ml-100",
                                "md:ml-100",
                                "sm:ml-60",
                                "ml-40",
                                "rounded-full",
                                3,
                                "click",
                            ],
                        ],
                        template: function (e, o) {
                            1 & e &&
                                (t.TgZ(0, "div", 0),
                                t.YNc(1, Ct, 13, 11, "ng-container", 1),
                                t.ALo(2, "async"),
                                t.qZA()),
                                2 & e &&
                                    (t.xp6(1),
                                    t.Q6J("ngIf", t.lcZ(2, 1, o.note$)));
                        },
                        dependencies: [
                            C.lW,
                            M.oG,
                            u.ZT,
                            N.Hw,
                            T.VK,
                            T.OP,
                            T.p6,
                            I.wG,
                            _.mk,
                            _.sg,
                            _.O5,
                            d.Fj,
                            d.JJ,
                            d.On,
                            _.Ov,
                        ],
                        encapsulation: 2,
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            var Nt = a(9300);
            function Tt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "mat-form-field", 13)(2, "button", 14),
                        t.NdJ("click", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(2);
                            return t.KtG(r.deleteLabel(s.id));
                        }),
                        t._UZ(3, "mat-icon", 9),
                        t.qZA(),
                        t.TgZ(4, "input", 15),
                        t.NdJ("ngModelChange", function (i) {
                            const r = t.CHM(e).$implicit;
                            return t.KtG((r.title = i));
                        })("input", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(2);
                            return t.KtG(r.updateLabel(s));
                        }),
                        t.qZA()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = c.$implicit;
                    t.xp6(3),
                        t.Q6J("svgIcon", "heroicons_solid:trash"),
                        t.xp6(1),
                        t.Q6J("autocomplete", "off")("ngModel", e.title);
                }
            }
            function kt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.YNc(1, Tt, 5, 3, "ng-container", 12),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.ngIf,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", e)("ngForTrackBy", o.trackByFn);
                }
            }
            let yt = (() => {
                class n {
                    constructor(e, o) {
                        (this._changeDetectorRef = e),
                            (this._notesService = o),
                            (this.labelChanged = new b.x()),
                            (this._unsubscribeAll = new b.x());
                    }
                    ngOnInit() {
                        (this.labels$ = this._notesService.labels$),
                            this.labelChanged
                                .pipe(
                                    (0, y.R)(this._unsubscribeAll),
                                    (0, F.b)(500),
                                    (0, Nt.h)((e) => "" !== e.title.trim()),
                                    (0, m.w)((e) =>
                                        this._notesService.updateLabel(e)
                                    )
                                )
                                .subscribe(() => {
                                    this._changeDetectorRef.markForCheck();
                                });
                    }
                    ngOnDestroy() {
                        this._unsubscribeAll.next(null),
                            this._unsubscribeAll.complete();
                    }
                    addLabel(e) {
                        this._notesService.addLabel(e).subscribe();
                    }
                    updateLabel(e) {
                        this.labelChanged.next(e);
                    }
                    deleteLabel(e) {
                        this._notesService.deleteLabel(e).subscribe(() => {
                            this._changeDetectorRef.markForCheck();
                        });
                    }
                    trackByFn(e, o) {
                        return o.id || e;
                    }
                }
                return (
                    (n.ɵfac = function (e) {
                        return new (e || n)(t.Y36(t.sBO), t.Y36(Q));
                    }),
                    (n.ɵcmp = t.Xpm({
                        type: n,
                        selectors: [["notes-labels"]],
                        decls: 14,
                        vars: 10,
                        consts: [
                            [
                                1,
                                "flex",
                                "flex-col",
                                "flex-auto",
                                "w-80",
                                "min-w-80",
                                "p-2",
                                "md:p-4",
                            ],
                            [1, "flex", "items-center", "justify-between"],
                            [1, "text-2xl", "font-semibold"],
                            ["matDialogClose", "", "mat-icon-button", ""],
                            [3, "svgIcon"],
                            [
                                1,
                                "amos-mat-dense",
                                "w-full",
                                "mt-8",
                                3,
                                "floatLabel",
                            ],
                            [
                                "name",
                                "new-label",
                                "matInput",
                                "",
                                3,
                                "autocomplete",
                                "placeholder",
                            ],
                            ["newLabelInput", ""],
                            [
                                "mat-icon-button",
                                "",
                                "matSuffix",
                                "",
                                3,
                                "click",
                            ],
                            [1, "icon-size-5", 3, "svgIcon"],
                            [1, "flex", "flex-col", "mt-4"],
                            [4, "ngIf"],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [1, "amos-mat-dense", "w-full"],
                            [
                                "mat-icon-button",
                                "",
                                "matPrefix",
                                "",
                                3,
                                "click",
                            ],
                            [
                                "required",
                                "",
                                "matInput",
                                "",
                                3,
                                "autocomplete",
                                "ngModel",
                                "ngModelChange",
                                "input",
                            ],
                        ],
                        template: function (e, o) {
                            if (1 & e) {
                                const i = t.EpF();
                                t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                                    t._uU(3, "Edit labels"),
                                    t.qZA(),
                                    t.TgZ(4, "button", 3),
                                    t._UZ(5, "mat-icon", 4),
                                    t.qZA()(),
                                    t.TgZ(6, "mat-form-field", 5),
                                    t._UZ(7, "input", 6, 7),
                                    t.TgZ(9, "button", 8),
                                    t.NdJ("click", function () {
                                        t.CHM(i);
                                        const r = t.MAs(8);
                                        return (
                                            o.addLabel(r.value),
                                            t.KtG((r.value = ""))
                                        );
                                    }),
                                    t._UZ(10, "mat-icon", 9),
                                    t.qZA()(),
                                    t.TgZ(11, "div", 10),
                                    t.YNc(12, kt, 2, 2, "ng-container", 11),
                                    t.ALo(13, "async"),
                                    t.qZA()();
                            }
                            if (2 & e) {
                                const i = t.MAs(8);
                                t.xp6(5),
                                    t.Q6J("svgIcon", "heroicons_outline:x"),
                                    t.xp6(1),
                                    t.Q6J("floatLabel", "always"),
                                    t.xp6(1),
                                    t.Q6J("autocomplete", "off")(
                                        "placeholder",
                                        "Create new label"
                                    ),
                                    t.xp6(2),
                                    t.ekj("invisible", "" === i.value.trim()),
                                    t.xp6(1),
                                    t.Q6J(
                                        "svgIcon",
                                        "heroicons_solid:check-circle"
                                    ),
                                    t.xp6(2),
                                    t.Q6J("ngIf", t.lcZ(13, 8, o.labels$));
                            }
                        },
                        dependencies: [
                            C.lW,
                            u.ZT,
                            f.KE,
                            f.qo,
                            f.R9,
                            N.Hw,
                            w.Nt,
                            _.sg,
                            _.O5,
                            d.Fj,
                            d.JJ,
                            d.Q7,
                            d.On,
                            _.Ov,
                        ],
                        encapsulation: 2,
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const S = function (n, c) {
                return {
                    "bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-400":
                        n,
                    "text-hint hover:bg-hover": c,
                };
            };
            function Zt(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div", 9),
                        t.NdJ("click", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(2);
                            return t.KtG(r.filterByLabel(s.id));
                        }),
                        t._UZ(2, "mat-icon", 30),
                        t.TgZ(3, "div", 31),
                        t._uU(4),
                        t.qZA()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = c.$implicit,
                        o = t.oxw(2);
                    t.xp6(1),
                        t.Q6J(
                            "ngClass",
                            t.WLB(
                                4,
                                S,
                                "label:" + e.id === o.filterStatus,
                                "label:" + e.id !== o.filterStatus
                            )
                        )(
                            "matRippleDisabled",
                            "label:" + e.id === o.filterStatus
                        ),
                        t.xp6(1),
                        t.Q6J("svgIcon", "heroicons_outline:tag"),
                        t.xp6(2),
                        t.hij(" ", e.title, " ");
                }
            }
            function wt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.YNc(1, Zt, 5, 7, "ng-container", 29),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.ngIf,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", e)("ngForTrackBy", o.trackByFn);
                }
            }
            function It(n, c) {
                if (
                    (1 & n && (t.ynx(0), t._UZ(1, "img", 43), t.BQk()), 2 & n)
                ) {
                    const e = t.oxw().$implicit;
                    t.xp6(1), t.Q6J("src", e.image, t.LSH);
                }
            }
            function Qt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 44),
                        t._uU(2),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().$implicit;
                    t.xp6(2), t.hij(" ", e.title, " ");
                }
            }
            function Jt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0), t.TgZ(1, "div"), t._uU(2), t.qZA(), t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().$implicit;
                    t.xp6(1),
                        t.ekj("text-xl", e.content.length < 70),
                        t.xp6(1),
                        t.hij(" ", e.content, " ");
                }
            }
            function At(n, c) {
                1 & n &&
                    (t.ynx(0),
                    t.TgZ(1, "div", 47),
                    t._UZ(2, "div", 48),
                    t.qZA(),
                    t.BQk());
            }
            function Mt(n, c) {
                1 & n && (t.ynx(0), t._UZ(1, "mat-icon", 49), t.BQk()),
                    2 & n &&
                        (t.xp6(1),
                        t.Q6J("svgIcon", "heroicons_solid:check-circle"));
            }
            const Lt = function (n) {
                return { "text-secondary line-through": n };
            };
            function Bt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 15),
                        t.YNc(2, At, 3, 0, "ng-container", 12),
                        t.YNc(3, Mt, 2, 1, "ng-container", 12),
                        t.TgZ(4, "div", 46),
                        t._uU(5),
                        t.qZA()(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.$implicit;
                    t.xp6(2),
                        t.Q6J("ngIf", !e.completed),
                        t.xp6(1),
                        t.Q6J("ngIf", e.completed),
                        t.xp6(1),
                        t.Q6J("ngClass", t.VKq(4, Lt, e.completed)),
                        t.xp6(1),
                        t.hij(" ", e.content, " ");
                }
            }
            function Ft(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 45),
                        t.YNc(2, Bt, 6, 6, "ng-container", 29),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().$implicit,
                        o = t.oxw(5);
                    t.xp6(2),
                        t.Q6J("ngForOf", e.tasks)("ngForTrackBy", o.trackByFn);
                }
            }
            function Dt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 50),
                        t._uU(2),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.$implicit;
                    t.xp6(2), t.hij(" ", e.title, " ");
                }
            }
            function Ut(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 51),
                        t._UZ(2, "mat-icon", 18),
                        t.TgZ(3, "span", 52),
                        t._uU(4),
                        t.qZA(),
                        t._UZ(5, "mat-icon", 18),
                        t.TgZ(6, "span", 53),
                        t._uU(7),
                        t.qZA()(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw().$implicit;
                    t.xp6(2),
                        t.Q6J("svgIcon", "heroicons_outline:thumb-up"),
                        t.xp6(2),
                        t.Oqu(e.likes || 0),
                        t.xp6(1),
                        t.Q6J("svgIcon", "heroicons_outline:thumb-down"),
                        t.xp6(2),
                        t.Oqu(e.dislikes || 0);
                }
            }
            function $t(n, c) {
                if ((1 & n && t._UZ(0, "img", 57), 2 & n)) {
                    const e = t.oxw(2).$implicit;
                    t.Q6J("src", e.pfp, t.LSH);
                }
            }
            function St(n, c) {
                if ((1 & n && t._UZ(0, "img", 58), 2 & n)) {
                    const e = t.oxw(7);
                    t.Q6J("src", e.user.avatar, t.LSH);
                }
            }
            function Ot(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 54),
                        t.YNc(2, $t, 1, 1, "img", 55),
                        t.YNc(3, St, 1, 1, "ng-template", null, 56, t.W1O),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.MAs(4),
                        o = t.oxw().$implicit;
                    t.xp6(2), t.Q6J("ngIf", o.pfp)("ngIfElse", e);
                }
            }
            function Yt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 54),
                        t._UZ(2, "img", 58),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.oxw(6);
                    t.xp6(2), t.Q6J("src", e.user.avatar, t.LSH);
                }
            }
            function Et(n, c) {
                if (1 & n) {
                    const e = t.EpF();
                    t.ynx(0),
                        t.TgZ(1, "div", 35),
                        t.NdJ("click", function () {
                            const s = t.CHM(e).$implicit,
                                r = t.oxw(5);
                            return t.KtG(r.openNoteDialog(s));
                        }),
                        t.YNc(2, It, 2, 1, "ng-container", 12),
                        t.TgZ(3, "div", 36),
                        t.YNc(4, Qt, 3, 1, "ng-container", 12),
                        t.YNc(5, Jt, 3, 3, "ng-container", 12),
                        t.YNc(6, Ft, 3, 2, "ng-container", 12),
                        t.ynx(7),
                        t.TgZ(8, "div", 37),
                        t.YNc(9, Dt, 3, 1, "ng-container", 29),
                        t.qZA(),
                        t.BQk(),
                        t.YNc(10, Ut, 8, 4, "ng-container", 12),
                        t.ynx(11),
                        t.TgZ(12, "div", 38)(13, "div", 39),
                        t._uU(14),
                        t.TgZ(15, "div", 40),
                        t._UZ(16, "img", 41)(17, "img", 42),
                        t.qZA()()(),
                        t.BQk(),
                        t.YNc(18, Ot, 5, 2, "ng-container", 12),
                        t.YNc(19, Yt, 3, 1, "ng-container", 12),
                        t.qZA()(),
                        t.BQk();
                }
                if (2 & n) {
                    const e = c.$implicit,
                        o = t.oxw(5);
                    t.xp6(2),
                        t.Q6J("ngIf", e.image),
                        t.xp6(2),
                        t.Q6J("ngIf", e.title),
                        t.xp6(1),
                        t.Q6J("ngIf", e.content),
                        t.xp6(1),
                        t.Q6J("ngIf", e.tasks),
                        t.xp6(3),
                        t.Q6J("ngForOf", e.labels)("ngForTrackBy", o.trackByFn),
                        t.xp6(1),
                        t.Q6J("ngIf", e.archived),
                        t.xp6(4),
                        t.hij(" ", e.price, " "),
                        t.xp6(4),
                        t.Q6J("ngIf", e.archived),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.archived);
                }
            }
            function Ht(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "div", 34),
                        t.YNc(2, Et, 20, 10, "ng-container", 29),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.$implicit,
                        o = t.oxw(4);
                    t.xp6(2),
                        t.Q6J("ngForOf", e.items)("ngForTrackBy", o.trackByFn);
                }
            }
            function qt(n, c) {
                if ((1 & n && t.YNc(0, Ht, 3, 2, "ng-container", 29), 2 & n)) {
                    const e = c.$implicit,
                        o = t.oxw(3);
                    t.Q6J("ngForOf", e)("ngForTrackBy", o.trackByFn);
                }
            }
            function Kt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.TgZ(1, "amos-masonry", 32),
                        t.YNc(2, qt, 1, 2, "ng-template", null, 33, t.W1O),
                        t.qZA(),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = t.MAs(3),
                        o = t.oxw().ngIf,
                        i = t.oxw();
                    t.xp6(1),
                        t.Q6J("items", o)("columns", i.masonryColumns)(
                            "columnsTemplate",
                            e
                        );
                }
            }
            function Gt(n, c) {
                if (
                    (1 & n &&
                        (t.ynx(0),
                        t.YNc(1, Kt, 4, 3, "ng-container", 26),
                        t.BQk()),
                    2 & n)
                ) {
                    const e = c.ngIf;
                    t.oxw();
                    const o = t.MAs(35);
                    t.xp6(1), t.Q6J("ngIf", e.length)("ngIfElse", o);
                }
            }
            function jt(n, c) {
                1 & n &&
                    (t.TgZ(0, "div", 59)(1, "div", 60),
                    t._uU(2, " Loading... "),
                    t.qZA()());
            }
            function Rt(n, c) {
                1 & n &&
                    (t.TgZ(0, "div", 61),
                    t._UZ(1, "mat-icon", 62),
                    t.TgZ(2, "div", 60),
                    t._uU(3, " There are no notes! "),
                    t.qZA()()),
                    2 & n &&
                        (t.xp6(1),
                        t.Q6J("svgIcon", "heroicons_outline:document"));
            }
            const zt = function (n, c) {
                    return {
                        "bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-400 ":
                            n,
                        "text-hint hover:bg-hover": c,
                    };
                },
                Wt = [
                    {
                        path: "",
                        component: R,
                        children: [
                            {
                                path: "",
                                component: (() => {
                                    class n {
                                        constructor(e, o, i, s, r) {
                                            (this._changeDetectorRef = e),
                                                (this._amosMediaWatcherService =
                                                    o),
                                                (this._matDialog = i),
                                                (this._notesService = s),
                                                (this._userService = r),
                                                (this.drawerMode = "side"),
                                                (this.drawerOpened = !0),
                                                (this.filter$ = new h.X(
                                                    "archived"
                                                )),
                                                (this.searchQuery$ = new h.X(
                                                    null
                                                )),
                                                (this.masonryColumns = 4),
                                                (this._unsubscribeAll =
                                                    new b.x());
                                        }
                                        get filterStatus() {
                                            return this.filter$.value;
                                        }
                                        ngOnInit() {
                                            this._userService.user$
                                                .pipe(
                                                    (0, y.R)(
                                                        this._unsubscribeAll
                                                    )
                                                )
                                                .subscribe((e) => {
                                                    this.user = e;
                                                }),
                                                this._notesService
                                                    .getLabels()
                                                    .subscribe(),
                                                this._notesService
                                                    .getNotes()
                                                    .subscribe(),
                                                (this.labels$ =
                                                    this._notesService.labels$),
                                                (this.notes$ = (0, z.a)([
                                                    this._notesService.notes$,
                                                    this.filter$,
                                                    this.searchQuery$,
                                                ]).pipe(
                                                    (0, W.x)(),
                                                    (0, v.U)(([e, o, i]) => {
                                                        if (!e || !e.length)
                                                            return;
                                                        let s = e;
                                                        i &&
                                                            ((i = i
                                                                .trim()
                                                                .toLowerCase()),
                                                            (s = s.filter(
                                                                (l) =>
                                                                    l.title
                                                                        .toLowerCase()
                                                                        .includes(
                                                                            i
                                                                        ) ||
                                                                    l.content
                                                                        .toLowerCase()
                                                                        .includes(
                                                                            i
                                                                        )
                                                            )));
                                                        const r =
                                                            "archived" === o;
                                                        if (
                                                            ((s = s.filter(
                                                                (l) =>
                                                                    l.archived ===
                                                                    r
                                                            )),
                                                            o.startsWith(
                                                                "label:"
                                                            ))
                                                        ) {
                                                            const l =
                                                                o.split(":")[1];
                                                            s = s.filter(
                                                                (Z) => {
                                                                    const O =
                                                                            "archived" ===
                                                                            o,
                                                                        Y =
                                                                            !!Z.labels &&
                                                                            Z.labels.some(
                                                                                (
                                                                                    Xt
                                                                                ) =>
                                                                                    Xt.id ===
                                                                                    l
                                                                            );
                                                                    return (
                                                                        (O &&
                                                                            Z.archived &&
                                                                            Y) ||
                                                                        (!O &&
                                                                            !Z.archived &&
                                                                            Y)
                                                                    );
                                                                }
                                                            );
                                                        }
                                                        return s;
                                                    })
                                                )),
                                                this._amosMediaWatcherService.onMediaChange$
                                                    .pipe(
                                                        (0, y.R)(
                                                            this._unsubscribeAll
                                                        )
                                                    )
                                                    .subscribe(
                                                        ({
                                                            matchingAliases: e,
                                                        }) => {
                                                            e.includes("lg")
                                                                ? ((this.drawerMode =
                                                                      "side"),
                                                                  (this.drawerOpened =
                                                                      !0))
                                                                : ((this.drawerMode =
                                                                      "over"),
                                                                  (this.drawerOpened =
                                                                      !1)),
                                                                (this.masonryColumns =
                                                                    e.includes(
                                                                        "xl"
                                                                    )
                                                                        ? 5
                                                                        : e.includes(
                                                                              "lg"
                                                                          )
                                                                        ? 4
                                                                        : e.includes(
                                                                              "md"
                                                                          )
                                                                        ? 3
                                                                        : e.includes(
                                                                              "sm"
                                                                          )
                                                                        ? 2
                                                                        : 1),
                                                                this._changeDetectorRef.markForCheck();
                                                        }
                                                    );
                                        }
                                        ngOnDestroy() {
                                            this._unsubscribeAll.next(null),
                                                this._unsubscribeAll.complete();
                                        }
                                        addNewNote() {
                                            this._matDialog.open($, {
                                                autoFocus: !1,
                                                data: { note: {} },
                                            });
                                        }
                                        openEditLabelsDialog() {
                                            this._matDialog.open(yt, {
                                                autoFocus: !1,
                                            });
                                        }
                                        openNoteDialog(e) {
                                            this._matDialog.open($, {
                                                autoFocus: !1,
                                                data: { note: (0, U.Z)(e) },
                                            });
                                        }
                                        filterByArchived() {
                                            this.filter$.next("archived");
                                        }
                                        filterByLabel(e) {
                                            this.filter$.next(`label:${e}`);
                                        }
                                        filterByQuery(e) {
                                            this.searchQuery$.next(e);
                                        }
                                        resetFilter() {
                                            this.filter$.next("notes");
                                        }
                                        trackByFn(e, o) {
                                            return o.id || e;
                                        }
                                    }
                                    return (
                                        (n.ɵfac = function (e) {
                                            return new (e || n)(
                                                t.Y36(t.sBO),
                                                t.Y36(L.T),
                                                t.Y36(u.uw),
                                                t.Y36(Q),
                                                t.Y36(D.K)
                                            );
                                        }),
                                        (n.ɵcmp = t.Xpm({
                                            type: n,
                                            selectors: [["notes-list"]],
                                            decls: 36,
                                            vars: 26,
                                            consts: [
                                                [
                                                    1,
                                                    "absolute",
                                                    "inset-0",
                                                    "flex",
                                                    "flex-col",
                                                    "min-w-0",
                                                    "overflow-hidden",
                                                ],
                                                [
                                                    1,
                                                    "flex-auto",
                                                    "h-full",
                                                    "bg-card",
                                                    "bg-transparent",
                                                    "dark:bg-transparent",
                                                ],
                                                [
                                                    1,
                                                    "w-2/3",
                                                    "sm:w-72",
                                                    "lg:w-56",
                                                    "border-r-0",
                                                    "pt-32",
                                                    "xl:bg-transparent",
                                                    "xl:dark:bg-transparent",
                                                    "lg:bg-transparent",
                                                    "lg:dark:bg-transparent",
                                                    "md:bg-white",
                                                    "md:dark:bg-neutral-800",
                                                    "sm:bg-white",
                                                    "sm:dark:bg-neutral-800",
                                                    "bg-white",
                                                    "dark:bg-zinc-900",
                                                    3,
                                                    "mode",
                                                    "opened",
                                                ],
                                                ["drawer", ""],
                                                [
                                                    1,
                                                    "p-6",
                                                    "lg:py-8",
                                                    "lg:pl-4",
                                                    "lg:pr-0",
                                                ],
                                                [1, "space-y-2"],
                                                [
                                                    "id",
                                                    "mynotes",
                                                    1,
                                                    "relative",
                                                    "flex",
                                                    "items-center",
                                                    "py-2",
                                                    "px-4",
                                                    "font-medium",
                                                    "rounded-xl",
                                                    "cursor-pointer",
                                                    3,
                                                    "ngClass",
                                                    "click",
                                                ],
                                                [
                                                    1,
                                                    "text-purple-600",
                                                    3,
                                                    "svgIcon",
                                                ],
                                                [
                                                    "id",
                                                    "mynotes",
                                                    1,
                                                    "ml-3",
                                                    "leading-5",
                                                    "select-none",
                                                    "font-semibold",
                                                    "text-purple-600",
                                                ],
                                                [
                                                    "matRipple",
                                                    "",
                                                    1,
                                                    "relative",
                                                    "flex",
                                                    "items-center",
                                                    "py-2",
                                                    "px-4",
                                                    "font-medium",
                                                    "rounded-xl",
                                                    "cursor-pointer",
                                                    3,
                                                    "ngClass",
                                                    "matRippleDisabled",
                                                    "click",
                                                ],
                                                [
                                                    1,
                                                    "text-blue-600",
                                                    3,
                                                    "svgIcon",
                                                ],
                                                [
                                                    1,
                                                    "ml-3",
                                                    "leading-5",
                                                    "select-none",
                                                    "font-semibold",
                                                    "text-blue-600",
                                                ],
                                                [4, "ngIf"],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-col",
                                                    "dark:bg-transparent",
                                                    "bg-transparent",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-col",
                                                    "flex-auto",
                                                    "p-6",
                                                    "sm:mt-10",
                                                    "md:mt-10",
                                                    "xl:mt-10",
                                                    "lg:mt-10",
                                                    "mt-18",
                                                    "md:p-8",
                                                ],
                                                [1, "flex", "items-center"],
                                                [
                                                    1,
                                                    "flex",
                                                    "items-center",
                                                    "flex-auto",
                                                ],
                                                [
                                                    "mat-icon-button",
                                                    "",
                                                    1,
                                                    "flex",
                                                    "lg:hidden",
                                                    "-ml-2",
                                                    3,
                                                    "click",
                                                ],
                                                [3, "svgIcon"],
                                                [
                                                    1,
                                                    "amos-mat-rounded",
                                                    "amos-mat-dense",
                                                    "amos-mat-no-subscript",
                                                    "flex-auto",
                                                    "ml-4",
                                                    "lg:ml-0",
                                                    "sm:pr-0",
                                                    "md:pr-0",
                                                    "lg:pr-40",
                                                    "xl:pr-40",
                                                    "pr-0",
                                                ],
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
                                                    3,
                                                    "autocomplete",
                                                    "placeholder",
                                                    "input",
                                                ],
                                                ["searchInput", ""],
                                                [
                                                    "mat-flat-button",
                                                    "",
                                                    1,
                                                    "ml-4",
                                                    "px-1",
                                                    "sm:px-4",
                                                    "min-w-10",
                                                    3,
                                                    "color",
                                                    "click",
                                                ],
                                                [
                                                    1,
                                                    "icon-size-5",
                                                    3,
                                                    "svgIcon",
                                                ],
                                                [
                                                    1,
                                                    "hidden",
                                                    "sm:inline-block",
                                                    "ml-2",
                                                ],
                                                [4, "ngIf", "ngIfElse"],
                                                ["loading", ""],
                                                ["noNotes", ""],
                                                [
                                                    4,
                                                    "ngFor",
                                                    "ngForOf",
                                                    "ngForTrackBy",
                                                ],
                                                [
                                                    1,
                                                    "text-current",
                                                    3,
                                                    "svgIcon",
                                                ],
                                                [
                                                    1,
                                                    "ml-3",
                                                    "leading-5",
                                                    "select-none",
                                                    "text-default",
                                                ],
                                                [
                                                    1,
                                                    "-mx-2",
                                                    "mt-8",
                                                    3,
                                                    "items",
                                                    "columns",
                                                    "columnsTemplate",
                                                ],
                                                ["columnsTemplate", ""],
                                                [
                                                    1,
                                                    "flex-1",
                                                    "px-2",
                                                    "space-y-4",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-col",
                                                    "rounded-2xl",
                                                    "overflow-hidden",
                                                    "cursor-pointer",
                                                    "dark:bg-neutral-900",
                                                    "bg-white",
                                                    3,
                                                    "click",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-auto",
                                                    "flex-col",
                                                    "p-6",
                                                    "space-y-4",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-wrap",
                                                    "items-center",
                                                    "-m-1",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "items-end",
                                                    "flex-wrap",
                                                    "relative",
                                                ],
                                                [
                                                    1,
                                                    "text-black",
                                                    "dark:text-white",
                                                    "place-self-end",
                                                    "ml-[8px]",
                                                    "flex",
                                                    "self-end",
                                                    "items-end",
                                                    "justify-self-end",
                                                    "justify-end",
                                                    "place-items-end",
                                                    "place-content-end",
                                                    "content-end",
                                                    "text-xl",
                                                    "font-semibold",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "relative",
                                                    "mb-1",
                                                    "ml-1",
                                                ],
                                                [
                                                    "src",
                                                    "/assets/images/logo/coinsoran.svg",
                                                    "alt",
                                                    "",
                                                    1,
                                                    "w-5",
                                                    "h-5",
                                                    "dark:hidden",
                                                    "block",
                                                ],
                                                [
                                                    "src",
                                                    "/assets/images/logo/coinsoran.svg",
                                                    "alt",
                                                    "",
                                                    1,
                                                    "w-5",
                                                    "h-5",
                                                    "dark:block",
                                                    "hidden",
                                                ],
                                                [
                                                    "oncontextmenu",
                                                    "return false",
                                                    "id",
                                                    "pixell",
                                                    1,
                                                    "w-max-200",
                                                    "object-cover",
                                                    "max-h-100",
                                                    "blurr",
                                                    3,
                                                    "src",
                                                ],
                                                [
                                                    1,
                                                    "font-semibold",
                                                    "line-clamp-3",
                                                ],
                                                [1, "space-y-1.5"],
                                                [
                                                    1,
                                                    "ml-1.5",
                                                    "leading-5",
                                                    3,
                                                    "ngClass",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "items-center",
                                                    "justify-center",
                                                    "w-5",
                                                    "h-5",
                                                ],
                                                [
                                                    1,
                                                    "w-4",
                                                    "h-4",
                                                    "rounded-xl",
                                                    "border-2",
                                                ],
                                                [
                                                    1,
                                                    "text-hint",
                                                    "icon-size-5",
                                                    3,
                                                    "svgIcon",
                                                ],
                                                [
                                                    1,
                                                    "m-1",
                                                    "py-0.5",
                                                    "px-3",
                                                    "rounded-xl",
                                                    "text-sm",
                                                    "font-medium",
                                                    "text-gray-500",
                                                    "bg-slate-100",
                                                    "dark:text-gray-300",
                                                    "dark:bg-gray-700",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "items-center",
                                                    "relative",
                                                    "ml-2",
                                                ],
                                                [
                                                    1,
                                                    "text-xl",
                                                    "text-green-600",
                                                    "mr-2",
                                                ],
                                                [
                                                    1,
                                                    "text-xl",
                                                    "text-red-600",
                                                    "mr-2",
                                                ],
                                                [
                                                    1,
                                                    "w-20",
                                                    "h-20",
                                                    "grid",
                                                    "place-items-end",
                                                    "absolute",
                                                    "flex",
                                                    "items-center",
                                                    "self-end",
                                                ],
                                                [
                                                    "class",
                                                    "w-1/2 h-1/2 rounded-full -mt-40",
                                                    "alt",
                                                    "User pfp",
                                                    3,
                                                    "src",
                                                    4,
                                                    "ngIf",
                                                    "ngIfElse",
                                                ],
                                                ["showAvatar", ""],
                                                [
                                                    "alt",
                                                    "User pfp",
                                                    1,
                                                    "w-1/2",
                                                    "h-1/2",
                                                    "rounded-full",
                                                    "-mt-40",
                                                    3,
                                                    "src",
                                                ],
                                                [
                                                    "alt",
                                                    "User avatar",
                                                    1,
                                                    "w-1/2",
                                                    "h-1/2",
                                                    "rounded-full",
                                                    "-mt-40",
                                                    3,
                                                    "src",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-auto",
                                                    "flex-col",
                                                    "items-center",
                                                    "justify-center",
                                                    "bg-gray-100",
                                                    "bg-transparent",
                                                    "dark:bg-transparent",
                                                ],
                                                [
                                                    1,
                                                    "mt-4",
                                                    "text-2xl",
                                                    "font-semibold",
                                                    "tracking-tight",
                                                    "text-secondary",
                                                ],
                                                [
                                                    1,
                                                    "flex",
                                                    "flex-auto",
                                                    "flex-col",
                                                    "items-center",
                                                    "justify-center",
                                                    "bg-transparent",
                                                    "dark:bg-transparent",
                                                ],
                                                [
                                                    1,
                                                    "icon-size-24",
                                                    3,
                                                    "svgIcon",
                                                ],
                                            ],
                                            template: function (e, o) {
                                                if (1 & e) {
                                                    const i = t.EpF();
                                                    t.TgZ(0, "div", 0)(
                                                        1,
                                                        "mat-drawer-container",
                                                        1
                                                    )(
                                                        2,
                                                        "mat-drawer",
                                                        2,
                                                        3
                                                    )(4, "div", 4)(5, "div", 5)(
                                                        6,
                                                        "div",
                                                        6
                                                    ),
                                                        t.NdJ(
                                                            "click",
                                                            function () {
                                                                return o.resetFilter();
                                                            }
                                                        ),
                                                        t._UZ(7, "mat-icon", 7),
                                                        t.TgZ(8, "div", 8),
                                                        t._uU(9, " MyNotes "),
                                                        t.qZA()(),
                                                        t.TgZ(10, "div", 9),
                                                        t.NdJ(
                                                            "click",
                                                            function () {
                                                                return o.filterByArchived();
                                                            }
                                                        ),
                                                        t._UZ(
                                                            11,
                                                            "mat-icon",
                                                            10
                                                        ),
                                                        t.TgZ(12, "div", 11),
                                                        t._uU(13, " Notes "),
                                                        t.qZA()(),
                                                        t.YNc(
                                                            14,
                                                            wt,
                                                            2,
                                                            2,
                                                            "ng-container",
                                                            12
                                                        ),
                                                        t.ALo(15, "async"),
                                                        t.qZA()()(),
                                                        t.TgZ(
                                                            16,
                                                            "mat-drawer-content",
                                                            13
                                                        )(17, "div", 14)(
                                                            18,
                                                            "div",
                                                            15
                                                        )(19, "div", 16)(
                                                            20,
                                                            "button",
                                                            17
                                                        ),
                                                        t.NdJ(
                                                            "click",
                                                            function () {
                                                                t.CHM(i);
                                                                const r =
                                                                    t.MAs(3);
                                                                return t.KtG(
                                                                    r.toggle()
                                                                );
                                                            }
                                                        ),
                                                        t._UZ(
                                                            21,
                                                            "mat-icon",
                                                            18
                                                        ),
                                                        t.qZA(),
                                                        t.TgZ(
                                                            22,
                                                            "mat-form-field",
                                                            19
                                                        ),
                                                        t._UZ(
                                                            23,
                                                            "mat-icon",
                                                            20
                                                        ),
                                                        t.TgZ(
                                                            24,
                                                            "input",
                                                            21,
                                                            22
                                                        ),
                                                        t.NdJ(
                                                            "input",
                                                            function () {
                                                                t.CHM(i);
                                                                const r =
                                                                    t.MAs(25);
                                                                return t.KtG(
                                                                    o.filterByQuery(
                                                                        r.value
                                                                    )
                                                                );
                                                            }
                                                        ),
                                                        t.qZA()()(),
                                                        t.TgZ(26, "button", 23),
                                                        t.NdJ(
                                                            "click",
                                                            function () {
                                                                return o.addNewNote();
                                                            }
                                                        ),
                                                        t._UZ(
                                                            27,
                                                            "mat-icon",
                                                            24
                                                        ),
                                                        t.TgZ(28, "span", 25),
                                                        t._uU(29, "New note"),
                                                        t.qZA()()(),
                                                        t.YNc(
                                                            30,
                                                            Gt,
                                                            2,
                                                            2,
                                                            "ng-container",
                                                            26
                                                        ),
                                                        t.ALo(31, "async"),
                                                        t.YNc(
                                                            32,
                                                            jt,
                                                            3,
                                                            0,
                                                            "ng-template",
                                                            null,
                                                            27,
                                                            t.W1O
                                                        ),
                                                        t.YNc(
                                                            34,
                                                            Rt,
                                                            4,
                                                            1,
                                                            "ng-template",
                                                            null,
                                                            28,
                                                            t.W1O
                                                        ),
                                                        t.qZA()()()();
                                                }
                                                if (2 & e) {
                                                    const i = t.MAs(33);
                                                    t.xp6(2),
                                                        t.Q6J(
                                                            "mode",
                                                            o.drawerMode
                                                        )(
                                                            "opened",
                                                            o.drawerOpened
                                                        ),
                                                        t.xp6(4),
                                                        t.Q6J(
                                                            "ngClass",
                                                            t.WLB(
                                                                20,
                                                                zt,
                                                                "notes" ===
                                                                    o.filterStatus,
                                                                "notes" !==
                                                                    o.filterStatus
                                                            )
                                                        ),
                                                        t.xp6(1),
                                                        t.Q6J(
                                                            "svgIcon",
                                                            "heroicons_outline:pencil-alt"
                                                        ),
                                                        t.xp6(3),
                                                        t.Q6J(
                                                            "ngClass",
                                                            t.WLB(
                                                                23,
                                                                S,
                                                                "archived" ===
                                                                    o.filterStatus,
                                                                "archived" !==
                                                                    o.filterStatus
                                                            )
                                                        )(
                                                            "matRippleDisabled",
                                                            "archived" ===
                                                                o.filterStatus
                                                        ),
                                                        t.xp6(1),
                                                        t.Q6J(
                                                            "svgIcon",
                                                            "heroicons_outline:pencil-alt"
                                                        ),
                                                        t.xp6(3),
                                                        t.Q6J(
                                                            "ngIf",
                                                            t.lcZ(
                                                                15,
                                                                16,
                                                                o.labels$
                                                            )
                                                        ),
                                                        t.xp6(7),
                                                        t.Q6J(
                                                            "svgIcon",
                                                            "heroicons_outline:dots-horizontal"
                                                        ),
                                                        t.xp6(2),
                                                        t.Q6J(
                                                            "svgIcon",
                                                            "heroicons_solid:search"
                                                        ),
                                                        t.xp6(1),
                                                        t.Q6J(
                                                            "autocomplete",
                                                            "off"
                                                        )(
                                                            "placeholder",
                                                            "Search notes"
                                                        ),
                                                        t.xp6(2),
                                                        t.Q6J(
                                                            "color",
                                                            "primary"
                                                        ),
                                                        t.xp6(1),
                                                        t.Q6J(
                                                            "svgIcon",
                                                            "heroicons_solid:plus-circle"
                                                        ),
                                                        t.xp6(3),
                                                        t.Q6J(
                                                            "ngIf",
                                                            t.lcZ(
                                                                31,
                                                                18,
                                                                o.notes$
                                                            )
                                                        )("ngIfElse", i);
                                                }
                                            },
                                            dependencies: [
                                                C.lW,
                                                f.KE,
                                                f.qo,
                                                N.Hw,
                                                w.Nt,
                                                I.wG,
                                                k.jA,
                                                k.kh,
                                                k.LW,
                                                K,
                                                _.mk,
                                                _.sg,
                                                _.O5,
                                                _.Ov,
                                            ],
                                            encapsulation: 2,
                                            changeDetection: 0,
                                        })),
                                        n
                                    );
                                })(),
                            },
                        ],
                    },
                ];
            let Pt = (() => {
                class n {}
                return (
                    (n.ɵfac = function (e) {
                        return new (e || n)();
                    }),
                    (n.ɵmod = t.oAB({ type: n })),
                    (n.ɵinj = t.cJS({
                        imports: [
                            A.Bz.forChild(Wt),
                            C.ot,
                            M.p9,
                            u.Is,
                            f.lN,
                            N.Ps,
                            w.c,
                            T.Tx,
                            I.si,
                            k.SJ,
                            G,
                            j.m,
                        ],
                    })),
                    n
                );
            })();
        },
    },
]);
