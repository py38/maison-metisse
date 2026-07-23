# Site Maison Métisse

Site vitrine one-page pour **Maison Métisse** — architecture, design & décoration intérieure (Cocody, Abidjan).

## Aperçu en local

Depuis le dossier `site/` :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 dans un navigateur.
(Un simple double-clic sur `index.html` fonctionne aussi, mais les vidéos se chargent mieux via un serveur.)

## Structure

```
site/
├── index.html        → la page (sections : hero, studio, savoir-faire, projets, film, contact)
├── styles.css        → tout le style (palette terracotta/crème, typo Cormorant + Jost)
├── script.js         → nav, menu mobile, animations au scroll, formulaire → e-mail
└── assets/
    ├── logo*.png     → logo original + versions blanche/transparente générées
    ├── img/          → rendus (Résidence Cocotier, chambres, villa)
    ├── video/        → reel Résidence Fatou, avant/après, aménagement extérieur
    └── frames/       → images-posters des vidéos
```

## Mise en ligne

Le site est 100 % statique : déposer le contenu du dossier `site/` sur n'importe quel hébergeur
(Netlify, Vercel, GitHub Pages, OVH, o2switch…). Glisser-déposer le dossier sur
[app.netlify.com/drop](https://app.netlify.com/drop) suffit pour une mise en ligne immédiate.

## Personnalisation rapide

- **Coordonnées** : téléphone, e-mail, réseaux → section `#contact` dans `index.html`.
- **Textes** : directement dans `index.html`.
- **Couleurs** : variables `:root` en haut de `styles.css`.
- **Ajouter un projet** : dupliquer un bloc `<figure>` dans la galerie et pointer vers une image de `assets/img/`.

## Notes

- Le formulaire de contact ouvre l'app e-mail du visiteur (pré-rempli vers `maisonmetis2@gmail.com`).
  Pour recevoir les messages sans app e-mail, brancher un service comme Formspree.
- Réseaux dans la section contact : Instagram + Linktree (Facebook retiré).
- Les vidéos de la section Film jouent en lecture automatique, muette, en boucle, sans contrôles.
- Le reel principal Instagram fourni portait un filigrane d'un autre studio (« I.S.A.E ») ;
  il a été écarté pour ne garder que les contenus de Maison Métisse.
