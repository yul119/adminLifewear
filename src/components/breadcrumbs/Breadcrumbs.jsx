import "./breadcrumbs.scss";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { capitalizeFirstLetter } from "../../lib/helper";

export default function MyBreadcrumbs({ url }) {
  const arr = url.split("/");
  arr.shift();
  const currentRoute = arr.pop();
  const arr2 = [];

  const arr3 = arr.map((el) => {
    arr2.push(el);
    return [...arr2];
  });
  console.log(
    "🚀 ~ file: Breadcrumbs.jsx ~ line 20 ~ MyBreadcrumbs ~ arr2",
    arr3
  );
  return (
    <div role="presentation" className="myBreadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          DASHBOARD
        </Link>
        {arr3 !== [] &&
          arr3.map((el) => {
            const subUrl = el.join("/");
            return (
              <Link
                underline="hover"
                color="inherit"
                href={`/${subUrl}`}
              >
                {capitalizeFirstLetter(el[el.length - 1])}
              </Link>
            );
          })}
        <Typography color="text.primary">
          {capitalizeFirstLetter(currentRoute)}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
