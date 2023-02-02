import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import DashboardInfoBox from '../Components/Dashboard/DashboardInfoBox';
import StatusCard from '../Components/Dashboard/StatusCard';
import UserTable from '../Components/Dashboard/UserTable';
import data from '../Data/infoBoxData.json';
import { userInterface } from '../Utils/interfaces';
import { getFromLocal } from '../Utils/localStorage';
import RowOption from '../Components/Dashboard/RowOption';

const Dashboard = () => {
  const infoBoxData = data;
  const users: userInterface[] = getFromLocal("LendsqrUsers");
  const statuses = useMemo(() => ["Blacklisted", "Inactive", "Pending", "ActiveUser"], []);
  const columns = useMemo<ColumnDef<userInterface>[]>(() => [
    {
      header: 'organization',
      accessorKey: 'orgName',
      cell: (row) => row.renderValue()
    },
    {
      header: 'username',
      accessorKey: 'userName',
      cell: (row) => row.renderValue()
    },
    {
      header: 'email',
      accessorKey: 'email',
      cell: (row) => row.renderValue()
    },
    {
      header: 'phone number',
      accessorKey: 'phoneNumber',
      cell: (row) => row.renderValue()
    },
    {
      header: 'date joined',
      accessorFn: (row) => dayjs(row.createdAt).format('MMM DD, YYYY hh:mm A'),
      cell: (row) => row.renderValue()
    },
    {
      header: 'status',
      accessorFn: (row) => statuses[row.userStatus],
      cell: (row) => <StatusCard type={row.renderValue() as string} />
    },
    {
      header: ({ header }) => header.isPlaceholder = true,
      accessorKey: 'id',
      cell: (row) => <RowOption userId={row.renderValue() as string} />
    }
  ], [statuses]);

  return (
    <section className="dashboard">
      <h1 className="dashboard-title">Users</h1>
      <div className="dashboard-infobox">
        {infoBoxData.map((box, i) => <DashboardInfoBox key={i} {...box} />)}
      </div>
      <UserTable columns={columns} data={users} />
    </section>
  );
};

export default Dashboard;