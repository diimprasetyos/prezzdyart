function AsideMenu() {
	return (
		<section className="">
			<div className="border-t border-b border-gray-200 py-12 mt-16 px-4">
				<div className="flex justify-center mb-8">
					<img
						src="images/content/logo.png"
						alt="Luxspace | Fulfill your house with beautiful furniture"
					/>
				</div>
				<aside className="container mx-auto">
					<div className="flex flex-wrap -mx-4 justify-center">
						<div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
							<h5 className="text-lg font-semibold mb-2 relative">Overview</h5>
							<ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
								<li>
									<a href="/" className="hover:underline py-1 block">
										Shipping
									</a>
								</li>
								<li>
									<a href="/" className="hover:underline py-1 block">
										Refund
									</a>
								</li>
								<li>
									<a href="/" className="hover:underline py-1 block">
										Promotion
									</a>
								</li>
							</ul>
						</div>
						<div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
							<h5 className="text-lg font-semibold mb-2 relative">Company</h5>
							<ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
								<li>
									<a href="/" className="hover:underline py-1 block">
										About
									</a>
								</li>
								<li>
									<a href="/" className="hover:underline py-1 block">
										Career
									</a>
								</li>
								<li>
									<a href="/" className="hover:underline py-1 block">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
							<h5 className="text-lg font-semibold mb-2 relative">Explore</h5>
							<ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
								<li>
									<a href="/" className="hover:underline py-1 block">
										Terms & Conds
									</a>
								</li>
								<li>
									<a href="/" className="hover:underline py-1 block">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="/" className="hover:underline py-1 block">
										For Developer
									</a>
								</li>
							</ul>
						</div>
						<div className="px-4 w-full md:w-3/12 mb-4 md:mb-0">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.193601358429!2d112.69919357495556!3d-7.662323292354157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d9c0bf6c786b%3A0xdc50535c50739bc1!2sPrezzdy%20Art%20(GOLF%20TROPHY%20and%20ACCESSORIES)!5e0!3m2!1sid!2sid!4v1686626871608!5m2!1sid!2sid"
								width="100%"
								height="100%"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
export default AsideMenu;
