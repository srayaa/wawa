var __reflect = this && this.__reflect ||
function(t, e, n) {
	t.__class__ = e, n ? n.push(e) : n = [e], t.__types__ = t.__types__ ? n.concat(t.__types__) : n
}, __extends = this && this.__extends ||
function(t, e) {
	function n() {
		this.constructor = t
	}
	for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
	t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
}, egret;
!
function(t) {
	var e = function() {
			function e() {
				t.$error(1014)
			}
			return e.get = function(t) {
				return -1 > t && (t = -1), t > 1 && (t = 1), function(e) {
					return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
				}
			}, e.getPowIn = function(t) {
				return function(e) {
					return Math.pow(e, t)
				}
			}, e.getPowOut = function(t) {
				return function(e) {
					return 1 - Math.pow(1 - e, t)
				}
			}, e.getPowInOut = function(t) {
				return function(e) {
					return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
				}
			}, e.sineIn = function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			}, e.sineOut = function(t) {
				return Math.sin(t * Math.PI / 2)
			}, e.sineInOut = function(t) {
				return -.5 * (Math.cos(Math.PI * t) - 1)
			}, e.getBackIn = function(t) {
				return function(e) {
					return e * e * ((t + 1) * e - t)
				}
			}, e.getBackOut = function(t) {
				return function(e) {
					return --e * e * ((t + 1) * e + t) + 1
				}
			}, e.getBackInOut = function(t) {
				return t *= 1.525, function(e) {
					return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
				}
			}, e.circIn = function(t) {
				return -(Math.sqrt(1 - t * t) - 1)
			}, e.circOut = function(t) {
				return Math.sqrt(1 - --t * t)
			}, e.circInOut = function(t) {
				return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			}, e.bounceIn = function(t) {
				return 1 - e.bounceOut(1 - t)
			}, e.bounceOut = function(t) {
				return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			}, e.bounceInOut = function(t) {
				return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
			}, e.getElasticIn = function(t, e) {
				var n = 2 * Math.PI;
				return function(i) {
					if (0 == i || 1 == i) return i;
					var r = e / n * Math.asin(1 / t);
					return -(t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e))
				}
			}, e.getElasticOut = function(t, e) {
				var n = 2 * Math.PI;
				return function(i) {
					if (0 == i || 1 == i) return i;
					var r = e / n * Math.asin(1 / t);
					return t * Math.pow(2, -10 * i) * Math.sin((i - r) * n / e) + 1
				}
			}, e.getElasticInOut = function(t, e) {
				var n = 2 * Math.PI;
				return function(i) {
					var r = e / n * Math.asin(1 / t);
					return (i *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e)) : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - r) * n / e) * .5 + 1
				}
			}, e
		}();
	e.quadIn = e.getPowIn(2), e.quadOut = e.getPowOut(2), e.quadInOut = e.getPowInOut(2), e.cubicIn = e.getPowIn(3), e.cubicOut = e.getPowOut(3), e.cubicInOut = e.getPowInOut(3), e.quartIn = e.getPowIn(4), e.quartOut = e.getPowOut(4), e.quartInOut = e.getPowInOut(4), e.quintIn = e.getPowIn(5), e.quintOut = e.getPowOut(5), e.quintInOut = e.getPowInOut(5), e.backIn = e.getBackIn(1.7), e.backOut = e.getBackOut(1.7), e.backInOut = e.getBackInOut(1.7), e.elasticIn = e.getElasticIn(1, .3), e.elasticOut = e.getElasticOut(1, .3), e.elasticInOut = e.getElasticInOut(1, .3 * 1.5), t.Ease = e, __reflect(e.prototype, "egret.Ease")
}(egret || (egret = {}));
var egret;
!
function(t) {
	var e = function(e) {
			function n(t, n, i) {
				var r = e.call(this) || this;
				return r._target = null, r._useTicks = !1, r.ignoreGlobalPause = !1, r.loop = !1, r.pluginData = null, r._steps = null, r.paused = !1, r.duration = 0, r._prevPos = -1, r.position = null, r._prevPosition = 0, r._stepPosition = 0, r.passive = !1, r.initialize(t, n, i), r
			}
			return __extends(n, e), n.get = function(t, e, i, r) {
				return void 0 === i && (i = null), void 0 === r && (r = !1), r && n.removeTweens(t), new n(t, e, i)
			}, n.removeTweens = function(t) {
				if (t.tween_count) {
					for (var e = n._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
					t.tween_count = 0
				}
			}, n.pauseTweens = function(e) {
				if (e.tween_count) for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !0)
			}, n.resumeTweens = function(e) {
				if (e.tween_count) for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !1)
			}, n.tick = function(t, e) {
				void 0 === e && (e = !1);
				var i = t - n._lastTime;
				n._lastTime = t;
				for (var r = n._tweens.concat(), s = r.length - 1; s >= 0; s--) {
					var o = r[s];
					e && !o.ignoreGlobalPause || o.paused || o.$tick(o._useTicks ? 1 : i)
				}
				return !1
			}, n._register = function(e, i) {
				var r = e._target,
					s = n._tweens;
				if (i) r && (r.tween_count = r.tween_count > 0 ? r.tween_count + 1 : 1), s.push(e), n._inited || (n._lastTime = t.getTimer(), t.sys.$ticker.$startTick(n.tick, null), n._inited = !0);
				else {
					r && r.tween_count--;
					for (var o = s.length; o--;) if (s[o] == e) return void s.splice(o, 1)
				}
			}, n.removeAllTweens = function() {
				for (var t = n._tweens, e = 0, i = t.length; i > e; e++) {
					var r = t[e];
					r.paused = !0, r._target.tweenjs_count = 0
				}
				t.length = 0
			}, n.prototype.initialize = function(t, e, i) {
				this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && n.removeTweens(t)), this.pluginData = i || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], e && e.paused ? this.paused = !0 : n._register(this, !0), e && null != e.position && this.setPosition(e.position, n.NONE)
			}, n.prototype.setPosition = function(t, e) {
				void 0 === e && (e = 1), 0 > t && (t = 0);
				var n = t,
					i = !1;
				if (n >= this.duration && (this.loop ? n %= this.duration : (n = this.duration, i = !0)), n == this._prevPos) return i;
				i && this.setPaused(!0);
				var r = this._prevPos;
				if (this.position = this._prevPos = n, this._prevPosition = t, this._target && this._steps.length > 0) {
					for (var s = this._steps.length, o = -1, u = 0; s > u && !("step" == this._steps[u].type && (o = u, this._steps[u].t <= n && this._steps[u].t + this._steps[u].d >= n)); u++);
					for (var u = 0; s > u; u++) if ("action" == this._steps[u].type) 0 != e && (this._useTicks ? this._runAction(this._steps[u], n, n) : 1 == e && r > n ? (r != this.duration && this._runAction(this._steps[u], r, this.duration), this._runAction(this._steps[u], 0, n, !0)) : this._runAction(this._steps[u], r, n));
					else if ("step" == this._steps[u].type && o == u) {
						var a = this._steps[o];
						this._updateTargetProps(a, Math.min((this._stepPosition = n - a.t) / a.d, 1))
					}
				}
				return this.dispatchEventWith("change"), i
			}, n.prototype._runAction = function(t, e, n, i) {
				void 0 === i && (i = !1);
				var r = e,
					s = n;
				e > n && (r = n, s = e);
				var o = t.t;
				(o == s || o > r && s > o || i && o == e) && t.f.apply(t.o, t.p)
			}, n.prototype._updateTargetProps = function(t, e) {
				var i, r, s, o, u, a;
				if (t || 1 != e) {
					if (this.passive = !! t.v, this.passive) return;
					t.e && (e = t.e(e, 0, 1, 1)), i = t.p0, r = t.p1
				} else this.passive = !1, i = r = this._curQueueProps;
				for (var p in this._initQueueProps) {
					null == (o = i[p]) && (i[p] = o = this._initQueueProps[p]), null == (u = r[p]) && (r[p] = u = o), s = o == u || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? u : o : o + (u - o) * e;
					var h = !1;
					if (a = n._plugins[p]) for (var c = 0, _ = a.length; _ > c; c++) {
						var f = a[c].tween(this, p, s, i, r, e, !! t && i == r, !t);
						f == n.IGNORE ? h = !0 : s = f
					}
					h || (this._target[p] = s)
				}
			}, n.prototype.setPaused = function(t) {
				return this.paused = t, n._register(this, !t), this
			}, n.prototype._cloneProps = function(t) {
				var e = {};
				for (var n in t) e[n] = t[n];
				return e
			}, n.prototype._addStep = function(t) {
				return t.d > 0 && (t.type = "step", this._steps.push(t), t.t = this.duration, this.duration += t.d), this
			}, n.prototype._appendQueueProps = function(t) {
				var e, i, r, s, o;
				for (var u in t) if (void 0 === this._initQueueProps[u]) {
					if (i = this._target[u], e = n._plugins[u]) for (r = 0, s = e.length; s > r; r++) i = e[r].init(this, u, i);
					this._initQueueProps[u] = this._curQueueProps[u] = void 0 === i ? null : i
				} else i = this._curQueueProps[u];
				for (var u in t) {
					if (i = this._curQueueProps[u], e = n._plugins[u]) for (o = o || {}, r = 0, s = e.length; s > r; r++) e[r].step && e[r].step(this, u, i, t[u], o);
					this._curQueueProps[u] = t[u]
				}
				return o && this._appendQueueProps(o), this._curQueueProps
			}, n.prototype._addAction = function(t) {
				return t.t = this.duration, t.type = "action", this._steps.push(t), this
			}, n.prototype._set = function(t, e) {
				for (var n in t) e[n] = t[n]
			}, n.prototype.wait = function(t, e) {
				if (null == t || 0 >= t) return this;
				var n = this._cloneProps(this._curQueueProps);
				return this._addStep({
					d: t,
					p0: n,
					p1: n,
					v: e
				})
			}, n.prototype.to = function(t, e, n) {
				return void 0 === n && (n = void 0), (isNaN(e) || 0 > e) && (e = 0), this._addStep({
					d: e || 0,
					p0: this._cloneProps(this._curQueueProps),
					e: n,
					p1: this._cloneProps(this._appendQueueProps(t))
				}), this.set(t)
			}, n.prototype.call = function(t, e, n) {
				return void 0 === e && (e = void 0), void 0 === n && (n = void 0), this._addAction({
					f: t,
					p: n ? n : [],
					o: e ? e : this._target
				})
			}, n.prototype.set = function(t, e) {
				return void 0 === e && (e = null), this._appendQueueProps(t), this._addAction({
					f: this._set,
					o: this,
					p: [t, e ? e : this._target]
				})
			}, n.prototype.play = function(t) {
				return t || (t = this), this.call(t.setPaused, t, [!1])
			}, n.prototype.pause = function(t) {
				return t || (t = this), this.call(t.setPaused, t, [!0])
			}, n.prototype.$tick = function(t) {
				this.paused || this.setPosition(this._prevPosition + t)
			}, n
		}(t.EventDispatcher);
	e.NONE = 0, e.LOOP = 1, e.REVERSE = 2, e._tweens = [], e.IGNORE = {}, e._plugins = {}, e._inited = !1, e._lastTime = 0, t.Tween = e, __reflect(e.prototype, "egret.Tween")
}(egret || (egret = {}));
var egret;
!
function(t) {
	var e;
	!
	function(e) {
		function n(e) {
			if ("function" == typeof e) return e;
			var n = t.Ease[e];
			return "function" == typeof n ? n : null
		}
		function i(t, e, n, i) {
			var r = t.prototype;
			r.__meta__ = r.__meta__ || {}, r.__meta__[e] = n, i && (r.__defaultProperty__ = e)
		}
		var r = function(t) {
				function e() {
					var e = t.apply(this, arguments) || this;
					return e.name = "", e
				}
				return __extends(e, t), e
			}(t.EventDispatcher);
		e.BasePath = r, __reflect(r.prototype, "egret.tween.BasePath");
		var s = function(t) {
				function e() {
					var e = t.apply(this, arguments) || this;
					return e.props = void 0, e.duration = 500, e.ease = void 0, e
				}
				return __extends(e, t), e
			}(r);
		e.To = s, __reflect(s.prototype, "egret.tween.To");
		var o = function(t) {
				function e() {
					var e = t.apply(this, arguments) || this;
					return e.duration = 500, e.passive = void 0, e
				}
				return __extends(e, t), e
			}(r);
		e.Wait = o, __reflect(o.prototype, "egret.tween.Wait");
		var u = function(t) {
				function e() {
					var e = t.apply(this, arguments) || this;
					return e.props = void 0, e
				}
				return __extends(e, t), e
			}(r);
		e.Set = u, __reflect(u.prototype, "egret.tween.Set");
		var a = function(t) {
				function e() {
					var e = t.apply(this, arguments) || this;
					return e.delta = 0, e
				}
				return __extends(e, t), e
			}(r);
		e.Tick = a, __reflect(a.prototype, "egret.tween.Tick");
		var p = function(e) {
				function i() {
					return e.call(this) || this
				}
				return __extends(i, e), Object.defineProperty(i.prototype, "props", {
					get: function() {
						return this._props
					},
					set: function(t) {
						this._props = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(i.prototype, "target", {
					get: function() {
						return this._target
					},
					set: function(t) {
						this._target = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(i.prototype, "paths", {
					get: function() {
						return this._paths
					},
					set: function(t) {
						this._paths = t || []
					},
					enumerable: !0,
					configurable: !0
				}), i.prototype.play = function(t) {
					this.tween ? (this.tween.setPaused(!1), void 0 !== t && null !== t && this.tween.setPosition(t)) : this.createTween()
				}, i.prototype.pause = function() {
					this.tween && this.tween.setPaused(!0)
				}, i.prototype.stop = function() {
					this.pause(), this.tween = null
				}, i.prototype.createTween = function() {
					this.tween = t.Tween.get(this._target, this._props), this._paths && this.applyPaths()
				}, i.prototype.applyPaths = function() {
					for (var t = 0; t < this._paths.length; t++) {
						var e = this._paths[t];
						this.applyPath(e)
					}
				}, i.prototype.applyPath = function(t) {
					var e = this;
					t instanceof s ? this.tween.to(t.props, t.duration, n(t.ease)) : t instanceof o ? this.tween.wait(t.duration, t.passive) : t instanceof u ? this.tween.set(t.props) : t instanceof a && this.tween.$tick(t.delta), this.tween.call(function() {
						return e.pathComplete(t)
					})
				}, i.prototype.pathComplete = function(t) {
					t.dispatchEventWith("complete"), this.dispatchEventWith("pathComplete", !1, t);
					var e = this._paths.indexOf(t);
					e >= 0 && e === this._paths.length - 1 && this.dispatchEventWith("complete")
				}, i
			}(t.EventDispatcher);
		e.TweenItem = p, __reflect(p.prototype, "egret.tween.TweenItem"), i(p, "paths", "Array", !0);
		var h = function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.completeCount = 0, e
				}
				return __extends(e, t), Object.defineProperty(e.prototype, "items", {
					get: function() {
						return this._items
					},
					set: function(t) {
						this.completeCount = 0, this.registerEvent(!1), this._items = t, this.registerEvent(!0)
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.registerEvent = function(t) {
					var e = this;
					this._items && this._items.forEach(function(n) {
						t ? n.addEventListener("complete", e.itemComplete, e) : n.removeEventListener("complete", e.itemComplete, e)
					})
				}, e.prototype.play = function(t) {
					if (this._items) for (var e = 0; e < this._items.length; e++) {
						var n = this._items[e];
						n.play(t)
					}
				}, e.prototype.pause = function() {
					if (this._items) for (var t = 0; t < this._items.length; t++) {
						var e = this._items[t];
						e.pause()
					}
				}, e.prototype.stop = function() {
					if (this._items) for (var t = 0; t < this._items.length; t++) {
						var e = this._items[t];
						e.stop()
					}
				}, e.prototype.itemComplete = function(t) {
					var e = t.currentTarget;
					this.completeCount++, this.dispatchEventWith("itemComplete", !1, e), this.completeCount === this.items.length && (this.dispatchEventWith("complete"), this.completeCount = 0)
				}, e
			}(t.EventDispatcher);
		e.TweenGroup = h, __reflect(h.prototype, "egret.tween.TweenGroup"), i(h, "items", "Array", !0)
	}(e = t.tween || (t.tween = {}))
}(egret || (egret = {}));