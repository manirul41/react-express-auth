import React from 'react';
import { Link } from 'react-router-dom';
import workTime from '../../src/assets/img/undraw_work_time_re_hdyv.svg';

function Home() {
  return (
    <div className="mx-16 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  space-x-4">
      <div className="">
        <img src={workTime} alt="work time" />
      </div>
      <div className="space-y-2">
        <div className="text-2xl font-bold">
          Hi! <br /> Welcome
        </div>
        <div className="text-sm font-normal max-w-lg">
          Note that the development build is not optimized. To create a production build, use yarn build. To create a
          production build, use yarn build.To create a production build, use yarn build.
        </div>
        <div>
          <Link to="/dashboard">
            <button type="button" className="text-white bg-blue-600 rounded-full px-3 py-1">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
