# GitHub Actions Lab

Depot public pour les 12 exercices progressifs GitHub Actions.

## Tableau des workflows

| Exercice | Workflow | Declencheur | Description |
| --- | --- | --- | --- |
| 1-2 | `.github/workflows/bonjour.yml` | `push` | Premier workflow, renomme en workflow d'initiation, avec message, date et acteur GitHub. |
| 3 | `.github/workflows/pr-check.yml` | `pull_request` vers `main` | Affiche le numero et l'auteur d'une pull request. |
| 3 | `.github/workflows/scheduled.yml` | Cron jours ouvres a 09:00 UTC et `workflow_dispatch` | Execute une routine planifiee ou manuelle avec choix d'environnement. |
| 3 | `.github/workflows/docs-only.yml` | `push` sur `docs/**` | Se declenche uniquement quand la documentation change. |
| 4 | `.github/workflows/shell-lab.yml` | `workflow_dispatch` | Demontre scripts multi-lignes, `working-directory`, variables d'etape et `continue-on-error`. |
| 5 | `.github/workflows/pipeline.yml` | `push` | Orchestre `lint`, `test`, `build` et `notify` avec `needs` et `if: always()`. |
| 6 | `.github/workflows/ci.yml` | `push`, `pull_request` | CI Node.js avec checkout, setup-node, installation et tests Vitest. |
| 7 | `.github/workflows/env-demo.yml` | `workflow_dispatch` | Montre variables d'environnement, secret masque et appel `gh api` avec `GITHUB_TOKEN`. |
| 8 | `.github/workflows/smart.yml` | `push`, `pull_request`, tags `v*`, manuel | Demontre conditions, labels de PR, echec, tags et sorties de job. |
| 9 | `.github/workflows/matrix.yml` | `push`, `pull_request`, manuel | Lance la CI sur une matrice OS/versions Node avec include, exclude et fail-fast desactive. |
| 10 | `.github/workflows/artifacts-cache.yml` | `push`, manuel | Utilise le cache npm, genere `dist/report.txt`, l'envoie et le recupere comme artefact. |
| 11 | `.github/workflows/reusable-test.yml` | `workflow_call` | Workflow reutilisable acceptant une version Node et le secret `NPM_TOKEN`. |
| 11 | `.github/workflows/caller.yml` | `push`, manuel | Appelle le workflow reutilisable avec Node 22. |
| 11 | `.github/workflows/composite-demo.yml` | `push`, manuel | Utilise l'action composite locale `.github/actions/setup-project`. |
| 12 | `.github/workflows/deploy.yml` | `push` sur `main`, manuel | Prepare staging, production, GitHub Pages et preuve de runner auto-heberge. |

## Projet de test

La piste choisie pour l'exercice 6 est Node.js avec Vitest.

```bash
npm ci
npm test
```

## Exercice 10 - cache

Tableau a remplir apres deux executions consecutives de `Artifacts and Cache`.

| Run | Cache | Duree observee |
| --- | --- | --- |
| 1 | Miss initial | A completer dans GitHub Actions |
| 2 | Hit attendu | A completer dans GitHub Actions |

## Exercice 11 - reutilisable ou composite

Un workflow reutilisable (`workflow_call`) convient quand plusieurs workflows ou depots doivent executer le meme pipeline complet avec des entrees et secrets controles. Une action composite convient plutot pour regrouper une suite d'etapes repetitives dans un job existant, par exemple checkout, installation du langage, dependances et verification rapide.

## Exercice 12 - actions manuelles a faire dans GitHub

1. Dans `Settings > Secrets and variables > Actions`, creer le secret `API_TOKEN` avec une valeur factice comme `s3cret-demo`.
2. Dans `Settings > Environments`, creer `staging` et `production`, puis ajouter une regle de relecteur obligatoire sur `production`.
3. Dans `Settings > Pages`, choisir GitHub Actions comme source de deploiement.
4. Dans `Settings > Actions > Runners`, enregistrer un runner auto-heberge, puis lancer `Deploy` manuellement vers `production` pour executer le job `self-hosted-proof`.
5. Prendre les captures demandees : runs verts, PR rouge puis verte, grille matrice, artefact, attente d'approbation, runner auto-heberge.
