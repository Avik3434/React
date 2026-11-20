export default function About() {
    return (
        <div className="bg-white text-gray-700">
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col gap-12 md:flex-row md:items-center">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                                alt="Team collaborating in an office"
                                className="w-full rounded-2xl shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <span className="text-red-600 font-semibold uppercase tracking-wider">
                                Who We Are
                            </span>

                            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
                                Building ideas into meaningful experiences.
                            </h1>

                            <p className="mt-6 text-lg leading-8">
                                We are a team of curious minds, designers, developers,
                                and problem-solvers who believe that great ideas can
                                change the way people interact with technology.
                            </p>

                            <p className="mt-4 leading-7">
                                Our journey started with a simple idea: make digital
                                experiences more useful, accessible, and enjoyable.
                                Today, we continue to explore new possibilities,
                                challenge conventions, and create solutions that make
                                everyday life a little better.
                            </p>

                            <button className="mt-8 rounded-lg bg-red-600 px-6 py-3 text-white transition hover:bg-red-700 cursor-pointer">
                                Explore Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Our Mission
                        </h2>

                        <p className="mt-5 text-lg leading-8">
                            Our mission is to bring creativity and technology
                            together to build products that solve real problems.
                            We believe simplicity, thoughtful design, and
                            innovation should be at the heart of everything we do.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        <div className="rounded-xl bg-white p-8 shadow-sm transition-all duration-300 ease-in-out border border-transparent hover:scale-[1.03] hover:border-red-700">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Innovation
                            </h3>
                            <p className="mt-4 leading-7">
                                We continuously explore new ideas, tools, and
                                technologies to build smarter and more effective
                                solutions.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-sm transition-all duration-300 ease-in-out border border-transparent hover:scale-[1.03] hover:border-red-700">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Collaboration
                            </h3>
                            <p className="mt-4 leading-7">
                                Great things happen when people work together.
                                We value different perspectives and encourage
                                teamwork at every stage.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-sm transition-all duration-300 ease-in-out border border-transparent hover:scale-[1.03] hover:border-red-700">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Quality
                            </h3>
                            <p className="mt-4 leading-7">
                                We care about the details and strive to deliver
                                reliable, polished, and meaningful experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col gap-12 md:flex-row md:items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                A team driven by curiosity and creativity
                            </h2>

                            <p className="mt-6 leading-8">
                                We believe the best ideas rarely come from
                                standing still. Our team is constantly learning,
                                experimenting, and pushing boundaries to discover
                                better ways of doing things.
                            </p>

                            <p className="mt-4 leading-8">
                                From brainstorming sessions to the final
                                implementation, every step is an opportunity
                                to improve, learn something new, and make
                                an impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                                alt="Team meeting"
                                className="h-64 w-full rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-103"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                                alt="People working together"
                                className="h-64 w-full rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-103"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
                                alt="Modern office workspace"
                                className="col-span-2 h-64 w-full rounded-xl object-cover transition-transform duration-400 ease-in-out hover:scale-103"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-red-500 py-16 text-white">
                <div className="container mx-auto grid grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 lg:px-16">
                    <div>
                        <h3 className="text-4xl font-bold">25+</h3>
                        <p className="mt-2 text-blue-100">Team Members</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold">120+</h3>
                        <p className="mt-2 text-blue-100">Projects Completed</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold">8</h3>
                        <p className="mt-2 text-blue-100">Years of Experience</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold">15+</h3>
                        <p className="mt-2 text-blue-100">Countries Reached</p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 text-center lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Let's build something great together.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7">
                        Have an idea, a challenge, or a project in mind?
                        We would love to hear about it and explore how
                        we can turn it into something meaningful.
                    </p>

                    <a href="/contact" className="mt-8 inline-flex rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition hover:bg-gray-700 m-top-10 cursor-pointer">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}