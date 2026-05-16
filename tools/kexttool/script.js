// script.js

const CDN_URL = 'https://cdn.jzadl.xyz/tools/kexttool/kextdb.json';

const MACOS_ORDER = [
  'tahoe',
  'sequoia',
  'sonoma',
  'ventura',
  'monterey',
  'bigsur',
  'catalina',
  'mojave',
  'highsierra'
];

let DB = null;
let fileContent = null;

const analyzeBtn = document.getElementById('analyzeBtn');
const clearBtn = document.getElementById('clearBtn');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

async function loadDatabase() {

  const dot = document.getElementById('dbDot');
  const txt = document.getElementById('dbStatusText');

  try {

    const res = await fetch(CDN_URL);

    if (!res.ok) {
      throw new Error('HTTP ' + res.status);
    }

    DB = await res.json();

    dot.classList.add('ok');

    txt.textContent =
      'Database v' +
      DB._meta.version +
      ' loaded from cdn.jzadl.xyz (' +
      DB._meta.updated +
      ')';

    if (fileContent) {
      analyzeBtn.disabled = false;
    }

  } catch (e) {

    dot.classList.add('err');

    txt.textContent =
      'Failed to load database: ' + e.message;

    showError(
      'Could not fetch kext database from CDN.'
    );
  }
}

/* el resto del JS va aquí */
