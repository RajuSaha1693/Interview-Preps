import "./Posts.css"
interface Post{
  body:string
  id:number
  title:string
  userId:number
}
interface PostProps{
  posts:Post[]
}
const backgroundColor=[ '#ef4444','#3b82f6','#22c55e','#eab308','#a855f7','#ec4899','#6366f1','#f97316','#14b8a6','#06b6d4'];
const PostCard: React.FC<{post:Post}> = ({ post }) => {
  return (
    <div className="post-card" style={{backgroundColor:backgroundColor[post.id%10]}}>
      <div className="post-card-heading">
        <h3>{post.title.toUpperCase()}</h3>
      </div>
      <div className="post-card-body">
        <p>{post.body}</p>
      </div>
    </div>
  );
};
const Posts:React.FC<PostProps> = ({posts}) => {
  return (
    <div className="post-list-body">
      {posts.map(item=>(
        <PostCard post={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Posts