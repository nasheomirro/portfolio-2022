const Description: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-xl md:text-2xl font-bold text-primary-100 mb-4">
        Quirky Facts
      </h2>
      <ul className="list-disc flex flex-col gap-2 pl-3">
        <li>I mainly use React, but I try other stuff too sometimes.</li>
        <li>
          When I&apos;m not programming you can usually catch me gaming.
        </li>
        <li>
          I&apos;m self-thaught. I dropped out because learning
          programming felt more rewarding.
        </li>
        <li>I live in the Philippines, on the mountains of C.A.R</li>
      </ul>
    </div>
  );
};

export default Description;
