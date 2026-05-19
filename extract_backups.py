import os
import re

log_path = r"C:\Users\Andalus\.gemini\antigravity\brain\8ede3189-f5a3-4a1a-912c-d7440e36f693\.system_generated\logs\overview.txt"
files_to_restore = [
    "src/components/headers/header-two.js",
    "src/components/footers/common/MasterFooter.js",
    "src/pages/layouts/Shoes/components/Banner.js",
    "src/pages/layouts/Shoes/components/Category.js",
    "src/pages/layouts/Shoes/components/About-us.js",
    "src/components/common/Collections/Collection3.js",
    "src/components/common/Collections/Collection9.js",
    "src/components/common/Service/service1.js",
    "src/pages/index.js",
    "src/assets/scss/app.scss"
]

def restore_files():
    if not os.path.exists(log_path):
        print(f"Log not found: {log_path}")
        return

    with open(log_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for target_file in files_to_restore:
        # Search for the view_file response
        target_encoded = target_file.replace(" ", "%20")
        target_name = os.path.basename(target_file)
        
        found_start = -1
        for i, line in enumerate(lines):
            # Look for File Path: `file:///.../target_file`
            if "File Path: `file://" in line and target_name in line:
                found_start = i
                break
                
        if found_start == -1:
            print(f"Could not find view_file output for {target_file}")
            continue
            
        print(f"Found view_file output for {target_file} at line {found_start}")
        
        # Now extract the lines
        # It starts after "The following code has been modified to include a line number..."
        content_lines = []
        in_content = False
        for j in range(found_start, len(lines)):
            if "The following code has been modified to include a line number before every line" in lines[j]:
                in_content = True
                continue
            if in_content:
                if lines[j].startswith("The above content shows the entire, complete file contents"):
                    break
                # parse line "1: ...."
                match = re.match(r"^\d+:\s?(.*)", lines[j])
                if match:
                    content_lines.append(match.group(1))
                else:
                    # In case of multiline or empty
                    content_lines.append(lines[j].strip("\n"))

        if content_lines:
            out_path = os.path.join(r"d:\Blue Brain\Seada_E-commerce_redesign", target_file)
            out_dir = os.path.dirname(out_path)
            os.makedirs(out_dir, exist_ok=True)
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write("\n".join(content_lines))
            print(f"Restored {target_file} with {len(content_lines)} lines.")
        else:
            print(f"Failed to extract content for {target_file}")

if __name__ == "__main__":
    restore_files()
