import React from 'react';
import PageTitle from '../PageTitle';

const About = () => {
  return (
    <main>
      <PageTitle title="About Us" />

      <div className="md:grid grid-cols-2">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold">A clean Kitchen does wonders.</h3>

          <p>
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>

          <p>
            When starting a React project, a simple HTML page with script tags
            might still be the best option. It only takes a minute to set up! As
            your application grows, you might want to consider a more integrated
            setup. There are several JavaScript toolchains we recommend for
            larger applications. Each of them can work with little to no
            configuration and lets you take full advantage of the rich React
            ecosystem. Learn how.
          </p>
        </div>

        <div className="col-span-1">
          <img
            className=" object-cover w-full"
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt="product"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
