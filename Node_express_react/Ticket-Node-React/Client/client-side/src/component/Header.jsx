import React from "react";
import { Stack, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
function Header() {
    const isLoggedin = true;
    const navigate = useNavigate();
    return (
      <>
        {isLoggedin ? (
          <Toolbar
            sx={{
              justifyContent: "end",
              paddingRight: "20px",
              paddingTop: "10px",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              height: "1px",
            }}
          >
            <Stack spacing={4} direction="row">
              <Avatar sx={{ bgcolor: red[300] }} aria-label="recipe">
                A
              </Avatar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/login" className="link-navigate">
                  LogOut
                </Link>
              </Typography>
            </Stack>
          </Toolbar>
        ) : (
          navigate("/login")
        )}
      </>
    );
}

export default Header;
