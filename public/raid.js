/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
var $ = {};
function J() {
  this.B = function(e) {
    for (var f = 0; 24 > f; f++) this[String.fromCharCode(97 + f)] = e[f] || 0;
    0.01 > this.c && (this.c = 0.01);
    e = this.b + this.c + this.e;
    0.18 > e && ((e = 0.18 / e), (this.b *= e), (this.c *= e), (this.e *= e));
  };
}
var W = new function() {
  this.A = new J();
  var e, f, d, g, l, z, K, L, M, A, m, N;
  this.reset = function() {
    var c = this.A;
    g = 100 / (c.f * c.f + 0.001);
    l = 100 / (c.g * c.g + 0.001);
    z = 1 - 0.01 * c.h * c.h * c.h;
    K = 1e-6 * -c.i * c.i * c.i;
    c.a || ((m = 0.5 - c.n / 2), (N = 5e-5 * -c.o));
    L = 0 < c.l ? 1 - 0.9 * c.l * c.l : 1 + 10 * c.l * c.l;
    M = 0;
    A = 1 == c.m ? 0 : 2e4 * (1 - c.m) * (1 - c.m) + 32;
  };
  this.D = function() {
    this.reset();
    var c = this.A;
    e = 1e5 * c.b * c.b;
    f = 1e5 * c.c * c.c;
    d = 1e5 * c.e * c.e + 10;
    return (e + f + d) | 0;
  };
  this.C = function(c, O) {
    var a = this.A,
      P = 1 != a.s || a.v,
      r = 0.1 * a.v * a.v,
      Q = 1 + 3e-4 * a.w,
      n = 0.1 * a.s * a.s * a.s,
      X = 1 + 1e-4 * a.t,
      Y = 1 != a.s,
      Z = a.x * a.x,
      $ = a.g,
      R = a.q || a.r,
      aa = 0.2 * a.r * a.r * a.r,
      D = a.q * a.q * (0 > a.q ? -1020 : 1020),
      S = a.p ? ((2e4 * (1 - a.p) * (1 - a.p)) | 0) + 32 : 0,
      ba = a.d,
      T = a.j / 2,
      ca = 0.01 * a.k * a.k,
      E = a.a,
      F = e,
      da = 1 / e,
      ea = 1 / f,
      fa = 1 / d,
      a = (5 / (1 + 20 * a.u * a.u)) * (0.01 + n);
    0.8 < a && (a = 0.8);
    for (
      var a = 1 - a,
        G = !1,
        U = 0,
        v = 0,
        w = 0,
        B = 0,
        t = 0,
        x,
        u = 0,
        h,
        p = 0,
        s,
        H = 0,
        b,
        V = 0,
        q,
        I = 0,
        C = Array(1024),
        y = Array(32),
        k = C.length;
      k--;

    )
      C[k] = 0;
    for (k = y.length; k--; ) y[k] = 2 * Math.random() - 1;
    for (k = 0; k < O; k++) {
      if (G) return k;
      S && ++V >= S && ((V = 0), this.reset());
      A && ++M >= A && ((A = 0), (g *= L));
      z += K;
      g *= z;
      g > l && ((g = l), 0 < $ && (G = !0));
      h = g;
      0 < T && ((I += ca), (h *= 1 + Math.sin(I) * T));
      h |= 0;
      8 > h && (h = 8);
      E || ((m += N), 0 > m ? (m = 0) : 0.5 < m && (m = 0.5));
      if (++v > F)
        switch (((v = 0), ++U)) {
          case 1:
            F = f;
            break;
          case 2:
            F = d;
        }
      switch (U) {
        case 0:
          w = v * da;
          break;
        case 1:
          w = 1 + 2 * (1 - v * ea) * ba;
          break;
        case 2:
          w = 1 - v * fa;
          break;
        case 3:
          (w = 0), (G = !0);
      }
      R && ((D += aa), (s = D | 0), 0 > s ? (s = -s) : 1023 < s && (s = 1023));
      P && Q && ((r *= Q), 1e-5 > r ? (r = 1e-5) : 0.1 < r && (r = 0.1));
      q = 0;
      for (var ga = 8; ga--; ) {
        p++;
        if (p >= h && ((p %= h), 3 == E))
          for (x = y.length; x--; ) y[x] = 2 * Math.random() - 1;
        switch (E) {
          case 0:
            b = p / h < m ? 0.5 : -0.5;
            break;
          case 1:
            b = 1 - 2 * (p / h);
            break;
          case 2:
            b = p / h;
            b = 0.5 < b ? 6.28318531 * (b - 1) : 6.28318531 * b;
            b =
              0 > b
                ? 1.27323954 * b + 0.405284735 * b * b
                : 1.27323954 * b - 0.405284735 * b * b;
            b = 0 > b ? 0.225 * (b * -b - b) + b : 0.225 * (b * b - b) + b;
            break;
          case 3:
            b = y[Math.abs(((32 * p) / h) | 0)];
        }
        P &&
          ((x = u),
          (n *= X),
          0 > n ? (n = 0) : 0.1 < n && (n = 0.1),
          Y ? ((t += (b - u) * n), (t *= a)) : ((u = b), (t = 0)),
          (u += t),
          (B += u - x),
          (b = B *= 1 - r));
        R && ((C[H % 1024] = b), (b += C[(H - s + 1024) % 1024]), H++);
        q += b;
      }
      q = 0.125 * q * w * Z;
      c[k] = 1 <= q ? 32767 : -1 >= q ? -32768 : (32767 * q) | 0;
    }
    return O;
  };
}();
window.jsfxr = function(e) {
  W.A.B(e);
  var f = W.D();
  e = new Uint8Array(4 * (((f + 1) / 2) | 0) + 44);
  var f = 2 * W.C(new Uint16Array(e.buffer, 44), f),
    d = new Uint32Array(e.buffer, 0, 44);
  d[0] = 1179011410;
  d[1] = f + 36;
  d[2] = 1163280727;
  d[3] = 544501094;
  d[4] = 16;
  d[5] = 65537;
  d[6] = 44100;
  d[7] = 88200;
  d[8] = 1048578;
  d[9] = 1635017060;
  d[10] = f;
  for (var f = f + 44, d = 0, g = "data:audio/wav;base64,"; d < f; d += 3)
    var l = (e[d] << 16) | (e[d + 1] << 8) | e[d + 2],
      g =
        g +
        ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
          l >> 18
        ] +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            (l >> 12) & 63
          ] +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            (l >> 6) & 63
          ] +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            l & 63
          ]);
  d -= f;
  return g.slice(0, g.length - d) + "==".slice(0, d);
};
window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(a) {
    window.setTimeout(a, 1e3 / 60);
  };
$.b = {};
$.h = Math.PI;
$.La = 2 * $.h;
$.b.f = function(a, b) {
  return Math.random() * (b - a) + a;
};
$.b.$a = function(a, b, c, d) {
  return Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
};
$.b.Xc = function(a, b, c, d) {
  var f = $.ha,
    e = $.ia;
  return !(0 > a + c || 0 + f < a || 0 > b + d || 0 + e < b);
};
$.b.Vb = function(a, b, c, d, f, e, g) {
  return !(a + c <= d || a - c >= d + e || b + c <= f || b - c >= f + g);
};
$.b.Ic = function(a, b, c, d) {
  var f = $.d.x,
    e = $.d.y,
    g = $.d.e + 2;
  return !(f <= a - g || f >= a + c + g || e <= b - g || e >= b + d + g);
};
$.b.fb = function(a, b, c, d, f, e) {
  return a >= c && a <= c + f && b >= d && b <= d + e;
};
$.b.qc = function(a, b, c, d) {
  d = 0 >= d ? 1 : d;
  a.beginPath();
  a.arc(b, c, d, 0, $.La, !1);
};
$.b.Sa = function(a, b, c, d, f) {
  $.b.qc(a, b, c, d);
  a.fillStyle = f;
  a.fill();
};
$.b.Lb = function(a, b, c, d, f, e) {
  $.b.qc(a, b, c, d);
  a.lineWidth = e;
  a.strokeStyle = f;
  a.stroke();
};
$.b.lb = function(a, b) {
  a += "";
  return a.length < b ? $.b.lb("0" + a, b) : a;
};
$.b.rc = function(a) {
  var b = Math.floor(a / 60);
  a = Math.floor(a % 60);
  return $.b.lb(b, 2) + ":" + $.b.lb(a, 2);
};
$.b.Pa = function(a) {
  var b = (a + "").split(".");
  a = b[0];
  for (var b = 1 < b.length ? "." + b[1] : "", c = /(\d+)(\d{3})/; c.test(a); )
    a = a.replace(c, "$1,$2");
  return a + b;
};
$.b.yc = function(a) {
  return "undefined" != typeof a;
};
$.Ec = function() {
  var a = $,
    b;
  b = (b = localStorage.getItem("radiusraid")) && JSON.parse(b);
  a.ea = b || {
    mute: 0,
    autofire: 0,
    score: 0,
    level: 0,
    rounds: 0,
    kills: 0,
    bullets: 0,
    powerups: 0,
    time: 0,
  };
};
$.oc = function() {
  localStorage.setItem("radiusraid", JSON.stringify($.ea));
};
$.Lc = function() {
  localStorage.removeItem("radiusraid");
  $.Ec();
};
$.o = {};
$.o.da = {
  shoot: {
    count: 10,
    Ka: [
      [
        2,
        ,
        0.2,
        ,
        0.1753,
        0.64,
        ,
        -0.5261,
        ,
        ,
        ,
        ,
        ,
        0.5522,
        -0.564,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
    ],
  },
  shootAlt: {
    count: 10,
    Ka: [
      [
        0,
        ,
        0.16,
        0.18,
        0.18,
        0.47,
        0.0084,
        -0.26,
        ,
        ,
        ,
        ,
        ,
        0.74,
        -1,
        ,
        -0.76,
        ,
        1,
        ,
        ,
        ,
        ,
        0.15,
      ],
    ],
  },
  hit: {
    count: 10,
    Ka: [
      [
        3,
        ,
        0.0138,
        ,
        0.2701,
        0.4935,
        ,
        -0.6881,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
      [
        0,
        ,
        0.0639,
        ,
        0.2425,
        0.7582,
        ,
        -0.6217,
        ,
        ,
        ,
        ,
        ,
        0.4039,
        ,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
      [
        3,
        ,
        0.0948,
        ,
        0.2116,
        0.7188,
        ,
        -0.6372,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        1,
        ,
        ,
        0.2236,
        ,
        0.25,
      ],
    ],
  },
  explosion: {
    count: 5,
    Ka: [
      [
        3,
        ,
        0.1164,
        0.88,
        0.37,
        0.06,
        ,
        0.1599,
        ,
        ,
        ,
        -0.0846,
        0.6485,
        ,
        ,
        ,
        0.3963,
        -0.0946,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
      [
        3,
        ,
        0.2958,
        0.3173,
        0.3093,
        0.0665,
        ,
        0.1334,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
    ],
  },
  explosionAlt: {
    count: 5,
    Ka: [
      [
        3,
        ,
        0.15,
        0.7523,
        0.398,
        0.15,
        ,
        -0.18,
        ,
        0.39,
        0.53,
        -0.3428,
        0.6918,
        ,
        ,
        0.5792,
        0.6,
        0.56,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
    ],
  },
  takingDamage: {
    count: 5,
    Ka: [
      [
        3,
        ,
        0.1606,
        0.5988,
        0.2957,
        0.1157,
        ,
        -0.3921,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        0.3225,
        -0.2522,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
      [
        3,
        ,
        0.1726,
        0.2496,
        0.2116,
        0.0623,
        ,
        -0.2096,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        0.2665,
        -0.1459,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
      [
        3,
        ,
        0.1645,
        0.7236,
        0.3402,
        0.0317,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.25,
      ],
    ],
  },
  death: {
    count: 1,
    Ka: [
      [
        3,
        ,
        0.51,
        ,
        1,
        0.1372,
        ,
        0.02,
        0.1,
        ,
        ,
        ,
        0.89,
        0.7751,
        ,
        ,
        -0.16,
        0.32,
        1,
        0.3999,
        0.81,
        ,
        0.1999,
        0.15,
      ],
    ],
  },
  powerup: {
    count: 3,
    Ka: [
      [
        0,
        ,
        0.01,
        ,
        0.4384,
        0.2,
        ,
        0.12,
        0.28,
        1,
        0.65,
        ,
        ,
        0.0419,
        ,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.4,
      ],
    ],
  },
  levelup: {
    count: 2,
    Ka: [
      [
        2,
        1,
        0.01,
        ,
        0.84,
        0.19,
        ,
        ,
        ,
        0.62,
        0.7,
        ,
        ,
        -0.7248,
        0.8522,
        ,
        ,
        ,
        1,
        ,
        ,
        ,
        ,
        0.45,
      ],
    ],
  },
  hover: {
    count: 10,
    Ka: [
      [
        0,
        0.08,
        0.18,
        ,
        ,
        0.65,
        ,
        1,
        1,
        ,
        ,
        0.94,
        1,
        ,
        ,
        ,
        -0.3,
        1,
        1,
        ,
        ,
        0.3,
        0.5,
        0.35,
      ],
    ],
  },
  click: {
    count: 5,
    Ka: [[3, , 0.18, , , 1, , -1, -1, , , , , , , , , , 1, , , 0.64, , 0.35]],
  },
};
$.o.pa = [
  {
    value: 5,
    speed: 1.5,
    k: 1,
    e: 15,
    g: 180,
    Ib: 1,
    Ya: function() {
      this.direction =
        "top" == this.start
          ? $.h / 2
          : "right" == this.start
          ? -$.h
          : "bottom" == this.start
          ? -$.h / 2
          : 0;
    },
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      this.aa = Math.cos(this.direction) * a;
      this.q = Math.sin(this.direction) * a;
    },
  },
  {
    value: 10,
    speed: 1.5,
    k: 2,
    e: 15,
    g: 120,
    Ib: 1,
    Ya: function() {
      var a = Math.floor($.b.f(0, 2));
      this.direction =
        "top" == this.start
          ? a
            ? $.h / 2 + $.h / 4
            : $.h / 2 - $.h / 4
          : "right" == this.start
          ? a
            ? -$.h + $.h / 4
            : -$.h - $.h / 4
          : "bottom" == this.start
          ? a
            ? -$.h / 2 + $.h / 4
            : -$.h / 2 - $.h / 4
          : a
          ? $.h / 4
          : -$.h / 4;
    },
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      this.aa = Math.cos(this.direction) * a;
      this.q = Math.sin(this.direction) * a;
    },
  },
  {
    value: 15,
    speed: 1.5,
    k: 2,
    e: 20,
    g: 330,
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = Math.atan2($.d.y - this.y, $.d.x - this.x);
      this.aa = Math.cos(b) * a;
      this.q = Math.sin(b) * a;
    },
  },
  {
    value: 20,
    speed: 0.5,
    k: 3,
    e: 50,
    g: 210,
    pb: 1,
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = Math.atan2($.d.y - this.y, $.d.x - this.x);
      this.aa = Math.cos(b) * a;
      this.q = Math.sin(b) * a;
    },
    dc: function() {
      if (this.pb)
        for (var a = 0; 4 > a; a++) {
          var b = $.nc(this.type);
          b.e = 20;
          b.pb = 0;
          b.speed = 1;
          b.k = 1;
          b.value = 5;
          b.x = this.x;
          b.y = this.y;
          0 == a
            ? (b.x -= 45)
            : 1 == a
            ? (b.x += 45)
            : (b.y = 2 == a ? b.y - 45 : b.y + 45);
          $.pa.push(b);
        }
    },
  },
  {
    value: 25,
    speed: 2,
    k: 4,
    e: 20,
    g: 30,
    Ib: 1,
    Ya: function() {
      this.direction =
        "top" == this.start
          ? $.h / 2
          : "right" == this.start
          ? -$.h
          : "bottom" == this.start
          ? -$.h / 2
          : 0;
    },
    wa: function() {
      var a = this.speed * $.b.f(1, 2);
      $.qa && (a = this.speed / $.sa);
      this.direction += $.b.f(-0.15, 0.15);
      this.aa = Math.cos(this.direction) * a;
      this.q = Math.sin(this.direction) * a;
    },
  },
  {
    value: 30,
    speed: 1,
    k: 3,
    e: 20,
    g: 0,
    m: 0,
    ja: 30,
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = Math.atan2($.d.y - this.y, $.d.x - this.x);
      this.aa = Math.cos(b) * a;
      this.q = Math.sin(b) * a;
    },
  },
  {
    value: 35,
    speed: 0.25,
    k: 8,
    e: 80,
    g: 150,
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = Math.atan2($.d.y - this.y, $.d.x - this.x);
      this.aa = Math.cos(b) * a;
      this.q = Math.sin(b) * a;
    },
  },
  {
    value: 40,
    speed: 2.5,
    k: 1,
    e: 15,
    g: 300,
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = Math.atan2($.d.y - this.y, $.d.x - this.x),
        b = b + 1 * Math.cos($.fa / 50);
      this.aa = Math.cos(b) * a;
      this.q = Math.sin(b) * a;
    },
  },
  {
    value: 45,
    speed: 1.5,
    xc: 0.1,
    k: 6,
    e: 20,
    g: 0,
    m: 0,
    ja: 100,
    wa: function() {
      var a = this.speed,
        b = this.xc;
      $.qa && ((a = this.speed / $.sa), (b = this.xc / $.sa));
      var c = $.d.x - this.x,
        d = $.d.y - this.y,
        f = Math.atan2(d, c);
      200 < Math.sqrt(c * c + d * d)
        ? ((this.aa = Math.cos(f) * a),
          (this.q = Math.sin(f) * a),
          (this.fillStyle =
            "hsla(" + this.g + ", " + this.m + "%, " + this.ja + "%, 0.1)"),
          (this.strokeStyle =
            "hsla(" + this.g + ", " + this.m + "%, " + this.ja + "%, 1)"))
        : ((this.aa += $.b.f(-0.25, 0.25)),
          (this.q += $.b.f(-0.25, 0.25)),
          (this.e += b * $.j),
          (a = $.b.f(0, 360)),
          (lightness = $.b.f(50, 80)),
          (this.fillStyle = "hsla(" + a + ", 100%, " + lightness + "%, 0.2)"),
          (this.strokeStyle = "hsla(" + a + ", 100%, " + lightness + "%, 1)"));
    },
  },
  {
    value: 50,
    speed: 0.5,
    Ab: 0.015,
    k: 2,
    e: 20,
    g: 60,
    Ya: function() {
      var a = this.x - $.d.x,
        b = this.y - $.d.y;
      this.zb = Math.atan2(b, a);
      this.$a = Math.sqrt(a * a + b * b);
      0.5 < Math.random() && (this.Ab = -this.Ab);
    },
    wa: function() {
      var a = this.speed,
        b = this.Ab;
      $.qa && ((a = this.speed / $.sa), (b = this.Ab / $.sa));
      this.$a -= a * $.j;
      this.zb += b * $.j;
      this.aa = ($.d.x + Math.cos(this.zb) * this.$a - this.x) / 50;
      this.q = ($.d.y + Math.sin(this.zb) * this.$a - this.y) / 50;
    },
  },
  {
    value: 55,
    speed: 1,
    k: 3,
    e: 45,
    g: 0,
    pb: 1,
    Kb: 0,
    hd: 250,
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = Math.atan2($.d.y - this.y, $.d.x - this.x),
        b = b + 1 * Math.cos($.fa / 50);
      this.aa = Math.cos(b) * a;
      this.q = Math.sin(b) * a;
      this.pb &&
        (this.Kb < this.hd
          ? (this.Kb += $.j)
          : ((this.Kb = 0),
            (a = $.nc(this.type)),
            (a.e = 20),
            (a.pb = 0),
            (a.speed = 3),
            (a.k = 1),
            (a.value = 30),
            (a.x = this.x),
            (a.y = this.y),
            $.pa.push(a)));
    },
  },
  {
    value: 60,
    speed: 1.5,
    k: 10,
    e: 30,
    g: 90,
    Ya: function() {
      this.od = $.b.f(50, $.ha - 50);
      this.pd = $.b.f(50, $.ia - 50);
    },
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      var b = this.od - this.x,
        c = this.pd - this.y,
        d = Math.atan2(c, b);
      Math.sqrt(b * b + c * c) > this.speed
        ? ((this.aa = Math.cos(d) * a), (this.q = Math.sin(d) * a))
        : (this.q = this.aa = 0);
    },
  },
  {
    value: 65,
    speed: 6,
    k: 1,
    e: 5,
    g: 0,
    Ib: 1,
    Ya: function() {
      this.e = $.b.f(15, 35);
      this.speed = $.b.f(3, 8);
      if (0.5 < Math.random())
        this.direction =
          "top" == this.start
            ? $.h / 2
            : "right" == this.start
            ? -$.h
            : "bottom" == this.start
            ? -$.h / 2
            : 0;
      else {
        var a = Math.floor($.b.f(0, 2));
        this.direction =
          "top" == this.start
            ? a
              ? $.h / 2 + $.h / 4
              : $.h / 2 - $.h / 4
            : "right" == this.start
            ? a
              ? -$.h + $.h / 4
              : -$.h - $.h / 4
            : "bottom" == this.start
            ? a
              ? -$.h / 2 + $.h / 4
              : -$.h / 2 - $.h / 4
            : a
            ? $.h / 4
            : -$.h / 4;
      }
    },
    wa: function() {
      var a = this.speed;
      $.qa && (a = this.speed / $.sa);
      this.aa = Math.cos(this.direction) * a;
      this.q = Math.sin(this.direction) * a;
      this.g += 10;
      this.ja = 50;
      this.fillStyle = "hsla(" + this.g + ", 100%, " + this.ja + "%, 0.2)";
      this.strokeStyle = "hsla(" + this.g + ", 100%, " + this.ja + "%, 1)";
    },
  },
];
$.o.cb = [];
for (var h = 0; h < $.o.pa.length; h++) {
  for (var l = [], q = 0; q < h + 1; q++) {
    var r = q == h ? Math.floor(18.75 * (h + 1)) : 25 * (h + 1),
      r = 0 == h ? 25 : r;
    l.push(r);
  }
  $.o.cb.push({ Ta: 10 + 7 * (h + 1), ab: l });
}
$.o.ka = [
  { title: "HEALTH PACK", g: 0, m: 0, ja: 100 },
  { title: "SLOW ENEMIES", g: 200, m: 0, ja: 100 },
  { title: "FAST SHOT", g: 100, m: 100, ja: 60 },
  { title: "TRIPLE SHOT", g: 200, m: 100, ja: 60 },
  { title: "PIERCE SHOT", g: 0, m: 100, ja: 60 },
];
$.o.zc = {
  1: [[, , 1, , 0], [, 1, 1, , 0], [, , 1, , 0], [, , 1, , 0], [1, 1, 1, 1, 1]],
  2: [
    [1, 1, 1, 1, 0],
    [, , , , 1],
    [, 1, 1, 1, 0],
    [1, , , , 0],
    [1, 1, 1, 1, 1],
  ],
  3: [
    [1, 1, 1, 1, 0],
    [, , , , 1],
    [, 1, 1, 1, 1],
    [, , , , 1],
    [1, 1, 1, 1, 0],
  ],
  4: [
    [1, , , 1, 0],
    [1, , , 1, 0],
    [1, 1, 1, 1, 1],
    [, , , 1, 0],
    [, , , 1, 0],
  ],
  5: [
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, 1, 1, 1, 0],
    [, , , , 1],
    [1, 1, 1, 1, 0],
  ],
  6: [
    [, 1, 1, 1, 0],
    [1, , , , 0],
    [1, 1, 1, 1, 0],
    [1, , , , 1],
    [, 1, 1, 1, 0],
  ],
  7: [[1, 1, 1, 1, 1], [, , , , 1], [, , , 1, 0], [, , 1, , 0], [, , 1, , 0]],
  8: [
    [, 1, 1, 1, 0],
    [1, , , , 1],
    [, 1, 1, 1, 0],
    [1, , , , 1],
    [, 1, 1, 1, 0],
  ],
  9: [
    [, 1, 1, 1, 0],
    [1, , , , 1],
    [, 1, 1, 1, 1],
    [, , , , 1],
    [, 1, 1, 1, 0],
  ],
  0: [[, 1, 1, 1, 0], [1, , , , 1], [1, , , , 1], [1, , , , 1], [, 1, 1, 1, 0]],
  A: [
    [1, 1, 1, 1, 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
    [1, , , , 1],
    [1, , , , 1],
  ],
  B: [
    [1, 1, 1, 1, 0],
    [1, , , 1, 0],
    [1, 1, 1, 1, 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
  ],
  C: [
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, , , , 0],
    [1, , , , 0],
    [1, 1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, , 0],
    [1, , , 1, 0],
    [1, , , , 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, 1, 1, , 0],
    [1, , , , 0],
    [1, 1, 1, 1, 1],
  ],
  F: [
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, 1, 1, , 0],
    [1, , , , 0],
    [1, , , , 0],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, , 1, 1, 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
  ],
  H: [[1, , , , 1], [1, , , , 1], [1, 1, 1, 1, 1], [1, , , , 1], [1, , , , 1]],
  I: [
    [1, 1, 1, 1, 1],
    [, , 1, , 0],
    [, , 1, , 0],
    [, , 1, , 0],
    [1, 1, 1, 1, 1],
  ],
  J: [[, , , , 1], [, , , , 1], [, , , , 1], [1, , , , 1], [1, 1, 1, 1, 1]],
  K: [
    [1, , , 1, 0],
    [1, , 1, , 0],
    [1, 1, 1, , 0],
    [1, , , 1, 0],
    [1, , , , 1],
  ],
  L: [[1, , , , 0], [1, , , , 0], [1, , , , 0], [1, , , , 0], [1, 1, 1, 1, 1]],
  M: [[1, , , , 1], [1, 1, , 1, 1], [1, , 1, , 1], [1, , , , 1], [1, , , , 1]],
  N: [[1, , , , 1], [1, 1, , , 1], [1, , 1, , 1], [1, , , 1, 1], [1, , , , 1]],
  O: [
    [1, 1, 1, 1, 1],
    [1, , , , 1],
    [1, , , , 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
  ],
  P: [
    [1, 1, 1, 1, 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, , , , 0],
  ],
  Q: [
    [1, 1, 1, 1, 0],
    [1, , , 1, 0],
    [1, , , 1, 0],
    [1, , , 1, 0],
    [1, 1, 1, 1, 1],
  ],
  R: [
    [1, 1, 1, 1, 1],
    [1, , , , 1],
    [1, 1, 1, 1, 1],
    [1, , , 1, 0],
    [1, , , , 1],
  ],
  S: [
    [1, 1, 1, 1, 1],
    [1, , , , 0],
    [1, 1, 1, 1, 1],
    [, , , , 1],
    [1, 1, 1, 1, 1],
  ],
  T: [[1, 1, 1, 1, 1], [, , 1, , 0], [, , 1, , 0], [, , 1, , 0], [, , 1, , 0]],
  U: [[1, , , , 1], [1, , , , 1], [1, , , , 1], [1, , , , 1], [1, 1, 1, 1, 1]],
  V: [[1, , , , 1], [1, , , , 1], [1, , , , 1], [, 1, , 1, 0], [, , 1, , 0]],
  W: [[1, , , , 1], [1, , , , 1], [1, , 1, , 1], [1, 1, , 1, 1], [1, , , , 1]],
  X: [[1, , , , 1], [, 1, , 1, 0], [, , 1, , 0], [, 1, , 1, 0], [1, , , , 1]],
  Y: [[1, , , , 1], [1, , , , 1], [1, 1, 1, 1, 1], [, , 1, , 0], [, , 1, , 0]],
  Z: [
    [1, 1, 1, 1, 1],
    [, , , 1, 0],
    [, , 1, , 0],
    [, 1, , , 0],
    [1, 1, 1, 1, 1],
  ],
  " ": [[, , , , 0], [, , , , 0], [, , , , 0], [, , , , 0], [, , , , 0]],
  ",": [[, , , , 0], [, , , , 0], [, , , , 0], [, , 1, , 0], [, , 1, , 0]],
  "+": [[, , , , 0], [, , 1, , 0], [, 1, 1, 1, 0], [, , 1, , 0], [, , , , 0]],
  "/": [[, , , , 1], [, , , 1, 0], [, , 1, , 0], [, 1, , , 0], [1, , , , 0]],
  ":": [[, , , , 0], [, , 1, , 0], [, , , , 0], [, , 1, , 0], [, , , , 0]],
  "@": [
    [1, 1, 1, 1, 1],
    [, , , , 1],
    [1, 1, 1, , 1],
    [1, , 1, , 1],
    [1, 1, 1, 1, 1],
  ],
};
$.da = {
  nb: {},
  lc: [],
  play: function(a) {
    if (!$.sb) {
      var b = $.da.nb[a],
        b =
          1 < b.length
            ? $.da.nb[a][Math.floor($.b.f(0, b.length))]
            : $.da.nb[a][0];
      b.Cc[b.fa].play();
      b.fa < b.count - 1 ? b.fa++ : (b.fa = 0);
    }
  },
};
for (var v in $.o.da)
  ($.da.nb[v] = []),
    $.o.da[v].Ka.forEach(function(a, b) {
      $.da.nb[v].push({ fa: 0, count: $.o.da[v].count, Cc: [] });
      for (var c = 0; c < $.o.da[v].count; c++) {
        var d = new Audio();
        d.src = jsfxr(a);
        $.da.lc.push(d);
        $.da.nb[v][b].Cc.push(d);
      }
    });
$.kd = function(a) {
  for (var b = a.text.length, c = 0; c < b; c++)
    for (var d = $.o.zc[a.text.charAt(c)] || $.o.zc.unknown, f = 0; 5 > f; f++)
      for (var e = 0; 5 > e; e++)
        1 === d[f][e] &&
          a.v.rect(
            a.x + e * a.scale + (5 * a.scale + a.r) * c,
            a.y + f * a.scale,
            a.scale,
            a.scale
          );
};
$.text = function(a) {
  var b = 5 * a.scale,
    c = a.text.split("\n"),
    d = c.slice(0),
    f = c.length,
    d = d.sort(function(a, b) {
      return b.length - a.length;
    })[0],
    d = d.length * b + (d.length - 1) * a.r,
    e = f * b + (f - 1) * a.$,
    g = a.x,
    n = a.y,
    s = a.x + d,
    t = a.y + e;
  "center" == a.t
    ? ((g = a.x - d / 2), (s = a.x + d / 2))
    : "right" == a.t && ((g = a.x - d), (s = a.x));
  "center" == a.u
    ? ((n = a.y - e / 2), (t = a.y + e / 2))
    : "bottom" == a.u && ((n = a.y - e), (t = a.y));
  var x = g + d / 2,
    y = n + e / 2;
  if (a.i)
    for (var p = 0; p < f; p++) {
      var u = c[p],
        w = u.length * b + (u.length - 1) * a.r,
        m = a.x,
        k = a.y + (b + a.$) * p;
      "center" == a.t ? (m = a.x - w / 2) : "right" == a.t && (m = a.x - w);
      "center" == a.u ? (k -= e / 2) : "bottom" == a.u && (k -= e);
      a.ca && ((m = Math.floor(m)), (k = Math.floor(k)));
      $.kd({ v: a.v, x: m, y: k, text: u, r: a.r, scale: a.scale });
    }
  return {
    la: g,
    na: n,
    sc: x,
    tc: y,
    ra: s,
    ga: t,
    width: d,
    height: e,
  };
};
$.Rb = function() {
  this.x = $.ha / 2;
  this.y = $.ia / 2;
  this.q = this.aa = 0;
  this.Oa = 4;
  this.Oa = 6;
  this.direction = 0;
  this.yb = 0.5;
  this.e = 10;
  this.k = 1;
  this.Mb = 0;
  this.fillStyle = "#fff";
  this.s = {
    Fb: 5,
    rb: 5,
    Fc: 0.3,
    count: 1,
    Aa: {
      size: 15,
      lineWidth: 2,
      cc: 1,
      speed: 10,
      ub: 0,
      strokeStyle: "#fff",
    },
    Eb: 0,
  };
};
$.Rb.prototype.update = function() {
  if (0 < this.k) {
    $.keys.state.Nb
      ? ((this.q -= this.yb * $.j), this.q < -this.Oa && (this.q = -this.Oa))
      : $.keys.state.oa &&
        ((this.q += this.yb * $.j), this.q > this.Oa && (this.q = this.Oa));
    $.keys.state.left
      ? ((this.aa -= this.yb * $.j), this.aa < -this.Oa && (this.aa = -this.Oa))
      : $.keys.state.right &&
        ((this.aa += this.yb * $.j), this.aa > this.Oa && (this.aa = this.Oa));
    this.q *= 0.9;
    this.aa *= 0.9;
    this.x += this.aa * $.j;
    this.y += this.q * $.j;
    this.x >= $.ha - this.e && (this.x = $.ha - this.e);
    this.x <= this.e && (this.x = this.e);
    this.y >= $.ia - this.e && (this.y = $.ia - this.e);
    this.y <= this.e && (this.y = this.e);
    this.direction = Math.atan2($.w.y - this.y, $.w.x - this.x);
    if (this.s.rb < this.s.Fb) this.s.rb += $.j;
    else if ($.ob || (!$.ob && $.w.oa)) {
      $.da.play("shoot");
      (0 < $.p[2] || 0 < $.p[3] || 0 < $.p[4]) && $.da.play("shootAlt");
      this.s.rb -= this.s.Fb;
      this.s.Eb = 6;
      if (1 < this.s.count)
        var a = -this.s.Fc / 2,
          b = this.s.Fc / (this.s.count - 1);
      else b = a = 0;
      for (
        var c = this.x + Math.cos(this.direction) * (this.e + this.s.Aa.size),
          d = this.y + Math.sin(this.direction) * (this.e + this.s.Aa.size),
          f = 0;
        f < this.s.count;
        f++
      ) {
        $.Zb++;
        var e = this.s.Aa.strokeStyle;
        if (0 < $.p[2] || 0 < $.p[3] || 0 < $.p[4])
          (e = []),
            0 < $.p[2] &&
              e.push(
                "hsl(" +
                  $.o.ka[2].g +
                  ", " +
                  $.o.ka[2].m +
                  "%, " +
                  $.o.ka[2].ja +
                  "%)"
              ),
            0 < $.p[3] &&
              e.push(
                "hsl(" +
                  $.o.ka[3].g +
                  ", " +
                  $.o.ka[3].m +
                  "%, " +
                  $.o.ka[3].ja +
                  "%)"
              ),
            0 < $.p[4] &&
              e.push(
                "hsl(" +
                  $.o.ka[4].g +
                  ", " +
                  $.o.ka[4].m +
                  "%, " +
                  $.o.ka[4].ja +
                  "%)"
              ),
            (e = e[Math.floor($.b.f(0, e.length))]);
        $.Ca.push(
          new $.Pb({
            x: c,
            y: d,
            speed: this.s.Aa.speed,
            direction: this.direction + a + f * b,
            cc: this.s.Aa.cc,
            size: this.s.Aa.size,
            lineWidth: this.s.Aa.lineWidth,
            strokeStyle: e,
            ub: this.s.Aa.ub,
          })
        );
      }
    }
    this.Mb = 0;
    for (a = $.pa.length; a--; )
      (b = $.pa[a]),
        b.Fa &&
          $.b.$a(this.x, this.y, b.x, b.y) <= this.e + b.e &&
          ($.ta.push(
            new $.Ma({
              x: this.x,
              y: this.y,
              count: 2,
              Za: 0,
              Na: 0.85,
              Xa: 2,
              Wa: 15,
              Qa: 0,
              Va: $.La,
              g: 0,
              m: 0,
            })
          ),
          (this.Mb = 1),
          (this.k -= 0.0075),
          ($.ba.l = 3),
          0 == Math.floor($.fa) % 5 && $.da.play("takingDamage"));
  }
};
$.Rb.prototype.i = function() {
  if (0 < this.k) {
    if (this.Mb) {
      var a = "hsla(0, 0%, " + $.b.f(0, 100) + "%, 1)";
      $.a.fillStyle =
        "hsla(0, 0%, " + $.b.f(0, 100) + "%, " + $.b.f(0.01, 0.15) + ")";
      $.a.fillRect(-$.screen.x, -$.screen.y, $.c, $.ch);
    } else
      0 < this.s.Eb
        ? ((this.s.Eb -= $.j),
          (a = "hsla(" + $.b.f(0, 359) + ", 100%, " + $.b.f(20, 80) + "%, 1)"))
        : (a = this.fillStyle);
    $.a.save();
    $.a.translate(this.x, this.y);
    $.a.rotate(this.direction - $.h / 4);
    $.a.fillStyle = a;
    $.a.fillRect(0, 0, this.e, this.e);
    $.a.restore();
    $.a.save();
    $.a.translate(this.x, this.y);
    $.a.rotate(this.direction - $.h / 4 + $.La / 3);
    $.a.fillStyle = a;
    $.a.fillRect(0, 0, this.e, this.e);
    $.a.restore();
    $.a.save();
    $.a.translate(this.x, this.y);
    $.a.rotate(this.direction - $.h / 4 - $.La / 3);
    $.a.fillStyle = a;
    $.a.fillRect(0, 0, this.e, this.e);
    $.a.restore();
    $.b.Sa($.a, this.x, this.y, this.e - 3, a);
  }
};
$.Qb = function(a) {
  for (var b in a) this[b] = a[b];
  this.ja = $.b.yc(this.ja) ? this.ja : 50;
  this.m = $.b.yc(this.m) ? this.m : 100;
  this.Ya = this.Ya || function() {};
  this.dc = this.dc || function() {};
  this.index = $.Qc++;
  this.Fa = this.jb = this.aa = this.q = 0;
  this.Hb = a.k;
  this.fillStyle =
    "hsla(" + this.g + ", " + this.m + "%, " + this.ja + "%, 0.1)";
  this.strokeStyle =
    "hsla(" + this.g + ", " + this.m + "%, " + this.ja + "%, 1)";
  this.Ya();
  0 < $.bb &&
    ((this.Hb = this.k += 0.25 * $.bb),
    (this.speed += Math.min($.d.Oa, 0.25 * $.bb)),
    (this.value += 5 * $.bb));
};
$.Qb.prototype.update = function(a) {
  this.wa();
  this.x += this.aa * $.j;
  this.y += this.q * $.j;
  this.Ib &&
    !$.b.Vb(this.x, this.y, this.e + 10, 0, 0, $.ha, $.ia) &&
    $.pa.splice(a, 1);
  this.Fa = $.b.Vb(this.x, this.y, this.e, -$.screen.x, -$.screen.y, $.c, $.ch)
    ? 1
    : 0;
};
$.Qb.prototype.i = function() {
  if (this.Fa) {
    var a = $.fc / 6;
    $.b.Sa($.a, this.x, this.y, this.e, this.fillStyle);
    $.b.Lb(
      $.a,
      this.x,
      this.y,
      this.e / 4 + (Math.cos(a) * this.e) / 4,
      this.strokeStyle,
      1.5
    );
    $.b.Lb($.a, this.x, this.y, this.e - 0.5, this.strokeStyle, 1);
    $.a.strokeStyle = this.strokeStyle;
    $.a.lineWidth = 4;
    $.a.beginPath();
    $.a.arc(this.x, this.y, this.e - 0.5, a + $.h, a + $.h + $.h / 2);
    $.a.stroke();
    $.a.beginPath();
    $.a.arc(this.x, this.y, this.e - 0.5, a, a + $.h / 2);
    $.a.stroke();
    $.qa &&
      $.b.Sa(
        $.a,
        this.x,
        this.y,
        this.e,
        "hsla(" + $.b.f(160, 220) + ", 100%, 50%, 0.25)"
      );
    0 < this.jb &&
      ((this.jb -= $.j),
      $.b.Sa(
        $.a,
        this.x,
        this.y,
        this.e,
        "hsla(" + this.g + ", " + this.m + "%, 75%, " + this.jb / 10 + ")"
      ),
      $.b.Lb(
        $.a,
        this.x,
        this.y,
        this.e,
        "hsla(" +
          this.g +
          ", " +
          this.m +
          "%, " +
          $.b.f(60, 90) +
          "%, " +
          this.jb / 10 +
          ")",
        $.b.f(1, 10)
      ));
    this.Fa &&
      0 < this.k &&
      this.k < this.Hb &&
      (($.a.fillStyle = "hsla(0, 0%, 0%, 0.75)"),
      $.a.fillRect(this.x - this.e, this.y - this.e - 6, 2 * this.e, 3),
      ($.a.fillStyle =
        "hsla(" + 120 * (this.k / this.Hb) + ", 100%, 50%, 0.75)"),
      $.a.fillRect(
        this.x - this.e,
        this.y - this.e - 6,
        2 * this.e * (this.k / this.Hb),
        3
      ));
  }
};
$.Pb = function(a) {
  for (var b in a) this[b] = a[b];
  this.ec = [];
  this.Fa = 0;
  $.ta.push(
    new $.Ma({
      x: this.x,
      y: this.y,
      count: 1,
      Za: 1,
      Na: 0.75,
      Xa: 2,
      Wa: 10,
      Qa: 0,
      Va: $.La,
      g: 0,
      m: 0,
    })
  );
};
$.Pb.prototype.update = function(a) {
  this.x += Math.cos(this.direction) * this.speed * $.j;
  this.y += Math.sin(this.direction) * this.speed * $.j;
  this.ra = this.x - Math.cos(this.direction) * this.size;
  this.ga = this.y - Math.sin(this.direction) * this.size;
  for (var b = $.pa.length; b--; ) {
    var c = $.pa[b];
    if ($.b.$a(this.x, this.y, c.x, c.y) <= c.e) {
      if (-1 == this.ec.indexOf(c.index)) {
        $.ta.push(
          new $.Ma({
            x: this.x,
            y: this.y,
            count: Math.floor($.b.f(1, 4)),
            Za: 0,
            Na: 0.85,
            Xa: 5,
            Wa: 12,
            Qa: this.direction - $.h - $.h / 5,
            Va: this.direction - $.h + $.h / 5,
            g: c.g,
          })
        );
        this.ec.push(c.index);
        var d = b,
          f = this.cc;
        c.Fa && $.da.play("hit");
        c.k -= f;
        c.jb = 10;
        0 >= c.k &&
          (c.Fa &&
            ($.Ra.push(new $.wb({ x: c.x, y: c.y, e: c.e, g: c.g, m: c.m })),
            $.ta.push(
              new $.Ma({
                x: c.x,
                y: c.y,
                count: 10,
                Za: c.e,
                Na: 0.85,
                Xa: 5,
                Wa: 20,
                Qa: 0,
                Va: $.La,
                g: c.g,
                m: c.m,
              })
            ),
            $.hb.push(
              new $.Ub({
                x: c.x,
                y: c.y,
                value: c.value,
                g: c.g,
                m: c.m,
                ja: 60,
              })
            ),
            ($.ba.l = 6)),
          c.dc(),
          $.jd(c.x, c.y),
          ($.mb += c.value),
          $.l.Ha++,
          $.Ha++,
          $.pa.splice(d, 1));
        3 < this.ec.length && $.Ca.splice(a, 1);
      }
      this.ub || $.Ca.splice(a, 1);
    }
  }
  $.b.fb(this.ra, this.ga, 0, 0, $.ha, $.ia) || $.Ca.splice(a, 1);
  this.Fa = $.b.fb(this.ra, this.ga, -$.screen.x, -$.screen.y, $.c, $.ch)
    ? 1
    : 0;
};
$.Pb.prototype.i = function() {
  this.Fa &&
    ($.a.beginPath(),
    $.a.moveTo(this.x, this.y),
    $.a.lineTo(this.ra, this.ga),
    ($.a.lineWidth = this.lineWidth),
    ($.a.strokeStyle = this.strokeStyle),
    $.a.stroke());
};
$.wb = function(a) {
  for (var b in a) this[b] = a[b];
  this.fa = 0;
  this.Ba = 20;
  $.qa ? $.da.play("explosionAlt") : $.da.play("explosion");
};
$.wb.prototype.update = function(a) {
  this.fa >= this.Ba ? $.Ra.splice(a, 1) : (this.fa += $.j);
};
$.wb.prototype.i = function(a) {
  if ($.b.Vb(this.x, this.y, this.e, -$.screen.x, -$.screen.y, $.c, $.ch)) {
    var b = 1 + (this.fa / (this.Ba / 2)) * this.e;
    a = $.b.f(1, this.e / 2);
    $.b.Lb(
      $.a,
      this.x,
      this.y,
      b,
      "hsla(" +
        this.g +
        ", " +
        this.m +
        "%, " +
        $.b.f(40, 80) +
        "%, " +
        Math.min(1, Math.max(0, 1 - this.fa / this.Ba)) +
        ")",
      a
    );
    $.a.beginPath();
    var c = $.b.f(1, 1.5);
    for (a = 0; 20 > a; a++) {
      var d = $.b.f(0, $.La);
      $.a.rect(
        this.x + Math.cos(d) * b - c / 2,
        this.y + Math.sin(d) * b - c / 2,
        c,
        c
      );
    }
    $.a.fillStyle =
      "hsla(" + this.g + ", " + this.m + "%, " + $.b.f(50, 100) + "%, 1)";
    $.a.fill();
    $.a.fillStyle =
      "hsla(" +
      this.g +
      ", " +
      this.m +
      "%, 50%, " +
      Math.min(1, Math.max(0, 0.03 - 0.03 * (this.fa / this.Ba))) +
      ")";
    $.a.fillRect(-$.screen.x, -$.screen.y, $.c, $.ch);
  }
};
$.Tb = function(a) {
  for (var b in a) this[b] = a[b];
  a = $.text({
    v: $.a,
    x: 0,
    y: 0,
    text: this.title,
    r: 1,
    $: 0,
    t: "top",
    u: "left",
    scale: 1,
    ca: 0,
    i: 0,
  });
  this.pc = this.gc = 8;
  this.width = a.width + 2 * this.gc;
  this.height = a.height + 2 * this.pc;
  this.x -= this.width / 2;
  this.y -= this.height / 2;
  this.direction = $.b.f(0, $.La);
  this.speed = $.b.f(0.5, 2);
};
$.Tb.prototype.update = function(a) {
  this.x += Math.cos(this.direction) * this.speed * $.j;
  this.y += Math.sin(this.direction) * this.speed * $.j;
  $.b.Xc(this.x, this.y, this.width, this.height) || $.ka.splice(a, 1);
  0 < $.d.k &&
    $.b.Ic(this.x, this.y, this.width, this.height) &&
    ($.da.play("powerup"),
    ($.p[this.type] = 300),
    $.ta.push(
      new $.Ma({
        x: this.x + this.width / 2,
        y: this.y + this.height / 2,
        count: 15,
        Za: 0,
        Na: 0.85,
        Xa: 2,
        Wa: 15,
        Qa: 0,
        Va: $.La,
        g: 0,
        m: 0,
      })
    ),
    $.ka.splice(a, 1),
    $.kc++);
};
$.Tb.prototype.i = function() {
  $.a.fillStyle = "#000";
  $.a.fillRect(this.x - 2, this.y - 2, this.width + 4, this.height + 4);
  $.a.fillStyle = "#555";
  $.a.fillRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2);
  $.a.fillStyle = "#111";
  $.a.fillRect(this.x, this.y, this.width, this.height);
  $.a.beginPath();
  $.text({
    v: $.a,
    x: this.x + this.gc,
    y: this.y + this.pc + 1,
    text: this.title,
    r: 1,
    $: 0,
    t: "top",
    u: "left",
    scale: 1,
    ca: 0,
    i: !0,
  });
  $.a.fillStyle = "#000";
  $.a.fill();
  $.a.beginPath();
  $.text({
    v: $.a,
    x: this.x + this.gc,
    y: this.y + this.pc,
    text: this.title,
    r: 1,
    $: 0,
    t: "top",
    u: "left",
    scale: 1,
    ca: 0,
    i: !0,
  });
  $.a.fillStyle = "hsl(" + this.g + ", " + this.m + "%, " + this.ja + "%)";
  $.a.fill();
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.2)";
  $.a.fillRect(this.x, this.y, this.width, this.height / 2);
};
$.xb = function(a) {
  for (var b in a) this[b] = a[b];
  this.x = $.c - 20;
  this.y = $.ch - 20;
  this.fa = 0;
  this.Ba = 240;
  this.Yb = 0.2;
  0 != $.fa && $.da.play("levelup");
};
$.xb.prototype.update = function(a) {
  this.fa >= this.Ba ? $.Ua.splice(a, 1) : (this.fa += $.j);
};
$.xb.prototype.i = function() {
  $.a.beginPath();
  $.text({
    v: $.a,
    x: this.x,
    y: this.y,
    text: $.b.lb(this.l, 2),
    r: 3,
    $: 0,
    t: "right",
    u: "bottom",
    scale: 12,
    ca: 1,
    i: 1,
  });
  var a =
      this.fa < 0.25 * this.Ba
        ? (this.fa / (0.25 * this.Ba)) * this.Yb
        : this.fa > this.Ba - 0.25 * this.Ba
        ? ((this.Ba - this.fa) / (0.25 * this.Ba)) * this.Yb
        : this.Yb,
    a = Math.min(1, Math.max(0, a));
  $.a.fillStyle = "hsla(0, 0%, 100%, " + a + ")";
  $.a.fill();
};
$.Sb = function(a) {
  for (var b in a) this[b] = a[b];
};
$.Sb.prototype.update = function(a) {
  this.x += Math.cos(this.direction) * this.speed * $.j;
  this.y += Math.sin(this.direction) * this.speed * $.j;
  this.ra = this.x - Math.cos(this.direction) * this.speed;
  this.ga = this.y - Math.sin(this.direction) * this.speed;
  this.speed *= this.Na;
  (!$.b.fb(this.ra, this.ga, 0, 0, $.ha, $.ia) || 0.05 >= this.speed) &&
    this.parent.splice(a, 1);
  this.Fa = $.b.fb(this.ra, this.ga, -$.screen.x, -$.screen.y, $.c, $.ch)
    ? 1
    : 0;
};
$.Sb.prototype.i = function() {
  this.Fa &&
    ($.a.beginPath(),
    $.a.moveTo(this.x, this.y),
    $.a.lineTo(this.ra, this.ga),
    ($.a.lineWidth = this.lineWidth),
    ($.a.strokeStyle =
      "hsla(" + this.g + ", " + this.m + "%, " + $.b.f(50, 100) + "%, 1)"),
    $.a.stroke());
};
$.Ma = function(a) {
  for (var b in a) this[b] = a[b];
  this.eb = [];
  for (a = 0; a < this.count; a++) {
    b = Math.sqrt(Math.random()) * this.Za;
    var c = Math.random() * $.La;
    this.eb.push(
      new $.Sb({
        parent: this.eb,
        x: this.x + Math.cos(c) * b,
        y: this.y + Math.sin(c) * b,
        speed: $.b.f(this.Xa, this.Wa),
        Na: this.Na,
        direction: $.b.f(this.Qa, this.Va),
        lineWidth: $.b.f(0.5, 1.5),
        g: this.g,
        m: this.m,
      })
    );
  }
};
$.Ma.prototype.update = function(a) {
  for (var b = this.eb.length; b--; ) this.eb[b].update(b);
  0 >= this.eb.length && $.ta.splice(a, 1);
};
$.Ma.prototype.i = function() {
  for (var a = this.eb.length; a--; ) this.eb[a].i(a);
};
$.Ub = function(a) {
  for (var b in a) this[b] = a[b];
  this.alpha = 2;
  this.q = 0;
};
$.Ub.prototype.update = function(a) {
  this.q -= 0.05;
  this.y += this.q * $.j;
  this.alpha -= 0.03 * $.j;
  0 >= this.alpha && $.hb.splice(a, 1);
};
$.Ub.prototype.i = function() {
  $.a.beginPath();
  $.text({
    v: $.a,
    x: this.x,
    y: this.y,
    text: "+" + this.value,
    r: 1,
    $: 0,
    t: "center",
    u: "center",
    scale: 2,
    ca: 0,
    i: 1,
  });
  $.a.fillStyle =
    "hsla(" +
    this.g +
    ", " +
    this.m +
    "%, " +
    this.ja +
    "%, " +
    this.alpha +
    ")";
  $.a.fill();
};
$.va = function(a) {
  for (var b in a) this[b] = a[b];
  $.text({
    v: $.a,
    x: 0,
    y: 0,
    text: this.title,
    r: 1,
    $: 0,
    t: "center",
    u: "center",
    scale: this.scale,
    ca: 1,
    i: 0,
  });
  this.width = this.Ja;
  this.height = this.Ia;
  this.la = this.x - this.width / 2;
  this.na = this.y - this.height / 2;
  this.sc = this.x;
  this.tc = this.y;
  this.ra = this.x + this.width / 2;
  this.ga = this.y + this.height / 2;
  this.Bc = this.kb = 0;
};
$.va.prototype.update = function() {
  $.b.fb($.w.la, $.w.na, this.la, this.na, this.width, this.height)
    ? ((this.kb = 1), this.Bc || $.da.play("hover"))
    : (this.kb = 0);
  (this.Bc = this.kb) && $.w.oa && ($.da.play("click"), this.action());
};
$.va.prototype.i = function() {
  this.kb
    ? (($.a.fillStyle = "hsla(0, 0%, 10%, 1)"),
      $.a.fillRect(
        Math.floor(this.la),
        Math.floor(this.na),
        this.width,
        this.height
      ),
      ($.a.strokeStyle = "hsla(0, 0%, 0%, 1)"),
      $.a.strokeRect(
        Math.floor(this.la) + 0.5,
        Math.floor(this.na) + 0.5,
        this.width - 1,
        this.height - 1,
        1
      ),
      ($.a.strokeStyle = "hsla(0, 0%, 100%, 0.2)"))
    : (($.a.fillStyle = "hsla(0, 0%, 0%, 1)"),
      $.a.fillRect(
        Math.floor(this.la),
        Math.floor(this.na),
        this.width,
        this.height
      ),
      ($.a.strokeStyle = "hsla(0, 0%, 0%, 1)"),
      $.a.strokeRect(
        Math.floor(this.la) + 0.5,
        Math.floor(this.na) + 0.5,
        this.width - 1,
        this.height - 1,
        1
      ),
      ($.a.strokeStyle = "hsla(0, 0%, 100%, 0.15)"));
  $.a.strokeRect(
    Math.floor(this.la) + 1.5,
    Math.floor(this.na) + 1.5,
    this.width - 3,
    this.height - 3,
    1
  );
  $.a.beginPath();
  $.text({
    v: $.a,
    x: this.sc,
    y: this.tc,
    text: this.title,
    r: 1,
    $: 0,
    t: "center",
    u: "center",
    scale: this.scale,
    ca: 1,
    i: !0,
  });
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.7)";
  this.kb && ($.a.fillStyle = "hsla(0, 0%, 100%, 1)");
  $.a.fill();
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.07)";
  $.a.fillRect(
    Math.floor(this.la) + 2,
    Math.floor(this.na) + 2,
    this.width - 4,
    Math.floor((this.height - 4) / 2)
  );
};
$.Rc = function() {
  $.Ec();
  $.Ob = document.getElementById("wrap");
  $.Hc = document.getElementById("wrap-inner");
  $.ma = document.getElementById("cbg1");
  $.Da = document.getElementById("cbg2");
  $.Ea = document.getElementById("cbg3");
  $.xa = document.getElementById("cbg4");
  $.Bb = document.getElementById("cmg");
  $.ac = document.getElementById("cfg");
  $.qb = $.ma.getContext("2d");
  $.Mc = $.Da.getContext("2d");
  $.Nc = $.Ea.getContext("2d");
  $.bc = $.xa.getContext("2d");
  $.a = $.Bb.getContext("2d");
  $.ya = $.ac.getContext("2d");
  $.c = $.Bb.width = $.ac.width = window.innerWidth * 0.8;
  $.ch = $.Bb.height = $.ac.height = window.innerHeight * 0.8;
  $.Ob.style.width = $.Hc.style.width = $.c + "px";
  $.Ob.style.height = $.Hc.style.height = $.ch + "px";
  $.Ob.style.marginLeft = -$.c / 2 - 10 + "px";
  $.Ob.style.marginTop = -$.ch / 2 - 10 + "px";
  $.ha = Math.floor(2 * $.c);
  $.ia = Math.floor(2 * $.ch);
  $.ma.width = Math.floor(1.1 * $.c);
  $.ma.height = Math.floor(1.1 * $.ch);
  $.Da.width = Math.floor(1.15 * $.c);
  $.Da.height = Math.floor(1.15 * $.ch);
  $.Ea.width = Math.floor(1.2 * $.c);
  $.Ea.height = Math.floor(1.2 * $.ch);
  $.xa.width = Math.floor(1.25 * $.c);
  $.xa.height = Math.floor(1.25 * $.ch);
  $.screen = { x: ($.ha - $.c) / -2, y: ($.ia - $.ch) / -2 };
  $.sb = $.ea.mute;
  $.ob = $.ea.autofire;
  $.sa = 3;
  $.keys = {
    state: { Nb: 0, oa: 0, left: 0, right: 0, Db: 0, Jb: 0, tb: 0 },
    vb: { Nb: 0, oa: 0, left: 0, right: 0, Db: 0, Jb: 0, tb: 0 },
  };
  $.jc = {};
  $.w = {
    x: $.ha / 2,
    y: $.ia / 2,
    la: 0,
    na: 0,
    Wb: window.innerWidth / 2,
    Xb: 0,
    oa: 0,
  };
  $.buttons = [];
  $.n = {
    x: 20,
    y: $.ch - Math.floor(0.1 * $.ch) - 20,
    width: Math.floor(0.1 * $.c),
    height: Math.floor(0.1 * $.ch),
    scale: Math.floor(0.1 * $.c) / $.ha,
    color: "hsla(0, 0%, 0%, 0.85)",
    strokeColor: "#3a3a3a",
  };
  $.$b = { left: 0, top: 0 };
  $.Ac = $.o.cb.length;
  $.gb = {};
  $.state = "";
  $.pa = [];
  $.Ca = [];
  $.Ra = [];
  $.ka = [];
  $.ta = [];
  $.hb = [];
  $.Ua = [];
  $.p = [];
  $.Dc();
  $.Jc();
  $.fd();
  $.Yc();
  $.Zc();
  $.$c();
  $.ad();
  $.cd();
  $.bd();
  $.ua("menu");
  $.loop();
};
$.reset = function() {
  $.Qc = 0;
  $.j = 1;
  $.hc = 0;
  $.Cb = 0;
  $.fa = 0;
  $.Gb = 0;
  $.wc = 200;
  $.vc = 0;
  $.Ga = 0;
  $.za = 400;
  $.bb = 0;
  $.fc = 0;
  $.qa = 0;
  $.screen = { x: ($.ha - $.c) / -2, y: ($.ia - $.ch) / -2 };
  $.ba = { x: 0, y: 0, l: 0, Oc: 0.4 };
  $.w.oa = 0;
  $.l = {
    current: 0,
    Ha: 0,
    Ta: $.o.cb[0].Ta,
    ab: $.o.cb[0].ab,
    uc: $.o.cb[0].ab.length,
  };
  $.pa.length = 0;
  $.Ca.length = 0;
  $.Ra.length = 0;
  $.ka.length = 0;
  $.ta.length = 0;
  $.hb.length = 0;
  $.Ua.length = 0;
  for (var a = ($.p.length = 0); a < $.o.ka.length; a++) $.p.push(0);
  $.Ha = 0;
  $.Zb = 0;
  $.kc = 0;
  $.mb = 0;
  $.d = new $.Rb();
  $.Ua.push(new $.xb({ l: 1 }));
};
$.bd = function() {
  var a = document.getElementById("favicon"),
    b = document.createElement("canvas"),
    c = b.getContext("2d"),
    d = [
      [1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, , , , , , , , , , , , , , , 1],
      [1, , , , , , , , , , , , , , , 1],
      [1, , , , , 1, 1, , , 1, 1, 1, 1, 1, , 0],
      [1, , , , , 1, 1, , , 1, 1, 1, 1, 1, , 0],
      [1, , , , , 1, 1, , , 1, 1, , , , , 1],
      [1, , , , , 1, 1, , , 1, 1, , , , , 1],
      [1, , , , , 1, 1, , , 1, 1, , , , , 1],
      [1, , , , , 1, 1, , , 1, 1, , , , , 1],
      [1, , , , , 1, 1, , , 1, 1, , , , , 1],
      [1, , , , , 1, 1, , , 1, 1, , , , , 1],
      [, , 1, 1, 1, 1, 1, , , 1, 1, , , , , 1],
      [, , 1, 1, 1, 1, 1, , , 1, 1, , , , , 1],
      [1, , , , , , , , , , , , , , , 1],
      [1, , , , , , , , , , , , , , , 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1],
    ];
  b.width = b.height = 16;
  c.beginPath();
  for (var f = 0; 16 > f; f++)
    for (var e = 0; 16 > e; e++) 1 === d[f][e] && c.rect(e, f, 1, 1);
  c.fill();
  //a.href = b.toDataURL();
  console.log(b);
};
$.Yc = function() {
  var a = $.qb.createRadialGradient(
    $.ma.width / 2,
    $.ma.height / 2,
    0,
    $.ma.width / 2,
    $.ma.height / 2,
    $.ma.height
  );
  a.addColorStop(0, "hsla(0, 0%, 100%, 0.1)");
  a.addColorStop(0.65, "hsla(0, 0%, 100%, 0)");
  $.qb.fillStyle = a;
  $.qb.fillRect(0, 0, $.ma.width, $.ma.height);
  for (a = 2e3; a--; )
    $.b.Sa(
      $.qb,
      $.b.f(0, $.ma.width),
      $.b.f(0, $.ma.height),
      $.b.f(0.2, 0.5),
      "hsla(0, 0%, 100%, " + $.b.f(0.05, 0.2) + ")"
    );
  for (a = 800; a--; )
    $.b.Sa(
      $.qb,
      $.b.f(0, $.ma.width),
      $.b.f(0, $.ma.height),
      $.b.f(0.1, 0.8),
      "hsla(0, 0%, 100%, " + $.b.f(0.05, 0.5) + ")"
    );
};
$.Zc = function() {
  for (var a = 80; a--; )
    $.b.Sa(
      $.Mc,
      $.b.f(0, $.Da.width),
      $.b.f(0, $.Da.height),
      $.b.f(1, 2),
      "hsla(0, 0%, 100%, " + $.b.f(0.05, 0.15) + ")"
    );
};
$.$c = function() {
  for (var a = 40; a--; )
    $.b.Sa(
      $.Nc,
      $.b.f(0, $.Ea.width),
      $.b.f(0, $.Ea.height),
      $.b.f(1, 2.5),
      "hsla(0, 0%, 100%, " + $.b.f(0.05, 0.1) + ")"
    );
};
$.ad = function() {
  $.bc.fillStyle = "hsla(0, 0%, 50%, 0.05)";
  for (var a = Math.round($.xa.height / 50); a--; )
    $.bc.fillRect(0, 50 * a + 25, $.xa.width, 1);
  for (a = Math.round($.xa.width / 50); a--; )
    $.bc.fillRect(50 * a, 0, 1, $.xa.height);
};
$.cd = function() {
  var a = $.ya.createRadialGradient(
    $.c / 2,
    $.ch / 2,
    $.ch / 3,
    $.c / 2,
    $.ch / 2,
    $.ch
  );
  a.addColorStop(0, "hsla(0, 0%, 0%, 0)");
  a.addColorStop(1, "hsla(0, 0%, 0%, 0.5)");
  $.ya.fillStyle = a;
  $.ya.fillRect(0, 0, $.c, $.ch);
  $.ya.fillStyle = "hsla(0, 0%, 50%, 0.1)";
  for (a = Math.round($.ch / 2); a--; ) $.ya.fillRect(0, 2 * a, $.c, 1);
  a = $.ya.createLinearGradient($.c, 0, 0, $.ch);
  a.addColorStop(0, "hsla(0, 0%, 100%, 0.04)");
  a.addColorStop(0.75, "hsla(0, 0%, 100%, 0)");
  $.ya.beginPath();
  $.ya.moveTo(0, 0);
  $.ya.lineTo($.c, 0);
  $.ya.lineTo(0, $.ch);
  $.ya.closePath();
  $.ya.fillStyle = a;
  $.ya.fill();
};
$.dd = function() {
  for (var a = 0; a < $.o.ka.length; a++) {
    var b = $.o.ka[a],
      c = 0 < $.p[a];
    $.a.beginPath();
    var d = $.text({
      v: $.a,
      x: $.n.x + $.n.width + 90,
      y: $.n.y + 4 + 12 * a,
      text: b.title,
      r: 1,
      $: 1,
      t: "right",
      u: "top",
      scale: 1,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = c
      ? "hsla(0, 0%, 100%, " + (0.25 + 0.75 * ($.p[a] / 300)) + ")"
      : "hsla(0, 0%, 100%, 0.25)";
    $.a.fill();
    c &&
      ((c = d.ra + 5),
      (d = d.na),
      ($.a.fillStyle = "hsl(" + b.g + ", " + b.m + "%, " + b.ja + "%)"),
      $.a.fillRect(c, d, 110 * ($.p[a] / 300), 5));
  }
  $.Ga < $.za &&
    (($.Ga += $.j),
    $.a.beginPath(),
    $.text({
      v: $.a,
      x: $.c / 2 - 10,
      y: $.ch - 20,
      text: "MOVE\nAIM/FIRE\nAUTOFIRE\nPAUSE\nMUTE",
      r: 1,
      $: 17,
      t: "right",
      u: "bottom",
      scale: 2,
      ca: 1,
      i: 1,
    }),
    (a =
      $.Ga < 0.25 * $.za
        ? 0.5 * ($.Ga / (0.25 * $.za))
        : $.Ga > $.za - 0.25 * $.za
        ? 0.5 * (($.za - $.Ga) / (0.25 * $.za))
        : 0.5),
    (a = Math.min(1, Math.max(0, a))),
    ($.a.fillStyle = "hsla(0, 0%, 100%, " + a + ")"),
    $.a.fill(),
    $.a.beginPath(),
    $.text({
      v: $.a,
      x: $.c / 2 + 10,
      y: $.ch - 20,
      text: "WASD/ARROWS\nMOUSE\nF\nP\nM",
      r: 1,
      $: 17,
      t: "left",
      u: "bottom",
      scale: 2,
      ca: 1,
      i: 1,
    }),
    (a =
      $.Ga < 0.25 * $.za
        ? 1 * ($.Ga / (0.25 * $.za))
        : $.Ga > $.za - 0.25 * $.za
        ? 1 * (($.za - $.Ga) / (0.25 * $.za))
        : 1),
    (a = Math.min(1, Math.max(0, a))),
    ($.a.fillStyle = "hsla(0, 0%, 100%, " + a + ")"),
    $.a.fill());
  0 < $.p[1] &&
    (($.a.fillStyle = "hsla(200, 100%, 20%, 0.05)"),
    $.a.fillRect(0, 0, $.c, $.ch));
  $.a.beginPath();
  b = $.text({
    v: $.a,
    x: 20,
    y: 20,
    text: "HEALTH",
    r: 1,
    $: 1,
    t: "top",
    u: "left",
    scale: 2,
    ca: 1,
    i: 1,
  });
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
  $.a.fill();
  a = b.ra + 10;
  b = b.na;
  $.a.fillStyle = "hsla(0, 0%, 20%, 1)";
  $.a.fillRect(a, b, 110, 10);
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.25)";
  $.a.fillRect(a, b, 110, 5);
  $.a.fillStyle = "hsla(" + 120 * $.d.k + ", 100%, 40%, 1)";
  $.a.fillRect(a, b, 110 * $.d.k, 10);
  $.a.fillStyle = "hsla(" + 120 * $.d.k + ", 100%, 75%, 1)";
  $.a.fillRect(a, b, 110 * $.d.k, 5);
  $.d.Mb &&
    0.01 < $.d.k &&
    $.ta.push(
      new $.Ma({
        x: -$.screen.x + a + 110 * $.d.k,
        y: -$.screen.y + b + 5,
        count: 1,
        Za: 2,
        Na: 0.85,
        Xa: 2,
        Wa: 20,
        Qa: $.h / 2 - 0.2,
        Va: $.h / 2 + 0.2,
        g: 120 * $.d.k,
        m: 100,
      })
    );
  $.a.beginPath();
  b = $.text({
    v: $.a,
    x: a + 110 + 40,
    y: 20,
    text: "PROGRESS",
    r: 1,
    $: 1,
    t: "top",
    u: "left",
    scale: 2,
    ca: 1,
    i: 1,
  });
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
  $.a.fill();
  a = b.ra + 10;
  b = b.na;
  $.a.fillStyle = "hsla(0, 0%, 20%, 1)";
  $.a.fillRect(a, b, 110, 10);
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.25)";
  $.a.fillRect(a, b, 110, 5);
  $.a.fillStyle = "hsla(0, 0%, 50%, 1)";
  $.a.fillRect(a, b, 110 * ($.l.Ha / $.l.Ta), 10);
  $.a.fillStyle = "hsla(0, 0%, 100%, 1)";
  $.a.fillRect(a, b, 110 * ($.l.Ha / $.l.Ta), 5);
  $.l.Ha == $.l.Ta &&
    $.ta.push(
      new $.Ma({
        x: -$.screen.x + a + 110,
        y: -$.screen.y + b + 5,
        count: 30,
        Za: 5,
        Na: 0.95,
        Xa: 2,
        Wa: 25,
        Qa: 0,
        Qa: $.h / 2 - $.h / 4,
        Va: $.h / 2 + $.h / 4,
        g: 0,
        m: 0,
      })
    );
  $.a.beginPath();
  a = $.text({
    v: $.a,
    x: a + 110 + 40,
    y: 20,
    text: "SCORE",
    r: 1,
    $: 1,
    t: "top",
    u: "left",
    scale: 2,
    ca: 1,
    i: 1,
  });
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
  $.a.fill();
  $.a.beginPath();
  a = $.text({
    v: $.a,
    x: a.ra + 10,
    y: 20,
    text: $.b.lb($.mb, 6), //$.mb, 6),
    r: 1,
    $: 1,
    t: "top",
    u: "left",
    scale: 2,
    ca: 1,
    i: 1,
  });
  document.getElementById("score").innerText = $.mb;
  document.getElementById("timing").innerText = $.b.rc(
    (Math.floor($.Cb) * (1e3 / 60)) / 1e3
  );
  $.a.fillStyle = "hsla(0, 0%, 100%, 1)";
  $.a.fill();
  $.a.beginPath();
  a = $.text({
    v: $.a,
    x: a.ra + 40,
    y: 20,
    text: "BEST",
    r: 1,
    $: 1,
    t: "top",
    u: "left",
    scale: 2,
    ca: 1,
    i: 1,
  });
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
  $.a.fill();
  $.a.beginPath();
  $.text({
    v: $.a,
    x: a.ra + 10,
    y: 20,
    text: $.b.lb(Math.max($.ea.score, $.mb), 6),
    r: 1,
    $: 1,
    t: "top",
    u: "left",
    scale: 2,
    ca: 1,
    i: 1,
  });
  $.a.fillStyle = "hsla(0, 0%, 100%, 1)";
  $.a.fill();
};
$.ed = function() {
  $.a.fillStyle = $.n.color;
  $.a.fillRect($.n.x, $.n.y, $.n.width, $.n.height);
  $.a.fillStyle = "hsla(0, 0%, 100%, 0.1)";
  $.a.fillRect(
    Math.floor($.n.x + -$.screen.x * $.n.scale),
    Math.floor($.n.y + -$.screen.y * $.n.scale),
    Math.floor($.c * $.n.scale),
    Math.floor($.ch * $.n.scale)
  );
  for (var a = 0; a < $.pa.length; a++) {
    var b = $.pa[a],
      c = $.n.x + Math.floor(b.x * $.n.scale),
      d = $.n.y + Math.floor(b.y * $.n.scale);
    $.b.fb(c + 1, d + 1, $.n.x, $.n.y, $.n.width, $.n.height) &&
      (($.a.fillStyle = "hsl(" + b.g + ", " + b.m + "%, 50%)"),
      $.a.fillRect(c, d, 2, 2));
  }
  $.a.beginPath();
  for (a = 0; a < $.Ca.length; a++)
    (b = $.Ca[a]),
      (c = $.n.x + Math.floor(b.x * $.n.scale)),
      (d = $.n.y + Math.floor(b.y * $.n.scale)),
      $.b.fb(c, d, $.n.x, $.n.y, $.n.width, $.n.height) && $.a.rect(c, d, 1, 1);
  $.a.fillStyle = "#fff";
  $.a.fill();
  $.a.fillStyle = $.d.fillStyle;
  $.a.fillRect(
    $.n.x + Math.floor($.d.x * $.n.scale),
    $.n.y + Math.floor($.d.y * $.n.scale),
    2,
    2
  );
  $.a.strokeStyle = $.n.strokeColor;
  $.a.strokeRect($.n.x - 0.5, $.n.y - 0.5, $.n.width + 1, $.n.height + 1);
};
$.Pc = function(a) {
  var b = Math.floor($.b.f(0, 4)),
    c;
  0 === b
    ? ((b = $.b.f(0, $.ha)), (a = -a), (c = "top"))
    : 1 === b
    ? ((b = $.ha + a), (a = $.b.f(0, $.ia)), (c = "right"))
    : 2 === b
    ? ((b = $.b.f(0, $.ha)), (a = $.ia + a), (c = "bottom"))
    : ((b = -a), (a = $.b.f(0, $.ia)), (c = "left"));
  return { x: b, y: a, start: c };
};
$.nc = function(a) {
  var b = $.o.pa[a],
    c = $.Pc(b.e);
  b.x = c.x;
  b.y = c.y;
  b.start = c.start;
  b.type = a;
  return new $.Qb(b);
};
$.gd = function() {
  for (var a = Math.floor($.fa), b = 0; b < $.l.uc; b++) {
    var c = $.l.ab[b];
    0 < $.bb && (c = Math.max(1, c - 2 * $.bb));
    0 === a % c && $.pa.push($.nc(b));
  }
};
$.Vc = function(a) {
  a.preventDefault();
  $.w.Wb = a.pageX;
  $.w.Xb = a.pageY;
  $.ic();
};
$.ic = function() {
  $.w.la = $.w.Wb - $.$b.left;
  $.w.na = $.w.Xb - $.$b.top;
  $.w.x = $.w.la - $.screen.x;
  $.w.y = $.w.na - $.screen.y;
};
$.Uc = function(a) {
  a.preventDefault();
  $.w.oa = 1;
};
$.Wc = function(a) {
  a.preventDefault();
  $.w.oa = 0;
};
$.Sc = function(a) {
  a = a.keyCode ? a.keyCode : a.which;
  if (38 === a || 87 === a) $.keys.state.Nb = 1;
  if (39 === a || 68 === a) $.keys.state.right = 1;
  if (40 === a || 83 === a) $.keys.state.oa = 1;
  if (37 === a || 65 === a) $.keys.state.left = 1;
  70 === a && ($.keys.state.Db = 1);
  77 === a && ($.keys.state.Jb = 1);
  80 === a && ($.keys.state.tb = 1);
};
$.Tc = function(a) {
  a = a.keyCode ? a.keyCode : a.which;
  if (38 === a || 87 === a) $.keys.state.Nb = 0;
  if (39 === a || 68 === a) $.keys.state.right = 0;
  if (40 === a || 83 === a) $.keys.state.oa = 0;
  if (37 === a || 65 === a) $.keys.state.left = 0;
  70 === a && ($.keys.state.Db = 0);
  77 === a && ($.keys.state.Jb = 0);
  80 === a && ($.keys.state.tb = 0);
};
$.Dc = function() {
  var a = $.Bb.getBoundingClientRect();
  $.$b = { left: a.left, top: a.top };
};
$.Kc = function() {
  "play" == $.state && $.ua("pause");
};
$.Jc = function() {
  window.addEventListener("mousemove", $.Vc);
  window.addEventListener("mousedown", $.Uc);
  window.addEventListener("mouseup", $.Wc);
  window.addEventListener("keydown", $.Sc);
  window.addEventListener("keyup", $.Tc);
  window.addEventListener("resize", $.Dc);
  window.addEventListener("blur", $.Kc);
};
$.ib = function() {
  $.a.clearRect(0, 0, $.c, $.ch);
};
$.ld = function() {
  var a = Date.now();
  $.j = (a - $.hc) / (1e3 / 60);
  $.j = 0 > $.j ? 0.001 : $.j;
  $.j = 10 < $.j ? 10 : $.j;
  $.hc = a;
  $.Cb += $.j;
};
$.Gc = function() {
  var a, b;
  a =
    $.d.x < $.c / 2
      ? $.d.x / $.c
      : $.d.x > $.ha - $.c / 2
      ? 1 - ($.ha - $.d.x) / $.c
      : 0.5;
  b =
    $.d.y < $.ch / 2
      ? $.d.y / $.ch
      : $.d.y > $.ia - $.ch / 2
      ? 1 - ($.ia - $.d.y) / $.ch
      : 0.5;
  a = ($.c * a - $.d.x - $.screen.x) / 30;
  b = ($.ch * b - $.d.y - $.screen.y) / 30;
  $.screen.x += a * $.j;
  $.screen.y += b * $.j;
  0 < $.ba.l
    ? (($.ba.l -= $.ba.Oc),
      ($.ba.l = 0 > $.ba.l ? 0 : $.ba.l),
      ($.ba.x = $.b.f(-$.ba.l, $.ba.l)),
      ($.ba.y = $.b.f(-$.ba.l, $.ba.l)))
    : (($.ba.x = 0), ($.ba.y = 0));
  $.ma.style.marginLeft =
    -(($.ma.width - $.c) / 2) -
    (($.ma.width - $.c) / 2) *
      ((-$.screen.x - ($.ha - $.c) / 2) / (($.ha - $.c) / 2)) -
    $.ba.x +
    "px";
  $.ma.style.marginTop =
    -(($.ma.height - $.ch) / 2) -
    (($.ma.height - $.ch) / 2) *
      ((-$.screen.y - ($.ia - $.ch) / 2) / (($.ia - $.ch) / 2)) -
    $.ba.y +
    "px";
  $.Da.style.marginLeft =
    -(($.Da.width - $.c) / 2) -
    (($.Da.width - $.c) / 2) *
      ((-$.screen.x - ($.ha - $.c) / 2) / (($.ha - $.c) / 2)) -
    $.ba.x +
    "px";
  $.Da.style.marginTop =
    -(($.Da.height - $.ch) / 2) -
    (($.Da.height - $.ch) / 2) *
      ((-$.screen.y - ($.ia - $.ch) / 2) / (($.ia - $.ch) / 2)) -
    $.ba.y +
    "px";
  $.Ea.style.marginLeft =
    -(($.Ea.width - $.c) / 2) -
    (($.Ea.width - $.c) / 2) *
      ((-$.screen.x - ($.ha - $.c) / 2) / (($.ha - $.c) / 2)) -
    $.ba.x +
    "px";
  $.Ea.style.marginTop =
    -(($.Ea.height - $.ch) / 2) -
    (($.Ea.height - $.ch) / 2) *
      ((-$.screen.y - ($.ia - $.ch) / 2) / (($.ia - $.ch) / 2)) -
    $.ba.y +
    "px";
  $.xa.style.marginLeft =
    -(($.xa.width - $.c) / 2) -
    (($.xa.width - $.c) / 2) *
      ((-$.screen.x - ($.ha - $.c) / 2) / (($.ha - $.c) / 2)) -
    $.ba.x +
    "px";
  $.xa.style.marginTop =
    -(($.xa.height - $.ch) / 2) -
    (($.xa.height - $.ch) / 2) *
      ((-$.screen.y - ($.ia - $.ch) / 2) / (($.ia - $.ch) / 2)) -
    $.ba.y +
    "px";
  $.ic();
};
$.md = function() {
  $.l.Ha >= $.l.Ta &&
    ($.l.current + 1 < $.Ac
      ? ($.l.current++,
        ($.l.Ha = 0),
        ($.l.Ta = $.o.cb[$.l.current].Ta),
        ($.l.ab = $.o.cb[$.l.current].ab),
        ($.l.uc = $.l.ab.length))
      : ($.l.current++, ($.l.Ha = 0)),
    ($.bb = $.l.current + 1 - $.Ac),
    $.Ua.push(new $.xb({ l: $.l.current + 1 })));
};
$.nd = function() {
  0 < $.p[0] &&
    (1 > $.d.k && ($.d.k += 0.001), 1 < $.d.k && ($.d.k = 1), ($.p[0] -= $.j));
  0 < $.p[1] ? (($.qa = 1), ($.p[1] -= $.j)) : ($.qa = 0);
  0 < $.p[2]
    ? (($.d.s.Fb = 2), ($.d.s.Aa.speed = 14), ($.p[2] -= $.j))
    : (($.d.s.Fb = 5), ($.d.s.Aa.speed = 10));
  0 < $.p[3] ? (($.d.s.count = 3), ($.p[3] -= $.j)) : ($.d.s.count = 1);
  0 < $.p[4] ? (($.d.s.Aa.ub = 1), ($.p[4] -= $.j)) : ($.d.s.Aa.ub = 0);
};
$.jd = function(a, b) {
  if (0.1 > Math.random()) {
    var c = Math.floor($.b.f(0.9 > $.d.k ? 0 : 1, $.o.ka.length)),
      d = $.o.ka[c];
    d.type = c;
    d.x = a;
    d.y = b;
    $.ka.push(new $.Tb(d));
  }
};
$.ua = function(a) {
  $.buttons.length = 0;
  if ("menu" == a) {
    document.getElementById("claim").style.display = "none";
    $.w.oa = 0;
    $.w.Wb = 0;
    $.w.Xb = 0;
    $.reset();
    var b = new $.va({
      x: $.c / 2 + 1,
      y: $.ch / 2 - 24,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "PLAY",
      action: function() {
        $.reset();
        $.da.play("levelup");
        $.ua("play");
      },
    });
    $.buttons.push(b);
    b = new $.va({
      x: $.c / 2 + 1,
      y: b.ga + 25,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "STATS",
      action: function() {
        $.ua("stats");
      },
    });
    $.buttons.push(b);
    b = new $.va({
      x: $.c / 2 + 1,
      y: b.ga + 26,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "CREDITS",
      action: function() {
        $.ua("credits");
      },
    });
    $.buttons.push(b);
  }
  "stats" == a &&
    (($.w.oa = 0),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: 426,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "CLEAR DATA",
      action: function() {
        $.w.oa = 0;
        window.confirm(
          "Are you sure you want to clear all locally stored game data? This cannot be undone."
        ) && ($.Lc(), ($.w.oa = 0));
      },
    })),
    $.buttons.push(b),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: b.ga + 25,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "MENU",
      action: function() {
        $.ua("menu");
      },
    })),
    $.buttons.push(b));
  "credits" == a &&
    (($.w.oa = 0),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: 476,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "JS13KGAMES",
      action: function() {
        location.href = "http://js13kgames.com";
        $.w.oa = 0;
      },
    })),
    $.buttons.push(b),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: b.ga + 25,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "MENU",
      action: function() {
        $.ua("menu");
      },
    })),
    $.buttons.push(b));
  "pause" == a &&
    (($.w.oa = 0),
    ($.mc = $.a.getImageData(0, 0, $.c, $.ch)),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: $.ch / 2 + 26,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "RESUME",
      action: function() {
        $.hc = Date.now() + 1e3;
        $.ua("play");
      },
    })),
    $.buttons.push(b),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: b.ga + 25,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "MENU",
      action: function() {
        $.w.oa = 0;
        window.confirm(
          "Are you sure you want to end this game and return to the menu?"
        ) && ($.ic(), $.ua("menu"));
      },
    })),
    $.buttons.push(b));
  "gameover" == a &&
    (($.w.oa = 0),
    (document.getElementById("claim").style.display = "block"),
    ($.mc = $.a.getImageData(0, 0, $.c, $.ch)),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: 426,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "PLAY AGAIN",
      action: function() {
        document.getElementById("claim").style.display = "none";
        $.reset();
        $.da.play("levelup");
        $.ua("play");
      },
    })),
    $.buttons.push(b),
    (b = new $.va({
      x: $.c / 2 + 1,
      y: b.ga + 25,
      Ja: 299,
      Ia: 49,
      scale: 3,
      title: "MENU",
      action: function() {
        $.ua("menu");
      },
    })),
    $.buttons.push(b),
    ($.ea.score = Math.max($.ea.score, $.mb)),
    ($.ea.level = Math.max($.ea.level, $.l.current)),
    ($.ea.rounds += 1),
    ($.ea.kills += $.Ha),
    ($.ea.bullets += $.Zb),
    ($.ea.powerups += $.kc),
    ($.ea.time += Math.floor($.Cb)),
    $.oc());
  $.state = a;
};
$.fd = function() {
  $.gb.menu = function() {
    $.ib();
    $.Gc();
    for (var a = $.buttons.length; a--; ) $.buttons[a].update(a);
    for (a = $.buttons.length; a--; ) $.buttons[a].i(a);
    $.a.beginPath();
    a = $.text({
      v: $.a,
      x: $.c / 2,
      y: $.ch / 2 - 100,
      text: "RADIUS RAID",
      r: 2,
      $: 1,
      t: "center",
      u: "bottom",
      scale: 10,
      ca: 1,
      i: 1,
    });
    gradient = $.a.createLinearGradient(a.la, a.na, a.la, a.ga);
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "#999");
    $.a.fillStyle = gradient;
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2,
      y: $.ch - 172,
      text: "CREATED BY JACK RUGILE FOR JS13KGAMES 2013",
      r: 1,
      $: 1,
      t: "center",
      u: "bottom",
      scale: 1,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = "#666";
    $.a.fill();
  };
  $.gb.stats = function() {
    $.ib();
    $.a.beginPath();
    var a = $.text({
        v: $.a,
        x: $.c / 2,
        y: 150,
        text: "STATS",
        r: 3,
        $: 1,
        t: "center",
        u: "bottom",
        scale: 10,
        ca: 1,
        i: 1,
      }),
      b = $.a.createLinearGradient(a.la, a.na, a.la, a.ga);
    b.addColorStop(0, "#fff");
    b.addColorStop(1, "#999");
    $.a.fillStyle = b;
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2 - 10,
      y: a.ga + 39,
      text:
        "BEST SCORE\nBEST LEVEL\nROUNDS PLAYED\nENEMIES KILLED\nBULLETS FIRED\nPOWERUPS COLLECTED\nTIME ELAPSED",
      r: 1,
      $: 17,
      t: "right",
      u: "top",
      scale: 2,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2 + 10,
      y: a.ga + 39,
      text:
        $.b.Pa($.ea.score) +
        "\n" +
        ($.ea.level + 1) +
        "\n" +
        $.b.Pa($.ea.rounds) +
        "\n" +
        $.b.Pa($.ea.kills) +
        "\n" +
        $.b.Pa($.ea.bullets) +
        "\n" +
        $.b.Pa($.ea.powerups) +
        "\n" +
        $.b.rc(($.ea.time * (1e3 / 60)) / 1e3),
      r: 1,
      $: 17,
      t: "left",
      u: "top",
      scale: 2,
      ca: 1,
      i: 1,
    });

    $.a.fillStyle = "#fff";
    $.a.fill();
    for (a = $.buttons.length; a--; ) $.buttons[a].i(a);
    for (a = $.buttons.length; a--; ) $.buttons[a].update(a);
  };
  $.gb.credits = function() {
    $.ib();
    $.a.beginPath();
    var a = $.text({
        v: $.a,
        x: $.c / 2,
        y: 100,
        text: "CREDITS",
        r: 3,
        $: 1,
        t: "center",
        u: "bottom",
        scale: 10,
        ca: 1,
        i: 1,
      }),
      b = $.a.createLinearGradient(a.la, a.na, a.la, a.ga);
    b.addColorStop(0, "#fff");
    b.addColorStop(1, "#999");
    $.a.fillStyle = b;
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2 - 10,
      y: a.ga + 49,
      text:
        "CREATED FOR JS13KGAMES BY\nINSPIRATION AND SUPPORT\n\nAUDIO PROCESSING\nGAME INSPIRATION AND IDEAS\n\nHTML5 CANVAS REFERENCE\n\nGAME MATH REFERENCE",
      r: 1,
      $: 17,
      t: "right",
      u: "top",
      scale: 2,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2 + 10,
      y: a.ga + 49,
      text:
        "@JACKRUGILE\n@REZONER, @LOKTAR00, @END3R,\n@AUSTINHALLOCK, @CHANDLERPRALL\nJSFXR BY @MARKUSNEUBRAND\nASTEROIDS, CELL WARFARE,\nSPACE PIPS, AND MANY MORE\nNIHILOGIC HTML5\nCANVAS CHEAT SHEET\nBILLY LAMBERTA FOUNDATION\nHTML5 ANIMATION WITH JAVASCRIPT",
      r: 1,
      $: 17,
      t: "left",
      u: "top",
      scale: 2,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = "#fff";
    $.a.fill();
    for (a = $.buttons.length; a--; ) $.buttons[a].i(a);
    for (a = $.buttons.length; a--; ) $.buttons[a].update(a);
  };
  $.gb.play = function() {
    $.ld();
    $.Gc();
    $.md();
    $.nd();
    $.gd();
    $.fc += $.qa ? $.j / 3 : $.j;
    for (var a = $.pa.length; a--; ) $.pa[a].update(a);
    for (a = $.Ra.length; a--; ) $.Ra[a].update(a);
    for (a = $.ka.length; a--; ) $.ka[a].update(a);
    for (a = $.ta.length; a--; ) $.ta[a].update(a);
    for (a = $.hb.length; a--; ) $.hb[a].update(a);
    for (a = $.Ua.length; a--; ) $.Ua[a].update(a);
    for (a = $.Ca.length; a--; ) $.Ca[a].update(a);
    $.d.update();
    $.ib();
    $.a.save();
    $.a.translate($.screen.x - $.ba.x, $.screen.y - $.ba.y);
    for (a = $.pa.length; a--; ) $.pa[a].i(a);
    for (a = $.Ra.length; a--; ) $.Ra[a].i(a);
    for (a = $.ka.length; a--; ) $.ka[a].i(a);
    for (a = $.ta.length; a--; ) $.ta[a].i(a);
    for (a = $.hb.length; a--; ) $.hb[a].i(a);
    for (a = $.Ca.length; a--; ) $.Ca[a].i(a);
    $.d.i();
    $.a.restore();
    for (a = $.Ua.length; a--; ) $.Ua[a].i(a);
    $.dd();
    $.ed();
    if (
      0 >= $.d.k &&
      ((a = 0.8 * ($.Gb / $.wc)),
      (a = Math.min(1, Math.max(0, a))),
      ($.a.fillStyle = "hsla(0, 100%, 0%, " + a + ")"),
      $.a.fillRect(0, 0, $.c, $.ch),
      $.Gb < $.wc ? ($.Gb += $.j) : $.ua("gameover"),
      !$.vc)
    ) {
      $.da.play("death");
      $.ba.l = 25;
      $.Ra.push(
        new $.wb({
          x: $.d.x + $.b.f(-10, 10),
          y: $.d.y + $.b.f(-10, 10),
          e: 50,
          g: 0,
          m: 0,
        })
      );
      $.ta.push(
        new $.Ma({
          x: $.d.x,
          y: $.d.y,
          count: 45,
          Za: 10,
          Na: 0.95,
          Xa: 2,
          Wa: 20,
          Qa: 0,
          Va: $.La,
          g: 0,
          m: 0,
        })
      );
      for (a = 0; a < $.p.length; a++) $.p[a] = 0;
      $.vc = 1;
    }
    $.fa += $.j;
    $.keys.vb.tb && $.ua("pause");
    $.keys.vb.Db && (($.ob = ~~!$.ob), ($.ea.autofire = $.ob), $.oc());
  };
  $.gb.pause = function() {
    $.ib();
    $.a.putImageData($.mc, 0, 0);
    $.a.fillStyle = "hsla(0, 0%, 0%, 0.4)";
    $.a.fillRect(0, 0, $.c, $.ch);
    $.a.beginPath();
    var a = $.text({
        v: $.a,
        x: $.c / 2,
        y: $.ch / 2 - 50,
        text: "PAUSED",
        r: 3,
        $: 1,
        t: "center",
        u: "bottom",
        scale: 10,
        ca: 1,
        i: 1,
      }),
      a = $.a.createLinearGradient(a.la, a.na, a.la, a.ga);
    a.addColorStop(0, "#fff");
    a.addColorStop(1, "#999");
    $.a.fillStyle = a;
    $.a.fill();
    for (a = $.buttons.length; a--; ) $.buttons[a].i(a);
    for (a = $.buttons.length; a--; ) $.buttons[a].update(a);
    $.keys.vb.tb && $.ua("play");
  };
  $.gb.gameover = function() {
    $.ib();
    $.a.putImageData($.mc, 0, 0);
    for (var a = $.buttons.length; a--; ) $.buttons[a].update(a);
    for (a = $.buttons.length; a--; ) $.buttons[a].i(a);
    $.a.beginPath();
    var a = $.text({
        v: $.a,
        x: $.c / 2,
        y: 150,
        text: "GAME OVER",
        r: 3,
        $: 1,
        t: "center",
        u: "bottom",
        scale: 10,
        ca: 1,
        i: 1,
      }),
      b = $.a.createLinearGradient(a.la, a.na, a.la, a.ga);
    b.addColorStop(0, "#f22");
    b.addColorStop(1, "#b00");
    $.a.fillStyle = b;
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2 - 10,
      y: a.ga + 51,
      text: "SCORE\nLEVEL\nKILLS\nBULLETS\nPOWERUPS\nTIME",
      r: 1,
      $: 17,
      t: "right",
      u: "top",
      scale: 2,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = "hsla(0, 0%, 100%, 0.5)";
    $.a.fill();
    $.a.beginPath();
    $.text({
      v: $.a,
      x: $.c / 2 + 10,
      y: a.ga + 51,
      text:
        $.b.Pa($.mb) +
        "\n" +
        ($.l.current + 1) +
        "\n" +
        $.b.Pa($.Ha) +
        "\n" +
        $.b.Pa($.Zb) +
        "\n" +
        $.b.Pa($.kc) +
        "\n" +
        $.b.rc(($.Cb * (1e3 / 60)) / 1e3),
      r: 1,
      $: 17,
      t: "left",
      u: "top",
      scale: 2,
      ca: 1,
      i: 1,
    });
    $.a.fillStyle = "#fff";
    $.a.fill();
  };
};
$.loop = function() {
  requestAnimFrame($.loop);
  for (var a in $.keys.state)
    $.keys.vb[a] = $.keys.state[a] && !$.jc[a] ? 1 : 0;
  $.gb[$.state]();
  if ($.keys.vb.Jb) {
    $.sb = ~~!$.sb;
    for (var b = $.da.lc.length; b--; ) $.da.lc[b].volume = ~~!$.sb;
    $.ea.mute = $.sb;
    $.oc();
  }
  $.jc = {};
  for (a in $.keys.state) $.jc[a] = $.keys.state[a];
};
function loadRaid() {
  document.documentElement.className += " loaded";
  $.Rc();
}
