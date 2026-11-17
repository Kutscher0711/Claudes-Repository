/* Formkurve Gewichtsvergleich. Eine Waage zeigt, womit das bewegte Gewicht gleichzieht. */
(function () {
  var I = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  var ICON = {
    hund: '<path d="M11 5h2" /> <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" /> <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2" /> <path d="M12 18v2" /> <path d="M10 11v.01" /> <path d="M14 11v.01" /> <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815" /> <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815" />',
    kuehl: '<path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" /> <path d="M5 10h14" /> <path d="M9 13v3" /> <path d="M9 6v1" />',
    wanne: '<path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1" /> <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" /> <path d="M4 21l1 -1.5" /> <path d="M20 21l-1 -1.5" />',
    fluegel: '<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /> <path d="M9 19v-6" /> <path d="M8 5v8h2v-8" /> <path d="M15 19v-6" /> <path d="M14 5v8h2v-8" />',
    pferd: '<path d="M7 10l-.85 8.507a1.357 1.357 0 0 0 1.35 1.493h.146a2 2 0 0 0 1.857 -1.257l.994 -2.486a2 2 0 0 1 1.857 -1.257h1.292a2 2 0 0 1 1.857 1.257l.994 2.486a2 2 0 0 0 1.857 1.257h.146a1.37 1.37 0 0 0 1.364 -1.494l-.864 -9.506h-8c0 -3 -3 -5 -6 -5l-3 6l2 2l3 -2" /> <path d="M22 14v-2a3 3 0 0 0 -3 -3" />',
    auto: '<path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />',
    elefant: '<path d="M4 14v-3a5 4 0 0 1 5 -4h5"/><path d="M14 7a3.6 3.6 0 1 1 3 6.2"/><path d="M20.4 11.8c.6 2.6 .6 5.2 -1 7.2"/><path d="M4 14c0 1 1 1.5 2 1.5h9.5c1 0 1.5 -.6 1.5 -1.5v-1"/><path d="M6.5 15.5v4"/><path d="M10 15.5v4"/><path d="M13 15.5v4"/><path d="M16 14.5v5"/><path d="M4 10l-1.6 3"/><path d="M17.6 9.4v.01"/>',
    bus: '<path d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" /> <path d="M16 5l1.5 7l4.5 0" /> <path d="M2 10l15 0" /> <path d="M7 5l0 5" /> <path d="M12 5l0 5" />',
    flugzeug: '<path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3l4 7" />',
    wal: '<path d="M2.5 12.5c0 4 3.8 6.5 9 6.5c5.4 0 9 -3 9 -7.2c0 -1.6 .4 -2.8 1.6 -3.8c-1.4 -.3 -2.6 .2 -3.3 1.2c-1.4 -2.8 -4.2 -4.2 -7.6 -4.2c-5.2 0 -8.7 3.4 -8.7 7.5z"/><path d="M6 13.6c2.4 1.6 6 1.8 9 .4"/><path d="M6.6 10.6v.01"/>',
    eiffel: '<path d="M11 4c0 4.889 -2.292 12.111 -5 17" /> <path d="M13 4c0 4.889 2.292 12.111 5 17" /> <path d="M3 21h18" /> <path d="M8 14h8" /> <path d="M9 10h6" /> <path d="M10 4h4" /> <path d="M12 2v1.778" /> <path d="M10 21s.27 -1.406 .667 -2c.333 -.5 .666 -1 1.333 -1s1 .5 1.333 1c.448 .672 .667 2 .667 2" />'
  };
  /* Richtwerte in kg, bewusst gerundet */
  var OBJ = [
    { id: "hund", kg: 30, eins: "Labrador", viele: "Labradore", info: "Ein Labrador wiegt etwa 30 kg" },
    { id: "kuehl", kg: 70, eins: "Kühlschrank", viele: "Kühlschränke", info: "Ein Kühlschrank wiegt etwa 70 kg" },
    { id: "wanne", kg: 200, eins: "volle Badewanne", viele: "volle Badewannen", info: "Eine volle Badewanne wiegt etwa 200 kg" },
    { id: "fluegel", kg: 480, eins: "Konzertflügel", viele: "Konzertflügel", info: "Ein Konzertflügel wiegt etwa 480 kg" },
    { id: "pferd", kg: 600, eins: "Pferd", viele: "Pferde", info: "Ein Pferd wiegt etwa 600 kg" },
    { id: "auto", kg: 1500, eins: "Auto", viele: "Autos", info: "Ein Mittelklasseauto wiegt etwa 1,5 t" },
    { id: "elefant", kg: 6000, eins: "Elefant", viele: "Elefanten", info: "Ein Afrikanischer Elefant wiegt etwa 6 t" },
    { id: "bus", kg: 12000, eins: "Linienbus", viele: "Linienbusse", info: "Ein Linienbus wiegt etwa 12 t" },
    { id: "flugzeug", kg: 42000, eins: "Airbus A320", viele: "Airbus A320", info: "Ein leerer Airbus A320 wiegt etwa 42 t" },
    { id: "wal", kg: 150000, eins: "Blauwal", viele: "Blauwale", info: "Ein Blauwal wiegt etwa 150 t" },
    { id: "eiffel", kg: 7300000, eins: "Eiffelturm", viele: "Eiffeltürme", info: "Das Eisen des Eiffelturms wiegt etwa 7.300 t" }
  ];
  var css = ".fkv{background:var(--surface);border-radius:24px;padding:16px 16px 18px;color:var(--ink);display:flex;flex-direction:column;align-items:center;gap:4px;border:0;width:100%;font:inherit;text-align:center;-webkit-tap-highlight-color:transparent;cursor:pointer}" +
    ".fkv svg.waage{width:100%;max-width:300px;height:auto;overflow:visible}" +
    ".fkv .vk{font-size:13px;color:var(--floor-muted,var(--muted));font-weight:600}" +
    ".fkv .vz{font-family:var(--font-display);font-size:34px;font-weight:700;letter-spacing:-.025em;line-height:1.1;background:linear-gradient(135deg,var(--acc-a),var(--acc-b));-webkit-background-clip:text;background-clip:text;color:transparent;font-variant-numeric:tabular-nums}" +
    ".fkv .vi{font-size:13px;color:var(--muted)}" +
    ".fkv .vh{font-size:12px;color:var(--muted);opacity:.8;margin-top:6px}" +
    ".fkv .wechsel{animation:fkv-ein .45s var(--spring,ease-out)}" +
    "@keyframes fkv-ein{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}";
  try { var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st); } catch (e) {}
  var ruhig = false;
  try { ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  function fmt(n, st) {
    var f = Math.pow(10, st), r = Math.round(n * f) / f;
    var s = r.toFixed(st).split("."), g = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    var d = s[1] ? s[1].replace(/0+$/, "") : "";
    return g + (d ? "," + d : "");
  }
  function anzahl(n) { return n >= 10 ? fmt(n, 0) : fmt(n, 1); }
  function tonnen(kg) { return kg >= 1000 ? fmt(kg / 1000, kg >= 100000 ? 0 : 1) + " t" : fmt(kg, 0) + " kg"; }

  /* Volumen inklusive Körpergewicht bei Übungen ohne Gerät, ohne Halteübungen */
  function volumen(session, koerper) {
    var info = window.FkUebInfo || {}, sum = 0, bw = 0;
    (session.items || []).forEach(function (it) {
      var u = info[it.ex] || [];
      if (u[3]) return;
      (it.saetze || []).forEach(function (s) {
        if (!s.ok) return;
        var w = s.wdh || 0, kg = s.kg || 0;
        if (u[2] === "bw" && koerper > 0) { bw += koerper * 0.65 * w; }
        sum += kg * w;
      });
    });
    return { kg: sum + bw, mitKoerper: bw > 0 };
  }
  function hash(s) { var h = 0; s = String(s || ""); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  function kandidaten(kg) {
    var gut = OBJ.filter(function (o) { var n = kg / o.kg; return n >= 1 && n < 25; });
    if (!gut.length) gut = OBJ.filter(function (o) { var n = kg / o.kg; return n >= 1 && n < 60; });
    if (!gut.length) gut = [OBJ[0]];
    return gut.sort(function (a, b) { return Math.abs(Math.log(kg / a.kg / 3)) - Math.abs(Math.log(kg / b.kg / 3)); });
  }

  function Waage(props) {
    var h = preact.h, H = window.preactHooks;
    var ref = H.useRef(null), rot = H.useRef(null);
    var kg = props.kg, o = props.o, n = kg / o.kg;
    H.useEffect(function () {
      var g = ref.current; if (!g) return;
      var plL = g.querySelector(".pl"), plR = g.querySelector(".pr");
      function setze(a) {
        g.setAttribute("transform", "rotate(" + a.toFixed(2) + " 150 34)");
        plL.setAttribute("transform", "rotate(" + (-a).toFixed(2) + " 40 34)");
        plR.setAttribute("transform", "rotate(" + (-a).toFixed(2) + " 260 34)");
      }
      if (ruhig) { setze(0); return; }
      var t0 = performance.now(), raf;
      (function f(t) {
        var s = (t - t0) / 1000, a = s < .35 ? 16 * (s / .35) : 16 * Math.exp(-(s - .35) * 1.5) * Math.cos((s - .35) * 5.2);
        setze(a);
        if (s < 3.6) raf = requestAnimationFrame(f); else setze(0);
      })(t0);
      return function () { cancelAnimationFrame(raf); };
    }, [o.id, kg]);
    var stapel = Math.min(3, Math.max(1, Math.ceil(n))), icons = [];
    var gr = stapel === 1 ? 1.5 : stapel === 2 ? 1.2 : 1.0, bx = 24 * gr;
    for (var i = 0; i < stapel; i++) {
      var teil = i === stapel - 1 && n % 1 > 0.05 && n < 3 ? n % 1 : 1;
      var x = 260 - stapel * bx / 2 + i * bx, y = 86 - bx;
      icons.push(h("g", { transform: "translate(" + x + " " + y + ") scale(" + gr + ")", style: "color:var(--acc-a)", opacity: teil < 1 ? .35 + .65 * teil : 1,
        dangerouslySetInnerHTML: { __html: '<g ' + I + '>' + ICON[o.id] + '</g>' } }));
    }
    return h("svg", { class: "waage", viewBox: "0 -6 300 140", "aria-hidden": "true" },
      h("defs", null, h("linearGradient", { id: "fkv-g", x1: 0, y1: 0, x2: 1, y2: 1 },
        h("stop", { offset: 0, "stop-color": "var(--acc-a)" }), h("stop", { offset: 1, "stop-color": "var(--acc-b)" }))),
      h("path", { d: "M150 36 L130 126 H170 Z", fill: "var(--surface-2)" }),
      h("rect", { x: 110, y: 124, width: 80, height: 6, rx: 3, fill: "var(--surface-3)" }),
      h("g", { ref: ref },
        h("rect", { x: 14, y: 31, width: 272, height: 6, rx: 3, fill: "var(--ink)" }),
        h("circle", { cx: 150, cy: 34, r: 6, fill: "var(--ink)" }),
        h("g", { class: "pl" },
          h("path", { d: "M40 34 L12 88 M40 34 L68 88", stroke: "var(--muted)", "stroke-width": 1.4, fill: "none" }),
          h("rect", { x: 10, y: 56, width: 60, height: 30, rx: 10, fill: "url(#fkv-g)" }),
          h("text", { x: 40, y: 76, "text-anchor": "middle", "font-size": 15, "font-weight": 700, fill: "#fff", style: "font-variant-numeric:tabular-nums" }, tonnen(kg)),
          h("path", { d: "M2 86 H78 Q76 96 66 96 H14 Q4 96 2 86 Z", fill: "var(--surface-3)" })),
        h("g", { class: "pr" },
          h("path", { d: "M260 34 L232 88 M260 34 L288 88", stroke: "var(--muted)", "stroke-width": 1.4, fill: "none" }),
          h("g", null, icons),
          h("path", { d: "M222 86 H298 Q296 96 286 96 H234 Q224 96 222 86 Z", fill: "var(--surface-3)" }))));
  }

  function Vergleich(props) {
    var h = preact.h, H = window.preactHooks;
    var v = volumen(props.session || {}, props.koerper || 0);
    var liste = kandidaten(v.kg);
    var start = hash(props.session && props.session.id) % Math.min(liste.length, 3);
    var st = H.useState(start), idx = st[0], setIdx = st[1];
    if (!(v.kg >= 20)) return null;
    var o = liste[idx % liste.length], n = v.kg / o.kg;
    var mehr = liste.length > 1;
    return h("button", { class: "fkv", type: "button", onClick: function () { if (mehr) setIdx(idx + 1); },
      "aria-label": "Gleich schwer wie " + anzahl(n) + " " + (n < 1.05 ? o.eins : o.viele) + (mehr ? ". Tippen für einen anderen Vergleich" : "") },
      h(Waage, { kg: v.kg, o: o }),
      h("div", { class: "wechsel", key: o.id, style: "display:flex;flex-direction:column;align-items:center;gap:2px" },
        h("span", { class: "vk" }, "Gleich schwer wie"),
        h("span", { class: "vz" }, anzahl(n), " ", n < 1.05 ? o.eins : o.viele),
        h("span", { class: "vi" }, o.info)),
      v.mitKoerper ? h("span", { class: "vh" }, "Mit deinem Körpergewicht bei Übungen ohne Gerät") : null,
      mehr ? h("span", { class: "vh" }, "Tippen für einen anderen Vergleich") : null);
  }
  window.FkVergleich = Vergleich;
})();
