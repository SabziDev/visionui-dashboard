const NotFoundBackgroundPattern = () => {
  return (
    <div
      className="absolute inset-0 opacity-15"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 2px)",
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(circle at center, black 0%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 0%, transparent 70%)",
      }}
    />
  );
};

export default NotFoundBackgroundPattern;
