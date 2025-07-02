#!/usr/bin/env python3
# add_lazy_loading.py

"""
Ajoute loading="lazy" à toutes les balises <img> de index.html
Usage : placez ce script à la racine de votre projet, puis lancez :
    python add_lazy_loading.py
"""

import os
from bs4 import BeautifulSoup

def add_lazy_to_images(html_path: str) -> int:
    # Lecture du HTML
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Trouve toutes les images et ajoute/écrase l'attribut loading
    imgs = soup.find_all('img')
    for img in imgs:
        img['loading'] = 'lazy'

    # Réécriture du fichier
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    return len(imgs)

if __name__ == '__main__':
    # Chemin vers index.html (même dossier que le script)
    project_root = os.path.dirname(os.path.abspath(__file__))
    index_file = os.path.join(project_root, 'index.html')

    if not os.path.isfile(index_file):
        print(f"❌ Fichier introuvable : {index_file}")
        exit(1)

    count = add_lazy_to_images(index_file)
    print(f"✅ Ajout de loading=\"lazy\" sur {count} balise(s) <img> dans {index_file}")
