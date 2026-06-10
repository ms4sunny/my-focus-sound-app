const SOUNDS = [
    {
        id: 'rain',
        label: 'Rain',
        description: 'Steady rainfall on leaves',
        accentColor: '#60a5fa',
        shadowColor: 'rgba(96,165,250,0.35)',
        bgSoft: 'rgba(96,165,250,0.12)',
        defaultVolume: 0.5,
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/d/db/Rain_on_a_tin_roof.ogg/Rain_on_a_tin_roof.ogg.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="23" x2="8" y2="23"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="19" x2="12" y2="19"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="23" x2="16" y2="23"/></svg>`,
    },
    {
        id: 'ocean',
        label: 'Ocean Waves',
        description: 'Gentle rolling surf',
        accentColor: '#34d399',
        shadowColor: 'rgba(52,211,153,0.35)',
        bgSoft: 'rgba(52,211,153,0.12)',
        defaultVolume: 0.5,
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1d/Waves_of_the_Pacific_Ocean_at_La_Serena.ogg/Waves_of_the_Pacific_Ocean_at_La_Serena.ogg.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-5 10-5 10 5 10 5"/><path d="M2 12s3 5 10 5 10-5 10-5"/><path d="M2 17c3-2 7-2 10 0s7 2 10 0"/></svg>`,
    },
    {
        id: 'coffee',
        label: 'Coffee Shop',
        description: 'Warm café ambience',
        accentColor: '#fb923c',
        shadowColor: 'rgba(251,146,60,0.35)',
        bgSoft: 'rgba(251,146,60,0.12)',
        defaultVolume: 0.5,
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Paris_Caf%C3%A9_Ambience.ogg/Paris_Caf%C3%A9_Ambience.ogg.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    },
    {
        id: 'forest',
        label: 'Forest Birds',
        description: 'Birdsong in the canopy',
        accentColor: '#a3e635',
        shadowColor: 'rgba(163,230,53,0.35)',
        bgSoft: 'rgba(163,230,53,0.12)',
        defaultVolume: 0.5,
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Forest_ambience_with_birds.ogg/Forest_ambience_with_birds.ogg.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21V8a5 5 0 0 0-10 0v13"/><line x1="12" y1="3" x2="12" y2="8"/><path d="M5 21h14"/><path d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3"/><circle cx="19" cy="7" r="2"/><circle cx="5" cy="9" r="1.5"/></svg>`,
    },
    {
        id: 'brownnoise',
        label: 'Brown Noise',
        description: 'Deep rumbling static',
        accentColor: '#c084fc',
        shadowColor: 'rgba(192,132,252,0.35)',
        bgSoft: 'rgba(192,132,252,0.12)',
        defaultVolume: 0.5,
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c5/Brown_noise.ogg/Brown_noise.ogg.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    },
    {
        id: 'fireplace',
        label: 'Fireplace',
        description: 'Crackling warm hearth',
        accentColor: '#f87171',
        shadowColor: 'rgba(248,113,113,0.35)',
        bgSoft: 'rgba(248,113,113,0.12)',
        defaultVolume: 0.5,
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5b/Fireplace.ogg/Fireplace.ogg.mp3',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6c0 0-4 4-4 8 0 2.21 1.79 4 4 4s4-1.79 4-4c0-4-4-8-4-8z"/><path d="M12 14c0 0-2 1-2 2s.9 2 2 2 2-.9 2-2-2-2-2-2z"/></svg>`,
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

function buildCard(sound) {
    const card = document.createElement('div');
    card.className = 'sound-card p-5';
    card.id = `card-${sound.id}`;
    card.style.setProperty('--card-glow', sound.accentColor);
    card.style.setProperty('--card-shadow', sound.shadowColor);
    card.style.setProperty('--card-bg-soft', sound.bgSoft);

    const defaultPct = sound.defaultVolume * 100;

    card.innerHTML = `
    <div class="flex items-start justify-between mb-4">
      <div class="icon-bubble" style="color: ${sound.accentColor}">
        ${sound.icon}
      </div>
      <div class="flex flex-col items-end gap-2">
        <div class="wave-bars hidden" id="wave-${sound.id}">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <button class="toggle-btn" id="toggle-${sound.id}" aria-label="Toggle ${sound.label}" aria-pressed="false"></button>
      </div>
    </div>
    <div class="mb-1">
      <h2 class="text-sm font-semibold text-slate-100 tracking-wide">${sound.label}</h2>
      <p class="text-xs text-slate-500 mt-0.5">${sound.description}</p>
    </div>
    <div class="mt-4 relative">
      <input type="range" id="slider-${sound.id}" class="volume-slider" min="0" max="100" value="${defaultPct}" aria-label="${sound.label} volume" />
      <div class="flex justify-between mt-2 text-xs text-slate-600" aria-hidden="true">
        <span>0</span>
        <span id="vol-label-${sound.id}" class="text-slate-500">${defaultPct}%</span>
        <span>100</span>
      </div>
    </div>
  `;

    // Attach event listeners explicitly in JS instead of messy HTML inline tags
    card.querySelector('.toggle-btn').addEventListener('click', () => toggleSound(sound.id));
    card.querySelector('.volume-slider').addEventListener('input', (e) => setVolume(sound.id, e.target.value));

    return card;
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
            vol = 50;
            slider.value = 50;
            s.volume = 0.5;
            document.getElementById(`vol-label-${id}`).textContent = '50%';
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 450);
        }

        if (!s.srcLoaded) {
            s.audio.src = s.src;
            s.srcLoaded = true;
        }

        s.audio.volume = s.volume;
        slider.style.setProperty('--track-color', s.accentColor);
        slider.style.setProperty('--slider-pct', `${vol}%`);

        try {
            await s.audio.play();
        } catch (err) {
            console.warn(`[FocusSound] Audio execution failed for "${id}":`, err);
        }

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
        slider.style.setProperty('--track-color', 'rgba(255, 255, 255, 0.1)');
    }

    if (!skipGlobalUpdate) updateGlobalStatus();
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
        slider.style.setProperty('--track-color', s.active ? s.accentColor : 'rgba(255, 255, 255, 0.1)');
    }
}

function pauseAll() {
    SOUNDS.forEach(s => { if (state[s.id].active) toggleSound(s.id, true); });
    updateGlobalStatus();
}

function resetAll() {
    SOUNDS.forEach(s => {
        if (state[s.id].active) toggleSound(s.id, true);
        const slider = document.getElementById(`slider-${s.id}`);
        if (slider) {
            slider.value = s.defaultVolume * 100;
            setVolume(s.id, s.defaultVolume * 100);
        }
    });
    updateGlobalStatus();
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
        text.textContent = activeCount === 1 ? '1 sound playing' : `${activeCount} sounds playing`;
    }
}

// Master button listeners
document.getElementById('btn-pause-all').addEventListener('click', pauseAll);
document.getElementById('btn-reset-all').addEventListener('click', resetAll);

// Initialization
(function init() {
    const grid = document.getElementById('sound-grid');
    SOUNDS.forEach(sound => {
        initAudio(sound);
        const card = buildCard(sound);
        grid.appendChild(card);

        const defaultPct = sound.defaultVolume * 100;
        const slider = card.querySelector('.volume-slider');
        slider.style.setProperty('--slider-pct', `${defaultPct}%`);
    });
})();