import { useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eagle from "../../assets/images/eagle.png"
import Global from "../../assets/images/global.png"
import SuspenseLoader from "../features/suspenseLoader"; 

import { Canvas } from '@react-three/fiber'
import { Stars, useTexture, Float } from '@react-three/drei'

function ImagePlane({ url }) {
  const texture = useTexture(url);

  return (
    <mesh>
      <circleGeometry args={[2.5, 90]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  // Uncomment handleLogin and navigateRegister when using the backend
  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:5000/api/login", { username, password });
    //   localStorage.setItem("token", response.data.token);
    //   navigate("/main");
    // } catch (err) {
    //   alert("Login failed: " + err.response.data.error);
    // }
  };
  const navigateRegister = () => {
    // navigate("/register");
  }

  const navigateRegisterAlternative = () => {
    window.alert("Unable To Connect to F.A.S Servers");
  }

  const handleLoginAlternative = () => {
    window.alert("Unable To Connect to F.A.S Servers")
  }


  const navigateGuest = () => {
    navigate("/main");
  }



  return (
    
    <div className=" bg-[url(../images/geranimo.jpg)] bg-cover bg-center bg-no-repeat  flex flex-col gap-5 xl:py-0 py-5 xl:px-0 px-5 justify-center items-center h-full xl:h-screen ">
      <h2 className="text-2xl lg:text-3xl xl:text-[3rem] text-white text-shadow-md text-shadow-black select-none">Service Gurantees Citizenship</h2>
      <main className="bg-white/10 backdrop-blur-md shadow-md shadow-black  p-3 xl:p-7 justify-center items-center xl:items-stretch flex flex-col xl:flex-row rounded-md gap-7 w-[380px] sm:w-[420px]  xl:w-[1222px] text-[var(--primary-color)]">
        <section className="login-left w-[360px] h-[360px] sm:h-[380px] sm:w-[380px] xl:h-[600px] xl:w-[700px] flex justify-center  xl:pt-0 pt-0 sm:pt-2">
          <Canvas className=" size-full rounded-md shadow-md shadow-black">
            <Suspense fallback={<SuspenseLoader/>}>
              <ambientLight intensity={1}/>
              <directionalLight position={[10,10,10]} intensity={0.5}/>
              <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <ImagePlane url="/images/logo.png" /> 
              </Float>
                <Stars saturation={1} count={400} speed={1} />
              <color attach="background" args={['black']} />
            </Suspense>
          </Canvas>
        </section>
        <section className="login-right w-[360px] sm:w-[380px] xl:w-[450px] flex flex-col items-center justify-between xl:pb-0 xl:gap-0 gap-3 pb-2">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[var(--tertiary-color)] select-none">Federal Armed Services</h2>
          <form className="p-6 bg-[var(--tertiary-color)]  shadow-md shadow-black  rounded w-full h-[440px] flex justify-center flex-col gap-7 lg:text-xl relative " onSubmit={()=> {handleLogin(); handleLoginAlternative()}}>
            <h2 className="text-shadow-md text-shadow-white font-semibold">Login to Database:</h2>
            <div className="flex flex-col">
              <label htmlFor="username">Military-ID</label>
              <input className="bg-[var(--quarternary-color)] p-2 mb-2 border-black border-2 rounded-md" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username">Password</label>
              <input className="bg-[var(--quarternary-color)] p-2 mb-2 border-black border-2 rounded-md" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-center">I'm doing my part</p>
            <div className="flex justify-between">
              <button className=" border-2 border-black   w-[145px] p-2 rounded-sm bg-[var(--quarternary-color)] text-[var(--primary-color)] text-shadow-xs text-shadow-orange  transition-all ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--tertiary-color)]" type="submit">Login</button>
              <button className="border-2 border-black w-[145px] p-2 rounded-sm bg-[var(--quarternary-color)] text-[var(--primary-color)] text-shadow-xs text-shadow-orange  transition-all ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--tertiary-color)]" type="button" onClick={()=> {navigateRegister(); navigateRegisterAlternative()}}>Register</button>
            </div>
            <img className="absolute top-[4%] right-[5%] z-10 size-[80px]" src={Eagle} alt="" />
            <img className="absolute bottom-[13%] right-[48%] sm:bottom-[12%] md:bottom-[9%] sm:right-[46.5%] xl:bottom-[6%] xl:right-[44%] z-10 size-[15px] sm:size-[25px] xl:size-[50px]" src={Global} alt="" />
          </form>
          <button className="  text-2xl lg:text-3xl  p-2 rounded w-full
          bg-[var(--quarternary-color)] text-[var(--primary-color)] text-shadow-xs text-shadow-orange shadow-md shadow-black transition-all ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--tertiary-color)]" type="button" onClick={navigateGuest}>Guest Login</button>
        </section>
      </main>
    </div>
  );
}



export default LoginPage