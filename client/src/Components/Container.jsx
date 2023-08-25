import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

function Container() {
  return (
    <div className="flex items-center justify-center gap-3 flex-col w-6/12 px-12">
      <CreatePost />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default Container;
