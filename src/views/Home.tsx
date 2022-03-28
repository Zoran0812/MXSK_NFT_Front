import React, { useState, useRef } from "react";

import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_hero_img_1 from "assets/image/temp/hero-img-1.jpg";
import img_ico_play_1 from "assets/image/svg/ico-play-1.svg";
import img_galery_img_1 from "assets/image/temp/galery-img-1.jpg";
import img_galery_img_2 from "assets/image/temp/galery-img-2.jpg";
import img_galery_img_3 from "assets/image/temp/galery-img-3.jpg";
import img_galery_img_4 from "assets/image/temp/galery-img-4.jpg";
import img_galery_img_5 from "assets/image/temp/galery-img-5.jpg";
import img_galery_img_6 from "assets/image/temp/galery-img-6.jpg";
import img_galery_img_7 from "assets/image/temp/galery-img-7.jpg";
import img_galery_img_8 from "assets/image/temp/galery-img-8.jpg";
import img_section_logo from "assets/image/svg/section-logo.svg";
import img_card_img_1 from "assets/image/temp/card-img-1.jpg";
import img_card_img_2 from "assets/image/temp/card-img-2.jpg";
import img_ico_list_1 from "assets/image/svg/ico-list-1.svg";
import img_ico_list_2 from "assets/image/svg/ico-list-2.svg";
import img_ico_list_3 from "assets/image/svg/ico-list-3.svg";
import img_ico_list_4 from "assets/image/svg/ico-list-4.svg";

const Home: React.FunctionComponent<any> = () => {
  const [buyDetailsShow, setBuyDetailsShow] = useState<boolean>(false);
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);

  const phoneSubmit = async(e) =>{
	  console.log("phoneSubmit");
	  setPhoneSubmitted(true);
	  e.preventDefault();
  }

  return (
    <>
    <div className="hero">
			<div className="shell">
				<div className="hero__content">
					<a href="#" className="hero__logo">
						<img src={img_hero_logo} alt="" />
					</a>

					<div className="hero__entry">
						<p>MXSK IS A <span>generative art project</span> celebrating nft enthusiasts and art lovers around the world.</p>
					</div>
				</div>

				<div className="hero__image">
					<img src={img_hero_img_1} alt="" />

					<a href="#" className="hero__play">
						<img src={img_ico_play_1} alt="" />
					</a>
				</div>
			</div>
		</div>

		<section className="section">
			<div className="shell">
				<div className="section__inner">
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
			</div>
		</section>

		<section className="section section--pb">
			<div className="shell">
				<div className="section__inner">
					<div className="section__head">
						<h2><span>the</span> MXSKS</h2>
					
						<div className="section__content">
							<h4>The MXSKs were created with a single goal in mind - Celebrate artists and NFT enthusiasts around the world through a multitude of private events taking place on every corner of the planet. MXSKs weren’t made by marketing experts or an agency, we’re regular art lovers, artists and collectors. We worked hard to create a movement that connects through real life events. </h4>
					
							<a href="#" className="btn btn--size-1 hidden-xs">Buy a MXSK on OpenSea (SOON)</a>
						</div>
					
					</div>
					
					<ul className="list-galery">
						<li>
							<img src={img_galery_img_1} alt="" />
						</li>
						
						<li>
							<img src={img_galery_img_2} alt="" />
						</li>
						
						<li>
							<img src={img_galery_img_3} alt="" />
						</li>
						
						<li>
							<img src={img_galery_img_4} alt="" />
						</li>
					</ul>

					<div className="section__actions hidden visible-xs-block">
						<a href="#" className="btn btn--size-1">Buy a MXSK on OpenSea (SOON)</a>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--secondary">
			<div className="shell">
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

								<h4>5 ETH</h4>
							</li>
							
							<li>
								<p>Tokens remaining</p>

								<h4>5000</h4>
							</li>
							
							<li>
								<p>Total Supply</p>

								<h4>5000</h4>
							</li>
							
							<li>
								<p>Wallet Limiter</p>

								<h4>On</h4>
							</li>
						</ul>
					</div>
				</div>


				<div className="section__content">
					<h4>Each MXSK is unique and programmatically generated from our very own 3D algorythm with over 500 possible traits including type, color, fiber density, height, texture, and more. Some may be rarer than others and all of them have the ability to be converted to a physical mxsk you can wear.</h4>

					<h4>MXSKs are stored on chain on the Ethereum blockchain and are hosted on IPFS. Having a MXSK in your wallet gives you access to secret ephemere events we’ll create around the world. </h4>
				</div>

				<ul className="list-galery">
					<li>
						<img src={img_galery_img_5} alt="" />
					</li>
					
					<li>
						<img src={img_galery_img_6} alt="" />
					</li>
					
					<li>
						<img src={img_galery_img_7} alt="" />
					</li>
					
					<li>
						<img src={img_galery_img_8} alt="" />
					</li>
				</ul>
			</div>
		</section>

		<section className="section-primary">
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
    // <Zoom top cascade>          
    // </Zoom>
  );
};
export default Home;
