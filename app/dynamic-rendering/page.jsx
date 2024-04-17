import { formatDistance, parseISO } from "date-fns";

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
  }`;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();
  return data.posts.nodes;
}

function RelativeDate({ dateString }) {
  // Parse the string date into a JavaScript Date object
  const date = parseISO(dateString);
  // Calculate the relative date string
  const relativeDateString = formatDistance(date, new Date(), {
    addSuffix: true,
  });
  return <span>{relativeDateString}</span>;
}

export default async function PostList() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.databaseId} className="card">
          <h3>{post.title}</h3>
          <h4 className="mb-4 text-blue-900">
            <RelativeDate dateString={post.date} />
          </h4>
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt,
            }}
          />
        </div>
      ))}
    </div>
  );
}
