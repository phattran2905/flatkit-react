import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

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
