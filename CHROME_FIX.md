# Rezolvare problemă Chrome - Site-ul pornește doar în incognito

Dacă site-ul tău pornește doar în modul incognito, urmează acești pași pentru a rezolva problema:

## Soluții rapide:

### 1. Șterge Cache-ul și Datele Site-ului
1. Deschide Chrome
2. Apasă `Ctrl + Shift + Delete` (Windows/Linux) sau `Cmd + Shift + Delete` (Mac)
3. Selectează:
   - ✅ "Cached images and files"
   - ✅ "Cookies and other site data"
4. Alege intervalul "All time"
5. Click pe "Clear data"

### 2. Șterge Cache-ul pentru Site-ul Specific
1. Deschide site-ul în Chrome
2. Apasă `F12` pentru a deschide Developer Tools
3. Click dreapta pe butonul de refresh (lângă adresa URL)
4. Selectează "Empty Cache and Hard Reload"

### 3. Verifică Extensiile Browserului
1. Mergi la `chrome://extensions/`
2. Dezactivează temporar toate extensiile
3. Reîncarcă site-ul
4. Dacă funcționează, activează extensiile una câte una pentru a identifica problema

### 4. Verifică Setările de Securitate
1. Mergi la `chrome://settings/security`
2. Verifică dacă nu ai setări prea stricte care blochează site-ul

### 5. Șterge Local Storage și Session Storage
1. Deschide Developer Tools (`F12`)
2. Mergi la tab-ul "Application"
3. În stânga, găsește "Local Storage" și "Session Storage"
4. Click dreapta pe URL-ul site-ului și selectează "Clear"

### 6. Verifică Console-ul pentru Erori
1. Deschide Developer Tools (`F12`)
2. Mergi la tab-ul "Console"
3. Verifică dacă există erori roșii
4. Trimite-mi erorile dacă apar

## Dacă problema persistă:

### Verifică dacă rulezi site-ul local:
- Dacă rulezi `npm run dev` sau `vite`, asigură-te că URL-ul este `http://localhost:5173` (sau portul tău)
- Verifică dacă nu ai probleme cu firewall-ul

### Verifică dacă site-ul este pe HTTPS:
- Unele funcționalități necesită HTTPS
- Dacă rulezi local, folosește `http://localhost`

## Soluție permanentă:

Am adăugat meta tags în `index.html` pentru a preveni cache-ul. După ce ștergi cache-ul o dată, site-ul ar trebui să funcționeze normal în Chrome.

Dacă problema persistă după aceste pași, spune-mi ce erori vezi în Console (F12 → Console tab).

