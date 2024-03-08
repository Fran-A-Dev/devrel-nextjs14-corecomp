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
    `https://smartcahce.wpengine.com/graphql?query=${query}`,
    {
      next: {
        revalidate: 0, // use 0 to opt out of using cache
      },
    }
  );
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
          <h3 className="text-xl font-bold mb-4">{post.title}</h3>
          <h4 className="mb-4 text-red-500">
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
