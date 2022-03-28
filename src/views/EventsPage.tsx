import React, { useState } from "react";
import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_box_img_3 from "assets/image/temp/box-img-3.jpg";
import img_box_icons_2 from "assets/image/svg/box-icons-2.svg";
import img_box_img_4 from "assets/image/temp/box-img-4.jpg";
import img_ico_star_white from "assets/image/svg/ico-star-white.svg";
import img_ico_star_gray from "assets/image/svg/ico-star-gray.svg"; 
import img_section_logo from "assets/image/svg/section-logo.svg";
import img_card_img_1 from "assets/image/temp/card-img-1.jpg";
import img_card_img_2 from "assets/image/temp/card-img-2.jpg";
import img_ico_list_1 from "assets/image/svg/ico-list-1.svg";
import img_ico_list_2 from "assets/image/svg/ico-list-2.svg";
import img_ico_list_3 from "assets/image/svg/ico-list-3.svg";
import img_ico_list_4 from "assets/image/svg/ico-list-4.svg";

const EventsPage: React.FunctionComponent<any> = () => {
	const [phoneSubmitted, setPhoneSubmitted] = useState(false);

	const phoneSubmit = async(e) =>{
		console.log("phoneSubmit");
		setPhoneSubmitted(true);
		e.preventDefault();
	}
    return (
        <>
            <section className="section-box section-box--secondary">
			<div className="shell">
				<div className="section__logo">
					<img src={img_hero_logo} alt="" />
				</div>

				<div className="section__head">
					<h6>Events</h6>
				</div>

				<div className="section__inner">
					<div className="box box--alt">
						<div className="grid">
							<div className="grid__col grid__col--size-6">
								<div className="box__image">
									<img src={img_box_img_3} alt="" />
								</div>
							</div>
					
							<div className="grid__col grid__col--size-7">
								<div className="box__content">
									<h2>
										SECRET venues <span>&</span> LIVE MUSIC EVENTS — IN CITIES 
										<strong>AROUND THE GLOBE</strong>
									</h2>
					
									<div className="box__entry">
										<div className="box__icon">
											<img src={img_box_icons_2} alt="" />
										</div>

										<h4>Find our logo in different cities for a never-seen before worldwide egg hunt. Around each logo, you’ll find a mxsk waiting to be claimed for free. That mxsk gives you access to a world of opportunities, exclusive events and acts as a membership card to a very private circle of NFT enthusiasts & entrepreneurs.</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="box box--reversed">
						<div className="grid">
							<div className="grid__col grid__col--size-8">
								<div className="box__image">
									<img src={img_box_img_4} alt="" />
								</div>
							</div>
					
							<div className="grid__col grid__col--size-9">
								<div className="box__content">
									<div className="box__entry">
										<h4>Find our logo in different cities for a never-seen before worldwide egg hunt. Around each logo, you’ll find a mxsk waiting to be claimed for free. That mxsk gives you access to a world of opportunities, exclusive events and acts as a membership card to a very private circle of NFT enthusiasts & entrepreneurs.</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--performances">
			<div className="shell">
				<div className="section__inner">
					<div className="section__head">
						<h4>Performances by</h4>
					</div>

					<ul className="list-performances">
						<li>
							<img src={img_ico_star_white} alt="" />
							
							Smashing Malo
						</li>
						
						<li>
							<span>
								Berni Killa Bong
								<img src={img_ico_star_gray} alt=""/>
							</span>
						</li>
						
						<li>
							<img src={img_ico_star_white} alt="" />
							L. Pegorilla
						</li>
						
						<li>
							<span>
								3d WHIZZ vignola

								<img src={img_ico_star_gray} alt="" />
							</span>
						</li>

						<li>
							<img src={img_ico_star_white} alt="" />

							The Devs from outerspace
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section className="section section--spacing-2">
			<div className="shell">
				<div className="section__inner">
					<div className="grid">
						<div className="grid__col grid__col--size-10">
							<div className="section__head">
								<h2><span>next</span> Events</h2>
							</div>
						</div>
					
						<div className="grid__col grid__col--size-11">
							<ul className="list-specs list-specs--secondary">
								<li>
									<p>Sidney</p>
					
									<h6>22 Oct 2021</h6>
								</li>

								<li>
									<p>NYC</p>

									<h6>22 Feb 2021</h6>
								</li>

								<li>
									<p>Marrakesh</p>

									<h6>26 Feb 2021</h6>
								</li>

								<li>
									<p>Rio</p>

									<h6>31 Mar 2021</h6>
								</li>

								<li>
									<p>Tokyo</p>

									<h6>31 Apr 2021</h6>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="section__content">
					<p>Find our logo in different cities for a never-seen before worldwide egg hunt. Around each logo, you’ll find a mxsk waiting to be claimed for free. That mxsk gives you access to a world of opportunities, exclusive events and acts as a membership card to a very private circle of NFT enthusiasts & entrepreneurs.</p>
				</div>
			</div>
		</section>

		<section className="section-primary section-primary--spacing-1">
			<div className="shell">
				<div className="section__head">
					<a href="#" className="section__logo">
						<img src={img_section_logo} alt="" />
					</a>

					<ul>
						<li><span>MXSK</span></li>
						
						<li><p>member’s club</p></li>
					</ul>
				</div>

				<div className="card">
					<div className="grid">
						<div className="grid__col grid__col--size-1">
							<div className="card__image">
								<img src={img_card_img_1} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-2">
							<div className="card__content">
								<div className="card__entry">
									<p>As an added bonus, we’re scattering mxsks around the world. We’re releasing more than 200 mxsks in the wild, when you see our logo know there’s a voucher code with an encrypted code within 200 feet that gives you a mxsk…for free. We call it, the founder’s egg hunt and yes, it’s incredible.</p>
								</div>

								<img src={img_card_img_2} alt="" />

								<ul>
									<li>
										<img src={img_ico_list_1} alt="" />

										5,000 provably-rare mxsks.
									</li>
									
									<li>
										<img src={img_ico_list_2} alt="" />
										
										Physical Mxsks you can wear with proven ownership
									</li>
									
									<li>
										<img src={img_ico_list_3} alt="" />
										
										Access to exclusive events around the world
									</li>
									
									<li>
										<img src={img_ico_list_4} alt="" />
										
										Founder’s Egg Hunt to own a mxsk for free.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="form">
					<form action="#" method="post"  onSubmit={phoneSubmit}>
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
		</section>
        </>
    );
}

export default EventsPage;