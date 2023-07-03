import {
	Avatar,
	Badge,
	Box,
	Collapse,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Typography,
	styled,
	useTheme,
} from "@mui/material";
import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Inbox as InboxIcon,
	Mail as MailIcon,
	Looks,
	Apps,
	ViewModule,
	Notes,
	Tune,
	Flip,
	AdjustRounded,
	List as ListIcon,
	Fitbit,
	Menu as MenuIcon,
} from "@mui/icons-material";
// import "@types/themeStyles";
import { useEffect, useState } from "react";
import userImage1 from "@/assets/a0.jpg";
import NavList from "./NavList";
import { NavItem as NavItemType } from "@/types/nav";

const drawerWidth = 250;

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

type Props = {
	isSideBarOpen: boolean;
	setIsSidebarOpen: (value: boolean) => void;
};
function Sidebar({ isSideBarOpen, setIsSidebarOpen }: Props) {
	const theme = useTheme();
	const navList: Array<{ title: string; navItems?: NavItemType[] }> = [
		{
			title: "Main",
			navItems: [
				{ name: "Dashboard", icon: <Looks /> },
				{
					name: "Apps",
					icon: <Apps />,
					badge: 5,
					subNavItems: ["Inbox", "Contacts", "Calendar"],
				},
				{ name: "Layouts", icon: <ViewModule />, subNavItems: ["Header", "Aside", "Footer"] },
				{ name: "Widgets", icon: <Notes /> },
			],
		},
		{
			title: "Components",
			navItems: [
				{
					name: "UI Kit",
					icon: <Tune />,
					badge: 8,
					subNavItems: [
						"Arrow",
						"Box",
						"Button",
						"Color",
						"Dropdown",
						"Grid",
						"Icon",
						"Label",
						"List Group",
						"Modal",
						"Nav",
						"Progress",
						"Social",
						"Sortable",
						"Streamline",
						"Timeline",
						"Vector Map",
					],
				},
				{
					name: "Pages",
					icon: <Flip />,
					subNavItems: [
						"Profile",
						"Setting",
						"Search",
						"FAQ",
						"Gallery",
						"Invoice",
						"Price",
						"Blank",
						"Sign In",
						"Sign Up",
						"Forgot Password",
						"Lockme Screen",
						"Error 404",
						"Error 500",
					],
				},
				{
					name: "Form",
					icon: <AdjustRounded />,
					subNavItems: [
						"Form Layout",
						"Form Element",
						"Form Validation",
						"Select",
						"Editor",
						"Picker",
						"Wizard",
						"File Upload",
					],
				},
				{
					name: "Tables",
					icon: <ListIcon />,
					subNavItems: ["Static table", "Datatable", "Footable"],
				},
				{ name: "Charts", icon: <Fitbit />, badge: "N", subNavItems: ["Chart", "Echarts"] },
			],
		},
		{ title: "Help" },
		{ title: "Documents" },
	];

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
					color: theme.palette.custom.white,
				},
			}}
			variant="persistent"
			anchor="left"
			open={isSideBarOpen}
		>
			<DrawerHeader
				theme={theme}
				sx={{
					justifyContent: "start",
				}}
			>
				<Typography
					fontSize={"1.6rem"}
					fontWeight={"bold"}
					padding={"1rem"}
				>
					Flatkit
				</Typography>
			</DrawerHeader>

			{/* NavList */}
			{navList.map((item, index) => (
				<NavList
					key={index}
					title={item.title}
					navItems={item?.navItems}
				/>
			))}

			{/* User Avatar */}
			<Box
				marginTop={"auto"}
				borderTop={`1px solid rgba(120, 130, 140, 0.13)`}
				padding={"0.875rem 1rem"}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					gap={"1.5rem"}
				>
					<Avatar
						alt="Jean Reyes"
						src={userImage1}
						sx={{
							width: 50,
							height: 50,
						}}
					/>
					<Box
						display={"flex"}
						flexDirection={"column"}
					>
						<Typography
							fontWeight={"bold"}
							fontSize={"1rem"}
							sx={{ opacity: "0.75" }}
						>
							Jean Reyes
						</Typography>
						<Box
							display={"flex"}
							justifyContent={"start"}
							alignItems={"center"}
							marginTop="2px"
						>
							<Box
								sx={{
									width: "14px",
									height: "14px",
									backgroundColor: theme.palette.success.main,
									marginRight: "0.75rem",
									borderRadius: "100%",
								}}
							/>
							<Typography
								textTransform={"lowercase"}
								sx={{
									fontSize: "0.9rem",
									opacity: "0.75",
								}}
							>
								Online
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Drawer>
	);
}
export default Sidebar;
