"use client"
import Navbar from "../../components/navbar";
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function JobList() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { data: jobs, error } = useSWR('https://645e4f8b12e0a87ac0ed1b2d.mockapi.io/jobs', fetcher);

  const handleJobClick = (job: any) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  if (error) return <div>Failed to load jobs</div>;
  if (!jobs) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar/>

      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 text-black">Job List</h1>
        
        <ul>
          {jobs.map((job) => (
            <li key={job.id} className="p-2 border mb-2 flex justify-between text-black">
              {job.name}
              <div>
                <button onClick={() => handleJobClick(job)} className="bg-blue-500 text-white p-2 rounded ml-2">
                  Details
                </button>
                <button className="bg-green-500 text-white p-2 rounded ml-2">
                  Apply
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedJob && (
        <div className="absolute right-0 top-0 w-1/3 h-screen bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">{selectedJob.name} Details</h2>
          <p>{selectedJob.description}</p>
          
          <h3 className="text-lg font-bold mt-4">Edit Job</h3>
          <form>
            <label className="block mt-2">
              Job Title:
              <input type="text" className="p-2 border w-full mt-1" defaultValue={selectedJob.name} />
            </label>
            <label className="block mt-2">
              Description:
              <textarea className="p-2 border w-full mt-1" defaultValue={selectedJob.description}></textarea>
            </label>
          </form>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">{selectedJob.name}</h2>
            <p>{selectedJob.description}</p>
            <button onClick={() => setShowModal(false)} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 flex justify-end items-center px-40">
        <p className="text-black mr-20">ACME</p>
      </footer>
    </div>
  );
}
