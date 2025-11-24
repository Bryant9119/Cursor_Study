const fs = require('fs');
const path = require('path');

const currentDir = __dirname;
const publicDir = path.join(currentDir, 'public');

// public 폴더 생성
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log(`public 폴더를 생성했습니다: ${publicDir}`);
}

// 이동할 이미지 파일 목록
const imageFiles = [
  'img01.png', 'img02.jpg', 'img03.jpg', 'img04.png', 'img05.jpg',
  'img06.jpg', 'img07.jpg', 'img08.jpg', 'img09.jpg', 'img10.jpg',
  'man.png', 'woman.png'
];

// 파일 이동
let movedCount = 0;
imageFiles.forEach(filename => {
  const sourcePath = path.join(currentDir, filename);
  const destPath = path.join(publicDir, filename);
  
  if (fs.existsSync(sourcePath)) {
    fs.renameSync(sourcePath, destPath);
    console.log(`✓ ${filename} 이동 완료`);
    movedCount++;
  } else {
    console.log(`✗ ${filename} 파일을 찾을 수 없습니다.`);
  }
});

console.log(`\n총 ${movedCount}개의 파일을 이동했습니다.`);


