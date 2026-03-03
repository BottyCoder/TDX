import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use((req, res, next) => {
  if (req.path.endsWith('.html') || req.path === '/') {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Serve header logo from same origin to avoid referrer/blocking (proxies Supabase asset)
const HEADER_LOGO_URL = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/eb00c481-a21d-4dc3-ad79-91e393584113/1771567741325-ad26bb0b/White_Color__X_FINAL_Think_Digital_logo_-_Transparent_Background-02.png';
app.get('/header-logo.png', (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  fetch(HEADER_LOGO_URL)
    .then(r => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.statusText))))
    .then(buf => {
      res.set('Content-Type', 'image/png');
      res.send(Buffer.from(buf));
    })
    .catch(() => res.status(502).send('Logo unavailable'));
});

app.use((req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
