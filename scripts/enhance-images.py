#!/usr/bin/env python3
"""Post-process fetched GCE assets: subtle photo grade + logo normalisation.

Photos (public/images/*.jpg): gentle contrast/saturation grade, re-encoded q82.
Client logos (public/images/logos/*.png): RGBA, autocrop, square-pad to 200px.
Accreditation badges (hkias/hoklas): 2x upscale. Favicon: left untouched.
"""
import os
import sys

from PIL import Image, ImageEnhance

ROOT = os.path.join(sys.argv[1] if len(sys.argv) > 1 else '.', 'public', 'images')
CLIENT_LOGOS = {'aa', 'archsd', 'cedd', 'ha', 'hkha', 'hkhs', 'landsd', 'mtr'}
BADGES = {'hkias', 'hoklas'}


def grade_photo(path: str) -> None:
    im = Image.open(path).convert('RGB')
    im = ImageEnhance.Contrast(im).enhance(1.15)
    im = ImageEnhance.Brightness(im).enhance(0.97)
    im = ImageEnhance.Color(im).enhance(1.08)
    im = ImageEnhance.Sharpness(im).enhance(1.1)
    im.save(path, 'JPEG', quality=82)


def square_logo(path: str, size: int = 200) -> None:
    im = Image.open(path).convert('RGBA')
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    side = max(im.size)
    canvas = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    canvas.paste(im, ((side - im.width) // 2, (side - im.height) // 2))
    canvas = canvas.resize((size, size), Image.LANCZOS)
    canvas.save(path, 'PNG')


def upscale_badge(path: str) -> None:
    im = Image.open(path).convert('RGBA')
    im = im.resize((im.width * 2, im.height * 2), Image.LANCZOS)
    im.save(path, 'PNG')


def main() -> int:
    photos = sorted(f for f in os.listdir(ROOT) if f.endswith('.jpg'))
    for name in photos:
        grade_photo(os.path.join(ROOT, name))
    logos_dir = os.path.join(ROOT, 'logos')
    for f in sorted(os.listdir(logos_dir)):
        stem = os.path.splitext(f)[0]
        path = os.path.join(logos_dir, f)
        if stem in CLIENT_LOGOS:
            square_logo(path)
        elif stem in BADGES:
            upscale_badge(path)
    print(f'Graded {len(photos)} photos; normalised logos.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
