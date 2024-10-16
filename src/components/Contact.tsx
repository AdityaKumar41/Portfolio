"use client";

import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

// Define the type for form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  // Form submit handler
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true); // Disable button during submission
    try {
      const res = await axios.post("/api/contact", data);
      if (res.status === 200) {
        toast({
          title: "Message sent successfully",
          description: "I will get back to you soon.",
        });
        reset();
      } else {
        toast({
          title: "Uh oh! Something went wrong",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        {/* Name Input */}

        <input
          type="text"
          placeholder="Your Name"
          className={`bg-neutral-100 dark:bg-[#212121] dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
            errors.name ? "border-red-500 focus:ring-red-600" : ""
          }`}
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your email address"
          className={`bg-neutral-100 dark:bg-[#212121] dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
            errors.email ? "focus:ring-red-500" : ""
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
      </div>

      {/* Message Input */}
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`bg-neutral-100 focus:outline-none focus:ring-2 dark:bg-[#212121] dark:text-white focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full ${
            errors.message ? "focus:ring-red-500" : ""
          }`}
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
          })}
        />
      </div>

      {/* Submit Button */}
      <button
        className="px-8 py-1 w-full border-2 border-black dark:border-[#212121] uppercase bg-white text-black dark:bg-black dark:text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(33,33,33),2px_2px_rgba(33,33,33),3px_3px_rgba(33,33,33),4px_4px_rgba(33,33,33),5px_5px_0px_0px_rgba(33,33,33)]"
        type="submit"
        disabled={isSubmitting} // Disable the button when submitting
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Contact;
