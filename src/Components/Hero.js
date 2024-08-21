export default function Hero({ children }) {
  return (
    <div className="hero white">
      <h1 className="hero-main-heading">
        Connect Over Sunrises and Starry Nights.
      </h1>
      {children}
    </div>
  );
}
