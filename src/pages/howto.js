import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReusableImage from "../components/image"
import { Link } from "gatsby"

const Howto = () => (
  <Layout>
    <SEO title="How To" />
    <section className="howto">
      <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
        This will serve as a guide to submitting new recipes.
      </h2>
      <div className="howto--guide">
        <h3>How do I get started with this?</h3>
        <p>
          First, you'll need to either{" "}
          <a
            href="https://github.com/Joey-Robinson/osc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Head to the repository{" "}
          </a>
          and either download, fork, or clone the repository. You'll need to
          install&nbsp;
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          {" "}
          Clone Repository:
          <code>https://github.com/Joey-Robinson/osc.git</code>
        </pre>
        <>
          <ReusableImage alt="Clone The Repository" filename="gitclone.jpg" />
        </>
        <p>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NodeJS, which can be found here.
          </a>
          &nbsp;If you have NodeJS installed, then it's a matter of cloning the
          repository and installing the dependencies inside of the folder with:
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          <code>npm install</code>
        </pre>
        <br />
        <p>
          If you don't have it installed, you'll probably need to install the
          gatsby-cli as well, which can be done by running the following command
          inside of your terminal:
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          <code>npm install -g gatsby-cli</code>
        </pre>
        <p>
          Once you've installed the dependencies, run the following command:
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          <code>gatsby develop</code>
        </pre>
        <p>
          Inside of your terminal, then you're set. Below is an image showing
          what to do to install the dependencies.
        </p>
        <>
          <ReusableImage alt="Install Process" filename="install.jpg" />
        </>
        <h3>How To Make Changes:</h3>
        <p>
          After you've set everything up, we're going to head back into the
          terminal and type the following command:
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          <code>git checkout -b recipe/grilled-chicken</code>
        </pre>
        <p>
          Here, we're creating a new branch where we're going to make changes to
          the repository.
        </p>
        <>
          <ReusableImage
            alt="Making Grilled Chicken Branch"
            filename="grilledchicken.png"
          />
        </>
        <p>
          We're first going to go to the content folder found in the root of the
          directory. This folder contains all of the images and recipes and is
          where we're going to be spending our time. Once we're there, we'll
          click on the blog folder located inside of it. After that, we will
          create a new folder inside of the blog directory.
        </p>
        <>
          <ReusableImage alt="Content Folder" filename="contentfolder.png" />
        </>
        <p>
          Now here comes the tricky part! We'll need to name the folder that we
          just created whatever our recipe is going to be. So for example, if we
          wanted to make grilled chicken, we would name it like so:
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          <code>grilled-chicken</code>
        </pre>
        <p>
          Now that we have that done, we're going to make our file. We'll create
          a new file inside of the folder we just created and name it index.md
          (.md is makes it a markdown file). Once that is done, we're almost
          ready to start writing our recipe. We'll need to setup our
          Frontmatter. To do this, we're going to type exactly the following:
        </p>
        <>
          <ReusableImage alt="Frontmatter Explination" filename="syntax.png" />
        </>
        <p>
          In the above image, we can see the general layout for our Frontmatter.
          We have 3 dashes at the top and bottom then our information. We have
          the following items:
          <ul style={{ padding: "1.5rem 0" }}>
            <li>title</li>
            <li>category</li>
            <li>date</li>
            <li>author</li>
            <li>description</li>
            <li>cover</li>
            <li>tags</li>
          </ul>
          It's important that we put all of this information in. For title,
          we'll put Grilled Chicken, category will always be recipes. For each
          field, we'll input the information requested. For tags, we'll need to
          go to a new line and add a tag to each line like shown in the above
          image.
        </p>
        <br />
        <p>
          The following is incredibly important! To add a cover image (as
          showing on the <Link to="/recipes/">Recipes Page</Link>) we need to
          add an image to the folder we create earlier. The name of the file is
          entirely up to us. For this example, we'll name it grilledchicken.jpg.
          To be as consistent as possible, we're going to make all the images
          .jpg.
        </p>
        <br />
        <p>
          After that, we're pretty much done! We have to write out our recipe,
          of course. Outside of that, we're done. If you want to add an image,
          or several images, we'll use the following syntax:
        </p>
        <pre style={{ fontSize: "2rem", padding: "padding: 1.5rem" }}>
          <code>![Grilled Chicken](grilledchicken.jpg)</code>
        </pre>
        <p>
          Where we want an image to appear. We'll again add the image(s) to the
          folder we created earlier.
        </p>
      </div>
    </section>
  </Layout>
)

export default Howto
