export default function Layout({ children }) {
  return (
    <div class="layout-container">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>© 2025 low_kb</small>
      </footer>
    </div>
  );
}
