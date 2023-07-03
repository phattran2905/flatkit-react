import React from "react";

export type NavItem = {
	name: string;
	icon?: React.ReactNode;
	badge?: number | string;
	subNavItems?: string[];
};
