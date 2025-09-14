
import React from 'react';
import StatCard from '../StatCard';

const Coupons = ({ students }) => {
  const couponStats = React.useMemo(() => {
    const total = students.length;
    const used = students.filter(s => s.used).length;
    const active = total - used;
    const usageRate = total > 0 ? ((used / total) * 100).toFixed(1) : 0;
    return { total, used, active, usageRate };
  }, [students]);

  // For a more advanced implementation, you could generate unique coupon codes here
  // and list them, allowing the admin to copy or invalidate them.

  return (
    <div className="tab-content">
      <div className="stats-grid">
        <StatCard icon="fa-solid fa-ticket-alt" title="Total Coupons Issued" value={couponStats.total} />
        <StatCard icon="fa-solid fa-check" title="Active Coupons" value={couponStats.active} />
        <StatCard icon="fa-solid fa-times" title="Used Coupons" value={couponStats.used} />
        <StatCard icon="fa-solid fa-chart-line" title="Usage Rate" value={`${couponStats.usageRate}%`} />
      </div>

      <div className="coupon-info-panel">
          <h3>Coupon System Overview</h3>
          <p>
            This section provides a summary of the coupon distribution and usage. Currently, coupons are tied directly to student registrations.
          </p>
          <ul>
            <li><strong>Total Issued:</strong> Reflects the total number of students registered.</li>
            <li><strong>Usage Rate:</strong> The percentage of registered students who have utilized their coupon.</li>
          </ul>
          {/* <p>
            <strong>Professional enhancements for a future version could include:</strong>
          </p> */}
          {/* <ul>
            <li>A system to generate, assign, and track unique coupon codes.</li>
            <li>The ability to create promotional campaigns with expiration dates.</li>
            <li>Analytics on which coupon types (Individual/Team) are most effective.</li>
          </ul> */}
      </div>
    </div>
  );
};

export default Coupons;
