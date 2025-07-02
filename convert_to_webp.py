#!/usr/bin/env python3
"""
convert_to_webp.py

Convertit tous les .png de votre projet en .webp,
supprime les .png, et met à jour index.html en remplaçant
les références .png par .webp.
"""

import os
from PIL import Image

def convert_png_to_webp(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for fname in filenames:
            if fname.lower().endswith('.png'):
                png_path = os.path.join(dirpath, fname)
                webp_name = fname[:-4] + '.webp'
                webp_path = os.path.join(dirpath, webp_name)

                # Ouvre, convertit et sauve en WebP
                with Image.open(png_path) as img:
                    img.save(webp_path, format='WEBP')
                os.remove(png_path)
                print(f"✓ {png_path} → {webp_path}")

def update_index_html(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    updated = content.replace('.png', '.webp')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(updated)
    print(f"✓ Références mises à jour dans {index_path}")

if __name__ == '__main__':
    # Assure-toi d'avoir installé Pillow : pip install pillow
    project_root = os.path.dirname(os.path.abspath(__file__))

    print("Conversion des PNG en WebP…")
    convert_png_to_webp(project_root)

    index_file = os.path.join(project_root, 'index.html')
    if os.path.isfile(index_file):
        print("Mise à jour de index.html…")
        update_index_html(index_file)
    else:
        print("⚠️ index.html introuvable à la racine.")
