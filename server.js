import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
<<<<<<< HEAD
const PORT = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
=======
app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000'));
>>>>>>> 8ff36fd (Update HTML files to fix loading issues and remove extraneous code)
