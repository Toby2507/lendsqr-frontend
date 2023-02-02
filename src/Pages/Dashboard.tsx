import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import DashboardInfoBox from '../Components/Dashboard/DashboardInfoBox';
import StatusCard from '../Components/Dashboard/StatusCard';
import UserTable from '../Components/Dashboard/UserTable';
import data from '../Data/infoBoxData.json';
import { userInterface } from '../Utils/interfaces';
import { getFromLocal } from '../Utils/localStorage';

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
      accessorKey: 'createdAt',
      cell: (row) => dayjs(row.renderValue() as string).format('MMM DD, YYYY hh:mm A')
    },
    {
      header: 'status',
      accessorFn: () => statuses[Math.floor(Math.random() * 4)],
      cell: (row) => <StatusCard type={row.renderValue() as string} />
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