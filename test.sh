#!/bin/bash

# 프로젝트 폴더 경로
PROJECT_DIR="/Users/fanddle/WebstormProjects/portfolio_react/src/"

# 변환 대상 확장자
SOURCE_EXTENSION=".jsx"

# 변환될 확장자
TARGET_EXTENSION=".tsx"

# 프로젝트 폴더 안의 모든 JSX 파일을 순회하며 변환 작업 실행
find "$PROJECT_DIR" -type f -name "*$SOURCE_EXTENSION" | while read -r file; do
    # 새로운 파일명으로 확장자 변경
    new_file="${file%$SOURCE_EXTENSION}$TARGET_EXTENSION"
    # 파일명 변경 (JSX를 TSX로)
    mv "$file" "$new_file"
    echo "변환: $file -> $new_file"
done

echo "변환 작업 완료."
