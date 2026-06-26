export default function Footer() {
  return (
    <footer className="text-center py-8 text-muted text-[0.85rem] border-t border-theme-border">
      <p>
        Designed &amp; Built by <span className="text-teal">Anas Saleem</span> ·{' '}
        <span className="text-teal">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
