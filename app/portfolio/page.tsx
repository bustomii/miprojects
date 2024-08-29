import Link from "next/link";

export default function Portfolio() {

    return (
        <div className="bg-white">
            <div className="bg-lavender-400 w-full shadow">
                <div className="h-[5.875rem] flex items-center justify-between w-full xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto sticky top-0 left-0 right-0 z-50">
                    <div>
                        <Link href="#home">
                            <span className="text-white text-3xl font-lilita font-bold">MILato</span>
                        </Link>
                    </div>
                    <div className="items-center justify-center gap-10 font-lato hidden lg:flex">
                        <Link href="#home">
                            <span className="text-white">Home</span>
                        </Link>
                        <Link href="#about">
                            <span className="text-white">About</span>
                        </Link>
                        <Link href="#portfolio">
                            <span className="text-white">Portfolio</span>
                        </Link>
                        <Link href="#portfolio">
                            <span className="text-white">Contact</span>
                        </Link>
                    </div>
                    <div>
                        <button className="border border-white rounded-full text-white px-5 py-2 text-sm hover:scale-[1.1] transition-all duration-300 ease-in-out">Let’s Talk</button>
                    </div>
                </div>
            </div>
            <div className="bg-lavender-400 pt-16 lg:pt-20 pb-10 group" id="home">
                <div className="xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto w-full flex flex-col lg:flex-row group">
                    <div className="w-full lg:w-1/2 relative pb-20">
                        <h1 className="text-4xl lg:text-[4.2rem] font-bold font-lilita lg:leading-[5rem]">
                            Hello, I’m Bustomi
                            Fullstack Developer &
                            IT Enthusiast
                        </h1>
                        <p className="mt-5 lg:mt-6 text-base lg:text-lg font-lato">
                            I`am is a full-stack developer skilled in front-end and back-end technologies, focused on creating intuitive and effective applications.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <button className="bg-[#FCA61E] rounded-full font-semibold text-white px-8 py-3 text-sm hover:scale-[1.1] transition-all duration-300 ease-in-out">Download CV</button>
                            <button className="bg-white rounded-full font-semibold text-[#2C2C2C] px-8 py-3 text-sm hover:scale-[1.1] transition-all duration-300 ease-in-out flex items-center gap-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 54 54" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1825 8.93248C29.4989 8.61647 29.9278 8.43896 30.375 8.43896C30.8222 8.43896 31.2511 8.61647 31.5675 8.93248L48.4425 25.8075C48.7585 26.1239 48.936 26.5528 48.936 27C48.936 27.4472 48.7585 27.8761 48.4425 28.1925L31.5675 45.0675C31.413 45.2333 31.2267 45.3663 31.0197 45.4585C30.8127 45.5507 30.5893 45.6003 30.3627 45.6043C30.1361 45.6083 29.911 45.5666 29.7009 45.4818C29.4908 45.3969 29.2999 45.2706 29.1397 45.1103C28.9794 44.9501 28.8531 44.7592 28.7682 44.5491C28.6834 44.339 28.6417 44.1139 28.6457 43.8873C28.6497 43.6607 28.6993 43.4373 28.7915 43.2303C28.8837 43.0233 29.0167 42.837 29.1825 42.6825L43.1775 28.6875H6.75C6.30245 28.6875 5.87322 28.5097 5.55676 28.1932C5.24029 27.8768 5.0625 27.4475 5.0625 27C5.0625 26.5524 5.24029 26.1232 5.55676 25.8067C5.87322 25.4903 6.30245 25.3125 6.75 25.3125H43.1775L29.1825 11.3175C28.8665 11.0011 28.689 10.5722 28.689 10.125C28.689 9.67779 28.8665 9.24889 29.1825 8.93248Z" fill="#1B1B1B" />
                                    </svg>
                                </div>
                                Lest`s Talk
                            </button>
                        </div>
                        <img src="/images/headers/4.png" alt="portfolio" className="w-1/3 lg:w-auto rotate-90 lg:rotate-0 absolute lg:top-12 lg:-right-36 transition-all duration-100 ease-in-out" />
                    </div>
                    <div className="w-full lg:w-1/2 -mb-10 flex justify-end relative group items-end">
                        <img src="/images/headers/1.png" alt="portfolio" className="w-auto" />
                        <img src="/images/headers/2.png" alt="portfolio" className="w-1/5 lg:w-auto absolute bottom-5 -left-5 lg:left-14 animate-spin transition-all duration-100 ease-in-out" />
                        <img src="/images/headers/3.png" alt="portfolio" className="w-1/5 lg:w-auto absolute -top-10 lg:top-16 right-5 animate-waving transition-all duration-100 ease-in-out" />
                        <div className="bg-white px-5 py-2 absolute rounded-full text-[#5A5959] font-lato font-semibold flex items-center gap-2 bottom-2 lg:bottom-10 animate-bounce -right-3 lg:-right-10 text-sm lg:text-base">
                            <div>
                                <img src="/images/headers/stack-1.png" alt="portfolio" className="w-5 lg:w-7 h-5 lg:h-7" />
                            </div>
                            Frontend Developer
                        </div>
                        <div className="bg-white px-5 py-2 absolute rounded-full text-[#5A5959] font-lato font-semibold flex items-center gap-2 top-[20%] lg:top-[30%] -left-2 lg:left-28 animate-bounce text-sm lg:text-base">
                            <div>
                                <img src="/images/headers/stack-2.png" alt="portfolio" className="w-5 lg:w-7 h-5 lg:h-7" />
                            </div>
                            Backend Developer
                        </div>
                        <div className="absolute w-full h-full flex items-end justify-end pr-10 lg:pr-20 pb-5 lg:pb-10 z-10">
                            <pre className="sp-cm sp-pristine sp-javascript flex align-start">
                                <code className="sp-pre-placeholder grow-[2] text-xs lg:text-base text-red-600 font-bold">
                                    <div className="cm-line ">
                                        <span className="text-purple-600 font-bold">function</span> <span className="text-blue-600 font-bold">Video</span>
                                        <span className="text-red-600 font-bold">(</span>
                                        <span className="text-red-600 font-bold">&#123;</span> <span className="text-cyan-300 font-bold">video</span> <span className="text-red-600 font-bold">
                                            &#125;
                                        </span>
                                        <span className="text-red-600 font-bold">)</span> <span className="text-red-600 font-bold">&#123;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">  <span className="text-purple-600 font-bold">return</span> <span className="text-red-600 font-bold">(</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">    <span className="text-red-600 font-bold">&lt;</span>
                                        <span className="text-red-600 font-bold">div</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">      <span className="text-red-600 font-bold">&lt;</span>
                                        <span className="text-blue-600 font-bold">Thumbnail</span> <span className="text-cyan-300 font-bold">video</span>=<span className="text-red-600 font-bold">&#123;</span>
                                        <span className="text-cyan-300 font-bold">video</span>
                                        <span className="text-red-600 font-bold">&#125;</span> <span className="text-red-600 font-bold">/&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">      <span className="text-red-600 font-bold">&lt;</span>
                                        <span className="text-red-600 font-bold">a</span> <span className="text-cyan-300 font-bold">href</span>=<span className="text-red-600 font-bold">&#123;</span>
                                        <span className="text-cyan-300 font-bold">video</span>.<span className="text-cyan-300 font-bold">url</span>
                                        <span className="text-red-600 font-bold">&#125;</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">        <span className="text-red-600 font-bold">&lt;</span>
                                        <span className="text-red-600 font-bold">h3</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <span className="text-red-600 font-bold">&#123;</span>
                                        <span className="text-cyan-300 font-bold">video</span>.<span className="text-cyan-300 font-bold">title</span>
                                        <span className="text-red-600 font-bold">&#125;</span>
                                        <span className="text-red-600 font-bold">&lt;/</span>
                                        <span className="text-red-600 font-bold">h3</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">        <span className="text-red-600 font-bold">&lt;</span>
                                        <span className="text-red-600 font-bold">p</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <span className="text-red-600 font-bold">&#123;</span>
                                        <span className="text-cyan-300 font-bold">video</span>.<span className="text-cyan-300 font-bold">description</span>
                                        <span className="text-red-600 font-bold">&#125;</span>
                                        <span className="text-red-600 font-bold">&lt;/</span>
                                        <span className="text-red-600 font-bold">p</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">      <span className="text-red-600 font-bold">&lt;/</span>
                                        <span className="text-red-600 font-bold">a</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">    <span className="text-red-600 font-bold">&lt;/</span>
                                        <span className="text-red-600 font-bold">div</span>
                                        <span className="text-red-600 font-bold">&gt;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">  <span className="text-red-600 font-bold">)</span>
                                        <span className="text-red-600 font-bold">;</span>
                                        <br />
                                    </div>
                                    <div className="cm-line ">
                                        <span className="text-red-600 font-bold">&#125;</span>
                                    </div>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto w-full py-14" id="service">
                <div className="w-full text-center text-[#2C2C2C]">
                    <p className="text-base lg:text-xl">Services</p>
                    <h2 className="font-lilita text-3xl lg:text-[3.375rem] lg:leading-[3.75rem] font-extrabold">Expertise Services! Let’s check this out</h2>
                </div>
                <div className="flex gap-5 flex-col lg:flex-row py-10">
                    <div className="w-full lg:w-1/3 rounded-md bg-[#5D5CDC] p-5 lg:bg-opacity-10 group hover:bg-[#5D5CDC] transition-all duration-300 ease-in-out">
                        <div className="flex">
                            <div className="bg-white p-3 rounded-md w-auto">
                                <img src="/icons/www.png" alt="portfolio" className="w-10 h-10" />
                            </div>
                        </div>
                        <div className="text-white lg:text-[#2C2C2C] group-hover:text-white py-3 space-y-2">
                            <h2 className="font-lilita text-xl font-bold">
                                Custom Web Development
                            </h2>
                            <p className="font-lato text-white lg:text-[#ACACAC] group-hover:text-white text-base lg:text-lg">
                                Creating and maintaining tailored websites or web applications that meet specific client requirements and objectives.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 rounded-md bg-[#5D5CDC] p-5 lg:bg-opacity-10 group hover:bg-[#5D5CDC] transition-all duration-300 ease-in-out">
                        <div className="flex">
                            <div className="bg-white p-3 rounded-md w-auto">
                                <img src="/icons/fullstack.png" alt="portfolio" className="w-9 h-9" />
                            </div>
                        </div>
                        <div className="text-white lg:text-[#2C2C2C] group-hover:text-white py-3 space-y-2">
                            <h2 className="font-lilita text-xl font-bold">
                                Front-End and Back-End Integration
                            </h2>
                            <p className="font-lato text-white lg:text-[#ACACAC] group-hover:text-white text-base lg:text-lg">
                                Developing both the user-facing and server-side components of an application to ensure seamless functionality and a cohesive user experience.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 rounded-md bg-[#5D5CDC] p-5 lg:bg-opacity-10 group hover:bg-[#5D5CDC] transition-all duration-300 ease-in-out">
                        <div className="flex">
                            <div className="bg-white p-3 rounded-md w-auto">
                                <img src="/icons/performance.png" alt="portfolio" className="w-10 h-10" />
                            </div>
                        </div>
                        <div className="text-white lg:text-[#2C2C2C] group-hover:text-white py-3 space-y-2">
                            <h2 className="font-lilita text-xl font-bold">
                                Performance Optimization
                            </h2>
                            <p className="font-lato text-white lg:text-[#ACACAC] group-hover:text-white text-base lg:text-lg">
                                Enhancing the speed and efficiency of web applications through code optimization, caching strategies, and other performance improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto w-full lg:py-14" id="about">
                <div className="flex gap-16 lg:gap-5 flex-col lg:flex-row relative">
                    <div className="w-full lg:w-1/3 relative px-5 flex items-end pt-16 lg:p-0">
                        <div className="w-full">
                            <div className="relative z-10 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 410 197" fill="none">
                                    <path d="M30.2992 33.5354C32.1865 24.6699 39.8001 18.1821 48.8528 17.7252L388.992 0.560165C400.419 -0.0164992 410 9.09314 410 20.5347V177C410 188.046 401.046 197 390 197H20.2059C7.48396 197 -2.00471 185.279 0.644238 172.836L30.2992 33.5354Z" fill="#5D5CDC" />
                                </svg>
                            </div>
                            <div className="absolute z-10 left-0 lg:-left-5 -bottom-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 146 146" fill="none" className="animate-bounce w-16 lg:w-32">
                                    <g clip-path="url(#clip0_319_38)">
                                        <path d="M64.4453 42.7734C43.0612 42.7734 25.6641 60.1708 25.6641 81.5547C25.6641 102.939 43.0612 120.336 64.4453 120.336C85.8292 120.336 103.227 102.939 103.227 81.5547C103.227 60.1708 85.8292 42.7734 64.4453 42.7734ZM94.239 76.4532C82.2037 73.314 72.686 63.7963 69.5468 51.7607C82.1338 53.9094 92.0906 63.8662 94.239 76.4532ZM64.4453 111.781C47.7782 111.781 34.2188 98.2215 34.2188 81.5547C34.2188 66.1468 45.8075 53.3958 60.7263 51.5571C64.1285 68.476 77.524 81.8715 94.4432 85.2737C92.6042 100.192 79.8532 111.781 64.4453 111.781Z" fill="#FCA61E" />
                                        <path d="M146 43.0586C146 19.3159 126.684 0 102.941 0C89.3024 0 76.6049 6.39891 68.4823 17.2377C67.1435 17.1556 65.7981 17.1094 64.4453 17.1094C47.2313 17.1094 31.0475 23.8128 18.8756 35.9847C6.70345 48.1572 0 64.3407 0 81.5547C0 98.7687 6.70345 114.952 18.8756 127.125C31.0475 139.297 47.2313 146 64.4453 146C81.6593 146 97.8428 139.297 110.015 127.125C122.187 114.952 128.891 98.7687 128.891 81.5547C128.891 80.2019 128.844 78.8565 128.762 77.518C139.601 69.3951 146 56.6976 146 43.0586ZM64.4453 137.445C33.6271 137.445 8.55469 112.373 8.55469 81.5547C8.55469 50.7364 33.6271 25.6641 64.4453 25.6641C95.2636 25.6641 120.336 50.7364 120.336 81.5547C120.336 112.373 95.2636 137.445 64.4453 137.445ZM110.015 35.9847C101.24 27.2102 90.3808 21.2784 78.5534 18.6504C84.9614 12.24 93.6801 8.55469 102.941 8.55469C121.967 8.55469 137.445 24.033 137.445 43.0586C137.445 52.3199 133.76 61.0385 127.35 67.4466C124.721 55.6194 118.79 44.7598 110.015 35.9847Z" fill="#FCA61E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_319_38">
                                            <rect width="146" height="146" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 space-y-5 px-5 lg:px-10">
                        <div className="flex">
                            <div className="text-[#2C2C2C] space-y-2">
                                <p className="text-base lg:text-xl font-semibold">About Me</p>
                                <h2 className="font-lilita text-3xl lg:text-[3.375rem] lg:leading-[3.75rem] font-extrabold">Building Solutions, Not Just Code.</h2>
                            </div>
                            <div className="w-16 lg:w-20 flex justify-start absolute lg:relative -top-10 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="82" viewBox="0 0 81 82" fill="none">
                                    <g clip-path="url(#clip0_319_27)">
                                        <path d="M47.268 73.3368L50.4858 74.1452C51.0176 74.277 51.5033 74.5517 51.8903 74.9396C52.2773 75.3274 52.551 75.8137 52.6817 76.3458L53.4901 79.5636C53.4942 79.5858 53.5059 79.6059 53.5232 79.6204C53.5406 79.6348 53.5624 79.6427 53.585 79.6427C53.6076 79.6427 53.6295 79.6348 53.6468 79.6204C53.6641 79.6059 53.6759 79.5858 53.6799 79.5636L54.4884 76.3458C54.6194 75.8131 54.8938 75.3264 55.2817 74.9385C55.6696 74.5506 56.1563 74.2763 56.689 74.1452L59.9068 73.3368C59.9282 73.3319 59.9473 73.32 59.9609 73.3029C59.9746 73.2858 59.9821 73.2645 59.9821 73.2426C59.9821 73.2207 59.9746 73.1995 59.9609 73.1824C59.9473 73.1653 59.9282 73.1533 59.9068 73.1485L56.689 72.3401C56.1563 72.209 55.6696 71.9347 55.2817 71.5468C54.8938 71.1588 54.6194 70.6722 54.4884 70.1395L53.6799 66.9216C53.6759 66.8994 53.6641 66.8793 53.6468 66.8649C53.6295 66.8504 53.6076 66.8425 53.585 66.8425C53.5624 66.8425 53.5406 66.8504 53.5232 66.8649C53.5059 66.8793 53.4942 66.8994 53.4901 66.9216L52.6817 70.1411C52.5507 70.6736 52.2766 71.1601 51.889 71.548C51.5014 71.9359 51.0151 72.2103 50.4827 72.3417L47.2648 73.1501C47.2443 73.1558 47.2262 73.1682 47.2135 73.1854C47.2007 73.2025 47.194 73.2233 47.1943 73.2446C47.1947 73.266 47.2021 73.2866 47.2155 73.3033C47.2288 73.3199 47.2472 73.3317 47.268 73.3368Z" fill="#FCA61E" />
                                        <path d="M5.36782 18.91C6.0727 19.0847 6.71656 19.4484 7.23006 19.9619C7.74356 20.4754 8.10724 21.1192 8.28192 21.8241L9.35296 26.0877C9.35865 26.1169 9.37431 26.1431 9.39726 26.162C9.4202 26.1809 9.44901 26.1913 9.47873 26.1913C9.50846 26.1913 9.53726 26.1809 9.5602 26.162C9.58315 26.1431 9.59881 26.1169 9.6045 26.0877L10.6755 21.8241C10.8502 21.1192 11.2139 20.4754 11.7274 19.9619C12.2409 19.4484 12.8848 19.0847 13.5896 18.91L17.8532 17.839C17.8816 17.8325 17.9069 17.8167 17.925 17.794C17.9432 17.7713 17.9531 17.7431 17.9531 17.714C17.9531 17.6849 17.9432 17.6567 17.925 17.634C17.9069 17.6113 17.8816 17.5954 17.8532 17.589L13.5896 16.518C12.8844 16.3437 12.2401 15.9802 11.7263 15.4666C11.2125 14.9531 10.8486 14.309 10.674 13.6039L9.60292 9.34188C9.59723 9.3127 9.58157 9.28641 9.55862 9.26752C9.53568 9.24862 9.50688 9.23828 9.47715 9.23828C9.44742 9.23828 9.41862 9.24862 9.39568 9.26752C9.37273 9.28641 9.35707 9.3127 9.35138 9.34188L8.28192 13.6039C8.1074 14.3088 7.74377 14.9528 7.23024 15.4663C6.71672 15.9798 6.07277 16.3434 5.36782 16.518L1.10741 17.5858C1.07906 17.5923 1.05374 17.6081 1.03559 17.6308C1.01745 17.6536 1.00757 17.6818 1.00757 17.7108C1.00757 17.7399 1.01745 17.7681 1.03559 17.7908C1.05374 17.8135 1.07906 17.8294 1.10741 17.8358L5.36782 18.91Z" fill="#FCA61E" />
                                        <path d="M28.7012 4.96762L28.0684 2.42055C28.0642 2.40383 28.0545 2.389 28.0409 2.37841C28.0273 2.36781 28.0105 2.36206 27.9933 2.36206C27.976 2.36206 27.9593 2.36781 27.9457 2.37841C27.9321 2.389 27.9224 2.40383 27.9181 2.42055L27.2853 4.96762C27.1808 5.38845 26.9635 5.77284 26.6569 6.07945C26.3503 6.38607 25.9659 6.60332 25.5451 6.70785L22.998 7.34066C22.9809 7.34421 22.9656 7.35354 22.9545 7.36708C22.9435 7.38063 22.9375 7.39756 22.9375 7.41502C22.9375 7.43248 22.9435 7.44941 22.9545 7.46295C22.9656 7.4765 22.9809 7.48583 22.998 7.48937L25.5451 8.12219C25.9659 8.22672 26.3503 8.44397 26.6569 8.75059C26.9635 9.0572 27.1808 9.44159 27.2853 9.86242L27.9181 12.4079C27.9208 12.426 27.9298 12.4425 27.9436 12.4544C27.9574 12.4663 27.975 12.4729 27.9933 12.4729C28.0115 12.4729 28.0292 12.4663 28.043 12.4544C28.0568 12.4425 28.0658 12.426 28.0684 12.4079L28.7012 9.86242C28.8056 9.44151 29.0228 9.05704 29.3295 8.7504C29.6361 8.44376 30.0206 8.22656 30.4415 8.12219L32.9885 7.48937C33.0056 7.48583 33.021 7.4765 33.032 7.46295C33.043 7.44941 33.0491 7.43248 33.0491 7.41502C33.0491 7.39756 33.043 7.38063 33.032 7.36708C33.021 7.35354 33.0056 7.34421 32.9885 7.34066L30.4415 6.70785C30.0205 6.60364 29.6359 6.38649 29.3293 6.07983C29.0226 5.77316 28.8055 5.3886 28.7012 4.96762Z" fill="#FCA61E" />
                                        <path d="M54.9914 57.2395C55.333 56.9359 55.5399 56.5091 55.5668 56.0529C55.5936 55.5968 55.4382 55.1486 55.1346 54.8071C54.8311 54.4655 54.4042 54.2586 53.9481 54.2317C53.4919 54.2049 53.0438 54.3603 52.7022 54.6639C50.9383 56.2317 49.1237 57.7489 47.3107 59.1759C41.9808 63.3635 36.5924 66.8408 31.2942 69.5129C30.8862 69.7187 30.5766 70.0781 30.4336 70.5122C30.2906 70.9462 30.3259 71.4193 30.5317 71.8274C30.7375 72.2354 31.0969 72.545 31.531 72.688C31.965 72.831 32.4381 72.7957 32.8462 72.5899C38.3501 69.815 43.933 66.2127 49.4417 61.8843C51.3085 60.4162 53.1769 58.8531 54.9914 57.2395Z" fill="#FCA61E" />
                                        <path d="M56.2333 5.81237C46.6288 9.15995 35.8963 15.8456 26.0086 24.6306C16.1209 33.4156 8.22657 43.2954 3.77632 52.4396C-0.903331 62.0552 -1.24347 69.8656 2.81602 74.4298C5.11946 77.0259 8.59993 78.3358 13.0549 78.3358C15.178 78.3358 17.5242 78.0368 20.0697 77.4373C20.2899 77.3853 20.4977 77.2905 20.6813 77.1582C20.8649 77.026 21.0206 76.8589 21.1396 76.6664C21.2586 76.474 21.3385 76.26 21.3748 76.0366C21.4111 75.8133 21.403 75.585 21.3511 75.3648C21.2992 75.1446 21.2044 74.9367 21.0721 74.7532C20.9398 74.5696 20.7727 74.4138 20.5803 74.2948C20.3878 74.1759 20.1738 74.0959 19.9505 74.0596C19.7272 74.0233 19.4989 74.0314 19.2786 74.0833C12.7923 75.6148 7.86429 74.9234 5.39157 72.1406C2.36515 68.7345 2.9062 62.1042 6.87552 53.9473C11.1328 45.1986 18.7408 35.7017 28.2994 27.2109C37.858 18.7202 48.1792 12.2686 57.3676 9.06819C65.9343 6.08289 72.5836 6.32336 75.6116 9.72789C79.7249 14.3522 77.1035 24.9154 68.9402 36.6509C68.6792 37.026 68.5779 37.4894 68.6586 37.9392C68.7393 38.389 68.9954 38.7883 69.3705 39.0493C69.7456 39.3102 70.209 39.4115 70.6588 39.3308C71.1086 39.2501 71.5079 38.9941 71.7689 38.6189C81.1582 25.1321 83.5518 13.4726 78.1856 7.4387C74.1277 2.87295 66.3314 2.29393 56.2333 5.81237Z" fill="#FCA61E" />
                                        <path d="M45.0879 46.1053C40.7974 49.9195 36.3377 53.2814 32.188 55.83C32.0221 55.9261 31.8771 56.0545 31.7616 56.2075C31.6461 56.3606 31.5624 56.5352 31.5155 56.7211C31.4685 56.907 31.4593 57.1004 31.4882 57.2899C31.5172 57.4794 31.5838 57.6612 31.6841 57.8246C31.7845 57.988 31.9165 58.1296 32.0724 58.2412C32.2283 58.3527 32.405 58.4319 32.592 58.4742C32.7791 58.5163 32.9727 58.5207 33.1614 58.4869C33.3501 58.4531 33.5302 58.3819 33.6909 58.2774C37.9814 55.6418 42.5819 52.1755 46.9958 48.2521C58.7709 37.7869 68.4576 24.6798 64.1877 19.8736C60.5048 15.7318 49.7406 21.337 40.8971 27.9641C40.7399 28.0747 40.6064 28.2158 40.5047 28.3789C40.403 28.542 40.335 28.7238 40.3049 28.9137C40.2747 29.1035 40.283 29.2975 40.3292 29.4841C40.3753 29.6707 40.4585 29.8461 40.5737 30C40.689 30.1539 40.8339 30.2831 40.9999 30.3799C41.166 30.4767 41.3498 30.5393 41.5405 30.5638C41.7311 30.5883 41.9248 30.5743 42.1099 30.5226C42.295 30.4709 42.4679 30.3825 42.6183 30.2628C53.6577 21.9904 60.7357 20.3102 62.0409 21.7815C63.9235 23.8888 58.2504 34.4125 45.0879 46.1053Z" fill="#FCA61E" />
                                        <path d="M24.4519 45.4723C24.1527 45.2365 23.7722 45.1292 23.3939 45.174C23.0156 45.2188 22.6707 45.412 22.4348 45.7111C18.9053 50.1883 13.4821 58.2598 16.8028 62.0061C17.6555 62.9648 18.899 63.4425 20.5237 63.4425C22.1237 63.4425 24.0891 62.9774 26.4199 62.0472C26.5982 61.9795 26.7613 61.8769 26.8995 61.7455C27.0378 61.6141 27.1484 61.4565 27.2251 61.2818C27.3018 61.1072 27.3429 60.9191 27.3461 60.7283C27.3493 60.5376 27.3145 60.3482 27.2437 60.1711C27.1729 59.994 27.0675 59.8328 26.9338 59.6968C26.8 59.5609 26.6405 59.4529 26.4645 59.3793C26.2886 59.3056 26.0998 59.2677 25.909 59.2679C25.7183 59.268 25.5295 59.306 25.3537 59.3799C21.5236 60.9113 19.5334 60.7547 18.948 60.0966C18.0557 59.092 18.8483 54.9075 24.6892 47.4941C24.807 47.346 24.8943 47.1761 24.9461 46.9941C24.9979 46.8121 25.0132 46.6217 24.9912 46.4338C24.9691 46.2459 24.9101 46.0642 24.8176 45.8992C24.725 45.7342 24.6007 45.5891 24.4519 45.4723Z" fill="#FCA61E" />
                                        <path d="M62.7544 52.4822C66.003 52.4822 68.6364 49.8488 68.6364 46.6003C68.6364 43.3517 66.003 40.7183 62.7544 40.7183C59.5059 40.7183 56.8724 43.3517 56.8724 46.6003C56.8724 49.8488 59.5059 52.4822 62.7544 52.4822Z" fill="#FCA61E" />
                                        <path d="M32.0694 32.2434C30.9059 32.2431 29.7684 32.5878 28.8009 33.234C27.8334 33.8802 27.0792 34.7989 26.6338 35.8737C26.1884 36.9486 26.0718 38.1314 26.2987 39.2725C26.5256 40.4137 27.0859 41.4619 27.9086 42.2846C28.7313 43.1073 29.7795 43.6675 30.9207 43.8944C32.0618 44.1214 33.2446 44.0047 34.3195 43.5593C35.3943 43.114 36.3129 42.3598 36.9591 41.3923C37.6053 40.4247 37.9501 39.2873 37.9498 38.1238C37.9498 36.5642 37.3302 35.0685 36.2274 33.9657C35.1247 32.8629 33.629 32.2434 32.0694 32.2434Z" fill="#FCA61E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_319_27">
                                            <rect width="81" height="81" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p className="font-lato text-[#ACACAC] text-base lg:text-xl font-lato text-justify">
                            I`am is a proficient full-stack developer skilled in both front-end and back-end technologies, including React and Node.js. With a focus on creating seamless, user-friendly applications, I blends technical expertise with a passion for innovative problem-solving.
                        </p>

                        <button className="bg-[#5D5CDC] rounded-full font-semibold text-white px-8 py-3 text-sm hover:scale-[1.1] transition-all duration-300 ease-in-out">Download CV</button>
                        <div className="absolute lg:-bottom-20 lg:right-32 bottom-[50%] right-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-32 lg:h-32 w-14 h-14" width="106" height="106" viewBox="0 0 106 106" fill="none">
                                <g clip-path="url(#clip0_319_58)">
                                    <path d="M76.3784 8.33597C67.6276 1.22486 56.1895 -1.5121 44.9952 0.826941C31.0059 3.75002 19.5926 15.2127 16.5948 29.3507C14.0672 41.2719 17.182 53.2404 25.1407 62.1873C29.0879 66.6248 31.2617 72.1759 31.2617 77.8341V84.045C31.2617 88.0935 33.8581 91.5453 37.4727 92.8273V96.6739C37.4727 101.811 41.652 105.99 46.7891 105.99H59.211C64.348 105.99 68.5274 101.811 68.5274 96.6739V92.8273C72.1419 91.5453 74.7383 88.0935 74.7383 84.045V77.8341C74.7383 72.2484 76.9767 66.6186 81.0407 61.9819C86.9896 55.1952 90.2656 46.4875 90.2656 37.463C90.2656 26.1245 85.2039 15.5079 76.3784 8.33597ZM62.3164 96.6739C62.3164 98.3863 60.9233 99.7794 59.211 99.7794H46.7891C45.0767 99.7794 43.6836 98.3863 43.6836 96.6739V93.3614H62.3164V96.6739ZM68.5274 84.045C68.5274 85.7574 67.1343 87.1505 65.4219 87.1505H40.5781C38.8658 87.1505 37.4727 85.7574 37.4727 84.045V80.9396H68.5274V84.045ZM53 52.7164C55.097 52.7164 57.1936 52.381 59.211 51.7154V74.7288H46.7891V51.7154C48.8064 52.381 50.9028 52.7164 53 52.7164ZM47.8087 45.4732L53 35.0906L58.1913 45.473C54.8635 46.8423 51.1365 46.8423 47.8087 45.4732ZM76.3701 57.8881C72.0521 62.8144 69.3903 68.6988 68.7044 74.7286H65.4219V46.8011C65.4219 46.797 65.4219 46.7931 65.4219 46.7889C65.4219 46.3651 65.3302 45.8983 65.1236 45.4598C65.1128 45.437 65.1051 45.4132 65.094 45.3908L55.7775 26.758C55.2515 25.7059 54.1762 25.0413 52.9998 25.0413C51.8235 25.0413 50.7483 25.7059 50.2221 26.758L40.9057 45.3908C40.7001 45.8028 40.5779 46.3038 40.5779 46.7866C40.5779 46.7922 40.5779 46.7976 40.5779 46.8032V74.7288H37.3033C36.6375 68.6572 34.0252 62.8305 29.7813 58.0595C23.1486 50.6031 20.5568 40.6088 22.6708 30.639C25.1659 18.8714 34.6479 9.33406 46.2655 6.90662C55.6208 4.95183 65.1687 7.2298 72.4614 13.1561C79.8292 19.1434 84.0547 28.0029 84.0547 37.463C84.0547 44.9807 81.3256 52.2345 76.3701 57.8881Z" fill="#5D5CDC" />
                                    <path d="M9.31641 37.4629H3.10547C1.39042 37.4629 0 38.8533 0 40.5684C0 42.2834 1.39042 43.6738 3.10547 43.6738H9.31641C11.0315 43.6738 12.4219 42.2834 12.4219 40.5684C12.4219 38.8533 11.0315 37.4629 9.31641 37.4629Z" fill="#5D5CDC" />
                                    <path d="M10.6027 21.9356L6.21095 17.5439C4.99816 16.3311 3.03199 16.3311 1.8192 17.5439C0.60641 18.7567 0.60641 20.7228 1.8192 21.9356L6.21095 26.3274C7.42395 27.5404 9.39012 27.54 10.6027 26.3274C11.8155 25.1146 11.8155 23.1484 10.6027 21.9356Z" fill="#5D5CDC" />
                                    <path d="M10.6027 54.8095C9.38988 53.5967 7.42371 53.5967 6.21092 54.8095L1.81917 59.2013C0.606583 60.414 0.606583 62.3802 1.81917 63.593C3.03175 64.8056 4.99792 64.8058 6.21092 63.593L10.6027 59.2013C11.8153 57.9885 11.8153 56.0223 10.6027 54.8095Z" fill="#5D5CDC" />
                                    <path d="M102.895 37.4629H96.6836C94.9685 37.4629 93.5781 38.8533 93.5781 40.5684C93.5781 42.2834 94.9685 43.6738 96.6836 43.6738H102.895C104.61 43.6738 106 42.2834 106 40.5684C106 38.8533 104.61 37.4629 102.895 37.4629Z" fill="#5D5CDC" />
                                    <path d="M104.181 17.5439C102.968 16.3311 101.002 16.3311 99.7891 17.5439L95.3973 21.9356C94.1845 23.1484 94.1845 25.1146 95.3973 26.3274C96.6099 27.5402 98.5763 27.5402 99.7891 26.3274L104.181 21.9356C105.394 20.7228 105.394 18.7567 104.181 17.5439Z" fill="#5D5CDC" />
                                    <path d="M104.181 59.2013L99.7891 54.8095C98.5767 53.5967 96.6103 53.5967 95.3973 54.8095C94.1843 56.0223 94.1846 57.9885 95.3973 59.2013L99.7891 63.593C101.001 64.8058 102.968 64.8058 104.181 63.593C105.394 62.3802 105.394 60.414 104.181 59.2013Z" fill="#5D5CDC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_319_58">
                                        <rect width="106" height="106" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto w-full lg:py-20 mt-20" id="portfolio">
                <div className="text-[#2C2C2C] space-y-2">
                    <h2 className="font-lilita text-3xl lg:text-[3.375rem] lg:leading-[3.75rem] font-extrabold">Explore My Latest Works</h2>
                </div>
                <div className="flex gap-5 flex-col lg:flex-row pt-10 text-[#2C2C2C] ">
                    <div className="w-full lg:w-1/2">
                        <div className="w-full px-5 bg-[#D9D9D9] rounded-xl bg-opacity-50">
                            <img src="/images/portfolio/superapp.png" alt="1" className="w-full h-full hover:scale-[1.05] transition-all duration-300 ease-in-out hover:rounded-xl" />
                        </div>
                        <div className="flex justify-between gap-5 items-center">
                            <div className="py-5 space-y-3">
                                <p className="t2xt-xl lg:text-2xl font-lilita font-extrabold">A-Club Academy Superapp Web Version</p>
                                <p className="text-[#ACACAC] text-base lg:text-xl font-lato">One stop solution for all A-CLUB Academy members, please enjor our education adan facility to maximize your profit.</p>
                            </div>
                            <button className="border px-5 py-2 rounded-full hover:scale-[1.1] transition-all duration-300 ease-in-out ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="w-full px-5 bg-[#D9D9D9] rounded-xl bg-opacity-50">
                            <div className="object-center">
                                <img src="/images/portfolio/finance.png" alt="1" className="w-full h-full hover:scale-[1.05] transition-all duration-300 ease-in-out hover:rounded-xl" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 items-center">
                            <div className="py-5 space-y-3">
                                <p className="t2xt-xl lg:text-2xl font-lilita font-extrabold">Portal Admin Phoenix App - 14Day Pilot</p>
                                <p className="text-[#ACACAC] text-base lg:text-xl font-lato">
                                    Manage schedule and finance for all training programs, and also manage all the participants and trainers.
                                </p>
                            </div>
                            <button className="border px-5 py-2 rounded-full hover:scale-[1.1] transition-all duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 flex-col lg:flex-row pt-5 text-[#2C2C2C] ">
                    <div className="w-full lg:w-full">
                        <div className="w-full px-5 bg-[#D9D9D9] rounded-xl bg-opacity-50">
                            <img src="/images/portfolio/14daypilot.png" alt="1" className="w-full h-full hover:scale-[1.05] transition-all duration-300 ease-in-out hover:rounded-xl" />
                        </div>
                        <div className="flex justify-between gap-5 items-center">
                            <div className="py-5 space-y-3">
                                <p className="t2xt-xl lg:text-2xl font-lilita font-extrabold">A-Club Academy Superapp Web Version</p>
                                <p className="text-[#ACACAC] text-base lg:text-xl font-lato">One stop solution for all A-CLUB Academy members, please enjor our education adan facility to maximize your profit.</p>
                            </div>
                            <button className="border px-5 py-2 rounded-full hover:scale-[1.1] transition-all duration-300 ease-in-out ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-10 flex justify-center">
                    <button className="bg-[#5D5CDC] rounded-full font-semibold text-white px-8 py-3 text-sm hover:scale-[1.1] transition-all duration-300 ease-in-out">Let’s See More</button>
                </div>
            </div>

            <div className="xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto w-full" id="work">
                <div className="w-full text-center text-[#2C2C2C] space-y-3">
                    <h2 className="font-lilita text-3xl lg:text-[3.375rem] lg:leading-[3.75rem] font-extrabold">My Work Experience</h2>
                    <p className="text-base lg:text-xl">
                        Exploring My Programming Journey: A Comprehensive Overview of My Professional <br />Growth and Experience in Software Development.</p>
                </div>
                <div className="lg:space-y-4 py-10">
                    <div className="flex lg:items-start flex-col lg:flex-row items-end justify-between group font-lato py-5 px-5 lg:px-10 hover:bg-lavender-400 rounded-xl text-black transition-all duration-300 ease-in-out">
                        <div className="flex gap-10 text-[#2C2C2C] group-hover:text-white w-full">
                            <p className="text-5xl">01</p>
                            <div className="space-y-2">
                                <p className="text-2xl lg:text-3xl font-semibold font-lilita">Astronacci International</p>
                                <li className="text-base lg:text-xl">Apr 2022 - Present</li>
                            </div>
                        </div>
                        <div className="group-hover:text-white group-hover:rotate-0 rotate-45 text-black transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="w-10 lg:w-auto" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5625 8.4375H43.875C44.3226 8.4375 44.7518 8.61529 45.0683 8.93176C45.3847 9.24822 45.5625 9.67745 45.5625 10.125V35.4375C45.5625 35.8851 45.3847 36.3143 45.0683 36.6307C44.7518 36.9472 44.3226 37.125 43.875 37.125C43.4275 37.125 42.9982 36.9472 42.6818 36.6307C42.3653 36.3143 42.1875 35.8851 42.1875 35.4375V14.1975L11.3175 45.0675C10.9976 45.3656 10.5745 45.5279 10.1373 45.5201C9.70017 45.5124 9.28305 45.3353 8.97387 45.0261C8.66469 44.717 8.48759 44.2999 8.47988 43.8627C8.47216 43.4255 8.63444 43.0024 8.93252 42.6825L39.8025 11.8125H18.5625C18.115 11.8125 17.6857 11.6347 17.3693 11.3182C17.0528 11.0018 16.875 10.5726 16.875 10.125C16.875 9.67745 17.0528 9.24822 17.3693 8.93176C17.6857 8.61529 18.115 8.4375 18.5625 8.4375Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex lg:items-start flex-col lg:flex-row items-end justify-between group font-lato py-5 px-5 lg:px-10 hover:bg-lavender-400 rounded-xl text-black transition-all duration-300 ease-in-out">
                        <div className="flex gap-10 text-[#2C2C2C] group-hover:text-white w-full">
                            <p className="text-5xl">02</p>
                            <div className="space-y-2">
                                <p className="text-2xl lg:text-3xl font-semibold font-lilita">Freelancer</p>
                                <li className="text-base lg:text-xl">Jan 2020 - Present</li>
                            </div>
                        </div>
                        <div className="group-hover:text-white group-hover:rotate-0 rotate-45 text-black transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="w-10 lg:w-auto" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5625 8.4375H43.875C44.3226 8.4375 44.7518 8.61529 45.0683 8.93176C45.3847 9.24822 45.5625 9.67745 45.5625 10.125V35.4375C45.5625 35.8851 45.3847 36.3143 45.0683 36.6307C44.7518 36.9472 44.3226 37.125 43.875 37.125C43.4275 37.125 42.9982 36.9472 42.6818 36.6307C42.3653 36.3143 42.1875 35.8851 42.1875 35.4375V14.1975L11.3175 45.0675C10.9976 45.3656 10.5745 45.5279 10.1373 45.5201C9.70017 45.5124 9.28305 45.3353 8.97387 45.0261C8.66469 44.717 8.48759 44.2999 8.47988 43.8627C8.47216 43.4255 8.63444 43.0024 8.93252 42.6825L39.8025 11.8125H18.5625C18.115 11.8125 17.6857 11.6347 17.3693 11.3182C17.0528 11.0018 16.875 10.5726 16.875 10.125C16.875 9.67745 17.0528 9.24822 17.3693 8.93176C17.6857 8.61529 18.115 8.4375 18.5625 8.4375Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex lg:items-start flex-col lg:flex-row items-end justify-between group font-lato py-5 px-5 lg:px-10 hover:bg-lavender-400 rounded-xl text-black transition-all duration-300 ease-in-out">
                        <div className="flex gap-10 text-[#2C2C2C] group-hover:text-white w-full">
                            <p className="text-5xl">03</p>
                            <div className="space-y-2">
                                <p className="text-2xl lg:text-3xl font-semibold font-lilita">BIGBOX</p>
                                <li className="text-base lg:text-xl">Sep 2021 - Apr 2022</li>
                            </div>
                        </div>
                        <div className="group-hover:text-white group-hover:rotate-0 rotate-45 text-black transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="w-10 lg:w-auto" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5625 8.4375H43.875C44.3226 8.4375 44.7518 8.61529 45.0683 8.93176C45.3847 9.24822 45.5625 9.67745 45.5625 10.125V35.4375C45.5625 35.8851 45.3847 36.3143 45.0683 36.6307C44.7518 36.9472 44.3226 37.125 43.875 37.125C43.4275 37.125 42.9982 36.9472 42.6818 36.6307C42.3653 36.3143 42.1875 35.8851 42.1875 35.4375V14.1975L11.3175 45.0675C10.9976 45.3656 10.5745 45.5279 10.1373 45.5201C9.70017 45.5124 9.28305 45.3353 8.97387 45.0261C8.66469 44.717 8.48759 44.2999 8.47988 43.8627C8.47216 43.4255 8.63444 43.0024 8.93252 42.6825L39.8025 11.8125H18.5625C18.115 11.8125 17.6857 11.6347 17.3693 11.3182C17.0528 11.0018 16.875 10.5726 16.875 10.125C16.875 9.67745 17.0528 9.24822 17.3693 8.93176C17.6857 8.61529 18.115 8.4375 18.5625 8.4375Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex lg:items-start flex-col lg:flex-row items-end justify-between group font-lato py-5 px-5 lg:px-10 hover:bg-lavender-400 rounded-xl text-black transition-all duration-300 ease-in-out">
                        <div className="flex gap-10 text-[#2C2C2C] group-hover:text-white w-full">
                            <p className="text-5xl">04</p>
                            <div className="space-y-2">
                                <p className="text-2xl lg:text-3xl font-semibold font-lilita">PT PLN (Persero)</p>
                                <li className="text-base lg:text-xl">Des 2020 - Jan 2021</li>
                            </div>
                        </div>
                        <div className="group-hover:text-white group-hover:rotate-0 rotate-45 text-black transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="w-10 lg:w-auto" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5625 8.4375H43.875C44.3226 8.4375 44.7518 8.61529 45.0683 8.93176C45.3847 9.24822 45.5625 9.67745 45.5625 10.125V35.4375C45.5625 35.8851 45.3847 36.3143 45.0683 36.6307C44.7518 36.9472 44.3226 37.125 43.875 37.125C43.4275 37.125 42.9982 36.9472 42.6818 36.6307C42.3653 36.3143 42.1875 35.8851 42.1875 35.4375V14.1975L11.3175 45.0675C10.9976 45.3656 10.5745 45.5279 10.1373 45.5201C9.70017 45.5124 9.28305 45.3353 8.97387 45.0261C8.66469 44.717 8.48759 44.2999 8.47988 43.8627C8.47216 43.4255 8.63444 43.0024 8.93252 42.6825L39.8025 11.8125H18.5625C18.115 11.8125 17.6857 11.6347 17.3693 11.3182C17.0528 11.0018 16.875 10.5726 16.875 10.125C16.875 9.67745 17.0528 9.24822 17.3693 8.93176C17.6857 8.61529 18.115 8.4375 18.5625 8.4375Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex lg:items-start flex-col lg:flex-row items-end justify-between group font-lato py-5 px-5 lg:px-10 hover:bg-lavender-400 rounded-xl text-black transition-all duration-300 ease-in-out">
                        <div className="flex gap-10 text-[#2C2C2C] group-hover:text-white w-full">
                            <p className="text-5xl">05</p>
                            <div className="space-y-2">
                                <p className="text-2xl lg:text-3xl font-semibold font-lilita">KPU of Bandar Lampung</p>
                                <li className="text-base lg:text-xl">Oct 2020 - Dec 2020</li>
                            </div>
                        </div>
                        <div className="group-hover:text-white group-hover:rotate-0 rotate-45 text-black transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="w-10 lg:w-auto" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5625 8.4375H43.875C44.3226 8.4375 44.7518 8.61529 45.0683 8.93176C45.3847 9.24822 45.5625 9.67745 45.5625 10.125V35.4375C45.5625 35.8851 45.3847 36.3143 45.0683 36.6307C44.7518 36.9472 44.3226 37.125 43.875 37.125C43.4275 37.125 42.9982 36.9472 42.6818 36.6307C42.3653 36.3143 42.1875 35.8851 42.1875 35.4375V14.1975L11.3175 45.0675C10.9976 45.3656 10.5745 45.5279 10.1373 45.5201C9.70017 45.5124 9.28305 45.3353 8.97387 45.0261C8.66469 44.717 8.48759 44.2999 8.47988 43.8627C8.47216 43.4255 8.63444 43.0024 8.93252 42.6825L39.8025 11.8125H18.5625C18.115 11.8125 17.6857 11.6347 17.3693 11.3182C17.0528 11.0018 16.875 10.5726 16.875 10.125C16.875 9.67745 17.0528 9.24822 17.3693 8.93176C17.6857 8.61529 18.115 8.4375 18.5625 8.4375Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex lg:items-start flex-col lg:flex-row items-end justify-between group font-lato py-5 px-5 lg:px-10 hover:bg-lavender-400 rounded-xl text-black transition-all duration-300 ease-in-out">
                        <div className="flex gap-10 text-[#2C2C2C] group-hover:text-white w-full">
                            <p className="text-5xl">06</p>
                            <div className="space-y-2">
                                <p className="text-2xl lg:text-3xl font-semibold font-lilita">Regional Government of Lampung Province</p>
                                <li className="text-base lg:text-xl">Mar 2019 - Apr 2019</li>
                            </div>
                        </div>
                        <div className="group-hover:text-white group-hover:rotate-0 rotate-45 text-black transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="w-10 lg:w-auto" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5625 8.4375H43.875C44.3226 8.4375 44.7518 8.61529 45.0683 8.93176C45.3847 9.24822 45.5625 9.67745 45.5625 10.125V35.4375C45.5625 35.8851 45.3847 36.3143 45.0683 36.6307C44.7518 36.9472 44.3226 37.125 43.875 37.125C43.4275 37.125 42.9982 36.9472 42.6818 36.6307C42.3653 36.3143 42.1875 35.8851 42.1875 35.4375V14.1975L11.3175 45.0675C10.9976 45.3656 10.5745 45.5279 10.1373 45.5201C9.70017 45.5124 9.28305 45.3353 8.97387 45.0261C8.66469 44.717 8.48759 44.2999 8.47988 43.8627C8.47216 43.4255 8.63444 43.0024 8.93252 42.6825L39.8025 11.8125H18.5625C18.115 11.8125 17.6857 11.6347 17.3693 11.3182C17.0528 11.0018 16.875 10.5726 16.875 10.125C16.875 9.67745 17.0528 9.24822 17.3693 8.93176C17.6857 8.61529 18.115 8.4375 18.5625 8.4375Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-lavender-400 w-full shadow py-10">
                <div className="flex items-center justify-between w-full xl:px-0 px-3 lg:px-5 max-w-[80rem] mx-auto">
                    <div className="flex flex-col justify-start items-start w-full">
                        <div className="flex justify-between py-3">
                            <div className="space-y-2">
                                <p className="font-lilita font-bold text-lg lg:text-xl">Contact</p>
                                <a href="wa.me/6285769149310" className="hover:underline">
                                    <p className="text-base lg:text-xl">+62 857-6914-9310</p>
                                </a>
                                <p className="text-base lg:text-xl">
                                    <a href="mailto:bustomi.xcvi@gmail.com" className="hover:underline">
                                        bustomi.xcvi@gmail.com
                                    </a>
                                </p>
                                <p className="text-base lg:text-xl">Jl. Kaliurang KM 5, Sleman, Yogyakarta</p>
                            </div>
                        </div>
                        <p className="border-t w-full pt-3">
                            Copy Right © 2024. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 