import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(`<center><h1><b>Vision to Web</b></h1></center>`);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_pcwul4t",
        "template_k392sso",
        {
          from_name: form.name,
          to_name: "Atharva Kalbande",
          from_email: form.email,
          to_email: "atharvakalbande5@gmail.com",
          message: form.message,
        },
        "udfev_llUA_83e2Z4"
      );
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-start p-10 gap-20">
      {/* Left Side - Contact Form */}
      <div className="w-full max-w-[500px] mx-auto p-6 rounded-2xl bg-[#0D081D] text-white">
  <p className="text-gray-400 text-lg">Get in touch</p>
  <h3 className="text-3xl font-bold mb-6">Contact Us</h3>

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <label className="flex flex-col text-white font-medium">
      Your Name
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="What's your good name?"
        className="p-3 rounded-lg bg-[#18122B] border border-[#18122B] text-gray-400 placeholder-gray-500 mt-1 w-full"
      />
    </label>

    <label className="flex flex-col text-white font-medium">
      Your Email
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="What's your email?"
        className="p-3 rounded-lg bg-[#18122B] border border-[#18122B] text-gray-400 placeholder-gray-500 mt-1 w-full"
      />
    </label>

    <label className="flex flex-col text-white font-medium">
      Your Message
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="What you want to say?"
        className="p-3 rounded-lg bg-[#18122B] border border-[#18122B] text-gray-400 placeholder-gray-500 mt-1 w-full"
      />
    </label>

    <button
      type="submit"
      className="bg-[#18122B] p-3 rounded-lg text-white font-bold hover:bg-[#241B3B] transition-all mt-2 w-full"
    >
      {loading ? "Sending..." : "Send"}
    </button>
  </form>
</div>


      {/* Right Side - Live Code Preview */}
      <div className="w-full max-w-[600px] mx-auto p-6 bg-[#0D081D] rounded-2xl">
  <h2 className="text-white text-2xl font-bold">Live Code Preview</h2>

  <LiveProvider code={code}>
    {/* Code Editor with Increased Default Height */}
    <div className="mt-4 border border-[#011627] rounded-lg overflow-hidden min-h-[200px]">
      <LiveEditor 
        className="bg-[#011627] text-white p-2 font-mono min-h-[320px] w-full" 
        onChange={(newCode) => setCode(newCode)} 
      />
    </div>

    {/* Error Messages */}
    <LiveError className="text-red-500 mt-2" />

    {/* Rendered Preview */}
    <div className="mt-4 p-4 rounded-lg bg-[#18122B] w-full">
      <LivePreview className="text-white text-2xl break-words overflow-hidden" />
    </div>
  </LiveProvider>
</div>

    </div>
  );
};

export default Contact;
