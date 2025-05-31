function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Dukan. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
