# Note de securite - runner auto-heberge

Un runner auto-heberge relie a un depot public doit etre considere comme une surface d'attaque importante. Un contributeur externe peut ouvrir une pull request qui modifie un workflow, ou exploiter un workflow existant, afin d'executer du code sur la machine qui heberge le runner. Si cette machine contient des fichiers personnels, des cles SSH, des jetons cloud, des variables d'environnement sensibles ou un acces au reseau interne, le risque devient critique. Contrairement aux runners GitHub ephemeres, un runner local peut conserver des traces entre deux executions : fichiers temporaires, dependances installees, caches ou processus oublies. Un workflow malveillant peut aussi tenter de scanner le reseau, exfiltrer des secrets ou miner des ressources.

Mesures de mitigation :

1. Utiliser un runner dedie, isole dans une VM ou un conteneur, sans donnees personnelles et sans acces inutile au reseau interne.
2. Ne jamais executer automatiquement des workflows de pull requests non approuvees sur un runner auto-heberge, surtout pour un depot public.
3. Donner des permissions minimales au `GITHUB_TOKEN`, faire tourner le runner avec un utilisateur non privilegie, nettoyer l'espace de travail apres chaque job et renouveler regulierement la machine.
