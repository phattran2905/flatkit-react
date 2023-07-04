import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Box, styled, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const drawerWidth = 250;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

function Layout() {
	const [isSideBarOpen, setIsSidebarOpen] = useState(true);
	const isNonMobile = useMediaQuery("(min-width:992px)");

	useEffect(() => {
		setIsSidebarOpen(isNonMobile);
	}, [isNonMobile]);

	return (
		<Box
			display={isNonMobile ? "flex" : "block"}
			width={"100%"}
			height={"100%"}
		>
			<Sidebar
				drawerWidth={drawerWidth}
				isSideBarOpen={isSideBarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<Box sx={{ flexGrow: 1 }}>
				<Navbar
					isSideBarOpen={isSideBarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
				<Outlet />
			</Box>
		</Box>
	);
}
export default Layout;
