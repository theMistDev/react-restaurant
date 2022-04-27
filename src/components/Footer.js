import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between bg-orange-300/50 py-6 px-3  w-full bottom-0">
      <p className="bizName text-lg">
        <span>Cool-Bite</span> Foods
      </p>

      <p>mail@coolbiteFoods.com</p>

      <div className="copyright">copyright &copy;2022</div>
    </footer>
  );
};

export default Footer;
