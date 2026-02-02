:root{
  --bg: #fbf6ef;
  --panel: #ffffff;
  --text: #2a2320;
  --muted: #6f625b;
  --accent: #9b6a53;  /* marron doux */
  --border: rgba(42,35,32,.12);
  --shadow: 0 14px 30px rgba(42,35,32,.10);
  --radius: 18px;
  --max: 1060px;
}

*{ box-sizing: border-box; }
html{ scroll-behavior: smooth; }
body{
  margin: 0;
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  color: var(--text);
  background: radial-gradient(900px 420px at 20% 0%, rgba(155,106,83,.10), transparent 55%),
              radial-gradient(900px 420px at 80% 10%, rgba(155,106,83,.08), transparent 60%),
              var(--bg);
}

.container{
  width: min(var(--max), calc(100% - 40px));
  margin: 0 auto;
}

.section{ padding: 70px 0; }
.alt{ border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: rgba(255,255,255,.45); }

h1{ font-size: clamp(2.2rem, 3.3vw, 3.2rem); margin: 10px 0; letter-spacing: .5px; }
h2{ font-size: clamp(1.6rem, 2.2vw, 2.1rem); margin: 0 0 18px; }
h3{ margin: 0 0 8px; }

.lead{ color: var(--muted); font-size: 1.05rem; max-width: 62ch; line-height: 1.55; }
.muted{ color: var(--muted); line-height: 1.55; }

a{ color: inherit; text-decoration: none; }
a.link{ color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }

.header{
  position: sticky; top: 0; z-index: 20;
  background: rgba(251,246,239,.78);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  display:flex; align-items:center; justify-content: space-between;
  padding: 14px 18px;
}

.brand{
  width: 44px; height: 44px;
  display:grid; place-items:center;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(155,106,83,.10);
  font-weight: 700;
  letter-spacing: .5px;
}

.nav{ display:flex; gap: 12px; align-items:center; }
.nav a{
  padding: 8px 10px;
  border-radius: 12px;
  color: var(--muted);
}
.nav a:hover{ background: rgba(155,106,83,.10); color: var(--text); }

.menu-btn{
  display:none;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.6);
  border-radius: 12px;
  padding: 8px 10px;
  cursor: pointer;
}

.card{
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
}

.hero{ padding-top: 48px; }
.hero-grid{
  display:grid;
  grid-template-columns: 1.25fr .85fr;
  gap: 16px;
  align-items: start;
}

.kicker{
  display:inline-flex;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255,255,255,.75);
  color: var(--muted);
  margin: 0;
}

.cta{ display:flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
.btn{
  border-radius: 14px;
  padding: 10px 14px;
  border: 1px solid rgba(155,106,83,.35);
  background: rgba(155,106,83,.12);
  cursor: pointer;
  font-weight: 600;
}
.btn:hover{ filter: brightness(1.03); }
.btn.ghost{
  border: 1px solid var(--border);
  background: rgba(255,255,255,.75);
}

.meta{ margin-top: 12px; display:flex; gap: 12px; flex-wrap: wrap; color: var(--muted); }

.grid-2{ display:grid; grid-template-columns: 1.1fr .9fr; gap: 14px; }
.grid-3{ display:grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
.mt{ margin-top: 14px; }

.list{ margin: 10px 0 0; padding-left: 18px; color: var(--muted); }
.list li{ margin: 8px 0; }

.tags{ display:flex; gap: 8px; flex-wrap: wrap; }
.tag{
  border: 1px solid var(--border);
  background: rgba(155,106,83,.08);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: .92rem;
  color: var(--muted);
}

.head-row{
  display:flex; align-items: end; justify-content: space-between; gap: 12px;
  margin-bottom: 14px;
}

.filters{ display:flex; gap: 8px; flex-wrap: wrap; }
.chip{
  border-radius: 999px;
  padding: 8px 10px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.75);
  color: var(--muted);
  cursor: pointer;
}
.chip.is-active{
  background: rgba(155,106,83,.12);
  border-color: rgba(155,106,83,.35);
  color: var(--text);
}

.cards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.project .top{ display:flex; align-items:center; justify-content: space-between; gap: 10px; }
.pill{
  font-size: .85rem;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  background: rgba(255,255,255,.75);
}

.mini{ margin: 10px 0 0; padding-left: 18px; color: var(--muted); }
.mini li{ margin: 6px 0; }

.links{ display:flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; }

label{ display:block; margin-top: 10px; color: var(--muted); }
input, textarea{
  width: 100%;
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.75);
  outline: none;
}
input:focus, textarea:focus{ border-color: rgba(155,106,83,.45); }

.footer{
  border-top: 1px solid var(--border);
  padding: 22px 0;
  background: rgba(255,255,255,.45);
}
.foot{ display:flex; align-items:center; justify-content: space-between; gap: 12px; }

.note{ color: var(--muted); font-size: .95rem; }

@media (max-width: 980px){
  .hero-grid{ grid-template-columns: 1fr; }
  .grid-2{ grid-template-columns: 1fr; }
  .grid-3{ grid-template-columns: 1fr; }
  .cards{ grid-template-columns: 1fr; }

  .menu-btn{ display:inline-flex; }
  .nav{
    position: absolute;
    right: 18px;
    top: 64px;
    display:none;
    flex-direction: column;
    width: min(340px, calc(100vw - 36px));
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: rgba(251,246,239,.95);
    box-shadow: var(--shadow);
  }
  .nav.is-open{ display:flex; }
}
