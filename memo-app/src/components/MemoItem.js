import React, { useState, useEffect } from 'react';
import './MemoItem.css';

function MemoItem({ memo, isEditing, isNew, onEdit, onSave, onDelete }) {
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  useEffect(() => {
    if (isEditing) {
      setTitle(memo.title);
      setContent(memo.content);
    }
  }, [isEditing, memo.title, memo.content]);

  const handleSave = () => {
    if (title.trim() || content.trim()) {
      onSave(memo.id, title.trim(), content.trim());
    } else {
      // 제목과 내용이 모두 비어있으면 삭제
      onDelete(memo.id);
    }
  };

  const handleCancel = () => {
    if (isNew) {
      // 새 메모인 경우 취소하면 삭제
      onDelete(memo.id);
    } else {
      // 기존 메모인 경우 원래 값으로 복원
      setTitle(memo.title);
      setContent(memo.content);
      onSave(memo.id, memo.title, memo.content);
    }
  };

  if (isEditing) {
    return (
      <div className="memo-item editing">
        <input
          type="text"
          className="memo-title-input"
          placeholder="제목을 입력하세요..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus={isNew}
        />
        <textarea
          className="memo-content-input"
          placeholder="내용을 입력하세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="memo-actions">
          <button className="save-button" onClick={handleSave}>
            저장
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            취소
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="memo-item">
      <div className="memo-header">
        <h3 className="memo-title">{memo.title || '(제목 없음)'}</h3>
        <div className="memo-buttons">
          <button className="edit-button" onClick={() => onEdit(memo.id)}>
            수정
          </button>
          <button className="delete-button" onClick={() => onDelete(memo.id)}>
            삭제
          </button>
        </div>
      </div>
      <p className="memo-content">{memo.content || '(내용 없음)'}</p>
      <div className="memo-footer">
        <span className="memo-date">
          {new Date(memo.updatedAt).toLocaleString('ko-KR')}
        </span>
      </div>
    </div>
  );
}

export default MemoItem;

