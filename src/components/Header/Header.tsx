import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import Getinput from "../Fetchelements/Getinput";
import { AuroraText } from "../magicui/aurora-text";

const Header = () => {
	return (
		<header
			className="border-b shadow"
			aria-label="app-header">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<div className="flex items-center justify-center gap-5">
					<Link href={"/"}>
						<h1
							className="text-xl font-semibold md:text-2xl"
							aria-label="App Name">
							<AuroraText>MULTI-USER-CARD</AuroraText>
						</h1>
					</Link>
					<div className="md:hidden">
						<ThemeToggleButton />
					</div>
				</div>
				<Getinput />
				<nav className="hidden items-center gap-4 md:flex">
					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
