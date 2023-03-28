const routes = {
	Набори: "/pack",
	Акція: "/action",
	Піца: "/piza",
	Напої: "/drinks",
	Сайди: "/sides",
	Десерти: "/dessert"
} as const

type Routes = typeof routes[keyof typeof routes]

interface HeaderItem {
	title: string
	to: Routes
}

const getHeaderItem = (routes: any) => {
	const resultArray: HeaderItem[] = []
	for (const key in routes) {
		const obj: HeaderItem = {
			title: key,
			to: routes[key]
		}
		resultArray.push(obj)
	}
	return resultArray
}

export const headerItems = getHeaderItem(routes)
