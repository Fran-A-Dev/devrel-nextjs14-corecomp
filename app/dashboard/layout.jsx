// app/dashboard/layout.jsx
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px", height: "100vh", background: "red" }}>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard/purchases">Purchases</Link>
            </li>
            <li>
              <Link href="/dashboard/account">Account</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flexGrow: 1 }}>{children}</main>
    </div>
  );
}
