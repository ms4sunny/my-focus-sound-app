/* ═══════════════════════════════════════════════════════════
   FocusSound — Core Application script Engine
═══════════════════════════════════════════════════════════ */

const SOUNDS = [
    {
        id: 'rain',
        label: 'Rain',
        description: 'Steady rainfall on leaves',
        accentColor: '#60a5fa',
        shadowColor: 'rgba(96,165,250,0.15)',
        bgSoft: 'rgba(96,165,250,0.06)',
        defaultVolume: 0.5,
        src: 'https://cdn.pixabay.com/audio/2024/01/25/audio_b05a8ceddc.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="16" y1="19" x2="16" y2="21"/></svg>`,
    },
    {
        id: 'ocean',
        label: 'Ocean Waves',
        description: 'Gentle rolling surf',
        accentColor: '#34d399',
        shadowColor: 'rgba(52,211,153,0.15)',
        bgSoft: 'rgba(52,211,153,0.06)',
        defaultVolume: 0.5,
        src: 'https://cdn.pixabay.com/audio/2023/11/19/audio_a786630afe.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-5 10-5 10 5 10 5"/><path d="M2 12s3 5 10 5 10-5 10-5"/></svg>`,
    },
    {
        id: 'coffee',
        label: 'Coffee Shop',
        description: 'Warm café ambience',
        accentColor: '#fb923c',
        shadowColor: 'rgba(251,146,60,0.15)',
        bgSoft: 'rgba(251,146,60,0.06)',
        defaultVolume: 0.5,
        src: 'https://cdn.pixabay.com/audio/2022/03/11/audio_ea0aba276d.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`,
    },
    {
        id: 'forest',
        label: 'Forest Birds',
        description: 'Birdsong in the canopy',
        accentColor: '#a3e635',
        shadowColor: 'rgba(163,230,53,0.15)',
        bgSoft: 'rgba(163,230,53,0.06)',
        defaultVolume: 0.5,
        src: 'https://cdn.pixabay.com/audio/2022/03/26/audio_eab0c1eb43.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21V8a5 5 0 0 0-10 0v13"/><path d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3"/></svg>`,
    },
    {
        id: 'brownnoise',
        label: 'Brown Noise',
        description: 'Deep rumbling static',
        accentColor: '#c084fc',
        shadowColor: 'rgba(192,132,252,0.15)',
        bgSoft: 'rgba(192,132,252,0.06)',
        defaultVolume: 0.5,
        src: 'https://cdn.pixabay.com/audio/2025/02/23/audio_11236e83a9.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    },
    {
        id: 'fireplace',
        label: 'Fireplace',
        description: 'Crackling warm hearth',
        accentColor: '#f87171',
        shadowColor: 'rgba(248,113,113,0.15)',
        bgSoft: 'rgba(248,113,113,0.06)',
        defaultVolume: 0.5,
        src: 'https://cdn.pixabay.com/audio/2026/03/10/audio_5894d22731.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6c0 0-4 4-4 8 0 2.21 1.79 4 4 4s4-1.79 4-4"/></svg>`,
    },
];

const state = {};

function initAudio(sound) {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'none';
    audio.volume = sound.defaultVolume;

    state[sound.id] = {
        audio,
        active: false,
        volume: sound.defaultVolume,
        srcLoaded: false,
        src: sound.src,
        accentColor: sound.accentColor
    };
}

function generateDynamicFavicon() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="%23f59e0b" stroke-width="1.5"/><circle cx="12" cy="12" r="6" fill="none" stroke="%23ffffff" stroke-width="1" stroke-dasharray="2"/><circle cx="12" cy="12" r="2" fill="%23ef4444"/></svg>`;
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = `data:image/svg+xml;utf8,${svgContent}`;
}

async function toggleSound(id, skipGlobalUpdate = false) {
    const s = state[id];
    const card = document.getElementById(`card-${id}`);
    const slider = document.getElementById(`slider-${id}`);
    const toggle = document.getElementById(`toggle-${id}`);
    const wave = document.getElementById(`wave-${id}`);

    if (!s.active) {
        let vol = parseInt(slider.value, 10);
        if (vol === 0) {
            vol = 50; slider.value = 50; s.volume = 0.5;
            document.getElementById(`vol-label-${id}`).textContent = '50%';
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 450);
        }

        if (!s.srcLoaded) { s.audio.src = s.src; s.srcLoaded = true; }
        s.audio.volume = s.volume;
        slider.style.setProperty('--track-color', s.accentColor);
        slider.style.setProperty('--slider-pct', `${vol}%`);

        try { await s.audio.play(); } catch (err) { console.warn(err); }

        s.active = true;
        card.classList.add('active');
        wave.classList.remove('hidden');
        toggle.setAttribute('aria-pressed', 'true');
    } else {
        s.audio.pause();
        s.active = false;
        card.classList.remove('active');
        wave.classList.add('hidden');
        toggle.setAttribute('aria-pressed', 'false');
        slider.style.setProperty('--track-color', 'rgba(255,255,255,0.05)');
    }

    if (!skipGlobalUpdate) updateGlobalStatus();
    syncEnvironmentStates();
}

function setVolume(id, rawValue) {
    const val = parseInt(rawValue, 10);
    const vol = val / 100;
    const s = state[id];
    s.volume = vol;
    s.audio.volume = vol;
    document.getElementById(`vol-label-${id}`).textContent = `${val}%`;

    const slider = document.getElementById(`slider-${id}`);
    if (slider) {
        slider.style.setProperty('--slider-pct', `${val}%`);
        slider.style.setProperty('--track-color', s.active ? s.accentColor : 'rgba(255,255,255,0.05)');
    }
}

function pauseAll() {
    SOUNDS.forEach(s => { if (state[s.id].active) toggleSound(s.id, true); });
    updateGlobalStatus();
    syncEnvironmentStates();
}

function resetAll() {
    SOUNDS.forEach(s => {
        if (state[s.id].active) toggleSound(s.id, true);
        const slider = document.getElementById(`slider-${s.id}`);
        if (slider) { slider.value = s.defaultVolume * 100; setVolume(s.id, s.defaultVolume * 100); }
    });
    document.querySelectorAll('.preset-capsule').forEach(b => b.classList.remove('active-preset'));
    updateGlobalStatus();
    syncEnvironmentStates();
}

function updateGlobalStatus() {
    const activeCount = SOUNDS.filter(s => state[s.id].active).length;
    const dot = document.getElementById('global-dot');
    const text = document.getElementById('global-status-text');

    if (activeCount === 0) {
        dot.classList.remove('active');
        text.textContent = 'All silent';
    } else {
        dot.classList.add('active');
        text.textContent = activeCount === 1 ? '1 playing' : `${activeCount} playing`;
    }
}

/* ══════════════════════════════════════════════════════════
   RESTORED: DYNAMIC MULTI-COLOR GRADIENT BACKGROUND ENGINE
══════════════════════════════════════════════════════════ */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W = 0, H = 0, particles = [];
const BASE_PARTICLE_COUNT = 140;

function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}

function hexToRgb(hex) {
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}

let activeColorsList = [];
// Base clean luxury dark colors
let currentBgGradients = { r1: 1, g1: 3, b1: 8, r2: 2, g2: 4, b2: 10 };

function syncEnvironmentStates() {
    const activeModules = SOUNDS.filter(s => state[s.id] && state[s.id].active);
    activeColorsList = activeModules.map(s => hexToRgb(s.accentColor));

    if (activeColorsList.length === 0) {
        currentBgGradients.targetR1 = 1; currentBgGradients.targetG1 = 3; currentBgGradients.targetB1 = 8;
        currentBgGradients.targetR2 = 2; currentBgGradients.targetG2 = 4; currentBgGradients.targetB2 = 10;
    } else if (activeColorsList.length === 1) {
        const primary = activeColorsList[0];
        currentBgGradients.targetR1 = Math.round(primary.r * 0.12);
        currentBgGradients.targetG1 = Math.round(primary.g * 0.12);
        currentBgGradients.targetB1 = Math.round(primary.b * 0.12);
        currentBgGradients.targetR2 = Math.round(primary.r * 0.01);
        currentBgGradients.targetG2 = Math.round(primary.g * 0.01);
        currentBgGradients.targetB2 = Math.round(primary.b * 0.01);
    } else {
        let rSum = 0, gSum = 0, bSum = 0;
        activeColorsList.forEach(c => { rSum += c.r; gSum += c.g; bSum += c.b; });
        const len = activeColorsList.length;

        currentBgGradients.targetR1 = Math.round((rSum / len) * 0.06);
        currentBgGradients.targetG1 = Math.round((gSum / len) * 0.06);
        currentBgGradients.targetB1 = Math.round((bSum / len) * 0.06);

        const alt = activeColorsList[1] || activeColorsList[0];
        currentBgGradients.targetR2 = Math.round(alt.r * 0.01);
        currentBgGradients.targetG2 = Math.round(alt.g * 0.01);
        currentBgGradients.targetB2 = Math.round(alt.b * 0.01);
    }
}

function initializeParticle() {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 1,
        baseAlpha: Math.random() * 0.45 + 0.02,
        alphaPulse: Math.random() * 0.015,
        pulseDir: 1
    };
}

/* Restored Framework Loop for Background Tweaks and Velocity Shifts */
function renderFrame() {
    if (currentBgGradients.targetR1 !== undefined) {
        const ease = 0.02;
        currentBgGradients.r1 += (currentBgGradients.targetR1 - currentBgGradients.r1) * ease;
        currentBgGradients.g1 += (currentBgGradients.targetG1 - currentBgGradients.g1) * ease;
        currentBgGradients.b1 += (currentBgGradients.targetB1 - currentBgGradients.b1) * ease;
        currentBgGradients.r2 += (currentBgGradients.targetR2 - currentBgGradients.r2) * ease;
        currentBgGradients.g2 += (currentBgGradients.targetG2 - currentBgGradients.g2) * ease;
        currentBgGradients.b2 += (currentBgGradients.targetB2 - currentBgGradients.b2) * ease;
    }

    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, `rgb(${Math.round(currentBgGradients.r1)}, ${Math.round(currentBgGradients.g1)}, ${Math.round(currentBgGradients.b1)})`);
    bgGrad.addColorStop(1, `rgb(${Math.round(currentBgGradients.r2)}, ${Math.round(currentBgGradients.g2)}, ${Math.round(currentBgGradients.b2)})`);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    const activeCount = activeColorsList.length;

    particles.forEach((p, index) => {
        // Particles move faster when more tracks are layered together
        const velocityMultiplier = activeCount > 0 ? 1.0 + (activeCount * 0.35) : 0.7;

        p.x += p.vx * velocityMultiplier;
        p.y += p.vy * velocityMultiplier;

        if (Math.random() > 0.98) {
            p.vx += (Math.random() - 0.5) * 0.08;
            p.vy += (Math.random() - 0.5) * 0.08;
        }

        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        p.baseAlpha += p.alphaPulse * p.pulseDir;
        if (p.baseAlpha > 0.5 || p.baseAlpha < 0.05) p.pulseDir *= -1;

        let drawColor = `rgba(255, 255, 255, ${p.baseAlpha})`;
        if (activeCount > 0) {
            const selectedColor = activeColorsList[(index + Math.floor(performance.now() / 3500)) % activeCount];
            if (selectedColor) {
                drawColor = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${p.baseAlpha})`;
            }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = drawColor;
        ctx.shadowBlur = 12;
        ctx.shadowColor = drawColor;
        ctx.fill();
        ctx.shadowBlur = 0;
    });

    requestAnimationFrame(renderFrame);
}

window.addEventListener('resize', () => { resizeCanvas(); syncEnvironmentStates(); });

/* ══════════════════════════════════════════════════════════
   DYNAMIC CARD DOM INJECTION ENGINE
══════════════════════════════════════════════════════════ */
function buildCard(sound) {
    const card = document.createElement('div');
    card.className = 'sound-card';
    card.id = `card-${sound.id}`;
    card.style.setProperty('--card-glow', sound.accentColor);
    card.style.setProperty('--card-shadow', sound.shadowColor);
    card.style.setProperty('--card-bg-soft', sound.bgSoft);

    const defaultPct = sound.defaultVolume * 100;

    card.innerHTML = `
    <div class="card-top">
      <div class="icon-container-block">
        <div class="icon-bubble" style="color:${sound.accentColor}">${sound.icon}</div>
        <div class="wave-bars hidden" id="wave-${sound.id}">
          <span></span><span></span><span></span>
        </div>
      </div>
      <button class="toggle-btn" id="toggle-${sound.id}" aria-label="Toggle ${sound.label}" aria-pressed="false"></button>
    </div>
    <div class="card-meta">
      <div class="card-label">${sound.label}</div>
      <div class="card-desc">${sound.description}</div>
    </div>
    <div>
      <input type="range" id="slider-${sound.id}" class="volume-slider" min="0" max="100" value="${defaultPct}" />
      <div class="volume-row">
        <span>0</span>
        <span class="vol-center" id="vol-label-${sound.id}">${defaultPct}%</span>
        <span>100</span>
      </div>
    </div>
    `;

    card.querySelector('.toggle-btn').addEventListener('click', () => toggleSound(sound.id));
    card.querySelector('.volume-slider').addEventListener('input', e => setVolume(sound.id, e.target.value));
    return card;
}

/* ══════════════════════════════════════════════════════════
   CIRCULAR PROGRESS BAR COUNTDOWN TIMER
══════════════════════════════════════════════════════════ */
const CIRCUMFERENCE = 2 * Math.PI * 52;
let timerTotal = 25 * 60, timerRemaining = timerTotal, timerRunning = false, timerInterval = null;

const timerDigits = document.getElementById('timer-digits');
const timerRingFill = document.getElementById('timer-ring-fill');
const timerPlayBtn = document.getElementById('btn-timer-play');
const timerIconPlay = document.getElementById('timer-icon-play');
const timerIconPause = document.getElementById('timer-icon-pause');

(function injectTimerGradient() {
    const svg = document.querySelector('.timer-ring');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `<linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>`;
    svg.prepend(defs);
})();

function updateTimerUI() {
    const m = Math.floor(timerRemaining / 60).toString().padStart(2, '0');
    const s = (timerRemaining % 60).toString().padStart(2, '0');
    timerDigits.textContent = `${m}:${s}`;
    timerRingFill.style.strokeDashoffset = CIRCUMFERENCE * (1 - (timerTotal > 0 ? timerRemaining / timerTotal : 1));
}

function startTimer() {
    if (timerRunning) return;
    timerRunning = true; timerPlayBtn.setAttribute('aria-pressed', 'true');
    timerIconPlay.style.display = 'none'; timerIconPause.style.display = '';
    timerInterval = setInterval(() => {
        if (timerRemaining <= 0) {
            clearInterval(timerInterval); timerRunning = false;
            timerPlayBtn.setAttribute('aria-pressed', 'false');
            timerIconPlay.style.display = ''; timerIconPause.style.display = 'none';
            fadeOutAllAudio(4000); return;
        }
        timerRemaining--; updateTimerUI();
    }, 1000);
}

function pauseTimer() {
    timerRunning = false; clearInterval(timerInterval);
    timerPlayBtn.setAttribute('aria-pressed', 'false');
    timerIconPlay.style.display = ''; timerIconPause.style.display = 'none';
}

function setTimerDuration(minutes) {
    pauseTimer(); timerTotal = minutes * 60; timerRemaining = timerTotal; updateTimerUI();
    document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.toggle('selected', parseInt(b.dataset.minutes) === minutes));
}

function fadeOutAllAudio(durationMs) {
    const activeSounds = SOUNDS.filter(s => state[s.id].active);
    if (activeSounds.length === 0) return;
    const steps = 30, interval = durationMs / steps; let step = 0;
    const fade = setInterval(() => {
        step++; const fraction = 1 - step / steps;
        activeSounds.forEach(sound => { if (state[sound.id].audio) state[sound.id].audio.volume = Math.max(0, state[sound.id].volume * fraction); });
        if (step >= steps) {
            clearInterval(fade);
            activeSounds.forEach(sound => {
                const s = state[sound.id]; if (s.audio) { s.audio.pause(); s.audio.volume = s.volume; }
                s.active = false;
                document.getElementById(`card-${sound.id}`).classList.remove('active');
                document.getElementById(`wave-${sound.id}`).classList.add('hidden');
                document.getElementById(`toggle-${sound.id}`).setAttribute('aria-pressed', 'false');
            });
            updateGlobalStatus(); syncEnvironmentStates();
        }
    }, interval);
}

timerPlayBtn.addEventListener('click', () => { timerRunning ? pauseTimer() : startTimer(); });
document.querySelectorAll('.timer-preset-btn').forEach(btn => { btn.addEventListener('click', () => setTimerDuration(parseInt(btn.dataset.minutes))); });

/* ══════════════════════════════════════════════════════════
   MIX PRESET CONTROLLER HOOKS
══════════════════════════════════════════════════════════ */
const PRESETS = { 'preset-rainy-cafe': { rain: 0.65, coffee: 0.45 }, 'preset-cozy-cabin': { fireplace: 0.60, forest: 0.30 }, 'preset-deep-space': { brownnoise: 0.55, ocean: 0.25 } };

function animateVolume(id, targetVol) {
    const s = state[id]; const slider = document.getElementById(`slider-${id}`); if (!s || !slider) return;
    const startVol = s.volume, startTime = performance.now();
    function step(now) {
        const t = Math.min((now - startTime) / 800, 1);
        const vol = startVol + (targetVol - startVol) * (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        setVolume(id, Math.round(vol * 100)); slider.value = Math.round(vol * 100);
        if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

async function applyPreset(presetId) {
    const config = PRESETS[presetId]; if (!config) return;
    for (const s of SOUNDS) { if (state[s.id].active && !(s.id in config)) await toggleSound(s.id, true); }
    for (const [id, vol] of Object.entries(config)) { if (!state[id].active) await toggleSound(id, true); animateVolume(id, vol); }
    updateGlobalStatus(); syncEnvironmentStates();
    const wasActive = document.getElementById(presetId).classList.contains('active-preset');
    document.querySelectorAll('.preset-capsule').forEach(b => b.classList.remove('active-preset'));
    if (!wasActive) document.getElementById(presetId).classList.add('active-preset');
}

document.getElementById('preset-rainy-cafe').addEventListener('click', () => applyPreset('preset-rainy-cafe'));
document.getElementById('preset-cozy-cabin').addEventListener('click', () => applyPreset('preset-cozy-cabin'));
document.getElementById('preset-deep-space').addEventListener('click', () => applyPreset('preset-deep-space'));
document.getElementById('btn-pause-all').addEventListener('click', pauseAll);
document.getElementById('btn-reset-all').addEventListener('click', resetAll);

/* ══════════════════════════════════════════════════════════
   APPLICATION INITIALIZATION RUNTIME
══════════════════════════════════════════════════════════ */
(function init() {
    generateDynamicFavicon();
    resizeCanvas();

    for (let i = 0; i < BASE_PARTICLE_COUNT; i++) {
        particles.push(initializeParticle());
    }
    renderFrame();

    timerRingFill.style.strokeDasharray = CIRCUMFERENCE;
    timerRingFill.style.strokeDashoffset = 0;
    updateTimerUI();

    const grid = document.getElementById('sounds-grid');
    SOUNDS.forEach(sound => {
        initAudio(sound);
        const card = buildCard(sound);
        grid.appendChild(card);
        card.querySelector('.volume-slider').style.setProperty('--slider-pct', `${sound.defaultVolume * 100}%`);
    });

    document.getElementById('preset-25').classList.add('selected');
    syncEnvironmentStates();
})();