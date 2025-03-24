import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m14.587 24.452-4.574 3.397a2.28 2.28 0 0 1-3.68-1.64V8.467a4.98 4.98 0 0 1 5.16-4.796h9.014a4.987 4.987 0 0 1 5.16 4.796v17.745a2.278 2.278 0 0 1-3.68 1.639l-4.574-3.398a2.4 2.4 0 0 0-2.826-.001Z"
        />
    </Svg>
)
export default SvgComponent
