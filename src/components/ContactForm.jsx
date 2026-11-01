import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("Message sent successfully!");
      reset();
    } catch {
      setStatus("Unable to send. Please email me directly.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your name"
        />
        {errors.name && <small>{errors.name.message}</small>}
      </label>

      <label>
        Email
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
          placeholder="you@example.com"
        />
        {errors.email && <small>{errors.email.message}</small>}
      </label>

      <label>
        Subject
        <input
          {...register("subject", { required: "Subject is required" })}
          placeholder="Project inquiry"
        />
        {errors.subject && <small>{errors.subject.message}</small>}
      </label>

      <label>
        Message
        <textarea
          rows="5"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          placeholder="Tell me about your project..."
        />
        {errors.message && <small>{errors.message.message}</small>}
      </label>

      <button className="button button-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status && <p role="status">{status}</p>}
    </form>
  );
}