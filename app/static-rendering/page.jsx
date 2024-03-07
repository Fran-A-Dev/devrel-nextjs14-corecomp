async function getPosts() {
  const query = `
  {
    posts(first: 10) {
      nodes {
        title
        excerpt
        date
        databaseId
        uri
        
      }
    }
  }
  `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    { next: { tags: ["posts"] } },
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      revalidate: 10,
    }
  );

  const { data } = await res.json();
  console.log(data);
  return data.posts.nodes;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.uri} className="card mb-8">
          {/* Add margin-bottom between posts */}
          <h3 className="text-xl font-bold mb-4">{post.title}</h3>
          <h4>{post.date}</h4>
          <div
            className="text-base mb-4"
            dangerouslySetInnerHTML={{
              __html: post.excerpt,
            }}
          />
        </div>
      ))}
    </div>
  );
}
