import axios from "axios";
import Comment from "../utils/comment";

class CommentService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
  });

  async getComments() {
    const response = await this.http.get<Comment[]>("/comments");
    return response.data.slice(0, 5);
  }
}

export default new CommentService();
