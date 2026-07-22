# -*- coding: utf-8 -*-
import os
import struct

# 从源码提取所有汉字
chars = set()
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.css')):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as fp:
                for c in fp.read():
                    if '\u4e00' <= c <= '\u9fff':
                        chars.add(c)

# 添加 GB2312 一级汉字 (3755 个)
try:
    for qu in range(16, 56):  # 第 16-55 区
        for wei in range(1, 95):  # 每区 94 位
            try:
                char = struct.pack('BB', qu + 0xA0, wei + 0xA0).decode('gb2312')
                chars.add(char)
            except:
                pass
except:
    pass

# 添加 ASCII
for i in range(32, 127):
    chars.add(chr(i))

print(f'Total chars: {len(chars)}')

with open('src/fonts/used-chars.txt', 'w', encoding='utf-8') as f:
    f.write(''.join(chars))
print('Written to src/fonts/used-chars.txt')
