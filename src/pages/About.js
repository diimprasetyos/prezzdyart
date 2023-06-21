import Footer from "../components/Footer.js";
function About() {
	return (
		<>
			<header className="absolute w-full z-50 px-10">
				<div
					class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true">
					<div
						class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#CCF1FF] to-[#00A6E6] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}></div>
				</div>
				<div className="container mx-auto py-5">
					<div className="flex flex-stretch items-center">
						<div className="w-56 items-center flex">
							<a href="/">
								<img
									src="images/content/logo.png"
									alt="Prezzdy Art | For Your Design Solution"
								/>
							</a>
						</div>
						<div className="w-full"></div>
						<div className="w-auto">
							<ul
								className="fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center"
								id="menu">
								<li className="mx-3 py-6 md:py-0">
									<a
										href="/products"
										className="text-black md:text-black hover:underline">
										Products
									</a>
								</li>
								<li className="mx-3 py-6 md:py-0">
									<a
										href="/contact"
										className="text-black md:text-black hover:underline">
										Contact
									</a>
								</li>
								<li className="mx-3 py-6 md:py-0">
									<a
										href="/about"
										className="text-black md:text-black hover:underline">
										About
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			<div class="bg-white py-24 sm:py-32">
				<div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
					<div class="max-w-2xl">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Tentang Kami
						</h2>
						<p class="mt-6 text-lg leading-8 text-gray-600">
							Layanan Pemesanan Trophy, Medali, Vandel, Aksesoris, Cindera Mata,
							dan masih banyak lainnya. kami memberikan pelayanan terbaik dan
							menawarkan desain piala elegan dan mengikuti trend.
						</p>
						<div className="mt-10">
							<a
								href="/products"
								class="my-10 rounded-md bg-sky-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
								Explore Our Products
							</a>
						</div>
					</div>

					<ul
						role="list"
						class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
						<li>
							<div class="flex items-center gap-x-6">
								<img
									class="h-16 w-16 rounded-full"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2hKKTCQrlIYU6Pna2F_CI8ykPXRblR7-Dg&usqp=CAU"
									alt=""></img>
								<div>
									<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
										Bpk. Dimas Surya Prasetyo
									</h3>
									<p class="text-md font-semibold leading-6 text-sky-500">
										Founder / CEO
									</p>
									<p class="text-sm font-regular leading-6 text-gray-400">
										NIM : 2118042
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="flex items-center gap-x-6">
								<img
									class="h-16 w-16 rounded-full"
									src="https://i.insider.com/5ebf0f16aee6a826327d9111?width=1000"
									alt=""></img>
								<div>
									<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
										Bpk. Muhammad Ridho Putra Syalabi
									</h3>
									<p class="text-md font-semibold leading-6 text-sky-500">
										Co - Founder / CEO
									</p>
									<p class="text-sm font-regular leading-6 text-gray-400">
										NIM : 2118014
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-32">
				<Footer />
			</div>
		</>
	);
}

export default About;
