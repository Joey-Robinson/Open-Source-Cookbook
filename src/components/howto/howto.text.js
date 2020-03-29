import React from "react"
import { Link } from "gatsby"

const HowtoText = () => (
  <div className="component">
    <div className="component--text">
      <h2>HowTo - Text</h2>
      <h3>Getting Started</h3>
      <p>
        First, we'll need to head over to the{" "}
        <a
          href="https://github.com/Joey-Robinson/osc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository, found here
        </a>{" "}
        and fork it. The fork button can be found in the upper right hand corner
        of the repository.
      </p>
      <p>
        Once we've forked the repository, we'll need to download it our machine
        by clicking on the Clone or Download button located above where the
        files are located to the right.
      </p>
      <p>
        Ok, we've downloaded the repository to our machine. We now need to
        navigate to the folder and install the required dependencies. To do
        this, we'll type in <strong>npm install</strong> in our terminal.
      </p>
      <p>
        Once this is done, we'll run the command <strong>gatsby develop</strong>{" "}
        to start our development environment. If our{" "}
        <strong>gatsby develop</strong> command doesn't work, we'll probably
        need to install the gatsby-cli by typing the following command:{" "}
        <strong>npm install -g gatsby-cli</strong> to get everything situated.
      </p>
      <h3>Once Installed</h3>
      <p>
        Once everything is installed, we're going to navigate to the{" "}
        <strong>Content</strong> folder, located in the root of the directory.
        Once we're there, we're going to click on the <strong>Blog</strong>{" "}
        folder then the <strong>Recipe</strong> folder.
      </p>
      <p>
        Once we've selected the <strong>Recipe</strong> folder, we're going to
        make a new folder inside of there. We're going to name this folder after
        our recipe. So for example, if our recipe name is{" "}
        <strong>Grilled Chicken</strong>, we're going to name the new folder
        grilled-chicken.
      </p>
      <p>
        If there's a folder with the name of the recipe we want to make, that's
        ok and there's no need to panic! We're going to just add something to
        the end of the new folder to identify it. For example, if we wanted to
        make a new <strong>Grilled Chicken</strong> recipe, but there's already
        one there, we'll just name our new one{" "}
        <strong>grilled-chicken-one</strong> (or whatever we want) and not worry
        about it!
      </p>
      <p>
        Now that we've made our folder, we're going to do 1 more thing before
        starting on our recipe. We'll need to make a file inside of our newly
        created folder. We're always going name this file{" "}
        <strong>index.md</strong> so it's processed properly inside of Gatsby.
      </p>
      <h3>Post Folder And File Creation:</h3>
      <p>
        Ok, here we go. We've created our folder. We've created our file. We
        have one final thing to setup before typing out our recipe. We're going
        to need to add Frontmatter to our post.
      </p>
      <p>
        FRONTMATTER?! Yeah! Frontmatter! It's going to give us some extra
        information that Gatsby will process. We'll need the following:
        <ul>
          <li>title</li>
          <li>category (this will ALWAYS be recipes)</li>
          <li>date</li>
          <li>author</li>
          <li>description</li>
          <li>
            cover (the image we see on the{" "}
            <Link to="/recipes/">Recipes Page</Link>)
          </li>
          <li>
            tags (this will be things like chicken, grilled chicken, etc...)
          </li>
        </ul>
        For each one of our recipes we make, we'll need the above. Most of the
        things listed are self-explanatory and there will be examples in other
        files should you need them.
      </p>
      <p>
        The important one here is the cover. We're going to place our cover
        image inside of the folder we created earlier so that it can be shown.
        Note: You can name your image whatever you want but I'd suggest
        something simple.
      </p>
    </div>
  </div>
)

export default HowtoText
