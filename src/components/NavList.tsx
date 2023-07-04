import { NavItem as NavItemType } from "@/types/nav";
import { List, ListSubheader, useTheme } from "@mui/material";
import NavItem from "./NavItem";

type Props = {
	title: string;
	navItems?: NavItemType[];
};
function NavList({ title, navItems }: Props) {
	const theme = useTheme();
	return (
		<List
			component="nav"
			aria-labelledby={`${title}-navlist`}
			subheader={
				<ListSubheader
					component="span"
					id={title}
					sx={{
						opacity: "0.75",
						color: theme.palette.primary.main,
					}}
				>
					{title}
				</ListSubheader>
			}
		>
			{navItems?.map((item, index) => (
				<NavItem
					key={index}
					{...item}
				/>
			))}
		</List>
	);
}
export default NavList;
