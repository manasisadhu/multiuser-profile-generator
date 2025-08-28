import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { AuroraText } from "../magicui/aurora-text";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";

const Header = () => {
	return (
		<header
			className="border-b shadow"
			aria-label="app-header">
			<div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<div className="flex items-center gap-2">
					<Link href={"/"}>
						<h1
							className="text-2xl font-semibold"
							aria-label="Logo Name">
							<AuroraText>MultiUserCard</AuroraText>
						</h1>
					</Link>
					<div className="block md:hidden">
						<ThemeToggleButton />
					</div>
				</div>
				<div className="hidden gap-4 md:flex">
					<Desktopnav />
					<ThemeToggleButton />
				</div>

				<div className="block md:hidden">
					<Mobilenav />
				</div>
			</div>
		</header>
	);
};

export default Header;
