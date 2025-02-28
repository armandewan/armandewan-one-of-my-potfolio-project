
import profilePic from "../../public/image/profile_pic.jpg";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const AboutMe = () => {
  const handleClick = () => {
    alert("Sorry! my resume are not ready");
  };
  return (
    <section id="aboutMe" className="py-12 mt-8 ">
      <div className="container mx-auto text-center px-6 ">
        <h2 className="text-4xl font-bold mb-6 text-center underline text-blue-950">About Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="flex flex-col space-y-3 items-center text-center">
            <img
              src={profilePic}
              alt="Md Arman"
              className="w-50 h-50 rounded-full indent-3.5 shadow-lg"
            />
            <p className="text-lg mb-4 w-72">
              Hello, I'm <span className="font-bold text--blue-950">Md Arman</span>, a passionate **Full Stack Developer** with expertise in the **MERN stack**.
            </p>
            <div className='divider'></div>
            <div className="bg-black text-white p-1 rounded ">
              <h2 className="">Find me on</h2>
              <div className='space-y-4 flex justify-evenlyss gap-4 mt-4'>
                <a target="_blank" href="https://www.facebook.com/share/1DofXHVrUX/">
                  <FaFacebookSquare className='mx-auto size-8 rounded p-1' /></a>
                <a target="_blank" href="https://www.linkedin.com/in/md-arman-dewan">
                  <FaLinkedin className='mx-auto size-8 rounded p-1' /></a>
                <a target="_blank" href="mdarmandewan88@gmail.com">
                  <MdMarkEmailUnread className='mx-auto size-8 rounded p-1' />
                </a>
              </div>
            </div>
          </div>
          {/* About Info */}
          <div className="text-left max-w-lg">
            <p className="text-lg mb-4">
              My programming journey started with the **Programming Hero Web Development Course**, where I built a strong foundation in **frontend and backend development**.
            </p>
            <p className="text-lg mb-4">
              Over the last **six months**, I have mastered **HTML, CSS, JavaScript, React, Node.js, MongoDB, Firebase, Tailwind CSS, DaisyUI, UX & UI design**.
              This course truly helped me **gain confidence and practical experience** in building real-world applications.
            </p>
            <p className="text-lg mb-4">
              I am currently pursuing my **BBA Professional (4th Year) at Demra University**.
              I completed my **SSC in 2016** and **HSC in 2018**.
            </p>
            <p className="text-lg font-semibold text-secondary">
              "I love solving real-world problems with clean, efficient code!"
            </p>
          </div>
        </div>
        <div className='mx-auto w-56  p-2 m-2'><button onClick={handleClick} className='btn bg-blue-950 w-44 text-ml text-amber-50'>Resume</button></div>
        {/* <Skills /> */}
      </div>
    </section>
  );
};
export default AboutMe;