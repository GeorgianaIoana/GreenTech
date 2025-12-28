# FormSubmit Setup - Quick Guide

## ✅ FormSubmit este deja configurat!

Formularul tău folosește acum **FormSubmit** - un serviciu gratuit și nelimitat pentru trimiterea emailurilor.

## 📧 Configurare Email

**IMPORTANT:** Schimbă email-ul destinatar în `Contact.tsx`:

1. Deschide `src/components/Contact.tsx`
2. Găsește linia:
   ```typescript
   const recipientEmail = "hello@greentea.studio";
   ```
3. Înlocuiește cu **email-ul tău**:
   ```typescript
   const recipientEmail = "your-email@example.com";
   ```

## ✨ Caracteristici

- ✅ **Complet gratuit** - nelimitat
- ✅ **Fără înregistrare** necesară
- ✅ **Fără backend** - funcționează direct din frontend
- ✅ **HTTPS securizat**
- ✅ **Anti-spam** protecție

## 🔒 Securitate

Pentru securitate mai bună, poți activa reCAPTCHA:

1. În `Contact.tsx`, schimbă:
   ```typescript
   _captcha: "false", // Schimbă la "true"
   ```

2. Adaugă script-ul reCAPTCHA în `index.html`:
   ```html
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>
   ```

## 📝 Format Email

Emailurile vor fi trimise în acest format:

```
Subject: New Contact Form: [Nume]

Name: [Nume]
Email: [Email]
Service: [Serviciu]

Message:
[Mesaj]
```

## 🧪 Testare

1. Completează formularul
2. Apasă "Trimite mesajul"
3. Verifică email-ul tău (inclusiv spam folder)

## ⚠️ Notă Importantă

Email-ul destinatar este vizibil în codul sursă. Pentru proiecte mai serioase, consideră:
- EmailJS (200 emailuri/lună gratuit)
- Formspree (50 emailuri/lună gratuit)
- Backend propriu

## 🆘 Probleme?

- Verifică că email-ul este corect în `Contact.tsx`
- Verifică consola browser-ului (F12) pentru erori
- Asigură-te că ai conexiune la internet
- Verifică folder-ul spam

