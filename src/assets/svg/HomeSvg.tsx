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
            d="M10.222 35c-1.964 0-3.555-1.633-3.555-3.65V16.68A3.69 3.69 0 0 1 8 13.83l9.778-8.03a3.483 3.483 0 0 1 4.444 0l9.776 8.03a3.687 3.687 0 0 1 1.335 2.85v14.67c0 2.017-1.591 3.65-3.555 3.65H10.222Z"
        />
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.833 35v-9.167a3.333 3.333 0 0 1 3.334-3.333h1.666a3.333 3.333 0 0 1 3.334 3.333V35"
        />
    </Svg>
)
export default SvgComponent
