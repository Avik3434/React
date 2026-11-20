export default function Contact() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-6 lg:px-16">

                <div className="text-center mb-14">
                    <p className="text-[#D92D0A] font-semibold uppercase tracking-widest text-sm">
                        Contact Us
                    </p>

                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#172033]">
                        Let's start a conversation
                    </h1>

                    <p className="mt-5 max-w-2xl mx-auto text-[#64748B] leading-7">
                        Have a question, an idea, or something exciting in mind?
                        We'd love to hear from you. Send us a message and our team
                        will get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#172033]">
                                Get in touch
                            </h2>

                            <p className="mt-4 leading-7 text-[#64748B]">
                                Whether you're interested in working with us,
                                have questions about our services, or simply
                                want to say hello, our inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="bg-[#FFF1ED] text-[#D92D0A] p-3 rounded-lg">
                                    ✉
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#172033]">
                                        Email Us
                                    </h3>

                                    <p className="text-[#64748B] mt-1">
                                        hello@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#FFF1ED] text-[#D92D0A] p-3 rounded-lg">
                                    ☎
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#172033]">
                                        Call Us
                                    </h3>

                                    <p className="text-[#64748B] mt-1">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#FFF1ED] text-[#D92D0A] p-3 rounded-lg">
                                    📍
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#172033]">
                                        Our Office
                                    </h3>

                                    <p className="text-[#64748B] mt-1">
                                        123 Kolkata, West Bengal, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] p-6">
                            <h3 className="text-lg font-semibold text-[#172033]">
                                We're here to help
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#64748B]">
                                Our team is available Monday to Friday.
                                Feel free to reach out and we'll help you
                                find the answers you're looking for.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#172033]">
                            Send us a message
                        </h2>

                        <p className="mt-2 text-[#64748B]">
                            Fill out the form below to contact our team.
                        </p>

                        <form className="mt-8 space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-[#172033] mb-2">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#D92D0A] focus:ring-2 focus:ring-[#D92D0A]/10"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#172033] mb-2">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#D92D0A] focus:ring-2 focus:ring-[#D92D0A]/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#172033] mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#D92D0A] focus:ring-2 focus:ring-[#D92D0A]/10"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#172033] mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#D92D0A] focus:ring-2 focus:ring-[#D92D0A]/10"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#172033] mb-2">
                                    Subject
                                </label>

                                <select
                                    className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-[#64748B] outline-none focus:border-[#D92D0A] focus:ring-2 focus:ring-[#D92D0A]/10"
                                >
                                    <option>Select a subject</option>
                                    <option>General Inquiry</option>
                                    <option>Business Partnership</option>
                                    <option>Technical Support</option>
                                    <option>Feedback</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#172033] mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full resize-none rounded-lg border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#D92D0A] focus:ring-2 focus:ring-[#D92D0A]/10"
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-[#D92D0A]"
                                />

                                <p className="text-sm text-[#64748B] leading-6">
                                    I agree to the{" "}
                                    <a href="#" className="text-[#D92D0A hover:underline">
                                        Privacy Policy
                                    </a>{" "}
                                    and consent to the processing of my information.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-[#D92D0A] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#B92308] hover:shadow-lg"
                            >
                                Submit Message →
                            </button>

            <p className="text-center text-xs text-[#94A3B8]">
                                Your information will remain private and secure.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}