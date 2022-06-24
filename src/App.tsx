import { useState, useEffect } from "react";
import Comment from "./utils/comment";
import CommentList from "./components/commentList";
import commentService from "./services/comment";
import "./App.css";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const comments = await commentService.getComments();
    setComments(comments);
  };

  return (
    <div>
      <CommentList items={comments} />
    </div>
  );
}

export default App;
