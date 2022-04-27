import React from 'react';
import Button from '../Button';
import PageTitle from '../PageTitle';

const About = () => {
  return (
    <main>
      <PageTitle title="About Us" />

      <div className="md:grid grid-cols-2 max-h-screen">
        <div className="col-span-1 px-6 py-3 flex flex-col justify-around h-[80vh]">
          <h3 className="text-2xl font-bold py-3">
            A clean Kitchen does wonders.
          </h3>

          <p className="py-3 text-xl">
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>

          <p className="py-3 text-xl">
            When starting a React project, a simple HTML page with script tags
            might still be the best option. It only takes a minute to set up! As
            your application grows, you might want to consider a more integrated
            setup..
          </p>

          <Button title="Learn More" />
        </div>

        <div className="col-span-1 flex w-full">
          <img
            className="object-cover w-full"
            src="https://images.unsplash.com/photo-1557955776-857434f1c951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="product"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
