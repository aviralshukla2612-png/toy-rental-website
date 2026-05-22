import React from "react";

const Notification = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Notifications</h2>

      <div className="space-y-3">
        <div className="p-3 border rounded">
          🎉 Your order has been placed
        </div>
        <div className="p-3 border rounded">
          🔔 New update available
        </div>
      </div>
    </>
  );
};

export default Notification;