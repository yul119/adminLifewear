import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        '/admin/orders?page=1&fbclid=IwAR1YtginWmf3nAPZIKLQr2czceAuTC38OZkqMcHxKuf1IzqGA_-GikEkqO8'
      )
      .then((response) => setData([...response.data.data]));
  }, []);
  const rows = data
    .map((el) => {
      const row = {};
      row.id = el.buyer.id;
      row.customer = el.buyer.full_name;
      row.phone = el.phone;
      row.date = el.created_at.slice(0, 10);
      row.method = el.payment_method;
      row.status = el.status;
      row.amount = el.order_products.reduce(
        (total, p) =>
          parseInt(p.buy_quantity) * parseInt(p.price),
        0
      );
      return row;
    })
    .slice(0, 10);
  return (
    <TableContainer component={Paper} className="table">
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              Khách hàng
            </TableCell>
            <TableCell className="tableCell">
              Số điện thoại
            </TableCell>
            <TableCell className="tableCell">
              Ngày mua
            </TableCell>
            <TableCell className="tableCell">
              Tổng hóa đơn
            </TableCell>
            <TableCell className="tableCell">
              Phương thức thanh toán
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                {row.customer}
              </TableCell>
              <TableCell className="tableCell">
                {row.phone}
              </TableCell>
              <TableCell className="tableCell">
                {row.date}
              </TableCell>
              <TableCell className="tableCell">
                {row.amount} vnd
              </TableCell>
              <TableCell className="tableCell">
                {row.method}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
