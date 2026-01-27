import os
import re

directory = r'c:\Users\nawaf\Desktop\math-101\تمارين اثرائية'

# Regex to catch the header block in enrichment exercises
# Note: Using re.DOTALL to match across lines
header_pattern = re.compile(r'<header style="text-align: center; margin-bottom: 3rem;">.*?</header>', re.DOTALL)
p_pattern = re.compile(r'<p style="font-size: 1.2rem; color: var\(--text-muted\); max-width: 600px; margin: 0 auto;">\s*(.*?)\s*</p>', re.DOTALL)
body_pattern = re.compile(r'<body(.*?)>', re.IGNORECASE)

for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Try to extract subtitle
        subtitle = ""
        header_match = header_pattern.search(content)
        if header_match:
            header_text = header_match.group(0)
            p_match = p_pattern.search(header_text)
            if p_match:
                subtitle = p_match.group(1).strip().replace('\n', ' ')
            
            # Remove header
            content = content.replace(header_text, '')
            
            # Add data-hero-subtitle to body if found
            if subtitle:
                content = body_pattern.sub(f'<body\\1 data-hero-subtitle="{subtitle}">', content)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned: {filename}")
