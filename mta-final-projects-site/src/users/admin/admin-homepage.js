import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();

    const handleButtonClick = (route) => {
        navigate(route);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <button onClick={() => handleButtonClick('/admin/manage-judges')}>
                    Manage Judges
                </button>
                <button onClick={() => handleButtonClick('/admin/manage-projects')}>
                    Manage Projects
                </button>
                <button onClick={() => handleButtonClick('/admin/assign-projects')}>
                    Projects Assigning
                </button>
                <button onClick={() => handleButtonClick('/admin/export-data')}>
                    Export Data to CSV
                </button>
            </div>
        </div>
    );
};

export default AdminHome;