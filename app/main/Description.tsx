const Description: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-xl md:text-2xl font-bold text-primary-100 mb-4">
        Quick Facts
      </h2>
      <ul className="list-disc flex flex-col gap-2 pl-3">
        <li>I mainly work on websites, specifically the front-end.</li>
        <li>I mainly use React, but I usually try using other stuff too.</li>
        <li>
          I&apos;m self-thaught! I had dropped out of high school cause learning
          programming felt more rewarding and interesting.
        </li>
        <li>
          When I&apos;m not programming you can usually catch me playing chess.
        </li>
        <li>I live in the Philippines!</li>
      </ul>
    </div>
  );
};

export default Description;
