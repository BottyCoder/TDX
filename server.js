import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const NO_CACHE_HEADERS = {
  'Cache-Control': 'no-cache, no-store, must-revalidate, proxy-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Surrogate-Control': 'no-store',
};

function serveHtml(res, filePath) {
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    res.set(NO_CACHE_HEADERS);
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  } catch (err) {
    res.status(500).send('Error loading page');
  }
}

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  serveHtml(res, path.join(__dirname, 'public', 'index.html'));
});

app.get('/:page.html', (req, res) => {
  const filePath = path.join(__dirname, 'public', `${req.params.page}.html`);
  if (fs.existsSync(filePath)) {
    serveHtml(res, filePath);
  } else {
    res.status(404).send('Page not found');
  }
});

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || filePath.endsWith('.svg')) {
      res.set('Cache-Control', 'public, max-age=300');
    }
  }
}));

const HEADER_LOGO_URL = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/eb00c481-a21d-4dc3-ad79-91e393584113/1771567741325-ad26bb0b/White_Color__X_FINAL_Think_Digital_logo_-_Transparent_Background-02.png';
app.get('/header-logo.png', (req, res) => {
  res.set(NO_CACHE_HEADERS);
  fetch(HEADER_LOGO_URL)
    .then(r => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.statusText))))
    .then(buf => {
      res.set('Content-Type', 'image/png');
      res.send(Buffer.from(buf));
    })
    .catch(() => res.status(502).send('Logo unavailable'));
});

app.use((req, res) => {
  serveHtml(res, path.join(__dirname, 'public', 'index.html'));
});

const PORT = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
