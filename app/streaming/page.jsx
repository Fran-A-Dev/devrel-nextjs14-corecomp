import { Suspense } from "react";
import Loading from "../loading";
import PostList from "./PostList";
import StarWarsList from "./StarWarsList";

export default function Streaming() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-8">Streaming</h1>

      <Suspense fallback={<Loading />}>
        <PostList />
        <StarWarsList />
      </Suspense>
    </div>
  );
}
