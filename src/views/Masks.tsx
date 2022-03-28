import React, {useState} from "react";
import {Row, Col} from 'react-bootstrap';
import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_box_img_1 from "assets/image/temp/box-img-1.jpg";
import img_ico_prev from "assets/image/svg/ico-prev.svg";
import img_ico_next from "assets/image/svg/ico-next.svg";
import img_gallery_img_1 from "assets/image/temp/galery-img-1.jpg";
import img_gallery_img_2 from "assets/image/temp/galery-img-2.jpg";
import img_gallery_img_3 from "assets/image/temp/galery-img-3.jpg";
import img_gallery_img_4 from "assets/image/temp/galery-img-4.jpg";
import img_gallery_img_5 from "assets/image/temp/galery-img-5.jpg";
import img_gallery_img_6 from "assets/image/temp/galery-img-6.jpg";
import img_gallery_img_7 from "assets/image/temp/galery-img-7.jpg";
import img_gallery_img_8 from "assets/image/temp/galery-img-8.jpg";


const Masks: React.FunctionComponent<any> = () => {
	const [phoneSubmitted, setPhoneSubmitted] = useState(false);

	const phoneSubmit = async(e) =>{
		console.log("phoneSubmit");
		setPhoneSubmitted(true);
		e.preventDefault();
	}

    return (
        <>
            <div className="section-slider">
			<div className="shell">
				<div className="section__logo">
					<img src={img_hero_logo} alt="" />
				</div>

				<div className="section__head">
					<h6><span>the</span> Masks</h6>
				</div>

				<div className="slider js-slider">
					<div className="slider__clip">
						<div className="slider__slides">
							<div className="slider__slide">
								<div className="box-slider">
									<div className="grid">
										<div className="grid__col grid__col--size-4">
											<div className="box__image">
												<img src={img_box_img_1} alt="" />
											</div>
										</div>

										<div className="grid__col grid__col--size-5">
											<div className="box__content">
												<div className="box__top-bar">
													<div className="search">
														<form action="#" method="get">
															<label htmlFor="q" className="hidden">Search</label>
															
															<input type="search" name="q" id="q" defaultValue="" placeholder="#1023" className="search__field" />
															
															<button type="button" className="search__btn"></button>
														</form>
													</div>

													<div className="slider__actions">
														<a href="#" className="slider__prev js-prev">
															<img src={img_ico_prev} alt="" />
														</a>

														<a href="#" className="slider__next js-next">
															<img src={img_ico_next} alt="" />
														</a>
													</div>
													
												</div>
												
												<ul>
													<li>
														<span>Style</span>

														<p>Anthro</p>
													</li>
													
													<li>
														<span>Fibers</span>

														<p>2,211</p>
													</li>
													
													<li>
														<span>Seed</span>

														<p>19,111</p>
													</li>
													
													<li>
														<span>Intricacy</span>

														<p>70.7%</p>
													</li>

													<li>
														<span>Colors</span>

														<p>2</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="slider__slide">
								<div className="box-slider">
									<div className="grid">
										<div className="grid__col grid__col--size-4">
											<div className="box__image">
												<img src={img_box_img_1} alt="" />
											</div>
										</div>

										<div className="grid__col grid__col--size-5">
											<div className="box__content">
												<div className="box__top-bar">
													<div className="search">
														<form action="#" method="get">
															<label htmlFor="q-2" className="hidden">Search</label>
															
															<input type="search" name="q-2" id="q-2" defaultValue="" placeholder="#1023" className="search__field" />
															
															<button type="button" className="search__btn"></button>
														</form>
													</div>

													<div className="slider__actions">
														<a href="#" className="slider__prev js-prev">
															<img src={img_ico_prev} alt="" />
														</a>

														<a href="#" className="slider__next js-next">
															<img src={img_ico_next} alt="" />
														</a>
													</div>
												</div>
												
												<ul>
													<li>
														<span>Style</span>

														<p>Anthro</p>
													</li>
													
													<li>
														<span>Fibers</span>

														<p>2,211</p>
													</li>
													
													<li>
														<span>Seed</span>

														<p>19,111</p>
													</li>
													
													<li>
														<span>Intricacy</span>

														<p>70.7%</p>
													</li>

													<li>
														<span>Colors</span>

														<p>2</p>
													</li>
												</ul>
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


		<section className="section">
			<div className="shell">
				<div className="section__inner">
					<div className="form">
						<form action="#" method="post" onSubmit={phoneSubmit}>
							<div className="form__head">
								<h2>Be among <span>the first</span> to get access to mxsk</h2>
							</div>
							
							<div className="form__body">
								{phoneSubmitted?(
									<>
									<div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Phone Capture success" style={{display: 'block'}}><div>Thank you!</div></div>
									</>
								):(
								<div className="form__cols">
									<div className="form__col form__col--size-1">
										<label htmlFor="code" className="form__label">country Code</label>
					
										<div className="form__controls">
											<input type="text" name="code" id="code" placeholder="(US) +1" className="field field--secondary" required/>
										</div>
									</div>
					
									<div className="form__col form__col--size-2">
										<label htmlFor="phone" className="form__label">Mobile phone</label>
					
										<div className="form__controls">
											<input type="text" name="phone" id="phone" placeholder="Your mobile number" className="field" required />
										</div>
									</div>
					
									<div className="form__actions">
										<button type="submit" className="btn form__btn">Ok</button>
									</div>
								</div>
								)}
					
								<p>Join the whitelist today to receive your unique invitation to our stealth drop. We’ll send you a text 2 hours before we unpause the contract to give you priority to the open mint, helping you secure your very own Mxsk.</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
        <section className="section section--alt hidden-xs">
			<div className="shell">
				<div className="section__inner">
					<Row>
                        <Col>
                            <div className="sub-title"><span>golden</span> TICKET</div>
                            <div>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</div>
                        </Col>
                        <Col>
                            <div className="sub-title"><span>physical</span> TRUE</div>
                            <div>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</div>
                        </Col>
                        <Col>
                            <div className="sub-title"><span>founder</span> TRUE</div>
                            <div>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</div>
                        </Col>
                    </Row>
				</div>
			</div>
		</section>
		<section className="section section--alt hidden-xs">
			<div className="shell">
				<div className="section__inner">
					<div className="grid">
						<div className="grid__col grid__col--1of5">
							<div className="section__head">
								<h2>Specs</h2>
							</div>
						</div>
					
						<div className="grid__col grid__col--4of5">
							<ul className="list-specs">
								<li>
									<p>Price per token</p>
					
									<h4>2 ETH</h4>
								</li>
								
								<li>
									<p>Tokens remaining</p>
					
									<h4>456</h4>
								</li>
								
								<li>
									<p>Next price per token</p>
					
									<h4>2.2 ETH</h4>
								</li>
								
								<li>
									<p>Tokens until price decreases</p>
					
									<h4>121</h4>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section-galery hidden-xs">
			<div className="shell">
				<div className="section__head">
					<h2>Gallery</h2>
				</div>

				<div className="galery">
					<div className="grid grid--galery">
						<div className="grid__col grid__col--size-1">
							<div className="galery__image galery__image--aling-right">
								<img src={img_gallery_img_4} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-2">
							<div className="galery__image galery__image--aling-right">
								<img src={img_gallery_img_6} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-3">
							<div className="galery__image galery__image--aling-right">
								<img src={img_gallery_img_3} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-4">
							<div className="galery__image">
								<img src={img_gallery_img_5} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-5">
							<div className="galery__image">
								<img src={img_gallery_img_7} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-6">
							<div className="galery__image">
								<img src={img_gallery_img_6} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-5">
							<div className="galery__image">
								<img src={img_gallery_img_1} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-5">
							<div className="galery__image">
								<img src={img_gallery_img_2} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-7">
							<div className="galery__image galery__image--aling-right">
								<img src={img_gallery_img_3} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-8">
							<div className="galery__image galery__image--aling-right">
								<img src={img_gallery_img_8} alt="" />
							</div>
						</div>
					</div>
					
				</div>

				<div className="section__actions">
					<a href="#" className="btn btn--size-2">Load more</a>
				</div>
			</div>
		</section>
        </>
    );
}

export default Masks;