// Inline script to apply theme before hydration — prevents flash.
export function ThemeScript() {
  const code = `
    (function() {
      var theme = 'light';
      try {
        var stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') theme = stored;
      } catch (e) {}
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
