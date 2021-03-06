import React from "react";

import * as S from "./styled";
import SubscribeButton from "../../SubscribeButton";

import Arrow from "../../../assets/images/arrow-icon.png";

const Attention = ({ data }) => (
	<S.ContainerAttention>
		<S.AttentionWrapper>
			<S.Box>
				<S.Title>{data.title}</S.Title>
				<S.Description>{data.paragraph}</S.Description>
				<S.Label>
					<S.NewsLetter type="email" placeholder="enter your email for updates" /> 
					<SubscribeButton><S.Icon src={Arrow} alt="Arrow icon"/></SubscribeButton>
				</S.Label>
				<S.Subtitle>{data.observation}</S.Subtitle>
			</S.Box>
		</S.AttentionWrapper>
	</S.ContainerAttention>
);

export default Attention