import { NextResponse } from "next/server";

export async function GET(req) {
  const username = req.nextUrl.searchParams.get("username");
  const url = `https://github.com/${username}.keys`;

  try {
    const response = await fetch(url);
    const data = await response.text();

    if (response.ok) {
      return new NextResponse(data, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      console.error("Response not OK:", response.statusText);
      return new NextResponse("Error fetching SSH key", {
        status: response.status,
      });
    }
  } catch (error) {
    console.error("Server Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
