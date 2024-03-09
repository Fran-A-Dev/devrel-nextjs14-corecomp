"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function GitHubSSHKey() {
  const searchParams = useSearchParams();
  const [sshKey, setSshKey] = useState("");
  const [error, setError] = useState("");
  const username = searchParams.get("github-username");

  useEffect(() => {
    if (username) {
      const fetchSSHKey = async () => {
        try {
          const response = await fetch(`/api/github-keys?username=${username}`);
          if (!response.ok) {
            throw new Error(`Error fetching SSH key: ${response.statusText}`);
          }
          const sshKey = await response.text();
          setSshKey(sshKey);
        } catch (err) {
          console.error(err);
          setError(err.message);
        }
      };

      fetchSSHKey();
    }
  }, [username]);

  if (error) {
    return <p>Error fetching SSH key: {error}</p>;
  }

  if (!sshKey) {
    return <Skeleton count={3} />;
  }

  return (
    <div>
      <h2>Public SSH key for {username}:</h2>
      <pre>{sshKey || "No SSH key found."}</pre>{" "}
      {/* Use pre for preformatted text */}
    </div>
  );
}
