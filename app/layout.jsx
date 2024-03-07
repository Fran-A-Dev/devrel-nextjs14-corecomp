import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>DevRel Headless WP Core Competencies</title>
      </head>

      <body className={rubik.className}>
        {children}

        <footer
          style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}
        >
          © 2023 Fran Agulto Dev Stoke
        </footer>
      </body>
    </html>
  );
}
