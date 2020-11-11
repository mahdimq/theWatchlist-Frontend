import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
background:
	linear-gradient(
    to bottom,
      rgba(0, 0, 0, 0.1) 39%,
      rgba(0, 0, 0, 0.2) 41%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${(props) => props.image}), #1c1c1c;

	background-size: 100%, cover;
	background-position: center, center;
	width: 100%;
	height: 600px;
	position: relative;
	animation: animateImage 1s;

	.heroimage-content {
		max-width: 1280px;
		padding: 1.5em;
		margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 1.5em;
    min-height: 100px;
    color: #fff;

    h1 {
      font-family: sans-serif;
      font-size: 3em;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }

    p {
      font-family: san-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-sizeL 1em;
        line-height: 20px;
        color: #fff;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100$
    }
  }

  @keyframes animateImage {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
`;

function HeroImage({ image, title, text }) {
	return (
		<StyledHero image={image}>
			<div className='heroimage-content'>
				<div className='heroimage-text'>
					<h1>{title}</h1>
					<p>{text}</p>
				</div>
			</div>
		</StyledHero>
	);
}

export default HeroImage;
