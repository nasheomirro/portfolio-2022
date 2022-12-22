const Description: React.FC = () => {
  return (
    <main>
      <h2 className="text-xl md:text-2xl font-bold text-primary-100 mb-4">
        Quick Facts
      </h2>
      <ul className="list-disc flex flex-col gap-2 md:gap-4 pl-3">
        <li>I mainly work on websites, specifically the front-end.</li>
        <li>I mainly use React, but I usually try using other stuff too.</li>
        <li>
          I love Typescript, I dislike building libraries with it {"("}the jump
          from user to creator is steep{")"}.
        </li>
        <li>
          I had dropped out of high school, now working full-time on my coding
          skills.
        </li>
        <li>When I&apos;m not programming you can usually catch me gaming.</li>
        <li>I live in the Philippines!</li>
        <li>Pixel art is fun</li>
      </ul>
    </main>
  );
};

export default Description;
