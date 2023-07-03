import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Badge,
	Box,
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Theme,
	useTheme,
} from "@mui/material";
import { useState } from "react";

type Props = {
	name: string;
	subNavItems?: string[];
	icon?: React.ReactNode;
	badge?: number | string;
	theme?: Theme;
};

function NavItemHasChildren({ name, subNavItems, icon, badge, theme }: Props) {
	const [open, setOpen] = useState(false);

	const toggleSubItems = () => setOpen(!open);

	return (
		<List component="div">
			<ListItemButton
				onClick={toggleSubItems}
				sx={{
					padding: "0.5rem 1.25rem",
					"&:hover .MuiListItemText-primary, &:hover .MuiListItemIcon-root, ": {
						opacity: 1,
					},
				}}
			>
				<Box
					flexGrow={1}
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<ListItemIcon
						sx={{
							opacity: "0.75",
							color: theme?.palette.primary.main,
							minWidth: "3rem",
						}}
					>
						{icon}
					</ListItemIcon>
					<ListItemText primary={name} />
					<Box
						component={"div"}
						display={"flex"}
						alignItems={"center"}
						gap={"0.8rem"}
					>
						<Badge
							badgeContent={badge}
							color={"info"}
							sx={{
								".MuiBadge-badge": {
									fontSize: "0.75rem",
								},
							}}
						/>
						{open ? <ExpandLess /> : <ExpandMore />}
					</Box>
				</Box>
			</ListItemButton>
			<Collapse
				in={open}
				timeout="auto"
				unmountOnExit
			>
				<List
					component="div"
					disablePadding
				>
					{subNavItems?.map((subNavItem, index) => (
						<ListItemButton sx={{ pl: 8 }}>
							<ListItemText
								key={index}
								primary={subNavItem}
								sx={{
									"& .MuiListItemText-primary": {
										opacity: "0.5",
									},
								}}
							/>
						</ListItemButton>
					))}
				</List>
			</Collapse>
		</List>
	);
}

function NavItemOnly({ name, icon, theme }: Props) {
	return (
		<ListItemButton
			sx={{
				padding: "0.5rem 1.25rem",
				"&:hover .MuiListItemText-primary, &:hover .MuiListItemIcon-root, ": {
					opacity: 1,
				},
			}}
		>
			<ListItemIcon
				sx={{
					opacity: "0.75",
					color: theme?.palette.primary.main,
					minWidth: "3rem",
				}}
			>
				{icon}
			</ListItemIcon>
			<ListItemText
				primary={name}
				sx={{
					margin: 0,
					"& .MuiListItemText-primary": {
						opacity: "0.75",
					},
				}}
			/>
		</ListItemButton>
	);
}

function NavItem({ name, subNavItems, icon, badge }: Props) {
	const theme = useTheme();

	return subNavItems ? (
		<NavItemHasChildren
			name={name}
			subNavItems={subNavItems}
			icon={icon}
			badge={badge}
			theme={theme}
		/>
	) : (
		<NavItemOnly
			name={name}
			icon={icon}
			theme={theme}
		/>
	);
}
export default NavItem;
