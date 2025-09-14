import React from 'react';
import StatCard from '../StatCard';

const Overview = ({ students }) => {
  const stats = React.useMemo(() => {
    const totalStudents = students.length;
    const individualCoupons = students.filter(s => s.couponType === 'Individual').length;
    const teamCoupons = students.filter(s => s.couponType === 'Team').length;
    const usedCoupons = students.filter(s => s.used).length;
    const activeCoupons = totalStudents - usedCoupons;

    return { totalStudents, individualCoupons, teamCoupons, usedCoupons, activeCoupons };
  }, [students]);

  return (
    <div className="tab-content">
      <div className="stats-grid">
        <StatCard icon="fa-solid fa-users" title="Total Students" value={stats.totalStudents} />
        <StatCard icon="fa-solid fa-user" title="Individual Coupons" value={stats.individualCoupons} />
        <StatCard icon="fa-solid fa-people-group" title="Team Coupons" value={stats.teamCoupons} />
        <StatCard icon="fa-solid fa-check-circle" title="Active Coupons" value={stats.activeCoupons} />
        <StatCard icon="fa-solid fa-times-circle" title="Used Coupons" value={stats.usedCoupons} />
      </div>
       {/* You can add charts or recent activity lists here for more detail */}
    </div>
  );
};

export default Overview;
