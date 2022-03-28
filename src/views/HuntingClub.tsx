import React from "react";
import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_box_icons_2 from "assets/image/svg/box-icons-2.svg";
import img_box_img_9 from "assets/image/temp/box-img-9.jpg";
import img_box_icon from "assets/image/svg/box-icon.svg";
import img_gallery_img_8 from "assets/image/temp/galery-img-8.jpg";


const HuntingClub: React.FunctionComponent<any> = () => {
    return (
        <>
            <section className="section-hunting">
			<div className="shell">

				<div className="section__logo">
					<img src={img_hero_logo} alt="" />
				</div>

				<div className="section__head">
					<h6>Hunting Club</h6>

					<img src={img_box_icons_2} alt="" />
				</div>

				<div className="box-primary">
					<div className="grid">
						<div className="grid__col grid__col--size-19">
							<div className="box__images">
								<div className="grid">
									<div className="grid__col grid__col--1of3 hidden-xs"></div>

									<div className="grid__col grid__col--1of3 hidden-xs"></div>

									<div className="grid__col grid__col--1of3">
										<div className="box__image">
											<img src={img_box_img_9} alt="" />
										</div>
									</div>

									<div className="grid__col grid__col--1of3 hidden-xs">
										<div className="box__image">
											<img src={img_box_img_9} alt="" />
										</div>
									</div>

									<div className="grid__col grid__col--1of3 hidden-xs">
										<div className="box__image">
											<img src={img_box_img_9} alt="" />
										</div>
									</div>

									<div className="grid__col grid__col--1of3 hidden-xs"></div>

									<div className="grid__col grid__col--1of3 hidden-xs"></div>

									<div className="grid__col grid__col--1of3 hidden-xs"></div>

									<div className="grid__col grid__col--1of3 hidden-xs">
										<div className="box__image">
											<img src={img_box_img_9} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="grid__col grid__col--size-20">
							<div className="box__content">
								<h2><span>welcome to the</span> Hunting Club</h2>
							</div>

							<p className="hidden visible-xs-inline-block">Find free mxsk around the globe</p>

							<div className="box__entry">
								<img src={img_box_icon} alt="" />

								<h4>Look out for the MXSK logo in your city. Withing 100ft of the logo is a unique QR code that lets you claim your very own MXSK for free.</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	

		<section className="section-services">
			<div className="shell">
				<div className="section__head">
					<div className="section__head-inner">
						<h2>The hunt <span>is</span> on</h2>
						
						<a href="#" className="btn btn--secondary">Claim your mxsk</a>
					</div>
				
					<ul>
						<li>
							<p>Claimed MXSK</p>
						</li>
						
						<li>
							<h2>12/100</h2>
						</li>
					</ul>
				</div>
				
				<div className="services">
					<div className="services__section">
						<div className="grid">
							<div className="grid__col grid__col--size-21">
								<div className="services__head">
									<h2>montreal</h2>
								</div>
							</div>
					
							<div className="grid__col grid__col--size-22">
								<div className="slider-services js-slider-services">
									<div className="slider__clip">
										<div className="slider__slides">
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="services__section">
						<div className="grid">
							<div className="grid__col grid__col--size-21">
								<div className="services__head">
									<h2>paris</h2>
								</div>
							</div>
					
							<div className="grid__col grid__col--size-22">
								<div className="slider-services js-slider-services">
									<div className="slider__clip">
										<div className="slider__slides">
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
					
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
					
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
				
					<div className="services__section">
						<div className="grid">
							<div className="grid__col grid__col--size-21">
								<div className="services__head">
									<h2>new york city</h2>
								</div>
							</div>
										
							<div className="grid__col grid__col--size-22">
								<div className="slider-services js-slider-services">
									<div className="slider__clip">
										<div className="slider__slides">
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div className="services__section">
						<div className="grid">
							<div className="grid__col grid__col--size-21">
								<div className="services__head">
									<h2>berlin</h2>
								</div>
							</div>
										
							<div className="grid__col grid__col--size-22">
								<div className="slider-services js-slider-services">
									<div className="slider__clip">
										<div className="slider__slides">
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										
											<div className="slider__slide">
												<div className="service">
													<a href="#">
														<div className="service__image">
															<img src={img_gallery_img_8} alt="" />
														</div>
										
														<div className="service__overlay">
															<p>claimed</p>
														</div>
													</a>			
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default HuntingClub;