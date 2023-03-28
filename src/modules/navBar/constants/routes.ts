export enum Routes {
	main = "/",
	news = "/news"
}

interface NavBarItem {
	title: string
	to: Routes
}

export const navBarItems: NavBarItem[] = [
	{
		title: "0984664551",
		to: Routes.main
	},
	{
		title: "київ",
		to: Routes.main
	},
	{
		title: "піца",
		to: Routes.main
	},
	{
		title: "новини",
		to: Routes.news
	}
]
