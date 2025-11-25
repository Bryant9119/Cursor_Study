"use client"

import { useState, useEffect } from "react"
import { Plus, Trash2, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Note {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editContent, setEditContent] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  // 로컬스토리지에서 메모 불러오기
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
      }))
      setNotes(parsedNotes)
    }
  }, [])

  // 로컬스토리지에 메모 저장
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "새로운 메모",
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setNotes([newNote, ...notes])
    setEditingId(newNote.id)
    setEditTitle(newNote.title)
    setEditContent(newNote.content)
  }

  const startEditing = (note: Note) => {
    setEditingId(note.id)
    setEditTitle(note.title)
    setEditContent(note.content)
  }

  const saveNote = () => {
    if (editingId) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: editTitle || "제목 없음",
                content: editContent,
                updatedAt: new Date(),
              }
            : note,
        ),
      )
      setEditingId(null)
      setEditTitle("")
      setEditContent("")
    }
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditTitle("")
    setEditContent("")
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
    if (editingId === id) {
      cancelEditing()
    }
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">노트</h1>
              <p className="mt-1 text-sm text-muted-foreground">생각을 정리하는 공간</p>
            </div>
            <Button onClick={createNote} className="gap-2 bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4" />새 메모
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* 검색 */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="메모 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
          />
        </div>

        {/* 편집 모드 */}
        {editingId && (
          <div className="mb-8">
            <Card className="border-primary/50 bg-card p-6">
              <div className="space-y-4">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full bg-transparent text-2xl font-semibold text-foreground outline-none"
                  placeholder="제목"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="min-h-48 w-full resize-none bg-transparent text-foreground outline-none"
                  placeholder="내용을 입력하세요..."
                />
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={cancelEditing} className="gap-2 bg-transparent">
                    <X className="h-4 w-4" />
                    취소
                  </Button>
                  <Button onClick={saveNote} className="gap-2 bg-primary hover:bg-primary/90">
                    <Check className="h-4 w-4" />
                    저장
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* 메모 목록 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <Card
                key={note.id}
                className="group relative cursor-pointer overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-md"
                onClick={() => startEditing(note)}
              >
                <div className="space-y-3">
                  <h3 className="line-clamp-2 text-lg font-semibold text-foreground">{note.title}</h3>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{note.content || "내용 없음"}</p>
                  <div className="flex items-end justify-between pt-2">
                    <time className="text-xs text-muted-foreground">
                      {note.updatedAt.toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteNote(note.id)
                      }}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                    </button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex h-64 items-center justify-center rounded-lg border border-border/50 bg-card/50">
              <div className="text-center">
                <p className="text-muted-foreground">{searchTerm ? "검색 결과가 없습니다" : "메모가 없습니다"}</p>
                {!searchTerm && (
                  <button onClick={createNote} className="mt-4 text-sm text-primary hover:underline">
                    첫 메모를 만들어보세요
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
