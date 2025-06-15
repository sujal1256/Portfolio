import React, { useState } from "react";

export default function Contact({ darkMode }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const data = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/send_email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      }
    );
    const res = await data.json();
    console.log("res", res);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setEmail("");
      setSubject("");
      setMessage("");

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  }

  return (
    <div id="contact" className="max-w-3xl">
      <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
        Contact me
      </h1>

      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}  mb-8`}>
        Please contact me directly at{" "}
        <a
          href="mailto:workwithsujal04@gmail.com"
          className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium hover:underline`}
        >
          workwithsujal04@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'border-gray-700 bg-gray-800 text-white focus:ring-blue-400' 
                : 'border-gray-200 bg-gray-50 focus:ring-blue-500'
            } focus:outline-none focus:ring-2`}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'border-gray-700 bg-gray-800 text-white focus:ring-blue-400' 
                : 'border-gray-200 bg-gray-50 focus:ring-blue-500'
            } focus:outline-none focus:ring-2`}
          />
        </div>

        <div>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'border-gray-700 bg-gray-800 text-white focus:ring-blue-400' 
                : 'border-gray-200 bg-gray-50 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 resize-none`}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-2 px-4 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-white focus:ring-blue-400' 
                : 'bg-white border-gray-300 hover:bg-gray-50 focus:ring-blue-500'
            } border rounded-full focus:outline-none focus:ring-2 transition flex items-center space-x-2 text-sm`}
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </button>
        </div>

        {submitStatus === "success" && (
          <div className="text-green-600 mt-2">
            Your message has been sent successfully!
          </div>
        )}
      </form>
    </div>
  );
}