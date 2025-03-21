import "./CustomButton.sass"
import styled from "styled-components";

const CustomButton = ({children, bg, onClick}) => {
	return (
		<CustomButtonWrapper theme={bg} className="custom-button" onClick={onClick}>
			{children}
		</CustomButtonWrapper>
	)
}

const CustomButtonWrapper = styled.button`
  background-color: ${props => props.theme};
`



export default CustomButton