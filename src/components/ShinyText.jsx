const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base layer -- always visible */}
      <span className="relative z-10 text-[#FFB4A1]">{text}</span>

      {/* Overlay layer -- animated diagonal reflection clipped to text */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 z-20 pointer-events-none bg-clip-text text-transparent ${
          disabled ? "" : "animate-shine"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 60%)",
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDuration: animationDuration,
          backgroundRepeat: "no-repeat",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ShinyText;
