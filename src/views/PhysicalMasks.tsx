import React,  {useState} from "react";
import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_box_img_5 from "assets/image/temp/box-img-5.jpg";
import img_box_icons_2 from "assets/image/svg/box-icons-2.svg";
import img_article_img_1 from "assets/image/temp/article-img-1.jpg";
import img_section_logo from "assets/image/svg/section-logo.svg";
import img_card_img_1 from "assets/image/temp/card-img-1.jpg";
import img_card_img_2 from "assets/image/temp/card-img-2.jpg";
import img_ico_list_1 from "assets/image/svg/ico-list-1.svg";
import img_ico_list_2 from "assets/image/svg/ico-list-2.svg";
import img_ico_list_3 from "assets/image/svg/ico-list-3.svg";
import img_ico_list_4 from "assets/image/svg/ico-list-4.svg";


const PhysicalMasks: React.FunctionComponent<any> = () => {
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
					<h6>Physical mxsk</h6>
				</div>

				<div className="section__inner">
					<div className="box box--alt box--alt--reversed">
						<div className="grid">
							<div className="grid__col grid__col--size-6">
								<div className="box__image">
									<img src={img_box_img_5} alt="" />
								</div>
							</div>
					
							<div className="grid__col grid__col--size-7">
								<div className="box__content">
									<h2>
										BEHOLD — 	The physical, wearable <span>hand crafted</span> mxsk, <strong>by wire by ryan</strong>
									</h2>
					
									<div className="box__entry">
										<h4>We know what you’re thinking, having a mxsk is already awesome but you know what’s even better? Owning a physical interpretation of your mxsk that you can wear or expose… whatever you decide, it’s yours to </h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--info">
			<div className="shell">
				<div className="section__head">
					<h2>Secret installations <span>&</span> live music events —		<strong>in cities around the globe</strong></h2>

					<div className="section__entry hidden visible-xs-block">
						<div className="section__icon">
							<img src={img_box_icons_2} alt="" />
						</div>

						<h4>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</h4>
					</div>
				</div>

				<div className="articles">
					<div className="article article--large">
						<div className="grid">
							<div className="grid__col grid__col--size-12">
								<div className="article__content">
									<div className="article__entry hidden-xs">
										<div className="article__icon">
											<img src={img_box_icons_2} alt="" />
										</div>

										<h4>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</h4>
									</div>

									<div className="article__foot">
										<h4>wire by ryan</h4>

										<p>Meet the artist behind the physical mxsks.</p>
									</div>
								</div>
							</div>

							<div className="grid__col grid__col--size-13">
								<div className="article__image">
									<img src={img_article_img_1} alt="" />
								</div>
							</div>
						</div>
					</div>
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
									<p>When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity, and open digital doors for you.</p>
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
		</section>
        </>
    );
}

export default PhysicalMasks;