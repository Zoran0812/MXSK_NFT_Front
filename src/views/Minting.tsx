import React, { useState } from "react";
import ConnectedWallet from "components/connected-wallet";
//import Box from "@material-ui/core/Box";
//import Typography from "@material-ui/core/Typography";
import img_hero_logo from "assets/image/svg/hero-logo.svg";
import img_gallery_img_4 from "assets/image/temp/galery-img-4.jpg";
import img_gallery_img_8 from "assets/image/temp/galery-img-8.jpg";
import { useWallet } from "wallets/wallet";
import { useWeb3Contracts } from "web3/contracts";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { web3, formatBigValue, getHumanValue, getEtherscanTxUrl } from "web3/utils";
import BigNumber from "bignumber.js";
import { useAsyncEffect } from "hooks/useAsyncEffect";

const BuyInfo = styled.div`
  width: 500px;
  padding: 20px 30px;
  margin: 0 auto;
  color: white;
  @media (max-width: 991px) {
    width: 100%;
    padding: 15px;
  }
`;
const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 10,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 10,
      backgroundColor: "#dc920f",
    },
  })
)(LinearProgress);


const Info = styled.div`
  margin-top: 10px;
  text-align: center;
  color: red;
`

const ItemName = styled.div`
  font-size: 13px;
  text-transform: uppercase;
`;
const ItemValue = styled.div`
  font-size: 18px;
  color: #dc920f;
  font-weight: 400;
`;
const MaxBtn = styled.button`
  border: 0;
  background-color: #dc920f;
  color: #fff;
  border-radius: 30px;
  font-size: 13px;
  padding: 7px 25px;
`;
const BtnArea = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnWidth = styled.div`
  width: 100%;
  margin: auto;
`;
const ActionButton = styled.button<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "grey" : "white")};
  background-color: #dc920f;
  font-size: 13px;
  border-radius: 84px;
  padding: 10px 15px;
  border: 1px solid #dc920f;
  width: 230px;
  margin-top: 20px;
  text-transform: uppercase;
  position: relative;
  &:focus {
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
  }
`;

const ProgressBar = styled.div`
  margin-top: 10px;
  & h6 {
    font-size: 14px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  & .MuiTypography-colorTextSecondary {
    color: #dc920f;
    font-size: 18px;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    width: 65%;
    margin: 0px auto;
    margin-top: 10px;
  }
  @media (max-width: 540px) {
    width: 100%;
    margin: 0px auto;
    margin-top: 10px;
  }
`;

const TitleP = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
const PriceInfo = styled.div`
  width: 65%;
  margin: 10px auto;
  @media (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 15px;
  margin-bottom: 15px;
  &:last-child {
    border-bottom: 0;
  }
`;
const ItemInc = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
  align-items: center;
  & button {
    font-size: 18px;
    border: 0;
    background-color: transparent;
    color: #fff;
  }
  & span {
    font-size: 24px;
    color: #dc920f;
    font-weight: 500;
  }
`;
const BarInfo = styled.div``;

const Minting: React.FunctionComponent<any> = () => {
    const wallet = useWallet();
    const { mxsk } = useWeb3Contracts();
 	const [count, setCount] = useState(1);
  	const [ mxskCost, setMxskCost ] = React.useState<BigNumber | undefined>(new BigNumber(0));
  	const [progressVal, setProgressVal] = useState(100);
  	const [ mxskPaused, setMxskPaused ] = useState(true);
    const [ mxskMaxSupply, setMxskMaxSupply ] = useState(0);
    const [ mxskTotalSupply, setMxskTotalSupply ] = useState(0);
  	const [ethBalance, setEthBalance] = React.useState<BigNumber | undefined>(new BigNumber(0));
  	const [ethAmount, setEthAmount] = React.useState<BigNumber>(new BigNumber(0));
  	const [depositing, setDepositing] = React.useState(false);
  	const [transactionHash, setTransactionHash] = React.useState("");
    const [phoneSubmitted, setPhoneSubmitted] = useState(false);

	const phoneSubmit = async(e) =>{
		console.log("phoneSubmit");
		setPhoneSubmitted(true);
		e.preventDefault();
	}

    React.useEffect(() => {
        setMxskCost(mxsk.cost);
        setMxskMaxSupply(mxsk.maxSupply);
        setMxskTotalSupply(mxsk.totalSupply);
        setMxskPaused(mxsk.paused);
        //setMxskPaused(false);
    }, [mxsk]);

	React.useEffect(() => {
		if (mxsk.cost) {
		  const amount = mxsk.cost.times(count);
		  setEthAmount(amount);
		}
	}, [count, mxsk.cost]);

	const mint = async () => {
		if(!wallet.account){
			alert("Please connect wallet first!");
			return;
		}
		if(mxskPaused == true){
			alert("Mint Paused!");
			return;
		}

		setDepositing(true);

		try {
			const result = await mxsk.mint(count, ethAmount);
			setTransactionHash(result);
		} catch (e) {
			console.log(e);
		}

		setDepositing(false);

	}

	useAsyncEffect(async () => {
		if (wallet.account) {
		  try {
			const balance = new BigNumber(await web3.eth.getBalance(wallet.account));
			setEthBalance(balance);
		  } catch (err) {
			console.log(err);
		  }
		}
	  }, [wallet, depositing, mxsk]);

    return (
        <>
            <section className="section section--spacing-3">
			<div className="shell">
				<div className="section__logo">
					<a href="#">
						<img src={img_hero_logo} alt="" />
					</a>
				</div>

				<div className="section__inner">
					<div className="form form--secondary">
						<form action="#" method="post" onSubmit={phoneSubmit}>
							<div className="form__head">
								<h2>Minting starts <strong>01 December 2021   <span>@</span>  1200 CET</strong></h2>

								<h6>Be among <span>the first</span> to get access to mxsk</h6>
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
								

								<p>You’ll receive a code lorem ipsum dolor sit amet conseqtetur. By signing up you agree with our terms and conditions.</p>
							</div>
						</form>
					</div>

					<ul className="list-galery list-galery--secondary">
						<li>
							<img src={img_gallery_img_8} alt="" />
						</li>
						
						<li>
							<img src={img_gallery_img_4} alt="" />
						</li>
						
						<li>
							<img src={img_gallery_img_8} alt="" />
						</li>
						
						<li>
							<img src={img_gallery_img_4} alt="" />
						</li>

						<li>
							<img src={img_gallery_img_8} alt="" />
						</li>

						<li>
							<img src={img_gallery_img_8} alt="" />
						</li>
					</ul>
				</div>

			</div>
		</section>

		<section className="section-minting">
			<div className="shell">
				<div className="section__inner">
					<div className="section__head">
						<h2>Specs</h2>
					</div>
					<ul>
						<li>
							<p>Founder Trait</p>
							<h4>First 100 Mints</h4>
						</li>
						<li>
							<p>Physical: True Trait</p>
							<h4>500</h4>
						</li>
						<li>
							<p>Golden Ticket</p>
							<h4>50</h4>
						</li>
						<li>
							<p>Handmade</p>
							<h4>25</h4>
						</li>
					</ul>
					<ul>
						<li>
							<p>Price per token</p>

							<h4>{formatBigValue(getHumanValue(mxskCost, 18), 4)} ETH</h4>
						</li>
						
						<li>
							<p>Total supply</p>

							<h4>{mxskMaxSupply}</h4>
						</li>
						
						<li>
							<p>Tokens remaining</p>

							<h4>{mxskMaxSupply-mxskTotalSupply}</h4>
						</li>
						
						<li>
							<p>Reveal time</p>

							<h4>Instant</h4>
						</li>
					</ul>

					<div className="mint">
                        {(mxskPaused==true) &&
                        <>
                            <div className="mint__inner">

                                <div className="mint__content">
                                    <p>Minting hasn’t started</p>

                                    <h3><span>{mxskTotalSupply}</span>/{mxskMaxSupply}</h3>
                                </div>
                            </div>
                        </>
                        }
						{(mxskPaused==false) &&
							<BuyInfo>
								<TitleP>{mxskMaxSupply} MXSK NFT ({formatBigValue(getHumanValue(mxskCost, 18), 4)} ETH / 1 MXSK)</TitleP>
								<PriceInfo>
									<Item>
									<ItemName>MY ETH BALANCE</ItemName>
									<ItemValue>{wallet.account ? formatBigValue(getHumanValue(ethBalance, 18), 4) : 0} ETH</ItemValue>
									</Item>
									<Item>
									<ItemName>MINT AMOUNT</ItemName>
									<ItemInc>
										<button
										onClick={() => count > 1 && setCount(count - 1)}
										>
										-
										</button>
										<span>{count}</span>
										<button
										onClick={() => {
											if (25 > count) setCount(count + 1);
										}}
										>
										+
										</button>
									</ItemInc>
									<MaxBtn
										disabled={false}
										onClick={() => {
										setCount(mxsk.maxMintAmount);
										}}
									>
										MAX
									</MaxBtn>
									</Item>
									<Item>
									<ItemName>TOTAL PRICE</ItemName>
									<ItemValue>{formatBigValue(getHumanValue(ethAmount, 18), 4)} ETH</ItemValue>
									</Item>
								</PriceInfo>
								<BtnWidth>
									<BtnArea>

									<ConnectedWallet />
									{
										wallet.account && mxskTotalSupply < mxskMaxSupply &&
										<ActionButton
										disabled={depositing || !ethBalance || ethAmount.gt(ethBalance) || mxskPaused}
										onClick={() => {
											mint();
										}}
										>
										{depositing ? <div className="loader"></div> : ""}
										mint now
										</ActionButton>
									}
									</BtnArea>
								</BtnWidth>
								{transactionHash && (
									<div className="text-center" style={{ marginTop: "10px" }}>
									<a href={getEtherscanTxUrl(transactionHash)} target="_blank" rel="noreferrer">
										View on Etherscan
									</a>
									</div>
								)}
								{/*
								<ProgressBar className="progressbar">
									<span>Progress</span>
									<BarInfo>
									<Box display="flex" alignItems="center">
										<Box width="100%" mr={1}>
										<BorderLinearProgress variant="determinate" value={progressVal} />
										</Box>
										<Box minWidth={35}>
										<Typography variant="body2" color="textSecondary">{`${progressVal.toFixed(2)}%`}</Typography>
										</Box>
									</Box>
									</BarInfo>
								</ProgressBar>
								*/}
							</BuyInfo>
						}
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default Minting;