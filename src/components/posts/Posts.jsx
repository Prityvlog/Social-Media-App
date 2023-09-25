import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Prity Gupta",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Users can connect with other users by sending friend requests, following their profiles, or accepting friend/follower requests.",
      img: "https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Prity Gupta",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Likes, Comments, and Shares: Users can engage with posts by liking (or upvoting), commenting, and sharing them. These interactions facilitate conversations and content distribution on the platform.",
      img : "https://images.pexels.com/photos/6192447/pexels-photo-6192447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
