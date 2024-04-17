import { formatDistance, parseISO } from "date-fns";

async function fetchPosts() {
  const query = `
    query getPosts {
      posts {
        nodes {
          postId
          title
          date
          excerpt
        }
      }
    }
  `;
  const response = await fetch(
    `https://smartcache.wpenginepowered.com/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indicate that we're sending and expecting JSON
      },
      body: JSON.stringify({ query }), // Send the query as a JSON string
      next: {
        revalidate: 10, // Next.js specific fetch option to opt out of cache
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch posts, status: ${response.status}`);
  }
  const responseJson = await response.json();
  return responseJson.data.posts.nodes;
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
  const posts = await fetchPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.databaseId} className="card mb-8">
          <h3 className="text-xl text-yellow-300 font-bold mb-4">
            {post.title}
          </h3>
          <h4 className="mb-4 text-yellow-300">
            <RelativeDate dateString={post.date} />
          </h4>
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
