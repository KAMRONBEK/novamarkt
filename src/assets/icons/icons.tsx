import React from "react";
import Svg, {
	Circle,
	ClipPath,
	Defs,
	Ellipse,
	G,
	Image,
	LinearGradient,
	Path,
	Pattern,
	Rect,
	Stop,
	SvgProps,
	Use,
} from "react-native-svg";

export function PlusCounterIcon(props: SvgProps) {
	return (
		<Svg
			width={13}
			height={10}
			viewBox="0 0 13 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.754 0H5.317v4.5H.445v2.25h4.872v4.5h2.437v-4.5h4.875V4.5H7.754V0z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function MinusIcon(props: SvgProps) {
	return (
		<Svg
			width={10}
			height={10}
			viewBox="0 0 13 3"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path d="M.032 2.25V0h12.184v2.25H.032z" fill={props?.fill} />
		</Svg>
	);
}

export function CheckedItem(props: SvgProps) {
	return (
		<Svg
			width={29}
			height={29}
			viewBox="0 0 29 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Rect
				width={29}
				height={29}
				rx={2}
				fill="url(#paint0_linear_0_1413)"
			/>
			<G clipPath="url(#clip0_0_1413)">
				<Path
					d="M11.454 14.24l2.108 2.109 3.984-3.983"
					stroke="#fff"
					strokeLinecap="square"
				/>
			</G>
			<Circle cx={14.4998} cy={14.4998} r={8.88235} stroke="#fff" />
			<Defs>
				<LinearGradient
					id="paint0_linear_0_1413"
					x1={0.035815}
					y1={0.185394}
					x2={30.4688}
					y2={1.76951}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#BED9FF" stopOpacity={0} />
					<Stop stopColor="#729EDB" />
					<Stop offset={1} stopColor="#274784" />
				</LinearGradient>
				<ClipPath id="clip0_0_1413">
					<Path
						fill="#fff"
						transform="translate(10.235 10.235)"
						d="M0 0H8.52941V8.52941H0z"
					/>
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export function UploadIcon(props: SvgProps) {
	return (
		<Svg
			width={16}
			height={16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 0l5.359 5.274-.872.857L8.615 2.32v11.258h-1.23V2.319L3.513 6.13l-.872-.857L8 0zm8 14.789V16H0v-1.211h16z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function PlayIcon(props: SvgProps) {
	return (
		<Svg
			width={25}
			height={25}
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle
				cx={12.5}
				cy={12.5}
				r={12.5}
				fill="url(#paint0_linear_0_1045)"
			/>
			<Path d="M17.5 12.5L10 16.83V8.17l7.5 4.33z" fill={props?.fill} />
			<Defs>
				<LinearGradient
					id="paint0_linear_0_1045"
					x1={-0.70862}
					y1={0.159817}
					x2={26.0359}
					y2={1.39439}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#B9D5FD" />
					<Stop offset={0.0001} stopColor="#384F81" />
					<Stop offset={0.572917} stopColor="#49679F" />
					<Stop offset={1} stopColor="#729EDB" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}

export function TelegramIcon(props: SvgProps) {
	return (
		<Svg
			width={35}
			height={37}
			viewBox="0 0 35 37"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Ellipse
				cx={17.5}
				cy={18.7795}
				rx={17.5}
				ry={17.7966}
				fill="#D9D9D9"
				fillOpacity={0.5}
			/>
			<Path
				d="M23.2 11.173l-14.712 6.56c-1.005.465-.999 1.113-.185 1.402l3.778 1.362 8.74-6.375c.413-.29.79-.134.48.184l-7.08 7.388h-.002.001l-.26 4.502c.381 0 .55-.203.764-.441l1.835-2.063 3.816 3.259c.704.448 1.21.218 1.384-.753l2.506-13.649c.256-1.189-.393-1.727-1.064-1.376z"
				fill={props?.fill}
				fillOpacity={0.5}
			/>
		</Svg>
	);
}

export function SaveIconMessage(props: SvgProps) {
	return (
		<Svg
			width={18}
			height={18}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M12.22 1.456C10.382-.2 7.386-.2 5.548 1.456L.449 6.04a.15.15 0 000 .225l.721.649c.033.03.077.046.124.046a.186.186 0 00.124-.046L6.516 2.33c.633-.57 1.474-.883 2.369-.883.894 0 1.736.313 2.367.883.633.569.98 1.327.98 2.13 0 .805-.347 1.56-.98 2.13l-5.195 4.675-.842.757c-.787.708-2.067.708-2.854 0a1.715 1.715 0 01-.59-1.283c0-.485.21-.94.59-1.283l5.155-4.637a.73.73 0 01.486-.181h.002c.184 0 .354.065.482.18.131.118.202.273.202.438a.583.583 0 01-.202.434L4.273 9.48a.15.15 0 000 .225l.721.648c.033.03.078.046.124.046a.186.186 0 00.124-.046l4.211-3.79c.389-.35.602-.814.602-1.307 0-.494-.215-.96-.602-1.308-.803-.723-2.107-.721-2.91 0l-.5.451-4.652 4.186a3.029 3.029 0 00-.737.989c-.17.37-.257.767-.256 1.168 0 .814.354 1.578.993 2.153.662.594 1.529.891 2.396.891s1.735-.297 2.395-.891l6.039-5.432c.889-.801 1.38-1.868 1.38-3.002.003-1.136-.49-2.203-1.38-3.004z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function Checked(props: SvgProps) {
	return (
		<Svg
			width={14}
			height={14}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M14 7A7 7 0 110 7a7 7 0 0114 0zM10.527 4.35a.656.656 0 00-.946.02L6.543 8.24 4.71 6.408a.656.656 0 00-.927.927l2.315 2.316a.656.656 0 00.944-.017l3.493-4.366a.656.656 0 00-.009-.92z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function NotMarkedStar(props: SvgProps) {
	return (
		<Svg
			width={11}
			height={11}
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.585 0l1.47 3.806 3.795.34-2.886 2.692.875 4.016-3.254-2.142-3.254 2.142.874-4.016L.32 4.146l3.794-.34L5.584 0z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function MarkedStar(props: SvgProps) {
	return (
		<Svg
			width={11}
			height={11}
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.536 0l1.47 3.806 3.795.34-2.885 2.692.874 4.016-3.254-2.142-3.254 2.142.874-4.016L.271 4.146l3.794-.34L5.535 0z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function ArrowBottomMarked(props: SvgProps) {
	return (
		<Svg
			width={8}
			height={12}
			viewBox="0 0 8 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M6.625 7.94l-2.25 2.25V.41h-.75v9.78l-2.25-2.25-.53.53L4 11.625 7.155 8.47l-.53-.53z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function LocationIcon(props: SvgProps) {
	return (
		<Svg
			width={14}
			height={16}
			viewBox="0 0 14 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M7.124.271C5.32.273 3.59.917 2.314 2.061 1.04 3.205.323 4.757.32 6.375c-.003 1.323.479 2.61 1.37 3.663 0 0 .186.219.216.25l5.218 5.521 5.22-5.523.213-.248v-.002c.892-1.053 1.373-2.339 1.37-3.66-.001-1.62-.719-3.17-1.994-4.315C10.657.917 8.928.273 7.123.271zm0 8.324c-.49 0-.968-.13-1.375-.374a2.29 2.29 0 01-.911-.996 2.009 2.009 0 01-.141-1.283 2.16 2.16 0 01.677-1.136c.346-.31.787-.522 1.267-.608.48-.085.977-.042 1.43.126.452.168.838.453 1.11.818.272.365.417.794.417 1.233 0 .589-.262 1.153-.726 1.569a2.628 2.628 0 01-1.748.651z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function SaveIcon(props: SvgProps) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-save"
			{...props}
		>
			<Path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
			<Path d="M17 21L17 13 7 13 7 21" />
			<Path d="M7 3L7 8 15 8" />
		</Svg>
	);
}

export function ExitIcon(props: SvgProps) {
	return (
		<Svg
			width={28}
			height={20}
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M10.34 15.611a.955.955 0 001.352 0l3.44-3.44a.954.954 0 000-1.351l-3.44-3.44a.956.956 0 00-1.352 1.35l1.802 1.812H3.833a.961.961 0 00-.958.958c0 .527.431.958.958.958h8.31L10.34 14.26a.963.963 0 000 1.351zm7.868-12.736H4.792a1.917 1.917 0 00-1.917 1.917v2.875c0 .527.431.958.958.958a.961.961 0 00.959-.958V5.75c0-.527.43-.958.958-.958h11.5c.527 0 .958.43.958.958v11.5a.961.961 0 01-.958.958H5.75a.961.961 0 01-.958-.958v-1.917a.961.961 0 00-.959-.958.961.961 0 00-.958.958v2.875c0 1.055.862 1.917 1.917 1.917h13.416a1.922 1.922 0 001.917-1.917V4.792a1.922 1.922 0 00-1.917-1.917z"
				fill="#023047"
			/>
		</Svg>
	);
}

export function MessageIcon(props: SvgProps) {
	return (
		<Svg
			width={28}
			height={20}
			viewBox="0 0 19 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.5.916C4.675.916.75 4.356.75 8.583c0 2.787 1.66 5.286 4.375 6.645v4.855l4.672-3.838c4.688-.137 8.453-3.522 8.453-7.662 0-4.227-3.925-7.667-8.75-7.667zm0 13.417h-.291L6.875 16.25v-2.317l-.56-.236C3.96 12.705 2.5 10.745 2.5 8.583c0-3.171 3.14-5.75 7-5.75s7 2.579 7 5.75-3.14 5.75-7 5.75z"
				fill={props?.stroke}
			/>
		</Svg>
	);
}

export function PhoneIcon(props: SvgProps) {
	return (
		<Svg
			width={28}
			height={20}
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M4.384.48l-.859.258A4.2 4.2 0 00.58 4.163c-.356 2.482.44 5.383 2.362 8.711 1.916 3.32 4.026 5.458 6.348 6.394a4.2 4.2 0 004.458-.846l.651-.617a2.4 2.4 0 00.296-3.148l-1.628-2.256a1.8 1.8 0 00-1.986-.667l-2.46.752-.064.012c-.272.04-.897-.547-1.677-1.898-.816-1.414-.986-2.24-.76-2.454L7.37 6.978a2.996 2.996 0 00.689-3.42l-.792-1.765A2.4 2.4 0 004.386.48h-.002zm1.788 1.805l.794 1.765a1.796 1.796 0 01-.413 2.052l-1.255 1.17c-.804.759-.538 2.058.54 3.928 1.017 1.76 1.944 2.628 2.938 2.477l.15-.031 2.505-.765a.6.6 0 01.662.222l1.627 2.256a1.2 1.2 0 01-.147 1.575l-.652.616a3 3 0 01-3.183.604c-2.038-.82-3.964-2.773-5.758-5.88-1.798-3.114-2.525-5.762-2.213-7.94a3 3 0 012.105-2.447l.86-.26a1.2 1.2 0 011.44.658z"
				fill={props?.stroke}
			/>
		</Svg>
	);
}

export function ContactIcon(props: SvgProps) {
	return (
		<Svg
			width={28}
			height={20}
			viewBox="0 0 28 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M0 3.5C0 1.568 1.568 0 3.5 0h21C26.432 0 28 1.568 28 3.5v13a3.5 3.5 0 01-3.5 3.5h-21A3.5 3.5 0 010 16.5v-13zM3.5 2A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h21a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0024.5 2h-21zM17 6a1 1 0 100 2h6a1 1 0 100-2h-6zm0 6a1 1 0 000 2h6a1 1 0 000-2h-6zM8.522 9.428a2.714 2.714 0 100-5.428 2.714 2.714 0 000 5.428zm-2.806 1.356A1.716 1.716 0 004 12.5a3.34 3.34 0 002.53 3.24l.106.028c1.24.31 2.534.31 3.772 0l.108-.026a3.34 3.34 0 002.53-3.24 1.716 1.716 0 00-1.716-1.718H5.716z"
				fill={props?.stroke}
			/>
		</Svg>
	);
}

export function UserMarkIcon(props: SvgProps) {
	return (
		<Svg
			width={25}
			height={20}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M17.25 7.938c0 4.062-2.625 7.312-5.25 7.312S6.75 12 6.75 7.937c0-4.062 1.75-6.5 5.25-6.5s5.25 2.438 5.25 6.5zM1.5 23.374h21c0-7.313-5.25-8.125-10.5-8.125s-10.5.813-10.5 8.125z"
				stroke={props?.stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export function QuestionMarkIcon(props: SvgProps) {
	return (
		<Svg
			width={22}
			height={22}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M11 20.625a9.625 9.625 0 110-19.25 9.625 9.625 0 010 19.25zM11 22a11 11 0 100-22 11 11 0 000 22z"
				fill={props?.fill}
			/>
			<Path
				d="M7.226 7.956a.326.326 0 00.331.34h1.135c.19 0 .34-.156.365-.344.124-.902.743-1.56 1.845-1.56.944 0 1.807.472 1.807 1.606 0 .873-.514 1.275-1.327 1.885-.925.673-1.658 1.458-1.606 2.733l.005.298a.344.344 0 00.343.338h1.115a.344.344 0 00.344-.344v-.144c0-.987.376-1.274 1.389-2.043.837-.637 1.71-1.344 1.71-2.827 0-2.078-1.754-3.082-3.675-3.082-1.742 0-3.65.812-3.781 3.144zm2.14 7.924c0 .733.585 1.274 1.39 1.274.837 0 1.413-.541 1.413-1.274 0-.76-.578-1.293-1.415-1.293-.803 0-1.387.534-1.387 1.293z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function PaymentIcon(props: SvgProps) {
	return (
		<Svg
			width={23}
			height={23}
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M3.686 5.583V3.417c0-.628.201-1.242.58-1.768A3.53 3.53 0 015.82.45 3.966 3.966 0 017.847.206c.688.096 1.33.37 1.848.788a3.786 3.786 0 011.849-.788 3.966 3.966 0 012.027.244 3.53 3.53 0 011.554 1.199c.379.526.58 1.14.58 1.768v2.166h1.803c.478 0 .937.172 1.275.476.338.305.528.718.528 1.15v4.677l-1.165-1.033a3.577 3.577 0 00-.638-.452V7.208h-4.796V9.92H12.1c-.417 0-.817.065-1.19.182V7.208H1.882V17.5c0 .356.078.708.229 1.037.15.328.372.627.651.878.279.252.61.451.975.587.364.136.755.207 1.15.207h6.37l1.772 1.625H4.888c-1.275 0-2.498-.457-3.4-1.27C.587 19.752.08 18.65.08 17.5V7.208c0-.43.19-.844.528-1.149a1.908 1.908 0 011.275-.476h1.803zm5.408 0V3.417c0-.431-.19-.845-.528-1.15a1.908 1.908 0 00-1.274-.475c-.479 0-.937.171-1.275.476a1.548 1.548 0 00-.528 1.149v2.166h3.605zm1.803 0h3.005V3.417c0-.335-.114-.661-.328-.935a1.793 1.793 0 00-.864-.594 1.99 1.99 0 00-1.087-.039 1.833 1.833 0 00-.913.532c.121.325.187.674.187 1.036v2.166zm-.514 12.277l4.809 4.411c.938.863 2.48.867 3.428.013l3.597-3.245c.224-.202.4-.442.521-.705a1.974 1.974 0 00-.008-1.66 2.163 2.163 0 00-.527-.701l-4.9-4.348A2.557 2.557 0 0015.61 11l-3.507.002c-.638 0-1.249.227-1.7.633a2.065 2.065 0 00-.707 1.53v3.181c0 .566.247 1.11.688 1.514zm4.115-3.61c0 .142-.03.283-.091.415-.06.131-.149.25-.26.351-.112.101-.244.18-.39.235a1.318 1.318 0 01-.46.083c-.319 0-.625-.114-.85-.317a1.032 1.032 0 01-.353-.766c0-.287.127-.563.352-.766.225-.203.53-.317.85-.318.319 0 .624.114.85.317.225.203.352.479.352.766z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function CommentIcon(props: SvgProps) {
	return (
		<Svg
			width={23}
			height={23}
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M20.125 1.5c.381 0 .747.158 1.017.44.269.28.42.662.42 1.06v12c0 .398-.151.78-.42 1.061-.27.281-.636.44-1.017.44h-3.594c-.446 0-.886.108-1.285.316-.4.208-.747.51-1.015.883L11.5 21.5l-2.731-3.8a2.908 2.908 0 00-1.015-.883c-.399-.208-.839-.317-1.285-.317H2.875c-.381 0-.747-.158-1.016-.439a1.534 1.534 0 01-.421-1.06V3c0-.399.151-.78.42-1.062.27-.28.636-.439 1.017-.439h17.25zM2.875 0C2.112 0 1.381.316.842.879A3.068 3.068 0 000 3v12c0 .796.303 1.56.842 2.122.54.562 1.27.878 2.033.878h3.594c.223 0 .443.055.643.159.2.104.373.255.507.441l2.731 3.8c.134.186.308.338.507.442a1.388 1.388 0 001.286 0c.2-.104.373-.256.507-.442l2.731-3.8c.134-.186.308-.337.507-.441.2-.104.42-.159.643-.159h3.594c.762 0 1.494-.316 2.033-.878.54-.563.842-1.326.842-2.122V3c0-.796-.303-1.559-.842-2.121A2.815 2.815 0 0020.125 0H2.875z"
				fill={props?.fill}
			/>
			<Path
				d="M4.313 5.25c0-.199.075-.39.21-.53a.704.704 0 01.508-.22H17.97c.19 0 .373.08.508.22s.21.331.21.53c0 .2-.075.39-.21.53a.704.704 0 01-.508.22H5.03a.704.704 0 01-.508-.22.767.767 0 01-.21-.53zm0 3.75c0-.199.075-.39.21-.53a.704.704 0 01.508-.22H17.97c.19 0 .373.08.508.22s.21.331.21.53c0 .2-.075.39-.21.53a.704.704 0 01-.508.22H5.03a.704.704 0 01-.508-.22.767.767 0 01-.21-.53zm0 3.75c0-.198.075-.39.21-.53a.704.704 0 01.508-.22h7.188c.19 0 .373.08.508.22s.21.332.21.53c0 .2-.075.39-.21.53a.704.704 0 01-.508.22H5.03a.704.704 0 01-.508-.22.767.767 0 01-.21-.53z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function BorderedLikeIcon(props: SvgProps) {
	return (
		<Svg
			width={23}
			height={21}
			viewBox="0 0 23 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M11.998 20.151c-.714-.613-1.522-1.252-2.376-1.93h-.011c-3.008-2.382-6.417-5.077-7.922-8.306a7.758 7.758 0 01-.769-3.28 5.624 5.624 0 01.463-2.244 5.777 5.777 0 011.325-1.895 5.994 5.994 0 011.98-1.248A6.145 6.145 0 017.013.841 6.984 6.984 0 0110.7 1.896c.483.303.92.67 1.298 1.09a6.38 6.38 0 011.3-1.09A6.978 6.978 0 0116.983.84a6.144 6.144 0 012.326.407c.739.284 1.412.709 1.98 1.248a5.777 5.777 0 011.325 1.895c.307.71.464 1.473.463 2.243a7.753 7.753 0 01-.77 3.286c-1.505 3.23-4.912 5.923-7.92 8.3l-.011.009a70.008 70.008 0 00-2.377 1.931v-.009zM7.013 2.987a3.986 3.986 0 00-2.77 1.064 3.582 3.582 0 00-.824 1.183c-.19.443-.287.92-.283 1.4.012.826.206 1.642.567 2.39a13.247 13.247 0 002.833 3.725c1.097 1.073 2.36 2.111 3.453 2.985.302.241.61.484.918.728l.194.154c.296.233.601.476.897.714l.015-.013.006-.005h.007l.01-.008h.011l.02-.016.045-.035.008-.007.012-.008h.007l.01-.009.736-.585.192-.153.922-.73c1.092-.874 2.356-1.911 3.454-2.99a13.23 13.23 0 002.833-3.723c.368-.755.565-1.58.576-2.414a3.488 3.488 0 00-.285-1.396 3.583 3.583 0 00-.824-1.178 3.985 3.985 0 00-2.77-1.073 4.542 4.542 0 00-1.811.36 4.417 4.417 0 00-1.5 1.046L11.997 6.26l-1.672-1.867a4.417 4.417 0 00-1.501-1.046 4.542 4.542 0 00-1.812-.36z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function BorderedStarIcon(props: SvgProps) {
	return (
		<Svg
			width={22}
			height={22}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M21.057 7.966l-6.446-.937-2.882-5.843a.816.816 0 00-1.457 0L7.388 7.03l-6.446.937a.811.811 0 00-.45 1.386l4.665 4.547-1.102 6.422a.81.81 0 001.178.855L11 18.145l5.766 3.031a.811.811 0 001.178-.856l-1.102-6.42 4.665-4.548a.81.81 0 00.236-.465.81.81 0 00-.686-.921zm-6.177 5.293l.916 5.34L11 16.08l-4.796 2.522.916-5.34-3.88-3.783 5.363-.78L11 3.842 13.397 8.7l5.362.78-3.88 3.78z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function ShopIcon(props: SvgProps) {
	return (
		<Svg
			width={22}
			height={21}
			viewBox="0 0 22 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M2.444 21h17.112C20.904 21 22 20.058 22 18.9V7.35a.981.981 0 00-.358-.742 1.33 1.33 0 00-.864-.308H17.11V5.25C17.111 2.355 14.37 0 11 0 7.63 0 4.889 2.355 4.889 5.25V6.3H1.222c-.324 0-.635.11-.864.308A.981.981 0 000 7.35V18.9C0 20.058 1.096 21 2.444 21zm4.89-15.75C7.333 3.513 8.977 2.1 11 2.1c2.022 0 3.667 1.413 3.667 3.15V6.3H7.333V5.25zM2.443 8.4H4.89v2.1h2.444V8.4h7.334v2.1h2.444V8.4h2.445l.002 10.5H2.444V8.4z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function EditIcon(props: SvgProps) {
	return (
		<Svg
			width={16}
			height={16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.256 14.422L13 6.678 9.322 3l-7.744 7.744a.836.836 0 00-.22.387L.5 15.5l4.368-.858a.835.835 0 00.388-.22zM15.5 4.178a1.666 1.666 0 000-2.356L14.178.5a1.667 1.667 0 00-2.356 0L10.5 1.822 14.178 5.5 15.5 4.178z"
				fill="#0052FF"
			/>
		</Svg>
	);
}

export function PlusIcon(props: SvgProps) {
	return (
		<Svg
			width={20}
			height={20}
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M18.462 11.054h-7.07V18.3h-3.71v-7.245H.612v-3.36h7.07V.45h3.71v7.245h7.07v3.36z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function EyeIcon(props: SvgProps) {
	return (
		<Svg
			width={16}
			height={10}
			viewBox="0 0 16 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M11.028 5.9c.13-.266.197-.55.195-.834 0-.633-.327-1.24-.91-1.687-.584-.448-1.376-.7-2.2-.7-.368.001-.732.052-1.075.15l.73.578c.11-.014.223-.021.335-.021.584-.001 1.144.175 1.559.49.414.315.65.742.654 1.19 0 .086-.01.172-.027.257l.74.578z"
				fill={props?.fill}
			/>
			<Path
				d="M15.155 4.902c-1.528-2.167-4.208-3.478-7.174-3.478a9.763 9.763 0 00-2.377.295l.73.564a8.637 8.637 0 011.647-.164c2.553 0 4.875 1.093 6.258 2.933a6.986 6.986 0 01-1.982 1.774l.644.494c.928-.575 1.699-1.284 2.268-2.087l.118-.167-.132-.164zM1.814.815l2.022 1.551C2.558 2.998 1.513 3.871.802 4.902l-.117.164.117.167C2.331 7.4 5.011 8.71 7.977 8.71c1.157 0 2.3-.201 3.342-.588l2.267 1.74.794-.523L2.59.297l-.776.518zm4.421 3.391L9.251 6.52c-.34.162-.733.249-1.134.25-.29 0-.58-.043-.848-.129a2.339 2.339 0 01-.718-.37 1.738 1.738 0 01-.478-.553 1.357 1.357 0 01-.164-.651c.005-.304.118-.601.326-.86zm-.657-.504c-.424.459-.623 1.018-.562 1.579.062.56.38 1.086.9 1.484.518.398 1.203.642 1.934.69.731.047 1.46-.106 2.059-.431l.725.556a8.563 8.563 0 01-2.657.418c-2.553 0-4.875-1.092-6.258-2.932.663-.902 1.62-1.657 2.775-2.192l1.084.828z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function BasketIcon(props: SvgProps) {
	return (
		<Svg
			width={22}
			height={21}
			viewBox="0 0 22 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M21.465 4.5a2.25 2.25 0 00-1.913-1.124h-14.4L4.5.833A1.125 1.125 0 003.375.001h-2.25a1.125 1.125 0 100 2.25H2.52l3.105 11.542a1.125 1.125 0 001.125.833h10.125a1.126 1.126 0 001.001-.62l3.69-7.38a2.251 2.251 0 00-.101-2.125zM6.188 20.25a1.687 1.687 0 100-3.374 1.687 1.687 0 000 3.375zM17.438 20.25a1.687 1.687 0 100-3.374 1.687 1.687 0 000 3.375z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function BottomArrow(props: SvgProps) {
	return (
		<Svg
			width={12}
			height={7}
			viewBox="0 0 12 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M10.114.776c.831 0 1.314.713.83 1.225L6.564 6.63a1 1 0 01-.374.242 1.299 1.299 0 01-.956-.02.96.96 0 01-.358-.255L.958 1.967c-.435-.514.052-1.19.86-1.19h8.296z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function CancelIcon(props: SvgProps) {
	return (
		<Svg
			width={15}
			height={15}
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M10.192.344L5.949 4.586 1.707.344.293 1.758 4.535 6 .293 10.242l1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L7.364 6l4.242-4.242L10.192.344z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function CatalogIcon(props: SvgProps) {
	return (
		<Svg
			width={23}
			height={16}
			viewBox="0 0 23 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.875 4.125H.25v-2.25h5.625v2.25zm0 3.375H.25v2.25h5.625V7.5zm15.289 7.875l-4.309-4.309c-.9.585-1.957.934-3.105.934a5.627 5.627 0 01-5.625-5.625A5.627 5.627 0 0113.75.75a5.627 5.627 0 015.625 5.625 5.6 5.6 0 01-.934 3.094l4.309 4.32-1.586 1.586zm-4.039-9A3.385 3.385 0 0013.75 3a3.385 3.385 0 00-3.375 3.375A3.385 3.385 0 0013.75 9.75a3.385 3.385 0 003.375-3.375zm-16.875 9H11.5v-2.25H.25v2.25z"
				fill={props?.fill}
				fillOpacity={0.7}
			/>
		</Svg>
	);
}

export function CrashIcon(props: SvgProps) {
	return (
		<Svg
			width={20}
			height={21}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.97 0c.85 0 1.667.318 2.285.888.618.57.989 1.35 1.037 2.178l.005.184h5.375c.195 0 .382.072.524.202a.739.739 0 01.071 1.021.772.772 0 01-.49.27l-.105.007h-.815l-1.31 13.02a2.725 2.725 0 01-.846 1.707c-.48.454-1.11.725-1.776.767l-.18.006h-7.55a2.856 2.856 0 01-1.824-.655 2.735 2.735 0 01-.956-1.652l-.023-.174L2.08 4.75h-.814a.779.779 0 01-.504-.185.745.745 0 01-.256-.463L.498 4a.74.74 0 01.19-.493.773.773 0 01.474-.25l.104-.007h5.376c0-.862.35-1.689.974-2.298A3.368 3.368 0 019.97 0zm6.344 4.75H3.624L4.92 17.622c.028.287.158.556.366.76.209.205.483.333.777.362l.13.006h7.55c.615 0 1.136-.425 1.255-1.002l.02-.126L16.313 4.75h.001zM11.761 7.5c.186 0 .365.066.505.185s.23.283.256.463l.007.102v7a.74.74 0 01-.207.512.78.78 0 01-1.046.07.746.746 0 01-.276-.48l-.007-.102v-7c0-.199.081-.39.225-.53.144-.141.34-.22.543-.22zm-3.583 0c.185 0 .364.066.504.185s.231.283.256.463l.007.102v7a.74.74 0 01-.206.512.78.78 0 01-1.046.07.746.746 0 01-.276-.48l-.007-.102v-7c0-.199.08-.39.225-.53.144-.141.339-.22.543-.22zm1.791-6c-.45 0-.883.165-1.213.463-.331.297-.535.705-.572 1.143l-.006.144h3.583c0-.464-.189-.91-.525-1.237A1.814 1.814 0 009.97 1.5z"
				fill={props?.fill}
				fillOpacity={0.7}
			/>
		</Svg>
	);
}

export function DeliveryIcon(props: SvgProps) {
	return (
		<Svg
			width={30}
			height={30}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path d="M4 16h12v2H4v-2zM2 11h10v2H2v-2z" fill={props?.fill} />
			<Path
				d="M29.92 16.606l-3-7A.999.999 0 0026 9h-3V7a1 1 0 00-1-1H6v2h15v12.556A3.991 3.991 0 0019.142 23h-6.284a4 4 0 100 2h6.284a3.98 3.98 0 007.716 0H29a1 1 0 001-1v-7a.998.998 0 00-.08-.394zM9 26a2 2 0 110-4 2 2 0 010 4zm14-15h2.34l2.144 5H23v-5zm0 15a2 2 0 110-3.999A2 2 0 0123 26zm5-3h-1.142A3.995 3.995 0 0023 20v-2h5v5z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function DotBorderIcon(props: SvgProps) {
	return (
		<Svg
			width={15}
			height={15}
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle cx={7.5} cy={7.5} r={7} stroke="#717171" />
		</Svg>
	);
}

export function EnteredDotIcon(props: SvgProps) {
	return (
		<Svg
			width={15}
			height={15}
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle cx={7.5} cy={7.5} r={7} stroke="#0052FF" />
			<Circle cx={7.5} cy={7.5} r={4.5} fill={props?.fill} />
		</Svg>
	);
}

export function FbIcon(props: SvgProps) {
	return (
		<Svg
			width={14}
			height={28}
			viewBox="0 0 14 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M12.426 15.862l.649-4.835H9.017V7.889c0-1.323.567-2.612 2.384-2.612h1.845V1.16S11.572.834 9.971.834C6.63.834 4.447 3.15 4.447 7.342v3.685H.733v4.835h3.714v11.69h4.57v-11.69h3.409z"
				fill="#fff"
			/>
		</Svg>
	);
}

export function FilterIcon(props: SvgProps) {
	return (
		<Svg
			width={13}
			height={14}
			viewBox="0 0 13 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M7.525 12.808a.7.7 0 00.392-.627V8.413c0-.186.074-.365.207-.496l4.336-4.289c.265-.262.415-.62.415-.991V.827a.705.705 0 00-.708-.702H.833a.704.704 0 00-.708.701v1.81c0 .373.15.73.415.992l4.336 4.289a.697.697 0 01.207.496v4.47c0 .52.554.858 1.025.625l1.417-.7z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function GeoIcon(props: SvgProps) {
	return (
		<Svg
			width={18}
			height={18}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M15.627.124L1.01 6.871c-1.686.787-1.124 3.26.675 3.26h6.184v6.185c0 1.799 2.474 2.361 3.26.674l6.747-14.617c.562-1.35-.9-2.811-2.249-2.249z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function GmailIcon(props: SvgProps) {
	return (
		<Svg
			width={25}
			height={19}
			viewBox="0 0 25 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M24.322 1.757v14.806c0 .84-.637 1.481-1.472 1.481h-1.472V4.606l-8.833 6.382-8.832-6.382v13.438H2.24c-.835 0-1.472-.64-1.472-1.48V1.756A1.452 1.452 0 012.24.277h.491l9.814 7.156L22.36.276h.49a1.45 1.45 0 011.473 1.48z"
				fill="#fff"
			/>
		</Svg>
	);
}

export function HeartIcon(props: SvgProps) {
	return (
		<Svg
			width={18}
			height={16}
			viewBox="0 0 18 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9 15.5c-.537-.477-1.145-.973-1.787-1.5h-.009c-2.262-1.85-4.826-3.943-5.959-6.452A6.19 6.19 0 01.667 5 4.492 4.492 0 015.25.5a5.132 5.132 0 012.773.82c.364.235.692.52.977.847a4.84 4.84 0 01.978-.848A5.127 5.127 0 0112.75.5 4.492 4.492 0 0117.333 5a6.186 6.186 0 01-.578 2.552c-1.132 2.509-3.696 4.601-5.958 6.448l-.009.007c-.643.524-1.25 1.02-1.787 1.5V15.5zM5.25 2.167a2.946 2.946 0 00-2.083.826A2.785 2.785 0 002.333 5c.01.642.155 1.275.427 1.857A10.264 10.264 0 004.89 9.75c.827.833 1.777 1.64 2.598 2.318l.691.566.146.12c.223.181.453.37.675.554l.01-.01.006-.004h.005l.007-.006h.009l.015-.012.034-.028.006-.005.009-.006h.005l.007-.007.554-.454.145-.12c.234-.19.466-.38.693-.567.822-.678 1.773-1.484 2.598-2.322a10.25 10.25 0 002.131-2.892A4.536 4.536 0 0015.668 5a2.786 2.786 0 00-.835-2 2.946 2.946 0 00-2.083-.833 3.324 3.324 0 00-2.492 1.092L9 4.71 7.742 3.26A3.323 3.323 0 005.25 2.167z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function HomeIcon(props: SvgProps) {
	return (
		<Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
			<Path
				d="M8.25 18.375V12.75h4.5v5.625c0 .619.506 1.125 1.125 1.125h3.375c.619 0 1.125-.506 1.125-1.125V10.5h1.912c.518 0 .765-.641.372-.979L11.254 1.05a1.134 1.134 0 00-1.508 0L.341 9.52a.56.56 0 00.371.979h1.913v7.875c0 .619.506 1.125 1.125 1.125h3.375c.619 0 1.125-.506 1.125-1.125z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function LeftArrow(props: SvgProps) {
	return (
		<Svg
			width={18}
			height={15}
			viewBox="0 0 18 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.25 1.583L2.5 7.433l6.75 5.85m8.25-5.85h-15 15z"
				stroke="#0052FF"
				strokeWidth={2}
			/>
		</Svg>
	);
}

export function LikeIcon(props: SvgProps) {
	return (
		<Svg
			width={23}
			height={20}
			viewBox="0 0 23 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M16.556.039c-2.176 0-4.036 1.551-5.058 2.621C10.476 1.59 8.62.039 6.445.039 2.695.039.077 2.653.077 6.394c0 4.123 3.251 6.788 6.397 9.365 1.485 1.218 3.022 2.477 4.2 3.873.199.233.49.368.795.368h.06c.306 0 .596-.136.793-.368 1.181-1.396 2.717-2.656 4.203-3.873 3.145-2.576 6.398-5.24 6.398-9.365 0-3.741-2.618-6.355-6.367-6.355z"
				fill={props?.fill}
				fillOpacity={0.7}
			/>
		</Svg>
	);
}

export function OkIcon(props: SvgProps) {
	return (
		<Svg
			width={35}
			height={23}
			viewBox="0 0 35 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			{...props}
		>
			<Path
				fill="url(#pattern0)"
				d="M0.187256 0.795898H34.045656V22.265898H0.187256z"
			/>
			<Defs>
				<Pattern
					id="pattern0"
					patternContentUnits="objectBoundingBox"
					width={1}
					height={1}
				>
					<Use
						xlinkHref="#image0_0_64"
						transform="matrix(.00118 0 0 .00186 -.105 0)"
					/>
				</Pattern>
				<Image
					id="image0_0_64"
					width={1024}
					height={537}
					xlinkHref="data:image/png;base64,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ESIAESIAES6A2BWCdgrogsDSEsE5F/pqpnmdliEVkgIqdGZ0DdDgFU8cfPERE5pKr7zewfkOPvvd8T/x8cArxIgARIgARIoDICdABUhpIDkQAJkAAJkAAJpETAzHDyP19EUDjwjJge8D+o6mIzWxj/DREC+JnWIfBB3OwfNrN3nHOHzOyAiPzXEMK+wWBwCG39WNQvpRVEWUmABEggPQJ0AKRnM0pMAiRAAiRAAiRQMYFYL2DoEJhfFMVCVV2EHxH5JyKC/54fQpivqsO0gZOP4xhAKH9hZu85595DSD82/HFz//+Y2Vvee2z08XM4OgUKhvhXbFAORwIkQAIkcFwCdABwYZAACZAACZAACZDAMQRiqgBO/VEsED/Y7MNBgB/8Hf9vblEUn+gsMBgMELaPHzgC8IOT/+Hfh2H/gRt+LjkSIAESIIE2CNAB0AZ1zkkCJEACJEACJEACJEACJEACJEACDROgA6Bh4JyOBEiABEiABEiABEiABEiABEiABNogQAdAG9Q5JwmQAAmQAAmQAAmQAAmQAAmQAAk0TIAOgIaBczoSIAESIAESIAESIAESIAESIAESaIMAHQBtUOecJEACJEACJEACJEACJEACJEACJNAwAToAGgbO6UiABEiABEiABEiABEiABEiABEigDQJ0ALRBnXOSAAmQAAmQAAmQAAmQAAmQAAmQQMME6ABoGDinIwESIAESIAESIAESIAESIAESIIE2CNAB0AZ1zkkCJEACJEACJEACJEACJEACJEACDROgA6Bh4JyOBEiABEiABEiABEiABEiABEiABNogQAdAG9Q5JwmQAAmQAAmQAAmQAAmQAAmQAAk0TIAOgIaBczoSIAESIAESIAESIAESIAESIAESaIMAHQBtUOecJEACJEACJEACJEACJEACJEACJNAwAToAGgbO6UiABEiABEiABEiABEiABEiABEigDQJ0ALRBnXOSAAmQAAmQAAmQAAmQAAmQAAmQQMME6ABoGDinIwESIAESIAESIAESIAESIAESIIE2CNAB0AZ1zkkCJEACJEACJEACJEACJEACJEACDROgA6Bh4JyOBP7/duyYBgAAgEGYf9dzMZ4qIOkJAQIECBAgQIAAAQIECBQCBkChrkmAAAECBAgQIECAAAECBM4CBsAZXI4AAQIECBAgQIAAAQIECBQCBkChrkmAAAECBAgQIECAAAECBM4CBsAZXI4AAQIECBAgQIAAAQIECBQCBkChrkmAAAECBAgQIECAAAECBM4CBsAZXI4AAQIECBAgQIAAAQIECBQCBkChrkmAAAECBAgQIECAAAECBM4CBsAZXI4AAQIECBAgQIAAAQIECBQCBkChrkmAAAECBAgQIECAAAECBM4CBsAZXI4AAQIECBAgQIAAAQIECBQCBkChrkmAAAECBAgQIECAAAECBM4CA3IicekeBSU8AAAAAElFTkSuQmCC"
				/>
			</Defs>
		</Svg>
	);
}

export function PersonBorderIcon(props: SvgProps) {
	return (
		<Svg
			width={20}
			height={21}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M10 .407a5.417 5.417 0 100 10.833A5.417 5.417 0 0010 .407zm0 8.666a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm9.75 11.917v-1.083a7.583 7.583 0 00-7.583-7.584H7.833A7.583 7.583 0 00.25 19.907v1.083h2.167v-1.083a5.416 5.416 0 015.416-5.417h4.334a5.416 5.416 0 015.416 5.417v1.083h2.167z"
				fill="#000"
			/>
		</Svg>
	);
}

export function PersonIcon(props: SvgProps) {
	return (
		<Svg
			width={21}
			height={22}
			viewBox="0 0 21 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.063 5.063a5.069 5.069 0 005.062 5.062 5.069 5.069 0 005.063-5.063A5.069 5.069 0 0010.125 0a5.069 5.069 0 00-5.063 5.063zm14.062 16.312h1.125V20.25c0-4.341-3.534-7.875-7.875-7.875h-4.5C3.533 12.375 0 15.909 0 20.25v1.125h19.125z"
				fill={props?.fill}
				fillOpacity={0.7}
			/>
		</Svg>
	);
}

export function PinIcon(props: SvgProps) {
	return (
		<Svg
			width={14}
			height={14}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M12.22 1.456C10.38-.2 7.386-.2 5.548 1.456L.449 6.04a.15.15 0 000 .225l.72.649c.034.03.078.046.125.046a.186.186 0 00.124-.046L6.516 2.33c.632-.57 1.474-.883 2.369-.883.894 0 1.736.313 2.367.883.633.569.98 1.327.98 2.13 0 .805-.347 1.56-.98 2.13l-5.195 4.675-.842.757c-.787.708-2.067.708-2.854 0a1.715 1.715 0 01-.59-1.283c0-.485.21-.94.59-1.283l5.155-4.637a.73.73 0 01.486-.181h.002c.183 0 .353.065.482.18.131.118.201.273.201.438a.583.583 0 01-.2.434L4.272 9.48a.15.15 0 000 .225l.721.648c.033.03.078.046.124.046a.186.186 0 00.124-.046l4.211-3.79c.389-.35.602-.814.602-1.307 0-.494-.215-.96-.602-1.308-.803-.723-2.107-.721-2.91 0l-.5.451L1.39 8.584a3.029 3.029 0 00-.737.989c-.17.37-.257.767-.256 1.168 0 .814.354 1.578.993 2.153.662.594 1.529.891 2.396.891s1.734-.297 2.395-.891l6.039-5.432c.888-.801 1.38-1.868 1.38-3.002.002-1.136-.49-2.203-1.38-3.004z"
				fill="#999"
			/>
		</Svg>
	);
}

export function RightArrow(props: SvgProps) {
	return (
		<Svg
			width={8}
			height={12}
			viewBox="0 0 8 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M2 0L.59 1.41 5.17 6 .59 10.59 2 12l6-6-6-6z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function SearchIcon(props: SvgProps) {
	return (
		<Svg
			width={18}
			height={18}
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.005 13.52l5.605 5.604a1.05 1.05 0 11-1.487 1.486l-5.604-5.605a8.334 8.334 0 111.485-1.485h.001zm-6.588 1.147a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5z"
				fill={props?.fill}
			/>
		</Svg>
	);
}

export function SendIcon(props: SvgProps) {
	return (
		<Svg
			width={18}
			height={17}
			viewBox="0 0 18 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M16.2.173L1.489 6.733c-1.005.465-.999 1.113-.185 1.402l3.778 1.362 8.74-6.375c.413-.29.79-.134.48.184l-7.08 7.388h-.002.001l-.26 4.502c.381 0 .55-.203.764-.441l1.835-2.063 3.816 3.259c.704.448 1.21.218 1.384-.753l2.506-13.649C17.52.36 16.872-.178 16.2.173z"
				fill={props?.fill}
				fillOpacity={0.5}
			/>
		</Svg>
	);
}

export function StarIcon(props: SvgProps) {
	return (
		<Svg
			width={11}
			height={10}
			viewBox="0 0 11 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.81 1.373l.897 2.293.113.289.309.027 2.39.212-1.843 1.698-.211.195.062.28.547 2.484-1.992-1.295-.272-.177-.273.177-1.992 1.295.548-2.484.062-.28-.212-.195-1.842-1.698 2.39-.212.309-.027.112-.289.898-2.293z"
				fill={props?.fill}
				stroke="#0052FF"
			/>
		</Svg>
	);
}

export function TopArrow(props: SvgProps) {
	return (
		<Svg
			width={16}
			height={16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 0l5.359 5.274-.872.857L8.615 2.32v11.258h-1.23V2.319L3.513 6.13l-.872-.857L8 0zm8 14.789V16H0v-1.211h16z"
				fill={props?.fill}
			/>
		</Svg>
	);
}
