import { useRef, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Connect = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [payload, setPayload] = useState({ userEmail: "", userName: "", message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      userEmail: payload.userEmail,
      userName: payload.userName,
      message: payload.message,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        // "https://email-service-zwbf.onrender.com/api/email/emailAPIs",
        "",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (response.status === 200) {
        toast.success('Message sent to Taqiuddin...');
        setPayload({ userEmail: "", userName: "", message: "" })
        formRef.current.reset();
      } else {
        console.error("Error: Email not sent");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="contact-section" className="mt-20 sm:10">
      <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
        Contact
      </p>
      <main className="place-items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-20 p-4">
          <div className="w-full md:w-auto">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-4"
            >
              <label className="text-white">Name</label>
              <input
                type="text"
                className="bg-transparent text-white outline-none border-[0.1px] border-zinc-400 p-2"
                name="userName"
                value={payload.userName}
                onChange={handleInputChange}
                required
              />
              <label className="text-white">Email</label>
              <input
                type="email"
                className="bg-transparent text-white outline-none border-[0.1px] border-zinc-400 p-2"
                name="userEmail"
                value={payload.userEmail}
                onChange={handleInputChange}
                required
              />
              <label className="text-white">Message</label>
              <textarea
                className="bg-transparent text-white outline-none border-[0.1px] border-zinc-400 p-2"
                name="message"
                value={payload.message}
                onChange={handleInputChange}
                required
              />
              <input
                type="submit"
                className="text-white border-[0.1px] border-zinc-400 p-2 cursor-pointer hover:bg-zinc-800 transition-colors"
                value={loading ? "Sending..." : "Send"}
              />
            </form>
          </div>

          <div className="w-full md:w-auto mt-10 sm:mt-10 flex justify-center">
            <img
              src="https://img.hotimg.com/Space.png"
              className="w-48 h-48 md:w-80 md:h-80 object-cover floating"
              alt="Astronaut in Space"
            />
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Connect;
