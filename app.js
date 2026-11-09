/* ============================================================
   Fields Medal — a chronicle
   Data source: International Mathematical Union (mathunion.org),
   ICM congress list, IMU 2026 announcement. Verified 2026-11.
   ============================================================ */
(function () {
  'use strict';

  const CONGRESSES = [
    { y: 1936, city: '奥斯陆', en: 'Oslo', note: '首届菲尔兹奖在挪威奥斯陆颁发，两名得主分别来自芬兰与美国。',
      people: [ ['拉尔斯·阿尔福斯', 'Lars V. Ahlfors'], ['杰西·道格拉斯', 'Jesse Douglas'] ] },
    { y: 1950, city: '剑桥（美国）', en: 'Cambridge, MA', note: '二战后首次恢复颁奖，距上一届已过去十四年。',
      people: [ ['洛朗·施瓦茨', 'Laurent Schwartz'], ['阿特勒·塞尔伯格', 'Atle Selberg'] ] },
    { y: 1954, city: '阿姆斯特丹', en: 'Amsterdam', note: '让-皮埃尔·塞尔以 27 岁获奖，至今仍是最年轻的得主。',
      people: [ ['小平邦彦', 'Kunihiko Kodaira'], ['让-皮埃尔·塞尔', 'Jean-Pierre Serre', '最年轻得主'] ] },
    { y: 1958, city: '爱丁堡', en: 'Edinburgh', note: '奖项继续遵循每届两枚的 1924 年决议。',
      people: [ ['克劳斯·罗特', 'Klaus F. Roth'], ['勒内·托姆', 'René Thom'] ] },
    { y: 1962, city: '斯德哥尔摩', en: 'Stockholm', note: '「两枚」时代的最后一届，四年后规则被改写。',
      people: [ ['拉尔斯·霍尔曼德', 'Lars Hörmander'], ['约翰·米尔诺', 'John W. Milnor'] ] },
    { y: 1966, city: '莫斯科', en: 'Moscow', note: '关键的一届：鉴于数学研究规模扩张，IMU 同意每届最多颁发四枚奖章。',
      people: [ ['迈克尔·阿蒂亚', 'Michael F. Atiyah'], ['保罗·科恩', 'Paul J. Cohen'], ['亚历山大·格罗滕迪克', 'Alexander Grothendieck'], ['斯蒂芬·斯梅尔', 'Stephen Smale'] ] },
    { y: 1970, city: '尼斯', en: 'Nice', note: '四枚奖章成为新常态，评委开始兼顾不同数学领域的代表性。',
      people: [ ['艾伦·贝克', 'Alan Baker'], ['广中平祐', 'Heisuke Hironaka'], ['谢尔盖·诺维科夫', 'Serge Novikov'], ['约翰·汤普森', 'John G. Thompson'] ] },
    { y: 1974, city: '温哥华', en: 'Vancouver', note: '颁奖仪式首次回到奖项命名人的祖国加拿大。',
      people: [ ['恩里科·邦别里', 'Enrico Bombieri'], ['大卫·芒福德', 'David B. Mumford'] ] },
    { y: 1978, city: '赫尔辛基', en: 'Helsinki', note: '四名得主覆盖数论、分析、群论与代数拓扑。',
      people: [ ['皮埃尔·德利涅', 'Pierre R. Deligne'], ['查尔斯·费弗曼', 'Charles L. Fefferman'], ['格里戈里·马尔古利斯', 'G. A. Margulis'], ['丹尼尔·奎伦', 'Daniel G. Quillen'] ] },
    { y: 1982, city: '华沙', en: 'Warsaw', note: '因波兰局势，这届大会实际于 1983 年举行；丘成桐成为首位华人得主。',
      people: [ ['阿兰·孔涅', 'Alain Connes'], ['威廉·瑟斯顿', 'William P. Thurston'], ['丘成桐', 'Shing-Tung Yau', '首位华人得主'] ] },
    { y: 1986, city: '伯克利', en: 'Berkeley', note: '三名得主的工作分别落在四维拓扑、算术几何与流形理论。',
      people: [ ['西蒙·唐纳森', 'Simon K. Donaldson'], ['格尔德·法尔廷斯', 'Gerd Faltings'], ['迈克尔·弗里德曼', 'Michael H. Freedman'] ] },
    { y: 1990, city: '京都', en: 'Kyoto', note: 'ICM 首次在亚洲举行；爱德华·威滕以数学物理方面的工作入选。',
      people: [ ['弗拉基米尔·德林费尔德', 'Vladimir Drinfeld'], ['沃恩·琼斯', 'Vaughan F. R. Jones'], ['森重文', 'Shigefumi Mori'], ['爱德华·威滕', 'Edward Witten'] ] },
    { y: 1994, city: '苏黎世', en: 'Zürich', note: '距 1932 年正式设立该奖的苏黎世大会，已过去六十二年。',
      people: [ ['让·布尔甘', 'Jean Bourgain'], ['皮埃尔-路易·利翁', 'Pierre-Louis Lions'], ['让-克里斯托夫·约科兹', 'Jean-Christophe Yoccoz'], ['叶菲姆·泽尔曼诺夫', 'Efim Zelmanov'] ] },
    { y: 1998, city: '柏林', en: 'Berlin', note: '因年龄超限无缘奖章的安德鲁·怀尔斯，获 IMU 颁发银质纪念牌致敬（不计入得主名录）。',
      people: [ ['理查德·博彻兹', 'Richard E. Borcherds'], ['蒂莫西·高尔斯', 'W. T. Gowers'], ['马克西姆·孔采维奇', 'Maxim Kontsevich'], ['柯蒂斯·麦克马伦', 'Curtis T. McMullen'] ] },
    { y: 2002, city: '北京', en: 'Beijing', note: 'ICM 首次在中国举行，本届颁发两枚奖章。',
      people: [ ['洛朗·拉福格', 'Laurent Lafforgue'], ['弗拉基米尔·沃埃沃德斯基', 'Vladimir Voevodsky'] ] },
    { y: 2006, city: '马德里', en: 'Madrid', note: '格里戈里·佩雷尔曼因证明庞加莱猜想入选，但拒绝领奖，成为官方名录里唯一标注「declined」的名字。',
      people: [ ['安德烈·奥昆科夫', 'Andrei Okounkov'], ['格里戈里·佩雷尔曼', 'Grigori Perelman', '拒绝领奖'], ['陶哲轩', 'Terence Tao'], ['文德林·维尔纳', 'Wendelin Werner'] ] },
    { y: 2010, city: '海得拉巴', en: 'Hyderabad', note: 'ICM 首次在印度举行，四位得主来自四个不同的数学传统。',
      people: [ ['埃隆·林登施特劳斯', 'Elon Lindenstrauss'], ['吴宝珠', 'Ngô Bảo Châu'], ['斯坦尼斯拉夫·斯米尔诺夫', 'Stanislav Smirnov'], ['塞德里克·维拉尼', 'Cédric Villani'] ] },
    { y: 2014, city: '首尔', en: 'Seoul', note: '玛丽亚姆·米尔扎哈尼成为 1936 年以来首位女性得主。',
      people: [ ['阿图尔·阿维拉', 'Artur Avila'], ['曼朱尔·巴尔加瓦', 'Manjul Bhargava'], ['马丁·海尔', 'Martin Hairer'], ['玛丽亚姆·米尔扎哈尼', 'Maryam Mirzakhani', '首位女性得主'] ] },
    { y: 2018, city: '里约热内卢', en: 'Rio de Janeiro', note: 'ICM 首次在南美举行；比尔卡尔的奖章于颁奖当天失窃，大会随后补发一枚。同年奖金缺口由多伦多大学与菲尔兹研究所补足。',
      people: [ ['考切尔·比尔卡尔', 'Caucher Birkar'], ['阿莱西奥·菲加利', 'Alessio Figalli'], ['彼得·舒尔茨', 'Peter Scholze'], ['阿克沙伊·文卡特什', 'Akshay Venkatesh'] ] },
    { y: 2022, city: '赫尔辛基 / 线上', en: 'Helsinki · online', note: '原定圣彼得堡，因 2022 年俄乌战争改为线上；IMU 大会与颁奖活动在赫尔辛基举行。',
      people: [ ['雨果·迪米尼-科潘', 'Hugo Duminil-Copin'], ['许埈珥', 'June Huh'], ['詹姆斯·梅纳德', 'James Maynard'], ['玛丽娜·维亚佐夫斯卡', 'Maryna Viazovska', '第二位女性得主'] ] },
    { y: 2026, city: '费城', en: 'Philadelphia', note: '王虹成为第三位女性得主；王虹与邓煜两位中国数学家首次在同一届获奖。评委会主席为中岛启。',
      people: [ ['邓煜', 'Yu Deng', '中国数学家'], ['约翰·帕登', 'John Pardon'], ['雅各布·齐默曼', 'Jacob Tsimerman'], ['王虹', 'Hong Wang', '第三位女性得主'] ] }
  ];

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const $ = (s) => document.querySelector(s);
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, nx: 0, ny: 0 };
  window.addEventListener('pointermove', e => {
    pointer.x = e.clientX; pointer.y = e.clientY;
    pointer.nx = (e.clientX / window.innerWidth - .5) * 2;
    pointer.ny = (e.clientY / window.innerHeight - .5) * 2;
  }, { passive: true });

  // One switch for all motion on the page (hero canvas, CSS animations, autoplay).
  function setGlobalPaused(v) {
    document.body.classList.toggle('motion-paused', v);
    document.dispatchEvent(new CustomEvent('motion:paused', { detail: { paused: v } }));
  }
  function wireMotionButton(btn, withLabel) {
    if (!btn) return;
    btn.addEventListener('click', () => setGlobalPaused(!document.body.classList.contains('motion-paused')));
    document.addEventListener('motion:paused', e => {
      const v = e.detail.paused;
      btn.setAttribute('aria-pressed', String(v));
      btn.textContent = withLabel ? (v ? '▶ 播放动效' : '❚❚ 暂停动效') : (v ? '▶' : '⏸');
    });
  }
  function emitSound(name, extra) {
    document.dispatchEvent(new CustomEvent('fx:sound', { detail: Object.assign({ name: name }, extra || {}) }));
  }

  /* ---------------- Hero: auto-playing 3D particle medal ---------------- */
  function initHero() {
    const canvas = $('#medal-canvas');
    const hero = $('#cover');
    const copy = $('#hero-copy');
    const reveal = $('#hero-reveal');
    const toggle = $('#motion-toggle');
    const replay = $('#motion-replay');
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const GOLD = [200, 169, 106], INK = [230, 228, 220], WARM = [255, 246, 232];
    const INTRO_MS = 2600, PERSP = 1100;
    let w = 0, h = 0, dpr = 1, cx = 0, cy = 0, R = 1;
    let particles = [], wires = [], ambient = [];
    let progress = 0, paused = reduceMotion, ticking = false, mx = 0, my = 0;
    let angleBase = 0, animTime = 0, introElapsed = reduceMotion ? INTRO_MS : 0;
    let lastFrame = performance.now();

    function buildModel() {
      R = Math.min(w * 0.36, h * 0.40, 400);
      cx = w / 2; cy = h * 0.47;
      const sr = R * 0.55, halfH = R * 0.80;
      const pts = [], paths = [];
      const P = (x, y, z) => ({ x: x, y: y, z: z });
      const jit = (v, a) => v + (Math.random() - .5) * a;

      // The medal rim: a flat disc in XY with real thickness along Z.
      const rim = (radius, z, n, jitter) => {
        for (let i = 0; i < n; i++) {
          const a = i / n * Math.PI * 2;
          pts.push(P(jit(Math.cos(a) * radius, jitter), jit(Math.sin(a) * radius, jitter), jit(z, 3)));
        }
      };
      rim(R, 0, 880, 1.6);
      rim(R * .94, 0, 240, 1.2);
      rim(R, -16, 120, 1.2);
      rim(R, 16, 120, 1.2);

      // Sphere: latitude + longitude sampling in true 3D.
      for (let k = -3; k <= 3; k++) {
        const lat = k / 4 * Math.PI * .46;
        for (let i = 0; i < 110; i++) {
          const lon = i / 110 * Math.PI * 2;
          pts.push(P(Math.cos(lat) * Math.cos(lon) * sr, Math.sin(lat) * sr, Math.cos(lat) * Math.sin(lon) * sr));
        }
      }
      for (let k = 0; k < 6; k++) {
        const lon = k / 6 * Math.PI;
        for (let i = 0; i < 86; i++) {
          const lat = -Math.PI / 2 + i / 86 * Math.PI;
          pts.push(P(Math.cos(lat) * Math.cos(lon) * sr, Math.sin(lat) * sr, Math.cos(lat) * Math.sin(lon) * sr));
        }
      }

      // Cylinder circumscribing the sphere.
      const cylRing = (yy, n) => {
        for (let i = 0; i < n; i++) {
          const a = i / n * Math.PI * 2;
          pts.push(P(Math.cos(a) * sr, yy, Math.sin(a) * sr));
        }
      };
      cylRing(-halfH, 240); cylRing(halfH, 240);
      for (let k = 0; k < 4; k++) {
        const a = k / 4 * Math.PI * 2;
        for (let i = 0; i < 100; i++) pts.push(P(Math.cos(a) * sr, -halfH + 2 * halfH * i / 100, Math.sin(a) * sr));
      }
      for (let i = 0; i < 120; i++) {
        const a = i / 120 * Math.PI * 2;
        pts.push(P(Math.cos(a) * R * .28, Math.sin(a) * R * .28, 0));
      }

      // Wireframe paths, projected every frame so the 3D structure stays legible.
      const loopPath = (n, fn, alpha, closed) => {
        const list = [];
        for (let i = 0; i < n; i++) list.push(fn(i / n * Math.PI * 2));
        paths.push({ pts: list, alpha: alpha, closed: closed !== false });
      };
      loopPath(96, a => P(Math.cos(a) * R, Math.sin(a) * R, 0), .32);
      loopPath(96, a => P(Math.cos(a) * R * .94, Math.sin(a) * R * .94, 0), .15);
      loopPath(72, a => P(Math.cos(a) * sr, -halfH, Math.sin(a) * sr), .28);
      loopPath(72, a => P(Math.cos(a) * sr, halfH, Math.sin(a) * sr), .28);
      loopPath(72, a => P(Math.cos(a) * sr, 0, Math.sin(a) * sr), .20);
      for (let k = 0; k < 4; k++) {
        const a = k / 4 * Math.PI * 2;
        paths.push({ pts: [P(Math.cos(a) * sr, -halfH, Math.sin(a) * sr), P(Math.cos(a) * sr, halfH, Math.sin(a) * sr)], alpha: .24, closed: false });
      }
      for (let k = 0; k < 3; k++) {
        const lon = k / 3 * Math.PI, list = [];
        for (let i = 0; i <= 48; i++) {
          const lat = -Math.PI / 2 + i / 48 * Math.PI;
          list.push(P(Math.cos(lat) * Math.cos(lon) * sr, Math.sin(lat) * sr, Math.cos(lat) * Math.sin(lon) * sr));
        }
        paths.push({ pts: list, alpha: .16, closed: false });
      }
      for (let k = 0; k < 10; k++) {
        const a = k / 10 * Math.PI * 2;
        paths.push({ pts: [P(Math.cos(a) * R, Math.sin(a) * R, -16), P(Math.cos(a) * R, Math.sin(a) * R, 16)], alpha: .28, closed: false });
      }

      particles = pts.map(p => {
        const pal = Math.random();
        return {
          tx: p.x, ty: p.y, tz: p.z,
          sx: (Math.random() - .5) * w * 1.7,
          sy: (Math.random() - .5) * h * 1.7,
          sz: (Math.random() - .5) * 900,
          size: .6 + Math.random() * 1.15,
          alpha: .3 + Math.random() * .55,
          phase: Math.random() * Math.PI * 2,
          wobble: .4 + Math.random() * 1.5,
          color: pal < .62 ? GOLD : pal < .92 ? INK : WARM
        };
      });
      // Three tilted orbital rings and a star polygon across the rim.
      for (let k = 0; k < 3; k++) {
        const tilt = .5 + k * .7, list = [], rad = R * (1.02 + k * .05);
        for (let i = 0; i <= 100; i++) {
          const a = i / 100 * Math.PI * 2;
          const y0 = Math.sin(a) * rad;
          list.push(P(Math.cos(a) * rad, y0 * Math.cos(tilt), y0 * Math.sin(tilt)));
        }
        paths.push({ pts: list, alpha: .15, closed: false, color: k === 1 ? 'violet' : k === 2 ? 'cyan' : 'gold' });
      }
      const starPts = [];
      for (let i = 0; i < 37; i++) {
        const a = i * 13 / 96 * Math.PI * 2;
        starPts.push(P(Math.cos(a) * R * .99, Math.sin(a) * R * .99, 0));
      }
      paths.push({ pts: starPts, alpha: .10, closed: true, color: 'gold' });

      ambient = [];
      for (let i = 0; i < 230; i++) {
        ambient.push({ x: Math.random() * w, y: Math.random() * h, size: .5 + Math.random() * .9,
          alpha: .08 + Math.random() * .22, phase: Math.random() * 6.28 });
      }
      wires = paths;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildModel();
    }

    function project(p, cosY, sinY, cosX, sinX, zoom) {
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const k = PERSP / (PERSP - z2) * zoom;
      return { x: cx + x1 * k, y: cy + y1 * k, k: k, z: z2 };
    }

    function draw() {
      const intro = reduceMotion ? 1 : smooth(0, 1, introElapsed / INTRO_MS);
      const ease = intro * intro * (3 - 2 * intro);
      mx += (pointer.nx - mx) * .06;
      my += (pointer.ny - my) * .06;
      const angY = angleBase + progress * 2.4 - (1 - ease) * .9 + mx * .38;
      const angX = .30 + Math.sin(animTime * .00035) * .12 + progress * .12 + my * .22;
      const zoom = (.94 + ease * .06) * (1 + progress * .16 + Math.sin(animTime * .0006) * .012);
      const cosY = Math.cos(angY), sinY = Math.sin(angY);
      const cosX = Math.cos(angX), sinX = Math.sin(angX);

      // Short trail: fast decay so the wireframe never gets buried.
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(16,17,17,.55)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * .85);
      core.addColorStop(0, 'rgba(200,169,106,' + (.032 + .018 * Math.sin(animTime * .001)).toFixed(3) + ')');
      core.addColorStop(1, 'rgba(200,169,106,0)');
      ctx.fillStyle = core;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

      for (let i = 0; i < ambient.length; i++) {
        const a = ambient[i];
        const tw = .55 + .45 * Math.sin(animTime * .0012 + a.phase);
        ctx.fillStyle = 'rgba(200,169,106,' + (a.alpha * tw).toFixed(3) + ')';
        ctx.fillRect(a.x, a.y, a.size, a.size);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const drift = Math.sin(animTime * .0007 + p.phase) * p.wobble * (1 - ease * .55);
        const q = project({
          x: p.sx + (p.tx - p.sx) * ease + drift,
          y: p.sy + (p.ty - p.sy) * ease + drift * .6,
          z: p.sz + (p.tz - p.sz) * ease
        }, cosY, sinY, cosX, sinX, zoom);
        const depth = clamp(.52 + q.z / R * .48, .16, 1.3);
        const a = p.alpha * (.32 + ease * .68) * depth;
        const s = Math.max(.4, p.size * q.k * (.7 + ease * .3));
        const c = p.color;
        const rgb = c[0] + ',' + c[1] + ',' + c[2];
        ctx.fillStyle = 'rgba(' + rgb + ',' + (a * .075).toFixed(3) + ')';
        ctx.fillRect(q.x - s, q.y - s, s * 2, s * 2);
        ctx.fillStyle = 'rgba(' + rgb + ',' + a.toFixed(3) + ')';
        ctx.fillRect(q.x, q.y, s, s);
      }

      // Wireframe last so the 3D structure stays razor sharp.
      ctx.lineWidth = 1.2;
      for (let s = 0; s < wires.length; s++) {
        const seg = wires[s];
        const rgb = seg.color === 'violet' ? '216,210,255' : seg.color === 'cyan' ? '197,214,232' : '200,169,106';
        ctx.beginPath();
        for (let i = 0; i < seg.pts.length; i++) {
          const q = project(seg.pts[i], cosY, sinY, cosX, sinX, zoom);
          if (i === 0) ctx.moveTo(q.x, q.y); else ctx.lineTo(q.x, q.y);
        }
        if (seg.closed) ctx.closePath();
        ctx.strokeStyle = 'rgba(' + rgb + ',' + (seg.alpha * 2.6 * ease * (1 + progress * .5)).toFixed(3) + ')';
        ctx.stroke();
      }

      const phase = (((animTime % 5400) + 5400) % 5400) / 5400;
      ctx.beginPath();
      ctx.arc(cx, cy, Math.max(0, phase * R * 2.5), 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200,169,106,' + ((1 - phase) * .22).toFixed(3) + ')';
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    }

    function updateScroll() {
      const total = Math.max(1, hero.offsetHeight - window.innerHeight);
      progress = clamp(-hero.getBoundingClientRect().top / total, 0, 1);
      if (!reduceMotion) {
        copy.style.opacity = String(1 - smooth(.34, .68, progress));
        copy.style.transform = 'translateY(' + (-progress * 34).toFixed(1) + 'px)';
        reveal.style.opacity = String(smooth(.68, .9, progress));
      }
      if (paused) draw();
    }

    function setPaused(v) {
      paused = v;
      if (!v) lastFrame = performance.now();
    }
    document.addEventListener('motion:paused', e => setPaused(e.detail.paused));
    wireMotionButton(toggle, true);
    if (replay) replay.addEventListener('click', () => {
      setGlobalPaused(false);
      introElapsed = 0; angleBase = 0;
      document.dispatchEvent(new CustomEvent('motion:replay'));
      if (reduceMotion) draw();
    });

    function loop(time) {
      const now = time || performance.now();
      const dt = clamp(now - lastFrame, 0, 60);
      lastFrame = now;
      if (!paused) {
        const introJustFinished = introElapsed < INTRO_MS;
        animTime += dt;
        angleBase += dt * .00032;
        introElapsed = Math.min(INTRO_MS, introElapsed + dt);
        if (introJustFinished && introElapsed >= INTRO_MS) emitSound('bell');
      }
      if (!document.hidden && hero.getBoundingClientRect().bottom > -200) draw();
      requestAnimationFrame(loop);
    }

    resize();
    updateScroll();
    window.addEventListener('resize', () => { resize(); updateScroll(); }, { passive: true });
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(() => { updateScroll(); ticking = false; }); ticking = true; }
    }, { passive: true });
    if (reduceMotion) draw(); else requestAnimationFrame(loop);
  }

  /* ---------------- Timeline chart ---------------- */
  function initTimeline() {
    const barsWrap = $('#bars');
    const scrollBox = $('#chart-scroll');
    const list = $('#laureate-list');
    if (!barsWrap || !list) return;
    let active = 0;

    CONGRESSES.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bar' + (c.y === 1966 ? ' is-rule-change' : '');
      btn.dataset.count = String(c.people.length);
      btn.dataset.i = String(i);
      btn.style.setProperty('--bar-h', (28 + c.people.length * 44) + 'px');
      btn.style.setProperty('--i', String(i));
      btn.setAttribute('aria-label', c.y + ' 年 ' + c.city + '，' + c.people.length + ' 位得主');
      btn.innerHTML = '<span class="bar-stem"></span><span class="bar-count">' + c.people.length + '</span>' +
        (c.y === 1966 ? '<span class="bar-divider"></span>' : '') +
        '<span class="bar-year">' + c.y + '</span>';
      btn.addEventListener('click', () => { markInteraction(); select(i, true); });
      barsWrap.appendChild(btn);
    });

    const barEls = Array.from(barsWrap.querySelectorAll('.bar'));

    function select(i, center, isAuto) {
      active = clamp(i, 0, CONGRESSES.length - 1);
      const c = CONGRESSES[active];
      if (center) emitSound('tick', { auto: !!isAuto });
      barEls.forEach((b, k) => b.classList.toggle('is-active', k === active));
      $('#detail-index').textContent = String(active + 1).padStart(2, '0');
      $('#detail-year').textContent = String(c.y);
      $('#detail-city').textContent = c.city + ' · ' + c.en;
      $('#detail-count').textContent = c.people.length + ' 位获奖者  /  ' + String(c.y) + ' ICM';
      $('#detail-note').textContent = c.note;
      list.innerHTML = c.people.map(p =>
        '<li><span class="ll-zh">' + p[0] + '</span>' +
        (p[2] ? '<span class="ll-flag">' + p[2] + '</span>' : '') +
        '<span class="ll-en">' + p[1] + '</span></li>'
      ).join('');
      const panel = $('#detail-panel');
      if (panel) { panel.classList.remove('is-swapping'); void panel.offsetWidth; panel.classList.add('is-swapping'); }
      $('#prev-btn').disabled = active === 0;
      $('#next-btn').disabled = active === CONGRESSES.length - 1;
      $('#nav-fill').style.width = (active / (CONGRESSES.length - 1) * 100) + '%';
      if (center && scrollBox) {
        const b = barEls[active];
        const target = b.offsetLeft - scrollBox.clientWidth / 2 + b.offsetWidth / 2;
        scrollBox.scrollTo({ left: Math.max(0, target), behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }

    let autoplay = !reduceMotion, lastInteraction = 0;
    function markInteraction() { lastInteraction = Date.now(); }
    const autoBtn = $('#autoplay-toggle');

    $('#prev-btn').addEventListener('click', () => { markInteraction(); select(active - 1, true); });
    $('#next-btn').addEventListener('click', () => { markInteraction(); select(active + 1, true); });
    if (autoBtn) autoBtn.addEventListener('click', () => {
      autoplay = !autoplay;
      autoBtn.setAttribute('aria-pressed', String(autoplay));
      autoBtn.innerHTML = (autoplay ? '⏸ ' : '▶ ') + '<span>自动轮播</span>';
      markInteraction();
    });
    barsWrap.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); markInteraction(); select(active + 1, true); barEls[active].focus(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); markInteraction(); select(active - 1, true); barEls[active].focus(); }
    });
    select(0, false);

    // Auto-advance the chronicle while the section is on screen.
    setInterval(() => {
      if (!autoplay || reduceMotion || document.hidden || document.body.classList.contains('motion-paused')) return;
      if (Date.now() - lastInteraction < 3200) return;
      const sec = $('#timeline');
      if (!sec || !sec.classList.contains('is-live')) return;
      select(active >= CONGRESSES.length - 1 ? 0 : active + 1, true, true);
    }, 4200);
    document.addEventListener('motion:replay', () => { select(0, true); markInteraction(); });
  }

  /* ---------------- Medal: looping 3D flip ---------------- */
  function initMedal() {
    const buttons = document.querySelectorAll('.medal-switch button');
    const flipper = $('#medal-flipper');
    const caption = $('#medal-caption');
    const captions = {
      obverse: 'OBVERSE · 阿基米德侧像 / 「超越凡身，掌握世界」',
      reverse: 'REVERSE · 球内切于圆柱 / 「全世界的数学家聚首」'
    };
    let autoFlip = !reduceMotion, current = 'obverse';

    function setFace(face) {
      current = face;
      buttons.forEach(b => b.classList.toggle('is-active', b.dataset.face === face));
      if (flipper) flipper.classList.toggle('is-flipped', face === 'reverse');
      if (caption) caption.textContent = captions[face];
      emitSound('flip');
    }
    buttons.forEach(btn => btn.addEventListener('click', () => {
      autoFlip = false; // manual control takes over
      setFace(btn.dataset.face);
    }));

    // Keep flipping while this section is actually on screen.
    setInterval(() => {
      if (!autoFlip || reduceMotion || document.hidden || document.body.classList.contains('motion-paused')) return;
      const sec = $('#medal');
      if (!sec || !sec.classList.contains('is-live')) return;
      setFace(current === 'obverse' ? 'reverse' : 'obverse');
    }, 6500);
  }

  /* ---------------- Scroll chrome ---------------- */
  function initChrome() {
    const header = $('#site-header');
    const fill = $('#progress-fill');
    const nav = $('#site-nav');
    const toggle = $('#menu-toggle');
    const links = Array.from(document.querySelectorAll('.nav a'));
    const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    function onScroll() {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      fill.style.width = (y / max * 100).toFixed(2) + '%';
      header.classList.toggle('is-scrolled', y > 40);
      let current = -1;
      sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= 180) current = i; });
      links.forEach((a, i) => a.classList.toggle('is-current', i === current));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
    });
    links.forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.06, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal-section').forEach(el => observer.observe(el));
  }

  /* ---------------- Full-screen 3D starfield / warp layer ---------------- */
  function initWarpField() {
    const canvas = $('#fx-canvas');
    if (!canvas || reduceMotion) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    const COUNT = 1500, DEPTH = 1500;
    let w = 0, h = 0, dpr = 1, stars = [], vel = 0, lastY = window.scrollY, t = 0, last = performance.now();

    function reset(s, deep) {
      s.x = (Math.random() - .5) * w * 1.9;
      s.y = (Math.random() - .5) * h * 1.9;
      s.z = deep ? Math.random() * DEPTH + 60 : DEPTH;
      s.r = .5 + Math.random() * 1.9;
      s.h = Math.random();
      s.px = null; s.py = null;
    }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = [];
      for (let i = 0; i < COUNT; i++) { const s = {}; reset(s, true); stars.push(s); }
    }
    function colorFor(s, a) {
      if (s.h < .62) return 'rgba(200,169,106,' + a + ')';
      if (s.h < .82) return 'rgba(230,228,220,' + a + ')';
      if (s.h < .93) return 'rgba(216,210,255,' + a + ')';
      return 'rgba(197,214,232,' + a + ')';
    }
    function draw(now) {
      const dt = clamp(now - last, 0, 60); last = now;
      t += dt; vel *= .94;
      const speed = .16 + vel * .055;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (let k = 0; k < 3; k++) {
        const rr = Math.min(w, h) * (.34 + k * .17) + Math.sin(t * .0004 + k) * 18;
        ctx.beginPath();
        ctx.ellipse(w / 2 + pointer.nx * 22, h / 2 + pointer.ny * 22,
          rr, rr * (.30 + .06 * Math.sin(t * .0003 + k)), t * .00006, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200,169,106,.05)'; ctx.lineWidth = 1; ctx.stroke();
      }

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= speed * dt;
        if (s.z < 12) reset(s, false);
        const k = 420 / s.z;
        const near = clamp(1 - s.z / DEPTH, 0, 1);
        const sx = w / 2 + s.x * k + pointer.nx * near * 34;
        const sy = h / 2 + s.y * k + pointer.ny * near * 34;
        if (sx < -60 || sx > w + 60 || sy < -60 || sy > h + 60) { reset(s, false); continue; }
        const a = (.06 + near * .55) * (.65 + .35 * Math.sin(t * .002 + i));
        const size = Math.max(.4, (.55 + s.r * .65) * near * 1.5);
        const col = colorFor(s, a.toFixed(3));
        if (s.px !== null && (vel > 1.2 || near > .55)) {
          ctx.beginPath();
          ctx.moveTo(s.px, s.py); ctx.lineTo(sx, sy);
          ctx.strokeStyle = col; ctx.lineWidth = Math.max(.5, size * .5); ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(sx, sy, size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = colorFor(s, (a * .13).toFixed(3));
        ctx.fill();
        ctx.fillStyle = col;
        ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
        s.px = sx; s.py = sy;
      }

      const phase = (((t % 6200) + 6200) % 6200) / 6200;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, Math.max(0, phase * Math.max(w, h) * .85), 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200,169,106,' + ((1 - phase) * .18).toFixed(3) + ')';
      ctx.lineWidth = 2; ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    }
    function loop(now) {
      if (!document.hidden && !document.body.classList.contains('motion-paused')) draw(now || performance.now());
      requestAnimationFrame(loop);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      vel = Math.min(vel + Math.abs(y - lastY) * .035, 30);
      lastY = y;
    }, { passive: true });
    requestAnimationFrame(loop);
  }

  /* ---------------- Cursor glow ---------------- */
  function initCursorGlow() {
    const el = $('#cursor-glow');
    if (!el) return;
    if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) { el.style.display = 'none'; return; }
    let x = pointer.x, y = pointer.y;
    function tick() {
      x += (pointer.x - x) * .13; y += (pointer.y - y) * .13;
      el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- Ambient motion for all remaining sections ---------------- */
  function initAmbient() {
    wireMotionButton($('#header-motion'), false);
    const zones = document.querySelectorAll('#prologue, #timeline, #numbers, #medal, #rules, .epilogue, .fact-strip');
    // No power saving: every section animates continuously.
    zones.forEach(z => z.classList.add('is-live'));
    if ('IntersectionObserver' in window && !reduceMotion) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.remove('is-live');
          void el.offsetWidth; // restart entrance animations on every visit
          el.classList.add('is-live');
        });
      }, { threshold: .18 });
      zones.forEach(z => io.observe(z));
    }

    if (reduceMotion) return;
    document.querySelectorAll('.dossier, .number-card, .first-card, .exception-card, .panel').forEach(el => {
      el.classList.add('tilt-card');
      el.addEventListener('pointermove', ev => {
        if (document.body.classList.contains('motion-paused')) return;
        const r = el.getBoundingClientRect();
        const dx = (ev.clientX - r.left) / r.width - .5;
        const dy = (ev.clientY - r.top) / r.height - .5;
        el.style.setProperty('--ty', (dx * 8).toFixed(2) + 'deg');
        el.style.setProperty('--tx', (-dy * 8).toFixed(2) + 'deg');
        el.style.setProperty('--mx', ((ev.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        el.style.setProperty('--my', ((ev.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--ty', '0deg');
        el.style.setProperty('--tx', '0deg');
      });
    });
  }

  /* ---------------- Synthesized sound layer (Web Audio, no audio files) ---------------- */
  function initAudio() {
    const LEVEL = .16;
    let ctx = null, master = null, noiseBuf = null, enabled = false;
    const toggles = document.querySelectorAll('[data-sound-toggle]');
    document.body.dataset.sound = 'off';

    function ensure() {
      if (ctx) return true;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      try {
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = .0001;
        master.connect(ctx.destination);
        const len = Math.floor(ctx.sampleRate * .5);
        noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
        const data = noiseBuf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        return true;
      } catch (e) { return false; }
    }
    function resume() {
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume().then(() => { document.body.dataset.audioCtx = ctx.state; }).catch(() => {});
      document.body.dataset.audioCtx = ctx.state;
    }
    function envelope(g, t, peak, attack, dur) {
      g.gain.setValueAtTime(.0001, t);
      g.gain.exponentialRampToValueAtTime(Math.max(.0001, peak), t + attack);
      g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    }
    function tone(freq, peak, dur, type, delay) {
      if (!enabled || !ctx || ctx.state !== 'running') return;
      const t = ctx.currentTime + (delay || 0);
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, t);
      envelope(g, t, peak, .006, dur);
      osc.connect(g); g.connect(master);
      osc.start(t); osc.stop(t + dur + .05);
    }
    // A soft struck-medal bell: inharmonic partials, long decay.
    function bell(strength) {
      const k = strength || 1, base = 196;
      [[1, .55], [2, .26], [2.76, .17], [5.4, .08], [8.9, .04]].forEach((p, i) => {
        tone(base * p[0], p[1] * k, 2.8 - i * .28, 'sine', i * .006);
      });
      tone(98, .18 * k, 3.1, 'sine', 0);
    }
    function tick(isAuto) {
      const k = isAuto ? .28 : 1;
      tone(660, .055 * k, .075, 'triangle', 0);
      tone(990, .022 * k, .055, 'sine', .008);
    }
    function flip() {
      if (!enabled || !ctx || ctx.state !== 'running' || !noiseBuf) { bell(.6); return; }
      const t = ctx.currentTime;
      const src = ctx.createBufferSource(); src.buffer = noiseBuf;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass'; bp.Q.value = 1.1;
      bp.frequency.setValueAtTime(380, t);
      bp.frequency.exponentialRampToValueAtTime(1500, t + .18);
      bp.frequency.exponentialRampToValueAtTime(520, t + .42);
      const g = ctx.createGain();
      envelope(g, t, .085, .02, .44);
      src.connect(bp); bp.connect(g); g.connect(master);
      src.start(t); src.stop(t + .5);
      tone(294, .05, .3, 'sine', .02);
      bell(.35);
    }
    function setEnabled(v) {
      enabled = v;
      document.body.dataset.sound = v ? 'on' : 'off';
      toggles.forEach(b => {
        b.setAttribute('aria-pressed', String(v));
        b.setAttribute('aria-label', v ? '关闭音效' : '开启音效');
        b.classList.toggle('is-on', v);
        if (b.hasAttribute('data-sound-label')) b.textContent = v ? '♪ 关闭音效' : '♪ 开启音效';
      });
      if (!v) {
        if (master && ctx) {
          const t = ctx.currentTime;
          master.gain.cancelScheduledValues(t);
          master.gain.setValueAtTime(Math.max(.0001, master.gain.value), t);
          master.gain.exponentialRampToValueAtTime(.0001, t + .18);
        }
        return;
      }
      if (!ensure()) { enabled = false; document.body.dataset.sound = 'unsupported'; return; }
      resume();
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(.0001, t);
      master.gain.exponentialRampToValueAtTime(LEVEL, t + .25);
      setTimeout(() => { if (enabled) bell(.55); }, 280);
    }

    toggles.forEach(b => b.addEventListener('click', e => { e.stopPropagation(); setEnabled(!enabled); }));
    document.addEventListener('pointerdown', resume, { passive: true });
    document.addEventListener('click', e => {
      if (!enabled) return;
      if (e.target.closest('[data-sound-toggle], .medal-switch')) return;
      if (e.target.closest('button, .nav-btn, .motion-btn')) tone(520, .03, .05, 'sine', 0);
    });
    document.addEventListener('fx:sound', e => {
      if (!enabled) return;
      const d = e.detail || {};
      if (d.name === 'bell') bell(1);
      else if (d.name === 'tick') tick(!!d.auto);
      else if (d.name === 'flip') flip();
    });
  }

  initHero();
  initTimeline();
  initMedal();
  initChrome();
  initWarpField();
  initCursorGlow();
  initAmbient();
  initAudio();
})();
