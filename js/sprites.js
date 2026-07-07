/* ============================================================
   Pixel homage sprites — original fan-art nods, Eastward-ish.
   Each sprite is a palette + row-string pixel map, rendered to
   <canvas class="sprite" data-sprite="name" data-scale="4">.
   '.' = transparent. Rows may be ragged; width = longest row.
   ============================================================ */
(function () {
  "use strict";

  var SPRITES = {

    /* ---- the moon over the ledge scene -------------------------- */
    moon: {
      pal: { m: "#dfe8f0", d: "#b7c4d3", l: "#f2f7fb" },
      rows: [
        "....mmmmmm....",
        "..mmllmmmmmm..",
        ".mmllmmmdmmmm.",
        ".mlmmmmmddmmm.",
        "mmmmmdmmmmmmmm",
        "mmmmddmmmmdmmm",
        "mmmmmdmmmddmmm",
        "mmdmmmmmmmdmmm",
        "mmddmmmmmmmmmm",
        "mmmmmmmdmmmmdm",
        ".mmmmmddmmmmm.",
        ".mmmmmmmmmdmm.",
        "..mmmmmmmmmm..",
        "....mmmmmm...."
      ]
    },

    /* ---- Lucy — silver bob, white jacket, legs over the edge ----- */
    lucy: {
      pal: {
        o: "#1a1626", w: "#eef0fa", W: "#c9c6e4", p: "#e79ad4", v: "#9d84e0",
        s: "#f6ddcd", S: "#dcb6a6", j: "#eef1f6", J: "#c6cdda",
        b: "#262738", B: "#3d3f58", e: "#30284a", r: "#d8556f"
      },
      rows: [
        ".....oooooo.......",
        "....owwwwwwo......",
        "...owwwwwwwwo.....",
        "..owwwwwwwwwwo....",
        "..osswwwwwwwwo....",
        ".ossssswwwwwwwo...",
        ".osesssewwwwwWo...",
        ".osssssssWwwwvo...",
        "..oSssssrSWwvpo...",
        "..ooSssSoWWpvpo...",
        "....ooooowWvoo....",
        "....ojJoooooo.....",
        "...ojjjjjjjo......",
        "..ojjjjjjjjjo.....",
        "..ojjbbbbbjjjo....",
        ".ojjobbbbbojjo....",
        ".ojjobbbbbojjo....",
        ".osjobbbbbojso....",
        "..oobbbbbbboo.....",
        "...obbbobbbo......",
        "...obbbobbbo......",
        "...obbo.obbo......",
        "...obbo.obbo......",
        "...obbo.obbo......",
        "...oBBo.oBBo......",
        "...oooo.oooo......"
      ],
      seat: 18
    },

    /* ---- Rebecca — mint twintails, white boots, mid-kick --------- */
    rebecca: {
      pal: {
        o: "#1a1626", g: "#9fe8b0", G: "#5fc47e",
        s: "#f8e3d4", S: "#e0bfa9", j: "#eef1f6", J: "#c6cdda",
        b: "#2a2b3a", e: "#d84b5a"
      },
      rows: [
        "......ooooooo.........",
        ".oo..ogggggggo..oo....",
        "oggo.ogggggggo.oggo...",
        "oggooggsssssggooggo...",
        ".oggogsssssssgoggo....",
        ".oggogsesssesgoggo....",
        "..ogogsssssssgogo.....",
        "..oggoSssssSogggo.....",
        "...ogo.ossso.ogo......",
        "....o..ojjo...o.......",
        "......ojjjjo..........",
        ".....ojjjjjjo.........",
        "....ojjjjjjjjo........",
        "....osjjjjjjso........",
        "....osjjjjjjso........",
        ".....obbbbbbo.........",
        ".....obbbbbbo.........",
        ".....osso.osso........",
        ".....osso..osso.......",
        ".....osso..osso.......",
        ".....ojjo...ojjo......",
        ".....ojjo...ojjo......",
        ".....oJJo...oJJo......",
        ".....oooo...oooo......"
      ],
      seat: 16
    },

    /* ---- Kiwi — purple bob, mask, sitting cross-legged ----------- */
    kiwi: {
      pal: {
        o: "#1a1626", v: "#8f6fd8", V: "#6a4fb2",
        s: "#eccab4", m: "#232433", b: "#23283a", B: "#39405a",
        c: "#35d8dc", g: "#e8b64e", e: "#2a2140"
      },
      rows: [
        "....oooooo........",
        "..oovvvvvvoo......",
        ".ovvvvvvvvvvo.....",
        ".ovvvvvvvvvvo.....",
        ".ovssssssvvvo.....",
        ".ovsessesvvVo.....",
        ".ovmmmmmmsvVo.....",
        "..ommmmmmoVVo.....",
        "..govvoooooVo.....",
        "...oobbbboo.......",
        "..obbbbbbbbo......",
        ".obbcbbbbbcbo.....",
        ".obbcbbbbbcbo.....",
        ".obbbbbbbbbbo.....",
        "..obbbbbbbbo......",
        "..obbbbbbbbbo.....",
        ".obbbbcbbbbbbo....",
        "obbbbbbbbcbbbbo...",
        "obbBoobbbboBbbo...",
        ".oooo.oooo.oooo..."
      ]
    },

    /* ---- Faith — running her route, red shoes ------------------- */
    faith: {
      pal: {
        o: "#1a1626", k: "#1d1b24", K: "#34313e",
        s: "#e8bfa0", S: "#cf9f83", w: "#f2f4f6", W: "#d2d7de",
        b: "#24242e", r: "#e0362c", R: "#a8241d", e: "#2a2140"
      },
      rows: [
        ".................ooooo....",
        "................okkkkko...",
        "...............okkkkkkko..",
        "...............okkssssso..",
        "...............oksssseso..",
        "................okSsssso..",
        ".................ooSsoo...",
        "...............owwwwo....",
        "..........ooowwwwwwwosso..",
        "......ossowwwwwwwwo.osro..",
        "......oso.owwwwwWo........",
        "..........owwwwWo.........",
        "..........obbbbbo.........",
        ".......oo.obbbbbbo........",
        ".....obbo..obbbbbbo.......",
        "....orbbo...obbbbo........",
        "....oRo.....obbbo.........",
        "....oo.......obbbo........",
        "..............obbo........",
        "..............obbboo......",
        "...............orrrro.....",
        "................oRRRoo...."
      ]
    },

    /* ---- the Commander — arms crossed, N7 stripe ----------------- */
    shep: {
      pal: {
        o: "#1a1626", h: "#b5432f", H: "#d7644a",
        s: "#edc6ae", S: "#d3a68b", e: "#3f7f68",
        a: "#2c313d", A: "#454c5e", r: "#c22e3a", w: "#e8eaee", B: "#1e222c"
      },
      rows: [
        ".....oooooo.......",
        "....ohhhhhho......",
        "...ohhhhhhhho.....",
        "...ohHssssHho.....",
        "...ohssssssho.....",
        "...osessessho.....",
        "...ossssssso......",
        "...oSssssSso......",
        "....oSssssoo......",
        ".....oosso........",
        "...ooaaaaaaoo.....",
        "..oaaaaaaaaaao....",
        ".oraoaaaaaaoaao...",
        ".owaoaaraaaoaao...",
        ".oraAAAAAAAAaao...",
        ".owasAAAAAAsaao...",
        "..ooaaaaaaaaoo....",
        "...oBBBBBBBBo.....",
        "....oaaaaaao......",
        "...oaaao.oaaao....",
        "...oaao...oaao....",
        "...oaao...oaao....",
        "...oAAo...oAAo....",
        "...oaao...oaao....",
        "..oBBBo...oBBBo...",
        "..oBBBo...oBBBo...",
        "..ooooo...ooooo..."
      ]
    },

    /* ---- the sniper — visor, mandibles, cobalt armor -------------- */
    garrus: {
      pal: {
        o: "#1a1626", g: "#9aa0a8", G: "#767c86", f: "#5c626c",
        c: "#4f7fd8", v: "#57c8f0", V: "#2b6fa8",
        a: "#3d4c66", A: "#55688a", C: "#3b6fd4", e: "#2a2140", B: "#232c3e"
      },
      rows: [
        "..offo....offo......",
        "...offffffffo.......",
        "..oggggggggggo......",
        "..ogggggggggggo.....",
        "..ogcgggggggcgo.....",
        "..ogegggggggeVvvvv..",
        "..oggccccccgggo.....",
        ".oGogggggggggoGo....",
        ".oGoGgggggggGoGo....",
        "..oo.oGggGo..oo.....",
        ".....ooooo..........",
        "....ooaaaaaoo.......",
        "..ooaaaaaaaaaoo.....",
        ".oaaAAAAAAAAAaao....",
        ".oaaoaCCCCCaoaao....",
        ".oAaoaCaaaCaoAao....",
        ".oaaoaaaaaaaoaao....",
        "..oo.oaaaaao.oo.....",
        ".....oaaaaao........",
        "....oaaooaaao.......",
        "....oaao.oaao.......",
        "....oaao.oaao.......",
        "....oAAo.oAAo.......",
        "....oaao.oaao.......",
        "...oBBBo.oBBBo......",
        "...oBBBo.oBBBo......",
        "...ooooo.ooooo......"
      ]
    },

    /* ---- the engineer — hood, glowing eyes, purple suit ----------- */
    tali: {
      pal: {
        o: "#1a1626", d: "#4a3a6e", D: "#5d4a88",
        V: "#2a2038", e: "#cfeef8",
        p: "#7a5fae", P: "#9a7fd0", b: "#38304e", B: "#2c2540"
      },
      rows: [
        ".....oooooo.......",
        "...ooddddddoo.....",
        "..odddVVVVdddo....",
        ".oddVVVVVVVVddo...",
        ".odVeeVVVVeeVdo...",
        ".odVeeVVVVeeVdo...",
        ".oddVVVVVVVVddo...",
        "..odddVVVVdddo....",
        "..oddodddddoddo...",
        "...oo.opppo.oo....",
        "....opppppppo.....",
        "...oppPppppppo....",
        "..oppoppppppoppo..",
        "..oppobbbbbbopppo.",
        "..oPpoppppppo.oppo",
        "..oppoppppppo.oppo",
        "...oo.pppppp.oppo.",
        ".....opppppoppo...",
        "....opppopppo.....",
        "....oppo.oppo.....",
        "....oppo.oppo.....",
        "....oPPo.oPPo.....",
        "....oppo.oppo.....",
        "...oBBo...oBBo....",
        "...oooo...oooo...."
      ]
    }
  };

  function render(cv) {
    var def = SPRITES[cv.dataset.sprite];
    if (!def) return;
    var rows = def.rows, pal = def.pal;
    var h = rows.length, w = 0, y, x;
    for (y = 0; y < h; y++) w = Math.max(w, rows[y].length);
    cv.width = w;
    cv.height = h;
    var ctx = cv.getContext("2d");
    for (y = 0; y < h; y++) {
      for (x = 0; x < rows[y].length; x++) {
        var c = pal[rows[y][x]];
        if (c) { ctx.fillStyle = c; ctx.fillRect(x, y, 1, 1); }
      }
    }
    var s = Number(cv.dataset.scale) || 4;
    cv.style.width = (w * s) + "px";
    cv.style.height = (h * s) + "px";
  }

  document.querySelectorAll("canvas.sprite").forEach(render);
})();
