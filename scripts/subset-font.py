from fontTools.subset import Subsetter
from fontTools import ttLib
import os

input_font = r"src/fonts/上图东观体-常规.ttf"
output_font = r"src/fonts/上图东观体-常规-subset.ttf"

unicode_ranges = [
    (0x0041, 0x005A),   # A-Z
    (0x0061, 0x007A),   # a-z
    (0x0030, 0x0039),   # 0-9
    (0x4E00, 0x9FFF),   # CJK Unified Ideographs
    (0x2000, 0x206F),   # General Punctuation
    (0x3000, 0x303F),   # CJK Symbols and Punctuation
]

def get_chars_to_keep():
    chars = set()
    for start, end in unicode_ranges:
        chars.update(range(start, end + 1))
    return chars

font = ttLib.TTFont(input_font)
chars_to_keep = get_chars_to_keep()

print(f"Original glyphs: {len(font['glyf'].glyphOrder)}")

subsetter = Subsetter()
subsetter.populate(unicodes=chars_to_keep)

for table_name in list(font.keys()):
    if not table_name.startswith('.'):
        subsetter.add(table_name)

subsetter.subset(font)

font.save(output_font)

size_mb = os.path.getsize(output_font) / (1024 * 1024)
original_size_mb = os.path.getsize(input_font) / (1024 * 1024)
reduction = ((original_size_mb - size_mb) / original_size_mb) * 100

print(f"Subset font saved to: {output_font}")
print(f"Original size: {original_size_mb:.2f} MB")
print(f"Subset size: {size_mb:.2f} MB")
print(f"Size reduction: {reduction:.1f}%")
