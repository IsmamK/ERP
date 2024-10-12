import React, { useState } from 'react';
import { FaTruck, FaUserPlus, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icons directly
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetinaUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
});

const Delivery = () => {
  const [riders, setRiders] = useState([
    { id: 1, name: 'John Doe', status: 'Available', assignedTask: null, deliveryStatus: 'Idle', location: [51.505, -0.09] },
    { id: 2, name: 'Jane Smith', status: 'On Delivery', assignedTask: 'Pickup from Warehouse', deliveryStatus: 'In Transit', location: [51.515, -0.1] },
  ]);

  const [newRider, setNewRider] = useState('');
  const [deliveryTask, setDeliveryTask] = useState('');
  const [selectedRider, setSelectedRider] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [mapLocation, setMapLocation] = useState([51.505, -0.09]); // Default location

  const tasks = ['Pickup from Warehouse', 'Return from Store'];

  // Add a new rider
  const handleAddRider = () => {
    if (newRider.trim() !== '') {
      const newRiderData = { id: Date.now(), name: newRider, status: 'Available', assignedTask: null, deliveryStatus: 'Idle', location: [51.505, -0.09] };
      setRiders([...riders, newRiderData]);
      setNewRider('');
    }
  };

  // Assign a delivery task to a rider
  const handleAssignTask = () => {
    if (selectedRider && deliveryTask) {
      setRiders(riders.map(rider =>
        rider.id === selectedRider
          ? { ...rider, status: 'On Delivery', assignedTask: deliveryTask, deliveryStatus: 'In Transit' }
          : rider
      ));
      setSelectedRider(null);
      setDeliveryTask('');
    }
  };

  // Simulate real-time tracking of delivery status
  const updateDeliveryStatus = (riderId, status) => {
    setRiders(riders.map(rider =>
      rider.id === riderId ? { ...rider, deliveryStatus: status } : rider
    ));
  };

  // Show map popup
  const handleTrackRider = (location) => {
    setMapLocation(location);
    setMapVisible(true);
  };

  return (
    <div className='flex flex-col gap-10 dark:text-white dark:bg-black p-6'>
      <h1 className='text-4xl md:text-7xl lg:text-8xl flex'>
        <FaTruck className='mr-2' /> Delivery 
      </h1>

      {/* Add New Rider */}
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Add New Delivery Rider</h2>
        <div className='flex gap-4'>
          <input
            type='text'
            placeholder='Rider Name'
            value={newRider}
            onChange={(e) => setNewRider(e.target.value)}
            className='input input-bordered dark:bg-gray-600 dark:text-white'
          />
          <input
            type='text'
            placeholder='Username'
            value={newRider}
            onChange={(e) => setNewRider(e.target.value)}
            className='input input-bordered dark:bg-gray-600 dark:text-white'
          />
          <input
            type='password'
            placeholder='Password'
            value={newRider}
            onChange={(e) => setNewRider(e.target.value)}
            className='input input-bordered dark:bg-gray-600 dark:text-white'
          />
          <button
            onClick={handleAddRider}
            className='btn btn-primary dark:bg-green-600 dark:text-white'
          >
            <FaUserPlus className='mr-2' /> Add Rider
          </button>
        </div>
      </div>

      {/* Assign Task */}
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Assign Task to Rider</h2>
        <div className='flex gap-4'>
          <select
            value={selectedRider || ''}
            onChange={(e) => setSelectedRider(parseInt(e.target.value))}
            className='select select-bordered dark:bg-gray-600 dark:text-white'
          >
            <option value='' disabled>Select Rider</option>
            {riders.map(rider => (
              <option key={rider.id} value={rider.id}>
                {rider.name} ({rider.status})
              </option>
            ))}
          </select>

          <select
            value={deliveryTask}
            onChange={(e) => setDeliveryTask(e.target.value)}
            className='select select-bordered dark:bg-gray-600 dark:text-white'
          >
            <option value='' disabled>Select Task</option>
            {tasks.map(task => (
              <option key={task} value={task}>
                {task}
              </option>
            ))}
          </select>

          <button
            onClick={handleAssignTask}
            className='btn btn-primary dark:bg-blue-600 dark:text-white'
          >
            Assign Task
          </button>
        </div>
      </div>

      {/* Rider Status Table */}
      <div>
        <h2 className='text-2xl font-bold'>Rider Status</h2>
        <div className='overflow-x-auto'>
          <table className='table w-full dark:bg-gray-100 dark:text-white'>
            <thead className='dark:bg-gray-100'>
              <tr className='dark:bg-gray-100 dark:text-black'>
                <th>Rider Name</th>
                <th>Status</th>
                <th>Assigned Task</th>
                <th>Delivery Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {riders.map(rider => (
                <tr key={rider.id} className='dark:bg-gray-600'>
                  <td className='dark:text-white'>
                    <div className='font-bold'>{rider.name}</div>
                  </td>
                  <td className='dark:text-white'>{rider.status}</td>
                  <td className='dark:text-white'>{rider.assignedTask || 'None'}</td>
                  <td className='dark:text-white'>{rider.deliveryStatus}</td>
                  <td className='dark:text-white'>
                    {/* Simulate status update buttons */}
                    {rider.status === 'On Delivery' && (
                      <div className='flex gap-2'>
                        <button
                          className='btn btn-warning btn-sm'
                          onClick={() => handleTrackRider(rider.location)}
                        >
                          Track Rider
                        </button>
                        <button
                          className='btn btn-success btn-sm text-white'
                          onClick={() => updateDeliveryStatus(rider.id, 'Available')}
                        >
                          Make Available
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Map Popup */}
      {mapVisible && (
        <div className='fixed inset-0 flex w-fu items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Rider Location</h2>
            <MapContainer center={mapLocation} zoom={13} style={{ height: '400px', width: '600px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={mapLocation}>
                <Popup>
                  Rider is here!
                </Popup>
              </Marker>
            </MapContainer>
            <button
              onClick={() => setMapVisible(false)}
              className='btn btn-secondary mt-4'
            >
              Close Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
