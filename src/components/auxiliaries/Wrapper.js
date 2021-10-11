import { WrapperStyling } from "./Wrapper.styled";

const Wrapper = ({ children }) => {
    return (
        <WrapperStyling>
            { children }
        </WrapperStyling>
    );
}
 
export default Wrapper;