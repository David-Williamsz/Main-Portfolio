const STEPS = ["Attract", "Capture", "Engage", "Convert", "Automate"];

export default function Pipeline() {
  return (
    <div className="pipeline" aria-label="How the work flows: Attract, Capture, Engage, Convert, Automate">
      {STEPS.map((step, i) => (
        <div key={step} style={{ display: "contents" }}>
          <div className="pipeline-step">
            <div className="pipeline-dot" />
            <span className="pipeline-label">{step}</span>
          </div>
          {i < STEPS.length - 1 && <div className="pipeline-connector" />}
        </div>
      ))}
    </div>
  );
}
