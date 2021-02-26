import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import Image from '../assets/image.png';
import { TextField } from './TextField';
import Navbar from './Header/NavBar';
import 'toastify-js/src/toastify.css';
import Footer from './Footer/Footer';
import handle from '../store/actioncreators/handle';
import Social from './UI/socialSignin/socialSignin';
import DropMenu from './LandingPage/DropMenu';
import { Link, useHistory } from 'react-router-dom';

export default function login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [state, setState] = useState({ email: '', password: '' });

  useEffect(() => {
    if (user.token) {
      history.push('/dashboard/');
    } else {
      history.push('/login');
    }
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInput = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handle(state, history, dispatch);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar toggle={toggle} />
      <DropMenu isOpen={isOpen} toggle={toggle} />
      <div className="px-12 py-4 ">
        <div className="flex justify-between  bg-white rounded-2xl shadow-xl">
          <div className="px-4 border border-black-100">
            <section>
              <h1 className="py-6 px-8 text-2xl text-gray-700">Welcome Back !</h1>
              <p className="text-sm  text-blue-400 px-8 py-6 pt-2">
                You have been registered on Barefoot-nomad .Please login with your email and
                password
              </p>
            </section>
            <div>
              <div className="shadow-xl py-1 border-gray-400 rounded-md">
                <section className="mt-10">
                  <form data-testid="form" onSubmit={handleSubmit}>
                    <div className="py-6">
                      <div className="">
                        <TextField
                          data-testid="input"
                          isLoaded={loaded}
                          name="email"
                          id="Email"
                          type="text"
                          placeholder="Enter your email"
                          changeValue={handleInput}
                        />
                      </div>
                      <div className="">
                        <TextField
                          data-testid="input"
                          isLoaded={loaded}
                          id="Password"
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          changeValue={handleInput}
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8">
                      {!loaded ? (
                        <Skeleton height={30} />
                      ) : (
                        <button
                          id="submit-button"
                          className="bg-indigo-600 text-white justify-center w-full h-8 rounded"
                          type="submit"
                        >
                          Login
                        </button>
                      )}
                    </div>
                    <div className="flex px-8 justify-end text-primary-100 py-6 text-sm hover:text-purple-700 hover:underline hover:cursor-pointer mb-6">
                      <Link to="/reset-password">Forgot password</Link>
                    </div>
                    <div className="space-y-6">
                      {!loaded ? <Skeleton height={30} /> : <Social />}
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
          <div className="shadow-2xl h-auto hidden md:block">
            {!loaded ? (
              <Skeleton height={400} />
            ) : (
              <img
                src={Image}
                className=" h-screen block md:block justify-self-start sm:hidden "
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
