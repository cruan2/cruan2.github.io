/* ============================================================
   Pixel silhouette easter eggs — original homage art.
   Characters are deliberate dark silhouettes (signage-style):
   recognition comes from pose + outline + one signature accent.
   Rendered from palette + row-string maps onto
   <canvas class="sprite" data-sprite="name" data-scale="3">.
   '.' = transparent. Rows may be ragged; width = longest row.
   ============================================================ */
(function () {
  "use strict";

  /* silhouette inks */
  var NIGHT = "#10131c";  /* bodies against the moon */
  var DAY = "#161c24";    /* bodies against light backgrounds */

  var SPRITES = {

    /* ---- the big moon behind the ledge (scale 12) ---------------- */
    moon: {
      pal: { m: "#dfe8f0", l: "#eef5fa", d: "#bdc9d8", s: "#a4b4c6" },
      rows: [
        "..........mmmmmmmm..........",
        ".......mmmllmmmmmmmm........",
        "......mllllmmmmdmmmmm.......",
        ".....mlllmmmmmddmmmmmm......",
        "....mllmmmmmmmdmmmmmmmm.....",
        "...mllmmmdmmmmmmmmmmdmmm....",
        "..mlmmmmddmmmmmmmmmddmmmm...",
        "..mmmmmmddmmmmmmmmmmdmmmm...",
        ".mmmmmmmmdmmmmmmmmmmmmmmmm..",
        ".mmmdmmmmmmmmmmmmmmmmmmmmm..",
        ".mmddmmmmmmmmmmdmmmmmmmmsm..",
        "mmmddmmmmmmmmmddmmmmmmmmmsm.",
        "mmmmdmmmmmmmmmddmmmmmmmmmsm.",
        "mmmmmmmmmmmmmmmdmmmmmmmmssm.",
        "mmmmmmmmmmmmmmmmmmmmmmmmssm.",
        "mmmmmmmdmmmmmmmmmmmmmmmsssm.",
        "mmdmmmmddmmmmmmmmmmmmmmsssm.",
        ".mdmmmmmmmmmmmmmmmmmmmsssm..",
        ".mmmmmmmmmmmmmdmmmmmmmsssm..",
        ".mmmmmmmmmmmmddmmmmmmsssmm..",
        "..mmmmmmmmmmmmdmmmmmssssm...",
        "..mmmmdmmmmmmmmmmmmssssss...",
        "...mmmmmmmmmmmmmmmsssssss...",
        "....mmmmmmmmmmmmmssssssm....",
        ".....mmmmmmmmmmmssssssm.....",
        "......mmmmmmmmssssssms......",
        ".......mmmmmmsssssssm.......",
        "..........mmssssss.........."
      ]
    },

    /* ---- Lucy — flared bob, leaning back on her hands, looking up - */
    lucy: {
      pal: {
        h: "#8a8ab0", H: "#74749a", v: "#8f74d8",
        k: NIGHT
      },
      rows: [
        "......hhhhhhh.......",
        "....hhhhhhhhhhh.....",
        "...hhhhhhhhhhhhh....",
        "...hhhhhhhhhhhhh....",
        "..hhhhhhhhhhhhhh....",
        "..kkhhhhhhhhhhhhh...",
        ".kkkhhhhhhhhhhhhh...",
        "..kkhhhhhhhhhhhhH...",
        "...khhhhhhhhhhhHH...",
        "...hhhhhhhhhhhhHv...",
        "..hhhhh..hhhhhHv....",
        "..hhh......hhhv.....",
        ".........kk.........",
        "........kkkk........",
        ".......kkkkkk.......",
        "......kkkkkkkk......",
        ".....kkkkkkkkkk.....",
        "....kk.kkkkkk.kk....",
        "...kk..kkkkkk..kk...",
        "...kk..kkkkkk..kk...",
        "..kkk.kkkkkkkk.kkk..",
        "......kkkkkkkk......",
        ".....kkkkkkkkk......",
        ".....kkk...kkk......",
        ".....kkk...kkk......",
        ".....kk.....kk......",
        ".....kk.....kk......",
        ".....kk.....kk......",
        ".....kkk...kkk......",
        ".....kkk...kkk......"
      ]
    },

    /* ---- Rebecca — huge twintails, tiny frame, one leg swinging --- */
    rebecca: {
      pal: {
        g: "#3d6647", G: "#2e5038",
        k: NIGHT
      },
      rows: [
        ".ggg..............ggg.....",
        "ggggg....gggg....ggggg....",
        "gggggg..gggggg..gggggg....",
        ".ggggggggggggggggggggg....",
        "..ggggggggggggggggggg.....",
        "..GgggggggggggggggggG.....",
        "...ggggggggggggggggg......",
        "....gggggggggggggg........",
        "....gggggggggggggg........",
        ".....gggggggggggg.........",
        "......ggg.kk.ggg..........",
        "..........kk..............",
        "........kkkkkk............",
        ".......kkkkkkkk...........",
        "......kkkkkkkkkk..........",
        ".....kk.kkkkkk.kk.........",
        "....kk..kkkkkk..kk........",
        "....kk.kkkkkkkk..kk.......",
        ".......kkkkkkkk...........",
        "......kkkkkkkkk...........",
        "......kkk...kkk...........",
        "......kk.....kkk..........",
        "......kk......kk..........",
        "......kk......kk..........",
        "......kkk....kkk..........",
        "......kkk....kkk.........."
      ]
    },

    /* ---- Kiwi — smooth bob, cross-legged, gold earring ------------ */
    kiwi: {
      pal: {
        v: "#4f3e76", V: "#40315f",
        G: "#d6a93c",
        k: NIGHT
      },
      rows: [
        "......vvvvvvvv........",
        "....vvvvvvvvvvvv......",
        "...vvvvvvvvvvvvvv.....",
        "...vvvvvvvvvvvvvv.....",
        "..vvvvvvvvvvvvvvvv....",
        "..vvvvvvvvvvvvvvvv....",
        "..vvvkkkkkkkkkvvvv....",
        "..vvvkkkkkkkkkvvvv....",
        "..Gvvvkkkkkkkvvvv.....",
        "...vvvvkkkkkvvvV......",
        "....vvvvvvvvvvV.......",
        "......kkkkkk..........",
        "....kkkkkkkkkk........",
        "...kkkkkkkkkkkk.......",
        "..kkkkkkkkkkkkkk......",
        "..kk.kkkkkkkk.kk......",
        "..kk.kkkkkkkk.kk......",
        "..kkkkkkkkkkkkkk......",
        ".kkkkkkkkkkkkkkkk.....",
        ".kkkkkkkkkkkkkkkkk....",
        "kkkkkkkkkkkkkkkkkk....",
        "kkkk..kkkkkkk..kkkk...",
        ".kk....kkkkk....kk...."
      ]
    },

    /* ---- Faith — sprint pictogram, red shoes ---------------------- */
    faith: {
      pal: {
        k: DAY,
        r: "#e0362c"
      },
      rows: [
        "......................kkkk......",
        ".....................kkkkkk.....",
        "....................kkkkkkk.....",
        "....................kkkkkkk.....",
        ".....................kkkkk......",
        ".....................kkkk.......",
        "....................kkkk........",
        "...................kkkk..kkk....",
        "..................kkkkk.kkkk....",
        ".................kkkkkkkkkk.....",
        "...............kkkkkkkkk........",
        "..............kkkkkkkk..........",
        "...........kk.kkkkkkk...........",
        "...........kkkkkkkkk............",
        "............kkkkkkkk............",
        "............kkkkkkkkk...........",
        "...........kkkk.kkkkkk..........",
        "..........kkkk...kkkkk..........",
        "........kkkkk.....kkkkk.........",
        ".......kkkk........kkkk.........",
        ".....kkkk..........kkkk.........",
        "....kkkk...........kkkk.........",
        "..rrkkk............kkkk.........",
        "..rrr..............kkkkk........",
        "...................rrrrrr.......",
        "....................rrrr........"
      ]
    },

    /* ---- the Commander — arms crossed, feet planted, N7 stripe ---- */
    shep: {
      pal: {
        k: DAY,
        r: "#c22e3a", w: "#e8eaee"
      },
      rows: [
        ".........kkkkkk.........",
        "........kkkkkkkk........",
        "........kkkkkkkk........",
        "........kkkkkkkk........",
        "........kkkkkkkk........",
        ".........kkkkkk.........",
        "..........kkkk..........",
        ".......kkkkkkkkkk.......",
        ".....kkkkkkkkkkkkkk.....",
        "....kkkkkkkkkkkkkkkk....",
        "...kkkkkkkkkkkkkkkkkk...",
        "...rkkkkkkkkkkkkkkkkk...",
        "...rkkkkkkkkkkkkkkkkk...",
        "..rkkkkkkkkkkkkkkkkkkk..",
        "..wkkkkkkkkkkkkkkkkkkk..",
        "..rkkkkkkkkkkkkkkkkkkk..",
        "...kkkkkkkkkkkkkkkkkk...",
        "....kkkkkkkkkkkkkkkk....",
        "....kkkkkkkkkkkkkkkk....",
        ".....kkkkkkkkkkkkkk.....",
        ".....kkkkkkkkkkkkkk.....",
        ".....kkkkkkkkkkkkkk.....",
        ".....kkkkkk..kkkkkk.....",
        ".....kkkkk....kkkkk.....",
        "....kkkkk......kkkkk....",
        "....kkkkk......kkkkk....",
        "....kkkk........kkkk....",
        "....kkkk........kkkk....",
        "....kkkk........kkkk....",
        "...kkkkk........kkkkk...",
        "...kkkkk........kkkkk..."
      ]
    },

    /* ---- the sniper — crest, mandibles, cyan visor ----------------- */
    garrus: {
      pal: {
        k: DAY,
        c: "#2fe0dc"
      },
      rows: [
        "...kk.....kk.....kk.......",
        "...kkk...kkkk...kkk.......",
        "....kkkkkkkkkkkkkk........",
        ".....kkkkkkkkkkkk.........",
        ".....kkkkkkkkkkkk.........",
        ".....kkkkkkkkkkkkccc......",
        ".....kkkkkkkkkkkk.........",
        "....kkkkkkkkkkkkkk........",
        "....kkk.kkkkkk.kkk........",
        "....kk...kkkk...kk........",
        ".........kkk..............",
        ".......kkkkkkk............",
        ".....kkkkkkkkkkk..........",
        "...kkkkkkkkkkkkkkk........",
        "..kkkkkkkkkkkkkkkkk.......",
        "..kkk.kkkkkkkkk.kkk.......",
        "..kkk.kkkkkkkkk.kkk.......",
        "..kkk.kkkkkkkkk.kkk.......",
        "..kkk.kkkkkkkkk.kkk.......",
        "...kk..kkkkkkk..kk........",
        ".......kkkkkkk............",
        ".......kkkkkkk............",
        ".......kkkkkkk............",
        "......kkkk.kkkk...........",
        "......kkk...kkk...........",
        "......kkk...kkk...........",
        ".....kkk...kkk............",
        ".....kkk...kkk............",
        "......kkk...kkk...........",
        "......kkk...kkk...........",
        ".....kkkk...kkkk..........",
        ".....kkkk...kkkk.........."
      ]
    },

    /* ---- the engineer — hood flare, glowing eyes ------------------- */
    tali: {
      pal: {
        k: DAY,
        e: "#dff3fc"
      },
      rows: [
        "........kkkkkkkk........",
        "......kkkkkkkkkkkk......",
        ".....kkkkkkkkkkkkkk.....",
        "....kkkkkkkkkkkkkkkk....",
        "....kkkeekkkkkkeekkk....",
        "....kkkeekkkkkkeekkk....",
        "....kkkkkkkkkkkkkkkk....",
        ".....kkkkkkkkkkkkkk.....",
        "....kkkkkkkkkkkkkkkk....",
        "....kkkk.kkkkkk.kkkk....",
        "....kkk...kkkk...kkk....",
        ".....kk..kkkkkk..kk.....",
        ".........kkkkkk.........",
        "........kkkkkkkk........",
        ".......kkkkkkkkkk.......",
        "......kkkkkkkkkkkk......",
        "......kk.kkkkkkk.kk.....",
        ".....kkk.kkkkkkk.kkk....",
        ".....kk..kkkkkk...kk....",
        ".....kk..kkkkkk..kkk....",
        ".........kkkkkk.kkk.....",
        "........kkkkkkkkk.......",
        "........kkkkkkkk........",
        ".......kkkk.kkkk........",
        ".......kkk...kkk........",
        ".......kkk...kkk........",
        "......kkk.....kkk.......",
        "......kkk.....kkk.......",
        ".......kkk...kkk........",
        "......kkkk...kkkk......."
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
