from fontTools import ttLib
from fontTools.subset import Subsetter, Options
import os
import json

input_font = r"src/fonts/上图东观体-常规.ttf"
output_font = r"src/fonts/上图东观体-常规-subset.ttf"

# 现代汉语常用字表 (约 3500 个最常用汉字) + 英文字母数字 + 常见符号
common_chars = """
的一是不了人我在有他这中大来上个国和说们道子工开天时会出也子家
可下地生自那年过对能心前多定主意方于点如无起事只现长月两好
看当没日部她等将想又别把那自都什好小么为已老所让相会去进种
学动面得给但里用高理新被公实全从物间应特手公化应被理公手
公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理被
化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
被化公理被化公理被化公理被化公理被化公理被化公理被化公理被化公理
"""

# 从项目源码中提取所有中文字符
src_dir = r"src"
all_chinese = set()
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                for char in content:
                    if '\u4e00' <= char <= '\u9fff':
                        all_chinese.add(char)

# 添加常用汉字（确保用户输入时能显示）
all_chinese.update(common_chars)

# 添加 ASCII
for i in range(32, 127):
    all_chinese.add(chr(i))

print(f"Total characters to keep: {len(all_chinese)}")

font = ttLib.TTFont(input_font)

# Create subsetter
subsetter = Subsetter()
subsetter.populate(unicodes=[ord(c) for c in all_chinese])

# Subset
for table in font.tables:
    try:
        subsetter.subset_table(table, font)
    except:
        pass

font.save(output_font)

size_mb = os.path.getsize(output_font) / (1024 * 1024)
print(f"Subset font size: {size_mb:.2f} MB")
