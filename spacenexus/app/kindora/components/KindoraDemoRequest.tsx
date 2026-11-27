"use client";

import { useState } from "react";
import { trackDemoRequest } from "@/lib/analytics";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phoneNumber: string;
  companySize: string;
  projectDetails: string;
}

export default function KindoraDemoRequest() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    companySize: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);



  const validate = (data: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!data.firstName.trim()) errs.firstName = "First name is required";
    if (!data.lastName.trim()) errs.lastName = "Last name is required";
    if (!data.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!data.company.trim()) errs.company = "Organization name is required";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched.has(name)) setErrors(validate(updated));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => new Set(prev).add(field));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched(new Set(["firstName", "lastName", "email", "company"]));
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setSubmitting(true);
      const res = await fetch(
        process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://app.pmspace.ai/backend/graphql",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
              createDemoRequest(input: $input) { _id }
            }`,
            variables: {
              input: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                company: formData.company,
                phoneNumber: formData.phoneNumber,
                companySize: formData.companySize,
                projectDetails: formData.projectDetails,
                formType: "Kindora",
              },
            },
          }),
        },
      );

      const json = await res.json();

      if (json.data?.createDemoRequest?._id) {
        setIsSubmitted(true);
        trackDemoRequest({ formType: "Kindora" });
      } else {
        setError(json.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your demo request has been submitted. The Kindora team will follow up
          using the contact details you provided.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              company: "",
              phoneNumber: "",
              companySize: "",
              projectDetails: "",
            });
          }}
          className="text-[#2563eb] hover:text-[#1d4ed8] font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Demo</h3>
        <p className="text-gray-600 text-sm">
          Fill out the form below and our team will get in touch.
        </p>
      </div>

      {error && (
        <div role="alert" aria-live="polite" className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={() => handleBlur("firstName")}
            required
            aria-required="true"
            aria-invalid={touched.has("firstName") && !!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${touched.has("firstName") && errors.firstName ? "bg-red-50 border border-red-400 focus:ring-red-500" : "bg-[#f8f9fa] border border-gray-200 focus:ring-[#2563eb]"}`}
            placeholder="Jane"
          />
          {touched.has("firstName") && errors.firstName && (
            <p id="firstName-error" role="alert" className="text-red-600 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={() => handleBlur("lastName")}
            required
            aria-required="true"
            aria-invalid={touched.has("lastName") && !!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${touched.has("lastName") && errors.lastName ? "bg-red-50 border border-red-400 focus:ring-red-500" : "bg-[#f8f9fa] border border-gray-200 focus:ring-[#2563eb]"}`}
            placeholder="Smith"
          />
          {touched.has("lastName") && errors.lastName && (
            <p id="lastName-error" role="alert" className="text-red-600 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          required
          aria-required="true"
          aria-invalid={touched.has("email") && !!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${touched.has("email") && errors.email ? "bg-red-50 border border-red-400 focus:ring-red-500" : "bg-[#f8f9fa] border border-gray-200 focus:ring-[#2563eb]"}`}
          placeholder="jane.smith@organization.org"
        />
        {touched.has("email") && errors.email && (
          <p id="email-error" role="alert" className="text-red-600 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Organization Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={() => handleBlur("company")}
            required
            aria-required="true"
            aria-invalid={touched.has("company") && !!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${touched.has("company") && errors.company ? "bg-red-50 border border-red-400 focus:ring-red-500" : "bg-[#f8f9fa] border border-gray-200 focus:ring-[#2563eb]"}`}
            placeholder="Global Impact Foundation"
          />
          {touched.has("company") && errors.company && (
            <p id="company-error" role="alert" className="text-red-600 text-xs mt-1">{errors.company}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Organization Size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, companySize: e.target.value }))
            }
            className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="projectDetails"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project or any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Request Demo"
        )}
      </button>

      <p className="mt-4 text-xs text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <span className="text-[#2563eb]">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="text-[#2563eb]">
          Terms of Service
        </span>
        .
      </p>
    </form>
  );
}
