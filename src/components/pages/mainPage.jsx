import { useNavigate } from "react-router-dom";
import { useEffect, Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, CameraControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../features/modelMediaQuery";

import { SphereSciFi } from "../modelComponents/sphereSciFi";
import SuspenseLoader from "../features/suspenseLoader";
import { WarriorModel } from "../modelComponents/warriorModel";
import { HopperModel } from "../modelComponents/hopperModel";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { GiPistolGun } from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
import Eagle from "../../assets/images/eagle.png"
import Divider from "../../assets/images/divider.png"

const CameraController = ({target}) => {
  const controlsRef = useRef()


  useEffect(() => {
    if (controlsRef.current && target) {
      controlsRef.current.setLookAt(
        target[0] + 3, target[1] + 2, target[2] + 5,
        target[0], target[1], target[2],
        true
      )
    }
  }, [target])

  return <CameraControls ref={controlsRef} />
}

const MainPage = () => {
  const [arachnidInfo, setArachnidInfo] = useState(0)
  const [animationNumber, setAnimationNumber] = useState([0])
  const [warriorTarget, SetWarriorTarget] = useState(true)
  const [focusTarget, setFocusTarget] = useState([0, 0, 0])

  //Media queries for 3d Models
  const isSmall = useMediaQuery({ maxWidth: 650 });
  const isMedium = useMediaQuery({ maxWidth: 768 });
  const isLarge = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMedium, isLarge);

  const showInfo = (e) => {
    setArachnidInfo(e)
  }

const checkClick = (target) => {
  console.log("New warriorTarget:", target);
};


  const navigate = useNavigate();

  // 1. Uncomment everything commented to check for tokens when logging in and remove them when logging out

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token && !localStorage.getItem("guest")) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/");
  };


const mainAreaRef = useRef (null)
const scrollToTarget = () => {
  mainAreaRef.current?.scrollIntoView({ behavior: 'smooth' })
}

  return (
    <div className=" ">
      <main className="hero-section bg-[url(../images/background0.png)] bg-cover bg-center bg-no-repeat bg-[var(--tertiary-color)] flex flex-col 3xl:flex-row justify-center sm:justify-between items-center h-full 3xl:h-screen relative px-[1.5rem] sm:px-[5rem] 3xl:px-[7rem] 3xl:pt-0 pt-[110px]">
      <button onClick={handleLogout} className="group absolute z-10 top-5 left-[6%]  delay-500">
        <p className="transition-all text-sm lg:text-base ease-in-out text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] font-semibold">Return</p>
        <MdOutlineKeyboardDoubleArrowLeft className="transition-all ease-in-out  text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] group-hover:translate-x-[-4px] text-[40px] lg:text-[50px] "/>
      </button>
      <img className="absolute top-5 left-[46%] sm:left-[49%] z-10 size-[60px] lg:size-[80px]" src={Eagle} alt="" />

      <section className="main-left 3xl:w-[850px] max-w-[full] 3xl:max-w-[50%] flex flex-col 3xl:items-stretch items-center gap-2 sm:gap-10 3xl:gap-0">
        <h1 className="text-[1.5rem] sm:text-[4rem] 2xl:text-[6rem] 3xl:text-[8rem] text-[var(--primary-color)] px-2 select-none">The Arachnid Threat</h1>
        <p className="text-[1rem] sm:text-[2rem] py-6 px-2 text-[var(--primary-color)] select-none">Explore the anatomy, tactics, and history of the Warrior and Hopper bugs</p>
        <div className="flex justify-start px-2 pb-6 items-center">
          <button
            className="  text-xl sm:text-2xl w-[300px] sm:w-[400px]  py-2 rounded bg-[var(--quarternary-color)] text-[var(--primary-color)] text-shadow-xs text-shadow-orange shadow-md shadow-black transition-all ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--tertiary-color)] " onClick={scrollToTarget}
          >
            Begin
          </button>
        </div>

      </section>
      <section className="main-right z-10 bg-[url(../images/rothenberg.jpg)] bg-cover bg-center bg-no-repeat w-full h-[400px]  3xl:w-[700px] 3xl:h-full xl:rounded-none rounded-md">
        <Canvas>
          <Suspense fallback={<SuspenseLoader/>}>
            <SphereSciFi  scale={sizes.sphereScale}/>
            <Environment preset="sunset" />
            <ambientLight intensity={1} color="white"/>
            <directionalLight position={[0, 300, 0]} intensity={1} color="white"/>
          </Suspense>
        </Canvas>
      </section>
      <div class="custom-shape-divider-bottom-1748316081">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
          </svg>
      </div>
      </main>
      <main className="main-info-section bg-[url(../images/background0.png)] bg-cover  bg-no-repeat h-full 3xl:h-screen relative  bg-[var(--tertiary-color)] flex flex-col-reverse 3xl:flex-row justify-center sm:justify-between items-center px-[1.5rem] sm:px-[5rem] 3xl:px-[7rem] 3xl:pb-5 3xl:py-0 py-[200px] 3xl:gap-0 gap-5 " ref={mainAreaRef}>
        <div class="custom-shape-divider-top-1748315651">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
            </svg>
        </div>
        {/* <img className="absolute  top-0 left-[6%] w-[700px] " src={Divider} alt="" /> */}
        <section className=" w-[330px] h-[370px] lg:w-[750px] lg:h-[650px]  relative flex flex-col border-2 border-black  rounded-md bg-white/10 backdrop-blur-md shadow-md shadow-black ">
          <div className="button-area absolute z-10 -right-5 lg:-right-11 top-4 flex flex-col gap-5">
            <button className={("w-[50px] h-[35px] lg:h-[60px] lg:w-[90px] rounded-md  hover:scale-110 border-2 border-black shadow-sm shadow-black ") +  (arachnidInfo===0 ? " bg-[var(--primary-color)] text-[var(--tertiary-color)] ": "  bg-[var(--tertiary-color)] ")} onClick={() => {showInfo(0), checkClick(0),setAnimationNumber(0)}}>
              <IoIosStats className=" size-full p-2 "/>
            </button>
            <button className={("w-[50px] h-[35px] lg:h-[60px] lg:w-[90px] rounded-md  hover:scale-110 border-2 border-black shadow-sm shadow-black ") +  (arachnidInfo===1 ? " bg-[var(--primary-color)] text-[var(--tertiary-color)] ": "  bg-[var(--tertiary-color)] ")} onClick={() => {showInfo(1), checkClick(1),setAnimationNumber(1)}}>
              <GiPistolGun className=" size-full p-2"/>
            </button>
            <button className={("w-[50px] h-[35px] lg:h-[60px] lg:w-[90px] rounded-md  hover:scale-110 border-2 border-black shadow-sm shadow-black ") +  (arachnidInfo===2 ? " bg-[var(--primary-color)] text-[var(--tertiary-color)] ": "  bg-[var(--tertiary-color)] ")} onClick={() => {showInfo(2), checkClick(2),setAnimationNumber(2)}}>
              <FaBook className=" size-full p-2 "/>
            </button>
          </div>
          <div className="text-area font-semibold h-[85%] text-[11px] lg:text-[14px] xl:text-[18px] text-[var(--primary-color)]  p-5">
            <div className={(" flex-col justify-center items-start pl-5 pr-[4rem] gap-5 h-full")+(arachnidInfo ===0 && warriorTarget == true ? " flex": " hidden")}>
              <h2 className="text-xl lg:text-[45px] text-[var(--primary-color)]">Bio Statistics</h2>
              <h3 className="text-lg lg:text-[30px]">Warrior Arachnid</h3>
              <ul className="text-[9px] lg:text-xl flex flex-col gap-1 lg:gap-2">
                <li className="flex  gap-2">
                  <p className="font-bold ">Height:</p>
                  <p>~2.5 meters at the head</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Length:</p>
                  <p>~3-4 meters</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Weight:</p>
                  <p>~1,500-2,000 kg </p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Exoskeleton:</p>
                  <p>Hardened chitin, resistant to small arms fire</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Speed:</p>
                  <p>Fast on foot; capable of charging at high speeds</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Strength:</p>
                  <p>Can rip through steel and crush human soldiers easily</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Senses:</p>
                  <p>Excellent at tracking via vibrations and pheromones</p>
                </li>

              </ul>
            </div>
            <div className={("flex-col justify-center items-start pl-5 pr-[4rem] gap-5 h-full")+(arachnidInfo===1 && warriorTarget == true ? " flex": " hidden")}>
              <h2 className="text-xl lg:text-[45px] text-[var(--primary-color)]">Attack Patterns</h2>
              <h3 className="text-lg lg:text-[30px]">Warrior Arachnid</h3>
              <ul className="text-[9px] lg:text-xl flex flex-col gap-2">
                <li className="flex  gap-2">
                  <p className="font-bold ">Attack:</p>
                  <p>Slashing with forelegs and impaling enemies with sharp claws</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-bold ">Charge:</p>
                  <p>Runs full-speed into enemy formations, often targeting armored units</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-bold ">Tactics:</p>
                  <p>Functions best in groups, overwhelming enemies through sheer numbers</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-bold ">Focus:</p>
                  <p>Soaks up damage while frontline units wear down defenders</p>
                </li>
              </ul>
            </div>
            <div className={("flex-col justify-center items-start pl-5 pr-[4rem] gap-5 h-full")+(arachnidInfo===2 && warriorTarget == true ? " flex": " hidden")}>
              <h2 className="text-xl lg:text-[45px] text-[var(--primary-color)]">History</h2>
              <h3 className="text-lg lg:text-[30px]">Warrior Arachnid</h3>
              <p className="text-[9px] lg:text-xl flex flex-col gap-2">
                Warrior Bugs are the frontline infantry of the Arachnid species, bred purely for combat. They are the most frequently encountered bugs in battle and form the bulk of the Bug horde. Discovered early during the First Bug War, Warriors devastated entire outposts and proved impervious to conventional tactics until the Mobile Infantry adopted high-powered weaponry and tactics involving strategic retreat and terrain use.
              </p>
            </div>

            {/* The Great Barrier  */}

            <div className={(" flex-col justify-center items-start pl-5 pr-[4rem] gap-5 h-full")+(arachnidInfo ===0 && warriorTarget == false ? " flex": " hidden")}>
              <h2 className="text-xl lg:text-[45px] text-[var(--primary-color)]">Bio Statistics</h2>
              <h3 className="text-lg lg:text-[30px] text-[var(--secondary-color)]">Hopper Arachnid</h3>
              <ul className="text-[9px] lg:text-xl flex flex-col gap-2">
                <li className="flex  gap-2">
                  <p className="font-bold ">Wingspan:</p>
                  <p>~6 meters</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Length:</p>
                  <p>~3 meters</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Weight:</p>
                  <p>~800-1,200 kg </p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Flight:</p>
                  <p>Short bursts, not true sustained flight</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Agility:</p>
                  <p>Very agile in air with dive-bomb attack patterns</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-semibold">Exoskeleton:</p>
                  <p>Thinner than Warrior, but still durable</p>
                </li>

              </ul>
            </div>
            <div className={("flex-col justify-center items-start pl-5 pr-[4rem] gap-5 h-full")+(arachnidInfo===1 && warriorTarget == false ? " flex": " hidden")}>
              <h2 className="text-xl lg:text-[45px] text-[var(--primary-color)]">Attack Patterns</h2>
              <h3 className="text-lg lg:text-[30px] text-[var(--secondary-color)]">Hopper Arachnid</h3>
              <ul className="text-[9px] lg:text-xl flex flex-col gap-2">
                <li className="flex  gap-2">
                  <p className="font-bold ">Attack:</p>
                  <p>Drops from the sky onto unsuspecting targets</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-bold ">Dive:</p>
                  <p>Launches from the air to impale or decapitate with front appendages</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-bold ">Tactics:</p>
                  <p>Attacks quickly from above, then retreats to reposition</p>
                </li>
                <li className="flex  gap-2">
                  <p className="font-bold ">Focus:</p>
                  <p>Distracts and scatters enemies, making them vulnerable to ground-based Warriors</p>
                </li>
              </ul>
            </div>
            <div className={("flex-col justify-center items-start pl-5 pr-[4rem] gap-5 h-full")+(arachnidInfo===2 && warriorTarget == false ? " flex": " hidden")}>
              <h2 className="text-xl lg:text-[45px] text-[var(--primary-color)]">History</h2>
              <h3 className="text-lg lg:text-[30px] text-[var(--secondary-color)]">Hoppper Arachnid</h3>
              <p className="text-[9px] lg:text-xl flex flex-col gap-2">
                Hoppers were encountered later in the Bug conflict, first appearing during jungle operations where their aerial attacks took a heavy toll on troops unaccustomed to vertical threats. Believed to be a specialized caste developed to counter human air superiority, Hoppers added a new dimension to Arachnid assaults, forcing the Federation to adapt to three-dimensional combat on both land and air.
              </p>
            </div>
          </div>
          <div className="arrow-area  lg:h-[15%] w-full flex justify-evenly items-center  border-t-2 ">
            <button onClick={() => { setFocusTarget([0, 0, 0]), SetWarriorTarget(true), checkClick(true)}}>
              <MdOutlineKeyboardDoubleArrowLeft className="transition-all ease-in-out  text-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:translate-x-[-4px] text-[50px] lg:text-[90px] "/>
            </button>
            <button onClick={() => {setFocusTarget([14, 0, 1]), SetWarriorTarget(false), checkClick(false) }}>
              <MdOutlineKeyboardDoubleArrowRight className="transition-all ease-in-out  text-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:translate-x-[4px] text-[50px] lg:text-[90px] "/>
            </button>
          </div>
        </section>
        <section className="w-full h-[400px]  3xl:w-[700px] 3xl:h-full  bg-[url(../images/rothenberg.jpg)] bg-cover bg-center bg-no-repeat xl:rounded-b-md rounded-md ">
          <Canvas >
            <Suspense fallback={<SuspenseLoader/>}>
              <OrbitControls/>
              <CameraController target={focusTarget} />
              <WarriorModel  scale={sizes.warriorScale} position={[0,-1,0]} rotation={[.2,-.8,0]} animationNumber={animationNumber}/>
              <HopperModel scale={1} position={[14, -1, 0]} rotation={[.2,-.8,0]} animationNumber={animationNumber}/>
              <Environment preset="forest" />
              <ambientLight intensity={1} color="white"/>
              <directionalLight position={[-10, 0, 0]} intensity={1} color="white"/>
              <directionalLight position={[10, 0, 0]} intensity={1} color="white"/>
              <directionalLight position={[0, 0, -10]} intensity={1} color="white"/>
            </Suspense>
          </Canvas>
        </section>
      </main>
      <main className='footer-footsies h-[80px] w-full bg-[color:var(--quarternary-color)] '>
        <div className='flex items-center justify-center h-full text-sm sm:text-base'>
          Brought to life by Edgar, fueled by coffee ☕. 
        </div>
      </main>
    </div>
  );
}

export default MainPage