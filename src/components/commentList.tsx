import Comment from "../utils/comment";

interface CommentListProps {
  items: Comment[];
}

function CommentList({ items }: CommentListProps) {
  return (
    <div>
      {items.map(item => (
        <ul key={item.id}>
          <li>{item.postId}</li>
          <li>{item.name}</li>
          <li>{item.email}</li>
          <li>{item.body}</li>
        </ul>
      ))}
    </div>
  );
}

export default CommentList;
