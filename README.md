# The Ocean Katz — version statique

Landing page de Clara Katz (freediving & yoga, Dahab), refaite **sans backend** :
même interface, mêmes textes, mêmes photos que la version Rails
(github.com/jobeejobaa/Ocean-Katz), mais uniquement en HTML / CSS / JS.

## Structure

```
index.html      la page
style.css       les styles (identiques à la version Rails)
js/contact.js   l'envoi du formulaire de contact
images/         les photos
icon.png/.svg   favicon
```

## Formulaire de contact

Plus de Rails ni de SMTP Gmail : le formulaire passe par **FormSubmit** (gratuit, sans compte).


2. Mettre le site en ligne et envoyer un message de test.
3. Valider le mail de confirmation reçu de FormSubmit (une seule fois).

Anti-spam : champ caché `_honey`. Sujet du mail : « Nouveau message du site ».

## Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement

Site 100 % statique : Vercel, Netlify, GitHub Pages ou n'importe quel hébergeur.
Plus besoin de Railway.
