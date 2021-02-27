import { Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const pageRoutes = ["buttons", "cards", "typos", "home"];

const Nav = (props: Props) => {
  return (
    <Paper className="p-3 m-5">
      <div className="py-2">
        <h4>COMPONET PAGES NAV</h4>
        {pageRoutes.map((x) => (
          <Link key={x} to={"/" + x}>
            <span className="font-menu text-lg mr-3">{x}</span>
          </Link>
        ))}
      </div>
    </Paper>
  );
};

export default Nav;
