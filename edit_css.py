import codecs

path = 'd:/Kaustav/Projects/wealll_company_website/WeAlll_React/src/Components/ServiceComponent/VideoProduction/PlatformExplanatoryVideos/platform-explanatory.css'
with codecs.open(path, 'r', 'utf-8') as f:
    css = f.read()

# Fix Z-Index
if '.plat-feat-icon {' in css:
    css = css.replace('.plat-feat-icon {\\n', '.plat-feat-icon {\\n  position: relative;\\n  z-index: 2;\\n')
if '.plat-feat-card h3 {' in css:
    css = css.replace('.plat-feat-card h3 {\\n', '.plat-feat-card h3 {\\n  position: relative;\\n  z-index: 2;\\n')
if '.plat-feat-card p {' in css:
    css = css.replace('.plat-feat-card p {\\n', '.plat-feat-card p {\\n  position: relative;\\n  z-index: 2;\\n')

# Find 4 and 6
start4 = css.find('/* 4. Animated & Motion Graphic Explainers (Floating 3D Canvas) */')
start6 = css.find('/* 6. Platform Optimization & Distribution (Connected nodes) */')

if start4 != -1 and start6 != -1:
    new_css_4_5 = """/* 4. Animated & Motion Graphic Explainers (Hover Align Storyboards) */
.storyboard-canvas {
  position: relative;
  height: 550px;
  width: 100%;
  border-radius: 30px;
  background: radial-gradient(circle at center, #1a1a1a 0%, #050505 100%);
  border: 1px solid rgba(255,255,255,0.05);
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1200px;
}

.sb-center-target {
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  transition: opacity 0.5s;
  pointer-events: none;
}
.sb-center-target h3 { color: #fdb914; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; font-size: 1rem; }
.storyboard-canvas:hover .sb-center-target { opacity: 0; }

.storyboard-item {
  position: absolute;
  width: 220px;
  height: 320px;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 5;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  cursor: crosshair;
}

.sb-img {
  flex-grow: 1;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
}
.sb-img::after {
  content: ''; position: absolute; inset: 0; background: rgba(253, 185, 20, 0.2); mix-blend-mode: overlay; opacity: 0; transition: opacity 0.4s;
}
.storyboard-item:hover .sb-img::after { opacity: 1; }

.sb-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 5px 5px;
}
.sb-content h5 {
  color: #fff; font-size: 1rem; font-weight: 600; margin: 0; max-width: 140px; line-height: 1.2; padding-top: 5px;
}

.sb-play-btn {
  width: 35px; height: 35px; border-radius: 50%; background: #fdb914; color: #000; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
  box-shadow: 0 0 15px rgba(253, 185, 20, 0.4); transition: transform 0.3s;
}
.storyboard-item:hover .sb-play-btn { transform: scale(1.15); }

/* Initial Scattered States */
.sb-1 { top: 10%; left: 10%; transform: rotate(-15deg) translateZ(-100px); }
.sb-2 { top: 60%; left: 25%; transform: rotate(10deg) translateZ(50px); }
.sb-3 { top: 20%; left: 50%; transform: translateX(-50%) rotate(5deg) scale(1.1); z-index: 6; }
.sb-4 { top: 15%; right: 25%; transform: rotate(-8deg) translateZ(-50px); }
.sb-5 { top: 55%; right: 10%; transform: rotate(20deg) translateZ(100px); }

/* Hover Aligned States */
.storyboard-canvas:hover .storyboard-item {
  top: 50%;
  transform: translateY(-50%) rotate(0deg) scale(1) translateZ(0);
}
.storyboard-canvas:hover .sb-1 { left: 5%; }
.storyboard-canvas:hover .sb-2 { left: 24%; }
.storyboard-canvas:hover .sb-3 { left: 50%; transform: translate(-50%, -50%) rotate(0deg) scale(1.1); box-shadow: 0 20px 50px rgba(253, 185, 20, 0.3); border-color: rgba(253, 185, 20, 0.5); z-index: 10; }
.storyboard-canvas:hover .sb-4 { left: auto; right: 24%; }
.storyboard-canvas:hover .sb-5 { left: auto; right: 5%; }

/* 5. Conversion-Focused Videos (Equalizer Funnel) */
.eq-funnel-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 480px;
  gap: 20px;
  margin-top: 60px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
}

.eq-pillar {
  width: 180px;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px 20px 0 0;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 20px;
  border-bottom: none;
}

.eq-pillar:hover {
  transform: translateY(-15px);
  background: rgba(30, 30, 30, 0.8);
  border-color: rgba(253, 185, 20, 0.4);
  box-shadow: 0 -20px 40px rgba(0,0,0,0.5);
}

.eq-pillar-content {
  position: relative;
  z-index: 5;
  text-align: center;
}

.eq-icon {
  width: 60px;
  height: 60px;
  background: #111;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #777;
  margin: 0 auto 20px auto;
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.4s ease;
}

.eq-pillar:hover .eq-icon {
  background: #fdb914;
  color: #000;
  box-shadow: 0 0 20px rgba(253, 185, 20, 0.5);
  transform: scale(1.1) rotate(5deg);
}

.eq-pillar-content h4 {
  color: #bbb;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.4s ease;
}

.eq-pillar:hover .eq-pillar-content h4 {
  color: #fff;
}

.eq-fill-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0%;
  background: linear-gradient(0deg, rgba(253, 185, 20, 0.15) 0%, transparent 100%);
  transition: height 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1;
}

.eq-pillar:hover .eq-fill-bg {
  height: 100%;
}

.eq-glow-base {
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 4px;
  background: transparent;
  border-radius: 5px 5px 0 0;
  transition: all 0.4s ease;
  z-index: 6;
}

.eq-pillar:hover .eq-glow-base {
  background: #fdb914;
  box-shadow: 0 0 15px #fdb914;
}

.eq-hover-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: transparent;
  transition: background 0.4s ease;
}

.eq-pillar:hover .eq-hover-bar {
  background: #fdb914;
}

"""
    css = css[:start4] + new_css_4_5 + css[start6:]

res_old = ".plat-funnel { width: 100%; }"
if res_old in css:
    css = css.replace(res_old, """.eq-funnel-container { flex-direction: column; align-items: stretch; height: auto; border: none; }
  .eq-pillar { width: 100%; height: auto !important; border-radius: 15px; border-bottom: 1px solid rgba(255,255,255,0.08); flex-direction: row; align-items: center; padding: 20px; margin-bottom: 20px; }
  .eq-pillar-content { display: flex; align-items: center; gap: 20px; text-align: left; }
  .eq-icon { margin: 0; }
  .eq-fill-bg { background: linear-gradient(90deg, rgba(253, 185, 20, 0.2) 0%, transparent 100%); height: 100%; width: 0%; transition: width 0.6s; }
  .eq-pillar:hover .eq-fill-bg { width: 100%; height: 100%; }
  .eq-glow-base { top: 10%; bottom: 10%; left: 0; width: 4px; height: auto; border-radius: 0 5px 5px 0; }
  .eq-hover-bar { display: none; }""")

with codecs.open(path, 'w', 'utf-8') as f:
    f.write(css)

print("done")
