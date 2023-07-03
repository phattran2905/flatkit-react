import {
	Avatar,
	Badge,
	Box,
	Collapse,
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
	StarBorder,
	ExpandLess,
	ExpandMore,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import userImage1 from "@/assets/a0.jpg";

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
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

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
					fontSize={"1.6rem"}
					fontWeight={"bold"}
					padding={"1rem"}
				>
					Flatkit
				</Typography>
			</DrawerHeader>
			<List>
				{navItems.map((item, index) => (
					<ListItem
						key={index}
						disablePadding
					>
						{!item.icon ? (
							<Typography
								variant="body1"
								sx={{
									opacity: "0.75",
									marginY: "0.75rem",
									color: theme.palette.primary.main,
									padding: "0 1.25rem",
									fontSize: "0.9rem",
								}}
							>
								{item.title}
							</Typography>
						) : (
							<ListItemButton
								sx={{
									padding: "0.75rem 1.25rem",
									"&:hover .MuiListItemText-primary, &:hover .MuiListItemIcon-root, ": {
										opacity: 1,
									},
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
											opacity: "0.75",
										},
									}}
								/>
							</ListItemButton>
						)}
					</ListItem>
				))}
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Inbox" />
					{open ? <ExpandLess /> : <ExpandMore />}
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
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText primary="Starred" />
						</ListItemButton>
					</List>
				</Collapse>
			</List>

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
