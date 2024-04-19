"use client";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuIcon } from "@/components/ui/icons";
import { useSidebarContext } from "@/components/contexts/appContext";
import { AccountMenu } from "@/components/ui/accountMenu";

export const Header = () => {
  const { drawerWidth, isClosing, isMobileOpen, setMobileOpen } =
    useSidebarContext();

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!isMobileOpen);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: { md: `${drawerWidth}px` },
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" }, color: "blue" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, color: "blue" }}
        >
          Brand Logo
        </Typography>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
};
