import React, { useState, useEffect } from 'react';
import './App.css';
import MemoItem from './components/MemoItem';
import SearchBar from './components/SearchBar';

function App() {
  const [memos, setMemos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newMemoId, setNewMemoId] = useState(null);

  // localStorage에서 메모 불러오기
  useEffect(() => {
    const savedMemos = localStorage.getItem('memos');
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos));
    }
  }, []);

  // 메모가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  // 새 메모 생성
  const handleCreateMemo = () => {
    const newMemo = {
      id: Date.now(),
      title: '',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setMemos([newMemo, ...memos]);
    setNewMemoId(newMemo.id);
    setEditingId(newMemo.id);
  };

  // 메모 수정 모드 전환
  const handleEdit = (id) => {
    setEditingId(id);
  };

  // 메모 저장
  const handleSave = (id, title, content) => {
    setMemos(memos.map(memo => 
      memo.id === id 
        ? { ...memo, title, content, updatedAt: new Date().toISOString() }
        : memo
    ));
    setEditingId(null);
    setNewMemoId(null);
  };

  // 메모 삭제
  const handleDelete = (id) => {
    setMemos(memos.filter(memo => memo.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
    if (newMemoId === id) {
      setNewMemoId(null);
    }
  };

  // 검색 필터링
  const filteredMemos = memos.filter(memo => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      memo.title.toLowerCase().includes(query) ||
      memo.content.toLowerCase().includes(query)
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>메모 앱</h1>
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <button className="create-button" onClick={handleCreateMemo}>
          새 메모
        </button>
      </header>
      <main className="memo-container">
        {filteredMemos.length === 0 ? (
          <div className="empty-state">
            {searchQuery ? '검색 결과가 없습니다.' : '메모가 없습니다. 새 메모를 만들어보세요!'}
          </div>
        ) : (
          filteredMemos.map(memo => (
            <MemoItem
              key={memo.id}
              memo={memo}
              isEditing={editingId === memo.id}
              isNew={newMemoId === memo.id}
              onEdit={handleEdit}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
