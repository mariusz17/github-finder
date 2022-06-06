function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com" target="_blank" rel="noreferrer">
            {" "}
            Brad Traversy
          </a>
        </strong>
        .
      </p>
      <p className="text-lg">
        <span className="text-gray-400">Version: </span>
        <span className="dark:text-white">1.0.0</span>
      </p>
      <p className="text-lg">
        <span className="text-gray-400">Layout By: </span>
        <a
          className="dark:text-white"
          href="https://twitter.com/hassibmoddasser"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Hassib Moddasser
        </a>
      </p>
    </>
  );
}

export default About;
