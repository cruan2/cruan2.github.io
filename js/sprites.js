/* ============================================================
   Pixel homage sprites — original fan-art easter eggs.
   Each sprite is a palette + row-string pixel map, rendered to
   <canvas class="sprite" data-sprite="name" data-scale="3">.
   '.' = transparent. Rows may be ragged; width = longest row.
   Light source: top-left. Outlines are warm dark, not black.
   ============================================================ */
(function () {
  "use strict";

  var SPRITES = {

    /* ---- the moon over the ledge scene -------------------------- */
    moon: {
      pal: { m: "#dfe8f0", d: "#b7c4d3", l: "#f2f7fb", s: "#a9b8c8" },
      rows: [
        ".....mmmmmm.....",
        "...mmllmmmmmm...",
        "..mlllmmmdmmmm..",
        ".mllmmmmddmmmmm.",
        ".mlmmmdmmmmmmdm.",
        "mmmmmddmmmmddmmm",
        "mmmmmdmmmmmddmmm",
        "mmdmmmmmmmmmdmmm",
        "mmddmmmmdmmmmmsm",
        "mmmdmmmddmmmmmsm",
        ".mmmmmmdmmmmssm.",
        ".mmmmmmmmmmmssm.",
        "..mmmmmmmmsssm..",
        "...mmmmmmsssm...",
        ".....mmmmmm....."
      ]
    },

    /* ---- Lucy — silver bob, white jacket, legs over the edge ----- */
    lucy: {
      pal: {
        o: "#2b2436",
        h: "#f4f2ff", H: "#d8d4ef", x: "#aea8d2", p: "#e88fd8", v: "#8f74d8",
        s: "#f8e0d0", S: "#e3c0ab", z: "#c79a86", e: "#3a2f52",
        j: "#f2f4f8", J: "#ccd2e0", y: "#a3aac0",
        b: "#34324a", B: "#454360", n: "#211f30"
      },
      rows: [
        ".........oooooo.........",
        ".......oohhhhhhoo.......",
        "......ohhhhhhhhhho......",
        ".....ohhhhhhhhhhhho.....",
        "....ohhhhhhhhhhhhho.....",
        "....ohhssshhhhhhhho.....",
        "...ohssssssshhhhhhho....",
        "...ohsesssesshhhhhHo....",
        "...ohsssssssssHhhHxo....",
        "...ohzssssssszHHhHxo....",
        "....ozssssssszxHxvpo....",
        "....oozsssszooxxvpo.....",
        "......ooooo..oxvpoo.....",
        "......ojJoo...ooo.......",
        ".....ojjjjoo............",
        "....ojjjjjjjjoo.........",
        "...ojjjjjjjjjjjo........",
        "..ojjjobbbbbojjjo.......",
        "..ojjyobbbbboyjjo.......",
        "..oJjyobbbbboyjJo.......",
        "..osJyobbbbboyJso.......",
        "..oszoobbbbboozso.......",
        "...oo.obbbbbo..oo.......",
        "......obbbbbbo..........",
        ".....obbbbbbbbo.........",
        ".....obbbonbbbo.........",
        ".....obbo..obbo.........",
        ".....obbo..obbo.........",
        ".....oBbo..oBbo.........",
        ".....oBbo..oBbo.........",
        ".....onno..onno.........",
        ".....onno..onno.........",
        ".....oooo..oooo........."
      ]
    },

    /* ---- Rebecca — long twintails, tall white boots --------------- */
    rebecca: {
      pal: {
        o: "#2b2436",
        g: "#a8ecb8", G: "#63c47f", n: "#3f8f58",
        s: "#f8e3d4", S: "#e3c2ac", z: "#caa08c", e: "#d84b5a",
        j: "#f2f4f8", J: "#ccd2e0",
        b: "#34324a"
      },
      rows: [
        "..........ooooooo.............",
        "........oogggggggoo...........",
        ".oo...oggggggggggggo...oo.....",
        "oggo..oggggggggggggo..oGgo....",
        "ogGgoogggssssssssggooggGo.....",
        ".ogGgoggsssssssssgggogGo......",
        ".ogGgogsseessseesggogGgo......",
        "..ognggssssssssssgogGo........",
        "..ogGogzssssssszsgooGo........",
        "...ogo.ozssssszo..ogno........",
        "...ono..oosssoo...oGo.........",
        "....o....ossoo.....o..........",
        ".........ojjjo................",
        "........ojjjjjo...............",
        ".......ojjjjjjjo..............",
        "......ojjjjjjjjjo.............",
        ".....osjjjjjjjjjso............",
        ".....osjjjjjjjjjso............",
        "......ojjjjjjjjjo.............",
        "......obbbbbbbbo..............",
        "......obbbbbbbbo..............",
        "......ossoo.osso..............",
        "......osso...osso.............",
        "......oSso...oSso.............",
        "......ojjo....ojjo............",
        "......ojjo....ojjo............",
        "......ojjo....ojjo............",
        "......oJJo....oJJo............",
        "......oJJo....oJJo............",
        "......oooo....oooo............"
      ]
    },

    /* ---- Kiwi — purple bob, face mask, cross-legged --------------- */
    kiwi: {
      pal: {
        o: "#2b2436",
        v: "#9678e0", V: "#6a4fb2",
        s: "#efd0ba", e: "#3a2f52",
        m: "#232433", b: "#292e44", B: "#3d4463",
        c: "#35d8dc", g: "#e8b64e"
      },
      rows: [
        ".......oooooooo.........",
        ".....oovvvvvvvvoo.......",
        "....ovvvvvvvvvvvvo......",
        "...ovvvvvvvvvvvvvvo.....",
        "...ovVssssssssvvVvo.....",
        "...ovVsessessssvVvo.....",
        "...ovVsssssssssvVvo.....",
        "...ovVmmmmmmmmsvVvo.....",
        "...ogvmmmmmmmmovVvo.....",
        "....ovvommmmoovVvo......",
        ".....ovvooooovVvo.......",
        "......oovvvvvvoo........",
        ".......obbbbbbo.........",
        ".....oobbbbbbbboo.......",
        "....obbbbbbbbbbbbo......",
        "...obbcbbbbbbbbcbbo.....",
        "...obbcbbbbbbbbcbbo.....",
        "...obbbbbbbbbbbbbbo.....",
        "...oBbbbbbbbbbbbbBo.....",
        "..obbbbbbbbbbbbbbbbo....",
        "..obbbccbbbbbbccbbbo....",
        ".obbbbbbbbbbbbbbbbbbo...",
        ".obbBBobbbbbbbboBBbbo...",
        "..oooo.obbbbbbo.oooo....",
        ".......oooooooo........."
      ]
    },

    /* ---- Faith — running her route, red shoes -------------------- */
    faith: {
      pal: {
        o: "#2b2436",
        k: "#211e2a", K: "#38343f",
        s: "#eec4a4", z: "#d3a284", e: "#2a2140",
        w: "#f4f6f8", W: "#d4d9e0",
        b: "#282834", r: "#e0362c", R: "#a8241d"
      },
      rows: [
        "....................ooooo.....",
        "..................ookkkkkoo...",
        ".................okkkkkkkkko..",
        ".................okkkkkkkkko..",
        ".................okkssssssko..",
        ".................okssssseso...",
        "..................okzssssso...",
        "..................ookzsszo....",
        "................oowwwwoo......",
        ".............oowwwwwwwwoo.....",
        "...........oowwwwwwwwwwwsso...",
        ".........oswwwwwwwwwwo.ossro..",
        ".......ossowwwwwwwWo....oo....",
        "......osso.owwwwWWo...........",
        ".....oszo..owwWWWo............",
        ".....oo....obbbbbo............",
        "..........obbbbbbbo...........",
        "........oo.obbbbbbbo..........",
        "......obbo..obbbbbbo..........",
        "....obbbbo...obbbbo...........",
        "...orbbbo....obbbbo...........",
        "...orrbo......obbbo...........",
        "...oRRo........obbbo..........",
        "....oo.........obbboo.........",
        "...............orrrrro........",
        "................oRRRRoo......."
      ]
    },

    /* ---- the Commander — arms crossed, N7 stripe ------------------ */
    shep: {
      pal: {
        o: "#2b2436",
        h: "#d7644a", x: "#8f3323",
        s: "#f2cfb4", z: "#d8ab8e", e: "#3f6f5c",
        a: "#333846", A: "#4d5468", n: "#20242e",
        r: "#c22e3a", w: "#e8eaee"
      },
      rows: [
        "........oooooo..........",
        "......oohhhhhhoo........",
        ".....ohhhhhhhhhho.......",
        ".....ohhsssssshho.......",
        ".....ohssssssssho.......",
        ".....osessesssso........",
        ".....ossssssssso........",
        ".....ozssssssszo........",
        "......ozssssszo.........",
        ".......oozzoo...........",
        "......ooaaaaoo..........",
        "....ooaaaaaaaaoo........",
        "..ooaaaaaaaaaaaaoo......",
        ".oaaaaaaaaaaaaaaaao.....",
        ".oraaoaaaaaaaaoaaao.....",
        ".owaaoaaaraaaaoaaao.....",
        ".oraaoaaaaaaaaoaaao.....",
        ".owaaoAAAAAAAAoaaao.....",
        ".oraaAAAAAAAAAAaaao.....",
        ".owaasAAAAAAAAsaaao.....",
        "..oaaoaaaaaaaaoaaoo.....",
        "..ooaoaaaaaaaaoaoo......",
        "...ooaaaaaaaaaaoo.......",
        "....onnnnnnnnnno........",
        "....oaaaaaaaaaao........",
        "....oaaaooooaaao........",
        "....oaaao..oaaao........",
        "....oaaao..oaaao........",
        "....oAaao..oAaao........",
        "....oaaao..oaaao........",
        "....oaaao..oaaao........",
        "...onnnno..onnnno.......",
        "...onnnno..onnnno.......",
        "...ooooo....ooooo......."
      ]
    },

    /* ---- the sniper — fringe crest, mandibles, visor -------------- */
    garrus: {
      pal: {
        o: "#2b2436",
        g: "#a2a8b0", G: "#7c828c", f: "#5e646e",
        c: "#4f7fd8", e: "#2a2140",
        v: "#57c8f0", V: "#2b6fa8",
        a: "#414f6a", A: "#5a6d90", C: "#3b6fd4", n: "#28324a"
      },
      rows: [
        "...oo...oo...oo...........",
        "...off..off..offo.........",
        "....offoffooffo...........",
        "....offffffffffo..........",
        "...ogggggggggggo..........",
        "...ogggggggggggo..........",
        "...ogcggggggggco..........",
        "...ogcggggggggco.oooo.....",
        "...ogegggggggeggovvvvo....",
        "...oggggggggggggoovvo.....",
        "...ogccccccccccgo..oo.....",
        "...oGgggggggggGgo.........",
        "..oGogggggggggoGgo........",
        "..oGoGgggggggGoGgo........",
        "..oGGo.oGggo.oGGo.........",
        "...oo..ooGoo..oo..........",
        ".......oooo...............",
        "......ooaaaaoo............",
        "....ooaaaaaaaaoo..........",
        "..ooaaaaaaaaaaaaoo........",
        ".oaaaAAAAAAAAAaaaao.......",
        ".oaaaoaaaaaaaaoaaao.......",
        ".oaaaoaCCCCCCaoaaao.......",
        ".oAaaoaCaaaaCaoAaao.......",
        ".oaaaoaaaaaaaaoaaao.......",
        "..oaaoaaaaaaaaoaao........",
        "..ooooaaaaaaaaoooo........",
        ".....onnnnnnnno...........",
        ".....oaaaaaaaao...........",
        ".....oaaaooaaao...........",
        "....oaaao..oaaao..........",
        "....oaaao..oaaao..........",
        "....oAaao..oAaao..........",
        "....oaaao..oaaao..........",
        "....oaaao..oaaao..........",
        "...onnnno..onnnno.........",
        "...onnnno..onnnno.........",
        "...ooooo....ooooo........."
      ]
    },

    /* ---- the engineer — hood, glowing eyes, enviro-suit ----------- */
    tali: {
      pal: {
        o: "#2b2436",
        d: "#4a3a6e", D: "#5d4a88",
        V: "#241c33", e: "#d8f2fc",
        p: "#7a5fae", P: "#9a7fd0", b: "#3a3152", n: "#2a2440"
      },
      rows: [
        ".......oooooooo.........",
        ".....ooddddddddoo.......",
        "....oddddddddddddo......",
        "...odddVVVVVVVVdddo.....",
        "..oddVVVVVVVVVVVVddo....",
        "..odVVeeVVVVVVeeVVdo....",
        "..odVVeeVVVVVVeeVVdo....",
        "..odVVVVVVVVVVVVVVdo....",
        "..oddVVVVVVVVVVVVddo....",
        "...odddVVVVVVVVdddo.....",
        "...oddddddddddddddo.....",
        "..oddDo.opppo.oDddo.....",
        "..oddo..opppo..oddo.....",
        "...oo..oppppppo..oo.....",
        "......opppppppppo.......",
        ".....oppPPPppppppo......",
        "....oppoppppppoppo......",
        "....oppoppppppoppo......",
        "....oppobbbbbboppo......",
        "....oPpoppppppoPpo......",
        "....oppoppppppoppo......",
        ".....oo.oppppo.oo.......",
        "........oppppo..........",
        "......oppppppppo........",
        "......oppo..oppo........",
        "......oppo..oppo........",
        "......oPPo..oPPo........",
        "......oppo..oppo........",
        "......oppo..oppo........",
        ".....onno....onno.......",
        ".....onno....onno.......",
        ".....oooo....oooo......."
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
    var s = Number(cv.dataset.scale) || 3;
    cv.style.width = (w * s) + "px";
    cv.style.height = (h * s) + "px";
  }

  document.querySelectorAll("canvas.sprite").forEach(render);
})();
