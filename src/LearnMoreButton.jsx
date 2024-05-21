import "./LearnMoreButton.css"; // Import CSS file

const LearnMoreButton = () => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Connect</span>
    </button>
  );
};

export default LearnMoreButton;
