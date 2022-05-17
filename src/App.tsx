import React from 'react';
import { CSVLink } from "react-csv";
import './App.css';

interface TableData {
  year: number
  principal: number
  interest: number
  loanBalance: number
  month: string
}

interface TableHeaders {
  label: string
  key: string
}

const App = () => {
  const fakeAmortizationData: TableData[] = [
    {
      year: 2022,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'January',
    },
    {
      year: 2022,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'February',
    },
    {
      year: 2022,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'March',
    },
    {
      year: 2022,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'April',
    },
    {
      year: 2022,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'May',
    },
    {
      year: 2022,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'June',
    },
    {
      year: 2022,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'July',
    },
    {
      year: 2022,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'August',
    },
    {
      year: 2022,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'September',
    },
    {
      year: 2022,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'October',
    },
    {
      year: 2022,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'November',
    },
    {
      year: 2022,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'December',
    },
    {
      year: 2023,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'January',
    },
    {
      year: 2023,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'February',
    },
    {
      year: 2023,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'March',
    },
    {
      year: 2023,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'April',
    },
    {
      year: 2023,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'May',
    },
    {
      year: 2023,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'June',
    },
    {
      year: 2023,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'July',
    },
    {
      year: 2023,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'August',
    },
    {
      year: 2023,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'September',
    },
    {
      year: 2023,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'October',
    },
    {
      year: 2023,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'November',
    },
    {
      year: 2023,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'December',
    },
    {
      year: 2024,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'January',
    },
    {
      year: 2024,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'February',
    },
    {
      year: 2024,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'March',
    },
    {
      year: 2024,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'April',
    },
    {
      year: 2024,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'May',
    },
    {
      year: 2024,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'June',
    },
    {
      year: 2024,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'July',
    },
    {
      year: 2024,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'August',
    },
    {
      year: 2024,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'September',
    },
    {
      year: 2024,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'October',
    },
    {
      year: 2024,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'November',
    },
    {
      year: 2024,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'December',
    },
    {
      year: 2025,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'January',
    },
    {
      year: 2025,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'February',
    },
    {
      year: 2025,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'March',
    },
    {
      year: 2025,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'April',
    },
    {
      year: 2025,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'May',
    },
    {
      year: 2025,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'June',
    },
    {
      year: 2025,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'July',
    },
    {
      year: 2025,
      principal: 12637.84,
      interest: 40931.68,
      loanBalance: 246386.68,
      month: 'August',
    },
    {
      year: 2025,
      principal: 22805.45,
      interest: 51351.55,
      loanBalance: 241194.55,
      month: 'September',
    },
    {
      year: 2025,
      principal: 28223.66,
      interest: 61545.34,
      loanBalance: 235776.34,
      month: 'October',
    },
    {
      year: 2025,
      principal: 3301.10,
      interest: 8407.90,
      loanBalance: 260698.90,
      month: 'November',
    },
    {
      year: 2025,
      principal: 7870.00,
      interest: 19451.00,
      loanBalance: 256130.00,
      month: 'December',
    },
  ]

  const fakeAmortizationHeaders: TableHeaders[] = [
    {
      label: 'Year',
      key: 'year',
    },
    {
      label: 'Month',
      key: 'month',
    },
    {
      label: 'Principal',
      key: 'principal',
    },
    {
      label: 'Interest',
      key: 'interest',
    },
    {
      label: 'Remaining loan balance',
      key: 'loanBalance'
    },
  ]

  return (
    <div>
      <CSVLink
        filename='bankrate-whatever-filename-you-want.csv' // make sure we ask about this
        data={fakeAmortizationData}
        headers={fakeAmortizationHeaders}
        id="export-to-csv"
        className='my-button'
      >
        Export as CSV
      </CSVLink>
    </div>
  )
}

export default App;
