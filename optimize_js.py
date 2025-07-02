#!/usr/bin/env python3
# add_defer.py

"""
Ajoute l'attribut defer à toutes les balises <script> externes
Usage :
    pip install beautifulsoup4
    python add_defer.py [chemin_vers_index.html]
"""
import os
import sys
from bs4 import BeautifulSoup

def add_defer(html_path: str) -> int:
    # Lire le contenu de la page
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Ajouter defer aux scripts externes
    count = 0
    for script in soup.find_all('script', src=True):
        if not script.has_attr('defer'):
            script['defer'] = 'defer'
            count += 1

    # Réécrire le fichier HTML
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    return count

if __name__ == '__main__':
    # Chemin par défaut vers index.html
    html_file = sys.argv[1] if len(sys.argv) > 1 else 'index.html'

    if not os.path.isfile(html_file):
        print(f"❌ Fichier introuvable : {html_file}")
        sys.exit(1)

    modified = add_defer(html_file)
    print(f"✅ Ajout de defer sur {modified} balise(s) <script> dans {html_file}")
