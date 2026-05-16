"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [mode, setMode] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const books = [
    {
      title: "Vừa nhắm mắt vừa mở cửa sổ",
      image: "/image/book3.jpg",
      pdf: "/book3.pdf",
      chaptersAudio: [
        { name: "Chương 1", file: "/audio/vuanhammatvuamocuaso.mp3" },
         ],
      views: "120",
      likes: "15",
      author: "Nguyễn Ngọc Thuần",
      category: "Truyện thiếu nhi"
    },
    {
      title: "Chiếc lá cuối cùng",
      image: "/image/book1.jpg",
      pdf: "/book1.pdf",
      chaptersAudio: [
        { name: "Chương 1", file: "/audio/chieclacuoicung.mp3" },
        ],
      views: "200",
      likes: "30",
      author: "O. Henry",
      category: "Truyện ngắn"
    },
    {
      title: "Dế Mèn phiêu lưu ký",
      image: "/image/book2.jpg",
      pdf: "/book2.pdf",
      chaptersAudio: [
        { name: "Chương 1", file: "/audio/demenchuong1.mp3" },
        { name: "Chương 2", file: "/audio/demenchuong2.mp3" },
        { name: "Chương 3", file: "/audio/demenchuong3.mp3" },
        { name: "Chương 4", file: "/audio/demenchuong4.mp3" },
        ],
      views: "300",
      likes: "50",
      author: "Tô Hoài",
      category: "Thiếu nhi"
    },
  ];

  // ================= CHI TIẾT =================
  if (selectedBook) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#f6f7fb",
        padding: 20,
        fontFamily: "Segoe UI"
      }}>

        {/* 🔥 BACK TRÊN CÙNG */}
        <button
          onClick={() => {
            setSelectedBook(null);
            setMode(null);
            setCurrentAudio(null);
          }}
          style={{
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
            background: "#ddd",
            marginBottom: 10,
            cursor: "pointer"
          }}
        >
          ⬅️ Quay lại
        </button>

        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <img src="/logo.png" width={120} />
          <h1 style={{
            fontSize: 40,
            color: "#ff6b81",
            transition: "0.3s"
          }}>
            📚 Thư viện sách yêu thương
          </h1>
          <h2 style={{ color: "#555" }}>
            Trường THPT Diễn Châu 3
          </h2>
        </div>

        {/* KHUNG SÁCH */}
        <div style={{
          background: "white",
          borderRadius: 20,
          padding: 20,
          marginTop: 20,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "0.3s"
        }}>
          <img src={selectedBook.image}
            width={200}
            style={{ borderRadius: 10 }}
          />

          <h2>{selectedBook.title}</h2>
          <p>👁️ {selectedBook.views}</p>
          <p>❤️ {selectedBook.likes}</p>
          <p>📚 {selectedBook.category}</p>
          <p>👤 {selectedBook.author}</p>

          {/* NÚT */}
          <div style={{ marginTop: 15 }}>
            <button
              onClick={() => setMode("read")}
              style={{
                padding: "14px 24px",
                marginRight: 10,
                background: "#6c9cff",
                color: "white",
                border: "none",
                borderRadius: 15,
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
            >
              📖 Đọc sách
            </button>

            <button
              onClick={() => setMode("listen")}
              style={{
                padding: "14px 24px",
                background: "#ff8fab",
                color: "white",
                border: "none",
                borderRadius: 15,
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
            >
              🎧 Nghe theo chương
            </button>
          </div>
        </div>

        {/* PDF */}
        {mode === "read" && (
          <div style={{
            marginTop: 20,
            background: "white",
            padding: 20,
            borderRadius: 15
          }}>
            <h3>📖 Nội dung sách</h3>
            <iframe
              src={selectedBook.pdf}
              width="100%"
              height="600px"
              style={{ borderRadius: 10 }}
            />
          </div>
        )}

        {/* NGHE */}
        {mode === "listen" && (
          <div style={{
            marginTop: 20,
            background: "white",
            padding: 20,
            borderRadius: 15
          }}>
            <h3>🎧 Chọn chương</h3>

            {selectedBook.chaptersAudio.map((chap, i) => (
              <button key={i}
                onClick={() => setCurrentAudio(chap.file)}
                style={{
                  display: "block",
                  marginTop: 10,
                  padding: 12,
                  width: "100%",
                  borderRadius: 10,
                  border: "none",
                  background: "#eee",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
                onMouseEnter={e => e.target.style.background = "#ddd"}
                onMouseLeave={e => e.target.style.background = "#eee"}
              >
                ▶️ {chap.name}
              </button>
            ))}

            {currentAudio && (
              <audio controls style={{ width: "100%", marginTop: 15 }}>
                <source src={currentAudio} />
              </audio>
            )}
          </div>
        )}
      </div>
    );
  }

  // ================= TRANG CHÍNH =================
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #fceff9, #e0f7fa)",
      padding: 20,
      textAlign: "center"
    }}>
      <img src="/logo.png" width={120} />

      <h1 style={{
        fontSize: 42,
        color: "#ff6b81",
        transition: "0.3s"
      }}>
        📚 Thư viện sách yêu thương
      </h1>

      <h2>Trường THPT Diễn Châu 3</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        marginTop: 30,
        flexWrap: "wrap"
      }}>
        {books.map((book, i) => (
          <div key={i}
            onClick={() => setSelectedBook(book)}
            style={{
              width: 160,
              background: "white",
              borderRadius: 15,
              padding: 10,
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 5px 12px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={book.image}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 10
              }}
            />
            <p>{book.title}</p>
            <div style={{ fontSize: 22 }}>🐻✨🐰💖🐱</div>
          </div>
        ))}
      </div>
    </div>
  );
}