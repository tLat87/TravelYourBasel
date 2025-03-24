import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m18.233 30.565-5.716 4.247a2.85 2.85 0 0 1-4.6-2.05V10.583a6.225 6.225 0 0 1 6.45-5.995h11.266a6.233 6.233 0 0 1 6.45 5.995v22.182a2.848 2.848 0 0 1-4.6 2.048l-5.716-4.246a3 3 0 0 0-3.534-.002Z"
        />
    </Svg>
)
export default SvgComponent
