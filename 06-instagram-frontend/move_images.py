import os
import shutil

# 현재 스크립트가 있는 디렉토리
current_dir = os.path.dirname(os.path.abspath(__file__))
public_dir = os.path.join(current_dir, 'public')

# public 폴더 생성
if not os.path.exists(public_dir):
    os.makedirs(public_dir)
    print(f"public 폴더를 생성했습니다: {public_dir}")

# 이동할 이미지 파일 목록
image_files = [
    'img01.png', 'img02.jpg', 'img03.jpg', 'img04.png', 'img05.jpg',
    'img06.jpg', 'img07.jpg', 'img08.jpg', 'img09.jpg', 'img10.jpg',
    'man.png', 'woman.png'
]

# 파일 이동
moved_count = 0
for filename in image_files:
    source_path = os.path.join(current_dir, filename)
    dest_path = os.path.join(public_dir, filename)
    
    if os.path.exists(source_path):
        shutil.move(source_path, dest_path)
        print(f"✓ {filename} 이동 완료")
        moved_count += 1
    else:
        print(f"✗ {filename} 파일을 찾을 수 없습니다.")

print(f"\n총 {moved_count}개의 파일을 이동했습니다.")


