"use client";
import { useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";

// declare global {
// 	interface Window {
// 		Tawk_API: any;
// 		Tawk_LoadStart: any;
// 	}
// }

interface LiveChatButtonProps {
	onClick: () => void;
}

const LiveChatButton: React.FC<LiveChatButtonProps> = ({ onClick }) => {
	useEffect(() => {
		// Load the Tawk.to script
		var Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = new Date();
		(function () {
			var s1 = document.createElement("script");
			var s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = "https://embed.tawk.to/68a11ac79a68c0192a7e29fe/1j2ql17mi"; // your ID
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			s0.parentNode?.insertBefore(s1, s0);
		})();

		// hide default widget when loaded
		window.Tawk_API = {
			onLoad: function () {
				window.Tawk_API.hideWidget();
			},
		};
	}, []);

	return (
		<button
			onClick={onClick}
			className='bg-red-900 text-white px-5 py-2 rounded-lg hover:bg-red-900 flex items-center justify-center gap-2 text-sm sm:text-base shadow-md'>
			<FiMessageSquare className='text-lg' />
			Live Chat
		</button>
	);
};

export default LiveChatButton;
