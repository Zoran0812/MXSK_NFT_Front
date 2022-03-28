import React, { useState } from "react";

import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_hero_img_1 from "assets/image/temp/hero-img-1.jpg";
import img_ico_play_1 from "assets/image/svg/ico-play-1.svg";
import img_box_img_2 from "assets/image/temp/box-img-2.jpg";
import img_box_icons from "assets/image/svg/box-icons.svg";
import img_gallery_img_7 from "assets/image/temp/galery-img-7.jpg";
import img_article_img_1 from "assets/image/temp/article-img-1.jpg";


const About: React.FunctionComponent<any> = () => {

	const [phoneSubmitted, setPhoneSubmitted] = useState(false);

	const phoneSubmit = async(e) =>{
		console.log("phoneSubmit");
		setPhoneSubmitted(true);
		e.preventDefault();
	}

    return (
        <>
            <div className="hero hero--secondary">
			<div className="shell">
				<div className="hero__content">
					<a href="#" className="hero__logo">
						<img src={img_hero_logo} alt="" />
					</a>
				</div>

				<div className="hero__entry">
					<p>About</p>
				</div>

				<div className="hero__image">
					<img src={img_hero_img_1} alt="" />

					<a href="#" className="hero__play">
						<img src={img_ico_play_1} alt="" />
					</a>
				</div>

				<div className="hero__foot">
					<h4>Find our logo in different cities for a never-seen before worldwide egg hunt. Around each logo, you’ll find a mxsk waiting to be claimed for free. That mxsk gives you access to a world of opportunities, exclusive events and acts as a membership card to a very private circle of NFT enthusiasts & entrepreneurs.</h4>
				</div>
			</div>
		</div>

		<section className="section-box">
			<div className="shell">
				<div className="section__inner">
					<div className="box">
						<div className="grid">
							<div className="grid__col grid__col--size-6">
								<div className="box__image">
									<img src={img_box_img_2} alt="" />
								</div>
							</div>
					
							<div className="grid__col grid__col--size-7">
								<div className="box__content">
									<h2>
										Let’s face it	 —					
										<strong>we’re    <span>all</span> wearing</strong> 	
										masks all the time
									</h2>
					
									<div className="box__entry">
										<div className="box__icon">
											<img src={img_box_icons} alt="" />
										</div>
					
										<h4>Find our logo in different cities for a never-seen before worldwide egg hunt. Around each logo, you’ll find a mxsk waiting to be claimed for free. That mxsk gives you access to a world of opportunities, exclusive events and acts as a membership card to a very private circle of NFT enthusiasts & entrepreneurs.</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--art">
			<div className="shell">
				<div className="section__inner">
					<div className="section__head">
						<h2><span>the</span> Artists</h2>

						<h4>Find our logo in different cities for a never-seen before worldwide egg hunt. Around each logo, you’ll find a mxsk waiting to be claimed for free. That mxsk gives you access to a world of opportunities, exclusive events and acts as a membership card to a very private circle of NFT enthusiasts & entrepreneurs.</h4>
					</div>
					
					<div className="articles">
						<div className="grid">
							<div className="grid__col grid__col--1of2">
								<div className="article article--mb-horizontal">
									<div className="article__image">
										<img src={img_gallery_img_7} alt="" />
									</div>

									<div className="article__content">
										<h4>hxrmxs</h4>
									
										<p>Curator, collector and world-renowned tea maker.</p>
									</div>
								</div>
							</div>

							<div className="grid__col grid__col--1of2">
								<div className="article article--reversed article--mb-horizontal">
									<div className="article__image">
										<img src={img_article_img_1} alt="" />
									</div>

									<div className="article__content">
										<h4>wire by ryan</h4>

										<p>Something about this person goes here lorem ipsum dolor sit amet conseqtetur.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--team">
			<div className="shell">
				<div className="section__inner">
					<div className="section__head">
						<h2><span>the</span> Team</h2>
					</div>
					
					<div className="articles articles--small">
						<div className="grid">
							<div className="grid__col grid__col--1of3">
								<div className="article article--small">
									<div className="grid">
										<div className="grid__col grid__col--1of2">
											<div className="article__image">
												<img src={img_gallery_img_7} alt="" />
											</div>
										</div>

										<div className="grid__col grid__col--1of2">
											<div className="article__content">
												<h4>person’s name</h4>

												<p>Something about this person goes here lorem ipsum dolor sit amet conseqtetur.</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="grid__col grid__col--1of3">
								<div className="article article--small">
									<div className="grid">
										<div className="grid__col grid__col--1of2">
											<div className="article__image">
												<img src={img_gallery_img_7} alt="" />
											</div>
										</div>

										<div className="grid__col grid__col--1of2">
											<div className="article__content">
												<h4>person’s name</h4>

												<p>Something about this person goes here lorem ipsum dolor sit amet conseqtetur.</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="grid__col grid__col--1of3">
								<div className="article article--small">
									<div className="grid">
										<div className="grid__col grid__col--1of2">
											<div className="article__image">
												<img src={img_gallery_img_7} alt="" />
											</div>
										</div>

										<div className="grid__col grid__col--1of2">
											<div className="article__content">
												<h4>person’s name</h4>

												<p>Something about this person goes here lorem ipsum dolor sit amet conseqtetur.</p>
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

		<section className="section section--spacing-1">
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
        </>
    );
}

export default About;