import "./breadcrumbs.scss";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { capitalizeFirstLetter } from "../../lib/helper";

export default function MyBreadcrumbs({ url }) {
  const arr = url.split("/");
  arr.  shift();
  const currentRoute = arr.pop();
  // console.log(
  // "🚀 ~ file: Breadcrumbs.jsx ~ line 12 ~ MyBreadcrumbs ~ arr",
  // arr
  // );
  // console.log(
  // "🚀 ~ file: Breadcrumbs.jsx ~ line 12 ~ MyBreadcrumbs ~ currentRoute",
  // currentRoute
  // );
  const arr2 = [];

  for (let i = 0; i <arr.length - 1; i++) {
    const arr3 = [];
    for (let j = 0; j <= i; i++) {
      arr3.push(arr[j]);
    }
    arr2.push(arr3);
  }
  // console.log(
  // "🚀 ~ file: Breadcrumbs.jsx ~ line 20 ~ MyBreadcrumbs ~ arr2",
  // arr2
  // );
  return (
    <div role="presentation" className="myBreadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          DASHBOARD
        </Link>
        {arr2 !== [] &&
          arr2.map((el) => {
            const subUrl = el.join("/");
            return (
              <Link
                underline="hover"
                color="inherit"
                href={subUrl}
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
