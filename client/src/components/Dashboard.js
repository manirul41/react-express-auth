/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import workTime from '../../src/assets/img/undraw_work_time_re_hdyv.svg';

function Dashboard() {
  const [data, dataSet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch('http://localhost:5000/all', {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });
        response = await response.json();
        if (response.errors) {
          navigate('/');
        }
        dataSet(response.api);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMyAPI();
    return () => {
      dataSet();
    };
  }, []);

  return (
    <div className="mx-16 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  space-x-4">
      {/* {console.log('ddd', data)} */}
      <div className="">
        <img src={workTime} alt="work time" />
      </div>
      <div className="space-y-2">
        <div className="text-2xl font-bold">
          Hi! <br /> {data?.email}
        </div>
        <div className="text-sm font-normal max-w-lg">
          Note that the development build is not optimized. To create a production build, use yarn build. To create a
          production build, use yarn build.To create a production build, use yarn build.
        </div>
        {/* <div>
          <Link to="/login">
            <button type="button" className="text-white bg-blue-600 rounded-full px-3 py-1">
              Get Started
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
