import {
	Avatar,
	Badge,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	PaletteColor,
	Typography,
	styled,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import "@types/themeStyles";
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
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import userImage1 from "@/assets/a0.jpg";

const drawerWidth = 240;

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

	const navItems = [
		{ title: "Main", icon: null, subItems: null },
		{ title: "Dashboard", icon: <Looks />, subItems: null },
		{ title: "Apps", icon: <Apps />, subItems: ["Inbox", "Contacts", "Calendar"] },
		{ title: "Layouts", icon: <ViewModule />, subItems: ["Header", "Aside", "Footer"] },
		{ title: "Widgets", icon: <Notes />, subItems: null },
		{ title: "Components", icon: null, subItems: null },
		{
			title: "UI Kit",
			icon: <Tune />,
			subItems: [
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
			title: "Pages",
			icon: <Flip />,
			subItems: [
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
			title: "Form",
			icon: <AdjustRounded />,
			subItems: [
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
		{ title: "Tables", icon: <ListIcon />, subItems: ["Static table", "Datatable", "Footable"] },
		{ title: "Charts", icon: <Fitbit />, subItems: ["Chart", "Echarts"] },
		{ title: "Help", icon: null, subItems: null },
		{ title: "Documents", icon: null, subItems: null },
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
					variant="h6"
					fontSize={"1.25rem"}
					width={"100%"}
					padding={"1rem"}
				>
					Flatkit
				</Typography>
			</DrawerHeader>
			<List sx={{ padding: 0 }}>
				{navItems.map((item, index) => (
					<ListItem
						key={index}
						sx={{
							padding: "0 1rem",
						}}
					>
						{!item.icon ? (
							<ListItemText
								primary={item.title}
								color={theme.palette.primary.main}
								sx={{
									"& .MuiListItemText-primary": {
										fontSize: "0.875rem",
										opacity: "0.75",
									},
								}}
							/>
						) : (
							<ListItemButton
								sx={{
									padding: "0.5rem 0",
								}}
							>
								<ListItemIcon
									sx={{
										opacity: "0.75",
										color: theme.palette.primary.main,
										minWidth: "3rem",
									}}
								>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									primary={item.title}
									sx={{
										margin: 0,
										"& .MuiListItemText-primary": {
											fontSize: "0.875rem",
											opacity: "0.75",
										},
									}}
								/>
							</ListItemButton>
						)}
					</ListItem>
				))}
			</List>
			<Box
				marginTop={"auto"}
				borderTop={`1px solid rgba(120, 130, 140, 0.13)`}
				padding={"0.875rem 1rem"}
			>
				<Box
					display={"flex"}
					gap={"1rem"}
				>
					<Avatar
						alt="Jean Reyes"
						src={userImage1}
					/>
					<Box
						flexGrow={1}
						display={"flex"}
						flexDirection={"column"}
					>
						<Typography
							fontWeight={"bold"}
							fontSize={"0.875rem"}
						>
							Jean Reyes
						</Typography>
						<Box
							display={"flex"}
							justifyContent={"start"}
							alignItems={"center"}
						>
							<Box
								sx={{
									width: "10px",
									height: "10px",
									backgroundColor: theme.palette.success.main,
									marginRight: "0.5rem",
									borderRadius: "100%",
								}}
							/>
							<Typography
								textTransform={"lowercase"}
								fontSize={"0.875rem"}
								sx={{
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
