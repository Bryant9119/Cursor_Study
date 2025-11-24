# 이미지 파일을 public 폴더로 이동하는 스크립트

# public 폴더가 없으면 생성
if (-not (Test-Path "public")) {
    New-Item -ItemType Directory -Path "public"
    Write-Host "public 폴더를 생성했습니다."
}

# 이미지 파일들을 public 폴더로 이동
$imageFiles = @("img01.png", "img02.jpg", "img03.jpg", "img04.png", "img05.jpg", 
                "img06.jpg", "img07.jpg", "img08.jpg", "img09.jpg", "img10.jpg", 
                "man.png", "woman.png")

foreach ($file in $imageFiles) {
    if (Test-Path $file) {
        Move-Item -Path $file -Destination "public\$file" -Force
        Write-Host "$file 을(를) public 폴더로 이동했습니다."
    } else {
        Write-Host "$file 을(를) 찾을 수 없습니다."
    }
}

Write-Host "`n이미지 파일 이동이 완료되었습니다!"


