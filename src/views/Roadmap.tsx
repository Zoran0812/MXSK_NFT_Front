import React, { useState } from "react";

import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_box_img_6 from "assets/image/temp/box-img-6.jpg";
import img_box_icons_3 from "assets/image/svg/box-icons-3.svg";
import img_box_img_7 from "assets/image/temp/box-img-7.jpg";
import img_box_icons_2 from "assets/image/svg/box-icons-2.svg";
import img_box_img_8 from "assets/image/temp/box-img-8.jpg";
import img_ico_sun from "assets/image/svg/ico-sun.svg";
const Roadmap: React.FunctionComponent<any> = () => {
    return (
        <>
            <section className="section-box section-box--secondary section-box--secondary-alt">
			<div className="shell">
				<div className="section__logo">
					<img src={img_hero_logo} alt="" />
				</div>

				<div className="section__head">
					<h6>Roadmap</h6>

					<h3 className="hidden visible-xs-inline-block">
						Lorem ipsum — will get selected MXSK in physical, <span>hand crafted</span> format
					</h3>
				</div>

				<div className="section__inner">
					<div className="box box--centerd">
						<div className="grid">
							<div className="grid__col grid__col--size-6">
								<div className="box__image">
									<img src={img_box_img_6} alt="" />
								</div>
							</div>
					
							<div className="grid__col grid__col--size-7">
								<div className="box__content">
									<div className="box__entry">
										<div className="box__icon hidden-xs">
											<img src={img_box_icons_3} alt="" />
										</div>
									</div>

									<h2 className="hidden-xs">
										The road  —  <strong>to greatness <span>starts</span> here</strong> 
									</h2>
					
									<div className="box__entry">
										<h4>Every great project starts with a strong roadmap and ours speaks volume. We’re ambitious artists with a single goal in mind, create an exclusive community that celebrates artists, creators, collectors, curators without forgetting the new-comers.</h4>

										<h4>We have a lot in store for you and we’re very happy to have you with us.</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--activations">
			<div className="shell">
				<div className="section__inner">
					<div className="section__head">
						<h2>Activations</h2>
					</div>

					<div className="slider slider--secondary js-slider-secondary">
						<div className="slider__clip">
							<div className="slider__slides">
								<div className="slider__slide">
									<div className="activation">
										<div className="activation__head">
											<h4>10%</h4>

											<ul>
												<li>
													<svg id="Icon_Target_Copy" data-name="Icon / Target Copy" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													  <path id="Path_3" data-name="Path 3" d="M0,6.5l5,5L17,0" transform="translate(4.5 3)" fill="none" stroke-miterlimit="10" stroke-width="1"></path>
													  <circle id="Oval" cx="7.5" cy="7.5" r="7.5" transform="translate(1.5 4)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													</svg>
												</li>
												
												<li>
													<svg id="Icon_Target" data-name="Icon / Target" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													  <circle id="Oval" cx="7.5" cy="7.5" r="7.5" transform="translate(3.5 4)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <circle id="Oval-2" data-name="Oval" cx="4.5" cy="4.5" r="4.5" transform="translate(6.5 7)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <g id="Group_2" data-name="Group 2" transform="translate(10.5)">
													    <path id="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													  <g id="Group_2-2" data-name="Group 2" transform="translate(22 10.5) rotate(90)">
													    <path id="Line-2" data-name="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy-2" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													</svg>
												</li>
											</ul>
										</div>

										<div className="activation__content">
											<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
										</div>
									</div>
								</div>

								<div className="slider__slide">
									<div className="activation">
										<div className="activation__head">
											<h4>20%</h4>

											<ul>
												<li>
													<svg id="Icon_Target_Copy_2" data-name="Icon / Target Copy 2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													  <circle id="Oval" cx="7.5" cy="7.5" r="7.5" transform="translate(3.5 4)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <path id="Oval-2" data-name="Oval" d="M7.5,15A7.5,7.5,0,1,0,0,7.5" transform="translate(18.5 4) rotate(90)" fill="none" stroke-miterlimit="10" stroke-width="3"></path>
													</svg>
												</li>
												
												<li>
													<svg id="Icon_Target" data-name="Icon / Target" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													  <circle id="Oval" cx="7.5" cy="7.5" r="7.5" transform="translate(3.5 4)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <circle id="Oval-2" data-name="Oval" cx="4.5" cy="4.5" r="4.5" transform="translate(6.5 7)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <g id="Group_2" data-name="Group 2" transform="translate(10.5)">
													    <path id="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													  <g id="Group_2-2" data-name="Group 2" transform="translate(22 10.5) rotate(90)">
													    <path id="Line-2" data-name="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy-2" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													</svg>
												</li>
											</ul>
										</div>

										<div className="activation__content">
											<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
										</div>
									</div>
								</div>

								<div className="slider__slide">
									<div className="activation">
										<div className="activation__head">
											<h4>30%</h4>

											<ul>
												<li>
													<svg id="Icon_Target" data-name="Icon / Target" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													  <circle id="Oval" cx="7.5" cy="7.5" r="7.5" transform="translate(3.5 4)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <circle id="Oval-2" data-name="Oval" cx="4.5" cy="4.5" r="4.5" transform="translate(6.5 7)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <g id="Group_2" data-name="Group 2" transform="translate(10.5)">
													    <path id="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													  <g id="Group_2-2" data-name="Group 2" transform="translate(22 10.5) rotate(90)">
													    <path id="Line-2" data-name="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy-2" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													</svg>
												</li>
											</ul>
										</div>

										<div className="activation__content">
											<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
										</div>
									</div>
								</div>

								<div className="slider__slide">
									<div className="activation">
										<div className="activation__head">
											<h4>40%</h4>

											<ul>
												<li>
													<svg id="Icon_Target" data-name="Icon / Target" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													  <circle id="Oval" cx="7.5" cy="7.5" r="7.5" transform="translate(3.5 4)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <circle id="Oval-2" data-name="Oval" cx="4.5" cy="4.5" r="4.5" transform="translate(6.5 7)" fill="none" stroke-miterlimit="10" stroke-width="1"></circle>
													  <g id="Group_2" data-name="Group 2" transform="translate(10.5)">
													    <path id="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													  <g id="Group_2-2" data-name="Group 2" transform="translate(22 10.5) rotate(90)">
													    <path id="Line-2" data-name="Line" d="M.5,8.5V.5" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													    <path id="Line_Copy-2" data-name="Line Copy" d="M.5,8.5V.5" transform="translate(0 13)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></path>
													  </g>
													</svg>
												</li>
											</ul>
										</div>

										<div className="activation__content">
											<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--news">
			<div className="shell">
				<div className="section__head">
					<h2>What’s Ahead</h2>
				</div>

				<div className="box box--reversed box--reversed-secondary">
					<div className="grid">
						<div className="grid__col grid__col--size-17">
							<div className="box__image">
								<img src={img_box_img_7} alt="" />
							</div>
						</div>
				
						<div className="grid__col grid__col--size-18">
							<div className="box__content">
								<h2>SECRET Venues <span>&</span> unique LIVE EVENTS — <strong>IN CITIES AROUND THE GLOBE</strong></h2>

								<div className="box__entry">
									<div className="box__icon">
										<img src={img_box_icons_2} alt="" />
									</div>

									<h4>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="box-secondary">
					<div className="grid">
						<div className="grid__col grid__col--size-14">
							<div className="box__image">
								<h2 className="hidden visible-xs-inline-block">music</h2>

								<img src={img_box_img_8} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-15">
							<div className="box__content">
								<h2 className="hidden-xs">music</h2>

								<p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="box-secondary box-secondary--reversed">
					<div className="grid">
						<div className="grid__col grid__col--size-16">
							<div className="box__image">
								<h2 className="hidden visible-xs-inline-block">experiences</h2>

								<img src={img_box_img_8} alt=""/>
							</div>
						</div>

						<div className="grid__col grid__col--size-15">
							<div className="box__content">
								<h2 className="hidden-xs">experiences</h2>

								<p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="box-secondary box-secondary--medium">
					<div className="grid">
						<div className="grid__col grid__col--size-14">
							<div className="box__image">
								<h2 className="hidden visible-xs-inline-block">club</h2>

								<img src={img_box_img_8} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-15">
							<div className="box__content">
								<h2 className="hidden-xs">club</h2>

								<p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="box-secondary box-secondary--reversed">
					<div className="grid">
						<div className="grid__col grid__col--size-16">
							<div className="box__image">
								<h2 className="hidden visible-xs-inline-block">merch</h2>

								<img src={img_box_img_8} alt="" />
							</div>
						</div>

						<div className="grid__col grid__col--size-15">
							<div className="box__content">
								<h2 className="hidden-xs">merch</h2>

								<p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section--timeline">
			<div className="shell">
				<div className="section__head">
					<h2>Timeline</h2>
				</div>

				<div className="section__inner">
					<div className="section__icon">
						<img src={img_ico_sun} alt="" />
					</div>

					<div className="slider slider--secondary slider--secondary--mb js-slider-secondary">
						<div className="slider__clip">
							<div className="slider__slides">
								<div className="slider__slide">
									<div className="tile-slider">
										<h4>Physical Mxsks</h4>

										<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
									</div>
								</div>

								<div className="slider__slide">
									<div className="tile-slider">
										<h4>Exclusive Events</h4>

										<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
									</div>
								</div>

								<div className="slider__slide">
									<div className="tile-slider">
										<h4>Title</h4>

										<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
									</div>
								</div>

								<div className="slider__slide">
									<div className="tile-slider">
										<h4>Title</h4>

										<p>Lorem ipsum dolor sit amet conseqtetur momentum et gravida.</p>
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

export default Roadmap;