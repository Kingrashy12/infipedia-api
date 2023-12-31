import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    userProfile: { type: Object },
    username: { type: String, required: true },
    text: { type: String, required: true },
    commentsImg: { type: Object },
    likes: [],
    comments: [],
  },
  { timestamps: true }
);

const CommentsModel = mongoose.model("Comments", CommentSchema);

export default CommentsModel;
