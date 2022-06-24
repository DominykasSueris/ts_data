class CommentService {
  async getComments(): Promise<any> {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    return await response.json().then(response => {
      const commentData = response.slice(0, 5);
      return commentData;
    });
  }
}

export default new CommentService();
