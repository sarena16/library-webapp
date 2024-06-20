import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Loan.css';

interface LoanProps {
  loanId: number;
  bookTitle: string;
  borrowerName: string;
  borrowDate: Date;
  returnDate: Date | null;
}

const Loan = ({
  loanId,
  bookTitle,
  borrowerName,
  borrowDate,
  returnDate,
}: LoanProps) => {
  return (
    <Card className="loan">
      <CardContent className="loan-info">
        <Typography variant="h6">{bookTitle}</Typography>
        <Typography variant="subtitle1">{borrowerName}</Typography>
        <Typography variant="body2" color="textSecondary">
          Borrowed on: {new Date(borrowDate).toLocaleDateString()}
        </Typography>
        {returnDate && (
          <Typography variant="body2" color="textSecondary">
            Return date: {new Date(returnDate).toLocaleDateString()}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Loan;
